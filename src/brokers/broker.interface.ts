export interface Broker {
  placeOrder(order: any): Promise<any>;
  getMarketData(symbol: string): Promise<any>;
}
