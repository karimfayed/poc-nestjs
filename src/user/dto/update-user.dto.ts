import { IsNotEmpty, IsString, IsNumber, IsEmail } from "class-validator";

export class UpdateUserDto
{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsNumber()
    age:number;
}