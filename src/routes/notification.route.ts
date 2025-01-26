import { Router } from "express";
import notificationController from "../controllers/notification.controller";

const router = Router();

router.route('/')
        .post(notificationController.createNotification);

router.route('/user/:userId')
        .get(notificationController.getUnReadNotification)

router.route('/user/:userId/all')
        .get(notificationController.getAllNotifications);

router.route('/:notificationId')
        .patch(notificationController.updateNotificationStatus)
        .delete(notificationController.deleteNotification);

export default router;