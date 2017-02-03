import {whiteListIframe} from 'pretty-text/sanitizer';

 whiteListIframe(/^(https?:)?\/\/www\.meteoblue\.com\/.+/i);
 whiteListIframe(/^(https?:)?\/\/www\.windfinder\.com\/.+/i);
 whiteListIframe(/^(https?:)?\/\/www\.windguru\.cz\/.+/i);

export function setup(helper) {

  helper.whiteList([
    'label[for]',
    'i[class=*]',
  ]);
