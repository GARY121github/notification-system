import mongoose from "mongoose";
import config from "../config/config";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(config.DB_URI);
        console.log(`connected to database!! :: host id -> ${connectionInstance.connection.host}`);
    }
    catch (err : any) {
        console.error("Error in connecting :: " + err);
        process.exit(1);
    }
}

export default connectDB;