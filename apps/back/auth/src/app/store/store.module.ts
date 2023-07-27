import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { Store, StoreSchema } from './entity/store.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [StoreController],
  providers: [StoreService],
  imports: [MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }])],
})
export class StoreModule {}
