import { IsString, IsNumber, IsEnum, IsOptional } from 'class-validator';
import { OrderType } from '../enums/order-type.enum';

export class PlaceOrderDto {
  @IsString()
  symbol!: string;

  @IsNumber()
  quantity!: number;

  @IsNumber()
  price!: number;

  @IsEnum(OrderType)
  orderType!: OrderType;

  @IsString()
  broker!: string;
}
