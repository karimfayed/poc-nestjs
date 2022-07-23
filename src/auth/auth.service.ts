import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService 
{
    constructor(
        private userService:UserService,
        private jwtService:JwtService
        ){}
    
    async validateUser( email:string,password:string)
    {
        let user = await this.userService.getUserByEmail(email)
        
        if(user && user.password === password)
            return user;
        
        return null

    }

    async login(user:any)
    {
        console.log("Login", user)
        const payload = { email: user.email, sub: user.id };
        return {
          access_token: this.jwtService.sign(payload),
        };
    }
}
