export interface Broker {
  createSession(payload: any): Promise<any>;
  placeOrder(order: any): Promise<any>;
  getMarketData(symbol: string): Promise<any>;
}
