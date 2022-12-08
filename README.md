# event-driven-architecture

## Fair trade for the winners!

The Fair Trade Company buys products from local producers (e.g. coffee, rice) and resells them throughout a single e-commerce platform.

## Strategical DDD

There are many bounded contexts, but we're going to focus on 3 of them:

- Sales
- Stock Management
- Purchasing

## Events

|                     | Sales    | Stock Management | Purchasing |
| ------------------- | -------- | ---------------- | ---------- |
| ProductSold         | emits    | consumes         |            |
| ProductStockUpdated | consumes | emits            | consumes   |
| ProductPurchased    |          | consumes         | emits      |
| …                   |          |                  |            |

## Your task

Your task is to write a very basic implementation of these contexts: they react to events, emit other events and gather useful information for later use.

## Architectural hint

- Modular monolith is your friend!
- In memory databases will work fine.
- Also, a very basic (no topic) synchronous `InMemoryEventBroker` is provided.
