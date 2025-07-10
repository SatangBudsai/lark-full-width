chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // ขยายความกว้าง .bitable-form .form-body
      const formEls = document.querySelectorAll(".bitable-form .form-body");
      for (const el of formEls) {
        el.style.setProperty("max-width", "95%", "important");
      }

      // ขยายความกว้างของทุกเซลล์ในตาราง (ยกเว้นช่องแรก)
      const rows = document.querySelectorAll(".ud__table tr");
      for (const row of rows) {
        // ข้าม header row ที่ไม่มี td
        const cells = row.querySelectorAll(".ud__table-cell");
        for (let i = 0; i < cells.length; i++) {
          const notWidthCol = [0, 1, 5];
          if (!notWidthCol.includes(i)) {
            const cell = cells[i];
            cell.style.setProperty("min-width", "150px", "important");
            cell.style.setProperty("width", "auto", "important");
            cell.style.setProperty("max-width", "none", "important");
          }
        }
      }

      // ขยาย <col> ใน <colgroup> ด้วย
      const colEls = document.querySelectorAll(".ud__table col");
      for (let i = 0; i < colEls.length; i++) {
        const notWidthCol = [0, 1, 5];
        if (!notWidthCol.includes(i)) {
          const cell = colEls[i];
          cell.style.setProperty("min-width", "150px", "important");
          cell.style.setProperty("width", "auto", "important");
          cell.style.setProperty("max-width", "none", "important");
        }
      }
    },
  });

  // Set badge to show "/" when action is performed
  chrome.action.setBadgeText({ text: "/", tabId: tab.id });
  chrome.action.setBadgeBackgroundColor({ color: "#2196F3", tabId: tab.id });
});
