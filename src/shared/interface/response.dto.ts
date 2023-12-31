import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Dto for the response
 */
export class ApiResponseDto<T = void> {
  @ApiProperty()
  success: boolean;

  @ApiProperty({ example: 200 })
  code: number;

  @ApiPropertyOptional()
  data?: T;

  @ApiProperty({ example: 1617826799860 })
  timestamp: number;
}

export class ApiListResponseDto<T> {
  @ApiProperty()
  success: boolean;

  @ApiProperty({ example: 200 })
  code: number;

  @ApiProperty({ isArray: true })
  data: T[];

  @ApiProperty({ example: 1617826799860 })
  timestamp: number;
}

export class ApiErrorDto {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  code: number;

  @ApiProperty()
  errorId: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  error: unknown;

  @ApiProperty()
  stack: string[];

  @ApiProperty()
  timestamp: number;

  @ApiProperty()
  path: string;
}
