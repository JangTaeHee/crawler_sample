import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Response } from 'express';
import { JsonDB } from 'node-json-db';
import * as cheerio from 'cheerio';

let dbLib: JsonDB;

@Injectable()
export class CrawlerService {
  getInfo(res: Response) {
    const result: any = dbLib.getData('/gitple');

    return res.status(200).json(result);
  }
}

export function init(db: JsonDB) {
  dbLib = db;

  runCrawling();
}

function runCrawling() {
  const httpService = new HttpService();

  httpService.get('https://gitple.io').subscribe((res: AxiosResponse) => {
    const $ = cheerio.load(res.data);
    const title: string = $('title').text();

    dbLib.push('/gitple', {
      title,
    });
    dbLib.save();
  });
}
