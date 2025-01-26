import { Consumer } from 'kafka-node';
import kafkaClient from '../kafka';
import NotificationModel from '../../models/notification.model';


const subscribeConsumer = new Consumer(
  kafkaClient,
  [{ topic: 'subscribe-topic', partition: 0 }],
  { autoCommit: true }
);

subscribeConsumer.on('message', async (message) => {
  console.log('Received Subscribe notification:', message.value);

  try {
    // Parse the message and create a notification entry in your database
    const notification = JSON.parse(message.value as string);

    await NotificationModel.create(
        {
            senderId : notification.senderId,
            receiverId : notification.receiverId,
            isRead : false,
            message : `${notification.username} subscribed your channel`
        }
    )
    console.log('Subscribe notification saved to DB');
  } catch (error) {
    console.error('Error saving Subscribe notification:', error);
  }
});

subscribeConsumer.on('error', (err) => {
  console.error('Subscribe Consumer error:', err);
});
