import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { User } from 'src/user/interfaces/user.interface';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController 
{
    
    constructor(private authService:AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async userLogin(@Req() req:any):Promise<any>
    {
        return this.authService.login(req.user)
    }
}
