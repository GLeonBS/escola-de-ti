import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Store } from './entity/store.entity';
import { Model } from 'mongoose';

@Injectable()
export class StoreService {

  constructor(@InjectModel(Store.name) private storeModel: Model<Store>) { }

  async create(createStoreDto: CreateStoreDto) {
    const createdStore = this.storeModel.create(createStoreDto)
    return createdStore
  }

  async findAll() {
    return this.storeModel.find()
  }

  async findOne(name: string) {
    const findedStore = this.storeModel.findOne({ name: name })
    return findedStore
  }


  async update(id: string, updateStoreDto: UpdateStoreDto) {
    const updatedStore = this.storeModel.findByIdAndUpdate(
      id,
      {
        name: updateStoreDto.name,
        products: updateStoreDto.products,
        adress: updateStoreDto.adress,
      },
      { new: true },
    )

    return updatedStore
  }

  async remove(id: string) {
    const deletedStore = this.storeModel.findByIdAndDelete(id)
    return deletedStore
  }

}
