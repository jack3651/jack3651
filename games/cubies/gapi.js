function ShareToFacebook(dataAndEvents, deepDataAndEvents) {}
function ShareToWebsites(id, ignoreMethodDoesntExist, dataAndEvents, deepDataAndEvents) {}
function ShareToTwitter(dataAndEvents, deepDataAndEvents) {}
function CreateLinksInGame(link_id, tp, key) {
  var url = "http://friv.com.tr";
//  window.open(url);
}
function OnGameStart(dataAndEvents, reply) {
  console.log("call OnGameStart, nameid: " + dataAndEvents + ", Times: " + reply);
}
function OnGamePause(dataAndEvents, reply) {
  console.log("call OnGamePause, nameid: " + dataAndEvents + ", Times: " + reply);
}
function OnGameLevelWin(reply, dataAndEvents) {
  console.log("call OnGameLevelWin, nameid: " + reply);
}
function OnGameLevelFail(reply) {
  console.log("call OnGameLevelFail, nameid: " + reply);
}
function GetLanguageInGame(label) {
  return GamesLanguage.en[label];
}
var d = new String(window.location.host);
if (d.indexOf("7k4h7.com") == -1 && d.indexOf("plippa.com") == -1) {
//  window.location = "http://friv.com.tr";
}
function CreateToolTipDiv(opt_attributes, expectedNumberOfNonCommentArgs, dataAndEvents) {}
function submitToFacebook(opt_id, deepDataAndEvents, dataAndEvents, until, onfail) {}
function FBOperation(opt_id, deepDataAndEvents, until, errorCB) {}
function PostImageToFacebook(id, opt_id, val, until, fail) {}
function dataURItoBlob(dataURI) {
  var byteString = atob(dataURI.split(",")[1]);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  var i = 0;
  for (;i < byteString.length;i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], {
    type : "image/png"
  });
}
;

