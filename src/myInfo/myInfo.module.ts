import { Module } from '@nestjs/common';
import { MyInfoController } from './myInfo.controller';
import { MyInfoService } from './myInfo.service';

@Module({
  imports: [],
  controllers: [MyInfoController],
  providers: [MyInfoService],
})
export class MyInfoModule {}
