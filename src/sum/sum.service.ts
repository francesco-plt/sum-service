import { Injectable } from '@nestjs/common';

@Injectable()
export class SumService {
  calculateSum(num1: number, num2: number): number {
    return num1 + num2;
  }
}
