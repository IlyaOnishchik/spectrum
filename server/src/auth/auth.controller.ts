import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private usersService: UsersService
  ) {}

  @Get('activate/:link')
  async activate(
    @Param('link') link: string,
    @Res() response: Response
  ) {
    const user = await this.usersService.findOne({ activationLink: link });
    if (!user) throw new Error('Uncorrect activation link');
    await this.usersService.updateOne({id: user.id }, { isActivated: true });
    response.redirect(process.env.CLIENT_URL);
  }
}
