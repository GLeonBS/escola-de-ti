import { Injectable } from '@nestjs/common';
import { User } from './schema/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

//fazer DTO e os tipos
//fazer a controller de usuário
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = this.userModel.create(createUserDto);
    return createdUser;
  }

  
  async findOne(name: string) {
    const findedUser = this.userModel.findOne({name : name})
    return findedUser;
  }

  async findAll() {
    return this.userModel.find();
  }
}
