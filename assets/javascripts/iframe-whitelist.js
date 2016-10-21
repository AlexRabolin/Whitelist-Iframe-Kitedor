(function() {
  if (Discourse.dialect_deprecated) { return; }

  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.meteoblue\.com\/fr\/meteo\/widget\/daily\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(http?:)?\/\/www\.windguru\.cz\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/beta\.windguru\.cz\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/embed\.windytv\.com\/.+/i);
})();
