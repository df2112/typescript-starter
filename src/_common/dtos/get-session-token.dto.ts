import { IsString } from 'class-validator';

export class GetSessionTokenDto {
  @IsString()
  broker!: string;
}
