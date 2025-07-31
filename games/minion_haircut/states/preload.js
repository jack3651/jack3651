var startPreLoader = false;
var loadent = false;
var lpbar1;
var sizeing = false
var titledollgroups;
var Preload = {
    init: function() {
        game.stage.backgroundColor = '#00547c';
        game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
        game.stage.disableVisibilityChange = true;
        game.renderer.renderSession.roundPixels = true;
        game.scale.setResizeCallback(this.gameResized, this);
    },
    preload: function() {
        game.stage.backgroundColor = "#056194";
        this.load.image('bgloader', 'assets/loaderbg.png');
        this.load.image('loaderlogos', 'assets/loaderlogos.png');

    },

    create: function() {
        //this.game.state.start('settingfile');  	
        game.load.onLoadStart.add(loadStart, this);
        game.load.onFileComplete.add(fileComplete, this);
        game.load.onLoadComplete.add(loadComplete, this);
        game.time.events.add(Phaser.Timer.SECOND * 1, loadPicture, this);
    },
    gameResized: function(manager, bounds) {
        var xpos = window.innerWidth - (window.innerWidth / game.width);
        var scale = Math.min(window.innerWidth / game.width, window.innerHeight / game.height);
        manager.setUserScale(scale, scale, 0, 0);
        game.scale.pageAlignHorizontally = true;
    }
};

function loadPicture() {
    //load all game assets	
    this.game.load.crossOrigin = '*';
    this.load.image('backgroun', 'assets/homepage/backgroun.png');
    this.load.image('backgroun1', 'assets/homepage/backgroun1.png');
    this.load.image('logo', 'assets/homepage/logo.png');
    this.load.spritesheet('minion', 'assets/homepage/minion.png', 357, 465);
    this.load.image('more_button', 'assets/homepage/more_button.png');
    this.load.image('play_button', 'assets/homepage/play_button.png');
    this.load.image('replayBut', 'assets/dressup/replayBut.png');
    this.load.image('donebuttons', 'assets/dressup/donebuttons.png');
    this.load.image('downBut', 'assets/dressup/downBut.png');
    this.load.spritesheet('title', 'assets/homepage/title.png', 575, 395);
    this.load.image('titlestar', 'assets/homepage/titlestar.png');
    this.load.image('transission', 'assets/homepage/transission.png');

    this.load.image('back_button', 'assets/haircut/back_button.png');
    this.load.image('next_button', 'assets/haircut/next_button.png');
    this.load.image('object_pan', 'assets/haircut/object_pan.png');
    this.load.image('object_pan1', 'assets/haircut/object_pan1.png');
    this.load.image('object_pan2', 'assets/haircut/object_pan2.png');
    this.load.image('object1', 'assets/haircut/object1.png');
    this.load.image('object2', 'assets/haircut/object2.png');
    this.load.image('object3', 'assets/haircut/object3.png');
    this.load.image('object4', 'assets/haircut/object4.png');
    this.load.image('object5', 'assets/haircut/object5.png');
    this.load.image('object6', 'assets/haircut/object6.png');
    this.load.image('boxhit', 'assets/haircut/boxhit.png');

    this.load.image('minion_body', 'assets/haircut/minion_body.png');
    this.load.spritesheet('minion_dress', 'assets/haircut/minion_dress.png', 227, 179);
    this.load.spritesheet('minion_mouth', 'assets/haircut/minion_mouth.png', 89, 36);
    this.load.spritesheet('eyeblink1', 'assets/haircut/eyeblink1.png', 142, 55);
    this.load.spritesheet('eyeblink2', 'assets/haircut/eyeblink2.png', 67, 65);
    this.load.spritesheet('eyeblink3', 'assets/haircut/eyeblink3.png', 196, 116);
    this.load.spritesheet('eyeblink4', 'assets/haircut/eyeblink4.png', 196, 117);
    this.load.spritesheet('eyeblink5', 'assets/haircut/eyeblink5.png', 196, 90);
    this.load.spritesheet('eyeblink6', 'assets/haircut/eyeblink6.png', 194, 90);
    this.load.spritesheet('ollsprayani', 'assets/haircut/ollsprayani.png', 453, 352, 34);
    this.load.spritesheet('airAni', 'assets/haircut/airAni.png', 21, 21);
    this.load.spritesheet('dyeani', 'assets/haircolor/dyeani.png', 49, 49);

    this.load.image('spray1', 'assets/dressup/spray1.png');
    this.load.image('mouth', 'assets/dressup/mouth.png');
    this.load.image('glasses', 'assets/dressup/glasses.png');
    this.load.image('dresses', 'assets/dressup/dresses.png');
    this.load.image('thumbframe', 'assets/dressup/thumbframe.png');
    this.load.image('sprygunss', 'assets/dressup/sprygunss.png');
    this.load.spritesheet('spryanimations', 'assets/dressup/spryanimations.png', 45, 28);
    this.load.spritesheet('dressgliter', 'assets/dressup/dressgliter.png', 224, 160);
    this.load.spritesheet('glassgliter', 'assets/dressup/glassgliter.png', 188, 98);
    this.load.spritesheet('hairgliter', 'assets/dressup/hairgliter.png', 212, 174);
    this.load.spritesheet('mouthgliter', 'assets/dressup/mouthgliter.png', 111, 64);

    this.load.spritesheet('dyecolor', 'assets/haircolor/dyecolor.png', 25, 55);
    this.load.spritesheet('chair', 'assets/homepage/chair.png', 21, 105);
    this.load.spritesheet('shair', 'assets/homepage/shair.png', 36, 110);
    this.load.spritesheet('mute', 'assets/homepage/mute.png', 59, 59);
    this.load.spritesheet('dragObjects', 'assets/haircut/dragObjects.png', 216, 213);
    this.load.spritesheet('sparks', 'assets/homepage/sparks.png', 153, 178);
    for (i = 0; i < RelatedGames.length; i++) {
        game.load.image('thumb_' + i, RelatedGames[i]["thumb"]);
    }
    //this.load.image('hair','assets/homepage/hair.png');
    this.load.audio('boden', ['assets/bmusic.mp3', 'assets/bmusic.ogg']);
    this.load.audio('clickss', ['assets/Click.mp3', 'assets/Click.ogg']);
    game.load.start();
}

function loadStart() {}

function fileComplete(progress) {
    //if(!startPreLoader)
    {
        startPreLoader = true;
        bgloader = game.add.sprite(0, 0, 'bgloader');
        bgloader.scale.setTo(1.02);
        this.progress = game.add.text(game.world.centerX, 500, "LOADING: 0%", {
            font: "bold 22px Arial",
            fill: "#ffffff",
            align: "center"
        });
        this.progress.anchor.setTo(0.5)
        loaderlogos = game.add.sprite((game.width / 2) - 100, (game.height / 2) - 100, 'loaderlogos');
        loaderlogos.inputEnabled = true;
        loaderlogos.input.useHandCursor = true;
        loaderlogos.events.onInputUp.add(downlogossss, this);
    }
    this.progress.setText('LOADING: ' + parseInt(progress) + '%');
    if (progress == 100) {}
}

function downlogossss() {
    CreateLinksInGame("Minion-Real-Haircuts", "loading", "logo");
}

function loadComplete() {
    this.game.state.start('menupage');
}