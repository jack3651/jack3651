var speed;
var falhairarr;
var selectObjects;
var selectObjects1;
var mouseDounsss;
var mouseoversss;
var dites = 0;
var hairdyegroup
var hairdye;
var objarrsdsd = [];
var sprayides = 0;
var firsttoolshow = 1;
var firsttoolshow1 = 1;
var firsttoolshow2 = 1;

var haircusts = {
    preload: function() {
        speed = 3;
        falhairarr = [];
        hairsetArr = [];
        selectObjects = 0;
        selectObjects1 = 0;
        mouseDounsss = false;
        mouseDounsss = false;
        mouseoversss = false;
        dites = 0
        objarrsdsd = [, ];

        firsttoolshow = 1;
        firsttoolshow1 = 1;
        firsttoolshow2 = 1;
    },
    create: function() {
        backgroun1 = game.add.sprite(252, 400, 'backgroun1');
        backgroun1.anchor.setTo(0.5);
        backgroun1.scale.setTo(1.02)
        backgroun = game.add.sprite(252, 400, 'backgroun');
        backgroun.anchor.setTo(0.5);
        backgroun.scale.setTo(1.02)
        backgroun.inputEnabled = true;
        backgroun.events.onInputUp.add(actperfect, this);
        backgroun.events.onInputDown.add(deactperfect, this);

        minion_body = game.add.sprite(252, 545, 'minion_body');
        minion_body.anchor.setTo(0.5);
        minion_dress = game.add.sprite(251, 613.5, 'minion_dress');
        minion_dress.anchor.setTo(0.5);
        minion_mouth = game.add.sprite(251.45, 533.1, 'minion_mouth');
        minion_mouth.anchor.setTo(0.5);
        eyeblink1 = game.add.sprite(250.95, 460.3, 'eyeblink1');
        eyeblink1.anchor.setTo(0.5);
        eyeblink2 = game.add.sprite(252.1, 460.3, 'eyeblink2');
        eyeblink2.anchor.setTo(0.5);
        eyeblink3 = game.add.sprite(250.85, 462.75, 'eyeblink3');
        eyeblink3.anchor.setTo(0.5);
        eyeblink4 = game.add.sprite(251.1, 462.75, 'eyeblink4');
        eyeblink4.anchor.setTo(0.5);
        eyeblink5 = game.add.sprite(251.1, 462.75, 'eyeblink5');
        eyeblink5.anchor.setTo(0.5);
        eyeblink6 = game.add.sprite(251.1, 462.75, 'eyeblink6');
        eyeblink6.anchor.setTo(0.5);
        eyeblink1.animations.add('adds', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        eyeblink1.animations.play('adds', 24, true)
        eyeblink2.animations.add('adds', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        eyeblink2.animations.play('adds', 24, true)
        eyeblink3.animations.add('adds', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        eyeblink3.animations.play('adds', 24, true)
        eyeblink4.animations.add('adds', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        eyeblink4.animations.play('adds', 24, true)
        eyeblink5.animations.add('adds', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        eyeblink5.animations.play('adds', 24, true)
        eyeblink6.animations.add('adds', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        eyeblink6.animations.play('adds', 24, true)
        //eyeblink1.visible=false;
        eyeblink2.visible = false;
        eyeblink3.visible = false;
        eyeblink4.visible = false;
        eyeblink5.visible = false;
        eyeblink6.visible = false;

        hairgroups = game.add.group();
        titlestar = game.add.sprite(239.65, 73.75, 'titlestar');
        titlestar.anchor.setTo(0.5);
        title = game.add.sprite(252, 107.75, 'title');
        title.anchor.setTo(0.5);
        titlestar.scale.setTo(0.5);
        title.scale.setTo(0.5);
        haircutgroup = game.add.group();
        hairdyegroup = game.add.group();
        hairdrssgroup = game.add.group();
        hairendgroup = game.add.group();
        hairdrssgroup.visible = false;
        hairendgroup.visible = false;
        object_pan = game.add.sprite(251.75, 385.2, 'object_pan');
        object_pan.anchor.setTo(0.5);
        haircutgroup.add(object_pan);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        objectArr = [, [43.95, 187],
            [49.9, 346.85],
            [55.3, 505.35],
            [453.25, 193.25],
            [463.25, 342.2],
            [467.45, 467.65]
        ]
        for (i = 1; i < 7; i++) {
            //			  if(i<4)
            //				  {
            //            this['object'+i]=game.add.sprite(objectArr[i][0]*-1,objectArr[i][1],'object'+i);
            //				  }
            //			  else
            //				  {
            //					 this['object'+i]=game.add.sprite(objectArr[i][0]+200,objectArr[i][1],'object'+i); 
            //				  }
            this['object' + i] = game.add.sprite(objectArr[i][0], objectArr[i][1], 'object' + i);
            this['object' + i].anchor.setTo(0.5);
            this['object' + i].inputEnabled = true;
            this['object' + i].idess = i;
            this['object' + i].input.useHandCursor = true;
            this['object' + i].input.pixelPerfectOver = true;
            this['object' + i].input.pixelPerfectClick = true;
            this['object' + i].input.pixelPerfectAlpha = 10;
            this['object' + i].events.onInputOver.add(overcontrol, this);
            this['object' + i].events.onInputOut.add(outControl, this);
            //this['object'+i].events.onInputUp.add(downcontrol,this);
            this['object' + i].events.onInputDown.add(downcontrol, this);
            haircutgroup.add(this['object' + i]);
            objarrsdsd.push(this['object' + i]);
        }
        disshowfuns()

        //	  setTimeout(tweemsdd,100);
        //	  function tweemsdd ()
        //	  {
        //		   for(i=1;i<4;i++)
        //          {
        //		  game.add.tween(this['object'+i]).to({x:40},1500,Phaser.Easing.Bounce.Out,1,i*1000);
        //		  }  for(i=4;i<7;i++)
        //          {
        //		  game.add.tween(this['object'+i]).to({x:200},1500,Phaser.Easing.Bounce.Out,1,i*1000);
        //		  }
        //	  }	  
        function overcontrol(ev) {
            //ev.y=objectArr[ev.idess][1]-25;
            //ev.angle=25;		   
        }

        function outControl(ev) {
            //ev.y=objectArr[ev.idess][1] ;
            //ev.angle=0;		  
        }

        function downcontrol(ev) {
            playsoundeffects('clickss');
            if (selectObjects != ev.idess) {
                //ev.y=objectArr[ev.idess][1]-25;
                if (selectObjects != 0) {
                    game.add.tween(this['object' + selectObjects]).to({
                        y: objectArr[selectObjects][1]
                    }, 500, Phaser.Easing.Cubic.Out, 1);
                }
                selectObjects = ev.idess;
                //		  for(i=1;i<7;i++)
                //          {
                //			this['object'+i].x=objectArr[i][0];
                //            //this['object'+i].y=objectArr[i][1];
                //			game.add.tween(this['object'+i]).to({y:objectArr[i][1]},100,Phaser.Easing.Cubic.Out,1);  
                //            this['object'+i].angle=0;
                //		  }
                //this['object'+selectObjects].y=objectArr[selectObjects][1]-25;
                game.add.tween(this['object' + selectObjects]).to({
                    y: objectArr[selectObjects][1] - 5
                }, 500, Phaser.Easing.Cubic.Out, 1);
                dragObjects.frame = selectObjects - 1;
                dragObjects.visible = true;
                dragObjects.x = ev.x;
                dragObjects.y = ev.y;
                game.input.addMoveCallback(dragselectobject, this);
                //outFunsscakks ();
            }
        }

        function dragselectobject(pointer, x, y) {
            dragObjects.x = pointer.x;
            dragObjects.y = pointer.y;
            spritess.x = pointer.x;
            spritess.y = pointer.y;
            if (selectObjects == 1 && mouseDounsss) {
                for (i = 0; i < hairsetArr.length; i++) {
                    var targetAngle = (360 / (2 * Math.PI)) * game.math.angleBetween(
                        hairsetArr[i].x, hairsetArr[i].y,
                        this.game.input.activePointer.x, this.game.input.activePointer.y) - 90;
                    hairsetArr[i].angle = targetAngle;
                    hairsetArr[i].flo = 1;
                }
            }
            if (selectObjects == 4 && mouseDounsss) {
                for (i = 0; i < hairsetArr.length; i++) {
                    //console.log(hairsetArr[i])
                    if (checkOverlap(hairsetArr[i], spritess)) {
                        hairsetArr[i].flo = 1;
                        var targetAngle = (360 / (2 * Math.PI)) * game.math.angleBetween(
                            hairsetArr[i].x, hairsetArr[i].y,
                            this.game.input.activePointer.x, this.game.input.activePointer.y) + 90;
                        //				  if(targetAngle>0)
                        //							  {
                        //				  	hairsetArr[i].angle += targetAngle/50;
                        //							  }
                        //						  else
                        //							  {
                        //								  hairsetArr[i].angle -= targetAngle/50;  
                        //							  }
                        hairsetArr[i].angle = targetAngle;
                    } else {
                        hairsetArr[i].flo = 0;
                    }
                }
                if (selectObjects == 6 && mouseDounsss) {
                    if (ev.scale.y < 1.2) {
                        ev.scale.y += 0.1;
                    }
                }
            }
        }

        function outFunsscakks() {
            for (i = 1; i < 7; i++) {
                this['object' + i].x = objectArr[i][0];
                this['object' + i].y = objectArr[i][1];
            }
            this['object' + selectObjects].y = objectArr[selectObjects][1] - 25;
        }
        airAni = game.add.sprite(250, 250, 'airAni');
        airAni.anchor.setTo(0.5);
        airAni.visible = false;
        airAni.animations.add('airs', [0, 1, 2]);
        airAni.animations.play('airs', 30, true);
        dyeani = game.add.sprite(250, 250, 'dyeani');
        dyeani.anchor.setTo(0.5);
        dyeani.visible = false;
        dyeani.animations.add('airs', [0, 1, 2]);
        dyeani.animations.play('airs', 30, true);
        ollsprayani = game.add.sprite(250, 250, 'ollsprayani');
        ollsprayani.anchor.setTo(0.5);
        ollsprayani.visible = false;
        ollsprayani.animations.add('airs');
        ollsprayani.animations.play('airs', 30, true);
        dragObjects = game.add.sprite(-250, 0, 'dragObjects');
        dragObjects.anchor.setTo(0.5);
        dragObjects.visible = false;
        haircutgroup.add(airAni);
        haircutgroup.add(ollsprayani);
        haircutgroup.add(dragObjects);
        dragObjects1 = game.add.sprite(-250, 0, 'dyecolor');
        dragObjects1.anchor.setTo(0.5, 0);
        dragObjects1.visible = false;
        var xArrs = [252.25, 262, 271.25, 280.65, 288.85, 296.8, 304.45, 312.15, 316.85, 322.65, 327.45, 331.45, 335.45, 337.75, 338.65, 249.75, 240, 230.7, 221.3, 213.1, 205.2, 197.5, 189.85, 185.15, 179.3, 174.5, 170.5, 166.55, 164.25, 163.35, 252.25, 262, 271.25, 280.65, 288.85, 296.8, 304.45, 312.15, 319.65, 325.45, 329.45, 333.45, 337.45, 339.75, 340.6, 251.2, 241.45, 232.15, 222.75, 214.55, 206.65, 198.95, 191.25, 183.8, 177.95, 173.95, 169.95, 166, 163.65, 162.8, 252.25, 262, 271.25, 280.65, 288.85, 296.8, 304.45, 312.15, 319.65, 325.45, 329.45, 333.45, 337.45, 339.75, 340.6, 340.6, 342, 251.2, 241.45, 232.15, 222.75, 214.55, 206.65, 198.95, 191.25, 183.8, 177.95, 173.95, 169.95, 166, 163.65, 162.8, 162.8, 161.4];
        var yArrs = [373.15, 374.8, 376.05, 378.45, 383.3, 386.55, 391.6, 396.8, 403.25, 410.8, 416.45, 424.95, 430.65, 434.95, 445, 373.15, 374.8, 376.05, 378.45, 383.3, 386.55, 391.6, 396.8, 403.25, 410.8, 416.45, 424.95, 430.65, 434.95, 445, 383.15, 384.5, 387.35, 389.05, 393, 394.95, 398.9, 401.8, 406.25, 416.1, 421.95, 424.35, 433.85, 440.15, 446.6, 382.65, 384, 386.35, 388.05, 392, 395.45, 400.4, 405.8, 410.25, 415.6, 419.95, 427.35, 432.85, 440.15, 446.6, 398.75, 399.6, 400.45, 401.65, 404.1, 406.55, 410, 414.4, 418.85, 425.2, 430.05, 434.95, 439.45, 445.75, 452.2, 459, 466.15, 398.75, 399.6, 400.45, 401.65, 404.1, 406.55, 410, 414.4, 418.85, 425.2, 430.05, 434.95, 439.45, 445.75, 452.2, 459, 466.15];
        for (i = 0; i < xArrs.length; i++) {
            hair = game.add.sprite(xArrs[i], yArrs[i], 'shair');
            hair.anchor.setTo(0.5, 1);
            hair.inputEnabled = true;
            hair.input.pixelPerfectOver = true;
            hair.input.pixelPerfectClick = true;
            hair.events.onInputOver.add(downplays1, this);
            hair.events.onInputOut.add(downplays1ddd, this);
            hair.events.onInputDown.add(deactperfect, this);
            hair.events.onInputUp.add(actperfect, this);
            hair.flo = 0;
            hairsetArr.push(hair);
            hairgroups.add(hair);
            if (hair.x < 252) {
                hair.scale.x *= -1;
            }
        }

        function downplays1ddd(ev) {
            ev.overss = false;
            ev.flo = 0;
        }

        function downplays1(ev) {
            ev.overss = true;
            //console.log (Phaser.Math.distance(game.input.x , game.input.y , ev.x , ev.y),hair.height);			
            //hair.scale.setTo(hair.scale.x*(Phaser.Math.distance(game.input.x , game.input.y , ev.x , ev.y)/hair.height));
            //			emitter = game.add.emitter(0, 0, 100);
            //		  	emitter.makeParticles('shair');
            //			emitter.gravity = 200;
            //			emitter.x = game.input.x;
            //    		emitter.y = game.input.y;			    
            //  		emitter.scale.x=(ev.scale.y*((Phaser.Math.distance(game.input.x , game.input.y , ev.x , ev.y))/ev.height));
            //    			emitter.start(true, 2000, null, 2);	
            if (selectObjects == 3 && mouseDounsss) {
                hair = game.add.sprite(game.input.x, game.input.y, 'shair');
                hair.anchor.setTo(0.5, 1);
                haircutgroup.add(hair);
                hair.angle = Math.random() * 360;
                hair.angles = 45 + Math.random() * 90;
                hair.dxtx = Math.cos(hair.angles * Math.PI / 180) * speed;
                hair.dxty = Math.sin(hair.angles * Math.PI / 180) * speed;
                //hair.scale.y=ev.scale.y*(ev.height-(Phaser.Math.distance(game.input.x , game.input.y , ev.x , ev.y))/ev.height);
                hair.scale.y = (ev.scale.y * (ev.height - Phaser.Math.distance(game.input.x, game.input.y, ev.x, ev.y)) / ev.height);
                hair.frame = ev.frame;
                falhairarr.push(hair);
                if (Phaser.Math.distance(game.input.x, game.input.y, ev.x, ev.y) < 10) {
                    ev.scale.y = 0;
                } else {
                    ev.scale.y = (ev.scale.y * (Phaser.Math.distance(game.input.x, game.input.y, ev.x, ev.y) / ev.height));
                }
            }
            if (selectObjects == 2 && mouseDounsss) {
                ev.flo = 1;
                if (ev.frame < 24) {
                    ev.frame = 25 + ev.frame;
                }
            }
            if (selectObjects == 5 && mouseDounsss) {
                ev.flo = 1;
                if (ev.frame > 24) {
                    ev.frame = ev.frame - 25;
                }
            }
            //			if(states==3&& mouseDounsss&&selectObjects1>0 )
            //			  {
            //				  ev.flo=1;
            //				 if(ev.frame>24)
            //				{
            //					ev.frame=selectObjects1+25;
            //				}
            //				else
            //				{
            //					ev.frame=selectObjects1;
            //				}
            //			  }

        }


        //	            grphicss= game.add.graphics(0,0);
        //              grphicss.beginFill(0xFFFF00, 1);
        //              grphicss.drawRect(0,0,20,40);
        //	  
        spritess = game.add.sprite(100, 100, 'boxhit');
        //spritess.addChild(grphicss);
        //spritess.visible=false;
        spritess.alpha = 0;
        spritess.scale.setTo(0.5);
        object_pan = game.add.sprite(251.75, 385.2, 'object_pan1');
        object_pan.anchor.setTo(0.5);
        hairdyegroup.add(object_pan);
        hairdye = game.add.group();
        objectArrd = [, [15.15, 179.05],
            [41.15, 179.05],
            [67.15, 179.05],
            [93.15, 179.05],
            [15.15, 333.3],
            [41.15, 333.3],
            [67.15, 333.3],
            [93.15, 333.3],
            [15.15, 498.1],
            [41.15, 498.1],
            [67.15, 498.1],
            [93.15, 498.1],
            [410.8, 179.05],
            [436.8, 179.05],
            [462.8, 179.05],
            [488.8, 179.05],
            [410.8, 333.3],
            [436.8, 333.3],
            [462.8, 333.3],
            [488.8, 333.3],
            [410.8, 498.1],
            [436.8, 498.1],
            [462.8, 498.1],
            [488.8, 498.1]
        ]
        for (i = 1; i < 25; i++) {
            dyecolor = game.add.sprite(objectArrd[i][0], objectArrd[i][1], 'dyecolor');
            dyecolor.anchor.setTo(0.5);
            dyecolor.inputEnabled = true;
            dyecolor.frame = i - 1;
            dyecolor.idess = i;
            dyecolor.input.useHandCursor = true;
            dyecolor.input.pixelPerfectOver = true;
            dyecolor.input.pixelPerfectClick = true;
            dyecolor.input.pixelPerfectAlpha = 10;
            dyecolor.events.onInputOver.add(overcontrol, this);
            dyecolor.events.onInputOut.add(outControl, this);
            //dyecolor.events.onInputUp.add(downcontrol,this);
            dyecolor.events.onInputDown.add(downcontroldye, this);
            hairdye.add(dyecolor);
        }
        hairdyegroup.add(hairdye);
        hairdyegroup.add(dyeani);
        hairdyegroup.add(dragObjects1);
        hairdyegroup.visible = false;

        function downcontroldye(ev) {
            playsoundeffects('clickss');
            if (selectObjects1 != ev.idess) {
                //ev.y=objectArrd[ev.idess][1]-25;
                if (selectObjects1 != 0) {
                    game.add.tween(hairdye.children[selectObjects1 - 1]).to({
                        y: objectArrd[selectObjects1][1]
                    }, 500, Phaser.Easing.Cubic.Out, 1);
                }
                selectObjects1 = ev.idess;
                for (i = 0; i < hairdye.children.length; i++) {
                    hairdye.children[i].x = objectArrd[i + 1][0];
                    hairdye.children[i].y = objectArrd[i + 1][1];
                    hairdye.children[i].angle = 0;
                }
                game.add.tween(hairdye.children[selectObjects1 - 1]).to({
                    y: objectArrd[selectObjects1][1] - 5
                }, 500, Phaser.Easing.Cubic.Out, 1);
                //hairdye.children[selectObjects1-1].y=objectArrd[selectObjects1][1]-25;
                dragObjects1.frame = selectObjects1 - 1;
                dragObjects1.visible = true;
                dragObjects1.x = ev.x;
                dragObjects1.y = ev.y;
                game.input.addMoveCallback(dragselectobject1, this);
                //outFunsscakks ();



            }
        }

        function dragselectobject1(pointer, x, y) {
            if (states == 3) {
                dragObjects1.x = pointer.x;
                dragObjects1.y = pointer.y;
            } else {
                dragObjects1.visible = false;
                game.input.deleteMoveCallback(dragselectobject1, this);
            }
        }
        object_pan = game.add.sprite(251.75, 385.2, 'object_pan2');
        object_pan.anchor.setTo(0.5);
        hairdrssgroup.add(object_pan);
        spray1 = game.add.sprite(37.6, 316.5, 'spray1');
        spray1.anchor.setTo(0.5);
        spryanimations = game.add.sprite(25, 25, 'spryanimations');
        spryanimations.anchor.setTo(0.5);
        spryanimations.visible = false;
        spryanimations.animations.add("dsdd", [0, 1, 2]);
        spryanimations.animations.play("dsdd", 24, true);

        hairgliter = game.add.sprite(251.3, 379, 'hairgliter');
        hairgliter.anchor.setTo(0.5);
        hairgliter.visible = false;
        hairgliter.animations.add("dsdd");
        hairgliter.animations.play("dsdd", 24, true);

        dressgliter = game.add.sprite(258.25, 635.35, 'dressgliter');
        dressgliter.anchor.setTo(0.5);
        dressgliter.visible = false;
        dressgliter.animations.add("dsdd");
        dressgliter.animations.play("dsdd", 24, false);

        mouthgliter = game.add.sprite(258.5, 542.6, 'mouthgliter');
        mouthgliter.anchor.setTo(0.5);
        mouthgliter.visible = false;
        mouthgliter.animations.add("dsdd");
        mouthgliter.animations.play("dsdd", 24, false);

        glassgliter = game.add.sprite(259.4, 454.85, 'glassgliter');
        glassgliter.anchor.setTo(0.5);
        glassgliter.visible = false;
        glassgliter.animations.add("dsdd");
        glassgliter.animations.play("dsdd", 24, false);

        sprygunss = game.add.sprite(37.6, 316.5, 'sprygunss');
        sprygunss.anchor.setTo(0.5);
        sprygunss.visible = false;
        spray1.inputEnabled = true;
        spray1.input.useHandCursor = true;
        spray1.input.pixelPerfectOver = true;
        spray1.input.pixelPerfectClick = true;
        spray1.input.pixelPerfectAlpha = 10;
        spray1.events.onInputOver.add(mouthover1, this);
        spray1.events.onInputOut.add(mouthout, this);
        spray1.events.onInputUp.add(moustUps, this);
        spray1.events.onInputDown.add(spraydowns, this);

        function spraydowns() {
            playsoundeffects('clickss');
            game.input.addMoveCallback(dragselectobjectss, this);
            sprygunss.x = game.input.x;
            sprygunss.y = game.input.y + 30;
            sprygunss.visible = true;
            sprayides = 1;
        }

        function dragselectobjectss(pointer, x, y) {
            if (states == 4) {
                sprygunss.x = pointer.x;
                sprygunss.y = pointer.y + 30;
            } else {
                game.input.deleteMoveCallback(dragselectobjectss, this);
                sprygunss.visible = false;
            }
        }
        mouth = game.add.sprite(445.9, 186.65, 'mouth');
        mouth.anchor.setTo(0.5);
        mouth.inputEnabled = true;
        mouth.input.useHandCursor = true;
        mouth.input.pixelPerfectOver = true;
        mouth.input.pixelPerfectClick = true;
        mouth.input.pixelPerfectAlpha = 10;
        mouth.events.onInputOver.add(mouthover, this);
        mouth.events.onInputOut.add(mouthout, this);
        mouth.events.onInputUp.add(moustUps, this);
        mouth.events.onInputDown.add(moustDowns, this);

        function mouthover(ev) {
            ev.scale.setTo(1.1);
            sprygunss.visible = false;
            sprayides = 0;
        }

        function mouthover1(ev) {
            ev.scale.setTo(1.1);
        }

        function mouthout(ev) {
            ev.scale.setTo(1);
        }

        function moustDowns(ev) {
            playsoundeffects('clickss');
            ev.scale.setTo(0.9);
            if (minion_mouth.frame < 5) {
                minion_mouth.frame += 1;
            } else {
                minion_mouth.frame = 0;
            }
            sprayides = 2;
            sprygunss.visible = false;
            mouthgliter.visible = true;
            mouthgliter.animations.play("dsdd", 24, false).onComplete.add(falsevis, this);
        }

        function glassDowns(ev) {
            playsoundeffects('clickss');
            ev.scale.setTo(0.9);
            if (eyeblink1.visible) {
                eyeblink1.visible = false;
                eyeblink2.visible = true;
            } else if (eyeblink2.visible) {
                eyeblink2.visible = false;
                eyeblink3.visible = true;
            } else if (eyeblink3.visible) {
                eyeblink3.visible = false;
                eyeblink4.visible = true;
            } else if (eyeblink4.visible) {
                eyeblink4.visible = false;
                eyeblink5.visible = true;
            } else if (eyeblink5.visible) {
                eyeblink5.visible = false;
                eyeblink6.visible = true;
            } else if (eyeblink6.visible) {
                eyeblink6.visible = false;
                eyeblink1.visible = true;
            }
            sprayides = 4;
            sprygunss.visible = false;
            glassgliter.visible = true;
            glassgliter.animations.play("dsdd", 24, false).onComplete.add(falsevis, this);

        }

        function dressDowns(ev) {
            playsoundeffects('clickss');
            ev.scale.setTo(0.9);
            if (minion_dress.frame < 5) {
                minion_dress.frame += 1;
            } else {
                minion_dress.frame = 0;
            }
            sprayides = 3;
            sprygunss.visible = false;
            dressgliter.visible = true;
            dressgliter.animations.play("dsdd", 24, false).onComplete.add(falsevis, this);
        }

        function falsevis(ev) {
            ev.visible = false;
        }

        function moustUps(ev) {
            ev.scale.setTo(1);
        }
        glasses = game.add.sprite(438.45, 325, 'glasses');
        glasses.anchor.setTo(0.5);
        glasses.inputEnabled = true;
        glasses.input.useHandCursor = true;
        glasses.input.pixelPerfectOver = true;
        glasses.input.pixelPerfectClick = true;
        glasses.input.pixelPerfectAlpha = 10;
        glasses.events.onInputOver.add(mouthover, this);
        glasses.events.onInputOut.add(mouthout, this);
        glasses.events.onInputUp.add(moustUps, this);
        glasses.events.onInputDown.add(glassDowns, this);
        dresses = game.add.sprite(450.3, 486.75, 'dresses');
        dresses.anchor.setTo(0.5);
        dresses.inputEnabled = true;
        dresses.input.useHandCursor = true;
        dresses.input.pixelPerfectOver = true;
        dresses.input.pixelPerfectClick = true;
        dresses.input.pixelPerfectAlpha = 10;
        dresses.events.onInputOver.add(mouthover, this);
        dresses.events.onInputOut.add(mouthout, this);
        dresses.events.onInputUp.add(moustUps, this);
        dresses.events.onInputDown.add(dressDowns, this);
        hairdrssgroup.add(spryanimations);
        hairdrssgroup.add(spray1);
        hairdrssgroup.add(mouth);
        hairdrssgroup.add(glasses);
        hairdrssgroup.add(dresses);
        hairdrssgroup.add(sprygunss);

        playbutton = game.add.sprite(445.75, 894.85, 'next_button');
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
        playbutton.x = 58.2;
        playbutton.y = 896.9;
        moregameButton.x = 445.75;
        moregameButton.y = 894.85;
        back_button = game.add.sprite(58.2, 776.9, 'back_button');
        back_button.anchor.setTo(0.5);
        back_button.inputEnabled = true;
        back_button.input.useHandCursor = true;
        back_button.input.pixelPerfectOver = true;
        back_button.input.pixelPerfectClick = true;
        back_button.input.pixelPerfectAlpha = 10;
        back_button.events.onInputOver.add(overplays, this);
        back_button.events.onInputOut.add(outplays, this);
        back_button.events.onInputUp.add(downlogos, this);
        back_button.events.onInputDown.add(downpmore, this);
        if (states == 2) {
            back_button.visible = false;
        }
        game.add.tween(moregameButton).to({
            y: 744.85,
        }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
        game.add.tween(playbutton).to({
            y: 744.85,
        }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
        uiproperty();
        reversepanels();
    },
    update: function() {
        for (i = 0; i < falhairarr.length; i++) {
            //console.log('sdd')
            falhairarr[i].x -= falhairarr[i].dxtx;
            falhairarr[i].y -= falhairarr[i].dxty;
            falhairarr[i].dxty -= 0.1;
            //falhairarr[i].y+=0.5;
            if (falhairarr[i].y > 800) {
                falhairarr[i].destroy();
                falhairarr.splice(i, 1);
            }
        }
        if (selectObjects == 6 && mouseDounsss) {
            for (i = 0; i < hairsetArr.length; i++) {
                if (hairsetArr[i].overss || circleIntersection(hairsetArr[i].x, hairsetArr[i].y, 5, game.input.x, game.input.y, 5)) {
                    hairsetArr[i].flo = 1;
                    if (hairsetArr[i].scale.y < 1.2) {
                        hairsetArr[i].scale.y += 0.1;
                    }
                } else {
                    hairsetArr[i].flo = 0;
                }
            }
        }
        if (selectObjects == 1 && mouseDounsss) {
            airAni.visible = true;
            airAni.x = game.input.x - 6;
            airAni.y = game.input.y + 7;
        } else {
            airAni.visible = false;
        }
        if (selectObjects1 != 0 && mouseDounsss) {
            dyeani.visible = true;
            dyeani.x = game.input.x - 6;
            dyeani.y = game.input.y + 7;
        } else {
            dyeani.visible = false;
        }
        if (selectObjects == 6 && mouseDounsss) {
            ollsprayani.visible = true;
            ollsprayani.x = game.input.x - 180;
            ollsprayani.y = game.input.y - 125;
        } else {
            ollsprayani.visible = false;
        }
        if (sprayides == 1 && mouseDounsss && states == 4) {
            spryanimations.visible = true;
            spryanimations.x = game.input.x - 20;
            spryanimations.y = game.input.y - 15;

            if (chekgdsdfd()) {
                hairgliter.visible = true;
            } else {
                hairgliter.visible = false;
            }
        } else {
            spryanimations.visible = false;
            hairgliter.visible = false;
        }
        if (dites == 3) {
            for (i = 0; i < hairsetArr.length; i++) {
                if (hairsetArr[i].flo == 1) {
                    hairsetArr[i].scale.x *= -1;
                }
            }
            dites = 0
        }
        dites++;
    }
}

function chekgdsdfd() {
    for (i = 0; i < hairsetArr.length; i++) {
        //console.log(hairsetArr[i])
        if (checkOverlap(hairsetArr[i], spryanimations)) {
            return true;
        }
    }
    return false
}

function disshowfuns() {
    for (i = 1; i < 7; i++) {
        if (i < 4) {
            objarrsdsd[i].x *= -1;
            game.add.tween(objarrsdsd[i]).to({
                x: objarrsdsd[i].x * -1
            }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
        } else {
            objarrsdsd[i].x += 200;
            game.add.tween(objarrsdsd[i]).to({
                x: objarrsdsd[i].x - 200
            }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
        }
    }
}

function movedyefuns() {
    for (i = 0; i < 4; i++) {
        hairdye.children[i].x -= 110;
        game.add.tween(hairdye.children[i]).to({
            x: hairdye.children[i].x + 110
        }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
    }
    for (i = 4; i < 8; i++) {
        hairdye.children[i].x -= 110;
        game.add.tween(hairdye.children[i]).to({
            x: hairdye.children[i].x + 110
        }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
    }
    for (i = 8; i < 12; i++) {
        hairdye.children[i].x -= 110;
        game.add.tween(hairdye.children[i]).to({
            x: hairdye.children[i].x + 110
        }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
    }
    for (i = 12; i < 16; i++) {
        hairdye.children[i].x += 110;
        game.add.tween(hairdye.children[i]).to({
            x: hairdye.children[i].x - 110
        }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
    }
    for (i = 16; i < 20; i++) {
        hairdye.children[i].x += 110;
        game.add.tween(hairdye.children[i]).to({
            x: hairdye.children[i].x - 110
        }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
    }
    for (i = 20; i < 24; i++) {
        hairdye.children[i].x += 110;
        game.add.tween(hairdye.children[i]).to({
            x: hairdye.children[i].x - 110
        }, 1500, Phaser.Easing.Bounce.Out, 1, 1000);
    }
}

function tweendreessfuns() {
    if (firsttoolshow1 == 1) {
        firsttoolshow1 = 2;
        spray1.x -= 200;
        glasses.x += 200;
        dresses.x += 200;
        mouth.x += 200;
        game.add.tween(spray1).to({
            x: spray1.x + 200
        }, 1200, Phaser.Easing.Bounce.Out, 1, 1200);
        game.add.tween(glasses).to({
            x: glasses.x - 200
        }, 1200, Phaser.Easing.Bounce.Out, 1, 1200);
        game.add.tween(dresses).to({
            x: dresses.x - 200
        }, 1200, Phaser.Easing.Bounce.Out, 1, 1200);
        game.add.tween(mouth).to({
            x: glasses.x - 200
        }, 1200, Phaser.Easing.Bounce.Out, 1, 1200);
    }
}

function circleIntersection(x1, y1, r1, x2, y2, r2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    var len = Math.sqrt(dx * dx + dy * dy);

    if (len < r1 + r2) {
        // Circles intersect
        return true;
    }
    return false;
}

function bakfunss() {
    //	homeBg=this.game.add.sprite(252,400,'transission');
    //    homeBg.anchor.setTo(0.5);
    //	homeBg.scale.setTo(1.02);
    //	homeBg.inputEnabled=true;
    //    homeBg.y=-400;	
    //	game.add.tween(homeBg).to({y:400},2000,Phaser.Easing.Bounce.Out,1).onComplete.add(showbakfuns,this);
    showbakfuns()
}

function saveclickFun() {
    playsoundeffects('clickss');
    playbutton.visible = false;
    back_button.visible = false;
    moregameButton.visible = false;
    thumbframe.visible = false;
    this.thumbVar.visible = false;
    setTimeout(truefunsssd, 50);
    game.capture = game.plugins.add(Phaser.Plugin.Capture);
    game.capture.screenshot(function(dataUrl) {
        var data = new Image();
        data.src = dataUrl;
        game.cache.addImage('image-data', dataUrl, data);
        var canvasImageSaver = new CanvasImageSaver(
            game.canvas, {
                xCropOffset: 0,
                yCropOffset: 0,
                width: 800,
                height: game.height,
            },
            function(canvas, fileName) {
                //console.log(canvas,fileName);   
            },
            function(error) {
                // Error callback 
            }, this);
        exportCanvasAsPNG(canvas, 'Minion-Real-Haircuts', dataUrl);
    });
}

function truefunsssd() {
    playbutton.visible = true;
    back_button.visible = true;
    moregameButton.visible = true;
    thumbframe.visible = true;
    this.thumbVar.visible = true;
}

function checkOverlap(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    return Phaser.Rectangle.intersects(boundsA, boundsB);
}

function showbakfuns() {
    if (states == 3) {
        states = 2;
        haircutgroup.visible = true;
        hairdyegroup.visible = false;
        backgroun.inputEnabled = true;
        backgroun.events.onInputUp.add(actperfect, this);
        backgroun.events.onInputDown.add(deactperfect, this);
    } else if (states == 4) {
        states = 3;
        hairdyegroup.visible = true;
        hairdrssgroup.visible = false;
        backgroun.inputEnabled = true;
        backgroun.events.onInputUp.add(actperfect, this);
        backgroun.events.onInputDown.add(deactperfect, this);
    }
    selectObjects = 0;
    selectObjects1 = 0;
    mouseDounsss = false;
    mouseoversss = false;
    dites = 0;


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
        }, 1500, Phaser.Easing.Bounce.Out, 1, 2500);
        game.add.tween(playbutton).to({
            y: 744.85,
        }, 1500, Phaser.Easing.Bounce.Out, 1, 2500);
        game.add.tween(back_button).to({
            y: 622.65,
        }, 1500, Phaser.Easing.Bounce.Out, 1, 1500);
    }

    //setTimeout(nextLevelFun1titlereverse,1000);
}

function nextLevelFun1titlereverse() {
    //	if(states==3)
    //		{
    //			movedyefuns ();
    //		}
    //	else if(states==2)
    //		{
    //			disshowfuns ();
    //		}
    reversepanels1();
    // console.log(states)
}

function actperfect() {
    mouseDounsss = false;
    for (i = 0; i < hairsetArr.length; i++) {
        hairsetArr[i].flo = 0;
    }
}

function deactperfect(ev) {
    mouseDounsss = true;
    if (states == 3 && mouseDounsss && selectObjects1 > 0) {
        ev.flo = 1;
        if (ev.frame > 24) {
            ev.frame = selectObjects1 + 25;
        } else {
            ev.frame = selectObjects1;
        }
    }
}