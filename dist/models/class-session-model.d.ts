import { Schema } from 'mongoose';
export declare const ClassSession: import("mongoose").Model<{
    trainer: string;
    title: string;
    timeSlot: number;
    status: "available" | "not available";
    capacity: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    trainer: string;
    title: string;
    timeSlot: number;
    status: "available" | "not available";
    capacity: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, Omit<import("mongoose").DefaultSchemaOptions, "strict"> & {
    strict: false;
}> & {
    trainer: string;
    title: string;
    timeSlot: number;
    status: "available" | "not available";
    capacity: number;
} & {
    _id: import("mongoose").Types.ObjectId;
} & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, Schema<{
    trainer: string;
    title: string;
    timeSlot: number;
    status: "available" | "not available";
    capacity: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}, import("mongoose").Model<{
    trainer: string;
    title: string;
    timeSlot: number;
    status: "available" | "not available";
    capacity: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}, any, any, any, any, any, {
    trainer: string;
    title: string;
    timeSlot: number;
    status: "available" | "not available";
    capacity: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}>, {}, {}, {}, {}, {
    strict: false;
}, {
    trainer: string;
    title: string;
    timeSlot: number;
    status: "available" | "not available";
    capacity: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}, import("mongoose").Document<unknown, {}, {
    trainer: string;
    title: string;
    timeSlot: number;
    status: "available" | "not available";
    capacity: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, Omit<import("mongoose").DefaultSchemaOptions, "strict"> & {
    strict: false;
}> & {
    trainer: string;
    title: string;
    timeSlot: number;
    status: "available" | "not available";
    capacity: number;
} & {
    _id: import("mongoose").Types.ObjectId;
} & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, {
    title: {
        type: StringConstructor;
        required: true;
    };
    trainer: {
        type: StringConstructor;
        required: true;
    };
    timeSlot: {
        type: NumberConstructor;
        required: true;
    };
    status: {
        type: StringConstructor;
        enum: ("available" | "not available")[];
        required: true;
    };
    capacity: {
        type: NumberConstructor;
        required: true;
    };
}, {
    trainer: string;
    title: string;
    timeSlot: number;
    status: "available" | "not available";
    capacity: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}>, {
    trainer: string;
    title: string;
    timeSlot: number;
    status: "available" | "not available";
    capacity: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}>;
//# sourceMappingURL=class-session-model.d.ts.map