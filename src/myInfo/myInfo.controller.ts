import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { MyInfoService } from './myInfo.service';

@Controller('my')
export class MyInfoController {
  constructor(private readonly myInfoService: MyInfoService) {}
  @Get('/info')
  getInfo(@Res() res: Response) {
    return this.myInfoService.getInfo(res);
  }
}
