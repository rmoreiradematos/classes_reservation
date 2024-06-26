import { ClientOptions, Transport } from "@nestjs/microservices";

const rabbitmqRecurrencyClientOptions: ClientOptions = {
  transport: Transport.RMQ,
  options: {
    urls: [process.env.RMQ_URL],
    noAck: false,
    queue: process.env.RECURRENCY_QUEUE,
    queueOptions: {
      durable: true,
    },
  },
};

const queueOptions = [rabbitmqRecurrencyClientOptions];

export { queueOptions };
