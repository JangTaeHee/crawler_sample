import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { JsonDB } from 'node-json-db';

let dbLib: JsonDB;

@Injectable()
export class MyInfoService {
  getInfo(res: Response) {
    const result: any = dbLib.getData('/');

    return res.status(200).json(result);
  }
}

export function init(db: JsonDB) {
  dbLib = db;

  dbLib.push('/info', {
    name: 'Jang Tae Hee',
    age: 34,
    position: 'server developer',
  });
  dbLib.save();
}
