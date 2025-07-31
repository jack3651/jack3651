var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
    music: null,
    //toyChoosed:[0],
    //toyCompleted:[0,0,0],
    shutterOn: [true],
    //toolcompleted:[false,false,false],
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
        game.load.spritesheet('soundicon', 'assets/soundicon.png', 61, 76);
        game.load.image('logo', 'assets/logo.png');
        game.load.spritesheet('effects', 'assets/effects.png', 141, 134);
        game.load.spritesheet('effectssd', 'assets/efftes012.png', 367, 335);

        game.load.image('titlebg', 'assets/titlebg.png');
        game.load.image('mouthwashbg', 'assets/mouthwashbg.png');
        game.load.image('finalbg', 'assets/finalbg.png');
        game.load.image('introbg', 'assets/introbg.png');
        game.load.image('iconbg', 'assets/iconbg.png');
        game.load.image('popup1', 'assets/popup1.png');
        game.load.image('popup2', 'assets/popup2.png');
        game.load.image('morebtn', 'assets/morebtn.png');
        game.load.image('playbtn', 'assets/playbtn.png');
        game.load.image('nextbtn', 'assets/nextbtn.png');
        game.load.image('donebtn', 'assets/donebtn.png');
        game.load.image('resetbtn', 'assets/resetbtn.png');
        game.load.image('frontkid', 'assets/frontkid.png');
        game.load.image('backkid', 'assets/backkid.png');
        game.load.image('paste', 'assets/paste.png');
        game.load.image('brush', 'assets/brush.png');
        game.load.image('brush1', 'assets/brush1.png');
        game.load.image('meterfill', 'assets/meterfill.png');
        game.load.image('meter', 'assets/meter.png');
        game.load.image('chair', 'assets/mouth/chair.png');
        game.load.image('backglass', 'assets/mouth/backglass.png');
        game.load.image('frontglass', 'assets/mouth/frontglass.png');
        game.load.image('glasswater', 'assets/mouth/glasswater.png');
        game.load.image('backbottom', 'assets/mouth/backbottom.png');
        game.load.image('frontbottom', 'assets/mouth/frontbottom.png');
        game.load.image('bubbles', 'assets/mouth/bubbles.png');
        game.load.image('toy1', 'assets/toy/toy1_2.png');
        game.load.image('toy3', 'assets/toy/toy3.png');
        game.load.image('t2', 'assets/surgery/t2.png');
        game.load.image('t3', 'assets/surgery/t3.png');
        game.load.image('t4', 'assets/surgery/t4.png');
        game.load.image('toolstand', 'assets/surgery/toolstand.png');
        game.load.spritesheet('titleobject', 'assets/titleobject.png', 29, 21, 2);
        game.load.spritesheet('eyeblink', 'assets/eyeblink.png', 185, 74, 8);
        game.load.spritesheet('btn_closeani', 'assets/btn_closeani.png', 142, 118, 10);
        game.load.spritesheet('btn_openani', 'assets/btn_openani.png', 143, 119, 10);
        game.load.spritesheet('btn_overani', 'assets/btn_overani.png', 146, 83, 7);
        game.load.spritesheet('mouthrinsed', 'assets/mouthrinsed.png', 491, 354, 2);
        //game.load.spritesheet('crying', 'assets/crying.png',491,353,2);
        game.load.spritesheet('happyhead', 'assets/happyhead.png', 472, 509, 5);
        game.load.spritesheet('splitwaterface', 'assets/splitwaterface.png', 473, 353, 2);
        game.load.spritesheet('waterani', 'assets/mouth/waterani.png', 190, 38, 15);
        game.load.spritesheet('water', 'assets/mouth/water.png', 55, 165, 9);
        game.load.spritesheet('button', 'assets/mouth/button.png', 36, 29, 2);
        game.load.spritesheet('button1', 'assets/mouth/button1.png', 39, 37, 2);
        game.load.spritesheet('light', 'assets/mouth/light.png', 346, 304, 2);
        game.load.spritesheet('face', 'assets/mouth/face.png', 491, 397, 4);
        game.load.spritesheet('face1', 'assets/surgery/face1.png', 492, 398, 4);
        game.load.spritesheet('wastewater', 'assets/mouth/wastewater.png', 83, 196, 30);
        game.load.spritesheet('body', 'assets/body.png', 254, 247, 4);
        game.load.spritesheet('arrow', 'assets/arrow.png', 83, 70, 13);
        game.load.spritesheet('pasteani', 'assets/pasteani.png', 373, 154, 31);
        game.load.spritesheet('toyani', 'assets/toy/toy1_1.png', 457, 479, 25);
        game.load.spritesheet('clapbody', 'assets/clap_body.png', 258, 232, 3);
        game.load.spritesheet('crying', 'assets/crying.png', 487, 388, 2);
        game.load.spritesheet('face1', 'assets/surgery/face1.png', 492, 398, 4);
        game.load.spritesheet('t1', 'assets/surgery/t1.png', 230, 356, 2);
        game.load.spritesheet('wasteteeth', 'assets/surgery/wasteteeth.png', 85, 49, 40);
        game.load.spritesheet('tool5_ani', 'assets/surgery/tool5_ani.png', 342, 117, 31);

        for (var i = 1; i <= 2; i++) {
            game.load.image('toy2_' + i, 'assets/toy/toy2_' + i + '.png');
        }
        for (var i = 1; i <= 7; i++) {
            game.load.image('tool' + i, 'assets/surgery/tool' + i + '.png');
        }


        game.load.image('close_eye', 'assets/close_eye.png');
        // game.load.image('front_tub', 'assets/front_tub.png');




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
        CreateLinksInGame("Baby-Ladybug-Dentist", "loading", "logo");
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

        this.object = game.add.sprite(221.9, 528.35, 'titleobject');
        this.object.anchor.setTo(0.5);
        this.object.scale.x *= -1;
        this.object.animations.add('object');
        this.object.animations.play('object', 10, true);
        this.levelGroup.add(this.object);

        this.morebtn = game.add.sprite(75.35, 527.4, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.7);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver5, this);
        this.morebtn.events.onInputOut.add(this.btnOut5, this);
        this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(426.5, 527.4, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0.7);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver4, this);
        this.playbtn.events.onInputOut.add(this.btnOut4, this);
        this.levelGroup.add(this.playbtn);
        this.open_ani2 = game.add.sprite(75.35, 533.4, 'btn_openani');
        this.open_ani2.anchor.setTo(0.5);
        this.open_ani2.scale.setTo(0.7);
        this.open_ani2.animations.add('open_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.open_ani2.animations.add('open_ani1', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

        this.over_ani2 = game.add.sprite(76.35, 520.4, 'btn_overani');
        this.over_ani2.anchor.setTo(0.5);
        this.over_ani2.scale.setTo(0.7);
        this.over_ani2.animations.add('over_ani');
        this.over_ani2.visible = false;

        this.open_ani3 = game.add.sprite(426.5, 533.4, 'btn_openani');
        this.open_ani3.anchor.setTo(0.5);
        this.open_ani3.scale.setTo(0.7);
        this.open_ani3.animations.add('open_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.open_ani3.animations.add('open_ani1', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

        this.over_ani3 = game.add.sprite(428, 520.4, 'btn_overani');
        this.over_ani3.anchor.setTo(0.5);
        this.over_ani3.scale.setTo(0.7);
        this.over_ani3.animations.add('over_ani');
        this.over_ani3.visible = false;
        //  if (Main.shutterOn[0]) {
        // this.shutter = game.add.sprite(0,0,'titlebg');
        // game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true);
        //}

        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(440, 0, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        this.musicButton.events.onInputOver.add(this.btnOver6, this);
        this.musicButton.events.onInputOut.add(this.btnOut6, this);

        this.open_ani = game.add.sprite(470, 40, 'btn_openani');
        this.open_ani.anchor.setTo(0.5);
        this.open_ani.scale.setTo(0.5);
        this.open_ani.animations.add('open_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.open_ani.animations.add('open_ani1', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

        this.over_ani = game.add.sprite(471, 30, 'btn_overani');
        this.over_ani.anchor.setTo(0.5);
        this.over_ani.scale.setTo(0.5);
        this.over_ani.animations.add('over_ani');
        this.over_ani.visible = false;


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
    btnOver6: function() {
        this.open_ani.animations.play('open_ani', 10, false);
        game.time.events.add(1000, function() {
            this.over_ani.visible = true;
            this.open_ani.visible = false;
            this.over_ani.animations.play('over_ani', 10, true);
        }, this);
    },
    btnOut6: function() {
        this.open_ani.visible = true;
        this.over_ani.visible = false;
        this.open_ani.animations.play('open_ani1', 10, false);
    },
    btnOver5: function() {
        this.over_ani3.animations.stop();
        this.open_ani2.animations.play('open_ani', 10, false);
        game.time.events.add(1000, function() {
            this.over_ani2.visible = true;
            this.open_ani2.visible = false;
            this.over_ani2.animations.play('over_ani', 10, true);
        }, this);
    },
    btnOut5: function() {
        this.open_ani2.visible = true;
        this.over_ani2.visible = false;
        this.open_ani2.animations.play('open_ani1', 10, false);
    },
    btnOver4: function() {
        this.over_ani2.animations.stop();
        this.open_ani3.animations.play('open_ani', 10, false);
        game.time.events.add(1000, function() {
            this.over_ani3.visible = true;
            this.open_ani3.visible = false;
            this.over_ani3.animations.play('over_ani', 10, true);
        }, this);
    },
    btnOut4: function() {
        this.open_ani3.visible = true;
        this.over_ani3.visible = false;
        this.open_ani3.animations.play('open_ani1', 10, false);
    },
    openLink: function() {
        CreateLinksInGame("Baby-Ladybug-Dentist", "menu", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Ladybug-Dentist", "menu", "more");
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

        //this.eye_ani = game.add.sprite(260.95,470.2,'eyeblink');
        //this.eye_ani.anchor.setTo(0.5);
        //this.eye_ani.animations.add('eyeblink').onComplete.add(function(){
        //this.eye_ani.frame = 0;
        //      },this);
        //this.eye_ani.animations.play('eyeblink', 10, false);
        //game.time.events.loop(3000, this.updateEyeBlink, this);


        this.morebtn = game.add.sprite(76.7, 707.4, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver5, this);
        this.morebtn.events.onInputOut.add(this.btnOut5, this);
        this.levelGroup.add(this.morebtn);

        this.nextbtn = game.add.sprite(428.25, 707.4, 'nextbtn');
        this.nextbtn.anchor.setTo(0.5);
        this.nextbtn.scale.setTo(0);
        this.nextbtn.inputEnabled = true;
        this.nextbtn.input.useHandCursor = true;
        this.nextbtn.events.onInputUp.add(this.enterRoom, this);
        this.nextbtn.events.onInputOver.add(this.btnOver4, this);
        this.nextbtn.events.onInputOut.add(this.btnOut4, this);
        this.levelGroup.add(this.nextbtn);

        this.popup1 = game.add.sprite(350, 250, 'popup1');
        this.popup1.anchor.setTo(0.5);
        this.popup1.scale.setTo(0);
        this.levelGroup.add(this.popup1);

        this.open_ani2 = game.add.sprite(75.35, 717.4, 'btn_openani');
        this.open_ani2.anchor.setTo(0.5);
        this.open_ani2.scale.setTo(0);
        this.open_ani2.animations.add('open_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.open_ani2.animations.add('open_ani1', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

        this.over_ani2 = game.add.sprite(76.35, 699.4, 'btn_overani');
        this.over_ani2.anchor.setTo(0.5);
        this.over_ani2.scale.setTo(0);
        this.over_ani2.animations.add('over_ani');
        this.over_ani2.visible = false;

        this.open_ani3 = game.add.sprite(426.5, 717.4, 'btn_openani');
        this.open_ani3.anchor.setTo(0.5);
        this.open_ani3.scale.setTo(0);
        this.open_ani3.animations.add('open_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.open_ani3.animations.add('open_ani1', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

        this.over_ani3 = game.add.sprite(428, 699.4, 'btn_overani');
        this.over_ani3.anchor.setTo(0.5);
        this.over_ani3.scale.setTo(0);
        this.over_ani3.animations.add('over_ani');
        this.over_ani3.visible = false;


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

        this.musicButton = game.add.sprite(440, 0, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        this.musicButton.events.onInputOver.add(this.btnOver6, this);
        this.musicButton.events.onInputOut.add(this.btnOut6, this);

        this.open_ani = game.add.sprite(470, 40, 'btn_openani');
        this.open_ani.anchor.setTo(0.5);
        this.open_ani.scale.setTo(0.5);
        this.open_ani.animations.add('open_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.open_ani.animations.add('open_ani1', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

        this.over_ani = game.add.sprite(471, 30, 'btn_overani');
        this.over_ani.anchor.setTo(0.5);
        this.over_ani.scale.setTo(0.5);
        this.over_ani.animations.add('over_ani');
        this.over_ani.visible = false;



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
        game.add.tween(this.open_ani2.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.over_ani2.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.open_ani3.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.over_ani3.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
    },
    updateEyeBlink: function() {
        this.eye_ani.play('eyeblink', 10, false);

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
    btnOver6: function() {
        this.open_ani.animations.play('open_ani', 10, false);
        game.time.events.add(1000, function() {
            this.over_ani.visible = true;
            this.open_ani.visible = false;
            this.over_ani.animations.play('over_ani', 10, true);
        }, this);
    },
    btnOut6: function() {
        this.open_ani.visible = true;
        this.over_ani.visible = false;
        this.open_ani.animations.play('open_ani1', 10, false);
    },
    btnOver5: function() {
        this.over_ani3.animations.stop();
        this.open_ani2.animations.play('open_ani', 10, false);
        game.time.events.add(1000, function() {
            this.over_ani2.visible = true;
            this.open_ani2.visible = false;
            this.over_ani2.animations.play('over_ani', 10, true);
        }, this);
    },
    btnOut5: function() {
        this.open_ani2.visible = true;
        this.over_ani2.visible = false;
        this.open_ani2.animations.play('open_ani1', 10, false);
    },
    btnOver4: function() {
        this.over_ani2.animations.stop();
        this.open_ani3.animations.play('open_ani', 10, false);
        game.time.events.add(1000, function() {
            this.over_ani3.visible = true;
            this.open_ani3.visible = false;
            this.over_ani3.animations.play('over_ani', 10, true);
        }, this);
    },
    btnOut4: function() {
        this.open_ani3.visible = true;
        this.over_ani3.visible = false;
        this.open_ani3.animations.play('open_ani1', 10, false);
    },
    openLink: function() {
        CreateLinksInGame("Baby-Ladybug-Dentist", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Ladybug-Dentist", "game", "morebutton");
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
            game.state.start('mouthwash');
        });

    },
}

Main.surgery = function() {}

Main.surgery.prototype = {
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.tool1drag = false;
        this.tool2drag = false;
        this.tool3drag = false;
        this.tool5drag = false;
        this.tool6drag = false;
        this.hitcount1 = 0;
        this.hitcount2 = 0;
        this.hitcount3 = 0;

        this.levelGroup = game.add.group();
        this.lightGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.toolGroup = game.add.group();
        this.tool1Group = game.add.group();
        this.toyGroup = game.add.group();
        this.wasteGroup = game.add.group();
        this.arrowGroup = game.add.group();

        this.bg = game.add.sprite(0, 0, 'mouthwashbg');
        this.levelGroup.add(this.bg);
        this.chair = game.add.sprite(269.35, 559, 'chair');
        this.chair.anchor.setTo(0.5);

        this.iconbg = game.add.sprite(252, 736.5, 'iconbg');
        this.iconbg.anchor.setTo(0.5);

        this.light = game.add.sprite(157.75, 416.95, 'light');
        this.light.anchor.setTo(0.5);
        this.lightGroup.add(this.light);

        this.button1 = game.add.sprite(60.75, 294, 'button1');
        this.button1.anchor.setTo(0.5);
        this.button1.inputEnabled = true;
        this.button1.input.useHandCursor = true;
        this.button1.events.onInputDown.add(this.button1fun, this);
        this.lightGroup.add(this.button1);

        this.arrow = game.add.sprite(103, 275, 'arrow');
        this.arrow.anchor.setTo(0.5);
        this.arrow.animations.add('arrow');
        this.arrow.animations.play('arrow', 10, true);
        this.arrowGroup.add(this.arrow);

        this.arrownew2 = game.add.sprite(345, 510, 'arrow');
        this.arrownew2.anchor.setTo(0.5);
        this.arrownew2.visible = false;
        this.arrownew2.animations.add('arrownew2');
        this.arrownew2.animations.play('arrownew2', 10, true);
        this.arrowGroup.add(this.arrownew2);

        this.body = game.add.sprite(275.05, 642.5, 'body');
        this.body.anchor.setTo(0.5);
        this.girlGroup.add(this.body);

        this.clapbody = game.add.sprite(270.05, 622.5, 'clapbody');
        this.clapbody.anchor.setTo(0.5);
        this.clapbody.scale.setTo(0.7);
        this.clapbody.animations.add('clapbody');
        this.clapbody.visible = false;
        this.girlGroup.add(this.clapbody);

        this.face = game.add.sprite(286.45, 460.75, 'face');
        this.face.anchor.setTo(0.5);
        this.girlGroup.add(this.face);

        this.face1 = game.add.sprite(286.45, 460.75, 'face1');
        this.face1.anchor.setTo(0.5);
        this.face1.visible = false;
        this.girlGroup.add(this.face1);

        this.face2 = game.add.sprite(286.45, 465.75, 'crying');
        this.face2.anchor.setTo(0.5);
        // this.face2.animations.add('face2');
        this.face2.visible = false;
        this.girlGroup.add(this.face2);

        this.happyhead = game.add.sprite(282.45, 425.75, 'happyhead');
        this.happyhead.anchor.setTo(0.5);
        this.happyhead.scale.setTo(0.7);
        this.happyhead.animations.add('happyhead');
        this.happyhead.visible = false;
        this.girlGroup.add(this.happyhead);

        //this.eye_ani = game.add.sprite(289.45,465.75,'eyeblink');
        //this.eye_ani.anchor.setTo(0.5);
        //this.eye_ani.scale.setTo(1.05);
        //this.eye_ani.animations.add('eyeblink').onComplete.add(function(){
        //this.eye_ani.frame = 0;
        //      },this);
        //this.eye_ani.animations.play('eyeblink', 10, false);
        //game.time.events.loop(3000, this.updateEyeBlink, this);



        this.icon1 = game.add.sprite(265.55, 682.6, 'toy1');
        this.icon1.anchor.setTo(0.5);
        this.icon1.id = 1;
        this.toyGroup.add(this.icon1);

        this.icon3 = game.add.sprite(400.45, 657.75, 'toy3');
        this.icon3.anchor.setTo(0.5);
        this.icon3.scale.setTo(0.75);
        this.icon3.id = 3;
        this.toyGroup.add(this.icon3);

        this.icon2 = game.add.sprite(352.3, 713.6, 'toy2_1');
        this.icon2.anchor.setTo(0.5);
        this.icon2.id = 2;
        this.toyGroup.add(this.icon2);


        this.toyani = game.add.sprite(0, 420, 'toyani');
        this.toyani.anchor.setTo(0.5);
        this.toyani.visible = false;
        this.toyani.animations.add('toyani');
        this.toyani.animations.play('toyani', 5, true);
        this.toyGroup.add(this.toyani);

        this.toolstand = game.add.sprite(200, 700, 'toolstand');
        this.toolstand.anchor.setTo(0.5);
        this.toolstand.events.onInputDown.add(this.standfun, this);

        this.tool1 = game.add.sprite(95, 732, 'tool1');
        this.tool1.anchor.setTo(0.5);
        this.tool1.events.onInputDown.add(this.tool1fun, this);

        this.t1 = game.add.sprite(95, 732, 't1');
        this.t1.anchor.setTo(0.5);
        this.t1.visible = false;

        this.tool2 = game.add.sprite(200, 730, 'tool2');
        this.tool2.anchor.setTo(0.5);
        this.tool2.events.onInputDown.add(this.tool2fun, this);

        this.t2 = game.add.sprite(200, 730, 't2');
        this.t2.anchor.setTo(0.5);
        this.t2.visible = false;

        this.tool3 = game.add.sprite(220, 790, 'tool3');
        this.tool3.anchor.setTo(0.5);
        this.tool3.events.onInputDown.add(this.tool3fun, this);

        this.t3 = game.add.sprite(80, 730, 't3');
        this.t3.anchor.setTo(0.5);
        this.tool1Group.add(this.t3);

        this.tool4 = game.add.sprite(175, 765, 'tool4');
        this.tool4.anchor.setTo(0.5);
        this.tool4.events.onInputDown.add(this.tool4fun, this);

        this.tool5 = game.add.sprite(140, 765, 'tool5');
        this.tool5.anchor.setTo(0.5);
        this.tool5.events.onInputDown.add(this.tool5fun, this);


        this.object = game.add.sprite(150, 535, 'titleobject');
        this.object.anchor.setTo(0.5);
        this.object.animations.add('object');
        this.object.animations.play('object', 10, true);
        this.tool1Group.add(this.object);
        this.tool1Group.visible = false;

        this.wasteteeth = game.add.sprite(227.5, 545, 'wasteteeth');
        this.wasteteeth.anchor.setTo(0.5);
        this.wasteteeth.visible = false;
        this.wasteteeth.animations.add('wasteteeth');
        this.wasteGroup.add(this.wasteteeth);

        this.tool6 = game.add.sprite(148, 625, 'tool6');
        this.tool6.anchor.setTo(0.5);
        this.tool6.events.onInputDown.add(this.tool6fun, this);

        this.tool7 = game.add.sprite(152, 643, 'tool7');
        this.tool7.anchor.setTo(0.5);
        this.tool7.events.onInputDown.add(this.tool7fun, this);

        this.tool5_ani = game.add.sprite(380, 550, 'tool5_ani');
        this.tool5_ani.anchor.setTo(0.5);
        this.tool5_ani.visible = false;
        this.tool5_ani.animations.add('tool5_ani');

        this.t4 = game.add.sprite(200, 650, 't4');
        this.t4.anchor.setTo(0.5);
        this.t4.visible = false;
        this.tween1 = game.add.tween(this.tool1.scale).to({
            x: 1.05,
            y: 1.05
        }, 500, "Linear", true, 0, -1);
        this.tween1.pause();
        this.tween2 = game.add.tween(this.tool2.scale).to({
            x: 1.05,
            y: 1.05
        }, 500, "Linear", true, 0, -1);
        this.tween2.pause();
        this.tween3 = game.add.tween(this.tool3.scale).to({
            x: 1.05,
            y: 1.05
        }, 500, "Linear", true, 0, -1);
        this.tween3.pause();
        this.tween4 = game.add.tween(this.tool4.scale).to({
            x: 1.05,
            y: 1.05
        }, 500, "Linear", true, 0, -1);
        this.tween4.pause();
        this.tween5 = game.add.tween(this.tool5.scale).to({
            x: 1.05,
            y: 1.05
        }, 500, "Linear", true, 0, -1);
        this.tween5.pause();
        this.tween6 = game.add.tween(this.tool6.scale).to({
            x: 1.15,
            y: 1.15
        }, 500, "Linear", true, 0, -1);
        this.tween6.pause();
        this.tween7 = game.add.tween(this.tool7.scale).to({
            x: 1.15,
            y: 1.15
        }, 500, "Linear", true, 0, -1);
        this.tween7.pause();
        this.tween8 = game.add.tween(this.tool5_ani.scale).to({
            x: 1.05,
            y: 1.05
        }, 500, "Linear", true, 0, -1);
        this.tween8.pause();
        this.tween9 = game.add.tween(this.toyGroup.scale).to({
            x: 1.01,
            y: 1.01
        }, 500, "Linear", true, 0, -1);
        this.tween9.pause();

        this.dragCircle = game.add.graphics(340, 525);
        this.dragCircle.beginFill(0xFF0000, 0);
        this.dragCircle.drawCircle(0, 0, 25);
        this.dragCircle.endFill();

        this.dragCircle2 = game.add.graphics(this.wasteteeth.x + 40, this.wasteteeth.y - 20);
        this.dragCircle2.beginFill(0xFF0000, 0);
        this.dragCircle2.drawCircle(0, 0, 5);
        this.dragCircle2.endFill();

        this.dragCircle1 = game.add.graphics(0, 0);
        this.dragCircle1.beginFill(0xFF0000, 0);
        this.dragCircle1.drawCircle(0, 0, 5);
        this.dragCircle1.endFill();

        this.dragCircle3 = game.add.graphics(0, 0);
        this.dragCircle3.beginFill(0xFF0000, 0);
        this.dragCircle3.drawCircle(0, 0, 5);
        this.dragCircle3.endFill();

        this.dragCircle4 = game.add.graphics(this.wasteteeth.x + 40, this.wasteteeth.y - 20);
        //this.dragCircle4 = game.add.graphics(0,0);
        this.dragCircle4.beginFill(0xFF0000, 0);
        this.dragCircle4.drawCircle(0, 0, 5);
        this.dragCircle4.endFill();

        this.dragCircle5 = game.add.graphics(0, 0);
        this.dragCircle5.beginFill(0xFF0000, 0);
        this.dragCircle5.drawCircle(0, 0, 5);
        this.dragCircle5.endFill();

        this.dragCircle6 = game.add.graphics(this.wasteteeth.x + 40, this.wasteteeth.y - 20);
        this.dragCircle6.beginFill(0xFF0000, 0);
        this.dragCircle6.drawCircle(0, 0, 15);
        this.dragCircle6.endFill();

        this.dragCircle7 = game.add.graphics(0, 0);
        this.dragCircle7.beginFill(0xFF0000, 0);
        this.dragCircle7.drawCircle(0, 0, 5);
        this.dragCircle7.endFill();
        game.physics.arcade.enable([this.dragCircle, this.dragCircle1, this.dragCircle2, this.dragCircle3, this.dragCircle4, this.dragCircle5, this.dragCircle6, this.dragCircle7]);

        this.dragCircle1.body.onCollide = new Phaser.Signal();
        this.dragCircle1.body.onCollide.add(this.hitSprite, this);
        this.dragCircle3.body.onCollide = new Phaser.Signal();
        this.dragCircle3.body.onCollide.add(this.hitSprite1, this);
        this.dragCircle5.body.onCollide = new Phaser.Signal();
        this.dragCircle5.body.onCollide.add(this.hitSprite2, this);
        this.dragCircle7.body.onCollide = new Phaser.Signal();
        this.dragCircle7.body.onCollide.add(this.hitSprite3, this);
        this.toolGroup.x = -292;
        this.meterGroup = game.add.group();


        this.meter = game.add.sprite(240, 200, 'meter');
        this.meter.anchor.setTo(0.5);
        this.meterGroup.add(this.meter);
        this.meterFill = game.add.sprite(-60, 201, 'meterfill');
        this.meterFill.anchor.setTo(0.5);
        this.meterGroup.add(this.meterFill);

        this.mask = game.add.graphics(0, 0);
        this.mask.beginFill(0xffffff, 1);
        this.mask.drawRoundedRect(97, this.meter.y - 12, this.meter.width - 17, 24, 10);
        this.mask.alpha = 1;
        this.meterFill.mask = this.mask;
        //this.meterGroup.add(this.mask);
        this.meterGroup.visible = false;
        this.morebtn = game.add.sprite(75.35, 127.4, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.7);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver5, this);
        this.morebtn.events.onInputOut.add(this.btnOut5, this);
        //  this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(446.5, 127.4, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0.7);
        this.playbtn.visible = false;
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver4, this);
        this.playbtn.events.onInputOut.add(this.btnOut4, this);

        this.toolGroup.add(this.toolstand);


        this.toolGroup.add(this.tool5);
        this.toolGroup.add(this.tool4);
        this.toolGroup.add(this.tool3);
        this.toolGroup.add(this.tool2);
        this.toolGroup.add(this.tool1);
        this.toolGroup.add(this.tool7);
        this.toolGroup.add(this.tool6);
        this.toolGroup.add(this.t4);
        this.toolGroup.add(this.t1);

        this.toolGroup.add(this.t2);

        this.toolGroup.add(this.tool5_ani);

        this.open_ani2 = game.add.sprite(75.35, 133.4, 'btn_openani');
        this.open_ani2.anchor.setTo(0.5);
        this.open_ani2.scale.setTo(0.7);
        this.open_ani2.animations.add('open_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.open_ani2.animations.add('open_ani1', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

        this.over_ani2 = game.add.sprite(76.35, 120.4, 'btn_overani');
        this.over_ani2.anchor.setTo(0.5);
        this.over_ani2.scale.setTo(0.7);
        this.over_ani2.animations.add('over_ani');
        this.over_ani2.visible = false;

        this.open_ani3 = game.add.sprite(445.5, 133.4, 'btn_openani');
        this.open_ani3.anchor.setTo(0.5);
        this.open_ani3.scale.setTo(0.7);
        this.open_ani3.visible = false;
        this.open_ani3.animations.add('open_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.open_ani3.animations.add('open_ani1', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

        this.over_ani3 = game.add.sprite(447, 120.4, 'btn_overani');
        this.over_ani3.anchor.setTo(0.5);
        this.over_ani3.scale.setTo(0.7);
        this.over_ani3.animations.add('over_ani');
        this.over_ani3.visible = false;


        this.levelGroup.add(this.chair);
        this.levelGroup.add(this.lightGroup);
        this.levelGroup.add(this.girlGroup);

        this.levelGroup.add(this.iconbg);
        this.levelGroup.add(this.meterGroup);

        this.levelGroup.add(this.morebtn);
        this.levelGroup.add(this.open_ani2);
        this.levelGroup.add(this.over_ani2);

        this.levelGroup.add(this.toyGroup);

        this.levelGroup.add(this.playbtn);

        this.levelGroup.add(this.open_ani3);
        this.levelGroup.add(this.over_ani3);


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

        this.musicButton = game.add.sprite(440, 0, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        this.musicButton.events.onInputOver.add(this.btnOver6, this);
        this.musicButton.events.onInputOut.add(this.btnOut6, this);
        this.open_ani = game.add.sprite(470, 40, 'btn_openani');
        this.open_ani.anchor.setTo(0.5);
        this.open_ani.scale.setTo(0.5);
        this.open_ani.animations.add('open_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.open_ani.animations.add('open_ani1', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

        this.over_ani = game.add.sprite(471, 30, 'btn_overani');
        this.over_ani.anchor.setTo(0.5);
        this.over_ani.scale.setTo(0.5);
        this.over_ani.animations.add('over_ani');
        this.over_ani.visible = false;

        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
        this.flag = false;
        this.flag1 = false;
        this.flag2 = false;
        this.tool3call = false;
        this.tool4call = false;
        this.tool5call = false;

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
    updateEyeBlink: function() {
        this.eye_ani.play('eyeblink', 10, false);

    },
    standfun: function() {
        this.toolstand.inputEnabled = false;
        this.toolstand.input.useHandCursor = false;
        this.arrow.visible = false;
        game.add.tween(this.toolGroup).to({
            x: -63
        }, 700, "Linear", true).onComplete.add(function() {

            this.tool1.inputEnabled = true;
            this.tool1.input.useHandCursor = true;
            this.tween1.resume();
        }, this);
    },
    button1fun: function() {
        this.button1.inputEnabled = false;
        this.button1.input.useHandCursor = false;
        this.arrow.x = this.toolstand.x - 120;
        this.arrow.y = this.toolstand.y + 70;
        this.light.frame = 1;
        this.button1.frame = 1;
        this.toolstand.inputEnabled = true;
        this.toolstand.input.useHandCursor = true;
    },
    toyfun1: function(evt) {
        this.tween9.pause();
        this.icon2.inputEnabled = false;
        this.icon3.inputEnabled = false;
        this.icon1.visible = false;
        this.toyani.visible = true;
        this.toyani.animations.play('toyani', 10, true).onComplete.add(function() {}, this);
        this.happyhead.visible = true;
        this.happyhead.animations.play('happyhead', 10, true);

        this.clapbody.visible = true;
        this.clapbody.animations.play('clapbody', 10, true);
        this.face.visible = false;
        this.face1.visible = false;
        this.face2.visible = false;
        this.body.visible = false;

        game.time.events.add(6000, function() {
            this.icon1.visible = true;
            this.toyani.visible = false;
            this.happyhead.visible = false;
            this.clapbody.visible = false;
            this.body.visible = true;

            this.icon1.inputEnabled = false;
            //Main.toyCompleted=[1,0,0];
            this.face2.visible = false;
            this.face1.visible = false;
            this.face.visible = true;
            this.tool2.inputEnabled = true;
            this.tool2.input.useHandCursor = true;
            this.tool2drag = true;
            this.tween2.resume();

        }, this);

    },
    toyfun2: function(evt) {
        this.tween9.pause();

        this.icon1.inputEnabled = false;
        this.icon3.inputEnabled = false;
        this.icon2.inputEnabled = false;
        this.happyhead.visible = true;
        this.happyhead.animations.play('happyhead', 10, true);

        this.clapbody.visible = true;
        this.clapbody.animations.play('clapbody', 10, true);
        this.face.visible = false;
        this.face1.visible = false;
        this.face2.visible = false;
        this.body.visible = false;
        this.face.visible = false;
        this.body.visible = false;
        game.add.tween(this.icon2).to({
            x: this.icon2.x - 280
        }, 2000, "Linear", true).onComplete.add(function() {
            this.icon2.scale.x *= -1;
            game.add.tween(this.icon2).to({
                x: this.icon2.x + 280
            }, 2000, "Linear", true).onComplete.add(function() {
                this.icon2.scale.x *= -1;
                this.happyhead.visible = false;
                this.clapbody.visible = false;
                this.body.visible = true;
                this.face1.visible = false;
                this.icon2.inputEnabled = false;
                //Main.toyCompleted=[0,1,0];
                this.face2.visible = false;
                this.face.visible = true;
                this.tool2.inputEnabled = true;
                this.tool2.input.useHandCursor = true;
                this.tool2drag = true;
                this.tween2.resume();
                //this.dragCircle2.body.enable=true;
                //this.dragCircle4.body.enable=true;
                //this.dragCircle6.body.enable=true;
                //this.dragCircle3.body.enable=true;
                //this.dragCircle5.body.enable=true;
                //this.dragCircle7.body.enable=true;
            }, this);
        }, this);

    },
    toyfun3: function(evt) {
        this.tween9.pause();
        this.icon1.inputEnabled = false;
        this.icon2.inputEnabled = false;
        this.icon3.visible = false;
        this.body.frame = 2;
        this.body.scale.setTo(0.73);
        this.body.y = 637.5;
        this.body.x = 272.05;

        this.face.visible = true;
        this.face1.visible = false;
        this.face2.visible = false;
        game.time.events.add(6000, function() {
            this.icon3.inputEnabled = false;
            this.icon3.visible = true;
            this.body.frame = 0;
            this.body.scale.setTo(1);
            this.body.y = 642.5;
            this.body.x = 275.05;
            //Main.toyCompleted=[0,0,1];
            this.face2.visible = false;
            this.face.visible = true;
            this.face1.visible = false;
            this.tool2.inputEnabled = true;
            this.tool2.input.useHandCursor = true;
            this.tool2drag = true;
            this.tween2.resume();
            //this.dragCircle2.body.enable=true;
            //this.dragCircle4.body.enable=true;
            //this.dragCircle6.body.enable=true;
            //this.dragCircle3.body.enable=true;
            //this.dragCircle5.body.enable=true;
            //this.dragCircle7.body.enable=true;
        }, this);
    },
    tool1fun: function() {
        this.tool1.inputEnabled = false;
        this.tool1.input.useHandCursor = false;
        this.tween1.pause();
        //this.eye_ani.x=290.45;
        //this.eye_ani.y=440.75;
        this.face.visible = false;
        this.face1.visible = true;
        this.tool1drag = true;
        this.tool1.visible = false;
        this.arrow.visible = false;
        this.t1.visible = true;
    },
    tool2fun: function() {
        console.log(this.hitcount3);
        console.log(this.hitcount2);
        console.log(this.hitcount1);
        this.arrownew2.visible = true;
        this.tool2.inputEnabled = false;
        this.tool2.input.useHandCursor = false;
        this.tween2.pause();
        //this.eye_ani.x=290.45;
        //this.eye_ani.y=440.75;
        this.face.visible = false;
        this.face1.visible = true;
        this.tool2drag = true;
        this.tool2.visible = false;
        this.t2.visible = true;

        this.tool3.inputEnabled = true;
        this.tool3.input.useHandCursor = true;
        this.tween3.resume();
        if (this.tool3call) {
            console.log('3');
            this.tool3.inputEnabled = true;
            this.tool3.input.useHandCursor = true;
            this.tool3call = false;
            this.tween3.resume();
            this.dragCircle2.body.enable = true;
            this.dragCircle3.body.enable = true;

        }
        if (this.tool4call) {
            console.log('4');

            this.tool4.inputEnabled = true;
            this.tool4.input.useHandCursor = true;
            this.tool4call = false;
            this.dragCircle4.body.enable = true;
            this.dragCircle5.body.enable = true;

            this.tween4.resume();
        }
        if (this.tool5call) {
            console.log('5');
            this.tool5.inputEnabled = true;
            this.tool5.input.useHandCursor = true;
            this.tool5call = false;
            this.dragCircle6.body.enable = true;
            this.dragCircle7.body.enable = true;

            this.tween5.resume();
        }

    },
    tool3fun: function() {
        //this.flag=false;
        //this.hitcount1=this.hitcount1;
        this.meterGroup.visible = true;
        this.tool3.inputEnabled = false;
        this.tool3.input.useHandCursor = false;
        this.tween3.pause();
        //this.eye_ani.x=290.45;
        //this.eye_ani.y=440.75;
        this.face.visible = false;
        this.face1.visible = true;
        this.tool3.visible = false;
        this.tool1Group.visible = true;
        this.tool3drag = true;
        //   game.time.events.add(10000,function(){
        //      this.face1.frame=2;
        //      this.tool3drag=false;
        //this.crying();
        //            this.flag=false;
        //Main.toolcompleted=[true,false,false];
        //
        //this.tween2.pause();
        //this.tool2.inputEnabled=false;
        //this.tool2.input.useHandCursor=false;
        //if (Main.toyCompleted==[1,1,1]) {
        //    for(var i=1; i<=3; i++)
        //      {
        //         this['icon'+i].inputEnabled = true;
        //         this['icon'+i].input.useHandCursor = true;
        //         this['icon'+i].events.onInputUp.add(this['toyfun'+i], this);
        //         this['icon'+i].events.onInputOver.add(this.btnOver, this);
        //         this['icon'+i].events.onInputOut.add(this.btnOut, this);
        //      }
        //}
        //      },this);
    },
    tool4fun: function() {
        //this.hitcount2=this.hitcount2;

        this.meterGroup.visible = true;
        //this.meterFill.x=-63;
        this.tool4.inputEnabled = false;
        this.tool4.input.useHandCursor = false;
        this.tween4.pause();

        //this.eye_ani.x=290.45;
        //this.eye_ani.y=440.75;
        this.face.visible = false;
        this.face1.visible = true;
        this.tool4.visible = false;
        this.tool1Group.visible = true;
        this.tool4drag = true;
        //   game.time.events.add(10000,function(){
        //      this.face1.frame=2;
        //      this.tool4drag=false;
        //this.crying();
        //Main.toolcompleted=[true,true,false];
        //
        //this.tween2.pause();
        //this.tool2.inputEnabled=false;
        //this.tool2.input.useHandCursor=false;
        //if (Main.toyCompleted==[1,1,1]) {
        //    for(var i=1; i<=3; i++)
        //      {
        //         this['icon'+i].inputEnabled = true;
        //         this['icon'+i].input.useHandCursor = true;
        //         this['icon'+i].events.onInputUp.add(this['toyfun'+i], this);
        //         this['icon'+i].events.onInputOver.add(this.btnOver, this);
        //         this['icon'+i].events.onInputOut.add(this.btnOut, this);
        //      }
        //}
        //      },this);
    },
    tool5fun: function() {
        //this.hitcount3=this.hitcount3;
        this.meterGroup.visible = true;
        //this.meterFill.x=-63;
        this.tool5.inputEnabled = false;
        this.tool5.input.useHandCursor = false;
        this.tween5.pause();
        //this.eye_ani.x=290.45;
        //this.eye_ani.y=440.75;
        this.face.visible = false;
        this.face1.visible = true;
        this.tool5.visible = false;
        this.tool1Group.visible = true;
        this.tool5drag = true;
        //   game.time.events.add(5000,function(){
        //      this.face1.frame=2;
        //      this.tool5drag=false;
        //      this.tool2.inputEnabled=false;
        //this.tool2.input.useHandCursor=false;
        //this.crying();
        //Main.toolcompleted=[true,true,true];
        //
        //this.tween2.pause();
        //if (Main.toyCompleted==[1,1,1]) {
        //    for(var i=1; i<=3; i++)
        //      {
        //         this['icon'+i].inputEnabled = true;
        //         this['icon'+i].input.useHandCursor = true;
        //         this['icon'+i].events.onInputUp.add(this['toyfun'+i], this);
        //         this['icon'+i].events.onInputOver.add(this.btnOver, this);
        //         this['icon'+i].events.onInputOut.add(this.btnOut, this);
        //      }
        //}
        //      },this);
    },
    crying: function() {
        this.tool3.inputEnabled = false;
        this.tool4.inputEnabled = false;
        this.tool5.inputEnabled = false;
        this.tool6.inputEnabled = false;
        this.tool7.inputEnabled = false;
        this.tween3.pause();
        this.tween4.pause();
        this.tween5.pause();
        this.tween6.pause();
        this.tween7.pause();
        this.arrow.angle = -60;
        this.arrow.x = this.icon2.x;
        this.arrow.y = this.icon2.y - 200;
        this.face1.visible = false;
        this.t2.visible = false;

        this.wasteteeth.visible = false;
        this.face2.visible = true;



        this.tool2.visible = true;
        this.tool3.visible = true;
        this.tool1Group.visible = false;
        //this.eye_ani.visible=false;
        //this.face2.animations.play('face2',10,true);
        for (var i = 1; i <= 3; i++) {
            this['icon' + i].inputEnabled = true;
            this['icon' + i].input.useHandCursor = true;
            this['icon' + i].events.onInputUp.add(this['toyfun' + i], this);
            if (i == 3) {
                this['icon' + 3].events.onInputOver.add(this.btnOver7, this);
                this['icon' + 3].events.onInputOut.add(this.btnOut7, this);
            }
            this['icon' + i].events.onInputOver.add(this.btnOver, this);
            this['icon' + i].events.onInputOut.add(this.btnOut, this);
        }
    },
    tool6fun: function() {
        this.tool6.inputEnabled = false;
        this.tool6.input.useHandCursor = false;
        this.tween6.pause();

        //this.eye_ani.x=290.45;
        //this.eye_ani.y=440.75;
        this.face.visible = false;
        this.face1.visible = true;
        this.tool6.visible = false;
        this.tool5_ani.visible = true;
        this.tool7.inputEnabled = true;
        this.tool7.input.useHandCursor = true;
        this.tween7.resume();

    },
    tool7fun: function() {
        this.tool7.inputEnabled = false;
        this.tool7.input.useHandCursor = false;
        this.tween7.pause();

        //this.eye_ani.x=290.45;
        //this.eye_ani.y=440.75;
        this.face.visible = false;
        this.face1.visible = true;
        this.tool7.visible = false;
        this.tool5_ani.animations.play('tool5_ani', 10, false).onComplete.add(function() {
            this.tool5_ani.inputEnabled = true;
            this.tool5_ani.input.useHandCursor = true;
            this.tween8.resume();

            this.tool5_ani.events.onInputDown.add(this.tool5_anifun, this);
        }, this);
    },
    tool5_anifun: function() {
        this.tool6drag = true;
        this.tween8.pause();

    },
    hitSprite: function(obj1, obj2) {
        this.t2.x = 469;
        this.t2.y = 744;
        this.arrownew2.visible = false;

        this.tool2drag = false;
    },
    hitSprite1: function(obj1, obj2) {
        this.flag = true;
        this.hitcount1 += 0.01;
        this.meterFill.x = this.meterFill.x + this.hitcount1;
        if (this.hitcount1 == 2.4499999999999917) {
            this.tool1Group.visible = false;
            this.hitcount1 = 0;
            this.meterFill.x = -60;
            this.tool3.kill();
            this.tool3drag = false;
            this.tool2.visible = true;
            this.tool2.inputEnabled = false;
            this.tool2.input.useHandCursor = true;
            this.tween2.pause();
            this.meterGroup.visible = false;
            obj1.kill();
            obj2.kill();
            this.face1.frame = 2;
            this.tool3call = false;
            this.flag = false;
            this.tool4.inputEnabled = true;
            this.tool4.input.useHandCursor = true;
            this.tween4.resume();
        }
        if (this.hitcount1 == 2.3099999999999947 || this.hitcount1 == 1.1100000000000008 || this.hitcount1 == 1.9700000000000015) {
            obj2.body.enable = false;
            obj1.body.enable = false;
            this.tool3call = true;
            this.tween9.resume();
            this.face1.frame = 2;
            this.tool3drag = false;
            this.flag = false;
            this.tween2.pause();
            this.tool2.inputEnabled = false;
            this.tool2.input.useHandCursor = false;
            for (var i = 1; i <= 3; i++) {
                this['icon' + i].inputEnabled = true;
                this['icon' + i].input.useHandCursor = true;
                this['icon' + i].events.onInputUp.add(this['toyfun' + i], this);
                if (i == 3) {
                    this['icon' + 3].events.onInputOver.add(this.btnOver7, this);
                    this['icon' + 3].events.onInputOut.add(this.btnOut7, this);
                }
                this['icon' + i].events.onInputOver.add(this.btnOver, this);
                this['icon' + i].events.onInputOut.add(this.btnOut, this);
            }
            // this.face1.visible=false; 
            this.t2.visible = false;

            this.wasteteeth.visible = false;
            this.face2.visible = true;

            this.tool2.visible = true;
            this.tool3.visible = true;
            this.tool1Group.visible = false;
            //this.eye_ani.visible=false;
            //this.face2.animations.play('face2',10,true); 
        }
    },
    hitSprite2: function(obj1, obj2) {

        this.flag1 = true;
        this.hitcount2 += 0.01;
        console.log('touch');
        this.meterFill.x = this.meterFill.x + this.hitcount2;
        if (this.hitcount2 == 2.4699999999999913) {
            this.tool1Group.visible = false;
            this.flag1 = false;
            this.tool4call = false;
            this.hitcount2 = 0;
            this.meterFill.x = -60;
            this.tool4.kill();
            this.tool4drag = false;
            this.tool2.visible = true;
            this.tool2.inputEnabled = false;
            this.tool2.input.useHandCursor = true;
            this.tween2.pause();
            this.meterGroup.visible = false;
            this.tool5.inputEnabled = true;
            this.tool5.input.useHandCursor = true;
            this.tween5.resume();
            obj1.kill();
            obj2.kill();
            this.face1.frame = 2;

        }
        if (this.hitcount2 == 0.6900000000000004 || this.hitcount2 == 1.1100000000000008 || this.hitcount2 == 1.9100000000000015 || this.hitcount2 == 2.3299999999999943) {
            this.tool4call = true;
            obj2.body.enable = false;
            obj1.body.enable = false;
            this.tween9.resume();

            this.face1.frame = 2;
            this.tool4drag = false;
            this.flag1 = false;
            this.tween2.pause();
            this.tool2.inputEnabled = false;
            this.tool2.input.useHandCursor = false;
            for (var i = 1; i <= 3; i++) {
                this['icon' + i].inputEnabled = true;
                this['icon' + i].input.useHandCursor = true;
                this['icon' + i].events.onInputUp.add(this['toyfun' + i], this);
                if (i == 3) {
                    this['icon' + 3].events.onInputOver.add(this.btnOver7, this);
                    this['icon' + 3].events.onInputOut.add(this.btnOut7, this);
                }
                this['icon' + i].events.onInputOver.add(this.btnOver, this);
                this['icon' + i].events.onInputOut.add(this.btnOut, this);
            }
            this.face1.visible = false;
            this.t2.visible = false;

            this.wasteteeth.visible = false;
            // this.wasteteeth.kill();

            this.face2.visible = true;
            this.tool2.visible = true;
            this.tool4.visible = true;
            this.tool1Group.visible = false;
            //this.eye_ani.visible=false;
            //this.face2.animations.play('face2',10,true); 
        }
    },
    hitSprite3: function(obj1, obj2) {
        this.flag2 = true;
        this.hitcount3 += 0.01;
        this.meterFill.x = this.meterFill.x + this.hitcount3;
        if (this.hitcount3 == 2.4499999999999917) {
            this.tool1Group.visible = false;
            this.hitcount3 = 0;
            this.tool5call = false;
            this.tool5drag = false;

            this.meterFill.x = -60;
            this.tool2.visible = true;
            this.tool2.inputEnabled = false;
            this.tool2.input.useHandCursor = true;
            this.tween2.pause();
            this.meterGroup.visible = false;
            this.flag2 = false;
            this.tool6.inputEnabled = true;
            this.tool6.input.useHandCursor = true;
            this.tween6.resume();
            obj1.kill();
            obj2.kill();
        }
        if (this.hitcount3 == 0.9900000000000007 || this.hitcount3 == 1.450000000000001 || this.hitcount3 == 2.0799999999999996) {
            obj2.body.enable = false;
            obj1.body.enable = false;
            this.tween9.resume();
            this.face1.frame = 2;
            this.tool5drag = false;
            this.tool5call = true;
            this.flag2 = false;
            this.tween2.pause();
            this.tool2.inputEnabled = false;
            this.tool2.input.useHandCursor = false;
            for (var i = 1; i <= 3; i++) {
                this['icon' + i].inputEnabled = true;
                this['icon' + i].input.useHandCursor = true;
                this['icon' + i].events.onInputUp.add(this['toyfun' + i], this);
                this['icon' + i].events.onInputOver.add(this.btnOver, this);
                this['icon' + i].events.onInputOut.add(this.btnOut, this);
                if (i == 3) {
                    this['icon' + i].events.onInputOver.add(this.btnOver7, this);
                    this['icon' + i].events.onInputOut.add(this.btnOut7, this);
                }
            }
            this.face1.visible = false;
            this.t2.visible = false;
            this.wasteteeth.visible = false;
            this.face2.visible = true;
            this.tool2.visible = true;
            this.tool5.visible = true;
            this.tool1Group.visible = false;
            //this.eye_ani.visible=false;
            //this.face2.animations.play('face2',10,true); 
        }
    },
    openLink: function() {
        CreateLinksInGame("Baby-Ladybug-Dentist", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Ladybug-Dentist", "game", "more");
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.state.start('finalScreen');
        });

    },
    btnOver6: function() {
        this.open_ani.animations.play('open_ani', 10, false);
        game.time.events.add(1000, function() {
            this.over_ani.visible = true;
            this.open_ani.visible = false;
            this.over_ani.animations.play('over_ani', 10, true);
        }, this);
    },
    btnOut6: function() {
        this.open_ani.visible = true;
        this.over_ani.visible = false;
        this.open_ani.animations.play('open_ani1', 10, false);
    },
    btnOver5: function() {
        this.over_ani3.animations.stop();
        this.open_ani2.animations.play('open_ani', 10, false);
        game.time.events.add(1000, function() {
            this.over_ani2.visible = true;
            this.open_ani2.visible = false;
            this.over_ani2.animations.play('over_ani', 10, true);
        }, this);
    },
    btnOut5: function() {
        this.open_ani2.visible = true;
        this.over_ani2.visible = false;
        this.open_ani2.animations.play('open_ani1', 10, false);
    },
    btnOver4: function() {
        this.over_ani2.animations.stop();
        this.open_ani3.animations.play('open_ani', 10, false);
        game.time.events.add(1000, function() {
            this.over_ani3.visible = true;
            this.open_ani3.visible = false;
            this.over_ani3.animations.play('over_ani', 10, true);
        }, this);
    },
    btnOut4: function() {
        this.open_ani3.visible = true;
        this.over_ani3.visible = false;
        this.open_ani3.animations.play('open_ani1', 10, false);
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
    btnOver7: function(items) {
        items.scale.setTo(0.705);
        effectVar = game.add.sprite(items.x - 10, items.y - 70, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);

    },
    btnOut7: function(items) {
        items.scale.setTo(0.75);
    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    update: function() {
        if (this.tool1drag) {
            this.t1.x = game.input.activePointer.x + 80;
            this.t1.y = game.input.activePointer.y + 10;
            if ((this.t1.x > 224 && this.t1.y > 679) && (this.t1.x < 234 && this.t1.y < 683)) {
                this.t1.frame = 1;
                game.time.events.add(5000, function() {
                    this.tool1drag = false;
                    this.tool1.kill();
                    this.t1.visible = false;
                    this.tool2.inputEnabled = true;
                    this.tool2.input.useHandCursor = true;
                    this.tween2.resume();
                }, this);
            } else {
                this.t1.frame = 0;
            }
        }
        if (this.tool2drag) {
            this.t2.x = game.input.activePointer.x + 80;
            this.t2.y = game.input.activePointer.y + 10;
            this.dragCircle1.x = game.input.activePointer.x - 60;
            this.dragCircle1.y = game.input.activePointer.y - 190;
            game.physics.arcade.collide(this.dragCircle, this.dragCircle1);
        }
        if (this.tool3drag) {
            this.tool1Group.x = game.input.activePointer.x - 120;
            this.tool1Group.y = game.input.activePointer.y - 650;
            game.physics.arcade.collide(this.dragCircle2, this.dragCircle3);
            this.dragCircle3.x = game.input.activePointer.x + 17;
            this.dragCircle3.y = game.input.activePointer.y - 115;
            if (this.flag) {
                this.wasteteeth.visible = true;
                this.wasteteeth.animations.play('wasteteeth', 20, false) /*.onComplete.add(function(){*/
                this.flag = false;
                //},this);
                //this.flag=false;
            }
        }
        if (this.tool4drag) {
            this.tool1Group.x = game.input.activePointer.x - 120;
            this.tool1Group.y = game.input.activePointer.y - 650;
            game.physics.arcade.collide(this.dragCircle4, this.dragCircle5);
            this.dragCircle5.x = game.input.activePointer.x + 17;
            this.dragCircle5.y = game.input.activePointer.y - 115;
            if (this.flag1) {
                this.wasteteeth.visible = true;
                this.wasteteeth.animations.play('wasteteeth', 20, false);
                this.flag1 = false;
            }
        }
        if (this.tool5drag) {
            this.tool1Group.x = game.input.activePointer.x - 120;
            this.tool1Group.y = game.input.activePointer.y - 650;
            game.physics.arcade.collide(this.dragCircle6, this.dragCircle7);
            this.dragCircle7.x = game.input.activePointer.x + 17;
            this.dragCircle7.y = game.input.activePointer.y - 115;
            if (this.flag2) {
                this.wasteteeth.visible = true;
                this.wasteteeth.animations.play('wasteteeth', 20, false);
                this.flag2 = false;
            }
        }
        if (this.tool6drag) {
            this.tool5_ani.x = game.input.activePointer.x + 50;
            this.tool5_ani.y = game.input.activePointer.y - 50;
            if ((this.tool5_ani.x > 305 && this.tool5_ani.y > 477) && (this.tool5_ani.x < 323 && this.tool5_ani.y < 483)) {
                this.tool6drag = false;
                game.time.events.add(1000, function() {
                    game.add.tween(this.wasteteeth).to({
                        alpha: 0
                    }, 500, "Linear", true);
                    game.add.tween(this.tool5_ani).to({
                        alpha: 0
                    }, 500, "Linear", true).onComplete.add(function() {
                        this.face.kill();
                        this.face1.kill();
                        this.face2.kill();
                        this.body.kill();
                        this.t2.kill();
                        this.happyhead.visible = true;
                        this.happyhead.animations.play('happyhead', 10, true);

                        this.clapbody.visible = true;
                        this.clapbody.animations.play('clapbody', 10, true);
                        game.time.events.add(1000, function() {
                            this.playbtn.visible = true;
                            this.open_ani3.visible = true;
                        }, this);
                    }, this);
                }, this);
            }
        }
    },
}
//mmmmmmmm
Main.mouthwash = function() {}

Main.mouthwash.prototype = {
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
        this.glassdrag = false;
        this.glassdrag1 = false;
        this.glassdrag2 = false;
        this.glassdrag3 = false;
        this.pastedrag1 = false;
        this.pastedrag = false;

        this.bg = game.add.sprite(0, 0, 'mouthwashbg');
        this.levelGroup.add(this.bg);

        this.toolGroup = game.add.group();
        this.glassGroup = game.add.group();
        this.glassGroup1 = game.add.group();
        this.tapGroup = game.add.group();
        this.tapGroup1 = game.add.group();
        this.tapGroup2 = game.add.group();
        this.tapGroup3 = game.add.group();
        this.girlGroup = game.add.group();
        this.bodyGroup = game.add.group();
        this.arrowGroup = game.add.group();
        this.lightGroup = game.add.group();
        this.bubbleGroup = game.add.group();
        this.wastewaterGroup = game.add.group();

        this.bg = game.add.sprite(0, 0, 'mouthwashbg');
        this.levelGroup.add(this.bg);

        this.arrow = game.add.sprite(100.85, 280.3, 'arrow');
        this.arrow.anchor.setTo(0.5);
        this.arrow.animations.add('arrow');
        this.arrow.animations.play('arrow', 10, true);
        this.arrowGroup.add(this.arrow);
        this.arrowGroup.add(this.arrow);

        this.chair = game.add.sprite(269.35, 555, 'chair');
        this.chair.anchor.setTo(0.5);

        this.iconbg = game.add.sprite(252, 736.5, 'iconbg');
        this.iconbg.anchor.setTo(0.5);

        this.light = game.add.sprite(157.75, 416.95, 'light');
        this.light.anchor.setTo(0.5);
        this.lightGroup.add(this.light);

        this.button1 = game.add.sprite(60.75, 294, 'button1');
        this.button1.anchor.setTo(0.5);
        this.button1.inputEnabled = true;
        this.button1.input.useHandCursor = true;
        this.button1.events.onInputDown.add(this.button1fun, this);
        this.lightGroup.add(this.button1);

        this.frontkid = game.add.sprite(59.35, 687.4, 'frontkid');
        this.frontkid.anchor.setTo(0.5);

        this.backkid = game.add.sprite(59.35, 685.2, 'backkid');
        this.backkid.anchor.setTo(0.5);

        this.paste = game.add.sprite(44.25, 642.8, 'paste');
        this.paste.anchor.setTo(0.5);
        this.paste.events.onInputDown.add(this.pastefun, this);

        this.brush = game.add.sprite(74.35, 647.65, 'brush');
        this.brush.anchor.setTo(0.5);
        this.brush.events.onInputDown.add(this.brushfun, this);

        this.brush1 = game.add.sprite(404.35, 517.65, 'brush1');
        this.brush1.anchor.setTo(0.5);
        this.brush1.visible = false;

        this.pasteani = game.add.sprite(240.35, 647.65, 'pasteani');
        this.pasteani.anchor.setTo(0.5);
        this.pasteani.animations.add('pasteani');
        this.pasteani.visible = false;
        this.pasteani.events.onInputDown.add(this.pastefun1, this);

        this.toolGroup.add(this.backkid);
        this.toolGroup.add(this.brush);
        this.toolGroup.add(this.paste);
        this.toolGroup.add(this.frontkid);

        this.backglass = game.add.sprite(470.95, 663.4, 'backglass');
        this.backglass.anchor.setTo(0.5);

        this.glasswater = game.add.sprite(457.95, 628.4, 'glasswater');
        this.glasswater.anchor.setTo(0.5);
        this.glasswater.alpha = 0;

        this.water1 = game.add.sprite(457.95, 628.4, 'water');
        this.water1.anchor.setTo(0.5);
        this.water1.animations.add('water1');
        this.water1.alpha = 0;;

        this.frontglass = game.add.sprite(470.95, 669.4, 'frontglass');
        this.frontglass.anchor.setTo(0.5);
        this.frontglass.events.onInputDown.add(this.glassdown, this);
        this.frontglass.events.onInputUp.add(this.glassup, this);

        this.glassGroup.add(this.backglass);
        this.glassGroup.add(this.glasswater);
        this.glassGroup.add(this.water1);
        this.glassGroup.add(this.frontglass);

        this.backbottom = game.add.sprite(262.5, 735.5, 'backbottom');
        this.backbottom.anchor.setTo(0.5);

        this.waterani = game.add.sprite(254.35, 738.55, 'waterani');
        this.waterani.anchor.setTo(0.5);
        this.waterani.animations.add('waterani');
        this.waterani.visible = false;

        this.water = game.add.sprite(185.5, 673.95, 'water');
        this.water.anchor.setTo(0.5);
        this.water.animations.add('water');
        this.water.visible = false;

        this.frontbottom = game.add.sprite(262.5, 655.7, 'frontbottom');
        this.frontbottom.anchor.setTo(0.5);

        this.button = game.add.sprite(120.15, 715.75, 'button');
        this.button.anchor.setTo(0.5);
        this.button.events.onInputDown.add(this.buttonfun, this);

        this.tapGroup.add(this.backbottom);
        this.tapGroup.add(this.waterani);
        this.tapGroup.add(this.water);
        this.tapGroup.add(this.button);
        this.tapGroup.add(this.frontbottom);


        this.dummybutton = game.add.sprite(120.15, 715.75, 'button');
        this.dummybutton.anchor.setTo(0.5);

        this.dummyfrontbottom = game.add.sprite(262.5, 655.7, 'frontbottom');
        this.dummyfrontbottom.anchor.setTo(0.5);

        this.tapGroup2.add(this.dummybutton);
        this.tapGroup2.add(this.dummyfrontbottom);
        this.tapGroup2.visible = false;
        this.body = game.add.sprite(268.05, 640.5, 'body');
        this.body.anchor.setTo(0.5);
        this.bodyGroup.add(this.body);

        this.clapbody = game.add.sprite(268.05, 622.5, 'clapbody');
        this.clapbody.anchor.setTo(0.5);
        this.clapbody.scale.setTo(0.7);
        this.clapbody.animations.add('clapbody');
        this.clapbody.visible = false;
        this.bodyGroup.add(this.clapbody);

        this.face = game.add.sprite(278.45, 460.75, 'face');
        this.face.anchor.setTo(0.5);
        this.girlGroup.add(this.face);

        this.happyhead = game.add.sprite(280.45, 430.75, 'happyhead');
        this.happyhead.anchor.setTo(0.5);
        this.happyhead.scale.setTo(0.7);
        this.happyhead.animations.add('happyhead');
        this.happyhead.visible = false;
        this.girlGroup.add(this.happyhead);

        this.bubbles = game.add.sprite(280.45, 527, 'bubbles');
        this.bubbles.anchor.setTo(0.5);
        this.bubbles.scale.setTo(0.7);
        this.bubbles.alpha = 0;
        this.bubbleGroup.add(this.bubbles);

        this.mouthrinsed = game.add.sprite(278.45, 443.75, 'mouthrinsed');
        this.mouthrinsed.anchor.setTo(0.5);
        this.mouthrinsed.animations.add('mouthrinsed');
        this.mouthrinsed.visible = false;
        this.girlGroup.add(this.mouthrinsed);

        this.splitwaterface = game.add.sprite(279, 438, 'splitwaterface');
        this.splitwaterface.anchor.setTo(0.5);
        this.splitwaterface.animations.add('splitwaterface');
        this.splitwaterface.visible = false;
        this.wastewaterGroup.add(this.splitwaterface);

        this.wastewater = game.add.sprite(280.45, 643.75, 'wastewater');
        this.wastewater.anchor.setTo(0.5);
        this.wastewater.animations.add('wastewater');
        this.wastewater.visible = false;
        this.wastewaterGroup.add(this.wastewater);


        this.close_eye = game.add.sprite(282.5, 464, 'close_eye');
        this.close_eye.anchor.setTo(0.5);
        this.close_eye.visible = false;


        //this.eye_ani = game.add.sprite(284.45,460.75,'eyeblink');
        //// this.eye_ani = game.add.sprite(294,462,'eyeblink');
        // this.eye_ani.anchor.setTo(0.5);
        // this.eye_ani.scale.setTo(1.02);
        // this.eye_ani.animations.add('eyeblink').onComplete.add(function(){
        // this.eye_ani.frame = 0;
        //       },this);
        // this.eye_ani.animations.play('eyeblink', 10, false);
        // game.time.events.loop(3000, this.updateEyeBlink, this);
        // 
        //         this.girlGroup.add(this.eye_ani);

        this.backglass1 = game.add.sprite(470.95, 663.4, 'backglass');
        this.backglass1.anchor.setTo(0.5);

        this.glasswater1 = game.add.sprite(457.95, 628.4, 'glasswater');
        this.glasswater1.anchor.setTo(0.5);
        this.glasswater1.alpha = 0;

        this.water2 = game.add.sprite(457.95, 628.4, 'water');
        this.water2.anchor.setTo(0.5);
        this.water2.animations.add('water2');
        this.water2.alpha = 0;;

        this.frontglass1 = game.add.sprite(470.95, 669.4, 'frontglass');
        this.frontglass1.anchor.setTo(0.5);
        this.frontglass1.events.onInputDown.add(this.samefun2, this);
        this.frontglass1.events.onInputUp.add(this.samefun3, this);

        this.glassGroup1.add(this.backglass1);
        this.glassGroup1.add(this.glasswater1);
        this.glassGroup1.add(this.water2);
        this.glassGroup1.add(this.frontglass1);

        this.backbottom1 = game.add.sprite(262.5, 735.5, 'backbottom');
        this.backbottom1.anchor.setTo(0.5);

        this.waterani1 = game.add.sprite(254.35, 738.55, 'waterani');
        this.waterani1.anchor.setTo(0.5);
        this.waterani1.animations.add('waterani1');
        this.waterani1.visible = false;

        this.water3 = game.add.sprite(185.5, 673.95, 'water');
        this.water3.anchor.setTo(0.5);
        this.water3.animations.add('water3');
        this.water3.visible = false;

        this.frontbottom1 = game.add.sprite(262.5, 655.7, 'frontbottom');
        this.frontbottom1.anchor.setTo(0.5);

        this.button2 = game.add.sprite(120.15, 715.75, 'button');
        this.button2.anchor.setTo(0.5);
        this.button2.events.onInputDown.add(this.samefun1, this);

        this.tapGroup1.add(this.backbottom1);
        this.tapGroup1.add(this.waterani1);
        this.tapGroup1.add(this.water3);
        this.tapGroup1.add(this.button2);
        this.tapGroup1.add(this.frontbottom1);
        this.tapGroup1.visible = false;
        this.glassGroup1.visible = false;
        this.dragCircle = game.add.graphics(275, 515);
        this.dragCircle.beginFill(0xFF0000, 0);
        this.dragCircle.drawCircle(0, 0, 35);
        this.dragCircle.endFill();

        this.dragCircle1 = game.add.graphics(0, 0);
        this.dragCircle1.beginFill(0x000000, 0);
        this.dragCircle1.drawCircle(0, 0, 10);
        this.dragCircle1.endFill();

        this.dragCircle2 = game.add.graphics(0, 0);
        this.dragCircle2.beginFill(0x000000, 0);
        this.dragCircle2.drawCircle(0, 0, 10);
        this.dragCircle2.endFill();

        this.dragCircle3 = game.add.graphics(279, 522);
        this.dragCircle3.beginFill(0xFF0000, 0);
        this.dragCircle3.drawCircle(0, 0, 35);
        this.dragCircle3.endFill();

        this.dragCircle4 = game.add.graphics(275, 515);
        this.dragCircle4.beginFill(0xFF0000, 0);
        this.dragCircle4.drawCircle(0, 0, 35);
        this.dragCircle4.endFill();

        this.dragCircle5 = game.add.graphics(0, 0);
        this.dragCircle5.beginFill(0x000000, 0);
        this.dragCircle5.drawCircle(0, 0, 10);
        this.dragCircle5.endFill();

        game.physics.arcade.enable([this.glassGroup, this.water, this.dragCircle, this.dragCircle1, this.dragCircle3, this.dragCircle2]);
        game.physics.arcade.enable([this.glassGroup1, this.water3, this.dragCircle4, this.dragCircle5]);

        this.backglass.body.onCollide = new Phaser.Signal();
        this.backglass.body.onCollide.add(this.hitSprite, this);
        this.dragCircle.body.onCollide = new Phaser.Signal();
        this.dragCircle.body.onCollide.add(this.hitSprite1, this);
        this.dragCircle3.body.onCollide = new Phaser.Signal();
        this.dragCircle3.body.onCollide.add(this.hitSprite2, this);
        this.backglass1.body.onCollide = new Phaser.Signal();
        this.backglass1.body.onCollide.add(this.hitSprite4, this);
        this.dragCircle4.body.onCollide = new Phaser.Signal();
        this.dragCircle4.body.onCollide.add(this.hitSprite5, this);

        this.levelGroup.add(this.iconbg);

        this.levelGroup.add(this.chair);
        this.levelGroup.add(this.bodyGroup);

        this.levelGroup.add(this.girlGroup);

        this.levelGroup.add(this.bubbleGroup);
        this.levelGroup.add(this.lightGroup);
        this.levelGroup.add(this.toolGroup);
        this.levelGroup.add(this.tapGroup);
        this.levelGroup.add(this.tapGroup1);
        this.levelGroup.add(this.wastewaterGroup);
        this.levelGroup.add(this.glassGroup);
        this.levelGroup.add(this.glassGroup1);
        this.levelGroup.add(this.arrowGroup);

        this.morebtn = game.add.sprite(75.35, 527.4, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.7);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver5, this);
        this.morebtn.events.onInputOut.add(this.btnOut5, this);
        this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(426.5, 527.4, 'nextbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0.7);
        this.playbtn.visible = false;
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver4, this);
        this.playbtn.events.onInputOut.add(this.btnOut4, this);
        this.levelGroup.add(this.playbtn);
        this.open_ani2 = game.add.sprite(75.35, 533.4, 'btn_openani');
        this.open_ani2.anchor.setTo(0.5);
        this.open_ani2.scale.setTo(0.7);
        this.open_ani2.animations.add('open_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.open_ani2.animations.add('open_ani1', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

        this.over_ani2 = game.add.sprite(76.35, 520.4, 'btn_overani');
        this.over_ani2.anchor.setTo(0.5);
        this.over_ani2.scale.setTo(0.7);
        this.over_ani2.animations.add('over_ani');
        this.over_ani2.visible = false;

        this.open_ani3 = game.add.sprite(426.5, 533.4, 'btn_openani');
        this.open_ani3.anchor.setTo(0.5);
        this.open_ani3.scale.setTo(0.7);
        this.open_ani3.visible = false;
        this.open_ani3.animations.add('open_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.open_ani3.animations.add('open_ani1', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

        this.over_ani3 = game.add.sprite(428, 520.4, 'btn_overani');
        this.over_ani3.anchor.setTo(0.5);
        this.over_ani3.scale.setTo(0.7);
        this.over_ani3.animations.add('over_ani');
        this.over_ani3.visible = false;

        game.time.events.add(1000, function() {
            this.close_eye.visible = true;

        }, this);

        game.time.events.add(1300, function() {
            this.close_eye.visible = false;

        }, this);
        game.time.events.add(1600, function() {
            this.close_eye.visible = true;

        }, this);

        game.time.events.add(1900, function() {
            this.close_eye.visible = false;

        }, this);





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

        this.musicButton = game.add.sprite(440, 0, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        this.musicButton.events.onInputOver.add(this.btnOver6, this);
        this.musicButton.events.onInputOut.add(this.btnOut6, this);

        this.open_ani = game.add.sprite(470, 40, 'btn_openani');
        this.open_ani.anchor.setTo(0.5);
        this.open_ani.scale.setTo(0.5);
        this.open_ani.animations.add('open_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.open_ani.animations.add('open_ani1', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

        this.over_ani = game.add.sprite(471, 30, 'btn_overani');
        this.over_ani.anchor.setTo(0.5);
        this.over_ani.scale.setTo(0.5);
        this.over_ani.animations.add('over_ani');
        this.over_ani.visible = false;



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
    updateEyeBlink: function() {
        this.eye_ani.play('eyeblink', 10, false);

    },
    button1fun: function() {

        game.time.events.add(300, function() {
            this.close_eye.visible = true;

        }, this);
        game.time.events.add(600, function() {
            this.close_eye.visible = false;

        }, this);

        this.button1.inputEnabled = false;
        this.button1.input.useHandCursor = false;
        this.arrow.x = this.button.x + 50;
        this.arrow.y = this.button.y - 10;
        this.light.frame = 1;
        this.button1.frame = 1;
        this.button.inputEnabled = true;
        this.button.input.useHandCursor = true;
    },
    buttonfun: function() {
        this.button.inputEnabled = false;
        this.button.input.useHandCursor = false;
        this.arrow.angle = -60;
        this.arrow.x = this.frontglass.x;
        this.arrow.y = this.frontglass.y - 80;
        this.button.frame = 1;
        this.button.y = 713;
        this.water.visible = true;
        this.water.animations.play('water', 10, true);
        game.time.events.add(200, function() {
            this.waterani.visible = true;
            this.waterani.animations.play('waterani', 10, false).onComplete.add(function() {
                this.frontglass.inputEnabled = true;
                this.frontglass.input.useHandCursor = true;
            }, this);
        }, this)
    },
    glassdown: function() {
        this.face.frame = 1;
        this.glassdrag = true;
        this.arrow.x = this.water.x;
        this.arrow.y = this.water.y - 80;
    },
    glassup: function() {
        this.face.frame = 0;
        this.arrow.x = this.frontglass.x;
        this.arrow.y = this.frontglass.y - 80;
        this.glassdrag = false;
        game.add.tween(this.glassGroup).to({
            x: 0,
            y: 0
        }, 500, "Linear", true);
    },
    hitSprite: function(obj1, obj2) {
        this.arrow.visible = false;
        this.glassdrag = false;
        this.glassGroup.x = obj2.x - 460;
        this.glassGroup.y = obj2.y - 630;
        game.add.tween(this.water1).to({
            alpha: 1
        }, 100, "Linear", true);
        this.water1.animations.play('water1', 10, true);
        game.add.tween(this.glasswater).to({
            alpha: 1
        }, 500, "Linear", true).onComplete.add(function() {
            this.water1.kill();
            game.add.tween(this.glassGroup).to({
                x: 0,
                y: 0
            }, 500, "Linear", true).onComplete.add(function() {
                this.arrow.visible = true;
                this.button.inputEnabled = true;
                this.button.input.useHandCursor = true;
                this.button.events.onInputDown.removeAll();
                this.button.events.onInputDown.add(this.buttonofffun, this);
                this.arrow.angle = 0;
                this.arrow.x = this.button.x + 50;
                this.arrow.y = this.button.y - 10;
            }, this);
        }, this);
    },
    buttonofffun: function() {
        this.arrow.angle = -60;
        this.arrow.x = this.frontglass.x;
        this.arrow.y = this.frontglass.y - 80;
        this.button.inputEnabled = false;
        this.button.input.useHandCursor = false;
        this.button.frame = 0;
        this.water.visible = false;
        this.waterani.visible = false;
        this.frontglass.events.onInputDown.removeAll();
        this.frontglass.events.onInputUp.removeAll();
        this.frontglass.events.onInputDown.add(this.glassfun, this);
        this.frontglass.events.onInputUp.add(this.glassfun1, this);
    },
    glassfun: function() {
        this.arrow.angle = 50;
        this.arrow.x = this.dragCircle.x + 50;
        this.arrow.y = this.dragCircle.y + 50;
        this.frontglass.inputEnabled = false;
        this.frontglass.input.useHandCursor = false;
        this.face.frame = 1;
        this.glassdrag1 = true;
    },
    glassfun1: function() {
        this.face.frame = 0;
        this.arrow.visible = true;
        this.glassdrag1 = false;
        game.add.tween(this.glassGroup).to({
            x: 0,
            y: 0
        }, 500, "Linear", true);
    },
    hitSprite1: function(obj1, obj2) {
        this.glassdrag1 = false;
        // this.eye_ani.alpha=0;
        this.face.frame = 2;
        this.body.frame = 1;
        this.glassGroup.visible = false;
        this.arrow.visible = false;
        game.time.events.add(1500, function() {
            this.body.frame = 0;
            this.face.visible = false;
            this.mouthrinsed.visible = true;
            this.mouthrinsed.animations.play('mouthrinsed', 2, true);
        }, this);
        game.time.events.add(2500, function() {
            //this.body.frame=0;
            // this.eye_ani.alpha=0;
            this.mouthrinsed.visible = false;
            this.mouthrinsed.animations.stop();
            this.splitwaterface.visible = true;
            this.tapGroup2.visible = true;

            this.wastewater.visible = true;
            this.splitwaterface.animations.play('splitwaterface', 2, true);
            this.wastewater.animations.play('wastewater', 20, true);
        }, this);
        game.time.events.add(6500, function() {
            this.splitwaterface.visible = false;
            this.tapGroup2.visible = false;
            this.wastewater.visible = false;
            this.arrow.visible = true;
            this.face.frame = 0;
            this.face.visible = true;
            // this.eye_ani.alpha=1;
            // this.eye_ani.y=460.75;
            this.arrow.angle = 20;
            this.arrow.x = this.brush.x + 60;
            this.arrow.y = this.brush.y - 40;
            this.glassGroup.visible = true;
            this.glasswater.alpha = 0;
            game.add.tween(this.glassGroup).to({
                x: 0,
                y: 0
            }, 500, "Linear", true).onComplete.add(function() {
                this.frontglass.inputEnabled = false;
                this.frontglass.input.useHandCursor = false;
            }, this);
            this.brush.inputEnabled = true;
            this.brush.input.useHandCursor = true;
        }, this);
    },
    brushfun: function() {
        //this.arrow.visible=false;
        this.brush.kill();
        this.pasteani.visible = true;
        game.time.events.add(300, function() {
            //this.arrow.visible=true;
            this.arrow.x = this.paste.x + 50;
            this.arrow.y = this.paste.y - 40;
            this.paste.inputEnabled = true;
            this.paste.input.useHandCursor = true;
        }, this);
    },
    pastefun: function() {
        this.paste.kill();
        this.arrow.angle = -50;
        this.arrow.x = this.pasteani.x + 50;
        this.arrow.y = this.pasteani.y - 10;
        this.pasteani.animations.play('pasteani', 10, false).onComplete.add(function() {
            this.face.frame = 3;
            this.pasteani.inputEnabled = true;
            this.pasteani.input.useHandCursor = true;
        }, this);
    },
    pastefun1: function() {
        this.arrow.angle = 0;
        this.arrow.x = this.dragCircle.x + 50;
        this.arrow.y = this.dragCircle.y - 10;
        this.pastedrag = true;
    },
    hitSprite2: function(obj1, obj2) {

        this.brush1.visible = true;
        this.pasteani.kill();
        this.pastedrag1 = true;
        game.time.events.add(2000, function() {
            game.add.tween(this.bubbles).to({
                alpha: 1
            }, 5000, "Linear", true).onComplete.add(function() {
                this.brush1.kill();

                this.pastedrag1 = false;
                this.pastedrag = false;
                this.dragCircle3.kill();
                this.dragCircle2.kill();

                this.glassGroup.visible = false;
                this.glassGroup1.visible = true;
                this.tapGroup.visible = false;
                this.tapGroup1.visible = true;
                this.arrow.x = this.button2.x + 50;
                this.arrow.y = this.button2.y - 10;
                this.button2.inputEnabled = true;
                this.button2.input.useHandCursor = true;
            }, this);
        }, this);
    },
    samefun1: function() {
        this.button2.inputEnabled = false;
        this.button2.input.useHandCursor = false;
        this.arrow.angle = -60;
        this.arrow.x = this.frontglass1.x;
        this.arrow.y = this.frontglass1.y - 80;
        this.button2.frame = 1;
        this.water3.visible = true;
        this.water3.animations.play('water3', 10, true);
        game.time.events.add(200, function() {
            this.waterani1.visible = true;
            this.waterani1.animations.play('waterani1', 10, false).onComplete.add(function() {
                this.frontglass1.inputEnabled = true;
                this.frontglass1.input.useHandCursor = true;
            }, this);
        }, this)
    },
    samefun2: function() {
        this.face.frame = 1;
        this.glassdrag2 = true;
        this.arrow.x = this.water3.x;
        this.arrow.y = this.water3.y - 80;
    },
    samefun3: function() {
        this.face.frame = 0;
        this.arrow.x = this.frontglass1.x;
        this.arrow.y = this.frontglass1.y - 80;
        this.glassdrag2 = false;
        game.add.tween(this.glassGroup1).to({
            x: 0,
            y: 0
        }, 500, "Linear", true);
    },
    hitSprite4: function(obj1, obj2) {
        this.arrow.visible = false;
        this.glassdrag2 = false;
        this.glassGroup1.x = obj2.x - 460;
        this.glassGroup1.y = obj2.y - 630;
        game.add.tween(this.water2).to({
            alpha: 1
        }, 100, "Linear", true);
        this.water2.animations.play('water2', 10, true);
        game.add.tween(this.glasswater1).to({
            alpha: 1
        }, 500, "Linear", true).onComplete.add(function() {
            this.water2.kill();
            game.add.tween(this.glassGroup1).to({
                x: 0,
                y: 0
            }, 500, "Linear", true).onComplete.add(function() {
                this.arrow.visible = true;
                this.button2.inputEnabled = true;
                this.button2.input.useHandCursor = true;
                this.button2.events.onInputDown.removeAll();
                this.button2.events.onInputDown.add(this.samefun4, this);
                this.arrow.angle = 0;
                this.arrow.x = this.button2.x + 50;
                this.arrow.y = this.button2.y - 10;
            }, this);
        }, this);
    },
    samefun4: function() {
        this.arrow.angle = -60;
        this.arrow.x = this.frontglass1.x;
        this.arrow.y = this.frontglass1.y - 80;
        this.button2.inputEnabled = false;
        this.button2.input.useHandCursor = false;
        this.button2.frame = 0;
        this.water3.visible = false;
        this.waterani1.visible = false;
        this.frontglass1.events.onInputDown.removeAll();
        this.frontglass1.events.onInputUp.removeAll();
        this.frontglass1.events.onInputDown.add(this.samefun5, this);
        this.frontglass1.events.onInputUp.add(this.samefun6, this);
    },
    samefun5: function() {
        this.arrow.angle = 50;
        this.arrow.x = this.dragCircle.x + 50;
        this.arrow.y = this.dragCircle.y + 50;
        this.frontglass1.inputEnabled = false;
        this.frontglass1.input.useHandCursor = false;
        this.face.frame = 1;
        this.glassdrag3 = true;
    },
    samefun6: function() {
        this.face.frame = 0;
        this.arrow.visible = true;
        this.glassdrag3 = false;
        game.add.tween(this.glassGroup1).to({
            x: 0,
            y: 0
        }, 500, "Linear", true);
    },
    hitSprite5: function(obj1, obj2) {
        this.arrow.kill();

        game.time.events.add(10, function() {
            game.add.tween(this.bubbles).to({
                alpha: 0
            }, 100, "Linear", true);
        }, this);
        this.glassdrag3 = false;
        // this.eye_ani.alpha=0;
        this.face.frame = 2;
        this.body.frame = 1;
        this.glassGroup1.visible = false;
        game.time.events.add(1500, function() {
            this.body.frame = 0;
            this.face.visible = false;
            this.mouthrinsed.visible = true;
            this.mouthrinsed.animations.play('mouthrinsed', 2, true);
        }, this);
        game.time.events.add(2500, function() {
            //this.body.frame=0;
            // this.eye_ani.alpha=0;
            this.mouthrinsed.visible = false;
            this.mouthrinsed.animations.stop();
            this.splitwaterface.visible = true;
            this.tapGroup2.visible = true;
            this.wastewater.visible = true;
            this.splitwaterface.animations.play('splitwaterface', 2, true);
            this.wastewater.animations.play('wastewater', 20, true);
        }, this);
        game.time.events.add(6500, function() {
            this.splitwaterface.visible = false;
            this.tapGroup2.visible = false;
            this.wastewater.visible = false;
            this.face.frame = 0;
            this.body.frame = 0;
            this.face.visible = true;
            // this.eye_ani.alpha=1;
            // this.eye_ani.y=460.75;
            this.glassGroup1.visible = true;
            this.glasswater1.alpha = 0;
            game.add.tween(this.glassGroup1).to({
                x: 0,
                y: 0
            }, 500, "Linear", true).onComplete.add(function() {
                //  this.eye_ani.alpha=0;
                this.body.visible = false;
                this.face.visible = false;
                this.happyhead.visible = true;
                this.happyhead.animations.play('happyhead', 10, true);
                this.clapbody.visible = true;
                this.clapbody.animations.play('clapbody', 10, true);
                this.frontglass1.inputEnabled = false;
                this.frontglass1.input.useHandCursor = false;
            }, this);
            game.time.events.add(1000, function() {
                this.playbtn.visible = true;
                this.open_ani3.visible = true;
            }, this);
        }, this);
    },
    btnOver6: function() {
        this.open_ani.animations.play('open_ani', 10, false);
        game.time.events.add(1000, function() {
            this.over_ani.visible = true;
            this.open_ani.visible = false;
            this.over_ani.animations.play('over_ani', 10, true);
        }, this);
    },
    btnOut6: function() {
        this.open_ani.visible = true;
        this.over_ani.visible = false;
        this.open_ani.animations.play('open_ani1', 10, false);
    },
    btnOver5: function() {
        this.over_ani3.animations.stop();
        this.open_ani2.animations.play('open_ani', 10, false);
        game.time.events.add(1000, function() {
            this.over_ani2.visible = true;
            this.open_ani2.visible = false;
            this.over_ani2.animations.play('over_ani', 10, true);
        }, this);
    },
    btnOut5: function() {
        this.open_ani2.visible = true;
        this.over_ani2.visible = false;
        this.open_ani2.animations.play('open_ani1', 10, false);
    },
    btnOver4: function() {
        this.over_ani2.animations.stop();
        this.open_ani3.animations.play('open_ani', 10, false);
        game.time.events.add(1000, function() {
            this.over_ani3.visible = true;
            this.open_ani3.visible = false;
            this.over_ani3.animations.play('over_ani', 10, true);
        }, this);
    },
    btnOut4: function() {
        this.open_ani3.visible = true;
        this.over_ani3.visible = false;
        this.open_ani3.animations.play('open_ani1', 10, false);
    },
    openLink: function() {
        CreateLinksInGame("Baby-Ladybug-Dentist", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Ladybug-Dentist", "game", "more");
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.state.start('surgery');
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
    update: function() {
        if (this.glassdrag) {
            this.glassGroup.x = game.input.activePointer.x - 450;
            this.glassGroup.y = game.input.activePointer.y - 670;
            game.physics.arcade.collide(this.glassGroup, this.water);
        }
        if (this.glassdrag1) {
            this.glassGroup.x = game.input.activePointer.x - 450;
            this.glassGroup.y = game.input.activePointer.y - 670;
            game.physics.arcade.collide(this.dragCircle, this.dragCircle1);
            this.dragCircle1.x = game.input.activePointer.x;
            this.dragCircle1.y = game.input.activePointer.y;
        }
        if (this.pastedrag) {
            this.pasteani.x = game.input.activePointer.x - 20;
            this.pasteani.y = game.input.activePointer.y - 30;
            game.physics.arcade.collide(this.dragCircle3, this.dragCircle2);
            this.dragCircle2.x = game.input.activePointer.x;
            this.dragCircle2.y = game.input.activePointer.y + 50;
        }
        if (this.pastedrag1) {
            this.brush1.x = game.input.activePointer.x + 80;
            this.brush1.y = game.input.activePointer.y + 20;
        }
        if (this.glassdrag2) {
            this.glassGroup1.x = game.input.activePointer.x - 450;
            this.glassGroup1.y = game.input.activePointer.y - 670;
            game.physics.arcade.collide(this.glassGroup1, this.water3);
        }
        if (this.glassdrag3) {
            this.glassGroup1.x = game.input.activePointer.x - 450;
            this.glassGroup1.y = game.input.activePointer.y - 670;
            game.physics.arcade.collide(this.dragCircle4, this.dragCircle5);
            this.dragCircle5.x = game.input.activePointer.x;
            this.dragCircle5.y = game.input.activePointer.y;
        }
    },
}
Main.finalScreen = function() {}

Main.finalScreen.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'finalbg');
        this.levelGroup.add(this.introbg);

        //this.eye_ani = game.add.sprite(260.45,473.75,'eyeblink');
        //this.eye_ani.anchor.setTo(0.5);
        //this.eye_ani.animations.add('eyeblink').onComplete.add(function(){
        //this.eye_ani.frame = 0;
        //      },this);
        //this.eye_ani.animations.play('eyeblink', 20, false);
        //game.time.events.loop(2000, this.updateEyeBlink, this);

        this.morebtn = game.add.sprite(74.5, 716.5, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.7);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver5, this);
        this.morebtn.events.onInputOut.add(this.btnOut5, this);
        this.levelGroup.add(this.morebtn);

        this.resetbtn = game.add.sprite(220.15, 718.15, 'resetbtn');
        this.resetbtn.anchor.setTo(0.5);
        this.resetbtn.scale.setTo(0.7);
        this.resetbtn.inputEnabled = true;
        this.resetbtn.input.useHandCursor = true;
        this.resetbtn.events.onInputUp.add(this.resetfun, this);
        this.resetbtn.events.onInputOver.add(this.btnOver4, this);
        this.resetbtn.events.onInputOut.add(this.btnOut4, this);
        this.levelGroup.add(this.resetbtn);

        this.popup1 = game.add.sprite(130, 170, 'popup2');
        this.popup1.anchor.setTo(0.5);
        this.popup1.scale.setTo(0);
        this.levelGroup.add(this.popup1);


        this.open_ani2 = game.add.sprite(75, 722, 'btn_openani');
        this.open_ani2.anchor.setTo(0.5);
        this.open_ani2.scale.setTo(0.7);
        this.open_ani2.animations.add('open_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.open_ani2.animations.add('open_ani1', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

        this.over_ani2 = game.add.sprite(76, 710, 'btn_overani');
        this.over_ani2.anchor.setTo(0.5);
        this.over_ani2.scale.setTo(0.7);
        this.over_ani2.animations.add('over_ani');
        this.over_ani2.visible = false;

        this.open_ani3 = game.add.sprite(220, 724, 'btn_openani');
        this.open_ani3.anchor.setTo(0.5);
        this.open_ani3.scale.setTo(0.7);
        this.open_ani3.animations.add('open_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.open_ani3.animations.add('open_ani1', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

        this.over_ani3 = game.add.sprite(221, 712, 'btn_overani');
        this.over_ani3.anchor.setTo(0.5);
        this.over_ani3.scale.setTo(0.7);
        this.over_ani3.animations.add('over_ani');
        this.over_ani3.visible = false;

        game.load.crossOrigin = '*';
        this.randomId = game.rnd.integerInRange(0, RelatedGames.length - 1);
        this.thumbVar = game.add.sprite(300, 650, 'thumb_' + this.randomId);
        this.thumbVar.inputEnabled = true
        this.thumbVar.input.useHandCursor = true;
        this.thumbVar.events.onInputUp.add(this.thumbLink, this);
        this.thumbframeVar = game.add.sprite(298, 648, 'Tump_frame');
        this.thumbVar.height = this.thumbframeVar.height - 2;
        this.thumbVar.width = this.thumbframeVar.width - 2;

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

        this.musicButton = game.add.sprite(440, 0, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        this.musicButton.events.onInputOver.add(this.btnOver6, this);
        this.musicButton.events.onInputOut.add(this.btnOut6, this);

        this.open_ani = game.add.sprite(470, 40, 'btn_openani');
        this.open_ani.anchor.setTo(0.5);
        this.open_ani.scale.setTo(0.5);
        this.open_ani.animations.add('open_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.open_ani.animations.add('open_ani1', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

        this.over_ani = game.add.sprite(471, 30, 'btn_overani');
        this.over_ani.anchor.setTo(0.5);
        this.over_ani.scale.setTo(0.5);
        this.over_ani.animations.add('over_ani');
        this.over_ani.visible = false;

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
            x: 0.7,
            y: 0.7
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.resetbtn.scale).to({
            x: 0.7,
            y: 0.7
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
    updateEyeBlink: function() {
        this.eye_ani.play('eyeblink', 10, false);

    },
    openLink: function() {
        CreateLinksInGame("Baby-Ladybug-Dentist", "gameover", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Ladybug-Dentist", "gameover", "morebutton");
    },
    thumbLink: function() {
        CreateLinksInGame("Baby-Ladybug-Dentist", "gameover", "thumb", RelatedGames[this.randomId]['id']);
    },
    btnOver6: function() {
        this.open_ani.animations.play('open_ani', 10, false);
        game.time.events.add(1000, function() {
            this.over_ani.visible = true;
            this.open_ani.visible = false;
            this.over_ani.animations.play('over_ani', 10, true);
        }, this);
    },
    btnOut6: function() {
        this.open_ani.visible = true;
        this.over_ani.visible = false;
        this.open_ani.animations.play('open_ani1', 10, false);
    },
    btnOver5: function() {
        this.open_ani2.animations.play('open_ani', 10, false);
        game.time.events.add(1000, function() {
            this.over_ani2.visible = true;
            this.open_ani2.visible = false;
            this.over_ani2.animations.play('over_ani', 10, true);
        }, this);
    },
    btnOut5: function() {
        this.open_ani2.visible = true;
        this.over_ani2.visible = false;
        this.open_ani2.animations.play('open_ani1', 10, false);
    },
    btnOver4: function() {
        this.open_ani3.animations.play('open_ani', 10, false);
        game.time.events.add(1000, function() {
            this.over_ani3.visible = true;
            this.open_ani3.visible = false;
            this.over_ani3.animations.play('over_ani', 10, true);
        }, this);
    },
    btnOut4: function() {
        this.open_ani3.visible = true;
        this.over_ani3.visible = false;
        this.open_ani3.animations.play('open_ani1', 10, false);
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
    resetfun: function() {
        //Main.toyChoosed= [0];
        //Main.toyCompleted= [0,0,0];
        //Main.shutterOn= [true];
        //Main.toolcompleted= [false,false,false];

        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.state.start('intro');
        });

    },
}




game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('surgery', Main.surgery);
game.state.add('mouthwash', Main.mouthwash);
game.state.add('finalScreen', Main.finalScreen);




game.state.start('boot');