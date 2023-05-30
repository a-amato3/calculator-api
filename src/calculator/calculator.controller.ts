import { Controller, Post, Body } from '@nestjs/common';
import { CalculatorRequest, CalculatorResponse } from './calculator.dto';

@Controller('calculator')
export class CalculatorController {
  @Post('/calculate')
  calculate(@Body() request: CalculatorRequest): CalculatorResponse {
    const { operand1, operand2, operation } = request;
    let solution: number;

    // Performs the appropriate operation based on the requested operation
    switch (operation) {
      case '+':
        solution = operand1 + operand2;
        break;
      case '-':
        solution = operand1 - operand2;
        break;
      case '*':
        solution = operand1 * operand2;
        break;
      case '/':
        solution = operand1 / operand2;
        break;
      default:
        throw new Error('Invalid operation');
    }

    const problem = {
      op1: operand1,
      op2: operand2,
      operation: operation,
    };

    const response: CalculatorResponse = {
      problem: problem,
      solution: solution,
    };

    return response;
  }
}
