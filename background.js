chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const els = document.querySelectorAll(".bitable-form .form-body");
      for (const el of els) {
        el.style.setProperty("max-width", "100%", "important");
      }
    },
  });

  // Set badge to show "/" when action is performed
  chrome.action.setBadgeText({ text: "/", tabId: tab.id });
  chrome.action.setBadgeBackgroundColor({ color: "#2196F3", tabId: tab.id });
});
