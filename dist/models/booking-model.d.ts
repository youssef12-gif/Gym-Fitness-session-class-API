import mongoose from 'mongoose';
import { Schema } from 'mongoose';
export declare const Booking: mongoose.Model<{
    member: string;
    status: "booked" | "canceled";
    session_refernce: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    member: string;
    status: "booked" | "canceled";
    session_refernce: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
}, {}, Omit<mongoose.DefaultSchemaOptions, "strict"> & {
    strict: false;
}> & {
    member: string;
    status: "booked" | "canceled";
    session_refernce: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, mongoose.Schema<{
    member: string;
    status: "booked" | "canceled";
    session_refernce: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Model<{
    member: string;
    status: "booked" | "canceled";
    session_refernce: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
}, any, any, any, any, any, {
    member: string;
    status: "booked" | "canceled";
    session_refernce: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
}>, {}, {}, {}, {}, {
    strict: false;
}, {
    member: string;
    status: "booked" | "canceled";
    session_refernce: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, {
    member: string;
    status: "booked" | "canceled";
    session_refernce: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
}, {}, Omit<mongoose.DefaultSchemaOptions, "strict"> & {
    strict: false;
}> & {
    member: string;
    status: "booked" | "canceled";
    session_refernce: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, {
    session_refernce: {
        type: typeof Schema.Types.ObjectId;
        required: true;
    };
    member: {
        type: StringConstructor;
        required: true;
    };
    status: {
        type: StringConstructor;
        enum: ("booked" | "canceled")[];
        required: true;
    };
}, {
    member: string;
    status: "booked" | "canceled";
    session_refernce: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
}>, {
    member: string;
    status: "booked" | "canceled";
    session_refernce: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
}>;
//# sourceMappingURL=booking-model.d.ts.map