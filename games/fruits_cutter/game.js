! function() {
    
    function aa() {};
    MusicPlayer = function() {
        this.bb = !0;
        this.Ra = [];
        this.sounds = [];
        this.Wa = null
    };
    MusicPlayer.prototype = {
        constructor: MusicPlayer,
        create: function() {
            this.Ra[0] = game.add.audio("musicGame_1", .7, !0);
            this.Ra[1] = game.add.audio("musicGame_2", .7, !0);
            this.Ra[2] = game.add.audio("musicGame_3", .7, !0);
            this.Ra[3] = game.add.audio("musicMenu", .7, !0);
            for (var a = 0; a < k.length; a++) {
                var d = 1;
                void 0 !== k[a].pc && (d = k[a].pc);
                this.sounds[k[a].ba] = game.add.audio(k[a].ba, d)
            }
        }
    };

    function ba(a, d) {
        if (n) {
            !0 === d && (a.Wa = null);
            for (var e = 0; e < a.Ra.length; e++) a.Ra[e].stop()
        }
    }

    function q(a) {
        var d = r;
        if (n && d.bb) try {
            d.sounds[a].play()
        } catch (e) {}
    }

    function ca(a, d, e) {
        if (n && (d != a.Wa || 1 == e) && (a.Wa = d, a.bb)) {
            for (d = 0; d < a.Ra.length; d++) a.Ra[d].stop();
            null != a.Wa && a.Ra[a.Wa].play()
        }
    };
    GameTexts = function() {
        this.xml = null;
        this.Lb = []
    };
    GameTexts.prototype = {
        preload: function() {},
        create: function() {
            for (var a = game.cache.getText("lang_stringss"), a = JSON.parse(a).stringresources.strings.string, d, e = 0; e < a.length; e++) {
                d = a[e]["-id"];
                null == this.Lb[d] && (this.Lb[d] = []);
                for (var b = 0; b < da.length; b++) this.Lb[d][da[b]] = a[e][da[b]]
            }
        }
    };

    function t(a, d, e) {
        for (a.fontSize = d; a.width > e;) d--, a.fontSize = d
    }

    function u(a) {
        var d = ea;
        return void 0 == d.Lb[a] || void 0 == d.Lb[a][da[w]] ? "" : d.Lb[a][da[w]].toUpperCase()
    }
    var da = "en de es fr it br ru".split(" "),
        w = 0,
        z = "",
        fa = ["ArcadeKey", "TrialKey", "QueueKey"],
        ga = ["ArcadeModeInfoKey", "TrialModeInfoKey", "QueueModeInfoKey"];
    var n = !0; - 1 < navigator.userAgent.indexOf("Windows Phone") && (n = !1);
    Phaser.Device._initialize();
    var ha = Phaser.Device.desktop,
        ia = !1,
        ja = navigator.userAgent || navigator.vendor || window.opera;
    if (ja.match(/iPad/i) || ja.match(/iPhone/i) || ja.match(/iPod/i)) ia = !0;

    var A = "baloo_font",
        B = 0,
        C = {
            0: [500, 2500, 5E3],
            1: [500, 1E3, 1500],
            2: [300, 600, 900]
        },
        D = 0,
        E = 0,
        ka = [2, 50, 5, 30, 50],
        la = [100, 0, 0, 0, 0],
        ma = [80, 60, 0, 40, 0];

    function na(a) {
        return a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
    }

    function F(a) {
        return Math.floor(Math.random() * a)
    }

    function G(a, d) {
        return Math.floor(Math.random() * (d - a + 1)) + a
    }

    function oa(a) {
        return a[Math.floor(Math.random() * a.length)]
    }

    function pa() {
        var a = qa,
            d = Object.keys(a);
        return a[d[d.length * Math.random() << 0]]
    }
    Array.prototype.contains = function(a) {
        for (var d = this.length; d--;)
            if (this[d] === a) return !0;
        return !1
    };

    function H(a, d, e) {
        null != d && (a.anchor.x = Math.round(a.width * d) / a.width);
        null != e && (a.anchor.y = Math.round(a.height * e) / a.height)
    }

    function I(a) {
        return Math.floor(a)
    }

    function J(a) {
        function d(a) {
            for (var b = 0; b < a.children.length; b++) {
                var g = a.getChildAt(b);
                game.tweens.removeFrom(g.scale, !0);
                0 < a.getChildAt(b).children.length && d(a.getChildAt(b))
            }
        }
        d(a);
        game.tweens.removeFrom(a, !0)
    };
    var k = [{
            ba: "clck",
            fileName: "click",
            pc: .6
        }, {
            ba: "snd_swoosh_in",
            fileName: "swooshIn"
        }, {
            ba: "snd_swoosh_out",
            fileName: "swooshOut"
        }, {
            ba: "snd_win",
            fileName: "level-win1"
        }, {
            ba: "snd_iceBreak",
            fileName: "impact-ice-1"
        }, {
            ba: "snd_combo",
            fileName: "jingle111-combo"
        }, {
            ba: "snd_bns1up",
            fileName: "jingle211-bonus_1UP"
        }, {
            ba: "snd_bnsdbl",
            fileName: "jingle211-bonus_double"
        }, {
            ba: "snd_bnsfrm",
            fileName: "jingle211-bonus_freedom"
        }, {
            ba: "snd_bnsfrz",
            fileName: "jingle211-bonus_freeze1"
        }, {
            ba: "snd_bnspmp",
            fileName: "jingle211-bonus_pumpkin"
        },
        {
            ba: "snd_sek",
            fileName: "sek1"
        }, {
            ba: "snd_sekBln",
            fileName: "sek-balonek1"
        }, {
            ba: "snd_sekFruit_fall",
            fileName: "sek-fruit21"
        }, {
            ba: "snd_sekFruit_incorrect",
            fileName: "sek-fruit31"
        }, {
            ba: "snd_sekFruit1",
            fileName: "sek-fruit41",
            pc: 1.3
        }, {
            ba: "snd_sekFruit2",
            fileName: "sek-fruit42",
            pc: 1.3
        }, {
            ba: "snd_sekFruit3",
            fileName: "sek-fruit43",
            pc: 1.3
        }, {
            ba: "snd_odraz",
            fileName: "sek-plechovka1-odraz"
        }, {
            ba: "snd_vybuch",
            fileName: "vybuch-hlasnejsie2"
        }, {
            ba: "snd_q_cink",
            fileName: "time-1sek-tick-noloop"
        }, {
            ba: "snd_q_zle",
            fileName: "odpocitavani-casu-konec1"
        }
    ];

    function sa(a) {
        var d;
        null == d && (d = !1);
        if (!game.device.desktop || d) document.getElementById(a).style.display = "block"
    }

    function ta(a) {
        var d;
        null == d && (d = !1);
        if (!game.device.desktop || d) document.getElementById(a).style.display = "none"
    };
    Buttons = function() {
        this.Yc = 16777215;
        this.Zc = 8947848
    };
    Buttons.prototype = {
        constructor: Buttons,
        create: function() {},
        wb: function(a, d, e, b, g, h, v, f, l, m, p) {
            a = game.add.button(a, d, e);
            a.frameName = b;
            a.zb = !0;
            a.Qb = m;
            b = game.make.sprite(0, -2, g);
            b.frameName = h;
            b.anchor.set(.5);
            a.lb = a.addChild(b);
            a.Uc = v;
            a.Vc = f || this;
            a.events.onInputUp.add(this.Tc, this);
            a.events.onInputDown.add(this.Qc, this);
            a.events.onInputOver.add(this.Sc, this);
            a.events.onInputOut.add(this.Rc, this);
            H(a, .5, .5);
            void 0 != p ? (a.ac = p[0], a.bc = p[1], a.scale.set(p[0], p[1])) : (a.ac = 1, a.bc = 1);
            void 0 != l && l.addChild(a);
            a.jb = this.Yc;
            a.oc = this.Zc;
            a.tint = a.jb;
            return a
        },
        Sc: function(a) {
            a.zb && (game.input.pointer1.isDown || (ua(a, a.oc), null != a.Eb && va(a, !0)), a.cc = !0)
        },
        Rc: function(a) {
            a.zb && (ua(a, a.jb), null != a.Eb && va(a, !1), a.cc = !1)
        },
        Tc: function(a) {
            a.zb && (ua(a, a.jb), a.cc && ha && ua(a, a.oc), null != a.Eb && va(a, !1), a.cc && (a.cc = !1, a.Uc.call(a.Vc, a)), void 0 != a.Qb && 1 != a.Qb || game.add.tween(a.scale).to({
                x: a.ac || 1,
                y: a.bc || 1
            }, 40, Phaser.Easing.Linear.None, !0), a.cachedTint = -1)
        },
        Qc: function(a) {
            a.zb && (ua(a, a.oc), null != a.Eb && va(a, !0), void 0 != a.Qb &&
                1 != a.Qb || game.add.tween(a.scale).to({
                    x: .95 * a.ac || .95,
                    y: .95 * a.bc || .95
                }, 40, Phaser.Easing.Linear.None, !0), a.cachedTint = -1, a.cc = !0)
        }
    };

    function va(a, d) {
        for (var e = 0; e < a.Eb.length; e++) d ? a.getChildAt(a.Eb[e]).fill = "#CC9E6A" : a.getChildAt(a.Eb[e]).fill = a.getChildAt(a.Eb[e]).ze
    }

    function ua(a, d) {
        a.tint = d;
        for (c in a.children) !0 !== a.getChildAt(c).re && (a.getChildAt(c).tint = d)
    }

    function wa(a, d, e, b, g, h, v, f) {
        var l = L.Xa;
        a = game.add.button(a, d, "pak");
        null != e && (a.frameName = e);
        a.zb = !0;
        a.Qb = void 0;
        e = game.make.text(0, 0, b, {
            font: "30px " + A,
            fill: "#F7F6D6",
            align: "center"
        });
        e.fontSize = I(1 * e.fontSize);
        e.setShadow(0, 1, "rgba(255, 255, 255, 1)", 0);
        H(e, .5, .5);
        a.Jc = a.addChild(e);
        a.Ge = g;
        a.xe = .85 * a.width;
        a.Uc = h;
        a.Vc = v || l;
        a.events.onInputUp.add(l.Tc, l);
        a.events.onInputDown.add(l.Qc, l);
        a.events.onInputOver.add(l.Sc, l);
        a.events.onInputOut.add(l.Rc, l);
        H(a, .5, .5);
        a.ac = 1;
        a.bc = 1;
        void 0 != f && f.addChild(a);
        a.jb = l.Yc;
        a.oc = l.Zc;
        a.tint = a.jb;
        return a
    };

    function xa() {
        this.Xa = null;
        this.la = [];
        this.k = [];
        this.Ic = Phaser.Easing.Quadratic.Out;
        this.kc = 350
    }
    xa.prototype = {
        preload: function() {
            this.nd = new ya;
            this.k.push(this.nd);
            this.m = new za;
            this.k.push(this.m);
            this.jc = new Aa;
            this.k.push(this.jc);
            this.Hc = new Ba;
            this.k.push(this.Hc);
            this.ic = new Ca;
            this.k.push(this.ic);
            this.Bd = new Da;
            this.k.push(this.Bd);
            n && (this.Cb = new Ea, this.k.push(this.Cb));
            for (var a = 0; a < this.k.length; a++) this.k[a].showScreen_default = this.k[a].mc, this.k[a].hideScreen_default = this.k[a].Zb, this.k[a].showFromRight = this.k[a].fe, this.k[a].hideToRight = this.k[a].Ld, this.k[a].showFromLeft = this.k[a].ee,
                this.k[a].hideToLeft = this.k[a].xc, this.k[a].showScreeCustom = this.k[a].ge, this.k[a].showScale = this.k[a].Ee, this.k[a].hideScale = this.k[a].te
        },
        create: function() {
            this.Xa = new Buttons;
            this.Xa.create();
            for (var a in this.k) this.k.hasOwnProperty(a) && (this.k[a].create(), M(this.k[a].e, !1));
            n && M(L.Cb.e, !0)
        },
        update: function() {
            for (var a in this.k) this.k.hasOwnProperty(a) && !0 === this.k[a].e.visible && this.k[a].update();
            if (0 < this.Tb) {
                var d = this.Tb / this.Hb * this.Hb;
                a = game.rnd.integerInRange(-d, d);
                d = game.rnd.integerInRange(-d,
                    d);
                game.camera.x = a;
                game.camera.y = d;
                this.Tb -= game.time.elapsedMS;
                0 >= this.Tb && game.world.setBounds(0, 0, game.width, game.height)
            }
        }
    };

    function N(a, d) {
        var e = L;
        e.Tb = a || 20;
        e.Hb = d || 20;
        e.rc = Phaser.Utils.extend(!1, {}, game.world.bounds);
        game.world.setBounds(e.rc.x - e.Hb, e.rc.y - e.Hb, e.rc.width + 2 * e.Hb, e.rc.height + 2 * e.Hb)
    }

    function Fa(a, d, e, b) {
        var g = L;
        d = d || 300;
        game.add.tween(a).to({
            alpha: 0
        }, d, Phaser.Easing.Linear.None, !0, e).onComplete.add(function() {
            b.$a.call(b);
            void 0 !== b.e.Ia && b.e.Ia.call(b)
        }, g)
    }

    function Ga(a, d, e) {
        var b = L,
            g;
        d = d || 300;
        g = 1;
        a.alpha = 0;
        a.visible = !0;
        game.add.tween(a).to({
            alpha: 1
        }, d, Phaser.Easing.Linear.None, !0, g).onComplete.add(function() {
            e.Ua.call(e)
        }, b)
    }

    function Ha(a, d) {
        var e = L,
            b = 200,
            g = 0,
            h = Phaser.Easing.Quadratic.Out;
        null === b && (b = 300);
        null === g && (g = 150);
        null === h && (h = Phaser.Easing.Linear.None);
        a.y = 0;
        game.add.tween(a).to({
            y: -game.height
        }, b, h, !0, g).onComplete.add(function() {
            d.$a.call(d);
            void 0 !== d.e.Ia && d.e.Ia.call(d)
        }, e)
    }

    function Ia(a, d) {
        var e = L,
            b = 250,
            g = 0,
            h = Phaser.Easing.Quadratic.Out;
        null === b && (b = 300);
        null === g && (g = 150);
        null === h && (h = Phaser.Easing.Linear.None);
        a.y = -game.height;
        a.visible = !0;
        game.add.tween(a).to({
            y: 0
        }, b, h, !0, g).onComplete.add(function() {
            d.Ua.call(d)
        }, e)
    }

    function Ja(a, d) {
        var e = L,
            b = L.kc,
            g = 0,
            h = L.Ic;
        null === b && (b = 300);
        null === g && (g = 150);
        null === h && (h = Phaser.Easing.Linear.None);
        a.x = 0;
        game.add.tween(a).to({
            x: -game.width
        }, b, h, !0, g).onComplete.add(function() {
            d.$a.call(d);
            void 0 !== d.e.Ia && d.e.Ia.call(d)
        }, e)
    }

    function Ka(a, d) {
        var e = L,
            b = L.kc,
            g = 0,
            h = L.Ic;
        null === b && (b = 300);
        null === g && (g = 150);
        null === h && (h = Phaser.Easing.Linear.None);
        a.x = -game.width;
        a.visible = !0;
        game.add.tween(a).to({
            x: 0
        }, b, h, !0, g).onComplete.add(function() {
            d.Ua.call(d)
        }, e)
    }

    function La(a, d) {
        var e = L,
            b = L.kc,
            g = 0,
            h = L.Ic;
        null === b && (b = 300);
        null === g && (g = 150);
        null === h && (h = Phaser.Easing.Linear.None);
        a.x = 0;
        game.add.tween(a).to({
            x: game.width
        }, b, h, !0, g).onComplete.add(function() {
            d.$a.call(d);
            void 0 !== d.e.Ia && d.e.Ia.call(d)
        }, e)
    }

    function Ma(a, d) {
        var e = L,
            b = L.kc,
            g = 0,
            h = L.Ic;
        null === b && (b = 300);
        null === g && (g = 150);
        null === h && (h = Phaser.Easing.Linear.None);
        a.x = game.width;
        a.visible = !0;
        game.add.tween(a).to({
            x: 0
        }, b, h, !0, g).onComplete.add(function() {
            d.Ua.call(d)
        }, e)
    }

    function M(a, d) {
        function e(a) {
            for (var g = 0; g < a.children.length; g++)
                if (!0 !== a.getChildAt(g).se) {
                    var h = a.getChildAt(g);
                    h.inputEnabled = !1;
                    1 == h.zb && (h.inputEnabled = d, void 0 !== h.jb && ua(h, h.jb));
                    0 < a.getChildAt(g).children.length && e(a.getChildAt(g))
                }
        }
        e(a);
        a.fd = d
    }

    function Na(a, d, e) {
        function b(a, b, d) {
            a = game.make.image(0, 0, "pak", "dialog_bg_" + a);
            f.draw(a, b, d)
        }
        var g = game.cache.getFrameByName("pak", "dialog_bg_0").width,
            h = game.cache.getFrameByName("pak", "dialog_bg_0").height,
            v = Math.floor(460 / g);
        a = Math.floor(a / h);
        var f = game.add.bitmapData(v * g, a * h);
        b(0, 0, 0);
        b(2, (v - 1) * g, 0);
        b(6, 0, (a - 1) * h);
        b(8, (v - 1) * g, (a - 1) * h);
        for (var l = 1; l < v - 1; l++) b(1, l * g, 0), b(7, l * g, (a - 1) * h);
        for (l = 1; l < a - 1; l++) b(3, 0, l * h), b(5, (v - 1) * g, l * h);
        for (l = 1; l < a - 1; l++)
            for (var m = 1; m < v - 1; m++) b(4, m * g, l * h);
        f.generateTexture(d,
            function() {
                e.call()
            });
        f.destroy()
    }

    function Oa(a, d) {
        var e = 0;
        Na(750, "mmOkno", function() {
            e++;
            2 === e && a.call(d)
        });
        Na(460, "okno2", function() {
            e++;
            2 === e && a.call(d)
        })
    }

    function Pa(a) {
        var d = game.make.sprite(0, 0, "pak", "1px_white");
        d.tint = "#000000";
        d.width = Qa;
        d.height = Ra;
        d.alpha = 0;
        d.Cd = game.add.tween(d).to({
            alpha: .7
        }, 150, Phaser.Easing.Linear.None, !1);
        d.ad = game.add.tween(d).to({
            alpha: 0
        }, 150, Phaser.Easing.Linear.None, !1);
        d.ad.onComplete.add(function(a) {
            a.Cd.isRunning || (a.visible = !1)
        }, a);
        d.ve = !0;
        return d
    }

    function Sa(a, d) {
        "undefined" != typeof a.de && a.de.pa();
        "undefined" != typeof a.nd && a.nd.pa();
        "undefined" != typeof a.Cb && a.Cb.pa();
        if (void 0 !== d) "function" === typeof d.pa && d.pa();
        else
            for (var e = 0; e < a.la.length; e++) "function" === typeof a.la[e].pa && a.la[e].pa()
    }

    function Ta() {
        var a, d = L,
            e = d.la.pop();
        void 0 == a && (a = "hideScreen_default");
        e[a].call(e, function() {
            this.la[this.la.length - 1].e.name == e.le && M(this.la[this.la.length - 1].e, !0)
        }.bind(d));
        a = d.la[d.la.length - 1];
        a.Ha.ad.start();
        e.le = a.e.name
    }

    function Ua(a) {
        var d, e = L,
            b = e.la[e.la.length - 1];
        M(b.e, !1);
        null == b.Ha ? (b.Ha = b.e.addChild(Pa(e)), b.Ha.ne = !1) : (b.Ha.alpha = 0, b.Ha.visible = !0);
        b.Ha.Cd.start();
        e.la.push(a);
        Sa(e, a);
        void 0 == d && (d = "showScreen_default");
        a[d].call(a)
    }

    function O(a, d) {
        for (var e, b = L; 0 < b.la.length;) {
            var g = b.la.pop();
            void 0 != g.Ha && 0 < g.Ha.alpha && g.Ha.ad.start();
            void 0 == e && (e = "hideScreen_default");
            g[e].call(g)
        }
        b.la.push(a);
        Sa(b, a);
        void 0 == d && (d = "showScreen_default");
        a[d].call(a);
        null != a.Ha && (a.Ha.alpha = 0, a.Ha.visible = !1)
    };

    function ya() {
        this.e = null;
        this.Aa = "screenBackground"
    }
    ya.prototype = {
        create: function() {
            this.e = game.add.group();
            this.e.name = this.Aa;
            this.fb = game.make.sprite(0, game.height / 2, "bg_img");
            H(this.fb, .5, .5);
            this.e.addChild(this.fb)
        },
        update: function() {},
        Ua: function() {},
        $a: function() {},
        pa: function() {
            this.fb.x = I(game.width / 2);
            this.fb.width = game.width;
            1 > this.fb.scale.x ? this.fb.scale.x = this.fb.scale.y = 1 : this.fb.scale.y = this.fb.scale.x
        }
    };

    function za() {
        this.e = null;
        this.Aa = "screenGame"
    }
    za.prototype = {
        create: function() {
            this.e = game.add.group();
            this.e.name = this.Aa;
            this.e.visible = !1;
            this.ha = game.make.sprite(0, 0, "bg_freez");
            this.e.addChild(this.ha);
            this.ha.Va = game.add.tween(this.ha).to({
                alpha: 1
            }, 350, Phaser.Easing.Linear.None);
            this.ha.alpha = 0;
            this.ha.na = game.add.tween(this.ha).to({
                alpha: 0
            }, 350, Phaser.Easing.Linear.None);
            this.sa = game.add.group(this.e);
            this.Gb = game.add.group(this.sa);
            P.Gb = this.Gb;
            this.Da = game.add.group(this.sa);
            this.Da.enableBody = !0;
            this.Da.physicsBodyType = Phaser.Physics.ARCADE;
            Q.Da = this.Da;
            this.tc = game.add.group(this.sa);
            Q.tc = this.tc;
            this.Ca = game.add.group(this.sa);
            this.Ca.enableBody = !0;
            this.Ca.physicsBodyType = Phaser.Physics.ARCADE;
            P.Ca = this.Ca;
            this.Sb = game.add.group(this.sa);
            this.Sb.enableBody = !0;
            this.Sb.physicsBodyType = Phaser.Physics.ARCADE;
            P.Sb = this.Sb;
            this.qc = game.add.group(this.sa);
            P.qc = this.qc;
            this.Lc = game.add.group(this.sa);
            P.Lc = this.Lc;
            this.Kc = game.add.group(this.sa);
            P.Kc = this.Kc;
            this.eb = game.add.sprite(0, 0, "pak", "10pxwhite");
            this.eb.width = Qa;
            this.eb.height = Ra;
            this.eb.anchor.set(.5, 0);
            this.sa.addChild(this.eb);
            this.ra = game.add.group(this.sa);
            this.ra.enableBody = !0;
            this.ra.physicsBodyType = Phaser.Physics.ARCADE;
            R.ra = this.ra;
            this.vc = game.add.group(this.sa);
            R.vc = this.vc;
            this.Na = game.add.group(this.sa);
            this.Na.x = -game.width / 2;
            S.Na = this.Na;
            this.Jb = game.add.group(this.sa);
            S.Jb = this.Jb;
            this.Jb.x = -game.width / 2;
            var a = game.add.sprite(0, game.height / 2, "pak", "num1");
            H(a, .5, .5);
            a.scale.set(0);
            this.yb = this.e.addChild(a);
            Va(this);
            Wa(this);
            this.za = game.add.text(game.width -
                5, 15, na(123456), {
                    font: "30px  " + A,
                    fill: "#e6e700"
                });
            this.za.y = I(.85 * this.za.height);
            this.za.anchor.set(1, .5);
            this.e.addChild(this.za);
            this.Ub = game.make.sprite(10, this.za.y - 3, "pak", "game_icons_1");
            this.Ub.anchor.set(0, .5);
            this.e.addChild(this.Ub);
            this.fa = game.add.text(this.Ub.width + 5, 3, "1 234", {
                font: "30px  " + A,
                fill: "#e6e700"
            });
            this.fa.anchor.set(0, .5);
            this.Ub.addChild(this.fa);
            this.qa = game.add.group(this.e);
            this.qa.visible = !1;
            this.qa.x = game.width;
            this.qa.y = 80;
            T.qa = this.qa;
            a = T;
            a.Bb = 395;
            a.Ta = game.add.group(a.qa);
            a.uc = a.qa.create(-a.Bb, 0, "pak", "bel_end");
            var d = game.add.graphics(0, 0);
            d.drawRect(-a.Bb, 0, a.Bb, a.uc.height);
            a.qa.we = a.qa.addChild(d);
            a.qa.mask = d;
            a.Ja = game.add.group(a.qa);
            a.Ja.x = -a.Bb;
            a.Ja.y = I(.55 * a.uc.height);
            for (d = 0; 7 > d; d++) a.Ec.push(a.uc.width + 55 * d);
            a.fc = game.add.group();
            a.fc.y = a.Ja.y;
            a.qa.addChild(a.fc);
            for (Xa(a); Ya(a););
            this.cd = game.add.group(this.e);
            this.Wc = game.make.group(this.e);
            this.kb = null;
            this.ea = game.make.sprite(30, 100, "pak", BonusTypes[1].frameName);
            this.ea.anchor.set(.5);
            this.ea.scale.set(.45);
            this.e.addChild(this.ea);
            this.ea.Va = game.add.tween(this.ea).to({
                alpha: 1
            }, 250, Phaser.Easing.Linear.None);
            this.ea.alpha = 0;
            this.ea.na = game.add.tween(this.ea).to({
                alpha: 0
            }, 250, Phaser.Easing.Linear.None);
            this.tb = game.add.text(0, 1.1 * this.ea.height, "10", {
                font: "40px  " + A,
                fill: "#ffffff",
                strokeThickness: 5
            });
            this.tb.setScaleMinMax(1, 1, 1, 1);
            this.tb.anchor.set(.5, 0);
            this.ea.addChild(this.tb);
            var a = this.Pd,
                d = this.e,
                e = L.Xa,
                b = game.add.button(0, 0, "pak");
            b.frameName = "pause";
            b.zb = !0;
            b.Qb = void 0;
            b.Uc = a;
            b.Vc = this || e;
            b.events.onInputUp.add(e.Tc, e);
            b.events.onInputDown.add(e.Qc, e);
            b.events.onInputOver.add(e.Sc, e);
            b.events.onInputOut.add(e.Rc, e);
            b.ac = 1;
            b.bc = 1;
            void 0 != d && d.addChild(b);
            H(b, .5, .5);
            b.jb = e.Yc;
            b.oc = e.Zc;
            b.tint = b.jb;
            this.zc = b;
            this.zc.y = game.height - this.zc.height / 2
        },
        update: function() {},
        Pd: function() {
            Za();
            gradle.event('btn_pause');
        },
        mc: function() {
            this.Ka();
            Ga(this.e, 200, this)
        },
        Ka: function() {
            M(this.e, !1);
            this.e.visible = !0;
            this.eb.alpha = 0;
            J(this.eb);
            $a(this, !0);
            ab(this, !0)
        },
        Ua: function() {
            M(this.e, !0)
        },
        Zb: function(a) {
            this.ta(a);
            Fa(this.e, L.kc / 2, 0, this)
        },
        xc: function(a) {
            this.ta(a);
            Ja(this.e, this)
        },
        ta: function(a) {
            M(this.e, !1);
            this.e.Ia = a
        },
        $a: function() {
            this.e.visible = !1;
            this.n.visible = !1;
            this.La.visible = !1;
            this.qa.visible = !1;
            Xa(T);
            var a = T;
            a.Ja.callAll("kill");
            a.f = [];
            this.cd.callAll("kill")
        },
        pa: function() {
            var a = game.width / 2;
            this.sa.x = a;
            this.yb.x = a;
            this.n.x = a;
            this.zc.x = game.width - this.zc.width / 2;
            this.za.x = game.width - 10;
            this.Ub.x = 10;
            this.Jb.x = this.Na.x = -a;
            this.qa.x =
                game.width;
            this.La.x = a;
            this.Wc.x = a;
            this.ha.width = game.width;
            this.ha.height = game.height
        }
    };

    function ab(a, d) {
        a.ea.Va.stop();
        a.ea.Va.pendingDelete = !1;
        a.ea.na.stop();
        a.ea.na.pendingDelete = !1;
        d ? a.ea.alpha = 0 : a.ea.na.start()
    }

    function bb(a, d, e) {
        var b = L.m;
        b.ea.frameName = BonusTypes[a].frameName;
        b.tb.fill = d;
        b.tb.stroke = e;
        b.tb.text = 10;
        b.ea.Va.stop();
        b.ea.Va.pendingDelete = !1;
        b.ea.na.stop();
        b.ea.na.pendingDelete = !1;
        b.ea.Va.start()
    }

    function $a(a, d) {
        a.ha.Va.stop();
        a.ha.Va.pendingDelete = !1;
        a.ha.na.stop();
        a.ha.na.pendingDelete = !1;
        d ? a.ha.alpha = 0 : a.ha.na.start()
    }

    function cb() {
        var a = L.m;
        null != a.kb && (game.add.tween(a.kb).to({
            alpha: 0
        }, 300, Phaser.Easing.Linear.None, !0, 800), game.add.tween(a.kb).to({
            y: a.kb.y - 150
        }, 1E3, Phaser.Easing.Quadratic.In, !0, 150).onComplete.addOnce(function(a) {
            a.kill()
        }, a), a.kb = null)
    }

    function db(a, d, e, b, g, h) {
        var v = L.m,
            f = v.cd.getFirstDead();
        null == f && (f = game.add.text(0, 0, "FREEDOM", {
            font: "bold 60px baloo_font",
            fill: "#ffffff",
            stroke: "#ffffff",
            strokeThickness: 10
        }), f.anchor.set(.5), v.cd.addChild(f));
        J(f);
        f.alpha = 1;
        f.scale.set(1, 0);
        f.text = e;
        f.anchor.set(.5);
        f.fill = b;
        f.stroke = g;
        f.fontSize = void 0 === h ? 60 : h;
        0 > a - f.width / 2 && (a = f.width / 2 + 5);
        a + f.width / 2 > game.width && (a = game.width - f.width / 2 - 5);
        f.reset(a, d);
        game.add.tween(f.scale).to({
            x: 1,
            y: 1
        }, 250, Phaser.Easing.Back.Out, !0).onComplete.addOnce(function() {
            game.add.tween(f).to({
                    alpha: 0
                },
                300, Phaser.Easing.Linear.None, !0, 850);
            game.add.tween(f).to({
                y: d - 150
            }, 1E3, Phaser.Easing.Quadratic.In, !0, 250).onComplete.addOnce(function(a) {
                a.kill()
            }, this)
        }, v)
    }

    function eb() {
        var a = L.m;
        a.eb.alpha = 1;
        game.add.tween(a.eb).to({
            alpha: 0
        }, 1200, Phaser.Easing.Quartic.In, !0, 500)
    }

    function fb(a) {
        L.m.fa.text = na(a)
    }

    function gb(a) {
        L.m.za.text = na(a)
    }

    function hb(a, d) {
        for (var e = ["x-off", "x-off", "x-off"], b = 0; b < d; b++) e[b] = "x-on";
        for (b = 0; 3 > b; b++) a.La.getChildAt(b).frameName = e[b]
    }

    function Wa(a) {
        function d(a, b) {
            var d = game.add.sprite(a, 0, "pak", "x-off");
            d.anchor.set(.5, 0);
            b.addChild(d)
        }
        a.La = game.add.group(a.e);
        a.La.visible = !1;
        a.La.qd = [-62, 0, 62];
        d(a.La.qd[0], a.La);
        d(a.La.qd[1], a.La);
        d(a.La.qd[2], a.La)
    }

    function ib(a, d) {
        var e = L.m;
        0 > a && (a = 0);
        3 < a && (a = 3);
        if (!0 === d) {
            for (var b, g = 3; g < 3 + a; g++) b = e.n.getChildAt(g), b.Nb || !1 === b.Mb && !1 === b.Nb && !0 === b.visible || (!1 === b.visible && (b.visible = !0), b.Mb && (J(b), b.Mb = !1), b.Nb = !0, b.position.set(e.n.ab[g % 3], 0), b.scale.set(0), b.alpha = 1, game.add.tween(b.scale).to({
                x: [1.4, 1],
                y: [1.4, 1]
            }, 150, Phaser.Easing.Linear.Out, !0).onComplete.addOnce(function(a) {
                a.Nb = !1
            }));
            for (g = 3 + a; 6 > g; g++) b = e.n.getChildAt(g), b.Mb || !1 === b.visible || (b.Nb && (J(b), b.Nb = !1), b.Mb = !0, b.position.set(e.n.ab[g %
                3], 0), b.scale.set(1), b = game.add.tween(b).to({
                x: [b.x + 25, b.x + 50],
                y: [b.y - 100, b.y + 200],
                alpha: [1, 1, 1, 1, 0]
            }, 600, Phaser.Easing.Linear.None, !0, 0), b.interpolation(function(a, d) {
                return Phaser.Math.bezierInterpolation(a, d)
            }), b.onComplete.addOnce(function(a) {
                a.visible = !1;
                a.Mb = !1
            }))
        } else {
            for (g = 3; 6 > g; g++) e.n.getChildAt(g).visible = !1, e.n.getChildAt(g).Nb = !1, e.n.getChildAt(g).Mb = !1;
            for (g = 3; g < 3 + a; g++) e.n.getChildAt(g).visible = !0, e.n.getChildAt(g).alpha = 1, e.n.getChildAt(g).position.set(e.n.ab[g % 3], 0)
        }
    }

    function Va(a) {
        function d(a, d, g) {
            a = game.add.sprite(d, 0, "pak", a);
            a.anchor.set(.5, 1);
            g.addChild(a)
        }
        a.n = game.add.group(a.e);
        a.n.visible = !1;
        a.n.y = game.cache.getFrameByName("pak", "lives_0").height + 10;
        a.n.ab = [-50, 0, 50];
        d("lives_1", a.n.ab[0], a.n);
        d("lives_1", a.n.ab[1], a.n);
        d("lives_1", a.n.ab[2], a.n);
        d("lives_0", a.n.ab[0], a.n);
        d("lives_0", a.n.ab[1], a.n);
        d("lives_0", a.n.ab[2], a.n)
    }

    function Za() {
        2 === U && (q("clck"), game.physics.arcade.isPaused = !0, U = 3, jb(), Ua(L.Bd), n && kb(L.Cb))
    };

    function Aa() {
        this.e = null;
        this.Aa = "screenMainMenu"
    }
    Aa.prototype = {
        create: function() {
            this.e = game.add.group();
            this.e.name = this.Aa;
            this.e.visible = !1;
            this.ub = 150;
            this.j = game.make.sprite(0, 0, "pak", "dialog_top");
            H(this.j, .5, 1);
            this.e.addChild(this.j);
            var a = game.make.text(0, -I(.57 * this.j.height), u("GameModesKey"), {
                font: "30px " + A,
                fill: "#F7F6D6"
            });
            a.setShadow(0, 1, "rgba(255, 255, 255, 1)", 0);
            H(a, .5, .5);
            this.j.addChild(a);
            this.Ba = a;
            var d = game.make.text(0, -I(.57 * this.j.height), u("GameModesKey"), {
                font: "30px " + A,
                fill: "#F7F6D6"
            });
            d.setShadow(0, 1, "rgba(255, 255, 255, 1)",
                0);
            H(d, .5, .5);
            this.j.addChild(d);
            this.Fb = d;
            6 === w && (a.fontStyle = "bold", d.fontStyle = "bold");
            this.window = game.make.sprite(game.width / 2, 0, "mmOkno");
            this.window.y = I((game.height - this.window.height) / 2);
            H(this.window, .5, 0);
            this.e.addChild(this.window);
            this.j.y = this.window.y + 40;
            this.Ab = game.make.group(this.e);
            this.o = game.make.group(this.Ab);
            this.o.x = game.width / 2;
            this.o.y = this.window.y;
            a = game.make.sprite(0, I(.24 * this.window.height), "pak", "game_mode_ar");
            a.scale.set(.65);
            H(a, .5, 1);
            this.o.addChild(a);
            a = game.make.sprite(0,
                I(.53 * this.window.height), "pak", "game_mode_tr");
            a.scale.set(.65);
            H(a, .5, 1);
            this.o.addChild(a);
            a = game.make.sprite(0, I(.8 * this.window.height), "pak", "game_mode_q");
            a.scale.set(.65);
            H(a, .5, 1);
            this.o.addChild(a);
            var a = wa(0, I(.295 * this.window.height), "button3", u("ArcadeKey"), "ArcadeKey", this.Hd, this, this.o),
                d = wa(0, I(.58 * this.window.height), "button3", u("TrialKey"), "TrialKey", this.ke, this, this.o),
                e = wa(0, I(.86 * this.window.height), "button3", u("QueueKey"), "QueueKey", this.Td, this, this.o);
            this.o.Ib = game.make.sprite(a.width /
                2 - 5, 0, "pak", "small_cups_0");
            this.o.Ib.scale.set(.9);
            t(a.Jc, 30, I(.55 * a.width));
            H(this.o.Ib, 1, .5);
            a.addChild(this.o.Ib);
            this.o.Rb = game.make.sprite(d.width / 2 - 5, 0, "pak", "small_cups_0");
            this.o.Rb.scale.set(.9);
            t(d.Jc, 30, I(.55 * d.width));
            H(this.o.Rb, 1, .5);
            d.addChild(this.o.Rb);
            this.o.Pb = game.make.sprite(e.width / 2 - 5, 0, "pak", "small_cups_0");
            this.o.Pb.scale.set(.9);
            t(e.Jc, 30, I(.55 * e.width));
            H(this.o.Pb, 1, .5);
            e.addChild(this.o.Pb);
            L.Xa.wb(45, game.height - 45, "pak", "level_buttons_0", "pak", "inst", this.Md, this, this.Ab);
            this.mb = game.make.group(this.e);
            a = this.yc = game.make.text(game.width / 2, this.window.y + 60, game.device.desktop ? u("GameGoalKey") + "\n\n" + u("Instructions_textKey") + "\n\n" + u("Controls_pc_textKey") : u("GameGoalKey") + "\n\n" + u("Instructions_textKey") + "\n\n" + u("Controls_textKey"), {
                font: "20px " + A,
                fill: "#F7F6D6",
                wordWrap: !0,
                wordWrapWidth: I(.75 * this.window.width),
                align: "center"
            });
            d = this.window.height - 120;
            e = 20;
            for (a.fontSize = e; a.height > d;) e--, a.fontSize = e;
            H(this.yc, .5, 0);
            this.mb.addChild(this.yc);
            this.ed = game.make.sprite(game.width /
                2, this.window.bottom - 10, "pak", "INL_logo");
            H(this.ed, .5, 0);
            this.mb.addChild(this.ed);
            L.Xa.wb(45, game.height - 45, "pak", "level_buttons_0", "pak", "icons_4", this.Nc, this, this.mb)
        },
        update: function() {},
        Hd: function() {
            q("clck");
            B = 0;
            V.ga = lb;
            O(L.Hc);
            gradle.event('mode_arcade');
        },
        ke: function() {
            q("clck");
            B = 1;
            V.ga = mb;
            O(L.Hc);
            gradle.event('mode_trial');
        },
        Td: function() {
            q("clck");
            B = 2;
            V.ga = T;
            O(L.Hc);
            gradle.event('mode_queue');
        },
        Nc: function() {
            q("clck");
            nb(this, !1, !1, !1);
            gradle.event('Nc');
        },
        Md: function() {
            q("clck");
            ob(this);
            pb(this, u("InstructionsTitleKey"));
            qb(this, this.mb);
            gradle.event('Md');
        },
        mc: function() {
            this.Ka();
            ca(r, 3);
            ob(this, !0);
            nb(this, !0, !0, !0);
            Ga(this.e, 150, this)
        },
        ee: function() {
            this.Ka();
            Ka(this.e, this)
        },
        fe: function() {
            this.Ka();
            Ma(this.e, this)
        },
        ge: function() {
            this.Ka();
            this.e.visible = !0;
            this.window.scale.set(1, 0);
            game.add.tween(this.window.scale).to({
                y: 1
            }, 350, Phaser.Easing.Back.Out, !0);
            this.j.scale.set(1, 0);
            game.add.tween(this.j.scale).to({
                y: 1
            }, 350, Phaser.Easing.Back.Out, !0);
            this.o.scale.set(1, 0);
            game.add.tween(this.o.scale).to({
                y: 1
            }, 350, Phaser.Easing.Back.Out, !0);
            nb(this, !0, !0, !0);
            ca(r, 3);
            game.time.events.add(400, this.Ua, this)
        },
        Ka: function() {
            M(this.e, !1)
        },
        Ua: function() {
            M(this.e, !0)
        },
        Zb: function(a) {
            this.ta(a);
            Fa(this.e, 150, 1, this)
        },
        xc: function(a) {
            this.ta(a);
            Ja(this.e, this)
        },
        Ld: function(a) {
            this.ta(a);
            La(this.e, this)
        },
        ta: function(a) {
            M(this.e, !1);
            this.e.Ia = a
        },
        $a: function() {
            this.e.visible = !1
        },
        pa: function() {
            var a = I(game.width / 2);
            this.j.x = this.window.x = a;
            this.o.x = a;
            this.yc.x = a;
            this.ed.x = a
        }
    };

    function pb(a, d, e) {
        e ? (a.Ba.setText(d), t(a.Ba, 30, .7 * a.j.width), a.Fb.visible = !1) : 0 < a.Ba.alpha ? (a.Fb.visible = !0, a.Fb.setText(d), t(a.Fb, 30, .7 * a.j.width), a.Fb.alpha = 0, game.add.tween(a.Fb).to({
            alpha: 1
        }, a.ub, Phaser.Easing.Linear.None, !0), game.add.tween(a.Ba).to({
            alpha: 0
        }, a.ub, Phaser.Easing.Linear.None, !0)) : (a.Ba.visible = !0, a.Ba.setText(d), t(a.Ba, 30, .7 * a.j.width), a.Ba.alpha = 0, game.add.tween(a.Ba).to({
            alpha: 1
        }, a.ub, Phaser.Easing.Linear.None, !0), game.add.tween(a.Fb).to({
            alpha: 0
        }, a.ub, Phaser.Easing.Linear.None, !0))
    }

    function qb(a, d, e) {
        d.visible = !0;
        e ? (d.alpha = 1, M(d, !0)) : game.add.tween(d).to({
            alpha: 1
        }, a.ub, Phaser.Easing.Linear.None, !0).onComplete.addOnce(function() {
            M(d, !0)
        }, a)
    }

    function ob(a, d) {
        M(a.e, !1);
        if (0 < a.Ab.alpha)
            if (d) a.Ab.alpha = 0, a.Ab.visible = !1;
            else {
                var e = game.add.tween(a.Ab).to({
                    alpha: 0
                }, a.ub, Phaser.Easing.Linear.None, !0);
                e.onComplete.addOnce(function(a) {
                    a.visible = !1
                }, a)
            }
        0 < a.mb.alpha && (d ? (a.mb.alpha = 0, a.mb.visible = !1) : (e = game.add.tween(a.mb).to({
            alpha: 0
        }, a.ub, Phaser.Easing.Linear.None, !0), e.onComplete.addOnce(function(a) {
            a.visible = !1
        }, a)))
    }

    function nb(a, d, e, b) {
        ob(a, d);
        pb(a, u("GameModesKey"), e);
        qb(a, a.Ab, b);
        d = rb(0, lb.$);
        !1 === d ? a.o.Ib.visible = !1 : (a.o.Ib.visible = !0, a.o.Ib.frameName = "small_cups_" + d);
        d = rb(1, mb.$);
        !1 === d ? a.o.Rb.visible = !1 : (a.o.Rb.visible = !0, a.o.Rb.frameName = "small_cups_" + d);
        d = rb(2, T.$);
        !1 === d ? a.o.Pb.visible = !1 : (a.o.Pb.visible = !0, a.o.Pb.frameName = "small_cups_" + d)
    };

    function Ba() {
        this.e = null;
        this.Aa = "ScreenGameInfo"
    }
    Ba.prototype = {
        create: function() {
            this.e = game.add.group();
            this.e.name = this.Aa;
            this.e.visible = !1;
            this.j = game.make.sprite(0, 0, "pak", "dialog_top");
            H(this.j, .5, 1);
            this.e.addChild(this.j);
            var a = game.make.text(0, -I(.57 * this.j.height), u("ArcadeKey"), {
                font: "30px " + A,
                fill: "#F7F6D6"
            });
            a.setShadow(0, 1, "rgba(255, 255, 255, 1)", 0);
            H(a, .5, .5);
            this.Ba = this.j.addChild(a);
            this.window = game.make.sprite(game.width / 2, 0, "okno2");
            this.window.y = I((game.height - this.window.height) / 2);
            H(this.window, .5, 0);
            this.e.addChild(this.window);
            this.j.y = this.window.y + 40;
            this.lb = game.make.sprite(0, I(.26 * this.window.height), "pak", "game_mode_ar");
            H(this.lb, .5, .5);
            this.window.addChild(this.lb);
            this.Za = game.make.text(0, I(.53 * this.window.height), "INFO", {
                font: "28px " + A,
                fill: "#F7F6D6",
                wordWrap: !0,
                wordWrapWidth: I(.75 * this.window.width),
                align: "center"
            });
            this.Za.lineSpacing = -6;
            H(this.Za, .5, .5);
            this.window.addChild(this.Za);
            this.fa = game.make.text(0, I(.73 * this.window.height), "BEST SCORE: 3", {
                font: "20px " + A,
                fill: "#F7F6D6"
            });
            H(this.fa, .5, .5);
            this.window.addChild(this.fa);
            this.ca = game.make.text(0, I(.82 * this.window.height), "NEXT TARGET: 3000", {
                font: "20px " + A,
                fill: "#F7F6D6"
            });
            H(this.ca, .5, .5);
            this.window.addChild(this.ca);
            this.wa = game.make.sprite(-50, this.ca.y, "pak", "small_cups_0");
            H(this.wa, 1, .5);
            this.window.addChild(this.wa);
            this.Pa = game.make.sprite(50, this.ca.y, "pak", "small_cups_0");
            H(this.Pa, 0, .5);
            this.window.addChild(this.Pa);
            this.Rd = wa(game.width / 2, game.height - 45, "button2", u("PlayKey"), "PlayKey", this.Sd, this, this.e);
            L.Xa.wb(45, game.height - 45, "pak", "level_buttons_0",
                "pak", "icons_4", this.Nc, this, this.e);
            6 === w && (this.Za.fontSize = 25, a.fontStyle = "bold")
        },
        update: function() {},
        Nc: function() {
            q("clck");
            O(L.jc);
            gradle.event('Nc');
        },
        Sd: function() {
            q("clck");
            sb();
            tb();
            O(L.m);
            n && ub()
        },
        mc: function() {
            this.Ka();
            Ga(this.e, 200, this)
        },
        Ka: function() {
            M(this.e, !1);
            this.Ba.setText(u(fa[B]));
            t(this.Ba, 30, .68 * this.j.width);
            this.lb.frameName = ["game_mode_ar", "game_mode_tr", "game_mode_q"][B];
            this.Za.setText(u(ga[B]));
            this.fa.setText(u("BestScoreKey") +
                ": " + V.ga.$);
            t(this.fa, 25, I(.6 * this.window.width));
            var a = vb();
            !1 === a ? (this.fa.y = I(.8 * this.window.height), this.ca.visible = !1, this.wa.visible = !1, this.Pa.visible = !1) : (this.fa.y = I(.73 * this.window.height), this.ca.visible = !0, this.wa.visible = !0, this.Pa.visible = !0, this.ca.setText(u("NextTargetKey") + ": " + a[0]), t(this.ca, 25, I(.68 * (this.window.width - 2 * this.wa.width))), this.wa.x = this.ca.left, this.Pa.x = this.ca.right, this.wa.frameName = this.Pa.frameName = "small_cups_" + a[1])
        },
        Ua: function() {
            M(this.e, !0)
        },
        Zb: function(a) {
            this.ta(a);
            Fa(this.e, 150, 1, this)
        },
        ta: function(a) {
            M(this.e, !1);
            this.e.Ia = a
        },
        $a: function() {
            this.e.visible = !1
        },
        pa: function() {
            var a = I(game.width / 2);
            this.j.x = this.window.x = a;
            this.Rd.x = a
        }
    };

    function Ca() {
        this.e = null;
        this.Aa = "screenGameOver"
    }
    Ca.prototype = {
        create: function() {
            this.e = game.add.group();
            this.e.name = this.Aa;
            this.e.visible = !1;
            this.j = game.make.sprite(0, 0, "pak", "dialog_top");
            H(this.j, .5, 1);
            this.e.addChild(this.j);
            var a = game.make.text(0, -I(.57 * this.j.height), u("GameOverKey"), {
                font: "30px " + A,
                fill: "#F7F6D6"
            });
            a.setShadow(0, 1, "rgba(255, 255, 255, 1)", 0);
            H(a, .5, .5);
            this.j.addChild(a);
            t(a, 30, .68 * this.j.width);
            this.window = game.make.sprite(game.width / 2, 0, "okno2");
            this.window.y = I((game.height - this.window.height) / 2);
            H(this.window, .5, 0);
            this.e.addChild(this.window);
            this.j.y = this.window.y + 40;
            this.za = game.make.text(0, I(.2 * this.window.height), "SCORE: 0", {
                font: "30px " + A,
                fill: "#F7F6D6"
            });
            H(this.za, .5, .5);
            this.window.addChild(this.za);
            this.Qa = game.make.sprite(0, I(.43 * this.window.height), "pak", "win_cup_none");
            H(this.Qa, .5, .5);
            this.window.addChild(this.Qa);
            this.Qa.Gc = game.add.tween(this.Qa.scale).to({
                x: [1.05, 1],
                y: [1.05, 1]
            }, 1500, Phaser.Easing.Linear.None, !1);
            this.fa = game.make.text(0, I(.73 * this.window.height), "BEST SCORE: 3", {
                font: "30px " + A,
                fill: "#F7F6D6"
            });
            H(this.fa,
                .5, .5);
            this.window.addChild(this.fa);
            this.ca = game.make.text(0, I(.82 * this.window.height), "NEXT TARGET: 3000", {
                font: "20px " + A,
                fill: "#F7F6D6"
            });
            H(this.ca, .5, .5);
            this.window.addChild(this.ca);
            this.wa = game.make.sprite(-50, 0, "pak", "small_cups_0");
            H(this.wa, 1, .5);
            this.ca.addChild(this.wa);
            this.Pa = game.make.sprite(50, 0, "pak", "small_cups_0");
            H(this.Pa, 0, .5);
            this.ca.addChild(this.Pa);
            this.zd = wa(game.width / 2, I(game.height - 50), "button2", u("RetryKey"), "RetryKey", this.be, this, this.e);
            this.zd.Jc.lineSpacing = -8;
            this.jd = L.Xa.wb(game.width - 45, I(game.height - 50), "pak", "level_buttons_0", "pak", "icons_2", this.Jd, this, this.e);
            6 === w && (a.fontStyle = "bold")
        },
        update: function() {},
        be: function() {
            q("clck");
            n && ub();
            var a = L.m;
            a.eb.alpha = 0;
            J(a.eb);
            $a(a, !0);
            ab(a, !0);
            sb();
            tb();
            Ta()
        },
        Jd: function() {
            q("clck");
            ca(r, 3);
            U = 0;
            O(L.jc);
            W(V);
            gradle.event('Jd');
        },
        mc: function() {
            this.Ka();
            Ga(this.e, 400, this)
        },
        Ka: function() {
            M(this.e, !1);
            q("snd_swoosh_in");
            ba(r, !0);
            q("snd_win");
            this.za.setText(u("ScoreKey") +
                ": 0");
            this.Qa.scale.set(0);
            var a = rb(B, V.ga.$);
            this.Qa.frameName = !1 === a ? "win_cup_none" : "win_cup" + a;
            this.fa.scale.set(0);
            !0 === V.ga.ib ? (this.fa.setText(u("NewBestScoreKey")), t(this.fa, 30, I(.7 * this.window.width))) : (this.fa.setText(u("BestScoreKey") + ": " + V.ga.$), t(this.fa, 25, I(.6 * this.window.width)));
            a = vb();
            !1 === a ? (this.fa.y = I(.75 * this.window.height), this.ca.visible = !1) : (this.fa.y = I(.7 * this.window.height), this.ca.setText(u("NextTargetKey") + ": " + a[0]), t(this.ca, 20, I(.68 * (this.window.width - 2 * this.wa.width))),
                this.wa.x = -I(this.ca.width / 2), this.Pa.x = I(this.ca.width / 2), this.wa.frameName = this.Pa.frameName = "small_cups_" + a[1], this.ca.visible = !0, this.ca.scale.set(0));
            this.e.alpha = 1;
            this.e.x = 0;
            this.e.y = 0;
            n && kb(L.Cb)
        },
        Ua: function() {
            var a = {
                    pd: 0
                },
                d = game.add.tween(a).to({
                    pd: V.ga.aa
                }, 350, Phaser.Easing.Linear.None, !0);
            d.onUpdateCallback(function() {
                this.za.setText(u("ScoreKey") + ": " + I(a.pd))
            }, this);
            d.onComplete.addOnce(function() {
                this.za.setText(u("ScoreKey") + ": " + a.pd);
                var d = [this.Qa, this.fa];
                !0 === this.ca.visible &&
                    d.push(this.ca);
                for (var b = 0; b < d.length; b++) {
                    var g = game.add.tween(d[b].scale).to({
                        x: 1,
                        y: 1
                    }, 300, Phaser.Easing.Back.Out, !0, 350 * b);
                    b === d.length - 1 && g.onComplete.addOnce(function() {
                        this.Qa.Gc.start();
                        this.Qa.Gc.repeat(-1, 0);
                        M(this.e, !0)
                    }, this)
                }
            }, this)
        },
        Zb: function(a) {
            this.ta(a);
            Ha(this.e, this)
        },
        xc: function(a) {
            this.ta(a);
            Ja(this.e, this)
        },
        ta: function(a) {
            M(this.e, !1);
            this.e.Ia = a;
            q("snd_swoosh_out")
        },
        $a: function() {
            this.e.visible = !1;
            this.Qa.Gc.stop();
            this.Qa.Gc.pendingDelete = !1
        },
        pa: function() {
            this.zd.x = this.j.x =
                this.window.x = I(game.width / 2);
            this.jd.x = game.width - 45
        }
    };

    function Da() {
        this.e = null;
        this.Aa = "screenPause"
    }
    Da.prototype = {
        create: function() {
            this.e = game.add.group();
            this.e.name = this.Aa;
            this.e.visible = !1;
            this.j = game.make.sprite(0, 0, "pak", "dialog_top");
            H(this.j, .5, 1);
            this.e.addChild(this.j);
            var a = game.make.text(0, -I(.57 * this.j.height), u("PauseKey"), {
                font: "30px " + A,
                fill: "#F7F6D6"
            });
            a.setShadow(0, 1, "rgba(255, 255, 255, 1)", 0);
            H(a, .5, .5);
            this.j.addChild(a);
            this.Ba = a;
            this.window = game.make.sprite(game.width / 2, 0, "okno2");
            this.window.y = I((game.height - this.window.height) / 2);
            H(this.window, .5, 0);
            this.e.addChild(this.window);
            this.j.y = this.window.y + 40;
            this.ld = game.make.group(this.window);
            this.lb = game.make.sprite(0, I(.27 * this.window.height), "pak", "game_mode_ar");
            H(this.lb, .5, .5);
            this.ld.addChild(this.lb);
            this.Za = game.make.text(0, I(.55 * this.window.height), "INFO", {
                font: "25px " + A,
                fill: "#F7F6D6",
                wordWrap: !0,
                wordWrapWidth: I(.75 * this.window.width),
                align: "center"
            });
            this.Za.lineSpacing = -6;
            H(this.Za, .5, .5);
            this.ld.addChild(this.Za);
            wa(0, I(.79 * this.window.height), "button3", u("ContinueKey"), "ContinueKey", this.Id, this, this.ld);
            this.jd =
                L.Xa.wb(game.width - 45, game.height - 45, "pak", "level_buttons_0", "pak", "icons_2", this.Ud, this, this.e);
            6 === w && (a.fontStyle = "bold")
        },
        update: function() {},
        Id: function() {
            1 == this.e.fd && (q("clck"), wb(V, V.$d), Ta(), n && ub())
        },
        Ud: function() {
            q("clck");
            ca(r, 3);
            U = 0;
            O(L.jc);
            W(V)
        },
        mc: function() {
            this.Ka();
            Ia(this.e, this)
        },
        Ka: function() {
            M(this.e, !1);
            this.lb.frameName = ["game_mode_ar", "game_mode_tr", "game_mode_q"][B];
            this.Za.setText(u(ga[B]));
            q("snd_swoosh_in")
        },
        Ua: function() {
            M(this.e, !0);
            this.window.texture.requiresReTint = !0
        },
        Zb: function(a) {
            this.ta(a);
            Ha(this.e, this)
        },
        xc: function(a) {
            this.ta(a);
            Ja(this.e, this)
        },
        ta: function(a) {
            M(this.e, !1);
            this.e.Ia = a;
            q("snd_swoosh_out")
        },
        $a: function() {
            this.e.visible = !1
        },
        pa: function() {
            this.j.x = this.window.x = I(game.width / 2);
            this.jd.x = game.width - 45
        }
    };

    function Ea() {
        this.e = null;
        this.Aa = "screenSounds"
    }
    Ea.prototype = {
        create: function() {
            this.e = game.add.group();
            this.e.name = this.Aa;
            this.Db = L.Xa.wb(45, 45, "pak", "level_buttons_0", "pak", "sound_off", this.he, this, this.e);
            this.Db.alpha = 1;
            kb(this);
            xb(this)
        },
        update: function() {},
        he: function() {
            q("clck");
            var a = r;
            n && (a.bb ? (a.bb = !1, ba(a)) : (a.bb = !0, ca(a, a.Wa, !0)), yb());
            xb(this);
            gradle.event('he');
        },
        Ua: function() {
            M(this.e, !0)
        },
        $a: function() {
            this.e.visible = !1
        },
        pa: function() {}
    };

    function ub() {
        var a = L.Cb;
        a.Db.inputEnabled = !1;
        game.add.tween(a.Db).to({
            alpha: 0
        }, 100, Phaser.Easing.Linear.None, !0)
    }

    function kb(a) {
        a.Db.inputEnabled = !0;
        game.add.tween(a.Db).to({
            alpha: 1
        }, 100, Phaser.Easing.Linear.None, !0)
    }

    function xb(a) {
        n && (r.bb ? a.Db.getChildAt(0).frameName = "sound_on" : a.Db.getChildAt(0).frameName = "sound_off")
    };

    function zb(a) {
        Phaser.Sprite.call(this, game, 0, 0, "pak", X[0].frameName);
        this.type = qa.Nd;
        this.sd = X[this.type];
        this.q = this.sd.q;
        this.Ad = 0;
        this.nb = !1;
        this.Fc = !0;
        this.Yb = new Phaser.Signal;
        this.oa = new Phaser.Signal;
        this.anchor.setTo(.5);
        game.physics.arcade.enable(this);
        this.checkCollision = function(a, e) {
            if (Phaser.Math.distanceSq(a, e, this.worldPosition.x, this.worldPosition.y) < Math.pow(this.q, 2)) return this.cb(), !0;
            this.Fc = !0;
            return !1
        };
        this.cb = function() {
            !1 !== this.Fc && (this.Fc = !1, !0 === this.isFrozen ? (this.isFrozen = !1, this.frameName = X[this.type].frameName, Ab(this.x, this.y), q("snd_iceBreak")) : (this.oa.dispatch(this), this.vd()))
        };
        this.$c = function() {
            !0 === this.isFrozen && (this.isFrozen = !1, Ab(this.x, this.y));
            this.oa.dispatch(this);
            this.vd()
        };
        this.vd = function() {
            q("snd_sekFruit" + G(1, 3));
            this.xd();
            this.body.y = game.height + 50;
            var a = this.x,
                e = this.y,
                b = this.sd,
                g = this.body.velocity.y,
                h = this.angle,
                v = P;
            Bb(v, a, e, b.tint);
            var f = 350,
                l = e - 80; - 50 < g && (f = 100, l = e - 10);
            var g = f,
                m = 1.25 * (game.height + 100 - (e - 80)),
                p = l,
                K = G(75, 85);
            0 === b.Ga ? (Cb(v,
                a, e, b, 1, g, m, p, -K, h), Cb(v, a, e, b, 0, g, m, p, K, h)) : (Cb(v, a, e, b, 0, g, m, p, K, h), Cb(v, a, e, b, 1, g, m, p, -K, h));
            g = b.tint;
            m = v.qc.getFirstDead();
            if (null == m) {
                m = game.make.group();
                for (p = 0; 10 > p; p++) m.create(0, 0, "pak", "partikle2_0").anchor.set(.5);
                v.qc.addChild(m)
            }
            J(m);
            m.revive();
            for (p = 0; 10 > p; p++) {
                K = m.getChildAt(p);
                K.reset(0, 0);
                K.lifespan = 750;
                K.frameName = "partikle2_" + G(0, 11);
                K.tint = g;
                K.alpha = 1;
                K.scale.set(G(8, 11) / 10, G(8, 11) / 10);
                J(K);
                var ra = G(200, 220),
                    Rb = 25 * p + G(-2, 2),
                    sc = ra * Math.cos(Rb),
                    ra = ra * Math.sin(Rb);
                game.add.tween(K).to({
                    x: sc,
                    y: ra
                }, 700, Phaser.Easing.Linear.None, !0);
                game.add.tween(K.scale).to({
                    x: 0,
                    y: 0
                }, 300, Phaser.Easing.Linear.None, !0, 300)
            }
            g = m;
            g.x = a;
            g.y = e;
            game.add.tween(g).to({
                y: [l]
            }, f, Phaser.Easing.Sinusoidal.Out, !0);
            b = h - b.va;
            h = v.Lc.getFirstDead();
            null == h && (h = game.make.sprite(0, 0, "pak", "sek_efekt"), h.anchor.set(.5), v.Lc.addChild(h));
            J(h);
            h.angle = b;
            h.alpha = .5;
            h.scale.set(G(6, 10), .5);
            h.lifespan = 10;
            h.reset(a, e)
        };
        this.Zd = function(a, e, b, g) {
            this.type = b;
            this.isFrozen = g || !1;
            this.angle = 0;
            this.sd = X[this.type];
            this.q = X[this.type].q;
            this.frameName = this.isFrozen ? X[this.type].Ea : X[this.type].frameName;
            this.reset(a, e);
            this.body.gravity.setTo(0, 0);
            this.body.velocity.setTo(0, 0);
            this.ia = 1;
            this.nb = !1;
            this.Fc = !0;
            this.Ad = G(10, 30) / 10 * oa([-1, 1]);
            this.Ya = null;
            this.updateTransform();
            0 === this.oa.getNumListeners() && this.oa.add(V.ga.bd, V.ga);
            0 === this.Yb.getNumListeners() && this.Yb.add(V.ga.dd, V.ga)
        };
        this.update = function() {
            if (2 === U && this.alive) {
                !1 === this.isFrozen && null == this.Ya && (this.angle += this.Ad * this.ia);
                var a = game.width / 2;
                this.x < -a - this.q ?
                    this.rd() : this.x > a + this.q ? this.rd() : this.y > game.height + 200 ? this.rd() : this.nb = !0
            }
        };
        this.rd = function() {
            !1 !== this.nb && (this.Yb.dispatch(this), this.xd())
        };
        this.xd = function() {
            this.Yb.removeAll();
            this.oa.removeAll();
            this.kill()
        };
        game.add.existing(this);
        void 0 != a && a.addChild(this);
        return this
    }
    zb.prototype = Object.create(Phaser.Sprite.prototype);
    zb.constructor = zb;
    var qa = {
            Nd: 0,
            ye: 1,
            Ae: 2,
            Be: 3,
            De: 4,
            Fe: 5,
            me: 6,
            Ce: 7,
            oe: 8,
            pe: 9,
            qe: 10,
            ue: 11
        },
        X = [{
            frameName: "kukurica_0",
            Ea: "kukurica_cut_2",
            Fa: ["kukurica_cut_0", "kukurica_cut_1"],
            Ga: 0,
            va: 35,
            q: 70,
            tint: 14731520
        }, {
            frameName: "oliva_14",
            Ea: "oliva_cut_2",
            Fa: ["oliva_cut_0", "oliva_cut_1"],
            Ga: 0,
            va: 10,
            q: 70,
            tint: 10275072
        }, {
            frameName: "paprika_0",
            Ea: "paprika_cut_2",
            Fa: ["paprika_cut_0", "paprika_cut_1"],
            Ga: 0,
            va: 35,
            q: 70,
            tint: 2806016
        }, {
            frameName: "paradajka_3",
            Ea: "paradajka_cut_2",
            Fa: ["paradajka_cut_0", "paradajka_cut_1"],
            Ga: 0,
            va: 30,
            q: 70,
            tint: 16713728
        }, {
            frameName: "salama_13",
            Ea: "salama_cut_2",
            Fa: ["salama_cut_0", "salama_cut_1"],
            Ga: 1,
            va: 50,
            q: 70,
            tint: 12389127
        }, {
            frameName: "syr_1",
            Ea: "syr_cut_2",
            Fa: ["syr_cut_0", "syr_cut_1"],
            Ga: 0,
            va: 110,
            q: 70,
            tint: 16512773
        }, {
            frameName: "ananas_2",
            Ea: "ananas_cut_2",
            Fa: ["ananas_cut_0", "ananas_cut_1"],
            Ga: 0,
            va: 50,
            q: 70,
            tint: 14718464
        }, {
            frameName: "ryba_0",
            Ea: "ryba_cut_2",
            Fa: ["ryba_cut_0", "ryba_cut_1"],
            Ga: 0,
            va: 30,
            q: 70,
            tint: 12305876
        }, {
            frameName: "brokolica_1",
            Ea: "brokolica_cut_2",
            Fa: ["brokolica_cut_0", "brokolica_cut_1"],
            Ga: 1,
            va: 130,
            q: 70,
            tint: 7512623
        }, {
            frameName: "cesnak_11",
            Ea: "cesnak_cut_2",
            Fa: ["cesnak_cut_0", "cesnak_cut_1"],
            Ga: 1,
            va: 50,
            q: 70,
            tint: 14603207
        }, {
            frameName: "cibula_14",
            Ea: "cibula_cut_2",
            Fa: ["cibula_cut_0", "cibula_cut_1"],
            Ga: 1,
            va: 50,
            q: 70,
            tint: 15312144
        }, {
            frameName: "huba_0",
            Ea: "huba_cut_2",
            Fa: ["huba_cut_0", "huba_cut_1"],
            Ga: 0,
            va: 60,
            q: 70,
            tint: 16777215
        }];

    function Db() {}
    Db.prototype = {
        constructor: Db,
        preload: function() {},
        create: function() {},
        update: function(a) {
            this.qc.forEachAlive(function(a) {
                0 === a.countLiving() && a.kill()
            }, this);
            this.Gb.forEachAlive(function(d) {
                0 < d.Wb && (d.Wb -= a, 0 >= d.Wb && d.na.start())
            }, this)
        },
        vb: function(a, d) {
            this.Ca.forEachAlive(function(e) {
                e.checkCollision(a, d)
            }, this)
        },
        gc: function() {
            this.Ca.forEach(function(a) {
                a.oa.removeAll();
                a.Yb.removeAll()
            }, this)
        }
    };

    function Eb() {
        var a = P,
            d = [];
        a.Ca.forEachAlive(function(a) {
            !1 === d.contains(a.type) && d.push(a.type)
        }, a);
        return d
    }

    function Ab(a, d) {
        for (var e = P, b = 0, g = 0; 7 > g; g++) {
            var h = e.Kc.getFirstDead();
            null == h && (h = e.Kc.create(0, 0, "pak", "freez_partikle_9"), h.anchor.set(.5));
            J(h);
            2 > b ? (0 === b ? (h.frameName = "ice_cut_0", h.anchor.x = 1) : (h.frameName = "ice_cut_1", h.anchor.x = 0), b++, h.scale.set(.9), h.alpha = 1, game.add.tween(h).to({
                angle: G(80, 200)
            }, 1500, Phaser.Easing.Linear.None, !0)) : (h.frameName = "freez_partikle_" + G(9, 11), h.scale.set(G(20, 25) / 10), h.anchor.x = .5, game.add.tween(h).to({
                    angle: G(500, 1500)
                }, 1500, Phaser.Easing.Linear.None, !0), h.alpha =
                .7);
            h.reset(a, d);
            h.angle = 0;
            h = game.add.tween(h).to({
                x: [G(50, 200) * oa([-1, 1])],
                y: [d - G(200, 300), game.height + 150]
            }, G(1E3, 1500), Phaser.Easing.Linear.None, !0);
            h.onComplete.addOnce(function(a) {
                a.kill()
            });
            h.interpolation(Phaser.Math.bezierInterpolation)
        }
    }

    function Cb(a, d, e, b, g, h, v, f, l, m) {
        var p = a.Sb.getFirstDead();
        null == p && (p = a.Sb.create(0, 0, "pak", "kukurica_cut_0"), p.anchor.set(.5));
        J(p);
        p.frameName = b.Fa[g];
        p.angle = m;
        p.reset(d, e);
        p.lifespan = h + v;
        m > b.va && 180 > m && (l = -l);
        m < -180 + b.va && -180 < m && (l = -l);
        game.add.tween(p).to({
            x: d - l
        }, h + v, Phaser.Easing.Linear.None, !0);
        game.add.tween(p).to({
            y: [f]
        }, h, Phaser.Easing.Sinusoidal.Out, !0).onComplete.add(function() {
            game.add.tween(p).to({
                y: game.height + 100
            }, v, Phaser.Easing.Quadratic.In, !0)
        }, a)
    }

    function Bb(a, d, e, b) {
        var g = a.Gb.getFirstDead();
        null == g && (g = a.Gb.create(0, 0, "pak", "splash_bg_1"), g.anchor.set(.5), g.na = game.add.tween(g).to({
            alpha: 0
        }, 1500, Phaser.Easing.Linear.None, !1), g.na.onComplete.add(function(a) {
            a.kill()
        }, a));
        a.Gb.bringToTop(g);
        g.frameName = "splash_bg_" + G(1, 3);
        g.alpha = .1 * G(6, 8);
        g.tint = b;
        g.angle = G(0, 360);
        g.scale.set(.1 * G(8, 14), .1 * G(8, 14));
        g.reset(d, e);
        g.Wb = 3500 + F(3500)
    }

    function Fb(a, d, e, b, g, h) {
        var v = P,
            f = v.Ca.getFirstDead();
        null == f && (f = new zb(v.Ca));
        v.Ca.bringToTop(f);
        f.Zd(a, d, e, b);
        f.body.gravity.setTo(g[0], g[1]);
        f.body.velocity.setTo(h[0], h[1]);
        Y(V, f);
        return f
    };

    function Gb(a) {
        Phaser.Sprite.call(this, game, 0, 0, "pak", "bomb");
        var d = this.game.make.sprite(-I(.11 * this.width), -I(.5 * this.height), "pak", "bomb_fuse");
        d.anchor.set(.5);
        this.addChild(d);
        this.q = 50;
        this.nb = !1;
        this.oa = new Phaser.Signal;
        this.anchor.setTo(.5);
        game.physics.arcade.enable(this);
        this.checkCollision = function(a, b) {
            return Phaser.Math.distanceSq(a, b, this.worldPosition.x, this.worldPosition.y) < Math.pow(this.q, 2) ? (this.cb(), !0) : !1
        };
        this.cb = function() {
            S.Ma === Hb.td ? (this.body.velocity.x = 0 < this.x ? -600 : 600,
                this.body.velocity.y = this.y > game.height / 2 ? -900 : 900, q("snd_odraz")) : (q("snd_vybuch"), Ib(V), Jb(V), this.oa.dispatch(this), this.hd(), this.body.y = game.height + 50, Kb(this.x, this.y))
        };
        this.$c = function() {
            q("snd_vybuch");
            this.hd();
            this.body.y = game.height + 50;
            Kb(this.x, this.y)
        };
        this.Xd = function(a, b) {
            this.reset(a, b);
            this.body.gravity.setTo(0, 0);
            this.body.velocity.setTo(0, 0);
            this.ia = 1;
            this.nb = !1;
            this.updateTransform();
            0 === this.oa.getNumListeners() && this.oa.add(V.ga.Oc, V.ga)
        };
        this.update = function() {
            if (2 === U && this.alive) {
                this.getChildAt(0).scale.set(G(5,
                    10) / 10);
                this.getChildAt(0).angle = G(0, 90);
                var a = game.width / 2;
                this.x < -a - this.q ? this.Pc() : this.x > a + this.q ? this.Pc() : this.y > game.height + 200 ? this.Pc() : this.nb = !0
            }
        };
        this.Pc = function() {
            !1 !== this.nb && this.hd()
        };
        this.hd = function() {
            this.oa.removeAll();
            this.kill()
        };
        game.add.existing(this);
        void 0 != a && a.addChild(this);
        return this
    }
    Gb.prototype = Object.create(Phaser.Sprite.prototype);
    Gb.constructor = Gb;

    function Lb() {}
    Lb.prototype = {
        constructor: Lb,
        preload: function() {},
        create: function() {},
        update: function() {},
        vb: function(a, d) {
            this.ra.forEachAlive(function(e) {
                e.checkCollision(a, d)
            }, this)
        },
        gc: function() {
            this.ra.forEach(function(a) {
                a.oa.removeAll()
            }, this)
        }
    };

    function Kb(a, d) {
        var e = R,
            b = e.vc.getFirstDead();
        null == b && (b = e.vc.create(0, 0, "pak", "explosion_0"), b.anchor.set(.5), b.scale.set(1.4), b.animations.add("expl", Phaser.Animation.generateFrameNames("explosion_", 0, 6), 17));
        b.scale.set(2.5);
        b.animations.play("expl");
        b.animations.getAnimation("expl").killOnComplete = !0;
        b.reset(a, d)
    };

    function Mb(a) {
        Phaser.Sprite.call(this, game, 0, 0, "pak", "bonus1_0");
        this.type = Hb.Ed;
        this.Cc = BonusTypes[this.type];
        this.q = 70;
        this.oa = new Phaser.Signal;
        this.anchor.setTo(.5);
        this.checkCollision = function(a, e) {
            return Phaser.Math.distanceSq(a, e, this.worldPosition.x, this.worldPosition.y) < Math.pow(this.q, 2) ? (this.cb(), !0) : !1
        };
        this.cb = function() {
            this.oa.dispatch(this);
            J(this);
            this.kill();
            var a = this.x,
                e = this.y,
                b = this.Cc,
                g = S;
            if (this.type === Hb.Gd) Nb(a - game.width / 2, e);
            else {
                var h = oa([-1, 1]);
                Ob(g, a, e, b.dc[1], h);
                Ob(g, a, e, b.dc[0], -h)
            }
            this.Cc.action(this.x, this.y)
        };
        this.Yd = function(a, e, b) {
            this.type = b;
            this.Cc = BonusTypes[this.type];
            this.frameName = this.Cc.frameName;
            this.reset(a, e);
            J(this);
            this.oa.getNumListeners()
        };
        this.Qd = function() {
            null != this.pb && this.pb.pause()
        };
        this.ae = function() {
            null != this.pb && this.pb.resume()
        };
        this.update = function() {};
        game.add.existing(this);
        void 0 != a && a.addChild(this);
        return this
    }
    Mb.prototype = Object.create(Phaser.Sprite.prototype);
    Mb.constructor = Mb;
    var Hb = {
        Gd: 0,
        Ed: 1,
        Dd: 2,
        td: 3,
        Fd: 4
    };
    BonusTypes = {
        0: {
            frameName: "pumpkin",
            action: function() {
                q("snd_bnspmp");
                Pb(S);
                Qb()
            }
        },
        1: {
            frameName: "bonus2_0",
            dc: ["bonus2_1", "bonus2_2"],
            od: 65535,
            action: function(a, d) {
                q("snd_bnsfrz");
                Sb(1);
                var e = L.m;
                e.ha.Va.stop();
                e.ha.Va.pendingDelete = !1;
                e.ha.na.stop();
                e.ha.na.pendingDelete = !1;
                e.ha.Va.start();
                bb(1, "#202ad8", "#00ffff");
                V.ia = .5;
                Tb();
                Jb(V);
                db(a, d, u("FreezeKey"), "#202ad8", "#00ffff")
            },
            ud: function() {
                $a(L.m);
                V.ia = 1;
                Tb()
            }
        },
        2: {
            frameName: "bonus3_0",
            dc: ["bonus3_1", "bonus3_2"],
            od: 16711935,
            action: function(a, d) {
                q("snd_bnsdbl");
                Sb(2);
                bb(2, "#c30096", "#ff55ff");
                db(a, d, u("DoubleKey"), "#c30096", "#ff55ff")
            }
        },
        3: {
            frameName: "bonus1_0",
            dc: ["bonus1_1", "bonus1_2"],
            od: 16776960,
            action: function(a, d) {
                q("snd_bnsfrm");
                Sb(3);
                bb(3, "#fe2600", "#ffff08");
                db(a, d, u("FreedomKey"), "#fe2600", "#ffff08")
            }
        },
        4: {
            frameName: "bonus4_0",
            dc: ["bonus4_1", "bonus4_2"],
            action: function(a, d) {
                q("snd_bns1up");
                Pb(S);
                if (3 > V.ga.ua) {
                    V.ga.ua++;
                    ib(V.ga.ua, !0);
                    var e = 100;
                    6 === w && (e = 60);
                    db(a, d, u("NewLiveKey"), "#34c91a", "#fff700", e)
                }
            }
        }
    };

    function Ub() {
        this.Ma = -1;
        this.sb = 0
    }
    Ub.prototype = {
        constructor: Ub,
        update: function(a) {
            0 < this.sb && (this.sb -= a, L.m.tb.text = Math.ceil(this.sb / 1E3), 0 >= this.sb && (this.sb = 0, Pb(this)))
        },
        vb: function(a, d) {
            this.Na.forEachAlive(function(e) {
                e.checkCollision(a, d)
            }, this)
        }
    };

    function Vb() {
        var a = S;
        a.Na.callAll("kill");
        a.Na.forEach(function(a) {
            null != a.pb && (a.pb.stop(), a.pb = null)
        }, a);
        Pb(S)
    }

    function Wb() {
        var a = S;
        a.Na.forEachAlive(function(a) {
            a.ae()
        }, a)
    }

    function jb() {
        var a = S;
        a.Na.forEachAlive(function(a) {
            a.Qd()
        }, a)
    }

    function Pb(a) {
        -1 !== a.Ma && (void 0 != BonusTypes[a.Ma].ud && BonusTypes[a.Ma].ud(), ab(L.m), a.Ma = -1)
    }

    function Sb(a) {
        var d = S;
        Pb(d);
        d.sb = 1E4;
        d.Ma = a
    }

    function Ob(a, d, e, b, g) {
        var h = a.Jb.getFirstDead();
        null == h && (h = a.Jb.create(0, 0, "pak", "bonus1_1"), h.anchor.set(.5));
        J(h);
        h.frameName = b;
        h.reset(d, e);
        h.lifespan = 950;
        game.add.tween(h).to({
            x: d - g * G(100, 180)
        }, 950, Phaser.Easing.Linear.None, !0);
        game.add.tween(h).to({
            y: e - G(10, 30)
        }, 150, Phaser.Easing.Sinusoidal.Out, !0).onComplete.add(function() {
            game.add.tween(h).to({
                y: game.height + 100
            }, 800, Phaser.Easing.Quadratic.In, !0)
        }, a)
    }

    function Xb(a, d, e) {
        var b = S,
            g = b.Na.getFirstDead();
        null == g && (g = new Mb(b.Na));
        g.Yd(a, d, e);
        return g
    }

    function Yb(a, d) {
        var e = d.x - a.x,
            b = d.y - a.y;
        0 === e && (e = game.width / 2);
        0 === b && (b = game.height / 2);
        return function(a, b, d, e) {
            switch (a) {
                case 0:
                    return {
                        x: [b.x + .15 * d, b.x + .6 * d, b.x + d + 50],
                        y: [b.y + .8 * e, b.y + .4 * e, b.y + e + 85]
                    };
                case 1:
                    return {
                        x: [b.x + .8 * d, b.x + .1 * d, b.x + d + 50],
                        y: [b.y + .3 * e, b.y + .8 * e, b.y + e + 85]
                    };
                case 2:
                    return {
                        x: [b.x + .2 * d, b.x + d + 50],
                        y: [b.y + .8 * e, b.y + e + 85]
                    };
                case 3:
                    return {
                        x: [b.x + .8 * d, b.x + d + 50],
                        y: [b.y + .2 * e, b.y + e + 85]
                    };
                case 4:
                    return {
                        x: [b.x + .3 * d, b.x + .05 * d, b.x + d + 50],
                        y: [G(b.y + .6 * e, b.y + .85 * e), b.y + e + 85]
                    };
                case 5:
                    return {
                        x: [b.x +
                            .95 * d, b.x + .7 * d, b.x + d + 50
                        ],
                        y: [G(b.y + .1 * e, b.y + .3 * e), b.y + e + 85]
                    }
            }
        }(G(0, 5), a, e, b)
    }

    function Zb(a) {
        var d = oa([{
            start: {
                x: -48,
                y: -84
            },
            end: {
                x: game.width + 48,
                y: game.height + 84
            }
        }, {
            start: {
                x: -48,
                y: game.height + 84
            },
            end: {
                x: game.width + 48,
                y: -84
            }
        }, {
            start: {
                x: game.width + 48,
                y: -84
            },
            end: {
                x: -48,
                y: game.height + 84
            }
        }, {
            start: {
                x: game.width + 48,
                y: game.height + 84
            },
            end: {
                x: -48,
                y: -84
            }
        }]);
        a = Xb(d.start.x, d.start.y, a);
        J(a);
        d = game.add.tween(a).to(Yb(d.start, d.end), G(3E3, 4E3), Phaser.Easing.Linear.None, !0);
        a.pb = d;
        d.onComplete.addOnce(function(a) {
            a.pb = null;
            a.kill()
        });
        d.interpolation(Phaser.Math.bezierInterpolation)
    };

    function $b(a) {
        Phaser.Sprite.call(this, game, 0, 0, "pak", "balons_0");
        this.line = new ac(this);
        this.line.reset(0, 0);
        this.addChild(this.line);
        this.q = 75;
        this.anchor.setTo(.5, 1);
        game.physics.arcade.enable(this);
        this.checkCollision = function(a, e) {
            return Phaser.Math.distanceSq(a, e, this.worldPosition.x, this.worldPosition.y - this.height / 2) < Math.pow(this.q, 2) ? (this.cb(), !0) : !1
        };
        this.cb = function() {
            q("snd_sekBln");
            J(this);
            null != this.da && (this.da.Ya = null, this.da.nb = !0, this.da.body.velocity.y = -300, this.da.body.gravity.y =
                1500, this.da.ia = 1, Y(V, this.da), this.da = null);
            Nb(this.x, this.y - .7 * this.height);
            this.kill()
        };
        this.Wd = function(a, e, b) {
            this.frameName = "balons_" + G(0, 3);
            this.body.velocity.y = 0;
            this.body.gravity.y = 0;
            this.ia = 1;
            this.reset(a, e);
            this.line.reset(0, 0);
            this.da = b;
            J(this)
        };
        this.wd = function() {
            this.body.velocity.y = -300;
            this.body.gravity.y = -1500;
            this.ia = 1;
            Y(V, this)
        };
        this.update = function() {
            2 === U && this.alive && this.y < 2 * -this.line.height && this.Kd()
        };
        this.Kd = function() {
            null != this.da && (this.da.Ya = null, this.da.kill(), this.da =
                null);
            this.kill()
        };
        game.add.existing(this);
        void 0 != a && a.addChild(this);
        return this
    }
    $b.prototype = Object.create(Phaser.Sprite.prototype);
    $b.constructor = $b;

    function ac(a) {
        Phaser.Sprite.call(this, game, 0, 0, "pak", "balon_line");
        this.anchor.setTo(.5, 0);
        this.checkCollision = function(a, e) {
            return 8 > Phaser.Math.difference(this.worldPosition.x, a) && Phaser.Math.difference(this.worldPosition.y + .35 * this.height, e) < .4 * this.height ? (this.cb(), !0) : !1
        };
        this.cb = function() {
            null != this.parent.da && (null != this.parent.da.Ya && (this.parent.wd(), this.parent.da.Ya = null), this.parent.da.body.velocity.y = -300, this.parent.da.body.gravity.y = 1500, this.parent.da.ia = 1, Y(V, this.parent.da), this.parent.da =
                null);
            this.kill()
        };
        game.add.existing(this);
        void 0 != a && a.addChild(this);
        return this
    }
    ac.prototype = Object.create(Phaser.Sprite.prototype);
    ac.constructor = ac;

    function bc() {}
    bc.prototype = {
        constructor: bc,
        update: function() {
            this.Da.forEachAlive(function(a) {
                null != a.da && (a.da.y = a.y + 120)
            }, this)
        },
        vb: function(a, d) {
            this.Da.forEachAlive(function(e) {
                e.checkCollision(a, d);
                e.line.checkCollision(a, d)
            }, this)
        },
        Vd: function(a) {
            null != a.Ya && (a.Ya.da = null, a.Ya.wd(), a.Ya = null)
        },
        gc: function() {}
    };

    function Nb(a, d) {
        var e = Q,
            b = e.tc.getFirstDead();
        null == b && (b = e.tc.create(0, 0, "pak", "explosion_baloon_0"), b.anchor.set(.5), b.animations.add("expl", Phaser.Animation.generateFrameNames("explosion_baloon_", 0, 5), 18));
        b.animations.play("expl");
        b.animations.getAnimation("expl").killOnComplete = !0;
        b.reset(a, d)
    };

    function cc() {
        this.ja = [];
        this.nc = null
    }
    cc.prototype = {
        create: function() {
            this.nc = game.add.graphics(0, 0);
            game.input.addMoveCallback(function(a, d, e) {
                V.Xb && (a = 14, 1 < this.ja.length && (a = Phaser.Math.distance(this.ja[this.ja.length - 2][0].x, this.ja[this.ja.length - 2][0].y, d, e) / 6, 14 > a && (a = 14), 40 < a && (a = 40)), this.ja.push([new Phaser.Point(Math.floor(d), Math.floor(e)), a, 12]))
            }, this)
        },
        update: function() {
            if (0 < this.ja.length) {
                var a;
                a = S;
                a = -1 === a.Ma ? 16777215 : BonusTypes[a.Ma].od;
                this.nc.clear();
                this.nc.moveTo(this.ja[0][0].x, this.ja[0][0].y);
                for (var d = 0; d < this.ja.length; d++) this.ja[d][2] -=
                    60 / game.time.fps, this.nc.lineStyle(this.ja[d][2] / 12 * this.ja[d][1], a), this.nc.lineTo(this.ja[d][0].x, this.ja[d][0].y);
                for (d = 0; d < this.ja.length; d++) 2 >= this.ja[d][2] && this.ja.splice(d, 1)
            }
        }
    };

    function dc() {
        this.p = this.Xc = this.ua = this.$ = 0;
        this.ob = !1;
        this.u = this.Sa = this.ec = this.ka = 0;
        this.ib = !1
    }
    dc.prototype = {
        constructor: dc,
        kd: function() {
            this.ua = 3;
            this.aa = 0;
            for (var a = L.m, d = 3; 6 > d; d++) a.n.getChildAt(d).x = a.n.ab[d - 3], J(a.n.getChildAt(d));
            a.n.visible = !0;
            ib(this.ua);
            gb(this.aa);
            fb(this.$);
            this.p = 500;
            this.Oa = 5E3;
            this.ob = !1;
            this.u = this.Sa = this.ec = this.ka = 0;
            this.ib = !1
        },
        update: function(a) {
            this.p -= a;
            0 >= this.p && (this.p = G(550, 1350) + 250 * this.u, this.Xc >= C[0][2] ? this.p -= 150 : this.Xc >= C[0][1] ? this.p -= 100 : this.Xc >= C[0][0] && (this.p -= 50), 0 < V.ya && (this.p -= 50 * V.hb), this.u = 0, this.lc());
            if (0 < this.Oa) - 1 === S.Ma &&
                (this.Oa -= a);
            else if (0 === F(80)) {
                a = F(Object.keys(Hb).length - 1);
                if (3 > this.ua) {
                    var d = 0;
                    1 >= this.ua ? d = F(5) : 2 === this.ua && (d = F(7));
                    0 == d && (a = Hb.Fd)
                }
                this.Oa = 5E3;
                this.aa >= C[0][2] ? this.Oa += 5E3 : this.aa >= C[0][1] ? this.Oa += 2500 : this.aa >= C[0][0] && (this.Oa += 1250);
                Zb(a)
            }
        },
        lc: function() {
            var a = !1,
                d = -1,
                e = ka[0],
                b = la[0],
                g = ma[0];
            S.Ma !== Hb.td && !1 === this.ob && -1 == d && 0 < e && 6 > R.ra.countLiving() && (5 <= this.ka ? (this.ka = 0, a = !0) : 0 === F(e) ? (this.ka = 0, a = !0) : this.ka++);
            this.ob = a ? !0 : !1;
            var h = e = !1;
            !1 === a && (d = F(Object.keys(qa).length), 0 <
                b && 6 > Q.Da.countLiving() && (15 <= this.ec ? (this.ec = 0, e = !0) : 0 == F(b) ? (this.ec = 0, e = !0) : this.ec++), 0 < g && (10 <= this.Sa ? (this.Sa = 0, h = !0) : 0 == F(g) ? (this.Sa = 0, h = !0) : this.Sa++));
            b = ec(a, e);
            g = I(.375 * game.width);
            this.u = d = fc(b, d, a, G(-g, g), h, e);
            !0 === a ? this.u += I(d / 2) : e ? this.u += d : h && (this.u += I(d / 2))
        },
        bd: function() {
            gc();
            this.hc(hc)
        },
        dd: function() {},
        Oc: function() {
            Pb(S);
            --this.ua;
            0 >= this.ua && (this.ua = 0);
            ib(this.ua, !0);
            0 < this.ua ? N(200, 3) : (eb(), N(1600, 4));
            0 >= this.ua && this.xb()
        },
        hc: function(a) {
            S.Ma === Hb.Dd && (a *= 2);
            a *= ic();
            this.aa +=
                a;
            gb(this.aa)
        },
        xb: function() {
            U = 4;
            this.aa > this.$ && (this.$ = this.aa, this.ib = !0);
            yb();
            W(V);
            game.time.events.add(1500, function() {
                Ua(L.ic)
            }, this)
        }
    };

    function jc() {
        this.u = this.Sa = this.ka = this.Ob = this.p = this.$ = 0;
        this.ib = !1
    }
    jc.prototype = {
        constructor: jc,
        kd: function() {
            this.Ob = this.aa = 0;
            var a = L.m;
            hb(a, 0);
            a.La.visible = !0;
            hb(L.m, this.Ob);
            gb(this.aa);
            fb(this.$);
            this.p = 500;
            this.Oa = 5E3;
            this.ob = !1;
            this.u = this.Sa = this.ka = 0;
            this.ib = !1
        },
        update: function(a) {
            this.p -= a;
            0 >= this.p && (this.p = G(550, 1350) + 250 * this.u, 0 < V.ya && (this.p -= 50 * V.hb), this.u = 0, this.lc())
        },
        lc: function() {
            var a = !1,
                d = -1,
                e = ka[1],
                b = ma[1];
            !1 === this.ob && -1 == d && 0 < e && 6 > R.ra.countLiving() && (5 <= this.ka ? (this.ka = 0, a = !0) : 0 === F(e) ? (this.ka = 0, a = !0) : this.ka++);
            this.ob = a ? !0 : !1;
            e = !1;
            !1 === a && (d = F(Object.keys(qa).length), 0 < b && (10 <= this.Sa ? (this.Sa = 0, e = !0) : 0 == F(b) ? (this.Sa = 0, e = !0) : this.Sa++));
            var b = ec(a, !1),
                g = I(.375 * game.width);
            this.u = d = fc(b, d, a, G(-g, g), e, !1);
            !0 === a ? this.u += I(d / 2) : e && (this.u += I(d / 2))
        },
        bd: function() {
            gc();
            this.hc(hc)
        },
        dd: function() {
            q("snd_sekFruit_fall");
            Ib(V);
            Jb(V);
            this.Ob++;
            3 <= this.Ob ? (this.Ob = 3, N(1600, 4), this.xb()) : N(200, 3);
            hb(L.m, this.Ob)
        },
        Oc: function() {
            eb();
            N(1600, 4);
            W(V);
            this.xb()
        },
        hc: function(a) {
            a *= ic();
            this.aa += a;
            gb(this.aa)
        },
        xb: function() {
            U = 4;
            this.aa > this.$ &&
                (this.$ = this.aa, this.ib = !0);
            yb();
            game.time.events.add(1500, function() {
                W(V);
                Ua(L.ic)
            }, this)
        }
    };

    function kc() {
        this.p = this.$ = 0;
        this.f = [];
        this.Ec = [];
        this.ib = this.wc = !1;
        this.xOffset = 0;
        this.scaleMax = 1.3;
        this.ce = .005;
        this.md = 1;
        this.qb = !1;
        this.ka = this.Dc = 0
    }
    kc.prototype = {
        constructor: kc,
        kd: function() {
            this.xOffset = game.cache.getFrameByName("pak", "queue_ingredients_0").width / 2;
            this.aa = 0;
            this.p = 500;
            for (Xa(this); Ya(this););
            this.Ja.callAll("kill");
            this.f = [];
            L.m.qa.visible = !0;
            gb(this.aa);
            fb(this.$);
            this.sc = this.u = 0;
            this.qb = this.ib = this.wc = !1;
            this.Ja.visible = !0;
            this.ka = 0;
            this.p = 1E3
        },
        update: function(a) {
            if (0 < this.f.length) {
                var d = this.f[0].scale.x + this.ce * this.md * a / 16;
                d > this.scaleMax && (d = this.scaleMax, this.md = -1);
                1 > d && (this.md = d = 1);
                this.f[0].scale.set(d)
            }
            this.sc -=
                a;
            0 > this.sc && (this.sc = 1E3, lc(this));
            for (var d = !0 === this.wc ? Math.ceil(a / 4) : Math.ceil(a / 6), e = !1, b = 0; b < this.f.length; b++) this.f[b].x > this.Ec[b] + this.xOffset && (this.f[b].x -= d, e = !0, this.f[b].x < this.Ec[b] + this.xOffset && (this.f[b].x = this.Ec[b] + this.xOffset));
            e ? (this.Ta.x -= d, Ya(this), mc(this)) : this.wc = !1;
            this.p -= a;
            if (d = 0 < this.f.length) d = Eb(), d = !1 === (0 === this.f.length ? !1 : d.contains(this.f[0].type) ? !0 : !1);
            d && 0 >= this.p && (this.p = G(500, 1E3) + 250 * this.u, this.u = 0, this.lc());
            !1 !== this.qb && (this.qb -= a, this.Dc -= a, 0 >=
                this.Dc && (this.Dc = 250, this.Ja.visible = !this.Ja.visible, !1 === this.Ja.visible && q("snd_q_cink")), 0 > this.qb && (q("snd_q_zle"), N(1E3, 2), this.xb(!0)))
        },
        lc: function() {
            var a = !1,
                d = ka[2];
            !1 === this.ob && 0 < d && 6 > R.ra.countLiving() && (15 <= this.ka ? (this.ka = 0, a = !0) : 0 === F(d) ? (this.ka = 0, a = !0) : this.ka++);
            this.ob = a ? !0 : !1;
            var d = G(2, 3),
                e = [];
            if (2 > this.f.length)
                for (var b = e.length; b < d; b++) e.push(pa());
            else if (2 === this.f.length)
                for (.5 < Math.random() && e.push(0 < this.f.length ? this.f[0].type : -1), b = e.length; b < d; b++) e.push(pa());
            else if (e.push(0 <
                    this.f.length ? this.f[0].type : -1), 3 <= this.f.length)
                for (.5 < Math.random() && e.push(1 < this.f.length ? this.f[1].type : -1), b = e.length; b < d; b++) e.push(pa());
            if (!0 === a) d = I(.375 * game.width), e = ec(!0, !1), fc(e, -1, a, G(-d, d), !1, !1);
            else {
                for (var g = [G(-I(.35 * game.width), -I(.2 * game.width))], b = 1; b < e.length; b++) g.push(g[b - 1] + G(I(.2 * game.width), I(.25 * game.width)));
                for (b = 0; b < e.length; b++) {
                    var h = g.splice(F(g.length), 1)[0];
                    fc(0, e[b], a, h, !1, !1, !1)
                }
                this.u = d;
                !0 === a && (this.u += 1)
            }
        },
        bd: function(a) {
            gc();
            this.hc(hc);
            if (null != this.f[0] &&
                a.type === this.f[0].type) {
                a = this.f[0].x;
                for (var d = this.f[0].y, e = G(5, 8), b = 0; b < e; b++) {
                    var g = this.fc.getFirstDead();
                    null == g && (g = this.fc.create(0, 0, "pak", "kukurica_0"), g.anchor.set(.5, .5));
                    J(g);
                    g.frameName = "firework_" + G(0, 3);
                    g.scale.set(G(8, 13) / 10);
                    g.reset(a, d);
                    g.lifespan = 550;
                    g.alpha = 1;
                    var h = G(20, 35) * oa([-1, 1]),
                        h = I(1 * h),
                        v = G(20, 35) * oa([-1, 1]),
                        v = I(1 * v);
                    game.add.tween(g).to({
                        x: a + h,
                        y: d + v
                    }, 550, Phaser.Easing.Linear.None, !0);
                    game.add.tween(g).to({
                        alpha: 0
                    }, 100, Phaser.Easing.Linear.None, !0, 450)
                }
                this.f[0].kill();
                this.f.shift();
                this.qb = !1;
                this.Ja.visible = !0
            } else q("snd_sekFruit_incorrect"), this.wc = !0, lc(this), Jb(V)
        },
        dd: function() {},
        Oc: function() {
            eb();
            N(1600, 4);
            W(V);
            this.xb()
        },
        hc: function(a) {
            a *= ic();
            this.aa += a;
            gb(this.aa)
        },
        xb: function(a) {
            U = 4;
            this.aa > this.$ && (this.$ = this.aa, this.ib = !0);
            yb();
            W(V);
            !0 === a ? Ua(L.ic) : game.time.events.add(1500, function() {
                Ua(L.ic)
            }, this)
        }
    };

    function lc(a) {
        if (7 <= a.f.length && !1 === a.qb) a.qb = 2500;
        else {
            var d = pa(),
                e = a.Ja.getFirstDead();
            null == e && (e = a.Ja.create(0, 0, "pak", "queue_ingredients_0"), H(e, .5, .5));
            e.frameName = "queue_ingredients_" + d;
            e.type = d;
            e.scale.set(1);
            d = a.Bb;
            0 < a.f.length && a.f[a.f.length - 1].right > d && (d = a.f[a.f.length - 1].right);
            e.reset(d, 0);
            a.f.push(e);
            7 <= a.f.length && Jb(V)
        }
    }

    function Xa(a) {
        a.Ta.callAll("kill");
        a.Ta.x = -a.Bb;
        a.fc.x = -a.Bb;
        a.rb = null
    }

    function mc(a) {
        null === a.rb && (a.rb = a.Ta.getFirstAlive(), a.Ta.forEachAlive(function(a) {
            a.x < this.rb.x && (this.rb = a)
        }, a));
        a.rb.worldPosition.x + a.rb.width < a.uc.worldPosition.x && (a.rb.kill(), a.rb = null)
    }

    function Ya(a) {
        if (0 > a.Ta.right) {
            var d = -a.Ta.x + a.Ta.right - 1,
                e = a.Ta.getFirstDead();
            null == e && (e = a.Ta.create(0, 0, "pak", "belt"));
            e.reset(d, 0);
            return !0
        }
        return !1
    };
    var lb = new dc,
        mb = new jc,
        T = new kc,
        hc = 5;

    function nc() {
        this.Xb = !1;
        this.Bc = this.Ac = 0;
        this.ga = null;
        this.ia = 1
    }
    nc.prototype = {
        constructor: nc,
        preload: function() {},
        create: function() {
            game.input.onUp.add(this.Od, this)
        },
        update: function(a) {
            if (2 === U) {
                2 === U && !1 === this.Xb && game.input.activePointer.isDown && (this.Ac = game.input.activePointer.x, this.Bc = game.input.activePointer.y, this.Xb = !0, Ib(this));
                if (this.Xb) {
                    difX = game.input.x - this.Ac;
                    difXAbs = Math.abs(difX);
                    difY = game.input.y - this.Bc;
                    difYAbs = Math.abs(difY);
                    step = 15;
                    diff = difXAbs > difYAbs ? difXAbs : difYAbs;
                    steps = Math.ceil(diff / step);
                    for (var d = 0; d < steps; d++) x = Math.ceil(this.Ac +
                        d / steps * difX), y = Math.ceil(this.Bc + d / steps * difY), P.vb(x, y), R.vb(x, y), S.vb(x, y), Q.vb(x, y);
                    this.Ac = game.input.x;
                    this.Bc = game.input.y
                }
                this.ga.update(a);
                P.update(a);
                Q.update();
                S.update(a);
                0 < this.Vb && (this.Vb -= a, 0 >= this.Vb && Ib(this));
                0 < this.hb && (this.ya -= a, 0 > this.ya && (this.ya = 0), 0 == this.ya && (this.ya = 1250, this.hb--, 0 > this.hb && (this.hb = 0), 0 == this.hb && (this.ya = 0)))
            }
        },
        Od: function() {
            this.Xb = !1;
            Ib(this)
        },
        je: function() {
            U = 2
        },
        $d: function() {
            game.physics.arcade.isPaused = !1;
            U = 2;
            Wb()
        }
    };

    function Qb() {
        P.Ca.forEachAlive(function(a) {
            a.$c()
        });
        R.ra.forEachAlive(function(a) {
            a.$c()
        });
        Q.Da.forEachAlive(function(a) {
            a.cb()
        })
    }

    function W(a) {
        L.m.Ca.callAll("kill");
        L.m.ra.callAll("kill");
        L.m.Da.callAll("kill");
        Vb();
        P.gc();
        R.gc();
        Q.gc();
        P.Gb.forEach(function(a) {
            a.Wb = 0;
            a.na.stop();
            a.na.pendingDelete = !1;
            a.kill()
        }, a)
    }

    function Jb(a) {
        a.ya = 0;
        a.hb = 0
    }

    function ic() {
        var a = V;
        return 3 <= a.gb ? a.gb - 1 : 1
    }

    function gc() {
        var a = V;
        a.gb++;
        9 < a.gb && (a.gb = 9);
        a.Vb = 200;
        if (3 <= a.gb) {
            var d = a.gb,
                e = L.m;
            if (null == e.kb) {
                var b = e.Wc.getFirstDead();
                null == b && (b = game.add.text(0, 0, "COMBO 1X", {
                    font: "bold 80px " + A,
                    fill: "#2b7100",
                    stroke: "#52ff30",
                    strokeThickness: 10
                }), b.anchor.set(.5), e.Wc.addChild(b));
                J(b);
                b.reset(0, .15 * game.height);
                b.alpha = 1;
                b.scale.set(1, 0);
                game.add.tween(b.scale).to({
                    x: 1,
                    y: 1
                }, 250, Phaser.Easing.Back.Out, !0);
                e.kb = b
            }
            e.kb.text = "COMBO " + d + "X";
            q("snd_combo");
            3 <= a.gb && (10 > a.hb && a.hb++, a.ya = 5E3)
        } else 2 === a.gb && 0 <
            a.ya && (a.ya += 1250)
    }

    function Ib(a) {
        a.gb = 0;
        a.Vb = 0;
        cb()
    }

    function Y(a, d) {
        d.body.gravity.x = d.body.gravity.x / Math.pow(d.ia, 2) * Math.pow(a.ia, 2);
        d.body.gravity.y = d.body.gravity.y / Math.pow(d.ia, 2) * Math.pow(a.ia, 2);
        d.body.velocity.x = d.body.velocity.x / d.ia * a.ia;
        d.body.velocity.y = d.body.velocity.y / d.ia * a.ia;
        d.ia = a.ia
    }

    function Tb() {
        var a = V;
        P.Ca.forEachAlive(function(a) {
            Y(this, a)
        }, a);
        R.ra.forEachAlive(function(a) {
            Y(this, a)
        }, a);
        Q.Da.forEachAlive(function(a) {
            Y(this, a)
        }, a)
    }

    function fc(a, d, e, b, g, h, v) {
        var f = game.height + 30,
            l = [],
            m = [],
            l = D >> 3,
            m = E >> 3;
        1 > l && (l = 1);
        1 > m && (m = 1);
        var p = [];
        switch (a) {
            case 0:
                p.push({
                    x: b,
                    y: f
                });
                break;
            case 1:
                l = [b - (D >> 1), b + (E >> 1)];
                for (a = 0; 2 > a; a++) p.push({
                    x: l[a],
                    y: f
                });
                break;
            case 2:
                f += E >> 1;
                m = [f - (E >> 1), f + (D >> 1)];
                for (a = 0; 2 > a; a++) p.push({
                    x: b,
                    y: m[a]
                });
                break;
            case 3:
                f += E >> 1;
                l = [b + (D >> 1) - l, b - (D >> 1) + l];
                m = [f - (E >> 1) + m, f + (E >> 1) - m];
                for (a = 0; 2 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 4:
                f += E >> 1;
                l = [b - (D >> 1) + l, b + (D >> 1) - l];
                m = [f - (E >> 1) + m, f + (E >> 1) - m];
                for (a = 0; 2 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 5:
                l = [b - D, b, b + D];
                for (a = 0; 3 > a; a++) p.push({
                    x: l[a],
                    y: f
                });
                break;
            case 6:
                f += E;
                m = [f - E, f, f + E];
                for (a = 0; 3 > a; a++) p.push({
                    x: b,
                    y: m[a]
                });
                break;
            case 7:
                f += E;
                l = [b + D - (l << 1), b, b - D + (l << 1)];
                m = [f - E + (m << 1), f, f + E - (m << 1)];
                for (a = 0; 3 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 8:
                f += E;
                l = [b - D + (l << 1), b, b + D - (l << 1)];
                m = [f - E + (m << 1), f, f + E - (m << 1)];
                for (a = 0; 3 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 9:
                f += E >> 1;
                l = [b, b - D + l, b + D - l];
                m = [f - (E >> 1) + m, f + (E >> 1), f + (E >> 1)];
                for (a = 0; 3 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 10:
                f += E >>
                    1;
                l = [b - D + l, b + D - l, b];
                m = [f - (E >> 1), f - (E >> 1), f + (E >> 1) - m];
                for (a = 0; 3 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 11:
                f += E;
                l = [b + (D >> 1), b - (D >> 1) + l, b + (D >> 1)];
                m = [f - E + m, f, f + E - m];
                for (a = 0; 3 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 12:
                f += E;
                l = [b - (D >> 1), b + (D >> 1) - l, b - (D >> 1)];
                m = [f - E + m, f, f + E - m];
                for (a = 0; 3 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 13:
                f += E >> 1;
                l = [b - (D >> 1), b + (D >> 1), b - (D >> 1), b + (D >> 1)];
                m = [f - (E >> 1), f - (E >> 1), f + (E >> 1), f + (E >> 1)];
                for (a = 0; 4 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 14:
                f += E;
                l = [b, b - D + l, b + D - l, b];
                m = [f - E +
                    m, f, f, f + E - m
                ];
                for (a = 0; 4 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 15:
                f += E;
                l = [b + (D >> 1), b - (D >> 1), b + (D >> 1), b - (D >> 1)];
                m = [f - E + (E >> 2), f - (E >> 2), f + (E >> 2), f + E - (E >> 2)];
                for (a = 0; 4 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 16:
                f += E;
                l = [b - (D >> 1), b + (D >> 1), b - (D >> 1), b + (D >> 1)];
                m = [f - E + (E >> 2), f - (E >> 2), f + (E >> 2), f + E - (E >> 2)];
                for (a = 0; 4 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 17:
                f += E >> 1;
                l = [b - D + (D >> 2), b + (D >> 2), b - (D >> 2), b + D - (D >> 2)];
                m = [f - (E >> 1), f - (E >> 1), f + (E >> 1), f + (E >> 1)];
                for (a = 0; 4 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 18:
                f +=
                    E >> 1;
                l = [b + D - (D >> 2), b - (D >> 2), b + (D >> 2), b - D + (D >> 2)];
                m = [f - (E >> 1), f - (E >> 1), f + (E >> 1), f + (E >> 1)];
                for (a = 0; 4 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 19:
                f += E >> 1;
                l = [b, b - D, b + D, b];
                m = [f - (E >> 1), f, f, f + (E >> 1)];
                for (a = 0; 4 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 20:
                f += E;
                l = [b, b - (D >> 1), b + (D >> 1), b];
                m = [f - E, f, f, f + E];
                for (a = 0; 4 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 21:
                f += E;
                l = [b - D + (l << 1), b + D - (l << 1), b, b - D + (l << 1), b + D - (l << 1)];
                m = [f - E + (m << 1), f - E + (m << 1), f, f + E - (m << 1), f + E - (m << 1)];
                for (a = 0; 5 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 22:
                f +=
                    E;
                l = [b, b - D, b, b + D, b];
                m = [f - E, f, f, f, f + E];
                for (a = 0; 5 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 23:
                f += E >> 1;
                l = [b - (D >> 1), b + (D >> 1), b - D, b, b + D];
                m = [f - (E >> 1), f - (E >> 1), f + (E >> 1), f + (E >> 1), f + (E >> 1)];
                for (a = 0; 5 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 24:
                f += E >> 1;
                l = [b - D, b, b + D, b - (D >> 1), b + (D >> 1)];
                m = [f - (E >> 1), f - (E >> 1), f - (E >> 1), f + (E >> 1), f + (E >> 1)];
                for (a = 0; 5 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 25:
                f += E;
                l = [b + (D >> 1), b - (D >> 1), b + (D >> 1), b - (D >> 1), b + (D >> 1)];
                m = [f - E, f - (E >> 1), f, f + (E >> 1), f + E];
                for (a = 0; 5 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 26:
                f += E;
                l = [b - (D >> 1), b + (D >> 1), b - (D >> 1), b + (D >> 1), b - (D >> 1)];
                m = [f - E, f - (E >> 1), f, f + (E >> 1), f + E];
                for (a = 0; 5 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 27:
                f += E >> 1;
                l = [b - D, b, b + D, b - D, b, b + D];
                m = [f - (E >> 1), f - (E >> 1), f - (E >> 1), f + (E >> 1), f + (E >> 1), f + (E >> 1)];
                for (a = 0; 6 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 28:
                f += E;
                l = [b - (D >> 1), b + (D >> 1), b - (D >> 1), b + (D >> 1), b - (D >> 1), b + (D >> 1)];
                m = [f - E, f - E, f, f, f + E, f + E];
                for (a = 0; 6 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 29:
                f += E;
                l = [b, b - (D >> 1), b + (D >> 1), b - D, b, b + D];
                m = [f - E, f, f, f + E, f + E, f + E];
                for (a = 0; 6 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 30:
                f += E;
                l = [b - D, b, b + D, b - (D >> 1), b + (D >> 1), b];
                m = [f - E, f - E, f - E, f, f, f + E];
                for (a = 0; 6 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 31:
                f += E;
                l = [b + D, b, b - D, b + D, b, b + D];
                m = [f - E, f - (E >> 1), f, f, f + (E >> 1), f + E];
                for (a = 0; 6 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 32:
                f += E;
                l = [b - D, b, b + D, b - D, b, b - D];
                m = [f - E, f - (E >> 1), f, f, f + (E >> 1), f + E];
                for (a = 0; 6 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 33:
                f += E;
                l = [b - (D >> 1), b + (D >> 1), b - D, b + D, b - (D >> 1), b + (D >> 1)];
                m = [f - E, f - E, f, f, f + E, f + E];
                for (a = 0; 6 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                });
                break;
            case 34:
                for (f += E, l = [b, b - D, b + D, b - D, b + D, b], m = [f - E, f - (E >> 1), f - (E >> 1), f + (E >> 1), f + (E >> 1), f + E], a = 0; 6 > a; a++) p.push({
                    x: l[a],
                    y: m[a]
                })
        } - 100 > b ? Xvector = G(80, 150) : 100 < b ? Xvector = G(-80, -150) : Xvector = 0;
        !1 === v && (Xvector = 0);
        b = G(300, 325);
        v = G(.58 * -game.height, .73 * -game.height);
        if (h) {
            h = 3E3;
            b = -3E3;
            for (a = 0; a < p.length; a++) p[a].x < h && (h = p[a].x), p[a].x > b && (b = p[a].x);
            a = -game.width / 2 + 45;
            v = game.width / 2 - 45;
            e = 0;
            h < a && (e = a - h);
            b > v && (e = v - b);
            for (a = 0; a < p.length; a++) p[a].x += e, v = p[a].x, f = p[a].y + 150, b = Q, h = Fb(v, 0, d, g, [0, 0], [0, 0]), h.oa.addOnce(b.Vd, b), l = h, m = b.Da.getFirstDead(), null == m && (m = new $b(b.Da)), m.Wd(v, f, l), b = m, h.Ya = b, b.body.velocity.setTo(0, -300), Y(V, b)
        } else if (e)
            for (a = 0; a < p.length; a++) d = p[a].x, g = p[a].y, e = [0, b], h = [Xvector, v], f = R, l = f.ra.getFirstDead(), null == l && (l = new Gb(f.ra)), l.Xd(d, g), l.body.gravity.setTo(e[0], e[1]), l.body.velocity.setTo(h[0], h[1]), Y(V, l);
        else
            for (a = 0; a < p.length; a++) Fb(p[a].x, p[a].y, d, g, [0, b], [Xvector, v]);
        return p.length
    }

    function ec(a, d) {
        var e = 34;
        1 === B && !0 === a && 5 < e && (e = 5);
        var b = 0,
            g = G(0, 99);
        if (27 < e) {
            var h = [45, 20, 15, 10, 5, 5];
            g < h[0] ? b = 0 : b = g < h[0] + h[1] ? G(1, 4) : g < h[0] + h[1] + h[2] ? G(5, 12) : g < h[0] + h[1] + h[2] + h[3] ? G(13, 20) : g < h[0] + h[1] + h[2] + h[3] + h[4] ? G(21, 26) : G(27, 34)
        } else 21 < e || 13 < e || 5 < e || (1 < e ? (h = [65, 35], g < h[0] ? b = 0 : b = G(1, e - 1)) : iFormation = 0);
        !0 === d && !1 === a && (g = F(3), b = 0 == g ? 5 : 1 == g ? 7 : 8);
        return b
    }

    function rb(a, d) {
        for (var e = 2; 0 <= e; e--)
            if (d >= C[a][e]) return e;
        return !1
    }

    function vb() {
        for (var a = B, d = V.ga.$, e = 0; 3 > e; e++)
            if (d < C[a][e]) return [C[a][e], e];
        return !1
    }

    function sb() {
        var a = V;
        W(a);
        U = 1;
        game.physics.arcade.isPaused = !1;
        ca(r, B, !0);
        Ib(a);
        Jb(a);
        a.ga.kd();
        gradle.event('sb');
    }

    function oc(a, d, e, b) {
        var g = 100,
            h = 50,
            g = 650,
            h = 300;
        L.m.yb.frameName = d;
        L.m.yb.alpha = 0;
        L.m.yb.scale.set(1.6);
        game.add.tween(L.m.yb).to({
            alpha: 1
        }, h, Phaser.Easing.Linear.None, !0);
        game.add.tween(L.m.yb.scale).to({
            x: 0,
            y: 0
        }, g, Phaser.Easing.Quintic.In, !0, e).onComplete.addOnce(b, a)
    }

    function wb(a, d) {
        J(L.m.yb);
        oc(a, "num3", 350, function() {
            oc(this, "num2", 0, function() {
                oc(this, "num1", 0, d)
            })
        })
    }

    function tb() {
        var a = V.je;
        aa = function() {
            game.paused = !1;
            wb(this, a)
        }.bind(V);
        "undefined" != typeof adinplay_overlay && (adinplay_overlay.visible = !1);
        aa()
    };
    var ea = new GameTexts;

    function pc() {}
    pc.prototype = {
        preload: function() {
            game.load.crossOrigin = "Anonymous";
            game.canvas.id = "gameCanvas";
            document.getElementById("gameCanvas").style.position = "fixed";
            game.stage.backgroundColor = "#000000";
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = !0;
            this.scale.pageAlignVertically = !0;
            this.scale.refresh();
            window.addEventListener("resize", function() {
                qc();
                rc()
            });
            rc();
            game.load.image("kuchar", "images/kuchar.png");
            game.load.text("lang_stringss", "lang.json");
            ea.preload()
        },
        create: function() {
            var a = navigator.xa || navigator.language,
                a = a.toLowerCase();
            z = "en"; - 1 !== a.indexOf("fr") && (z = "fr"); - 1 !== a.indexOf("it") && (z = "it"); - 1 !== a.indexOf("de") && (z = "de"); - 1 !== a.indexOf("es") && (z = "es"); - 1 !== a.indexOf("br") && (z = "br"); - 1 !== a.indexOf("ru") && (z = "ru");
            w = da.indexOf(z);
            6 === w && (A = "Arial");
            ea.create();
            game.state.start("StatePreload")
        }
    };

    function qc() {
        document.body.style.backgroundImage = "url('images/bg_splash.png')";
        document.body.style.backgroundSize = "10px " + window.innerHeight + "px"
    }
    qc();

    function tc() {
        qc = function() {};
        document.body.style.backgroundImage = null
    };

    function uc() {}
    var vc;
    uc.prototype = {
        preload: function() {
            vc = this;
            game.stage.backgroundColor = "#000000";
            this.$b = Date.now();
            this.gd = 0;
            this.Mc = !1;
            var a;
            try {
                var d = localStorage.getItem("inl_pnm");
                a = JSON.parse(d)
            } catch (e) {}
            try {
                if ("ma" in a && (lb.$ = a.ma), "mt" in a && (mb.$ = a.mt), "mq" in a && (T.$ = a.mq), n && "snd" in a) {
                    var b = a.snd;
                    if (1 == b || 0 == b) r.bb = b
                }
            } catch (g) {}
            this.Kb = game.add.group();
            this.Kb.x = I(game.width / 2);
            this.xa = game.add.sprite(0, 0, "kuchar");
            this.xa.anchor.set(.5);
            this.Kb.add(this.xa);
            a = game.make.text(0, game.height - 20, "0%", {
                font: "50px baloo_font",
                fill: "#ffffff"
            });
            a.fontSize = I(1 * a.fontSize);
            H(a, .5, 1);
            this.yd = this.Kb.addChild(a);
            this.pa();
            this.Kb.alpha = 0;
            game.add.tween(this.Kb).to({
                alpha: 1
            }, 350, Phaser.Easing.Linear.None, !0, 0, 0, !1);
            game.load.atlas("pak", "images/spritesheet.png", "images/sprites.json");
            game.load.image("bg_img", "images/background.png");
            game.load.image("bg_freez", "images/freez_bg.png");
            if (n && n)
                for (game.load.audio("musicMenu", ["music/menu.ogg", "music/menu.mp3"]), game.load.audio("musicGame_1", ["music/gm_arc.ogg", "music/gm_arc.mp3"]), game.load.audio("musicGame_2", ["music/gm_trl.ogg", "music/gm_trl.mp3"]), game.load.audio("musicGame_3", ["music/gm_que.ogg", "music/gm_que.mp3"]), a = 0; a < k.length; a++) game.load.audio(k[a].ba, ["sounds/" + k[a].fileName + ".ogg", "sounds/" + k[a].fileName + ".mp3"]);
            game.load.onFileComplete.add(this.fileComplete, this)
        },
        fileComplete: function(a) {
            this.yd.setText(a + "%");
            100 <= a && Oa(function() {
                this.Mc = !0;
                game.add.tween(this.yd).to({
                    alpha: [.3,
                        1
                    ]
                }, 500, Phaser.Easing.Linear.None, !0, 0, -1)
            }, this)
        },
        update: function() {
            this.gd += Date.now() - this.$b;
            this.$b = Date.now();
            2500 <= this.gd && !0 === this.Mc && (this.Mc = !1, game.cache.getFrameByName("pak", "10pxwhite").height -= 2, game.cache.getFrameByName("pak", "10pxwhite").width -= 2, game.cache.getFrameByName("pak", "10pxwhite").x += 1, game.cache.getFrameByName("pak", "10pxwhite").y += 1, --game.cache.getFrameByName("pak", "10pxwhite").bottom, --game.cache.getFrameByName("pak", "10pxwhite").right, --game.cache.getFrameByName("pak",
                "10pxwhite").centerX, --game.cache.getFrameByName("pak", "10pxwhite").centerY, game.state.start("StateGame"))
        },
        wb: function(a, d, e, b, g, h) {
            a = game.add.sprite(a, d, e, b);
            H(a, .5, .5);
            void 0 != g && (g = game.make.sprite(0, 0, g), g.frameName = h, g.anchor.set(.5), a.addChild(g));
            return a
        },
        pa: function() {
            this.Kb.x = I(game.width / 2);
            this.xa.y = game.height / 2;
            this.xa.width = .95 * game.width;
            this.xa.scale.y = this.xa.scale.x;
            this.xa.height > game.height && (this.xa.height = game.height, this.xa.scale.x = this.xa.scale.y);
            1 < this.xa.scale.x && this.xa.scale.set(1)
        }
    };

    function yb() {
        var a = {};
        a.snd = r.bb;
        a.ma = lb.$;
        a.mt = mb.$;
        a.mq = T.$;
        try {
            localStorage.setItem("inl_pnm", JSON.stringify(a))
        } catch (d) {}
    };
    var U, V = new nc,
        L = new xa,
        r = new MusicPlayer,
        P = new Db,
        R = new Lb,
        S = new Ub,
        Q = new bc,
        wc = new cc;

    function xc() {}
    xc.prototype = {
        preload: function() {
            U = 0;
            game.stage.backgroundColor = "#000000";
            L.preload();
            V.preload();
            P.preload();
            game.input.maxPointers = 1;
            game.time.advancedTiming = !0;
            D = I(.73 * game.cache.getFrameByName("pak", "kukurica_0").width);
            E = I(.73 * game.cache.getFrameByName("pak", "kukurica_0").height);
            tc()
        },
        create: function() {
            r.create();
            L.create();
            V.create();
            P.create();
            wc.create();
            O(L.jc, "showScreeCustom");
            game.onPause.add(yc);
            game.onResume.add(zc);
            this.$b = Date.now()
        },
        update: function() {
            var a = Date.now() - this.$b;
            game.time.physicsElapsed =
                a / 1E3;
            V.update(a);
            L.update();
            wc.update();
            this.$b = Date.now()
        }
    };

    function yc() {
        game.device.desktop && game.device.chrome && game.input.mspointer.stop();
        2 === U && !0 === L.m.e.visible && !0 === L.m.e.fd && Za();
        var a = r;
        n && a.bb && null != a.Wa && a.Ra[a.Wa].pause()
    }

    function zc() {
        game.device.desktop && game.device.chrome && game.input.mspointer.stop();
        var a = r;
        n && a.bb && null != a.Wa && a.Ra[a.Wa].resume()
    };
    var Ac = 0,
        Bc = 1,
        Z = Ac,
        Cc = {
            0: {
                xMin: 450,
                xMax: 800,
                y: 960
            }
        },
        Qa = Cc[0].xMax,
        Ra = Cc[0].y;

    function rc() {
        var a = game.width,
            d = game.height,
            e = Z;
        if (null !== game) {
            var b = document.documentElement.clientWidth,
                g = document.documentElement.clientHeight;
            ia && b > g && (b = window.innerWidth, g = window.innerHeight);
            Z = Ac;
            resolutionY = Cc[Z].y;
            resolutionX = Math.floor(b / g * resolutionY);
            isNaN(resolutionX) && (resolutionX = 0);
            resolutionX < Cc[Z].xMin && (resolutionX = Cc[Z].xMin);
            resolutionX > Cc[Z].xMax && (resolutionX = Cc[Z].xMax);
            g > b || (Z = Bc);
            e !== Z && (Z === Ac ? (ta("wrongRotation"), sa("gameCanvas"), game.onResume.dispatch()) : (sa("wrongRotation"),
                ta("gameCanvas"), game.onPause.dispatch()));
            if (a !== resolutionX || d !== resolutionY || e !== Z) game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL, game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, game.scale.pageAlignHorizontally = !0, game.scale.pageAlignVertically = !0, game.scale.refresh(), game.scale.setGameSize(resolutionX, resolutionY), null !== L && Sa(L), null != vc && null == U && vc.pa()
        }
    };
    var resolutionX = Qa,
        resolutionY = Ra,
        game;
    game = new Phaser.Game(resolutionX, resolutionY, Phaser.CANVAS);
    game.forceSingleUpdate = !0;
    game.transparent = !0;
    game.state.add("StateSplash", pc);
    game.state.add("StatePreload", uc);
    game.state.add("StateGame", xc);
    game.state.start("StateSplash");
    window.addEventListener("contextmenu", function(a) {
        a.preventDefault()
    });
    window.addEventListener("touchend", function() {
        if (null !== game) try {
            "running" !== game.sound.context.state && game.sound.context.resume()
        } catch (a) {}
    }, !1);
    ia || (document.addEventListener("touchstart", function(a) {
        a.preventDefault()
    }), document.addEventListener("touchmove", function(a) {
        a.preventDefault()
    }));
    document.documentElement.style.overflow = "hidden";
    document.body.scroll = "no";
    


}();