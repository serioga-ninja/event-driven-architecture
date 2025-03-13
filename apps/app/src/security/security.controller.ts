import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import SecurityService from './security.service';
import { CurrentUser } from '../../../../libs/common/src/auth/decorators';
import { JwtAuthGuard, TokenPayload } from '@app/common';
import { FastifyReply } from 'fastify';
import { toDataURL } from 'qrcode';
import { Enable2faDto } from './dtos';

@Controller()
@UseGuards(JwtAuthGuard)
export default class SecurityController {
  constructor(private readonly _securityService: SecurityService) {}

  @Post('2fa/initialize')
  async handleInitialize2FA(
    @CurrentUser() user: TokenPayload,
    @Res() res: FastifyReply,
  ) {
    const { uri, secret } = await this._securityService.initializeEnabling2FA(
      user.email,
    );

    toDataURL(uri, (error, dataUrl) => {
      if (error) {
        throw error;
      }

      res.send({ dataUrl, secret });
    });
  }

  @Post('2fa/enable')
  async handleEnable2FA(
    @CurrentUser() user: TokenPayload,
    @Body() body: Enable2faDto,
  ) {
    await this._securityService.enable2FA(user.email, body.token);
  }

  @Post('2fa/disable')
  async handleDisable2FA(@CurrentUser() user: TokenPayload) {
    await this._securityService.disable2FA(user.email);
  }
}
