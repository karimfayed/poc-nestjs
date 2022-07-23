import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('profile')
export class ProfileController 
{
    @UseGuards(AuthGuard('jwt'))
    @Get()
    getProfile():string
    {
        return "I am a protected route"
    }
}
