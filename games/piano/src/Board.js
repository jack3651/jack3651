Board = function(a, b, c) {
    this.game = a, Phaser.Group.call(this, a), this.signalGameOver, this.spawnY = scaleValue(-10), this.gameOverY = scaleValue(480), this.deadY = scaleValue(720), this.horizontalSize = 4, this.deathTime = 300, this.direction = c / Math.abs(c), c < 0 && (c = Math.abs(c)), "arcade+" == b && 5 == c ? (b = "arcade", this.horizontalSize = 5) : "arcade+" == b && 6 == c && (b = "arcade", this.horizontalSize = 6), this.soundMode = JSON.parse(SG_Hooks.getStorageItem("sound")), this.song = this.game.rnd.integerInRange(0, Songs.length - 1), this.songTrigger = 0, "arcade+" == b && "Bomb" == c ? b = "mine" : "arcade+" == b && "Double" == c ? b = "twin" : "arcade+" == b && "Lighting" == c ? b = "lighing" : "arcade+" == b && "Bi" == c && (b = "double"), "lighing" == b && (this.lighing = this.game.add.graphics(0, 0, this), this.lighing.beginFill(0), this.lighing.drawRect(0, 0, this.game.width, this.game.height), this.lighing.endFill(), this.lighing.alpha = 0, this.lightingTween = this.game.add.tween(this.lighing), this.lightingTimer = this.game.time.create(!1), this.lightingTimer.loop(6e3, function() {
        var a = 80;
        this.lightingTween._parent = null, this.lightingTween._lastChild = null, this.lightingTween.to({
            alpha: 1
        }, 1e3, Phaser.Easing.None, !0), this.lightingTween.to({
            alpha: 0
        }, a, Phaser.Easing.None, !0, 600), this.lightingTween.to({
            alpha: 1
        }, a, Phaser.Easing.None, !0), this.lightingTween.to({
            alpha: 0
        }, a, Phaser.Easing.None, !0, a), this.lightingTween.to({
            alpha: 1
        }, a, Phaser.Easing.None, !0), this.lightingTween.to({
            alpha: 0
        }, a, Phaser.Easing.None, !0, a), this.lightingTween.to({
            alpha: 1
        }, a, Phaser.Easing.None, !0), this.lightingTween.to({
            alpha: 0
        }, a, Phaser.Easing.None, !0, a), this.lightingTween.to({
            alpha: 1
        }, a, Phaser.Easing.None, !0), this.lightingTween.to({
            alpha: 0
        }, a, Phaser.Easing.None, !0, a)
    }, this)), this.signalUpdateDeath = new Phaser.Signal, this.signalUpdateSpeed = new Phaser.Signal, this.signalGameOver = new Phaser.Signal, this.tileWidth = Math.floor(scaleValue(320) / this.horizontalSize), this.tileHeight = Math.floor(1.4 * this.tileWidth), this.canvas = this.game.add.graphics(0, 0, this), this.mode = b, this.difficult = c, this.autoScrollSpeed = scaleValue(12), this.targetTiles = 0, this.totalKills = 0, this.spawningTiles = 0, this.scrollSpeed = scaleValue(6), "arcade" != this.mode && "run" != this.mode || (this.scrollSpeed = c), this.scrollSpeedAcceleration = scaleValue(.001), "run" == this.mode && (this.scrollSpeedAcceleration = scaleValue(.002)), this.scrollValue = 0, "classic" == this.mode || "dzen" == this.mode || "trial" == this.mode ? (this.scrollMode = "tap", this.targetTiles = c) : "arcade" != this.mode && "mine" != this.mode && "twin" != this.mode && "double" != this.mode && "run" != this.mode && "lighing" != this.mode || (this.scrollMode = "auto"), this.activeGame = !1, this.isRunning = !1, this.lastTile = null, this.wrongTile = null, this.tiles = [];
    for (var d = 0; d < this.horizontalSize; d++) {
        var e = new aTile(d * this.tileWidth, scaleValue(380), this.tileWidth, this.tileHeight, 1048575);
        e.active = !1, this.tiles.push(e), this.updateLastTile(e)
    }
    this.spawnTile();
    var f = GetPlatformAction(this.game.device.desktop, lang),
        g = Lang[lang][2],
        h = {
            font: "Bold " + scaleValue(30) + "px Arial",
            fill: 16777215,
            align: "center"
        };
    this.label_touch = this.game.add.text(this.tiles[this.horizontalSize].x + this.tileWidth / 2, this.makeYCoord(this.tiles[this.horizontalSize].y) + this.tileHeight / 2 - scaleValue(10), f, h), this.label_touch.anchor.set(.5, .5), this.label_touch.setStyle({
        font: "Bold " + bestSizeForText(this.label_touch.text, this.tileWidth - scaleValue(10), !0) + "px Arial",
        fill: "#ffffff",
        align: "center"
    });
    ({
        font: scaleValue(30) + "px Arial",
        fill: 16777215,
        align: "center"
    });
    this.label_touch_sup = this.game.add.text(this.label_touch.x, this.label_touch.y + scaleValue(20), g, h), this.label_touch_sup.anchor.set(.5, .5), this.label_touch_sup.setStyle({
        font: bestSizeForText(this.label_touch_sup.text, this.tileWidth - scaleValue(10), !1) + "px Arial",
        fill: "#ffffff",
        align: "center"
    }), this.elapsed = 0, this.touchProxy = this.create(0, 0), this.touchProxy.scale.set(320, 480), this.touchProxy.inputEnabled = !0, this.touchProxy.events.onInputDown.add(this.actionOnClick, this)
}, Board.prototype = Object.create(Phaser.Group.prototype), Board.prototype.constructor = Board;
var p = Board.prototype;
p.makeYCoord = function(a) {
    var b = a;
    return this.direction < 0 && (b = this.game.height - this.tileHeight - a), b
}, p.prepareSignals = function() {
    this.signalUpdateDeath.dispatch(this.totalKills), this.signalUpdateSpeed.dispatch(this.scrollSpeed)
}, p.spawnTile = function() {
    if (!("classic" == this.mode && this.spawningTiles >= this.targetTiles)) {
        var a = this.lastTile.y - this.tileHeight,
            b = this.game.rnd.integerInRange(0, this.horizontalSize - 1) * this.tileWidth,
            c = new aTile(b, a, this.tileWidth, this.tileHeight, 0);
        if ("mine" == this.mode) {
            var d = this.game.rnd.integerInRange(1, 8);
            8 == d && this.activeGame && !this.tiles[this.tiles.length - 1].mine && (c.mine = !0, c.color = 16711680)
        }
        if (this.tiles.push(c), this.updateLastTile(c), "twin" == this.mode) {
            var d = this.game.rnd.integerInRange(1, 8);
            if (8 == d & this.activeGame && !this.tiles[this.tiles.length - 1].haveTwin) {
                var e = b;
                do var b = this.game.rnd.integerInRange(0, this.horizontalSize - 1) * this.tileWidth; while (e == b);
                c.haveTween = !0;
                var c = new aTile(b, a, this.tileWidth, this.tileHeight, 0);
                c.haveTween = !0, this.tiles.push(c), this.updateLastTile(c), this.spawningTiles++
            }
        }
        if ("double" == this.mode) {
            var d = this.game.rnd.integerInRange(1, 8);
            8 == d & this.activeGame && !this.tiles[this.tiles.length - 1].doubleLayer && (c.doubleLayer = !0, c.color = 8947848)
        }
        this.spawningTiles++, "classic" == this.mode && this.spawningTiles == this.targetTiles && this.spawnFinish()
    }
}, p.updateLastTile = function(a) {
    this.lastTile = new aTile(a.x, a.y, a.width, a.height, a.color)
}, p.spawnFinish = function() {
    for (var a = 1; a <= 6; a++)
        for (var b = this.lastTile.y - this.tileHeight * a, c = 0; c < this.horizontalSize; c++) {
            var d = new aTile(c * this.tileWidth, b, this.tileWidth, this.tileHeight, 48128);
            d.active = !1, this.tiles.push(d)
        }
}, p.actionOnClick = function() {
    if (!this.wrongTile) {
        var a = this.checkClickOnTile(this.game.input.activePointer.x, this.game.input.activePointer.y);
        if ("got" == a && "mine" == this.mode && this.getActiveTile().mine && (a = "bad"), "got" == a) {
            if (this.soundMode > 0)
                if (1 == this.soundMode) {
                    var b = Songs[this.song].charAt(this.songTrigger);
                    TouchTheTile.Sounds[0][b].play(), this.songTrigger++, this.songTrigger >= Songs[this.song].length && (this.songTrigger = 0)
                } else TouchTheTile.Sounds[1].play();
            if (this.activeGame || (this.activeGame = !0, this.isRunning = !0, this.lightingTimer && this.lightingTimer.start(), this.label_touch_sup.destroy(), this.label_touch.destroy()), this.totalKills++, this.signalUpdateDeath.dispatch(this.totalKills), "double" == this.mode && this.getActiveTile().doubleLayer) return this.getActiveTile().doubleLayer = !1, void(this.getActiveTile().color = 0);
            this.getActiveTile().death = !0, this.getActiveTile().deathTimer = this.deathTime, this.getActiveTile().active = !1, this.reviveLostTwin(), "tap" == this.scrollMode && (this.scrollValue += this.tileHeight), "classic" == this.mode && this.targetTiles == this.totalKills && (this.soundMode > 0 && TouchTheTile.Sounds[5].play(), this.gameOverWin())
        } else "bad" == a && (this.soundMode > 0 && TouchTheTile.Sounds[this.soundMode + 1].play(), this.activeGame = !1, this.wrongTile = {
            x: Math.floor(this.game.input.activePointer.x / this.tileWidth) * this.tileWidth,
            y: this.getActiveTile().y,
            width: this.tileWidth,
            height: this.tileHeight,
            color: 16711680,
            time: 0
        }, this.gameOverFailed())
    }
}, p.update = function() {
    if (this.activeGame && this.getActiveTile() && this.getActiveTile().y + 5 >= this.gameOverY) {
        this.activeGame = !1;
        var a = this.getActiveTile();
        this.wrongTile = new aTile(a.x, a.y, this.tileWidth, this.tileHeight, a.color), this.wrongTile.time = 0, this.tiles.splice(this.tiles.indexOf(a), 1), this.scrollValue = 2.5 * this.tileHeight, this.soundMode > 0 && TouchTheTile.Sounds[this.soundMode + 1].play(), this.gameOverFailed()
    }
    if (this.checkTiles(), this.canvas.clear(), this.activeGame) this.moveTiles();
    else if (!this.activeGame && 0 != this.scrollValue && "tap" != this.scrollMode) {
        var b = 3 * this.autoScrollSpeed;
        b = Math.min(b, this.scrollValue), this.scrollValue -= b, this.wrongTile.moveOnY(-b), this.lastTile.moveOnY(b);
        for (var c = 0; c < this.tiles.length; c++) this.tiles[c].moveOnY(-b)
    }
    for (var c = 0; c < this.tiles.length; c++) {
        var d = this.tiles[c];
        if (d.death) {
            this.canvas.beginFill(d.color, .12), this.canvas.drawRect(d.x, this.makeYCoord(d.y), d.width, d.height), this.canvas.endFill();
            var e = d.x + (d.width / 2 - d.width / 2 * d.deathTimer / this.deathTime),
                f = this.makeYCoord(d.y) + (d.height / 2 - d.height / 2 * d.deathTimer / this.deathTime),
                g = d.width * d.deathTimer / this.deathTime,
                h = d.height * d.deathTimer / this.deathTime;
            g = Math.max(g, 0), h = Math.max(h, 0), this.canvas.beginFill(d.color, this.tiles[c].deathTimer / this.deathTime), this.canvas.drawRect(e, f, g, h), this.canvas.endFill(), this.tiles[c].deathTimer -= this.game.time.elapsed
        } else this.canvas.beginFill(d.color), this.canvas.drawRect(d.x, this.makeYCoord(d.y), d.width, d.height), this.canvas.endFill()
    }
    this.wrongTile && (this.wrongTile.time < 150 && (this.canvas.beginFill(this.wrongTile.color), this.canvas.drawRect(this.wrongTile.x, this.makeYCoord(this.wrongTile.y), this.wrongTile.width, this.wrongTile.height), this.canvas.endFill()), this.wrongTile.time += this.game.time.elapsed, this.wrongTile.time >= 300 && (this.wrongTile.time = 0)), this.canvas.lineStyle(scaleValue(1), 0);
    for (var c = 1; c < this.horizontalSize; c++) this.canvas.moveTo(c * this.tileWidth, this.spawnY), this.canvas.lineTo(c * this.tileWidth, this.deadY);
    var i = this.lastTile.y;
    do this.canvas.moveTo(0, this.makeYCoord(i)), this.canvas.lineTo(this.game.width, this.makeYCoord(i)), i += this.tileHeight; while (i <= this.deadY)
}, p.gameOverWin = function() {
    this.isRunning = !1, this.signalGameOver.dispatch(), console.log("Win")
}, p.gameOverFailed = function() {
    if (this.lightingTween) {
        this.lightingTimer.stop(!0), last = this.lightingTween._chainedTweens[0];
        do {
            if (null == last) break;
            last.stop(), last = last._chainedTweens[0]
        } while (null != last);
        this.lightingTween.stop(), this.lighing.alpha = 0
    }
    this.isRunning = !1, this.signalGameOver.dispatch(), console.log("Fail")
}, p.stopGame = function() {
    this.soundMode > 0 && TouchTheTile.Sounds[4].play(), this.wrongTile = {
        x: 0,
        y: 10 * this.tileHeight,
        width: this.tileWidth,
        height: this.tileHeight,
        color: 16711680,
        time: 0
    }, this.isRunning = !1, this.activeGame = !1, this.gameOverFailed()
}, p.moveTiles = function() {
    if ("auto" == this.scrollMode) {
        this.lastTile.moveOnY(this.scrollSpeed);
        for (var a = 0; a < this.tiles.length; a++) this.tiles[a].moveOnY(this.scrollSpeed)
    } else if ("tap" == this.scrollMode) {
        var b = this.autoScrollSpeed;
        b = Math.min(b, this.scrollValue), this.scrollValue -= b, this.lastTile.moveOnY(b);
        for (var a = 0; a < this.tiles.length; a++) this.tiles[a].moveOnY(b)
    }
    "arcade" != this.mode && "run" != this.mode || (this.scrollSpeed += this.scrollSpeedAcceleration, this.signalUpdateSpeed.dispatch(this.scrollSpeed))
}, p.checkTiles = function() {
    this.lastTile.y >= this.spawnY && this.spawnTile();
    for (var a = 0; a < this.tiles.length; a++) this.tiles[a].y > this.deadY && (this.tiles.splice(a, 1), a--)
}, p.reviveLostTwin = function() {
    for (var a = 0; a < this.tiles.length; a++) !this.tiles[a].haveTween || this.tiles[a].active || this.tiles[a].death ? this.tiles[a].haveTween && !this.tiles[a].active && this.tiles[a].death && (this.tiles[a].haveTween = !1) : (this.tiles[a].active = !0, this.tiles[a].haveTween = !1)
}, p.getActiveTile = function() {
    for (var a = null, b = 0; b < this.tiles.length; b++)
        if (this.tiles[b].active) {
            a = this.tiles[b];
            break
        }
    return a
}, p.getBox = function() {
    var a = this.getActiveTile();
    return null == a ? a : new Phaser.Rectangle(a.x, a.y - this.tileHeight / 3, a.width, a.height + this.tileHeight / 3 * 2)
}, p.checkClickOnTile = function(a, b) {
    var c = this.getActiveTile();
    if (null == c) return "empty";
    var d = "",
        e = {
            x1: c.x,
            y1: this.makeYCoord(c.y) - this.tileHeight / 3,
            x2: c.x + c.width,
            y2: this.makeYCoord(c.y) + c.height + this.tileHeight / 3 * 2
        };
    "mine" == this.mode && 1 == c.mine && (e.y1 = this.makeYCoord(c.y), e.y2 = this.makeYCoord(c.y + c.height));
    var f = {
        x: a,
        y: b
    };
    if (f.x > e.x1 && f.x < e.x2 && f.y > e.y1 && f.y < e.y2 ? d = "got" : f.y > this.makeYCoord(c.y) + c.height || f.y < this.makeYCoord(c.y) ? d = "empty" : (f.x > e.x2 || f.x < e.x1) && (d = "bad"), "mine" == this.mode && 1 == c.mine && "empty" == d) {
        c.active = !1;
        var g = this.checkClickOnTile(a, b);
        if ("got" == g) return g;
        c.active = !0
    }
    if ("twin" == this.mode && "bad" == d && c.haveTween) {
        c.active = !1, newTile = this.getActiveTile();
        var e = {
            x1: newTile.x,
            y1: newTile.y - this.tileHeight / 3,
            x2: newTile.x + newTile.width,
            y2: newTile.y + newTile.height + this.tileHeight / 3 * 2
        };
        f.x > e.x1 && f.x < e.x2 && f.y > e.y1 && f.y < e.y2 && (d = "got")
    }
    return d
};