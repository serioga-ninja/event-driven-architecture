export type MessageBrokerConfig = {
  MESSAGE_BROKER: 'kafka' | 'rmq';
  MESSAGE_BROKER_URLS: string; // comma-separated list of URLs
};
