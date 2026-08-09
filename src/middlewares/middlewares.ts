import type { Request , Response , NextFunction } from "express";
// import { json } from "express";
import Jwt from "jsonwebtoken";
import type { Types } from "mongoose";

//this function checks if there is a field null
export const checkuserInfoSignUp = (req:Request , res:Response , next:NextFunction)=>{
    const {fullName , email , password , role} = req.body; 

    if(!fullName || !email || !password || !role){
       return res.status(400).send("You are missing a field");
    }

    next();
}

export const checkuserInfoSignIn = (req:Request , res:Response , next:NextFunction)=>{
    const { email , password } = req.body; 

    if(!email || !password ){
       return res.status(400).send("You are missing a field");
    }

    next();
}


export const checkClassSessionInfo = (req:Request , res:Response , next:NextFunction)=>{
    const { title ,  timeSlot , status , capacity} = req.body;

    if(!title || !timeSlot || !status || !capacity ){
       return res.status(400).send("You are missing a field");
    }

    next();
}


export const validateTrainerOnly = async(req:Request , res:Response , next:NextFunction)=>{
    const {token} = req.cookies;
    const decoded =await Jwt.verify(token , process.env.JWT_SECRET) as {_id:Types.ObjectId , fullName:string , role:string};
    const {role} = decoded;
    if(!role){
      return res.status(400).send("You are missing role field");
    }else if(role !== 'trainer'){
       return res.status(401).send("this action is for trainers only");
    }

    next();
}

export const validateMemberOnly = async(req:Request , res:Response , next:NextFunction)=>{
    const {token} = req.cookies;
    const decoded =await Jwt.verify(token , process.env.JWT_SECRET) as {_id:Types.ObjectId , fullName:string , role:string};
    const {role} = decoded;
    if(!role){
      return res.status(400).send("You are missing role field");
    }else if(role !== 'member'){
      return res.status(401).send("this page is for members only");
    }

    next();
}

export const compareTrainerNames = (req:Request , res:Response , next:NextFunction)=>{
    const {token} = req.cookies;
    const {fullName} = req.body;

    if(fullName !== token.fullName){
      return res.status(400).send("You cannot change other tariner sessions");
    }

    next();
}

export const validateToken =  (req:Request , res:Response , next:NextFunction)=>{
    const {token} = req.cookies;

    if(!token){
      return res.status(400).send("There is no token");
    }

    next();
} 