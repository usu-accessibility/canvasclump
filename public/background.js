const CANVAS_SITE = "https://usu.instructure.com/courses";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["settings"], function (result) {
    if (!result.settings) {
      chrome.storage.sync.set({
        settings: { actions: [{ type: "open" }] },
        data: [],
      });
    }

    if (!result.data) {
      chrome.storage.sync.set({
        data: [],
      });
    }
  });
});

chrome.commands.onCommand.addListener(async (_, tab) => {
  if (tab.url.startsWith(CANVAS_SITE)) {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: getLinks,
    });
  }
});

chrome.runtime.onMessage.addListener((message) => {
  console.log(message);
  chrome.storage.sync.get(["data"], function (result) {
    console.log(result.data);
    chrome.storage.sync.set({ data: [...result.data, message] });
  });
});

function getLinks() {
  const COURSE_ID = /\/courses\/(\d{6})/gm;
  const FILE_ID = /\/files\/(\d{8})/gm;

  let selectedLinks = [];

  const links = document.querySelectorAll(".ef-name-col__link");

  for (link of links) {
    const courseId = link.baseURI.match(COURSE_ID)[0];
    const fileId = link.href.match(FILE_ID)[0];

    const newLink = "https://" + link.host + courseId + fileId;
    const linkText = link.innerText;

    selectedLinks.push({ text: linkText, link: newLink });
  }

  chrome.runtime.sendMessage({
    page: window.location.href,
    links: selectedLinks,
  });
}
