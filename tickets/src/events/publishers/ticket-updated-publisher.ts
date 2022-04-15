import { Publisher, Subjects, TicketUpdatedEvent } from '@modtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
