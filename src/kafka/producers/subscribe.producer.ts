import { Producer } from "kafka-node";
import kafkaClient from "../kafka";

const subscribeProducer = new Producer(kafkaClient);

const sendSubscriptionNotification = async (payload : object) => {
  const message = JSON.stringify(payload);

  subscribeProducer.send(
    [
      {
        topic : 'subscription-topic',
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

export default sendSubscriptionNotification;

