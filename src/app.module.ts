import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScenarioModule } from './modules/scenario/scenario.module';
import { OptionModule } from './modules/option/option.module';

@Module({
  imports: [ScenarioModule, OptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
