import { OrderCancelledEvent, Publisher, Subjects } from '@modtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
