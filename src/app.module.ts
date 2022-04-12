import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyInfoModule } from './myInfo/myInfo.module';
import { CrawlerModule } from './crawler/crawler.module';

@Module({
  imports: [MyInfoModule, CrawlerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
