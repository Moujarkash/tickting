import { Listener, Subjects, TicketUpdatedEvent } from '@modtickets/common';
import { Message } from 'node-nats-streaming';
import { Ticket } from '../../models/ticket';
import { queueGroupName } from './queue-group-name';

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
  queueGroupName = queueGroupName;

  async onMessage(
    data: { id: string; title: string; price: number; userId: string, version: number },
    msg: Message
  ) {
    const ticket = await Ticket.findByEvent(data);

    if (!ticket) {
      throw new Error('Ticket not found');
    }

    ticket.set({ title: data.title, price: data.price });
    await ticket.save();

    msg.ack();
  }
}
