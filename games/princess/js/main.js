var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
    music: null,
    applyCount: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    applyCount1: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    applyCount2: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    applyCount3: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    girlChoosed: [0],
    girlCompleted: [0, 0, 0],
    shutterOn: [true],
};

Main.boot = function() {};
Main.boot.prototype = {
    preload: function() {
        game.stage.backgroundColor = '#b8175f';
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

        game.load.crossOrigin = '*';
        game.load.audio('music', ['assets/music.mp3']);
        game.load.spritesheet('soundicon', 'assets/soundicon.png', 81, 80);
        game.load.image('logo', 'assets/logo.png');
        game.load.spritesheet('effects', 'assets/effects.png', 141, 134);
        game.load.spritesheet('effectssd', 'assets/efftes012.png', 354, 298);

        game.load.image('titlebg', 'assets/titlebg.png');
        game.load.image('selectbg', 'assets/selectbg.png');
        game.load.image('finalbg', 'assets/finalbg.png');
        game.load.image('iconbg', 'assets/iconbg.png');
        game.load.image('hook', 'assets/hook.png');
        game.load.image('shadow', 'assets/shadow.png');
        game.load.image('forwardarrow', 'assets/forwardarrow.png');
        game.load.image('backwardarrow', 'assets/backwardarrow.png');
        game.load.image('playbtn', 'assets/playbtn.png');
        game.load.image('morebtn', 'assets/morebtn.png');
        game.load.image('donebtn', 'assets/donebtn.png');
        game.load.image('resetbtn', 'assets/resetbtn.png');
        game.load.image('elsa', 'assets/elsa.png');
        game.load.image('jack', 'assets/jack.png');
        game.load.image('kristoff', 'assets/kristoff.png');
        game.load.image('anna', 'assets/anna.png');
        game.load.image('rap', 'assets/rap.png');
        game.load.image('flyen', 'assets/flyen.png');
        game.load.image('alauden', 'assets/alauden.png');
        game.load.image('jas', 'assets/jas.png');
        for (var i = 1; i <= 4; i++) {
            game.load.image('bed' + i, 'assets/bed000' + i + '.png');
            game.load.image('ceiling' + i, 'assets/ceiling000' + i + '.png');
            game.load.image('centerceiling' + i, 'assets/centerceiling000' + i + '.png');
            game.load.image('curtain' + i, 'assets/curtains000' + i + '.png');
            game.load.image('door' + i, 'assets/door000' + i + '.png');
            game.load.image('floor' + i, 'assets/floor000' + i + '.png');
            game.load.image('floormat' + i, 'assets/floormat1000' + i + '.png');
            game.load.image('frame' + i, 'assets/frames000' + i + '.png');
            game.load.image('lamp' + i, 'assets/lamp000' + i + '.png');
            game.load.image('sofa' + i, 'assets/sofa000' + i + '.png');
            game.load.image('wall' + i, 'assets/wall000' + i + '.png');
            game.load.image('toplight' + i, 'assets/toplight000' + i + '.png');
        }
        for (var i = 1; i <= 12; i++) {
            game.load.image('icon' + i, 'assets/icon' + i + '.png');

        }
        for (var i = 1; i <= 2; i++) {
            game.load.image('elsa_icon' + i, 'assets/elsa_icon' + i + '.png');
            game.load.image('anna_icon' + i, 'assets/anna_icon' + i + '.png');
            game.load.image('rap_icon' + i, 'assets/rap_icon' + i + '.png');
            game.load.image('jas_icon' + i, 'assets/jas_icon' + i + '.png');
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
        CreateLinksInGame("Princess-Love-Theme-Room", "loading", "logo");
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

        this.morebtn = game.add.sprite(330.9, 697.95, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(186.5, 697.95, 'playbtn');
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
        CreateLinksInGame("Princess-Love-Theme-Room", "menu", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Princess-Love-Theme-Room", "menu", "more");
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
        game.state.start('selectScreen');
    },
}

Main.intro = function() {}

Main.intro.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'introbg');
        this.levelGroup.add(this.introbg);
        this.morebtn = game.add.sprite(431.4, 749.2, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(75.55, 749.55, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        this.levelGroup.add(this.playbtn);

        this.popup1 = game.add.sprite(220, 150, 'popup1');
        this.popup1.anchor.setTo(0.5);
        this.popup1.scale.setTo(0);
        this.levelGroup.add(this.popup1);

        this.popup2 = game.add.sprite(210, 180, 'popup2');
        this.popup2.anchor.setTo(0.5);
        this.popup2.scale.setTo(0);
        this.levelGroup.add(this.popup2);

        this.popup3 = game.add.sprite(220, 150, 'popup3');
        this.popup3.anchor.setTo(0.5);
        this.popup3.scale.setTo(0);
        this.levelGroup.add(this.popup3);


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
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp2, this);
    },
    bringPopUp2: function() {
        game.add.tween(this.popup1).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2000);
        game.add.tween(this.popup2.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringPopUp3, this);
    },
    bringPopUp3: function() {
        game.add.tween(this.popup2).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2000)
        game.add.tween(this.popup3.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringBottons, this);
    },
    bringBottons: function() {
        game.add.tween(this.morebtn.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.playbtn.scale).to({
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
        CreateLinksInGame("Princess-Love-Theme-Room", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Princess-Love-Theme-Room", "game", "morebutton");
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
            game.state.start('elsaScreen');
        });

    },
}
Main.selectScreen = function() {}

Main.selectScreen.prototype = {
    create: function() {

        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'selectbg');
        this.levelGroup.add(this.bg);


        this.icon1 = game.add.sprite(133.9, 336.4, 'elsa_icon1');
        this.icon1.anchor.setTo(0.5);
        this.icon1.id = 1;
        this.levelGroup.add(this.icon1);

        this.icon2 = game.add.sprite(364.25, 341.85, 'anna_icon1');
        this.icon2.anchor.setTo(0.5);
        this.icon2.id = 2;
        this.levelGroup.add(this.icon2);

        this.icon3 = game.add.sprite(143.8, 540.5, 'rap_icon1');
        this.icon3.anchor.setTo(0.5);
        this.icon3.id = 3;
        this.levelGroup.add(this.icon3);

        this.icon4 = game.add.sprite(372.95, 551.75, 'jas_icon1');
        this.icon4.anchor.setTo(0.5);
        this.icon4.id = 4;
        this.levelGroup.add(this.icon4);

        for (var i = 1; i <= 4; i++) {
            this['icon' + i].inputEnabled = true;
            this['icon' + i].input.useHandCursor = true;
            this['icon' + i].events.onInputUp.add(this.enterRoom, this);
            this['icon' + i].events.onInputOver.add(this.btnOver, this);
            this['icon' + i].events.onInputOut.add(this.btnOut, this);
        }

        this.morebtn = game.add.sprite(260, 707.8, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.levelGroup.add(this.morebtn);

        if (Main.girlCompleted[1] == 1) {
            this.icon1.inputEnabled = false;
            this.icon1.alpha = 0.8;
        }
        if (Main.girlCompleted[2] == 2) {
            this.icon2.inputEnabled = false;
            this.icon2.alpha = 0.8;
        }
        if (Main.girlCompleted[3] == 3) {
            this.icon3.inputEnabled = false;
            this.icon3.alpha = 0.8;
        }
        if (Main.girlCompleted[4] == 4) {
            this.icon4.inputEnabled = false;
            this.icon4.alpha = 0.8;
        }
        this.icon1.scale.setTo(0);
        this.icon2.scale.setTo(0);
        this.icon3.scale.setTo(0);
        this.icon4.scale.setTo(0);
        this.morebtn.scale.setTo(0);

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -860
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        this.logoVar = game.add.sprite(5, 0, 'logo');
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
        CreateLinksInGame("Princess-Love-Theme-Room", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Princess-Love-Theme-Room", "game", "morebutton");
    },
    startPopUp: function() {
        game.add.tween(this.icon1.scale).to({
            x: 1,
            y: 1
        }, 700, "Linear", true);
        game.add.tween(this.icon2.scale).to({
            x: 1,
            y: 1
        }, 700, "Linear", true, 200);
        game.add.tween(this.icon3.scale).to({
            x: 1,
            y: 1
        }, 700, "Linear", true, 400);
        game.add.tween(this.icon4.scale).to({
            x: 1,
            y: 1
        }, 700, "Linear", true, 400);
        game.add.tween(this.morebtn.scale).to({
            x: 1,
            y: 1
        }, 700, "Linear", true, 800);
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
    //lll
    enterRoom: function(evt) {
        Main.girlChoosed[0] = evt.id;
        Main.girlCompleted[evt.id] = evt.id;

        switch (evt.id) {
            case 1:
                game.add.tween(this.shutter).to({
                    y: 0
                }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.state.start('decor2');
                });
                break;
            case 2:
                game.add.tween(this.shutter).to({
                    y: 0
                }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.state.start('decor1');
                });
                break;
            case 3:
                game.add.tween(this.shutter).to({
                    y: 0
                }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.state.start('decor');
                });
                break;
            case 4:
                game.add.tween(this.shutter).to({
                    y: 0
                }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.state.start('decor3');
                });
                break;
        }
    },
}
Main.decor = function() {}

Main.decor.prototype = {
    create: function() {
        this.stepCount = 1;
        this.levelGroup = game.add.group();

        this.shadow = game.add.sprite(252, 458.5, 'shadow');
        this.shadow.anchor.setTo(0.5);

        this.hook = game.add.sprite(343.5, 30.5, 'hook');
        this.hook.anchor.setTo(0.5);

        this.iconbg = game.add.sprite(257.05, 759.6, 'iconbg');
        this.iconbg.anchor.setTo(0.5);

        this.morebtn = game.add.sprite(454.4, 660, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.7);
        this.morebtn.inputEnabled = true;
        this.morebtn.visible = false;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver1, this);
        this.morebtn.events.onInputOut.add(this.btnOut1, this);
        this.donebtn = game.add.sprite(54, 660, 'donebtn');
        this.donebtn.anchor.setTo(0.5);
        this.donebtn.scale.setTo(0.7);
        this.donebtn.inputEnabled = true;
        this.donebtn.visible = false;
        this.donebtn.input.useHandCursor = true;
        this.donebtn.events.onInputUp.add(this.enterRoom, this);
        this.donebtn.events.onInputOver.add(this.btnOver1, this);
        this.donebtn.events.onInputOut.add(this.btnOut1, this);

        this.playbtn = game.add.sprite(250, 660, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0.7);
        this.playbtn.inputEnabled = true;
        this.playbtn.visible = false;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.animfun, this);
        this.playbtn.events.onInputOver.add(this.btnOver1, this);
        this.playbtn.events.onInputOut.add(this.btnOut1, this);

        this.forwardarrow = game.add.sprite(466.4, 751, 'forwardarrow');
        this.forwardarrow.anchor.setTo(0.5);
        this.forwardarrow.inputEnabled = true;
        this.forwardarrow.input.useHandCursor = true;
        this.forwardarrow.events.onInputUp.add(this.nextslide, this);
        this.forwardarrow.events.onInputOver.add(this.btnOver, this);
        this.forwardarrow.events.onInputOut.add(this.btnOut, this);
        this.backwardarrow = game.add.sprite(37, 751, 'backwardarrow');
        this.backwardarrow.anchor.setTo(0.5);
        this.backwardarrow.inputEnabled = true;
        this.backwardarrow.visible = false;
        this.backwardarrow.input.useHandCursor = true;
        this.backwardarrow.events.onInputUp.add(this.prevslide, this);
        this.backwardarrow.events.onInputOver.add(this.btnOver, this);
        this.backwardarrow.events.onInputOut.add(this.btnOut, this);

        this.rap = game.add.sprite(585, 380, 'rap');
        this.rap.anchor.setTo(0.5);
        this.rap.scale.setTo(0.42);

        this.flyen = game.add.sprite(580, 380, 'flyen');
        this.flyen.anchor.setTo(0.5);
        this.flyen.scale.setTo(0.42);


        this.iconGroup1 = game.add.group();
        this.iconGroup2 = game.add.group();
        this.iconGroup3 = game.add.group();

        this.icon1 = game.add.sprite(116.45, 749.5, 'icon1');
        this.icon1.anchor.setTo(0.5);
        this.icon1.arrayindex = 0;
        this.icon1.total = 4;

        this.icon2 = game.add.sprite(206.5, 749.5, 'icon2');
        this.icon2.anchor.setTo(0.5);
        this.icon2.arrayindex = 1;
        this.icon2.total = 4;

        this.icon3 = game.add.sprite(296.5, 749.5, 'icon3');
        this.icon3.anchor.setTo(0.5);
        this.icon3.arrayindex = 2;
        this.icon3.total = 4;

        this.icon4 = game.add.sprite(386.55, 749.5, 'icon4');
        this.icon4.anchor.setTo(0.5);
        this.icon4.arrayindex = 3;
        this.icon4.total = 4;

        this.icon5 = game.add.sprite(116.45, 749.5, 'icon5');
        this.icon5.anchor.setTo(0.5);
        this.icon5.arrayindex = 4;
        this.icon5.total = 4;

        this.icon6 = game.add.sprite(206.5, 749.5, 'icon6');
        this.icon6.anchor.setTo(0.5);
        this.icon6.arrayindex = 5;
        this.icon6.total = 4;

        this.icon7 = game.add.sprite(296.5, 749.5, 'icon7');
        this.icon7.anchor.setTo(0.5);
        this.icon7.arrayindex = 6;
        this.icon7.total = 4;

        this.icon8 = game.add.sprite(386.55, 749.5, 'icon8');
        this.icon8.anchor.setTo(0.5);
        this.icon8.arrayindex = 7;
        this.icon8.total = 4;

        this.icon9 = game.add.sprite(116.45, 749.5, 'icon9');
        this.icon9.anchor.setTo(0.5);
        this.icon9.arrayindex = 8;
        this.icon9.total = 4;

        this.icon10 = game.add.sprite(206.5, 749.5, 'icon10');
        this.icon10.anchor.setTo(0.5);
        this.icon10.arrayindex = 9;
        this.icon10.total = 4;

        this.icon11 = game.add.sprite(296.5, 749.5, 'icon11');
        this.icon11.anchor.setTo(0.5);
        this.icon11.arrayindex = 10;
        this.icon11.total = 4;

        this.icon12 = game.add.sprite(386.55, 749.5, 'icon12');
        this.icon12.anchor.setTo(0.5);
        this.icon12.arrayindex = 11;
        this.icon12.total = 4;

        for (var i = 1; i <= 12; i++) {
            this['icon' + i].inputEnabled = true;
            this['icon' + i].input.useHandCursor = true;
            this['icon' + i].events.onInputOver.add(this.btnOver, this);
            this['icon' + i].events.onInputOut.add(this.btnOut, this);
            this['icon' + i].events.onInputUp.add(this.changeItem2, this);
            if (i >= 9) {
                this['icon' + i].flag = 1;
            } else {
                this['icon' + i].flag = 0;
            }
        }

        for (var i = 2; i <= 3; i++) {
            this['iconGroup' + i].visible = false;

        }
        this.decorGroup = game.add.group();

        this.floorGroup = game.add.group();
        this.floormatGroup = game.add.group();
        this.lampGroup = game.add.group();
        this.toplightGroup = game.add.group();
        this.wallGroup = game.add.group();
        this.bedGroup = game.add.group();
        this.curtainGroup = game.add.group();
        this.doorGroup = game.add.group();
        this.ceilingGroup = game.add.group();
        this.centerceilingGroup = game.add.group();
        this.frameGroup = game.add.group();
        this.sofaGroup = game.add.group();

        this.decorGroup.add(this.floorGroup);
        this.decorGroup.add(this.shadow);
        this.decorGroup.add(this.floormatGroup);
        this.decorGroup.add(this.wallGroup);
        this.decorGroup.add(this.ceilingGroup);
        this.decorGroup.add(this.doorGroup);
        this.decorGroup.add(this.curtainGroup);
        this.decorGroup.add(this.sofaGroup);
        this.decorGroup.add(this.frameGroup);
        this.decorGroup.add(this.bedGroup);
        this.decorGroup.add(this.lampGroup);
        this.decorGroup.add(this.centerceilingGroup);
        this.decorGroup.add(this.hook);
        this.decorGroup.add(this.toplightGroup);

        this.iconGroup1.add(this.icon1);
        this.iconGroup1.add(this.icon2);
        this.iconGroup1.add(this.icon3);
        this.iconGroup1.add(this.icon4);
        this.iconGroup2.add(this.icon5);
        this.iconGroup2.add(this.icon6);
        this.iconGroup2.add(this.icon7);
        this.iconGroup2.add(this.icon8);
        this.iconGroup3.add(this.icon9);
        this.iconGroup3.add(this.icon10);
        this.iconGroup3.add(this.icon11);
        this.iconGroup3.add(this.icon12);


        this.levelGroup.add(this.decorGroup);
        this.levelGroup.add(this.iconbg);
        this.levelGroup.add(this.iconGroup1);
        this.levelGroup.add(this.iconGroup2);
        this.levelGroup.add(this.iconGroup3);
        this.levelGroup.add(this.backwardarrow);
        this.levelGroup.add(this.forwardarrow);
        this.levelGroup.add(this.flyen);
        this.levelGroup.add(this.rap);
        this.retainObjects();
        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -860
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
        if (evt.flag == 1) {
            this.playbtn.visible = true;
        } else {
            this.playbtn.visible = false;
        }
        switch (evt.arrayindex) {
            case 0:
                effectVar = game.add.sprite(300, 420, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 1:
                effectVar = game.add.sprite(300, 500, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 2:
                effectVar = game.add.sprite(180, 50, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 3:
                effectVar = game.add.sprite(100, 0, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 4:
                effectVar = game.add.sprite(160, 220, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;


            case 5:
                effectVar = game.add.sprite(160, 180, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 6:
                effectVar = game.add.sprite(350, 320, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 7:
                effectVar = game.add.sprite(380, 180, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 8:
                effectVar = game.add.sprite(80, 340, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 9:
                effectVar = game.add.sprite(-70, 330, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 10:
                effectVar = game.add.sprite(300, -10, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 11:
                effectVar = game.add.sprite(270, 40, 'effectssd');
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
    nextslide: function() {
        this.backwardarrow.visible = true;
        this['iconGroup' + this.stepCount].visible = false;
        this.stepCount++;
        this['iconGroup' + this.stepCount].visible = true;
        //this.animateIcons(this.stepCount);
        if (this.stepCount <= 3) {
            if (this.stepCount == 3) {
                this.forwardarrow.visible = false;
            }
        }
    },
    prevslide: function() {
        console.log(this.stepCount);
        this.forwardarrow.visible = true;
        this['iconGroup' + this.stepCount].visible = false;
        this.stepCount--;
        this['iconGroup' + this.stepCount].visible = true;
        //this.animateIcons(this.stepCount);
        if (this.stepCount >= 1) {

            if (this.stepCount == 1) {
                this.backwardarrow.visible = false;
            }
        }

    },
    animfun: function() {
        this.playbtn.visible = false;
        game.add.tween(this.flyen).to({
            x: 380,
            y: 380
        }, 400, "Linear", true).onComplete.add(function() {
            game.add.tween(this.flyen).to({
                x: 370,
                y: 380
            }, 50, "Linear", true).onComplete.add(function() {
                game.add.tween(this.flyen).to({
                    x: 380,
                    y: 380
                }, 400, "Linear", true).onComplete.add(function() {
                    game.add.tween(this.rap).to({
                        x: 435,
                        y: 380
                    }, 400, "Linear", true).onComplete.add(function() {
                        game.add.tween(this.rap).to({
                            x: 420,
                            y: 380
                        }, 50, "Linear", true).onComplete.add(function() {
                            game.add.tween(this.rap).to({
                                x: 435,
                                y: 380
                            }, 400, "Linear", true).onComplete.add(function() {
                                this.donebtn.visible = true;
                                this.morebtn.visible = true;
                            }, this);
                        }, this);
                    }, this);
                }, this);
            }, this);
        }, this);
    },
    retainObjects: function() {
        this.floorGroup.removeAll();
        if (Main.applyCount[0] >= 1) {
            this.floor = game.add.sprite(252, 567, 'floor' + Main.applyCount[0]);
            this.floor.anchor.setTo(0.5);
            this.floorGroup.add(this.floor);
        }
        this.floormatGroup.removeAll();
        if (Main.applyCount[1] >= 1) {
            this.floormat = game.add.sprite(252, 602, 'floormat' + Main.applyCount[1]);
            this.floormat.anchor.setTo(0.5);
            this.floormatGroup.add(this.floormat);
        }
        this.wallGroup.removeAll();
        if (Main.applyCount[2] >= 1) {
            this.wall = game.add.sprite(252, 244.5, 'wall' + Main.applyCount[2]);
            this.wall.anchor.setTo(0.5);
            this.wallGroup.add(this.wall);
        }
        this.ceilingGroup.removeAll();
        if (Main.applyCount[3] >= 1) {
            this.ceiling = game.add.sprite(252, 65, 'ceiling' + Main.applyCount[3]);
            this.ceiling.anchor.setTo(0.5);
            this.ceilingGroup.add(this.ceiling);
        }
        this.doorGroup.removeAll();
        if (Main.applyCount[4] >= 1) {
            this.door = game.add.sprite(224.5, 312, 'door' + Main.applyCount[4]);
            this.door.anchor.setTo(0.5);
            this.doorGroup.add(this.door);
        }
        this.curtainGroup.removeAll();
        if (Main.applyCount[5] >= 1) {
            this.curtains = game.add.sprite(252.5, 400, 'curtain' + Main.applyCount[5]);
            this.curtains.anchor.setTo(0.5);
            this.curtainGroup.add(this.curtains);
        }
        this.sofaGroup.removeAll();
        if (Main.applyCount[6] >= 1) {
            this.sofa = game.add.sprite(445.5, 394.5, 'sofa' + Main.applyCount[6]);
            this.sofa.anchor.setTo(0.5);
            this.sofaGroup.add(this.sofa);
        }
        this.frameGroup.removeAll();
        if (Main.applyCount[7] >= 1) {
            this.frame = game.add.sprite(326, 285.5, 'frame' + Main.applyCount[7]);
            this.frame.anchor.setTo(0.5);
            this.frameGroup.add(this.frame);
        }
        this.bedGroup.removeAll();
        if (Main.applyCount[8] >= 1) {
            this.bed = game.add.sprite(214.5, 400, 'bed' + Main.applyCount[8]);
            this.bed.anchor.setTo(0.5);
            this.bedGroup.add(this.bed);
        }
        this.lampGroup.removeAll();
        if (Main.applyCount[9] >= 1) {
            this.lamp = game.add.sprite(46.5, 337.5, 'lamp' + Main.applyCount[9]);
            this.lamp.anchor.setTo(0.5);
            this.lampGroup.add(this.lamp);
        }
        this.centerceilingGroup.removeAll();
        if (Main.applyCount[10] >= 1) {
            this.centerceiling = game.add.sprite(349, 35, 'centerceiling' + Main.applyCount[10]);
            this.centerceiling.anchor.setTo(0.5);
            this.centerceilingGroup.add(this.centerceiling);
        }
        this.toplightGroup.removeAll();
        if (Main.applyCount[11] >= 1) {
            this.toplight = game.add.sprite(348, 320, 'toplight' + Main.applyCount[11]);
            this.toplight.anchor.setTo(0.5);
            this.toplightGroup.add(this.toplight);
        }
    },
    openLink: function() {
        CreateLinksInGame("Princess-Love-Theme-Room", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Princess-Love-Theme-Room", "game", "more");
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            if (Main.girlCompleted[1] == 1 && Main.girlCompleted[2] == 2 && Main.girlCompleted[3] == 3 && Main.girlCompleted[4] == 4) {
                game.state.start('finalScreen');

            } else
                game.state.start('selectScreen');

        });
    },
    btnOver1: function(items) {
        items.scale.x = 0.8;
        items.scale.y = 0.8;
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut1: function(items) {
        items.scale.x = 0.7;
        items.scale.y = 0.7;
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
Main.decor1 = function() {}

Main.decor1.prototype = {
    create: function() {
        this.stepCount = 1;
        this.levelGroup = game.add.group();

        this.shadow = game.add.sprite(252, 458.5, 'shadow');
        this.shadow.anchor.setTo(0.5);

        this.hook = game.add.sprite(343.5, 30.5, 'hook');
        this.hook.anchor.setTo(0.5);

        this.iconbg = game.add.sprite(257.05, 759.6, 'iconbg');
        this.iconbg.anchor.setTo(0.5);

        this.morebtn = game.add.sprite(454.4, 660, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.7);
        this.morebtn.inputEnabled = true;
        this.morebtn.visible = false;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver1, this);
        this.morebtn.events.onInputOut.add(this.btnOut1, this);
        this.donebtn = game.add.sprite(54, 660, 'donebtn');
        this.donebtn.anchor.setTo(0.5);
        this.donebtn.scale.setTo(0.7);
        this.donebtn.inputEnabled = true;
        this.donebtn.visible = false;
        this.donebtn.input.useHandCursor = true;
        this.donebtn.events.onInputUp.add(this.enterRoom, this);
        this.donebtn.events.onInputOver.add(this.btnOver1, this);
        this.donebtn.events.onInputOut.add(this.btnOut1, this);

        this.playbtn = game.add.sprite(250, 660, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0.7);
        this.playbtn.inputEnabled = true;
        this.playbtn.visible = false;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.animfun, this);
        this.playbtn.events.onInputOver.add(this.btnOver1, this);
        this.playbtn.events.onInputOut.add(this.btnOut1, this);

        this.forwardarrow = game.add.sprite(466.4, 751, 'forwardarrow');
        this.forwardarrow.anchor.setTo(0.5);
        this.forwardarrow.inputEnabled = true;
        this.forwardarrow.input.useHandCursor = true;
        this.forwardarrow.events.onInputUp.add(this.nextslide, this);
        this.forwardarrow.events.onInputOver.add(this.btnOver, this);
        this.forwardarrow.events.onInputOut.add(this.btnOut, this);
        this.backwardarrow = game.add.sprite(37, 751, 'backwardarrow');
        this.backwardarrow.anchor.setTo(0.5);
        this.backwardarrow.inputEnabled = true;
        this.backwardarrow.visible = false;
        this.backwardarrow.input.useHandCursor = true;
        this.backwardarrow.events.onInputUp.add(this.prevslide, this);
        this.backwardarrow.events.onInputOver.add(this.btnOver, this);
        this.backwardarrow.events.onInputOut.add(this.btnOut, this);

        this.anna = game.add.sprite(580, 380, 'anna');
        this.anna.anchor.setTo(0.5);
        this.anna.scale.setTo(0.42);

        this.kristoff = game.add.sprite(580, 380, 'kristoff');
        this.kristoff.anchor.setTo(0.5);
        this.kristoff.scale.setTo(0.42);

        this.iconGroup1 = game.add.group();
        this.iconGroup2 = game.add.group();
        this.iconGroup3 = game.add.group();

        this.icon1 = game.add.sprite(116.45, 749.5, 'icon1');
        this.icon1.anchor.setTo(0.5);
        this.icon1.arrayindex = 0;
        this.icon1.total = 4;

        this.icon2 = game.add.sprite(206.5, 749.5, 'icon2');
        this.icon2.anchor.setTo(0.5);
        this.icon2.arrayindex = 1;
        this.icon2.total = 4;

        this.icon3 = game.add.sprite(296.5, 749.5, 'icon3');
        this.icon3.anchor.setTo(0.5);
        this.icon3.arrayindex = 2;
        this.icon3.total = 4;

        this.icon4 = game.add.sprite(386.55, 749.5, 'icon4');
        this.icon4.anchor.setTo(0.5);
        this.icon4.arrayindex = 3;
        this.icon4.total = 4;

        this.icon5 = game.add.sprite(116.45, 749.5, 'icon5');
        this.icon5.anchor.setTo(0.5);
        this.icon5.arrayindex = 4;
        this.icon5.total = 4;

        this.icon6 = game.add.sprite(206.5, 749.5, 'icon6');
        this.icon6.anchor.setTo(0.5);
        this.icon6.arrayindex = 5;
        this.icon6.total = 4;

        this.icon7 = game.add.sprite(296.5, 749.5, 'icon7');
        this.icon7.anchor.setTo(0.5);
        this.icon7.arrayindex = 6;
        this.icon7.total = 4;

        this.icon8 = game.add.sprite(386.55, 749.5, 'icon8');
        this.icon8.anchor.setTo(0.5);
        this.icon8.arrayindex = 7;
        this.icon8.total = 4;

        this.icon9 = game.add.sprite(116.45, 749.5, 'icon9');
        this.icon9.anchor.setTo(0.5);
        this.icon9.arrayindex = 8;
        this.icon9.total = 4;

        this.icon10 = game.add.sprite(206.5, 749.5, 'icon10');
        this.icon10.anchor.setTo(0.5);
        this.icon10.arrayindex = 9;
        this.icon10.total = 4;

        this.icon11 = game.add.sprite(296.5, 749.5, 'icon11');
        this.icon11.anchor.setTo(0.5);
        this.icon11.arrayindex = 10;
        this.icon11.total = 4;

        this.icon12 = game.add.sprite(386.55, 749.5, 'icon12');
        this.icon12.anchor.setTo(0.5);
        this.icon12.arrayindex = 11;
        this.icon12.total = 4;

        for (var i = 1; i <= 12; i++) {
            this['icon' + i].inputEnabled = true;
            this['icon' + i].input.useHandCursor = true;
            this['icon' + i].events.onInputOver.add(this.btnOver, this);
            this['icon' + i].events.onInputOut.add(this.btnOut, this);
            this['icon' + i].events.onInputUp.add(this.changeItem2, this);
            if (i >= 9) {
                this['icon' + i].flag = 1;
            } else {
                this['icon' + i].flag = 0;
            }
        }

        for (var i = 2; i <= 3; i++) {
            this['iconGroup' + i].visible = false;

        }
        this.decor1Group = game.add.group();

        this.floorGroup = game.add.group();
        this.floormatGroup = game.add.group();
        this.lampGroup = game.add.group();
        this.toplightGroup = game.add.group();
        this.wallGroup = game.add.group();
        this.bedGroup = game.add.group();
        this.curtainGroup = game.add.group();
        this.doorGroup = game.add.group();
        this.ceilingGroup = game.add.group();
        this.centerceilingGroup = game.add.group();
        this.frameGroup = game.add.group();
        this.sofaGroup = game.add.group();

        this.decor1Group.add(this.floorGroup);
        this.decor1Group.add(this.shadow);
        this.decor1Group.add(this.floormatGroup);
        this.decor1Group.add(this.wallGroup);
        this.decor1Group.add(this.ceilingGroup);
        this.decor1Group.add(this.doorGroup);
        this.decor1Group.add(this.curtainGroup);
        this.decor1Group.add(this.sofaGroup);
        this.decor1Group.add(this.frameGroup);
        this.decor1Group.add(this.bedGroup);
        this.decor1Group.add(this.lampGroup);
        this.decor1Group.add(this.centerceilingGroup);
        this.decor1Group.add(this.hook);
        this.decor1Group.add(this.toplightGroup);

        this.iconGroup1.add(this.icon1);
        this.iconGroup1.add(this.icon2);
        this.iconGroup1.add(this.icon3);
        this.iconGroup1.add(this.icon4);
        this.iconGroup2.add(this.icon5);
        this.iconGroup2.add(this.icon6);
        this.iconGroup2.add(this.icon7);
        this.iconGroup2.add(this.icon8);
        this.iconGroup3.add(this.icon9);
        this.iconGroup3.add(this.icon10);
        this.iconGroup3.add(this.icon11);
        this.iconGroup3.add(this.icon12);


        this.levelGroup.add(this.decor1Group);
        this.levelGroup.add(this.iconbg);
        this.levelGroup.add(this.iconGroup1);
        this.levelGroup.add(this.iconGroup2);
        this.levelGroup.add(this.iconGroup3);
        this.levelGroup.add(this.backwardarrow);
        this.levelGroup.add(this.forwardarrow);
        this.levelGroup.add(this.kristoff);
        this.levelGroup.add(this.anna);
        this.retainObjects1();

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -860
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
        if (evt.flag == 1) {
            this.playbtn.visible = true;
        } else {
            this.playbtn.visible = false;
        }

        switch (evt.arrayindex) {
            case 0:
                effectVar = game.add.sprite(300, 420, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 1:
                effectVar = game.add.sprite(300, 500, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 2:
                effectVar = game.add.sprite(180, 50, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 3:
                effectVar = game.add.sprite(100, 0, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 4:
                effectVar = game.add.sprite(160, 220, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;


            case 5:
                effectVar = game.add.sprite(160, 180, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 6:
                effectVar = game.add.sprite(350, 320, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 7:
                effectVar = game.add.sprite(380, 180, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 8:
                effectVar = game.add.sprite(80, 340, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 9:
                effectVar = game.add.sprite(-70, 330, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 10:
                effectVar = game.add.sprite(300, -10, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 11:
                effectVar = game.add.sprite(270, 40, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

        }

        if (Main.applyCount1[evt.arrayindex] < evt.total) {
            Main.applyCount1[evt.arrayindex]++;
        } else {
            Main.applyCount1[evt.arrayindex] = 1;
        }

        this.retainObjects1();
    },
    nextslide: function() {
        this.backwardarrow.visible = true;
        this['iconGroup' + this.stepCount].visible = false;
        this.stepCount++;
        this['iconGroup' + this.stepCount].visible = true;
        //this.animateIcons(this.stepCount);
        if (this.stepCount <= 3) {
            if (this.stepCount == 3) {
                this.forwardarrow.visible = false;
            }
        }
    },
    prevslide: function() {
        console.log(this.stepCount);
        this.forwardarrow.visible = true;
        this['iconGroup' + this.stepCount].visible = false;
        this.stepCount--;
        this['iconGroup' + this.stepCount].visible = true;
        //this.animateIcons(this.stepCount);
        if (this.stepCount >= 1) {

            if (this.stepCount == 1) {
                this.backwardarrow.visible = false;
            }
        }

    },
    animfun: function() {
        this.playbtn.visible = false;
        game.add.tween(this.kristoff).to({
            x: 380,
            y: 380
        }, 400, "Linear", true).onComplete.add(function() {
            game.add.tween(this.kristoff).to({
                x: 370,
                y: 380
            }, 50, "Linear", true).onComplete.add(function() {
                game.add.tween(this.kristoff).to({
                    x: 380,
                    y: 380
                }, 400, "Linear", true).onComplete.add(function() {
                    game.add.tween(this.anna).to({
                        x: 440,
                        y: 380
                    }, 400, "Linear", true).onComplete.add(function() {
                        game.add.tween(this.anna).to({
                            x: 430,
                            y: 380
                        }, 50, "Linear", true).onComplete.add(function() {
                            game.add.tween(this.anna).to({
                                x: 440,
                                y: 380
                            }, 400, "Linear", true).onComplete.add(function() {
                                this.donebtn.visible = true;
                                this.morebtn.visible = true;
                            }, this);
                        }, this);
                    }, this);
                }, this);
            }, this);
        }, this);
    },

    retainObjects1: function() {
        this.floorGroup.removeAll();
        if (Main.applyCount1[0] >= 1) {
            this.floor = game.add.sprite(252, 567, 'floor' + Main.applyCount1[0]);
            this.floor.anchor.setTo(0.5);
            this.floorGroup.add(this.floor);
        }
        this.floormatGroup.removeAll();
        if (Main.applyCount1[1] >= 1) {
            this.floormat = game.add.sprite(252, 602, 'floormat' + Main.applyCount1[1]);
            this.floormat.anchor.setTo(0.5);
            this.floormatGroup.add(this.floormat);
        }
        this.wallGroup.removeAll();
        if (Main.applyCount1[2] >= 1) {
            this.wall = game.add.sprite(252, 244.5, 'wall' + Main.applyCount1[2]);
            this.wall.anchor.setTo(0.5);
            this.wallGroup.add(this.wall);
        }
        this.ceilingGroup.removeAll();
        if (Main.applyCount1[3] >= 1) {
            this.ceiling = game.add.sprite(252, 65, 'ceiling' + Main.applyCount1[3]);
            this.ceiling.anchor.setTo(0.5);
            this.ceilingGroup.add(this.ceiling);
        }
        this.doorGroup.removeAll();
        if (Main.applyCount1[4] >= 1) {
            this.door = game.add.sprite(224.5, 312, 'door' + Main.applyCount1[4]);
            this.door.anchor.setTo(0.5);
            this.doorGroup.add(this.door);
        }
        this.curtainGroup.removeAll();
        if (Main.applyCount1[5] >= 1) {
            this.curtains = game.add.sprite(252.5, 400, 'curtain' + Main.applyCount1[5]);
            this.curtains.anchor.setTo(0.5);
            this.curtainGroup.add(this.curtains);
        }
        this.sofaGroup.removeAll();
        if (Main.applyCount1[6] >= 1) {
            this.sofa = game.add.sprite(445.5, 394.5, 'sofa' + Main.applyCount1[6]);
            this.sofa.anchor.setTo(0.5);
            this.sofaGroup.add(this.sofa);
        }
        this.frameGroup.removeAll();
        if (Main.applyCount1[7] >= 1) {
            this.frame = game.add.sprite(326, 285.5, 'frame' + Main.applyCount1[7]);
            this.frame.anchor.setTo(0.5);
            this.frameGroup.add(this.frame);
        }
        this.bedGroup.removeAll();
        if (Main.applyCount1[8] >= 1) {
            this.bed = game.add.sprite(214.5, 400, 'bed' + Main.applyCount1[8]);
            this.bed.anchor.setTo(0.5);
            this.bedGroup.add(this.bed);
        }
        this.lampGroup.removeAll();
        if (Main.applyCount1[9] >= 1) {
            this.lamp = game.add.sprite(46.5, 337.5, 'lamp' + Main.applyCount1[9]);
            this.lamp.anchor.setTo(0.5);
            this.lampGroup.add(this.lamp);
        }
        this.centerceilingGroup.removeAll();
        if (Main.applyCount1[10] >= 1) {
            this.centerceiling = game.add.sprite(349, 35, 'centerceiling' + Main.applyCount1[10]);
            this.centerceiling.anchor.setTo(0.5);
            this.centerceilingGroup.add(this.centerceiling);
        }
        this.toplightGroup.removeAll();
        if (Main.applyCount1[11] >= 1) {
            this.toplight = game.add.sprite(348, 320, 'toplight' + Main.applyCount1[11]);
            this.toplight.anchor.setTo(0.5);
            this.toplightGroup.add(this.toplight);
        }
    },
    openLink: function() {
        CreateLinksInGame("Princess-Love-Theme-Room", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Princess-Love-Theme-Room", "game", "more");
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            if (Main.girlCompleted[1] == 1 && Main.girlCompleted[2] == 2 && Main.girlCompleted[3] == 3 && Main.girlCompleted[4] == 4) {
                game.state.start('finalScreen');

            } else
                game.state.start('selectScreen');

        });
    },
    btnOver1: function(items) {
        items.scale.x = 0.8;
        items.scale.y = 0.8;
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut1: function(items) {
        items.scale.x = 0.7;
        items.scale.y = 0.7;
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
Main.decor2 = function() {}

Main.decor2.prototype = {
    create: function() {
        this.stepCount = 1;
        this.levelGroup = game.add.group();

        this.shadow = game.add.sprite(252, 458.5, 'shadow');
        this.shadow.anchor.setTo(0.5);

        this.hook = game.add.sprite(343.5, 30.5, 'hook');
        this.hook.anchor.setTo(0.5);

        this.iconbg = game.add.sprite(257.05, 759.6, 'iconbg');
        this.iconbg.anchor.setTo(0.5);

        this.morebtn = game.add.sprite(454.4, 660, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.7);
        this.morebtn.inputEnabled = true;
        this.morebtn.visible = false;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver1, this);
        this.morebtn.events.onInputOut.add(this.btnOut1, this);
        this.donebtn = game.add.sprite(54, 660, 'donebtn');
        this.donebtn.anchor.setTo(0.5);
        this.donebtn.scale.setTo(0.7);
        this.donebtn.inputEnabled = true;
        this.donebtn.visible = false;
        this.donebtn.input.useHandCursor = true;
        this.donebtn.events.onInputUp.add(this.enterRoom, this);
        this.donebtn.events.onInputOver.add(this.btnOver1, this);
        this.donebtn.events.onInputOut.add(this.btnOut1, this);

        this.playbtn = game.add.sprite(250, 660, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0.7);
        this.playbtn.inputEnabled = true;
        this.playbtn.visible = false;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.animfun, this);
        this.playbtn.events.onInputOver.add(this.btnOver1, this);
        this.playbtn.events.onInputOut.add(this.btnOut1, this);

        this.forwardarrow = game.add.sprite(466.4, 751, 'forwardarrow');
        this.forwardarrow.anchor.setTo(0.5);
        this.forwardarrow.inputEnabled = true;
        this.forwardarrow.input.useHandCursor = true;
        this.forwardarrow.events.onInputUp.add(this.nextslide, this);
        this.forwardarrow.events.onInputOver.add(this.btnOver, this);
        this.forwardarrow.events.onInputOut.add(this.btnOut, this);
        this.backwardarrow = game.add.sprite(37, 751, 'backwardarrow');
        this.backwardarrow.anchor.setTo(0.5);
        this.backwardarrow.inputEnabled = true;
        this.backwardarrow.visible = false;
        this.backwardarrow.input.useHandCursor = true;
        this.backwardarrow.events.onInputUp.add(this.prevslide, this);
        this.backwardarrow.events.onInputOver.add(this.btnOver, this);
        this.backwardarrow.events.onInputOut.add(this.btnOut, this);

        this.elsa = game.add.sprite(550, 380, 'elsa');
        this.elsa.anchor.setTo(0.5);
        this.elsa.scale.setTo(0.42);

        this.jack = game.add.sprite(550, 380, 'jack');
        this.jack.anchor.setTo(0.5);
        this.jack.scale.setTo(0.42);

        this.iconGroup1 = game.add.group();
        this.iconGroup2 = game.add.group();
        this.iconGroup3 = game.add.group();

        this.icon1 = game.add.sprite(116.45, 749.5, 'icon1');
        this.icon1.anchor.setTo(0.5);
        this.icon1.arrayindex = 0;
        this.icon1.total = 4;

        this.icon2 = game.add.sprite(206.5, 749.5, 'icon2');
        this.icon2.anchor.setTo(0.5);
        this.icon2.arrayindex = 1;
        this.icon2.total = 4;

        this.icon3 = game.add.sprite(296.5, 749.5, 'icon3');
        this.icon3.anchor.setTo(0.5);
        this.icon3.arrayindex = 2;
        this.icon3.total = 4;

        this.icon4 = game.add.sprite(386.55, 749.5, 'icon4');
        this.icon4.anchor.setTo(0.5);
        this.icon4.arrayindex = 3;
        this.icon4.total = 4;

        this.icon5 = game.add.sprite(116.45, 749.5, 'icon5');
        this.icon5.anchor.setTo(0.5);
        this.icon5.arrayindex = 4;
        this.icon5.total = 4;

        this.icon6 = game.add.sprite(206.5, 749.5, 'icon6');
        this.icon6.anchor.setTo(0.5);
        this.icon6.arrayindex = 5;
        this.icon6.total = 4;

        this.icon7 = game.add.sprite(296.5, 749.5, 'icon7');
        this.icon7.anchor.setTo(0.5);
        this.icon7.arrayindex = 6;
        this.icon7.total = 4;

        this.icon8 = game.add.sprite(386.55, 749.5, 'icon8');
        this.icon8.anchor.setTo(0.5);
        this.icon8.arrayindex = 7;
        this.icon8.total = 4;

        this.icon9 = game.add.sprite(116.45, 749.5, 'icon9');
        this.icon9.anchor.setTo(0.5);
        this.icon9.arrayindex = 8;
        this.icon9.total = 4;

        this.icon10 = game.add.sprite(206.5, 749.5, 'icon10');
        this.icon10.anchor.setTo(0.5);
        this.icon10.arrayindex = 9;
        this.icon10.total = 4;

        this.icon11 = game.add.sprite(296.5, 749.5, 'icon11');
        this.icon11.anchor.setTo(0.5);
        this.icon11.arrayindex = 10;
        this.icon11.total = 4;

        this.icon12 = game.add.sprite(386.55, 749.5, 'icon12');
        this.icon12.anchor.setTo(0.5);
        this.icon12.arrayindex = 11;
        this.icon12.total = 4;

        for (var i = 1; i <= 12; i++) {
            this['icon' + i].inputEnabled = true;
            this['icon' + i].input.useHandCursor = true;
            this['icon' + i].events.onInputOver.add(this.btnOver, this);
            this['icon' + i].events.onInputOut.add(this.btnOut, this);
            this['icon' + i].events.onInputUp.add(this.changeItem2, this);
            if (i >= 9) {
                this['icon' + i].flag = 1;
            } else {
                this['icon' + i].flag = 0;
            }
        }

        for (var i = 2; i <= 3; i++) {
            this['iconGroup' + i].visible = false;

        }
        this.decor2Group = game.add.group();

        this.floorGroup = game.add.group();
        this.floormatGroup = game.add.group();
        this.lampGroup = game.add.group();
        this.toplightGroup = game.add.group();
        this.wallGroup = game.add.group();
        this.bedGroup = game.add.group();
        this.curtainGroup = game.add.group();
        this.doorGroup = game.add.group();
        this.ceilingGroup = game.add.group();
        this.centerceilingGroup = game.add.group();
        this.frameGroup = game.add.group();
        this.sofaGroup = game.add.group();

        this.decor2Group.add(this.floorGroup);
        this.decor2Group.add(this.shadow);
        this.decor2Group.add(this.floormatGroup);
        this.decor2Group.add(this.wallGroup);
        this.decor2Group.add(this.ceilingGroup);
        this.decor2Group.add(this.doorGroup);
        this.decor2Group.add(this.curtainGroup);
        this.decor2Group.add(this.sofaGroup);
        this.decor2Group.add(this.frameGroup);
        this.decor2Group.add(this.bedGroup);
        this.decor2Group.add(this.lampGroup);
        this.decor2Group.add(this.centerceilingGroup);
        this.decor2Group.add(this.hook);
        this.decor2Group.add(this.toplightGroup);

        this.iconGroup1.add(this.icon1);
        this.iconGroup1.add(this.icon2);
        this.iconGroup1.add(this.icon3);
        this.iconGroup1.add(this.icon4);
        this.iconGroup2.add(this.icon5);
        this.iconGroup2.add(this.icon6);
        this.iconGroup2.add(this.icon7);
        this.iconGroup2.add(this.icon8);
        this.iconGroup3.add(this.icon9);
        this.iconGroup3.add(this.icon10);
        this.iconGroup3.add(this.icon11);
        this.iconGroup3.add(this.icon12);


        this.levelGroup.add(this.decor2Group);
        this.levelGroup.add(this.iconbg);
        this.levelGroup.add(this.iconGroup1);
        this.levelGroup.add(this.iconGroup2);
        this.levelGroup.add(this.iconGroup3);
        this.levelGroup.add(this.backwardarrow);
        this.levelGroup.add(this.forwardarrow);
        this.levelGroup.add(this.jack);
        this.levelGroup.add(this.elsa);


        this.retainObjects2();

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -860
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
        if (evt.flag == 1) {
            this.playbtn.visible = true;
        } else {
            this.playbtn.visible = false;
        }

        switch (evt.arrayindex) {
            case 0:
                effectVar = game.add.sprite(300, 420, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 1:
                effectVar = game.add.sprite(300, 500, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 2:
                effectVar = game.add.sprite(180, 50, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 3:
                effectVar = game.add.sprite(100, 0, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 4:
                effectVar = game.add.sprite(160, 220, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;


            case 5:
                effectVar = game.add.sprite(160, 180, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 6:
                effectVar = game.add.sprite(350, 320, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 7:
                effectVar = game.add.sprite(380, 180, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 8:
                effectVar = game.add.sprite(80, 340, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 9:
                effectVar = game.add.sprite(-70, 330, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 10:
                effectVar = game.add.sprite(300, -10, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 11:
                effectVar = game.add.sprite(270, 40, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

        }

        if (Main.applyCount2[evt.arrayindex] < evt.total) {
            Main.applyCount2[evt.arrayindex]++;
        } else {
            Main.applyCount2[evt.arrayindex] = 1;
        }

        this.retainObjects2();
    },
    nextslide: function() {
        this.backwardarrow.visible = true;
        this['iconGroup' + this.stepCount].visible = false;
        this.stepCount++;
        this['iconGroup' + this.stepCount].visible = true;
        //this.animateIcons(this.stepCount);
        if (this.stepCount <= 3) {
            if (this.stepCount == 3) {
                this.forwardarrow.visible = false;
            }
            //    if ( this.stepCount==3 && (this.tool9.events.onInputDown==true ||this.tool10.events.onInputDown==true||this.tool11.events.onInputDown==true ||this.tool12.events.onInputDown==true))
            //{
            //   this.playbtn.visible=true;
            // }
        }
    },
    prevslide: function() {
        console.log(this.stepCount);
        this.forwardarrow.visible = true;
        this['iconGroup' + this.stepCount].visible = false;
        this.stepCount--;
        this['iconGroup' + this.stepCount].visible = true;
        //this.animateIcons(this.stepCount);
        if (this.stepCount >= 1) {

            if (this.stepCount == 1) {
                this.backwardarrow.visible = false;
            }
        }

    },
    animfun: function() {
        this.playbtn.visible = false;
        game.add.tween(this.jack).to({
            x: 400,
            y: 380
        }, 400, "Linear", true).onComplete.add(function() {
            game.add.tween(this.jack).to({
                x: 390,
                y: 380
            }, 50, "Linear", true).onComplete.add(function() {
                game.add.tween(this.jack).to({
                    x: 400,
                    y: 380
                }, 400, "Linear", true).onComplete.add(function() {
                    game.add.tween(this.elsa).to({
                        x: 460,
                        y: 380
                    }, 400, "Linear", true).onComplete.add(function() {
                        game.add.tween(this.elsa).to({
                            x: 450,
                            y: 380
                        }, 50, "Linear", true).onComplete.add(function() {
                            game.add.tween(this.elsa).to({
                                x: 460,
                                y: 380
                            }, 400, "Linear", true).onComplete.add(function() {
                                this.donebtn.visible = true;
                                this.morebtn.visible = true;
                            }, this);
                        }, this);
                    }, this);
                }, this);
            }, this);
        }, this);
    },
    retainObjects2: function() {
        this.floorGroup.removeAll();
        if (Main.applyCount2[0] >= 1) {
            this.floor = game.add.sprite(252, 567, 'floor' + Main.applyCount2[0]);
            this.floor.anchor.setTo(0.5);
            this.floorGroup.add(this.floor);
        }
        this.floormatGroup.removeAll();
        if (Main.applyCount2[1] >= 1) {
            this.floormat = game.add.sprite(252, 602, 'floormat' + Main.applyCount2[1]);
            this.floormat.anchor.setTo(0.5);
            this.floormatGroup.add(this.floormat);
        }
        this.wallGroup.removeAll();
        if (Main.applyCount2[2] >= 1) {
            this.wall = game.add.sprite(252, 244.5, 'wall' + Main.applyCount2[2]);
            this.wall.anchor.setTo(0.5);
            this.wallGroup.add(this.wall);
        }
        this.ceilingGroup.removeAll();
        if (Main.applyCount2[3] >= 1) {
            this.ceiling = game.add.sprite(252, 65, 'ceiling' + Main.applyCount2[3]);
            this.ceiling.anchor.setTo(0.5);
            this.ceilingGroup.add(this.ceiling);
        }
        this.doorGroup.removeAll();
        if (Main.applyCount2[4] >= 1) {
            this.door = game.add.sprite(224.5, 312, 'door' + Main.applyCount2[4]);
            this.door.anchor.setTo(0.5);
            this.doorGroup.add(this.door);
        }
        this.curtainGroup.removeAll();
        if (Main.applyCount2[5] >= 1) {
            this.curtains = game.add.sprite(252.5, 400, 'curtain' + Main.applyCount2[5]);
            this.curtains.anchor.setTo(0.5);
            this.curtainGroup.add(this.curtains);
        }
        this.sofaGroup.removeAll();
        if (Main.applyCount2[6] >= 1) {
            this.sofa = game.add.sprite(445.5, 394.5, 'sofa' + Main.applyCount2[6]);
            this.sofa.anchor.setTo(0.5);
            this.sofaGroup.add(this.sofa);
        }
        this.frameGroup.removeAll();
        if (Main.applyCount2[7] >= 1) {
            this.frame = game.add.sprite(326, 285.5, 'frame' + Main.applyCount2[7]);
            this.frame.anchor.setTo(0.5);
            this.frameGroup.add(this.frame);
        }
        this.bedGroup.removeAll();
        if (Main.applyCount2[8] >= 1) {
            this.bed = game.add.sprite(214.5, 400, 'bed' + Main.applyCount2[8]);
            this.bed.anchor.setTo(0.5);
            this.bedGroup.add(this.bed);
        }
        this.lampGroup.removeAll();
        if (Main.applyCount2[9] >= 1) {
            this.lamp = game.add.sprite(46.5, 337.5, 'lamp' + Main.applyCount2[9]);
            this.lamp.anchor.setTo(0.5);
            this.lampGroup.add(this.lamp);
        }
        this.centerceilingGroup.removeAll();
        if (Main.applyCount2[10] >= 1) {
            this.centerceiling = game.add.sprite(349, 35, 'centerceiling' + Main.applyCount2[10]);
            this.centerceiling.anchor.setTo(0.5);
            this.centerceilingGroup.add(this.centerceiling);
        }
        this.toplightGroup.removeAll();
        if (Main.applyCount2[11] >= 1) {
            this.toplight = game.add.sprite(348, 320, 'toplight' + Main.applyCount2[11]);
            this.toplight.anchor.setTo(0.5);
            this.toplightGroup.add(this.toplight);
        }
    },
    openLink: function() {
        CreateLinksInGame("Princess-Love-Theme-Room", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Princess-Love-Theme-Room", "game", "more");
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            if (Main.girlCompleted[1] == 1 && Main.girlCompleted[2] == 2 && Main.girlCompleted[3] == 3 && Main.girlCompleted[4] == 4) {
                game.state.start('finalScreen');

            } else
                game.state.start('selectScreen');

        });
    },
    btnOver1: function(items) {
        items.scale.x = 0.8;
        items.scale.y = 0.8;
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut1: function(items) {
        items.scale.x = 0.7;
        items.scale.y = 0.7;
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
Main.decor3 = function() {}

Main.decor3.prototype = {
    create: function() {
        this.stepCount = 1;
        this.levelGroup = game.add.group();

        this.shadow = game.add.sprite(252, 458.5, 'shadow');
        this.shadow.anchor.setTo(0.5);

        this.hook = game.add.sprite(343.5, 30.5, 'hook');
        this.hook.anchor.setTo(0.5);

        this.iconbg = game.add.sprite(257.05, 759.6, 'iconbg');
        this.iconbg.anchor.setTo(0.5);

        this.morebtn = game.add.sprite(454.4, 660, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.7);
        this.morebtn.inputEnabled = true;
        this.morebtn.visible = false;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver1, this);
        this.morebtn.events.onInputOut.add(this.btnOut1, this);
        this.donebtn = game.add.sprite(54, 660, 'donebtn');
        this.donebtn.anchor.setTo(0.5);
        this.donebtn.scale.setTo(0.7);
        this.donebtn.inputEnabled = true;
        this.donebtn.visible = false;
        this.donebtn.input.useHandCursor = true;
        this.donebtn.events.onInputUp.add(this.enterRoom, this);
        this.donebtn.events.onInputOver.add(this.btnOver1, this);
        this.donebtn.events.onInputOut.add(this.btnOut1, this);

        this.playbtn = game.add.sprite(250, 660, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0.7);
        this.playbtn.inputEnabled = true;
        this.playbtn.visible = false;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.animfun, this);
        this.playbtn.events.onInputOver.add(this.btnOver1, this);
        this.playbtn.events.onInputOut.add(this.btnOut1, this);

        this.forwardarrow = game.add.sprite(466.4, 751, 'forwardarrow');
        this.forwardarrow.anchor.setTo(0.5);
        this.forwardarrow.inputEnabled = true;
        this.forwardarrow.input.useHandCursor = true;
        this.forwardarrow.events.onInputUp.add(this.nextslide, this);
        this.forwardarrow.events.onInputOver.add(this.btnOver, this);
        this.forwardarrow.events.onInputOut.add(this.btnOut, this);
        this.backwardarrow = game.add.sprite(37, 751, 'backwardarrow');
        this.backwardarrow.anchor.setTo(0.5);
        this.backwardarrow.inputEnabled = true;
        this.backwardarrow.visible = false;
        this.backwardarrow.input.useHandCursor = true;
        this.backwardarrow.events.onInputUp.add(this.prevslide, this);
        this.backwardarrow.events.onInputOver.add(this.btnOver, this);
        this.backwardarrow.events.onInputOut.add(this.btnOut, this);

        this.jas = game.add.sprite(570, 380, 'jas');
        this.jas.anchor.setTo(0.5);
        this.jas.scale.setTo(0.42);

        this.alauden = game.add.sprite(580, 380, 'alauden');
        this.alauden.anchor.setTo(0.5);
        this.alauden.scale.setTo(0.42);


        this.iconGroup1 = game.add.group();
        this.iconGroup2 = game.add.group();
        this.iconGroup3 = game.add.group();

        this.icon1 = game.add.sprite(116.45, 749.5, 'icon1');
        this.icon1.anchor.setTo(0.5);
        this.icon1.arrayindex = 0;
        this.icon1.total = 4;

        this.icon2 = game.add.sprite(206.5, 749.5, 'icon2');
        this.icon2.anchor.setTo(0.5);
        this.icon2.arrayindex = 1;
        this.icon2.total = 4;

        this.icon3 = game.add.sprite(296.5, 749.5, 'icon3');
        this.icon3.anchor.setTo(0.5);
        this.icon3.arrayindex = 2;
        this.icon3.total = 4;

        this.icon4 = game.add.sprite(386.55, 749.5, 'icon4');
        this.icon4.anchor.setTo(0.5);
        this.icon4.arrayindex = 3;
        this.icon4.total = 4;

        this.icon5 = game.add.sprite(116.45, 749.5, 'icon5');
        this.icon5.anchor.setTo(0.5);
        this.icon5.arrayindex = 4;
        this.icon5.total = 4;

        this.icon6 = game.add.sprite(206.5, 749.5, 'icon6');
        this.icon6.anchor.setTo(0.5);
        this.icon6.arrayindex = 5;
        this.icon6.total = 4;

        this.icon7 = game.add.sprite(296.5, 749.5, 'icon7');
        this.icon7.anchor.setTo(0.5);
        this.icon7.arrayindex = 6;
        this.icon7.total = 4;

        this.icon8 = game.add.sprite(386.55, 749.5, 'icon8');
        this.icon8.anchor.setTo(0.5);
        this.icon8.arrayindex = 7;
        this.icon8.total = 4;

        this.icon9 = game.add.sprite(116.45, 749.5, 'icon9');
        this.icon9.anchor.setTo(0.5);
        this.icon9.arrayindex = 8;
        this.icon9.total = 4;

        this.icon10 = game.add.sprite(206.5, 749.5, 'icon10');
        this.icon10.anchor.setTo(0.5);
        this.icon10.arrayindex = 9;
        this.icon10.total = 4;

        this.icon11 = game.add.sprite(296.5, 749.5, 'icon11');
        this.icon11.anchor.setTo(0.5);
        this.icon11.arrayindex = 10;
        this.icon11.total = 4;

        this.icon12 = game.add.sprite(386.55, 749.5, 'icon12');
        this.icon12.anchor.setTo(0.5);
        this.icon12.arrayindex = 11;
        this.icon12.total = 4;

        for (var i = 1; i <= 12; i++) {
            this['icon' + i].inputEnabled = true;
            this['icon' + i].input.useHandCursor = true;
            this['icon' + i].events.onInputOver.add(this.btnOver, this);
            this['icon' + i].events.onInputOut.add(this.btnOut, this);
            this['icon' + i].events.onInputUp.add(this.changeItem2, this);
            if (i >= 9) {
                this['icon' + i].flag = 1;
            } else {
                this['icon' + i].flag = 0;
            }
        }

        for (var i = 2; i <= 3; i++) {
            this['iconGroup' + i].visible = false;

        }
        this.decor3Group = game.add.group();

        this.floorGroup = game.add.group();
        this.floormatGroup = game.add.group();
        this.lampGroup = game.add.group();
        this.toplightGroup = game.add.group();
        this.wallGroup = game.add.group();
        this.bedGroup = game.add.group();
        this.curtainGroup = game.add.group();
        this.doorGroup = game.add.group();
        this.ceilingGroup = game.add.group();
        this.centerceilingGroup = game.add.group();
        this.frameGroup = game.add.group();
        this.sofaGroup = game.add.group();

        this.decor3Group.add(this.floorGroup);
        this.decor3Group.add(this.shadow);
        this.decor3Group.add(this.floormatGroup);
        this.decor3Group.add(this.wallGroup);
        this.decor3Group.add(this.ceilingGroup);
        this.decor3Group.add(this.doorGroup);
        this.decor3Group.add(this.curtainGroup);
        this.decor3Group.add(this.sofaGroup);
        this.decor3Group.add(this.frameGroup);
        this.decor3Group.add(this.bedGroup);
        this.decor3Group.add(this.lampGroup);
        this.decor3Group.add(this.centerceilingGroup);
        this.decor3Group.add(this.hook);
        this.decor3Group.add(this.toplightGroup);

        this.iconGroup1.add(this.icon1);
        this.iconGroup1.add(this.icon2);
        this.iconGroup1.add(this.icon3);
        this.iconGroup1.add(this.icon4);
        this.iconGroup2.add(this.icon5);
        this.iconGroup2.add(this.icon6);
        this.iconGroup2.add(this.icon7);
        this.iconGroup2.add(this.icon8);
        this.iconGroup3.add(this.icon9);
        this.iconGroup3.add(this.icon10);
        this.iconGroup3.add(this.icon11);
        this.iconGroup3.add(this.icon12);


        this.levelGroup.add(this.decor3Group);
        this.levelGroup.add(this.iconbg);
        this.levelGroup.add(this.iconGroup1);
        this.levelGroup.add(this.iconGroup2);
        this.levelGroup.add(this.iconGroup3);
        this.levelGroup.add(this.backwardarrow);
        this.levelGroup.add(this.forwardarrow);
        this.levelGroup.add(this.alauden);
        this.levelGroup.add(this.jas);
        this.retainObjects3();

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -860
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
        if (evt.flag == 1) {
            this.playbtn.visible = true;
        } else {
            this.playbtn.visible = false;
        }

        switch (evt.arrayindex) {
            case 0:
                effectVar = game.add.sprite(300, 420, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 1:
                effectVar = game.add.sprite(300, 500, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 2:
                effectVar = game.add.sprite(180, 50, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 3:
                effectVar = game.add.sprite(100, 0, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 4:
                effectVar = game.add.sprite(160, 220, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;


            case 5:
                effectVar = game.add.sprite(160, 180, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

            case 6:
                effectVar = game.add.sprite(350, 320, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 7:
                effectVar = game.add.sprite(380, 180, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 8:
                effectVar = game.add.sprite(80, 340, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 9:
                effectVar = game.add.sprite(-70, 330, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 10:
                effectVar = game.add.sprite(300, -10, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;
            case 11:
                effectVar = game.add.sprite(270, 40, 'effectssd');
                effectVar.anchor.setTo(0.5);
                effectVar.scale.setTo(1);
                effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
                effectVar.animations.play('glitter', 30, false);
                break;

        }

        if (Main.applyCount3[evt.arrayindex] < evt.total) {
            Main.applyCount3[evt.arrayindex]++;
        } else {
            Main.applyCount3[evt.arrayindex] = 1;
        }

        this.retainObjects3();
    },
    nextslide: function() {
        this.backwardarrow.visible = true;
        this['iconGroup' + this.stepCount].visible = false;
        this.stepCount++;
        this['iconGroup' + this.stepCount].visible = true;
        //this.animateIcons(this.stepCount);
        if (this.stepCount <= 3) {
            if (this.stepCount == 3) {
                this.forwardarrow.visible = false;
            }
        }
    },
    prevslide: function() {
        console.log(this.stepCount);
        this.forwardarrow.visible = true;
        this['iconGroup' + this.stepCount].visible = false;
        this.stepCount--;
        this['iconGroup' + this.stepCount].visible = true;
        //this.animateIcons(this.stepCount);
        if (this.stepCount >= 1) {

            if (this.stepCount == 1) {
                this.backwardarrow.visible = false;
            }
        }

    },
    animfun: function() {
        this.playbtn.visible = false;
        game.add.tween(this.alauden).to({
            x: 400,
            y: 380
        }, 400, "Linear", true).onComplete.add(function() {
            game.add.tween(this.alauden).to({
                x: 380,
                y: 380
            }, 50, "Linear", true).onComplete.add(function() {
                game.add.tween(this.alauden).to({
                    x: 400,
                    y: 380
                }, 400, "Linear", true).onComplete.add(function() {
                    game.add.tween(this.jas).to({
                        x: 440,
                        y: 380
                    }, 400, "Linear", true).onComplete.add(function() {
                        game.add.tween(this.jas).to({
                            x: 430,
                            y: 380
                        }, 50, "Linear", true).onComplete.add(function() {
                            game.add.tween(this.jas).to({
                                x: 440,
                                y: 380
                            }, 400, "Linear", true).onComplete.add(function() {
                                this.donebtn.visible = true;
                                this.morebtn.visible = true;
                            }, this);
                        }, this);
                    }, this);
                }, this);
            }, this);
        }, this);
    },
    retainObjects3: function() {
        this.floorGroup.removeAll();
        if (Main.applyCount3[0] >= 1) {
            this.floor = game.add.sprite(252, 567, 'floor' + Main.applyCount3[0]);
            this.floor.anchor.setTo(0.5);
            this.floorGroup.add(this.floor);
        }
        this.floormatGroup.removeAll();
        if (Main.applyCount3[1] >= 1) {
            this.floormat = game.add.sprite(252, 602, 'floormat' + Main.applyCount3[1]);
            this.floormat.anchor.setTo(0.5);
            this.floormatGroup.add(this.floormat);
        }
        this.wallGroup.removeAll();
        if (Main.applyCount3[2] >= 1) {
            this.wall = game.add.sprite(252, 244.5, 'wall' + Main.applyCount3[2]);
            this.wall.anchor.setTo(0.5);
            this.wallGroup.add(this.wall);
        }
        this.ceilingGroup.removeAll();
        if (Main.applyCount3[3] >= 1) {
            this.ceiling = game.add.sprite(252, 65, 'ceiling' + Main.applyCount3[3]);
            this.ceiling.anchor.setTo(0.5);
            this.ceilingGroup.add(this.ceiling);
        }
        this.doorGroup.removeAll();
        if (Main.applyCount3[4] >= 1) {
            this.door = game.add.sprite(224.5, 312, 'door' + Main.applyCount3[4]);
            this.door.anchor.setTo(0.5);
            this.doorGroup.add(this.door);
        }
        this.curtainGroup.removeAll();
        if (Main.applyCount3[5] >= 1) {
            this.curtains = game.add.sprite(252.5, 400, 'curtain' + Main.applyCount3[5]);
            this.curtains.anchor.setTo(0.5);
            this.curtainGroup.add(this.curtains);
        }
        this.sofaGroup.removeAll();
        if (Main.applyCount3[6] >= 1) {
            this.sofa = game.add.sprite(445.5, 394.5, 'sofa' + Main.applyCount3[6]);
            this.sofa.anchor.setTo(0.5);
            this.sofaGroup.add(this.sofa);
        }
        this.frameGroup.removeAll();
        if (Main.applyCount3[7] >= 1) {
            this.frame = game.add.sprite(326, 285.5, 'frame' + Main.applyCount3[7]);
            this.frame.anchor.setTo(0.5);
            this.frameGroup.add(this.frame);
        }
        this.bedGroup.removeAll();
        if (Main.applyCount3[8] >= 1) {
            this.bed = game.add.sprite(214.5, 400, 'bed' + Main.applyCount3[8]);
            this.bed.anchor.setTo(0.5);
            this.bedGroup.add(this.bed);
        }
        this.lampGroup.removeAll();
        if (Main.applyCount3[9] >= 1) {
            this.lamp = game.add.sprite(46.5, 337.5, 'lamp' + Main.applyCount3[9]);
            this.lamp.anchor.setTo(0.5);
            this.lampGroup.add(this.lamp);
        }
        this.centerceilingGroup.removeAll();
        if (Main.applyCount3[10] >= 1) {
            this.centerceiling = game.add.sprite(349, 35, 'centerceiling' + Main.applyCount3[10]);
            this.centerceiling.anchor.setTo(0.5);
            this.centerceilingGroup.add(this.centerceiling);
        }
        this.toplightGroup.removeAll();
        if (Main.applyCount3[11] >= 1) {
            this.toplight = game.add.sprite(348, 320, 'toplight' + Main.applyCount3[11]);
            this.toplight.anchor.setTo(0.5);
            this.toplightGroup.add(this.toplight);
        }
    },

    openLink: function() {
        CreateLinksInGame("Princess-Love-Theme-Room", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Princess-Love-Theme-Room", "game", "more");
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            if (Main.girlCompleted[1] == 1 && Main.girlCompleted[2] == 2 && Main.girlCompleted[3] == 3 && Main.girlCompleted[4] == 4) {
                game.state.start('finalScreen');

            } else
                game.state.start('selectScreen');

        });
    },
    btnOver1: function(items) {
        items.scale.x = 0.8;
        items.scale.y = 0.8;
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut1: function(items) {
        items.scale.x = 0.7;
        items.scale.y = 0.7;
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
Main.finalScreen = function() {}

Main.finalScreen.prototype = {
    create: function() {
        this.levelGroup = game.add.group();

        this.finalbg = game.add.sprite(0, 0, 'finalbg');
        this.levelGroup.add(this.finalbg);

        this.elsa_icon2 = game.add.sprite(142.85, 214.75, 'elsa_icon2');
        this.elsa_icon2.anchor.setTo(0.5);
        this.elsa_icon2.scale.setTo(1.1);

        this.anna_icon2 = game.add.sprite(356.5, 220.3, 'anna_icon2');
        this.anna_icon2.anchor.setTo(0.5);
        this.anna_icon2.scale.setTo(1.1);

        this.rap_icon2 = game.add.sprite(140.35, 506.5, 'rap_icon2');
        this.rap_icon2.anchor.setTo(0.5);
        this.rap_icon2.scale.setTo(1.1);

        this.jas_icon2 = game.add.sprite(358.35, 510.35, 'jas_icon2');
        this.jas_icon2.anchor.setTo(0.5);
        this.jas_icon2.scale.setTo(1.1);


        this.morebtn = game.add.sprite(79.55, 714.2, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        this.resetbtn = game.add.sprite(427.6, 715.2, 'resetbtn');
        this.resetbtn.anchor.setTo(0.5);
        this.resetbtn.inputEnabled = true;
        this.resetbtn.input.useHandCursor = true;
        this.resetbtn.events.onInputUp.add(this.resetfun, this);
        this.resetbtn.events.onInputOver.add(this.btnOver, this);
        this.resetbtn.events.onInputOut.add(this.btnOut, this);


        this.decor3Group = game.add.group();

        this.shadow = game.add.sprite(252, 458.5, 'shadow');
        this.shadow.anchor.setTo(0.5);

        this.hook = game.add.sprite(343.5, 30.5, 'hook');
        this.hook.anchor.setTo(0.5);

        this.floorGroup = game.add.group();
        this.floormatGroup = game.add.group();
        this.lampGroup = game.add.group();
        this.toplightGroup = game.add.group();
        this.wallGroup = game.add.group();
        this.bedGroup = game.add.group();
        this.curtainGroup = game.add.group();
        this.doorGroup = game.add.group();
        this.ceilingGroup = game.add.group();
        this.centerceilingGroup = game.add.group();
        this.frameGroup = game.add.group();
        this.sofaGroup = game.add.group();

        this.decor3Group.add(this.floorGroup);
        this.decor3Group.add(this.shadow);
        this.decor3Group.add(this.floormatGroup);
        this.decor3Group.add(this.wallGroup);
        this.decor3Group.add(this.ceilingGroup);
        this.decor3Group.add(this.doorGroup);
        this.decor3Group.add(this.curtainGroup);
        this.decor3Group.add(this.sofaGroup);
        this.decor3Group.add(this.frameGroup);
        this.decor3Group.add(this.bedGroup);
        this.decor3Group.add(this.lampGroup);
        this.decor3Group.add(this.centerceilingGroup);
        this.decor3Group.add(this.hook);
        this.decor3Group.add(this.toplightGroup);
        this.decor3Group.scale.setTo(0.25);
        this.decor3Group.x = 300;
        this.decor3Group.y = 390;

        this.retainObjects3();

        this.decorGroup = game.add.group();

        this.shadow = game.add.sprite(252, 458.5, 'shadow');
        this.shadow.anchor.setTo(0.5);

        this.hook = game.add.sprite(343.5, 30.5, 'hook');
        this.hook.anchor.setTo(0.5);

        this.floorGroup = game.add.group();
        this.floormatGroup = game.add.group();
        this.lampGroup = game.add.group();
        this.toplightGroup = game.add.group();
        this.wallGroup = game.add.group();
        this.bedGroup = game.add.group();
        this.curtainGroup = game.add.group();
        this.doorGroup = game.add.group();
        this.ceilingGroup = game.add.group();
        this.centerceilingGroup = game.add.group();
        this.frameGroup = game.add.group();
        this.sofaGroup = game.add.group();

        this.decorGroup.add(this.floorGroup);
        this.decorGroup.add(this.shadow);
        this.decorGroup.add(this.floormatGroup);
        this.decorGroup.add(this.wallGroup);
        this.decorGroup.add(this.ceilingGroup);
        this.decorGroup.add(this.doorGroup);
        this.decorGroup.add(this.curtainGroup);
        this.decorGroup.add(this.sofaGroup);
        this.decorGroup.add(this.frameGroup);
        this.decorGroup.add(this.bedGroup);
        this.decorGroup.add(this.lampGroup);
        this.decorGroup.add(this.centerceilingGroup);
        this.decorGroup.add(this.hook);
        this.decorGroup.add(this.toplightGroup);

        this.decorGroup.scale.setTo(0.25);
        this.decorGroup.x = 80;
        this.decorGroup.y = 390;
        this.retainObjects();

        this.decor1Group = game.add.group();

        this.shadow = game.add.sprite(252, 458.5, 'shadow');
        this.shadow.anchor.setTo(0.5);

        this.hook = game.add.sprite(343.5, 30.5, 'hook');
        this.hook.anchor.setTo(0.5);

        this.floorGroup = game.add.group();
        this.floormatGroup = game.add.group();
        this.lampGroup = game.add.group();
        this.toplightGroup = game.add.group();
        this.wallGroup = game.add.group();
        this.bedGroup = game.add.group();
        this.curtainGroup = game.add.group();
        this.doorGroup = game.add.group();
        this.ceilingGroup = game.add.group();
        this.centerceilingGroup = game.add.group();
        this.frameGroup = game.add.group();
        this.sofaGroup = game.add.group();

        this.decor1Group.add(this.floorGroup);
        this.decor1Group.add(this.shadow);
        this.decor1Group.add(this.floormatGroup);
        this.decor1Group.add(this.wallGroup);
        this.decor1Group.add(this.ceilingGroup);
        this.decor1Group.add(this.doorGroup);
        this.decor1Group.add(this.curtainGroup);
        this.decor1Group.add(this.sofaGroup);
        this.decor1Group.add(this.frameGroup);
        this.decor1Group.add(this.bedGroup);
        this.decor1Group.add(this.lampGroup);
        this.decor1Group.add(this.centerceilingGroup);
        this.decor1Group.add(this.hook);
        this.decor1Group.add(this.toplightGroup);

        this.decor1Group.scale.setTo(0.25);
        this.decor1Group.x = 300;
        this.decor1Group.y = 100;
        this.retainObjects1();




        this.decor2Group = game.add.group();

        this.shadow = game.add.sprite(252, 458.5, 'shadow');
        this.shadow.anchor.setTo(0.5);

        this.hook = game.add.sprite(343.5, 30.5, 'hook');
        this.hook.anchor.setTo(0.5);

        this.floorGroup = game.add.group();
        this.floormatGroup = game.add.group();
        this.lampGroup = game.add.group();
        this.toplightGroup = game.add.group();
        this.wallGroup = game.add.group();
        this.bedGroup = game.add.group();
        this.curtainGroup = game.add.group();
        this.doorGroup = game.add.group();
        this.ceilingGroup = game.add.group();
        this.centerceilingGroup = game.add.group();
        this.frameGroup = game.add.group();
        this.sofaGroup = game.add.group();

        this.decor2Group.add(this.floorGroup);
        this.decor2Group.add(this.shadow);
        this.decor2Group.add(this.floormatGroup);
        this.decor2Group.add(this.wallGroup);
        this.decor2Group.add(this.ceilingGroup);
        this.decor2Group.add(this.doorGroup);
        this.decor2Group.add(this.curtainGroup);
        this.decor2Group.add(this.sofaGroup);
        this.decor2Group.add(this.frameGroup);
        this.decor2Group.add(this.bedGroup);
        this.decor2Group.add(this.lampGroup);
        this.decor2Group.add(this.centerceilingGroup);
        this.decor2Group.add(this.hook);
        this.decor2Group.add(this.toplightGroup);
        this.decor2Group.scale.setTo(0.25);
        this.decor2Group.x = 80;
        this.decor2Group.y = 100;
        this.retainObjects2();

        this.levelGroup.add(this.decor2Group);
        this.levelGroup.add(this.decor1Group);
        this.levelGroup.add(this.decorGroup);
        this.levelGroup.add(this.decor3Group);
        this.levelGroup.add(this.jas_icon2);
        this.levelGroup.add(this.rap_icon2);
        this.levelGroup.add(this.anna_icon2);
        this.levelGroup.add(this.elsa_icon2);

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
                y: -860
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
    retainObjects3: function() {
        this.floorGroup.removeAll();
        if (Main.applyCount3[0] >= 1) {
            this.floor = game.add.sprite(252, 567, 'floor' + Main.applyCount3[0]);
            this.floor.anchor.setTo(0.5);
            this.floorGroup.add(this.floor);
        }
        this.floormatGroup.removeAll();
        if (Main.applyCount3[1] >= 1) {
            this.floormat = game.add.sprite(252, 602, 'floormat' + Main.applyCount3[1]);
            this.floormat.anchor.setTo(0.5);
            this.floormatGroup.add(this.floormat);
        }
        this.wallGroup.removeAll();
        if (Main.applyCount3[2] >= 1) {
            this.wall = game.add.sprite(252, 244.5, 'wall' + Main.applyCount3[2]);
            this.wall.anchor.setTo(0.5);
            this.wallGroup.add(this.wall);
        }
        this.ceilingGroup.removeAll();
        if (Main.applyCount3[3] >= 1) {
            this.ceiling = game.add.sprite(252, 65, 'ceiling' + Main.applyCount3[3]);
            this.ceiling.anchor.setTo(0.5);
            this.ceilingGroup.add(this.ceiling);
        }
        this.doorGroup.removeAll();
        if (Main.applyCount3[4] >= 1) {
            this.door = game.add.sprite(224.5, 312, 'door' + Main.applyCount3[4]);
            this.door.anchor.setTo(0.5);
            this.doorGroup.add(this.door);
        }
        this.curtainGroup.removeAll();
        if (Main.applyCount3[5] >= 1) {
            this.curtains = game.add.sprite(252.5, 400, 'curtain' + Main.applyCount3[5]);
            this.curtains.anchor.setTo(0.5);
            this.curtainGroup.add(this.curtains);
        }
        this.sofaGroup.removeAll();
        if (Main.applyCount3[6] >= 1) {
            this.sofa = game.add.sprite(445.5, 394.5, 'sofa' + Main.applyCount3[6]);
            this.sofa.anchor.setTo(0.5);
            this.sofaGroup.add(this.sofa);
        }
        this.frameGroup.removeAll();
        if (Main.applyCount3[7] >= 1) {
            this.frame = game.add.sprite(326, 285.5, 'frame' + Main.applyCount3[7]);
            this.frame.anchor.setTo(0.5);
            this.frameGroup.add(this.frame);
        }
        this.bedGroup.removeAll();
        if (Main.applyCount3[8] >= 1) {
            this.bed = game.add.sprite(214.5, 400, 'bed' + Main.applyCount3[8]);
            this.bed.anchor.setTo(0.5);
            this.bedGroup.add(this.bed);
        }
        this.lampGroup.removeAll();
        if (Main.applyCount3[9] >= 1) {
            this.lamp = game.add.sprite(46.5, 337.5, 'lamp' + Main.applyCount3[9]);
            this.lamp.anchor.setTo(0.5);
            this.lampGroup.add(this.lamp);
        }
        this.centerceilingGroup.removeAll();
        if (Main.applyCount3[10] >= 1) {
            this.centerceiling = game.add.sprite(349, 35, 'centerceiling' + Main.applyCount3[10]);
            this.centerceiling.anchor.setTo(0.5);
            this.centerceilingGroup.add(this.centerceiling);
        }
        this.toplightGroup.removeAll();
        if (Main.applyCount3[11] >= 1) {
            this.toplight = game.add.sprite(348, 320, 'toplight' + Main.applyCount3[11]);
            this.toplight.anchor.setTo(0.5);
            this.toplightGroup.add(this.toplight);
        }
    },
    retainObjects2: function() {
        this.floorGroup.removeAll();
        if (Main.applyCount2[0] >= 1) {
            this.floor = game.add.sprite(252, 567, 'floor' + Main.applyCount2[0]);
            this.floor.anchor.setTo(0.5);
            this.floorGroup.add(this.floor);
        }
        this.floormatGroup.removeAll();
        if (Main.applyCount2[1] >= 1) {
            this.floormat = game.add.sprite(252, 602, 'floormat' + Main.applyCount2[1]);
            this.floormat.anchor.setTo(0.5);
            this.floormatGroup.add(this.floormat);
        }
        this.wallGroup.removeAll();
        if (Main.applyCount2[2] >= 1) {
            this.wall = game.add.sprite(252, 244.5, 'wall' + Main.applyCount2[2]);
            this.wall.anchor.setTo(0.5);
            this.wallGroup.add(this.wall);
        }
        this.ceilingGroup.removeAll();
        if (Main.applyCount2[3] >= 1) {
            this.ceiling = game.add.sprite(252, 65, 'ceiling' + Main.applyCount2[3]);
            this.ceiling.anchor.setTo(0.5);
            this.ceilingGroup.add(this.ceiling);
        }
        this.doorGroup.removeAll();
        if (Main.applyCount2[4] >= 1) {
            this.door = game.add.sprite(224.5, 312, 'door' + Main.applyCount2[4]);
            this.door.anchor.setTo(0.5);
            this.doorGroup.add(this.door);
        }
        this.curtainGroup.removeAll();
        if (Main.applyCount2[5] >= 1) {
            this.curtains = game.add.sprite(252.5, 400, 'curtain' + Main.applyCount2[5]);
            this.curtains.anchor.setTo(0.5);
            this.curtainGroup.add(this.curtains);
        }
        this.sofaGroup.removeAll();
        if (Main.applyCount2[6] >= 1) {
            this.sofa = game.add.sprite(445.5, 394.5, 'sofa' + Main.applyCount2[6]);
            this.sofa.anchor.setTo(0.5);
            this.sofaGroup.add(this.sofa);
        }
        this.frameGroup.removeAll();
        if (Main.applyCount2[7] >= 1) {
            this.frame = game.add.sprite(326, 285.5, 'frame' + Main.applyCount2[7]);
            this.frame.anchor.setTo(0.5);
            this.frameGroup.add(this.frame);
        }
        this.bedGroup.removeAll();
        if (Main.applyCount2[8] >= 1) {
            this.bed = game.add.sprite(214.5, 400, 'bed' + Main.applyCount2[8]);
            this.bed.anchor.setTo(0.5);
            this.bedGroup.add(this.bed);
        }
        this.lampGroup.removeAll();
        if (Main.applyCount2[9] >= 1) {
            this.lamp = game.add.sprite(46.5, 337.5, 'lamp' + Main.applyCount2[9]);
            this.lamp.anchor.setTo(0.5);
            this.lampGroup.add(this.lamp);
        }
        this.centerceilingGroup.removeAll();
        if (Main.applyCount2[10] >= 1) {
            this.centerceiling = game.add.sprite(349, 35, 'centerceiling' + Main.applyCount2[10]);
            this.centerceiling.anchor.setTo(0.5);
            this.centerceilingGroup.add(this.centerceiling);
        }
        this.toplightGroup.removeAll();
        if (Main.applyCount2[11] >= 1) {
            this.toplight = game.add.sprite(348, 320, 'toplight' + Main.applyCount2[11]);
            this.toplight.anchor.setTo(0.5);
            this.toplightGroup.add(this.toplight);
        }
    },
    retainObjects1: function() {
        this.floorGroup.removeAll();
        if (Main.applyCount1[0] >= 1) {
            this.floor = game.add.sprite(252, 567, 'floor' + Main.applyCount1[0]);
            this.floor.anchor.setTo(0.5);
            this.floorGroup.add(this.floor);
        }
        this.floormatGroup.removeAll();
        if (Main.applyCount1[1] >= 1) {
            this.floormat = game.add.sprite(252, 602, 'floormat' + Main.applyCount1[1]);
            this.floormat.anchor.setTo(0.5);
            this.floormatGroup.add(this.floormat);
        }
        this.wallGroup.removeAll();
        if (Main.applyCount1[2] >= 1) {
            this.wall = game.add.sprite(252, 244.5, 'wall' + Main.applyCount1[2]);
            this.wall.anchor.setTo(0.5);
            this.wallGroup.add(this.wall);
        }
        this.ceilingGroup.removeAll();
        if (Main.applyCount1[3] >= 1) {
            this.ceiling = game.add.sprite(252, 65, 'ceiling' + Main.applyCount1[3]);
            this.ceiling.anchor.setTo(0.5);
            this.ceilingGroup.add(this.ceiling);
        }
        this.doorGroup.removeAll();
        if (Main.applyCount1[4] >= 1) {
            this.door = game.add.sprite(224.5, 312, 'door' + Main.applyCount1[4]);
            this.door.anchor.setTo(0.5);
            this.doorGroup.add(this.door);
        }
        this.curtainGroup.removeAll();
        if (Main.applyCount1[5] >= 1) {
            this.curtains = game.add.sprite(252.5, 400, 'curtain' + Main.applyCount1[5]);
            this.curtains.anchor.setTo(0.5);
            this.curtainGroup.add(this.curtains);
        }
        this.sofaGroup.removeAll();
        if (Main.applyCount1[6] >= 1) {
            this.sofa = game.add.sprite(445.5, 394.5, 'sofa' + Main.applyCount1[6]);
            this.sofa.anchor.setTo(0.5);
            this.sofaGroup.add(this.sofa);
        }
        this.frameGroup.removeAll();
        if (Main.applyCount1[7] >= 1) {
            this.frame = game.add.sprite(326, 285.5, 'frame' + Main.applyCount1[7]);
            this.frame.anchor.setTo(0.5);
            this.frameGroup.add(this.frame);
        }
        this.bedGroup.removeAll();
        if (Main.applyCount1[8] >= 1) {
            this.bed = game.add.sprite(214.5, 400, 'bed' + Main.applyCount1[8]);
            this.bed.anchor.setTo(0.5);
            this.bedGroup.add(this.bed);
        }
        this.lampGroup.removeAll();
        if (Main.applyCount1[9] >= 1) {
            this.lamp = game.add.sprite(46.5, 337.5, 'lamp' + Main.applyCount1[9]);
            this.lamp.anchor.setTo(0.5);
            this.lampGroup.add(this.lamp);
        }
        this.centerceilingGroup.removeAll();
        if (Main.applyCount1[10] >= 1) {
            this.centerceiling = game.add.sprite(349, 35, 'centerceiling' + Main.applyCount1[10]);
            this.centerceiling.anchor.setTo(0.5);
            this.centerceilingGroup.add(this.centerceiling);
        }
        this.toplightGroup.removeAll();
        if (Main.applyCount1[11] >= 1) {
            this.toplight = game.add.sprite(348, 320, 'toplight' + Main.applyCount1[11]);
            this.toplight.anchor.setTo(0.5);
            this.toplightGroup.add(this.toplight);
        }
    },
    retainObjects: function() {
        this.floorGroup.removeAll();
        if (Main.applyCount[0] >= 1) {
            this.floor = game.add.sprite(252, 567, 'floor' + Main.applyCount[0]);
            this.floor.anchor.setTo(0.5);
            this.floorGroup.add(this.floor);
        }
        this.floormatGroup.removeAll();
        if (Main.applyCount[1] >= 1) {
            this.floormat = game.add.sprite(252, 602, 'floormat' + Main.applyCount[1]);
            this.floormat.anchor.setTo(0.5);
            this.floormatGroup.add(this.floormat);
        }
        this.wallGroup.removeAll();
        if (Main.applyCount[2] >= 1) {
            this.wall = game.add.sprite(252, 244.5, 'wall' + Main.applyCount[2]);
            this.wall.anchor.setTo(0.5);
            this.wallGroup.add(this.wall);
        }
        this.ceilingGroup.removeAll();
        if (Main.applyCount[3] >= 1) {
            this.ceiling = game.add.sprite(252, 65, 'ceiling' + Main.applyCount[3]);
            this.ceiling.anchor.setTo(0.5);
            this.ceilingGroup.add(this.ceiling);
        }
        this.doorGroup.removeAll();
        if (Main.applyCount[4] >= 1) {
            this.door = game.add.sprite(224.5, 312, 'door' + Main.applyCount[4]);
            this.door.anchor.setTo(0.5);
            this.doorGroup.add(this.door);
        }
        this.curtainGroup.removeAll();
        if (Main.applyCount[5] >= 1) {
            this.curtains = game.add.sprite(252.5, 400, 'curtain' + Main.applyCount[5]);
            this.curtains.anchor.setTo(0.5);
            this.curtainGroup.add(this.curtains);
        }
        this.sofaGroup.removeAll();
        if (Main.applyCount[6] >= 1) {
            this.sofa = game.add.sprite(445.5, 394.5, 'sofa' + Main.applyCount[6]);
            this.sofa.anchor.setTo(0.5);
            this.sofaGroup.add(this.sofa);
        }
        this.frameGroup.removeAll();
        if (Main.applyCount[7] >= 1) {
            this.frame = game.add.sprite(326, 285.5, 'frame' + Main.applyCount[7]);
            this.frame.anchor.setTo(0.5);
            this.frameGroup.add(this.frame);
        }
        this.bedGroup.removeAll();
        if (Main.applyCount[8] >= 1) {
            this.bed = game.add.sprite(214.5, 400, 'bed' + Main.applyCount[8]);
            this.bed.anchor.setTo(0.5);
            this.bedGroup.add(this.bed);
        }
        this.lampGroup.removeAll();
        if (Main.applyCount[9] >= 1) {
            this.lamp = game.add.sprite(46.5, 337.5, 'lamp' + Main.applyCount[9]);
            this.lamp.anchor.setTo(0.5);
            this.lampGroup.add(this.lamp);
        }
        this.centerceilingGroup.removeAll();
        if (Main.applyCount[10] >= 1) {
            this.centerceiling = game.add.sprite(349, 35, 'centerceiling' + Main.applyCount[10]);
            this.centerceiling.anchor.setTo(0.5);
            this.centerceilingGroup.add(this.centerceiling);
        }
        this.toplightGroup.removeAll();
        if (Main.applyCount[11] >= 1) {
            this.toplight = game.add.sprite(348, 320, 'toplight' + Main.applyCount[11]);
            this.toplight.anchor.setTo(0.5);
            this.toplightGroup.add(this.toplight);
        }
    },
    openLink: function() {
        CreateLinksInGame("Princess-Love-Theme-Room", "gameover", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Princess-Love-Theme-Room", "gameover", "more");
    },
    thumbLink: function() {
        CreateLinksInGame("Princess-Love-Theme-Room", "gameover", "thumb", RelatedGames[this.randomId]['id']);
    },
    resetfun: function() {
        Main.applyCount = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        Main.applyCount1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        Main.applyCount2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        Main.applyCount3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        Main.girlChoosed = [0];
        Main.girlCompleted = [0, 0, 0];
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.state.start('selectScreen');

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
game.state.add('decor', Main.decor);
game.state.add('decor1', Main.decor1);
game.state.add('decor2', Main.decor2);
game.state.add('decor3', Main.decor3);
game.state.add('selectScreen', Main.selectScreen);
game.state.add('finalScreen', Main.finalScreen);

game.state.start('boot');