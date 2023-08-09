import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  MemoryHealthIndicator,
  DiskHealthIndicator,
  HttpHealthIndicator,
  PrismaHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';
import { ConfigService } from '@nestjs/config';
import { SkipThrottle } from '@nestjs/throttler';
import { PrismaService } from '../prisma/prisma.service';

@SkipThrottle()
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private prisma: PrismaHealthIndicator,
    private memory: MemoryHealthIndicator,
    private disk: DiskHealthIndicator,
    private configService: ConfigService,
    private prismaService: PrismaService,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => {
        const port = this.configService.get<string>('port');
        return this.http.pingCheck('health_check', `http://localhost:${port}`);
      },
      () => this.prisma.pingCheck('prisma_check', this.prismaService),
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
      () =>
        this.disk.checkStorage('storage_check', {
          path: '/',
          thresholdPercent: 0.5,
        }),
    ]);
  }
}
