(function() {
  if (Discourse.dialect_deprecated) { return; }

  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.meteoblue\.com\/fr\/meteo\/widget\/daily\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.windfinder\.com\/.+/i);
})();
