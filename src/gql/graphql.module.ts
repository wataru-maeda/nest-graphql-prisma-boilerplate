import { Module } from '@nestjs/common';
import { GraphQLModule as GQLModule } from '@nestjs/graphql';
import { ConfigService } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    GQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        autoSchemaFile: 'src/gql/schema.gql',
        context: ({ req, res }) => ({ req, res }),
        playground: configService.get<string>('NODE_ENV') === 'dev',
      }),
    }),
  ],
})
export class GraphQLModule {}
