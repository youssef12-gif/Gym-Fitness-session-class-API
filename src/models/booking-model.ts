import mongoose from 'mongoose';
import { model , Schema} from 'mongoose'

const BookingSchema = Schema.create({
   session_refernce: {
     type: mongoose.Schema.Types.ObjectId,
     required: true
   }, 
   member: {
     type:String , 
     required: true
   }, 
   status:{
    type: String,
    enum: ['booked' , 'canceled'] , 
    required: true
   }

}, {strict: false});

export const Booking = model('Booking' , BookingSchema);