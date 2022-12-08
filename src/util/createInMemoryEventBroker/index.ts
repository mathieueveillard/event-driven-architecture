export type BrokerEvent<Type extends string, Payload> = {
  type: Type;
  payload: Payload;
};

type AnyBrokerEvent = BrokerEvent<string, any>;

export type Subscriber = (event: AnyBrokerEvent) => void;

const createInMemoryEventBroker = <AnyBrokerEvent>() => {
  const subscribers: Subscriber[] = [];

  const subscribe = (subscriber: Subscriber): void => {
    subscribers.push(subscriber);
  };

  const publish = <Type extends string, Payload>(event: BrokerEvent<Type, Payload>): void => {
    subscribers.forEach((subscriber) => subscriber(event));
  };

  return {
    subscribe,
    publish,
  };
};

export default createInMemoryEventBroker;
