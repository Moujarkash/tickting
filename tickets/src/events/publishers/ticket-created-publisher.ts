import { Publisher, Subjects, TicketCreatedEvent } from '@modtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
