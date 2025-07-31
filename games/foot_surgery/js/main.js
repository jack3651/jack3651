var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
    music: null,
    applyCount: [0, 0, 0, 0, 0],
    shutterOn: [true],
};

Main.boot = function() {};
Main.boot.prototype = {
    preload: function() {
        game.stage.backgroundColor = '#00547c';
        game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
        game.stage.disableVisibilityChange = true;
        game.renderer.renderSession.roundPixels = true;

        game.scale.setResizeCallback(this.gameResized, this);

        game.load.image('loading', 'assets/prebar.png');
        game.load.image('prelogo', 'assets/prebg_logo.png');
        game.load.image('barover', 'assets/barover.png');



        game.load.onFileComplete.add(this.fileLoadFun, this);
    },
    gameResized: function(manager, bounds) {
        var xpos = window.innerWidth - (window.innerWidth / game.width);
        var scale = Math.min(window.innerWidth / game.width, window.innerHeight / game.height);
        manager.setUserScale(scale, scale, 0, 0);
        game.scale.pageAlignHorizontally = true;
    },
    fileLoadFun: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        if (progress == 100) {
            game.load.onFileComplete.removeAll();
            game.state.start('preloader');
        }
    }
}
Main.preloader = function() {};

Main.preloader.prototype = {
    init: function() {
        this.progressbar;
        this.check = 10;
        this.bgbtn;
        this.progress;
        this.prelogo;
    },
    preload: function() {
        this.progress = game.add.text(game.world.centerX, 500, "LOADING: 0%", {
            font: "bold 22px Arial",
            fill: "#ffffff",
            align: "center"
        });
        this.progress.anchor.setTo(0.5)
        this.prelogo = game.add.sprite((game.width / 2) - 100, (game.height / 2) - 100, 'prelogo');
        this.prelogo.inputEnabled = true
        this.prelogo.input.useHandCursor = true;
        this.prelogo.events.onInputUp.add(this.openLink, this);
        this.logotween = game.add.tween(this.prelogo.scale).to({
            x: 1.1,
            y: 1.1
        }, 700, "Linear", true, 0, -1);
        this.logotween.yoyo(true, 500);
        game.load.crossOrigin = '*';
        game.load.audio('music', ['assets/music.mp3']);
        game.load.spritesheet('soundicon', 'assets/soundicon.png', 73, 74);
        game.load.image('logo', 'assets/logo.png');
        game.load.spritesheet('effects', 'assets/effects.png', 141, 134);
        game.load.spritesheet('effectssd', 'assets/efftes012.png', 367, 335);

        game.load.image('treatmentbg', 'assets/treatmentbg.png');
        game.load.image('decorbg', 'assets/decorbg.png');
        game.load.image('titlebg', 'assets/titlebg.png');
        game.load.image('introbg', 'assets/introbg.png');
        game.load.image('iconbg', 'assets/iconbg.png');
        game.load.image('iconbg1', 'assets/iconbg1.png');
        game.load.image('playbtn', 'assets/playbtn.png');
        game.load.image('morebtn', 'assets/morebtn.png');
        game.load.image('nextbtn', 'assets/nextbtn.png');
        game.load.image('resetbtn', 'assets/resetbtn.png');
        game.load.image('popup1', 'assets/popup1.png');
        game.load.image('donebtn', 'assets/donebtn.png');
        game.load.image('foot', 'assets/decor/foot.png');
        game.load.image('blood', 'assets/surjery/blood.png');
        game.load.image('t1', 'assets/surjery/t3.png');
        game.load.image('outline', 'assets/nailpolish/outline.png');
        game.load.spritesheet('tool1', 'assets/surjery/tool1.png', 163, 87, 4);
        game.load.spritesheet('plate', 'assets/surjery/plate.png', 201, 201, 4);
        game.load.spritesheet('backwardarrow', 'assets/surjery/forwardarrow.png', 95, 69, 3);
        game.load.spritesheet('spot', 'assets/surjery/spot.png', 13, 14, 13);
        game.load.spritesheet('stiching', 'assets/surjery/stiching.png', 125, 228, 3);
        game.load.spritesheet('stiching1', 'assets/surjery/removestiching.png', 113, 239, 4);
        game.load.spritesheet('timer', 'assets/timer.png', 160, 160, 60);

        for (var i = 1; i <= 6; i++) {
            game.load.image('icon' + i, 'assets/icon' + i + '.png');
        }
        for (var i = 1; i <= 5; i++) {
            game.load.image('anklet' + i, 'assets/decor/Anklets000' + i + '.png');
            game.load.image('naildecor' + i, 'assets/decor/NailTextuer000' + i + '.png');
            game.load.image('ring' + i, 'assets/decor/Rings000' + i + '.png');
            game.load.image('tattoo' + i, 'assets/decor/tattoos000' + i + '.png');
        }
        for (var i = 1; i <= 4; i++) {
            game.load.image('topshoe' + i, 'assets/decor/topshoe000' + i + '.png');
        }
        for (var i = 1; i <= 2; i++) {
            game.load.image('wound' + i, 'assets/surjery/wound' + i + '.png');
        }
        for (var i = 1; i <= 3; i++) {
            game.load.image('piece' + i, 'assets/surjery/piece' + i + '.png');
            game.load.image('brush' + i, 'assets/nailpolish/brushobj' + i + '.png');
        }
        for (var i = 1; i <= 6; i++) {
            game.load.image('icon_' + i, 'assets/surjery/icon' + i + '.png');
        }
        for (var i = 1; i <= 10; i++) {
            game.load.image('btn' + i, 'assets/nailpolish/btn' + i + '.png');
        }
        for (var i = 1; i <= 10; i++) {
            game.load.image('colorobj' + i, 'assets/nailpolish/colorobj' + i + '.png');
        }
        for (i = 0; i < RelatedGames.length; i++) {
            game.load.image('thumb_' + i, RelatedGames[i]["thumb"]);
        }
        game.load.image('Tump_frame', 'assets/Tump_frame.png');
        //LLLLL
        game.load.onFileComplete.add(this.fileLoadFunPre, this);


    },
    fileLoadFunPre: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        this.progress.setText('LOADING: ' + parseInt(progress) + '%');
        if (progress == 100) {
            game.load.onFileComplete.removeAll();
            //AAAAAA
            game.state.start('title');
        }
    },
    openLink: function() {
        CreateLinksInGame("Moana-Foot-Surgery", "loading", "logo");
    }
}
Main.title = function() {}

Main.title.prototype = {
    create: function() {
        if (Main.music == null) {
            Main.music = game.add.audio('music', 0.5, true);
            Main.music.play();
        };
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'titlebg');
        this.levelGroup.add(this.bg);

        this.morebtn = game.add.sprite(73, 691.15, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(421.95, 698.15, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        this.levelGroup.add(this.playbtn);

        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(427, 5, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    openLink: function() {
        CreateLinksInGame("Moana-Foot-Surgery", "menu", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Moana-Foot-Surgery", "menu", "more");
    },
    btnOver: function(items) {
        items.scale.x = 1.05;
        items.scale.y = 1.05;
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.x = 1;
        items.scale.y = 1;
    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.state.start('intro');
    },
}

Main.intro = function() {}

Main.intro.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'introbg');
        this.levelGroup.add(this.introbg);
        this.morebtn = game.add.sprite(73, 691.15, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        this.levelGroup.add(this.morebtn);
        this.nextbtn = game.add.sprite(421.95, 698.15, 'nextbtn');
        this.nextbtn.anchor.setTo(0.5);
        this.nextbtn.scale.setTo(0);
        this.nextbtn.inputEnabled = true;
        this.nextbtn.input.useHandCursor = true;
        this.nextbtn.events.onInputUp.add(this.enterRoom, this);
        this.nextbtn.events.onInputOver.add(this.btnOver, this);
        this.nextbtn.events.onInputOut.add(this.btnOut, this);
        this.levelGroup.add(this.nextbtn);

        this.popup1 = game.add.sprite(320, 290, 'popup1');
        this.popup1.anchor.setTo(0.5);
        this.popup1.scale.setTo(0);
        this.levelGroup.add(this.popup1);



        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }

        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(427, 5, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }



    },
    startPopUp: function() {
        game.add.tween(this.popup1.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringBottons, this);
    },
    bringBottons: function() {
        game.add.tween(this.morebtn.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.nextbtn.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    openLink: function() {
        CreateLinksInGame("Moana-Foot-Surgery", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Moana-Foot-Surgery", "game", "morebutton");
    },
    btnOver: function(items) {
        items.scale.setTo(1.05);
        effectVar = game.add.sprite(items.x - 10, items.y - 70, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);

    },
    btnOut: function(items) {
        items.scale.setTo(1);
    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.state.start('surjery');
        });

    },
}

Main.decor = function() {}
var colors = ['0xE73235', '0xE732A3', '0xA832E7', '0x3E32E7', '0x32AAE7', '0x32E766', '0xF0D930', '0xEE6B1F', '0x7B20EE', '0x0E0E0E'];
var brushPosX = [100.3, 100.7, 99.7];
var brushPosY = [640, 643.45, 577.35];

var colorobjPosX = [27, 35, 55, 77, 127, 393, 440, 465, 482, 485];
var colorobjPosY = [570, 585, 587, 590, 570, 576, 583, 572, 564, 551];
var btnPosX = [395.9, 423.95, 451.95, 395.9, 423.95, 451.95, 391.8, 422.6, 451.95, 421.25];
var btnPosY = [133.1, 133.1, 133.1, 208.85, 208.85, 208.85, 277.65, 277.65, 277.65, 341.1];
var color = 0;
var objColor = [];
for (var k = 0; k < 10; k++) {
    objColor[k] = '0xFFFFFF';
}
var shutterOff = false;
Main.decor.prototype = {
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.levelGroup = game.add.group();
        this.iconGroup = game.add.group();

        this.morebtn = game.add.sprite(63, 437.15, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.8);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver1, this);
        this.morebtn.events.onInputOut.add(this.btnOut1, this);
        this.nextbtn = game.add.sprite(441.95, 437.15, 'donebtn');
        this.nextbtn.anchor.setTo(0.5);
        this.nextbtn.scale.setTo(0.8);
        this.nextbtn.inputEnabled = true;
        this.nextbtn.input.useHandCursor = true;
        this.nextbtn.events.onInputUp.add(this.enterRoom, this);
        this.nextbtn.events.onInputOver.add(this.btnOver1, this);
        this.nextbtn.events.onInputOut.add(this.btnOut1, this);

        this.resetbtn = game.add.sprite(63, 307.15, 'resetbtn');
        this.resetbtn.anchor.setTo(0.5);
        this.resetbtn.scale.setTo(0.8);
        this.resetbtn.inputEnabled = true;
        this.resetbtn.input.useHandCursor = true;
        this.resetbtn.events.onInputUp.add(this.resetfun, this);
        this.resetbtn.events.onInputOver.add(this.btnOver1, this);
        this.resetbtn.events.onInputOut.add(this.btnOut1, this);


        this.bg = game.add.sprite(0, 0, 'decorbg');

        this.iconbg = game.add.sprite(252.05, 728.15, 'iconbg');
        this.iconbg.anchor.setTo(0.5);

        this.icon1 = game.add.sprite(44.75, 730.7, 'icon1');
        this.icon1.anchor.setTo(0.5);
        this.icon1.arrayindex = 2;
        this.icon1.total = 5;
        this.icon1.inputEnabled = true;
        this.icon1.input.useHandCursor = true;
        this.icon1.events.onInputOver.add(this.btnOver, this);
        this.icon1.events.onInputOut.add(this.btnOut, this);
        this.icon1.events.onInputUp.add(this.changeItem2, this);
        this.iconGroup.add(this.icon1);

        this.icon2 = game.add.sprite(129, 730.7, 'icon2');
        this.icon2.anchor.setTo(0.5);
        this.icon2.arrayindex = 4;
        this.icon2.total = 5;
        this.icon2.inputEnabled = true;
        this.icon2.input.useHandCursor = true;
        this.icon2.events.onInputOver.add(this.btnOver, this);
        this.icon2.events.onInputOut.add(this.btnOut, this);
        this.icon2.events.onInputUp.add(this.changeItem2, this);
        this.iconGroup.add(this.icon2);

        this.icon3 = game.add.sprite(210.25, 730.7, 'icon3');
        this.icon3.anchor.setTo(0.5);
        this.icon3.arrayindex = 3;
        this.icon3.total = 5;
        this.icon3.inputEnabled = true;
        this.icon3.input.useHandCursor = true;
        this.icon3.events.onInputOver.add(this.btnOver, this);
        this.icon3.events.onInputOut.add(this.btnOut, this);
        this.icon3.events.onInputUp.add(this.changeItem2, this);
        this.iconGroup.add(this.icon3);

        this.icon4 = game.add.sprite(292.3, 730.7, 'icon4');
        this.icon4.anchor.setTo(0.5);
        this.icon4.inputEnabled = true;
        this.icon4.input.useHandCursor = true;
        this.icon4.events.onInputOver.add(this.btnOver, this);
        this.icon4.events.onInputOut.add(this.btnOut, this);
        this.icon4.events.onInputUp.add(this.icon6fun, this);
        this.iconGroup.add(this['icon' + 4]);

        this.icon5 = game.add.sprite(375.8, 730.7, 'icon5');
        this.icon5.anchor.setTo(0.5);
        this.icon5.arrayindex = 1;
        this.icon5.total = 5;
        this.icon5.inputEnabled = true;
        this.icon5.input.useHandCursor = true;
        this.icon5.events.onInputOver.add(this.btnOver, this);
        this.icon5.events.onInputOut.add(this.btnOut, this);
        this.icon5.events.onInputUp.add(this.changeItem2, this);
        this.iconGroup.add(this.icon5);

        this.icon6 = game.add.sprite(457.85, 730.7, 'icon6');
        this.icon6.anchor.setTo(0.5);
        this.icon6.arrayindex = 0;
        this.icon6.total = 4;
        this.icon6.inputEnabled = true;
        this.icon6.input.useHandCursor = true;
        this.icon6.events.onInputOver.add(this.btnOver, this);
        this.icon6.events.onInputOut.add(this.btnOut, this);
        this.icon6.events.onInputUp.add(this.changeItem2, this);
        this.iconGroup.add(this.icon6);

        //for(var i=1;i<=5;i++)
        //{
        //this['icon'+i].inputEnabled = true;
        //this['icon'+i].input.useHandCursor = true;
        //this['icon'+i].events.onInputOver.add(this.btnOver, this);
        //this['icon'+i].events.onInputOut.add(this.btnOut, this);
        //this['icon'+i].events.onInputUp.add(this.changeItem2, this);
        //this.iconGroup.add(this['icon'+i]);
        //}

        this.paint1 = game.add.sprite(425.1, 233.85, 'outline');
        this.paint1.anchor.setTo(0.5);

        this.colorobjgrp = game.add.group();
        for (var i = 1; i <= 10; i++) {
            this.colorobj = game.add.sprite(colorobjPosX[i - 1], colorobjPosY[i - 1], 'colorobj' + i);
            this.colorobj.anchor.setTo(0.5);
            this.colorobj.alpha = 0;
            this.colorobj.id = i - 1;

            this.colorobj.inputEnabled = true;
            //this.colorobj.input.pixelPerfectClick = true;
            //this.colorobj.input.pixelPerfectOver = true;
            this.colorobj.events.onInputDown.add(this.setColor, this);
            this.colorobj.events.onInputOver.add(this.resetColor, this);
            this.colorobj.events.onInputOut.add(this.outColor, this);
            this.colorobjgrp.add(this.colorobj);
        }
        this.btngrp = game.add.group();

        this.btngrp.add(this.paint1);

        for (var j = 1; j <= 10; j++) {
            this.btn = game.add.sprite(btnPosX[j - 1], btnPosY[j - 1], 'btn' + j)
            this.btn.anchor.setTo(0.5);
            this.btn.id = j - 1;
            this.btn.inputEnabled = true;
            this.btn.input.pixelPerfectClick = true;
            this.btn.input.useHandCursor = true;
            this.btn.events.onInputDown.add(this.colorChoose, this);
            this.btngrp.add(this.btn);
        }
        this.brushgrp = game.add.group();
        for (var m = 1; m <= 3; m++) {
            this.brush = game.add.sprite(brushPosX[m - 1], brushPosY[m - 1], 'brush' + m);
            this.brush.anchor.setTo(0.5);
            this.brushgrp.add(this.brush);
        }
        this.brushgrp.children[0].tint = 0xE73235;
        this.brushgrp.visible = false;
        this.btngrp.visible = false;

        this.footGroup = game.add.group();
        this.frontshoeGroup = game.add.group();
        this.naildecorGroup = game.add.group();
        this.ankletsGroup = game.add.group();
        this.ringGroup = game.add.group();
        this.tattooGroup = game.add.group();

        this.foot = game.add.sprite(252.05, 310.4, 'foot');
        this.foot.anchor.setTo(0.5);
        this.footGroup.add(this.foot);
        this.retainObjects();
        this.levelGroup.add(this.bg);
        this.levelGroup.add(this.footGroup);
        this.levelGroup.add(this.tattooGroup);
        this.levelGroup.add(this.colorobjgrp);

        this.levelGroup.add(this.naildecorGroup);
        this.levelGroup.add(this.ringGroup);
        this.levelGroup.add(this.ankletsGroup);
        this.levelGroup.add(this.frontshoeGroup);
        this.levelGroup.add(this.iconbg);

        this.levelGroup.add(this.iconGroup);
        this.levelGroup.add(this.nextbtn);
        this.levelGroup.add(this.morebtn);


        if (Main.shutterOn[0] && !shutterOff) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true);
        }

        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(427, 5, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    icon6fun: function() {
        this.brushgrp.visible = true;
        this.btngrp.visible = true;
    },
    changeItem2: function(evt) {
        this.brushgrp.visible = false;
        this.btngrp.visible = false;
        switch (evt.arrayindex) {
            case 0:
                effectVar = game.add.sprite(200, 520, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 1:
                effectVar = game.add.sprite(100, 570, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 2:
                effectVar = game.add.sprite(400, 570, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 3:
                effectVar = game.add.sprite(200, 350, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 4:
                effectVar = game.add.sprite(400, 570, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 5:
                effectVar = game.add.sprite(200, 200, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
        }
        if (Main.applyCount[evt.arrayindex] < evt.total) {
            Main.applyCount[evt.arrayindex]++;
        } else {
            Main.applyCount[evt.arrayindex] = 1;
        }

        this.retainObjects();
    },
    retainObjects: function() {
        this.frontshoeGroup.removeAll();
        if (Main.applyCount[0] >= 1) {
            this.topshoe = game.add.sprite(252.05, 431.1, 'topshoe' + Main.applyCount[0]);
            this.topshoe.anchor.setTo(0.5);
            this.frontshoeGroup.add(this.topshoe);
        }

        this.naildecorGroup.removeAll();
        if (Main.applyCount[1] >= 1) {
            this.naildecor = game.add.sprite(252.05, 587.15, 'naildecor' + Main.applyCount[1]);
            this.naildecor.anchor.setTo(0.5);
            this.naildecorGroup.add(this.naildecor);
        }
        this.ankletsGroup.removeAll();
        if (Main.applyCount[2] >= 1) {
            this.anklet = game.add.sprite(227, 323.05, 'anklet' + Main.applyCount[2]);
            this.anklet.anchor.setTo(0.5);
            this.ankletsGroup.add(this.anklet);
        }
        this.ringGroup.removeAll();
        if (Main.applyCount[3] >= 1) {
            this.ring = game.add.sprite(252.05, 582.65, 'ring' + Main.applyCount[3]);
            this.ring.anchor.setTo(0.5);
            this.ringGroup.add(this.ring);
        }
        this.tattooGroup.removeAll();
        if (Main.applyCount[4] >= 1) {
            this.tattoo = game.add.sprite(238.55, 316.85, 'tattoo' + Main.applyCount[4]);
            this.tattoo.anchor.setTo(0.5);
            this.tattooGroup.add(this.tattoo);
        }
    },
    openLink: function() {
        CreateLinksInGame("Moana-Foot-Surgery", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Moana-Foot-Surgery", "game", "more");
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.state.start('finalscreen');
        });
    },
    btnOver: function(items) {
        items.scale.x = 1.05;
        items.scale.y = 1.05;
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.x = 1;
        items.scale.y = 1;
    },
    resetfun: function() {
        //console.log('hi');
        Main.applyCount = [0, 0, 0, 0, 0, 0];
        color = 0;
        objColor = [];
        for (var k = 0; k < 10; k++) {
            objColor[k] = '0xFFFFFF';
            if (k < 8) {
                this.colorobjgrp.children[k].tint = objColor[k];
                this.colorobjgrp.children[k].alpha = 0;

            }
        }
        //   this.retainObjects();
        shutterOff = true;
        game.state.start('decor');

    },
    btnOver1: function(items) {
        items.scale.x = 0.85;
        items.scale.y = 0.85;
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut1: function(items) {
        items.scale.x = 0.8;
        items.scale.y = 0.8;
    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    colorChoose: function(btn) {
        color = btn.id;
        this.brushgrp.children[0].tint = colors[color];
    },
    setColor: function(obj) {
        if (this.brushgrp.visible) {

            objColor[obj.id] = colors[color];
            obj.tint = objColor[obj.id];
            obj.alpha = 1;

        }

    },
    resetColor: function(obj) {
        if (this.brushgrp.visible) {
            obj.tint = colors[color];


            obj.alpha = 1;
        }
    },
    outColor: function(obj) {
        if (this.brushgrp.visible) {

            obj.tint = objColor[obj.id];
            if (objColor[obj.id] == '0xFFFFFF') {
                obj.alpha = 0;

            }
        }

    },
    update: function() {
        if (game.input.activePointer.isUp) {
            this.brushgrp.angle = 40;
            this.brushgrp.scale.setTo(0.7);
            this.brushgrp.x = game.input.x + 240;
            this.brushgrp.y = game.input.y - 390;
        }
    },
}
Main.surjery = function() {}

Main.surjery.prototype = {
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.tool1drag = false;
        this.tool2drag = false;
        this.tool3drag = false;
        this.tool4drag = false;
        this.tool7drag = false;
        this.tool8drag = false;
        this.levelGroup = game.add.group();
        this.tool1Group = game.add.group();
        this.tool2Group = game.add.group();
        this.tool3Group = game.add.group();
        this.bg = game.add.sprite(0, 0, 'treatmentbg');
        this.levelGroup.add(this.bg);

        this.iconbg1 = game.add.sprite(413, 233, 'iconbg1');
        this.iconbg1.anchor.setTo(0.5);
        this.levelGroup.add(this.iconbg1);

        this.tool1 = game.add.sprite(411, 106.5, 'tool1');
        this.tool1.anchor.setTo(0.5);
        this.tool1.scale.setTo(0.7);
        this.tool1.inputEnabled = true;
        this.tool1.input.useHandCursor = true;
        this.tool1.events.onInputDown.add(this.tool1fun, this);
        this.tool1Group.add(this.tool1);
        this.tooltween1 = game.add.tween(this.tool1.scale).to({
            x: 0.8,
            y: 0.8
        }, 500, "Linear", true, 0, -1);

        this.tool2 = game.add.sprite(414.5, 231.5, 'icon_1');
        this.tool2.anchor.setTo(0.5);
        this.tool2.events.onInputDown.add(this.tool2fun, this);
        this.tool1Group.add(this.tool2);
        this.tooltween2 = game.add.tween(this.tool2.scale).to({
            x: 1.1,
            y: 1.1
        }, 500, "Linear", true, 0, -1);
        this.tooltween2.pause();
        this.tool3 = game.add.sprite(413.5, 362.5, 'icon_2');
        this.tool3.anchor.setTo(0.5);
        this.tool3.events.onInputDown.add(this.tool3fun, this);
        this.tool1Group.add(this.tool3);
        this.tooltween3 = game.add.tween(this.tool3.scale).to({
            x: 1.1,
            y: 1.1
        }, 500, "Linear", true, 0, -1);
        this.tooltween3.pause();

        this.tool4 = game.add.sprite(411, 106.5, 'icon_3');
        this.tool4.anchor.setTo(0.5);
        this.tool4.scale.setTo(0.7);
        this.tool4.events.onInputDown.add(this.tool4fun, this);
        this.tool2Group.add(this.tool4);
        this.tooltween4 = game.add.tween(this.tool4.scale).to({
            x: 0.8,
            y: 0.8
        }, 500, "Linear", true, 0, -1);
        this.tooltween4.pause();

        this.tool5 = game.add.sprite(414.5, 231.5, 'icon_4');
        this.tool5.anchor.setTo(0.5);
        this.tool5.events.onInputDown.add(this.tool5fun, this);
        this.tool2Group.add(this.tool5);
        this.tooltween5 = game.add.tween(this.tool5.scale).to({
            x: 1.1,
            y: 1.1
        }, 500, "Linear", true, 0, -1);
        this.tooltween5.pause();
        this.tool6 = game.add.sprite(413.5, 337.5, 'icon_5');
        this.tool6.anchor.setTo(0.5);
        this.tool6.events.onInputDown.add(this.tool6fun, this);
        this.tool2Group.add(this.tool6);
        this.tooltween6 = game.add.tween(this.tool6.scale).to({
            x: 1.1,
            y: 1.1
        }, 500, "Linear", true, 0, -1);
        this.tooltween6.pause();

        this.tool6_1 = game.add.sprite(413.5, 387.5, 'icon_5');
        this.tool6_1.anchor.setTo(0.5);
        this.tool6_1.events.onInputDown.add(this.tool6fun1, this);
        this.tool2Group.add(this.tool6_1);
        this.tooltween6_1 = game.add.tween(this.tool6_1.scale).to({
            x: 1.1,
            y: 1.1
        }, 500, "Linear", true, 0, -1);
        this.tooltween6_1.pause();

        this.tool7 = game.add.sprite(409.5, 113.5, 'icon_1');
        this.tool7.anchor.setTo(0.5);
        this.tool7.scale.setTo(0.7);
        this.tool7.events.onInputDown.add(this.tool7fun, this);
        this.tool3Group.add(this.tool7);
        this.tooltween7 = game.add.tween(this.tool7.scale).to({
            x: 0.8,
            y: 0.8
        }, 500, "Linear", true, 0, -1);
        this.tooltween7.pause();

        this.tool8 = game.add.sprite(414.5, 305, 'icon_6');
        this.tool8.anchor.setTo(0.5);
        this.tool8.events.onInputDown.add(this.tool8fun, this);
        this.tool3Group.add(this.tool8);
        this.tooltween8 = game.add.tween(this.tool8.scale).to({
            x: 1.1,
            y: 1.1
        }, 500, "Linear", true, 0, -1);
        this.tooltween8.pause();

        this.t1 = game.add.sprite(413.5, 362.5, 't1');
        this.t1.anchor.setTo(0.5);
        this.t1.visible = false;
        this.tool1Group.add(this.t1);

        this.spotGroup = game.add.group();
        var spotposX = [240, 255, 275, 290, 280, 260];
        var spotposY = [380, 480, 570, 500, 450, 400];
        for (var i = 1; i <= 6; i++) {
            this['spot' + i] = game.add.sprite(spotposX[i - 1], spotposY[i - 1], 'spot');
            this['spot' + i].anchor.setTo(0.5);
            this['spot' + i].id = i;
            this['spot' + i].visible = false;
            this['spot' + i].animations.add('spot');
            this['spot' + i].animations.play('spot', 10, true);
            this['spot' + i].events.onInputDown.add(this.spotfun, this);
            this.spotGroup.add(this['spot' + i]);
        }
        this.spotGroup1 = game.add.group();
        var spotpos1X = [255, 270, 280];
        var spotpos1Y = [420, 490, 540];
        for (var i = 1; i <= 3; i++) {
            this['spot_' + i] = game.add.sprite(spotpos1X[i - 1], spotpos1Y[i - 1], 'spot');
            this['spot_' + i].anchor.setTo(0.5);
            this['spot_' + i].id = i;
            this['spot_' + i].visible = false;
            this['spot_' + i].animations.add('spot');
            this['spot_' + i].animations.play('spot', 10, true);
            this['spot_' + i].events.onInputDown.add(this.spotfun1, this);
            this.spotGroup1.add(this['spot' + i]);
        }
        this.spotGroup2 = game.add.group();
        var spotpos2X = [250, 270, 270];
        var spotpos2Y = [430, 470, 520];
        for (var i = 1; i <= 3; i++) {
            this['spot1_' + i] = game.add.sprite(spotpos2X[i - 1], spotpos2Y[i - 1], 'spot');
            this['spot1_' + i].anchor.setTo(0.5);
            this['spot1_' + i].id = i;
            this['spot1_' + i].visible = false;
            this['spot1_' + i].animations.add('spot');
            this['spot1_' + i].animations.play('spot', 10, true);
            this.spotGroup2.add(this['spot' + i]);
        }

        this.stichingGroup = game.add.group();

        this.stiching = game.add.sprite(271, 471.5, 'stiching');
        this.stiching.anchor.setTo(0.5);
        this.stiching.visible = false;
        this.stichingGroup.add(this.stiching);

        this.stiching1 = game.add.sprite(264, 475.5, 'stiching1');
        this.stiching1.anchor.setTo(0.5);
        this.stiching1.visible = false;
        this.stichingGroup.add(this.stiching1);
        this.plate = game.add.sprite(-70, 600, 'plate');
        this.plate.anchor.setTo(0.5);
        this.plate.scale.setTo(0.7);
        this.plate.events.onInputDown.add(this.platefun, this);
        this.levelGroup.add(this.plate);

        this.tool3Group.visible = false;
        this.tool2Group.visible = false;

        this.morebtn = game.add.sprite(73, 691.15, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        this.levelGroup.add(this.morebtn);
        this.nextbtn = game.add.sprite(421.95, 698.15, 'donebtn');
        this.nextbtn.anchor.setTo(0.5);
        this.nextbtn.scale.setTo(0);
        this.nextbtn.inputEnabled = true;
        this.nextbtn.input.useHandCursor = true;
        this.nextbtn.events.onInputUp.add(this.enterRoom, this);
        this.nextbtn.events.onInputOver.add(this.btnOver, this);
        this.nextbtn.events.onInputOut.add(this.btnOut, this);
        this.levelGroup.add(this.nextbtn);

        this.backwardbtn = game.add.sprite(419.45, 490.35, 'backwardarrow');
        this.backwardbtn.anchor.setTo(0.5);
        this.backwardbtn.animations.add('backwardbtn');
        this.backwardbtn.visible = false;
        this.backwardbtn.inputEnabled = true;
        this.backwardbtn.input.useHandCursor = true;
        this.backwardbtn.events.onInputUp.add(this.prevSlide, this);
        this.backwardbtn.events.onInputOver.add(this.btnOver1, this);
        this.backwardbtn.events.onInputOut.add(this.btnOut1, this);
        this.levelGroup.add(this.backwardbtn);

        this.woundGroup = game.add.group();
        this.wound1 = game.add.sprite(261, 475.5, 'wound1');
        this.wound1.anchor.setTo(0.5);
        this.woundGroup.add(this.wound1);

        this.blood = game.add.sprite(249, 473.5, 'blood');
        this.blood.anchor.setTo(0.5);
        this.woundGroup.add(this.blood);

        this.wound2 = game.add.sprite(263, 476.5, 'wound2');
        this.wound2.anchor.setTo(0.5);
        this.woundGroup.add(this.wound2);

        this.pieceGroup = game.add.group();
        var pieceposX = [260, 269.5, 290];
        var pieceposY = [414, 471, 527];
        for (var i = 1; i <= 3; i++) {
            this['piece' + i] = game.add.sprite(pieceposX[i - 1], pieceposY[i - 1], 'piece' + i);
            this['piece' + i].anchor.setTo(0.5);
            this['piece' + i].id = i;
            this['piece' + i].events.onInputDown.add(this.piecefun, this);
            this.pieceGroup.add(this['piece' + i]);
        }
        this.timer = game.add.sprite(-100, 730, 'timer');
        this.timer.anchor.setTo(0.5);
        this.timer.scale.setTo(0.7);
        this.timer.animations.add('timer');

        this.timer.visible = false;
        game.physics.arcade.enable([this.tool2, this.blood]);

        this.tool2.body.collideWorldBounds = true;
        this.blood.body.collideWorldBounds = true;

        this.tool2.body.onCollide = new Phaser.Signal();
        this.tool2.body.onCollide.add(this.hitSprite, this);

        this.levelGroup.add(this.woundGroup);
        this.levelGroup.add(this.pieceGroup);
        this.levelGroup.add(this.spotGroup);
        this.levelGroup.add(this.stichingGroup);
        this.levelGroup.add(this.tool1Group);
        this.levelGroup.add(this.tool2Group);
        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true);
        }

        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(427, 5, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
        this.platecount = 0;
        this.spotcount = 0;
        this.spotcount1 = 0;
        this.stepcount = 1;
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    prevSlide: function() {
        this.stepcount++;
        switch (this.stepcount) {
            case 2:
                this.tool2Group.visible = true;
                this.tool1Group.visible = false;
                this.tool3Group.visible = false;
                this.backwardbtn.visible = false;
                break;
            case 3:
                this.tool3Group.visible = true;
                this.tool1Group.visible = false;
                this.tool2Group.visible = false;
                break;
        }
    },
    tool1fun: function() {
        this.tool1.inputEnabled = false;
        this.tool1.input.useHandCursor = false;
        this.tool1drag = true;
        this.tool1.scale.x *= -1;
        this.tooltween1.stop();
        this.piece1.inputEnabled = true;
        this.piece1.input.useHandCursor = true;
    },
    piecefun: function(evt) {
        game.add.tween(this.plate).to({
            x: 100,
            y: 600
        }, 500, "Linear", true).onComplete.add(function() {
            this.plate.inputEnabled = true;
            this.plate.input.useHandCursor = true;
        }, this);
        evt.kill();
        this.tool1.frame = evt.id;
    },
    platefun: function() {
        this.platecount++;
        if (this.platecount == 3) {
            this['piece' + (this.platecount)].inputEnabled = true;
            this['piece' + (this.platecount)].input.useHandCursor = true;
        } else {
            this['piece' + (this.platecount + 1)].inputEnabled = true;
            this['piece' + (this.platecount + 1)].input.useHandCursor = true;
        }
        if (this.platecount == 3) {
            this.tool1drag = false;
            game.add.tween(this.tool1).to({
                x: 411,
                y: 106.5
            }, 500, "Linear", true).onComplete.add(function() {
                game.add.tween(this.plate).to({
                    x: -100,
                    y: 600
                }, 500, "Linear", true);
                this.tool2.inputEnabled = true;
                this.tool2.input.useHandCursor = true;
                this.tooltween2.resume();

            }, this);
        }
        this.plate.frame++;
        this.tool1.frame = 0;
        this.plate.inputEnabled = false;
        this.plate.input.useHandCursor = false;
    },
    tool2fun: function() {
        this.tooltween2.stop();
        this.tool2drag = true;
        this.tool2.scale.setTo(0.6);
        this.tool2.inputEnabled = false;
        this.tool2.input.useHandCursor = false;
    },
    hitSprite: function(obj1, obj2) {
        game.time.events.add(1000, function() {

            game.add.tween(obj2).to({
                alpha: 0
            }, 500, "Linear", true).onComplete.add(function() {
                this.tool2drag = false;
                game.add.tween(this.tool2).to({
                    x: 414.5,
                    y: 231.5
                }, 100, "Linear", true).onComplete.add(function() {
                    obj2.kill();
                    this.tooltween3.resume();
                    this.tool3.inputEnabled = true;
                    this.tool3.input.useHandCursor = true;
                }, this);
            }, this);
        }, this)
    },
    tool3fun: function() {
        this.backwardbtn.visible = true;
        this.tooltween3.stop();
        this.tool3drag = true;
        this.t1.visible = true;
        this.tool3.alpha = 0;
        this.tool3.inputEnabled = false;
        this.tool3.input.useHandCursor = false;
        game.time.events.add(5000, function() {
            game.add.tween(this.t1).to({
                x: 413.5,
                y: 362.5
            }, 100, "Linear", true).onComplete.add(function() {
                game.add.tween(this.t1).to({
                    alpha: 0
                }, 100, "Linear", true);
                game.add.tween(this.tool3).to({
                    alpha: 1
                }, 100, "Linear", true).onComplete.add(function() {
                    this.tooltween4.resume();
                    this.tool4.inputEnabled = true;
                    this.tool4.input.useHandCursor = true;
                }, this);
            }, this);
        }, this);
    },
    tool4fun: function() {
        this.tooltween4.stop();

        this.tool4drag = true;
        this.tool4.inputEnabled = false;
        this.tool4.input.useHandCursor = false;
        this['spot' + 1].visible = true
        this['spot' + 1].inputEnabled = true
        this['spot' + 1].input.useHandCursor = true
    },
    spotfun: function(evt) {
        evt.kill();
        this.spotcount++;
        if (evt.id < 6) {
            this['spot' + (evt.id + 1)].visible = true
            this['spot' + (evt.id + 1)].inputEnabled = true
            this['spot' + (evt.id + 1)].input.useHandCursor = true
        } else {
            this['spot' + (evt.id)].visible = false;
            this['spot' + (evt.id)].inputEnabled = false;
            this['spot' + (evt.id)].input.useHandCursor = false;
        }
        if (this.spotcount >= 4) {
            this.stiching.visible = true;
            this.stiching.frame = (this.spotcount - 4);
            game.add.tween(this.woundGroup).to({
                alpha: 0
            }, 300, "Linear", true);
        }
        if (this.spotcount == 6) {
            game.add.tween(this.tool4).to({
                x: 411,
                y: 106.5
            }, 200, "Linear", true).onComplete.add(function() {
                this.tool4drag = false;
                this.tool5.inputEnabled = true;
                this.tool5.input.useHandCursor = true;
                this.tooltween5.resume();
            }, this);
        }
    },
    tool5fun: function() {
        //this.tool5drag=true;
        this.tooltween5.stop();
        this.tool5.scale.setTo(1.3);
        this.tool5.angle = -35;
        this.tool5.inputEnabled = false;
        this.tool5.input.useHandCursor = false;
        game.add.tween(this.tool5).to({
            x: 271,
            y: 471.5
        }, 400, "Linear", true).onComplete.add(function() {
            this.tooltween6.resume();
            this.tool6.inputEnabled = true;
            this.tool6.input.useHandCursor = true;
        }, this)
    },
    tool6fun: function() {
        //this.tool5drag=true;
        this.tooltween6.stop();
        this.tool6.angle = -25;
        this.tool6.inputEnabled = false;
        this.tool6.input.useHandCursor = false;
        game.add.tween(this.tool6).to({
            x: 251,
            y: 431.5
        }, 400, "Linear", true).onComplete.add(function() {
            this.tooltween6_1.resume();
            this.tool6_1.inputEnabled = true;
            this.tool6_1.input.useHandCursor = true;
        }, this)
    },
    tool6fun1: function() {
        //this.tool5drag=true;
        this.tooltween6_1.stop();
        this.tool6_1.angle = -25;
        this.tool6_1.inputEnabled = false;
        this.tool6_1.input.useHandCursor = false;
        game.add.tween(this.tool6_1).to({
            x: 271,
            y: 521.5
        }, 400, "Linear", true).onComplete.add(function() {
            this.timer.visible = true;

            game.add.tween(this.timer).to({
                x: 250
            }, 100, "Linear", true).onComplete.add(function() {
                this.timer.animations.play('timer', 20, false).onComplete.add(function() {

                    game.add.tween(this.timer).to({
                        x: -100
                    }, 100, "Linear", true).onComplete.add(function() {
                        this.timer.visible = false;
                        this['spot1_1'].visible = true;
                        this['spot1_1'].inputEnabled = true;
                        this['spot1_1'].input.useHandCursor = true;
                        this['spot1_1'].events.onInputDown.add(this.spotfun2, this);
                    }, this)
                }, this)
            }, this)
        }, this)
    },
    spotfun2: function(evt) {
        evt.kill();
        game.add.tween(this.tool6).to({
            alpha: 0
        }, 500, "Linear", true).onComplete.add(function() {
            this['spot1_3'].visible = true;
            this['spot1_3'].inputEnabled = true;
            this['spot1_3'].input.useHandCursor = true;
            this['spot1_3'].events.onInputDown.add(this.spotfun3, this);
        }, this)
    },
    spotfun3: function(evt) {
        evt.kill();

        game.add.tween(this.tool6_1).to({
            alpha: 0
        }, 500, "Linear", true).onComplete.add(function() {
            this['spot1_2'].visible = true;
            this['spot1_2'].inputEnabled = true;
            this['spot1_2'].input.useHandCursor = true;
            this['spot1_2'].events.onInputDown.add(this.spotfun4, this);
        }, this)
    },
    spotfun4: function(evt) {
        evt.kill();

        game.add.tween(this.tool5).to({
            alpha: 0
        }, 500, "Linear", true).onComplete.add(function() {
            this.backwardbtn.visible = true;
            this.tooltween7.resume();
            this.tool7.inputEnabled = true;
            this.tool7.input.useHandCursor = true;
        }, this)
    },
    tool7fun: function() {
        this.tooltween7.stop();
        this.backwardbtn.kill();
        this.tool7drag = true;
        this.tool7.inputEnabled = false;
        this.tool7.input.useHandCursor = false;
        game.time.events.add(2000, function() {
            game.add.tween(this.tool7).to({
                x: 409.5,
                y: 113.5
            }, 200, "Linear", true).onComplete.add(function() {
                this.tool7drag = false;
                this.tooltween8.resume();
                this.tool8.inputEnabled = true;
                this.tool8.input.useHandCursor = true;
            }, this);
        }, this)
    },
    tool8fun: function() {
        this.tooltween8.stop();
        this.tool8drag = true;
        this.tool8.scale.setTo(0.5);
        this.tool8.inputEnabled = false;
        this.tool8.input.useHandCursor = false;
        this['spot_' + 1].visible = true
        this['spot_' + 1].inputEnabled = true
        this['spot_' + 1].input.useHandCursor = true
    },
    spotfun1: function(evt) {
        evt.kill();
        this.spotcount1++;
        if (evt.id < 3) {
            this['spot_' + (evt.id + 1)].visible = true
            this['spot_' + (evt.id + 1)].inputEnabled = true
            this['spot_' + (evt.id + 1)].input.useHandCursor = true
        } else {
            this['spot_' + (evt.id)].visible = false;
            this['spot_' + (evt.id)].inputEnabled = false;
            this['spot_' + (evt.id)].input.useHandCursor = false;
        }
        this.stiching.visible = false;
        this.stiching1.visible = true;
        this.stiching1.frame = this.spotcount1;
        if (this.spotcount1 == 3) {
            game.add.tween(this.tool8).to({
                x: 414.5,
                y: 305
            }, 200, "Linear", true).onComplete.add(function() {
                this.tool8.scale.setTo(1);
                this.tool8drag = false;
                game.add.tween(this.morebtn.scale).to({
                    x: 1,
                    y: 1
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.nextbtn.scale).to({
                    x: 1,
                    y: 1
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }, this);
        }
    },
    openLink: function() {
        CreateLinksInGame("Moana-Foot-Surgery", "menu", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Moana-Foot-Surgery", "menu", "more");
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.state.start('decor');
        });
    },
    btnOver: function(items) {
        items.scale.x = 1.05;
        items.scale.y = 1.05;
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.x = 1;
        items.scale.y = 1;
    },
    btnOver1: function() {
        this.backwardbtn.animations.play('backwardbtn', 10, true);
    },
    btnOut1: function() {
        this.backwardbtn.animations.stop();
    },
    removeGlitter: function(evt) {
        evt.kill();
    },

    update: function() {
        if (this.tool1drag) {
            this.tool1.x = game.input.activePointer.x + 65;
            this.tool1.y = game.input.activePointer.y + 10;
        }
        if (this.tool2drag) {
            this.tool2.x = game.input.activePointer.x;
            this.tool2.y = game.input.activePointer.y + 10;
            game.physics.arcade.collide(this.tool2, this.blood);

        }
        if (this.tool3drag) {
            this.t1.x = game.input.activePointer.x;
            this.t1.y = game.input.activePointer.y + 10;
        }
        if (this.tool4drag) {
            this.tool4.x = game.input.activePointer.x + 40;
            this.tool4.y = game.input.activePointer.y - 20;
        }
        if (this.tool7drag) {
            this.tool7.x = game.input.activePointer.x;
            this.tool7.y = game.input.activePointer.y + 10;
        }
        if (this.tool8drag) {
            this.tool8.x = game.input.activePointer.x + 20;
            this.tool8.y = game.input.activePointer.y + 50;
        }
    },
}
Main.finalscreen = function() {}
var colors = ['0xE73235', '0xE732A3', '0xA832E7', '0x3E32E7', '0x32AAE7', '0x32E766', '0xF0D930', '0xEE6B1F', '0x7B20EE', '0x0E0E0E'];
var colorobjPosX = [27, 35, 55, 77, 127, 393, 440, 465, 482, 485];
var colorobjPosY = [570, 585, 587, 590, 570, 576, 583, 572, 564, 551];
var color = 0;
var objColor = [];
for (var k = 0; k < 10; k++) {
    objColor[k] = '0xFFFFFF';
}
Main.finalscreen.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.iconGroup = game.add.group();

        this.morebtn = game.add.sprite(73, 691.15, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        this.nextbtn = game.add.sprite(421.95, 698.15, 'resetbtn');
        this.nextbtn.anchor.setTo(0.5);
        this.nextbtn.inputEnabled = true;
        this.nextbtn.input.useHandCursor = true;
        this.nextbtn.events.onInputUp.add(this.resetfun, this);
        this.nextbtn.events.onInputOver.add(this.btnOver, this);
        this.nextbtn.events.onInputOut.add(this.btnOut, this);


        this.bg = game.add.sprite(0, 0, 'decorbg');

        this.footGroup = game.add.group();
        this.frontshoeGroup = game.add.group();
        this.backshoeGroup = game.add.group();
        this.naildecorGroup = game.add.group();
        this.ankletsGroup = game.add.group();
        this.ringGroup = game.add.group();
        this.tattooGroup = game.add.group();

        this.foot = game.add.sprite(252.05, 310.4, 'foot');
        this.foot.anchor.setTo(0.5);
        this.footGroup.add(this.foot);
        this.colorobjgrp = game.add.group();
        for (var i = 1; i <= 8; i++) {
            this.colorobj = game.add.sprite(colorobjPosX[i - 1], colorobjPosY[i - 1], 'colorobj' + i);
            this.colorobj.anchor.setTo(0.5);
            this.colorobj.id = i - 1;
            this.colorobj.tint = objColor[i - 1];
            this.colorobj.events.onInputDown.add(this.setColor, this);
            this.colorobjgrp.add(this.colorobj);
        }
        this.retainObjects();
        this.levelGroup.add(this.bg);
        this.levelGroup.add(this.backshoeGroup);
        this.levelGroup.add(this.footGroup);
        this.levelGroup.add(this.tattooGroup);
        this.levelGroup.add(this.colorobjgrp);
        this.levelGroup.add(this.naildecorGroup);
        this.levelGroup.add(this.ringGroup);
        this.levelGroup.add(this.ankletsGroup);
        this.levelGroup.add(this.frontshoeGroup);
        this.levelGroup.add(this.nextbtn);
        this.levelGroup.add(this.morebtn);

        game.load.crossOrigin = '*';
        this.randomId = game.rnd.integerInRange(0, RelatedGames.length - 1);
        this.thumbVar = game.add.sprite(160, 660, 'thumb_' + this.randomId);
        this.thumbVar.inputEnabled = true
        this.thumbVar.input.useHandCursor = true;
        this.thumbVar.events.onInputUp.add(this.thumbLink, this);
        this.thumbframeVar = game.add.sprite(158, 658, 'Tump_frame');
        this.thumbVar.height = this.thumbframeVar.height - 2;
        this.thumbVar.width = this.thumbframeVar.width - 2;

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true);
        }

        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(427, 5, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    changeItem2: function(evt) {
        switch (evt.arrayindex) {
            case 0:
                effectVar = game.add.sprite(200, 520, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 1:
                effectVar = game.add.sprite(100, 570, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 2:
                effectVar = game.add.sprite(400, 570, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 3:
                effectVar = game.add.sprite(200, 350, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 4:
                effectVar = game.add.sprite(400, 570, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 5:
                effectVar = game.add.sprite(200, 200, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
        }
        if (Main.applyCount[evt.arrayindex] < evt.total) {
            Main.applyCount[evt.arrayindex]++;
        } else {
            Main.applyCount[evt.arrayindex] = 1;
        }

        this.retainObjects();
    },
    setColor: function(obj) {
        if (this.brushgrp.visible) {

            objColor[obj.id] = colors[color];
            obj.tint = objColor[obj.id];
        }
        this.brushgrp.visible = false;
        this.btngrp.visible = false;

    },
    resetColor: function(obj) {
        if (this.brushgrp.visible) {

            obj.tint = colors[color];
        }
    },
    outColor: function(obj) {
        if (this.brushgrp.visible) {

            obj.tint = objColor[obj.id];
        }
    },
    retainObjects: function() {
        this.frontshoeGroup.removeAll();
        if (Main.applyCount[0] >= 1) {
            this.topshoe = game.add.sprite(252.05, 431.1, 'topshoe' + Main.applyCount[0]);
            this.topshoe.anchor.setTo(0.5);
            this.frontshoeGroup.add(this.topshoe);
        }
        this.naildecorGroup.removeAll();
        if (Main.applyCount[1] >= 1) {
            this.naildecor = game.add.sprite(252.05, 587.15, 'naildecor' + Main.applyCount[1]);
            this.naildecor.anchor.setTo(0.5);
            this.naildecorGroup.add(this.naildecor);
        }
        this.ankletsGroup.removeAll();
        if (Main.applyCount[2] >= 1) {
            this.anklet = game.add.sprite(227, 323.05, 'anklet' + Main.applyCount[2]);
            this.anklet.anchor.setTo(0.5);
            this.ankletsGroup.add(this.anklet);
        }
        this.ringGroup.removeAll();
        if (Main.applyCount[3] >= 1) {
            this.ring = game.add.sprite(252.05, 582.65, 'ring' + Main.applyCount[3]);
            this.ring.anchor.setTo(0.5);
            this.ringGroup.add(this.ring);
        }
        this.tattooGroup.removeAll();
        if (Main.applyCount[4] >= 1) {
            this.tattoo = game.add.sprite(238.55, 316.85, 'tattoo' + Main.applyCount[4]);
            this.tattoo.anchor.setTo(0.5);
            this.tattooGroup.add(this.tattoo);
        }
    },
    openLink: function() {
        CreateLinksInGame("Moana-Foot-Surgery", "gameover", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Moana-Foot-Surgery", "gameover", "more");
    },
    thumbLink: function() {
        CreateLinksInGame("Moana-Foot-Surgery", "gameover", "thumb", RelatedGames[this.randomId]['id']);
    },
    resetfun: function() {
        Main.applyCount = [0, 0, 0, 0, 0, 0];
        color = 0;
        objColor = [];
        for (var k = 0; k < 10; k++) {
            objColor[k] = '0xFFFFFF';
        }
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.state.start('intro');
        });
    },
    btnOver: function(items) {
        items.scale.x = 1.05;
        items.scale.y = 1.05;
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.x = 1;
        items.scale.y = 1;
    },
    removeGlitter: function(evt) {
        evt.kill();
    },
}




game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('decor', Main.decor);
game.state.add('surjery', Main.surjery);
game.state.add('finalscreen', Main.finalscreen);

game.state.start('boot');