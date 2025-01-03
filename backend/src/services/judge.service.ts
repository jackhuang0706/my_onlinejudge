import amqp from 'amqplib';
import { Submission } from '../types';

export class JudgeService {
  private channel: amqp.Channel;

  async connect() {
    const connection = await amqp.connect(process.env.RABBITMQ_URL!);
    this.channel = await connection.createChannel();
    await this.channel.assertQueue('judge_queue');
  }

  async submitForJudging(submission: Submission) {
    await this.channel.sendToQueue(
      'judge_queue',
      Buffer.from(JSON.stringify(submission))
    );
  }
} 