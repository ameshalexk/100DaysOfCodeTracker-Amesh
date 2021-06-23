chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === 'complete' &&
    /^(https:\/\/www.linkedin.com\/jobs\/search)/.test(tab.url)
  ) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ['./foreground.js'],
      })
      .then(() => {
        console.log('INJECTED THE FOREGROUND SCRIPT.');
      })
      .catch((err) => console.log(err));
  }
});
