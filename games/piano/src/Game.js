TouchTheTile.Game = function(a) {
    this.game, this.add, this.camera, this.cache, this.input, this.load, this.math, this.sound, this.stage, this.time, this.tweens, this.world, this.particles, this.physics, this.rnd
}, TouchTheTile.Game.prototype = {
    init: function(a, b) {
        SG_Hooks.start(), SG_Hooks.levelStarted(1), this.mode = a, this.level = b, this.modeTag = Modes[a].tag, this.modeLevel = Modes[a].levels[b], this.timer = 0, this.kills = 0, this.maxSpeed = 0, "classic" == this.modeTag ? this.targetDeath = this.modeLevel : "arcade" == this.modeTag || "run" == this.modeTag ? this.modeLevel = scaleValue(this.modeLevel) : "dzen" == this.modeTag ? (this.dzenTime = this.modeLevel, this.dzenTimer = this.dzenTime) : "trial" == this.modeTag && (this.trialTime = this.modeLevel, this.trialTarget = 25)
    },
    create: function() {
        this.game.time.advancedTiming = !0, this.game.stage.backgroundColor = 16777215, this.board = new Board(this.game, this.modeTag, this.modeLevel), this.gui = new GUI(this.game);
        var a = !1;
        "classic" != this.modeTag && "dzen" != this.modeTag && "trial" != this.modeTag || (a = !0), this.gui.setMode(a), this.gui.buttonAgain.onInputUp.add(this.startAgain, this), this.board.signalUpdateDeath.add(this.updateDeath, this), this.board.signalUpdateSpeed.add(this.updateSpeed, this), this.board.signalGameOver.add(this.showGameOver, this), this.board.prepareSignals(), this.game.input.onDown.add(function() {}, this)
    },
    startAgain: function() {
        game.paused = !0,
            // SG_Hooks.playButtonPressed(function() {
            game.paused = !1, game.state.start("Game", !0, !1, this.mode, this.level)
        // }.bind(this))
    },
    toSite: function() {
        SG.redirectToPortal()
    },
    toMenu: function() {
        this.game.state.start("Game", !0, !1, 2, "30''")
    },
    showGameOver: function() {
        Modes[this.mode].fullName, this.level;
        console.log(this);
        var c = "",
            d = 0,
            e = "";
        "classic" == this.modeTag ? this.targetDeath != this.kills ? (d = -1, c = Lang[lang][28]) : (d = (this.timer / 1e3).toFixed(2), c = d + "''", e = "''") : "arcade" == this.modeTag || "dzen" == this.modeTag || "trial" == this.modeTag || "arcade+" == this.modeTag ? (c = this.kills, d = this.kills) : "run" == this.modeTag && (c = this.maxSpeed, d = parseFloat(c.slice(0, -2)), e = "/s");
        var f = JSON.parse(SG_Hooks.getStorageItem("best")),
            g = 0;
        for (var h in Modes[this.mode].levels) {
            if (h == this.level) break;
            g++
        }
        var i = f[this.mode][g],
            j = Lang[lang][24];
        i > d && "classic" != this.modeTag || i < d && "classic" == this.modeTag && 0 != i || d == -1 && "classic" == this.modeTag && 0 != i ? j = Lang[lang][25] + ": " + i + e : d > 0 ? (f[this.mode][g] = d, SG_Hooks.getStorageItem("best", JSON.stringify(f))) : 0 == i && (j = ""), d < 0 && (d = 0), SG_Hooks.levelFinished(1, this.kills), SG_Hooks.gameOver(1, Math.floor(d)), this.gui.showGameOver("", "", c, j)
    },
    updateDeath: function(a) {
        this.kills = a, "classic" == this.modeTag ? this.gui.setBarProgress(a / this.targetDeath, !0) : "arcade" == this.modeTag || "dzen" == this.modeTag || "arcade+" == this.modeTag ? this.gui.updateDeathText(a) : "trial" == this.modeTag && (this.gui.setBarProgress(a % this.trialTarget / this.trialTarget, !0), a % this.trialTarget == 0 && (this.timer = 0))
    },
    updateSpeed: function(a) {
        this.maxSpeed = originalValue(a).toFixed(3) + "/s", "run" == this.modeTag && (a = originalValue(a), this.gui.updateDeathText(this.maxSpeed))
    },
    update: function() {
        if (this.board.isRunning && (this.timer += this.game.time.elapsed, "dzen" == this.modeTag && (this.dzenTimer -= this.game.time.elapsed, this.dzenTimer <= 0 && (this.board.stopGame(), this.gui.updateDeathText(Lang[lang][23])))), "classic" == this.modeTag && this.gui.updateTimeText(this.timer), "dzen" == this.modeTag && this.gui.setBarProgress(this.dzenTimer / this.dzenTime, !1), "trial" == this.modeTag) {
            var a = this.trialTime - this.timer;
            a <= 0 && this.board.activeGame ? (a = 0, this.board.stopGame(), this.gui.updateDeathText(Lang[lang][23])) : a > 0 && this.gui.updateTimeText(a)
        }
    },
    render: function() {}
};