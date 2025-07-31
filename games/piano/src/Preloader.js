function bestSizeForText(a, b, c, d) {
    null == d && (d = 30);
    var c = "";
    c && (c = "Bold ");
    for (var e = scaleValue(d), f = {
            font: c + e + "px Arial",
            fill: 16777215,
            align: "center"
        }, a = this.game.add.text(0, 0, a, f); a.width > b;) e--, a.setStyle({
        font: c + e + "px Arial",
        fill: 16777215,
        align: "center"
    });
    var g = e;
    return a.destroy(), g
}

function FormatNumberLength(a, b) {
    for (var c = "" + a; c.length < b;) c = "0" + c;
    return c
}
TouchTheTile.Preloader = function(a) {
    this.background = null, this.preloadBar = null, this.ready = !1
}, TouchTheTile.Preloader.prototype = {
    preload: function() {
        var a = this.game.add.bitmapData(this.game.width, this.game.height),
            b = a.context.createLinearGradient(0, 0, 0, this.game.height);
        b.addColorStop(0, "#000000"), b.addColorStop(1, "#555555"), a.context.fillStyle = b, a.context.fillRect(0, 0, this.game.width, this.game.height);
        var c = this.game.add.graphics(0, 0);
        c.beginFill(16777215), c.drawRect(0, 0, scaleValue(290), scaleValue(25)), c.endFill(), this.background = this.add.sprite(0, 0, a), this.preloadBar = this.add.sprite(scaleValue(10), scaleValue(200), c.generateTexture()), c.destroy(), this.load.setPreloadSprite(this.preloadBar), this.alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        for (var d = 0; d < this.alpha.length; d++) this.game.sound.usingAudioTag || this.load.audio(this.alpha[d], ["assets/snd/sound" + this.alpha[d] + ".mp3", "assets/snd/type_click.ogg"]);
        this.load.audio("type_click", "assets/snd/type_click.mp3", "assets/snd/type_click.ogg"), this.load.audio("type_fail", "assets/snd/type_fail.mp3", "assets/snd/type_fail.ogg"), this.load.audio("time_over", "assets/snd/time_over.mp3", "assets/snd/time_over.ogg"), this.load.audio("level_done", "assets/snd/level_done.mp3", "assets/snd/level_done.ogg")
    },
    create: function() {
        .4 != SG_Hooks.getStorageItem("version") && (SG_Hooks.setStorageItem("version", .4), SG_Hooks.setStorageItem("sound", 1), this.game.sound.usingAudioTag && SG_Hooks.setStorageItem("sound", 2), SG_Hooks.setStorageItem("best", JSON.stringify([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]))), TouchTheTile.Sounds = [{}, this.game.add.audio("type_click"), this.game.add.audio("H"), this.game.add.audio("type_fail"), this.game.add.audio("time_over"), this.game.add.audio("level_done")];
        for (var a = 0; a < this.alpha.length; a++) this.game.sound.usingAudioTag || (TouchTheTile.Sounds[0][this.alpha[a]] = this.game.add.audio(this.alpha[a]));
        this.preloadBar.cropEnabled = !1, this.game.input.onDown.add(function() {}, this), this.game.state.start("Game", !0, !1, 2, "30''")
    },
    update: function() {
        0 == this.ready && (this.ready = !0, this.game.state.start("Game", !0, !1, 2, "30''"))
    }
};