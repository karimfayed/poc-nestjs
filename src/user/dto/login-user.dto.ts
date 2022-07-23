import { IsNotEmpty, IsEmail, IsString } from "class-validator";

export class LoginUserDto
{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
    
}