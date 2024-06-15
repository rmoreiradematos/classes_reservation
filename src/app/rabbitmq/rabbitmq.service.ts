import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import * as amqp from "amqp-connection-manager";

@Injectable()
export class RabbitMQService implements OnModuleInit, OnModuleDestroy {
  private connection: amqp.AmqpConnectionManager;

  onModuleInit() {
    this.connection = amqp.connect(["amqp://localhost:5672"]);
  }

  onModuleDestroy() {
    this.connection.close();
  }

  // Método para enviar mensagens
  async sendToQueue(queue: string, message: any) {
    const channelWrapper = this.connection.createChannel({
      json: true,
      setup: (channel: any) => channel.assertQueue(queue),
    });

    await channelWrapper.sendToQueue(queue, message);
  }
}
