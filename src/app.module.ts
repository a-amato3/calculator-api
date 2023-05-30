import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CalculatorModule } from './calculator/calculator.module';
import { AppService } from './app.service';

@Module({
  imports: [CalculatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
