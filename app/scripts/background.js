'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: 'Hi'});

console.log('\'Allo \'Allo! Event Page for Browser Action');

var bgColor = '#c69';

function changeBg(bgColor) {
  var myElement = document.querySelector("body");
  myElement.style.backgroundColor = bgColor;
};

changeBg(bgColor);

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
});