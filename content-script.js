document.addEventListener('keydown', (e) => {
  if (e.altKey && e.shiftKey && e.keyCode >= 37 && e.keyCode <= 40) {
    console.log(e);
    chrome.runtime.sendMessage({type: "change-tab", event: {keyCode: e.keyCode}}, function(response) {
      console.log(response);
    });
  }
});
