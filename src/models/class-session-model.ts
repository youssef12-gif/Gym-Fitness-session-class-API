
import {model , Schema} from 'mongoose'

const ClassSessionSchema = Schema.create({
    title: {
        type: String, 
        required: true
    } , 
    trainer: {//we have an idea here to take a reference to a user 
        type: String, 
        required: true
    } ,
    timeSlot: {
        type: Number,
        required:true
    },
    status:{
        type:String,
        enum:['available' , 'not available'],
        required: true
    },
    capacity: {
        type: Number,
        required:true
    },
}, {strict: false});

export const ClassSession = model('ClassSession' , ClassSessionSchema);