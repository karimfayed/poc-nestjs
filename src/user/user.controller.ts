import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController 
{
    constructor (private userService:UserService) {}
    @Get()
    getAllUsers():Promise<User[]>
    {
        return this.userService.getAllUsers()
    }

    @Get(":id")
    getUser(@Param("id") id:string):Promise<User>
    {
        return this.userService.getUser(id)
    }

    @Post()
    addUser(@Body() createUserDto:CreateUserDto):Promise<User>
    {
        return this.userService.addUser(createUserDto)
    }

    
    @Patch(":id")
    updateUser(@Param("id") id:string, @Body() updateUserDto:UpdateUserDto):Promise<User>
    {
        return this.userService.updateUser(id, updateUserDto)
    }

    
    @Delete(":id")
    deleteUser(@Param("id") id:string):Promise<User>
    {
        return this.userService.deleteUser(id) 
    }

}
