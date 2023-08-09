import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from './config/config.module';
import { GraphQLModule } from './gql/graphql.module';
import { PostModule } from './post/post.module';
import { HealthModule } from './health/health.module';
import { ThrottleModule } from './throttle/throttle.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule,
    ThrottleModule,
    PrismaModule,
    GraphQLModule,
    HealthModule,
    UserModule,
    PostModule,
  ],
  providers: [PrismaService, AppService],
  controllers: [AppController],
})
export class AppModule {}
