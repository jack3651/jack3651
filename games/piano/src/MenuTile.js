MenuTile = function(a, b, c, d, e) {
    this.game = a, Phaser.Group.call(this, a), this.x = b, this.y = c, this.modeIndex = e, this.title = Modes[e].name, this.modes = Modes[e].levels, this.tileHeight = scaleValue(150), this.bringUp = new Phaser.Signal, this.modeSelected = new Phaser.Signal, this.colors = [16777215, 0, "#FFFFFF", "#000000"], "black" == d && (this.colors = [0, 16777215, "#000000", "#FFFFFF"]), this.side = "left", b >= this.game.width / 2 && (this.side = "right");
    var f = this.game.add.graphics(0, 0);
    f.beginFill(this.colors[0]), f.drawRect(0, 0, this.game.width / 2, this.tileHeight), f.endFill(), f.boundsPadding = 0, this.sprite = this.create(0, 0, f.generateTexture()), f.destroy();
    var g = this.game.width / 4;
    "right" == this.side && (g = b - this.game.width / 4);
    var h = {
        font: "Bold " + bestSizeForText(this.title, this.game.width / 2 - scaleValue(20), !0) + "px Arial",
        fill: this.colors[3],
        align: "center"
    };
    this.title = this.game.add.text(g, this.tileHeight / 2, this.title, h, this), this.title.anchor.set(.5, .5);
    var i = this.tileHeight / 3;
    this.modesButton = [];
    var j = 0;
    for (var k in this.modes) {
        var l = this.game.add.renderTexture(this.game.width / 2, i, "some" + j),
            m = this.create(this.game.width / 4, i * j, l);
        m.anchor.set(.5, 0);
        var n = this.game.add.group();
        n.y = i * j, n.pivot.x = 60, this.add(n);
        var o = this.game.add.graphics(this.game.width / 4, 0);
        o.beginFill(this.colors[1 - j % 2]), o.drawRect(-this.game.width / 4, 0, this.game.width / 2, i), o.endFill(), n.add(o);
        var p = {
                font: bestSizeForText(k, this.game.width / 2 - scaleValue(20), !1) + "px Arial",
                fill: this.colors[2 + j % 2],
                align: "center"
            },
            q = this.game.add.text(g, i / 2, k, p, n);
        q.anchor.set(.5, .5), l.renderXY(n, 0, 0), n.destroy(!0), m.tween = this.game.add.tween(m.scale), m.mode = k, m.kill(), this.modesButton.push(m), j++
    }
    this.fullSize = !1, this.sprite.inputEnabled = !0, this.sprite.events.onInputDown.add(this.mouseDown, this), this.sprite.events.onInputUp.add(this.mouseUp, this)
}, MenuTile.prototype = Object.create(Phaser.Group.prototype), MenuTile.prototype.constructor = MenuTile;
var p = MenuTile.prototype;
p.mouseDown = function() {
    this.mouseY = this.game.input.activePointer.y
}, p.mouseUp = function() {
    Math.abs(this.mouseY - this.game.input.activePointer.y) <= 3 && (this.bringUp.dispatch(this), this.expand())
}, p.expand = function() {
    if (!this.fullSize) {
        this.fullSize = !0, this.sprite.inputEnabled = !1;
        for (var a = 0; a < this.modesButton.length; a++) this.modesButton[a].revive(), this.modesButton[a].inputEnabled = !0, this.modesButton[a].events.onInputDown.add(this.selectModeDown, this), this.modesButton[a].events.onInputUp.add(this.selectModeUp, this), this.modesButton[a].scale.set(0, 1), this.modesButton[a].tween._parent = null, this.modesButton[a].tween._lastChild = null, this.modesButton[a].tween.to({
            x: 1
        }, 200, Phaser.Easing.Sinusoidal.InOut, !0, 100 * a);
        this.modesButton[this.modesButton.length - 1].tween._lastChild.onComplete.removeAll()
    }
}, p.collapse = function() {
    if (this.fullSize) {
        this.fullSize = !1, this.modeSelected.removeAll();
        for (var a = 0; a < this.modesButton.length; a++) this.modesButton[a].inputEnabled = !1, this.modesButton[a].tween._parent = null, this.modesButton[a].tween._lastChild = null, this.modesButton[a].tween.to({
            x: 0
        }, 200, Phaser.Easing.Sinusoidal.InOut, !0, 100 * a);
        this.modesButton[this.modesButton.length - 1].tween._lastChild.onComplete.add(this.reset, this)
    }
}, p.reset = function() {
    this.sprite.inputEnabled = !0;
    for (var a = 0; a < this.modesButton.length; a++) this.modesButton[a].kill()
}, p.selectModeDown = function(a) {
    this.mouseY = this.game.input.activePointer.y
}, p.selectModeUp = function(a) {
    Math.abs(this.mouseY - this.game.input.activePointer.y) <= 3 && this.modeSelected.dispatch(this.modeIndex, a.mode)
};