import { KafkaClient } from 'kafka-node';
import config from '../config/config';

const kafkaClient = new KafkaClient({ 
  clientId : config.KAFKA_CLIENT_ID,
  kafkaHost: config.KAFKA_HOST 
});


export default kafkaClient;
