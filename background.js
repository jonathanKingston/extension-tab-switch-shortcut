chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type == "change-tab") {
    browser.tabs.query({windowId: browser.windows.WINDOW_ID_CURRENT}, (tabs) => {
      var keyCodeNext = [38, 39];
      var keyCodePrev = [37, 40];
      var activeIndex;
      var selectedTab;

      tabs.forEach((tab, id) => {
         if (tab.active) {
           activeIndex = id;
         }
      });
  
      if (keyCodeNext.indexOf(request.event.keyCode) !== -1) {
        selectedTab = tabs[activeIndex + 1];
        if (activeIndex === tabs.length - 1) {
          selectedTab = tabs[0];
        }
      } else {
        selectedTab = tabs[activeIndex - 1];
        if (activeIndex === -1) {
          selectedTab = tabs[tabs.length - 1];
        }
      }

      browser.tabs.update(selectedTab.id, {active: true});
      sendResponse({ok: true});
    }); 
  }
});
