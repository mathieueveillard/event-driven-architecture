import createInMemoryEventBroker, { BrokerEvent } from ".";

describe("Test of createInMemoryEventBroker()", () => {
  test("One single subscriber", () => {
    // GIVEN
    const { subscribe, publish } = createInMemoryEventBroker();
    const subscriber = jest.fn();
    subscribe(subscriber);

    // WHEN
    const event: BrokerEvent<"SomethingHappened", {}> = {
      type: "SomethingHappened",
      payload: {},
    };
    publish(event);

    // THEN
    expect(subscriber).toHaveBeenCalledWith(event);
  });

  test("Many subscribers", () => {
    // GIVEN
    const { subscribe, publish } = createInMemoryEventBroker();
    const firstSubscriber = jest.fn();
    const secondSubscriber = jest.fn();
    subscribe(firstSubscriber);
    subscribe(secondSubscriber);

    // WHEN
    const event: BrokerEvent<"SomethingHappened", {}> = {
      type: "SomethingHappened",
      payload: {},
    };
    publish(event);

    // THEN
    expect(firstSubscriber).toHaveBeenCalledWith(event);
    expect(secondSubscriber).toHaveBeenCalledWith(event);
  });
});
