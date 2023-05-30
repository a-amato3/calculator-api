import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorController } from './calculator.controller';
import { CalculatorRequest } from './calculator.dto';

describe('CalculatorController', () => {
  let controller: CalculatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculatorController],
    }).compile();

    controller = module.get<CalculatorController>(CalculatorController);
  });

  describe('calculate', () => {
    it('should perform addition correctly', () => {
      const request: CalculatorRequest = {
        operand1: 1,
        operand2: 2,
        operation: '+',
      };

      const result = controller.calculate(request);

      expect(result.solution).toBe(3);
    });

    it('should perform subtraction correctly', () => {
      const request: CalculatorRequest = {
        operand1: 5,
        operand2: 3,
        operation: '-',
      };

      const result = controller.calculate(request);

      expect(result.solution).toBe(2);
    });

    it('should perform multiplication correctly', () => {
      const request: CalculatorRequest = {
        operand1: 4,
        operand2: 2,
        operation: '*',
      };

      const result = controller.calculate(request);

      expect(result.solution).toBe(8);
    });

    it('should perform division correctly', () => {
      const request: CalculatorRequest = {
        operand1: 10,
        operand2: 2,
        operation: '/',
      };

      const result = controller.calculate(request);

      expect(result.solution).toBe(5);
    });

    it('should throw an error for an invalid operation', () => {
      const request: CalculatorRequest = {
        operand1: 3,
        operand2: 2,
        operation: '%',
      };

      expect(() => controller.calculate(request)).toThrowError(
        'Invalid operation',
      );
    });
  });
});
