import {ClassSession} from '../models/class-session-model.js'
import { Booking } from '../models/booking-model.js';
import  { Types } from 'mongoose'
import  Jwt  from 'jsonwebtoken';
import type { Request , Response } from 'express';

// const isBooked =(decoded:any , ClassSessionId:Types.ObjectId):boolean[]=>{
//     //search and check if the booking exists
//     let isExist:boolean = false;
//     let isCancelled:boolean = false;
   

//     requiredBooking.then(data => {
//       if(data){
//         isExist = true;
//         if(data.status === "canceled"){
//           isCancelled = true;
//         }
//       }
//     });

//     return [isExist , isCancelled];
// }

const createSpot = async (decoded:any , ClassSessionId:Types.ObjectId) =>{
  try{
    const newSpot = await Booking.create({
     session_refernce:ClassSessionId , 
     member: decoded.fullName,
     status: 'booked'
  });
  
  if(!newSpot){
    throw new Error("the new spot is not created");
  }

  }catch(err){
    console.error("There is an error in create spot function: " , err);
  }
}

export const availableClassSessions = async ( req:Request , res:Response) => {
  try{
    const availableSessions = await ClassSession.find({status: 'available'}); 

    if(!availableSessions){
      res.status(404).send('No availavle class sessions found');
      return;
    }
    res.status(200).send({
      msg: "Available class sessions: ",
      data: availableSessions
    });

  }catch(err){
    console.error("There is an error in availableClassSessions: " , err);
  }
  
}

export const bookSpot = async ( req:Request , res:Response) =>{
  
  try{
  //we need information about the user -> use the cookie
    const {token} = req.cookies;

    const decoded = await Jwt.verify(token , process.env.JWT_SECRET) as {_id:Types.ObjectId , fullName:string , role:string};
  
    //we need to check  if the session is available or not
     const classSession_id = req.body._id;
     const requiredClassSession = await ClassSession.findById(classSession_id);

      if(!requiredClassSession){
        return res.status(404).send("class session not found");
      }
      
      //check if the user booked the required session before
      // const [isExist , isCancelled] = isBooked(decoded , classSession_id);

       const requiredBooking = await Booking.findOne({session_refernce: classSession_id, 
          member: decoded.fullName
        });

        if(requiredBooking){
          if(requiredBooking.status === "canceled"){
            requiredBooking.status = "booked";
            requiredBooking.save();

            return res.status(201).send({
              msg : "created successfully" ,
              data: requiredBooking
            })
          }else{
              return res.status(400).send("this session cannot be booked twice");
          }
        }

      const availableSeats = requiredClassSession.capacity;

      if(availableSeats === 0){
        return res.status(403).send("There are no available seats");
      }

      //take a spot and decrease the number of spots  and save the information
      const newSpot = await createSpot(decoded , classSession_id);

      requiredClassSession.capacity--;

      requiredClassSession.save();
      //make a new booking information

      res.status(201).send({
        msg: "Spot created successfully" , 
        data : newSpot
      });
  }catch(err){
      console.error("There is an error in bookSpot function: " , err);
  }
  
}


export const cancelBooking = async ( req:Request , res:Response) =>{
  //read the reference and member name
  const {session_refernce} = req.body;

  if(!session_refernce){
   return res.status(400).send("session reference not found");
  }
  
  //read cookies
  const {token} = req.cookies;
  

  try{
    const decoded = await Jwt.verify(token , process.env.JWT_SECRET) as {_id:Types.ObjectId , fullName:string , role:string};
    const {fullName} = decoded;
    //search for this spot
  const requiredBooking = await Booking.findOne({session_refernce: session_refernce , member: fullName});

  if(!requiredBooking){
   return res.status(404).send("Booking not found");
  }

  let status = requiredBooking.status;

  if(status === 'canceled'){
   return res.status(400).send('Booking is already canceled');
  }

  status = 'canceled';

  const requiredClassSession = await ClassSession.findById(session_refernce);

  requiredClassSession.capacity++;

  requiredBooking.status = status;

  requiredBooking.save();
  requiredClassSession.save();

  res.status(200).send({
    msg: "Booking is cancelled",
    data:requiredBooking
  });
  }catch(err){
    console.error("There is an error in cancelBooking" , err);
  }
  
}
