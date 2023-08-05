Array.from(document.querySelectorAll('link[rel*="icon"]')).map(
  (favicon) =>
    (favicon.href =
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💩</text></svg>")
);

const polling = setInterval(() => {
  if (
    document.querySelector('[data-testid="tweetButtonInline"]') &&
    document.querySelector('[data-testid="SideNav_NewTweet_Button"]')
  ) {
    document.querySelector(
      '[data-testid="tweetButtonInline"] span span'
    ).innerText = "Poo";
    document.querySelector(
      '[data-testid="SideNav_NewTweet_Button"] span span span'
    ).innerText = "Poo";
    clearInterval(polling);
  }
}, 300);
