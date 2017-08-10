import Vnexpress from './Vnexpress';
import Vietnamnet from './Vietnamnet';
import Dantri from './Dantri';
import Bao24h from './Bao24h';
import Storage from './Storage';

import {
  LINK_FETCH_RSS_1,
  LINK_FETCH_RSS_1_LOCAL
} from '../config/config'

export default [
  {
    pageTitle: 'Vnexpress',
    eventKey: 'vnexpress',
    imgWidth: 150,
    imgHeight: 40,
    imgSrc: 'https://docbao.tentstudy.xyz/images/vnexpress.png',
    imgAlt: 'Vnexpress',
    storage: Storage(Vnexpress),
    apiLink: LINK_FETCH_RSS_1
  },
  {
    pageTitle: 'Dantri',
    eventKey: 'dantri',
    imgWidth: 150,
    imgHeight: 40,
    imgSrc: 'https://docbao.tentstudy.xyz/images/dantri.jpg',
    imgAlt: 'Dantri',
    storage: Storage(Dantri),
    apiLink: LINK_FETCH_RSS_1
  },
  {
    pageTitle: 'Vietnamnet',
    eventKey: 'vietnamnet',
    imgWidth: 150,
    imgHeight: 40,
    imgSrc: 'https://docbao.tentstudy.xyz/images/vietnamnet.png',
    imgAlt: 'Vietnamnet',
    storage: Storage(Vietnamnet),
    apiLink: LINK_FETCH_RSS_1
  },
  {
    pageTitle: '24h',
    eventKey: '24h',
    imgWidth: 150,
    imgHeight: 40,
    imgSrc: 'https://docbao.tentstudy.xyz/images/24h.png',
    imgAlt: '24h',
    storage: Storage(Bao24h),
    apiLink: LINK_FETCH_RSS_1
  }
];

