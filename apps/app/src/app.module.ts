import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { SecurityModule } from './security/security.module';
import { appConfigSchema } from './app-config.schemas';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: appConfigSchema,
      envFilePath: './apps/app/.env',
    }),
    DatabaseModule,
    UsersModule,
    SecurityModule,
    RouterModule.register([
      {
        path: 'users',
        module: UsersModule,
        children: [
          {
            path: 'security',
            module: SecurityModule,
          },
        ],
      },
    ]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
