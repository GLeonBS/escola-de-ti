import { Module } from '@nestjs/common';

import { APP_PIPE, APP_FILTER, BaseExceptionFilter } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://0.0.0.0/nest'),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_PIPE, useClass: ValidationPipe },
    { provide: APP_FILTER, useClass: BaseExceptionFilter },
  ],
})
export class AppModule {}
