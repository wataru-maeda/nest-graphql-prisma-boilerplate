import { Module } from '@nestjs/common';
import { ConfigModule as ConfigurationModule } from '@nestjs/config';
import { loadConfig } from './config';

@Module({
  imports: [
    ConfigurationModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [loadConfig],
    }),
  ],
})
export class ConfigModule {}
