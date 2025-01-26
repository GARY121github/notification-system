import { Request, Response } from 'express';
import sendLikeNotification from "../kafka/producers/like.producer";
import sendSubscriptionNotification from "../kafka/producers/subscribe.producer";

class NotificationController {
    public createNotification = async (req: Request, res: Response) => {
        try {
            const { senderId, receiverId, type, username } = req.body;

            if (type === 'like') {
                await sendLikeNotification({
                    senderId,
                    receiverId,
                    username
                });
            }
            else if (type === 'subscription') {
                await sendSubscriptionNotification({
                    senderId,
                    receiverId,
                    username
                })
            }

            res.status(201).json({
                message: 'Notification Created Successfully'
            });
        } catch (error) {
            console.log("Error", error);
        }
    }

    // :TODO
    public getAllNotifications = async () => {

    }

    // :TODO
    public getUnReadNotification = async () => {

    }

    // :TODO
    public updateNotificationStatus = async () => {

    }

    // :TODO
    public deleteNotification = async () => {

    }
}

export default new NotificationController();
