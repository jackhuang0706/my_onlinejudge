import amqp from 'amqplib';
import Docker from 'dockerode';
import { Submission } from './types';

const docker = new Docker();

export class JudgeWorker {
  private channel: amqp.Channel;

  async connect() {
    const connection = await amqp.connect(process.env.RABBITMQ_URL!);
    this.channel = await connection.createChannel();
    await this.channel.assertQueue('judge_queue');
  }

  async start() {
    this.channel.consume('judge_queue', async (msg) => {
      if (msg) {
        const submission: Submission = JSON.parse(msg.content.toString());
        await this.judge(submission);
        this.channel.ack(msg);
      }
    });
  }

  private async judge(submission: Submission) {
    // 1. Create container for compilation
    // 2. Create container for running tests
    // 3. Execute tests and collect results
    // 4. Update submission status
  }
} 