import { Producer } from "kafka-node";
import kafkaClient from "../kafka";

const likeProducer = new Producer(kafkaClient);

const sendLikeNotification = async (payload : object) => {
  const message = JSON.stringify(payload);

  likeProducer.send(
    [
      {
        topic : 'like-topic',
        messages : [message]
      }
    ],
    (err , data) => {
      if(err){
        console.log('Error while sending message to kafka : ' , err);
      }
      else{
        console.log('Message sent to Kafka : ' , data);
      }
    }
  )
}

export default sendLikeNotification;

