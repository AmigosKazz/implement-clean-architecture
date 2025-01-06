import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { TypeormModule } from './infrastructure/config/typeorm/typeorm.module';
import { LoggerModule } from './infrastructure/logger/logger.module';

@Module({
  imports: [EnvironmentConfigModule, TypeormModule, LoggerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}