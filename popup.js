document.getElementById("setWidthBtn").addEventListener("click", async () => {
  if (!chrome.tabs) return;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        const el = document.getElementById("testId");
        if (el) el.style.width = "100%";
      },
    });
  });
});
