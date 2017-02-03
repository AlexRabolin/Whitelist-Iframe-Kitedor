import {whiteListIframe} from 'pretty-text/sanitizer';
import { builders } from 'pretty-text/engines/discourse-markdown/bbcode';

 whiteListIframe(/^(https?:)?\/\/www\.meteoblue\.com\/.+/i);
 whiteListIframe(/^(https?:)?\/\/www\.windfinder\.com\/.+/i);
 whiteListIframe(/^(https?:)?\/\/www\.windguru\.cz\/.+/i);

export function setup(helper) {

  helper.whiteList([
    'i[class=*]',
    'label[for=*]',
  ]);
