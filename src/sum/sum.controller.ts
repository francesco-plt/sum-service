import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { SumService } from './sum.service';

@ApiTags('Sum')
@Controller('sum')
export class SumController {
  constructor(private readonly SumService: SumService) {}
  @ApiOperation({ summary: 'Calculate the sum of two numbers' })
  @ApiQuery({ name: 'num1', type: Number, example: 5 })
  @ApiQuery({ name: 'num2', type: Number, example: 3 })
  @Get()
  getSum(@Query('num1') num1: string, @Query('num2') num2: string): number {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);
    return this.SumService.calculateSum(parsedNum1, parsedNum2);
  }
}
