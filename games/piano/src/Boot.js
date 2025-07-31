TouchTheTile = {
    score: 0,
    music: null,
    orientated: !1
}, TouchTheTile.Boot = function(a) {}, TouchTheTile.Boot.prototype = {
    preload: function() {
        canvas = document.getElementById("game"), canvas.style.opacity = .99, SG_Hooks.setOrientationHandler(this.scale.checkOrientationState), SG_Hooks.setResizeHandler(this.gameResized), this.game.input.maxPointers = 2, this.game.stage.disableVisibilityChange = !0, this.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE, this.scale.leaveFullScreen.add(this.exitFullscreen, this), this.scale.enterFullScreen.add(this.enterFullscreen, this), this.game.device.desktop ? (this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, this.scale.minWidth = 320, this.scale.minHeight = 480, this.scale.maxWidth = 1280, this.scale.maxHeight = 1920, this.scale.pageAlignHorizontally = !0, this.scale.pageAlignVertically = !0, this.scale.setScreenSize(!0)) : (this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, this.scale.minWidth = 320, this.scale.minHeight = 480, this.scale.maxWidth = 768, this.scale.maxHeight = 1024, this.scale.pageAlignHorizontally = !0, this.scale.pageAlignVertically = !0, this.scale.forceOrientation(!1, !0), this.scale.hasResized.add(this.gameResized, this), this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this), this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this), this.scale.setScreenSize(!0), this.scale.setShowAll(), this.scale.refresh()),
            function() {
                function a(a) {
                    switch (a.action) {
                        case "disableSound":
                            game.sound.mute = !0;
                            break;
                        case "enableSound":
                            game.sound.mute = !1;
                            break;
                        case "pauseGame":
                            game.paused = !0;
                            break;
                        case "unpauseGame":
                            game.paused = !1;
                            break;
                        case "triggerStartGame":
                            break;
                        case "startGame":
                    }
                }
                // SG_Hooks.registerObserver(a)
            }()
    },
    create: function() {
        this.game.state.start("Preloader")
    },
    exitFullscreen: function() {
        var a = this;
        setTimeout(function() {
            a.scale.setShowAll(), a.scale.refresh()
        }, 500)
    },
    enterFullscreen: function() {
        var a = this;
        setTimeout(function() {
            a.scale.setShowAll(), a.scale.refresh()
        }, 500)
    },
    gameResized: function(a, b) {},
    enterIncorrectOrientation: function() {
        TouchTheTile.orientated = !1, document.getElementById("orientation").style.display = "block", document.getElementById("game").style.display = "none"
    },
    leaveIncorrectOrientation: function() {
        TouchTheTile.orientated = !0, document.getElementById("orientation").style.display = "none", document.getElementById("game").style.display = "block";
        var a = this;
        setTimeout(function() {
            a.scale.setShowAll(), a.scale.refresh()
        }, 500)
    }
}, scaleValue = function(a) {
    var b = game.width / 320;
    return a * b
}, originalValue = function(a) {
    var b = game.width / 320;
    return a / b
};