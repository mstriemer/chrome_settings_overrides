browser.webRequest.onHeadersReceived.addListener((details) => {
  let responseHeaders = details.responseHeaders.filter(({name}) => name.toLowerCase() != "x-frame-options");
  return {responseHeaders};
}, {"urls": ["https://search.yahoo.com/*"]}, ["blocking", "responseHeaders"]);
