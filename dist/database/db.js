import mongoose from "mongoose";
export const connectDb = () => {
    const mongo_uri = process.env.MONGODB_URI;
    mongoose.connect(mongo_uri)
        .then(data => console.log("Connected successfully"))
        .catch(err => console.error(err));
};
//# sourceMappingURL=db.js.map