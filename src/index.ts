import app from "./app";
import config from "./config/config";
import connectDB from "./db";

connectDB()
    .then(() => {
        app.listen(config.PORT , () => {
            console.log(`Notification Server Started at ${config.PORT}`);
        })
    })
    .catch((err) => {
        console.log("Error while connecting to Database" , err);
        process.exit(1);
    })