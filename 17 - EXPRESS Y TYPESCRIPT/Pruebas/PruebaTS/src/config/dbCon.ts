import "dotenv/config";
import mongoose from "mongoose";

export const dbCon = async (): Promise<void> => {

    let MONGO_URI: string | undefined = process.env.MONGO_URI;

    if (MONGO_URI) {

        await mongoose.connect(MONGO_URI);

    };

};