import { Consumer } from 'kafka-node';
import kafkaClient from '../kafka';
import NotificationModel from '../../models/notification.model';


const likeConsumer = new Consumer(
  kafkaClient,
  [{ topic: 'like-topic', partition: 0 }],
  { autoCommit: true }
);

likeConsumer.on('message', async (message) => {
  console.log('Received Like notification:', message.value);

  try {
    // Parse the message and create a notification entry in your database
    const notification = JSON.parse(message.value as string);

    await NotificationModel.create(
        {
            senderId : notification.senderId,
            receiverId : notification.receiverId,
            isRead : false,
            message : `${notification.username} liked your video`
        }
    )
    console.log('Subscribe notification saved to DB');
  } catch (error) {
    console.error('Error saving Subscribe notification:', error);
  }
});

likeConsumer.on('error', (err) => {
  console.error('Like Consumer error:', err);
});


export default likeConsumer;