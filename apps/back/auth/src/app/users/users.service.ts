import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto) {
    const createdUser = this.userModel.create(createUserDto)
    return createdUser
  }

  async findAll() {
    return this.userModel.find()
  }

  async findOne(name: string) {
    const findedUser = this.userModel.findOne({ name: name })
    return findedUser
  }


  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = this.userModel.findByIdAndUpdate(
      id,
      {
        name: updateUserDto.name,
        email: updateUserDto.email,
        password: updateUserDto.password,
        age: updateUserDto.age,
      },
      { new: true },
    )

    return updatedUser
  }

  async remove(id: string) {
    this.userModel.findByIdAndDelete(id)
    return "Sucessful deleted user"
  }
}
