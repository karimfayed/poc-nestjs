import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService 
{
    constructor(@InjectModel('User') private userModel:Model<User>) {}
    
    async getAllUsers():Promise<User[]>
    {
        return await this.userModel.find();
    }

    async getUser(userId:string):Promise<User>
    {
        return await this.userModel.findOne({_id:userId})
    }

    async addUser(createUserDto:CreateUserDto):Promise<User>
    {
        console.log(createUserDto)
        const newUser = new this.userModel(createUserDto)
        console.log(newUser)
        return await newUser.save();
    }

    
    async updateUser(id:string, updateUserDto:UpdateUserDto):Promise<User>
    {
        return await this.userModel.findByIdAndUpdate(id, updateUserDto)
    }

    
    async deleteUser(id:string):Promise<User>
    {
        return await this.userModel.findByIdAndRemove(id)
    }

    async getUserByEmail(email:string):Promise<any>
    {
        return await this.userModel.findOne({email:email})
    }
}
