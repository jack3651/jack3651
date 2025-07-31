var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var bgmusic;
var isMuted = false;
var canvas;

game.state.add('preload', Preload);
game.state.add('menupage', menupage);
game.state.add('haircusts', haircusts);

//start the boot state
this.game.state.start('preload');

function exportCanvasAsPNG(id, fileName, dataUr) {
    // console.log(id,"rootss");
    var canvasElement = document.getElementById(id);
    var MIME_TYPE = "image/png";
    var imgURL = dataUr;
    var dlLink = document.createElement('a');
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
}

function exportCanvasAsPNG(id, fileName, dataUr) {
    // console.log(id,"rootss");
    var canvasElement = document.getElementById(id);
    var MIME_TYPE = "image/png";
    var imgURL = dataUr;
    var dlLink = document.createElement('a');
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
}