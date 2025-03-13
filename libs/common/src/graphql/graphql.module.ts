import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DynamicModule, Module } from '@nestjs/common';
import { GraphQLModule as GQM } from '@nestjs/graphql';
import { join } from 'path';

@Module({})
export class GraphQLModule {
  static register(moduleName: string): DynamicModule {
    return {
      module: GraphQLModule,
      imports: [
        GQM.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: join(__dirname, `schemas/${moduleName}.gql`),
        }),
      ],
    };
  }
}
