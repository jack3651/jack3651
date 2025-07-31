! function() {
    
    var ADS_ENABLED = !1,
        ADS_DELAY = 30,
        ADS_ON_FIRST_PLAY = !0,
        ADS_MOBILE_WIDTH = 480,
        ADS_MOBILE_HEIGHT = 800,
        gradle_onAdStarted = function() {},
        gradle_onAdFinished = function() {};

    function gradle_init() {
        console.log('sdk_init');
    }

    function gradle_playVideoAd() {
        console.log('sdk_playVideoAd');
    }

    function gradle_disableInput() {
        console.log('sdk_disableInput');
    }

    function gradle_enableInput() {
        console.log('sdk_enableInput');
    }

    function gradle_pauseMusic() {
        game.sound.mute = !0
    }

    function gradle_resumeMusic() {
        game.sound.mute = !1
    }

    function getJsonFromUrl() {
        for (var a = {}, b = location.search.substr(1).split("&"), d = 0; d < b.length; d++) {
            var c = b[d].indexOf("="),
                c = [b[d].substring(0, c), b[d].substring(c + 1)];
            a[c[0]] = decodeURIComponent(c[1])
        }
        return a
    };
    var GameData = function() {};
    GameData.BuildTitle = "Gradle Checkers V2";
    GameData.BuildTitle_ru = "";
    GameData.BuildVersion = "2.0.3";
    GameData.BuildString = "05.10.2022";
    GameData.Copyright = "Gradle gradlecode@outlook.com";
    //console.info("%c %c   " + GameData.Copyright + " | " + GameData.BuildTitle + " " + GameData.BuildVersion + " | " + GameData.BuildString + "  %c ", "background:#353AFB", "background:#000080;color:#fff", "background:#353AFB");
    var SOUNDS_ENABLED = !0,
        RUNNING_ON_WP = -1 < navigator.userAgent.indexOf("Windows Phone");
    RUNNING_ON_WP && (SOUNDS_ENABLED = !1);
    var RUNNING_ON_IOS = !1,
        userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) RUNNING_ON_IOS = !0;
    window.globals = {
        versions: {
            operator: 0,
            appStore: 1,
            HTML: 2
        },
        version: 2,
        orientations: {
            portrait: 0,
            landscape: 1
        },
        orientation: 0,
        gameVersions: ["1.0.0", "1.0.0", "1.0.1"],
        resolution: "480x800",
        resolutions: [{
            w: 480,
            h: 800,
            folder: "480x800"
        }],
        GAME_OVER_BY_USER: 0,
        GAME_OVER_WIN: 1,
        GAME_OVER_LOSE: 2,
        onGameStart: function() {},
        onGameOver: function(a) {},
        enviroments: {
            test: 0,
            deploy: 1
        },
        enviroment: 1,
        screen: -1,
        inGameListener: !1,
        inMenuListener: !1,
        managers: {},
        storage: {
            name: "inl_chckrs",
            data: {
                tutorial: "",
                board: null,
                lastGameAi: null,
                lastPlayer: null,
                historyMoves: null,
                removedCheckers: null,
                historyBoardOfValues: null,
                captureBackwards: null,
                capture: null,
                king: null,
                kingPriority: null,
                language: null,
                playAs: null,
                stonesSkin: null,
                boardSkin: null,
                highlight: null,
                music: !0,
                sounds: !0
            }
        },
        fonts: {
            big: "40px saira_medium",
            main: "30px saira_medium",
            small: "20px saira_medium"
        },
        preloader: {
            logoFadeTime: 500,
            splashTime: 1500
        },
        game: {
            self: null
        },
        times: {
            TOP_CHECKERS_TWEEN_TIME: 300,
            TUTORIAL_HAND_TIME: 1E3,
            MUSIC_FADE: 1250
        },
        particleAmount: 15,
        timers: [],
        createTimer: function(a, b) {
            var d =
                this.phaser.time.create();
            d.add(a, b, this);
            globals.timers.push(d);
            d.start()
        },
        setPauseState: function(a) {
            for (var b = this.timers, d = 0; d < b.length; d++) b[d].expired || (a ? b[d].pause() : b[d].resume());
            b = this.phaser.tweens.getAll();
            for (d = 0; d < b.length; d++) a ? b[d].pause() : b[d].resume()
        },
        playboard: null,
        customBoard: [
            [, , , , , 10, , 2],
            [2, , 2, , , , 2],
            [, , , , , 2, , 2],
            [2, , , , 10, , 2],
            [, , , , , , , 1],
            [, , 2, , , , , ],
            [, , , , , , , 20],
            [1, , , , , , , ]
        ],
        musicPlaying: null,
        boardForGraph: null,
        createBoardForGraph: function() {
            for (var a = [
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        []
                    ], b =
                    0, d = 0; 8 > d; d++)
                for (var c = 0; 8 > c; c++) a[d][c] = b, b++;
            this.boardForGraph = a
        },
        cornerPos: "1 3 5 7 8 24 40 56 58 60 63 62 55 39 23".split(" "),
        getRowAndColFromGraph: function(a) {
            return [Math.floor(a / 8), a % 8]
        },
        getBetweenGraphBoard: function(a, b) {
            return (Number(a) + Number(b)) / 2
        },
        getSidePossitionsFromGraph: function(a) {
            if (this.isFloat(a)) return [];
            a = this.getRowAndColFromGraph(a);
            return [this.boardForGraph[a[0] + 1][a[1] + 1], this.boardForGraph[a[0] - 1][a[1] - 1], this.boardForGraph[a[0] + 1][a[1] - 1], this.boardForGraph[a[0] - 1][a[1] +
                1
            ]]
        },
        createHelper2DBoard: function() {
            for (var a = [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ], b = !1, d = 0; 8 > d; d++)
                for (var b = b ? !1 : !0, c = 0; 8 > c; c++) a[d][c] = b ? 0 === c % 2 ? 0 : 1 : 0 === c % 2 ? 1 : 0;
            this.playboard = a
        },
        simpleOverjump: function(a, b) {
            a = this.getRowAndColFromGraph(a);
            var d = !1,
                c = !1,
                e = !1,
                f = !1;
            7 >= a[0] + 2 && 7 >= a[1] + 2 && (d = this.boardForGraph[a[0] + 2][a[1] + 2] == b);
            0 <= a[0] - 2 && 7 >= a[1] + 2 && (c = this.boardForGraph[a[0] - 2][a[1] - 2] == b);
            7 >= a[0] + 2 && 0 <= a[1] - 2 && (e = this.boardForGraph[a[0] + 2][a[1] - 2] == b);
            0 <= a[0] - 2 && 0 <= a[1] - 2 && (f = this.boardForGraph[a[0] - 2][a[1] +
                2
            ] == b);
            return d || c || e || f
        },
        rules: {
            captureBackwards: !1,
            capture: 0,
            king: 2,
            kingPriority: !0,
            aiLevel: 0
        },
        setRules1: function(a) {
            this.rules.captureBackwards = a
        },
        setRules2: function(a) {
            this.rules.capture = a
        },
        setRules3: function(a) {
            this.rules.king = a
        },
        setRules4: function(a) {
            this.rules.kingPriority = a
        },
        settings: {
            language: 0,
            playAs: 0,
            stonesSkin: 0,
            boardSkin: 0,
            highlight: !0,
            music: !0,
            sounds: !0
        },
        setStonesSkin: function(a) {
            this.settings.stonesSkin = a
        },
        setBoardSkin: function(a) {
            this.settings.boardSkin = a
        },
        setHighlight: function(a) {
            this.settings.highlight =
                a
        },
        setMusic: function(a) {
            this.settings.music = a
        },
        setSounds: function(a) {
            this.settings.sounds = a
        },
        ai: {
            level: 0
        },
        resourcesBig: {
            image: [
                ["background", "images/background.png"],
                ["game_bg", "images/game_bg.png"],
                ["overlay", "images/overlay.png"],
                ["bg_square_off", "images/bg_square_off.png"],
                ["bg_square_on", "images/bg_square_on.png"],
                ["board1_n", "images/board1_n.png"],
                ["board1",
                    "images/board1.png"
                ],
                ["board2_n", "images/board2_n.png"],
                ["board2", "images/board2.png"],
                ["board3_n", "images/board3_n.png"],
                ["board3", "images/board3.png"],
                ["board4_n", "images/board4_n.png"],
                ["board4", "images/board4.png"],
                ["board5_n", "images/board5_n.png"],
                ["board5", "images/board5.png"],
                ["bt_arrow_l",
                    "images/bt_arrow_l.png"
                ],
                ["bt_arrow_r", "images/bt_arrow_r.png"],
                ["bt_back", "images/bt_back.png"],
                ["bt_ingame_menu", "images/bt_ingame_menu.png"],
                ["bt_instruction_off", "images/bt_instruction_off.png"],
                ["bt_instruction_on", "images/bt_instruction_on.png"],
                ["bt_menu", "images/bt_menu.png"],
                ["bt_menu2", "images/bt_menu2.png"],
                ["bt_restart", "images/bt_restart.png"],
                ["bt_restart2", "images/bt_restart2.png"],
                ["bt_setting", "images/bt_setting.png"],
                ["bt_short_off", "images/bt_short_off.png"],
                ["bt_short_on", "images/bt_short_on.png"],
                ["bt_shutdown", "images/bt_shutdown.png"],
                ["bt_undo", "images/bt_undo.png"],
                ["bt_undo2", "images/bt_undo2.png"],
                ["hand",
                    "images/hand.png"
                ],
                ["on_off1", "images/on_off1.png"],
                ["on_off2", "images/on_off2.png"],
                ["PLAY_bt", "images/PLAY_bt.png"],
                ["PLAY_new", "images/PLAY_new.png"],
                ["players_icon", "images/players_icon.png"],
                ["splash", "images/splash.png"],
                ["X-ko", "images/X-ko.png"],
                ["language_bg_full", "images/language_bg.png"],
                ["st1", "images/st1.png"],
                ["st2", "images/st2.png"],
                ["st3", "images/st3.png"],
                ["st4", "images/st4.png"],
                ["st5", "images/st5.png"],
                ["stone1a", "images/stone1a.png"],
                ["stone1b", "images/stone1b.png"],
                ["stone2a", "images/stone2a.png"],
                ["stone2b", "images/stone2b.png"],
                ["stone3a", "images/stone3a.png"],
                ["stone3b", "images/stone3b.png"],
                ["stone4a", "images/stone4a.png"],
                ["stone4b", "images/stone4b.png"],
                ["stone5a", "images/stone5a.png"],
                ["stone5b", "images/stone5b.png"],
                ["LOSE", "images/LOSE.png"],
                ["WIN", "images/WIN.png"],
                ["white", "images/white.png"],
                ["DRAW", "images/DRAW.png"],
                ["DRAW2", "images/DRAW2.png"],
                ["eclipse", "images/eclipse.png"],
                ["shine", "images/shine.png"],
                ["flag1", "images/flag1.png"],
                ["flag2", "images/flag2.png"],
                ["flag3", "images/flag3.png"],
                ["flag4", "images/flag4.png"],
                ["flag5", "images/flag5.png"],
                ["flag6", "images/flag6.png"],
                ["result_bg", "images/result_components/bg.png"],
                ["result_blue",
                    "images/result_components/blue.png"
                ],
                ["result_draw", "images/result_components/draw.png"],
                ["result_green", "images/result_components/green.png"],
                ["result_lose", "images/result_components/lose.png"],
                ["result_red", "images/result_components/red.png"],
                ["result_win", "images/result_components/win.png"]
            ],
            spritesheet: [
                ["dialog_bg", "images/dialog_bg.png",
                    620, 69
                ],
                ["language_bg", "images/language_bg.png", 42, 126],
                ["icons", "images/icons.png", 37, 37],
                ["selector", "images/selector.png", 74, 74],
                ["stone1", "images/stone1.png", 74, 74],
                ["stone2", "images/stone2.png", 74, 74],
                ["stone3", "images/stone3.png", 74, 74],
                ["stone4", "images/stone4.png", 74, 74],
                ["stone5", "images/stone5.png",
                    74, 74
                ],
                ["language", "images/langs.png", 90, 0]
            ]
        },
        resourcesSmall: {
            image: [
                ["background", "images/background.png"],
                ["game_bg", "images/game_bg.png"],
                ["bg_square_off", "images/bg_square_off.png"],
                ["bg_square_on", "images/bg_square_on.png"],
                ["board1_n", "images/board1_n.png"],
                ["board1", "images/board1.png"],
                ["board2_n", "images/board2_n.png"],
                ["board2", "images/board2.png"],
                ["board3_n", "images/board3_n.png"],
                ["board3", "images/board3.png"],
                ["board4_n", "images/board4_n.png"],
                ["board4", "images/board4.png"],
                ["board5_n", "images/board5_n.png"],
                ["board5", "images/board5.png"],
                ["bt_arrow_l", "images/bt_arrow_l.png"],
                ["bt_arrow_r", "images/bt_arrow_r.png"],
                ["bt_back", "images/bt_back.png"],
                ["bt_ingame_menu", "images/bt_ingame_menu.png"],
                ["bt_instruction_off", "images/bt_instruction_off.png"],
                ["bt_instruction_on", "images/bt_instruction_on.png"],
                ["bt_menu", "images/bt_menu.png"],
                ["bt_menu2", "images/bt_menu2.png"],
                ["bt_restart", "images/bt_restart.png"],
                ["bt_restart2", "images/bt_restart2.png"],
                ["bt_setting", "images/bt_setting.png"],
                ["bt_short_off", "images/bt_short_off.png"],
                ["bt_short_on", "images/bt_short_on.png"],
                ["bt_shutdown", "images/bt_shutdown.png"],
                ["bt_undo", "images/bt_undo.png"],
                ["bt_undo2", "images/bt_undo2.png"],
                ["hand", "images/hand.png"],
                ["on_off1", "images/on_off1.png"],
                ["on_off2", "images/on_off2.png"],
                ["PLAY_bt", "images/PLAY_bt.png"],
                ["PLAY_new", "images/PLAY_new.png"],
                ["players_icon", "images/players_icon.png"],
                ["splash", "images/splash.png"],
                ["X-ko", "images/X-ko.png"],
                ["language_bg_full", "images/language_bg.png"],
                ["st1", "images/st1.png"],
                ["st2", "images/st2.png"],
                ["st3", "images/st3.png"],
                ["st4", "images/st4.png"],
                ["st5", "images/st5.png"],
                ["stone1a", "images/stone1a.png"],
                ["stone1b", "images/stone1b.png"],
                ["stone2a", "images/stone2a.png"],
                ["stone2b", "images/stone2b.png"],
                ["stone3a", "images/stone3a.png"],
                ["stone3b", "images/stone3b.png"],
                ["stone4a", "images/stone4a.png"],
                ["stone4b", "images/stone4b.png"],
                ["stone5a", "images/stone5a.png"],
                ["stone5b", "images/stone5b.png"],
                ["LOSE", "images/LOSE.png"],
                ["WIN", "images/WIN.png"],
                ["white", "images/white.png"],
                ["win_particle_star1", "images/win_particle_star1.png"],
                ["DRAW", "images/DRAW.png"],
                ["DRAW2", "images/DRAW2.png"],
                ["eclipse", "images/eclipse.png"],
                ["shine", "images/shine.png"],
                ["flag1", "images/flag1.png"],
                ["flag2", "images/flag2.png"],
                ["flag3", "images/flag3.png"],
                ["flag4", "images/flag4.png"],
                ["flag5", "images/flag5.png"],
                ["flag6", "images/flag6.png"],
                ["trans", "images/trans.png"]
            ],
            spritesheet: [
                ["dialog_bg", "images/dialog_bg.png", 433, 50],
                ["language_bg", "images/language_bg.png", 30, 90],
                ["icons", "images/icons.png",
                    25, 25
                ],
                ["selector", "images/selector.png", 51, 51],
                ["stone1", "images/stone1.png", 51, 51],
                ["stone2", "images/stone2.png", 51, 51],
                ["stone3", "images/stone3.png", 51, 51],
                ["stone4", "images/stone4.png", 51, 51],
                ["stone5", "images/stone5.png", 51, 51],
                ["language", "images/download.png", 60, 0]
            ]
        },
        audio: {
            hudba2: {
                path: "audio/hudba2",
                volume: 1,
                loop: !0,
                type: "music"
            },
            jingle_dama: {
                path: "audio/jingle dama",
                volume: 1,
                loop: !1,
                type: "audio"
            },
            click: {
                path: "audio/click",
                volume: 1,
                loop: !1,
                type: "audio"
            },
            figurina_tapnutie: {
                path: "audio/figurina_tapnutie",
                volume: 1,
                loop: !1,
                type: "audio"
            },
            menu_swoosh: {
                path: "audio/menu_swoosh ",
                volume: 1,
                loop: !1,
                type: "audio"
            },
            odkotulanie: {
                path: "audio/odkotulanie",
                volume: 1,
                loop: !1,
                type: "audio"
            },
            response_negative: {
                path: "audio/response_negative",
                volume: 1,
                loop: !1,
                type: "audio"
            },
            result_lose: {
                path: "audio/result_lose",
                volume: 1,
                loop: !1,
                type: "audio"
            },
            result_neutral: {
                path: "audio/result_neutral",
                volume: 1,
                loop: !1,
                type: "audio"
            },
            result_win: {
                path: "audio/result_win",
                volume: 1,
                loop: !1,
                type: "audio"
            },
            suchnutie1: {
                path: "audio/suchnutie1",
                volume: 1,
                loop: !1,
                type: "audio"
            },
            suchnutie2: {
                path: "audio/suchnutie2",
                volume: 1,
                loop: !1,
                type: "audio"
            }
        },
        addBackground: function(a) {
            a = this.phaser.add.image(this.phaser.world.centerX, this.phaser.world.centerY, a);
            a.anchor.setTo(.5);
            var b = Math.max(this.phaser.width - a.width,
                this.phaser.height - a.height);
            0 < b && (a.width += b, a.height += b)
        },
        getBoardSprite: function() {
            if (0 == this.settings.boardSkin) return "board1";
            if (1 == this.settings.boardSkin) return "board2";
            if (2 == this.settings.boardSkin) return "board3";
            if (3 == this.settings.boardSkin) return "board4";
            if (4 == this.settings.boardSkin) return "board5"
        },
        getStonesSprites: function() {
            if (0 == this.settings.stonesSkin) return "stone1";
            if (1 == this.settings.stonesSkin) return "stone2";
            if (2 == this.settings.stonesSkin) return "stone3";
            if (3 == this.settings.stonesSkin) return "stone4";
            if (4 == this.settings.stonesSkin) return "stone5"
        },
        getStonesSpritesToSettings: function() {
            if (0 == this.settings.stonesSkin) return ["st1", "stone1a", "stone1b"];
            if (1 == this.settings.stonesSkin) return ["st2", "stone2a", "stone2b"];
            if (2 == this.settings.stonesSkin) return ["st3", "stone3a", "stone3b"];
            if (3 == this.settings.stonesSkin) return ["st4", "stone4a", "stone4b"];
            if (4 == this.settings.stonesSkin) return ["st5", "stone5a", "stone5b"]
        },
        getRndInteger: function(a, b) {
            return Math.floor(Math.random() * (b - a + 1)) + a
        },
        getRndIntegerBubles: function(a,
            b, d, c) {
            var e = Math.floor(Math.random() * (b - a + 1)) + a;
            e < c && e > d && this.getRndIntegerBubles(a, b, d, c);
            return e
        },
        calculateDialogSize: function(a, b, d) {
            var c = 0,
                e = [];
            for (e[0] = a + 50;;) {
                e[c] = a + c * d;
                if (e[c] > b - 100) break;
                c++
            }
            return e
        },
        calculatePositions: function(a, b, d, c) {
            b = (b - a) / (c + 1);
            for (var e = [], f = 0; f < c; f++) e[f] = a + b * f + b / 1.5 + d / 2;
            return e
        },
        isInt: function(a) {
            return Number(a) === a && 0 === a % 1
        },
        isFloat: function(a) {
            return Number(a) === a && 0 !== a % 1
        },
        getDiagonal: function(a, b) {
            for (var d = this.getRowAndColFromGraph(a), c = this.getRowAndColFromGraph(b),
                    e = 0; 7 > e; e++) {
                if (8 > d[0] + e && 8 > d[1] + e && this.boardForGraph[d[0] + e][d[1] + e] == this.boardForGraph[c[0]][c[1]] || 0 <= d[0] - e && 0 <= d[1] - e && this.boardForGraph[d[0] - e][d[1] - e] == this.boardForGraph[c[0]][c[1]]) return "1";
                if (0 <= d[0] - e && 8 > d[1] + e && this.boardForGraph[d[0] - e][d[1] + e] == this.boardForGraph[c[0]][c[1]] || 8 > d[0] + e && 0 <= d[1] - e && this.boardForGraph[d[0] + e][d[1] - e] == this.boardForGraph[c[0]][c[1]]) return "2"
            }
            return null
        },
        isSingle: function(a) {
            a = a.split("->");
            var b = this.getRowAndColFromGraph(a[0]);
            return 8 > b[0] + 1 && 8 >
                b[1] + 1 && this.boardForGraph[b[0] + 1][b[1] + 1] == a[1] || 0 <= b[0] - 1 && 0 <= b[1] - 1 && this.boardForGraph[b[0] - 1][b[1] - 1] == a[1] || 8 > b[0] + 1 && 0 <= b[1] - 1 && this.boardForGraph[b[0] + 1][b[1] - 1] == a[1] || 8 <= b[0] - 1 && 8 > b[1] + 1 && this.boardForGraph[b[0] - 1][b[1] + 1] == a[1] ? !0 : !1
        },
        canBeOverjumped: function(a, b, d, c, e) {
            if (2 < e.length) {
                if (8 > a[0] + 1 && 8 > a[1] + 1 && 0 <= a[0] - 1 && 0 <= a[1] - 1 && (null == b[a[0] + 1][a[1] + 1] && null != b[a[0] - 1][a[1] - 1] && b[a[0] - 1][a[1] - 1].getPlayer() != d || null != b[a[0] + 1][a[1] + 1] && null == b[a[0] - 1][a[1] - 1] && b[a[0] + 1][a[1] + 1].getPlayer() !=
                        d) || 8 > a[0] + 1 && 0 <= a[1] - 1 && 0 <= a[0] - 1 && 8 > a[1] + 1 && (null == b[a[0] + 1][a[1] - 1] && null != b[a[0] - 1][a[1] + 1] && b[a[0] - 1][a[1] + 1].getPlayer() != d || null != b[a[0] + 1][a[1] - 1] && null == b[a[0] - 1][a[1] + 1] && b[a[0] + 1][a[1] - 1].getPlayer() != d)) return !0
            } else if ("1" == this.getDiagonal(this.boardForGraph[c[0]][c[1]], this.boardForGraph[a[0]][a[1]]) && 8 > a[0] + 1 && 8 > a[1] + 1 && 0 <= a[0] - 1 && 0 <= a[1] - 1 && (null != b[a[0] + 1][a[1] + 1] && null != b[a[0] - 1][a[1] - 1] && b[a[0] - 1][a[1] - 1].getPlayer() != d && b[a[0] - 1][a[1] - 1].getPlayer() == b[a[0] + 1][a[1] + 1].getPlayer() ||
                    null != b[a[0] + 1][a[1] + 1] && null != b[a[0] - 1][a[1] - 1] && b[a[0] + 1][a[1] + 1].getPlayer() != d && b[a[0] - 1][a[1] - 1].getPlayer() == b[a[0] + 1][a[1] + 1].getPlayer()) || "2" == this.getDiagonal(this.boardForGraph[c[0]][c[1]], this.boardForGraph[a[0]][a[1]]) && 8 > a[0] + 1 && 0 <= a[1] - 1 && 0 <= a[0] - 1 && 8 > a[1] + 1 && (null != b[a[0] + 1][a[1] - 1] && null != b[a[0] - 1][a[1] + 1] && b[a[0] - 1][a[1] + 1].getPlayer() != d && b[a[0] - 1][a[1] + 1].getPlayer() == b[a[0] + 1][a[1] - 1].getPlayer() || null != b[a[0] + 1][a[1] - 1] && null != b[a[0] - 1][a[1] + 1] && b[a[0] + 1][a[1] - 1].getPlayer() !=
                    d && b[a[0] - 1][a[1] + 1].getPlayer() == b[a[0] + 1][a[1] - 1].getPlayer())) return !0;
            for (c = 1; 8 > c; c++)
                if (8 > a[0] + c && 8 > a[1] + c && 0 <= a[0] - c && 0 <= a[1] - c && (null == b[a[0] + 1][a[1] + 1] && null != b[a[0] - c][a[1] - c] && b[a[0] - c][a[1] - c].getPlayer() != d && "king" == b[a[0] - c][a[1] - c].whatAmI() || null != b[a[0] + c][a[1] + c] && null == b[a[0] - 1][a[1] - 1] && b[a[0] + c][a[1] + c].getPlayer() != d && "king" == b[a[0] + c][a[1] + c].whatAmI())) return !0;
            for (c = 1; 8 > c; c++)
                if (8 > a[0] + c && 0 <= a[1] - c && 0 <= a[0] - c && 8 > a[1] + c && (null == b[a[0] - 1][a[1] + 1] && null != b[a[0] + c][a[1] - c] && b[a[0] +
                        c][a[1] - c].getPlayer() != d && "king" == b[a[0] + c][a[1] - c].whatAmI() || null != b[a[0] - c][a[1] + c] && null == b[a[0] + 1][a[1] - 1] && b[a[0] - c][a[1] + c].getPlayer() != d && "king" == b[a[0] - c][a[1] + c].whatAmI())) return !0;
            return !1
        },
        canBeOverjumpedByKing: function(a, b, d) {
            for (var c = 1; 8 > c; c++)
                if (8 > a[0] + c && 8 > a[1] + c && 0 <= a[0] - c && 0 <= a[1] - c && (null == b[a[0] + 1][a[1] + 1] && null != b[a[0] - c][a[1] - c] && b[a[0] - c][a[1] - c].getPlayer() != d && "king" == b[a[0] - c][a[1] - c].whatAmI() || null != b[a[0] + c][a[1] + c] && null == b[a[0] - 1][a[1] - 1] && b[a[0] + c][a[1] + c].getPlayer() !=
                        d && "king" == b[a[0] + c][a[1] + c].whatAmI())) return !0;
            for (c = 1; 8 > c; c++)
                if (8 > a[0] + c && 0 <= a[1] - c && 0 <= a[0] - c && 8 > a[1] + c && (null == b[a[0] - 1][a[1] + 1] && null != b[a[0] + c][a[1] - c] && b[a[0] + c][a[1] - c].getPlayer() != d && "king" == b[a[0] + c][a[1] - c].whatAmI() || null != b[a[0] - c][a[1] + c] && null == b[a[0] + 1][a[1] - 1] && b[a[0] - c][a[1] + c].getPlayer() != d && "king" == b[a[0] - c][a[1] + c].whatAmI())) return !0;
            return !1
        }
    };
    var game;
    phaserInit = function(a) {
        game = new Phaser.Game(globals.resolutions[0].w, globals.resolutions[0].h, Phaser.CANVAS);
        globals.phaser = game;
        globals.managers.storage = new StorageManager(game);
        globals.managers.language = new LanguagesUtil(game);
        globals.managers.audio = new AudioManager(game);
        game.state.add("Boot", BootState, !1);
        game.state.add("Preloader", PreloaderState, !1);
        game.state.add("Game", GameState, !1);
        game.state.add("Menu", MenuState, !1);
        game.state.start("Boot")
    };
    initGame = function() {
        var a;
        if (globals.version == globals.versions.HTML) globals.res = 0, a = globals.resolutions[globals.res];
        else {
            for (var b = 0; b < globals.resolutions.length; b++)
                if (a = globals.resolutions[b], window.innerHeight <= a.h || b == globals.resolutions.length - 1) {
                    globals.screenDims = Utils.ScreenUtils.calculateScreenMetrics(a.w, a.h, globals.orientation);
                    globals.res = b;
                    break
                }
            a = {
                w: globals.screenDims.gameWidth,
                h: globals.screenDims.gameHeight
            }
        }
        phaserInit(a);
        gradle_init()
    };
    globals.version != globals.versions.HTML && window.cordova ? document.addEventListener("deviceready", initGame, !1) : window.onload = initGame;


    Phaser.Plugin.Shake = function(a, b) {
        Phaser.Plugin.call(this, a, b);
        this.offsetY = this.offsetX = 0;
        this.size = 20;
        this.cache = this.amt = 0;
        this.objectToShake = this.game.camera.displayObject
    };
    Phaser.Plugin.Shake.prototype = Object.create(Phaser.Plugin.prototype);
    Phaser.Plugin.Shake.prototype.postUpdate = function() {
        this.cache = this.amt * this.size;
        this.offsetX = (2 * Math.random() - 1) * this.cache | 0;
        this.objectToShake.position.x += this.offsetX;
        this.objectToShake.position.y += this.offsetY;
        this.amt *= .95
    };
    Phaser.Plugin.Shake.prototype.postRender = function() {
        this.objectToShake.position.x -= this.offsetX;
        this.objectToShake.position.y -= this.offsetY
    };
    Phaser.Plugin.Shake.prototype.shake = function(a, b) {
        this.size = a || this.size;
        this.objectToShake = b || this.objectToShake;
        this.amt = 1
    };
    var Utils;
    (function(a) {
        var b = function() {
            return function() {}
        }();
        a.ScreenMetrics = b;
        (function(a) {
            a[a.PORTRAIT = 0] = "PORTRAIT";
            a[a.LANDSCAPE = 1] = "LANDSCAPE"
        })(a.Orientation || (a.Orientation = {}));
        var d = function() {
            function a() {}
            a.calculateScreenMetrics = function(a, c, d, h, k) {
                var l = window.innerWidth,
                    m = window.innerHeight;
                if (l < m && 1 === d || m < l && 0 === d) var n = l,
                    l = m,
                    m = n;
                if ("undefined" === typeof h || "undefined" === typeof k) 1 === d ? (h = Math.round(1420 * a / 1280), k = Math.round(960 * c / 800)) : (h = Math.round(960 * a / 800), k = Math.round(1420 * c / 1280));
                var q =
                    l / m,
                    t = n = 0,
                    r = 0,
                    p = 0;
                q > (1 === d ? 1.6 : .625) ? (p = c, r = 2 * Math.ceil(p * q / 2), r = Math.min(r, h), n = (r - a) / 2, t = 0) : (r = a, p = 2 * Math.ceil(r / q / 2), p = Math.min(p, k), n = 0, t = (p - c) / 2);
                var q = l / r,
                    u = m / p;
                this.screenMetrics = new b;
                this.screenMetrics.windowWidth = l;
                this.screenMetrics.windowHeight = m;
                this.screenMetrics.defaultGameWidth = a;
                this.screenMetrics.defaultGameHeight = c;
                this.screenMetrics.maxGameWidth = h;
                this.screenMetrics.maxGameHeight = k;
                this.screenMetrics.gameWidth = r;
                this.screenMetrics.gameHeight = p;
                this.screenMetrics.scaleX = q;
                this.screenMetrics.scaleY =
                    u;
                this.screenMetrics.offsetX = n;
                this.screenMetrics.offsetY = t;
                this.screenMetrics.orientation = d;
                return this.screenMetrics
            };
            return a
        }();
        a.ScreenUtils = d
    })(Utils || (Utils = {}));
    var LanguagesUtil = function(a) {
        this.game = a
    };
    LanguagesUtil.prototype = {
        load: function() {
            for (var a = "en de es fr it pt ru nl tr no".split(" "), b = a[0], d = this.game.cache.getText("lang_strings"), d = JSON.parse(d).stringresources.strings.string, c = [], e, f = 0; f < d.length; f++) {
                e = d[f].id;
                null == c[e] && (c[e] = []);
                for (var g = 0; g < a.length; g++) c[e][a[g]] = d[f][a[g]]
            }
            globals.managers.language.texts = c;
            this.languages = a;
            this.selectedLanguage = b
        },
        setLanguage: function(a) {
            a = this.languages[a]; - 1 < this.languages.indexOf(a) && (this.selectedLanguage = a)
        },
        get: function(a) {
            a = globals.managers.language.texts[a];
            return void 0 != a ? (a = a[this.selectedLanguage], void 0 == a ? NaN : a) : NaN
        }
    };
    var StorageManager = function() {};
    StorageManager.prototype = {
        save: function() {
            try {
                localStorage.setItem(globals.storage.name, JSON.stringify(globals.storage.data))
            } catch (a) {}
        },
        load: function() {
            try {
                var a = JSON.parse(localStorage.getItem(globals.storage.name));
                null != a && (globals.storage.data = a)
            } catch (b) {}
        }
    };
    var AudioManager = function(a) {
        this.game = a
    };
    AudioManager.prototype = {
        music: [],
        sounds: [],
        actualMusic: null,
        addMusic: function(a, b, d) {
            SOUNDS_ENABLED && (this.music[a] = this.game.add.audio(a, b, d), null == this.actualMusic && (this.actualMusic = a))
        },
        addSound: function(a, b, d) {
            SOUNDS_ENABLED && (this.sounds[a] = this.game.add.audio(a, b, d))
        },
        playMusic: function(a, b) {
            SOUNDS_ENABLED && (a != this.actualMusic || b) && (globals.storage.data.music && (this.stopMusic(), this.music[a].play(), this.music[a].volume = 0, globals.phaser.add.tween(this.music[a]).to({
                    volume: globals.storage.data.music
                }, globals.game.musicFadeTime,
                Phaser.Easing.Exponential.In, !0).start(), globals.musicPlaying = !0), this.actualMusic = a)
        },
        playSound: function(a) {
            SOUNDS_ENABLED && globals.storage.data.sounds && (this.sounds[a].play(), this.sounds[a].volume = globals.storage.data.sounds)
        },
        stopSound: function(a) {
            this.sounds[a].stop()
        },
        setSoundPitch: function(a, b) {
            this.sounds[a]._sound.playbackRate.value = b
        },
        pauseMusic: function() {
            SOUNDS_ENABLED && null != this.actualMusic && globals.storage.data.music && this.music[this.actualMusic].pause()
        },
        resumeMusic: function() {
            SOUNDS_ENABLED &&
                null != this.actualMusic && globals.storage.data.music && this.music[this.actualMusic].resume()
        },
        stopMusic: function() {
            SOUNDS_ENABLED && null != this.actualMusic && (this.music[this.actualMusic].stop(), globals.musicPlaying = !1)
        },
        setMusicVolume: function(a) {
            globals.storage.data.music = a;
            null != this.actualMusic && (this.music[this.actualMusic].volume = a)
        },
        toggleMusic: function() {
            SOUNDS_ENABLED && (globals.storage.data.music = !globals.storage.data.music, globals.storage.data.music && null != this.actualMusic ? this.playMusic(this.actualMusic, !0) : this.stopMusic())
        },
        toggleSounds: function() {
            if (SOUNDS_ENABLED && (globals.storage.data.sounds = !globals.storage.data.sounds, !globals.storage.data.sounds))
                for (var a in this.sounds) this.sounds.hasOwnProperty(a) && this.sounds[a].stop()
        }
    };
    var BootState = function() {};
    BootState.prototype = {
        preload: function() {
            !game.device.desktop && game.device.chrome && game.device.touch && inIframe() && game.input.mouse.stop()
        },
        create: function() {
            this.game.canvas.id = "gameCanvas";
            var a = document.getElementById("gameCanvas");
            a.style.position = "fixed";
            a.style.zIndex = 1;
            this._create()
        },
        _create: function() {
            globals.createHelper2DBoard();
            globals.createBoardForGraph();
            globals.phaser.onPause.add(function() {
                globals.managers.audio.pauseMusic()
            });
            globals.phaser.onResume.add(function() {
                globals.managers.audio.resumeMusic()
            });
            this.game.stage.backgroundColor =
                7303023;
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = !1;
            this.scale.pageAlignHorizontally = !0;
            this.scale.pageAlignVertically = !0;
            if (globals.version == globals.versions.HTML) {
                if (this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL, this.game.canvas.oncontextmenu = function(a) {
                        a.preventDefault()
                    }, window.addEventListener("resize", function() {
                        game.scale.refresh()
                    }), window.addEventListener("touchend", function() {
                        try {
                            "running" !== globals.phaser.sound.context.state &&
                                globals.phaser.sound.context.resume()
                        } catch (a) {}
                    }, !1), !this.game.device.desktop) {
                    var a = navigator.userAgent || navigator.vendor || window.opera,
                        b = a.match(/iPad/i) || a.match(/iPhone/i) || a.match(/iPod/i),
                        d = this;
                    window.onresize = function() {
                        d.checkOrientation(b)
                    };
                    this.checkOrientation(b)
                }
            } else this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE, this.scale.setUserScale(globals.screenDims.scaleX, globals.screenDims.scaleY), this.game.device.desktop || (globals.screenDims.orientation == globals.orientations.portrait ?
                this.scale.forceOrientation(!1, !0) : this.scale.forceOrientation(!0, !1));
            this.game.state.start("Preloader")
        },
        checkOrientation: function(a) {
            var b;
            a ? (a = document.documentElement.clientWidth, b = document.documentElement.clientHeight) : (a = window.innerWidth, b = window.innerHeight);
            globals.orientation == globals.orientations.portrait && a > b || globals.orientation == globals.orientations.landscape && b > a ? (globals.phaser.paused = !0, document.getElementById("content").style.display = "block", document.getElementById("gameCanvas").style.display =
                "none") : (globals.phaser.paused = !1, document.getElementById("content").style.display = "none", document.getElementById("gameCanvas").style.display = "block")
        }
    };

    function inIframe() {
        try {
            return window.self !== window.top
        } catch (a) {
            return !0
        }
    };
    var GameState = function() {
        gameState = this
    };
    GameState.prototype = {
        preload: function() {},
        create: function() {
			game.paused = !1;
            this._create();
			
        },
        _create: function() {
            this.started = !0;
            globals.screen = -10;
            var a = this;
            globals.addBackground("game_bg");
            this.screenBlocked = !1;
            this.undoBlocked = !0;
            this.interbUndoBlocked = !1;
            globals.game.self = this;
            this.phaser = globals.phaser;
            this.startGame();
            if ("480x800" == globals.resolution) var b = globals.calculatePositions(this.world.height /
                    2 + 264, this.world.height - 30, 32, 2),
                d = 150;
            else b = globals.calculatePositions(this.world.height / 2 + 384, this.world.height - 30, 48, 2), d = 220;
            var c = this.game.add.button(this.world.width / 2 - d, b[1], "bt_undo2", this.undoButtonAction, this);
            c.anchor.set(.5);
            this.buttonPause = c;
            c = this.game.add.button(this.world.width / 2, b[1], "bt_restart2", this.clickRestartGame, this);
            c.anchor.set(.5);
            this.buttonRestart = c;
            b = this.game.add.button(this.world.width / 2 + d, b[1], "bt_menu2", this.clickMenu, this);
            b.anchor.set(.5);
            this.buttonMenu = b;
            "done" != globals.storage.data.tutorial && (this.tutorialGroup = this.game.add.group(), this.tutorialGroup.name = "Tutorial", this.tutorial = new Tutorial(this.world, this.game), this.tutorial.showOverlay(), this.tutorialGroup.addChild(this.board.getGameBoardCheckers()[5][2].getCheckerSprite()), globals.createTimer(globals.times.TUTORIAL_HAND_TIME - 310, function() {
                a.game.world.bringToTop(a.tutorialGroup);
                a.game.world.bringToTop(a.tutorial.getHand())
            }), b = this.board.getXYValue(5, 2), this.tutorial.createHand(this.world.width +
                100, this.world.height + 100), "480x800" == globals.resolution ? this.tutorial.moveHandTo(b[0] + 39, b[1] + 40, globals.times.TUTORIAL_HAND_TIME - 300) : this.tutorial.moveHandTo(b[0] + 55, b[1] + 55, globals.times.TUTORIAL_HAND_TIME - 300), this.tutorialGroup.addChild(this.tutorial.getHand()), this.board.setTutorial(this.tutorial));
            var e = this;
            globals.version != globals.versions.HTML && 0 == globals.inGameListener && (globals.inGameListener = !0, document.addEventListener("backbutton", function() {
                e.androidBackHandler()
            }, !1));
            gradle.event('start');
        },
        removeCheckerFromGroup: function() {
            this.tutorialGroup.remove(this.board.getGameBoardCheckers()[5][2].getCheckerSprite());
            this.board.getGameBoardCheckers()[5][2].create()
        },
        androidBackHandler: function() {
            switch (globals.screen) {
                case -10:
                    this.clickMenu();
                    break;
                case 21:
                    this.menu.backBtnClicked();
                    globals.screen = -10;
                    break;
                case 20:
                    this.restart.backBtnClicked(), globals.screen = -10
            }
        },
        update: function() {
            if (!0 === this.started) {
                this.buttonPause.input.pointerOver() ?
                    this.buttonPause.tint = 16777215 : this.buttonPause.tint = 14408667;
                this.buttonMenu.input.pointerOver() ? this.buttonMenu.tint = 16777215 : this.buttonMenu.tint = 14408667;
                this.buttonRestart.input.pointerOver() ? this.buttonRestart.tint = 16777215 : this.buttonRestart.tint = 14408667;
                if (null != this.sureButtons || void 0 != this.sureButtons)
                    for (var a = 0; a < this.sureButtons.length; a++) this.sureButtons[a].input.pointerOver() ? this.sureButtons[a].tint = 16777215 : this.sureButtons[a].tint = 14408667;
                if (null != this.resultGameButtons || void 0 !=
                    this.resultGameButtons)
                    for (a = 0; a < this.resultGameButtons.length; a++) this.resultGameButtons[a].input.pointerOver() ? this.resultGameButtons[a].tint = 16777215 : this.resultGameButtons[a].tint = 14408667
            }
        },
        getWorld: function() {
            return this.world
        },
        startGame: function() {
            globals.onGameStart();
            var a = globals.getStonesSprites();
            this.board = new Board(this.game, this.world, this);
            var b;
            b = 1 == globals.rules.aiLevel ? new PlayerBot(this.game, this.board, a, "1", 1) : 2 == globals.rules.aiLevel ? new PlayerBot(this.game, this.board, a, "1",
                2) : 3 == globals.rules.aiLevel ? new PlayerBot(this.game, this.board, a, "1", 3) : new Player(this.game, this.board, a, "1", 0);
            a = new Player(this.game, this.board, a, "2", 0);
            this.historyObj = this.board.getHistoryObj();
            this.board.setPlayers(b, a)
        },
        clickRestartGame: function() {
            globals.managers.audio.playSound("click");
            if (0 == this.screenBlocked) {
                globals.screen = 20;
                var a = this;
                globals.setPauseState(!0);
                var b = this.phaser.add.image(0, 0, "trans");
                b.width = this.phaser.width;
                b.height = this.phaser.height;
                b.inputEnabled = !0;
                b.visible = !0;
                this.overlay = b;
                this.restart = new ScreenSure(this.game, this.world, this, "restart");
                this.sureButtons = this.restart.getButtons();
                this.restart.showScreen();
                a.screenBlocked = !0;
                window.setTimeout(function() {
                    a.screenBlocked = !1
                }, 100)
            }
        },
        clickMenu: function() {
            globals.managers.audio.playSound("click");
            if (0 == this.screenBlocked) {
                globals.screen = 21;
                var a = this;
                globals.setPauseState(!0);
                var b = this.phaser.add.image(0, 0, "trans");
                b.width = this.phaser.width;
                b.height = this.phaser.height;
                b.inputEnabled = !0;
                b.visible = !0;
                this.overlay =
                    b;
                this.menu = new ScreenSure(this.game, this.world, this, "menu");
                this.sureButtons = this.menu.getButtons();
                this.menu.showScreen();
                a.screenBlocked = !0;
                window.setTimeout(function() {
                    a.screenBlocked = !1
                }, 100)
            }
            gradle.event('btn_menu');
        },
        returnFromDialogScreen: function() {
            this.overlay.inputEnabled = !1;
            this.overlay.visible = !1
        },
        undoButtonAction: function() {
            var a = this;
            this.interbUndoBlocked ? globals.managers.audio.playSound("response_negative") : 1 == globals.rules.aiLevel || 2 ==
                globals.rules.aiLevel || 3 == globals.rules.aiLevel ? 1 < this.historyObj.getHistorySize() && !this.undoBlocked && !this.board.isMoving() ? (globals.managers.audio.playSound("click"), this.board.setGameBoardCheckers(this.historyObj.getMoves(), this.historyObj.getBoardValues(), this.historyObj.getRemoved(), !1), this.board.setGameBoardCheckers(this.historyObj.getMoves(), this.historyObj.getBoardValues(), this.historyObj.getRemoved(), !1), this.blockUndo(), this.interbUndoBlocked = !0, globals.createTimer(100, function() {
                    a.interbUndoBlocked = !1
                })) : globals.managers.audio.playSound("response_negative") : 0 < this.historyObj.getHistorySize() && !this.undoBlocked && !this.board.isMoving() ? (globals.managers.audio.playSound("click"), this.board.setGameBoardCheckers(this.historyObj.getMoves(), this.historyObj.getBoardValues(), this.historyObj.getRemoved(), !0), this.blockUndo(), this.interbUndoBlocked = !0, globals.createTimer(100, function() {
                    a.interbUndoBlocked = !1
                })) : globals.managers.audio.playSound("response_negative")
        },
        goToMenu: function() {
            this.camera.fade(0,
                200, !1);
            this.time.events.add(200, function() {
                this.game.state.start("Menu")
            }, this)
        },
        blockUndo: function() {
            this.undoBlocked = !0
        },
        unblockUndo: function() {
            this.undoBlocked = !1
        },
        getBoard: function() {
            return this.board
        },
        setResultGameButtons: function(a) {
            this.resultGameButtons = a
        }
    };
    var MenuState = function(a) {};
    MenuState.prototype = {
        preload: function() {},
        update: function() {
            "480x800" == globals.resolution ? (this.logoBackground.angle += .2, this.logoBackground2.angle -= .2, this.add ? (this.logoBackground.scale.y += .01, this.logoBackground.scale.x += .01) : (this.logoBackground.scale.y -= .005, this.logoBackground.scale.x -= .005), this.add2 ? (this.logoBackground2.scale.y += .015, this.logoBackground2.scale.x += .015) : (this.logoBackground2.scale.y -= .01, this.logoBackground2.scale.x -= .01), .5 > this.logoBackground.scale.x ? this.add = !0 : .9 < this.logoBackground.scale.x &&
                (this.add = !1), .5 > this.logoBackground2.scale.x ? this.add2 = !0 : .9 < this.logoBackground2.scale.x && (this.add2 = !1)) : (this.logoBackground.angle += .3, this.logoBackground2.angle -= .3, this.add ? (this.logoBackground.scale.y += .02, this.logoBackground.scale.x += .02) : (this.logoBackground.scale.y -= .01, this.logoBackground.scale.x -= .01), this.add2 ? (this.logoBackground2.scale.y += .025, this.logoBackground2.scale.x += .025) : (this.logoBackground2.scale.y -= .015, this.logoBackground2.scale.x -= .015), .8 > this.logoBackground.scale.x ? this.add = !0 : 1.5 < this.logoBackground.scale.x && (this.add = !1), .8 > this.logoBackground2.scale.x ? this.add2 = !0 : 1.5 < this.logoBackground2.scale.x && (this.add2 = !1));
            if (30 == this.bubleCounter) {
                var a = this.game.add.sprite(this.world.width / 2, this.logoBackground.height / 2 + 80, "eclipse");
                a.anchor.set(.5);
                a.alpha = .4;
                a.scale.x = 1.4;
                a.scale.y = 1.4;
                this.logoGroup.addChild(a);
                var b = globals.getRndIntegerBubles(-300, this.world.width + 300, 0, this.world.width),
                    d = globals.getRndIntegerBubles(-300, this.world.height / 2, 0, this.world.width),
                    b = this.tweenTo(a,
                        b, d, !1, 1E4, !0);
                this.bubleCounter = 0;
                this.game.world.bringToTop(this.logo);
                b.onComplete.add(function() {
                    this.game.add.tween(a).to({
                        alpha: 0
                    }, 1E3, Phaser.Easing.Linear.None, !0)
                }, this);
                this.logo.bringToTop()
            }
            this.bubleCounter++;
            this.buttonPlay.input.pointerOver() ? this.buttonPlay.tint = 16777215 : this.buttonPlay.tint = 14408667;
            this.buttonRules.input.pointerOver() ? this.buttonRules.tint = 16777215 : this.buttonRules.tint = 14408667;
            this.buttonSettings.input.pointerOver() ? this.buttonSettings.tint = 16777215 : this.buttonSettings.tint =
                14408667;
            this.buttonAbout.input.pointerOver() ? this.buttonAbout.tint = 16777215 : this.buttonAbout.tint = 14408667;
            if (null != this.savedGameButtons || void 0 != this.savedGameButtons)
                for (b = 0; b < this.savedGameButtons.length; b++) this.savedGameButtons[b].input.pointerOver() ? this.savedGameButtons[b].tint = 16777215 : this.savedGameButtons[b].tint = 14408667;
            if (null != this.newGameButtons || void 0 != this.newGameButtons)
                for (b = 0; b < this.newGameButtons.length; b++) this.newGameButtons[b].input.pointerOver() ? this.newGameButtons[b].tint =
                    16777215 : this.newGameButtons[b].tint = 14408667;
            if (null != this.exitButtons || void 0 != this.exitButtons)
                for (b = 0; b < this.exitButtons.length; b++) this.exitButtons[b].input.pointerOver() ? this.exitButtons[b].tint = 16777215 : this.exitButtons[b].tint = 14408667
        },
        create: function() {
            var a = this;
            1 != globals.musicPlaying && globals.managers.audio.playMusic(globals.managers.audio.actualMusic, !0);
            this.exitScreen = this.savedGame = this.newGame = this.screenInstructions = this.screenSettings = this.screenRules = void 0;
            var b = this.world.height /
                2 / 2;
            this.bubleCounter = 29;
            globals.addBackground("game_bg");
            this.screenGroup = this.game.add.group();
            this.screenGroup.name = "Menu";
            this.logoGroup = this.game.add.group();
            this.logoBackground = this.add.sprite(this.world.width / 2, -100, "shine");
            this.logoBackground.anchor.set(.5);
            "480x800" == globals.resolution ? (this.logoBackground.scale.x = .51, this.logoBackground.scale.y = .51) : (this.logoBackground.scale.x = .81, this.logoBackground.scale.y = .81);
            this.logoGroup.addChild(this.logoBackground);
            this.logoBackground2 = this.add.sprite(this.world.width /
                2, -100, "shine");
            this.logoBackground2.anchor.set(.5);
            "480x800" == globals.resolution ? (this.logoBackground2.scale.x = .9, this.logoBackground2.scale.y = .9) : (this.logoBackground2.scale.x = 1.4, this.logoBackground2.scale.y = 1.4);
            this.logoGroup.addChild(this.logoBackground2);
            this.logo = this.add.sprite(this.world.width / 2, -100, "splash");
            this.logo.anchor.set(.5);
            this.logoGroup.addChild(this.logo);
            this.tweenTo(this.logo, this.world.width / 2, b, !0);
            this.tweenTo(this.logoBackground, this.world.width / 2, b, !0);
            this.tweenTo(this.logoBackground2,
                this.world.width / 2, b, !0);
            b = "480x800" == globals.resolution ? globals.calculatePositions(this.world.height / 2, this.world.height, 32, 4) : globals.calculatePositions(this.world.height / 2, this.world.height, 48, 4);
            if ("480x800" == globals.resolution) var d = {
                    font: globals.fonts.small,
                    fill: "#FFFFFF",
                    align: "center"
                },
                c = {
                    font: globals.fonts.small,
                    fill: "#FFFFFF",
                    align: "center"
                };
            else d = {
                font: globals.fonts.main,
                fill: "#FFFFFF",
                align: "center"
            }, c = {
                font: globals.fonts.big,
                fill: "#FFFFFF",
                align: "center"
            };
            var e = this.add.button(-100,
                b[0] - 30, "PLAY_bt", this.clickStart, this);
            e.anchor.set(.5);
            e.bringToTop();
            c = this.add.text(-100, b[0] - 30 + 2, globals.managers.language.get("Play"), c);
            c.anchor.set(.5, .5);
            this.tweenTo(e, this.world.width / 2, b[0] - 30, !0);
            this.tweenTo(c, this.world.width / 2, b[0] - 30 + 2, !0);
            this.buttonPlay = e;
            this.textPlay = c;
            var f = this.game.add.button(this.world.width + 100, b[1], "bt_instruction_on", this.clickRules, this);
            f.anchor.set(.5);
            var g = this.add.text(this.world.width + 100, b[1] + 2, globals.managers.language.get("Menu_btn_1"), d);
            g.anchor.set(.5,
                .5);
            this.tweenTo(f, this.world.width / 2, b[1]);
            this.tweenTo(g, this.world.width / 2, b[1] + 2);
            this.buttonRules = f;
            this.textRules = g;
            var h = this.game.add.button(-100, b[2], "bt_instruction_on", this.clickSettings, this);
            h.anchor.set(.5);
            var k = this.add.text(-100, b[2] + 2, globals.managers.language.get("OptionsKey"), d);
            k.anchor.set(.5, .5);
            this.tweenTo(h, this.world.width / 2, b[2]);
            this.tweenTo(k, this.world.width / 2, b[2] + 2);
            this.buttonSettings = h;
            this.textSettings = k;
            var l = this.game.add.button(this.world.width + 100, b[3], "bt_instruction_on",
                this.clickAbout, this);
            l.anchor.set(.5);
            d = this.add.text(this.world.width + 100, b[3] + 2, globals.managers.language.get("Instructions"), d);
            d.anchor.set(.5, .5);
            this.tweenTo(l, this.world.width / 2, b[3]);
            this.tweenTo(d, this.world.width / 2, b[3] + 2);
            this.buttonAbout = l;
            this.textAbout = d;
            if (2 != globals.version) {
                var m = this.game.add.button(this.world.width + 80, this.world.height + 80, "bt_shutdown", this.clickExit, this);
                m.anchor.set(.5);
                this.tweenTo(m, this.world.width - 40, this.world.height - 40);
                this.screenGroup.addChild(m)
            }
            this.screenGroup.addChild(e);
            this.screenGroup.addChild(c);
            this.screenGroup.addChild(f);
            this.screenGroup.addChild(g);
            this.screenGroup.addChild(h);
            this.screenGroup.addChild(k);
            this.screenGroup.addChild(l);
            this.screenGroup.addChild(d);
            this.screenGroup.visible = !0;
            this.playTween1 = this.game.add.tween(e.scale).to({
                x: [1.05, 1],
                y: [1.05, 1]
            }, 600, Phaser.Easing.Linear.None, !1, 0);
            this.playTween1.onComplete.add(function() {
                this.screenGroup.visible && this.playTween2.start()
            }, this);
            this.playTween2 = this.game.add.tween(e.scale).to({
                x: [.97, 1],
                y: [.97,
                    1
                ]
            }, 600, Phaser.Easing.Linear.None, !1, 0);
            this.playTween2.onComplete.add(function() {
                this.screenGroup.visible && this.playTween1.start()
            }, this);
            this.playTween3 = this.game.add.tween(c.scale).to({
                x: [1.05, 1],
                y: [1.05, 1]
            }, 600, Phaser.Easing.Linear.None, !1, 0);
            this.playTween3.onComplete.add(function() {
                this.screenGroup.visible && this.playTween4.start()
            }, this);
            this.playTween4 = this.game.add.tween(c.scale).to({
                x: [.97, 1],
                y: [.97, 1]
            }, 600, Phaser.Easing.Linear.None, !1, 0);
            this.playTween4.onComplete.add(function() {
                this.screenGroup.visible &&
                    this.playTween3.start()
            }, this);
            this.add2 = this.add = !1;
            this.updateTexts();
            "done" != globals.storage.data.tutorial && (this.tutorialGroup = this.game.add.group(), this.tutorialGroup.name = "Tutorial", this.tutorial = new Tutorial(this.world, this.game), this.tutorial.showOverlay(), this.tutorialGroup.addChild(e), this.tutorialGroup.addChild(c), globals.createTimer(globals.times.TUTORIAL_HAND_TIME - 10, function() {
                a.game.world.bringToTop(a.tutorialGroup);
                a.game.world.bringToTop(a.tutorial.getHand())
            }), this.tutorial.createHand(this.world.width +
                100, this.world.height + 100), "480x800" == globals.resolution ? this.tutorial.moveHandTo(this.world.width / 2 + 120, this.world.height / 2 + 95) : this.tutorial.moveHandTo(this.world.width / 2 + 175, b[0] + 50), globals.times.TUTORIAL_HAND_TIME, this.tutorialGroup.addChild(this.tutorial.getHand()));
            var n = this;
            globals.version != globals.versions.HTML && 0 == globals.inMenuListener && (globals.inMenuListener = !0, document.addEventListener("backbutton", function() {
                n.androidBackHandler()
            }, !1));
            gradle.event('game_ready');
        },
        androidBackHandler: function() {
            switch (globals.screen) {
                case -1:
                    this.clickExit();
                    break;
                case 0:
                    this.savedGame.backBtnClicked();
                    globals.screen = -1;
                    break;
                case 10:
                    null == this.newGame ? this.savedGame.getNewGame().backBtnClicked() : this.newGame.backBtnClicked();
                    globals.screen = -1;
                    break;
                case 1:
                    this.screenRules.backBtnClicked();
                    globals.screen = -1;
                    break;
                case 2:
                    this.screenSettings.backBtnClicked();
                    globals.screen = -1;
                    break;
                case 3:
                    this.screenInstructions.backBtnClicked();
                    globals.screen = -1;
                    break;
                case 4:
                    this.exitScreen.noBtn(),
                        globals.screen = 5
            }
        },
        tweenTo: function(a, b, d, c) {
            var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : this.TOP_CHECKERS_TWEEN_TIME,
                f = this,
                e = 5 < arguments.length && void 0 !== arguments[5] && arguments[5] ? this.game.add.tween(a).to({
                    x: b,
                    y: d
                }, e) : this.game.add.tween(a).to({
                    x: b,
                    y: d
                }, e, "Quart.easeOut");
            e.start();
            c && e.onComplete.add(function() {
                f.playTween1.start();
                f.playTween3.start()
            });
            return e
        },
        showMenuButtons: function() {
            globals.screen = -1;
            this.screenGroup.visible = !0;
            this.logoGroup.visible = !0;
            this.playTween1.start();
            this.playTween3.start();
            this.updateTexts()
        },
        clickStart: function() {
            globals.managers.audio.playSound("click");
            if ("done" != globals.storage.data.tutorial) globals.storage.data.board = null, globals.storage.data.lastGameAi = null, globals.storage.data.lastPlayer = null, globals.storage.data.historyMoves = null, globals.storage.data.removedCheckers = null, globals.storage.data.historyBoardOfValues = null, 0 != this.tutorialGroup.length && (this.tutorialGroup.visible = !1, this.clickNewGame());
            else if (null != globals.storage.data.board) {
                globals.screen =
                    0;
                if (void 0 == this.savedGame || null == this.savedGame) this.savedGame = new ScreenSavedGame(this.game, this.world, this);
                this.savedGame.showScreen();
                this.savedGameButtons = this.savedGame.getButtons();
                this.screenGroup.visible = !1
            } else globals.screen = 10, this.clickNewGame();
            gradle.event('btn_play');
        },
        clickNewGame: function() {
            globals.managers.audio.playSound("click");
            if (void 0 == this.newGame || null == this.newGame) this.newGame = new ScreenNewGame(this.game, this.world, this);
            this.newGame.showScreen();
            this.newGameButtons = this.newGame.getButtons();
            this.screenGroup.visible = !1
        },
        clickRules: function() {
            globals.managers.audio.playSound("click");
            globals.screen = 1;
            this.logoGroup.visible = !1;
            if (void 0 == this.screenRules || null == this.screenRules) this.screenRules = new ScreenRules(this.game, this.world, this);
            this.screenRules.showScreen();
            this.screenGroup.visible = !1;
            gradle.event('btn_rules');
        },
        clickSettings: function() {
            globals.managers.audio.playSound("click");
            globals.screen = 2;
            this.logoGroup.visible = !1;
            if (void 0 == this.screenSettings || null == this.screenSettings) this.screenSettings = new ScreenSettings(this.game, this.world, this);
            this.screenSettings.showScreen();
            this.screenGroup.visible = !1;
            gradle.event('btn_options');
        },
        clickAbout: function() {
            globals.screen = 3;
            globals.managers.audio.playSound("click");
            this.logoGroup.visible = !1;
            if (void 0 == this.screenInstructions || null == this.screenInstructions) this.screenInstructions = new ScreenInstructions(this.game,
                this.world, this);
            this.screenInstructions.showScreen();
            this.screenGroup.visible = !1;
            gradle.event('btn_instructions');
        },
        clickExit: function() {
            globals.screen = 4;
            globals.managers.audio.playSound("click");
            if (void 0 == this.exitScreen || null == this.exitScreen) this.exitScreen = new ScreenExit(this.game, this.world, this);
            this.exitButtons = this.exitScreen.getButtons();
            this.exitScreen.showScreen();
            this.screenGroup.visible = !1
        },
        setNewGameButtons: function(a) {
            this.newGameButtons = a
        },
        updateTexts: function() {
            this.textPlay.setText(globals.managers.language.get("Play"));
            this.textRules.setText(globals.managers.language.get("Menu_btn_1"));
            this.textSettings.setText(globals.managers.language.get("OptionsKey"));
            this.textAbout.setText(globals.managers.language.get("Instructions"))
        }
    };
    var PreloaderState = function() {};
    PreloaderState.prototype = {
        preload: function() {
            this.game.load.image("game_bg", "images/game_bg.png");
            this.game.load.image("I", "images/I.png");
            this.preloadResources();
            if (SOUNDS_ENABLED)
                for (var a in globals.audio) globals.audio.hasOwnProperty(a) && (value = globals.audio[a], this.game.load.audio(a, [value.path + ".ogg", value.path + ".mp3"]));
            globals.navigatorHelp = navigator;
            this.game.load.crossOrigin = "Anonymous";
            globals.preloader.self = this;
            this.game.load.onLoadStart.add(this.loadingStarted,
                this);
            this.game.load.onFileComplete.add(this.loadingFileCompleted, this);
            this.game.load.onLoadComplete.add(this.loadingFinished, this);
            this.game.load.start()
        },
        preloadResources: function() {
            this.game.load.text("lang_strings", "texts/m.json");
            var a = "480x800" == globals.resolution ? globals.resourcesSmall : globals.resourcesBig,
                b;
            for (b in a) a[b].forEach(function(a) {
                var c = this.load[b];
                c && c.apply(this.load, a)
            }, this)
        },
        loadingStarted: function() {
            this.progress = this.game.add.text(this.game.world.centerX, this.world.height -
                100, "0%", {
                    font: globals.fonts.main,
                    fill: "#FFFFFF",
                    align: "center"
                });
            this.progress.anchor.setTo(.5)
        },
        loadingFileCompleted: function(a, b) {
            this.progress.setText(a + "%");
            if ("game_bg" == b) {
                var d = this.game.add.image(this.game.world.centerX, this.game.world.centerY, b);
                d.anchor.setTo(.5);
                this.splash = d;
                var c = Math.max(this.game.width - d.width, this.game.height - d.height);
                0 < c && (d.width += c, d.height += c);
                null != this.logo && void 0 != this.logo && this.game.world.bringToTop(this.logo);
                this.progress.bringToTop()
            }
            "I" == b && (d = this.game.add.image(this.game.world.centerX,
                this.game.world.centerY, "I"), d.anchor.set(.5), "480x800" == globals.resolution ? (d.scale.x = 1, d.scale.y = 1) : (d.scale.x = 1.5, d.scale.y = 1.5), this.game.world.bringToTop(d), this.logo = d)
        },
        loadingFinished: function() {
            this._loadingFinished()
        },
        _loadingFinished: function() {
            var a, b;
            for (b in globals.audio) globals.audio.hasOwnProperty(b) && (a = globals.audio[b], "music" == a.type ? globals.managers.audio.addMusic(b, a.volume, a.loop) : globals.managers.audio.addSound(b, a.volume, a.loop));
            globals.managers.storage.load();
            this.setSavedRules();
            this.setSavedSettings();
            a = navigator.userLanguage || navigator.language;
            globals.managers.language.load();
            b = "en de es fr it pt ru nl tr no".split(" ");
            globals.settings.language = b.indexOf(a.substring(0, 2));
            globals.managers.language.setLanguage(b.indexOf(a.substring(0, 2)));
            this.game.time.events.add(globals.preloader.splashTime, function() {
                this.game.state.start("Menu")
            }, this)
        },
        setSavedRules: function() {
            null != globals.storage.data.captureBackwards && (globals.rules.captureBackwards = globals.storage.data.captureBackwards);
            null != globals.storage.data.capture && (globals.rules.capture = globals.storage.data.capture);
            null != globals.storage.data.king && (globals.rules.king = globals.storage.data.king);
            null != globals.storage.data.kingPriority && (globals.rules.kingPriority = globals.storage.data.kingPriority)
        },
        setSavedSettings: function() {
            null != globals.storage.data.language && (globals.settings.language = globals.storage.data.language);
            null != globals.storage.data.playAs && (globals.settings.playAs = globals.storage.data.playAs);
            null != globals.storage.data.stonesSkin &&
                (globals.settings.stonesSkin = globals.storage.data.stonesSkin);
            null != globals.storage.data.boardSkin && (globals.settings.boardSkin = globals.storage.data.boardSkin);
            null != globals.storage.data.highlight && (globals.settings.highlight = globals.storage.data.highlight);
            null != globals.storage.data.music && (globals.settings.music = globals.storage.data.music);
            null != globals.storage.data.sounds && (globals.settings.sounds = globals.storage.data.sounds)
        }
    };
    var ScreenInstructions = function(a, b, d) {
        this.stonesTexts = ["skin1", "skin2"];
        this.boardTexts = ["skin1", "skin2"];
        this.stonesTextsCounter = globals.settings.stonesSkin;
        this.boardTextsCounter = globals.settings.boardSkin;
        this.screenGroup = null;
        this.screenName = "ScreenInstructions";
        this.world = b;
        this.gameObj = a;
        this.menuState = d;
        this.create()
    };
    ScreenInstructions.prototype = {
        create: function() {
            this.screenGroup = this.gameObj.add.group();
            this.screenGroup.name = this.screenName;
            this.screenGroup.visible = !1;
            var a = "480x800" == globals.resolution ? globals.calculateDialogSize(60, this.world.height - 20, 50) : globals.calculateDialogSize(100, this.world.height - 50, 69),
                b = this.gameObj.add.sprite(this.world.width / 2, a[0], "dialog_bg");
            b.frame = 0;
            b.anchor.set(.5);
            this.screenGroup.addChild(b);
            for (b = 1; b < a.length - 1; b++) {
                var d = this.gameObj.add.sprite(this.world.width / 2, a[b],
                    "dialog_bg");
                d.frame = 1;
                d.anchor.set(.5);
                this.screenGroup.addChild(d)
            }
            b = this.gameObj.add.sprite(this.world.width / 2, a[a.length - 1], "dialog_bg");
            b.frame = 2;
            b.anchor.set(.5);
            this.screenGroup.addChild(b);
            "480x800" == globals.resolution ? (d = {
                font: globals.fonts.small,
                fill: "#FFFFFF",
                align: "center"
            }, b = 10) : (d = {
                font: globals.fonts.main,
                fill: "#FFFFFF",
                align: "center"
            }, b = 15);
            var c = "480x800" == globals.resolution ? this.gameObj.add.button(this.world.width / 2 + 185, a[0] + 5, "X-ko", this.backBtnClicked, this) : this.gameObj.add.button(this.world.width /
                2 + 272, a[0] + 4, "X-ko", this.backBtnClicked, this);
            c.anchor.set(.5);
            this.screenGroup.addChild(c);
            this.backBtn = c;
            c = "480x800" == globals.resolution ? this.gameObj.add.text(this.world.width / 2, a[0] + 6, globals.managers.language.get("Instructions"), d) : this.gameObj.add.text(this.world.width / 2, a[0] + 8, globals.managers.language.get("Instructions"), d);
            c.maxWidth = 400;
            c.anchor.set(.5);
            this.settingsTitle = c;
            this.screenGroup.addChild(c);
            this.istructionsTitle = c;
            d = this.gameObj.add.text(this.world.width / 2, a[1] + 15, globals.managers.language.get("Title"),
                d);
            d.anchor.set(.5);
            d.maxWidth = 400;
            this.textTitle = d;
            this.screenGroup.addChild(d);
            b = this.gameObj.add.button(this.world.width / 2 - 180, a[2] + b, "white");
            b.anchor.set(0);
            b.scale.x = 360;
            b.scale.y = 1;
            this.screenGroup.addChild(b);
            this.line1 = b;
            b = "480x800" == globals.resolution ? {
                font: globals.fonts.small,
                fill: "#FFFFFF",
                align: "center",
                wordWrap: !0,
                wordWrapWidth: 350
            } : {
                font: globals.fonts.main,
                fill: "#FFFFFF",
                align: "center",
                wordWrap: !0,
                wordWrapWidth: 450
            };
            this.instructContent = this.gameObj.add.text(this.world.width / 2, a[3],
                globals.managers.language.get("InstructionsContent"), b);
            this.instructContent.anchor.set(.5, 0);
            this.screenGroup.addChild(this.instructContent)
        },
        backBtnClicked: function() {
            globals.managers.audio.playSound("click");
            var a = this;
            this.hideScreen();
            window.setTimeout(function() {
                a.menuState.showMenuButtons()
            }, 100)
        },
        showScreen: function() {
            globals.managers.audio.playSound("menu_swoosh");
            this.showScreenFromBottom(this.screenGroup, !0, 250, 50, Phaser.Easing.Quintic.Out, this)
        },
        hideScreen: function() {
            globals.managers.audio.playSound("menu_swoosh");
            this.hideScreenToBottom(this.screenGroup, !0, 150, 0, Phaser.Easing.Linear.None, this)
        },
        hideScreenToBottom: function(a, b, d, c, e, f) {
            null === d && (d = 300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a = this.gameObj.add.tween(a).to({
                y: this.world.height
            }, d, e, !0, c);
            !0 === b && a.onComplete.add(function() {
                void 0 !== f.screenGroup.hideOverClbck && f.screenGroup.hideOverClbck.call(f)
            }, this)
        },
        showScreenFromBottom: function(a, b, d, c, e, f) {
            null === d && (d = 300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a.y =
                this.world.height;
            a.visible = !0;
            a = this.gameObj.add.tween(a).to({
                y: 0
            }, d, e, !0, c);
            !0 === b && a.onComplete.add(function() {
                void 0 !== f.screenGroup.hideOverClbck && f.screenGroup.hideOverClbck.call(f)
            }, this);
            this.updateTexts()
        },
        updateTexts: function() {
            this.istructionsTitle.setText(globals.managers.language.get("Instructions"));
            this.textTitle.setText(globals.managers.language.get("Title"));
            this.instructContent.setText(globals.managers.language.get("InstructionsContent"));
            "700x1440" == globals.resolution && (this.instructContent.fontSize =
                3 == globals.settings.language ? 28 : 30)
        }
    };
    var ScreenNewGame = function(a, b, d) {
        this.screenGroup = null;
        this.screenName = "ScreenNewGame";
        this.world = b;
        this.gameObj = a;
        this.menuState = d;
        this.create()
    };
    ScreenNewGame.prototype = {
        create: function() {
            var a = this;
            this.screenGroup = this.gameObj.add.group();
            this.screenGroup.name = this.screenName;
            this.screenGroup.visible = !1;
            var b = "480x800" == globals.resolution ? globals.calculateDialogSize(this.world.height / 2, this.world.height, 50) : globals.calculateDialogSize(this.world.height / 2, this.world.height - this.world.height / 2 / 15, 69),
                d = this.gameObj.add.sprite(this.world.width / 2, b[0], "dialog_bg");
            d.frame = 0;
            d.anchor.set(.5);
            this.screenGroup.addChild(d);
            for (d = 1; d < b.length - 1; d++) {
                var c =
                    this.gameObj.add.sprite(this.world.width / 2, b[d], "dialog_bg");
                c.frame = 1;
                c.anchor.set(.5);
                this.screenGroup.addChild(c)
            }
            d = this.gameObj.add.sprite(this.world.width / 2, b[b.length - 1], "dialog_bg");
            d.frame = 2;
            d.anchor.set(.5);
            this.screenGroup.addChild(d);
            var e = "480x800" == globals.resolution ? {
                    font: globals.fonts.small,
                    fill: "#FFFFFF",
                    align: "center"
                } : {
                    font: globals.fonts.main,
                    fill: "#FFFFFF",
                    align: "center"
                },
                d = "480x800" == globals.resolution ? this.gameObj.add.text(this.world.width / 2, b[0] + 6, globals.managers.language.get("Start_new"),
                    e) : this.gameObj.add.text(this.world.width / 2, b[0] + 4, globals.managers.language.get("Start_new"), e);
            d.maxWidth = 400;
            d.anchor.set(.5);
            this.newTitle = d;
            this.screenGroup.addChild(d);
            d = "480x800" == globals.resolution ? this.gameObj.add.button(this.world.width / 2 + 187, b[0] + 5, "X-ko", this.backBtnClicked, this) : this.gameObj.add.button(this.world.width / 2 + 270, b[0] + 4, "X-ko", this.backBtnClicked, this);
            d.anchor.set(.5);
            this.backBtn = d;
            b = "480x800" == globals.resolution ? globals.calculatePositions(b[0] + 20, b[b.length - 1] + 20, 32, 4) :
                globals.calculatePositions(b[0] + 18, b[b.length - 1] + 30, 48, 4);
            c = this.gameObj.add.button(this.world.width / 2, b[0], "bt_instruction_off", this.hardBtnClicked, this);
            c.anchor.set(.5);
            var f = this.gameObj.add.text(this.world.width / 2, b[0] + 2, globals.managers.language.get("Diff_3"), e);
            f.anchor.set(.5, .5);
            this.textHard = f;
            var g = this.gameObj.add.button(this.world.width / 2, b[1], "bt_instruction_off", this.mediumBtnClicked, this);
            g.anchor.set(.5);
            var h = this.gameObj.add.text(this.world.width / 2, b[1] + 2, globals.managers.language.get("Diff_2"),
                e);
            h.anchor.set(.5, .5);
            this.textMedium = h;
            var k = this.gameObj.add.button(this.world.width / 2, b[2], "bt_instruction_off", this.easyBtnClicked, this);
            k.anchor.set(.5);
            e = this.gameObj.add.text(this.world.width / 2, b[2] + 2, globals.managers.language.get("Diff_1"), e);
            e.anchor.set(.5, .5);
            this.textEasy = e;
            var l = this.gameObj.add.button(this.world.width / 2, b[3], "bt_instruction_off", this.playersBtnClicked, this),
                m = this.gameObj.add.button(this.world.width / 2, b[3], "players_icon", this.playersBtnClicked, this);
            l.anchor.set(.5);
            m.anchor.set(.5);
            this.screenGroup.addChild(c);
            this.screenGroup.addChild(f);
            this.screenGroup.addChild(g);
            this.screenGroup.addChild(h);
            this.screenGroup.addChild(k);
            this.screenGroup.addChild(e);
            this.screenGroup.addChild(l);
            this.screenGroup.addChild(m);
            this.screenGroup.addChild(d);
            this.hardButton = c;
            this.mediumBtn = g;
            this.easyBtn = k;
            this.textEasy = e;
            this.playersBtn = l;
            this.backBtn = d;
            "done" != globals.storage.data.tutorial && (this.tutorialGroup = this.gameObj.add.group(), this.tutorialGroup.name = "Tutorial", this.tutorial =
                new Tutorial(this.world, this.gameObj), this.tutorial.showOverlay(), globals.createTimer(globals.times.TUTORIAL_HAND_TIME - 310, function() {
                    a.tutorialGroup.addChild(a.easyBtn);
                    a.tutorialGroup.addChild(a.textEasy);
                    a.gameObj.world.bringToTop(a.tutorialGroup);
                    a.tutorialGroup.addChild(a.tutorial.getHand());
                    a.gameObj.world.bringToTop(a.tutorial.getHand())
                }), this.tutorial.createHand(this.world.width + 100, this.world.height + 100), "480x800" == globals.resolution ? this.tutorial.moveHandTo(this.world.width / 2 + 120, b[2] +
                    48, globals.times.TUTORIAL_HAND_TIME - 300) : this.tutorial.moveHandTo(this.world.width / 2 + 175, b[2] + 70, globals.times.TUTORIAL_HAND_TIME - 300));
            this.menuState.setNewGameButtons(this.getButtons())
        },
        getButtons: function() {
            return [this.hardButton, this.mediumBtn, this.easyBtn, this.playersBtn]
        },
        hardBtnClicked: function() {
            globals.screen = -10;
            globals.managers.audio.playSound("click");
            globals.rules.aiLevel = 1;
            this.gameObj.camera.fade(0, 200, !1);
            this.gameObj.time.events.add(200, function() {
                    this.gameObj.state.start("Game")
                },
                this)
        },
        mediumBtnClicked: function() {
            globals.screen = -10;
            globals.managers.audio.playSound("click");
            globals.rules.aiLevel = 2;
            this.gameObj.camera.fade(0, 200, !1);
            this.gameObj.time.events.add(200, function() {
                this.gameObj.state.start("Game")
            }, this)
        },
        easyBtnClicked: function() {
            globals.screen = -10;
            globals.managers.audio.playSound("click");
            globals.rules.aiLevel = 3;
            this.gameObj.camera.fade(0, 200, !1);
            this.gameObj.time.events.add(200, function() {
                this.gameObj.state.start("Game")
            }, this)
        },
        playersBtnClicked: function() {
            globals.screen = -10;
            globals.managers.audio.playSound("click");
            globals.rules.aiLevel = 0;
            this.gameObj.camera.fade(0, 200, !1);
            this.gameObj.time.events.add(200, function() {
                this.gameObj.state.start("Game")
            }, this)
        },
        backBtnClicked: function() {
            globals.managers.audio.playSound("click");
            var a = this;
            this.hideScreen();
            window.setTimeout(function() {
                a.menuState.showMenuButtons()
            }, 100)
        },
        showScreen: function() {
            globals.managers.audio.playSound("menu_swoosh");
            this.showScreenFromBottom(this.screenGroup, !0, 250, 50, Phaser.Easing.Quintic.Out,
                this)
        },
        hideScreen: function() {
            globals.managers.audio.playSound("menu_swoosh");
            this.hideScreenToBottom(this.screenGroup, !0, 150, 0, Phaser.Easing.Linear.None, this)
        },
        hideScreenToBottom: function(a, b, d, c, e, f) {
            null === d && (d = 300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a = this.gameObj.add.tween(a).to({
                y: this.world.height
            }, d, e, !0, c);
            !0 === b && a.onComplete.add(function() {
                void 0 !== f.screenGroup.hideOverClbck && f.screenGroup.hideOverClbck.call(f)
            }, this)
        },
        showScreenFromBottom: function(a, b, d, c, e, f) {
            null ===
                d && (d = 300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a.y = this.world.height;
            a.visible = !0;
            a = this.gameObj.add.tween(a).to({
                y: 0
            }, d, e, !0, c);
            !0 === b && a.onComplete.add(function() {
                void 0 !== f.screenGroup.hideOverClbck && f.screenGroup.hideOverClbck.call(f)
            }, this);
            this.updateTexts()
        },
        updateTexts: function() {
            this.newTitle.setText(globals.managers.language.get("Start_new"));
            this.textHard.setText(globals.managers.language.get("Diff_3"));
            this.textMedium.setText(globals.managers.language.get("Diff_2"));
            this.textEasy.setText(globals.managers.language.get("Diff_1"))
        }
    };
    var ScreenSavedGame = function(a, b, d) {
        this.screenGroup = null;
        this.screenName = "ScreenSavedGame";
        this.world = b;
        this.gameObj = a;
        this.menuState = d;
        this.create()
    };
    ScreenSavedGame.prototype = {
        create: function() {
            this.screenGroup = this.gameObj.add.group();
            this.screenGroup.name = this.screenName;
            this.screenGroup.visible = !1;
            var a = "480x800" == globals.resolution ? globals.calculateDialogSize(this.world.height / 2, this.world.height, 50) : globals.calculateDialogSize(this.world.height / 2 + 100, this.world.height - this.world.height / 2 / 15, 69),
                b = this.gameObj.add.sprite(this.world.width / 2, a[0], "dialog_bg");
            b.frame = 0;
            b.anchor.set(.5);
            this.screenGroup.addChild(b);
            for (b = 1; b < a.length - 1; b++) {
                var d =
                    this.gameObj.add.sprite(this.world.width / 2, a[b], "dialog_bg");
                d.frame = 1;
                d.anchor.set(.5);
                this.screenGroup.addChild(d)
            }
            b = this.gameObj.add.sprite(this.world.width / 2, a[a.length - 1], "dialog_bg");
            b.frame = 2;
            b.anchor.set(.5);
            this.screenGroup.addChild(b);
            b = "480x800" == globals.resolution ? {
                font: globals.fonts.small,
                fill: "#FFFFFF",
                align: "center"
            } : {
                font: globals.fonts.main,
                fill: "#FFFFFF",
                align: "center"
            };
            d = "480x800" == globals.resolution ? this.gameObj.add.text(this.world.width / 2, a[0] + 6, globals.managers.language.get("Start_new_question"),
                b) : this.gameObj.add.text(this.world.width / 2, a[0] + 4, globals.managers.language.get("Start_new_question"), b);
            d.maxWidth = 400;
            d.anchor.set(.5);
            this.newTitle = d;
            this.screenGroup.addChild(d);
            d = "480x800" == globals.resolution ? this.gameObj.add.button(this.world.width / 2 + 187, a[0] + 5, "X-ko", this.backBtnClicked, this) : this.gameObj.add.button(this.world.width / 2 + 270, a[0] + 4, "X-ko", this.backBtnClicked, this);
            d.anchor.set(.5);
            this.backBtn = d;
            var c = "480x800" == globals.resolution ? globals.calculatePositions(a[1], a[a.length - 1],
                    32, 2) : globals.calculatePositions(a[1], a[a.length - 1], 48, 2),
                a = this.gameObj.add.button(this.world.width / 2, c[0], "bt_instruction_off", this.continueBtnClicked, this);
            a.anchor.set(.5);
            var e = this.gameObj.add.text(this.world.width / 2, c[0] + 2, globals.managers.language.get("Continue"), b);
            e.anchor.set(.5, .5);
            this.textContinue = e;
            var f = this.gameObj.add.button(this.world.width / 2, c[1], "bt_instruction_off", this.newBtnClicked, this);
            f.anchor.set(.5);
            b = this.gameObj.add.text(this.world.width / 2, c[1] + 2, globals.managers.language.get("Start_new"),
                b);
            b.anchor.set(.5, .5);
            this.textNew = b;
            this.screenGroup.addChild(f);
            this.screenGroup.addChild(b);
            this.screenGroup.addChild(a);
            this.screenGroup.addChild(e);
            this.screenGroup.addChild(d);
            this.newBtn = f;
            this.continueBtn = a;
            this.backBtn = d
        },
        getButtons: function() {
            return [this.newBtn, this.continueBtn]
        },
        continueBtnClicked: function() {
            globals.screen = -10;
            globals.managers.audio.playSound("click");
            this.gameObj.camera.fade(0, 200, !1);
            this.gameObj.time.events.add(200, function() {
                this.gameObj.state.start("Game")
            }, this)
        },
        newBtnClicked: function() {
            globals.managers.audio.playSound("click");
            globals.storage.data.board = null;
            globals.storage.data.lastGameAi = null;
            globals.storage.data.lastPlayer = null;
            globals.storage.data.historyMoves = null;
            globals.storage.data.removedCheckers = null;
            globals.storage.data.historyBoardOfValues = null;
            globals.screen = 10;
            if (null == this.newGame || void 0 == this.newGame) this.newGame = new ScreenNewGame(this.gameObj, this.world, this.menuState);
            this.newGame.showScreen();
            this.screenGroup.visible = !1
        },
        backBtnClicked: function() {
            globals.managers.audio.playSound("click");
            var a = this;
            this.hideScreen();
            window.setTimeout(function() {
                a.menuState.showMenuButtons()
            }, 100)
        },
        getNewGame: function() {
            return this.newGame
        },
        showScreen: function() {
            globals.managers.audio.playSound("menu_swoosh");
            this.showScreenFromBottom(this.screenGroup, !0, 250, 50, Phaser.Easing.Quintic.Out, this)
        },
        hideScreen: function() {
            globals.managers.audio.playSound("menu_swoosh");
            this.hideScreenToBottom(this.screenGroup, !0, 150, 0, Phaser.Easing.Linear.None, this)
        },
        hideScreenToBottom: function(a, b, d, c, e, f) {
            null === d && (d =
                300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a = this.gameObj.add.tween(a).to({
                y: this.world.height
            }, d, e, !0, c);
            !0 === b && a.onComplete.add(function() {
                void 0 !== f.screenGroup.hideOverClbck && f.screenGroup.hideOverClbck.call(f)
            }, this)
        },
        showScreenFromBottom: function(a, b, d, c, e, f) {
            null === d && (d = 300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a.y = this.world.height;
            a.visible = !0;
            a = this.gameObj.add.tween(a).to({
                y: 0
            }, d, e, !0, c);
            !0 === b && a.onComplete.add(function() {
                void 0 !== f.screenGroup.hideOverClbck &&
                    f.screenGroup.hideOverClbck.call(f)
            }, this);
            this.updateTexts()
        },
        updateTexts: function() {
            if ("480x800" == globals.resolution) {
                this.textContinue.fontSize = 20;
                this.textNew.fontSize = 20;
                var a = 175
            } else this.textContinue.fontSize = 30, this.textNew.fontSize = 30, a = 270;
            this.newTitle.setText(globals.managers.language.get("Start_new_question"));
            for (this.textContinue.setText(globals.managers.language.get("Continue")); this.textContinue.width > a;) this.textContinue.fontSize--;
            for (this.textNew.setText(globals.managers.language.get("Start_new")); this.textNew.width >
                a;) this.textNew.fontSize--
        }
    };
    var ScreenRules = function(a, b, d) {
        this.captureTexts = [globals.managers.language.get("Rule_2_opt_1"), globals.managers.language.get("Rule_2_opt_2"), globals.managers.language.get("Rule_2_opt_3")];
        this.kingsTexts = [globals.managers.language.get("Rule_3_opt_1"), globals.managers.language.get("Rule_3_opt_2"), globals.managers.language.get("Rule_3_opt_3")];
        this.captureTextCounter = globals.rules.capture;
        this.kingsTextCounter = globals.rules.king;
        this.shown = !1;
        this.screenGroup = null;
        this.screenName = "ScreenRules";
        this.world =
            b;
        this.gameObj = a;
        this.menuState = d;
        this.create()
    };
    ScreenRules.prototype = {
        create: function() {
            this.screenGroup = this.gameObj.add.group();
            this.screenGroup.name = this.screenName;
            this.screenGroup.visible = !1;
            var a = "480x800" == globals.resolution ? globals.calculateDialogSize(60, this.world.height - 20, 50) : globals.calculateDialogSize(250, this.world.height - 250, 69),
                b = this.gameObj.add.sprite(this.world.width / 2, a[0], "dialog_bg");
            b.frame = 0;
            b.anchor.set(.5);
            this.screenGroup.addChild(b);
            for (var d = 1; d < a.length - 1; d++) {
                var c = this.gameObj.add.sprite(this.world.width / 2, a[d],
                    "dialog_bg");
                c.frame = 1;
                c.anchor.set(.5);
                this.screenGroup.addChild(c)
            }
            c = this.gameObj.add.sprite(this.world.width / 2, a[a.length - 1], "dialog_bg");
            c.frame = 2;
            c.anchor.set(.5);
            this.screenGroup.addChild(c);
            if ("480x800" == globals.resolution) var c = {
                    font: globals.fonts.small,
                    fill: "#FFFFFF",
                    align: "center"
                },
                e = {
                    font: "16px saira_medium",
                    fill: "#eeeeee",
                    align: "center"
                };
            else c = {
                font: globals.fonts.main,
                fill: "#FFFFFF",
                align: "center"
            }, e = {
                font: "24px saira_medium",
                fill: "#eeeeee",
                align: "center"
            };
            var f = "480x800" == globals.resolution ?
                this.gameObj.add.button(this.world.width / 2 + 186, a[0] + 5, "X-ko", this.backBtnClicked, this) : this.gameObj.add.button(this.world.width / 2 + 272, a[0] + 4, "X-ko", this.backBtnClicked, this);
            f.anchor.set(.5);
            this.screenGroup.addChild(f);
            this.backBtn = f;
            f = "480x800" == globals.resolution ? this.gameObj.add.text(this.world.width / 2, a[0] + 6, globals.managers.language.get("Menu_btn_1"), c) : this.gameObj.add.text(this.world.width / 2, a[0] + 8, globals.managers.language.get("Menu_btn_1"), c);
            f.maxWidth = 400;
            f.anchor.set(.5);
            this.rulesTitle =
                f;
            this.screenGroup.addChild(f);
            a = "480x800" == globals.resolution ? globals.calculatePositions(a[0], a[a.length - 1], 32, 8) : globals.calculatePositions(a[0], a[a.length - 1], 48, 8);
            if ("480x800" == globals.resolution) {
                f = this.gameObj.add.text(this.world.width / 2 - b.width / 2 + 33, a[0] + 5, globals.managers.language.get("Rule_1"), c);
                f.maxWidth = 400;
                this.backwardsText = f;
                this.checkboxBackwards = d = this.gameObj.add.button(this.world.width / 2 + b.width / 2 - 115, a[0], "on_off1", this.clickBackwards, this);
                0 == globals.rules.captureBackwards ? d.loadTexture("on_off1",
                    0) : d.loadTexture("on_off2", 0);
                this.screenGroup.addChild(f);
                this.screenGroup.addChild(d);
                f = this.gameObj.add.button(this.world.width / 2 - 180, a[1] + 15, "white");
                f.anchor.set(0);
                f.scale.x = 360;
                f.scale.y = 1;
                this.screenGroup.addChild(f);
                this.line1 = f;
                f = this.gameObj.add.text(this.world.width / 2, a[2], globals.managers.language.get("Rule_2"), c);
                f.anchor.set(.5);
                f.maxWidth = 400;
                this.captureTextTitle = f;
                this.screenGroup.addChild(f);
                d = this.gameObj.add.sprite(this.world.width / 2 - b.width / 2 + 97, a[3], "language_bg", 0);
                d.anchor.set(.5);
                this.textBgStartCapt = d;
                this.screenGroup.addChild(d);
                for (d = 0; 6 >= d; d++) {
                    var g = this.gameObj.add.sprite(this.world.width / 2 - b.width / 2 + 127 + 30 * d, a[3], "language_bg", 1);
                    g.anchor.set(.5);
                    this.textBgCapt = g;
                    this.screenGroup.addChild(g)
                }
                d = this.gameObj.add.sprite(this.world.width / 2 + 120, a[3], "language_bg", 2);
                d.anchor.set(.5);
                this.textBgEndCapt = d;
                this.screenGroup.addChild(d);
                d = this.gameObj.add.text(this.world.width / 2, a[3] + 3, this.captureTexts[this.captureTextCounter], e);
                d.maxWidth = 100;
                d.anchor.set(.5);
                d.lineSpacing = -5;
                this.captureText = d;
                g = this.gameObj.add.button(this.world.width / 2 - 165, a[3], "bt_arrow_l", this.leftClickCapture, this);
                g.anchor.set(.5);
                this.captureLeft = g;
                var h = this.gameObj.add.button(this.world.width / 2 + 165, a[3], "bt_arrow_r", this.rightClickCapture, this);
                h.anchor.set(.5);
                this.captureRight = h;
                this.screenGroup.addChild(f);
                this.screenGroup.addChild(d);
                this.screenGroup.addChild(g);
                this.screenGroup.addChild(h);
                f = this.gameObj.add.text(this.world.width / 2, a[4], globals.managers.language.get("Rule_3"), c);
                f.anchor.set(.5);
                f.maxWidth = 400;
                this.kingsTextTitle = f;
                this.screenGroup.addChild(f);
                f = this.gameObj.add.sprite(this.world.width / 2 - b.width / 2 + 97, a[5], "language_bg", 0);
                f.anchor.set(.5);
                this.textBgStartKings = f;
                this.screenGroup.addChild(f);
                for (d = 0; 6 >= d; d++) f = this.gameObj.add.sprite(this.world.width / 2 - b.width / 2 + 127 + 30 * d, a[5], "language_bg", 1), f.anchor.set(.5), this.textBgKings = f, this.screenGroup.addChild(f);
                f = this.gameObj.add.sprite(this.world.width / 2 + 120, a[5], "language_bg", 2);
                f.anchor.set(.5);
                this.textBgEndKings = f;
                this.screenGroup.addChild(f);
                e = this.gameObj.add.text(this.world.width / 2, a[5] + 3, this.kingsTexts[this.kingsTextCounter], e);
                e.maxWidth = 50;
                e.anchor.set(.5);
                this.kingsText = e;
                f = this.gameObj.add.button(this.world.width / 2 - 165, a[5], "bt_arrow_l", this.leftClickKings, this);
                f.anchor.set(.5);
                this.kingsLeft = f;
                d = this.gameObj.add.button(this.world.width / 2 + 165, a[5], "bt_arrow_r", this.rightClickKings, this);
                d.anchor.set(.5);
                this.kingsRight = d;
                this.screenGroup.addChild(e);
                this.screenGroup.addChild(f);
                this.screenGroup.addChild(d);
                e = this.gameObj.add.button(this.world.width /
                    2 - 180, a[6] + 15, "white");
                e.anchor.set(0);
                e.scale.x = 360;
                e.scale.y = 1;
                this.screenGroup.addChild(e);
                this.line2 = e;
                c = this.gameObj.add.text(this.world.width / 2 - b.width / 2 + 33, a[7] + 5, globals.managers.language.get("Rule_4"), c);
                c.maxWidth = 400;
                this.kingText = c;
                b = this.gameObj.add.button(this.world.width / 2 + b.width / 2 - 115, a[7], "on_off1", this.clickKing, this)
            } else {
                f = this.gameObj.add.text(this.world.width / 2 - b.width / 2 + 60, a[0] + 15, globals.managers.language.get("Rule_1"), c);
                f.maxWidth = 400;
                this.backwardsText = f;
                this.checkboxBackwards =
                    d = this.gameObj.add.button(this.world.width / 2 + b.width / 2 - 180, a[0], "on_off1", this.clickBackwards, this);
                0 == globals.rules.captureBackwards ? d.loadTexture("on_off1", 0) : d.loadTexture("on_off2", 0);
                this.screenGroup.addChild(f);
                this.screenGroup.addChild(d);
                f = this.gameObj.add.button(this.world.width / 2 - 180, a[1] + 30, "white");
                f.anchor.set(0);
                f.scale.x = 360;
                f.scale.y = 1;
                this.screenGroup.addChild(f);
                this.line1 = f;
                f = this.gameObj.add.text(this.world.width / 2, a[2], globals.managers.language.get("Rule_2"), c);
                f.anchor.set(.5);
                f.maxWidth = 400;
                this.captureTextTitle = f;
                this.screenGroup.addChild(f);
                d = this.gameObj.add.sprite(this.world.width / 2 - b.width / 2 + 162, a[3], "language_bg", 0);
                d.anchor.set(.5);
                this.textBgStartCapt = d;
                this.screenGroup.addChild(d);
                for (d = 0; 5 >= d; d++) g = this.gameObj.add.sprite(this.world.width / 2 - b.width / 2 + 204 + 42 * d, a[3], "language_bg", 1), g.anchor.set(.5), this.textBgCapt = g, this.screenGroup.addChild(g);
                d = this.gameObj.add.sprite(this.world.width / 2 - b.width / 2 + 456, a[3], "language_bg", 2);
                d.anchor.set(.5);
                this.textBgEndCapt =
                    d;
                this.screenGroup.addChild(d);
                d = this.gameObj.add.text(this.world.width / 2, a[3], this.captureTexts[this.captureTextCounter], e);
                d.maxWidth = 100;
                d.anchor.set(.5);
                d.lineSpacing = -5;
                this.captureText = d;
                g = this.gameObj.add.button(this.world.width / 2 - 225, a[3], "bt_arrow_l", this.leftClickCapture, this);
                g.anchor.set(.5);
                this.captureLeft = g;
                h = this.gameObj.add.button(this.world.width / 2 + 225, a[3], "bt_arrow_r", this.rightClickCapture, this);
                h.anchor.set(.5);
                this.captureRight = h;
                this.screenGroup.addChild(f);
                this.screenGroup.addChild(d);
                this.screenGroup.addChild(g);
                this.screenGroup.addChild(h);
                f = this.gameObj.add.text(this.world.width / 2, a[4], globals.managers.language.get("Rule_3"), c);
                f.anchor.set(.5);
                f.maxWidth = 400;
                this.kingsTextTitle = f;
                this.screenGroup.addChild(f);
                f = this.gameObj.add.sprite(this.world.width / 2 - b.width / 2 + 162, a[5], "language_bg", 0);
                f.anchor.set(.5);
                this.textBgStartKings = f;
                this.screenGroup.addChild(f);
                for (d = 0; 5 >= d; d++) f = this.gameObj.add.sprite(this.world.width / 2 - b.width / 2 + 204 + 42 * d, a[5], "language_bg", 1), f.anchor.set(.5),
                    this.textBgKings = f, this.screenGroup.addChild(f);
                f = this.gameObj.add.sprite(this.world.width / 2 - b.width / 2 + 456, a[5], "language_bg", 2);
                f.anchor.set(.5);
                this.textBgEndKings = f;
                this.screenGroup.addChild(f);
                e = this.gameObj.add.text(this.world.width / 2, a[5], this.kingsTexts[this.kingsTextCounter], e);
                e.maxWidth = 50;
                e.anchor.set(.5);
                this.kingsText = e;
                f = this.gameObj.add.button(this.world.width / 2 - 225, a[5], "bt_arrow_l", this.leftClickKings, this);
                f.anchor.set(.5);
                this.kingsLeft = f;
                d = this.gameObj.add.button(this.world.width /
                    2 + 225, a[5], "bt_arrow_r", this.rightClickKings, this);
                d.anchor.set(.5);
                this.kingsRight = d;
                this.screenGroup.addChild(e);
                this.screenGroup.addChild(f);
                this.screenGroup.addChild(d);
                e = this.gameObj.add.button(this.world.width / 2 - 180, a[6] + 30, "white");
                e.anchor.set(0);
                e.scale.x = 360;
                e.scale.y = 1;
                this.screenGroup.addChild(e);
                this.line2 = e;
                c = this.gameObj.add.text(this.world.width / 2 - b.width / 2 + 60, a[7] + 15, globals.managers.language.get("Rule_4"), c);
                c.maxWidth = 400;
                this.kingText = c;
                b = this.gameObj.add.button(this.world.width /
                    2 + b.width / 2 - 180, a[7], "on_off1", this.clickKing, this)
            }
            this.checkboxKing = b;
            0 == globals.rules.kingPriority ? b.loadTexture("on_off1", 0) : b.loadTexture("on_off2", 0);
            this.screenGroup.addChild(c);
            this.screenGroup.addChild(b)
        },
        clickBackwards: function() {
            this.shown && (globals.managers.audio.playSound("click"), 0 == globals.rules.captureBackwards ? (globals.setRules1(!0), this.checkboxBackwards.loadTexture("on_off2", 0)) : (globals.setRules1(!1), this.checkboxBackwards.loadTexture("on_off1", 0)));
            this.saveData()
        },
        clickKing: function() {
            this.shown &&
                (globals.managers.audio.playSound("click"), 0 == globals.rules.kingPriority ? (globals.setRules4(!0), this.checkboxKing.loadTexture("on_off2", 0)) : (globals.setRules4(!1), this.checkboxKing.loadTexture("on_off1", 0)));
            this.saveData()
        },
        rightClickCapture: function() {
            this.shown && (globals.managers.audio.playSound("click"), this.captureTextCounter < this.captureTexts.length - 1 ? this.captureTextCounter++ : this.captureTextCounter = 0, this.captureText.setText(this.captureTexts[this.captureTextCounter]), globals.setRules2(this.captureTextCounter),
                this.updateTexts(), console.log(this.captureTextCounter));
            this.saveData()
        },
        leftClickCapture: function() {
            this.shown && (globals.managers.audio.playSound("click"), 0 < this.captureTextCounter ? this.captureTextCounter-- : this.captureTextCounter = this.captureTexts.length - 1, this.captureText.setText(this.captureTexts[this.captureTextCounter]), globals.setRules2(this.captureTextCounter), this.updateTexts(), console.log(this.captureTextCounter));
            this.saveData()
        },
        rightClickKings: function() {
            this.shown && (globals.managers.audio.playSound("click"),
                this.kingsTextCounter < this.kingsTexts.length - 1 ? this.kingsTextCounter++ : this.kingsTextCounter = 0, this.kingsText.setText(this.kingsTexts[this.kingsTextCounter]), globals.setRules3(this.kingsTextCounter), this.updateTexts(), console.log(this.kingsTextCounter));
            this.saveData()
        },
        leftClickKings: function() {
            this.shown && (globals.managers.audio.playSound("click"), 0 < this.kingsTextCounter ? this.kingsTextCounter-- : this.kingsTextCounter = this.kingsTexts.length - 1, this.kingsText.setText(this.kingsTexts[this.kingsTextCounter]),
                globals.setRules3(this.kingsTextCounter), this.updateTexts(), console.log(this.kingsTextCounter));
            this.saveData()
        },
        backBtnClicked: function() {
            if (this.shown) {
                globals.managers.audio.playSound("click");
                var a = this;
                this.saveData();
                this.hideScreen();
                window.setTimeout(function() {
                    a.menuState.showMenuButtons()
                }, 100)
            }
        },
        saveData: function() {
            globals.storage.data.captureBackwards = globals.rules.captureBackwards;
            globals.storage.data.capture = globals.rules.capture;
            globals.storage.data.king = globals.rules.king;
            globals.storage.data.kingPriority =
                globals.rules.kingPriority;
            globals.managers.storage.save()
        },
        showScreen: function() {
            globals.managers.audio.playSound("menu_swoosh");
            this.screenGroup.visible = !0;
            this.showScreenFromBottom(this.screenGroup, !0, 250, 50, Phaser.Easing.Quintic.Out, this)
        },
        hideScreen: function() {
            globals.managers.audio.playSound("menu_swoosh");
            this.hideScreenToBottom(this.screenGroup, !0, 150, 0, Phaser.Easing.Linear.None, this)
        },
        hideScreenToBottom: function(a, b, d, c, e, f) {
            null === d && (d = 300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a = this.gameObj.add.tween(a).to({
                y: this.world.height
            }, d, e, !0, c);
            var g = this;
            !0 === b && a.onComplete.add(function() {
                void 0 !== f.screenGroup.hideOverClbck && f.screenGroup.hideOverClbck.call(f);
                g.shown = !1
            }, this)
        },
        showScreenFromBottom: function(a, b, d, c, e, f) {
            null === d && (d = 300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a.y = this.world.height;
            a.visible = !0;
            a = this.gameObj.add.tween(a).to({
                y: 0
            }, d, e, !0, c);
            var g = this;
            !0 === b && a.onComplete.add(function() {
                void 0 !== f.screenGroup.hideOverClbck && f.screenGroup.hideOverClbck.call(f);
                g.shown = !0
            }, this);
            this.updateTexts()
        },
        updateTexts: function() {
            if ("480x800" == globals.resolution) {
                this.rulesTitle.fontSize = 20;
                this.backwardsText.fontSize = 20;
                this.captureTextTitle.fontSize = 20;
                this.captureText.fontSize = 20;
                this.kingsTextTitle.fontSize = 20;
                this.kingsText.fontSize = 20;
                this.kingText.fontSize = 20;
                var a = this.world.width / 2,
                    b = 225
            } else this.rulesTitle.fontSize = 30, this.backwardsText.fontSize = 30, this.captureTextTitle.fontSize = 30, this.captureText.fontSize = 30, this.kingsTextTitle.fontSize = 30, this.kingsText.fontSize =
                30, this.kingText.fontSize = 30, a = this.world.width / 2 - 60, b = 270;
            this.captureTexts = [globals.managers.language.get("Rule_2_opt_1"), globals.managers.language.get("Rule_2_opt_2"), globals.managers.language.get("Rule_2_opt_3")];
            this.kingsTexts = [globals.managers.language.get("Rule_3_opt_1"), globals.managers.language.get("Rule_3_opt_2"), globals.managers.language.get("Rule_3_opt_3")];
            this.rulesTitle.setText(globals.managers.language.get("Menu_btn_1"));
            for (this.backwardsText.setText(globals.managers.language.get("Rule_1")); this.backwardsText.width >
                a;) this.backwardsText.fontSize--;
            this.captureTextTitle.setText(globals.managers.language.get("Rule_2"));
            for (this.captureText.setText(this.captureTexts[this.captureTextCounter]); this.captureText.width > b;) this.captureText.fontSize--;
            this.kingsTextTitle.setText(globals.managers.language.get("Rule_3"));
            for (this.kingsText.setText(this.kingsTexts[this.kingsTextCounter]); this.kingsText.width > b;) this.kingsText.fontSize--;
            for (this.kingText.setText(globals.managers.language.get("Rule_4")); this.kingText.width >
                a;) this.kingText.fontSize--
        }
    };
    var ScreenSettings = function(a, b, d) {
        globals.managers.storage.load();
        this.stonesTextsCounter = globals.settings.stonesSkin;
        this.boardTextsCounter = globals.settings.boardSkin;
        this.languagesCounter = globals.settings.language;
        this.shown = !1;
        this.screenGroup = null;
        this.screenName = "ScreenRules";
        this.world = b;
        this.gameObj = a;
        this.menuState = d;
        this.create()
    };
    ScreenSettings.prototype = {
        create: function() {
            this.screenGroup = this.gameObj.add.group();
            this.screenGroup.name = this.screenName;
            this.screenGroup.visible = !1;
            var a = globals.getStonesSpritesToSettings(),
                b = "480x800" == globals.resolution ? globals.calculateDialogSize(60, this.world.height - 10, 50) : globals.calculateDialogSize(100, this.world.height - 50, 69),
                d = this.gameObj.add.sprite(this.world.width / 2, b[0], "dialog_bg");
            d.frame = 0;
            d.anchor.set(.5);
            this.screenGroup.addChild(d);
            for (var c = 1; c < b.length - 1; c++) {
                var e = this.gameObj.add.sprite(this.world.width /
                    2, b[c], "dialog_bg");
                e.frame = 1;
                e.anchor.set(.5);
                this.screenGroup.addChild(e)
            }
            e = this.gameObj.add.sprite(this.world.width / 2, b[b.length - 1], "dialog_bg");
            e.frame = 2;
            e.anchor.set(.5);
            this.screenGroup.addChild(e);
            if ("480x800" == globals.resolution) var e = {
                    font: globals.fonts.small,
                    fill: "#FFFFFF",
                    align: "center",
                    wordWrap: !0,
                    wordWrapWidth: 110
                },
                f = 120;
            else e = {
                font: globals.fonts.main,
                fill: "#FFFFFF",
                align: "center",
                wordWrap: !0,
                wordWrapWidth: 148
            }, f = 168;
            this.tabWidth = f;
            c = "480x800" == globals.resolution ? this.gameObj.add.button(this.world.width /
                2 + 186, b[0] + 5, "X-ko", this.backBtnClicked, this) : this.gameObj.add.button(this.world.width / 2 + 272, b[0] + 4, "X-ko", this.backBtnClicked, this);
            c.anchor.set(.5);
            this.screenGroup.addChild(c);
            this.backBtn = c;
            c = "480x800" == globals.resolution ? this.gameObj.add.text(this.world.width / 2, b[0] + 6, globals.managers.language.get("OptionsKey"), e) : this.gameObj.add.text(this.world.width / 2, b[0] + 8, globals.managers.language.get("OptionsKey"), e);
            c.maxWidth = 400;
            c.anchor.set(.5);
            this.settingsTitle = c;
            this.screenGroup.addChild(c);
            c = "480x800" ==
                globals.resolution ? globals.calculatePositions(b[0], this.world.height / 2 + 50, 32, 3) : globals.calculatePositions(b[0], this.world.height / 2 + 50, 48, 3);
            b = "480x800" == globals.resolution ? globals.calculatePositions(this.world.height / 2 - 30, b[b.length - 1], 32, 5) : globals.calculatePositions(this.world.height / 2, b[b.length - 1], 48, 5);
            b = c.concat(b);
            if ("480x800" == globals.resolution) {
                c = this.gameObj.add.sprite(this.world.width / 2 - 180, b[0], "language_bg", 0);
                c.anchor.set(.5);
                this.screenGroup.addChild(c);
                for (c = 0; 2 >= c; c++) {
                    var g = this.gameObj.add.sprite(this.world.width /
                        2 - 150 + 30 * c, b[0], "language_bg", 1);
                    g.anchor.set(.5);
                    this.screenGroup.addChild(g)
                }
                c = this.gameObj.add.sprite(this.world.width / 2 - 60, b[0], "language_bg", 2);
                c.anchor.set(.5);
                this.screenGroup.addChild(c);
                c = this.gameObj.add.text(this.world.width / 2 - f, b[0], globals.managers.language.get("Setting_5"), e);
                c.maxWidth = 100;
                this.playAs = c;
                c.anchor.set(.5);
                this.screenGroup.addChild(c);
                c = this.gameObj.add.button(this.world.width / 2 + 10, b[0], "bg_square_on", this.playAs1, this);
                c.anchor.set(.5);
                this.player1Picker = c;
                this.screenGroup.addChild(c);
                c = this.gameObj.add.text(this.world.width / 2 + 80, b[0] + 3, "VS", e);
                c.maxWidth = 100;
                c.anchor.set(.5);
                this.screenGroup.addChild(c);
                c = this.gameObj.add.button(this.world.width / 2 + 150, b[0], "bg_square_off", this.playAs2, this);
                c.anchor.set(.5);
                this.player2Picker = c;
                this.screenGroup.addChild(c);
                c = this.gameObj.add.button(this.world.width / 2 + 10, b[0], a[1], this.playAs1, this);
                c.scale.x = .5;
                c.scale.y = .5;
                c.anchor.set(.5);
                this.player1PickChecker = c;
                this.screenGroup.addChild(c);
                c = this.gameObj.add.button(this.world.width / 2 + 150,
                    b[0], a[2], this.playAs2, this);
                c.scale.x = .5;
                c.scale.y = .5;
                c.anchor.set(.5);
                this.player2PickChecker = c;
                this.screenGroup.addChild(c);
                c = this.gameObj.add.sprite(this.world.width / 2 + 30, b[0] + 25, "icons", 7)
            } else {
                c = this.gameObj.add.sprite(this.world.width / 2 - 260, b[1], "language_bg", 0);
                c.anchor.set(.5);
                this.screenGroup.addChild(c);
                for (c = 0; 2 >= c; c++) g = this.gameObj.add.sprite(this.world.width / 2 - 218 + 42 * c, b[1], "language_bg", 1), g.anchor.set(.5), this.screenGroup.addChild(g);
                c = this.gameObj.add.sprite(this.world.width / 2 - 92,
                    b[1], "language_bg", 2);
                c.anchor.set(.5);
                this.screenGroup.addChild(c);
                c = this.gameObj.add.text(this.world.width / 2 - f - 10, b[1], globals.managers.language.get("Setting_5"), e);
                c.maxWidth = 100;
                this.playAs = c;
                this.screenGroup.addChild(c);
                c.anchor.set(.5);
                c = this.gameObj.add.button(this.world.width / 2 + 30, b[1], "bg_square_on", this.playAs1, this);
                c.anchor.set(.5);
                this.player1Picker = c;
                this.screenGroup.addChild(c);
                c = this.gameObj.add.text(this.world.width / 2 + 120, b[1] + 3, "VS", e);
                c.maxWidth = 100;
                c.anchor.set(.5);
                this.screenGroup.addChild(c);
                c = this.gameObj.add.button(this.world.width / 2 + 210, b[1], "bg_square_off", this.playAs2, this);
                c.anchor.set(.5);
                this.player2Picker = c;
                this.screenGroup.addChild(c);
                c = this.gameObj.add.button(this.world.width / 2 + 30, b[1], a[1], this.playAs1, this);
                c.scale.x = .5;
                c.scale.y = .5;
                c.anchor.set(.5);
                this.player1PickChecker = c;
                this.screenGroup.addChild(c);
                c = this.gameObj.add.button(this.world.width / 2 + 210, b[1], a[2], this.playAs2, this);
                c.scale.x = .5;
                c.scale.y = .5;
                c.anchor.set(.5);
                this.player2PickChecker = c;
                this.screenGroup.addChild(c);
                c = this.gameObj.add.sprite(this.world.width / 2 + 60, b[1] + 35, "icons", 7)
            }
            c.anchor.set(.5);
            this.checkSprite = c;
            this.screenGroup.addChild(c);
            if ("480x800" == globals.resolution) {
                c = this.gameObj.add.sprite(this.world.width / 2 - 180, b[1], "language_bg", 0);
                c.anchor.set(.5);
                this.screenGroup.addChild(c);
                for (c = 0; 2 >= c; c++) g = this.gameObj.add.sprite(this.world.width / 2 - 150 + 30 * c, b[1], "language_bg", 1), g.anchor.set(.5), this.screenGroup.addChild(g);
                c = this.gameObj.add.sprite(this.world.width / 2 - 60, b[1], "language_bg", 2);
                c.anchor.set(.5);
                this.screenGroup.addChild(c);
                c = this.gameObj.add.text(this.world.width / 2 - f, b[1], globals.managers.language.get("Setting_6"), e);
                c.maxWidth = 100;
                c.anchor.set(.5);
                this.stonesSkinText = c;
                this.screenGroup.addChild(c);
                c = this.gameObj.add.button(this.world.width / 2, b[1], "bt_arrow_l", this.leftClickStones, this);
                c.anchor.set(.5);
                g = this.gameObj.add.button(this.world.width / 2 + 160, b[1], "bt_arrow_r", this.rightClickStones, this);
                g.anchor.set(.5);
                var h = this.gameObj.add.sprite(this.world.width / 2 + 80, b[1], "language_bg_full");
                h.anchor.set(.5);
                a = this.gameObj.add.sprite(this.world.width / 2 + 80, b[1], a[0])
            } else {
                c = this.gameObj.add.sprite(this.world.width / 2 - 260, b[2], "language_bg", 0);
                c.anchor.set(.5);
                this.screenGroup.addChild(c);
                for (c = 0; 2 >= c; c++) g = this.gameObj.add.sprite(this.world.width / 2 - 218 + 42 * c, b[2], "language_bg", 1), g.anchor.set(.5), this.screenGroup.addChild(g);
                c = this.gameObj.add.sprite(this.world.width / 2 - 92, b[2], "language_bg", 2);
                c.anchor.set(.5);
                this.screenGroup.addChild(c);
                c = this.gameObj.add.text(this.world.width / 2 - f - 10,
                    b[2], globals.managers.language.get("Setting_6"), e);
                c.maxWidth = 100;
                this.stonesSkinText = c;
                this.stonesSkinText.anchor.set(.5);
                this.screenGroup.addChild(c);
                c = this.gameObj.add.button(this.world.width / 2 + 10, b[2], "bt_arrow_l", this.leftClickStones, this);
                c.anchor.set(.5);
                g = this.gameObj.add.button(this.world.width / 2 + 230, b[2], "bt_arrow_r", this.rightClickStones, this);
                g.anchor.set(.5);
                h = this.gameObj.add.sprite(this.world.width / 2 + 120, b[2], "language_bg_full");
                h.anchor.set(.5);
                a = this.gameObj.add.sprite(this.world.width /
                    2 + 120, b[2], a[0])
            }
            a.anchor.set(.5);
            this.stonesSkin = a;
            this.screenGroup.addChild(c);
            this.screenGroup.addChild(g);
            this.screenGroup.addChild(h);
            this.screenGroup.addChild(a);
            if ("480x800" == globals.resolution) {
                a = this.gameObj.add.sprite(this.world.width / 2 - 180, b[2], "language_bg", 0);
                a.anchor.set(.5);
                this.screenGroup.addChild(a);
                for (c = 0; 2 >= c; c++) a = this.gameObj.add.sprite(this.world.width / 2 - 150 + 30 * c, b[2], "language_bg", 1), a.anchor.set(.5), this.screenGroup.addChild(a);
                a = this.gameObj.add.sprite(this.world.width /
                    2 - 60, b[2], "language_bg", 2);
                a.anchor.set(.5);
                this.screenGroup.addChild(a);
                f = this.gameObj.add.text(this.world.width / 2 - f, b[2], globals.managers.language.get("Setting_7"), e);
                f.maxWidth = 100;
                f.anchor.set(.5);
                this.boardSkinText = f;
                this.screenGroup.addChild(f);
                f = this.gameObj.add.button(this.world.width / 2, b[2], "bt_arrow_l", this.leftClickBoard, this);
                f.anchor.set(.5);
                a = this.gameObj.add.button(this.world.width / 2 + 160, b[2], "bt_arrow_r", this.rightClickBoard, this);
                a.anchor.set(.5);
                c = this.gameObj.add.sprite(this.world.width /
                    2 + 80, b[2], "language_bg_full");
                c.anchor.set(.5);
                g = globals.getBoardSprite();
                g = this.gameObj.add.sprite(this.world.width / 2 + 81, b[2], g + "_n")
            } else {
                a = this.gameObj.add.sprite(this.world.width / 2 - 260, b[3], "language_bg", 0);
                a.anchor.set(.5);
                this.screenGroup.addChild(a);
                for (c = 0; 2 >= c; c++) a = this.gameObj.add.sprite(this.world.width / 2 - 218 + 42 * c, b[3], "language_bg", 1), a.anchor.set(.5), this.screenGroup.addChild(a);
                a = this.gameObj.add.sprite(this.world.width / 2 - 92, b[3], "language_bg", 2);
                a.anchor.set(.5);
                this.screenGroup.addChild(a);
                f = this.gameObj.add.text(this.world.width / 2 - f - 10, b[3], globals.managers.language.get("Setting_7"), e);
                f.maxWidth = 100;
                this.boardSkinText = f;
                this.screenGroup.addChild(f);
                this.boardSkinText.anchor.set(.5);
                f = this.gameObj.add.button(this.world.width / 2 + 10, b[3], "bt_arrow_l", this.leftClickBoard, this);
                f.anchor.set(.5);
                a = this.gameObj.add.button(this.world.width / 2 + 230, b[3], "bt_arrow_r", this.rightClickBoard, this);
                a.anchor.set(.5);
                c = this.gameObj.add.sprite(this.world.width / 2 + 120, b[3], "language_bg_full");
                c.anchor.set(.5);
                g = globals.getBoardSprite();
                g = this.gameObj.add.sprite(this.world.width / 2 + 120, b[3] + 1, g + "_n")
            }
            g.anchor.set(.5);
            this.boardSkin = g;
            this.screenGroup.addChild(f);
            this.screenGroup.addChild(a);
            this.screenGroup.addChild(c);
            this.screenGroup.addChild(g);
            "480x800" == globals.resolution ? (this.highlightText = f = this.gameObj.add.text(this.world.width / 2 - d.width / 2 + 33, b[3] + 5, globals.managers.language.get("Setting_4"), e), f.maxWidth = 400, this.checkboxHighlight = a = this.gameObj.add.button(this.world.width / 2 + d.width / 2 - 115, b[3],
                "on_off1", this.highlightButton, this), 0 == globals.settings.highlight ? a.loadTexture("on_off1", 0) : a.loadTexture("on_off2", 0), this.screenGroup.addChild(f), this.screenGroup.addChild(a), f = this.gameObj.add.button(this.world.width / 2 - 180, b[4] + 15, "white"), f.anchor.set(0), f.scale.x = 360, f.scale.y = 1, this.screenGroup.addChild(f), this.line1 = f, SOUNDS_ENABLED && (f = this.gameObj.add.text(this.world.width / 2 - d.width / 2 + 33, b[5] + 5, globals.managers.language.get("Music"), e), f.maxWidth = 400, this.musicText = f, this.checkboxMusic =
                a = this.gameObj.add.button(this.world.width / 2 + d.width / 2 - 115, b[5], "on_off1", this.musicButton, this), globals.settings.music ? a.loadTexture("on_off2", 0) : a.loadTexture("on_off1", 0), this.screenGroup.addChild(f), this.screenGroup.addChild(a), f = this.gameObj.add.button(this.world.width / 2 - 180, b[6] + 15, "white"), f.anchor.set(0), f.scale.x = 360, f.scale.y = 1, this.screenGroup.addChild(f), this.line2 = f, e = this.gameObj.add.text(this.world.width / 2 - d.width / 2 + 33, b[7] + 5, globals.managers.language.get("Sounds"), e), e.maxWidth = 400,
                this.soundsText = e, this.checkboxSounds = d = this.gameObj.add.button(this.world.width / 2 + d.width / 2 - 115, b[7], "on_off1", this.soundsButton, this), globals.settings.sounds ? d.loadTexture("on_off2", 0) : d.loadTexture("on_off1", 0), this.screenGroup.addChild(e), this.screenGroup.addChild(d))) : (f = this.gameObj.add.text(this.world.width / 2 - d.width / 2 + 60, b[4] + 17, globals.managers.language.get("Setting_4"), e), f.maxWidth = 400, this.highlightText = f, this.checkboxHighlight = a = this.gameObj.add.button(this.world.width / 2 + d.width / 2 - 180,
                b[4], "on_off1", this.highlightButton, this), 0 == globals.settings.highlight ? a.loadTexture("on_off1", 0) : a.loadTexture("on_off2", 0), this.screenGroup.addChild(f), this.screenGroup.addChild(a), f = this.gameObj.add.button(this.world.width / 2 - 180, b[5] + 30, "white"), f.anchor.set(0), f.scale.x = 360, f.scale.y = 1, this.screenGroup.addChild(f), this.line1 = f, SOUNDS_ENABLED && (f = this.gameObj.add.text(this.world.width / 2 - d.width / 2 + 60, b[7] + 17, globals.managers.language.get("Music"), e), f.maxWidth = 400, this.musicText = f, this.checkboxMusic =
                a = this.gameObj.add.button(this.world.width / 2 + d.width / 2 - 180, b[7], "on_off1", this.musicButton, this), globals.settings.music ? a.loadTexture("on_off2", 0) : a.loadTexture("on_off1", 0), this.screenGroup.addChild(f), this.screenGroup.addChild(a), f = this.gameObj.add.button(this.world.width / 2 - 180, b[8] + 30, "white"), f.anchor.set(0), f.scale.x = 360, f.scale.y = 1, this.screenGroup.addChild(f), this.line2 = f, e = this.gameObj.add.text(this.world.width / 2 - d.width / 2 + 60, b[9] + 17, globals.managers.language.get("Sounds"), e), e.maxWidth = 400,
                this.soundsText = e, this.checkboxSounds = d = this.gameObj.add.button(this.world.width / 2 + d.width / 2 - 180, b[9], "on_off1", this.soundsButton, this), globals.settings.sounds ? d.loadTexture("on_off2", 0) : d.loadTexture("on_off1", 0), this.screenGroup.addChild(e), this.screenGroup.addChild(d)));
            0 == globals.settings.playAs ? (this.player1Picker.loadTexture("bg_square_on", 0), this.player2Picker.loadTexture("bg_square_off", 0), this.checkSprite.x = "480x800" == globals.resolution ? this.world.width / 2 + 30 : this.world.width / 2 + 60, globals.settings.playAs =
                0) : (this.player2Picker.loadTexture("bg_square_on", 0), this.player1Picker.loadTexture("bg_square_off", 0), this.checkSprite.x = "480x800" == globals.resolution ? this.world.width / 2 + 170 : this.world.width / 2 + 240, globals.settings.playAs = 1)
        },
        playAs1: function() {
            this.shown && (globals.managers.audio.playSound("click"), this.player1Picker.loadTexture("bg_square_on", 0), this.player2Picker.loadTexture("bg_square_off", 0), this.checkSprite.x = "480x800" == globals.resolution ? this.world.width / 2 + 30 : this.world.width / 2 + 60, globals.settings.playAs =
                0);
            this.saveData()
        },
        playAs2: function() {
            this.shown && (globals.managers.audio.playSound("click"), this.player2Picker.loadTexture("bg_square_on", 0), this.player1Picker.loadTexture("bg_square_off", 0), this.checkSprite.x = "480x800" == globals.resolution ? this.world.width / 2 + 170 : this.world.width / 2 + 240, globals.settings.playAs = 1);
            this.saveData()
        },
        leftClickLanguage: function() {
            this.shown && (globals.managers.audio.playSound("click"), 0 < this.languagesCounter ? this.languagesCounter-- : this.languagesCounter = 6, globals.managers.language.setLanguage(this.languagesCounter),
                this.languageSkin.frame = this.languagesCounter, globals.settings.language = this.languagesCounter, this.updateTexts());
            this.saveData()
        },
        rightClickLanguage: function() {
            this.shown && (globals.managers.audio.playSound("click"), 5 >= this.languagesCounter ? this.languagesCounter++ : this.languagesCounter = 0, globals.managers.language.setLanguage(this.languagesCounter), this.languageSkin.frame = this.languagesCounter, globals.settings.language = this.languagesCounter, this.updateTexts());
            this.saveData()
        },
        leftClickStones: function() {
            this.shown &&
                (globals.managers.audio.playSound("click"), 0 < this.stonesTextsCounter ? this.stonesTextsCounter-- : this.stonesTextsCounter = 5, globals.setStonesSkin(this.stonesTextsCounter), this.stonesSkin.loadTexture(globals.getStonesSpritesToSettings()[0], 0), this.player1PickChecker.loadTexture(globals.getStonesSpritesToSettings()[1], 0), this.player2PickChecker.loadTexture(globals.getStonesSpritesToSettings()[2], 0));
            this.saveData()
        },
        rightClickStones: function() {
            this.shown && (globals.managers.audio.playSound("click"), 3 >=
                this.stonesTextsCounter ? this.stonesTextsCounter++ : this.stonesTextsCounter = 0, globals.setStonesSkin(this.stonesTextsCounter), this.stonesSkin.loadTexture(globals.getStonesSpritesToSettings()[0], 0), this.player1PickChecker.loadTexture(globals.getStonesSpritesToSettings()[1], 0), this.player2PickChecker.loadTexture(globals.getStonesSpritesToSettings()[2], 0));
            this.saveData()
        },
        leftClickBoard: function() {
            this.shown && (globals.managers.audio.playSound("click"), 0 < this.boardTextsCounter ? this.boardTextsCounter-- :
                this.boardTextsCounter = 4, globals.setBoardSkin(this.boardTextsCounter), this.boardSkin.loadTexture(globals.getBoardSprite() + "_n", 0));
            this.saveData()
        },
        rightClickBoard: function() {
            this.shown && (globals.managers.audio.playSound("click"), 3 >= this.boardTextsCounter ? this.boardTextsCounter++ : this.boardTextsCounter = 0, globals.setBoardSkin(this.boardTextsCounter), this.boardSkin.loadTexture(globals.getBoardSprite() + "_n", 0));
            this.saveData()
        },
        highlightButton: function() {
            this.shown && (globals.managers.audio.playSound("click"),
                0 == globals.settings.highlight ? (globals.setHighlight(!0), this.checkboxHighlight.loadTexture("on_off2", 0)) : (globals.setHighlight(!1), this.checkboxHighlight.loadTexture("on_off1", 0)));
            this.saveData()
        },
        musicButton: function() {
            this.shown && (globals.managers.audio.toggleMusic(), globals.settings.music ? (globals.managers.audio.playSound("click"), globals.setMusic(!1), this.checkboxMusic.loadTexture("on_off1", 0), globals.settings.music = !1) : (globals.managers.audio.playSound("click"), globals.setMusic(!0), this.checkboxMusic.loadTexture("on_off2",
                0), globals.settings.music = !0));
            this.saveData()
        },
        soundsButton: function() {
            this.shown && (globals.managers.audio.toggleSounds(), globals.settings.sounds ? (globals.setSounds(!1), this.checkboxSounds.loadTexture("on_off1", 0), globals.settings.sounds = !1) : (globals.managers.audio.playSound("click"), globals.setSounds(!0), this.checkboxSounds.loadTexture("on_off2", 0), globals.settings.sounds = !0));
            this.saveData()
        },
        backBtnClicked: function() {
            if (this.shown) {
                globals.managers.audio.playSound("click");
                var a = this;
                this.saveData();
                this.hideScreen();
                window.setTimeout(function() {
                    a.menuState.showMenuButtons()
                }, 100)
            }
        },
        saveData: function() {
            globals.storage.data.language = globals.settings.language;
            globals.storage.data.playAs = globals.settings.playAs;
            globals.storage.data.stonesSkin = globals.settings.stonesSkin;
            globals.storage.data.boardSkin = globals.settings.boardSkin;
            globals.storage.data.highlight = globals.settings.highlight;
            globals.storage.data.music = globals.settings.music;
            globals.storage.data.sounds = globals.settings.sounds;
            globals.managers.storage.save()
        },
        showScreen: function() {
            globals.managers.audio.playSound("menu_swoosh");
            this.showScreenFromBottom(this.screenGroup, !0, 250, 50, Phaser.Easing.Quintic.Out, this)
        },
        hideScreen: function() {
            globals.managers.audio.playSound("menu_swoosh");
            this.hideScreenToBottom(this.screenGroup, !0, 150, 0, Phaser.Easing.Linear.None, this)
        },
        hideScreenToBottom: function(a, b, d, c, e, f) {
            null === d && (d = 300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a = this.gameObj.add.tween(a).to({
                y: this.world.height
            }, d, e, !0, c);
            var g = this;
            !0 ===
                b && a.onComplete.add(function() {
                    void 0 !== f.screenGroup.hideOverClbck && f.screenGroup.hideOverClbck.call(f);
                    g.shown = !1
                }, this)
        },
        showScreenFromBottom: function(a, b, d, c, e, f) {
            null === d && (d = 300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a.y = this.world.height;
            a.visible = !0;
            a = this.gameObj.add.tween(a).to({
                y: 0
            }, d, e, !0, c);
            var g = this;
            !0 === b && a.onComplete.add(function() {
                void 0 !== f.screenGroup.hideOverClbck && f.screenGroup.hideOverClbck.call(f);
                g.shown = !0
            }, this);
            this.updateTexts()
        },
        updateTexts: function() {
            if ("480x800" ==
                globals.resolution) {
                this.playAs.fontSize = 20;
                this.stonesSkinText.fontSize = 20;
                this.boardSkinText.fontSize = 20;
                var a = 85
            } else this.playAs.fontSize = 30, this.stonesSkinText.fontSize = 30, this.boardSkinText.fontSize = 30, a = 115;
            this.settingsTitle.setText(globals.managers.language.get("OptionsKey"));
            for (this.playAs.setText(globals.managers.language.get("Setting_5")); this.playAs.width > a;) this.playAs.fontSize--;
            for (this.stonesSkinText.setText(globals.managers.language.get("Setting_6")); this.stonesSkinText.width > a;) this.stonesSkinText.fontSize--;
            this.boardSkinText.setText(globals.managers.language.get("Setting_7"));
            if ("480x800" == globals.resolution)
                for (; this.boardSkinText.width > a - 5;) this.boardSkinText.fontSize--;
            else
                for (; this.boardSkinText.width > a - 10;) this.boardSkinText.fontSize--;
            this.highlightText.setText(globals.managers.language.get("Setting_4"));
            SOUNDS_ENABLED && (this.musicText.setText(globals.managers.language.get("Music")), this.soundsText.setText(globals.managers.language.get("Sounds")))
        }
    };
    var ScreenSure = function(a, b, d, c) {
        this.screenGroup = null;
        this.screenName = "ScreenSure";
        this.world = b;
        this.cameFrom = c;
        this.gameObj = a;
        this.menuState = d;
        this.create()
    };
    ScreenSure.prototype = {
        create: function() {
            this.screenGroup = this.gameObj.add.group();
            this.screenGroup.name = this.screenName;
            this.screenGroup.visible = !1;
            var a = "480x800" == globals.resolution ? globals.calculateDialogSize(this.world.height / 2 - 175, this.world.height / 2 + 175, 50) : globals.calculateDialogSize(this.world.height / 2 - 300, this.world.height / 2 + 300, 69),
                b = this.gameObj.add.sprite(this.world.width / 2, a[0], "dialog_bg");
            b.frame = 0;
            b.anchor.set(.5);
            this.screenGroup.addChild(b);
            for (b = 1; b < a.length - 1; b++) {
                var d = this.gameObj.add.sprite(this.world.width /
                    2, a[b], "dialog_bg");
                d.frame = 1;
                d.anchor.set(.5);
                this.screenGroup.addChild(d)
            }
            b = this.gameObj.add.sprite(this.world.width / 2, a[a.length - 1], "dialog_bg");
            b.frame = 2;
            b.anchor.set(.5);
            this.screenGroup.addChild(b);
            var c = "480x800" == globals.resolution ? {
                    font: globals.fonts.small,
                    fill: "#FFFFFF",
                    align: "center"
                } : {
                    font: globals.fonts.main,
                    fill: "#FFFFFF",
                    align: "center"
                },
                b = "480x800" == globals.resolution ? this.gameObj.add.button(this.world.width / 2 + 185, a[0] + 5, "X-ko", this.backBtnClicked, this) : this.gameObj.add.button(this.world.width /
                    2 + 272, a[0] + 4, "X-ko", this.backBtnClicked, this);
            b.anchor.set(.5);
            this.screenGroup.addChild(b);
            this.backBtn = b;
            this.title;
            this.title = "restart" == this.cameFrom ? globals.managers.language.get("restart") : globals.managers.language.get("Back_2");
            d = this.gameObj.add.text(this.world.width / 2, a[0] + 5, this.title, c);
            d.maxWidth = 400;
            d.anchor.set(.5);
            this.restartTitle = d;
            var e = "480x800" == globals.resolution ? globals.calculatePositions(a[0], a[a.length - 1], 32, 3) : globals.calculatePositions(a[0], a[a.length - 1] + 50, 48, 3),
                a = this.gameObj.add.text(this.world.width /
                    2, e[0], globals.managers.language.get("Prompt"), c);
            a.maxWidth = 400;
            a.anchor.set(.5);
            this.restartQuestion = a;
            var f = this.gameObj.add.button(this.world.width / 2, e[1], "bt_instruction_on", this.yesBtn, this);
            f.anchor.set(.5);
            var g = this.gameObj.add.text(this.world.width / 2, e[1] + 2, globals.managers.language.get("Yes"), c);
            g.anchor.set(.5, .5);
            this.textYes = g;
            var h = this.gameObj.add.button(this.world.width / 2, e[2], "bt_instruction_off", this.noBtn, this);
            h.anchor.set(.5);
            c = this.gameObj.add.text(this.world.width / 2, e[2] + 2,
                globals.managers.language.get("No"), c);
            c.anchor.set(.5, .5);
            this.textNo = c;
            this.screenGroup.addChild(f);
            this.screenGroup.addChild(g);
            this.screenGroup.addChild(h);
            this.screenGroup.addChild(c);
            this.screenGroup.addChild(b);
            this.screenGroup.addChild(d);
            this.screenGroup.addChild(a);
            this.yesBtn = f;
            this.noBtn = h
        },
        getButtons: function() {
            return [this.yesBtn, this.noBtn]
        },
        yesBtn: function() {
            globals.managers.audio.playSound("click");
            var a = this;
            "restart" == this.cameFrom ? (globals.onGameOver(globals.GAME_OVER_BY_USER),
                this.hideScreen(), window.setTimeout(function() {
                    globals.storage.data.board = null;
                    globals.storage.data.lastGameAi = null;
                    globals.storage.data.lastPlayer = null;
                    globals.storage.data.historyMoves = null;
                    globals.storage.data.removedCheckers = null;
                    globals.storage.data.historyBoardOfValues = null;
                    globals.screen = -10;
                    a.gameObj.state.restart()
                }, 100)) : (globals.onGameOver(globals.GAME_OVER_BY_USER), globals.screen = -1, this.hideScreen(), window.setTimeout(function() {
                globals.screen = -1;
                a.menuState.goToMenu()
            }, 100))
        },
        noBtn: function() {
            globals.screen = -10;
            globals.managers.audio.playSound("click");
            this.backBtnClicked();
            globals.setPauseState(!1)
        },
        backBtnClicked: function() {
            globals.screen = -10;
            globals.managers.audio.playSound("click");
            this.hideScreen();
            this.menuState.returnFromDialogScreen();
            globals.setPauseState(!1)
        },
        showScreen: function() {
            globals.managers.audio.playSound("menu_swoosh");
            this.showScreenFromBottom(this.screenGroup, !0, 250, 50, Phaser.Easing.Quintic.Out, this)
        },
        hideScreen: function() {
            globals.managers.audio.playSound("menu_swoosh");
            this.hideScreenToBottom(this.screenGroup, !0, 150, 0, Phaser.Easing.Linear.None, this)
        },
        hideScreenToBottom: function(a, b, d, c, e, f) {
            null === d && (d = 300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a = this.gameObj.add.tween(a).to({
                y: this.world.height
            }, d, e, !0, c);
            !0 === b && a.onComplete.add(function() {
                void 0 !== f.screenGroup.hideOverClbck && f.screenGroup.hideOverClbck.call(f)
            }, this)
        },
        showScreenFromBottom: function(a, b, d, c, e, f) {
            null === d && (d = 300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a.y = this.world.height;
            a.visible = !0;
            a = this.gameObj.add.tween(a).to({
                    y: 0
                },
                d, e, !0, c);
            !0 === b && a.onComplete.add(function() {
                void 0 !== f.screenGroup.hideOverClbck && f.screenGroup.hideOverClbck.call(f)
            }, this);
            this.updateTexts()
        },
        getGroup: function() {
            return this.screenGroup
        },
        updateTexts: function() {
            this.restartQuestion.setText(globals.managers.language.get("Prompt"));
            this.textYes.setText(globals.managers.language.get("Yes"));
            this.textNo.setText(globals.managers.language.get("No"))
        }
    };
    var ScreenExit = function(a, b, d) {
        this.screenGroup = null;
        this.screenName = "ScreenExit";
        this.world = b;
        this.gameObj = a;
        this.menuState = d;
        this.create()
    };
    ScreenExit.prototype = {
        create: function() {
            this.screenGroup = this.gameObj.add.group();
            this.screenGroup.name = this.screenName;
            this.screenGroup.visible = !1;
            var a = "480x800" == globals.resolution ? globals.calculateDialogSize(this.world.height / 2, this.world.height, 50) : globals.calculateDialogSize(this.world.height / 2 + 100, this.world.height - this.world.height / 2 / 15, 69),
                b = this.gameObj.add.sprite(this.world.width / 2, a[0], "dialog_bg");
            b.frame = 0;
            b.anchor.set(.5);
            this.screenGroup.addChild(b);
            for (b = 1; b < a.length - 1; b++) {
                var d =
                    this.gameObj.add.sprite(this.world.width / 2, a[b], "dialog_bg");
                d.frame = 1;
                d.anchor.set(.5);
                this.screenGroup.addChild(d)
            }
            b = this.gameObj.add.sprite(this.world.width / 2, a[a.length - 1], "dialog_bg");
            b.frame = 2;
            b.anchor.set(.5);
            this.screenGroup.addChild(b);
            d = "480x800" == globals.resolution ? {
                font: globals.fonts.small,
                fill: "#FFFFFF",
                align: "center"
            } : {
                font: globals.fonts.main,
                fill: "#FFFFFF",
                align: "center"
            };
            b = "480x800" == globals.resolution ? this.gameObj.add.button(this.world.width / 2 + 185, a[0] + 5, "X-ko", this.backBtnClicked,
                this) : this.gameObj.add.button(this.world.width / 2 + 272, a[0] + 4, "X-ko", this.backBtnClicked, this);
            b.anchor.set(.5);
            this.screenGroup.addChild(b);
            this.backBtn = b;
            var c = "480x800" == globals.resolution ? globals.calculatePositions(a[0], a[a.length - 1], 32, 3) : globals.calculatePositions(a[0], a[a.length - 1] + 50, 48, 3),
                a = this.gameObj.add.text(this.world.width / 2, c[0], globals.managers.language.get("Prompt"), d);
            a.maxWidth = 400;
            a.anchor.set(.5);
            this.exitQuestion = a;
            this.yesButton = this.gameObj.add.button(this.world.width / 2, c[1] -
                10, "bt_instruction_on", this.yesBtn, this);
            this.yesButton.anchor.set(.5);
            var e = this.gameObj.add.text(this.world.width / 2, c[1] - 8, globals.managers.language.get("Yes"), d);
            e.anchor.set(.5, .5);
            this.textYes = e;
            this.noButton = this.gameObj.add.button(this.world.width / 2, c[2], "bt_instruction_off", this.noBtn, this);
            this.noButton.anchor.set(.5);
            d = this.gameObj.add.text(this.world.width / 2, c[2] + 2, globals.managers.language.get("No"), d);
            d.anchor.set(.5, .5);
            this.textNo = d;
            this.screenGroup.addChild(this.yesButton);
            this.screenGroup.addChild(e);
            this.screenGroup.addChild(this.noButton);
            this.screenGroup.addChild(d);
            this.screenGroup.addChild(b);
            this.screenGroup.addChild(a)
        },
        getButtons: function() {
            return [this.yesButton, this.noButton]
        },
        yesBtn: function() {
            globals.managers.audio.playSound("click");
            1 == globals.version && navigator.app.exitApp();
            this.backBtnClicked()
        },
        noBtn: function() {
            globals.managers.audio.playSound("click");
            this.backBtnClicked()
        },
        backBtnClicked: function() {
            globals.managers.audio.playSound("click");
            var a = this;
            this.hideScreen();
            window.setTimeout(function() {
                    a.menuState.showMenuButtons()
                },
                100)
        },
        showScreen: function() {
            globals.managers.audio.playSound("menu_swoosh");
            this.showScreenFromBottom(this.screenGroup, !0, 250, 50, Phaser.Easing.Quintic.Out, this)
        },
        hideScreen: function() {
            globals.managers.audio.playSound("menu_swoosh");
            this.hideScreenToBottom(this.screenGroup, !0, 150, 0, Phaser.Easing.Linear.None, this)
        },
        hideScreenToBottom: function(a, b, d, c, e, f) {
            null === d && (d = 300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a = this.gameObj.add.tween(a).to({
                y: this.world.height
            }, d, e, !0, c);
            !0 === b &&
                a.onComplete.add(function() {
                    void 0 !== f.screenGroup.hideOverClbck && f.screenGroup.hideOverClbck.call(f);
                    globals.screen = -1
                }, this)
        },
        showScreenFromBottom: function(a, b, d, c, e, f) {
            null === d && (d = 300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a.y = this.world.height;
            a.visible = !0;
            a = this.gameObj.add.tween(a).to({
                y: 0
            }, d, e, !0, c);
            !0 === b && a.onComplete.add(function() {
                void 0 !== f.screenGroup.hideOverClbck && f.screenGroup.hideOverClbck.call(f)
            }, this);
            this.updateTexts()
        },
        updateTexts: function() {
            this.exitQuestion.setText(globals.managers.language.get("Prompt"));
            this.textYes.setText(globals.managers.language.get("Yes"));
            this.textNo.setText(globals.managers.language.get("No"))
        }
    };
    var ScreenResult = function(a, b, d, c, e) {
        var f = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null;
        this.screenGroup = null;
        this.screenName = "ScreenResult";
        this.world = b;
        this.gameObj = a;
        this.menuState = d;
        this.gameState = e;
        this.winner = f;
        this.win = c;
        this.create()
    };
    ScreenResult.prototype = {
        create: function() {
            if (this.win) globals.onGameOver(globals.GAME_OVER_WIN);
            else globals.onGameOver(globals.GAME_OVER_LOSE);
            globals.setPauseState(!0);
            this.screenGroup = this.gameObj.add.group();
            this.screenGroup.name = this.screenName;
            this.screenGroup.visible = !1;
            if ("480x800" == globals.resolution) {
                var a = globals.calculateDialogSize(this.world.height / 2 - 250, this.world.height / 2 + 250, 50),
                    b = this.gameObj.add.sprite(this.world.width / 2, a[0], "dialog_bg");
                b.frame = 0;
                b.anchor.set(.5);
                this.screenGroup.addChild(b);
                for (b = 1; b < a.length - 1; b++) {
                    var d = this.gameObj.add.sprite(this.world.width / 2, a[b], "dialog_bg");
                    d.frame = 1;
                    d.anchor.set(.5);
                    this.screenGroup.addChild(d)
                }
                b = this.gameObj.add.sprite(this.world.width / 2, a[a.length - 1], "dialog_bg");
                b.frame = 2;
                b.anchor.set(.5);
                this.screenGroup.addChild(b);
                b = {
                    font: globals.fonts.small,
                    fill: "#FFFFFF",
                    align: "center"
                };
                d = "LOSE";
                null == this.win ? d = "DRAW" : this.win && (d = "WIN");
                if (null != this.winner) {
                    var c = this.gameObj.add.text(this.world.width / 2, a[0] + 8, this.winner, b);
                    c.maxWidth = 400;
                    c.anchor.set(.5);
                    this.resultTitle = c;
                    this.screenGroup.addChild(c)
                }
                var e = globals.calculatePositions(a[0], a[a.length - 1], 32, 5),
                    a = this.gameObj.add.sprite(this.world.width / 2, e[1], d);
                a.anchor.set(.5);
                var f = this.gameObj.add.button(this.world.width / 2, e[3], "PLAY_new", this.newBtnClick, this);
                f.anchor.set(.5);
                var g = this.gameObj.add.text(this.world.width / 2, e[3] + 2, globals.managers.language.get("Start_new_question"), b);
                g.anchor.set(.5, .5);
                this.textNew = g;
                var h = this.gameObj.add.button(this.world.width / 2, e[4], "bt_instruction_off", this.menuBtnClick,
                    this);
                h.anchor.set(.5);
                var k = this.gameObj.add.text(this.world.width / 2, e[4] + 2, globals.managers.language.get("Back_2"), b);
                k.anchor.set(.5, .5);
                this.textMenu = k;
                this.screenGroup.addChild(f);
                this.screenGroup.addChild(h);
                this.screenGroup.addChild(g);
                this.screenGroup.addChild(k);
                this.screenGroup.addChild(a);
                this.newBtn = f;
                this.menuBtn = h;
                this.gameState.setResultGameButtons(this.getButtons())
            } else {
                a = globals.calculateDialogSize(this.world.height / 2 - 300, this.world.height / 2 + 300, 69);
                e = globals.calculatePositions(a[0],
                    a[a.length - 1] + 50, 48, 5);
                b = this.gameObj.add.sprite(this.world.width / 2, a[0], "dialog_bg");
                b.frame = 0;
                b.anchor.set(.5);
                this.screenGroup.addChild(b);
                for (b = 1; b < a.length - 1; b++) d = this.gameObj.add.sprite(this.world.width / 2, a[b], "dialog_bg"), d.frame = 1, d.anchor.set(.5), this.screenGroup.addChild(d);
                b = this.gameObj.add.sprite(this.world.width / 2, a[a.length - 1], "dialog_bg");
                b.frame = 2;
                b.anchor.set(.5);
                this.screenGroup.addChild(b);
                b = {
                    font: globals.fonts.main,
                    fill: "#FFFFFF",
                    align: "center"
                };
                null != this.winner && (c = this.gameObj.add.text(this.world.width /
                    2, a[0] + 8, this.winner, b), c.maxWidth = 400, c.anchor.set(.5), this.resultTitle = c, this.screenGroup.addChild(c));
                d = "result_lose";
                c = "result_red";
                null == this.win ? (c = "result_blue", d = "result_draw") : this.win && (c = "result_green", d = "result_win");
                a = this.gameObj.add.sprite(this.world.width / 2, e[1], "result_bg");
                a.anchor.set(.5);
                this.screenGroup.addChild(a);
                c = this.gameObj.add.sprite(this.world.width / 2, a.position.y + 40, c);
                c.anchor.set(.5);
                this.screenGroup.addChild(c);
                var l = this.gameObj.add.sprite(this.world.width / 2, e[1],
                    d);
                l.anchor.set(.5);
                this.screenGroup.addChild(l);
                var m = new Phaser.Plugin.Shake(this.gameObj);
                this.gameObj.plugins.add(m);
                var n = this.gameObj.add.sprite(this.world.width / 2 - 70, a.position.y + 80, globals.getStonesSprites());
                n.anchor.set(.5);
                n.frame = 0;
                n.scale.x = 0;
                n.scale.y = 0;
                this.screenGroup.addChild(n);
                var q = this.gameObj.add.sprite(this.world.width / 2 + 70, a.position.y + 80, globals.getStonesSprites());
                q.frame = 1;
                q.scale.x = 0;
                q.scale.y = 0;
                q.anchor.set(.5);
                this.screenGroup.addChild(q);
                var t = this.gameObj.add.sprite(this.world.width /
                    2 - 30, a.position.y + 80, globals.getStonesSprites());
                t.frame = 5;
                t.scale.x = 0;
                t.scale.y = 0;
                t.anchor.set(.5);
                this.screenGroup.addChild(t);
                var r = this.gameObj.add.sprite(this.world.width / 2 + 30, a.position.y + 80, globals.getStonesSprites());
                r.frame = 4;
                r.anchor.set(.5);
                r.scale.x = 0;
                r.scale.y = 0;
                this.screenGroup.addChild(r);
                var p = this;
                window.setTimeout(function() {
                    p.gameObj.add.tween(n.scale).to({
                        x: 1,
                        y: 1
                    }, 1E3, Phaser.Easing.Elastic.Out, !0);
                    p.gameObj.add.tween(q.scale).to({
                        x: 1,
                        y: 1
                    }, 1E3, Phaser.Easing.Elastic.Out, !0)
                }, 70);
                window.setTimeout(function() {
                    p.gameObj.add.tween(t.scale).to({
                        x: 1,
                        y: 1
                    }, 1E3, Phaser.Easing.Elastic.Out, !0);
                    p.gameObj.add.tween(r.scale).to({
                        x: 1,
                        y: 1
                    }, 1E3, Phaser.Easing.Elastic.Out, !0).onComplete.add(function() {
                        h.visible = !0;
                        f.visible = !0;
                        g.visible = !0;
                        k.visible = !0;
                        m.shake();
                        m.shake(70);
                        m.shake(10, l);
                        p.gameObj.add.tween(h).to({
                            alpha: 1
                        }, 1E3, Phaser.Easing.Linear.None, !0, 0);
                        p.gameObj.add.tween(f).to({
                            alpha: 1
                        }, 1E3, Phaser.Easing.Linear.None, !0, 0);
                        p.gameObj.add.tween(g).to({
                            alpha: 1
                        }, 1E3, Phaser.Easing.Linear.None, !0, 0);
                        p.gameObj.add.tween(k).to({
                            alpha: 1
                        }, 1E3, Phaser.Easing.Linear.None, !0, 0)
                    })
                }, 570);
                f = this.gameObj.add.button(this.world.width / 2, e[3], "PLAY_new", this.newBtnClick, this);
                f.anchor.set(.5);
                f.visible = !1;
                f.alpha = 0;
                g = this.gameObj.add.text(this.world.width / 2, e[3] + 2, globals.managers.language.get("Start_new_question"), b);
                g.alpha = 0;
                g.visible = !1;
                g.anchor.set(.5, .5);
                this.textNew = g;
                h = this.gameObj.add.button(this.world.width / 2, e[4], "bt_instruction_off", this.menuBtnClick, this);
                h.visible = !1;
                h.alpha = 0;
                h.anchor.set(.5);
                k = this.gameObj.add.text(this.world.width / 2, e[4] + 2, globals.managers.language.get("Back_2"), b);
                k.visible = !1;
                k.alpha = 0;
                k.anchor.set(.5, .5);
                this.textMenu = k;
                this.screenGroup.addChild(f);
                this.screenGroup.addChild(h);
                this.screenGroup.addChild(g);
                this.screenGroup.addChild(k);
                this.newBtn = f;
                this.menuBtn = h
            }
        },
        getButtons: function() {
            return [this.newBtn, this.menuBtn]
        },
        newBtnClick: function() {
            this.hideScreen();
            var a = this;
            window.setTimeout(function() {
                globals.storage.data.board = null;
                globals.storage.data.lastGameAi = null;
                globals.storage.data.lastPlayer = null;
                globals.storage.data.historyMoves = null;
                globals.storage.data.removedCheckers = null;
                globals.storage.data.historyBoardOfValues = null;
                a.gameObj.state.restart()
            }, 100)
        },
        menuBtnClick: function() {
            globals.managers.audio.playSound("click");
            globals.storage.data.board = null;
            globals.storage.data.lastGameAi = null;
            globals.storage.data.lastPlayer = null;
            globals.storage.data.historyMoves = null;
            globals.storage.data.removedCheckers = null;
            globals.storage.data.historyBoardOfValues = null;
            globals.managers.storage.save();
            this.gameObj.camera.fade(0, 200, !1);
            this.gameObj.time.events.add(200, function() {
                this.gameObj.state.start("Menu")
            }, this)
        },
        showScreen: function() {
            null == this.win ? globals.managers.audio.playSound("result_neutral") : this.win ? globals.managers.audio.playSound("result_win") : globals.managers.audio.playSound("result_lose");
            this.showScreenFromBottom(this.screenGroup, !0, 250, 50, Phaser.Easing.Quintic.Out, this)
        },
        hideScreen: function() {
            globals.managers.audio.playSound("menu_swoosh");
            this.hideScreenToBottom(this.screenGroup, !0, 150, 0, Phaser.Easing.Linear.None, this)
        },
        hideScreenToBottom: function(a, b, d, c, e, f) {
            null === d && (d = 300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a = this.gameObj.add.tween(a).to({
                y: this.world.height
            }, d, e, !0, c);
            !0 === b && a.onComplete.add(function() {
                void 0 !== f.screenGroup.hideOverClbck && f.screenGroup.hideOverClbck.call(f)
            }, this)
        },
        showScreenFromBottom: function(a, b, d, c, e, f) {
            null === d && (d = 300);
            null === c && (c = 150);
            null === e && (e = Phaser.Easing.Linear.None);
            a.y = this.world.height;
            a.visible = !0;
            a = this.gameObj.add.tween(a).to({
                    y: 0
                },
                d, e, !0, c);
            !0 === b && a.onComplete.add(function() {
                void 0 !== f.screenGroup.hideOverClbck && f.screenGroup.hideOverClbck.call(f)
            }, this);
            this.updateTexts()
        },
        updateTexts: function() {
            globals.storage.data.board = null;
            globals.storage.data.lastGameAi = null;
            globals.storage.data.lastPlayer = null;
            globals.storage.data.historyMoves = null;
            globals.storage.data.removedCheckers = null;
            globals.storage.data.historyBoardOfValues = null;
            globals.managers.storage.save();
            if ("480x800" == globals.resolution) {
                this.textNew.fontSize = 20;
                this.textMenu.fontSize =
                    20;
                var a = 175
            } else this.textNew.fontSize = 30, this.textMenu.fontSize = 30, a = 240;
            for (this.textNew.setText(globals.managers.language.get("Start_new_question")); this.textNew.width > a;) this.textNew.fontSize--;
            for (this.textMenu.setText(globals.managers.language.get("Back_2")); this.textMenu.width > a;) this.textMenu.fontSize--
        }
    };

    function _toConsumableArray(a) {
        if (Array.isArray(a)) {
            for (var b = 0, d = Array(a.length); b < a.length; b++) d[b] = a[b];
            return d
        }
        return Array.from(a)
    }
    var Board = function(a, b, d) {
        this.game = a;
        this.world = b;
        this.phaser = globals.phaser;
        this.gameState = d;
        this.tutorial = null;
        this.canChecerJumpLimit = this.canKingJumpLimit = 0;
        this.possibleCheckersShown = !1;
        this.tutorialSelector = null;
        this.boardOfCheckers = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        this.moving = !1;
        this.possibleCheckersToMove = [];
        this.possibleMovesGroupSprites = [];
        this.possibleMovesGraph = [];
        this.possibleMovesGraphKing = [];
        this.possibleMovesGroupRowCol = [];
        this.possibleSimpleMovesGraph = [];
        this.paths = [];
        this.createBoard();
        globals.enviroment == globals.enviroments.test ? this.addCustomCheckersToBoard(globals.customBoard) : this.addCheckersFromStorageToBoard();
        this.gameHistory = new GameHistory;
        this.initParticles()
    };
    Board.prototype = {
        addPlayerTextIndicator: function() {
            var a = "480x800" == globals.resolution ? {
                    font: globals.fonts.small,
                    fill: "#FFFFFF",
                    align: "center"
                } : {
                    font: globals.fonts.main,
                    fill: "#FFFFFF",
                    align: "center"
                },
                b = [
                    [globals.managers.language.get("Move_1"), globals.managers.language.get("Move_2")],
                    [globals.managers.language.get("Move_3"), globals.managers.language.get("Move_4")],
                    [globals.managers.language.get("Move_7"), globals.managers.language.get("Move_8")],
                    [globals.managers.language.get("Move_5"), globals.managers.language.get("Move_6")],
                    [globals.managers.language.get("Move_7"), globals.managers.language.get("Move_8")]
                ];
            this.winnersTexts = [
                [globals.managers.language.get("Win_1"), globals.managers.language.get("Win_2")],
                [globals.managers.language.get("Win_3"), globals.managers.language.get("Win_4")],
                [globals.managers.language.get("Win_7"), globals.managers.language.get("Win_8")],
                [globals.managers.language.get("Win_5"), globals.managers.language.get("Win_6")],
                [globals.managers.language.get("Win_7"), globals.managers.language.get("Win_8")]
            ];
            var d = "480x800" == globals.resolution ? this.world.height / 2 - 260 : this.indicatorPossitions[1],
                c = this.game.add.text(-300, d, b[globals.settings.stonesSkin][0], a);
            c.anchor.set(.5);
            this.textPlayer1 = c;
            c.visible = !0;
            a = this.game.add.text(this.world.width + 300, d, b[globals.settings.stonesSkin][1], a);
            a.anchor.set(.5);
            this.textPlayer2 = a;
            a.visible = !0;
            1 == globals.storage.data.lastPlayer ? this.currentPlayer = this.player2 : this.currentPlayer == this.player1;
            this.currentPlayer == this.player1 ? 1 != globals.settings.playAs ? (this.tweenTo(this.textPlayer1,
                this.world.width / 2, d, !1), this.game.world.bringToTop(this.currentPlayer1Indicator)) : (this.tweenTo(this.textPlayer2, this.world.width / 2, d, !1), this.game.world.bringToTop(this.currentPlayer2Indicator)) : 1 != globals.settings.playAs ? (this.tweenTo(this.textPlayer2, this.world.width / 2, d, !1), this.game.world.bringToTop(this.currentPlayer2Indicator)) : (this.tweenTo(this.textPlayer1, this.world.width / 2, d, !1), this.game.world.bringToTop(this.currentPlayer1Indicator))
        },
        setTopPossitions: function() {
            "480x800" == globals.resolution ?
                this.indicatorPossitions = globals.calculatePositions(50, this.world.height / 2 - 264, 10, 2) : (this.indicatorPossitions = globals.calculatePositions(60, this.world.height / 2 - 334, 10, 2), this.indicatorPossitions[1] += 40)
        },
        createBoard: function() {
            var a = this,
                b = this.game.add.sprite(this.world.width / 2, this.world.height / 2, globals.getBoardSprite());
            b.anchor.set(.5);
            b.inputEnabled = !0;
            b.events.onInputDown.add(function() {
                this.getGameState().blockUndo();
                var b = a.getRowColValue(a.game.input.x, a.game.input.y);
                null != b && a.moveTo(b[0],
                    b[1])
            }, this);
            this.boardBackground = b
        },
        addCheckersFromStorageToBoard: function() {
            if (null == globals.storage.data.board) this.addCheckersToBoard();
            else {
                globals.rules.aiLevel = globals.storage.data.lastGameAi;
                for (var a = 0; 8 > a; a++)
                    for (var b = 0; 8 > b; b++)
                        if (1 == globals.storage.data.board[a][b]) {
                            var d = this.getXYValue(a, b),
                                d = new Checker(this, a, b, d[0], d[1], globals.getStonesSprites(), !1, "1");
                            this.boardOfCheckers[a][b] = d
                        } else 2 == globals.storage.data.board[a][b] ? (d = this.getXYValue(a, b), d = new Checker(this, a, b, d[0], d[1],
                            globals.getStonesSprites(), !1, "2"), this.boardOfCheckers[a][b] = d) : 10 == globals.storage.data.board[a][b] ? (d = this.getXYValue(a, b), d = new Checker(this, a, b, d[0], d[1], globals.getStonesSprites(), !0, "1"), this.boardOfCheckers[a][b] = d) : 20 == globals.storage.data.board[a][b] ? (d = this.getXYValue(a, b), d = new Checker(this, a, b, d[0], d[1], globals.getStonesSprites(), !0, "2"), this.boardOfCheckers[a][b] = d) : this.boardOfCheckers[a][b] = null;
                this.gameState.unblockUndo()
            }
        },
        addCustomCheckersToBoard: function(a) {
            for (var b = 0; 8 > b; b++)
                for (var d =
                        0; 8 > d; d++)
                    if (1 == a[b][d]) {
                        var c = this.getXYValue(b, d),
                            c = new Checker(this, b, d, c[0], c[1], globals.getStonesSprites(), !1, "1");
                        this.boardOfCheckers[b][d] = c
                    } else 2 == a[b][d] ? (c = this.getXYValue(b, d), c = new Checker(this, b, d, c[0], c[1], globals.getStonesSprites(), !1, "2"), this.boardOfCheckers[b][d] = c) : 10 == a[b][d] ? (c = this.getXYValue(b, d), c = new Checker(this, b, d, c[0], c[1], globals.getStonesSprites(), !0, "1"), this.boardOfCheckers[b][d] = c) : 20 == a[b][d] ? (c = this.getXYValue(b, d), c = new Checker(this, b, d, c[0], c[1], globals.getStonesSprites(), !0, "2"), this.boardOfCheckers[b][d] = c) : this.boardOfCheckers[b][d] = null
        },
        addCheckersToBoard: function() {
            if ("480x800" == globals.resolution) var a = 51,
                b = this.world.width / 2 - 178,
                d = this.world.height / 2 - 178,
                c = 0,
                e = 0;
            else a = 74, b = this.world.width / 2 - 262, d = this.world.height / 2 - 262, c = .7, e = 142;
            for (var f = 0; 3 > f; f++)
                for (var g = 0; 8 > g; g++)
                    if (0 != g % 2 && 0 == f) {
                        var h = c * g + b + g * a,
                            k = d,
                            h = new Checker(this, f, g, h, k, globals.getStonesSprites(), !1, "2");
                        this.boardOfCheckers[f][g] = h
                    } else 0 == g % 2 && 1 == f ? (h = c * g + b + g * a, k = d + a, h = new Checker(this, f, g,
                        h, k, globals.getStonesSprites(), !1, "2"), this.boardOfCheckers[f][g] = h) : 0 != g % 2 && 2 == f ? (h = c * g + b + g * a, k = d + 2 * a, h = new Checker(this, f, g, h, k, globals.getStonesSprites(), !1, "2"), this.boardOfCheckers[f][g] = h) : this.boardOfCheckers[f][g] = null;
            for (f = 3; 5 > f; f++)
                for (g = 0; 8 > g; g++) this.boardOfCheckers[f][g] = null;
            for (f = 5; 8 > f; f++)
                for (g = 0; 8 > g; g++) 0 != g % 2 && 6 == f ? (h = c * g + b + g * a, k = e + d + 306, h = new Checker(this, f, g, h, k, globals.getStonesSprites(), !1, "1"), this.boardOfCheckers[f][g] = h) : 0 == g % 2 && 5 == f ? (h = c * g + b + g * a, k = e + d + 306 - a, h = new Checker(this,
                    f, g, h, k, globals.getStonesSprites(), !1, "1"), this.boardOfCheckers[f][g] = h) : 0 == g % 2 && 7 == f ? (h = c * g + b + g * a, k = e + d + 306 + a, h = new Checker(this, f, g, h, k, globals.getStonesSprites(), !1, "1"), this.boardOfCheckers[f][g] = h) : this.boardOfCheckers[f][g] = null;
            this.storeBoard()
        },
        showPossibleCheckersOnBoard: function(a) {
            var b = 0 == globals.rules.aiLevel ? null != globals.storage.data.lastPlayer ? 1 == globals.storage.data.lastPlayer ? 2 : 1 : 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.currentPlayer.getPlayer() : 1 < arguments.length &&
                void 0 !== arguments[1] ? arguments[1] : this.currentPlayer.getPlayer(),
                d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
            this.possibleCheckersToMove = [];
            this.possibleMovesGroupSprites = [];
            this.possibleMovesGraph = [];
            this.possibleMovesGraphKing = [];
            this.possibleMovesGroupRowCol = [];
            this.possibleSimpleMovesGraph = [];
            this.paths = [];
            this.possibleCheckersPathsToMove = [];
            for (var c = 0; 8 > c; c++)
                for (var e = 0; 8 > e; e++) null != this.boardOfCheckers[c][e] && (this.cleanShowPossibleMovesOnBoardArray(), this.uncheckEveryCheckedChecker(),
                    this.removeAllFromRemoveMarking(), this.boardOfCheckers[c][e].getPlayer() == b && "checker" == this.boardOfCheckers[c][e].whatAmI() ? this.boardOfCheckers[c][e].canCheckerBeMoved() && (this.possibleCheckersToMove.push(this.boardOfCheckers[c][e]), this.possibleCheckersPathsToMove.push([this.boardOfCheckers[c][e].getPossibleMovesGraph(), this.boardOfCheckers[c][e].getPossibleSimpleMovesGraph()])) : this.boardOfCheckers[c][e].getPlayer() == b && "king" == this.boardOfCheckers[c][e].whatAmI() && this.boardOfCheckers[c][e].canKingBeMoved() &&
                    (this.possibleCheckersToMove.push(this.boardOfCheckers[c][e]), this.possibleCheckersPathsToMove.push([this.boardOfCheckers[c][e].getPossibleMovesGraphKing(), this.boardOfCheckers[c][e].getPossibleSimpleMovesGraph()])));
            if (0 == a) {
                e = [];
                for (c = 0; c < this.possibleCheckersToMove.length; c++) {
                    var f = this.possibleCheckersPathsToMove[c][0];
                    e.push(f)
                }
                for (c = 0; c < e.length; c++) e[c] = this.getAllPossibleWays(e[c]);
                this.possibleCheckersToMove = [];
                for (c = f = 0; c < e.length; c++)
                    for (var g = 0; g < e[c].length; g++) e[c][g] = e[c][g].split("->"),
                        e[c][g].length > f && (f = e[c][g].length);
                if (0 == globals.rules.kingPriority)
                    for (c = 0; c < e.length; c++)
                        for (g = 0; g < e[c].length; g++) {
                            if (2 <= e[c][g].length) {
                                var h = globals.getRowAndColFromGraph(e[c][g][0]);
                                this.possibleCheckersToMove.push(this.boardOfCheckers[h[0]][h[1]])
                            }
                        } else
                            for (c = 0; c < e.length; c++)
                                for (g = 0; g < e[c].length; g++) h = globals.getRowAndColFromGraph(e[c][g][0]), "king" == this.boardOfCheckers[h[0]][h[1]].whatAmI() && this.boardOfCheckers[h[0]][h[1]].canKingJump(h[0], h[1]) && this.possibleCheckersToMove.push(this.boardOfCheckers[h[0]][h[1]]);
                if (0 == this.possibleCheckersToMove.length)
                    for (c = 0; c < e.length; c++)
                        for (g = 0; g < e[c].length; g++) 2 <= e[c][g].length && (h = globals.getRowAndColFromGraph(e[c][g][0]), this.possibleCheckersToMove.push(this.boardOfCheckers[h[0]][h[1]]));
                if (0 == this.possibleCheckersToMove.length)
                    for (c = 0; c < e.length; c++)
                        for (g = 0; g < e[c].length; g++) h = globals.getRowAndColFromGraph(e[c][g][0]), this.possibleCheckersToMove.push(this.boardOfCheckers[h[0]][h[1]])
            } else if (1 == a) {
                e = [];
                for (c = 0; c < this.possibleCheckersToMove.length; c++) f = this.possibleCheckersPathsToMove[c][0],
                    e.push(f);
                for (c = 0; c < e.length; c++) e[c] = this.getAllPossibleWays(e[c]);
                this.possibleCheckersToMove = [];
                for (c = f = 0; c < e.length; c++)
                    for (g = 0; g < e[c].length; g++) e[c][g] = e[c][g].split("->"), e[c][g].length > f && (f = e[c][g].length);
                if (0 == globals.rules.kingPriority)
                    for (c = 0; c < e.length; c++)
                        for (g = 0; g < e[c].length; g++) e[c][g].length == f && (h = globals.getRowAndColFromGraph(e[c][g][0]), this.possibleCheckersToMove.push(this.boardOfCheckers[h[0]][h[1]]));
                else
                    for (c = 0; c < e.length; c++)
                        for (g = 0; g < e[c].length; g++) h = globals.getRowAndColFromGraph(e[c][g][0]),
                            "king" == this.boardOfCheckers[h[0]][h[1]].whatAmI() && this.boardOfCheckers[h[0]][h[1]].canKingJump(h[0], h[1]) && this.possibleCheckersToMove.push(this.boardOfCheckers[h[0]][h[1]]);
                if (0 == this.possibleCheckersToMove.length)
                    for (c = 0; c < e.length; c++)
                        for (g = 0; g < e[c].length; g++) e[c][g].length == f && (h = globals.getRowAndColFromGraph(e[c][g][0]), this.possibleCheckersToMove.push(this.boardOfCheckers[h[0]][h[1]]))
            } else {
                e = [];
                for (c = 0; c < this.possibleCheckersToMove.length; c++) f = this.possibleCheckersPathsToMove[c][0], e.push(f);
                for (c = 0; c < e.length; c++) e[c] = this.getAllPossibleWays(e[c]);
                this.possibleCheckersToMove = [];
                for (c = 0; c < e.length; c++)
                    for (g = 0; g < e[c].length; g++) e[c][g] = e[c][g].split("->");
                if (0 == globals.rules.kingPriority)
                    for (c = 0; c < e.length; c++)
                        for (g = 0; g < e[c].length; g++) h = globals.getRowAndColFromGraph(e[c][g][0]), this.possibleCheckersToMove.push(this.boardOfCheckers[h[0]][h[1]]);
                else {
                    for (c = 0; c < e.length; c++)
                        for (g = 0; g < e[c].length; g++) h = globals.getRowAndColFromGraph(e[c][g][0]), "king" == this.boardOfCheckers[h[0]][h[1]].whatAmI() &&
                            this.boardOfCheckers[h[0]][h[1]].canKingJump(h[0], h[1]) && this.possibleCheckersToMove.push(this.boardOfCheckers[h[0]][h[1]]);
                    if (0 == this.possibleCheckersToMove.length)
                        for (c = 0; c < e.length; c++)
                            for (g = 0; g < e[c].length; g++) h = globals.getRowAndColFromGraph(e[c][g][0]), this.possibleCheckersToMove.push(this.boardOfCheckers[h[0]][h[1]])
                }
            }
            if (0 == this.possibleCheckersToMove.length) d = this.phaser.add.image(0, 0, "trans"), d.width = this.phaser.width, d.height = this.phaser.height, d.inputEnabled = !0, d.visible = !0, this.overlay =
                d, globals.setPauseState(!0), (0 != globals.rules.aiLevel ? 1 == b ? new ScreenResult(this.game, this.world, this, !1, this.gameState) : new ScreenResult(this.game, this.world, this, !0, this.gameState) : 1 == this.currentPlayer.getPlayer() ? 0 == globals.settings.playAs ? new ScreenResult(this.game, this.world, this, !0, this.gameState, this.winnersTexts[globals.settings.stonesSkin][1]) : new ScreenResult(this.game, this.world, this, !0, this.gameState, this.winnersTexts[globals.settings.stonesSkin][0]) : 0 == globals.settings.playAs ? new ScreenResult(this.game,
                    this.world, this, !0, this.gameState, this.winnersTexts[globals.settings.stonesSkin][0]) : new ScreenResult(this.game, this.world, this, !0, this.gameState, this.winnersTexts[globals.settings.stonesSkin][1])).showScreen();
            else {
                if (0 == Number(this.possibleCheckersToMove[0].getPlayer()) - 1 || 0 == globals.rules.aiLevel)
                    for (c = 0; c < this.possibleCheckersToMove.length; c++) 1 == globals.settings.highlight && (d || this.possibleCheckersToMove[c].startPulseChecker()), this.possibleCheckersShown = !0;
                b = [];
                for (c = 0; c < this.possibleCheckersToMove.length; c++) this.presentInArray(b,
                    this.possibleCheckersToMove[c]) || b.push(this.possibleCheckersToMove[c]);
                return this.possibleCheckersToMove = b
            }
        },
        presentInArray: function(a, b) {
            for (var d = 0; d < a.length; d++)
                if (a[d] == b) return !0;
            return !1
        },
        isPossibleCheckersShown: function() {
            return this.possibleCheckersShown
        },
        deletePossibleSimpleMoves: function() {},
        isCheckerMarkedAsPossibleToMove: function(a) {
            for (var b = 0; b < this.possibleCheckersToMove.length; b++)
                if (this.possibleCheckersToMove[b].getRow() == a.getRow() && this.possibleCheckersToMove[b].getCol() == a.getCol()) return !0;
            return !1
        },
        showPossibleMovesOnBoard: function(a, b, d) {
            var c = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : !0,
                e = [];
            if (0 == d) {
                this.paths = this.getAllPossibleWays(a);
                if (2 >= this.paths[0].length) {
                    this.paths = this.getAllPossibleWays(b);
                    for (var f = this.getAllPossibleWays(a), g = 0; g < f.length; g++) this.paths.push(f[g])
                }
                for (g = 0; g < this.paths.length; g++) e.push(this.paths[g].split("->"));
                for (g = e.length - 1; 0 <= g; g--)
                    for (var h = e[g].length - 1; 1 <= h; h--) {
                        var f = globals.getRowAndColFromGraph(e[g][h]),
                            k = this.getXYValue(f[0],
                                f[1]);
                        "done" != globals.storage.data.tutorial && 4 == f[0] && 3 == f[1] && this.isPossibleMoveSpritePresent(this.possibleMovesGroupSprites, k[0], k[1]) && (c && (this.tutorialSelector = this.game.add.sprite(k[0], k[1], "selector"), this.tutorialSelector.anchor.setTo(.5, .5), this.tutorialSelector.animations.add("run"), this.tutorialSelector.animations.play("run", 15, !0), this.possibleMovesGroupSprites.push(this.tutorialSelector)), this.possibleMovesGroupRowCol.push([f[0], f[1]]));
                        this.isPossibleMoveSpritePresent(this.possibleMovesGroupSprites,
                            k[0], k[1]) && (c && (k = this.game.add.sprite(k[0], k[1], "selector"), k.anchor.setTo(.5, .5), k.animations.add("run"), k.animations.play("run", 15, !0), this.possibleMovesGroupSprites.push(k)), this.possibleMovesGroupRowCol.push([f[0], f[1]]))
                    }
            } else if (1 == d) {
                this.paths = this.getAllPossibleWays(a);
                if (2 >= this.paths[0].length)
                    for (this.paths = this.getAllPossibleWays(b), f = this.getAllPossibleWays(a), g = 0; g < f.length; g++) this.paths.push(f[g]);
                for (g = 0; g < this.paths.length; g++) e.push(this.paths[g].split("->"));
                for (g = h = 0; g < e.length; g++) e[g].length >
                    h && (h = e[g].length);
                for (g = e.length - 1; 0 <= g; g--) e[g].length == h && (f = globals.getRowAndColFromGraph(e[g][e[g].length - 1]), k = this.getXYValue(f[0], f[1]), "done" != globals.storage.data.tutorial && 4 == f[0] && 3 == f[1] && this.isPossibleMoveSpritePresent(this.possibleMovesGroupSprites, k[0], k[1]) && (c && (this.tutorialSelector = this.game.add.sprite(k[0], k[1], "selector"), this.tutorialSelector.anchor.setTo(.5, .5), this.tutorialSelector.animations.add("run"), this.tutorialSelector.animations.play("run", 15, !0), this.possibleMovesGroupSprites.push(this.tutorialSelector)),
                    this.possibleMovesGroupRowCol.push([f[0], f[1]])), this.isPossibleMoveSpritePresent(this.possibleMovesGroupSprites, k[0], k[1]) && (c && (k = this.game.add.sprite(k[0], k[1], "selector"), k.anchor.setTo(.5, .5), k.animations.add("run"), k.animations.play("run", 15, !0), this.possibleMovesGroupSprites.push(k)), this.possibleMovesGroupRowCol.push([f[0], f[1]])))
            } else {
                this.paths = this.getAllPossibleWays(b);
                f = this.getAllPossibleWays(a);
                for (g = 0; g < f.length; g++) this.paths.push(f[g]);
                for (g = 0; g < this.paths.length; g++) e.push(this.paths[g].split("->"));
                for (g = e.length - 1; 0 <= g; g--)
                    for (h = e[g].length - 1; 1 <= h; h--) f = globals.getRowAndColFromGraph(e[g][h]), k = this.getXYValue(f[0], f[1]), "done" != globals.storage.data.tutorial && 4 == f[0] && 3 == f[1] && this.isPossibleMoveSpritePresent(this.possibleMovesGroupSprites, k[0], k[1]) && (c && (this.tutorialSelector = this.game.add.sprite(k[0], k[1], "selector"), this.tutorialSelector.anchor.setTo(.5, .5), this.tutorialSelector.animations.add("run"), this.tutorialSelector.animations.play("run", 15, !0), this.possibleMovesGroupSprites.push(this.tutorialSelector)),
                        this.possibleMovesGroupRowCol.push([f[0], f[1]])), this.isPossibleMoveSpritePresent(this.possibleMovesGroupSprites, k[0], k[1]) && (c && (k = this.game.add.sprite(k[0], k[1], "selector"), k.anchor.setTo(.5, .5), k.animations.add("run"), k.animations.play("run", 15, !0), this.possibleMovesGroupSprites.push(k)), this.possibleMovesGroupRowCol.push([f[0], f[1]]))
            }
            "done" != globals.storage.data.tutorial && (f = this.getXYValue(4, 3), "480x800" == globals.resolution ? this.tutorial.moveHandTo(f[0] + 39, f[1] + 40, globals.times.TUTORIAL_HAND_TIME -
                300) : this.tutorial.moveHandTo(f[0] + 55, f[1] + 55, globals.times.TUTORIAL_HAND_TIME - 300), this.game.world.bringToTop(this.tutorialSelector), this.tutorialSelector.inputEnabled = !0, this.tutorialSelector.events.onInputDown.add(this.moveToTutorial, this), this.game.world.bringToTop(this.boardOfCheckers[5][2].getCheckerSprite()))
        },
        moveToTutorial: function() {
            globals.managers.audio.playSound("suchnutie1");
            this.moveTo(4, 3);
            this.game.world.bringToTop(this.boardOfCheckers[5][2].getCheckerSprite())
        },
        getWorld: function() {
            return this.game.world
        },
        isPossibleMoveSpritePresent: function(a, b, d) {
            for (var c = 0; c < a.length; c++)
                if (b == a[c].position.x && d == a[c].position.y) return !1;
            return !0
        },
        cleanShowPossibleMovesOnBoardArray: function() {
            for (var a = 0; a < this.possibleMovesGroupSprites.length; a++) this.possibleMovesGroupSprites[a].destroy(!0);
            this.possibleMovesGroup = [];
            this.possibleMovesGroupSprites = [];
            this.possibleMovesGraph = [];
            this.possibleMovesGraphKing = [];
            this.possibleSimpleMovesGraph = [];
            this.possibleMovesGroupRowCol = []
        },
        getBoardHistoryData: function() {
            for (var a = [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ], b = 0; 8 > b; b++)
                for (var d = 0; 8 > d; d++) a[b][d] = null != this.boardOfCheckers[b][d] ? this.boardOfCheckers[b][d].getDataToHistory() : null;
            return a
        },
        moveTo: function(a, b) {
            this.getGameState().blockUndo();
            var d = this.getCheckedRowAndCol();
            if (-1 == a || -1 == b || 0 != globals.playboard[a][b])
                if (null != d || void 0 != d) {
                    this.game.world.bringToTop(this.boardOfCheckers[d[0]][d[1]].getCheckerSprite());
                    for (var c = 0; c < this.possibleMovesGroupRowCol.length; c++)
                        if (this.possibleMovesGroupRowCol[c][0] == a && this.possibleMovesGroupRowCol[c][1] ==
                            b) {
                            var e = this.possibleMovesGroupRowCol[c];
                            this.gameHistory.addBoard([globals.boardForGraph[d[0]][d[1]], globals.boardForGraph[e[0]][e[1]]], this.getBoardHistoryData());
                            e = this.makeCheckerMoveChain(e, !1);
                            e = this.processCheckersToRemove(e);
                            this.gameHistory.addRemoved(e)
                        }
                }
        },
        moveToBot: function(a, b) {
            this.getGameState().blockUndo();
            var d = this.getCheckedRowAndCol();
            if (-1 == a || -1 == b || 0 != globals.playboard[a][b]) {
                var c = d;
                if (null != d || void 0 != d)
                    for (this.game.world.bringToTop(this.boardOfCheckers[d[0]][d[1]].getCheckerSprite()),
                        c = 0; c < this.possibleMovesGroupRowCol.length; c++)
                        if (this.possibleMovesGroupRowCol[c][0] == a && this.possibleMovesGroupRowCol[c][1] == b) {
                            var e = this.possibleMovesGroupRowCol[c];
                            this.gameHistory.addBoard([globals.boardForGraph[d[0]][d[1]], globals.boardForGraph[e[0]][e[1]]], this.getBoardHistoryData());
                            e = this.makeCheckerMoveChain(e, !0);
                            e = this.processCheckersToRemove(e);
                            this.gameHistory.addRemoved(e)
                        }
            }
        },
        moveToFake: function(a, b) {
            var d = globals.getRowAndColFromGraph(a),
                c = globals.getRowAndColFromGraph(b);
            this.boardOfCheckers[c[0]][c[1]] =
                this.boardOfCheckers[d[0]][d[1]];
            this.boardOfCheckers[d[0]][d[1]] = null;
            return this.boardOfCheckers
        },
        moveToFakeReverse: function(a, b) {
            var d = globals.getRowAndColFromGraph(a),
                c = globals.getRowAndColFromGraph(b);
            this.boardOfCheckers[d[0]][d[1]] = this.boardOfCheckers[c[0]][c[1]];
            this.boardOfCheckers[c[0]][c[1]] = null;
            return this.boardOfCheckers
        },
        stopAllPulsingCheckers: function() {
            for (var a = 0; 8 > a; a++)
                for (var b = 0; 8 > b; b++) null != this.boardOfCheckers[a][b] && this.boardOfCheckers[a][b].stopPulseChecker()
        },
        processCheckersToRemove: function(a) {
            for (var b = [], d = 0; d < a.length; d++) {
                var c = [a[d].getRow(), a[d].getCol(), a[d].getPlayer(), a[d].whatAmI()];
                b.push(c)
            }
            return b
        },
        storeBoard: function() {
            for (var a = [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ], b = 0; 8 > b; b++)
                for (var d = 0; 8 > d; d++) null != this.boardOfCheckers[b][d] && ("1" == this.boardOfCheckers[b][d].getPlayer() ? "king" == this.boardOfCheckers[b][d].whatAmI() ? a[b][d] = 10 : a[b][d] = 1 : "2" == this.boardOfCheckers[b][d].getPlayer() && ("king" == this.boardOfCheckers[b][d].whatAmI() ? a[b][d] = 20 : a[b][d] = 2));
            globals.storage.data.board = a;
            globals.storage.data.lastGameAi =
                globals.rules.aiLevel;
            null != this.gameHistory && (null != this.currentPlayer && (a = this.currentPlayer.getPlayer() - 1, globals.storage.data.lastPlayer = a), globals.storage.data.historyMoves = this.gameHistory.getFullMoves(), globals.storage.data.removedCheckers = this.gameHistory.getFullCheckers(), globals.storage.data.historyBoardOfValues = this.gameHistory.getFullValues());
            globals.managers.storage.save()
        },
        makeCheckerMoveChain: function(a, b) {
            var d = this;
            this.getGameState().blockUndo();
            var c = this;
            this.moving = !0;
            for (var e =
                    null, f = a[0], g = a[1], h = [], k = 0; k < this.paths.length; k++) h.push(this.paths[k].split("->"));
            for (k = h.length - 1; 0 <= k; k--)
                for (var l = h[k].length - 1; 0 <= l; l--) h[k][l] = globals.getRowAndColFromGraph(h[k][l]), h[k][l][0] == f && h[k][l][1] == g && null == e && (e = [k, l]);
            var m = this.getCheckedRowAndCol();
            this.uncheckEveryCheckedChecker();
            l = [];
            l.push([m[0], m[1]]);
            for (var n = [], k = 1; k < e[1] + 1; k++) {
                var q = h[e[0]][k][0],
                    t = h[e[0]][k][1];
                this.makeCheckerMoveChainRow = q;
                this.makeCheckerMoveChainCol = t;
                var r = this.getXYValue(q, t);
                l.push([q, t]);
                var p = this,
                    q = this.boardOfCheckers[m[0]][m[1]].tweenTo(r[0], r[1]);
                q.onComplete.add(function() {
                    p.game.world.bringToTop(p.boardOfCheckers[m[0]][m[1]].getCheckerSprite())
                });
                n.push(q)
            }
            for (var u = [], k = 0; k < l.length - 1; k++) e = this.isEnemyCheckerBetween(l[k][0], l[k][1], l[k + 1][0], l[k + 1][1]), null != e && u.push(e);
            globals.createTimer(350, function() {
                d.removeCheckersFromBoard(u)
            });
            if (0 != n.length) {
                this.cleanShowPossibleMovesOnBoardArray();
                for (k = 0; k < n.length - 1; k++) n[k] = n[k].chain(n[k + 1]);
                n[0].start();
                "done" != globals.storage.data.tutorial &&
                    (c.tutorial.destoryHand(), c.tutorial.hideOverlay(), globals.managers.storage.save());
                n[n.length - 1].onComplete.add(function() {
                    "done" != globals.storage.data.tutorial && (globals.storage.data.tutorial = "done", c.gameState.removeCheckerFromGroup());
                    var a = c.getXYValue(f, g);
                    c.boardOfCheckers[f][g] = c.boardOfCheckers[m[0]][m[1]];
                    c.boardOfCheckers[f][g].setRow(f);
                    c.boardOfCheckers[f][g].setCol(g);
                    c.boardOfCheckers[m[0]][m[1]] = null;
                    c.game.world.bringToTop(c.boardOfCheckers[f][g].getCheckerSprite());
                    c.uncheckEveryCheckedChecker();
                    c.blockEveryChecker();
                    c.unblockEveryChecker();
                    if (!c.isGameFinished())
                        if (0 != c.player1.getAiLevel() && "bot" == c.currentPlayer.whoAmI()) c.player1.makeMove();
                        else {
                            var d = globals.settings.highlight;
                            globals.settings.highlight = !1;
                            "2" == c.currentPlayer ? c.canChangeToKing(f, g, a[0], a[1], c.player2) : c.canChangeToKing(f, g, a[0], a[1], c.player1);
                            if (void 0 == c.showPossibleCheckersOnBoard(1)) {
                                null != d && (globals.settings.highlight = d, d = null);
                                c.cleanShowPossibleMovesOnBoardArray();
                                return
                            }
                            null != d && (globals.settings.highlight =
                                d, d = null);
                            c.changeCurrentPlayer();
                            globals.createTimer(3 * globals.times.TOP_CHECKERS_TWEEN_TIME, function() {
                                0 == globals.rules.capture ? c.showPossibleCheckersOnBoard(0) : 1 == globals.rules.capture ? c.showPossibleCheckersOnBoard(1) : c.showPossibleCheckersOnBoard(2);
                                c.unblockEveryChecker()
                            })
                        }
                    c.canChangeToKing(f, g, a[0], a[1], c.currentPlayer);
                    c.moving = !1;
                    0 == globals.rules.aiLevel ? c.storeBoard() : b && c.storeBoard();
                    c.possibleCheckersShown = !1
                })
            }
            return u
        },
        removeCheckersFromBoard: function(a) {
            for (var b = this, d = [], c = 0; c < a.length; c++) {
                var e =
                    a[c].getRow(),
                    f = a[c].getCol(),
                    g = globals.getRndInteger(this.world.width - 150, this.world.width + 150),
                    h = -100;
                "1" == this.currentPlayer.getPlayer() && (h = this.world.width + 100);
                d.push(this.boardOfCheckers[e][f].tweenFromBoard(h, g));
                this.boardOfCheckers[e][f] = null
            }
            if (0 != d.length) {
                for (c = 0; c < d.length - 1; c++) d[c] = d[c].chain(d[c + 1]);
                d[0].start();
                d[d.length - 1].onComplete.add(function() {
                    b.setCheckersInput(!0)
                });
                this.cleanShowPossibleMovesOnBoardArray()
            }
        },
        setCheckersInput: function(a) {
            for (var b = 0; 8 > b; b++)
                for (var d = 0; 8 >
                    d; d++) null != this.boardOfCheckers[b][d] && this.boardOfCheckers[b][d].setInput(a)
        },
        isEnemyCheckerBetween: function(a, b, d, c) {
            var e = !0,
                f = !0;
            0 > a - d && (e = !1);
            0 > b - c && (f = !1);
            if (e && f)
                for (var g = 0; a - g != d && b - g != c;) {
                    if (null != this.boardOfCheckers[a - g][b - g] && this.boardOfCheckers[a - g][b - g].getPlayer() != this.currentPlayer.getPlayer()) return this.boardOfCheckers[a - g][b - g];
                    g++
                }
            if (!e && !f)
                for (g = 0; a + g != d && b + g != c;) {
                    if (null != this.boardOfCheckers[a + g][b + g] && this.boardOfCheckers[a + g][b + g].getPlayer() != this.currentPlayer.getPlayer()) return this.boardOfCheckers[a +
                        g][b + g];
                    g++
                }
            if (!e && f)
                for (g = 0; a + g != d && b - g != c;) {
                    if (null != this.boardOfCheckers[a + g][b - g] && this.boardOfCheckers[a + g][b - g].getPlayer() != this.currentPlayer.getPlayer()) return this.boardOfCheckers[a + g][b - g];
                    g++
                }
            if (e && !f)
                for (g = 0; a - g != d && b + g != c;) {
                    if (null != this.boardOfCheckers[a - g][b + g] && this.boardOfCheckers[a - g][b + g].getPlayer() != this.currentPlayer.getPlayer()) return this.boardOfCheckers[a - g][b + g];
                    g++
                }
            return null
        },
        canChangeToKing: function(a, b, d, c, e) {
            null != this.boardOfCheckers[a][b] && "checker" == this.boardOfCheckers[a][b].whatAmI() &&
                (0 == a && "2" == e.getPlayer() ? (this.boardOfCheckers[a][b].changeToKing(), this.fireParticle(d, c, globals.particleAmount)) : 7 == a && "1" == e.getPlayer() && (this.boardOfCheckers[a][b].changeToKing(), this.fireParticle(d, c, globals.particleAmount)))
        },
        canCheckerByChangedToKingAfterMove: function(a) {
            for (var b = 0; b < a.length; b++)
                if (1 == a[b].getRow() || 6 == a[b].getRow())
                    if ("2" == this.currentPlayer) {
                        if (8 > a[b].getCol() + 1 && null == this.boardOfCheckers[a[b].getRow() + 1][a[b].getCol() + 1] || 0 <= a[b].getCol() - 1 && null == this.boardOfCheckers[a[b].getRow() +
                                1][a[b].getCol() - 1]) return b
                    } else if (8 > a[b].getCol() + 1 && null == this.boardOfCheckers[a[b].getRow() - 1][a[b].getCol() + 1] || 0 <= a[b].getCol() - 1 && null == this.boardOfCheckers[a[b].getRow() - 1][a[b].getCol() - 1]) return b;
            return -1
        },
        uncheckEveryCheckedChecker: function() {
            for (var a = 0; 8 > a; a++)
                for (var b = 0; 8 > b; b++) null != this.boardOfCheckers[a][b] && 1 == this.boardOfCheckers[a][b].getChecked() && (this.boardOfCheckers[a][b].setChecked(!1), this.boardOfCheckers[a][b].checkerUncheck())
        },
        blockEveryChecker: function() {
            for (var a =
                    0; 8 > a; a++)
                for (var b = 0; 8 > b; b++) null != this.boardOfCheckers[a][b] && this.boardOfCheckers[a][b].setBlocked(!0)
        },
        unblockEveryChecker: function() {
            for (var a = 0; 8 > a; a++)
                for (var b = 0; 8 > b; b++) null != this.boardOfCheckers[a][b] && this.boardOfCheckers[a][b].setBlocked(!1)
        },
        getCheckedRowAndCol: function() {
            for (var a = 0; 8 > a; a++)
                for (var b = 0; 8 > b; b++)
                    if (null != this.boardOfCheckers[a][b] && 1 == this.boardOfCheckers[a][b].getChecked()) return [a, b]
        },
        getXYValue: function(a, b) {
            if ("480x800" == globals.resolution) var d = 51,
                c = this.world.width /
                2 - 178,
                e = this.world.height / 2 - 178,
                f = 0;
            else d = 74, c = this.world.width / 2 - 262, e = this.world.height / 2 - 262, f = .7;
            for (var g = 0; 8 > g; g++)
                for (var h = 0; 8 > h; h++)
                    if (g == a && h == b) return [c + h * d + h * f, e + g * d + g * f]
        },
        getRowColValue: function(a, b) {
            if ("480x800" == globals.resolution) var d = 51,
                c = this.world.width / 2 - 178,
                e = this.world.height / 2 - 178;
            else d = 74, c = this.world.width / 2 - 262, e = this.world.height / 2 - 262;
            for (var f = 0; 8 > f; f++)
                for (var g = 0; 8 > g; g++)
                    if (c + g * d - 25 < a && c - 25 + g * d + d > a && e - 25 + f * d < b && e - 25 + f * d + d > b) return [f, g];
            return null
        },
        getPlayer2: function() {
            return this.player1
        },
        setPlayers: function(a, b) {
            this.setTopPossitions();
            this.player1 = a;
            this.player2 = b;
            "480x800" == globals.resolution ? (this.indicatorBase = 25, this.indicatorMax = 50) : (this.indicatorBase = 40, this.indicatorMax = 80);
            this.currentPlayer1Indicator = this.game.add.sprite(this.world.width / 2 - this.indicatorBase, this.indicatorPossitions[0], globals.getStonesSpritesToSettings()[1]);
            this.currentPlayer1Indicator.anchor.set(.5);
            this.currentPlayer2Indicator = this.game.add.sprite(this.world.width / 2 + this.indicatorBase, this.indicatorPossitions[0],
                globals.getStonesSpritesToSettings()[2]);
            this.currentPlayer2Indicator.anchor.set(.5);
            if (null == globals.storage.data.lastPlayer)
                if (0 == globals.settings.playAs) this.currentPlayer = this.player1;
                else if (1 == globals.settings.playAs) this.currentPlayer = this.player2;
            else {
                var d = Math.floor(2 * Math.random());
                0 == d ? this.currentPlayer = this.player1 : 1 == d && (this.currentPlayer = this.player2)
            } else 0 == globals.storage.playAs ? 0 == globals.storage.data.lastPlayer ? this.currentPlayer = this.player1 : 1 == globals.storage.data.lastPlayer &&
                (this.currentPlayer = this.player2) : 0 == globals.storage.data.lastPlayer ? this.currentPlayer = this.player2 : 1 == globals.storage.data.lastPlayer && (this.currentPlayer = this.player1);
            this.currentPlayer = this.player1;
            this.addPlayerTextIndicator();
            0 == globals.rules.capture ? this.showPossibleCheckersOnBoard(0) : 1 == globals.rules.capture ? this.showPossibleCheckersOnBoard(1) : this.showPossibleCheckersOnBoard(2)
        },
        changeCurrentPlayer: function() {
            var a = "480x800" == globals.resolution ? this.world.height / 2 - 260 : this.indicatorPossitions[1];
            this.currentPlayer == this.player1 ? (this.currentPlayer = this.player2, 1 == globals.settings.playAs ? (this.switchTopTokens(1), this.tweenTo(this.textPlayer1, this.world.width / 2, a, !1), this.tweenTo(this.textPlayer2, this.world.width + 300, a, !1)) : (this.switchTopTokens(2), this.tweenTo(this.textPlayer1, -300, a, !1), this.tweenTo(this.textPlayer2, this.world.width / 2, a, !1))) : (this.currentPlayer = this.player1, 1 == globals.settings.playAs ? (this.switchTopTokens(2), this.tweenTo(this.textPlayer1, -300, a, !1), this.tweenTo(this.textPlayer2,
                this.world.width / 2, a, !1)) : (this.switchTopTokens(1), this.tweenTo(this.textPlayer1, this.world.width / 2, a, !1), this.tweenTo(this.textPlayer2, this.world.width + 300, a, !1)))
        },
        switchTopTokens: function(a) {
            var b = this;
            void 0 == b.indicatorPossitions && b.setTopPossitions();
            this.tweenTo(this.currentPlayer1Indicator, this.world.width / 2 - b.indicatorMax, this.indicatorPossitions[0], !1);
            this.tweenTo(this.currentPlayer2Indicator, this.world.width / 2 + b.indicatorMax, this.indicatorPossitions[0], !1);
            globals.createTimer(globals.times.TOP_CHECKERS_TWEEN_TIME,
                function() {
                    2 == a ? b.game.world.bringToTop(b.currentPlayer2Indicator) : b.game.world.bringToTop(b.currentPlayer1Indicator);
                    b.tweenTo(b.currentPlayer1Indicator, b.world.width / 2 - b.indicatorBase, b.indicatorPossitions[0], !1);
                    b.tweenTo(b.currentPlayer2Indicator, b.world.width / 2 + b.indicatorBase, b.indicatorPossitions[0], !0)
                }, globals.times.TOP_CHECKERS_TWEEN_TIME)
        },
        tweenTo: function(a, b, d, c) {
            var e = this;
            a = this.game.add.tween(a).to({
                x: b,
                y: d
            }, this.TOP_CHECKERS_TWEEN_TIME, "Quart.easeOut");
            a.start();
            c && a.onComplete.add(function() {
                window.setTimeout(function() {
                        e.gameState.unblockUndo()
                    },
                    50)
            })
        },
        getCurrentPlayer: function() {
            return this.currentPlayer
        },
        removeAllFromRemoveMarking: function() {
            for (var a = 0; 7 >= a; a++)
                for (var b = 0; 7 >= b; b++) null != this.boardOfCheckers[a][b] && this.boardOfCheckers[a][b].clearToBeRemoved()
        },
        isGameFinished: function() {
            for (var a = 0, b = 0, d = this.boardOfCheckers.map(function(a) {
                    return a.slice()
                }), c = 0; 7 >= c; c++)
                for (var e = 0; 7 >= e; e++) null != d[c][e] && ("2" == d[c][e].getPlayer() && b++, "1" == d[c][e].getPlayer() && a++);
            return 0 == b && 1 == globals.settings.playAs || 0 == b && 0 == globals.settings.playAs ?
                (a = this.phaser.add.image(0, 0, "trans"), a.width = this.phaser.width, a.height = this.phaser.height, a.inputEnabled = !0, a.visible = !0, this.overlay = a, globals.setPauseState(!0), a = 0 == globals.rules.aiLevel ? (this.currentPlayer.getPlayer(), 0 == globals.settings.playAs ? new ScreenResult(this.game, this.world, this, !0, this.gameState, this.winnersTexts[globals.settings.stonesSkin][0]) : new ScreenResult(this.game, this.world, this, !0, this.gameState, this.winnersTexts[globals.settings.stonesSkin][1])) : new ScreenResult(this.game,
                    this.world, this, !0, this.gameState), a.showScreen(), !0) : 0 == a && 0 == globals.settings.playAs || 0 == a && 1 == globals.settings.playAs ? (a = this.phaser.add.image(0, 0, "trans"), a.width = this.phaser.width, a.height = this.phaser.height, a.inputEnabled = !0, a.visible = !0, this.overlay = a, globals.setPauseState(!0), a = 0 == globals.rules.aiLevel ? 1 == this.currentPlayer.getPlayer() ? 0 == globals.settings.playAs ? new ScreenResult(this.game, this.world, this, !0, this.gameState, this.winnersTexts[globals.settings.stonesSkin][0]) : new ScreenResult(this.game,
                    this.world, this, !0, this.gameState, this.winnersTexts[globals.settings.stonesSkin][1]) : 0 == globals.settings.playAs ? new ScreenResult(this.game, this.world, this, !0, this.gameState, this.winnersTexts[globals.settings.stonesSkin][1]) : new ScreenResult(this.game, this.world, this, !0, this.gameState, this.winnersTexts[globals.settings.stonesSkin][0]) : new ScreenResult(this.game, this.world, this, !1, this.gameState), a.showScreen(), !0) : 1 == a && 1 == b ? (a = this.phaser.add.image(0, 0, "trans"), a.width = this.phaser.width, a.height =
                    this.phaser.height, a.inputEnabled = !0, a.visible = !0, this.overlay = a, globals.setPauseState(!0), a = new ScreenResult(this.game, this.world, this, null, this.gameState), a.showScreen(), !0) : !1
        },
        getGameBoardCheckers: function() {
            return this.boardOfCheckers
        },
        setGameBoardCheckers: function(a, b, d, c) {
            var e = this;
            this.getGameState().blockUndo();
            c && this.changeCurrentPlayer();
            this.moving = !0;
            c = globals.getRowAndColFromGraph(a[1]);
            a = globals.getRowAndColFromGraph(a[0]);
            this.boardOfCheckers[a[0]][a[1]] = this.boardOfCheckers[c[0]][c[1]];
            this.boardOfCheckers[c[0]][c[1]] = null;
            for (a = 0; a < d.length; a++)
                if ("1" == d[a][2]) {
                    c = this.getXYValue(d[a][0], d[a][1]);
                    var f = !1;
                    "king" == d[a][3] && (f = !0);
                    f = new Checker(this, g, h, -100, globals.getRndInteger(this.world.height / 2 - 150, this.world.height / 2 + 150), globals.getStonesSprites(), f, "1");
                    this.boardOfCheckers[d[a][0]][d[a][1]] = f;
                    this.boardOfCheckers[d[a][0]][d[a][1]].tweenTo(c[0], c[1])
                } else "2" == d[a][2] && (c = this.getXYValue(d[a][0], d[a][1]), f = !1, "king" == d[a][3] && (f = !0), f = new Checker(this, g, h, this.world.width +
                    100, globals.getRndInteger(this.world.height / 2 - 150, this.world.height / 2 + 150), globals.getStonesSprites(), f, "2"), this.boardOfCheckers[d[a][0]][d[a][1]] = f, this.boardOfCheckers[d[a][0]][d[a][1]].tweenTo(c[0], c[1]));
            for (var g = 0; 8 > g; g++)
                for (var h = 0; 8 > h; h++) null != this.boardOfCheckers[g][h] && (this.boardOfCheckers[g][h].setRow(b[g][h][0]), this.boardOfCheckers[g][h].setCol(b[g][h][1]), "king" == b[g][h][4] && "king" != this.boardOfCheckers[g][h].whatAmI() ? (this.boardOfCheckers[g][h].changeToKing(), c = getXYValue(g, h),
                    this.fireParticle(c[0], c[1], globals.particleAmount)) : "checker" == b[g][h][4] && "checker" != this.boardOfCheckers[g][h].whatAmI() && this.boardOfCheckers[g][h].changeToChecker(), this.boardOfCheckers[g][h].undoTweenTo(b[g][h][2], b[g][h][3]));
            this.cleanShowPossibleMovesOnBoardArray();
            this.uncheckEveryCheckedChecker();
            this.cleanShowPossibleMovesOnBoardArray();
            this.stopAllPulsingCheckers();
            globals.createTimer(3 * globals.times.TOP_CHECKERS_TWEEN_TIME, function() {
                0 == globals.rules.capture ? e.showPossibleCheckersOnBoard(0) :
                    1 == globals.rules.capture ? e.showPossibleCheckersOnBoard(1) : e.showPossibleCheckersOnBoard(2);
                e.gameState.unblockUndo()
            })
        },
        getGame: function() {
            return this.game
        },
        getHistoryObj: function() {
            return this.gameHistory
        },
        removeOneCheckerFromBoard: function(a, b) {
            this.boardOfCheckers[a][b] = null
        },
        getGameState: function() {
            return this.gameState
        },
        getPaths: function() {
            return this.paths
        },
        isMoving: function() {
            return this.moving
        },
        setMoving: function(a) {
            this.moving = a
        },
        setTutorial: function(a) {
            this.tutorial = a
        },
        buildGraphStrings: function(a) {
            function b(b,
                c, e) {
                return a.apply(this, arguments)
            }
            b.toString = function() {
                return a.toString()
            };
            return b
        }(function(a, b, d) {
            return a.reduce(function(c, e) {
                e.parent == b && (buildGraphStrings(a, e.key, d + e.key + "->").length || result.push(d + e.key), c.push(e));
                return c
            }, [])
        }),
        getAllPossibleWays: function(a) {
            var b = [];
            (function c(a, f, g) {
                return a.reduce(function(h, k) {
                    k.parent == f && (c(a, k.key, g + k.key + "->").length || b.push(g + k.key), h.push(k));
                    return h
                }, [])
            })(a, "none", "");
            b = [].concat(_toConsumableArray(b));
            return this.validateResultPaths(b)
        },
        validateResultPaths: function(a) {
            for (var b = [], d = 0; d < a.length; d++) {
                var c = this.getBoardWithNumbers(),
                    e = a[d].split("->"),
                    f = e[0] + "";
                if (1 == e.length || 2 == e.length) b.push(a[d]);
                else
                    for (var g = 0; g < e.length - 1; g++) {
                        var h = globals.getRowAndColFromGraph(e[g]),
                            k = globals.getRowAndColFromGraph(e[g + 1]),
                            h = this.isEnemyCheckerNumberBetween(h[0], h[1], k[0], k[1], c, c[h[0]][h[1]]);
                        if (null != h) c[h[0]][h[1]] = null, f = f + "->" + e[g + 1], e[g + 1] == e[e.length - 1] && b.push(f);
                        else {
                            b.push(f);
                            break
                        }
                    }
            }
            return b
        },
        getBoardWithNumbers: function() {
            for (var a = [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ], b = 0; 8 > b; b++)
                for (var d = 0; 8 > d; d++) null == this.boardOfCheckers[b][d] ? a[b][d] = null : "1" == this.boardOfCheckers[b][d].getPlayer() ? a[b][d] = 1 : a[b][d] = 2;
            return a
        },
        isEnemyCheckerNumberBetween: function(a, b, d, c, e, f) {
            var g = !0,
                h = !0;
            0 > a - d && (g = !1);
            0 > b - c && (h = !1);
            if (g && h)
                for (var k = 0; a - k != d && b - k != c;) {
                    if (null != e[a - k][b - k] && e[a - k][b - k] != f) return [
                        [a - k],
                        [b - k]
                    ];
                    k++
                }
            if (!g && !h)
                for (k = 0; a + k != d && b + k != c;) {
                    if (null != e[a + k][b + k] && e[a + k][b + k] != f) return [
                        [a + k],
                        [b + k]
                    ];
                    k++
                }
            if (!g && h)
                for (k = 0; a + k != d && b - k != c;) {
                    if (null !=
                        e[a + k][b - k] && e[a + k][b - k] != f) return [
                        [a + k],
                        [b - k]
                    ];
                    k++
                }
            if (g && !h)
                for (k = 0; a - k != d && b + k != c;) {
                    if (null != e[a - k][b + k] && e[a - k][b + k] != f) return [
                        [a - k],
                        [b + k]
                    ];
                    k++
                }
            return null
        },
        getBoardSprite: function() {
            return this.this.boardBackground
        },
        initParticles: function() {
            this.getGame().physics.startSystem(Phaser.Physics.ARCADE);
            this.emitter = this.getGame().add.emitter(0, 0, globals.particleAmount);
            this.emitter.makeParticles("win_particle_star1");
            this.emitter.gravity = 0
        },
        fireParticle: function(a, b, d) {
            this.emitter.x = a;
            this.emitter.y =
                b;
            this.emitter.start(!0, 600, null, d)
        }
    };
    var Checker = function(a, b, d, c, e, f, g, h) {
        this.imageKey = f;
        this.boardObj = a;
        this.xPos = c;
        this.yPos = e;
        this.row = b;
        this.col = d;
        this.boardOfCheckers = a.getGameBoardCheckers();
        this.game = a.getGame();
        this.pulsing = this.checked = this.blocked = !1;
        this.player = h;
        this.king = g;
        this.toBeRemovedList = [];
        this.possibleMovesGraph = [];
        this.possibleMovesGraphKing = [];
        this.possibleSimpleMovesGraph = [];
        this.canChecerJumpLimit = this.canKingJumpLimit = 0;
        this.create()
    };
    Checker.prototype = {
        cleanPossibleMoves: function() {
            this.possibleMovesGraph = [];
            this.possibleMovesGraphKing = [];
            this.possibleSimpleMovesGraph = []
        },
        canCheckerBeMoved: function(a) {
            this.boardOfCheckers = this.boardObj.getGameBoardCheckers();
            if ("check" == a && this.player == this.boardObj.getCurrentPlayer().getPlayer() && !this.boardObj.isCheckerMarkedAsPossibleToMove(this)) return !1;
            this.cleanPossibleMoves();
            this.possibleMovesGraph.push({
                key: globals.boardForGraph[this.row][this.col],
                parent: "none"
            });
            this.possibleSimpleMovesGraph.push({
                key: globals.boardForGraph[this.row][this.col],
                parent: "none"
            });
            2 == globals.rules.king && this.king ? (this.canCheckerJump(this.row, this.col), this.canCheckerBeMovedDown(this.row, this.col), this.canCheckerBeMovedUp(this.row, this.col)) : "2" == this.player ? (1 == globals.rules.captureBackwards ? this.canCheckerJump(this.row, this.col) : this.canCheckerJumpDown(this.row, this.col), this.canCheckerBeMovedDown(this.row, this.col)) : (1 == globals.rules.captureBackwards ? this.canCheckerJump(this.row, this.col) : this.canCheckerJumpUp(this.row, this.col), this.canCheckerBeMovedUp(this.row,
                this.col));
            return 1 < this.possibleMovesGraph.length || 1 < this.possibleSimpleMovesGraph.length ? !0 : !1
        },
        canKingBeMoved: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
            this.boardOfCheckers = this.boardObj.getGameBoardCheckers();
            if ("check" == a && this.player == this.boardObj.getCurrentPlayer().getPlayer() && !this.boardObj.isCheckerMarkedAsPossibleToMove(this)) return !1;
            this.cleanPossibleMoves();
            this.possibleMovesGraphKing.push({
                key: globals.boardForGraph[this.row][this.col],
                parent: "none"
            });
            this.possibleSimpleMovesGraph.push({
                key: globals.boardForGraph[this.row][this.col],
                parent: "none"
            });
            2 == globals.rules.king ? (this.canCheckerBeMoved(), this.possibleMovesGraphKing = this.possibleMovesGraph) : (this.canKingJump(this.row, this.col, b), this.canKingBeMovedUp(this.row, this.col), this.canKingBeMovedDown(this.row, this.col));
            return 1 < this.possibleMovesGraphKing.length || 1 < this.possibleSimpleMovesGraph.length ? !0 : !1
        },
        canCheckerBeMovedUp: function(a, b) {
            0 <= a - 1 && 0 <= b - 1 && null == this.boardOfCheckers[a - 1][b - 1] &&
                this.possibleSimpleMovesGraph.push({
                    key: globals.boardForGraph[a - 1][b - 1],
                    parent: globals.boardForGraph[a][b]
                });
            0 <= a - 1 && 8 > b + 1 && null == this.boardOfCheckers[a - 1][b + 1] && this.possibleSimpleMovesGraph.push({
                key: globals.boardForGraph[a - 1][b + 1],
                parent: globals.boardForGraph[a][b]
            })
        },
        canCheckerBeMovedDown: function(a, b) {
            8 > a + 1 && 8 > b + 1 && null == this.boardOfCheckers[a + 1][b + 1] && this.possibleSimpleMovesGraph.push({
                key: globals.boardForGraph[a + 1][b + 1],
                parent: globals.boardForGraph[a][b]
            });
            8 > a + 1 && 0 <= b - 1 && null == this.boardOfCheckers[a +
                1][b - 1] && this.possibleSimpleMovesGraph.push({
                key: globals.boardForGraph[a + 1][b - 1],
                parent: globals.boardForGraph[a][b]
            })
        },
        canCheckerJumpUp: function(a, b) {
            var d = this.canCheckerJumpUpLeft(a, b),
                c = this.canCheckerJumpUpRight(a, b);
            if (d || c) this.possibleMovesGraph.length - 1 >= this.canChecerJumpLimit && (d = this.possibleMovesGraph[this.possibleMovesGraph.length - 1], d = globals.getRowAndColFromGraph(d.key), d[0] != a && d[1] != b && this.canCheckerJumpUp(d[0], d[1])), this.possibleMovesGraph.length - 2 >= this.canChecerJumpLimit && (d =
                this.possibleMovesGraph[this.possibleMovesGraph.length - 2], d = globals.getRowAndColFromGraph(d.key), d[0] != a && d[1] != b && this.canCheckerJumpUp(d[0], d[1]))
        },
        canCheckerJumpDown: function(a, b) {
            var d = this.canCheckerJumpDownLeft(a, b),
                c = this.canCheckerJumpDownRight(a, b);
            if (d || c) this.possibleMovesGraph.length - 1 >= this.canChecerJumpLimit && (d = this.possibleMovesGraph[this.possibleMovesGraph.length - 1], d = globals.getRowAndColFromGraph(d.key), d[0] != a && d[1] != b && this.canCheckerJumpDown(d[0], d[1])), this.possibleMovesGraph.length -
                2 >= this.canChecerJumpLimit && (d = this.possibleMovesGraph[this.possibleMovesGraph.length - 2], d = globals.getRowAndColFromGraph(d.key), d[0] != a && d[1] != b && this.canCheckerJumpDown(d[0], d[1]))
        },
        canCheckerJump: function(a, b) {
            var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1,
                c = this.canCheckerJumpUpLeft(a, b, d),
                e = this.canCheckerJumpUpRight(a, b, d),
                f = this.canCheckerJumpDownLeft(a, b, d),
                g = this.canCheckerJumpDownRight(a, b, d);
            if (c || e || f || g) this.possibleMovesGraph.length - 1 >= this.canChecerJumpLimit && (c = this.possibleMovesGraph[this.possibleMovesGraph.length -
                1], c = globals.getRowAndColFromGraph(c.key), c[0] != a && c[1] != b && this.canCheckerJump(c[0], c[1], d)), this.possibleMovesGraph.length - 2 >= this.canChecerJumpLimit && (c = this.possibleMovesGraph[this.possibleMovesGraph.length - 2], c = globals.getRowAndColFromGraph(c.key), c[0] != a && c[1] != b && this.canCheckerJump(c[0], c[1], d)), this.possibleMovesGraph.length - 3 >= this.canChecerJumpLimit && (c = this.possibleMovesGraph[this.possibleMovesGraph.length - 3], c = globals.getRowAndColFromGraph(c.key), c[0] != a && c[1] != b && this.canCheckerJump(c[0],
                c[1], d)), this.possibleMovesGraph.length - 4 >= this.canChecerJumpLimit && (c = this.possibleMovesGraph[this.possibleMovesGraph.length - 4], c = globals.getRowAndColFromGraph(c.key), c[0] != a && c[1] != b && this.canCheckerJump(c[0], c[1], d))
        },
        canCheckerJumpUpLeft: function(a, b) {
            var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
            return 0 <= a - 2 && 0 <= b - 2 && null != this.boardOfCheckers[a - 1][b - 1] && this.boardOfCheckers[a - 1][b - 1].getPlayer() != this.player && null == this.boardOfCheckers[a - 2][b - 2] && 1 == this.canJumpOnAlreadyJumped(a,
                b, a - 2, b - 2) ? (d || this.possibleMovesGraph.push({
                key: globals.boardForGraph[a - 2][b - 2],
                parent: globals.boardForGraph[a][b]
            }), !0) : !1
        },
        canCheckerJumpUpRight: function(a, b) {
            var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
            return 0 <= a - 2 && 8 > b + 2 && null != this.boardOfCheckers[a - 1][b + 1] && this.boardOfCheckers[a - 1][b + 1].getPlayer() != this.player && null == this.boardOfCheckers[a - 2][b + 2] && 1 == this.canJumpOnAlreadyJumped(a, b, a - 2, b + 2) ? (d || this.possibleMovesGraph.push({
                key: globals.boardForGraph[a - 2][b + 2],
                parent: globals.boardForGraph[a][b]
            }), !0) : !1
        },
        canCheckerJumpDownRight: function(a, b) {
            var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
            return 8 > a + 2 && 8 > b + 2 && null != this.boardOfCheckers[a + 1][b + 1] && this.boardOfCheckers[a + 1][b + 1].getPlayer() != this.player && null == this.boardOfCheckers[a + 2][b + 2] && 1 == this.canJumpOnAlreadyJumped(a, b, a + 2, b + 2) ? (d || this.possibleMovesGraph.push({
                key: globals.boardForGraph[a + 2][b + 2],
                parent: globals.boardForGraph[a][b]
            }), !0) : !1
        },
        canCheckerJumpDownLeft: function(a, b) {
            var d = 2 < arguments.length && void 0 !== arguments[2] ?
                arguments[2] : !1;
            return 8 > a + 2 && 0 <= b - 2 && null != this.boardOfCheckers[a + 1][b - 1] && this.boardOfCheckers[a + 1][b - 1].getPlayer() != this.player && null == this.boardOfCheckers[a + 2][b - 2] && 1 == this.canJumpOnAlreadyJumped(a, b, a + 2, b - 2) ? (d || this.possibleMovesGraph.push({
                key: globals.boardForGraph[a + 2][b - 2],
                parent: globals.boardForGraph[a][b]
            }), !0) : !1
        },
        canJumpOnAlreadyJumped: function(a, b, d, c) {
            for (var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : this.possibleMovesGraph, f = 0; f < e.length; f++) {
                if (globals.boardForGraph[d][c] ==
                    e[f].key && globals.boardForGraph[a][b] == e[f].parent || globals.boardForGraph[d][c] == e[f].parent && globals.boardForGraph[a][b] == e[f].key) return !1;
                for (var g = e.length - 1; 0 <= g; g--)
                    if (globals.boardForGraph[d][c] == e[g].parent) return !1
            }
            return !0
        },
        canKingBeMovedUp: function(a, b) {
            for (var d = 1; 8 > d; d++) 0 <= a - d && 0 <= b - d && (null == this.boardOfCheckers[a - d][b - d] ? this.possibleSimpleMovesGraph.push({
                key: globals.boardForGraph[a - d][b - d],
                parent: globals.boardForGraph[a][b]
            }) : d = 8);
            for (d = 1; 8 > d; d++) 0 <= a - d && 8 > b + d && (null == this.boardOfCheckers[a -
                d][b + d] ? this.possibleSimpleMovesGraph.push({
                key: globals.boardForGraph[a - d][b + d],
                parent: globals.boardForGraph[a][b]
            }) : d = 8)
        },
        canKingBeMovedDown: function(a, b) {
            for (var d = 1; 8 > d; d++) 8 > a + d && 8 > b + d && (null == this.boardOfCheckers[a + d][b + d] ? this.possibleSimpleMovesGraph.push({
                key: globals.boardForGraph[a + d][b + d],
                parent: globals.boardForGraph[a][b]
            }) : d = 8);
            for (d = 1; 8 > d; d++) 8 > a + d && 0 <= b - d && (null == this.boardOfCheckers[a + d][b - d] ? this.possibleSimpleMovesGraph.push({
                    key: globals.boardForGraph[a + d][b - d],
                    parent: globals.boardForGraph[a][b]
                }) :
                d = 8)
        },
        canKingJump: function(a, b) {
            var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1,
                c = this.canKingJumpUpLeft(a, b, d),
                e = this.canKingJumpUpRight(a, b, d),
                f = this.canKingJumpDownLeft(a, b, d),
                g = this.canKingJumpDownRight(a, b, d);
            return c || e || f || g ? (this.possibleMovesGraphKing.length - 1 >= this.canKingJumpLimit && (c = this.possibleMovesGraphKing[this.possibleMovesGraphKing.length - 1], c = globals.getRowAndColFromGraph(c.key), c[0] != a && c[1] != b && this.canKingJump(c[0], c[1], d)), this.possibleMovesGraphKing.length -
                2 >= this.canKingJumpLimit && (c = this.possibleMovesGraphKing[this.possibleMovesGraphKing.length - 2], c = globals.getRowAndColFromGraph(c.key), c[0] != a && c[1] != b && this.canKingJump(c[0], c[1], d)), this.possibleMovesGraphKing.length - 3 >= this.canKingJumpLimit && (c = this.possibleMovesGraphKing[this.possibleMovesGraphKing.length - 3], c = globals.getRowAndColFromGraph(c.key), c[0] != a && c[1] != b && this.canKingJump(c[0], c[1], d)), this.possibleMovesGraphKing.length - 4 >= this.canKingJumpLimit && (c = this.possibleMovesGraphKing[this.possibleMovesGraphKing.length -
                    4], c = globals.getRowAndColFromGraph(c.key), c[0] != a && c[1] != b && this.canKingJump(c[0], c[1], d)), !0) : !1
        },
        canKingJumpUpLeft: function(a, b) {
            for (var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1, c = 1; 8 > c; c++)
                if (1 <= a - c && 1 <= b - c && null != this.boardOfCheckers[a - c][b - c]) {
                    if (!d && this.boardOfCheckers[a - c][b - c].getPlayer() == this.boardObj.getCurrentPlayer().getPlayer()) break;
                    if (null != this.boardOfCheckers[a - c][b - c] && this.boardOfCheckers[a - c][b - c].getPlayer() == this.player) break;
                    if (null != this.boardOfCheckers[a -
                            c - 1][b - c - 1] && this.boardOfCheckers[a - c][b - c].getPlayer() != this.player && this.boardOfCheckers[a - c - 1][b - c - 1].getPlayer() != this.player) break;
                    if (2 == globals.rules.king && null == this.boardOfCheckers[a - 1][b - 1]) break;
                    if (1 == this.canJumpOnAlreadyJumped(a, b, a - c - 1, b - c - 1, this.possibleMovesGraphKing) && this.boardOfCheckers[a - c][b - c].getPlayer() != this.player && null == this.boardOfCheckers[a - c - 1][b - c - 1] && -1 == this.boardOfCheckers[a - c][b - c].getToBeRemoved().indexOf(globals.getDiagonal(globals.boardForGraph[a][b], globals.boardForGraph[a -
                            c][b - c]) + " " + globals.boardForGraph[a - c][b - c])) {
                        if (null != this.boardOfCheckers[a][b] && 1 == this.boardOfCheckers[a][b].getChecked()) break;
                        if (0 == globals.rules.king)
                            for (d = 1; 8 >= d; d++)
                                if (0 <= a - c - d && 0 <= b - c - d && null == this.boardOfCheckers[a - c - d][b - c - d]) {
                                    var e = {
                                        key: globals.boardForGraph[a - c - d][b - c - d],
                                        parent: globals.boardForGraph[a][b]
                                    };
                                    this.doContains(e) && this.possibleMovesGraphKing.push(e)
                                } else break;
                        else 1 == globals.rules.king && (e = {
                                key: globals.boardForGraph[a - c - 1][b - c - 1],
                                parent: globals.boardForGraph[a][b]
                            }, this.doContains(e) &&
                            this.possibleMovesGraphKing.push(e));
                        this.boardOfCheckers[a - c][b - c].setToBeRemoved(globals.getDiagonal(globals.boardForGraph[a][b], globals.boardForGraph[a - c][b - c]) + " " + globals.boardForGraph[a - c][b - c]);
                        return !0
                    }
                }
            return !1
        },
        canKingJumpUpRight: function(a, b) {
            for (var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1, c = 1; 8 > c; c++)
                if (1 <= a - c && 7 > b + c && null != this.boardOfCheckers[a - c][b + c]) {
                    if (!d && this.boardOfCheckers[a - c][b + c].getPlayer() == this.boardObj.getCurrentPlayer().getPlayer()) break;
                    if (null !=
                        this.boardOfCheckers[a - c][b + c] && this.boardOfCheckers[a - c][b + c].getPlayer() == this.player) break;
                    if (null != this.boardOfCheckers[a - c - 1][b + c + 1] && this.boardOfCheckers[a - c][b + c].getPlayer() != this.player && this.boardOfCheckers[a - c - 1][b + c + 1].getPlayer() != this.player) break;
                    if (2 == globals.rules.king && null == this.boardOfCheckers[a - 1][b + 1]) break;
                    if (1 == this.canJumpOnAlreadyJumped(a, b, a - c - 1, b + c + 1, this.possibleMovesGraphKing) && this.boardOfCheckers[a - c][b + c].getPlayer() != this.player && null == this.boardOfCheckers[a - c - 1][b +
                            c + 1
                        ] && -1 == this.boardOfCheckers[a - c][b + c].getToBeRemoved().indexOf(globals.getDiagonal(globals.boardForGraph[a][b], globals.boardForGraph[a - c][b + c]) + " " + globals.boardForGraph[a - c][b + c])) {
                        if (null != this.boardOfCheckers[a][b] && 1 == this.boardOfCheckers[a][b].getChecked()) break;
                        if (0 == globals.rules.king)
                            for (d = 1; 8 >= d; d++)
                                if (0 <= a - c - d && 8 > b + c + d && null == this.boardOfCheckers[a - c - d][b + c + d]) {
                                    var e = {
                                        key: globals.boardForGraph[a - c - d][b + c + d],
                                        parent: globals.boardForGraph[a][b]
                                    };
                                    this.doContains(e) && this.possibleMovesGraphKing.push(e)
                                } else break;
                        else 1 == globals.rules.king && (e = {
                            key: globals.boardForGraph[a - c - 1][b + c + 1],
                            parent: globals.boardForGraph[a][b]
                        }, this.doContains(e) && this.possibleMovesGraphKing.push(e));
                        this.boardOfCheckers[a - c][b + c].setToBeRemoved(globals.getDiagonal(globals.boardForGraph[a][b], globals.boardForGraph[a - c][b + c]) + " " + globals.boardForGraph[a - c][b + c]);
                        return !0
                    }
                }
            return !1
        },
        canKingJumpDownRight: function(a, b) {
            for (var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1, c = 1; 8 > c; c++)
                if (7 > a + c && 7 > b + c && null != this.boardOfCheckers[a +
                        c][b + c]) {
                    if (!d && this.boardOfCheckers[a + c][b + c].getPlayer() == this.boardObj.getCurrentPlayer().getPlayer()) break;
                    if (null != this.boardOfCheckers[a + c][b + c] && this.boardOfCheckers[a + c][b + c].getPlayer() == this.player) break;
                    if (null != this.boardOfCheckers[a + c + 1][b + c + 1] && this.boardOfCheckers[a + c][b + c].getPlayer() != this.player && this.boardOfCheckers[a + c + 1][b + c + 1].getPlayer() != this.player) break;
                    if (2 == globals.rules.king && null == this.boardOfCheckers[a + 1][b + 1]) break;
                    if (1 == this.canJumpOnAlreadyJumped(a, b, a + c + 1, b + c + 1,
                            this.possibleMovesGraphKing) && this.boardOfCheckers[a + c][b + c].getPlayer() != this.player && null == this.boardOfCheckers[a + c + 1][b + c + 1] && -1 == this.boardOfCheckers[a + c][b + c].getToBeRemoved().indexOf(globals.getDiagonal(globals.boardForGraph[a][b], globals.boardForGraph[a + c][b + c]) + " " + globals.boardForGraph[a + c][b + c])) {
                        if (null != this.boardOfCheckers[a][b] && 1 == this.boardOfCheckers[a][b].getChecked()) break;
                        if (0 == globals.rules.king)
                            for (d = 1; 8 >= d; d++)
                                if (8 > a + c + d && 8 > b + c + d && null == this.boardOfCheckers[a + c + d][b + c + d]) {
                                    var e = {
                                        key: globals.boardForGraph[a + c + d][b + c + d],
                                        parent: globals.boardForGraph[a][b]
                                    };
                                    this.doContains(e) && this.possibleMovesGraphKing.push(e)
                                } else break;
                        else 1 == globals.rules.king && (e = {
                            key: globals.boardForGraph[a + c + 1][b + c + 1],
                            parent: globals.boardForGraph[a][b]
                        }, this.doContains(e) && this.possibleMovesGraphKing.push(e));
                        this.boardOfCheckers[a + c][b + c].setToBeRemoved(globals.getDiagonal(globals.boardForGraph[a][b], globals.boardForGraph[a + c][b + c]) + " " + globals.boardForGraph[a + c][b + c]);
                        return !0
                    }
                }
            return !1
        },
        canKingJumpDownLeft: function(a,
            b) {
            for (var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1, c = 1; 8 > c; c++)
                if (7 > a + c && 1 <= b - c && null != this.boardOfCheckers[a + c][b - c]) {
                    if (!d && this.boardOfCheckers[a + c][b - c].getPlayer() == this.boardObj.getCurrentPlayer().getPlayer()) break;
                    if (null != this.boardOfCheckers[a + c][b - c] && this.boardOfCheckers[a + c][b - c].getPlayer() == this.player) break;
                    if (null != this.boardOfCheckers[a + c + 1][b - c - 1] && this.boardOfCheckers[a + c][b - c].getPlayer() != this.player && this.boardOfCheckers[a + c + 1][b - c - 1].getPlayer() != this.player) break;
                    if (2 == globals.rules.king && null == this.boardOfCheckers[a + 1][b - 1]) break;
                    if (1 == this.canJumpOnAlreadyJumped(a, b, a + c + 1, b - c - 1, this.possibleMovesGraphKing) && this.boardOfCheckers[a + c][b - c].getPlayer() != this.player && null == this.boardOfCheckers[a + c + 1][b - c - 1] && -1 == this.boardOfCheckers[a + c][b - c].getToBeRemoved().indexOf(globals.getDiagonal(globals.boardForGraph[a][b], globals.boardForGraph[a + c][b - c]) + " " + globals.boardForGraph[a + c][b - c])) {
                        if (null != this.boardOfCheckers[a][b] && 1 == this.boardOfCheckers[a][b].getChecked()) break;
                        if (0 == globals.rules.king)
                            for (d = 1; 8 >= d; d++)
                                if (8 > a + c + d && 0 <= b - c - d && null == this.boardOfCheckers[a + c + d][b - c - d]) {
                                    var e = {
                                        key: globals.boardForGraph[a + c + d][b - c - d],
                                        parent: globals.boardForGraph[a][b]
                                    };
                                    this.doContains(e) && this.possibleMovesGraphKing.push(e)
                                } else break;
                        else 1 == globals.rules.king && (e = {
                            key: globals.boardForGraph[a + c + 1][b - c - 1],
                            parent: globals.boardForGraph[a][b]
                        }, this.doContains(e) && this.possibleMovesGraphKing.push(e));
                        this.boardOfCheckers[a + c][b - c].setToBeRemoved(globals.getDiagonal(globals.boardForGraph[a][b],
                            globals.boardForGraph[a + c][b - c]) + " " + globals.boardForGraph[a + c][b - c]);
                        return !0
                    }
                }
            return !1
        },
        changeToKing: function() {
            this.king = !0;
            globals.managers.audio.playSound("jingle_dama");
            0 == globals.settings.playAs ? "1" == this.player ? this.checkerSprite.loadTexture(this.image, 4) : this.checkerSprite.loadTexture(this.image, 5) : "1" == this.player ? this.checkerSprite.loadTexture(this.image, 5) : this.checkerSprite.loadTexture(this.image, 4)
        },
        changeToChecker: function() {
            this.king = !1;
            0 == globals.settings.playAs ? "1" == this.player ?
                this.checkerSprite.loadTexture(this.image, 0) : this.checkerSprite.loadTexture(this.image, 1) : "1" == this.player ? this.checkerSprite.loadTexture(this.image, 1) : this.checkerSprite.loadTexture(this.image, 0)
        },
        getDataToHistory: function() {
            return this.king ? [this.row, this.col, this.xPos, this.yPos, "king"] : [this.row, this.col, this.xPos, this.yPos, "checker"]
        },
        create: function() {
            this.checkerSprite = this.game.add.sprite(this.xPos, this.yPos, this.imageKey, 0);
            this.checkerSprite.frame = 0 == globals.settings.playAs ? this.king ? "1" ===
                this.player ? 4 : 5 : "1" === this.player ? 0 : 1 : this.king ? "1" === this.player ? 5 : 4 : "1" === this.player ? 1 : 0;
            this.checkerSprite.inputEnabled = !0;
            this.checkerSprite.anchor.setTo(.5);
            1 != Number(this.player) && 0 != globals.rules.aiLevel || this.checkerSprite.events.onInputDown.add(this.onTouch, this)
        },
        setInput: function(a) {
            this.checkerSprite.inputEnabled = a
        },
        onTouch: function() {
            this.game.world.bringToTop(this.checkerSprite);
            this.boardObj.removeAllFromRemoveMarking();
            this.boardObj.cleanShowPossibleMovesOnBoardArray();
            if (this.boardObj.isPossibleCheckersShown())
                if (this.boardObj.getGame().world.bringToTop(this.checkerSprite),
                    globals.managers.audio.playSound("figurina_tapnutie"), 1 == this.checked) {
                    this.checkerUncheck(this);
                    this.boardObj.cleanShowPossibleMovesOnBoardArray();
                    this.boardObj.uncheckEveryCheckedChecker();
                    this.boardObj.removeAllFromRemoveMarking();
                    this.cleanPossibleMoves();
                    var a = 0,
                        a = 0 == globals.rules.capture ? 0 : 1 == globals.rules.capture ? 1 : 2;
                    this.boardObj.showPossibleCheckersOnBoard(a)
                } else {
                    if (this.boardObj.stopAllPulsingCheckers(), this.boardObj.cleanShowPossibleMovesOnBoardArray(), this.boardObj.uncheckEveryCheckedChecker(),
                        this.boardObj.removeAllFromRemoveMarking(), this.cleanPossibleMoves(), a = 2, this.boardObj.isMoving() || (a = 0 == globals.rules.capture ? 0 : 1 == globals.rules.capture ? 1 : 2), !this.boardObj.isMoving())
                        if (this.king || !this.canCheckerBeMoved("check") || this.blocked || this.boardObj.getCurrentPlayer().getPlayer() != this.player)
                            if (this.king && this.canKingBeMoved("check") && !this.blocked && this.boardObj.getCurrentPlayer().getPlayer() == this.player) {
                                this.checkerCheck();
                                this.checked = !0;
                                if (1 < this.possibleMovesGraphKing.length)
                                    for (var b =
                                            0; b < this.possibleMovesGraphKing.length; b++) {
                                        var d = globals.getRowAndColFromGraph(this.possibleMovesGraphKing[b].key);
                                        this.canKingJump(d[0], d[1])
                                    }
                                this.boardObj.showPossibleMovesOnBoard(this.possibleMovesGraphKing, this.possibleSimpleMovesGraph, a)
                            } else this.shakeChecker(), this.boardObj.isMoving() || this.boardObj.showPossibleCheckersOnBoard(a);
                    else this.checkerCheck(), this.checked = !0, this.boardObj.showPossibleMovesOnBoard(this.possibleMovesGraph, this.possibleSimpleMovesGraph, a)
                }
            else globals.managers.audio.playSound("response_negative")
        },
        onTouchBot: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.boardObj.getCurrentPlayer().getPlayer();
            this.boardObj.getGame().world.bringToTop(this.checkerSprite);
            this.checkerUncheck(this);
            this.boardObj.cleanShowPossibleMovesOnBoardArray();
            this.boardObj.uncheckEveryCheckedChecker();
            this.boardObj.removeAllFromRemoveMarking();
            this.cleanPossibleMoves();
            this.blocked = !1;
            if (b != this.boardObj.getCurrentPlayer().getPlayer())
                if (this.king || !this.canCheckerBeMoved("check") || this.blocked ||
                    b != this.player)
                    if (this.king && this.canKingBeMoved("check", !0) && !this.blocked && b == this.player) {
                        this.checkerCheck();
                        this.checked = !0;
                        if (1 < this.possibleMovesGraphKing.length)
                            for (b = 0; b < this.possibleMovesGraphKing.length; b++) {
                                var d = globals.getRowAndColFromGraph(this.possibleMovesGraphKing[b].key);
                                this.canKingJump(d[0], d[1], !0)
                            }
                        if (1 < this.possibleMovesGraphKing.length)
                            for (b = 0; b < this.possibleMovesGraphKing.length; b++) d = globals.getRowAndColFromGraph(this.possibleMovesGraphKing[b].key), this.canKingJump(d[0],
                                d[1], !0);
                        this.boardObj.showPossibleMovesOnBoard(this.possibleMovesGraphKing, [], a, !1)
                    } else this.boardObj.isMoving() || this.boardObj.showPossibleCheckersOnBoard(a);
            else this.checkerCheck(), this.checked = !0, this.boardObj.showPossibleMovesOnBoard(this.possibleMovesGraph, [], a, !1);
            else if (this.king || !this.canCheckerBeMoved("check") || this.blocked || b != this.player)
                if (this.king && this.canKingBeMoved("check", !0) && !this.blocked && b == this.player) {
                    this.checkerCheck();
                    this.checked = !0;
                    if (1 < this.possibleMovesGraphKing.length)
                        for (b =
                            0; b < this.possibleMovesGraphKing.length; b++) d = globals.getRowAndColFromGraph(this.possibleMovesGraphKing[b].key), this.canKingJump(d[0], d[1], !0);
                    this.boardObj.showPossibleMovesOnBoard(this.possibleMovesGraphKing, this.possibleSimpleMovesGraph, a, !1)
                } else this.boardObj.isMoving() || this.boardObj.showPossibleCheckersOnBoard(a);
            else this.checkerCheck(), this.checked = !0, this.boardObj.showPossibleMovesOnBoard(this.possibleMovesGraph, this.possibleSimpleMovesGraph, a, !1);
            this.blocked = !0
        },
        displayBoardInConsole: function() {
            for (var a =
                    this.boardObj.getGameBoardCheckers(), b = 0; 8 > b; b++)
                for (var d = "", c = 0; 8 > c; c++) d = null == a[b][c] ? d + " " : d + a[b][c].getPlayer()
        },
        shakeChecker: function() {
            var a = new Phaser.Plugin.Shake(this.boardObj.getGame());
            this.boardObj.getGame().plugins.add(a);
            a.shake();
            a.shake(10);
            a.shake(15, this.checkerSprite)
        },
        checkerCheck: function() {
            this.image = globals.getStonesSprites();
            1 == globals.settings.playAs ? this.king ? "1" == this.player ? this.checkerSprite.loadTexture(this.image, 7) : this.checkerSprite.loadTexture(this.image, 6) : "1" ==
                this.player ? this.checkerSprite.loadTexture(this.image, 3) : this.checkerSprite.loadTexture(this.image, 2) : this.king ? "1" == this.player ? this.checkerSprite.loadTexture(this.image, 6) : this.checkerSprite.loadTexture(this.image, 7) : "1" == this.player ? this.checkerSprite.loadTexture(this.image, 2) : this.checkerSprite.loadTexture(this.image, 3)
        },
        checkerUncheck: function() {
            this.image = globals.getStonesSprites();
            1 == globals.settings.playAs ? this.king ? "1" == this.player ? this.checkerSprite.loadTexture(this.image, 5) : this.checkerSprite.loadTexture(this.image,
                4) : "1" == this.player ? this.checkerSprite.loadTexture(this.image, 1) : this.checkerSprite.loadTexture(this.image, 0) : this.king ? "1" == this.player ? this.checkerSprite.loadTexture(this.image, 4) : this.checkerSprite.loadTexture(this.image, 5) : "1" == this.player ? this.checkerSprite.loadTexture(this.image, 0) : this.checkerSprite.loadTexture(this.image, 1)
        },
        tweenTo: function(a, b) {
            this.boardObj.getGameState().blockUndo();
            this.game.world.bringToTop(this.checkerSprite);
            this.xPos = a;
            this.yPos = b;
            var d = this.boardObj.getGame().add.tween(this.checkerSprite).to({
                x: a,
                y: b
            }, 3 * globals.times.TOP_CHECKERS_TWEEN_TIME, "Quart.easeOut");
            d.onStart.add(function() {
                globals.managers.audio.playSound("suchnutie1")
            });
            return d
        },
        undoTweenTo: function(a, b) {
            globals.managers.audio.playSound("suchnutie1");
            this.boardObj.getGameState().blockUndo();
            var d = this,
                c = this.boardObj.getGame().add.tween(this.checkerSprite).to({
                    x: a,
                    y: b
                }, 3 * globals.times.TOP_CHECKERS_TWEEN_TIME, "Quart.easeOut");
            c.start();
            c.onComplete.add(function() {
                d.boardObj.setMoving(!1);
                d.boardObj.uncheckEveryCheckedChecker();
                d.boardObj.storeBoard()
            });
            this.xPos = a;
            this.yPos = b;
            this.boardObj.cleanShowPossibleMovesOnBoardArray();
            this.toBeRemovedList = []
        },
        tweenFromBoard: function(a, b) {
            var d = this;
            this.boardObj.getGameState().blockUndo();
            globals.createTimer(100, function() {
                d.boardObj.getGame().world.bringToTop(d.checkerSprite)
            });
            this.checkerSprite.inputEnabled = !1;
            this.xPos = a;
            this.yPos = b;
            this.boardObj.cleanShowPossibleMovesOnBoardArray();
            var c = this.boardObj.getGame().add.tween(this.checkerSprite).to({
                x: a,
                y: b
            }, 3 * globals.times.TOP_CHECKERS_TWEEN_TIME, "Quart.easeOut");
            c.onStart.add(function() {
                globals.managers.audio.playSound("odkotulanie")
            });
            return c
        },
        startPulseChecker: function() {
            this.pulsing = !0;
            this.playTween1 = this.boardObj.getGame().add.tween(this.checkerSprite.scale).to({
                x: [1.1, 1.1],
                y: [1.1, 1.1]
            }, 200, Phaser.Easing.Linear.None, !1, 0);
            this.playTween1.onComplete.add(function() {
                this.playTween2.start()
            }, this);
            this.playTween2 = this.boardObj.getGame().add.tween(this.checkerSprite.scale).to({
                x: [1, 1],
                y: [1, 1]
            }, 200, Phaser.Easing.Linear.None, !1, 0);
            this.playTween2.onComplete.add(function() {
                1 ==
                    this.pulsing && this.playTween1.start()
            }, this);
            this.playTween1.start()
        },
        stopPulseChecker: function() {
            this.pulsing = !1
        },
        destroySprite: function() {
            this.boardObj.removeOneCheckerFromBoard(this.row, this.col)
        },
        getCheckerSprite: function() {
            return this.checkerSprite
        },
        setImage: function(a) {
            this.imageKey = a;
            this.create()
        },
        getRow: function() {
            return this.row
        },
        getCol: function() {
            return this.col
        },
        getImage: function() {
            return this.imageKey
        },
        getChecked: function() {
            return this.checked
        },
        setChecked: function(a) {
            this.checked = a
        },
        setPosition: function(a, b) {
            this.xPos = a;
            this.yPos = b;
            this.create()
        },
        setRow: function(a) {
            this.row = a
        },
        setCol: function(a) {
            this.col = a
        },
        setBlocked: function(a) {
            this.blocked = a
        },
        getBlocked: function() {
            return this.blocked
        },
        getPlayer: function() {
            return this.player
        },
        getToBeRemoved: function() {
            return this.toBeRemovedList
        },
        setToBeRemoved: function(a) {
            this.toBeRemovedList.push(a)
        },
        clearToBeRemoved: function() {
            this.toBeRemovedList = []
        },
        getPossibleMovesGraph: function() {
            return this.possibleMovesGraph
        },
        getPossibleMovesGraphKing: function() {
            return this.possibleMovesGraphKing
        },
        getPossibleSimpleMovesGraph: function() {
            return this.possibleSimpleMovesGraph
        },
        whatAmI: function() {
            return 1 == this.king ? "king" : "checker"
        },
        doContains: function(a) {
            return !0
        }
    };
    var GameHistory = function() {
        this.historyMoves = null == globals.storage.data.historyMoves ? [] : globals.storage.data.historyMoves;
        this.removedCheckers = null == globals.storage.data.removedCheckers ? [] : globals.storage.data.removedCheckers;
        this.historyBoardOfValues = null == globals.storage.data.historyBoardOfValues ? [] : globals.storage.data.historyBoardOfValues
    };
    GameHistory.prototype = {
        addBoard: function(a, b) {
            this.historyMoves.push(a);
            this.historyBoardOfValues.push(b.map(function(a) {
                return a.slice()
            }))
        },
        addRemoved: function(a) {
            this.removedCheckers.push(a)
        },
        getRemoved: function() {
            return this.removedCheckers.pop()
        },
        getMoves: function() {
            return this.historyMoves.pop()
        },
        getBoardValues: function() {
            return this.historyBoardOfValues.pop()
        },
        getHistorySize: function() {
            return this.historyBoardOfValues.length
        },
        getFullMoves: function() {
            return this.historyMoves
        },
        getFullCheckers: function() {
            return this.removedCheckers
        },
        getFullValues: function() {
            return this.historyBoardOfValues
        },
        setFullMoves: function(a) {
            this.historyMoves = a
        },
        setFullCheckers: function(a) {
            this.removedCheckers = a
        },
        setFullValues: function(a) {
            this.historyBoardOfValues = a
        }
    };
    var PlayerBot = function(a, b, d, c, e) {
        this.game = a;
        this.boardObj = b;
        this.playersCheckers = this.imageKey = d;
        this.player = c;
        this.aiLevel = e
    };
    PlayerBot.prototype = {
        makeMove: function() {
            var a = this;
            this.boardObj.stopAllPulsingCheckers();
            this.boardObj.changeCurrentPlayer();
            globals.createTimer(3 * globals.times.TOP_CHECKERS_TWEEN_TIME, function() {
                1 == a.aiLevel ? a.makeMoveHard() : 2 == a.aiLevel ? a.makeMoveMedium() : 3 == a.aiLevel && a.makeMoveEasy()
            })
        },
        makeMoveHard: function() {
            var a = this.boardObj.showPossibleCheckersOnBoard(1);
            if (void 0 != a) {
                for (var b = [], d = 0; d < a.length; d++) a[d].onTouchBot(1), b[d] = this.boardObj.getPaths();
                for (var a = [], c = 10, d = 0; d < c; d++) a[d] = [];
                for (d = 0; d < b.length; d++)
                    for (c = 0; c < b[d].length; c++)
                        if (!globals.isSingle(b[d][c]) && 2 < b[d][c].length) {
                            var e = b[d][c].split("->");
                            a[e.length].push(b[d][c])
                        }
                for (d = 9; 0 <= d; d--)
                    if (0 != a[d].length) {
                        for (var c = -1, f = 0; f < a[d].length; f++) {
                            var e = a[d][f].split("->"),
                                g = globals.getRowAndColFromGraph(e[0]),
                                b = globals.getRowAndColFromGraph(e[e.length - 1]),
                                h = globals.getRowAndColFromGraph(e[0]);
                            if (!globals.canBeOverjumped(b, this.boardObj.getGameBoardCheckers(), this.boardObj.getGameBoardCheckers()[g[0]][g[1]].getPlayer(), h,
                                    e) && !globals.canBeOverjumpedByKing(b, this.boardObj.getGameBoardCheckers(), this.boardObj.getGameBoardCheckers()[g[0]][g[1]].getPlayer())) {
                                c = f;
                                break
                            }
                        } - 1 == c ? (b = globals.getRndInteger(0, a[d].length - 1), a = this.regexFind(a[d][b], !0)) : a = this.regexFind(a[d][c], !0);
                        b = globals.getRowAndColFromGraph(a[0]);
                        a = globals.getRowAndColFromGraph(a[a.length - 1]);
                        this.boardObj.showPossibleCheckersOnBoard(1);
                        this.boardObj.getGameBoardCheckers()[b[0]][b[1]].onTouchBot(1);
                        this.boardObj.moveToBot(a[0], a[1]);
                        return
                    }
                a = [];
                c = b.length;
                for (d = 0; d < c; d++) a[d] = [];
                for (d = 0; d < b.length; d++)
                    for (c = 0; c < b[d].length; c++) e = b[d][c] + "", 2 == e.split("->").length && globals.isSingle(b[d][c]) && a[d].push(b[d][c]);
                e = [];
                c = 10;
                for (d = 0; d < c; d++) e[d] = [];
                for (d = 0; d < a.length; d++)
                    for (c = 0; c < a[d].length; c++) {
                        b = a[d][c].split("->");
                        this.boardObj.moveToFake(b[0], b[1]);
                        f = this.getOpponentDestinations(!0);
                        if (void 0 == f) return;
                        if (0 != f.length)
                            for (g = 0; g < f.length; g++) e[f[g].split("->").length].push(a[d][c]);
                        else e[0].push(a[d][c]);
                        this.boardObj.moveToFakeReverse(b[0], b[1])
                    }
                for (d =
                    0; 9 > d; d++)
                    if (0 != e[d].length) {
                        b = globals.getRndInteger(0, e[d].length - 1);
                        a = this.regexFind(e[d][b], !0);
                        b = globals.getRowAndColFromGraph(a[0]);
                        a = globals.getRowAndColFromGraph(a[1]);
                        this.boardObj.showPossibleCheckersOnBoard(1);
                        this.boardObj.getGameBoardCheckers()[b[0]][b[1]].onTouchBot(1);
                        this.boardObj.moveToBot(a[0], a[1]);
                        break
                    }
                this.boardObj.cleanShowPossibleMovesOnBoardArray()
            }
        },
        makeMoveMedium: function() {
            var a = this.boardObj.showPossibleCheckersOnBoard(1);
            if (void 0 != a) {
                for (var b = [], d = 0; d < a.length; d++) a[d].onTouchBot(1),
                    b[d] = this.boardObj.getPaths();
                for (var c = [], a = 10, d = 0; d < a; d++) c[d] = [];
                for (d = 0; d < b.length; d++)
                    for (a = 0; a < b[d].length; a++)
                        if (!globals.isSingle(b[d][a]) && 2 < b[d][a].length) {
                            var e = b[d][a].split("->");
                            c[e.length].push(b[d][a])
                        }
                for (d = 9; 0 <= d; d--)
                    if (0 != c[d].length) {
                        a = globals.getRndInteger(0, c[d].length - 1);
                        a = this.regexFind(c[d][a], !0);
                        d = globals.getRowAndColFromGraph(a[0]);
                        a = globals.getRowAndColFromGraph(a[a.length - 1]);
                        this.boardObj.showPossibleCheckersOnBoard(1);
                        this.boardObj.getGameBoardCheckers()[d[0]][d[1]].onTouchBot(1);
                        this.boardObj.moveToBot(a[0], a[1]);
                        return
                    }
                c = [];
                a = b.length;
                for (d = 0; d < a; d++) c[d] = [];
                for (d = 0; d < b.length; d++)
                    for (a = 0; a < b[d].length; a++) e = b[d][a] + "", 2 == e.split("->").length && globals.isSingle(b[d][a]) && c[d].push(b[d][a]);
                b = [];
                a = 10;
                for (d = 0; d < a; d++) b[d] = [];
                for (d = 0; d < c.length; d++)
                    for (a = 0; a < c[d].length; a++) {
                        e = c[d][a].split("->");
                        this.boardObj.moveToFake(e[0], e[1]);
                        var f = this.getOpponentDestinations(!0);
                        if (void 0 == f) return;
                        if (0 != f.length)
                            for (var g = 0; g < f.length; g++) b[f[g].split("->").length].push(c[d][a]);
                        else b[0].push(c[d][a]);
                        this.boardObj.moveToFakeReverse(e[0], e[1])
                    }
                for (d = 0; 9 > d; d++)
                    if (0 != b[d].length) {
                        a = globals.getRndInteger(0, b[d].length - 1);
                        a = this.regexFind(b[d][a], !0);
                        d = globals.getRowAndColFromGraph(a[0]);
                        a = globals.getRowAndColFromGraph(a[1]);
                        this.boardObj.showPossibleCheckersOnBoard(1);
                        this.boardObj.getGameBoardCheckers()[d[0]][d[1]].onTouchBot(1);
                        this.boardObj.moveToBot(a[0], a[1]);
                        break
                    }
                this.boardObj.cleanShowPossibleMovesOnBoardArray()
            }
        },
        containsAny: function(a, b) {
            for (var d = 0; d != b.length; d++) {
                var c = b[d];
                if (-1 != a.indexOf(c)) return c
            }
            return null
        },
        getOpponentDestinations: function(a) {
            var b = this.boardObj.showPossibleCheckersOnBoard(1, this.boardObj.getPlayer2().getPlayer(), !0);
            if (void 0 != b) {
                for (var d = [], c = 0; c < b.length; c++) {
                    if (a) b[c].onTouchBot(1, this.boardObj.getPlayer2().getPlayer());
                    else b[c].onTouchBot(1, "current", !0);
                    d[c] = this.boardObj.getPaths()
                }
                a = [];
                for (b = 0; b < d.length; b++)
                    for (c = 0; c < d[b].length; c++) - 1 != d[b][c].indexOf("->") && a.push(d[b][c]);
                return a
            }
        },
        regexFind: function(a) {
            for (var b = [], d = 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ?
                    /[0-9]?[0-9]/gm : /[0-9]?[0-9]->[0-9]?[0-9]$/gm, c = void 0; null !== (c = d.exec(a));) c.index === d.lastIndex && d.lastIndex++, c.forEach(function(a, c) {
                b.push(a)
            });
            return b
        },
        makeMoveEasy: function() {
            var a = this.boardObj.showPossibleCheckersOnBoard(1);
            if (void 0 != a) {
                var b = globals.getRndInteger(0, a.length - 1);
                a[b].onTouchBot(1);
                for (var d = this.boardObj.getPaths(), a = [], b = 0; b < d.length; b++) a.push(d[b].split("->"));
                for (var c = d = 0, b = 0; b < a.length; b++) a[b].length > d && (d = a[b].length, c = b);
                a = globals.getRowAndColFromGraph(Number(a[c][a[c].length -
                    1
                ]));
                this.boardObj.moveToBot(a[0], a[1]);
                this.boardObj.uncheckEveryCheckedChecker();
                this.boardObj.blockEveryChecker()
            }
        },
        getPlayerCheckers: function() {
            return this.playersCheckers
        },
        getPlayer: function() {
            return this.player
        },
        getAiLevel: function() {
            return this.aiLevel
        },
        whoAmI: function() {
            return "bot"
        }
    };
    var Player = function(a, b, d, c, e) {
        this.game = a;
        this.boardObj = b;
        this.playersCheckers = this.imageKey = d;
        this.player = c;
        this.aiLevel = e
    };
    Player.prototype = {
        getPlayerCheckers: function() {
            return this.playersCheckers
        },
        getPlayer: function() {
            return this.player
        },
        getAiLevel: function() {
            return this.aiLevel
        },
        whoAmI: function() {
            return "normal"
        }
    };
    var Tutorial = function(a, b) {
        this.world = a;
        this.game = b;
        this.hand = null;
        this.xPos = this.world.width + 100;
        this.yPos = this.world.height + 100
    };
    Tutorial.prototype = {
        createHand: function(a, b) {
            this.xPos = a;
            this.yPos = b;
            this.hand = this.game.add.sprite(this.xPos, this.yPos, "hand");
            this.hand.anchor.setTo(.5)
        },
        moveHandTo: function(a, b, d) {
            a = this.game.add.tween(this.hand).to({
                x: a,
                y: b
            }, d);
            a.start();
            a.onComplete.add(function() {})
        },
        showOverlay: function() {
            globals.setPauseState(!0);
            var a = this.game.add.image(0, 0, "trans");
            a.width = this.world.width;
            a.height = this.world.height;
            a.inputEnabled = !0;
            a.visible = !0;
            this.overlay = a
        },
        hideOverlay: function() {
            globals.setPauseState(!1);
            this.overlay.inputEnabled = !1;
            this.overlay.visible = !1
        },
        getHand: function() {
            return this.hand
        },
        destoryHand: function() {
            this.hand.destroy()
        }
    };

}();