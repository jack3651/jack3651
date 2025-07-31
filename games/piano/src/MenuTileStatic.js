MenuTileStatic = function(a, b, c, d, e, f) {
    f && (this.soundMode = JSON.parse(SG_Hooks.getStorageItem("sound"))), this.game = a, Phaser.Group.call(this, a), this.x = b, this.y = c, this.tileHeight = scaleValue(150), this.bringUp = new Phaser.Signal, this.clicked = new Phaser.Signal, this.colors = [16777215, 0, "#FFFFFF", "#000000"], "black" == d && (this.colors = [0, 16777215, "#000000", "#FFFFFF"]), this.side = "left", b >= this.game.width / 2 && (this.side = "right");
    var g = this.game.add.graphics(0, 0);
    g.beginFill(this.colors[0]), g.drawRect(0, 0, this.game.width / 2, this.tileHeight), g.endFill(), g.boundsPadding = 0, this.sprite = this.create(0, 0, g.generateTexture()), g.destroy();
    var h = this.game.width / 4;
    "right" == this.side && (h = b - this.game.width / 4);
    var i = {
        font: "Bold " + bestSizeForText(e, this.game.width / 2 - scaleValue(20), !0) + "px Arial",
        fill: this.colors[3],
        align: "center"
    };
    this.title = this.game.add.text(h, this.tileHeight / 2, e, i, this), this.title.anchor.set(.5, .5), f && this.updateSound(), this.sprite.inputEnabled = !0, this.sprite.events.onInputDown.add(this.mouseDown, this), this.sprite.events.onInputUp.add(this.mouseUp, this)
}, MenuTileStatic.prototype = Object.create(Phaser.Group.prototype), MenuTileStatic.prototype.constructor = MenuTileStatic;
var p = MenuTileStatic.prototype;
p.mouseDown = function() {
    this.mouseY = this.game.input.activePointer.y
}, p.mouseUp = function() {
    Math.abs(this.mouseY - this.game.input.activePointer.y) <= 3 && (this.clicked.dispatch(), this.bringUp.dispatch(this), null != this.soundMode && (this.soundMode++, this.soundMode = this.soundMode % 3, this.game.sound.usingAudioTag && 1 == this.soundMode && (this.soundMode = 2), SG_Hooks.getStorageItem("sound", this.soundMode), this.updateSound()))
}, p.updateSound = function() {
    var a = "";
    0 == this.soundMode ? a = Lang[lang][13] : 1 == this.soundMode ? a = Lang[lang][11] : 2 == this.soundMode && (a = Lang[lang][12]), this.title.setText(Lang[lang][10] + ":\n" + a), this.title.setStyle({
        font: "Bold " + bestSizeForText(this.title.text, this.game.width / 2 - scaleValue(20), !0) + "px Arial",
        fill: this.colors[3],
        align: "center"
    })
};