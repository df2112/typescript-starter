export interface Order {
  symbol: string;
  quantity: number;
  price: number;
  orderType: 'market' | 'limit';
  broker: string;
}
