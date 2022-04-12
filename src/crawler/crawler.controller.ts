import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { CrawlerService } from './crawler.service';

@Controller('toss')
export class CrawlerController {
  constructor(private readonly crawlerService: CrawlerService) {}
  @Get('/info')
  getInfo(@Res() res: Response) {
    return this.crawlerService.getInfo(res);
  }
}
