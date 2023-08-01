import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from '../../product/entity/product.entity';

export type StoreDocument = HydratedDocument<Store>;

@Schema()
export class Store {
  @Prop({ required: true })
  name: string;

  @Prop([{type: mongoose.Schema.Types.ObjectId, ref: Product.name, required: true}])
  products: Product[];

  @Prop({ required: true })
  adress: string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
