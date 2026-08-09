import { Schema } from 'mongoose';
export declare const userSchema: Schema<{
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
}, import("mongoose").Model<{
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
}, any, any, any, any, any, {
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
}>, {}, {}, {}, {}, {
    strict: false;
}, {
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
}, import("mongoose").Document<unknown, {}, {
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, Omit<import("mongoose").DefaultSchemaOptions, "strict"> & {
    strict: false;
}> & {
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
} & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, {
    fullName: {
        type: StringConstructor;
        required: true;
    };
    email: {
        type: StringConstructor;
        required: true;
    };
    password: {
        type: StringConstructor;
        required: true;
    };
    role: {
        type: StringConstructor;
        enum: ("member" | "trainer")[];
        default: "member";
    };
}, {
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const Users: import("mongoose").Model<{
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, Omit<import("mongoose").DefaultSchemaOptions, "strict"> & {
    strict: false;
}> & {
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
} & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, Schema<{
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
}, import("mongoose").Model<{
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
}, any, any, any, any, any, {
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
}>, {}, {}, {}, {}, {
    strict: false;
}, {
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
}, import("mongoose").Document<unknown, {}, {
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, Omit<import("mongoose").DefaultSchemaOptions, "strict"> & {
    strict: false;
}> & {
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
} & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, {
    fullName: {
        type: StringConstructor;
        required: true;
    };
    email: {
        type: StringConstructor;
        required: true;
    };
    password: {
        type: StringConstructor;
        required: true;
    };
    role: {
        type: StringConstructor;
        enum: ("member" | "trainer")[];
        default: "member";
    };
}, {
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
}>, {
    fullName: string;
    email: string;
    password: string;
    role: "member" | "trainer";
} & {
    _id: import("mongoose").Types.ObjectId;
}>;
//# sourceMappingURL=user-model.d.ts.map