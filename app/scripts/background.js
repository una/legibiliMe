'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: 'Off'});

console.log('\'Allo \'Allo! Event Page for Browser Action');

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Running myScript.js on ' + tab.url );
  amIOn();
});

var isOn = false;

function amIOn(){
  if (isOn) {
    chrome.browserAction.setBadgeText({text: 'On'});
    chrome.tabs.executeScript(null, {file: "scripts/myScript.js"});
    isOn = false;
  }
  else {
    isOn = true;
    chrome.browserAction.setBadgeText({text: 'Off'});
  }
}
