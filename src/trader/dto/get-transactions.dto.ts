import { IsIn, IsDateString, IsOptional } from 'class-validator';

type Duration = '0d' | '3d' | '1m' | '3m';

export class GetTransactionsDto {
  @IsOptional()
  @IsIn(['0d', '3d', '1m', '3m'])
  duration: Duration;

  @IsOptional()
  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate: string;
}
