TouchTheTile.MainMenu = function(a) {
    this.music = null, this.playButton = null
}, TouchTheTile.MainMenu.prototype = {
    create: function() {
        this.buttonHeight = 150, this.modesButton = this.game.add.group();
        var a = new MenuTile(this.game, 0, 0, "white", 0),
            b = new MenuTile(this.game, this.game.width / 2, 0, "black", 1),
            c = new MenuTile(this.game, 0, scaleValue(this.buttonHeight), "black", 2),
            d = new MenuTile(this.game, this.game.width / 2, scaleValue(this.buttonHeight), "white", 3),
            e = new MenuTile(this.game, 0, scaleValue(2 * this.buttonHeight), "white", 4),
            f = new MenuTile(this.game, this.game.width / 2, scaleValue(2 * this.buttonHeight), "black", 5),
            g = new MenuTile(this.game, 0, scaleValue(3 * this.buttonHeight), "black", 6),
            h = new MenuTileStatic(this.game, this.game.width / 2, scaleValue(3 * this.buttonHeight), "white", "Sound:\nPiano", (!0)),
            i = new MenuTileStatic(this.game, 0, scaleValue(4 * this.buttonHeight), "white", Lang[lang][14]),
            j = new MenuTileStatic(this.game, this.game.width / 2, scaleValue(4 * this.buttonHeight), "black", "");
        this.modesButton.add(a), this.modesButton.add(b), this.modesButton.add(c), this.modesButton.add(d), this.modesButton.add(e), this.modesButton.add(f), this.modesButton.add(g), this.modesButton.add(h), this.modesButton.add(i), this.modesButton.add(j), i.clicked.add(this.gotoSite, this), this.modesButton.callAll("bringUp.add", "bringUp", this.selectMode, this), this.isScrolling = !1, this.originalY = 0, this.mousePosition = new Phaser.Point(0, 0), this.game.input.onDown.add(this.clickDown, this), this.game.input.onUp.add(this.clickUp, this)
    },
    selectMode: function(a) {
        this.modesButton.callAll("collapse"), a.clicked || a.modeSelected.add(this.modeSelected, this)
    },
    modeSelected: function(a, b) {
        console.log(a, b), this.game.state.start("Game", !0, !1, a, b)
    },
    clickDown: function() {
        this.isScrolling = !0, this.originalY = this.modesButton.y, this.mousePosition.x = this.game.input.activePointer.x, this.mousePosition.y = this.game.input.activePointer.y
    },
    clickUp: function() {
        this.isScrolling = !1
    },
    update: function() {
        this.isScrolling && (this.modesButton.y = this.originalY - (this.mousePosition.y - this.game.input.activePointer.y), this.modesButton.y = Math.min(0, this.modesButton.y), this.modesButton.y = Math.max(this.modesButton.y, scaleValue(480) - scaleValue(5 * this.buttonHeight)))
    },
    startGame: function(a) {},
    gotoSite: function(a) {
        SG.redirectToPortal()
    }
};