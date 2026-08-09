
import {model , Schema} from 'mongoose'


export const userSchema = Schema.create({
    // _id: {
    //     type: Schema.Types.ObjectId,
    // },
    fullName: {
        type: String , 
        required: true
    } , 
    email:{
        type: String , 
        required: true
    } , 
    password: {
        type: String , 
        required: true
    } , 
    role: {
        type: String , 
        enum: ['member' , 'trainer'] ,
        default: 'member'
    }
}, {strict: false});

export const Users = model('Users' , userSchema);