import { IsOptional, IsPositive, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationQueryDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Type(() => Number)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsPositive()
  limit?: number = 10;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Type(() => Number)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Min(0)
  offset?: number = 0;
}
