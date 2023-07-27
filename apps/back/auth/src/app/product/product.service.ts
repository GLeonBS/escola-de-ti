import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entity/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

  async create(createProductDto: CreateProductDto) {
    const createdProduct = this.productModel.create(createProductDto)
    return createdProduct
  }

  async findAll() {
    return this.productModel.find()
  }

  async findOne(name: string) {
    const findedProduct = this.productModel.findOne({ name: name })
    return findedProduct
  }


  async update(id: string, updateProductDto: UpdateProductDto) {
    const updatedProduct = this.productModel.findByIdAndUpdate(
      id,
      {
        name: updateProductDto.name,
        email: updateProductDto.description,
        password: updateProductDto.price,
        age: updateProductDto.quantity,
      },
      { new: true },
    )

    return updatedProduct
  }

  async remove(id: string) {
    this.productModel.findByIdAndDelete(id)
    return "Sucessful deleted product"
  }

}
