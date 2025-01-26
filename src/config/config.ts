interface ConfigI {
    DB_URI : string;
    PORT : number;
    KAFKA_HOST: string;
    KAFKA_CLIENT_ID : string;
}

const config : ConfigI = {
    DB_URI : process.env.DB_URI || '',
    PORT : Number(process.env.PORT) || 3000,
    KAFKA_HOST : process.env.KAFKA_HOST || 'localhost:9092',
    KAFKA_CLIENT_ID : process.env.KAFKA_CLIENT_ID || 'notification'
}

export default config;