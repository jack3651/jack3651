GUI = function(a) {
    this.game = a, Phaser.Group.call(this, a);
    var b = this.game.add.graphics(0, 0, this);
    b.beginFill(65280), b.drawRect(0, 0, scaleValue(1), scaleValue(8)), b.endFill(), b.beginFill(0, .3), b.drawRect(0, scaleValue(8), scaleValue(1), scaleValue(3)), b.endFill(), b.boundsPadding = 0, this.bar = this.create(0, 0, b.generateTexture()), this.bar.scale.set(0, 1), this.barTween = this.game.add.tween(this.bar.scale), b.destroy();
    var c = {
        font: "Bold " + scaleValue(35) + "px Arial",
        fill: "#ff0000",
        align: "center"
    };
    this.mainStat = this.game.add.text(this.game.width / 2, scaleValue(40), " 12 ", c, this), this.mainStat.anchor.set(.5, .5), this.mainStat.setShadow(scaleValue(2), scaleValue(2), "rgba(0,0,0,0.5)"), this.gameOverGroup = this.game.add.group(0, 0), this.add(this.gameOverGroup), this.back = this.game.add.graphics(0, 0, this.gameOverGroup), this.back.beginFill(60928), this.back.drawRect(0, 0, this.game.width, this.game.height), this.back.endFill();
    var d = {
        font: "Bold " + scaleValue(25) + "px Arial",
        fill: "#ffffff",
        align: "center"
    };
    this.labelMode = this.game.add.text(this.game.width / 2, scaleValue(30), "", d, this.gameOverGroup), this.labelMode.anchor.set(.5, .5);
    ({
        font: "Bold " + scaleValue(20) + "px Arial",
        fill: "#ffffff",
        align: "center"
    });
    this.labelLevel = this.game.add.text(this.game.width / 2, scaleValue(55), "", d, this.gameOverGroup), this.labelLevel.anchor.set(.5, .5);
    var f = {
        font: "Bold " + scaleValue(65) + "px Arial",
        fill: "#000000",
        align: "center"
    };
    this.labelScore = this.game.add.text(this.game.width / 2, scaleValue(140), "", f, this.gameOverGroup), this.labelScore.anchor.set(.5, .5);
    var g = {
        font: "Bold " + scaleValue(35) + "px Arial",
        fill: "#000000",
        align: "center"
    };
    this.labelBest = this.game.add.text(this.game.width / 2, this.labelScore.y + scaleValue(50), "", g, this.gameOverGroup), this.labelBest.anchor.set(.5, .5), this.buttonAgain = new LabelButton(this.game, this.game.width / 2, scaleValue(250), scaleValue(260), scaleValue(40), Lang[lang][26]), this.gameOverGroup.add(this.buttonAgain), this.gameOverGroup.visible = !1
}, GUI.prototype = Object.create(Phaser.Group.prototype), GUI.prototype.constructor = GUI;
var p = GUI.prototype;
p.showGameOver = function(a, b, c, d) {
    this.labelMode.text = a, this.labelLevel.text = b, this.labelScore.text = c, this.labelBest.text = d, this.labelScore.setStyle({
        font: "Bold " + bestSizeForText(this.labelScore.text, this.game.width - scaleValue(40), !0, 60) + "px Arial",
        fill: "#000000",
        align: "center"
    });
    var e = this.game.add.tween(this.gameOverGroup);
    this.gameOverGroup.alpha = 0, e.to({
        alpha: 1
    }, 800, Phaser.Easing.Quintic.Out, !0, 1500);
    var f = this;
    setTimeout(function() {
        f.gameOverGroup.visible = !0, game.state.getCurrentState().gui.buttonAgain.visible = !1,
            // SG_Hooks.beforePlayButtonDisplay(function() {
            game.state.getCurrentState().gui.buttonAgain.visible = !0
        // })
    }, 1500)
}, p.setBarProgress = function(a, b) {
    b ? (this.barTween._parent = null, this.barTween._lastChild = null, this.barTween.to({
        x: 320 * a
    }, 200, Phaser.Easing.Linear.None, !0)) : this.bar.scale.set(320 * a, 1)
}, p.setMode = function(a) {
    a || (this.bar.visible = !1)
}, p.updateTimeText = function(a) {
    var b = (a / 1e3).toFixed(2);
    this.mainStat.text = " " + b + "'' "
}, p.updateDeathText = function(a) {
    this.mainStat.text = " " + a + " "
}, LabelButton = function(a, b, c, d, e, f, g, h) {
    var i = a.add.graphics(0, 0);
    i.beginFill(0, 0), i.drawRect(0, 0, d, e), i.endFill(), i.boundsPadding = 0, Phaser.Button.call(this, a, b, c), this.anchor.set(.5, 0), a.add.existing(this), this.loadTexture(i.generateTexture()), i.destroy(), this.style = {
        font: "Bold " + scaleValue(30) + "px Arial",
        fill: "white",
        align: "center"
    }, this.label = new Phaser.Text(a, 0, 0, f, this.style), this.label.anchor.set(.5, 0), this.addChild(this.label), this.setLabel(f)
}, LabelButton.prototype = Object.create(Phaser.Button.prototype), LabelButton.prototype.constructor = LabelButton, LabelButton.prototype.setLabel = function(a) {
    this.label.setText(a), this.label.y = Math.floor(.5 * (this.height - this.label.height))
};