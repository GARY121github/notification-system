import mongoose, { Document, Schema, Types } from "mongoose";


export interface NotificationI extends Document {
    senderId: Types.ObjectId;
    receiverId: Types.ObjectId;
    // type: string;
    isRead : boolean;
    message : string;
}

const notificationSchema = new Schema<NotificationI>(
    {
        senderId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        receiverId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        // type: {
        //     enum: ['like', 'subscribe']
        // },
        isRead : {
            type : Boolean,
            default : false
        },
        message : {
            type : String,
            trim : true
        }
    },
    {
        timestamps: true
    }
);

const NotificationModel = mongoose.model<NotificationI>('Notification' , notificationSchema);

export default NotificationModel;


