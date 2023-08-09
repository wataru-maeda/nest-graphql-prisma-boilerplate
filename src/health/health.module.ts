import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './health.controller';
import { ConfigModule } from '../config/config.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [TerminusModule, HttpModule, ConfigModule, PrismaModule],
  controllers: [HealthController],
})
export class HealthModule {}
