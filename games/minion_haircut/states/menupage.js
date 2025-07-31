var statgameint = 1;
var statgameint
var sndmuted;
var states;
var hairsetArr = [];
var menupage = {
    preload: function() {
        hairsetArr = [];
    },
    create: function() {
        backgroun = game.add.sprite(252, 400, 'backgroun');
        backgroun.anchor.setTo(0.5);
        backgroun.scale.setTo(1.02)
        titlestar = game.add.sprite(239.65, 163.75, 'titlestar');
        titlestar.anchor.setTo(0.5);
        titlestar.alpha = 0;
        title = game.add.sprite(262, -227.75, 'title');
        title.anchor.setTo(0.5);
        title.animations.add('adds', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        title.animations.play('adds', 24, true)
        minion = game.add.sprite(260.35, 565.5, 'minion');
        minion.anchor.setTo(0.5);
        minion.animations.add('adds', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        minion.animations.play('adds', 24, true)
        hairgroups = game.add.group();
        play_button = game.add.sprite(58.25, 976.9, 'play_button');
        play_button.anchor.setTo(0.5);
        more_button = game.add.sprite(445.75, 976.9, 'more_button');
        more_button.anchor.setTo(0.5);
        play_button.inputEnabled = true;
        play_button.input.useHandCursor = true;
        play_button.input.pixelPerfectOver = true;
        play_button.input.pixelPerfectClick = true;
        play_button.input.pixelPerfectAlpha = 10;
        play_button.events.onInputOver.add(overplays, this);
        play_button.events.onInputOut.add(outplays, this);
        play_button.events.onInputUp.add(upplays, this);
        play_button.events.onInputDown.add(downplays, this);
        more_button.inputEnabled = true;
        more_button.input.useHandCursor = true;
        more_button.input.pixelPerfectOver = true;
        more_button.input.pixelPerfectClick = true;
        more_button.input.pixelPerfectAlpha = 10;
        more_button.events.onInputOver.add(overplays, this);
        more_button.events.onInputOut.add(outplays, this);
        more_button.events.onInputUp.add(moreLink, this);
        more_button.events.onInputDown.add(downpmore, this);
        states = 1;
        //console.log (Phaser.Math.distance(0 , 0 , 100 , 0));
        uiproperty();
        if (statgameint == 1) {
            statgameint = 0;
            bgsound = game.add.audio('boden');
            bgsound.loop = true;
            bgsound.play();
            tweenfunss()
        } else {
            reversepanels();
            setTimeout(tweenfunss, 1500)
        }
        if (sndmuted) {
            sndmuted = false;
            //muteI.resume();
            bgsound.resume();
        }
    }
}

function tweenfunss() {
    game.add.tween(title).to({
        y: 227.75
    }, 1500, Phaser.Easing.Bounce.Out, 1);
    game.add.tween(titlestar).to({
        alpha: 1
    }, 1500, Phaser.Easing.Bounce.Out, 1, 1500);
    game.add.tween(more_button).to({
        y: 746.9,
    }, 1500, Phaser.Easing.Bounce.Out, 1, 2500);
    game.add.tween(play_button).to({
        y: 746.9,
    }, 1500, Phaser.Easing.Bounce.Out, 1, 2500);
}

function overplays(event) {
    sprakfunss(event);
    event.scale.setTo(1.1);
}

function outplays(event) {
    event.scale.setTo(1);
}

function upplays(event) {
    event.scale.setTo(1);
}

function downplays(event) {
    event.inputEnabled = false;
    event.scale.setTo(0.9);
    //sprakfunss (event)
    levelclosefunction();
}

function sprakfunss(evs) {
    sparks = game.add.sprite(evs.x, evs.y, 'sparks');
    sparks.anchor.setTo(0.5);
    sparks.animations.add('sta');
    sparks.animations.play('sta', 35, false);
}

function mgamesoverFun25(ev) {
    ev.animations.play('manis', 30, false);
}

function mgamesoutFun25(ev) {
    ev.animations.stop();
    ev.frame = 0;
}

function start() {
    bgbgsound.play();
}

function downpmore(evts) {
    playsoundeffects('clickss');
}

function levelclosefunction() {
    if (states == 2 || states == 3) {
        hedingshows()
    } else {
        homeBg = this.game.add.sprite(252, 400, 'transission');
        homeBg.anchor.setTo(0.5);
        homeBg.scale.setTo(1.02);
        homeBg.inputEnabled = true;
        homeBg.y = -400;
        game.add.tween(homeBg).to({
            y: 400
        }, 2000, Phaser.Easing.Bounce.Out, 1).onComplete.add(hedingshows, this);
    }
}

function hedingshows() {
    if (states == 2) {
        haircutgroup.visible = false;
        backgroun.inputEnabled = true;
        backgroun.events.onInputUp.add(actperfect, this);
        backgroun.events.onInputDown.add(deactperfect, this);
        //		for(i=1;i<7;i++)
        //          {
        //            this['object'+i].inputEnabled=false;
        //		  }            
        dragObjects.visible = false;
        selectObjects = 0;
        mouseDounsss = false;
        mouseoversss = false;
        dites = 0;
        hairdyegroup.visible = true;

        // console.log("dsdsd")
    }
    if (states == 3) {
        haircutgroup.visible = false;
        backgroun.inputEnabled = true;
        backgroun.events.onInputUp.add(actperfect, this);
        backgroun.events.onInputDown.add(deactperfect, this);
        //		for(i=1;i<7;i++)
        //          {
        //            this['object'+i].inputEnabled=false;
        //		  }            
        dragObjects.visible = false;
        dragObjects1.visible = false;
        selectObjects = 0;
        selectObjects1 = 0;
        mouseDounsss = false;
        mouseoversss = false;
        dites = 0;
        hairdyegroup.visible = false;
        hairdrssgroup.visible = true;
        tweendreessfuns();

    }
    if (states == 4) {
        haircutgroup.visible = false;
        backgroun.inputEnabled = false;
        sprayides = 0;;
        //		for(i=1;i<7;i++)
        //          {
        //            this['object'+i].inputEnabled=false;
        //		  }            
        dragObjects.visible = false;
        dragObjects1.visible = false;
        selectObjects = 0;
        selectObjects1 = 0;
        mouseDounsss = false;
        mouseoversss = false;
        dites = 0;
        hairdrssgroup.visible = false;
        hairendgroup.visible = true;
        minion_body.y -= 80;
        minion_dress.y -= 80;
        minion_mouth.y -= 80;
        eyeblink1.y -= 80;
        eyeblink2.y -= 80;
        eyeblink3.y -= 80;
        eyeblink4.y -= 80;
        eyeblink5.y -= 80;
        eyeblink6.y -= 80;
        for (i = 0; i < hairsetArr.length; i++) {
            hairsetArr[i].y -= 80;
        }
        backgroun.visible = false;
    }
    if (states == 2 || states == 3) {
        nextLevelFun1title()
    } else {
        setTimeout(nextLevelFun1title, 1000);
    }
    //gameheading=this.game.add.sprite(400,300,'gameheading');
    //gameheading.anchor.setTo(0.5);
    //gameheading.scale.setTo(0);
    //game.add.tween(gameheading).to({angle:360},700,Phaser.Easing.Linear.Out,1);   
    // game.add.tween(gameheading.scale).to({x:1,y:1},2000,Phaser.Easing.Bounce.Out,1).onComplete.add(nextLevelFun,this)
}

function nextLevelFun() {
    setTimeout(nextLevelFun1title, 1000);
}

function nextLevelFun1title() {
    //console.log(states)
    if (states == 1) {
        states = 2;
        game.state.start('haircusts');
    } else if (states == 2) {
        states = 3;
        //game.state.start('speach');
        reversepanels1();
    } else if (states == 3) {
        states = 4;
        //game.state.start('playpage1');
        reversepanels1();
    } else if (states == 4) {
        states = 5;
        reversepanels1()
    } else if (states == 5) {
        states = 1;
        game.state.start('menupage');
    }
}

function downlogos() {
    //window.open('');
}

function downfacebooks() {
    //window.open()
}

function muteaction() {

    if (!sndmuted) {
        sndmuted = true;
        mutebutton.frame = 1;
        bgsound.pause();
    } else {
        sndmuted = false;
        mutebutton.frame = 0;
        bgsound.resume();
    }
}

function playsoundeffects(clkssed) {
    if (!sndmuted) {
        clicksound = game.add.audio(clkssed);
        clicksound.play();
    }
}

function overlogos(event) {
    event.scale.setTo(1.1);
}

function reversepanels() {
    //console.log(homeBg)
    homeBg = this.game.add.sprite(252, 400, 'transission');
    homeBg.anchor.setTo(0.5);
    homeBg.scale.setTo(1.02);
    homeBg.inputEnabled = true;
    homeBg.y = 400
    game.add.tween(homeBg).to({
        y: -420
    }, 1000, Phaser.Easing.Bounce.None, 1);
}

function reversepanels1() {
    playbutton.destroy();
    moregameButton.destroy();
    back_button.destroy();
    moregameButton = game.add.sprite(252, 894.85, 'more_button');
    moregameButton.anchor.setTo(0.5);
    moregameButton.inputEnabled = true;
    moregameButton.input.useHandCursor = true;
    moregameButton.input.pixelPerfectOver = true;
    moregameButton.input.pixelPerfectClick = true;
    moregameButton.input.pixelPerfectAlpha = 10;
    moregameButton.events.onInputOver.add(overplays, this);
    moregameButton.events.onInputOut.add(outplays, this);
    moregameButton.events.onInputUp.add(moreLink, this);
    moregameButton.events.onInputDown.add(downpmore, this);
    if (states != 5) {
        if (states == 4) {
            playbutton = game.add.sprite(445.75, 894.85, 'donebuttons');
        } else {
            playbutton = game.add.sprite(445.75, 894.85, 'next_button');
        }
        playbutton.anchor.setTo(0.5);
        playbutton.inputEnabled = true;
        playbutton.input.useHandCursor = true;
        playbutton.input.pixelPerfectOver = true;
        playbutton.input.pixelPerfectClick = true;
        playbutton.input.pixelPerfectAlpha = 10;
        playbutton.events.onInputOver.add(overplays, this);
        playbutton.events.onInputOut.add(outplays, this);
        playbutton.events.onInputUp.add(upplays, this);
        playbutton.events.onInputDown.add(downplays, this);
        back_button = game.add.sprite(58.2, 896.9, 'back_button');
        back_button.anchor.setTo(0.5);
        back_button.inputEnabled = true;
        back_button.input.useHandCursor = true;
        back_button.input.pixelPerfectOver = true;
        back_button.input.pixelPerfectClick = true;
        back_button.input.pixelPerfectAlpha = 10;
        back_button.events.onInputOver.add(overplays, this);
        back_button.events.onInputOut.add(outplays, this);
        back_button.events.onInputUp.add(upplays, this);
        back_button.events.onInputDown.add(bakfunss, this);
        if (states == 2) {
            back_button.visible = false;
            playbutton.x = 58.2;
            playbutton.y = 744.9;
            moregameButton.x = 445.75;
            moregameButton.y = 744.85;
        }
        if (states == 3) {
            if (firsttoolshow == 1) {
                movedyefuns();
                firsttoolshow = 2;
                game.add.tween(moregameButton).to({
                    y: 744.85,
                }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
                game.add.tween(playbutton).to({
                    y: 744.85,
                }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
                game.add.tween(back_button).to({
                    y: 744.85,
                }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
            } else {
                //playbutton.x=58.2;
                playbutton.y = 744.9;
                //moregameButton.x=445.75;
                moregameButton.y = 744.85;
                //back_button.x=58.2;
                back_button.y = 744.85;
            }
        }
        if (states == 4) {
            if (firsttoolshow2 == 1) {
                firsttoolshow2 = 2;
                game.add.tween(moregameButton).to({
                    y: 744.85,
                }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
                game.add.tween(playbutton).to({
                    y: 744.85,
                }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
                game.add.tween(back_button).to({
                    y: 744.85,
                }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
            } else {
                //playbutton.x=58.2;
                playbutton.y = 744.9;
                //moregameButton.x=445.75;
                moregameButton.y = 744.85;
                //back_button.x=58.2;
                back_button.y = 744.85;
            }
        }
        //         game.add.tween(moregameButton).to({y:744.85,},1500,Phaser.Easing.Bounce.Out,1,2500);
        //         game.add.tween(playbutton).to({y:744.85,},1500,Phaser.Easing.Bounce.Out,1,3500);
        //         game.add.tween(back_button).to({y:744.85,},1500,Phaser.Easing.Bounce.Out,1,3500);	

    } else {
        playbutton = game.add.sprite(58.25, 894.85, 'replayBut');
        playbutton.anchor.setTo(0.5);
        playbutton.inputEnabled = true;
        playbutton.input.useHandCursor = true;
        playbutton.input.pixelPerfectOver = true;
        playbutton.input.pixelPerfectClick = true;
        playbutton.input.pixelPerfectAlpha = 10;
        playbutton.events.onInputOver.add(overplays, this);
        playbutton.events.onInputOut.add(outplays, this);
        playbutton.events.onInputUp.add(upplays, this);
        playbutton.events.onInputDown.add(downplays, this);
        back_button = game.add.sprite(445.75, 892.65, 'downBut');
        back_button.anchor.setTo(0.5);
        back_button.inputEnabled = true;
        back_button.input.useHandCursor = true;
        back_button.input.pixelPerfectOver = true;
        back_button.input.pixelPerfectClick = true;
        back_button.input.pixelPerfectAlpha = 10;
        back_button.events.onInputOver.add(overplays, this);
        back_button.events.onInputOut.add(outplays, this);
        back_button.events.onInputUp.add(upplays, this);
        back_button.events.onInputDown.add(saveclickFun, this);
        moregameButton.x = 445.75;
        this.randomId = game.rnd.integerInRange(0, RelatedGames.length - 1);
        this.thumbVar = game.add.sprite(252.05, 712.5, 'thumb_' + this.randomId);
        this.thumbVar.anchor.setTo(0.5);
        this.thumbVar.inputEnabled = true
        this.thumbVar.input.useHandCursor = true;
        this.thumbVar.events.onInputUp.add(thumbLink, this);
        thumbframe = game.add.sprite(252.05, 712.5, 'thumbframe');
        thumbframe.anchor.setTo(0.5);
        thumbframe.scale.setTo(0.97);
        game.add.tween(moregameButton).to({
            y: 744.85,
        }, 1500, Phaser.Easing.Bounce.Out, 1, 1500);
        game.add.tween(playbutton).to({
            y: 744.85,
        }, 1500, Phaser.Easing.Bounce.Out, 1, 1500);
        game.add.tween(back_button).to({
            y: 622.65,
        }, 1500, Phaser.Easing.Bounce.Out, 1, 1500);
        if (states == 2 || states == 3) {
            showlistener();
        } else {
            homeBg.destroy();
            homeBg = this.game.add.sprite(252, 400, 'transission');
            homeBg.anchor.setTo(0.5);
            homeBg.scale.setTo(1.02);
            homeBg.inputEnabled = true;
            homeBg.y = 400;
            game.add.tween(homeBg).to({
                y: -420
            }, 1000, Phaser.Easing.Bounce.None, 1).onComplete.add(showlistener, this);
        }
    }

}

function showlistener() {}

function thumbLink() {
    CreateLinksInGame("Minion-Real-Haircuts", "gameover", "thumb", RelatedGames[this.randomId]['id']);
}

function uiproperty() {
    logo = this.game.add.sprite(55.5, 29.95, 'logo')
    logo.anchor.setTo(0.5);
    logo.inputEnabled = true;
    logo.input.useHandCursor = true;;
    logo.events.onInputOver.add(overlogos, this);
    logo.events.onInputOut.add(outplays, this);
    logo.events.onInputUp.add(downlogos, this);
    mutebutton = this.game.add.sprite(466.5, 36.85, 'mute');
    mutebutton.anchor.setTo(0.5);
    mutebutton.inputEnabled = true;
    mutebutton.input.useHandCursor = true;
    mutebutton.input.pixelPerfectOver = true;
    mutebutton.input.pixelPerfectClick = true;
    mutebutton.events.onInputOver.add(overplays, this);
    mutebutton.events.onInputOut.add(outplays, this);
    mutebutton.events.onInputDown.add(muteaction, this);
}

function downlogos() {
    CreateLinksInGame("Minion-Real-Haircuts", "game", "logo");
}

function moreLink() {
    CreateLinksInGame("Minion-Real-Haircuts", "game", "more");
}