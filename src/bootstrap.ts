'use strict';

import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

import * as myInfo from './myInfo/myInfo.service';
import * as crawlerInfo from './crawler/crawler.service';

const myData: any = 'myData.json';
const crawlingData: any = 'gitple.json';

export const init = () => {
  return new Promise(async (resolve) => {
    const myDb: JsonDB = new JsonDB(new Config(myData, false));
    myInfo.init(myDb);

    const crawlerDb: JsonDB = new JsonDB(new Config(crawlingData, false));
    crawlerInfo.init(crawlerDb);

    return resolve(null);
  });
};
