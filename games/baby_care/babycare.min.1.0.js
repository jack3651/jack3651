function y() {
    return arguments.callee.name || arguments.callee.toString().match(/^function ([^(]+)/)[1]
}

function C(t) {
    return t.dr += 8, t.JK < t.data.length ? t.data.charCodeAt(t.JK++) : -1
}

function ca(t) {
    var i;
    return t.dr++, i = 1 & t.nk, t.nk >>= 1, 0 == t.nk && (t.nk = C(t), i = 1 & t.nk, t.nk = t.nk >> 1 | 128), i
}

function K(t, i) {
    for (var n = 0, e = i; e--;) n = n << 1 | ca(t);
    return i && (n = q.Pa.lb.uE[n] >> 8 - i), n
}

function ea(t, i) {
    t.wE[t.qj++] = i, t.bv.push(String.fromCharCode(i)), 32768 == t.qj && (t.qj = 0)
}

function fa(t) {
    for (;;) {
        if (t.qr[t.yj] >= t.zL) return -1;
        if (t.yL[t.qr[t.yj]] == t.yj) return t.qr[t.yj]++;
        t.qr[t.yj]++
    }
}

function ja(t) {
    var i, n = t.OA[t.xv];
    if (17 == t.yj) return -1;
    if (t.xv++, t.yj++, 0 <= (i = fa(t))) n.uy = i;
    else if (n.uy = 32768, ja(t)) return -1;
    if (0 <= (i = fa(t))) n.vy = i, n.xF = null;
    else if (n.vy = 32768, n.xF = t.OA[t.xv], n.HX = t.xv, ja(t)) return -1;
    return t.yj--, 0
}

function ka(t, i, n, e) {
    for (t.OA = i, t.xv = 0, t.yL = e, t.zL = n, i = 0; 17 > i; i++) t.qr[i] = 0;
    return t.yj = 0, ja(t) ? -1 : 0
}

function la(t, i) {
    for (var n, e, h = 0, s = i[h];;)
        if (n = ca(t)) {
            if (!(32768 & s.vy)) return s.vy;
            for (s = s.xF, n = i.length, e = 0; e < n; e++)
                if (i[e] === s) {
                    h = e;
                    break
                }
        } else {
            if (!(32768 & s.uy)) return s.uy;
            s = i[++h]
        }
    return -1
}

function ma(t) {
    var i, n, e, h, s;
    do {
        if (i = ca(t), 0 == (e = K(t, 2)))
            for (t.nk = 1, e = C(t), e |= C(t) << 8, n = C(t), n |= C(t) << 8, 65535 & (e ^ ~n) && document.write("BlockLen checksum mismatch\n"); e--;) n = C(t), ea(t, n);
        else if (1 == e)
            for (;;)
                if (23 < (e = q.Pa.lb.uE[K(t, 7)] >> 1) ? 199 < (e = e << 1 | ca(t)) ? (e -= 128, e = e << 1 | ca(t)) : 143 < (e -= 48) && (e += 136) : e += 256, 256 > e) ea(t, e);
                else {
                    if (256 == e) break;
                    var r;
                    for (e -= 257, s = K(t, q.Pa.lb.VK[e]) + q.Pa.lb.UK[e], e = q.Pa.lb.uE[K(t, 5)] >> 3, 8 < q.Pa.lb.hr[e] ? (r = K(t, 8), r |= K(t, q.Pa.lb.hr[e] - 8) << 8) : r = K(t, q.Pa.lb.hr[e]), r += q.Pa.lb.TK[e], e = 0; e < s; e++) n = t.wE[t.qj - r & 32767], ea(t, n)
                }
        else if (2 == e) {
            var a = Array(320);
            for (n = 257 + K(t, 5), r = 1 + K(t, 5), h = 4 + K(t, 4), e = 0; 19 > e; e++) a[e] = 0;
            for (e = 0; e < h; e++) a[q.Pa.lb.border[e]] = K(t, 3);
            for (s = t.Jo.length, h = 0; h < s; h++) t.Jo[h] = new q.Pa.lb.DA;
            if (ka(t, t.Jo, 19, a)) return void(t.qj = 0);
            s = n + r, h = 0;
            for (; h < s;)
                if (0, 16 > (e = la(t, t.Jo))) a[h++] = e;
                else if (16 == e) {
                var o;
                if (e = 3 + K(t, 2), h + e > s) return void(t.qj = 0);
                for (o = h ? a[h - 1] : 0; e--;) a[h++] = o
            } else {
                if (e = 17 == e ? 3 + K(t, 3) : 11 + K(t, 7), h + e > s) return void(t.qj = 0);
                for (; e--;) a[h++] = 0
            }
            for (s = t.Yu.length, h = 0; h < s; h++) t.Yu[h] = new q.Pa.lb.DA;
            if (ka(t, t.Yu, n, a)) return void(t.qj = 0);
            for (s = t.Yu.length, h = 0; h < s; h++) t.Jo[h] = new q.Pa.lb.DA;
            for (e = [], h = n; h < a.length; h++) e[h - n] = a[h];
            if (ka(t, t.Jo, r, e)) return void(t.qj = 0);
            for (;;)
                if (256 <= (e = la(t, t.Yu))) {
                    if (0 == (e -= 256)) break;
                    for (e--, s = K(t, q.Pa.lb.VK[e]) + q.Pa.lb.UK[e], e = la(t, t.Jo), 8 < q.Pa.lb.hr[e] ? (r = K(t, 8), r |= K(t, q.Pa.lb.hr[e] - 8) << 8) : r = K(t, q.Pa.lb.hr[e]), r += q.Pa.lb.TK[e]; s--;) n = t.wE[t.qj - r & 32767], ea(t, n)
                } else ea(t, e)
        }
    } while (!i);
    t.qj = 0, t.nk = 1
}

function ba(t) {
    t.bv = [], t.yz = !1;
    var i = [];
    if (i[0] = C(t), i[1] = C(t), 120 == i[0] && 218 == i[1] && (ma(t), t.lA[t.files] = [t.bv.join(""), "geonext.gxt"], t.files++), 31 == i[0] && 139 == i[1] && (na(t), t.lA[t.files] = [t.bv.join(""), "file"], t.files++), 80 == i[0] && 75 == i[1] && (t.yz = !0, i[2] = C(t), i[3] = C(t), 3 == i[2] && 4 == i[3])) {
        i[0] = C(t), i[1] = C(t), t.zl = C(t), t.zl |= C(t) << 8, i = C(t), i |= C(t) << 8, C(t), C(t), C(t), C(t), C(t), C(t), C(t), C(t), C(t), C(t), C(t), C(t);
        var n = (n = C(t)) | C(t) << 8,
            e = (e = C(t)) | C(t) << 8,
            h = 0;
        for (t.Kr = []; n--;) {
            var s = C(t);
            "/" == s | ":" == s ? h = 0 : h < q.Pa.lb.eH - 1 && (t.Kr[h++] = String.fromCharCode(s))
        }
        t.uL || (t.uL = t.Kr);
        for (h = 0; h < e;) C(t), h++;
        8 == i && (ma(t), t.lA[t.files] = [t.bv.join(""), t.Kr.join("")], t.files++), na(t)
    }
}

function na(t) {
    var i, n = [];
    if (8 & t.zl && (n[0] = C(t), n[1] = C(t), n[2] = C(t), n[3] = C(t), C(t), C(t), C(t), C(t), C(t), C(t), C(t), C(t)), t.yz && ba(t), n[0] = C(t), 8 == n[0]) {
        if (t.zl = C(t), C(t), C(t), C(t), C(t), C(t), C(t), 4 & t.zl)
            for (n[0] = C(t), n[2] = C(t), t.yj = n[0] + 256 * n[1], n = 0; n < t.yj; n++) C(t);
        if (8 & t.zl)
            for (n = 0, t.Kr = []; i = C(t);) "7" != i && ":" != i || (n = 0), n < q.Pa.lb.eH - 1 && (t.Kr[n++] = i);
        if (16 & t.zl)
            for (; C(t););
        2 & t.zl && (C(t), C(t)), ma(t), C(t), C(t), C(t), C(t), t.yz && ba(t)
    }
}

function qa() {
    this.kr = this.n0 = this.position = q.MA
}

function za() {
    var t = 0,
        i = window.navigator.userAgent.toLowerCase();
    return (i.match(/iphone/i) || i.match(/ipod/i)) && (t = 60), window.innerHeight - t
}

function Ba() {
    var t = za();
    return 0 == Aa && (Aa = t / O.height), Aa
}

function Ca(t) {
    var i = document.querySelector("#dg_xz_msg");
    i.style.display = t ? "block" : "none", i.style.height = screen.width + "px", scrollTo(0, (screen.width - window.innerHeight) / 2)
}

function Da() {
    if (q.pa.sg) {
        var t = !1,
            i = 0 !== ya.screenDirection;
        if ("number" == typeof window.orientation && "object" == typeof window.onorientationchange) switch (window.orientation) {
            case 90:
            case -90:
                t = !0;
                break;
            default:
                t = !1
        } else t = window.innerWidth > window.innerHeight;
        Ca(t === i ? !0 : !1)
    }
}

function R() {
    var t = Math.random();
    if (0 < arguments.length)
        if (2 == arguments.length) switch (arguments[1]) {
            case "RANDOM_TYPE_FIXED":
                t = t.toFixed(arguments[0])
        } else t = Math.ceil(1e6 * t) % arguments[0];
        else t = Math.ceil(1e6 * t);
    return t
}

function Pa() {
    this.CK = this.DE = this.pl = this.GE = this.su = this.Av = this.mE = this.sy = this.Tg = null, this.DK = "off", this.ZK = null, this.CU = !0, this.FC = !1, this.JC = 320, this.IC = 255;
    var t = 288 * P.ok(q.size(320, 480));
    336 <= document.body.scrollWidth && 280 <= t && (this.JC = 336, this.IC = 280)
}

function Qa() {
    var t, i = W(),
        i = document.getElementById(i.su),
        n = document.documentElement.scrollWidth,
        e = P.ok(O),
        h = i.scrollWidth;
    2 == W().pl ? (t = (384 * e - i.scrollHeight) / 2 / (480 * e) * 100, t = "position:fixed; top: " + (0 > t ? 0 : t) + "%; z-index: 99; left:" + (n - h) / 2 / n * 100 + "%;") : 1 == W().pl && (t = "position:fixed; top: 0%; z-index: 99; left:" + (n - h) / 2 / n * 100 + "%;"), i.style.cssText = t
}

function W() {
    return null == Oa && (Oa = new Pa, window.addEventListener("resize", Oa.OY, !1)), Oa
}

function Ra(t) {
    var i = document.getElementById("adsense_banner");
    i && (i.style.display = t ? "inline" : "none")
}

function Sa() {
    var t = window.navigator.userAgent.toLowerCase();
    return t.match(/android/i) && !t.match(/chrome/i) ? 1 : 2
}

function Va() {
    this.zc = !0
}

function Wa() {
    return null === Ta && (Ta = new Va), Ta
}

function Ya() {
    P.fz() || (Ra(!0), Wa().lr())
}

function Za() {
    Ra(!1), Wa().lr()
}

function mb(t) {
    var i = q.Eg.create(),
        n = new pb;
    return n.init(), i.l(n), i.l(n.uu), i.l(n.zu), n.zu.l(n.Fo, 1), P.jM(), null != t && (t.vb(1), t.Cb(!0), n.Fo.l(t, 5)), n.Fo.l(n.WM, 7), i.l(n.ry, 3), i.l(n.OE, 3), i.l(n.dd, 10), i.l(n.bA, 2), i
}
var b, q = q || {};
y.id = 0 | 998 * Math.random(), y.QK = function(t, i, n) {
        for (var e = (e = (h = t.toString()).substring(h.indexOf("(") + 1, h.indexOf(")"))).trim(), h = h.substring(h.indexOf("{") + 1, h.lastIndexOf("}")); - 1 != h.indexOf("this._super");) var s = h.indexOf("this._super"),
            r = h.indexOf("(", s),
            a = h.substring(r + 1, h.indexOf(")", r)),
            a = (a = a.trim()) ? "," : "",
            o = arguments.callee.aP(),
            h = h.substring(0, s) + o + "[" + n + "]." + i + ".call(this" + a + h.substring(r + 1);
        return Function(e, h)
    }, y.QK.aP = y, y.MW = function() {
        return this.id++
    },
    function() {
        var t = /\b_super\b/,
            i = document.ccConfig && document.ccConfig.CLASS_RELEASE_MODE ? document.ccConfig.CLASS_RELEASE_MODE : null;
        i && console.log("release Mode"), q.ca = function() {}, q.ca.extend = function(n) {
            function e() {
                this.ctor && this.ctor.apply(this, arguments)
            }
            var h = this.prototype,
                s = Object.create(h),
                r = y.MW();
            y[r] = h;
            var a, o = {
                writable: !0,
                enumerable: !1,
                configurable: !0
            };
            for (a in n) i && "function" == typeof n[a] && "function" == typeof h[a] && t.test(n[a]) ? (o.value = y.QK(n[a], a, r), Object.defineProperty(s, a, o)) : "function" == typeof n[a] && "function" == typeof h[a] && t.test(n[a]) ? (o.value = function(t, i) {
                return function() {
                    var n = this._super;
                    this._super = h[t];
                    var e = i.apply(this, arguments);
                    return this._super = n, e
                }
            }(a, n[a]), Object.defineProperty(s, a, o)) : "function" == typeof n[a] ? (o.value = n[a], Object.defineProperty(s, a, o)) : s[a] = n[a];
            return e.id = r, o.value = r, Object.defineProperty(s, "__pid", o), e.prototype = s, o.value = e, Object.defineProperty(e.prototype, "constructor", o), e.extend = arguments.callee, e.Q$ = function(t) {
                for (var i in t) s[i] = t[i]
            }, e
        }, Function.prototype.bind = Function.prototype.bind || function(t) {
            var i = this;
            return function() {
                var n = Array.prototype.slice.call(arguments);
                return i.apply(t || null, n)
            }
        }
    }(), q.R$ = function(t, i) {
        function n() {}
        n.prototype = i.prototype, t.dA = i.prototype, t.prototype = new n, t.prototype.constructor = t
    }, q.j5 = function(t, i, n) {
        var e = arguments.callee.caller;
        if (e.dA) return ret = e.dA.constructor.apply(t, Array.prototype.slice.call(arguments, 1));
        for (var h = Array.prototype.slice.call(arguments, 2), s = !1, r = t.constructor; r; r = r.dA && r.dA.constructor)
            if (r.prototype[i] === e) s = !0;
            else if (s) return r.prototype[i].apply(t, h);
        if (t[i] === e) return t.constructor.prototype[i].apply(t, h);
        throw Error("cc.base called from a method of one name to a method of a different name")
    }, q.A5 = function(t, i) {
        t || (t = {});
        for (var n in i) t[n] = i[n];
        return t
    }, q.ys = function(t, i) {
        this.x = t || 0, this.y = i || 0
    }, q.F2 = function(t, i) {
        return q.log("cc.PointMake will be deprecated sooner or later. Use cc.p instead."), new q.ys(t, i)
    }, q.a = function(t, i) {
        return new q.ys(t, i)
    }, q.r4 = q.a, q.Ua = function() {
        return q.a(0, 0)
    }, Object.defineProperties(q, {
        MA: {
            get: function() {
                return q.a(0, 0)
            }
        },
        a3: {
            get: function() {
                return q.size(0, 0)
            }
        },
        I2: {
            get: function() {
                return q.rect(0, 0, 0, 0)
            }
        }
    }), q.Sr = function(t, i) {
        return !(!t || !i) && (t.x === i.x && t.y === i.y)
    }, q.cB = function(t, i) {
        this.width = t || 0, this.height = i || 0
    }, q.f3 = function(t, i) {
        return q.log("cc.SizeMake will be deprecated sooner or later. Use cc.size instead."), q.size(t, i)
    }, q.size = function(t, i) {
        return new q.cB(t, i)
    }, q.B4 = q.size, q.Ec = function() {
        return q.size(0, 0)
    }, q.pG = function(t, i) {
        return !(!t || !i) && (t.width == i.width && t.height == i.height)
    }, q.$l = function(t, i, n, e) {
        switch (arguments.length) {
            case 0:
                this.origin = q.a(0, 0), this.size = q.size(0, 0);
                break;
            case 1:
                if (t) {
                    if (!(t instanceof q.$l)) throw "unknown argument type";
                    this.origin = q.a(t.origin.x, t.origin.y), this.size = q.size(t.size.width, t.size.height)
                } else this.origin = q.a(0, 0), this.size = q.size(0, 0);
                break;
            case 2:
                this.origin = t ? q.a(t.x, t.y) : q.a(0, 0), this.size = i ? q.size(i.width, i.height) : q.size(0, 0);
                break;
            case 4:
                this.origin = q.a(t || 0, i || 0), this.size = q.size(n || 0, e || 0);
                break;
            default:
                throw "unknown argument type"
        }
    }, q.P2 = function(t, i, n, e) {
        return q.log("cc.RectMake will be deprecated sooner or later. Use cc.rect instead."), q.rect(t, i, n, e)
    }, q.rect = function(t, i, n, e) {
        return new q.$l(t, i, n, e)
    }, q.Fa = q.rect, q.uf = function() {
        return q.rect(0, 0, 0, 0)
    }, q.nN = function(t, i) {
        return !(!t || !i) && (q.Sr(t.origin, i.origin) && q.pG(t.size, i.size))
    }, q.Mt = function(t) {
        return !!t && (0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height)
    }, q.Vda = function(t, i) {
        return !(!t || !i) && !(t.x >= i.x || t.y >= i.y || t.x + t.width <= i.x + i.width || t.y + t.height <= i.y + i.height)
    }, q.bp = function(t) {
        return t.x + t.width
    }, q.Wda = function(t) {
        return t.x + t.width / 2
    }, q.Um = function(t) {
        return t.x
    }, q.cp = function(t) {
        return t.y + t.height
    }, q.Xda = function(t) {
        return t.y + t.height / 2
    }, q.Vm = function(t) {
        return t.y
    }, q.tg = function(t, i) {
        return i.x >= q.Um(t) && i.x <= q.bp(t) && i.y >= q.Vm(t) && i.y <= q.cp(t)
    }, q.Zda = function(t, i) {
        return !(q.bp(t) < q.Um(i) || q.bp(i) < q.Um(t) || q.cp(t) < q.Vm(i) || q.cp(i) < q.Vm(t))
    }, q.$da = function(t, i) {
        return !(t.x + t.width < i.x || i.x + i.width < t.x || t.y + t.height < i.y || i.y + i.height < t.y)
    }, q.tZ = function(t, i) {
        var n = q.rect(0, 0, 0, 0);
        return n.x = Math.min(t.x, i.x), n.y = Math.min(t.y, i.y), n.width = Math.max(t.x + t.width, i.x + i.width) - n.x, n.height = Math.max(t.y + t.height, i.y + i.height) - n.y, n
    }, q.Yda = function(t, i) {
        var n = q.rect(Math.max(q.Um(t), q.Um(i)), Math.max(q.Vm(t), q.Vm(i)), 0, 0);
        return n.width = Math.min(q.bp(t), q.bp(i)) - q.Um(n), n.height = Math.min(q.cp(t), q.cp(i)) - q.Vm(n), n
    }, q.$l.prototype.Iu = function() {
        return this.size.width
    }, q.$l.prototype.fO = function(t) {
        this.size.width = t
    }, q.$l.prototype.Gu = function() {
        return this.size.height
    }, Object.defineProperties(q.$l.prototype, {
        x: {
            get: function() {
                return this.origin.x
            },
            set: function(t) {
                this.origin.x = t
            },
            enumerable: !0,
            configurable: !0
        },
        y: {
            get: function() {
                return this.origin.y
            },
            set: function(t) {
                this.origin.y = t
            },
            enumerable: !0,
            configurable: !0
        },
        width: {
            get: function() {
                return this.Iu()
            },
            set: function(t) {
                this.fO(t)
            },
            enumerable: !0,
            configurable: !0
        },
        height: {
            get: function() {
                return this.Gu()
            },
            set: function(t) {
                this.size.height = t
            },
            enumerable: !0,
            configurable: !0
        }
    });
var z = z || {};
try {
    z.localStorage = window.localStorage
} catch (t) {
    "SECURITY_ERR" === t.name && q.log("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option"), z.localStorage = function() {}
}
switch (Object.defineProperties(z, {
    NK: {
        get: function() {
            var t = {
                canvas: !0
            };
            return q.pa.Rc && (t.opengl = !0), "ontouchstart" in document.documentElement || window.navigator.msPointerEnabled ? t.touches = !0 : "onmouseup" in document.documentElement && (t.mouse = !0), "onkeyup" in document.documentElement && (t.keyboard = !0), (window.DeviceMotionEvent || window.DeviceOrientationEvent) && (t.accelerometer = !0), t
        },
        enumerable: !0,
        configurable: !0
    },
    os: {
        get: function() {
            var t = !!navigator.userAgent.match(/(iPad|iPhone|iPod)/i),
                i = !(!navigator.userAgent.match(/android/i) && !navigator.platform.match(/android/i)),
                n = navigator.appVersion;
            return -1 != navigator.appVersion.indexOf("Win") ? n = "Windows" : -1 != navigator.appVersion.indexOf("Mac") ? n = "OS X" : -1 != navigator.appVersion.indexOf("X11") ? n = "UNIX" : -1 != navigator.appVersion.indexOf("Linux") ? n = "Linux" : t ? n = "iOS" : i && (n = "Android"), n
        },
        enumerable: !0,
        configurable: !0
    },
    platform: {
        get: function() {
            return "browser"
        },
        enumerable: !0,
        configurable: !0
    },
    version: {
        get: function() {
            return q.Jv
        },
        enumerable: !0,
        configurable: !0
    }
}), z.B6 = function() {}, z.e6 = function() {}, z.rea = function() {}, q.Jv = "Cocos2d-html5-v2.2", q.$v = 0, q.LG = q.a(0, 0), q.fP = .5, q.q1 = 1, q.VQ = 1, q.pQ = 0, q.QH = 0, q.jB = 0, q.k3 = 0, q.L2 = 1, q.K2 = "-hd", q.tR = 1, q.am = 0, q.b3 = 0, q.TP = 0, q.SP = 0, q.EA = 1, q.y1 = q.Jv + "-canvas", q.wu = {
    platform: z.platform
}, q.d6 = function() {
    for (var t in z) q.log(t + " = " + z[t])
}, q.Iv = 1, q.Ri = 1, q.u = function(t) {
    var i, n = t.constructor ? new t.constructor : {};
    for (i in t) {
        var e = t[i];
        n[i] = "object" != typeof e || !e || e instanceof q.r || e instanceof HTMLElement ? e : q.u(e)
    }
    return n
}, q.h5 = function() {}, q.RG = q.RG || !1, q.iT = function(t) {
    var i = document.getElementById("logInfoList");
    if (!i) {
        var n = document.createElement("Div");
        n.setAttribute("id", "logInfoDiv"), q.canvas.parentNode.appendChild(n), n.setAttribute("width", "300"), n.setAttribute("height", q.canvas.height), n.style.zIndex = "99999", n.style.position = "absolute", n.style.top = "0", n.style.left = "0", i = document.createElement("ul"), n.appendChild(i), i.setAttribute("id", "logInfoList"), i.style.height = "450px", i.style.color = "#fff", i.style.textAlign = "left", i.style.listStyle = "disc outside", i.style.fontSize = "12px", i.style.fontFamily = "arial", i.style.padding = "0 0 0 20px", i.style.margin = "0", i.style.textShadow = "0 0 3px #000", i.style.zIndex = "99998", i.style.position = "absolute", i.style.top = "0", i.style.left = "0", i.style.overflowY = "hidden";
        var e = document.createElement("Div");
        n.appendChild(e), e.style.width = "300px", e.style.height = q.canvas.height + "px", e.style.opacity = "0.1", e.style.background = "#fff", e.style.border = "1px solid #dfdfdf", e.style.borderRadius = "8px"
    }(n = document.createElement("li")).innerHTML = t, 0 == i.childNodes.length ? i.appendChild(n) : i.insertBefore(n, i.childNodes[0])
}, q.log = function(t) {
    q.RG ? q.iT(t) : console.log(t)
}, q.l2 = function(t) {
    console.log(t)
}, q.d = function(t, i) {
    console.assert ? console.assert(t, i) : t || i && alert(i)
}, q.jX = function() {
    0 == q.xp ? (q.log = function() {}, q.DM = function() {}, q.HF = function() {}, q.d = function() {}) : 1 == q.xp ? (q.DM = q.log, q.HF = function() {}) : 1 < q.xp && (q.DM = q.log, q.HF = q.log)
}, q.WP = 0, q.VP = 1, q.XP = 2, q.$P = 3, q.YP = 4, q.gQ = 5, q.fQ = 6, q.bQ = 7, q.aQ = 8, q.ZP = 9, q.eQ = 10, q.UP = 11, q.cQ = 12, q.dQ = 13, q.WK = function(t, i) {
    for (var n = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], e = null, h = 0; h < n.length; ++h) {
        try {
            e = t.getContext(n[h], i)
        } catch (t) {}
        if (e) break
    }
    return e
}, q.pa = {}, function() {
    if (q.pa.yv = navigator.userAgent.toLowerCase(), q.pa.platform = navigator.platform.toLowerCase(), q.pa.sg = -1 != q.pa.yv.indexOf("mobile") || -1 != q.pa.yv.indexOf("android"), q.pa.type = function() {
            var t = q.pa.yv.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baidubrowser|maxthon|ie|opera|firefox/) || q.pa.yv.match(/chrome|safari/);
            return t && 0 < t.length ? "micromessenger" == (t = t[0]) ? "wechat" : t : "unknow"
        }(), q.pa.mode = "ie" == q.pa.type && document.documentMode, document.ccConfig || (document.ccConfig = {}), q.$D = parseInt(document.ccConfig.renderMode) || 0, 1 === q.$D || 0 === q.$D && q.pa.sg) q.pa.Rc = !1;
    else {
        q.pa.Rc = null != window.O3;
        var t = document.createElement("Canvas"),
            t = q.WK(t, {
                stencil: !0,
                preserveDrawingBuffer: !0
            });
        q.pa.Rc = null != t
    }
    2 !== q.$D || q.pa.Rc || (q.FB = !0);
    var i, t = q.pa;
    try {
        i = !!new(window.XO || window.T0 || window.pY)
    } catch (t) {
        i = !1
    }
    t.t0 = i, q.pa.gda = function(t) {
        if (this.sg) {
            var i = (n = q.n.getInstance().Y).width + "px",
                n = n.height + "px",
                e = q.Hk("div");
            e.style.backgroundColor = "#ffffff", e.style.width = i, e.style.height = n, e.style.X0 = 1e3, e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.id = "cocos2d-browser";
            var h = q.Hk("iframe");
            h.src = t, h.style.width = i, h.style.height = n, h.setAttribute("frameborder", "no"), h.setAttribute("scrolling", "no"), e.appendChild(h), h.onload = function() {
                var t = new Image;
                t.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OERBMEM3OUQzRTMxMUUyODg2Q0RFNjU1QkU1RjlFQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OERBMEM3QUQzRTMxMUUyODg2Q0RFNjU1QkU1RjlFQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk4REEwQzc3RDNFMzExRTI4ODZDREU2NTVCRTVGOUVBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk4REEwQzc4RDNFMzExRTI4ODZDREU2NTVCRTVGOUVBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NwBuoAAAA/tJREFUeNrEWF0sW3EUb6+28zFhbGadsBaNhazV+kpDYhFWKRGWbHvwFV5IvPiIFw9evElEPEiWSUgsIWoIglhmUomPxj6aKC0zKVJjtPU5o9j5J7dLdbf33jKc5Jfc3v+v5/+755x7/j1lMoiNBRDh4AO88HvO2m+ACbAC+AJQAyz2JCbBFyMBWQA/xv+3DUAXLuivudhcY4BMwCuAB+NqDPmNAnAAOsCZvQgk4BnjeiwEwAbM2YoQA14yrteQEANgDcML7gXjZgw9OAuJkADu3JAIb7Q/hr+GtCwuLs6LDq+iooLvhBAREhFEl11ZWRne0tIiIeNIpVKv4uJi4dTUVApNt0EY3ohILSIiwqO7u1sql8vD8vLyJJ2dnXH2HDabzczPz3/Y1taWzOfz78XExDxSq9Vyd3d3jMK9F2pWr6lEtLa2RmVnZ4tt7w0NDWlTU1OVtkK7urqSQ0NDzzW5hYWFjcTExAGDwXDkyD+VSkZ7e3tsWlpamP19mUwWplQqk9B1UlKST3NzczxE4K49D4mCiDwn24PyPMjIyHjs6urKIVpLSEgInp6eZsM6Kzw8nEvEMZvNBxC1BbI9KCMhkUgUy8vLRpL1QIFA4EcSyZmcnJzpS4mYnZ3dj46O7p2fn193xIGi/CeiFovlFIp5pqGhYZ5qD1qFiQxCjk1OTsqEQmEAFReloL+/X0sVAadFWE2n02VA+O+TcVZXV01QkO8ODw9P6fjEnO2zvb2936g4XC7XG4rWm65P2iL8/f05kN8nBQUFQkqnGMYcGBjIys3N5dLxjY7ydDrE6urqsNLSUqmbmxuH1tOBkMzMTIHRaNxSqVTmS4soKyvjFRUViTw9PV2dTR901WAOh7M/MjKyeeHCbGpqEhcWFkY5Wl9aWtpUKBRaONziSbsii/Xm5OTk7EIdU6/X7zpaW1xc/Al5HxkfH9/e2dk5rqmpeUrE6+vr06ADzpEIlI5kMjFwPhh5PB5DJBKdK7KDg4Oj2tpaVUdHxw/0eWxszIjyj8Jvy4N60FdVVX2Grnt4dkaowYJESAG3yaLR09Oz5uvrexwbGxuAR2erpKTkI6RqxW5DM6RnLT09PQQV5vDwsDYlJWUU+I4EIDMhEQLAA6q0DA4OrqMCg/c/qL6+XtXY2Kgn4sGJuavRaFbFYrFPeXn5FIj6ReFa64KnIpJOpaMK39vbM9XV1X13lF9kc3Nz+xMTEwZo89s03A4ycRE1N/RjF/WPKgyfDRU39Gu7w1qYyNYAtwDB1yhgGPDBfgzU4bMi7xoEjAI6iWZRdGMGH80Cr2goRlP5W8B7qwBHfw1YO6kEH4yC8EnJ5QKbnuDFh17nr4BPRP9P/BFgAHo7ZNgI9EbHAAAAAElFTkSuQmCC", e.appendChild(t), t.style.X0 = 1e3, t.style.position = "absolute", t.style.bottom = "10px", t.style.right = "10px", t.onclick = function() {
                    e.remove()
                }
            }, (t = document.getElementById(document.ccConfig.tag).parentNode) && t.appendChild(e)
        } else window.open(t)
    }
}(), q.FQ = function() {
    return "undefined" !== q.FB && q.FB
}, q.Sb = function(t) {
    var i = this == q ? document : this;
    return (t = t instanceof HTMLElement ? t : i.querySelector(t)) && (t.find = t.find || q.Sb, t.gF = t.gF || function(t) {
        return this.className.match(RegExp("(\\s|^)" + t + "(\\s|$)"))
    }, t.zK = t.zK || function(t) {
        return this.gF(t) || (this.className && (this.className += " "), this.className += t), this
    }, t.DZ = t.DZ || function(t) {
        return this.gF(t) && (this.className = this.className.replace(t, "")), this
    }, t.remove = t.remove || function() {
        return this.parentNode && this.parentNode.removeChild(this), this
    }, t.Do = t.Do || function(t) {
        return t.appendChild(this), this
    }, t.nZ = t.nZ || function(t) {
        return t.childNodes[0] ? t.insertBefore(this, t.childNodes[0]) : t.appendChild(this), this
    }, t.fn = t.fn || function() {
        return this.style[q.Sb.E0] = q.Sb.translate(this.position) + q.Sb.rotate(this.rotation) + q.Sb.scale(this.scale) + q.Sb.Ql(this.Ql), this
    }, t.position = t.position || {
        x: 0,
        y: 0
    }, t.rotation = t.rotation || 0, t.scale = t.scale || {
        x: 1,
        y: 1
    }, t.Ql = t.Ql || {
        x: 0,
        y: 0
    }, t.wv = function(t, i) {
        this.position.x = t, this.position.y = i, this.fn()
    }, t.rotate = function(t) {
        return this.rotation = t, this.fn(), this
    }, t.resize = function(t, i) {
        return this.scale.x = t, this.scale.y = i, this.fn(), this
    }, t.YN = function(t, i) {
        this.Ql.x = t, this.Ql.y = i, this.fn()
    }), t
}, q.pa.type) {
    case "firefox":
        q.Sb.Rr = "Moz", q.Sb.Ar = !0;
        break;
    case "chrome":
    case "safari":
        q.Sb.Rr = "webkit", q.Sb.Ar = !0;
        break;
    case "opera":
        q.Sb.Rr = "O", q.Sb.Ar = !1;
        break;
    case "ie":
        q.Sb.Rr = "ms", q.Sb.Ar = !1;
        break;
    default:
        q.Sb.Rr = "webkit", q.Sb.Ar = !0
}
if (q.Sb.E0 = q.Sb.Rr + "Transform", q.Sb.translate = q.Sb.Ar ? function(t) {
        return "translate3d(" + t.x + "px, " + t.y + "px, 0) "
    } : function(t) {
        return "translate(" + t.x + "px, " + t.y + "px) "
    }, q.Sb.rotate = q.Sb.Ar ? function(t) {
        return "rotateZ(" + t + "deg) "
    } : function(t) {
        return "rotate(" + t + "deg) "
    }, q.Sb.scale = function(t) {
        return "scale(" + t.x + ", " + t.y + ") "
    }, q.Sb.Ql = function(t) {
        return "skewX(" + -t.x + "deg) skewY(" + t.y + "deg)"
    }, q.Hk = function(t) {
        return q.Sb(document.createElement(t))
    }, q.Sb.x6 = function(t) {
        var i = 0,
            n = 0;
        do {
            i += t.offsetLeft, n += t.offsetTop
        } while (t = t.offsetParent);
        return {
            x: i,
            y: n
        }
    }, q.Pa = {
        name: "Jacob__Codec"
    }, q.K0 = function() {
        return q.Pa.lb.Sy.apply(q.Pa.lb, arguments)
    }, q.L0 = function() {
        var t = q.Pa.mn.aL.apply(q.Pa.mn, arguments);
        return q.Pa.lb.Sy.apply(q.Pa.lb, [t])
    }, q.yO = function(t, i) {
        i = i || 1;
        var n, e, h, s = this.L0(t),
            r = [];
        for (n = 0, h = s.length / i; n < h; n++)
            for (r[n] = 0, e = i - 1; 0 <= e; --e) r[n] += s.charCodeAt(n * i + e) << 8 * e;
        return r
    }, q.Sha = function(t, i) {
        i = i || 1;
        var n, e, h, s = this.K0(t),
            r = [];
        for (n = 0, h = s.length / i; n < h; n++)
            for (r[n] = 0, e = i - 1; 0 <= e; --e) r[n] += s.charCodeAt(n * i + e) << 8 * e;
        return r
    }, q.j3 = function(t) {
        t = t.split(",");
        var i, n = [];
        for (i = 0; i < t.length; i++) n.push(parseInt(t[i]));
        return n
    }, q.Pa.mn = {
        name: "Jacob__Codec__Base64"
    }, q.Pa.mn.zx = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", q.Pa.mn.aL = function(t) {
        var i, n, e, h, s, r = [],
            a = 0;
        for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); a < t.length;) i = this.zx.indexOf(t.charAt(a++)), n = this.zx.indexOf(t.charAt(a++)), h = this.zx.indexOf(t.charAt(a++)), s = this.zx.indexOf(t.charAt(a++)), i = i << 2 | n >> 4, n = (15 & n) << 4 | h >> 2, e = (3 & h) << 6 | s, r.push(String.fromCharCode(i)), 64 != h && r.push(String.fromCharCode(n)), 64 != s && r.push(String.fromCharCode(e));
        return r = r.join("")
    }, q.Pa.mn.bL = function(t, i) {
        var n, e, h, s = this.aL(t),
            r = [];
        for (n = 0, h = s.length / i; n < h; n++)
            for (r[n] = 0, e = i - 1; 0 <= e; --e) r[n] += s.charCodeAt(n * i + e) << 8 * e;
        return r
    }, q.F0 = function(t) {
        if (0 != t.length % 4) return null;
        for (var i = t.length / 4, n = window.H3 ? new Uint32Array(i) : [], e = 0; e < i; e++) {
            var h = 4 * e;
            n[e] = t[h] + 256 * t[h + 1] + 65536 * t[h + 2] + 16777216 * t[h + 3]
        }
        return n
    }, q.Pa.lb = function(t) {
        this.data = t, this.debug = !1, this.zl = void 0, this.files = 0, this.lA = [], this.wE = Array(32768), this.qj = 0, this.yz = !1, this.JK = 0, this.nk = 1, this.dr = 0, this.Kr = [], this.uL = void 0, this.Yu = Array(q.Pa.lb.hQ), this.Jo = Array(32), this.xv = 0, this.OA = null, this.yj = 0, this.qr = Array(17), this.qr[0] = 0, this.zL = this.yL = void 0
    }, q.Pa.lb.Sy = function(t) {
        return new q.Pa.lb(t).Sy()[0][0]
    }, q.Pa.lb.DA = function() {
        this.vy = this.uy = 0, this.xF = null, this.HX = -1
    }, q.Pa.lb.hQ = 288, q.Pa.lb.eH = 256, q.Pa.lb.uE = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 3, 131, 67, 195, 35, 163, 99, 227, 19, 147, 83, 211, 51, 179, 115, 243, 11, 139, 75, 203, 43, 171, 107, 235, 27, 155, 91, 219, 59, 187, 123, 251, 7, 135, 71, 199, 39, 167, 103, 231, 23, 151, 87, 215, 55, 183, 119, 247, 15, 143, 79, 207, 47, 175, 111, 239, 31, 159, 95, 223, 63, 191, 127, 255], q.Pa.lb.UK = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], q.Pa.lb.VK = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], q.Pa.lb.TK = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], q.Pa.lb.hr = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], q.Pa.lb.border = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], q.Pa.lb.prototype.Sy = function() {
        return this.bv = [], ba(this), this.lA
    }, q.W1 = -1, q.PI = Math.PI, q.sP = parseFloat("3.402823466e+38F"), q.BQ = q.PI / 180, q.eP = 180 / q.PI, q.BI = 4294967295, q.c3 = function(t, i, n) {
        if ("object" == typeof n && void 0 !== n.x && void 0 !== n.y) {
            var e = n[t];
            n[t] = n[i], n[i] = e
        } else q.d(!1, "CC_SWAP is being modified from original macro, please check usage")
    }, q.iY = function(t) {
        return t + .5 * (1 - t)
    }, q.CQ = function() {
        return 2 * (Math.random() - .5)
    }, q.Hp = function() {
        return Math.random()
    }, q.Bg = function(t) {
        return t * q.BQ
    }, q.Gp = function(t) {
        return t * q.eP
    }, q.As = Number.MAX_VALUE - 1, q.Wc = q.pQ ? 1 : 770, q.Vc = 771, q.xs = function(t) {
        t.Wb && (t.Wb.Fd(), t.Wb.wg())
    }, q.I1 = function() {}, q.E1 = function() {}, q.hh = function() {
        q.Rh += 1
    }, q.aw = 1.192092896e-7, q.ua = q.EA ? function() {
        return q.n.getInstance().ph
    } : function() {
        return 1
    }, q.xQ = function(t) {
        return q.a(t.x * q.ua(), t.y * q.ua())
    }, q.aB = function(t) {
        return q.size(t.width * q.ua(), t.height * q.ua())
    }, q.Ds = function(t) {
        return q.size(t.width / q.ua(), t.height / q.ua())
    }, q.rn = function(t) {
        return q.a(t.x / q.ua(), t.y / q.ua())
    }, q.Mj = q.EA ? function(t) {
        return q.rect(t.x / q.ua(), t.y / q.ua(), t.width / q.ua(), t.height / q.ua())
    } : function(t) {
        return t
    }, q.nw = q.EA ? function(t) {
        return q.rect(t.x * q.ua(), t.y * q.ua(), t.width * q.ua(), t.height * q.ua())
    } : function(t) {
        return t
    }, !q.pa.Rc) var oa = oa || {};
q.Hv = function() {
    var t = q.q.getError();
    t && q.log("WebGL error " + t)
}, q.U2 = 0, q.T2 = 1, q.R2 = 2, q.S2 = 3, q.V2 = 4, q.W2 = 5, q.Q2 = 6;
var Uint8Array = Uint8Array || Array;
if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
    var pa = document.createElement("script");
    pa.type = "text/vbscript", pa.textContent = '\x3c!-- IEBinaryToArray_ByteStr --\x3e\r\nFunction IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr = CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex = LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last = ""\r\n   End If\r\nEnd Function\r\n', document.body.appendChild(pa), q.bJ = function(t) {
        for (var i = {}, n = 0; 256 > n; n++)
            for (var e = 0; 256 > e; e++) i[String.fromCharCode(n + 256 * e)] = String.fromCharCode(n) + String.fromCharCode(e);
        return n = IEBinaryToArray_ByteStr(t), t = IEBinaryToArray_ByteStr_Last(t), n.replace(/[\s\S]/g, function(t) {
            return i[t]
        }) + t
    }
}
q.Yc = q.ca.extend({
        Wk: null,
        ro: null,
        kS: null,
        sC: null,
        Lq: null,
        lj: null,
        ct: "",
        ctor: function() {
            this.Wk = {}, this.ro = {}, this.lj = [], this.lj.push(this.ct), this.Lq = [], this.Lq.push("")
        },
        Pda: function() {
            this.lj = []
        },
        Q6: function(t) {
            return t = this.ee(t), this.Wk.hasOwnProperty(t) ? this.Wk[t] : this.eT(t)
        },
        qx: function() {
            return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
        },
        G0: function(t) {
            this.Wk.hasOwnProperty(t) && delete this.Wk[t]
        },
        iZ: function(t) {
            t = this.ee(t);
            var i = this,
                n = this.qx();
            n.open("GET", t, !0), /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (n.setRequestHeader("Accept-Charset", "x-user-defined"), n.onreadystatechange = function() {
                if (4 == n.readyState) {
                    if (200 == n.status) {
                        var e = q.bJ(n.responseBody);
                        e && (i.Wk[t] = i.dy(e))
                    } else q.Kb.getInstance().Qm(t);
                    q.Kb.getInstance().$h()
                }
            }) : (n.overrideMimeType && n.overrideMimeType("text/plain; charset=x-user-defined"), n.onreadystatechange = function() {
                if (4 == n.readyState) {
                    if (200 == n.status) {
                        var e = n.responseText;
                        e && (i.Wk[t] = i.dy(e))
                    } else q.Kb.getInstance().Qm(t);
                    q.Kb.getInstance().$h()
                }
            }), n.send(null)
        },
        eT: function(t) {
            var i = this.qx();
            i.open("GET", t, !1);
            var n = null;
            if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
                if (i.setRequestHeader("Accept-Charset", "x-user-defined"), i.send(null), 200 != i.status) return null;
                (i = q.bJ(i.responseBody)) && (n = this.dy(i), this.Wk[t] = n)
            } else {
                if (i.overrideMimeType && i.overrideMimeType("text/plain; charset=x-user-defined"), i.send(null), 200 != i.status) return null;
                n = this.dy(i.responseText), this.Wk[t] = n
            }
            return n
        },
        dy: function(t) {
            if (!t) return null;
            for (var i = new Uint8Array(t.length), n = 0; n < t.length; n++) i[n] = 255 & t.charCodeAt(n);
            return i
        },
        I0: function(t) {
            this.ro.hasOwnProperty(t) && delete this.ro[t]
        },
        mZ: function(t) {
            t = this.ee(t);
            var i = this,
                n = this.qx();
            n.open("GET", t, !0), /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? n.setRequestHeader("Accept-Charset", "utf-8") : n.overrideMimeType && n.overrideMimeType("text/plain; charset=utf-8"), n.onreadystatechange = function() {
                if (4 == n.readyState) {
                    if (200 == n.status) {
                        var e = n.responseText;
                        e && (i.ro[t] = e)
                    } else q.Kb.getInstance().Qm(t);
                    q.Kb.getInstance().$h()
                }
            }, n.send(null)
        },
        hT: function(t) {
            var i = this.qx();
            i.open("GET", t, !1);
            var n = null;
            return /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? i.setRequestHeader("Accept-Charset", "utf-8") : i.overrideMimeType && i.overrideMimeType("text/plain; charset=utf-8"), i.send(null), 200 != i.status ? null : ((n = i.responseText) && (this.ro[t] = n), n)
        },
        $E: function(t) {
            return this.ro.hasOwnProperty(t) ? this.ro[t] : this.hT(t)
        },
        I7: function() {},
        pea: function() {},
        iN: !0,
        A6: function(t) {
            return t
        },
        ee: function(t) {
            var i, n = !1;
            if ((t = this.DS(t)) && 1 < t.length && 1 == t.indexOf(":")) return t;
            for (var e = 0; e < this.lj.length; e++) {
                for (var h = this.lj[e], s = 0; s < this.Lq.length; s++)
                    if (i = this.ES(t, this.Lq[s], h)) {
                        n = !0;
                        break
                    }
                if (n) break
            }
            return n ? i : t
        },
        Cca: function(t) {
            if (0 < (i = this.ee(t)).length) {
                var i = q.Si.getInstance().parse(i),
                    n = parseInt(i.metadata.version);
                1 != n ? q.log("cocos2d: ERROR: Invalid filenameLookup dictionary version: " + n + ". Filename: " + t) : this.w_(i.filenames)
            }
        },
        w_: function(t) {
            this.sC = t
        },
        Ny: function(t, i) {
            return t ? i.substring(0, i.lastIndexOf("/") + 1) + t : i.substring(0, i.lastIndexOf(".")) + ".png"
        },
        xga: function(t) {
            this.Lq = t
        },
        t9: function() {
            return this.Lq
        },
        vga: function(t) {
            this.lj = t
        },
        r9: function() {
            return this.lj
        },
        g9: function() {
            return this.kS
        },
        nga: function() {},
        S5: function(t) {
            return q.log("dictionaryWithContentsOfFile is deprecated. Use createDictionaryWithContentsOfFile instead"), this.OV(t)
        },
        OV: function(t) {
            return q.Si.getInstance().parse(t)
        },
        R9: function(t) {
            return this.$E(t)
        },
        mr: function(t) {
            return q.Si.getInstance().parse(t)
        },
        C$: function() {
            return ""
        },
        fga: function(t) {
            q.iN = t
        },
        saa: function() {
            return q.iN
        },
        AD: "",
        h9: function() {
            return this.AD
        },
        oga: function(t) {
            this.AD = t
        },
        DS: function(t) {
            var i = null;
            return (i = this.sC ? this.sC[t] : null) && 0 !== i.length ? q.log("FOUND NEW FILE NAME: " + i) : i = t, i
        },
        ES: function(t, i, n) {
            var e;
            e = this.AD, t && 0 < t.length && (0 === t.indexOf("/") || 0 === t.indexOf("\\")) ? e = "" : 0 < e.length && "\\" != e[e.length - 1] && "/" != e[e.length - 1] && (e += "/");
            var h = t,
                s = "",
                r = t.lastIndexOf("/");
            return -1 != r && (s = t.substr(0, r + 1), h = t.substr(r + 1)), 0 < (t = n).length && t.lastIndexOf("/") !== t.length - 1 && (t += "/"), 0 < (t = t + s + i).length && t.lastIndexOf("/") !== t.length - 1 && (t += "/"), t += h, e += t
        },
        f4: function() {},
        wga: function(t) {
            var i = !1;
            this.lj = [];
            for (var n = 0; n < t.length; n++) {
                var e, h = t[n];
                this.gM(h) || (e = this.ct), 0 < (h = e + h).length && "/" != h[h.length - 1] && (h += "/"), i || h != this.ct || (i = !0), this.lj.push(h)
            }
            i || this.lj.push(this.ct)
        },
        U4: function(t) {
            var i;
            this.gM(t) || (i = this.ct), 0 < (t = i + t).length && "/" != t[t.length - 1] && (t += "/"), this.lj.push(t)
        },
        s9: function() {},
        gM: function(t) {
            return "/" == t[0]
        }
    }), q.$F = null, q.Yc.getInstance = function() {
        return null == q.$F && (q.$F = new q.Yc), q.$F
    }, q.oc = function(t, i, n) {
        switch (arguments.length) {
            case 0:
                this.c = this.f = this.h = 0;
                break;
            case 1:
                t && t instanceof q.oc ? (this.h = 0 | t.h || 0, this.f = 0 | t.f || 0, this.c = 0 | t.c || 0) : this.c = this.f = this.h = 0;
                break;
            case 3:
                this.h = 0 | t || 0, this.f = 0 | i || 0, this.c = 0 | n || 0;
                break;
            default:
                throw "unknown argument type"
        }
    }, q.Qe = function(t, i, n) {
        return new q.oc(t, i, n)
    }, q.$$ = function(t) {
        t = t || 0;
        var i = new q.oc;
        return i.h = 255 & t, i.f = t >> 8 & 255, i.c = t >> 16 & 255, i
    }, q.KK = q.Qe, q.n5 = function(t, i) {
        return t.h === i.h && t.f === i.f && t.c === i.c
    }, Object.defineProperties(q, {
        Rs: {
            get: function() {
                return q.Qe(255, 255, 255)
            }
        },
        P3: {
            get: function() {
                return q.Qe(255, 255, 0)
            }
        },
        n1: {
            get: function() {
                return q.Qe(0, 0, 255)
            }
        },
        O1: {
            get: function() {
                return q.Qe(0, 255, 0)
            }
        },
        J2: {
            get: function() {
                return q.Qe(255, 0, 0)
            }
        },
        d2: {
            get: function() {
                return q.Qe(255, 0, 255)
            }
        },
        k1: {
            get: function() {
                return q.Qe(0, 0, 0)
            }
        },
        s2: {
            get: function() {
                return q.Qe(255, 127, 0)
            }
        },
        N1: {
            get: function() {
                return q.Qe(166, 166, 166)
            }
        }
    }), q.zg = function() {
        return new q.oc(255, 255, 255)
    }, q.eia = function() {
        return new q.oc(255, 255, 0)
    }, q.blue = function() {
        return new q.oc(0, 0, 255)
    }, q.green = function() {
        return new q.oc(0, 255, 0)
    }, q.red = function() {
        return new q.oc(255, 0, 0)
    }, q.Fca = function() {
        return new q.oc(255, 0, 255)
    }, q.AV = function() {
        return new q.oc(0, 0, 0)
    }, q.ida = function() {
        return new q.oc(255, 127, 0)
    }, q.L$ = function() {
        return new q.oc(166, 166, 166)
    }, q.Fb = function(t, i, n, e) {
        this.h = 0 | t, this.f = 0 | i, this.c = 0 | n, this.e = 0 | e
    }, q.er = function(t, i, n, e) {
        return new q.Fb(t, i, n, e)
    }, q.Ay = q.er, q.Jc = function(t, i, n, e) {
        this.h = t, this.f = i, this.c = n, this.e = e
    }, q.sl = function(t, i, n, e) {
        return new q.Jc(t, i, n, e)
    }, q.By = function(t) {
        return new q.Jc(t.h / 255, t.f / 255, t.c / 255, 1)
    }, q.q5 = function(t) {
        return new q.Jc(t.h / 255, t.f / 255, t.c / 255, t.e / 255)
    }, q.o5 = function(t) {
        return new q.Fb(0 | 255 * t.h, 0 | 255 * t.f, 0 | 255 * t.c, 0 | 255 * t.e)
    }, q.p5 = function(t, i) {
        return t.h == i.h && t.f == i.f && t.c == i.c && t.e == i.e
    }, q.Ob = function(t, i) {
        this.x = t || 0, this.y = i || 0
    }, q.Qw = function(t, i) {
        return new q.Ob(t, i)
    }, q.Pb = function(t, i, n) {
        this.x = t || 0, this.y = i || 0, this.z = n || 0
    }, q.bia = function(t, i, n) {
        return new q.Pb(t, i, n)
    }, q.$c = function(t, i) {
        this.Oa = t || 0, this.Ia = i || 0
    }, q.Nha = function(t, i) {
        return new q.$c(t, i)
    }, q.G2 = function(t, i, n) {
        this.qb = t || new q.Ob(0, 0), this.color = i || new q.Fb(0, 0, 0, 0), this.size = n || 0
    }, q.lw = function(t, i, n, e) {
        this.R = t || new q.Ob(0, 0), this.N = i || new q.Ob(0, 0), this.K = n || new q.Ob(0, 0), this.S = e || new q.Ob(0, 0)
    }, q.mw = function(t, i, n, e) {
        this.K = t || new q.Pb(0, 0, 0), this.S = i || new q.Pb(0, 0, 0), this.R = n || new q.Pb(0, 0, 0), this.N = e || new q.Pb(0, 0, 0)
    }, q.AP = function(t, i) {
        this.x = t, this.y = i
    }, q.f = function(t, i) {
        return new q.AP(t, i)
    }, q.gc = function(t, i, n) {
        this.k = t || new q.Ob(0, 0), this.s = i || new q.Fb(0, 0, 0, 0), this.p = n || new q.$c(0, 0)
    }, q.Nw = function() {
        this.k = new q.Ob(0, 0), this.s = new q.Jc(0, 0, 0, 0), this.p = new q.$c(0, 0)
    }, q.Lc = function(t, i, n) {
        this.k = t || new q.Pb(0, 0, 0), this.s = i || new q.Fb(0, 0, 0, 0), this.p = n || new q.$c(0, 0)
    }, q.hd = function(t, i, n) {
        this.e = t || new q.gc, this.c = i || new q.gc, this.G = n || new q.gc
    }, q.uR = function() {
        var t = new q.gc(new q.Ob(0, 0), new q.Fb(0, 0, 0, 255), new q.$c(0, 0)),
            i = new q.gc(new q.Ob(0, 0), new q.Fb(0, 0, 0, 255), new q.$c(0, 0)),
            n = new q.gc(new q.Ob(0, 0), new q.Fb(0, 0, 0, 255), new q.$c(0, 0)),
            e = new q.gc(new q.Ob(0, 0), new q.Fb(0, 0, 0, 255), new q.$c(0, 0));
        this.K = t || new q.gc, this.S = i || new q.gc, this.R = n || new q.gc, this.N = e || new q.gc
    }, q.I3 = function() {
        return new q.uR
    }, q.Yb = function(t, i, n, e) {
        this.R = t || new q.Lc, this.K = i || new q.Lc, this.N = n || new q.Lc, this.S = e || new q.Lc
    }, q.Ow = function() {
        return new q.Yb(new q.Lc(new q.Pb(0, 0, 0), new q.Fb(0, 0, 0, 255), new q.$c(0, 0)), new q.Lc(new q.Pb(0, 0, 0), new q.Fb(0, 0, 0, 255), new q.$c(0, 0)), new q.Lc(new q.Pb(0, 0, 0), new q.Fb(0, 0, 0, 255), new q.$c(0, 0)), new q.Lc(new q.Pb(0, 0, 0), new q.Fb(0, 0, 0, 255), new q.$c(0, 0)))
    }, q.AB = function(t) {
        return t ? new q.Yb(new q.Lc(new q.Pb(t.R.k.x, t.R.k.y, t.R.k.z), new q.Fb(t.R.s.h, t.R.s.f, t.R.s.c, t.R.s.e), new q.$c(t.R.p.Oa, t.R.p.Ia)), new q.Lc(new q.Pb(t.K.k.x, t.K.k.y, t.K.k.z), new q.Fb(t.K.s.h, t.K.s.f, t.K.s.c, t.K.s.e), new q.$c(t.K.p.Oa, t.K.p.Ia)), new q.Lc(new q.Pb(t.N.k.x, t.N.k.y, t.N.k.z), new q.Fb(t.N.s.h, t.N.s.f, t.N.s.c, t.N.s.e), new q.$c(t.N.p.Oa, t.N.p.Ia)), new q.Lc(new q.Pb(t.S.k.x, t.S.k.y, t.S.k.z), new q.Fb(t.S.s.h, t.S.s.f, t.S.s.c, t.S.s.e), new q.$c(t.S.p.Oa, t.S.p.Ia))) : q.Ow()
    }, q.K3 = function(t) {
        if (!t) return [];
        for (var i = [], n = 0; n < t.length; n++) i.push(q.AB(t[n]));
        return i
    }, q.J3 = function(t, i, n, e) {
        this.K = t || new q.Nw, this.S = i || new q.Nw, this.R = n || new q.Nw, this.N = e || new q.Nw
    }, q.Wl = function(t, i) {
        this.src = t, this.sa = i
    }, q.o1 = function() {
        return new q.Wl(1, 0)
    }, q.C5 = function(t) {
        var i = t.h.toString(16),
            n = t.f.toString(16),
            e = t.c.toString(16);
        return "#" + (16 > t.h ? "0" + i : i) + (16 > t.f ? "0" + n : n) + (16 > t.c ? "0" + e : e)
    }, q.pa.Rc && (q.Fb = function(t, i, n, e, h, s) {
        this.$b = h || new ArrayBuffer(q.Fb.BYTES_PER_ELEMENT), this.Hb = s || 0, h = this.$b, s = this.Hb;
        var r = Uint8Array.BYTES_PER_ELEMENT;
        this.tD = new Uint8Array(h, s, 1), this.yC = new Uint8Array(h, s + r, 1), this.OB = new Uint8Array(h, s + 2 * r, 1), this.HB = new Uint8Array(h, s + 3 * r, 1), this.tD[0] = t || 0, this.yC[0] = i || 0, this.OB[0] = n || 0, this.HB[0] = e || 0
    }, q.Fb.BYTES_PER_ELEMENT = 4, Object.defineProperties(q.Fb.prototype, {
        h: {
            get: function() {
                return this.tD[0]
            },
            set: function(t) {
                this.tD[0] = t
            },
            enumerable: !0
        },
        f: {
            get: function() {
                return this.yC[0]
            },
            set: function(t) {
                this.yC[0] = t
            },
            enumerable: !0
        },
        c: {
            get: function() {
                return this.OB[0]
            },
            set: function(t) {
                this.OB[0] = t
            },
            enumerable: !0
        },
        e: {
            get: function() {
                return this.HB[0]
            },
            set: function(t) {
                this.HB[0] = t
            },
            enumerable: !0
        }
    }), q.Jc = function(t, i, n, e, h, s) {
        this.$b = h || new ArrayBuffer(q.Jc.BYTES_PER_ELEMENT), this.Hb = s || 0, h = this.$b, s = this.Hb;
        var r = Float32Array.BYTES_PER_ELEMENT;
        this.sD = new Float32Array(h, s, 1), this.sD[0] = t || 0, this.xC = new Float32Array(h, s + r, 1), this.xC[0] = i || 0, this.NB = new Float32Array(h, s + 2 * r, 1), this.NB[0] = n || 0, this.GB = new Float32Array(h, s + 3 * r, 1), this.GB[0] = e || 0
    }, q.Jc.BYTES_PER_ELEMENT = 16, Object.defineProperties(q.Jc.prototype, {
        h: {
            get: function() {
                return this.sD[0]
            },
            set: function(t) {
                this.sD[0] = t
            },
            enumerable: !0
        },
        f: {
            get: function() {
                return this.xC[0]
            },
            set: function(t) {
                this.xC[0] = t
            },
            enumerable: !0
        },
        c: {
            get: function() {
                return this.NB[0]
            },
            set: function(t) {
                this.NB[0] = t
            },
            enumerable: !0
        },
        e: {
            get: function() {
                return this.GB[0]
            },
            set: function(t) {
                this.GB[0] = t
            },
            enumerable: !0
        }
    }), q.Ob = function(t, i, n, e) {
        this.$b = n || new ArrayBuffer(q.Ob.BYTES_PER_ELEMENT), this.Hb = e || 0, this.zo = new Float32Array(this.$b, this.Hb, 1), this.Ao = new Float32Array(this.$b, this.Hb + 4, 1), this.zo[0] = t || 0, this.Ao[0] = i || 0
    }, q.Ob.BYTES_PER_ELEMENT = 8, Object.defineProperties(q.Ob.prototype, {
        x: {
            get: function() {
                return this.zo[0]
            },
            set: function(t) {
                this.zo[0] = t
            },
            enumerable: !0
        },
        y: {
            get: function() {
                return this.Ao[0]
            },
            set: function(t) {
                this.Ao[0] = t
            },
            enumerable: !0
        }
    }), q.Pb = function(t, i, n, e, h) {
        this.$b = e || new ArrayBuffer(q.Pb.BYTES_PER_ELEMENT), this.Hb = h || 0, e = this.$b, h = this.Hb, this.zo = new Float32Array(e, h, 1), this.zo[0] = t || 0, this.Ao = new Float32Array(e, h + Float32Array.BYTES_PER_ELEMENT, 1), this.Ao[0] = i || 0, this.lE = new Float32Array(e, h + 2 * Float32Array.BYTES_PER_ELEMENT, 1), this.lE[0] = n || 0
    }, q.Pb.BYTES_PER_ELEMENT = 12, Object.defineProperties(q.Pb.prototype, {
        x: {
            get: function() {
                return this.zo[0]
            },
            set: function(t) {
                this.zo[0] = t
            },
            enumerable: !0
        },
        y: {
            get: function() {
                return this.Ao[0]
            },
            set: function(t) {
                this.Ao[0] = t
            },
            enumerable: !0
        },
        z: {
            get: function() {
                return this.lE[0]
            },
            set: function(t) {
                this.lE[0] = t
            },
            enumerable: !0
        }
    }), q.$c = function(t, i, n, e) {
        this.$b = n || new ArrayBuffer(q.$c.BYTES_PER_ELEMENT), this.Hb = e || 0, this.UD = new Float32Array(this.$b, this.Hb, 1), this.aE = new Float32Array(this.$b, this.Hb + 4, 1), this.UD[0] = t || 0, this.aE[0] = i || 0
    }, q.$c.BYTES_PER_ELEMENT = 8, Object.defineProperties(q.$c.prototype, {
        Oa: {
            get: function() {
                return this.UD[0]
            },
            set: function(t) {
                this.UD[0] = t
            },
            enumerable: !0
        },
        Ia: {
            get: function() {
                return this.aE[0]
            },
            set: function(t) {
                this.aE[0] = t
            },
            enumerable: !0
        }
    }), q.lw = function(t, i, n, e, h, s) {
        this.$b = h || new ArrayBuffer(q.lw.BYTES_PER_ELEMENT), this.Hb = s || 0, h = this.$b, s = q.Ob.BYTES_PER_ELEMENT, this.Zq = t ? new q.Ob(t.x, t.y, h, 0) : new q.Ob(0, 0, h, 0), this.$q = i ? new q.Ob(i.x, i.y, h, s) : new q.Ob(0, 0, h, s), this.Wp = n ? new q.Ob(n.x, n.y, h, 2 * s) : new q.Ob(0, 0, h, 2 * s), this.$p = e ? new q.Ob(e.x, e.y, h, 3 * s) : new q.Ob(0, 0, h, 3 * s)
    }, q.lw.BYTES_PER_ELEMENT = 32, Object.defineProperties(q.lw.prototype, {
        R: {
            get: function() {
                return this.Zq
            },
            set: function(t) {
                this.Zq.x = t.x, this.Zq.y = t.y
            },
            enumerable: !0
        },
        N: {
            get: function() {
                return this.$q
            },
            set: function(t) {
                this.$q.x = t.x, this.$q.y = t.y
            },
            enumerable: !0
        },
        K: {
            get: function() {
                return this.Wp
            },
            set: function(t) {
                this.Wp.x = t.x, this.Wp.y = t.y
            },
            enumerable: !0
        },
        S: {
            get: function() {
                return this.$p
            },
            set: function(t) {
                this.$p.x = t.x, this.$p.y = t.y
            },
            enumerable: !0
        }
    }), q.Lc = function(t, i, n, e, h) {
        this.$b = e || new ArrayBuffer(q.Lc.BYTES_PER_ELEMENT), this.Hb = h || 0, e = this.$b, h = this.Hb;
        var s = q.Pb.BYTES_PER_ELEMENT;
        this.tb = t ? new q.Pb(t.x, t.y, t.z, e, h) : new q.Pb(0, 0, 0, e, h), this.at = i ? new q.Fb(i.h, i.f, i.c, i.e, e, h + s) : new q.Fb(0, 0, 0, 0, e, h + s), this.Jh = n ? new q.$c(n.Oa, n.Ia, e, h + s + q.Fb.BYTES_PER_ELEMENT) : new q.$c(0, 0, e, h + s + q.Fb.BYTES_PER_ELEMENT)
    }, q.Lc.BYTES_PER_ELEMENT = 24, Object.defineProperties(q.Lc.prototype, {
        k: {
            get: function() {
                return this.tb
            },
            set: function(t) {
                var i = this.tb;
                i.x = t.x, i.y = t.y, i.z = t.z
            },
            enumerable: !0
        },
        s: {
            get: function() {
                return this.at
            },
            set: function(t) {
                var i = this.at;
                i.h = t.h, i.f = t.f, i.c = t.c, i.e = t.e
            },
            enumerable: !0
        },
        p: {
            get: function() {
                return this.Jh
            },
            set: function(t) {
                this.Jh.Oa = t.Oa, this.Jh.Ia = t.Ia
            },
            enumerable: !0
        }
    }), q.Yb = function(t, i, n, e, h, s) {
        this.$b = h || new ArrayBuffer(q.Yb.BYTES_PER_ELEMENT), this.Hb = s || 0, h = this.$b, s = this.Hb;
        var r = q.Lc.BYTES_PER_ELEMENT;
        this.Zq = t ? new q.Lc(t.k, t.s, t.p, h, s) : new q.Lc(null, null, null, h, s), this.Wp = i ? new q.Lc(i.k, i.s, i.p, h, s + r) : new q.Lc(null, null, null, h, s + r), this.$q = n ? new q.Lc(n.k, n.s, n.p, h, s + 2 * r) : new q.Lc(null, null, null, h, s + 2 * r), this.$p = e ? new q.Lc(e.k, e.s, e.p, h, s + 3 * r) : new q.Lc(null, null, null, h, s + 3 * r)
    }, q.Yb.BYTES_PER_ELEMENT = 96, Object.defineProperties(q.Yb.prototype, {
        R: {
            get: function() {
                return this.Zq
            },
            set: function(t) {
                var i = this.Zq;
                i.k = t.k, i.s = t.s, i.p = t.p
            },
            enumerable: !0
        },
        K: {
            get: function() {
                return this.Wp
            },
            set: function(t) {
                var i = this.Wp;
                i.k = t.k, i.s = t.s, i.p = t.p
            },
            enumerable: !0
        },
        N: {
            get: function() {
                return this.$q
            },
            set: function(t) {
                var i = this.$q;
                i.k = t.k, i.s = t.s, i.p = t.p
            },
            enumerable: !0
        },
        S: {
            get: function() {
                return this.$p
            },
            set: function(t) {
                var i = this.$p;
                i.k = t.k, i.s = t.s, i.p = t.p
            },
            enumerable: !0
        },
        sE: {
            get: function() {
                return this.$b
            },
            enumerable: !0
        }
    }), q.Ow = function() {
        return new q.Yb
    }, q.AB = function(t) {
        if (!t) return q.Ow();
        var i = t.R,
            n = t.K,
            e = t.N;
        return t = t.S, {
            R: {
                k: {
                    x: i.k.x,
                    y: i.k.y,
                    z: i.k.z
                },
                s: {
                    h: i.s.h,
                    f: i.s.f,
                    c: i.s.c,
                    e: i.s.e
                },
                p: {
                    Oa: i.p.Oa,
                    Ia: i.p.Ia
                }
            },
            K: {
                k: {
                    x: n.k.x,
                    y: n.k.y,
                    z: n.k.z
                },
                s: {
                    h: n.s.h,
                    f: n.s.f,
                    c: n.s.c,
                    e: n.s.e
                },
                p: {
                    Oa: n.p.Oa,
                    Ia: n.p.Ia
                }
            },
            N: {
                k: {
                    x: e.k.x,
                    y: e.k.y,
                    z: e.k.z
                },
                s: {
                    h: e.s.h,
                    f: e.s.f,
                    c: e.s.c,
                    e: e.s.e
                },
                p: {
                    Oa: e.p.Oa,
                    Ia: e.p.Ia
                }
            },
            S: {
                k: {
                    x: t.k.x,
                    y: t.k.y,
                    z: t.k.z
                },
                s: {
                    h: t.s.h,
                    f: t.s.f,
                    c: t.s.c,
                    e: t.s.e
                },
                p: {
                    Oa: t.p.Oa,
                    Ia: t.p.Ia
                }
            }
        }
    }, q.gc = function(t, i, n, e, h) {
        this.$b = e || new ArrayBuffer(q.gc.BYTES_PER_ELEMENT), this.Hb = h || 0, e = this.$b, h = this.Hb;
        var s = q.Ob.BYTES_PER_ELEMENT;
        this.tb = t ? new q.Ob(t.x, t.y, e, h) : new q.Ob(0, 0, e, h), this.at = i ? new q.Fb(i.h, i.f, i.c, i.e, e, h + s) : new q.Fb(0, 0, 0, 0, e, h + s), this.Jh = n ? new q.$c(n.Oa, n.Ia, e, h + s + q.Fb.BYTES_PER_ELEMENT) : new q.$c(0, 0, e, h + s + q.Fb.BYTES_PER_ELEMENT)
    }, q.gc.BYTES_PER_ELEMENT = 20, Object.defineProperties(q.gc.prototype, {
        k: {
            get: function() {
                return this.tb
            },
            set: function(t) {
                this.tb.x = t.x, this.tb.y = t.y
            },
            enumerable: !0
        },
        s: {
            get: function() {
                return this.at
            },
            set: function(t) {
                var i = this.at;
                i.h = t.h, i.f = t.f, i.c = t.c, i.e = t.e
            },
            enumerable: !0
        },
        p: {
            get: function() {
                return this.Jh
            },
            set: function(t) {
                this.Jh.Oa = t.Oa, this.Jh.Ia = t.Ia
            },
            enumerable: !0
        }
    }), q.hd = function(t, i, n, e, h) {
        this.$b = e || new ArrayBuffer(q.hd.BYTES_PER_ELEMENT), this.Hb = h || 0, e = this.$b, h = this.Hb;
        var s = q.gc.BYTES_PER_ELEMENT;
        this.JI = t ? new q.gc(t.k, t.s, t.p, e, h) : new q.gc(null, null, null, e, h), this.OI = i ? new q.gc(i.k, i.s, i.p, e, h + s) : new q.gc(null, null, null, e, h + s), this.UI = n ? new q.gc(n.k, n.s, n.p, e, h + 2 * s) : new q.gc(null, null, null, e, h + 2 * s)
    }, q.hd.BYTES_PER_ELEMENT = 60, Object.defineProperties(q.hd.prototype, {
        e: {
            get: function() {
                return this.JI
            },
            set: function(t) {
                var i = this.JI;
                i.k = t.k, i.s = t.s, i.p = t.p
            },
            enumerable: !0
        },
        c: {
            get: function() {
                return this.OI
            },
            set: function(t) {
                var i = this.OI;
                i.k = t.k, i.s = t.s, i.p = t.p
            },
            enumerable: !0
        },
        G: {
            get: function() {
                return this.UI
            },
            set: function(t) {
                var i = this.UI;
                i.k = t.k, i.s = t.s, i.p = t.p
            },
            enumerable: !0
        }
    })), q.D5 = function(t) {
        return t = t.substr(1).split(""), new q.oc(parseInt("0x" + t[0] + t[1]), parseInt("0x" + t[2] + t[3]), parseInt("0x" + t[4] + t[5]))
    }, q.un = 0, q.Nk = 1, q.RH = 2, q.yn = 0, q.EI = 1, q.BB = 2, q.R3 = q.ca.extend({
        Aq: null,
        nu: null,
        DB: 0,
        ctor: function() {
            this.Aq = {}, this.nu = {}, this.DB = 2 << (0 | 10 * Math.random())
        },
        DR: function() {
            return "key_" + ++this.DB
        },
        F_: function(t, i) {
            if (null != i) {
                var n = this.DR();
                this.Aq[n] = i, this.nu[n] = t
            }
        },
        tY: function(t) {
            if (null == t) return null;
            var i, n = this.Aq;
            for (i in n)
                if (n[i] === t) return this.nu[i];
            return null
        },
        aia: function(t) {
            return this.tY(t)
        },
        HZ: function(t) {
            if (null != t) {
                var i, n = this.Aq;
                for (i in n)
                    if (n[i] === t) {
                        delete this.nu[i], delete n[i];
                        break
                    }
            }
        },
        jea: function(t) {
            if (null != t)
                for (var i = 0; i < t.length; i++) this.HZ(t[i])
        },
        qV: function() {
            var t, i = [],
                n = this.Aq;
            for (t in n) i.push(n[t]);
            return i
        },
        BZ: function() {
            this.Aq = {}, this.nu = {}
        },
        count: function() {
            return this.qV().length
        }
    }), q.xP = function() {
        this.No = "Arial", this.fontSize = 12, this.AL = q.Nk, this.BL = q.yn, this.CL = q.Rs, this.Du = q.size(0, 0), this.rG = !1, this.strokeColor = q.Rs, this.oO = 1, this.gO = !1, this.hO = q.size(0, 0), this.shadowBlur = 0, this.iO = 1
    }, q.iR = -90, q.jR = 90, q.kR = 180, q.F3 = 0, q.SO = function() {
        this.timestamp = this.z = this.y = this.x = 0
    }, q.TO = q.ca.extend({
        tc: function(t) {
            q.Cv.getInstance().Co(t)
        },
        Oz: function(t) {
            q.Cv.getInstance().Oz(t)
        }
    }), q.Cv = q.ca.extend({
        xc: null,
        Hd: null,
        ht: null,
        zh: 0,
        YC: 1,
        init: function() {
            this.Hd = new q.SO, this.ht = window.DeviceMotionEvent || window.DeviceOrientationEvent;
            var t = navigator.userAgent;
            return (/Android/.test(t) || /Adr/.test(t) && "ucbrowser" == q.pa.type) && (this.YC = -1), "mqqbrowser" == q.pa.type && (this.ht = window.DeviceOrientationEvent), !0
        },
        zb: function() {
            return this.xc
        },
        Co: function(t) {
            this.xc = t, t = this.VV.bind(this), this.xc ? this.ht == window.DeviceMotionEvent ? window.addEventListener("devicemotion", t, !1) : window.addEventListener("deviceorientation", t, !1) : this.ht == window.DeviceMotionEvent ? window.removeEventListener("devicemotion", t) : window.removeEventListener("deviceorientation", t)
        },
        Oz: function(t) {
            this.zh !== t && (this.zh = t)
        },
        VV: function(t) {
            if (this.xc && !((Date.now() - this.Hd.timestamp) / 1e3 < this.zh)) {
                switch (this.ht == window.DeviceMotionEvent ? (t = t.accelerationIncludingGravity, this.Hd.x = this.YC * t.x * .1, this.Hd.y = this.YC * t.y * .1, this.Hd.z = .1 * t.z) : (this.Hd.x = t.gamma / 90 * .981, this.Hd.y = -t.beta / 90 * .981, this.Hd.z = t.alpha / 90 * .981), this.Hd.timestamp = Date.now(), t = this.Hd.x, window.orientation) {
                    case q.jR:
                        this.Hd.x = -this.Hd.y, this.Hd.y = t;
                        break;
                    case q.iR:
                        this.Hd.x = this.Hd.y, this.Hd.y = -t;
                        break;
                    case q.kR:
                        this.Hd.x = -this.Hd.x, this.Hd.y = -this.Hd.y
                }
                this.xc.uY(this.Hd)
            }
        }
    }), q.Cv.getInstance = function() {
        return this.La || (this.La = new q.Cv, this.La.init()), this.La
    }, q.Nj = {
        J1: 0,
        KA: 1,
        SHOW_ALL: 2,
        CP: 3,
        vR: 4,
        DI: 5
    }, q.Mw = [], q.Ls = {}, q.Dc = q.ca.extend({
        xc: null,
        Ub: null,
        je: null,
        mf: null,
        iE: "",
        Ja: 1,
        Ta: 1,
        ut: 0,
        GJ: 5,
        tm: q.Nj.DI,
        tJ: !1,
        Z3: !1,
        J4: null,
        pJ: null,
        qJ: null,
        FR: null,
        C4: !1,
        cC: null,
        q4: null,
        K4: null,
        mq: null,
        th: 1,
        ctor: function() {
            this.mq = q.Of.parentNode === document.body ? document.documentElement : q.Of.parentNode, this.iE = "Cocos2dHTML5", this.je = q.Ec(), this.mf = q.uf(), this.xc = q.n.getInstance().Pe, this.cC = {
                left: 0,
                top: 0
            }, this.Ub = q.Ec(), this.pJ = q.canvas, this.qJ = q.q, this.LC()
        },
        initialize: function() {
            this.XJ(), this.tJ = !0;
            var t = this.LI.bind(this);
            window.addEventListener("resize", t, !1), q.pa.sg ? setTimeout(t, 300) : this.LI()
        },
        XJ: function() {
            q.pa.sg && (q.canvas.height = this.mq.clientHeight + 500, window.location.href = "#bottom")
        },
        LC: function() {
            this.Ub.width = this.mq.clientWidth, this.Ub.height = this.mq.clientHeight, navigator.userAgent.match(/iPhone/i) && (this.Ub.height += this.Ub.width / 320 * 60)
        },
        LI: function() {
            this.XJ(), this.LC(), q.canvas.width = this.Ub.width, q.canvas.height = this.Ub.height, "opengl" in z.NK || q.q.translate(0, q.canvas.height);
            var t = document.querySelector("#" + document.ccConfig.tag).parentNode;
            t && (t.style.width = q.canvas.width + "px", t.style.height = q.canvas.height + "px"), (t = document.body) && (t.style.padding = "0px", t.style.border = "0px", t.style.margin = "0px"), this.fG()
        },
        V3: function() {
            "opengl" in z.NK || q.q.translate(0, q.canvas.height), this.Ub = q.size(q.canvas.width, q.canvas.height), this.fG()
        },
        end: function() {},
        raa: function() {
            return null != this.pJ && null != this.qJ
        },
        yfa: function(t) {
            this.th = t, q.n.getInstance().ds(q.n.getInstance().jl)
        },
        Fha: function() {},
        Dfa: function() {},
        afa: function(t, i) {
            this.cC = {
                left: t,
                top: i
            }
        },
        f7: function() {
            return this.cC
        },
        P7: function() {
            return this.Ub
        },
        xfa: function(t, i) {
            this.je = this.Ub = q.size(t, i), q.n.getInstance().ds(q.n.getInstance().jl)
        },
        u5: function() {},
        Eea: function(t) {
            this.FR = t
        },
        SL: function() {
            return this.tm === q.Nj.KA ? q.size(this.Ub.width / this.Ja, this.Ub.height / this.Ta) : this.je
        },
        RL: function() {
            return this.tm === q.Nj.KA ? q.a((this.je.width - this.Ub.width / this.Ja) / 2, (this.je.height - this.Ub.height / this.Ta) / 2) : q.a(0, 0)
        },
        s5: function() {
            return !0
        },
        fG: function(t, i, n) {
            if (q.d(n !== q.Nj.DI, "should set resolutionPolicy"), 0 != t && 0 != i)
                if (null != t && null != i && (this.je = q.size(t, i)), null != n && (this.tm = n), this.tJ) {
                    if (this.Ja = this.Ub.width / this.je.width, this.Ta = this.Ub.height / this.je.height, this.tm === q.Nj.KA && (this.Ja = this.Ta = Math.max(this.Ja, this.Ta)), this.tm === q.Nj.SHOW_ALL && (this.Ja = this.Ta = Math.min(this.Ja, this.Ta)), this.tm === q.Nj.CP && (this.Ja = this.Ta, this.je.width = Math.ceil(this.Ub.width / this.Ja)), this.tm == q.Nj.vR && (this.Ta = this.Ja, this.je.height = Math.ceil(this.Ub.height / this.Ta)), t = this.je.width * this.Ja, i = this.je.height * this.Ta, this.mf = q.rect((this.Ub.width - t) / 2, (this.Ub.height - i) / 2, t, i), n = q.n.getInstance(), n.Y = this.je, q.Z === q.Jb) {
                        e = n = 0;
                        if (this.tm === q.Nj.SHOW_ALL) {
                            n = (this.Ub.width - t) / 2;
                            var e = -(this.Ub.height - i) / 2,
                                h = q.q;
                            h.beginPath(), h.rect(n, -i + e, t, i), h.clip(), h.closePath()
                        }
                        q.q.translate(n, e), q.q.scale(this.Ja, this.Ta)
                    } else n.jq(), n.LN();
                    q.Xc.WT()
                } else this.initialize()
        },
        o7: function() {
            return this.je
        },
        cha: function(t) {
            this.xc = t
        },
        e0: function(t, i, n, e) {
            q.q.viewport(t * this.Ja * this.th + this.mf.x * this.th, i * this.Ta * this.th + this.mf.y * this.th, n * this.Ja * this.th, e * this.Ta * this.th)
        },
        uga: function(t, i, n, e) {
            q.q.scissor(t * this.Ja * this.th + this.mf.x * this.th, i * this.Ta * this.th + this.mf.y * this.th, n * this.Ja * this.th, e * this.Ta * this.th)
        },
        yaa: function() {
            var t = q.q;
            return t.isEnabled(t.SCISSOR_TEST)
        },
        q9: function() {
            var t = q.q,
                i = this.Ja,
                t = t.getParameter(t.SCISSOR_BOX);
            return q.rect((t[0] - this.mf.x) / i, (t[1] - this.mf.y) / this.Ta, t[2] / i, t[3] / this.Ta)
        },
        vha: function(t) {
            null != t && 0 < t.length && (this.iE = t)
        },
        y$: function() {
            return this.iE
        },
        z$: function() {
            return this.mf
        },
        RW: function() {
            return this.Ja
        },
        SW: function() {
            return this.Ta
        },
        ul: function(t, i, n) {
            return {
                x: t - n.left,
                y: n.top + n.height - i
            }
        },
        dX: function(t, i, n, e) {
            for (var h = [], s = 0; s < t; ++s) {
                var r = i[s],
                    a = n[s],
                    o = e[s],
                    c = 0;
                if (null == q.Ls[r])
                    if (-1 == (c = this.GS())) q.log("The touches is more than MAX_TOUCHES, nUnusedIndex = " + c);
                    else {
                        var u = q.Mw[c] = new q.bg;
                        u.mG(c, (a - this.mf.x) / this.Ja, (o - this.mf.y) / this.Ta), q.Ls[r] = 0 | c, h.push(u)
                    }
            }
            0 != h.length && this.xc.hA(h, null)
        },
        gX: function(t, i, n, e) {
            for (var h = [], s = 0; s < t; ++s) {
                var r = n[s],
                    a = e[s],
                    o = q.Ls[i[s]];
                if (null != o) {
                    var c = q.Mw[o];
                    if (!c) return;
                    c.mG(o, (r - this.mf.x) / this.Ja, (a - this.mf.y) / this.Ta), h.push(c)
                }
            }
            0 != h.length && this.xc.iA(h, null)
        },
        fX: function(t, i, n, e) {
            var h = [];
            this.QL(h, t, i, n, e), this.xc.vv(h, null)
        },
        eX: function(t, i, n, e) {
            var h = [];
            this.QL(h, t, i, n, e), this.xc.wG(h, null)
        },
        QL: function(t, i, n, e, h) {
            for (var s = 0; s < i; ++s) {
                var r = n[s],
                    a = e[s],
                    o = h[s],
                    c = q.Ls[r];
                if (null != c) {
                    var u = q.Mw[c];
                    if (!u) break;
                    u.mG(c, (a - this.mf.x) / this.Ja, (o - this.mf.y) / this.Ta), t.push(u), q.Mw[c] = null, this.UT(c), delete q.Ls[r]
                }
            }
        },
        GS: function() {
            var t, i = this.ut;
            for (t = 0; t < this.GJ; t++) {
                if (!(1 & i)) return this.ut |= 1 << t, t;
                i >>= 1
            }
            return -1
        },
        UT: function(t) {
            0 > t || t >= this.GJ || (t = ~(1 << t), this.ut &= t)
        },
        hA: function(t) {
            for (var i = [], n = [], e = [], h = 0, s = 0; s < t.length; s++) i[h] = s, n[h] = t[s].Mc.x, e[h] = t[s].Mc.y, ++h;
            this.dX(h, i, n, e)
        },
        iA: function(t) {
            for (var i = [], n = [], e = [], h = 0, s = 0; s < t.length; s++) i[h] = s, n[h] = t[s].Mc.x, e[h] = t[s].Mc.y, ++h;
            this.gX(h, i, n, e)
        },
        vv: function(t) {
            for (var i = [], n = [], e = [], h = 0, s = 0; s < t.length; s++) i[h] = s, n[h] = t[s].Mc.x, e[h] = t[s].Mc.y, ++h;
            this.fX(h, i, n, e)
        },
        wG: function(t) {
            for (var i = [], n = [], e = [], h = 0, s = 0; s < t.length; s++) i[h] = s, n[h] = t[s].Mc.x, e[h] = t[s].Mc.y, ++h;
            this.eX(h, i, n, e)
        }
    }), q.Dc.getInstance = function() {
        return this.La || (this.La = new q.Dc), this.La
    }, q.tP = 0, q.bw = 1, q.MG = 2, q.K1 = 3, q.uP = 4, q.xA = 5, q.MO = 51, q.PO = 19, q.RO = 18, q.OO = 50, q.LO = 34, q.JO = 35, q.KO = 33, q.NO = 49, q.QO = 17, q.u0 = function() {
        this.data = void 0, this.offset = this.size = 0
    }, q.Fda = function(t, i, n) {
        var e = new q.u0;
        (e = q.Hda(t)).offset + n <= e.size ? (q.Gca(i, e.data + e.offset, n), e.offset += n) : q.Gda(t, "pngReaderCallback failed")
    }, q.FW = function(t) {
        return 8 < t.length && 137 == t[0] && 80 == t[1] && 78 == t[2] && 71 == t[3] && 13 == t[4] && 10 == t[5] && 26 == t[6] && 10 == t[7] ? q.bw : 2 < t.length && (73 == t[0] && 73 == t[1] || 77 == t[0] && 77 == t[1] || 255 == t[0] && 216 == t[1]) ? q.MG : q.xA
    }, q.SG = q.ca.extend({
        Lm: 0,
        $k: 0,
        RI: 0,
        Hn: 0,
        rJ: !1,
        OJ: !1,
        rX: function(t) {
            return q.Yc.getInstance().H7(t, "rb"), !1
        },
        U$: function(t, i) {
            return this.rX(t, i)
        },
        T$: function() {
            return !1
        },
        getData: function() {
            return this.Hn
        },
        i7: function() {
            return this.Lm * this.$k
        },
        P$: function() {
            return this.rJ
        },
        taa: function() {
            return this.OJ
        },
        Iu: function() {
            return this.Lm
        },
        Gu: function() {
            return this.$k
        },
        L6: function() {
            return this.RI
        },
        XZ: function() {
            return q.log("doesn't support saveToFile on Cocos2d-Html5"), !1
        },
        i4: function() {
            return !1
        },
        j4: function() {
            return !1
        },
        l4: function() {
            return !1
        },
        k4: function() {
            return !1
        },
        y4: function() {
            return !1
        },
        x4: function() {
            return !1
        },
        pd: function() {
            return !1
        }
    }),
    function() {
        function t(t) {
            throw t
        }

        function i(t, i) {
            var n = t.split("."),
                e = v;
            n[0] in e || !e.execScript || e.execScript("var " + n[0]);
            for (var h; n.length && (h = n.shift());) n.length || i === b ? e = e[h] ? e[h] : e[h] = {} : e[h] = i
        }

        function n(t) {
            if ("string" == typeof t) {
                var i, n;
                for (i = 0, n = (t = t.split("")).length; i < n; i++) t[i] = (255 & t[i].charCodeAt(0)) >>> 0
            }
            i = 1, n = 0;
            for (var e, h = t.length, s = 0; 0 < h;) {
                h -= e = 1024 < h ? 1024 : h;
                do {
                    i += t[s++], n += i
                } while (--e);
                i %= 65521, n %= 65521
            }
            return (n << 16 | i) >>> 0
        }

        function e(i, n) {
            this.index = "number" == typeof n ? n : 0, this.Lu = 0, this.buffer = i instanceof(w ? Uint8Array : Array) ? i : new(w ? Uint8Array : Array)(32768), 2 * this.buffer.length <= this.index && t(Error("invalid index")), this.buffer.length <= this.index && this.sj()
        }

        function h(t) {
            this.buffer = new(w ? Uint16Array : Array)(2 * t), this.length = 0
        }

        function s(t) {
            var i, n, e, h, s, r, a, o, c, u = t.length,
                q = 0,
                l = Number.POSITIVE_INFINITY;
            for (o = 0; o < u; ++o) t[o] > q && (q = t[o]), t[o] < l && (l = t[o]);
            for (i = 1 << q, n = new(w ? Uint32Array : Array)(i), e = 1, h = 0, s = 2; e <= q;) {
                for (o = 0; o < u; ++o)
                    if (t[o] === e) {
                        for (r = 0, a = h, c = 0; c < e; ++c) r = r << 1 | 1 & a, a >>= 1;
                        for (c = r; c < i; c += s) n[c] = e << 16 | o;
                        ++h
                    }++e, h <<= 1, s <<= 1
            }
            return [n, q, l]
        }

        function r(t, i) {
            this.zr = _, this.U = 0, this.input = t, this.c = 0, i && (i.gY && (this.U = i.gY), "number" == typeof i.JE && (this.zr = i.JE), i.Cz && (this.e = w && i.Cz instanceof Array ? new Uint8Array(i.Cz) : i.Cz), "number" == typeof i.QY && (this.c = i.QY)), this.e || (this.e = new(w ? Uint8Array : Array)(32768))
        }

        function a(t, i) {
            this.length = t, this.yP = i
        }

        function o(i, n) {
            function e(i, n) {
                var e, h = i.yP,
                    s = [],
                    r = 0;
                e = N[i.length], s[r++] = 65535 & e, s[r++] = e >> 16 & 255, s[r++] = e >> 24;
                var a;
                switch (y) {
                    case 1 === h:
                        a = [0, h - 1, 0];
                        break;
                    case 2 === h:
                        a = [1, h - 2, 0];
                        break;
                    case 3 === h:
                        a = [2, h - 3, 0];
                        break;
                    case 4 === h:
                        a = [3, h - 4, 0];
                        break;
                    case 6 >= h:
                        a = [4, h - 5, 1];
                        break;
                    case 8 >= h:
                        a = [5, h - 7, 1];
                        break;
                    case 12 >= h:
                        a = [6, h - 9, 2];
                        break;
                    case 16 >= h:
                        a = [7, h - 13, 2];
                        break;
                    case 24 >= h:
                        a = [8, h - 17, 3];
                        break;
                    case 32 >= h:
                        a = [9, h - 25, 3];
                        break;
                    case 48 >= h:
                        a = [10, h - 33, 4];
                        break;
                    case 64 >= h:
                        a = [11, h - 49, 4];
                        break;
                    case 96 >= h:
                        a = [12, h - 65, 5];
                        break;
                    case 128 >= h:
                        a = [13, h - 97, 5];
                        break;
                    case 192 >= h:
                        a = [14, h - 129, 6];
                        break;
                    case 256 >= h:
                        a = [15, h - 193, 6];
                        break;
                    case 384 >= h:
                        a = [16, h - 257, 7];
                        break;
                    case 512 >= h:
                        a = [17, h - 385, 7];
                        break;
                    case 768 >= h:
                        a = [18, h - 513, 8];
                        break;
                    case 1024 >= h:
                        a = [19, h - 769, 8];
                        break;
                    case 1536 >= h:
                        a = [20, h - 1025, 9];
                        break;
                    case 2048 >= h:
                        a = [21, h - 1537, 9];
                        break;
                    case 3072 >= h:
                        a = [22, h - 2049, 10];
                        break;
                    case 4096 >= h:
                        a = [23, h - 3073, 10];
                        break;
                    case 6144 >= h:
                        a = [24, h - 4097, 11];
                        break;
                    case 8192 >= h:
                        a = [25, h - 6145, 11];
                        break;
                    case 12288 >= h:
                        a = [26, h - 8193, 12];
                        break;
                    case 16384 >= h:
                        a = [27, h - 12289, 12];
                        break;
                    case 24576 >= h:
                        a = [28, h - 16385, 13];
                        break;
                    case 32768 >= h:
                        a = [29, h - 24577, 13];
                        break;
                    default:
                        t("invalid distance")
                }
                for (e = a, s[r++] = e[0], s[r++] = e[1], s[r++] = e[2], h = 0, r = s.length; h < r; ++h) f[d++] = s[h];
                p[s[0]]++, v[s[3]]++, g = i.length + n - 1, u = null
            }
            var h, s, r, o, c, u, q, l = {},
                f = w ? new Uint16Array(2 * n.length) : [],
                d = 0,
                g = 0,
                p = new(w ? Uint32Array : Array)(286),
                v = new(w ? Uint32Array : Array)(30),
                x = i.U;
            if (!w) {
                for (r = 0; 285 >= r;) p[r++] = 0;
                for (r = 0; 29 >= r;) v[r++] = 0
            }
            for (p[256] = 1, h = 0, s = n.length; h < s; ++h) {
                for (r = c = 0, o = 3; r < o && h + r !== s; ++r) c = c << 8 | n[h + r];
                if (l[c] === b && (l[c] = []), r = l[c], !(0 < g--)) {
                    for (; 0 < r.length && 32768 < h - r[0];) r.shift();
                    if (h + 3 >= s) {
                        for (u && e(u, -1), r = 0, o = s - h; r < o; ++r) q = n[h + r], f[d++] = q, ++p[q];
                        break
                    }
                    if (0 < r.length) {
                        c = o = b;
                        var m = 0,
                            A = b,
                            E = b,
                            T = A = b,
                            I = n.length,
                            E = 0,
                            T = r.length;
                        t: for (; E < T; E++) {
                            if (o = r[T - E - 1], A = 3, 3 < m) {
                                for (A = m; 3 < A; A--)
                                    if (n[o + A - 1] !== n[h + A - 1]) continue t;
                                A = m
                            }
                            for (; 258 > A && h + A < I && n[o + A] === n[h + A];) ++A;
                            if (A > m && (c = o, m = A), 258 === A) break
                        }
                        o = new a(m, h - c), u ? u.length < o.length ? (q = n[h - 1], f[d++] = q, ++p[q], e(o, 0)) : e(u, -1) : o.length < x ? u = o : e(o, 0)
                    } else u ? e(u, -1) : (q = n[h], f[d++] = q, ++p[q])
                }
                r.push(h)
            }
            return f[d++] = 256, p[256]++, i.RP = p, i.KP = v, w ? f.subarray(0, d) : f
        }

        function c(t, i) {
            function n(t) {
                var i = g[t][p[t]];
                i === u ? (n(t + 1), n(t + 1)) : --q[i], ++p[t]
            }
            var e, s, r, a = t.length,
                o = new h(572),
                c = new(w ? Uint8Array : Array)(a);
            if (!w)
                for (s = 0; s < a; s++) c[s] = 0;
            for (s = 0; s < a; ++s) 0 < t[s] && o.push(s, t[s]);
            if (a = Array(o.length / 2), e = new(w ? Uint32Array : Array)(o.length / 2), 1 === a.length) return c[o.pop().index] = 1, c;
            for (s = 0, r = o.length / 2; s < r; ++s) a[s] = o.pop(), e[s] = a[s].value;
            var u = e.length;
            s = new(w ? Uint16Array : Array)(i);
            var o = new(w ? Uint8Array : Array)(i),
                q = new(w ? Uint8Array : Array)(u);
            r = Array(i);
            var l, f, d, g = Array(i),
                p = Array(i),
                b = (1 << i) - u,
                y = 1 << i - 1;
            for (s[i - 1] = u, l = 0; l < i; ++l) b < y ? o[l] = 0 : (o[l] = 1, b -= y), b <<= 1, s[i - 2 - l] = (s[i - 1 - l] / 2 | 0) + u;
            for (s[0] = o[0], r[0] = Array(s[0]), g[0] = Array(s[0]), l = 1; l < i; ++l) s[l] > 2 * s[l - 1] + o[l] && (s[l] = 2 * s[l - 1] + o[l]), r[l] = Array(s[l]), g[l] = Array(s[l]);
            for (b = 0; b < u; ++b) q[b] = i;
            for (y = 0; y < s[i - 1]; ++y) r[i - 1][y] = e[y], g[i - 1][y] = y;
            for (b = 0; b < i; ++b) p[b] = 0;
            for (1 === o[i - 1] && (--q[0], ++p[i - 1]), l = i - 2; 0 <= l; --l) {
                for (f = b = 0, d = p[l + 1], y = 0; y < s[l]; y++)(f = r[l + 1][d] + r[l + 1][d + 1]) > e[b] ? (r[l][y] = f, g[l][y] = u, d += 2) : (r[l][y] = e[b], g[l][y] = b, ++b);
                p[l] = 0, 1 === o[l] && n(l)
            }
            for (e = q, s = 0, r = a.length; s < r; ++s) c[a[s].index] = e[s];
            return c
        }

        function u(i) {
            var n, e, h, s = new(w ? Uint16Array : Array)(i.length),
                r = [],
                a = [],
                o = 0;
            for (n = 0, e = i.length; n < e; n++) r[i[n]] = 1 + (0 | r[i[n]]);
            for (n = 1, e = 16; n <= e; n++) a[n] = o, (o += 0 | r[n]) > 1 << n && t("overcommitted"), o <<= 1;
            for (65536 > o && t("undercommitted"), n = 0, e = i.length; n < e; n++)
                for (o = a[i[n]], a[i[n]] += 1, r = s[n] = 0, h = i[n]; r < h; r++) s[n] = s[n] << 1 | 1 & o, o >>>= 1;
            return s
        }

        function q(t, i) {
            this.input = t, this.e = new(w ? Uint8Array : Array)(32768), this.zr = R.hz;
            var n, e = {};
            !i && (i = {}) || "number" != typeof i.JE || (this.zr = i.JE);
            for (n in i) e[n] = i[n];
            e.Cz = this.e, this.z = new r(this.input, e)
        }

        function l(i, n) {
            switch (this.iz = [], this.vz = 32768, this.Ci = this.f = this.G = this.Iz = 0, this.input = w ? new Uint8Array(i) : i, this.ZF = !1, this.wz = M, this.GG = !1, !n && (n = {}) || (n.index && (this.G = n.index), n.xE && (this.vz = n.xE), n.yE && (this.wz = n.yE), n.resize && (this.GG = n.resize)), this.wz) {
                case F:
                    this.c = 32768, this.e = new(w ? Uint8Array : Array)(32768 + this.vz + 258);
                    break;
                case M:
                    this.c = 0, this.e = new(w ? Uint8Array : Array)(this.vz), this.sj = this.JP, this.sG = this.BP, this.Az = this.GP;
                    break;
                default:
                    t(Error("invalid inflate mode"))
            }
        }

        function f(i, n) {
            for (var e, h = i.f, s = i.Ci, r = i.input, a = i.G; s < n;)(e = r[a++]) === b && t(Error("input buffer is broken")), h |= e << s, s += 8;
            return i.f = h >>> n, i.Ci = s - n, i.G = a, h & (1 << n) - 1
        }

        function d(i, n) {
            for (var e, h = i.f, s = i.Ci, r = i.input, a = i.G, o = n[0], c = n[1]; s < c;)(e = r[a++]) === b && t(Error("input buffer is broken")), h |= e << s, s += 8;
            return r = o[h & (1 << c) - 1], o = r >>> 16, i.f = h >> o, i.Ci = s - o, i.G = a, 65535 & r
        }

        function g(t) {
            function i(t, i, n) {
                var e, h, s, r;
                for (r = 0; r < t;) switch (e = d(this, i)) {
                    case 16:
                        for (s = 3 + f(this, 2); s--;) n[r++] = h;
                        break;
                    case 17:
                        for (s = 3 + f(this, 3); s--;) n[r++] = 0;
                        h = 0;
                        break;
                    case 18:
                        for (s = 11 + f(this, 7); s--;) n[r++] = 0;
                        h = 0;
                        break;
                    default:
                        h = n[r++] = e
                }
                return n
            }
            var n, e = f(t, 5) + 257,
                h = f(t, 5) + 1,
                r = f(t, 4) + 4,
                a = new(w ? Uint8Array : Array)(S.length);
            for (n = 0; n < r; ++n) a[S[n]] = f(t, 3);
            r = s(a), a = new(w ? Uint8Array : Array)(e), n = new(w ? Uint8Array : Array)(h), t.Az(s(i.call(t, e, r, a)), s(i.call(t, h, r, n)))
        }

        function p(i, n) {
            var e, h;
            switch (this.input = i, this.G = 0, !n && (n = {}) || (n.index && (this.G = n.index), n.CO && (this.iQ = n.CO)), e = i[this.G++], h = i[this.G++], 15 & e) {
                case D:
                    this.method = D;
                    break;
                default:
                    t(Error("unsupported compression method"))
            }
            0 != ((e << 8) + h) % 31 && t(Error("invalid fcheck flag:" + ((e << 8) + h) % 31)), 32 & h && t(Error("fdict flag is not supported")), this.EG = new l(i, {
                index: this.G,
                xE: n.xE,
                yE: n.yE,
                resize: n.resize
            })
        }
        var b = void 0,
            y = !0,
            v = this,
            w = void 0 !== Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array;
        e.prototype.sj = function() {
            var t, i = this.buffer,
                n = i.length,
                e = new(w ? Uint8Array : Array)(n << 1);
            if (w) e.set(i);
            else
                for (t = 0; t < n; ++t) e[t] = i[t];
            return this.buffer = e
        }, e.prototype.Q = function(t, i, n) {
            var e = this.buffer,
                h = this.index,
                s = this.Lu,
                r = e[h];
            if (n && 1 < i && (t = 8 < i ? (I[255 & t] << 24 | I[t >>> 8 & 255] << 16 | I[t >>> 16 & 255] << 8 | I[t >>> 24 & 255]) >> 32 - i : I[t] >> 8 - i), 8 > i + s) r = r << i | t, s += i;
            else
                for (n = 0; n < i; ++n) r = r << 1 | t >> i - n - 1 & 1, 8 == ++s && (s = 0, e[h++] = I[r], r = 0, h === e.length && (e = this.sj()));
            e[h] = r, this.buffer = e, this.Lu = s, this.index = h
        }, e.prototype.finish = function() {
            var t, i = this.buffer,
                n = this.index;
            return 0 < this.Lu && (i[n] <<= 8 - this.Lu, i[n] = I[i[n]], n++), w ? t = i.subarray(0, n) : (i.length = n, t = i), t
        };
        var x, m = new(w ? Uint8Array : Array)(256);
        for (x = 0; 256 > x; ++x) {
            for (var A = T = x, E = 7, T = T >>> 1; T; T >>>= 1) A <<= 1, A |= 1 & T, --E;
            m[x] = (A << E & 255) >>> 0
        }
        var I = m,
            m = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
        w && new Uint32Array(m), h.prototype.getParent = function(t) {
            return 2 * ((t - 2) / 4 | 0)
        }, h.prototype.push = function(t, i) {
            var n, e, h, s = this.buffer;
            for (n = this.length, s[this.length++] = i, s[this.length++] = t; 0 < n && (e = this.getParent(n), s[n] > s[e]);) h = s[n], s[n] = s[e], s[e] = h, h = s[n + 1], s[n + 1] = s[e + 1], s[e + 1] = h, n = e;
            return this.length
        }, h.prototype.pop = function() {
            var t, i, n, e, h, s = this.buffer;
            for (i = s[0], t = s[1], this.length -= 2, s[0] = s[this.length], s[1] = s[this.length + 1], h = 0; !((e = 2 * h + 2) >= this.length) && (e + 2 < this.length && s[e + 2] > s[e] && (e += 2), s[e] > s[h]);) n = s[h], s[h] = s[e], s[e] = n, n = s[h + 1], s[h + 1] = s[e + 1], s[e + 1] = n, h = e;
            return {
                index: t,
                value: i,
                length: this.length
            }
        };
        var _ = 2,
            m = {
                NONE: 0,
                h: 1,
                hz: _,
                n2: 3
            },
            k = [];
        for (x = 0; 288 > x; x++) switch (y) {
            case 143 >= x:
                k.push([x + 48, 8]);
                break;
            case 255 >= x:
                k.push([x - 144 + 400, 9]);
                break;
            case 279 >= x:
                k.push([x - 256 + 0, 7]);
                break;
            case 287 >= x:
                k.push([x - 280 + 192, 8]);
                break;
            default:
                t("invalid literal: " + x)
        }
        r.prototype.Jr = function() {
            var i, n, h, s, r = this.input;
            switch (this.zr) {
                case 0:
                    for (h = 0, s = r.length; h < s;) {
                        var a = (h += (n = w ? r.subarray(h, h + 65535) : r.slice(h, h + 65535)).length) === s,
                            q = b,
                            l = q = b,
                            l = q = b,
                            f = this.e,
                            d = this.c;
                        if (w) {
                            for (f = new Uint8Array(this.e.buffer); f.length <= d + n.length + 5;) f = new Uint8Array(f.length << 1);
                            f.set(this.e)
                        }
                        if (q = a ? 1 : 0, f[d++] = 0 | q, q = n.length, l = 65536 + ~q & 65535, f[d++] = 255 & q, f[d++] = q >>> 8 & 255, f[d++] = 255 & l, f[d++] = l >>> 8 & 255, w) f.set(n, d), d += n.length, f = f.subarray(0, d);
                        else {
                            for (q = 0, l = n.length; q < l; ++q) f[d++] = n[q];
                            f.length = d
                        }
                        this.c = d, this.e = f
                    }
                    break;
                case 1:
                    for ((h = new e(new Uint8Array(this.e.buffer), this.c)).Q(1, 1, y), h.Q(1, 2, y), n = 0, a = (r = o(this, r)).length; n < a; n++)
                        if (s = r[n], e.prototype.Q.apply(h, k[s]), 256 < s) h.Q(r[++n], r[++n], y), h.Q(r[++n], 5), h.Q(r[++n], r[++n], y);
                        else if (256 === s) break;
                    this.e = h.finish(), this.c = this.e.length;
                    break;
                case _:
                    s = new e(new Uint8Array(this.e), this.c);
                    var g, p, v, x, m, A, E = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                        q = Array(19),
                        f = _;
                    for (s.Q(1, 1, y), s.Q(f, 2, y), r = o(this, r), x = u(l = c(this.RP, 15)), d = u(f = c(this.KP, 7)), g = 286; 257 < g && 0 === l[g - 1]; g--);
                    for (p = 30; 1 < p && 0 === f[p - 1]; p--);
                    var T = g,
                        I = p;
                    i = new(w ? Uint32Array : Array)(T + I);
                    var C, N, R = new(w ? Uint32Array : Array)(316);
                    for (m = new(w ? Uint8Array : Array)(19), A = v = 0; A < T; A++) i[v++] = l[A];
                    for (A = 0; A < I; A++) i[v++] = f[A];
                    if (!w)
                        for (A = 0, I = m.length; A < I; ++A) m[A] = 0;
                    for (A = C = 0, I = i.length; A < I; A += v) {
                        for (v = 1; A + v < I && i[A + v] === i[A]; ++v);
                        if (T = v, 0 === i[A])
                            if (3 > T)
                                for (; 0 < T--;) R[C++] = 0, m[0]++;
                            else
                                for (; 0 < T;)(N = 138 > T ? T : 138) > T - 3 && N < T && (N = T - 3), 10 >= N ? (R[C++] = 17, R[C++] = N - 3, m[17]++) : (R[C++] = 18, R[C++] = N - 11, m[18]++), T -= N;
                        else if (R[C++] = i[A], m[i[A]]++, 3 > --T)
                            for (; 0 < T--;) R[C++] = i[A], m[i[A]]++;
                        else
                            for (; 0 < T;)(N = 6 > T ? T : 6) > T - 3 && N < T && (N = T - 3), R[C++] = 16, R[C++] = N - 3, m[16]++, T -= N
                    }
                    for (i = w ? R.subarray(0, C) : R.slice(0, C), m = c(m, 7), A = 0; 19 > A; A++) q[A] = m[E[A]];
                    for (v = 19; 4 < v && 0 === q[v - 1]; v--);
                    for (E = u(m), s.Q(g - 257, 5, y), s.Q(p - 1, 5, y), s.Q(v - 4, 4, y), A = 0; A < v; A++) s.Q(q[A], 3, y);
                    for (A = 0, q = i.length; A < q; A++)
                        if (n = i[A], s.Q(E[n], m[n], y), 16 <= n) {
                            switch (A++, n) {
                                case 16:
                                    a = 2;
                                    break;
                                case 17:
                                    a = 3;
                                    break;
                                case 18:
                                    a = 7;
                                    break;
                                default:
                                    t("invalid code: " + n)
                            }
                            s.Q(i[A], a, y)
                        }
                    for (d = [d, f], n = (a = [x, l])[0], a = a[1], f = d[0], x = d[1], d = 0, q = r.length; d < q; ++d)
                        if (h = r[d], s.Q(n[h], a[h], y), 256 < h) s.Q(r[++d], r[++d], y), l = r[++d], s.Q(f[l], x[l], y), s.Q(r[++d], r[++d], y);
                        else if (256 === h) break;
                    this.e = s.finish(), this.c = this.e.length;
                    break;
                default:
                    t("invalid compression type")
            }
            return this.e
        }, x = [];
        var C;
        for (C = 3; 258 >= C; C++) T = function() {
            var i = C;
            switch (y) {
                case 3 === i:
                    return [257, i - 3, 0];
                case 4 === i:
                    return [258, i - 4, 0];
                case 5 === i:
                    return [259, i - 5, 0];
                case 6 === i:
                    return [260, i - 6, 0];
                case 7 === i:
                    return [261, i - 7, 0];
                case 8 === i:
                    return [262, i - 8, 0];
                case 9 === i:
                    return [263, i - 9, 0];
                case 10 === i:
                    return [264, i - 10, 0];
                case 12 >= i:
                    return [265, i - 11, 1];
                case 14 >= i:
                    return [266, i - 13, 1];
                case 16 >= i:
                    return [267, i - 15, 1];
                case 18 >= i:
                    return [268, i - 17, 1];
                case 22 >= i:
                    return [269, i - 19, 2];
                case 26 >= i:
                    return [270, i - 23, 2];
                case 30 >= i:
                    return [271, i - 27, 2];
                case 34 >= i:
                    return [272, i - 31, 2];
                case 42 >= i:
                    return [273, i - 35, 3];
                case 50 >= i:
                    return [274, i - 43, 3];
                case 58 >= i:
                    return [275, i - 51, 3];
                case 66 >= i:
                    return [276, i - 59, 3];
                case 82 >= i:
                    return [277, i - 67, 4];
                case 98 >= i:
                    return [278, i - 83, 4];
                case 114 >= i:
                    return [279, i - 99, 4];
                case 130 >= i:
                    return [280, i - 115, 4];
                case 162 >= i:
                    return [281, i - 131, 5];
                case 194 >= i:
                    return [282, i - 163, 5];
                case 226 >= i:
                    return [283, i - 195, 5];
                case 257 >= i:
                    return [284, i - 227, 5];
                case 258 === i:
                    return [285, i - 258, 0];
                default:
                    t("invalid length: " + i)
            }
        }(), x[C] = T[2] << 24 | T[1] << 16 | T[0];
        var N = w ? new Uint32Array(x) : x,
            R = m;
        q.prototype.Jr = function() {
            var i, e, h, s, r = 0;
            switch (s = this.e, i = D) {
                case D:
                    e = Math.LOG2E * Math.log(32768) - 8;
                    break;
                default:
                    t(Error("invalid compression method"))
            }
            switch (e = e << 4 | i, s[r++] = e, i) {
                case D:
                    switch (this.zr) {
                        case R.NONE:
                            h = 0;
                            break;
                        case R.h:
                            h = 1;
                            break;
                        case R.hz:
                            h = 2;
                            break;
                        default:
                            t(Error("unsupported compression type"))
                    }
                    break;
                default:
                    t(Error("invalid compression method"))
            }
            return i = h << 6 | 0, s[r++] = i | 31 - (256 * e + i) % 31, i = n(this.input), this.z.c = r, s = this.z.Jr(), r = s.length, w && ((s = new Uint8Array(s.buffer)).length <= r + 4 && (this.e = new Uint8Array(s.length + 4), this.e.set(s), s = this.e), s = s.subarray(0, r + 4)), s[r++] = i >> 24 & 255, s[r++] = i >> 16 & 255, s[r++] = i >> 8 & 255, s[r++] = 255 & i, s
        }, i("Zlib.Deflate", q), i("Zlib.Deflate.compress", function(t, i) {
            return new q(t, i).Jr()
        }), i("Zlib.Deflate.CompressionType", R), i("Zlib.Deflate.CompressionType.NONE", R.NONE), i("Zlib.Deflate.CompressionType.FIXED", R.h), i("Zlib.Deflate.CompressionType.DYNAMIC", R.hz);
        var F = 0,
            M = 1,
            m = {
                dP: F,
                $O: M
            };
        l.prototype.a = function() {
            for (; !this.ZF;) switch (1 & (i = f(this, 3)) && (this.ZF = y), i >>>= 1) {
                case 0:
                    var i = this.input,
                        n = this.G,
                        e = this.e,
                        h = this.c,
                        s = b,
                        r = b,
                        a = b,
                        o = e.length,
                        s = b;
                    switch (this.Ci = this.f = 0, (s = i[n++]) === b && t(Error("invalid uncompressed block header: LEN (first byte)")), r = s, (s = i[n++]) === b && t(Error("invalid uncompressed block header: LEN (second byte)")), r |= s << 8, (s = i[n++]) === b && t(Error("invalid uncompressed block header: NLEN (first byte)")), a = s, (s = i[n++]) === b && t(Error("invalid uncompressed block header: NLEN (second byte)")), a |= s << 8, r === ~a && t(Error("invalid uncompressed block header: length verify")), n + r > i.length && t(Error("input buffer is broken")), this.wz) {
                        case F:
                            for (; h + r > e.length;) {
                                if (s = o - h, r -= s, w) e.set(i.subarray(n, n + s), h), h += s, n += s;
                                else
                                    for (; s--;) e[h++] = i[n++];
                                this.c = h, e = this.sj(), h = this.c
                            }
                            break;
                        case M:
                            for (; h + r > e.length;) e = this.sj({
                                Ia: 2
                            });
                            break;
                        default:
                            t(Error("invalid inflate mode"))
                    }
                    if (w) e.set(i.subarray(n, n + r), h), h += r, n += r;
                    else
                        for (; r--;) e[h++] = i[n++];
                    this.G = n, this.c = h, this.e = e;
                    break;
                case 1:
                    this.Az(P, z);
                    break;
                case 2:
                    g(this);
                    break;
                default:
                    t(Error("unknown BTYPE: " + i))
            }
            return this.sG()
        }, x = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        var S = w ? new Uint16Array(x) : x;
        x = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
        var O = w ? new Uint16Array(x) : x;
        x = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
        var j = w ? new Uint8Array(x) : x;
        x = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
        var L = w ? new Uint16Array(x) : x;
        x = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
        var B = w ? new Uint8Array(x) : x;
        for (T = 0, A = (x = new(w ? Uint8Array : Array)(288)).length; T < A; ++T) x[T] = 143 >= T ? 8 : 255 >= T ? 9 : 279 >= T ? 7 : 8;
        var P = s(x);
        for (T = 0, A = (x = new(w ? Uint8Array : Array)(30)).length; T < A; ++T) x[T] = 5;
        var z = s(x);
        for (l.prototype.Az = function(t, i) {
                var n = this.e,
                    e = this.c;
                this.Oa = t;
                for (var h, s, r, a = n.length - 258; 256 !== (h = d(this, t));)
                    if (256 > h) e >= a && (this.c = e, n = this.sj(), e = this.c), n[e++] = h;
                    else
                        for (h -= 257, r = O[h], 0 < j[h] && (r += f(this, j[h])), h = d(this, i), s = L[h], 0 < B[h] && (s += f(this, B[h])), e >= a && (this.c = e, n = this.sj(), e = this.c); r--;) n[e] = n[e++ - s];
                for (; 8 <= this.Ci;) this.Ci -= 8, this.G--;
                this.c = e
            }, l.prototype.GP = function(t, i) {
                var n = this.e,
                    e = this.c;
                this.Oa = t;
                for (var h, s, r, a = n.length; 256 !== (h = d(this, t));)
                    if (256 > h) e >= a && (n = this.sj(), a = n.length), n[e++] = h;
                    else
                        for (h -= 257, r = O[h], 0 < j[h] && (r += f(this, j[h])), h = d(this, i), s = L[h], 0 < B[h] && (s += f(this, B[h])), e + r > a && (n = this.sj(), a = n.length); r--;) n[e] = n[e++ - s];
                for (; 8 <= this.Ci;) this.Ci -= 8, this.G--;
                this.c = e
            }, l.prototype.sj = function() {
                var t, i, n = new(w ? Uint8Array : Array)(this.c - 32768),
                    e = this.c - 32768,
                    h = this.e;
                if (w) n.set(h.subarray(32768, n.length));
                else
                    for (t = 0, i = n.length; t < i; ++t) n[t] = h[t + 32768];
                if (this.iz.push(n), this.Iz += n.length, w) h.set(h.subarray(e, e + 32768));
                else
                    for (t = 0; 32768 > t; ++t) h[t] = h[e + t];
                return this.c = 32768, h
            }, l.prototype.JP = function(t) {
                var i, n, e, h, s = this.input.length / this.G + 1 | 0,
                    r = this.input,
                    a = this.e;
                return t && ("number" == typeof t.Ia && (s = t.Ia), "number" == typeof t.rP && (s += t.rP)), 2 > s ? (n = (r.length - this.G) / this.Oa[2], h = n / 2 * 258 | 0, e = h < a.length ? a.length + h : a.length << 1) : e = a.length * s, w ? (i = new Uint8Array(e)).set(a) : i = a, this.e = i
            }, l.prototype.sG = function() {
                var t, i, n, e, h, s = 0,
                    r = this.e,
                    a = this.iz,
                    o = new(w ? Uint8Array : Array)(this.Iz + (this.c - 32768));
                if (0 === a.length) return w ? this.e.subarray(32768, this.c) : this.e.slice(32768, this.c);
                for (i = 0, n = a.length; i < n; ++i)
                    for (t = a[i], e = 0, h = t.length; e < h; ++e) o[s++] = t[e];
                for (i = 32768, n = this.c; i < n; ++i) o[s++] = r[i];
                return this.iz = [], this.buffer = o
            }, l.prototype.BP = function() {
                var t, i = this.c;
                return w ? this.GG ? (t = new Uint8Array(i)).set(this.e.subarray(0, i)) : t = this.e.subarray(0, i) : (this.e.length > i && (this.e.length = i), t = this.e), this.buffer = t
            }, p.prototype.a = function() {
                var i, e = this.input;
                return i = this.EG.a(), this.G = this.EG.G, this.iQ && (e[this.G++] << 24 | e[this.G++] << 16 | e[this.G++] << 8 | e[this.G++]) >>> 0 !== n(i) && t(Error("invalid adler-32 checksum")), i
            }, i("Zlib.Inflate", p), i("Zlib.Inflate.BufferType", m), m.Y0 = m.$O, m.m1 = m.dP, i("Zlib.Inflate.prototype.decompress", p.prototype.a), m = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], w && new Uint16Array(m), m = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258], w && new Uint16Array(m), m = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0], w && new Uint8Array(m), m = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], w && new Uint16Array(m), m = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], w && new Uint8Array(m), x = 0, T = (m = new(w ? Uint8Array : Array)(288)).length; x < T; ++x) m[x] = 143 >= x ? 8 : 255 >= x ? 9 : 279 >= x ? 7 : 8;
        for (s(m), x = 0, T = (m = new(w ? Uint8Array : Array)(30)).length; x < T; ++x) m[x] = 5;
        s(m);
        var D = 8
    }.call(this), q.aA = function(t) {
        var i;
        if (t && 0 != t.length) {
            var n = t.indexOf("{"),
                e = t.indexOf("}"); - 1 == n || -1 == e || n > e || 0 != (t = t.substr(n + 1, e - n - 1)).length && (n = t.indexOf("}"), -1 == t.indexOf("{") && -1 == n && (i = t.split(",")))
        }
        return i
    }, q.AH = function(t) {
        var i = q.uf();
        if (t) {
            var n = t.indexOf("{") + 1,
                e = t.lastIndexOf("}", t.length); - 1 != n && -1 != e && (t = t.substring(n, e), -1 != (n = t.indexOf("}")) && -1 != (n = t.indexOf(",", n)) && (i = q.aA(t.substr(0, n)), t = q.aA(t.substr(n + 1, t.length - n)), i = q.rect(parseFloat(i[0]), parseFloat(i[1]), parseFloat(t[0]), parseFloat(t[1]))))
        }
        return i
    }, q.zH = function(t) {
        n = q.Ua();
        try {
            if ("" == t) return n;
            var i = q.aA(t),
                n = q.a(parseFloat(i[0]), parseFloat(i[1]))
        } catch (t) {}
        return n
    }, q.dB = function(t) {
        n = q.Ec();
        try {
            if ("" == t) return n;
            var i = q.aA(t),
                n = q.size(parseFloat(i[0]), parseFloat(i[1]))
        } catch (t) {}
        return n
    }, q.tw = q.ca.extend({
        ctor: function(t) {
            this.bc = t ? [].concat(t.bc) : []
        },
        copy: function() {
            return new q.tw(this)
        },
        Jca: function() {
            return this.copy()
        },
        count: function() {
            return this.bc.length
        },
        jV: function(t) {
            q.wp(this.bc, t) || (this.bc.push(t), this.bc.sort(function(t, i) {
                return t - i
            }))
        },
        GZ: function(t) {
            for (var i = 0, n = 0, e = 0; n < this.bc.length; n++) this.bc[n] != t && (this.bc[e++] = this.bc[n], i++);
            this.bc.length = i
        },
        Ph: function() {
            return this.bc && 0 < this.bc.length ? this.bc[0] : null
        },
        end: function() {
            return this.bc && 0 < this.bc.length ? this.bc[this.bc.length - 1] : null
        },
        B5: function(t) {
            return q.wp(this.bc, t)
        },
        d5: function() {
            return this.bc && 0 < this.bc.length ? this.bc[0] : null
        },
        L4: function(t) {
            t.za(this)
        },
        bc: null
    }), q.r2 = q.tw, q.tw.create = function() {
        return new q.tw
    }, q.xj = function() {
        this.y = this.x = 0
    }, q.aca = function(t, i, n) {
        return t.x = i, t.y = n, t
    }, q.qz = function(t) {
        return Math.sqrt(q.Cd(t.x) + q.Cd(t.y))
    }, q.bca = function(t) {
        return q.Cd(t.x) + q.Cd(t.y)
    }, q.bY = function(t, i) {
        var n = 1 / q.qz(i),
            e = new q.xj;
        e.x = i.x * n, e.y = i.y * n, t.x = e.x, t.y = e.y
    }, q.Yba = function(t, i, n) {
        return t.x = i.x + n.x, t.y = i.y + n.y, t
    }, q.$ba = function(t, i) {
        return t.x * i.x + t.y * i.y
    }, q.rz = function(t, i, n) {
        return t.x = i.x - n.x, t.y = i.y - n.y, t
    }, q.dca = function(t, i, n) {
        var e = new q.xj;
        return e.x = i.x * n.b[0] + i.y * n.b[3] + n.b[6], e.y = i.x * n.b[1] + i.y * n.b[4] + n.b[7], t.x = e.x, t.y = e.y, t
    }, q.eca = function() {
        return null
    }, q.cca = function(t, i, n) {
        return t.x = i.x * n, t.y = i.y * n, t
    }, q.Zba = function(t, i) {
        return t.x < i.x + q.Xa && t.x > i.x - q.Xa && t.y < i.y + q.Xa && t.y > i.y - q.Xa
    }, q.ec = function(t, i, n) {
        this.x = t || 0, this.y = i || 0, this.z = n || 0
    }, q.Hr = function(t, i, n, e) {
        return t ? (t.x = i, t.y = n, t.z = e, t) : new q.ec(i, n, e)
    }, q.xM = function(t) {
        return Math.sqrt(q.Cd(t.x) + q.Cd(t.y) + q.Cd(t.z))
    }, q.yM = function(t) {
        return q.Cd(t.x) + q.Cd(t.y) + q.Cd(t.z)
    }, q.Zg = function(t, i) {
        var n = 1 / q.xM(i);
        t.x = i.x * n, t.y = i.y * n, t.z = i.z * n
    }, q.Om = function(t, i, n) {
        t.x = i.y * n.z - i.z * n.y, t.y = i.z * n.x - i.x * n.z, t.z = i.x * n.y - i.y * n.x
    }, q.BF = function(t, i) {
        return t.x * i.x + t.y * i.y + t.z * i.z
    }, q.wM = function(t, i, n) {
        t.x = i.x + n.x, t.y = i.y + n.y, t.z = i.z + n.z
    }, q.sz = function(t, i, n) {
        t.x = i.x - n.x, t.y = i.y - n.y, t.z = i.z - n.z
    }, q.jca = function(t, i, n) {
        return t.x = i.x * n.b[0] + i.y * n.b[4] + i.z * n.b[8] + n.b[12], t.y = i.x * n.b[1] + i.y * n.b[5] + i.z * n.b[9] + n.b[13], t.z = i.x * n.b[2] + i.y * n.b[6] + i.z * n.b[10] + n.b[14], t
    }, q.kca = function(t, i, n) {
        return t.x = i.x * n.b[0] + i.y * n.b[4] + i.z * n.b[8], t.y = i.x * n.b[1] + i.y * n.b[5] + i.z * n.b[9], t.z = i.x * n.b[2] + i.y * n.b[6] + i.z * n.b[10], t
    }, q.zM = function(t, i, n) {
        var e = new q.AM,
            h = new q.AM;
        q.cY(h, i.x, i.y, i.z), q.BM(e, h, n), t.x = e.x / e.U, t.y = e.y / e.U, t.z = e.z / e.U
    }, q.CF = function(t, i, n) {
        return t.x = i.x * n, t.y = i.y * n, t.z = i.z * n, t
    }, q.fca = function(t, i) {
        return t.x < i.x + q.Xa && t.x > i.x - q.Xa && t.y < i.y + q.Xa && t.y > i.y - q.Xa && t.z < i.z + q.Xa && t.z > i.z - q.Xa ? 1 : 0
    }, q.gca = function(t, i, n) {
        return i = new q.ec(i.x - n.b[12], i.y - n.b[13], i.z - n.b[14]), t.x = i.x * n.b[0] + i.y * n.b[1] + i.z * n.b[2], t.y = i.x * n.b[4] + i.y * n.b[5] + i.z * n.b[6], t.z = i.x * n.b[8] + i.y * n.b[9] + i.z * n.b[10], t
    }, q.hca = function(t, i, n) {
        return t.x = i.x * n.b[0] + i.y * n.b[1] + i.z * n.b[2], t.y = i.x * n.b[4] + i.y * n.b[5] + i.z * n.b[6], t.z = i.x * n.b[8] + i.y * n.b[9] + i.z * n.b[10], t
    }, q.Xu = function(t, i) {
        t != i && (t.x = i.x, t.y = i.y, t.z = i.z)
    }, q.lca = function(t) {
        return t.x = 0, t.y = 0, t.z = 0, t
    }, q.ica = function(t) {
        if (!t) return null;
        var i = new Float32Array(3);
        return i[0] = t.x, i[1] = t.y, i[2] = t.z, i
    }, q.AM = function() {
        this.U = this.z = this.y = this.x = 0
    }, q.cY = function(t, i, n, e) {
        t.x = i, t.y = n, t.z = e, t.U = 1
    }, q.mca = function(t, i, n) {
        return t.x = i.x + n.x, t.y = i.y + n.y, t.z = i.z + n.z, t.U = i.U + n.U, t
    }, q.pca = function(t, i) {
        return t.x * i.x + t.y * i.y + t.z * i.z + t.U * i.U
    }, q.dY = function(t) {
        return Math.sqrt(q.Cd(t.x) + q.Cd(t.y) + q.Cd(t.z) + q.Cd(t.U))
    }, q.qca = function(t) {
        return q.Cd(t.x) + q.Cd(t.y) + q.Cd(t.z) + q.Cd(t.U)
    }, q.rca = function(t) {
        return t
    }, q.eY = function(t, i) {
        var n = 1 / q.dY(i);
        t.x *= n, t.y *= n, t.z *= n, t.U *= n
    }, q.sca = function(t, i, n) {
        return q.eY(t, i), t.x *= n, t.y *= n, t.z *= n, t.U *= n, t
    }, q.tca = function(t, i, n) {
        return t.x = i.x - n.x, t.y = i.y - n.y, t.z = i.z - n.z, t.U = i.U - n.U, t
    }, q.BM = function(t, i, n) {
        t.x = i.x * n.b[0] + i.y * n.b[4] + i.z * n.b[8] + i.U * n.b[12], t.y = i.x * n.b[1] + i.y * n.b[5] + i.z * n.b[9] + i.U * n.b[13], t.z = i.x * n.b[2] + i.y * n.b[6] + i.z * n.b[10] + i.U * n.b[14], t.U = i.x * n.b[3] + i.y * n.b[7] + i.z * n.b[11] + i.U * n.b[15]
    }, q.vca = function(t, i, n, e, h, s) {
        for (var r = 0; r < s;) q.BM(t + r * i, n + r * e, h), ++r;
        return t
    }, q.nca = function(t, i) {
        return t.x < i.x + q.Xa && t.x > i.x - q.Xa && t.y < i.y + q.Xa && t.y > i.y - q.Xa && t.z < i.z + q.Xa && t.z > i.z - q.Xa && t.U < i.U + q.Xa && t.U > i.U - q.Xa
    }, q.oca = function(t, i) {
        return q.d(t != i, "same object!"), t.x = i.x, t.y = i.y, t.z = i.z, t.U = i.U, t
    }, q.uca = function(t) {
        if (!t) return null;
        var i = new Float32Array(4);
        return i[0] = t.x, i[1] = t.y, i[2] = t.z, i[3] = t.U, i
    }, q.Xba = Number, q.Naa = Number, q.Oaa = Number, q.Ap = 0, q.Bp = 1, q.zF = 3.141592, q.VX = .017453, q.WX = 57.295779, q.Xa = .015625, q.Cd = function(t) {
        return t * t
    }, q.Wu = function(t) {
        return t * q.VX
    }, q.Sba = function(t) {
        return t * q.WX
    }, q.nz = function(t, i) {
        return t < i ? t : i
    }, q.mz = function(t, i) {
        return t > i ? t : i
    }, q.Maa = function(t, i) {
        return t + q.Xa > i && t - q.Xa < i
    }, q.Tba = function(t) {
        this.start = t || new q.xj, this.start = t || new q.xj
    }, q.Uba = function(t, i, n, e, h) {
        t.start.x = i, t.start.y = n, t.dir.x = e, t.dir.y = h
    }, q.AF = function(t, i, n, e) {
        var h = t.start.x,
            s = t.start.y,
            r = t.start.x + t.dir.x;
        t = t.start.y + t.dir.y;
        var a = i.x,
            o = i.y,
            c = n.x,
            u = n.y,
            l = (u - o) * (r - h) - (c - a) * (t - s);
        return l > -q.Xa && l < q.Xa ? q.Ap : (o = ((c - a) * (s - o) - (u - o) * (h - a)) / l, a = h + o * (r - h), o = s + o * (t - s), a < q.nz(i.x, n.x) - q.Xa || a > q.mz(i.x, n.x) + q.Xa || o < q.nz(i.y, n.y) - q.Xa || o > q.mz(i.y, n.y) + q.Xa || a < q.nz(h, r) - q.Xa || a > q.mz(h, r) + q.Xa || o < q.nz(s, t) - q.Xa || o > q.mz(s, t) + q.Xa ? q.Ap : (e.x = a, e.y = o, q.Bp))
    }, q.AE = function(t, i, n) {
        var e = new q.xj;
        q.rz(e, i, t), n.x = -e.y, n.y = e.x, q.bY(n, n)
    }, q.Wba = function(t, i, n, e, h, s) {
        var r, a = new q.xj,
            o = new q.xj,
            c = new q.xj,
            u = 1e4,
            l = q.Ap;
        return q.AF(t, i, n, a) && (r = new q.xj, l = q.Bp, (r = q.qz(q.rz(r, a, t.start))) < u && (o.x = a.x, o.y = a.y, u = r, q.AE(i, n, c))), q.AF(t, n, e, a) && (r = new q.xj, l = q.Bp, (r = q.qz(q.rz(r, a, t.start))) < u && (o.x = a.x, o.y = a.y, u = r, q.AE(n, e, c))), q.AF(t, e, i, a) && (r = new q.xj, l = q.Bp, (r = q.qz(q.rz(r, a, t.start))) < u && (o.x = a.x, o.y = a.y, q.AE(e, i, c))), l && (h.x = o.x, h.y = o.y, s && (s.x = c.x, s.y = c.y)), l
    }, q.Vba = function() {
        return q.d(0, "Not implemented"), 0
    };
var Float32Array = Float32Array || Array;
q.lz = function() {
    this.b = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0])
}, q.Waa = function(t, i) {
    for (var n = 0; 9 > n; n++) t.b[n] = i;
    return t
}, q.OX = function(t, i) {
    t.b[0] = i.b[4] * i.b[8] - i.b[5] * i.b[7], t.b[1] = i.b[2] * i.b[7] - i.b[1] * i.b[8], t.b[2] = i.b[1] * i.b[5] - i.b[2] * i.b[4], t.b[3] = i.b[5] * i.b[6] - i.b[3] * i.b[8], t.b[4] = i.b[0] * i.b[8] - i.b[2] * i.b[6], t.b[5] = i.b[2] * i.b[3] - i.b[0] * i.b[5], t.b[6] = i.b[3] * i.b[7] - i.b[4] * i.b[6], t.b[8] = i.b[0] * i.b[4] - i.b[1] * i.b[3]
}, q.oM = function(t) {
    t.b[1] = t.b[2] = t.b[3] = t.b[5] = t.b[6] = t.b[7] = 0, t.b[0] = t.b[4] = t.b[8] = 1
}, q.Xaa = function(t, i, n) {
    var e = new q.lz;
    return 0 === i ? null : (i = 1 / i, q.OX(e, n), q.PX(t, e, i), t)
}, q.lz.HC = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), q.Yaa = function(t) {
    for (var i = 0; 9 > i; i++)
        if (q.lz.HC[i] !== t.b[i]) return !1;
    return !0
}, q.iba = function(t, i) {
    var n, e;
    for (n = 0; 3 > n; ++n)
        for (e = 0; 3 > e; ++e) t.b[3 * n + e] = i.b[3 * e + n];
    return t
}, q.Vaa = function(t) {
    var i;
    return i = t.b[0] * t.b[4] * t.b[8] + t.b[1] * t.b[5] * t.b[6] + t.b[2] * t.b[3] * t.b[7], i -= t.b[2] * t.b[4] * t.b[6] + t.b[0] * t.b[5] * t.b[7] + t.b[1] * t.b[3] * t.b[8]
}, q.Zaa = function(t, i, n) {
    return i = i.b, n = n.b, t.b[0] = i[0] * n[0] + i[3] * n[1] + i[6] * n[2], t.b[1] = i[1] * n[0] + i[4] * n[1] + i[7] * n[2], t.b[2] = i[2] * n[0] + i[5] * n[1] + i[8] * n[2], t.b[3] = i[0] * n[3] + i[3] * n[4] + i[6] * n[5], t.b[4] = i[1] * n[3] + i[4] * n[4] + i[7] * n[5], t.b[5] = i[2] * n[3] + i[5] * n[4] + i[8] * n[5], t.b[6] = i[0] * n[6] + i[3] * n[7] + i[6] * n[8], t.b[7] = i[1] * n[6] + i[4] * n[7] + i[7] * n[8], t.b[8] = i[2] * n[6] + i[5] * n[7] + i[8] * n[8], t
}, q.PX = function(t, i, n) {
    for (var e = 0; 9 > e; e++) t.b[e] = i.b[e] * n
}, q.aba = function(t, i, n) {
    var e = Math.cos(n);
    return n = Math.sin(n), t.b[0] = e + i.x * i.x * (1 - e), t.b[1] = i.z * n + i.y * i.x * (1 - e), t.b[2] = -i.y * n + i.z * i.x * (1 - e), t.b[3] = -i.z * n + i.x * i.y * (1 - e), t.b[4] = e + i.y * i.y * (1 - e), t.b[5] = i.x * n + i.z * i.y * (1 - e), t.b[6] = i.y * n + i.x * i.z * (1 - e), t.b[7] = -i.x * n + i.y * i.z * (1 - e), t.b[8] = e + i.z * i.z * (1 - e), t
}, q.Uaa = function(t, i) {
    q.d(t != i, "Is same object");
    for (var n = 0; 9 > n; n++) t.b[n] = i.b[n];
    return t
}, q.Taa = function(t, i) {
    if (t == i) return !0;
    for (var n = 0; 9 > n; ++n)
        if (!(t.b[n] + q.Xa > i.b[n] && t.b[n] - q.Xa < i.b[n])) return !1;
    return !0
}, q.dba = function(t, i) {
    return t.b[0] = 1, t.b[1] = 0, t.b[2] = 0, t.b[3] = 0, t.b[4] = Math.cos(i), t.b[5] = Math.sin(i), t.b[6] = 0, t.b[7] = -Math.sin(i), t.b[8] = Math.cos(i), t
}, q.eba = function(t, i) {
    return t.b[0] = Math.cos(i), t.b[1] = 0, t.b[2] = -Math.sin(i), t.b[3] = 0, t.b[4] = 1, t.b[5] = 0, t.b[6] = Math.sin(i), t.b[7] = 0, t.b[8] = Math.cos(i), t
}, q.fba = function(t, i) {
    return t.b[0] = Math.cos(i), t.b[1] = -Math.sin(i), t.b[2] = 0, t.b[3] = Math.sin(i), t.b[4] = Math.cos(i), t.b[5] = 0, t.b[6] = 0, t.b[7] = 0, t.b[8] = 1, t
}, q.$aa = function(t, i) {
    return t.b[0] = Math.cos(i), t.b[1] = Math.sin(i), t.b[2] = 0, t.b[3] = -Math.sin(i), t.b[4] = Math.cos(i), t.b[5] = 0, t.b[6] = 0, t.b[7] = 0, t.b[8] = 1, t
}, q.gba = function(t, i, n) {
    return q.oM(t), t.b[0] = i, t.b[4] = n, t
}, q.hba = function(t, i, n) {
    return q.oM(t), t.b[6] = i, t.b[7] = n, t
}, q.bba = function(t, i) {
    return i && t ? (t.b[0] = 1 - 2 * (i.y * i.y + i.z * i.z), t.b[1] = 2 * (i.x * i.y - i.U * i.z), t.b[2] = 2 * (i.x * i.z + i.U * i.y), t.b[3] = 2 * (i.x * i.y + i.U * i.z), t.b[4] = 1 - 2 * (i.x * i.x + i.z * i.z), t.b[5] = 2 * (i.y * i.z - i.U * i.x), t.b[6] = 2 * (i.x * i.z - i.U * i.y), t.b[7] = 2 * (i.y * i.z + i.U * i.x), t.b[8] = 1 - 2 * (i.x * i.x + i.y * i.y), t) : null
}, q.cba = function(t, i, n) {
    return q.uM(void 0, n), q.vM(void 0, t), t
}, q.ta = function() {
    this.b = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
}, q.lba = function(t, i) {
    t.b[0] = t.b[1] = t.b[2] = t.b[3] = t.b[4] = t.b[5] = t.b[6] = t.b[7] = t.b[8] = t.b[9] = t.b[10] = t.b[11] = t.b[12] = t.b[13] = t.b[14] = t.b[15] = i
}, q.Yo = function(t) {
    t.b[1] = t.b[2] = t.b[3] = t.b[4] = t.b[6] = t.b[7] = t.b[8] = t.b[9] = t.b[11] = t.b[12] = t.b[13] = t.b[14] = 0, t.b[0] = t.b[5] = t.b[10] = t.b[15] = 1
}, q.ta.uh = function(t, i, n) {
    return t.b[i + 4 * n]
}, q.ta.bc = function(t, i, n, e) {
    t.b[i + 4 * n] = e
}, q.ta.Dm = function(t, i, n, e, h) {
    var s = q.ta.uh(t, i, n);
    q.ta.bc(t, i, n, q.ta.uh(t, e, h)), q.ta.bc(t, e, h, s)
}, q.ta.uS = function(t, i) {
    var n, e, h, s, r = 0,
        a = 0,
        o = [0, 0, 0, 0],
        c = [0, 0, 0, 0],
        u = [0, 0, 0, 0];
    for (n = 0; 4 > n; n++) {
        for (e = s = 0; 4 > e; e++)
            if (1 != u[e])
                for (h = 0; 4 > h; h++) 0 == u[h] && Math.abs(q.ta.uh(t, e, h)) >= s && (s = Math.abs(q.ta.uh(t, e, h)), a = e, r = h);
        if (++u[r], a != r) {
            for (e = 0; 4 > e; e++) q.ta.Dm(t, a, e, r, e);
            for (e = 0; 4 > e; e++) q.ta.Dm(i, a, e, r, e)
        }
        if (c[n] = a, o[n] = r, 0 == q.ta.uh(t, r, r)) return q.Ap;
        for (h = 1 / q.ta.uh(t, r, r), q.ta.bc(t, r, r, 1), e = 0; 4 > e; e++) q.ta.bc(t, r, e, q.ta.uh(t, r, e) * h);
        for (e = 0; 4 > e; e++) q.ta.bc(i, r, e, q.ta.uh(i, r, e) * h);
        for (h = 0; 4 > h; h++)
            if (h != r) {
                for (s = q.ta.uh(t, h, r), q.ta.bc(t, h, r, 0), e = 0; 4 > e; e++) q.ta.bc(t, h, e, q.ta.uh(t, h, e) - q.ta.uh(t, r, e) * s);
                for (e = 0; 4 > e; e++) q.ta.bc(i, h, e, q.ta.uh(t, h, e) - q.ta.uh(i, r, e) * s)
            }
    }
    for (e = 3; 0 <= e; e--)
        if (c[e] != o[e])
            for (h = 0; 4 > h; h++) q.ta.Dm(t, h, c[e], h, o[e]);
    return q.Bp
}, q.ta.HC = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), q.RX = function(t, i) {
    var n = new q.ta,
        e = new q.ta;
    q.Cl(n, i), q.Yo(e), q.ta.uS(n, e) != q.Ap && q.Cl(t, n)
}, q.pba = function(t) {
    for (var i = 0; 16 > i; i++)
        if (q.ta.HC[i] != t.b[i]) return !1;
    return !0
}, q.xba = function(t, i) {
    var n, e, h = t.b,
        s = i.b;
    for (e = 0; 4 > e; ++e)
        for (n = 0; 4 > n; ++n) h[4 * e + n] = s[4 * n + e];
    return t
}, q.Dl = function(t, i, n) {
    t = t.b;
    var e = i.b[0],
        h = i.b[1],
        s = i.b[2],
        r = i.b[3],
        a = i.b[4],
        o = i.b[5],
        c = i.b[6],
        u = i.b[7],
        q = i.b[8],
        l = i.b[9],
        f = i.b[10],
        d = i.b[11],
        g = i.b[12],
        p = i.b[13],
        b = i.b[14];
    i = i.b[15];
    var y = n.b[0],
        v = n.b[1],
        w = n.b[2],
        x = n.b[3],
        m = n.b[4],
        A = n.b[5],
        E = n.b[6],
        T = n.b[7],
        I = n.b[8],
        _ = n.b[9],
        k = n.b[10],
        C = n.b[11],
        N = n.b[12],
        R = n.b[13],
        F = n.b[14];
    n = n.b[15], t[0] = y * e + v * a + w * q + x * g, t[1] = y * h + v * o + w * l + x * p, t[2] = y * s + v * c + w * f + x * b, t[3] = y * r + v * u + w * d + x * i, t[4] = m * e + A * a + E * q + T * g, t[5] = m * h + A * o + E * l + T * p, t[6] = m * s + A * c + E * f + T * b, t[7] = m * r + A * u + E * d + T * i, t[8] = I * e + _ * a + k * q + C * g, t[9] = I * h + _ * o + k * l + C * p, t[10] = I * s + _ * c + k * f + C * b, t[11] = I * r + _ * u + k * d + C * i, t[12] = N * e + R * a + F * q + n * g, t[13] = N * h + R * o + F * l + n * p, t[14] = N * s + R * c + F * f + n * b, t[15] = N * r + R * u + F * d + n * i
}, q.JW = function() {
    var t = q.Tm.top.b,
        i = q.Hl.top.b,
        n = new Float32Array(16);
    return n[0] = t[0] * i[0] + t[4] * i[1] + t[8] * i[2] + t[12] * i[3], n[1] = t[1] * i[0] + t[5] * i[1] + t[9] * i[2] + t[13] * i[3], n[2] = t[2] * i[0] + t[6] * i[1] + t[10] * i[2] + t[14] * i[3], n[3] = t[3] * i[0] + t[7] * i[1] + t[11] * i[2] + t[15] * i[3], n[4] = t[0] * i[4] + t[4] * i[5] + t[8] * i[6] + t[12] * i[7], n[5] = t[1] * i[4] + t[5] * i[5] + t[9] * i[6] + t[13] * i[7], n[6] = t[2] * i[4] + t[6] * i[5] + t[10] * i[6] + t[14] * i[7], n[7] = t[3] * i[4] + t[7] * i[5] + t[11] * i[6] + t[15] * i[7], n[8] = t[0] * i[8] + t[4] * i[9] + t[8] * i[10] + t[12] * i[11], n[9] = t[1] * i[8] + t[5] * i[9] + t[9] * i[10] + t[13] * i[11], n[10] = t[2] * i[8] + t[6] * i[9] + t[10] * i[10] + t[14] * i[11], n[11] = t[3] * i[8] + t[7] * i[9] + t[11] * i[10] + t[15] * i[11], n[12] = t[0] * i[12] + t[4] * i[13] + t[8] * i[14] + t[12] * i[15], n[13] = t[1] * i[12] + t[5] * i[13] + t[9] * i[14] + t[13] * i[15], n[14] = t[2] * i[12] + t[6] * i[13] + t[10] * i[14] + t[14] * i[15], n[15] = t[3] * i[12] + t[7] * i[13] + t[11] * i[14] + t[15] * i[15], n
}, q.o8 = function(t, i, n) {
    t = t.b, i = i.b;
    var e = n.b;
    return e[0] = t[0] * i[0] + t[4] * i[1] + t[8] * i[2] + t[12] * i[3], e[1] = t[1] * i[0] + t[5] * i[1] + t[9] * i[2] + t[13] * i[3], e[2] = t[2] * i[0] + t[6] * i[1] + t[10] * i[2] + t[14] * i[3], e[3] = t[3] * i[0] + t[7] * i[1] + t[11] * i[2] + t[15] * i[3], e[4] = t[0] * i[4] + t[4] * i[5] + t[8] * i[6] + t[12] * i[7], e[5] = t[1] * i[4] + t[5] * i[5] + t[9] * i[6] + t[13] * i[7], e[6] = t[2] * i[4] + t[6] * i[5] + t[10] * i[6] + t[14] * i[7], e[7] = t[3] * i[4] + t[7] * i[5] + t[11] * i[6] + t[15] * i[7], e[8] = t[0] * i[8] + t[4] * i[9] + t[8] * i[10] + t[12] * i[11], e[9] = t[1] * i[8] + t[5] * i[9] + t[9] * i[10] + t[13] * i[11], e[10] = t[2] * i[8] + t[6] * i[9] + t[10] * i[10] + t[14] * i[11], e[11] = t[3] * i[8] + t[7] * i[9] + t[11] * i[10] + t[15] * i[11], e[12] = t[0] * i[12] + t[4] * i[13] + t[8] * i[14] + t[12] * i[15], e[13] = t[1] * i[12] + t[5] * i[13] + t[9] * i[14] + t[13] * i[15], e[14] = t[2] * i[12] + t[6] * i[13] + t[10] * i[14] + t[14] * i[15], e[15] = t[3] * i[12] + t[7] * i[13] + t[11] * i[14] + t[15] * i[15], n.b
}, q.Cl = function(t, i) {
    if (t != i) {
        var n = t.b,
            e = i.b;
        n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]
    }
}, q.jba = function(t, i) {
    q.d(t != i, "You are comparing the same thing!");
    for (var n = 0; 16 > n; n++)
        if (!(t.b[n] + q.Xa > i.b[n] && t.b[n] - q.Xa < i.b[n])) return !1;
    return !0
}, q.uba = function(t, i) {
    return t.b[0] = 1, t.b[1] = 0, t.b[2] = 0, t.b[3] = 0, t.b[4] = 0, t.b[5] = Math.cos(i), t.b[6] = Math.sin(i), t.b[7] = 0, t.b[8] = 0, t.b[9] = -Math.sin(i), t.b[10] = Math.cos(i), t.b[11] = 0, t.b[12] = 0, t.b[13] = 0, t.b[14] = 0, t.b[15] = 1, t
}, q.vba = function(t, i) {
    return t.b[0] = Math.cos(i), t.b[1] = 0, t.b[2] = -Math.sin(i), t.b[3] = 0, t.b[4] = 0, t.b[5] = 1, t.b[6] = 0, t.b[7] = 0, t.b[8] = Math.sin(i), t.b[9] = 0, t.b[10] = Math.cos(i), t.b[11] = 0, t.b[12] = 0, t.b[13] = 0, t.b[14] = 0, t.b[15] = 1, t
}, q.wba = function(t, i) {
    return t.b[0] = Math.cos(i), t.b[1] = Math.sin(i), t.b[2] = 0, t.b[3] = 0, t.b[4] = -Math.sin(i), t.b[5] = Math.cos(i), t.b[6] = 0, t.b[7] = 0, t.b[8] = 0, t.b[9] = 0, t.b[10] = 1, t.b[11] = 0, t.b[12] = 0, t.b[13] = 0, t.b[14] = 0, t.b[15] = 1, t
}, q.qba = function(t, i, n, e) {
    var h = Math.cos(i);
    i = Math.sin(i);
    var s = Math.cos(n);
    n = Math.sin(n);
    var r = Math.cos(e);
    e = Math.sin(e);
    var a = i * n,
        o = h * n;
    return t.b[0] = s * r, t.b[4] = s * e, t.b[8] = -n, t.b[1] = a * r - h * e, t.b[5] = a * e + h * r, t.b[9] = i * s, t.b[2] = o * r + i * e, t.b[6] = o * e - i * r, t.b[10] = h * s, t.b[3] = t.b[7] = t.b[11] = 0, t.b[15] = 1, t
}, q.rba = function(t, i) {
    return t.b[0] = 1 - 2 * (i.y * i.y + i.z * i.z), t.b[1] = 2 * (i.x * i.y + i.z * i.U), t.b[2] = 2 * (i.x * i.z - i.y * i.U), t.b[3] = 0, t.b[4] = 2 * (i.x * i.y - i.z * i.U), t.b[5] = 1 - 2 * (i.x * i.x + i.z * i.z), t.b[6] = 2 * (i.z * i.y + i.x * i.U), t.b[7] = 0, t.b[8] = 2 * (i.x * i.z + i.y * i.U), t.b[9] = 2 * (i.y * i.z - i.x * i.U), t.b[10] = 1 - 2 * (i.x * i.x + i.y * i.y), t.b[11] = 0, t.b[12] = 0, t.b[13] = 0, t.b[14] = 0, t.b[15] = 1, t
}, q.tba = function(t, i, n) {
    return t.b[0] = i.b[0], t.b[1] = i.b[1], t.b[2] = i.b[2], t.b[3] = 0, t.b[4] = i.b[3], t.b[5] = i.b[4], t.b[6] = i.b[5], t.b[7] = 0, t.b[8] = i.b[6], t.b[9] = i.b[7], t.b[10] = i.b[8], t.b[11] = 0, t.b[12] = n.x, t.b[13] = n.y, t.b[14] = n.z, t.b[15] = 1, t
}, q.UX = function(t, i, n, e) {
    t.b[0] = i, t.b[5] = n, t.b[10] = e, t.b[15] = 1, t.b[1] = t.b[2] = t.b[3] = t.b[4] = t.b[6] = t.b[7] = t.b[8] = t.b[9] = t.b[11] = t.b[12] = t.b[13] = t.b[14] = 0
}, q.qM = function(t, i, n, e) {
    t.b[0] = t.b[5] = t.b[10] = t.b[15] = 1, t.b[1] = t.b[2] = t.b[3] = t.b[4] = t.b[6] = t.b[7] = t.b[8] = t.b[9] = t.b[11] = 0, t.b[12] = i, t.b[13] = n, t.b[14] = e
}, q.oba = function(t, i) {
    return t.x = i.b[4], t.y = i.b[5], t.z = i.b[6], q.Zg(t, t), t
}, q.nba = function(t, i) {
    return t.x = i.b[0], t.y = i.b[1], t.z = i.b[2], q.Zg(t, t), t
}, q.mba = function(t, i) {
    return t.x = i.b[8], t.y = i.b[9], t.z = i.b[10], q.Zg(t, t), t
}, q.SX = function(t, i, n) {
    var e = q.Wu(30),
        h = n - .1,
        s = Math.sin(e);
    0 != h && 0 != s && 0 != i && (e = Math.cos(e) / s, q.Yo(t), t.b[0] = e / i, t.b[5] = e, t.b[10] = -(n + .1) / h, t.b[11] = -1, t.b[14] = -.2 * n / h, t.b[15] = 0)
}, q.yF = function(t, i, n, e, h, s, r) {
    q.Yo(t), t.b[0] = 2 / (n - i), t.b[5] = 2 / (h - e), t.b[10] = -2 / (r - s), t.b[12] = -(n + i) / (n - i), t.b[13] = -(h + e) / (h - e), t.b[14] = -(r + s) / (r - s)
}, q.pM = function(t, i, n, e) {
    var h = new q.ec,
        s = new q.ec,
        r = new q.ec,
        a = new q.ec,
        o = new q.ta;
    q.sz(h, n, i), q.Zg(h, h), q.Xu(s, e), q.Zg(s, s), q.Om(r, h, s), q.Zg(r, r), q.Om(a, r, h), q.Zg(r, r), q.Yo(t), t.b[0] = r.x, t.b[4] = r.y, t.b[8] = r.z, t.b[1] = a.x, t.b[5] = a.y, t.b[9] = a.z, t.b[2] = -h.x, t.b[6] = -h.y, t.b[10] = -h.z, q.qM(o, -i.x, -i.y, -i.z), q.Dl(t, t, o)
}, q.TX = function(t, i, n) {
    var e = Math.cos(n);
    n = Math.sin(n);
    var h = new q.ec;
    q.Zg(h, i), t.b[0] = e + h.x * h.x * (1 - e), t.b[1] = h.z * n + h.y * h.x * (1 - e), t.b[2] = -h.y * n + h.z * h.x * (1 - e), t.b[3] = 0, t.b[4] = -h.z * n + h.x * h.y * (1 - e), t.b[5] = e + h.y * h.y * (1 - e), t.b[6] = h.x * n + h.z * h.y * (1 - e), t.b[7] = 0, t.b[8] = h.y * n + h.x * h.z * (1 - e), t.b[9] = -h.x * n + h.y * h.z * (1 - e), t.b[10] = e + h.z * h.z * (1 - e), t.b[11] = 0, t.b[12] = 0, t.b[13] = 0, t.b[14] = 0, t.b[15] = 1
}, q.QX = function(t, i) {
    t.b[0] = i.b[0], t.b[1] = i.b[1], t.b[2] = i.b[2], t.b[3] = i.b[4], t.b[4] = i.b[5], t.b[5] = i.b[6], t.b[6] = i.b[8], t.b[7] = i.b[9], t.b[8] = i.b[10]
}, q.kba = function(t, i, n) {
    switch (n) {
        case q.PP:
            t.e = i.b[3] - i.b[0], t.c = i.b[7] - i.b[4], t.G = i.b[11] - i.b[8], t.Q = i.b[15] - i.b[12];
            break;
        case q.NP:
            t.e = i.b[3] + i.b[0], t.c = i.b[7] + i.b[4], t.G = i.b[11] + i.b[8], t.Q = i.b[15] + i.b[12];
            break;
        case q.LP:
            t.e = i.b[3] + i.b[1], t.c = i.b[7] + i.b[5], t.G = i.b[11] + i.b[9], t.Q = i.b[15] + i.b[13];
            break;
        case q.QP:
            t.e = i.b[3] - i.b[1], t.c = i.b[7] - i.b[5], t.G = i.b[11] - i.b[9], t.Q = i.b[15] - i.b[13];
            break;
        case q.MP:
            t.e = i.b[3] - i.b[2], t.c = i.b[7] - i.b[6], t.G = i.b[11] - i.b[10], t.Q = i.b[15] - i.b[14];
            break;
        case q.OP:
            t.e = i.b[3] + i.b[2], t.c = i.b[7] + i.b[6], t.G = i.b[11] + i.b[10], t.Q = i.b[15] + i.b[14];
            break;
        default:
            q.d(0, "Invalid plane index")
    }
    return i = Math.sqrt(t.e * t.e + t.c * t.c + t.G * t.G), t.e /= i, t.c /= i, t.G /= i, t.Q /= i, t
}, q.sba = function(t, i, n) {
    i = new q.oz;
    var e = new q.lz;
    return q.QX(e, n), q.uM(i, e), q.vM(i, t), t
}, q.NP = 0, q.PP = 1, q.LP = 2, q.QP = 3, q.OP = 4, q.MP = 5, q.yba = function(t, i, n, e) {
    this.e = t || 0, this.c = i || 0, this.G = n || 0, this.Q = e || 0
}, q.vQ = 0, q.uQ = 1, q.wQ = 2, q.Aba = function(t, i) {
    return t.e * i.x + t.c * i.y + t.G * i.z + t.Q * i.U
}, q.Bba = function(t, i) {
    return t.e * i.x + t.c * i.y + t.G * i.z + t.Q
}, q.Cba = function(t, i) {
    return t.e * i.x + t.c * i.y + t.G * i.z
}, q.Dba = function(t, i, n) {
    return t.e = n.x, t.c = n.y, t.G = n.z, t.Q = -q.BF(n, i), t
}, q.Eba = function(t, i, n, e) {
    var h = new q.ec,
        s = new q.ec,
        r = new q.ec;
    return q.sz(s, n, i), q.sz(r, e, i), q.Om(h, s, r), q.Zg(h, h), t.e = h.x, t.c = h.y, t.G = h.z, t.Q = q.BF(q.CF(h, h, -1), i), t
}, q.Fba = function(t, i, n, e) {
    return t = new q.ec, q.d(0, "Not implemented"), q.sz(t, e, n), null
}, q.Gba = function(t, i) {
    var n = new q.ec;
    n.x = i.e, n.y = i.c, n.z = i.G;
    var e = 1 / q.xM(n);
    return q.Zg(n, n), t.e = n.x, t.c = n.y, t.G = n.z, t.Q = i.Q * e, t
}, q.Hba = function() {
    return q.d(0, "Not implemented"), null
}, q.zba = function(t, i) {
    var n = t.e * i.x + t.c * i.y + t.G * i.z + t.Q;
    return .001 < n ? q.vQ : -.001 > n ? q.uQ : q.wQ
}, q.oz = function() {
    this.U = this.z = this.y = this.x = 0
}, q.YX = function(t, i) {
    return t.x = -i.x, t.y = -i.y, t.z = -i.z, t.U = i.U, t
}, q.ZX = function(t, i) {
    return t.U * i.U + t.x * i.x + t.y * i.y + t.z * i.z
}, q.Jba = function(t) {
    return t
}, q.$X = function(t) {
    t.x = 0, t.y = 0, t.z = 0, t.U = 1
}, q.Kba = function(t, i) {
    var n = q.rM(i),
        e = new q.oz;
    return Math.abs(n) > q.Xa ? (t.x = 0, t.y = 0, t.z = 0, t.U = 0, t) : (q.pz(t, q.YX(e, i), 1 / n), t)
}, q.Lba = function(t) {
    return 0 == t.x && 0 == t.y && 0 == t.z && 1 == t.U
}, q.rM = function(t) {
    return Math.sqrt(q.aY(t))
}, q.aY = function(t) {
    return t.x * t.x + t.y * t.y + t.z * t.z + t.U * t.U
}, q.Mba = function(t) {
    return t
}, q.Nba = function(t, i, n) {
    return t.U = i.U * n.U - i.x * n.x - i.y * n.y - i.z * n.z, t.x = i.U * n.x + i.x * n.U + i.y * n.z - i.z * n.y, t.y = i.U * n.y + i.y * n.U + i.z * n.x - i.x * n.z, t.z = i.U * n.z + i.z * n.U + i.x * n.y - i.y * n.x, t
}, q.sM = function(t, i) {
    var n = q.rM(i);
    q.d(Math.abs(n) > q.Xa, ""), q.pz(t, i, 1 / n)
}, q.tM = function(t, i) {
    var n = .5 * q.zF,
        e = Math.sin(n);
    t.U = Math.cos(n), t.x = i.x * e, t.y = i.y * e, t.z = i.z * e
}, q.uM = function(t, i) {
    var n, e, h, s;
    if (n = [], e = s = 0, i) {
        n[0] = i.b[0], n[1] = i.b[3], n[2] = i.b[6], n[4] = i.b[1], n[5] = i.b[4], n[6] = i.b[7], n[8] = i.b[2], n[9] = i.b[5], n[10] = i.b[8], n[15] = 1;
        var r = n[0];
        (e = r[0] + r[5] + r[10] + 1) > q.Xa ? (s = 2 * Math.sqrt(e), n = (r[9] - r[6]) / s, e = (r[2] - r[8]) / s, h = (r[4] - r[1]) / s, s *= .25) : r[0] > r[5] && r[0] > r[10] ? (s = 2 * Math.sqrt(1 + r[0] - r[5] - r[10]), n = .25 * s, e = (r[4] + r[1]) / s, h = (r[2] + r[8]) / s, s = (r[9] - r[6]) / s) : r[5] > r[10] ? (s = 2 * Math.sqrt(1 + r[5] - r[0] - r[10]), n = (r[4] + r[1]) / s, e = .25 * s, h = (r[9] + r[6]) / s, s = (r[2] - r[8]) / s) : (s = 2 * Math.sqrt(1 + r[10] - r[0] - r[5]), n = (r[2] + r[8]) / s, e = (r[9] + r[6]) / s, h = .25 * s, s = (r[4] - r[1]) / s), t.x = n, t.y = e, t.z = h, t.U = s
    }
}, q.Qba = function(t, i, n, e) {
    var h, s, r, a, o;
    return h = q.Wu(n) / 2, s = q.Wu(i) / 2, r = q.Wu(e) / 2, e = Math.cos(h), i = Math.cos(s), n = Math.cos(r), h = Math.sin(h), s = Math.sin(s), r = Math.sin(r), a = i * n, o = s * r, t.U = e * a + h * o, t.x = h * a - e * o, t.y = e * s * n + h * i * r, t.z = e * i * r - h * s * n, q.sM(t, t), t
}, q.Rba = function(t, i, n, e) {
    if (i.x == n.x && i.y == n.y && i.z == n.z && i.U == n.U) return t.x = i.x, t.y = i.y, t.z = i.z, t.U = i.U, t;
    var h = q.ZX(i, n),
        s = Math.acos(h),
        h = Math.sqrt(1 - q.Cd(h)),
        r = Math.sin(e * s) / h,
        a = new q.oz,
        o = new q.oz;
    return q.pz(a, i, Math.sin((1 - e) * s) / h), q.pz(o, n, r), q.XX(t, a, o), t
}, q.vM = function(t, i) {
    var n;
    (n = Math.sqrt(q.Cd(t.x) + q.Cd(t.y) + q.Cd(t.z))) > -q.Xa && n < q.Xa || n < 2 * q.zF + q.Xa && n > 2 * q.zF - q.Xa ? (i.x = 0, i.y = 0, i.z = 1) : (i.x = t.x / n, i.y = t.y / n, i.z = t.z / n, q.Zg(i, i))
}, q.pz = function(t, i, n) {
    t.x = i.x * n, t.y = i.y * n, t.z = i.z * n, t.U = i.U * n
}, q.Iba = function(t, i) {
    return t.x = i.x, t.y = i.y, t.z = i.z, t.U = i.U, t
}, q.XX = function(t, i, n) {
    t.x = i.x + n.x, t.y = i.y + n.y, t.z = i.z + n.z, t.U = i.U + n.U
}, q.Pba = function(t, i, n, e) {
    var h = new q.ec,
        s = new q.ec;
    return q.Xu(h, i), q.Xu(s, n), q.Zg(h, h), q.Zg(s, s), 1 <= (n = q.BF(h, s)) ? (q.$X(t), t) : (-.999999 > n ? Math.abs(q.yM(e)) < q.Xa ? q.tM(t, e) : (h = new q.ec, s = new q.ec, s.x = 1, s.y = 0, s.z = 0, q.Om(h, s, i), Math.abs(q.yM(h)) < q.Xa && (s = new q.ec, s.x = 0, s.y = 1, s.z = 0, q.Om(h, s, i)), q.Zg(h, h), q.tM(t, h)) : (i = Math.sqrt(2 * (1 + n)), e = 1 / i, n = new q.ec, q.Om(n, h, s), t.x = n.x * e, t.y = n.y * e, t.z = n.z * e, t.U = .5 * i, q.sM(t, t)), t)
}, q.Oba = function(t, i, n) {
    var e = new q.ec,
        h = new q.ec,
        s = new q.ec;
    return s.x = i.x, s.y = i.y, s.z = i.z, q.Om(e, s, n), q.Om(h, s, e), q.CF(e, e, 2 * i.U), q.CF(h, h, 2), q.wM(t, n, e), q.wM(t, t, h), t
}, q.Iaa = function(t, i) {
    this.min = t || new q.ec, this.max = i || new q.ec
}, q.Kaa = function(t, i) {
    return t.x >= i.min.x && t.x <= i.max.x && t.y >= i.min.y && t.y <= i.max.y && t.z >= i.min.z && t.z <= i.max.z ? q.Bp : q.Ap
}, q.Jaa = function(t, i) {
    return q.Xu(t.min, i.min), q.Xu(t.max, i.max), t
}, q.Laa = function() {
    return q.d(0, "Not implemented"), 0
}, q.tz = function(t, i, n, e) {
    this.top = n, this.stack = e
}, q.tz.V1 = 30, q.DF = function(t) {
    t.stack = [], t.top = null
}, q.uz = function(t, i) {
    t.stack.push(t.top), t.top = new q.ta, q.Cl(t.top, i)
}, q.wca = function(t) {
    t.top = t.stack.pop()
}, q.EF = function(t) {
    t.stack = null, t.top = null
}, q.Kk = 5888, q.Lk = 5889, q.UG = 5890, q.Hl = new q.tz, q.Tm = new q.tz, q.tv = new q.tz, q.Oc = null, q.tF = !1, q.hY = function() {
    if (!q.tF) {
        var t = new q.ta;
        q.DF(q.Hl), q.DF(q.Tm), q.DF(q.tv), q.Oc = q.Hl, q.tF = !0, q.Yo(t), q.uz(q.Hl, t), q.uz(q.Tm, t), q.uz(q.tv, t)
    }
}, q.hY(), q.NX = function() {
    q.EF(q.Hl), q.EF(q.Tm), q.EF(q.tv), q.tF = !1, q.Oc = null
}, q.Xo = function() {
    q.uz(q.Oc, q.Oc.top)
}, q.Qaa = function(t) {
    q.Oc.stack.push(q.Oc.top), q.Cl(t, q.Oc.top), q.Oc.top = t
}, q.Wo = function() {
    q.Oc.top = q.Oc.stack.pop()
}, q.wk = function(t) {
    switch (t) {
        case q.Kk:
            q.Oc = q.Hl;
            break;
        case q.Lk:
            q.Oc = q.Tm;
            break;
        case q.UG:
            q.Oc = q.tv;
            break;
        default:
            q.d(0, "Invalid matrix mode specified")
    }
}, q.Fr = function() {
    q.Yo(q.Oc.top)
}, q.Paa = function(t) {
    q.Cl(q.Oc.top, t)
}, q.Gr = function(t) {
    q.Dl(q.Oc.top, q.Oc.top, t)
}, q.kz = function(t, i) {
    var n = new q.ta;
    q.qM(n, t, i, 0), q.Dl(q.Oc.top, q.Oc.top, n)
}, q.Raa = function(t, i, n, e) {
    i = new q.ec(i, n, e), n = new q.ta, q.TX(n, i, q.Wu(t)), q.Dl(q.Oc.top, q.Oc.top, n)
}, q.Saa = function(t, i, n) {
    var e = new q.ta;
    q.UX(e, t, i, n), q.Dl(q.Oc.top, q.Oc.top, e)
}, q.jz = function(t, i) {
    switch (t) {
        case q.Kk:
            q.Cl(i, q.Hl.top);
            break;
        case q.Lk:
            q.Cl(i, q.Tm.top);
            break;
        case q.UG:
            q.Cl(i, q.tv.top);
            break;
        default:
            q.d(1, "Invalid matrix mode specified")
    }
}, q.a1 = function(t, i, n, e, h, s) {
    this.e = t, this.c = i, this.G = n, this.Q = e, this.Ra = h, this.Sa = s
}, q.S3 = function(t, i, n, e, h, s) {
    return {
        e: t,
        c: i,
        G: n,
        Q: e,
        Ra: h,
        Sa: s
    }
}, q.VO = function(t, i, n, e, h, s) {
    return {
        e: t,
        c: i,
        G: n,
        Q: e,
        Ra: h,
        Sa: s
    }
}, q.T3 = function(t, i) {
    return {
        x: i.e * t.x + i.G * t.y + i.Ra,
        y: i.c * t.x + i.Q * t.y + i.Sa
    }
}, q.yH = function(t, i) {
    return {
        x: i.e * t.x + i.G * t.y + i.Ra,
        y: i.c * t.x + i.Q * t.y + i.Sa
    }
}, q.fm = function(t, i, n) {
    return {
        x: n.e * t + n.G * i + n.Ra,
        y: n.c * t + n.Q * i + n.Sa
    }
}, q.U3 = function(t, i) {
    return {
        width: i.e * t.width + i.G * t.height,
        height: i.c * t.width + i.Q * t.height
    }
}, q.e3 = function(t, i) {
    return {
        width: i.e * t.width + i.G * t.height,
        height: i.c * t.width + i.Q * t.height
    }
}, q.d1 = function() {
    return {
        e: 1,
        c: 0,
        G: 0,
        Q: 1,
        Ra: 0,
        Sa: 0
    }
}, q.c1 = function() {
    return {
        e: 1,
        c: 0,
        G: 0,
        Q: 1,
        Ra: 0,
        Sa: 0
    }
}, q.EQ = function(t, i) {
    var n = q.Vm(t),
        e = q.Um(t),
        h = q.bp(t),
        s = q.cp(t),
        r = q.fm(e, n, i),
        n = q.fm(h, n, i),
        e = q.fm(e, s, i),
        a = q.fm(h, s, i),
        h = Math.min(r.x, n.x, e.x, a.x),
        s = Math.max(r.x, n.x, e.x, a.x),
        o = Math.min(r.y, n.y, e.y, a.y),
        r = Math.max(r.y, n.y, e.y, a.y);
    return q.rect(h, o, s - h, r - o)
}, q.zR = function(t, i) {
    var n = q.Vm(t),
        e = q.Um(t),
        h = q.bp(t),
        s = q.cp(t),
        r = q.fm(e, n, i),
        n = q.fm(h, n, i),
        e = q.fm(e, s, i),
        a = q.fm(h, s, i),
        h = Math.min(r.x, n.x, e.x, a.x),
        s = Math.max(r.x, n.x, e.x, a.x),
        o = Math.min(r.y, n.y, e.y, a.y),
        r = Math.max(r.y, n.y, e.y, a.y);
    return t.x = h, t.y = o, t.width = s - h, t.height = r - o, t
}, q.WO = function(t, i, n) {
    return {
        e: t.e,
        c: t.c,
        G: t.G,
        Q: t.Q,
        Ra: t.Ra + t.e * i + t.G * n,
        Sa: t.Sa + t.c * i + t.Q * n
    }
}, q.f1 = function(t, i, n) {
    return {
        e: t.e * i,
        c: t.c * i,
        G: t.G * n,
        Q: t.Q * n,
        Ra: t.Ra,
        Sa: t.Sa
    }
}, q.e1 = function(t, i) {
    var n = Math.sin(i),
        e = Math.cos(i);
    return {
        e: t.e * e + t.G * n,
        c: t.c * e + t.Q * n,
        G: t.G * e - t.e * n,
        Q: t.Q * e - t.c * n,
        Ra: t.Ra,
        Sa: t.Sa
    }
}, q.vp = function(t, i) {
    return {
        e: t.e * i.e + t.c * i.G,
        c: t.e * i.c + t.c * i.Q,
        G: t.G * i.e + t.Q * i.G,
        Q: t.G * i.c + t.Q * i.Q,
        Ra: t.Ra * i.e + t.Sa * i.G + i.Ra,
        Sa: t.Ra * i.c + t.Sa * i.Q + i.Sa
    }
}, q.b1 = function(t, i) {
    return t.e === i.e && t.c === i.c && t.G === i.G && t.Q === i.Q && t.Ra === i.Ra && t.Sa === i.Sa
}, q.FG = function(t) {
    var i = 1 / (t.e * t.Q - t.c * t.G);
    return {
        e: i * t.Q,
        c: -i * t.c,
        G: -i * t.G,
        Q: i * t.e,
        Ra: i * (t.G * t.Sa - t.Q * t.Ra),
        Sa: i * (t.c * t.Ra - t.e * t.Sa)
    }
}, q.kH = parseFloat("1.192092896e-07F"), q.OF = function(t) {
    return q.a(-t.x, -t.y)
}, q.Rf = function(t, i) {
    return q.a(t.x + i.x, t.y + i.y)
}, q.pf = function(t, i) {
    return q.a(t.x - i.x, t.y - i.y)
}, q.yk = function(t, i) {
    return q.a(t.x * i, t.y * i)
}, q.bN = function(t, i) {
    return q.yk(q.Rf(t, i), .5)
}, q.Or = function(t, i) {
    return t.x * i.x + t.y * i.y
}, q.nda = function(t, i) {
    return t.x * i.y - t.y * i.x
}, q.Ez = function(t) {
    return q.a(-t.y, t.x)
}, q.tda = function(t) {
    return q.a(t.y, -t.x)
}, q.sda = function(t, i) {
    return q.yk(i, q.Or(t, i) / q.Or(i, i))
}, q.uda = function(t, i) {
    return q.a(t.x * i.x - t.y * i.y, t.x * i.y + t.y * i.x)
}, q.xda = function(t, i) {
    return q.a(t.x * i.x + t.y * i.y, t.y * i.x - t.x * i.y)
}, q.$M = function(t) {
    return q.Or(t, t)
}, q.ZM = function(t, i) {
    return q.$M(q.pf(t, i))
}, q.Sm = function(t) {
    return Math.sqrt(q.$M(t))
}, q.oda = function(t, i) {
    return q.Sm(q.pf(t, i))
}, q.Li = function(t) {
    return q.yk(t, 1 / q.Sm(t))
}, q.pda = function(t) {
    return q.a(Math.cos(t), Math.sin(t))
}, q.UY = function(t) {
    return Math.atan2(t.y, t.x)
}, q.Od = function(t, i, n) {
    if (i > n) {
        var e = i;
        i = n, n = e
    }
    return t < i ? i : t < n ? t : n
}, q.YM = function(t) {
    var i = q.a(0, 0),
        n = q.a(1, 1);
    return q.a(q.Od(t.x, i.x, n.x), q.Od(t.y, i.y, n.y))
}, q.RY = function() {
    var t = q.n.getInstance().Y;
    return q.a(t.width, t.height)
}, q.mda = function(t, i) {
    return q.a(i(t.x), i(t.y))
}, q.aN = function(t, i, n) {
    return q.Rf(q.yk(t, 1 - n), q.yk(i, n))
}, q.qda = function(t, i, n) {
    return t.x - n <= i.x && i.x <= t.x + n && t.y - n <= i.y && i.y <= t.y + n
}, q.lda = function(t, i) {
    return q.a(t.x * i.x, t.y * i.y)
}, q.kda = function(t, i) {
    var n = q.Li(t),
        e = q.Li(i),
        n = Math.atan2(n.x * e.y - n.y * e.x, q.Or(n, e));
    return Math.abs(n) < q.kH ? 0 : n
}, q.jda = function(t, i) {
    var n = Math.acos(q.Or(q.Li(t), q.Li(i)));
    return Math.abs(n) < q.kH ? 0 : n
}, q.TY = function(t, i, n) {
    t = q.pf(t, i);
    var e = Math.cos(n);
    n = Math.sin(n);
    var h = t.x;
    return t.x = h * e - t.y * n + i.x, t.y = h * n + t.y * e + i.y, t
}, q.NF = function(t, i, n, e, h) {
    if (t.x == i.x && t.y == i.y || n.x == e.x && n.y == e.y) return !1;
    var s = i.x - t.x;
    i = i.y - t.y;
    var r = e.x - n.x;
    e = e.y - n.y;
    var a = t.x - n.x;
    return t = t.y - n.y, n = e * s - r * i, h.x = r * t - e * a, h.y = s * t - i * a, 0 == n ? 0 == h.x || 0 == h.y : (h.x /= n, h.y /= n, !0)
}, q.wda = function(t, i, n, e) {
    var h = q.a(0, 0);
    return !!(q.NF(t, i, n, e, h) && 0 <= h.x && 1 >= h.x && 0 <= h.y && 1 >= h.y)
}, q.rda = function(t, i, n, e) {
    var h = q.a(0, 0);
    return q.NF(t, i, n, e, h) ? (n = q.a(0, 0), n.x = t.x + h.x * (i.x - t.x), n.y = t.y + h.x * (i.y - t.y), n) : q.Ua()
}, q.vda = function(t, i) {
    return null != t && null != i && (t.x == i.x && t.y == i.y)
}, q.Fz = function(t) {
    t.x = 0, t.y = 0
}, q.Il = function(t, i) {
    t.x = i.x, t.y = i.y
}, q.Pr = function(t, i) {
    t.x *= i, t.y *= i
}, q.cN = function(t, i) {
    t.x -= i.x, t.y -= i.y
}, q.Dz = function(t, i) {
    t.x += i.x, t.y += i.y
}, q.SY = function(t) {
    q.Pr(t, 1 / Math.sqrt(t.x * t.x + t.y * t.y))
}, q.tQ = q.ca.extend({
    ctor: function(t) {
        var i, n, e, h;
        for (this.data = t, this.qb = 8, this.PF = [], this.Yy = [], this.rp = {}, this.rE = null, this.text = {}, e = null;;) {
            for (i = this.Ll(), h = t = void 0, h = [], t = 0; 4 > t; ++t) h.push(String.fromCharCode(this.data[this.qb++]));
            switch (t = h.join("")) {
                case "IHDR":
                    this.width = this.Ll(), this.height = this.Ll(), this.dr = this.data[this.qb++], this.IE = this.data[this.qb++], this.qb++, this.qb++, this.qb++;
                    break;
                case "acTL":
                    this.rE = {
                        Xca: this.Ll(),
                        Yca: this.Ll() || 1 / 0,
                        frames: []
                    };
                    break;
                case "PLTE":
                    this.PF = this.ev(i);
                    break;
                case "fcTL":
                    e && this.rE.frames.push(e), this.qb += 4, e = {
                        width: this.Ll(),
                        height: this.Ll(),
                        CG: this.Ll(),
                        DG: this.Ll()
                    }, t = this.kN(), i = this.kN() || 100, e.O5 = 1e3 * t / i, e.Z5 = this.data[this.qb++], e.m5 = this.data[this.qb++], e.data = [];
                    break;
                case "IDAT":
                case "fdAT":
                    for ("fdAT" === t && (this.qb += 4, i -= 4), t = (null != e ? e.data : void 0) || this.Yy, h = 0; 0 <= i ? h < i : h > i; 0 <= i ? ++h : --h) t.push(this.data[this.qb++]);
                    break;
                case "tRNS":
                    switch (this.rp = {}, this.IE) {
                        case 3:
                            if (this.rp.jF = this.ev(i), 0 < (i = 255 - this.rp.jF.length))
                                for (t = 0; 0 <= i ? t < i : t > i; 0 <= i ? ++t : --t) this.rp.jF.push(255);
                            break;
                        case 0:
                            this.rp.M$ = this.ev(i)[0];
                            break;
                        case 2:
                            this.rp.tea = this.ev(i)
                    }
                    break;
                case "tEXt":
                    i = (h = this.ev(i)).indexOf(0), t = String.fromCharCode.apply(String, h.slice(0, i)), this.text[t] = String.fromCharCode.apply(String, h.slice(i + 1));
                    break;
                case "IEND":
                    e && this.rE.frames.push(e);
                    t: {
                        switch (this.IE) {
                            case 0:
                            case 3:
                            case 4:
                                e = 1;
                                break t;
                            case 2:
                            case 6:
                                e = 3;
                                break t
                        }
                        e = void 0
                    }
                    return this.s = e, this.UL = 4 === (n = this.IE) || 6 === n, n = this.s + (this.UL ? 1 : 0), this.aZ = this.dr * n, void(Uint8Array != Array && (this.Yy = new Uint8Array(this.Yy)));
                default:
                    this.qb += i
            }
            if (this.qb += 4, this.qb > this.data.length) throw Error("Incomplete or corrupt PNG file")
        }
    },
    ev: function(t) {
        var i, n;
        for (n = [], i = 0; 0 <= t ? i < t : i > t; 0 <= t ? ++i : --i) n.push(this.data[this.qb++]);
        return n
    },
    Ll: function() {
        var t, i, n, e;
        return t = this.data[this.qb++] << 24, i = this.data[this.qb++] << 16, n = this.data[this.qb++] << 8, e = this.data[this.qb++], t | i | n | e
    },
    kN: function() {
        var t, i;
        return t = this.data[this.qb++] << 8, i = this.data[this.qb++], t | i
    },
    SV: function(t) {
        var i, n, e, h, s, r, a, o, c, u, q, l, f, d, g;
        if (null == t && (t = this.Yy), 0 === t.length) return new Uint8Array(0);
        for (t = new Zlib.Inflate(t, {
                index: 0,
                CO: !1
            }).decompress(), l = (o = this.aZ / 8) * this.width, c = new Uint8Array(l * this.height), r = t.length, n = u = q = 0; u < r;) {
            switch (t[u++]) {
                case 0:
                    for (i = 0; i < l; i += 1) c[n++] = t[u++];
                    break;
                case 1:
                    for (h = f = 0; f < l; h = f += 1) i = t[u++], s = h < o ? 0 : c[n - o], c[n++] = (i + s) % 256;
                    break;
                case 2:
                    for (h = s = 0; s < l; h = s += 1) i = t[u++], e = (h - h % o) / o, f = q && c[(q - 1) * l + e * o + h % o], c[n++] = (f + i) % 256;
                    break;
                case 3:
                    for (h = g = 0; g < l; h = g += 1) i = t[u++], e = (h - h % o) / o, s = h < o ? 0 : c[n - o], f = q && c[(q - 1) * l + e * o + h % o], c[n++] = (i + Math.floor((s + f) / 2)) % 256;
                    break;
                case 4:
                    for (h = g = 0; g < l; h = g += 1) i = t[u++], e = (h - h % o) / o, s = h < o ? 0 : c[n - o], 0 === q ? f = d = 0 : (f = c[(q - 1) * l + e * o + h % o], d = e && c[(q - 1) * l + (e - 1) * o + h % o]), a = s + f - d, h = Math.abs(a - s), e = Math.abs(a - f), a = Math.abs(a - d), s = h <= e && h <= a ? s : e <= a ? f : d, c[n++] = (i + s) % 256;
                    break;
                default:
                    throw Error("Invalid filter algorithm: " + t[u - 1])
            }
            q++
        }
        return c
    },
    NV: function(t, i) {
        var n, e, h, s, r, a, o, c;
        if (e = this.s, c = null, n = this.UL, this.PF.length && (c = null != (h = this.iS) ? h : this.iS = this.RV(), e = 4, n = !0), h = t.data || t, o = h.length, r = c || i, s = a = 0, 1 === e)
            for (; s < o;) e = c ? 4 * i[s / 4] : a, a = r[e++], h[s++] = a, h[s++] = a, h[s++] = a, h[s++] = n ? r[e++] : 255, a = e;
        else
            for (; s < o;) e = c ? 4 * i[s / 4] : a, h[s++] = r[e++], h[s++] = r[e++], h[s++] = r[e++], h[s++] = n ? r[e++] : 255, a = e
    },
    RV: function() {
        var t, i, n, e, h, s, r, a, o;
        for (n = this.PF, s = this.rp.jF || [], h = new Uint8Array((s.length || 0) + n.length), i = r = t = e = 0, a = n.length; r < a; i = r += 3) h[e++] = n[i], h[e++] = n[i + 1], h[e++] = n[i + 2], h[e++] = null != (o = s[t++]) ? o : 255;
        return h
    },
    LZ: function(t) {
        var i;
        return t.width = this.width, t.height = this.height, t = t.getContext("2d"), i = t.createImageData(this.width, this.height), this.NV(i, this.SV()), t.putImageData(i, 0, 0)
    }
}), q.vn = q.ca.extend({
    CJ: !1,
    so: null,
    rS: null,
    ctor: function() {
        this.rS = []
    },
    getUint8: function(t) {
        return this.so[t]
    },
    getUint16: function(t) {
        return this.CJ ? this.so[t + 1] << 8 | this.so[t] : this.so[t] << 8 | this.so[t + 1]
    },
    getUint32: function(t) {
        var i = this.so;
        return this.CJ ? i[t + 3] << 24 | i[t + 2] << 16 | i[t + 1] << 8 | i[t] : i[t] << 24 | i[t + 1] << 16 | i[t + 2] << 8 | i[t + 3]
    },
    DV: function() {
        var t = this.getUint16(0);
        if (18761 === t) this.FF = !0;
        else {
            if (19789 !== t) throw console.log(t), TypeError("Invalid byte order value.");
            this.FF = !1
        }
        return this.FF
    },
    iX: function() {
        if (42 !== this.getUint16(2)) throw RangeError("You forgot your towel!");
        return !0
    },
    zW: function(t) {
        var i = this.jW;
        return t in i ? i[t] : null
    },
    xW: function(t) {
        var i = this.iW;
        return t in i ? i[t] : (console.log("Unknown Field Tag:", t), "Tag" + t)
    },
    yW: function(t) {
        return -1 !== ["BYTE", "ASCII", "SBYTE", "UNDEFINED"].indexOf(t) ? 1 : -1 !== ["SHORT", "SSHORT"].indexOf(t) ? 2 : -1 !== ["LONG", "SLONG", "FLOAT"].indexOf(t) ? 4 : -1 !== ["RATIONAL", "SRATIONAL", "DOUBLE"].indexOf(t) ? 8 : null
    },
    AW: function(t, i, n, e) {
        t = [];
        var h = this.yW(i);
        if (4 >= h * n) !1 === this.FF ? t.push(e >>> 8 * (4 - h)) : t.push(e);
        else
            for (var s = 0; s < n; s++) {
                var r = h * s;
                8 <= h ? -1 !== ["RATIONAL", "SRATIONAL"].indexOf(i) ? (t.push(this.getUint32(e + r)), t.push(this.getUint32(e + r + 4))) : q.log("Can't handle this field type or size") : t.push(this.HL(h, e + r))
            }
        return "ASCII" === i && t.forEach(function(t, i, n) {
            n[i] = String.fromCharCode(t)
        }), t
    },
    HL: function(t, i) {
        if (0 >= t) q.log("No bytes requested");
        else {
            if (1 >= t) return this.getUint8(i);
            if (2 >= t) return this.getUint16(i);
            if (3 >= t) return this.getUint32(i) >>> 8;
            if (4 >= t) return this.getUint32(i);
            q.log("Too many bytes requested")
        }
    },
    rW: function(t, i, n) {
        n = n || 0, i += Math.floor(n / 8);
        var e = n + t;
        t = 32 - t;
        var h, s;
        return 0 >= e ? console.log("No bits requested") : 8 >= e ? (h = 24 + n, s = this.getUint8(i)) : 16 >= e ? (h = 16 + n, s = this.getUint16(i)) : 32 >= e ? (h = n, s = this.getUint32(i)) : console.log("Too many bits requested"), {
            bits: s << h >>> t,
            byteOffset: i + Math.floor(e / 8),
            bitOffset: e % 8
        }
    },
    dN: function(t) {
        var i = this.getUint16(t),
            n = [];
        t += 2;
        for (var e = 0; e < i; t += 12, e++) {
            var h = this.getUint16(t),
                s = this.getUint16(t + 2),
                r = this.getUint32(t + 4),
                a = this.getUint32(t + 8),
                h = this.xW(h),
                s = this.zW(s),
                r = this.AW(h, s, r, a);
            n[h] = {
                type: s,
                Dj: r
            }
        }
        this.tL.push(n), 0 !== (i = this.getUint32(t)) && this.dN(i)
    },
    Ho: function(t, i) {
        var n = Math.pow(2, 8 - i);
        return Math.floor(t * n + (n - 1))
    },
    VY: function(t, i) {
        if (i = i || document.createElement("canvas"), this.so = t, this.canvas = i, this.DV(), this.iX()) {
            e = this.getUint32(4);
            this.tL = [], this.dN(e);
            var n = this.tL[0],
                e = n.ImageWidth.Dj[0],
                h = n.ImageLength.Dj[0];
            this.canvas.width = e, this.canvas.height = h;
            var s = [],
                r = n.Compression ? n.Compression.Dj[0] : 1,
                a = n.SamplesPerPixel.Dj[0],
                o = [],
                c = 0,
                u = !1;
            if (n.BitsPerSample.Dj.forEach(function(t, i) {
                    o[i] = {
                        bitsPerSample: t,
                        hasBytesPerSample: !1,
                        bytesPerSample: void 0
                    }, 0 == t % 8 && (o[i].fF = !0, o[i].zy = t / 8), c += t
                }, this), 0 == c % 8) var u = !0,
                l = c / 8;
            var f = n.StripOffsets.Dj,
                d = f.length;
            if (n.StripByteCounts) var g = n.StripByteCounts.Dj;
            else {
                if (q.log("Missing StripByteCounts!"), 1 !== d) throw Error("Cannot recover from missing StripByteCounts");
                g = [Math.ceil(e * h * c / 8)]
            }
            for (var p = 0; p < d; p++) {
                var b = f[p];
                s[p] = [];
                for (var y = g[p], v = 0, w = 0, x = 1, m = !0, A = [], E = 0, T = 0, I = 0; v < y; v += x) switch (r) {
                    case 1:
                        for (x = 0, A = []; x < a; x++) {
                            if (!o[x].fF) {
                                N = this.rW(o[x].vu, b + v, w);
                                throw A.push(N.dr), v = N.byteOffset - b, w = N.l5, RangeError("Cannot handle sub-byte bits per sample")
                            }
                            A.push(this.HL(o[x].zy, b + v + o[x].zy * x))
                        }
                        if (s[p].push(A), !u) throw x = 0, RangeError("Cannot handle sub-byte bits per pixel");
                        x = l;
                        break;
                    case 32773:
                        if (m) {
                            var m = !1,
                                _ = 1,
                                k = 1;
                            0 <= (x = this.getInt8(b + v)) && 127 >= x ? _ = x + 1 : -127 <= x && -1 >= x ? k = 1 - x : m = !0
                        } else {
                            for (var C = this.getUint8(b + v), x = 0; x < k; x++) {
                                if (!o[T].fF) throw RangeError("Cannot handle sub-byte bits per sample");
                                I = I << 8 * E | C, ++E === o[T].zy && (A.push(I), I = E = 0, T++), T === a && (s[p].push(A), A = [], T = 0)
                            }
                            0 === --_ && (m = !0)
                        }
                        x = 1
                }
            }
            if (i.getContext) {
                if (l = this.canvas.getContext("2d"), l.fillStyle = "rgba(255, 255, 255, 0)", p = n.RowsPerStrip ? n.RowsPerStrip.Dj[0] : h, b = s.length, h %= p, h = 0 === h ? p : h, v = p, r = 0, A = n.PhotometricInterpretation.Dj[0], _ = [], k = 0, n.ExtraSamples && (_ = n.ExtraSamples.Dj, k = _.length), n.ColorMap) var N = n.ColorMap.Dj,
                    R = Math.pow(2, o[0].vu);
                for (p = 0; p < b; p++) {
                    for (p + 1 === b && (v = h), n = s[p].length, r *= p, u = a = 0; u < n; a++)
                        for (f = 0; f < e; f++, u++) {
                            if (g = s[p][u], m = w = y = 0, d = 1, 0 < k)
                                for (y = 0; y < k; y++)
                                    if (1 === _[y] || 2 === _[y]) {
                                        d = g[3 + y] / 256;
                                        break
                                    }
                            switch (A) {
                                case 0:
                                    if (o[0].fF) var F = Math.pow(16, 2 * o[0].zy);
                                    g.forEach(function(t, i, n) {
                                        n[i] = F - t
                                    });
                                case 1:
                                    y = w = m = this.Ho(g[0], o[0].vu);
                                    break;
                                case 2:
                                    y = this.Ho(g[0], o[0].vu), w = this.Ho(g[1], o[1].vu), m = this.Ho(g[2], o[2].vu);
                                    break;
                                case 3:
                                    if (void 0 === N) throw Error("Palette image missing color map");
                                    g = g[0], y = this.Ho(N[g], 16), w = this.Ho(N[R + g], 16), m = this.Ho(N[2 * R + g], 16);
                                    break;
                                default:
                                    throw RangeError("Unknown Photometric Interpretation:", A)
                            }
                            l.fillStyle = "rgba(" + y + ", " + w + ", " + m + ", " + d + ")", l.fillRect(f, r + a, 1, 1)
                        }
                    r = v
                }
            }
            return this.canvas
        }
    },
    iW: {
        315: "Artist",
        258: "BitsPerSample",
        265: "CellLength",
        264: "CellWidth",
        320: "ColorMap",
        259: "Compression",
        33432: "Copyright",
        306: "DateTime",
        338: "ExtraSamples",
        266: "FillOrder",
        289: "FreeByteCounts",
        288: "FreeOffsets",
        291: "GrayResponseCurve",
        290: "GrayResponseUnit",
        316: "HostComputer",
        270: "ImageDescription",
        257: "ImageLength",
        256: "ImageWidth",
        271: "Make",
        281: "MaxSampleValue",
        280: "MinSampleValue",
        272: "Model",
        254: "NewSubfileType",
        274: "Orientation",
        262: "PhotometricInterpretation",
        284: "PlanarConfiguration",
        296: "ResolutionUnit",
        278: "RowsPerStrip",
        277: "SamplesPerPixel",
        305: "Software",
        279: "StripByteCounts",
        273: "StripOffsets",
        255: "SubfileType",
        263: "Threshholding",
        282: "XResolution",
        283: "YResolution",
        326: "BadFaxLines",
        327: "CleanFaxData",
        343: "ClipPath",
        328: "ConsecutiveBadFaxLines",
        433: "Decode",
        434: "DefaultImageColor",
        269: "DocumentName",
        336: "DotRange",
        321: "HalftoneHints",
        346: "Indexed",
        347: "JPEGTables",
        285: "PageName",
        297: "PageNumber",
        317: "Predictor",
        319: "PrimaryChromaticities",
        532: "ReferenceBlackWhite",
        339: "SampleFormat",
        559: "StripRowCounts",
        330: "SubIFDs",
        292: "T4Options",
        293: "T6Options",
        325: "TileByteCounts",
        323: "TileLength",
        324: "TileOffsets",
        322: "TileWidth",
        301: "TransferFunction",
        318: "WhitePoint",
        344: "XClipPathUnits",
        286: "XPosition",
        529: "YCbCrCoefficients",
        531: "YCbCrPositioning",
        530: "YCbCrSubSampling",
        345: "YClipPathUnits",
        287: "YPosition",
        37378: "ApertureValue",
        40961: "ColorSpace",
        36868: "DateTimeDigitized",
        36867: "DateTimeOriginal",
        34665: "Exif IFD",
        36864: "ExifVersion",
        33434: "ExposureTime",
        41728: "FileSource",
        37385: "Flash",
        40960: "FlashpixVersion",
        33437: "FNumber",
        42016: "ImageUniqueID",
        37384: "LightSource",
        37500: "MakerNote",
        37377: "ShutterSpeedValue",
        37510: "UserComment",
        33723: "IPTC",
        34675: "ICC Profile",
        700: "XMP",
        42112: "GDAL_METADATA",
        42113: "GDAL_NODATA",
        34377: "Photoshop"
    },
    jW: {
        1: "BYTE",
        2: "ASCII",
        3: "SHORT",
        4: "LONG",
        5: "RATIONAL",
        6: "SBYTE",
        7: "UNDEFINED",
        8: "SSHORT",
        9: "SLONG",
        10: "SRATIONAL",
        11: "FLOAT",
        12: "DOUBLE"
    }
}), q.vn.EB = null, q.vn.getInstance = function() {
    return q.vn.EB || (q.vn.EB = new q.vn), q.vn.EB
}, q.Qs = q.ca.extend({
    In: null,
    init: function() {
        return this.In = this.BS(), !0
    },
    BS: function() {
        try {
            if (z.localStorage) return z.localStorage
        } catch (t) {}
    },
    h4: function() {},
    O6: function(t, i) {
        q.log("getBoolForKey is deprecated. Use sys.localStorage.getItem instead.");
        var n = this.px(t);
        return "true" == n || "false" != n && (n ? Boolean(n) : i || !1)
    },
    X7: function(t, i) {
        q.log("getIntegerForKey is deprecated. Use sys.localStorage.getItem instead.");
        var n = this.px(t);
        return n ? parseInt(n) : i || 0
    },
    BW: function(t, i) {
        q.log("getFloatForKey is deprecated. Use sys.localStorage.getItem instead.");
        var n = this.px(t);
        return n ? parseFloat(n) : i || 0
    },
    s7: function(t, i) {
        return q.log("getDoubleForKey is deprecated. Use sys.localStorage.getItem instead."), this.BW(t, i)
    },
    Q9: function(t, i) {
        q.log("getStringForKey is deprecated. Use sys.localStorage.getItem instead.");
        var n = this.px(t);
        return n ? String(n) : i || ""
    },
    px: function(t) {
        var i;
        return this.In && (i = this.In.getItem(t)), i
    },
    Pea: function(t, i) {
        q.log("setBoolForKey is deprecated. Use sys.localStorage.setItem instead."), this.V_(t, String(i))
    },
    Efa: function(t, i) {
        q.log("setIntegerForKey is deprecated. Use sys.localStorage.setItem instead."), t && this.HD(t, parseInt(i))
    },
    x_: function(t, i) {
        q.log("setFloatForKey is deprecated. Use sys.localStorage.setItem instead."), t && this.HD(t, parseFloat(i))
    },
    jfa: function(t, i) {
        return q.log("setDoubleForKey is deprecated. Use sys.localStorage.setItem instead."), this.x_(t, i)
    },
    V_: function(t, i) {
        q.log("setStringForKey is deprecated. Use sys.localStorage.setItem instead."), t && this.HD(t, String(i))
    },
    HD: function(t, i) {
        this.In && this.In.setItem(t, i)
    }
}), q.Qs.getInstance = function() {
    return q.log("cc.UserDefault is deprecated. Use sys.localStorage instead."), this.Wx || (this.Wx = new q.Qs, this.Wx.init()), this.Wx
}, q.Qs.Rda = function() {
    q.hasOwnProperty("Browser") && this.In && this.In.clear()
}, q.Qs.Wx = null, q.Qs.n4 = !1, q.BG = function(t, i, n, e, h) {
    if (!(1 >= (h += e))) {
        i *= .5;
        for (var s, r = h - 1, a = e; a < h; a++) {
            s = 2 * a;
            var o, c = q.a(t[2 * a], t[2 * a + 1]);
            if (0 === a) o = q.Ez(q.Li(q.pf(c, q.a(t[2 * (a + 1)], t[2 * (a + 1) + 1]))));
            else if (a === r) o = q.Ez(q.Li(q.pf(q.a(t[2 * (a - 1)], t[2 * (a - 1) + 1]), c)));
            else {
                o = q.a(t[2 * (a - 1)], t[2 * (a - 1) + 1]);
                var u = q.a(t[2 * (a + 1)], t[2 * (a + 1) + 1]),
                    l = q.Li(q.pf(u, c)),
                    f = q.Li(q.pf(o, c)),
                    d = Math.acos(q.Or(l, f));
                o = d < q.Bg(70) ? q.Ez(q.Li(q.bN(l, f))) : d < q.Bg(170) ? q.Li(q.bN(l, f)) : q.Ez(q.Li(q.pf(u, o)))
            }
            o = q.yk(o, i), n[2 * s] = c.x + o.x, n[2 * s + 1] = c.y + o.y, n[2 * (s + 1)] = c.x - o.x, n[2 * (s + 1) + 1] = c.y - o.y
        }
        for (a = 0 == e ? 0 : e - 1; a < r; a++) s = 2 * a, t = s + 2, i = q.Qw(n[2 * s], n[2 * s + 1]), h = q.Qw(n[2 * (s + 1)], n[2 * (s + 1) + 1]), s = q.Qw(n[2 * t], n[2 * t]), e = q.Qw(n[2 * (t + 1)], n[2 * (t + 1) + 1]), !(i = !q.R0(i.x, i.y, e.x, e.y, h.x, h.y, s.x, s.y)).Uu && (0 > i.value || 1 < i.value) && (i.Uu = !0), i.Uu && (n[2 * t] = e.x, n[2 * t + 1] = e.y, n[2 * (t + 1)] = s.x, n[2 * (t + 1) + 1] = s.y)
    }
}, q.R0 = function(t, i, n, e, h, s, r, a) {
    return t == n && i == e || h == r && s == a ? {
        Uu: !1,
        value: 0
    } : (n -= t, e -= i, h -= t, s -= i, r -= t, a -= i, t = Math.sqrt(n * n + e * e), n /= t, e /= t, i = h * n + s * e, s = s * n - h * e, h = i, i = r * n + a * e, a = a * n - r * e, r = i, s == a ? {
        Uu: !1,
        value: 0
    } : {
        Uu: !0,
        value: (r + (h - r) * a / (a - s)) / t
    })
}, q.p1 = function(t, i) {
    i[2] = i[3] = i[6] = i[7] = i[8] = i[9] = i[11] = i[14] = 0, i[10] = i[15] = 1, i[0] = t.e, i[4] = t.G, i[12] = t.Ra, i[1] = t.c, i[5] = t.Q, i[13] = t.Sa
}, q.L1 = function(t, i) {
    i.e = t[0], i.G = t[4], i.Ra = t[12], i.c = t[1], i.Q = t[5], i.Sa = t[13]
}, q.IG = q.ca.extend({
    hl: null,
    Gq: null,
    Vk: null,
    ctor: function() {
        this.hl = null, this.Gq = "", this.Vk = !0
    },
    init: function() {
        return !0
    },
    ba: function() {},
    kb: function() {},
    update: function() {},
    Bea: function() {},
    isEnabled: function() {
        return this.Vk
    },
    Ml: function(t) {
        this.Vk = t
    },
    getName: function() {
        return this.Gq
    },
    jG: function(t) {
        this.hl = t
    },
    H8: function() {
        return this.hl
    }
}), q.IG.create = function() {
    return new q.IG
}, q.cP = q.ca.extend({
    yf: null,
    hl: null,
    ctor: function(t) {
        this.yf = null, this.hl = t
    },
    JL: function(t) {
        return q.d(null != t, "Argument must be non-nil"), t = t.trim(), this.yf[t]
    },
    add: function(t) {
        q.d(null != t, "Argument must be non-nil"), q.d(null == t.hl, "Component already added. It can't be added again"), null == this.yf && (this.yf = {}, this.hl.yN());
        var i = this.yf[t.getName()];
        return i ? (q.d(null == i, "Component already added. It can't be added again"), !1) : (t.jG(this.hl), this.yf[t.getName()] = t, t.ba(), !0)
    },
    remove: function(t) {
        if (q.d(null != t, "Argument must be non-nil"), !this.yf) return !1;
        var i = this.yf,
            n = i[t = t.trim()];
        return !n && (n.kb(), n.jG(null), delete i[t], !0)
    },
    pN: function() {
        if (this.yf) {
            var t, i = this.yf;
            for (t in i) {
                var n = i[t];
                n.kb(), n.jG(null), delete i[t]
            }
            this.hl.zG(), this.yf = null
        }
    },
    W3: function() {
        this.yf = {}
    },
    za: function(t) {
        if (this.yf) {
            var i, n = this.yf;
            for (i in n) n[i].update(t)
        }
    },
    BX: function() {
        if (!this.yf) return !0;
        for (var t in this.yf) return !1;
        return !0
    }
}), q.TQ = "                                           \nprecision lowp float;                    \n                                         \nvarying vec4 v_fragmentColor;            \n                                         \nvoid main()                              \n{                                        \n    gl_FragColor = v_fragmentColor;      \n}                                        \n", q.UQ = "                                               \nattribute vec4 a_position;               \nuniform    vec4 u_color;                 \nuniform float u_pointSize;               \n                                         \nvarying lowp vec4 v_fragmentColor;       \n                                         \nvoid main(void)                          \n{                                        \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    gl_PointSize = u_pointSize;          \n    v_fragmentColor = u_color;           \n}", q.HQ = "                                        \nprecision lowp float;                 \nvarying vec4 v_fragmentColor;         \n                                      \nvoid main()                           \n{                                     \n     gl_FragColor = v_fragmentColor;       \n} ", q.KQ = "                                                \nattribute vec4 a_position;                \nattribute vec4 a_color;                   \n                                          \nvarying lowp vec4 v_fragmentColor;        \n                                          \nvoid main()                               \n{                                         \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor = a_color;             \n}", q.IQ = "                                               \n// #extension GL_OES_standard_derivatives : enable\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\nvarying mediump vec4 v_color;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\nvarying mediump vec2 v_texcoord;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    \n\nvoid main()\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n{\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n// #if defined GL_OES_standard_derivatives\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n// gl_FragColor = v_color*smoothstep(0.0, length(fwidth(v_texcoord)), 1.0 - length(v_texcoord));\t\t\t\t\t\t\t    \n// #else\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ngl_FragColor = v_color * step(0.0, 1.0 - length(v_texcoord));\t\t\t\t\t\t\t\t\t\t\t\t\t\t        \n// #endif\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n}", q.JQ = "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        \nattribute mediump vec4 a_position;\t\t\t\t\t\t\t\t\t\nattribute mediump vec2 a_texcoord;\t\t\t\t\t\t\t\t\t\nattribute mediump vec4 a_color;\t\t\t\t\t\t\t\t\t\t\n\nvarying mediump vec4 v_color;\t\t\t\t\t\t\t\t\t\t\nvarying mediump vec2 v_texcoord;\t\t\t\t\t\t\t\t\t    \n\nvoid main()\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n{\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n     v_color = a_color;//vec4(a_color.rgb * a_color.a, a_color.a);\t\t\t\t\n     v_texcoord = a_texcoord;\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n}", q.PQ = "                                             \nprecision lowp float;                      \n                                           \nvarying vec2 v_texCoord;                   \nuniform sampler2D CC_Texture0;             \n                                           \nvoid main()                                \n{                                          \n    gl_FragColor =  texture2D(CC_Texture0, v_texCoord);   \n}", q.SQ = "                                                   \nattribute vec4 a_position;                   \nattribute vec2 a_texCoord;                  \n                                            \nvarying mediump vec2 v_texCoord;           \n                                           \nvoid main()                                \n{                                          \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_texCoord = a_texCoord;               \n}", q.QQ = "                                                \nprecision lowp float;                        \n                                             \nuniform vec4 u_color;                        \nvarying vec2 v_texCoord;                     \n                                             \nuniform sampler2D CC_Texture0;               \n                                             \nvoid main()                                  \n{                                            \n    gl_FragColor =  texture2D(CC_Texture0, v_texCoord) * u_color;    \n}", q.RQ = "                                               \nattribute vec4 a_position;                   \nattribute vec2 a_texCoord;                   \n                                             \nvarying mediump vec2 v_texCoord;             \n                                             \nvoid main()                                  \n{                                            \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_texCoord = a_texCoord;                 \n}", q.LQ = "                                               \nprecision lowp float;                        \n                                             \nvarying vec4 v_fragmentColor;                \nvarying vec2 v_texCoord;                     \nuniform sampler2D CC_Texture0;                 \n                                             \nvoid main()                                  \n{                                            \n    gl_FragColor = vec4( v_fragmentColor.rgb,         \n        v_fragmentColor.a * texture2D(CC_Texture0, v_texCoord).a   \n    );                                       \n}", q.MQ = "                                               \nattribute vec4 a_position;                   \nattribute vec2 a_texCoord;                   \nattribute vec4 a_color;                      \n                                             \nvarying lowp vec4 v_fragmentColor;           \nvarying mediump vec2 v_texCoord;             \n                                             \nvoid main()                                  \n{                                            \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor = a_color;               \n    v_texCoord = a_texCoord;                 \n}", q.OQ = "                                               \nprecision lowp float;                        \n                                             \nvarying vec4 v_fragmentColor;                \nvarying vec2 v_texCoord;                     \nuniform sampler2D CC_Texture0;               \n                                             \nvoid main()                                  \n{                                            \n    gl_FragColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);         \n}", q.GH = "                                               \nattribute vec4 a_position;                   \nattribute vec2 a_texCoord;                   \nattribute vec4 a_color;                      \n                                             \nvarying lowp vec4 v_fragmentColor;           \nvarying mediump vec2 v_texCoord;             \n                                             \nvoid main()                                  \n{                                            \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor = a_color;               \n    v_texCoord = a_texCoord;                 \n}", q.NQ = "                                                  \nprecision lowp float;                           \n                                                \nvarying vec4 v_fragmentColor;                   \nvarying vec2 v_texCoord;                        \nuniform sampler2D CC_Texture0;                  \nuniform float CC_alpha_value;                   \n                                                \nvoid main()                                     \n{                                               \n    vec4 texColor = texture2D(CC_Texture0, v_texCoord);          \n                                                \n    // mimic: glAlphaFunc(GL_GREATER)           \n    //pass if ( incoming_pixel >= CC_alpha_value ) => fail if incoming_pixel < CC_alpha_value         \n                                                \n    if ( texColor.a <= CC_alpha_value )          \n        discard;                                \n                                                \n    gl_FragColor = texColor * v_fragmentColor;  \n}", q.Y2 = "                                                   \nprecision lowp float;                            \n                                                 \nvarying vec4 v_fragmentColor;                    \nvarying vec2 v_texCoord;                         \nuniform sampler2D u_texture;                     \nuniform sampler2D   u_mask;                      \n                                                 \nvoid main()                                      \n{                                                \n    vec4 texColor   = texture2D(u_texture, v_texCoord);          \n    vec4 maskColor  = texture2D(u_mask, v_texCoord);             \n    vec4 finalColor = vec4(texColor.r, texColor.g, texColor.b, maskColor.a * texColor.a);        \n    gl_FragColor    = v_fragmentColor * finalColor;              \n}", q.Zb = 0, q.cg = 1, q.Be = 2, q.M3 = 3, q.vB = 0, q.uB = 1, q.Ps = 2, q.zB = 3, q.yB = 4, q.tB = 5, q.wB = 6, q.xB = 7, q.G3 = 8, q.Mk = "ShaderPositionTextureColor", q.rw = "ShaderPositionTextureColorAlphaTest", q.qw = "ShaderPositionColor", q.Kp = "ShaderPositionTexture", q.sw = "ShaderPositionTexture_uColor", q.ZA = "ShaderPositionTextureA8Color", q.$A = "ShaderPosition_uColor", q.FH = "ShaderPositionLengthTextureColor", q.oR = "CC_PMatrix", q.mR = "CC_MVMatrix", q.nR = "CC_MVPMatrix", q.sR = "CC_Time", q.rR = "CC_SinTime", q.lR = "CC_CosTime", q.pR = "CC_Random01", q.qR = "CC_Texture0", q.CI = "CC_alpha_value", q.ls = "a_color", q.hn = "a_position", q.up = "a_texCoord", q.FP = function() {
    this.location = this.value = void 0, this.Ty = {}
}, q.Gj = q.ca.extend({
    oa: null,
    lc: null,
    pg: null,
    sh: null,
    mc: null,
    Yi: null,
    vK: !1,
    og: function(t, i) {
        if (null == t) return !1;
        for (var n = !0, e = null, h = 0; h < this.Yi.length; h++) this.Yi[h].location == t && (e = this.Yi[h]);
        return e ? e.value == i ? n = !1 : e.value = i : (e = new q.FP, e.location = t, e.value = i, this.Yi.push(e)), n
    },
    b4: function() {
        return "<CCGLProgram = " + this.toString() + " | Program = " + this.lc.toString() + ", VertexShader = " + this.pg.toString() + ", FragmentShader = " + this.sh.toString() + ">"
    },
    ZI: function(t, i, n) {
        return !(!n || !t) && (n = (i == this.oa.VERTEX_SHADER ? "precision highp float;\n" : "precision mediump float;\n") + "uniform mat4 CC_PMatrix;         \nuniform mat4 CC_MVMatrix;        \nuniform mat4 CC_MVPMatrix;       \nuniform vec4 CC_Time;            \nuniform vec4 CC_SinTime;         \nuniform vec4 CC_CosTime;         \nuniform vec4 CC_Random01;        \n//CC INCLUDES END                \n  \n" + n, this.oa.shaderSource(t, n), this.oa.compileShader(t), (n = this.oa.getShaderParameter(t, this.oa.COMPILE_STATUS)) || (q.log("cocos2d: ERROR: Failed to compile shader:\n" + this.oa.getShaderSource(t)), i == this.oa.VERTEX_SHADER ? q.log("cocos2d: \n" + this.S0()) : q.log("cocos2d: \n" + this.lW())), 1 == n)
    },
    ctor: function(t) {
        this.sh = this.pg = this.lc = null, this.mc = [], this.Yi = [], this.oa = t || q.q
    },
    R5: function() {
        this.Yi = this.mc = this.sh = this.pg = null, this.oa.deleteProgram(this.lc)
    },
    uk: function(t, i) {
        return this.lc = q.q.createProgram(), this.sh = this.pg = null, t && (this.pg = this.oa.createShader(this.oa.VERTEX_SHADER), this.ZI(this.pg, this.oa.VERTEX_SHADER, t) || q.log("cocos2d: ERROR: Failed to compile vertex shader")), i && (this.sh = this.oa.createShader(this.oa.FRAGMENT_SHADER), this.ZI(this.sh, this.oa.FRAGMENT_SHADER, i) || q.log("cocos2d: ERROR: Failed to compile fragment shader")), this.pg && this.oa.attachShader(this.lc, this.pg), q.Hv(), this.sh && this.oa.attachShader(this.lc, this.sh), this.Yi = [], q.Hv(), !0
    },
    pd: function(t, i) {
        return this.uk(t, i)
    },
    zX: function(t, i) {
        var n = (e = q.Yc.getInstance()).$E(e.ee(t)),
            e = e.$E(e.ee(i));
        return this.uk(n, e)
    },
    init: function(t, i) {
        return this.zX(t, i)
    },
    re: function(t, i) {
        this.oa.bindAttribLocation(this.lc, i, t)
    },
    link: function() {
        return q.d(null != this.lc, "Cannot link invalid program"), this.oa.linkProgram(this.lc), this.pg && this.oa.deleteShader(this.pg), this.sh && this.oa.deleteShader(this.sh), this.sh = this.pg = null, !(q.xp && !this.oa.getProgramParameter(this.lc, this.oa.LINK_STATUS)) || (q.log("cocos2d: ERROR: Failed to link program: " + this.lc), q.aX(this.lc), this.lc = null, !1)
    },
    Fd: function() {
        q.eF(this.lc)
    },
    N0: function() {
        this.mc[q.vB] = this.oa.getUniformLocation(this.lc, q.oR), this.mc[q.uB] = this.oa.getUniformLocation(this.lc, q.mR), this.mc[q.Ps] = this.oa.getUniformLocation(this.lc, q.nR), this.mc[q.zB] = this.oa.getUniformLocation(this.lc, q.sR), this.mc[q.yB] = this.oa.getUniformLocation(this.lc, q.rR), this.mc[q.tB] = this.oa.getUniformLocation(this.lc, q.lR), this.vK = null != this.mc[q.zB] || null != this.mc[q.yB] || null != this.mc[q.tB], this.mc[q.wB] = this.oa.getUniformLocation(this.lc, q.pR), this.mc[q.xB] = this.oa.getUniformLocation(this.lc, q.qR), this.Fd(), this.bO(this.mc[q.xB], 0)
    },
    o$: function(t) {
        return q.d(null != t, "Invalid uniform name"), q.d(0 != this.lc, "Invalid operation. Cannot get uniform location when program is not initialized"), this.oa.getUniformLocation(this.lc, t)
    },
    p$: function() {
        return this.mc[q.Ps]
    },
    q$: function() {
        return this.mc[q.xB]
    },
    bO: function(t, i) {
        this.og(t, i) && this.oa.uniform1i(t, i)
    },
    jha: function(t, i, n) {
        this.og(t, [i, n]) && this.oa.uniform2i(t, i, n)
    },
    mha: function(t, i, n, e) {
        this.og(t, [i, n, e]) && this.oa.uniform3i(t, i, n, e)
    },
    oha: function(t, i, n, e, h) {
        this.og(t, [i, n, e, h]) && this.oa.uniform4i(t, i, n, e, h)
    },
    kha: function(t, i) {
        this.og(t, i) && this.oa.uniform2iv(t, i)
    },
    nha: function(t, i) {
        this.og(t, i) && this.oa.uniform3iv(t, i)
    },
    pha: function(t, i) {
        this.og(t, i) && this.oa.uniform4iv(t, i)
    },
    hha: function(t, i) {
        this.bO(t, i)
    },
    jv: function(t, i) {
        this.og(t, i) && this.oa.uniform1f(t, i)
    },
    b0: function(t, i, n) {
        this.og(t, [i, n]) && this.oa.uniform2f(t, i, n)
    },
    c0: function(t, i, n, e) {
        this.og(t, [i, n, e]) && this.oa.uniform3f(t, i, n, e)
    },
    kv: function(t, i, n, e, h) {
        this.og(t, [i, n, e, h]) && this.oa.uniform4f(t, i, n, e, h)
    },
    iha: function(t, i) {
        this.og(t, i) && this.oa.uniform2fv(t, i)
    },
    lha: function(t, i) {
        this.og(t, i) && this.oa.uniform3fv(t, i)
    },
    Pl: function(t, i) {
        this.og(t, i) && this.oa.uniform4fv(t, i)
    },
    nG: function(t, i) {
        this.og(t, i) && this.oa.uniformMatrix4fv(t, !1, i)
    },
    gha: function() {
        if (!(2 > arguments.length)) switch (arguments.length) {
            case 2:
                this.jv(arguments[0], arguments[1]);
                break;
            case 3:
                this.b0(arguments[0], arguments[1], arguments[2]);
                break;
            case 4:
                this.c0(arguments[0], arguments[1], arguments[2], arguments[3]);
                break;
            case 5:
                this.kv(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4])
        }
    },
    lv: function() {
        var t = new q.ta,
            i = new q.ta,
            n = new q.ta;
        q.jz(q.Lk, t), q.jz(q.Kk, i), q.Dl(n, t, i), this.nG(this.mc[q.vB], t.b, 1), this.nG(this.mc[q.uB], i.b, 1), this.nG(this.mc[q.Ps], n.b, 1), this.vK && (t = q.n.getInstance(), t = t.gu * t.mh, this.kv(this.mc[q.zB], t / 10, t, 2 * t, 4 * t), this.kv(this.mc[q.yB], t / 8, t / 4, t / 2, Math.sin(t)), this.kv(this.mc[q.tB], t / 8, t / 4, t / 2, Math.cos(t))), -1 != this.mc[q.wB] && this.kv(this.mc[q.wB], Math.random(), Math.random(), Math.random(), Math.random())
    },
    eha: function() {
        this.oa.uniformMatrix4fv(this.mc[q.Ps], !1, q.JW())
    },
    fha: function(t) {
        q.Dl(t, q.Tm.top, q.Hl.top), this.oa.uniformMatrix4fv(this.mc[q.Ps], !1, t.b)
    },
    wg: function() {
        this.oa.uniformMatrix4fv(this.mc[q.uB], !1, q.Hl.top.b), this.oa.uniformMatrix4fv(this.mc[q.vB], !1, q.Tm.top.b)
    },
    S0: function() {
        return this.oa.getShaderInfoLog(this.pg)
    },
    v$: function() {
        return this.oa.getShaderInfoLog(this.pg)
    },
    O7: function() {
        return this.oa.getShaderInfoLog(this.pg)
    },
    lW: function() {
        return this.oa.getShaderInfoLog(this.sh)
    },
    Mda: function() {
        return this.oa.getProgramInfoLog(this.lc)
    },
    U8: function() {
        return this.oa.getProgramInfoLog(this.lc)
    },
    reset: function() {
        this.sh = this.pg = null, this.mc = [], this.oa.deleteProgram(this.lc), this.lc = null;
        for (var t = 0; t < this.Yi.length; t++) this.Yi[t].value = null, this.Yi[t] = null;
        this.Yi = []
    },
    So: function() {
        return this.lc
    },
    XF: function() {},
    UF: function() {}
}), q.Gj.create = function(t, i) {
    var n = new q.Gj;
    return n.init(t, i) ? n : null
}, q.L3 = 0, q.af = 1, q.Pw = 2, q.Pp = 4, q.xn = q.af | q.Pw | q.Pp, q.M1 = 0, q.eJ = -1, q.cE = !1, q.bE = !1, q.dE = !1, q.Ri && (q.jQ = 16, q.bt = -1, q.lq = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], q.Yp = -1, q.Xp = -1, q.yR = 0, q.jB && (q.mK = 0)), q.J$ = function() {
    if (q.NX(), q.eJ = -1, q.cE = !1, q.bE = !1, q.dE = !1, q.Ri) {
        q.bt = -1;
        for (var t = 0; t < q.jQ; t++) q.lq[t] = -1;
        q.Yp = -1, q.Xp = -1, q.yR = 0
    }
}, q.eF = function(t) {
    t !== q.bt && (q.bt = t, q.q.useProgram(t))
}, q.Ri || (q.eF = function(t) {
    q.q.useProgram(t)
}), q.aX = function(t) {
    q.Ri && t === q.bt && (q.bt = -1), oa.deleteProgram(t)
}, q.Th = function(t, i) {
    t === q.Yp && i === q.Xp || (q.Yp = t, q.Xp = i, q.Pz(t, i))
}, q.Pz = function(t, i) {
    var n = q.q;
    t === n.ONE && i === n.ZERO ? n.disable(n.BLEND) : (n.enable(n.BLEND), q.q.blendFunc(t, i))
}, q.$W = function(t, i) {
    if (t !== q.Yp || i !== q.Xp) {
        q.Yp = t, q.Xp = i;
        var n = q.q;
        t === n.ONE && i === n.ZERO ? n.disable(n.BLEND) : (n.enable(n.BLEND), n.blendFuncSeparate(n.SRC_ALPHA, i, t, i))
    }
}, q.Ri || (q.Th = q.Pz), q.G$ = function() {
    var t = q.q;
    t.blendEquation(t.FUNC_ADD), q.Ri ? q.Pz(q.Yp, q.Xp) : q.Pz(t.Wc, t.Vc)
}, q.VN = function() {
    q.eJ = -1
}, q.zd = function(t) {
    var i = q.q,
        n = t & q.af;
    n !== q.cE && (n ? i.enableVertexAttribArray(q.Zb) : i.disableVertexAttribArray(q.Zb), q.cE = n), (n = t & q.Pw) !== q.bE && (n ? i.enableVertexAttribArray(q.cg) : i.disableVertexAttribArray(q.cg), q.bE = n), (t &= q.Pp) !== q.dE && (t ? i.enableVertexAttribArray(q.Be) : i.disableVertexAttribArray(q.Be), q.dE = t)
}, q.Yg = function(t) {
    q.dF(0, t)
}, q.dF = function(t, i) {
    if (q.lq[t] != i) {
        q.lq[t] = i;
        var n = q.q;
        n.activeTexture(n.TEXTURE0 + t), i ? n.bindTexture(n.TEXTURE_2D, i.ce) : n.bindTexture(n.TEXTURE_2D, null)
    }
}, q.Ri || (q.dF = function(t, i) {
    var n = q.q;
    n.activeTexture(n.TEXTURE0 + t), i ? n.bindTexture(n.TEXTURE_2D, i.ce) : n.bindTexture(n.TEXTURE_2D, null)
}), q.H$ = function(t) {
    q.bX(t)
}, q.bX = function(t) {
    q.Ri && t == q.lq[0] && (q.lq[0] = -1), q.q.deleteTexture(t)
}, q.F$ = function(t) {
    q.jB && q.Ri && q.mK != t && (q.mK = t)
}, q.I$ = function() {}, q.UA = 0, q.VA = 1, q.SA = 2, q.TA = 3, q.XA = 4, q.WA = 5, q.YA = 6, q.EH = 7, q.Z2 = 8, q.Wt = null, q.ud = q.ca.extend({
    Zd: null,
    JS: function() {
        return this.jY(), !0
    },
    jg: function(t, i) {
        switch (i) {
            case q.UA:
                t.uk(q.GH, q.OQ), t.re(q.hn, q.Zb), t.re(q.ls, q.cg), t.re(q.up, q.Be);
                break;
            case q.VA:
                t.uk(q.GH, q.NQ), t.re(q.hn, q.Zb), t.re(q.ls, q.cg), t.re(q.up, q.Be);
                break;
            case q.SA:
                t.uk(q.KQ, q.HQ), t.re(q.hn, q.Zb), t.re(q.ls, q.cg);
                break;
            case q.TA:
                t.uk(q.SQ, q.PQ), t.re(q.hn, q.Zb), t.re(q.up, q.Be);
                break;
            case q.XA:
                t.uk(q.RQ, q.QQ), t.re(q.hn, q.Zb), t.re(q.up, q.Be);
                break;
            case q.WA:
                t.uk(q.MQ, q.LQ), t.re(q.hn, q.Zb), t.re(q.ls, q.cg), t.re(q.up, q.Be);
                break;
            case q.YA:
                t.uk(q.UQ, q.TQ), t.re("aVertex", q.Zb);
                break;
            case q.EH:
                t.uk(q.JQ, q.IQ), t.re(q.hn, q.Zb), t.re(q.up, q.Be), t.re(q.ls, q.cg);
                break;
            default:
                return void q.log("cocos2d: cc.ShaderCache._loadDefaultShader, error shader type")
        }
        t.link(), t.N0()
    },
    ctor: function() {
        this.Zd = {}
    },
    jY: function() {
        var t = new q.Gj;
        this.jg(t, q.UA), this.Zd[q.Mk] = t, this.Zd.ShaderPositionTextureColor = t, t = new q.Gj, this.jg(t, q.VA), this.Zd[q.rw] = t, this.Zd.ShaderPositionTextureColorAlphaTest = t, t = new q.Gj, this.jg(t, q.SA), this.Zd[q.qw] = t, this.Zd.ShaderPositionColor = t, t = new q.Gj, this.jg(t, q.TA), this.Zd[q.Kp] = t, this.Zd.ShaderPositionTexture = t, t = new q.Gj, this.jg(t, q.XA), this.Zd[q.sw] = t, this.Zd.ShaderPositionTextureUColor = t, t = new q.Gj, this.jg(t, q.WA), this.Zd[q.ZA] = t, this.Zd.ShaderPositionTextureA8Color = t, t = new q.Gj, this.jg(t, q.YA), this.Zd[q.$A] = t, this.Zd.ShaderPositionUColor = t, t = new q.Gj, this.jg(t, q.EH), this.Zd[q.FH] = t, this.Zd.ShaderPositionLengthTextureColor = t
    },
    bea: function() {
        var t = this.Hc(q.Mk);
        t.reset(), this.jg(t, q.UA), (t = this.Hc(q.rw)).reset(), this.jg(t, q.VA), (t = this.Hc(q.qw)).reset(), this.jg(t, q.SA), (t = this.Hc(q.Kp)).reset(), this.jg(t, q.TA), (t = this.Hc(q.sw)).reset(), this.jg(t, q.XA), (t = this.Hc(q.ZA)).reset(), this.jg(t, q.WA), (t = this.Hc(q.$A)).reset(), this.jg(t, q.YA)
    },
    Hc: function(t) {
        return this.Zd[t]
    },
    So: function(t) {
        return this.Zd[t]
    },
    T4: function(t, i) {
        this.Zd[i] = t
    }
}), q.ud.getInstance = function() {
    return q.Wt || (q.Wt = new q.ud, q.Wt.JS()), q.Wt
}, q.ud.Uda = function() {
    q.Wt = null
}, q.fH = -1, q.p2 = null, q.q2 = null, q.WZ = 1, q.r = q.ca.extend({
    jb: 0,
    qy: 0,
    Gh: 0,
    kj: 0,
    Ja: 1,
    Ta: 1,
    ea: null,
    Le: 0,
    Me: 0,
    B: null,
    zc: !0,
    Gg: null,
    ic: null,
    ja: null,
    Ke: !1,
    kc: null,
    Xj: !1,
    D: q.fH,
    uK: null,
    ZD: null,
    lk: !0,
    xx: !0,
    $w: !0,
    G4: null,
    Rg: null,
    wJ: null,
    jf: !1,
    Wb: null,
    Ig: 0,
    mi: null,
    Ng: null,
    uJ: !1,
    Ts: !1,
    Ww: null,
    Rk: null,
    RC: !1,
    kl: 0,
    Nt: 0,
    KC: function() {
        this.Gg = q.a(0, 0), this.ic = q.a(0, 0), this.ja = q.size(0, 0), this.ea = q.a(0, 0), this.B = [];
        var t = q.n.getInstance();
        this.mi = t.Sh(), this.Ng = t.rg(), this.uJ = !0, this.Ww = {
            e: 1,
            c: 0,
            G: 0,
            Q: 1,
            Ra: 0,
            Sa: 0
        }, this.Rk = new q.cP(this)
    },
    init: function() {
        return !1 === this.uJ && this.KC(), !0
    },
    nh: function(t, i) {
        if (t && 0 !== t.length) {
            var n, e, h = t.length;
            switch (n = q.r.Fg, i) {
                case n.ba:
                    for (n = 0; n < h; n++)(e = t[n]) && e.ba();
                    break;
                case n.kb:
                    for (n = 0; n < h; n++)(e = t[n]) && e.kb();
                    break;
                case n.Yh:
                    for (n = 0; n < h; n++)(e = t[n]) && e.Yh();
                    break;
                case n.Ug:
                    for (n = 0; n < h; n++)(e = t[n]) && e.Ug();
                    break;
                case n.yg:
                    for (n = 0; n < h; n++)(e = t[n]) && e.yg();
                    break;
                case n.Zh:
                    for (n = 0; n < h; n++)(e = t[n]) && e.Zh();
                    break;
                case n.qf:
                    for (n = 0; n < h; n++)(e = t[n]) && e.qf();
                    break;
                default:
                    throw "Unknown callback function"
            }
        }
    },
    Ha: null,
    lU: function() {
        this.io(), !1 === this.lk && (this.lk = this.xx = !0)
    },
    mU: function() {
        !1 === this.lk && (this.lk = this.xx = !0)
    },
    z9: function() {
        return this.Le
    },
    Xz: function(t) {
        this.Le = t, this.Ha()
    },
    A9: function() {
        return this.Me
    },
    Yz: function(t) {
        this.Me = t, this.Ha()
    },
    D$: function() {
        return this.jb
    },
    Mq: function(t) {
        this.jb = t
    },
    f0: function(t) {
        this.Mq(t), this.kc && this.kc.gp(this, t)
    },
    w$: function() {
        return this.qy
    },
    Zz: function(t) {
        this.qy = t
    },
    ZE: function() {
        return q.d(this.Gh == this.kj, "CCNode#rotation. RotationX != RotationY. Don't know which one to return"), this.Gh
    },
    we: function(t) {
        this.Gh = this.kj = t, this.kl = .017453292519943295 * this.Gh, this.Nt = .017453292519943295 * this.kj, this.Ha()
    },
    n9: function() {
        return this.Gh
    },
    Vz: function(t) {
        this.Gh = t, this.kl = .017453292519943295 * this.Gh, this.Ha()
    },
    o9: function() {
        return this.kj
    },
    Wz: function(t) {
        this.kj = t, this.Nt = .017453292519943295 * this.kj, this.Ha()
    },
    QW: function() {
        return q.d(this.Ja == this.Ta, "cc.Node#scale. ScaleX != ScaleY. Don't know which one to return"), this.Ja
    },
    vb: function(t, i) {
        this.Ja = t, this.Ta = i || 0 === i ? i : t, this.Ha()
    },
    RW: function() {
        return this.Ja
    },
    ah: function(t) {
        this.Ja = t, this.Ha()
    },
    SW: function() {
        return this.Ta
    },
    bn: function(t) {
        this.Ta = t, this.Ha()
    },
    i: function(t, i) {
        var n = this.ea;
        2 == arguments.length ? (n.x = t, n.y = i) : 1 == arguments.length && (n.x = t.x, n.y = t.y), this.Ha()
    },
    Na: function() {
        return q.a(this.ea.x, this.ea.y)
    },
    Gc: function() {
        return this.ea.x
    },
    $m: function(t) {
        this.ea.x = t, this.Ha()
    },
    Bc: function() {
        return this.ea.y
    },
    Ol: function(t) {
        this.ea.y = t, this.Ha()
    },
    X6: function() {
        return this.B.length
    },
    W6: function() {
        return this.B
    },
    Haa: function() {
        return this.zc
    },
    M: function(t) {
        this.zc = t, this.Ha()
    },
    Qo: function() {
        return q.a(this.Gg.x, this.Gg.y)
    },
    v: function(t) {
        i = this.Gg;
        if (!q.Sr(t, i)) {
            i.x = t.x, i.y = t.y;
            var i = this.ic,
                n = this.ja;
            i.x = n.width * t.x, i.y = n.height * t.y, this.Ha()
        }
    },
    UE: function() {
        return q.a(this.ic.x, this.ic.y)
    },
    g: function() {
        return q.size(this.ja.width, this.ja.height)
    },
    Db: function(t) {
        var i = this.ja;
        if (!q.pG(t, i)) {
            i.width = t.width, i.height = t.height, t = this.ic;
            var n = this.Gg;
            t.x = i.width * n.x, t.y = i.height * n.y, this.Ha()
        }
    },
    xaa: function() {
        return this.Ke
    },
    getParent: function() {
        return this.kc
    },
    lp: function(t) {
        this.kc = t
    },
    kaa: function() {
        return this.Xj
    },
    Vy: function(t) {
        t != this.Xj && (this.Xj = t, this.Ha())
    },
    WW: function() {
        return this.D
    },
    Qc: function(t) {
        this.D = t
    },
    getUserData: function() {
        return this.uK
    },
    setUserData: function(t) {
        this.uK = t
    },
    t$: function() {
        return this.ZD
    },
    sha: function(t) {
        this.ZD != t && (this.ZD = t)
    },
    D8: function() {
        return this.Ig
    },
    bs: function(t) {
        this.Ig = t
    },
    Sh: function() {
        return this.mi || (this.mi = q.n.getInstance().Sh()), this.mi
    },
    e_: function(t) {
        this.mi != t && (this.Ed(), this.mi = t)
    },
    rg: function() {
        return this.Ng || (this.Ng = q.n.getInstance().rg()), this.Ng
    },
    R_: function(t) {
        this.Ng != t && (this.sp(), this.Ng = t)
    },
    rk: function() {
        var t = q.rect(0, 0, this.ja.width, this.ja.height);
        return q.zR(t, this.Xh())
    },
    Ug: function() {
        this.Ed(), this.sp(), this.nh(this.B, q.r.Fg.Ug)
    },
    description: function() {
        return "<cc.Node | Tag =" + this.D + ">"
    },
    od: function(t) {
        var i = this.B;
        if (null != i)
            for (var n = 0; n < i.length; n++) {
                var e = i[n];
                if (e && e.D == t) return e
            }
        return null
    },
    l: function(t, i, n) {
        t === this ? console.warn("cc.Node.addChild: An Node can't be added as a child of itself.") : (q.d(null != t, "Argument must be non-nil"), null !== t.kc ? q.d(null === t.kc, "child already added. It can't be added again") : (i = null != i ? i : t.jb, t.D = null != n ? n : t.D, this.WS(t, i), t.kc = this, this.Ke && (t.ba(), this.RC && t.Yh())))
    },
    Cb: function(t) {
        this.kc && (null == t && (t = !0), this.kc.removeChild(this, t))
    },
    EZ: function(t) {
        q.log("removeFromParentAndCleanup is deprecated. Use removeFromParent instead"), this.Cb(t)
    },
    removeChild: function(t, i) {
        0 !== this.B.length && (null == i && (i = !0), -1 < this.B.indexOf(t) && this.jS(t, i), this.Ha())
    },
    dp: function(t, i) {
        q.d(t != q.fH, "Invalid tag");
        var n = this.od(t);
        null == n ? q.log("cocos2d: removeChildByTag(tag = " + t + "): child not found!") : this.removeChild(n, i)
    },
    dea: function(t) {
        q.log("removeAllChildrenWithCleanup is deprecated. Use removeAllChildren instead"), this.ci(t)
    },
    ci: function(t) {
        var i = this.B;
        if (null != i) {
            null == t && (t = !0);
            for (var n = 0; n < i.length; n++) {
                var e = i[n];
                e && (this.Ke && (e.Zh(), e.kb()), t && e.Ug(), e.lp(null))
            }
            this.B.length = 0
        }
    },
    jS: function(t, i) {
        this.Ke && (t.Zh(), t.kb()), i && t.Ug(), t.lp(null), q.Zf(this.B, t)
    },
    WS: function(t, i) {
        this.jf = !0, this.B.push(t), t.Mq(i)
    },
    gp: function(t, i) {
        q.d(null != t, "Child must be non-nil"), this.jf = !0, t.bs(q.WZ++), t.Mq(i), this.Ha()
    },
    qf: function() {
        if (this.jf) {
            var t, i, n, e = this.B,
                h = e.length;
            for (t = 0; t < h; t++) {
                var s = e[t];
                for (n = e[i = t - 1]; 0 <= i && (s.jb < n.jb || s.jb == n.jb && s.Ig < n.Ig);) e[i + 1] = n, i -= 1, n = e[i];
                e[i + 1] = s
            }
            this.jf = !1
        }
    },
    xa: function() {},
    jA: function() {
        null != this.kc && (this.kc.jA(), this.kc.transform())
    },
    ba: function() {
        this.RC = !1, this.Ke = !0, this.nh(this.B, q.r.Fg.ba), this.vN()
    },
    Yh: function() {
        this.RC = !0, this.nh(this.B, q.r.Fg.Yh)
    },
    Zh: function() {
        this.nh(this.B, q.r.Fg.Zh)
    },
    kb: function() {
        this.Ke = !1, this.eN(), this.nh(this.B, q.r.Fg.kb), this.Rk.pN()
    },
    A: function(t) {
        return q.d(null != t, "Argument must be non-nil"), this.Sh().hV(t, this, !this.Ke), t
    },
    Ed: function() {
        this.Sh().qN(this)
    },
    p0: function(t) {
        this.Sh().oN(t)
    },
    q0: function(t) {
        q.d(t != q.tp, "Invalid tag"), this.Sh().zZ(t, this)
    },
    TE: function(t) {
        return q.d(t != q.tp, "Invalid tag"), this.Sh().TE(t, this)
    },
    Zca: function() {
        return this.Sh().sY(this)
    },
    yN: function() {
        this.AN(0)
    },
    AN: function(t) {
        this.rg().zN(this, t, !this.Ke)
    },
    zG: function() {
        this.rg().hs(this)
    },
    di: function(t, i, n, e) {
        i = i || 0, q.d(t, "Argument must be non-nil"), q.d(0 <= i, "Argument must be positive"), n = null == n ? q.As : n, e = e || 0, this.rg().YZ(this, t, i, n, e, !this.Ke)
    },
    a_: function(t, i) {
        this.di(t, 0, 0, i)
    },
    Sl: function(t) {
        t && this.rg().xO(this, t)
    },
    sp: function() {
        this.rg().wO(this)
    },
    vN: function() {
        this.rg().hp(this), this.Sh().hp(this)
    },
    eN: function() {
        this.rg().cv(this), this.Sh().cv(this)
    },
    Fea: function(t) {
        this.Ww = t, this.Ts = this.lk = !0
    },
    Ada: function() {
        return this.xx && (this.wJ = q.FG(this.Xh()), this.xx = !1), this.wJ
    },
    LF: function() {
        for (var t = this.Xh(), i = this.kc; null != i; i = i.getParent()) t = q.vp(t, i.Xh());
        return t
    },
    V0: function() {
        return q.FG(this.LF())
    },
    ed: function(t) {
        return q.yH(t, this.V0())
    },
    yd: function(t) {
        return q.yH(t, this.LF())
    },
    KV: function(t) {
        return q.pf(this.ed(t), this.ic)
    },
    E5: function(t) {
        return t = q.Rf(t, this.ic), this.yd(t)
    },
    a4: function(t) {
        return t = this.yd(t), q.n.getInstance().LV(t)
    },
    MV: function(t) {
        return this.ed(t.Mc)
    },
    F5: function(t) {
        return t = t.Mc, t = q.n.getInstance().JV(t), this.KV(t)
    },
    update: function(t) {
        this.Rk && !this.Rk.BX() && this.Rk.za(t)
    },
    yg: function() {
        this.nh(this.B, q.r.Fg.yg)
    },
    XF: function() {},
    UF: function() {},
    JL: function(t) {
        return this.Rk.JL(t)
    },
    N4: function(t) {
        this.Rk.add(t)
    },
    iea: function(t) {
        return this.Rk.remove(t)
    },
    eea: function() {
        this.Rk.pN()
    },
    jK: null,
    OD: null,
    CC: null,
    bq: null,
    vh: null,
    ctor: null,
    Ui: function() {
        this.KC()
    },
    Vi: function() {
        this.KC();
        var t = new q.ta;
        t.b[2] = t.b[3] = t.b[6] = t.b[7] = t.b[8] = t.b[9] = t.b[11] = t.b[14] = 0, t.b[10] = t.b[15] = 1, this.jK = t, this.CC = 0, this.OD = new q.ta
    },
    za: null,
    pu: function(t) {
        if (this.zc) {
            t = t || q.q;
            var i, n, e = this.B;
            t.save(), this.transform(t);
            var h = e.length;
            if (0 < h) {
                for (this.qf(), i = 0; i < h && 0 > (n = e[i]).jb; i++) n.za(t);
                for (this.xa(t); i < h; i++) e[i].za(t)
            } else this.xa(t);
            this.Ig = 0, t.restore()
        }
    },
    qu: function() {
        if (this.zc) {
            var t, i = q.q,
                n = q.Oc;
            n.stack.push(n.top), q.Cl(this.OD, n.top), n.top = this.OD;
            var e = this.vh;
            e && e.Sp && e.xy(), this.transform();
            var h = this.B;
            if (h && 0 < h.length) {
                var s = h.length;
                for (this.qf(), t = 0; t < s && (h[t] && 0 > h[t].jb); t++) h[t].za();
                for (this.xa(i); t < s; t++) h[t] && h[t].za()
            } else this.xa(i);
            this.Ig = 0, e && e.Sp && e.ty(this), n.top = n.stack.pop()
        }
    },
    transform: null,
    NU: function(t) {
        t = t || q.q;
        var i = this.Xh();
        t.transform(i.e, i.G, i.c, i.Q, i.Ra, -i.Sa)
    },
    OU: function() {
        var t = this.jK,
            i = q.Oc.top,
            n = this.Xh(),
            e = t.b;
        e[0] = n.e, e[4] = n.G, e[12] = n.Ra, e[1] = n.c, e[5] = n.Q, e[13] = n.Sa, e[14] = this.qy, q.Dl(i, i, t), null == this.bq || null != this.vh && this.vh.Gi() || (t = this.ic.x, i = this.ic.y, 0 !== t || 0 !== i ? (q.kz(q.ih(t), q.ih(i)), this.bq.GF(), q.kz(q.ih(-t), q.ih(-i))) : this.bq.GF())
    },
    Xh: null,
    aD: function() {
        if (this.Rg || (this.Rg = {
                e: 1,
                c: 0,
                G: 0,
                Q: 1,
                Ra: 0,
                Sa: 0
            }), this.lk) {
            var t = this.Rg;
            t.Ra = this.ea.x, t.Sa = this.ea.y;
            var i = 1,
                n = 0;
            this.Gh && (i = Math.cos(this.kl), n = Math.sin(this.kl)), t.e = t.Q = i, t.c = -n, t.G = n;
            var e = this.Ja,
                h = this.Ta,
                s = this.ic.x,
                r = this.ic.y,
                a = 1e-6 > e && -1e-6 < e ? 1e-6 : e,
                o = 1e-6 > h && -1e-6 < h ? 1e-6 : h;
            if (this.Le || this.Me) {
                var c = Math.tan(-this.Le * Math.PI / 180),
                    u = Math.tan(-this.Me * Math.PI / 180),
                    l = r * c * a,
                    f = s * u * o;
                t.e = i + -n * u, t.c = i * c - n, t.G = n + i * u, t.Q = n * c + i, t.Ra += i * l + -n * f, t.Sa += n * l + i * f
            }
            1 === e && 1 === h || (t.e *= a, t.G *= a, t.c *= o, t.Q *= o), t.Ra += i * -s * a + -n * r * o, t.Sa -= n * -s * a + i * r * o, this.Xj && (t.Ra += s, t.Sa += r), this.Ts && (this.Rg = q.vp(this.Rg, this.Ww), this.Ts = !1), this.lk = !1
        }
        return this.Rg
    },
    pT: function() {
        if (this.lk) {
            var t = this.ea.x,
                i = this.ea.y,
                n = this.ic.x,
                e = -n,
                h = this.ic.y,
                s = -h,
                r = this.Ja,
                a = this.Ta;
            this.Xj && (t += n, i += h);
            var o = 1,
                c = 0,
                u = 1,
                l = 0;
            0 === this.Gh && 0 === this.kj || (o = Math.cos(-this.kl), c = Math.sin(-this.kl), u = Math.cos(-this.Nt), l = Math.sin(-this.Nt));
            var f = this.Le || this.Me;
            f || 0 === n && 0 === h || (t += u * e * r + -c * s * a, i += l * e * r + o * s * a), t = {
                e: u * r,
                c: l * r,
                G: -c * a,
                Q: o * a,
                Ra: t,
                Sa: i
            }, f && (t = q.vp({
                e: 1,
                c: Math.tan(q.Bg(this.Me)),
                G: Math.tan(q.Bg(this.Le)),
                Q: 1,
                Ra: 0,
                Sa: 0
            }, t), 0 !== n || 0 !== h) && (t = q.WO(t, e, s)), this.Ts && (t = q.vp(t, this.Ww), this.Ts = !1), this.Rg = t, this.lk = !1
        }
        return this.Rg
    },
    io: function() {
        this.$w = !0, this.kc && this.kc.io()
    },
    Ro: function() {
        return this.bq || (this.bq = new q.ms), this.bq
    },
    Pd: function() {
        return this.vh
    },
    z_: function(t) {
        this.vh = t
    },
    yr: function() {
        return this.Wb
    },
    xe: function(t) {
        this.Wb = t
    },
    R7: function() {
        return this.CC
    },
    zfa: function(t) {
        this.CC = t
    },
    GL: function() {
        var t = q.rect(0, 0, this.ja.width, this.ja.height),
            t = q.EQ(t, this.LF()),
            t = q.rect(0 | t.x - 4, 0 | t.y - 4, 0 | t.width + 8, 0 | t.height + 8);
        if (!this.B) return t;
        for (var i = this.B, n = 0; n < i.length; n++) {
            var e = i[n];
            e && e.zc && (e = e.GL()) && (t = q.tZ(t, e))
        }
        return t
    }
}), q.pa.Rc ? (b = q.r.prototype, b.ctor = q.r.prototype.Vi, b.Ha = q.r.prototype.mU, b.za = q.r.prototype.qu, b.transform = q.r.prototype.OU, b.Xh = q.r.prototype.pT) : (b = q.r.prototype, b.ctor = q.r.prototype.Ui, b.Ha = q.r.prototype.lU, b.za = q.r.prototype.pu, b.transform = q.r.prototype.NU, b.Xh = q.r.prototype.aD), q.r.create = function() {
    return new q.r
}, q.r.Fg = {
    ba: 1,
    kb: 2,
    Ug: 3,
    Yh: 4,
    yg: 5,
    Zh: 6,
    qf: 7
}, q.Lb = q.r.extend({
    Ae: !0,
    hb: 255,
    hf: 255,
    gb: null,
    bd: null,
    wf: !1,
    xf: !1,
    ctor: function() {
        q.r.prototype.ctor.call(this), this.hf = this.hb = 255, this.bd = this.gb = q.Rs, this.xf = this.wf = !1
    },
    Ei: function() {
        return this.hf
    },
    ML: function() {
        return this.hb
    },
    w: function(t) {
        if (this.hb = this.hf = t, this.xf) {
            t = 255;
            var i = this.kc;
            i && i.Ae && i.Su() && (t = i.hb), this.Yf(t)
        }
    },
    Yf: function(t) {
        if (this.hb = this.hf * t / 255, this.xf) {
            t = this.B;
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n && n.Ae && n.Yf(this.hb)
            }
        }
    },
    Su: function() {
        return this.xf
    },
    Ym: function(t) {
        this.xf = t
    },
    Pc: function() {
        var t = this.bd;
        return new q.oc(t.h, t.f, t.c)
    },
    LL: function() {
        return this.gb
    },
    Qa: function(t) {
        var i = this.gb,
            n = this.bd;
        i.h = t.h, i.f = t.f, i.c = t.c, n.h = t.h, n.f = t.f, n.c = t.c, this.wf && (t = q.zg(), (i = this.kc) && i.Ae && i.Ru() && (t = i.gb), this.Xf(t))
    },
    Xf: function(t) {
        var i = this.gb,
            n = this.bd;
        if (i.h = n.h * t.h / 255, i.f = n.f * t.f / 255, i.c = n.c * t.c / 255, this.wf)
            for (t = this.B, n = 0; n < t.length; n++) {
                var e = t[n];
                e && e.Ae && e.Xf(i)
            }
    },
    Ru: function() {
        return this.wf
    },
    Xm: function(t) {
        this.wf = t
    },
    Uf: function() {},
    Bl: function() {
        return !1
    }
}), q.Xc = {}, q.Xc.AK = function(t) {
    for (var i in q.Xc.IF) t[i] = q.Xc.IF[i]
}, q.Xc.IF = {
    i: function(t, i) {
        2 == arguments.length ? (this.ea.x = t, this.ea.y = i) : this.ea = t, this.Ha(), this.la.wv(this.ea.x, -this.ea.y)
    },
    Ol: function(t) {
        this.ea.y = t, this.Ha(), this.la.wv(this.ea.x, -this.ea.y)
    },
    $m: function(t) {
        this.ea.x = t, this.Ha(), this.la.wv(this.ea.x, -this.ea.y)
    },
    vb: function(t, i) {
        this.Ja = t, this.Ta = i || t, this.Ha(), this.la.resize(this.Ja, this.Ta)
    },
    ah: function(t) {
        this.Ja = t, this.Ha(), this.la.resize(this.Ja, this.Ta)
    },
    bn: function(t) {
        this.Ta = t, this.Ha(), this.la.resize(this.Ja, this.Ta)
    },
    v: function(t) {
        this.Gg = t, this.ic = q.a(this.ja.width * this.Gg.x, this.ja.height * this.Gg.y), this.la.style[q.Sb.Rr + "TransformOrigin"] = this.ic.x + "px " + -this.ic.y + "px", this.Xj ? (this.la.style.marginLeft = 0, this.la.style.marginBottom = 0) : (this.la.style.marginLeft = this.Gaa ? 0 : -this.ic.x + "px", this.la.style.marginBottom = -this.ic.y + "px"), this.Ha()
    },
    Db: function(t) {
        q.pG(t, this.ja) || (this.ja = t, this.ic = q.a(this.ja.width * this.Gg.x, this.ja.height * this.Gg.y), this.la.width = t.width, this.la.height = t.height, this.v(this.Qo())), this.canvas && (this.canvas.width = this.ja.width, this.canvas.height = this.ja.height), this.Ha(), this.uZ()
    },
    we: function(t) {
        this.UJ != t && (this.Gh = this.kj = t, this.kl = Math.PI / 180 * this.Gh, this.Nt = Math.PI / 180 * this.kj, this.Ha(), this.la.rotate(t))
    },
    Xz: function(t) {
        this.Le = t, this.Ha(), this.la.YN(this.Le, this.Me)
    },
    Yz: function(t) {
        this.Me = t, this.Ha(), this.la.YN(this.Le, this.Me)
    },
    M: function(t) {
        this.zc = t, this.Ha(), this.la && (this.la.style.display = t ? "block" : "none")
    },
    Mq: function(t) {
        this.jb = t, this.Ha(), this.la && (this.la.zIndex = t)
    },
    lp: function(t) {
        this.kc = t, null !== t && (t.v(t.Qo()), this.Ha(), q.Xc.Gz(this))
    },
    vN: function() {
        this.rg().hp(this), this.Sh().hp(this), this.la && !this.la.parentNode && (this.getParent() ? q.Xc.Gz(this) : this.la.Do(q.Of)), this.la && (this.la.style.visibility = "visible")
    },
    eN: function() {
        this.rg().cv(this), this.Sh().cv(this), this.la && (this.la.style.visibility = "hidden")
    },
    Ug: function() {
        this.Ed(), this.sp(), this.nh(this.B, q.r.Fg.Ug), this.la && this.la.remove()
    },
    EZ: function() {
        this.la.remove()
    },
    w: function(t) {
        this.He = t, this.la.style.opacity = t / 255
    },
    uZ: function() {
        if (this.mM) {
            var t = this.B;
            this.B = [], q.m.prototype.za.call(this, this.ir), this.B = t
        } else q.m.prototype.za.call(this, this.ir)
    }
}, q.Xc.WT = function() {
    var t = q.Sb("#EGLViewDiv");
    if (t) {
        var i = q.Dc.getInstance(),
            n = i.je,
            e = i.mf,
            h = i.Ub,
            s = n.width,
            r = n.height;
        0 === n.width && 0 === n.height && (s = h.width, r = h.height);
        var n = e.size.width,
            a = e.size.height;
        0 === e.size.width && 0 === e.size.height && (n = h.width, a = h.height), t.style.position = "absolute", t.style.width = s + "px", t.style.maxHeight = r + "px", t.style.margin = 0, t.resize(i.Ja, i.Ta), t.style.left = n < h.width ? (n - s) / 2 + (h.width - n) / 2 + "px" : (n - s) / 2 + "px", t.style.bottom = a < h.height ? (h.height - a) / 2 + "px" : "0px"
    }
}, q.Xc.Gz = function(t) {
    var i = t.getParent();
    if (i && t.la)
        if (i.la || (q.Xc.bZ(i), i.lp = q.Xc.IF.lp), t.la.Do(i.la), i.v(i.Qo()), i.getParent()) q.Xc.Gz(i);
        else if (i.Ke)
        if (t = q.Sb("#EGLViewDiv")) i.la.Do(t);
        else {
            (t = q.Hk("div")).id = "EGLViewDiv";
            var n = q.Dc.getInstance(),
                e = n.je,
                h = n.mf,
                s = n.Ub,
                r = e.width,
                a = e.height;
            0 === e.width && 0 === e.height && (r = s.width, a = s.height);
            var e = h.size.width,
                o = h.size.height;
            0 === h.size.width && 0 === h.size.height && (e = s.width, o = s.height), t.style.position = "absolute", t.style.width = r + "px", t.style.maxHeight = a + "px", t.style.margin = 0, t.resize(n.Ja, n.Ta), t.style.left = e < s.width ? (e - r) / 2 + (s.width - e) / 2 + "px" : (e - r) / 2 + "px", t.style.bottom = o < s.height ? (s.height - o) / 2 + "px" : "0px", i.la.Do(t), t.Do(q.Of)
        }
}, q.Xc.setTransform = function(t) {
    if (t.ir)
        if (t.ir.translate(t.UE().x, t.UE().y), t.mM) {
            var i = t.B;
            t.B = [], q.m.prototype.za.call(t, t.ir), t.B = i
        } else q.m.prototype.za.call(t, t.ir);
    t.la && (t.la.position.x = t.Na().x, t.la.position.y = -t.Na().y, t.la.rotation = t.ZE(), t.la.scale = {
        x: t.Ja,
        y: t.Ta
    }, t.la.Ql = {
        x: t.Le,
        y: t.Me
    }, t.v && t.v(t.Qo()), t.la.fn(), t.la.position.y = -t.Na().y, t.la.rotation = t.ZE(), t.la.scale = {
        x: t.Ja,
        y: t.Ta
    }, t.la.Ql = {
        x: t.Le,
        y: t.Me
    }, t.v && t.v(t.Qo()), t.la.fn())
}, q.Xc.kW = function(t) {
    t.la = q.Hk("div"), t.canvas = q.Hk("canvas"), t.canvas.width = t.g().width, t.canvas.height = t.g().height, t.la.style.position = "absolute", t.la.style.bottom = 0, t.ir = t.canvas.getContext("2d"), t.la.appendChild(t.canvas), t.getParent() && q.Xc.Gz(t), t.mM = !0
}, q.Xc.bZ = function(t) {
    t.la = q.Hk("div"), t.placeholder = !0, t.la.style.position = "absolute", t.la.style.bottom = 0, t.la.style.width = (t.g().width || q.n.getInstance().Y.width) + "px", t.la.style.maxHeight = (t.g().height || q.n.getInstance().Y.height) + "px", t.la.style.margin = 0, q.Xc.setTransform(t), t.la.fn(), q.Xc.AK(t)
}, q.Xc.RK = function(t) {
    if (1 < arguments.length) q.Xc.RK(arguments);
    else if (1 != arguments.length || arguments[0].length)
        for (var i = arguments[0], n = 0; n < i.length; n++) i[n] instanceof q.m ? i[n].la || q.Xc.kW(i[n]) : q.log("DOM converter only supports sprite and menuitems yet"), q.Xc.AK(i[n]), i[n].za = function() {}, i[n].transform = function() {}, q.Xc.setTransform(i[n]), i[n].M(i[n].zc);
    else q.Xc.RK([arguments[0]])
}, q.td = q.Lb.extend({
    Ae: !0,
    zq: 0,
    BJ: 0,
    Yj: 0,
    $i: 0,
    En: null,
    X: null,
    fb: !1,
    t: null,
    eo: 0,
    vx: !1,
    ctor: function() {
        q.Lb.prototype.ctor.call(this), this.En = q.zg(), this.t = {
            src: q.Wc,
            sa: q.Vc
        }, this.vx = !1
    },
    js: function() {
        q.d(!1, "cc.AtlasNode:Abstract updateAtlasValue not overridden")
    },
    Pc: function() {
        return this.fb ? this.En : q.Lb.prototype.Pc.call(this)
    },
    Uf: function(t) {
        var i = this.Pc();
        this.fb = t, this.Qa(i)
    },
    Bl: function() {
        return this.fb
    },
    Mm: function() {
        return this.t
    },
    $g: function(t, i) {
        this.t = 1 == arguments.length ? t : {
            src: t,
            sa: i
        }
    },
    mp: function(t) {
        this.X = t
    },
    aF: function() {
        return this.X
    },
    Y8: function() {
        return this.eo
    },
    iga: function(t) {
        this.eo = t
    },
    Gm: null,
    kg: null,
    nK: null,
    ex: null,
    xX: function(t, i, n, e) {
        return q.d(null != t, "title should not be null"), t = q.Ka.getInstance().cc(t), this.Ea(t, i, n, e)
    },
    Ea: null,
    vt: function(t, i, n, e) {
        return this.Yj = i, this.$i = n, this.fb = !0, this.kg = t, this.kg ? (this.Gm = this.kg, this.ax(), this.eo = e, !0) : (q.log("cocos2d: Could not initialize cc.AtlasNode. Invalid Texture."), !1)
    },
    wt: function(t, i, n, e) {
        return this.Yj = i, this.$i = n, this.En = q.Rs, this.fb = !0, this.t.src = q.Wc, this.t.sa = q.Vc, i = this.bd, this.ex = new Float32Array([i.h / 255, i.f / 255, i.c / 255, this.hf / 255]), this.X = new q.wn, this.X.Ea(t, e), this.X ? (this.Mh(), this.tK(), this.ax(), this.eo = e, this.xe(q.ud.getInstance().Hc(q.sw)), this.nK = q.q.getUniformLocation(this.yr().So(), "u_color"), !0) : (q.log("cocos2d: Could not initialize cc.AtlasNode. Invalid Texture."), !1)
    },
    xa: null,
    fg: function(t) {
        t = t || q.q, q.xs(this), q.Th(this.t.src, this.t.sa), t.uniform4fv(this.nK, this.ex), this.X.nL(this.eo, 0)
    },
    Qa: null,
    Pt: function(t) {
        var i = this.bd;
        if (i.h != t.h || i.f != t.f || i.c != t.c) {
            if (i = new q.oc(t.h, t.f, t.c), this.En = t, this.fb) {
                var n = this.hb;
                i.h = i.h * n / 255, i.f = i.f * n / 255, i.c = i.c * n / 255
            }
            q.Lb.prototype.Qa.call(this, t), this.ia() && (t = this.kg.Fc) && (i = q.Ka.getInstance().Ry(t)) && (n = q.rect(0, 0, t.width, t.height), t = q.sr(t, i, this.bd, n), (i = new q.rb).Qd(t), i.Bd(), this.ya(i))
        }
    },
    ED: function(t) {
        var i = q.oc(t.h, t.f, t.c);
        this.En = t;
        var n = this.hb;
        this.fb && (i.h = i.h * n / 255, i.f = i.f * n / 255, i.c = i.c * n / 255), q.Lb.prototype.Qa.call(this, t), t = this.gb, this.ex = new Float32Array([t.h / 255, t.f / 255, t.c / 255, n / 255])
    },
    w: null,
    jo: function(t) {
        q.Lb.prototype.w.call(this, t), this.fb && this.Qa(this.En)
    },
    Rt: function(t) {
        q.Lb.prototype.w.call(this, t), this.fb ? this.Qa(this.En) : (t = this.gb, this.ex = new Float32Array([t.h / 255, t.f / 255, t.c / 255, this.hb / 255]))
    },
    ia: null,
    AC: function() {
        return this.Gm
    },
    BC: function() {
        return this.X.ia()
    },
    ya: null,
    St: function(t) {
        this.Gm = t
    },
    Tt: function(t) {
        this.X.ya(t), this.Mh(), this.tK()
    },
    ax: null,
    YR: function() {
        var t = this.ia().g();
        this.BJ = 0 | t.height / this.$i, this.zq = 0 | t.width / this.Yj
    },
    ZR: function() {
        var t = this.ia(),
            i = t.g();
        this.vx && (i = t.ja), this.BJ = 0 | i.height / this.$i, this.zq = 0 | i.width / this.Yj
    },
    Mh: function() {
        this.X.ia().tk() || (this.t.src = 770, this.t.sa = 771)
    },
    tK: function() {
        this.fb = this.X.ia().tk()
    },
    FD: function(t) {
        this.vx = t
    }
}), q.pa.Rc ? (b = q.td.prototype, b.Ea = q.td.prototype.wt, b.xa = q.td.prototype.fg, b.Qa = q.td.prototype.ED, b.w = q.td.prototype.Rt, b.ia = q.td.prototype.BC, b.ya = q.td.prototype.Tt, b.ax = q.td.prototype.ZR) : (b = q.td.prototype, b.Ea = q.td.prototype.vt, b.xa = q.r.prototype.xa, b.Qa = q.td.prototype.Pt, b.w = q.td.prototype.jo, b.ia = q.td.prototype.AC, b.ya = q.td.prototype.St, b.ax = q.td.prototype.YR), q.td.create = function(t, i, n, e) {
    var h = new q.td;
    return h.xX(t, i, n, e) ? h : null
}, q.Oj = 0, q.Hs = 1, q.Gs = 2, q.Fs = 3, q.iB = 4, q.hB = 5, q.xw = 6, q.ww = 7, q.PH = 8, q.OH = 9, q.NH = q.Oj, q.fC = q.NH, q.zQ = !1, q.F4 = function(t, i, n, e) {
    this.oY = t || 0, this.mY = i || 0, this.GO = n || 0, this.HO = e || 0
}, q.dR = q.ca.extend({
    tT: null,
    Kg: null,
    vi: null,
    ui: null,
    Gq: null,
    ja: null,
    ri: null,
    si: null,
    vq: null,
    Rn: !1,
    Wb: null,
    md: !1,
    Fc: null,
    ce: null,
    Hg: null,
    ctor: function() {
        this.ui = this.vi = 0, this.Gq = "", this.si = this.ri = 0, this.vq = !1, this.ja = q.size(0, 0), this.Rn = !1, this.tT = !0, this.Kg = q.rb.TV(), this.Wb = null, this.md = !1, this.ce = this.Fc = null, this.Hg = []
    },
    Jz: function() {
        this.ce && q.q.deleteTexture(this.ce)
    },
    N8: function() {
        return this.Kg
    },
    yl: function() {
        return this.vi
    },
    xl: function() {
        return this.ui
    },
    getName: function() {
        return this.ce
    },
    g: function() {
        return q.size(this.ja.width / q.ua(), this.ja.height / q.ua())
    },
    tW: function() {
        return this.ja
    },
    KW: function() {
        return this.ri
    },
    D_: function(t) {
        this.ri = t
    },
    LW: function() {
        return this.si
    },
    E_: function(t) {
        this.si = t
    },
    yr: function() {
        return this.Wb
    },
    xe: function(t) {
        this.Wb = t
    },
    tk: function() {
        return this.vq
    },
    hX: function() {
        return this.Rn
    },
    description: function() {
        return "<cc.Texture2D | Name = " + this.Gq + " | Dimensions = " + this.vi + " x " + this.ui + " | Coordinates = (" + this.ri + ", " + this.si + ")>"
    },
    xZ: function() {},
    IX: function(t) {
        return t
    },
    Ou: function(t, i, n, e, h) {
        var s = q.q,
            r = 0;
        switch (0 == (r = n * (r = i === q.Oj ? 24 : this.IK(i)) / 8) % 8 ? s.pixelStorei(s.UNPACK_ALIGNMENT, 8) : 0 == r % 4 ? s.pixelStorei(s.UNPACK_ALIGNMENT, 4) : 0 == r % 2 ? s.pixelStorei(s.UNPACK_ALIGNMENT, 2) : s.pixelStorei(s.UNPACK_ALIGNMENT, 1), this.ce = s.createTexture(), s.bindTexture(s.TEXTURE_2D, this.ce), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), i) {
            case q.Oj:
                s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, n, e, 0, s.RGBA, s.UNSIGNED_BYTE, t);
                break;
            case q.Hs:
                s.texImage2D(s.TEXTURE_2D, 0, s.RGB, n, e, 0, s.RGB, s.UNSIGNED_BYTE, t);
                break;
            case q.xw:
                s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, n, e, 0, s.RGBA, s.UNSIGNED_SHORT_4_4_4_4, t);
                break;
            case q.ww:
                s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, n, e, 0, s.RGBA, s.UNSIGNED_SHORT_5_5_5_1, t);
                break;
            case q.Gs:
                s.texImage2D(s.TEXTURE_2D, 0, s.RGB, n, e, 0, s.RGB, s.UNSIGNED_SHORT_5_6_5, t);
                break;
            case q.hB:
                s.texImage2D(s.TEXTURE_2D, 0, s.LUMINANCE_ALPHA, n, e, 0, s.LUMINANCE_ALPHA, s.UNSIGNED_BYTE, t);
                break;
            case q.Fs:
                s.texImage2D(s.TEXTURE_2D, 0, s.ALPHA, n, e, 0, s.ALPHA, s.UNSIGNED_BYTE, t);
                break;
            case q.iB:
                s.texImage2D(s.TEXTURE_2D, 0, s.LUMINANCE, n, e, 0, s.LUMINANCE, s.UNSIGNED_BYTE, t);
                break;
            default:
                q.d(0, "NSInternalInconsistencyException")
        }
        return this.ja = h, this.vi = n, this.ui = e, this.Kg = i, this.ri = h.width / n, this.si = h.height / e, this.Rn = this.vq = !1, this.xe(q.ud.getInstance().Hc(q.Kp)), this.md = !0
    },
    bW: function(t) {
        var i = [0, this.si, this.ri, this.si, 0, 0, this.ri, 0],
            n = this.vi * this.ri,
            e = this.ui * this.si;
        t = [t.x, t.y, 0, n + t.x, t.y, 0, t.x, e + t.y, 0, n + t.x, e + t.y, 0], q.zd(q.af | q.Pp), this.Wb.Fd(), this.Wb.lv(), q.Yg(this), (n = q.q).vertexAttribPointer(q.Zb, 2, n.FLOAT, !1, 0, t), n.vertexAttribPointer(q.Be, 2, n.FLOAT, !1, 0, i), n.drawArrays(n.TRIANGLE_STRIP, 0, 4)
    },
    dW: function(t) {
        var i = [0, this.si, this.ri, this.si, 0, 0, this.ri, 0];
        t = [t.x, t.y, t.x + t.width, t.y, t.x, t.y + t.height, t.x + t.width, t.y + t.height], q.zd(q.af | q.Pp), this.Wb.Fd(), this.Wb.lv(), q.Yg(this);
        var n = q.q;
        n.vertexAttribPointer(q.Zb, 2, n.FLOAT, !1, 0, t), n.vertexAttribPointer(q.Be, 2, n.FLOAT, !1, 0, i), n.drawArrays(n.TRIANGLE_STRIP, 0, 4)
    },
    mF: function(t) {
        if (null == t) return q.log("cocos2d: cc.Texture2D. Can't create Texture. UIImage is nil"), !1;
        var i = t.Iu(),
            n = t.Gu(),
            e = q.Sd.getInstance().Xn;
        return i > e || n > e ? (q.log("cocos2d: WARNING: Image (" + i + " x " + n + ") is bigger than the supported " + e + " x " + e), !1) : (this.md = !0, this.NS(t, i, n))
    },
    Qd: function(t) {
        t && (this.ce = q.q.createTexture(), this.Fc = t)
    },
    EW: function() {
        return this.Fc
    },
    DX: function() {
        return this.md
    },
    Bd: function() {
        this.md = !0;
        t = q.q;
        q.Yg(this), t.pixelStorei(t.UNPACK_ALIGNMENT, 4), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, this.Fc), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), this.xe(q.ud.getInstance().Hc(q.Kp)), t.bindTexture(t.TEXTURE_2D, null);
        var t = this.Fc.width,
            i = this.Fc.height;
        this.ja = new q.cB(t, i), this.vi = t, this.ui = i, this.Kg = q.Oj, this.si = this.ri = 1, this.Rn = this.vq = !1, this.oi()
    },
    pd: function(t, i, n, e, h, s) {
        3 == arguments.length && (i = arguments[1], n = arguments[2], e = q.size(0, 0), h = q.Nk, s = q.yn);
        var r, a = new q.SG;
        return q.yn === s ? r = q.Nk === h ? q.PO : q.un === h ? q.QO : q.RO : q.EI === s ? r = q.Nk === h ? q.MO : q.un === h ? q.NO : q.OO : q.BB === s ? r = q.Nk === h ? q.JO : q.un === h ? q.KO : q.LO : q.d(!1, "Not supported alignment format!"), !!a.pd(t, e.width, e.height, r, i, n) && this.mF(a)
    },
    nX: function() {
        return !1
    },
    cM: function(t) {
        var i = !1,
            n = new q.z3;
        return (i = n.S$(t)) ? (n.pga(!0), this.Gq = n.getName(), this.si = this.ri = 1, this.vi = n.Iu(), this.ui = n.Gu(), this.ja = q.size(this.vi, this.ui), this.vq = q.zQ, this.Kg = n.N7(), this.BN()) : q.log("cocos2d: Couldn't load PVR image " + t), i
    },
    uX: function() {
        return !!q.Sd.getInstance().Vq || (q.log("cocos2d: WARNING: PVRTC images is not supported."), !1)
    },
    X_: function(t) {
        var i = q.q;
        q.d(this.vi == q.Zl(this.vi) && this.ui == q.Zl(this.ui) || t.GO == i.CLAMP_TO_EDGE && t.HO == i.CLAMP_TO_EDGE, "WebGLRenderingContext.CLAMP_TO_EDGE should be used in NPOT textures"), q.Yg(this), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, t.oY), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, t.mY), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, t.GO), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, t.HO)
    },
    BN: function() {
        var t = q.q;
        q.Yg(this), this.Rn ? t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_NEAREST) : t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST)
    },
    eG: function() {
        var t = q.q;
        q.Yg(this), this.Rn ? t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST_MIPMAP_NEAREST) : t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST)
    },
    generateMipmap: function() {
        q.d(this.vi == q.Zl(this.vi) && this.ui == q.Zl(this.ui), "Mimpap texture only works in POT textures"), q.Yg(this), q.q.generateMipmap(q.q.TEXTURE_2D), this.Rn = !0
    },
    s0: function() {
        switch (this.Kg) {
            case q.Oj:
                return "RGBA8888";
            case q.Hs:
                return "RGB888";
            case q.Gs:
                return "RGB565";
            case q.xw:
                return "RGBA4444";
            case q.ww:
                return "RGB5A1";
            case q.hB:
                return "AI88";
            case q.Fs:
                return "A8";
            case q.iB:
                return "I8";
            case q.PH:
                return "PVRTC4";
            case q.OH:
                return "PVRTC2";
            default:
                q.d(!1, "unrecognized pixel format"), q.log("stringForFormat: " + this.Kg + ", cannot give useful result")
        }
        return ""
    },
    IK: function(t) {
        switch (t = t || this.Kg) {
            case q.Oj:
            case q.Hs:
                return 32;
            case q.Gs:
                return 16;
            case q.Fs:
                return 8;
            case q.xw:
            case q.ww:
                return 16;
            case q.PH:
                return 4;
            case q.OH:
                return 2;
            case q.iB:
                return 8;
            case q.hB:
                return 16;
            default:
                return q.d(!1, "illegal pixel format"), q.log("bitsPerPixelForFormat: " + this.Kg + ", cannot give useful result"), -1
        }
    },
    NS: function(t, i, n) {
        var e = t.getData(),
            h = null,
            h = null,
            s = t.rJ,
            r = q.size(t.Iu(), t.Gu()),
            a = q.NH,
            o = t.RI;
        s || (8 <= o ? a = q.Hs : (q.log("cocos2d: cc.Texture2D: Using RGB565 texture since image has no alpha"), a = q.Gs));
        var c = i * n;
        if (a == q.Gs)
            if (s)
                for (e = new Uint16Array(i * n), h = t.getData(), o = 0; o < c; ++o) e[o] = (h[o] >> 0 & 255) >> 3 << 11 | (h[o] >> 8 & 255) >> 2 << 5 | (h[o] >> 16 & 255) >> 3 << 0;
            else
                for (e = new Uint16Array(i * n), h = t.getData(), o = 0; o < c; ++o) e[o] = (255 & h[o]) >> 3 << 11 | (255 & h[o]) >> 2 << 5 | (255 & h[o]) >> 3 << 0;
        else if (a == q.xw)
            for (e = new Uint16Array(i * n), h = t.getData(), o = 0; o < c; ++o) e[o] = (h[o] >> 0 & 255) >> 4 << 12 | (h[o] >> 8 & 255) >> 4 << 8 | (h[o] >> 16 & 255) >> 4 << 4 | (h[o] >> 24 & 255) >> 4 << 0;
        else if (a == q.ww)
            for (e = new Uint16Array(i * n), h = t.getData(), o = 0; o < c; ++o) e[o] = (h[o] >> 0 & 255) >> 3 << 11 | (h[o] >> 8 & 255) >> 3 << 6 | (h[o] >> 16 & 255) >> 3 << 1 | (h[o] >> 24 & 255) >> 7 << 0;
        else if (a == q.Fs)
            for (e = new Uint8Array(i * n), h = t.getData(), o = 0; o < c; ++o) e[o] = h >> 24 & 255;
        if (s && a == q.Hs)
            for (h = t.getData(), e = new Uint8Array(i * n * 3), o = 0; o < c; ++o) e[3 * o] = h >> 0 & 255, e[3 * o + 1] = h >> 8 & 255, e[3 * o + 2] = h >> 16 & 255;
        return this.Ou(e, a, i, n, r), t.getData(), this.vq = t.OJ, !0
    },
    Lf: function(t, i) {
        this.Hg.push({
            Lo: t,
            wl: i
        })
    },
    FZ: function(t) {
        for (var i = this.Hg, n = 0; n < i.length; n++) i[n].wl == t && i.splice(n, 1)
    },
    oi: function() {
        for (var t = this.Hg, i = 0, n = t.length; i < n; i++) {
            var e = t[i];
            e.Lo.call(e.wl, this)
        }
        t.length = 0
    }
}), q.cR = q.ca.extend({
    ja: null,
    md: !1,
    Fc: null,
    Hg: null,
    ctor: function() {
        this.ja = q.size(0, 0), this.md = !1, this.Fc = null, this.Hg = []
    },
    yl: function() {
        return this.ja.width
    },
    xl: function() {
        return this.ja.height
    },
    g: function() {
        return q.size(this.ja.width / q.ua(), this.ja.height / q.ua())
    },
    tW: function() {
        return this.ja
    },
    Qd: function(t) {
        t && (this.Fc = t)
    },
    EW: function() {
        return this.Fc
    },
    DX: function() {
        return this.md
    },
    Bd: function() {
        this.md = !0;
        var t = this.Fc;
        this.ja = new q.cB(t.width, t.height), this.oi()
    },
    description: function() {
        return "<cc.Texture2D | width = " + this.ja.width + " height " + this.ja.height + ">"
    },
    Ou: function() {
        return !1
    },
    mF: function() {
        return !1
    },
    pd: function() {
        return !1
    },
    Jz: function() {},
    getName: function() {
        return null
    },
    KW: function() {
        return 1
    },
    D_: function() {},
    LW: function() {
        return 1
    },
    E_: function() {},
    yr: function() {
        return null
    },
    xe: function() {},
    tk: function() {
        return !1
    },
    hX: function() {
        return !1
    },
    xZ: function() {},
    IX: function(t) {
        return t
    },
    bW: function() {},
    dW: function() {},
    nX: function() {
        return !1
    },
    cM: function() {
        return !1
    },
    uX: function() {
        return !0
    },
    X_: function() {},
    BN: function() {},
    eG: function() {},
    generateMipmap: function() {},
    s0: function() {
        return ""
    },
    IK: function() {
        return -1
    },
    Lf: function(t, i) {
        this.Hg.push({
            Lo: t,
            wl: i
        })
    },
    FZ: function(t) {
        for (var i = this.Hg, n = 0; n < i.length; n++) i[n].wl == t && i.splice(n, 1)
    },
    oi: function() {
        for (var t = this.Hg, i = 0, n = t.length; i < n; i++) {
            var e = t[i];
            e.Lo.call(e.wl, this)
        }
        t.length = 0
    }
}), q.rb = q.pa.Rc ? q.dR : q.cR, q.rb.cfa = function(t) {
    q.fC = t
}, q.rb.TV = function() {
    return q.fC
}, q.rb.j7 = function() {
    return q.fC
}, q.Fu = null, q.Dca = function(t) {
    if (q.HV(t) == q.xA) q.log("unsupported format:" + t);
    else {
        var i = new Image;
        i.src = t, i.addEventListener("load", function() {
            q.Ka.getInstance().LK(t, i), this.removeEventListener("load", arguments.callee, !1)
        }, !1)
    }
}, q.HV = function(t) {
    return 0 < t.toLowerCase().indexOf(".jpg") || 0 < t.toLowerCase().indexOf(".jpeg") ? q.tP : 0 < t.toLowerCase().indexOf(".png") ? q.bw : 0 < t.toLowerCase().indexOf(".webp") ? q.uP : q.xA
}, q.Ka = q.ca.extend({
    yb: null,
    du: null,
    iy: null,
    RJ: !1,
    Dx: null,
    Ex: null,
    ctor: function() {
        q.d(null == q.Fu, "Attempted to allocate a second instance of a singleton."), this.iy += 0 | 1e3 * Math.random(), this.yb = {}, this.du = {}, q.Z === q.eb && (this.Dx = {}, this.Ex = {})
    },
    LB: function(t, i) {
        t && "string" == typeof i ? t[i]() : t && "function" == typeof i && i.call(t)
    },
    VS: function() {
        this.RJ = !0;
        var t, i = this.Dx,
            n = this.yb;
        for (t in i) {
            var e = i[t],
                h = new q.rb;
            h.Qd(e), h.Bd(), n[t] = h
        }
        this.Dx = {}
    },
    S4: function() {
        q.d(0, "TextureCache:addPVRTCImage does not support on HTML5")
    },
    O4: function() {
        q.d(0, "TextureCache:addPVRTCImage does not support on HTML5")
    },
    description: function() {
        return "<TextureCache | Number of textures = " + this.yb.length + ">"
    },
    sv: function(t) {
        return t = q.Yc.getInstance().ee(t), this.yb.hasOwnProperty(t) ? this.yb[t] : null
    },
    GW: function(t) {
        for (var i in this.yb)
            if (this.yb[i] == t) return i;
        return null
    },
    vS: function() {
        return "_textureKey_" + ++this.iy
    },
    Ry: function(t) {
        var i = this.GW(t);
        return i || (i = t instanceof HTMLImageElement ? t.src : this.vS()), this.du.hasOwnProperty(i) || (this.du[i] = q.rr(t)), this.du[i]
    },
    R4: function(t) {
        if (q.d(null != t, "TextureCache: file image MUST not be null"), t = q.Yc.getInstance().ee(t), null != this.yb[t]) return this.yb[t];
        var i = new q.rb;
        return i.cM(t) ? this.yb[t] = i : q.log("cocos2d: Couldn't add PVRImage:" + t + " in TextureCache"), i
    },
    gea: function() {
        var t, i = this.yb;
        for (t in i) i[t] && i[t].Jz();
        this.yb = {}
    },
    qea: function(t) {
        if (t) {
            var i, n = this.yb;
            for (i in n) n[i] == t && (n[i].Jz(), delete n[i])
        }
    },
    JZ: function(t) {
        null != t && (t = q.Yc.getInstance().ee(t), this.yb[t] && delete this.yb[t])
    },
    P4: function(t, i, n) {
        q.d(null != t, "TextureCache: path MUST not be null"), t = q.Yc.getInstance().ee(t);
        var e, h, s = this.yb[t];
        if (s) s.md ? this.LB(i, n) : (h = this, (e = s.Fc).addEventListener("load", function() {
            s.Bd(), h.LB(i, n), this.removeEventListener("load", arguments.callee, !1)
        }));
        else {
            (e = new Image).crossOrigin = "Anonymous", h = this, e.addEventListener("load", function() {
                h.yb.hasOwnProperty(t) && h.yb[t].Bd(), h.LB(i, n), this.removeEventListener("load", arguments.callee, !1), this.removeEventListener("error", arguments.callee, !1)
            }), e.addEventListener("error", function() {
                q.Kb.getInstance().Qm(t), h.yb.hasOwnProperty(t) && delete h.yb[t], this.removeEventListener("error", arguments.callee, !1)
            }), e.src = t;
            var r = new q.rb;
            r.Qd(e), this.yb[t] = r
        }
        return this.yb[t]
    },
    JR: function(t) {
        var i = new Image;
        i.crossOrigin = "Anonymous";
        var n = this;
        i.addEventListener("load", function() {
            q.Kb.getInstance().$h(), n.Dx[t] = i, delete n.Ex[t], this.removeEventListener("load", arguments.callee, !1), this.removeEventListener("error", arguments.callee, !1)
        }), i.addEventListener("error", function() {
            q.Kb.getInstance().Qm(t), delete n.Ex[t], this.removeEventListener("error", arguments.callee, !1)
        }), i.src = t, this.Ex[t] = i
    },
    cc: function(t) {
        if (q.d(null != t, "TextureCache: path MUST not be null"), q.Z === q.eb && !this.RJ) return this.JR(t);
        t = q.Yc.getInstance().ee(t);
        var i, n = this.yb[t];
        if (n) n.md ? q.Kb.getInstance().$h() : (i = n.Fc).addEventListener("load", function() {
            n.Bd(), q.Kb.getInstance().$h(), this.removeEventListener("load", arguments.callee, !1)
        });
        else {
            (i = new Image).crossOrigin = "Anonymous";
            var e = this;
            i.addEventListener("load", function() {
                q.Kb.getInstance().$h(), e.yb.hasOwnProperty(t) && e.yb[t].Bd(), this.removeEventListener("load", arguments.callee, !1), this.removeEventListener("error", arguments.callee, !1)
            }), i.addEventListener("error", function() {
                q.Kb.getInstance().Qm(t), e.yb.hasOwnProperty(t) && delete e.yb[t], this.removeEventListener("error", arguments.callee, !1)
            }), i.src = t;
            var h = new q.rb;
            h.Qd(i), this.yb[t] = h
        }
        return this.yb[t]
    },
    LK: function(t, i) {
        if (i instanceof q.rb) this.yb[t] = i;
        else {
            var n = new q.rb;
            n.Qd(i), n.Bd(), this.yb[t] = n
        }
    },
    X4: function(t, i) {
        if (q.d(null != t, "TextureCache: image MUST not be nulll"), i && this.yb.hasOwnProperty(i) && this.yb[i]) return this.yb[i];
        var n = new q.rb;
        return n.mF(t), null != i && null != n ? this.yb[i] = n : q.log("cocos2d: Couldn't add UIImage in TextureCache"), n
    },
    c6: function() {
        var t, i = 0,
            n = 0,
            e = this.yb;
        for (t in e) i++, (s = e[t]).Fc instanceof HTMLImageElement ? q.log("cocos2d: '" + t + "' id=" + s.Fc.src + " " + s.yl() + " x " + s.xl()) : q.log("cocos2d: '" + t + "' id= HTMLCanvasElement " + s.yl() + " x " + s.xl()), n += s.yl() * s.xl() * 4;
        e = this.du;
        for (t in e) {
            var h, s = e[t];
            for (h in s) {
                var r = s[h];
                i++, q.log("cocos2d: '" + t + "' id= HTMLCanvasElement " + r.width + " x " + r.height), n += r.width * r.height * 4
            }
        }
        q.log("cocos2d: TextureCache dumpDebugInfo: " + i + " textures, HTMLCanvasElement for " + n / 1024 + " KB (" + (n / 1048576).toFixed(2) + " MB)")
    }
}), q.Ka.getInstance = function() {
    return q.Fu || (q.Fu = new q.Ka), q.Fu
}, q.Ka.rZ = function() {
    q.Fu = null
}, q.wn = q.ca.extend({
    Tb: null,
    Vd: null,
    ga: !1,
    jd: 0,
    H: null,
    qc: null,
    ne: null,
    Kt: null,
    Fh: null,
    ctor: function() {
        this.Vd = []
    },
    j$: function() {
        return this.Ma
    },
    R6: function() {
        return this.jd
    },
    ia: function() {
        return this.H
    },
    ya: function(t) {
        this.H = t
    },
    ug: function(t) {
        this.ga = t
    },
    Dr: function() {
        return this.ga
    },
    X8: function() {
        return this.qc
    },
    hga: function(t) {
        this.qc = t
    },
    fS: function(t, i) {
        if (t)
            for (var n = 0; n < t.length; n++) this.Zx(t[n], i + n)
    },
    Zx: function(t, i) {
        var n = this.qc;
        n[i] ? (n[i].K = t.K, n[i].S = t.S, n[i].R = t.R, n[i].N = t.N) : n[i] = new q.Yb(t.R, t.K, t.N, t.S, this.ne, i * q.Yb.BYTES_PER_ELEMENT)
    },
    description: function() {
        return "<cc.TextureAtlas | totalQuads =" + this.Ma + ">"
    },
    cK: function() {
        if (0 !== this.jd)
            for (var t = this.Tb, i = this.jd, n = 0; n < i; n++) q.QH ? (t[6 * n + 0] = 4 * n + 0, t[6 * n + 1] = 4 * n + 0, t[6 * n + 2] = 4 * n + 2, t[6 * n + 3] = 4 * n + 1, t[6 * n + 4] = 4 * n + 3, t[6 * n + 5] = 4 * n + 3) : (t[6 * n + 0] = 4 * n + 0, t[6 * n + 1] = 4 * n + 1, t[6 * n + 2] = 4 * n + 2, t[6 * n + 3] = 4 * n + 3, t[6 * n + 4] = 4 * n + 2, t[6 * n + 5] = 4 * n + 1)
    },
    Nq: function() {
        var t = q.q;
        this.Vd[0] = t.createBuffer(), this.Vd[1] = t.createBuffer(), this.Kt = t.createBuffer(), this.DJ()
    },
    DJ: function() {
        var t = q.q;
        t.bindBuffer(t.ARRAY_BUFFER, this.Kt), t.bufferData(t.ARRAY_BUFFER, this.ne, t.DYNAMIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.Vd[1]), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.Tb, t.STATIC_DRAW)
    },
    Fi: function(t, i) {
        var n = q.Ka.getInstance().cc(t);
        return n ? this.Ea(n, i) : (q.log("cocos2d: Could not open file: " + t), !1)
    },
    Ea: function(t, i) {
        this.jd = i |= 0, this.Ma = 0, this.H = t, q.d(null == this.qc && null == this.Tb, "TextureAtlas.initWithTexture():_quads and _indices should not be null"), this.qc = [], this.Tb = new Uint16Array(6 * i);
        var n = q.Yb.BYTES_PER_ELEMENT;
        if (this.ne = new ArrayBuffer(n * i), this.Fh = new Uint8Array(this.ne), (!this.qc || !this.Tb) && 0 < i) return !1;
        for (var e = this.qc, h = 0; h < i; h++) e[h] = new q.Yb(null, null, null, null, this.ne, h * n);
        return this.cK(), this.Nq(), this.ga = !0
    },
    mA: function(t, i) {
        this.Ma = Math.max(i + 1, this.Ma), this.Zx(t, i), this.ga = !0
    },
    vF: function(t, i) {
        q.d(i < this.jd, "insertQuadWithTexture: Invalid index"), this.Ma++, q.d(this.Ma <= this.jd, "invalid totalQuads");
        var n = q.Yb.BYTES_PER_ELEMENT,
            e = i * n,
            h = (this.Ma - 1 - i) * n;
        this.qc[this.Ma - 1] = new q.Yb(null, null, null, null, this.ne, (this.Ma - 1) * n), this.Fh.set(this.Fh.subarray(e, e + h), e + n), this.Zx(t, i), this.ga = !0
    },
    Z$: function(t, i, n) {
        n = n || t.length;
        var e = q.Yb.BYTES_PER_ELEMENT;
        q.d(i + n <= this.jd, "insertQuadWithTexture: Invalid index + amount"), this.Ma += n, q.d(this.Ma <= this.jd, "invalid totalQuads");
        var h, s = i * e,
            r = (this.Ma - 1 - i - n) * e,
            a = this.Ma - 1 - n;
        for (h = 0; h < n; h++) this.qc[a + h] = new q.Yb(null, null, null, null, this.ne, (this.Ma - 1) * e);
        for (this.Fh.set(this.Fh.subarray(s, s + r), s + e * n), h = 0; h < n; h++) this.Zx(t[h], i + h);
        this.ga = !0
    },
    Y$: function(t, i) {
        if (q.d(0 <= i && i < this.Ma, "insertQuadFromIndex:atIndex: Invalid index"), q.d(0 <= t && t < this.Ma, "insertQuadFromIndex:atIndex: Invalid index"), t !== i) {
            var n, e = q.Yb.BYTES_PER_ELEMENT,
                h = this.Fh,
                s = h.subarray(t * e, e);
            t > i ? (n = i * e, h.set(h.subarray(n, n + (t - i) * e), n + e), h.set(s, n)) : (n = (t + 1) * e, h.set(h.subarray(n, n + (i - t) * e), n - e), h.set(s, i * e)), this.ga = !0
        }
    },
    tN: function(t) {
        q.d(t < this.Ma, "removeQuadAtIndex: Invalid index");
        var i = q.Yb.BYTES_PER_ELEMENT;
        if (this.Ma--, this.qc.length = this.Ma, t !== this.Ma) {
            var n = (t + 1) * i;
            this.Fh.set(this.Fh.subarray(n, n + (this.Ma - t) * i), n - i)
        }
        this.ga = !0
    },
    IZ: function(t, i) {
        if (q.d(t + i <= this.Ma, "removeQuadAtIndex: index + amount out of bounds"), this.Ma -= i, t !== this.Ma) {
            var n = q.Yb.BYTES_PER_ELEMENT,
                e = (t + i) * n;
            this.Fh.set(this.Fh.subarray(e, e + (this.Ma - t) * n), t * n)
        }
        this.ga = !0
    },
    rN: function() {
        this.Ma = this.qc.length = 0
    },
    gU: function(t) {
        this.ga = t
    },
    WF: function(t) {
        if (t == this.jd) return !0;
        var i = q.Yb.BYTES_PER_ELEMENT,
            n = this.jd;
        this.Ma = Math.min(this.Ma, t);
        var e = this.jd = 0 | t,
            h = this.Ma;
        if (null == this.qc)
            for (this.qc = [], this.ne = new ArrayBuffer(i * e), this.Fh = new Uint8Array(this.ne), t = 0; t < e; t++) this.qc = new q.Yb(null, null, null, null, this.ne, t * i);
        else {
            var s, r, a = this.qc;
            if (e > n) {
                for (s = [], r = new ArrayBuffer(i * e), t = 0; t < h; t++) s[t] = new q.Yb(a[t].R, a[t].K, a[t].N, a[t].S, r, t * i);
                for (; t < e; t++) s[t] = new q.Yb(null, null, null, null, r, t * i)
            } else
                for (h = Math.max(h, e), s = [], r = new ArrayBuffer(i * e), t = 0; t < h; t++) s[t] = new q.Yb(a[t].R, a[t].K, a[t].N, a[t].S, r, t * i);
            this.Fh = new Uint8Array(r), this.qc = s, this.ne = r
        }
        return null == this.Tb ? this.Tb = new Uint16Array(6 * e) : e > n ? ((i = new Uint16Array(6 * e)).set(this.Tb, 0), this.Tb = i) : this.Tb = this.Tb.subarray(0, 6 * e), this.cK(), this.DJ(), this.ga = !0
    },
    VL: function(t) {
        this.Ma += t
    },
    KM: function(t, i, n) {
        if (2 == arguments.length) {
            if (n = i, i = this.Ma - t, q.d(n + (this.Ma - t) <= this.jd, "moveQuadsFromIndex move is out of bounds"), 0 === i) return
        } else if (q.d(n + i <= this.Ma, "moveQuadsFromIndex:newIndex: Invalid index"), q.d(t < this.Ma, "moveQuadsFromIndex:oldIndex: Invalid index"), t == n) return;
        var e, h = q.Yb.BYTES_PER_ELEMENT,
            s = t * h,
            r = i * h,
            a = this.Fh,
            o = a.subarray(s, s + r),
            c = n * h;
        n < t ? (e = n * h, a.set(a.subarray(e, e + (t - n) * h), e + r)) : (e = (t + i) * h, a.set(a.subarray(e, e + (n - t) * h), s)), a.set(o, c), this.ga = !0
    },
    vL: function(t, i) {
        for (var n = i * q.Yb.BYTES_PER_ELEMENT, e = new Uint8Array(this.ne, t * q.Yb.BYTES_PER_ELEMENT, n), h = 0; h < n; h++) e[h] = 0
    },
    nL: function(t, i) {
        if (i = i || 0, 0 !== t && this.H && this.H.md) {
            var n = q.q;
            q.Yg(this.H), q.zd(q.xn), n.bindBuffer(n.ARRAY_BUFFER, this.Kt), this.ga && n.bufferData(n.ARRAY_BUFFER, this.ne, n.DYNAMIC_DRAW), n.vertexAttribPointer(q.Zb, 3, n.FLOAT, !1, 24, 0), n.vertexAttribPointer(q.cg, 4, n.UNSIGNED_BYTE, !0, 24, 12), n.vertexAttribPointer(q.Be, 2, n.FLOAT, !1, 24, 16), this.ga && (this.ga = !1), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this.Vd[1]), q.QH ? n.drawElements(n.TRIANGLE_STRIP, 6 * t, n.UNSIGNED_SHORT, 6 * i * this.Tb.BYTES_PER_ELEMENT) : n.drawElements(n.TRIANGLES, 6 * t, n.UNSIGNED_SHORT, 6 * i * this.Tb.BYTES_PER_ELEMENT), q.Rh++
        }
    },
    qL: function() {
        this.nL(this.Ma, 0)
    },
    v4: function() {
        var t = q.q;
        this.Vd && (this.Vd[0] && t.deleteBuffer(this.Vd[0]), this.Vd[1] && t.deleteBuffer(this.Vd[1])), this.Kt && t.deleteBuffer(this.Kt)
    }
}), q.wn.create = function(t, i) {
    var n = new q.wn;
    return n && n.Fi(t, i) ? n : null
}, q.wn.nf = function(t, i) {
    var n = new q.wn;
    return n && n.Ea(t, i) ? n : null
}, q.Q1 = 0, q.R1 = 1, q.S1 = 2, q.Zl = function(t) {
    return t -= 1, t |= t >> 1, t |= t >> 2, t |= t >> 4, 1 + ((t |= t >> 8) | t >> 16)
}, q.Nb = q.r.extend({
    ni: null,
    Sj: null,
    lx: 0,
    gt: 0,
    ak: 0,
    H: null,
    eu: null,
    PU: null,
    Kg: q.Oj,
    ra: null,
    cx: 0,
    Qk: null,
    ZB: 0,
    $B: 0,
    Xs: !1,
    YB: null,
    ctor: null,
    Ui: function() {
        q.r.prototype.ctor.call(this), this.Qk = q.sl(1, 1, 1, 1), this.YB = "rgba(255,255,255,1)", this.ni = document.createElement("canvas"), this.Sj = this.ni.getContext("2d"), this.v(q.a(0, 0))
    },
    Vi: function() {
        q.r.prototype.ctor.call(this), this.Qk = q.sl(0, 0, 0, 0)
    },
    kb: null,
    qT: function() {
        q.r.prototype.kb.call(this), this.ni = this.Sj = null
    },
    rT: function() {
        q.r.prototype.kb.call(this), this.eu = this.ra = null;
        var t = q.q;
        t.deleteFramebuffer(this.lx), this.gt && t.deleteRenderbuffer(this.gt), this.PU = null, this.H && this.H.Jz()
    },
    UW: function() {
        return this.ra
    },
    iv: function(t) {
        this.ra = t
    },
    rF: null,
    TS: function(t, i) {
        var n = this.ni;
        n.width = t || 10, n.height = i || 10, this.Sj.translate(0, n.height);
        var e = new q.rb;
        return e.Qd(n), e.Bd(), this.ra = q.m.nf(e), !0
    },
    US: function(t, i, n, e) {
        q.d(n != q.Fs, "only RGB and RGBA formats are valid for a render texture");
        var h = q.q;
        t = 0 | t * q.ua(), i = 0 | i * q.ua(), this.ak = h.getParameter(h.FRAMEBUFFER_BINDING);
        var s, r;
        q.Sd.getInstance().Uq ? (s = t, r = i) : (s = q.Zl(t), r = q.Zl(i));
        for (var a = new Uint8Array(s * r * 4), o = 0; o < s * r * 4; o++) a[o] = 0;
        if (this.Kg = n, this.H = new q.rb, !this.H) return !1;
        if ((o = this.H).Ou(a, this.Kg, s, r, q.size(t, i)), n = h.getParameter(h.RENDERBUFFER_BINDING), q.Sd.getInstance().fr("GL_QCOM")) {
            if (this.eu = new q.rb, !this.eu) return !1;
            this.eu.Ou(a, this.Kg, s, r, q.size(t, i))
        }
        return this.lx = h.createFramebuffer(), h.bindFramebuffer(h.FRAMEBUFFER, this.lx), h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, o.ce, 0), 0 != e && (this.gt = h.createRenderbuffer(), h.bindRenderbuffer(h.RENDERBUFFER, this.gt), h.renderbufferStorage(h.RENDERBUFFER, e, s, r), h.framebufferRenderbuffer(h.FRAMEBUFFER, h.DEPTH_ATTACHMENT, h.RENDERBUFFER, this.gt)), q.d(h.checkFramebufferStatus(h.FRAMEBUFFER) === h.FRAMEBUFFER_COMPLETE, "Could not attach texture to framebuffer"), o.eG(), (t = this.ra = q.m.nf(o)).bn(-1), t.$g(h.ONE, h.ONE_MINUS_SRC_ALPHA), h.bindRenderbuffer(h.RENDERBUFFER, n), h.bindFramebuffer(h.FRAMEBUFFER, this.ak), this.Xs = !1, this.l(t), !0
    },
    Ph: null,
    SR: function() {
        q.q = this.Sj
    },
    TR: function() {
        q.wk(q.Lk), q.Xo(), q.wk(q.Kk), q.Xo(), (i = q.n.getInstance()).ds(i.jl);
        var t = this.H.ja,
            i = (n = q.n.getInstance().Ju()).width / t.width,
            n = n.height / t.height,
            e = q.q;
        e.viewport(0, 0, t.width, t.height), t = new q.ta, q.yF(t, -1 / i, 1 / i, -1 / n, 1 / n, -1, 1), q.Gr(t), this.ak = e.getParameter(e.FRAMEBUFFER_BINDING), e.bindFramebuffer(e.FRAMEBUFFER, this.lx), q.Sd.getInstance().fr("GL_QCOM") && (e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.eu.ce, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.H.ce, 0))
    },
    zV: function(t, i, n, e, h, s) {
        var r = q.q;
        h = h || r.COLOR_BUFFER_BIT, s = s || r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT, this.QB(t, i, n, e, h, s, r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT | r.STENCIL_BUFFER_BIT)
    },
    QB: null,
    UR: function(t, i, n, e) {
        this.Ph(), t = t || 0, i = i || 0, n = n || 0, e = e || 1;
        var h = this.Sj,
            s = this.ni;
        h.save(), h.fillStyle = "rgba(" + (0 | 255 * t) + "," + (0 | 255 * i) + "," + (0 | 255 * n) + "," + e + ")", h.clearRect(0, 0, s.width, -s.height), h.fillRect(0, 0, s.width, -s.height), h.restore()
    },
    VR: function(t, i, n, e, h, s, r) {
        this.Ph();
        var a = q.q,
            o = [0, 0, 0, 0],
            c = 0,
            u = 0;
        r & a.COLOR_BUFFER_BIT && (o = a.getParameter(a.COLOR_CLEAR_VALUE), a.clearColor(t, i, n, e)), r & a.DEPTH_BUFFER_BIT && (c = a.getParameter(a.DEPTH_CLEAR_VALUE), a.clearDepth(h)), r & a.STENCIL_BUFFER_BIT && (u = a.getParameter(a.STENCIL_CLEAR_VALUE), a.clearStencil(s)), a.clear(r), r & a.COLOR_BUFFER_BIT && a.clearColor(o[0], o[1], o[2], o[3]), r & a.DEPTH_BUFFER_BIT && a.clearDepth(c), r & a.STENCIL_BUFFER_BIT && a.clearStencil(u)
    },
    end: null,
    pS: function() {
        q.q = q.nY
    },
    qS: function() {
        var t = q.q,
            i = q.n.getInstance();
        t.bindFramebuffer(t.FRAMEBUFFER, this.ak), i.dO(), q.wk(q.Lk), q.Wo(), q.wk(q.Kk), q.Wo()
    },
    clear: function(t, i, n, e) {
        this.zV(t, i, n, e), this.end()
    },
    clearRect: null,
    bS: function(t, i, n, e) {
        this.Sj.clearRect(t, i, n, -e)
    },
    cS: function() {},
    clearDepth: null,
    $R: function() {
        q.log("clearDepth isn't supported on Cocos2d-Html5")
    },
    aS: function(t) {
        this.Ph();
        var i = q.q,
            n = i.getParameter(i.DEPTH_CLEAR_VALUE);
        i.clearDepth(t), i.clear(i.DEPTH_BUFFER_BIT), i.clearDepth(n), this.end()
    },
    clearStencil: null,
    dS: function() {
        q.log("clearDepth isn't supported on Cocos2d-Html5")
    },
    eS: function(t) {
        var i = q.q,
            n = i.getParameter(i.STENCIL_CLEAR_VALUE);
        i.clearStencil(t), i.clear(i.STENCIL_BUFFER_BIT), i.clearStencil(n)
    },
    za: null,
    pu: function(t) {
        this.zc && ((t = t || q.q).save(), this.xa(t), this.transform(t), this.ra.za(), t.restore(), this.Ig = 0)
    },
    qu: function(t) {
        if (this.zc) {
            q.Xo();
            var i = this.vh;
            i && i.Gi() && (i.xy(), this.jA()), this.transform(t), this.ra.za(), this.xa(t), i && i.Gi() && i.ty(this), q.Wo(), this.Ig = 0
        }
    },
    xa: null,
    Wi: function(t) {
        if (t = t || q.q, this.Xs) {
            if (this.Ph(), this.cx) {
                i = this.ni;
                t.save(), t.fillStyle = this.YB, t.clearRect(0, 0, i.width, -i.height), t.fillRect(0, 0, i.width, -i.height), t.restore()
            }
            this.qf();
            for (var i = (t = this.B).length, n = this.ra, e = 0; e < i; e++) {
                var h = t[e];
                h != n && h.za()
            }
            this.end()
        }
    },
    fg: function() {
        var t = q.q;
        if (this.Xs) {
            this.Ph();
            var i = this.cx;
            if (i) {
                var n = [0, 0, 0, 0],
                    e = 0,
                    h = 0;
                i & t.COLOR_BUFFER_BIT && (n = t.getParameter(t.COLOR_CLEAR_VALUE), t.clearColor(this.Qk.h, this.Qk.f, this.Qk.c, this.Qk.e)), i & t.DEPTH_BUFFER_BIT && (e = t.getParameter(t.DEPTH_CLEAR_VALUE), t.clearDepth(this.ZB)), i & t.STENCIL_BUFFER_BIT && (h = t.getParameter(t.STENCIL_CLEAR_VALUE), t.clearStencil(this.$B)), t.clear(i), i & t.COLOR_BUFFER_BIT && t.clearColor(n[0], n[1], n[2], n[3]), i & t.DEPTH_BUFFER_BIT && t.clearDepth(e), i & t.STENCIL_BUFFER_BIT && t.clearStencil(h)
            }
            for (this.qf(), t = this.B, i = 0; i < t.length; i++)(n = t[i]) != this.ra && n.za();
            this.end()
        }
    },
    OM: null,
    nT: function() {
        return q.log("saveToFile isn't supported on Cocos2d-Html5"), null
    },
    oT: function() {
        if (q.d(this.Kg == q.Oj, "only RGBA8888 can be saved as image"), !this.H) return null;
        var t = (i = this.H.ja).width,
            i = i.height,
            n = new q.SG,
            e = q.q,
            h = new Uint8Array(t * i * 4);
        if (!h) return n;
        var s = new Uint8Array(t * i * 4);
        if (!s) return null;
        for (this.Ph(), e.pixelStorei(e.PACK_ALIGNMENT, 1), e.readPixels(0, 0, t, i, e.RGBA, e.UNSIGNED_BYTE, s), this.end(), e = 0; e < i; ++e) this.lT(h, e * t * 4, s, (i - e - 1) * t * 4, 4 * t);
        return n
    },
    lT: function(t, i, n, e, h) {
        for (var s = 0; s < h; s++) t[i + s] = n[e + s]
    },
    XZ: function() {
        q.log("saveToFile isn't supported on Cocos2d-Html5")
    },
    zca: function() {
        q.log("listenToBackground isn't supported on Cocos2d-Html5")
    },
    Aca: function() {
        q.log("listenToForeground isn't supported on Cocos2d-Html5")
    },
    b7: function() {
        return this.cx
    },
    Vea: function(t) {
        this.cx = t
    },
    Z6: function() {
        return this.Qk
    },
    CN: null,
    dU: function(t) {
        var i = this.Qk;
        i.h = t.h, i.f = t.f, i.c = t.c, i.e = t.e, this.YB = "rgba(" + (0 | 255 * t.h) + "," + (0 | 255 * t.f) + "," + (0 | 255 * t.c) + "," + t.e + ")"
    },
    eU: function(t) {
        var i = this.Qk;
        i.h = t.h, i.f = t.f, i.c = t.c, i.e = t.e
    },
    a7: function() {
        return this.ZB
    },
    Uea: function(t) {
        this.ZB = t
    },
    c7: function() {
        return this.$B
    },
    Wea: function(t) {
        this.$B = t
    },
    baa: function() {
        return this.Xs
    },
    Lea: function(t) {
        this.Xs = t
    }
}), q.pa.Rc ? (b = q.Nb.prototype, b.ctor = q.Nb.prototype.Vi, b.kb = q.Nb.prototype.rT, b.rF = q.Nb.prototype.US, b.Ph = q.Nb.prototype.TR, b.QB = q.Nb.prototype.VR, b.end = q.Nb.prototype.qS, b.clearRect = q.Nb.prototype.cS, b.clearDepth = q.Nb.prototype.aS, b.clearStencil = q.Nb.prototype.eS, b.za = q.Nb.prototype.qu, b.xa = q.Nb.prototype.fg, b.OM = q.Nb.prototype.oT, b.CN = q.Nb.prototype.eU) : (b = q.Nb.prototype, b.ctor = q.Nb.prototype.Ui, b.kb = q.Nb.prototype.qT, b.rF = q.Nb.prototype.TS, b.Ph = q.Nb.prototype.SR, b.QB = q.Nb.prototype.UR, b.end = q.Nb.prototype.pS, b.clearRect = q.Nb.prototype.bS, b.clearDepth = q.Nb.prototype.$R, b.clearStencil = q.Nb.prototype.dS, b.za = q.Nb.prototype.pu, b.xa = q.Nb.prototype.Wi, b.OM = q.Nb.prototype.nT, b.CN = q.Nb.prototype.dU), q.Nb.create = function(t, i, n, e) {
    n = n || q.Oj, e = e || 0;
    var h = new q.Nb;
    return h && h.rF(t, i, n, e) ? h : null
}, q.Lj = 0, q.sn = 1, q.lH = 4, q.yQ = 75, q.pc = q.Lb.extend({
    ng: null,
    bk: 0,
    ra: null,
    $j: null,
    Vp: null,
    Je: !1,
    s8: function() {
        return this.$j
    },
    as: function(t) {
        this.$j = q.YM(t)
    },
    K6: function() {
        return this.Vp
    },
    $r: function(t) {
        this.Vp = q.YM(t)
    },
    n$: function() {
        return this.ng
    },
    wr: function() {
        return this.bk
    },
    UW: function() {
        return this.ra
    },
    Ak: function(t) {
        this.bk != t && (this.bk = q.Od(t, 0, 100), this.WD())
    },
    Uf: function() {},
    Bl: function() {
        return !1
    },
    uaa: function() {
        return this.Je
    },
    RB: function(t) {
        if (t < q.lH) {
            var i = q.yQ;
            return this.Je ? q.a(i >> 7 - (t << 1) & 1, i >> 7 - (1 + (t << 1)) & 1) : q.a(i >> 1 + (t << 1) & 1, i >> (t << 1) & 1)
        }
        return q.Ua()
    },
    cD: null,
    PD: 270,
    nC: 270,
    Ie: 0,
    dC: !1,
    PB: null,
    pe: 0,
    cd: null,
    Sg: null,
    eE: null,
    ou: !1,
    ctor: null,
    Ui: function() {
        q.Lb.prototype.ctor.call(this), this.ng = q.Lj, this.bk = 0, this.$j = q.a(0, 0), this.Vp = q.a(0, 0), this.Je = !1, this.ra = null, this.cD = q.Ua(), this.nC = this.PD = 270, this.Ie = 0, this.dC = !1, this.PB = q.uf()
    },
    Vi: function() {
        q.Lb.prototype.ctor.call(this), this.ng = q.Lj, this.bk = 0, this.$j = q.a(0, 0), this.Vp = q.a(0, 0), this.Je = !1, this.ra = null, this.eE = q.q.createBuffer(), this.pe = 0, this.Sg = this.cd = null, this.ou = !1
    },
    Qa: function(t) {
        this.ra.Qa(t)
    },
    w: function(t) {
        this.ra.w(t)
    },
    Pc: function() {
        return this.ra.Pc()
    },
    Ei: function() {
        return this.ra.Ei()
    },
    WN: null,
    rU: function(t) {
        this.Je !== t && (this.Je = t)
    },
    sU: function(t) {
        this.Je !== t && (this.Je = t, this.Sg = this.cd = null, this.pe = 0)
    },
    iv: null,
    tU: function(t) {
        this.ra != t && (this.ra = t, this.Db(this.ra.g()))
    },
    uU: function(t) {
        t && this.ra != t && (this.ra = t, this.Db(t.g()), this.cd && (this.Sg = this.cd = null, this.pe = 0))
    },
    cn: null,
    AU: function(t) {
        t !== this.ng && (this.ng = t)
    },
    BU: function(t) {
        t !== this.ng && (this.cd && (this.Sg = this.cd = null, this.pe = 0), this.ng = t)
    },
    Uz: null,
    pU: function(t) {
        this.Je !== t && (this.Je = t)
    },
    qU: function(t) {
        this.Je !== t && (this.Je = t, this.Sg = this.cd = null, this.pe = 0)
    },
    Jf: function(t) {
        var i = this.ra;
        if (!i) return {
            Oa: 0,
            Ia: 0
        };
        var n = i.ac,
            e = q.a(n.K.p.Oa, n.K.p.Ia),
            n = q.a(n.N.p.Oa, n.N.p.Ia);
        return i.Ld && (i = t.x, t.x = t.y, t.y = i), {
            Oa: e.x * (1 - t.x) + n.x * t.x,
            Ia: e.y * (1 - t.y) + n.y * t.y
        }
    },
    Kf: function(t) {
        if (!this.ra) return {
            x: 0,
            y: 0
        };
        var i = this.ra.ac,
            n = q.a(i.K.k.x, i.K.k.y),
            i = q.a(i.N.k.x, i.N.k.y);
        return {
            x: n.x * (1 - t.x) + i.x * t.x,
            y: n.y * (1 - t.y) + i.y * t.y
        }
    },
    oF: null,
    PS: function(t) {
        return this.Ak(0), this.v(q.a(.5, .5)), this.ng = q.Lj, this.Je = !1, this.as(q.a(.5, .5)), this.$r(q.a(1, 1)), this.iv(t), !0
    },
    QS: function(t) {
        return this.Ak(0), this.Sg = this.cd = null, this.pe = 0, this.v(q.a(.5, .5)), this.ng = q.Lj, this.Je = !1, this.as(q.a(.5, .5)), this.$r(q.a(1, 1)), this.iv(t), this.xe(q.ud.getInstance().Hc(q.Mk)), !0
    },
    xa: null,
    Wi: function(t) {
        t = t || q.q;
        var i = this.ra;
        t.globalAlpha = i.hb / 255;
        var n = i.Fa,
            e = i.Yd,
            h = 0 | e.x,
            s = -e.y - n.height;
        t.save(), i.kd && (h = -e.x - n.width, t.scale(-1, 1)), i.ld && (s = e.y, t.scale(1, -1)), this.ng == q.sn ? (e = this.PB, t.beginPath(), t.rect(e.x, e.y, e.width, e.height), t.clip(), t.closePath()) : this.ng == q.Lj && (e = this.cD, t.beginPath(), t.arc(e.x, e.y, this.Ie, Math.PI / 180 * this.PD, Math.PI / 180 * this.nC, this.dC), t.lineTo(e.x, e.y), t.clip(), t.closePath()), i.H && 0 < n.width && (e = i.H.Fc, i.fx ? t.drawImage(e, 0, 0, n.width, n.height, h, s, n.width, n.height) : t.drawImage(e, n.x, n.y, n.width, n.height, h, s, n.width, n.height)), t.restore(), q.hh()
    },
    fg: function(t) {
        if (t = t || q.q, this.cd && this.ra) {
            q.xs(this);
            var i = this.ra.t;
            q.Th(i.src, i.sa), q.zd(q.xn), this.ra.ia() ? q.Yg(this.ra.ia()) : q.Yg(null), t.bindBuffer(t.ARRAY_BUFFER, this.eE), this.ou && (t.bufferData(t.ARRAY_BUFFER, this.Sg, t.DYNAMIC_DRAW), this.ou = !1), i = q.gc.BYTES_PER_ELEMENT, t.vertexAttribPointer(q.Zb, 2, t.FLOAT, !1, i, 0), t.vertexAttribPointer(q.cg, 4, t.UNSIGNED_BYTE, !0, i, 8), t.vertexAttribPointer(q.Be, 2, t.FLOAT, !1, i, 12), this.ng === q.Lj ? t.drawArrays(t.TRIANGLE_FAN, 0, this.pe) : this.ng == q.sn && (this.Je ? (t.drawArrays(t.TRIANGLE_STRIP, 0, this.pe / 2), t.drawArrays(t.TRIANGLE_STRIP, 4, this.pe / 2), q.Rh++) : t.drawArrays(t.TRIANGLE_STRIP, 0, this.pe)), q.Rh++
        }
    },
    cV: function() {
        if (this.ra) {
            var t, i = this.$j;
            t = this.bk / 100;
            var n = 2 * q.PI * (this.Je ? t : 1 - t),
                e = q.a(i.x, 1),
                h = q.TY(e, i, n),
                n = 0;
            if (0 == t) h = e, n = 0;
            else if (1 == t) h = e, n = 4;
            else {
                var s = q.sP,
                    r = q.lH;
                for (t = 0; t <= r; ++t) {
                    var a = (t + (r - 1)) % r,
                        o = this.RB(t % r),
                        a = this.RB(a);
                    0 == t ? a = q.aN(o, a, 1 - i.x) : 4 == t && (o = q.aN(o, a, 1 - i.x));
                    var c = q.a(0, 0);
                    q.NF(o, a, i, h, c) && (0 != t && 4 != t || 0 <= c.x && 1 >= c.x) && 0 <= c.y && c.y < s && (s = c.y, n = t)
                }
                h = q.Rf(i, q.yk(q.pf(h, i), s))
            }
            if (s = !0, this.pe != n + 3 && (s = !1, this.Sg = this.cd = null, this.pe = 0), !this.cd) {
                for (r = this.pe = n + 3, o = q.gc.BYTES_PER_ELEMENT, this.Sg = new ArrayBuffer(r * o), a = [], t = 0; t < r; t++) a[t] = new q.gc(null, null, null, this.Sg, t * o);
                this.cd = a, q.d(this.cd, "cc.ProgressTimer. Not enough memory")
            }
            if (r = this.cd, !s)
                for (r[0].p = this.Jf(i), r[0].k = this.Kf(i), r[1].p = this.Jf(e), r[1].k = this.Kf(e), t = 0; t < n; t++) i = this.RB(t), r[t + 2].p = this.Jf(i), r[t + 2].k = this.Kf(i);
            r[this.pe - 1].p = this.Jf(h), r[this.pe - 1].k = this.Kf(h)
        }
    },
    SU: function() {
        if (this.ra) {
            var t, i = this.bk / 100,
                n = this.Vp,
                n = q.yk(q.a(1 - n.x + i * n.x, 1 - n.y + i * n.y), .5),
                i = q.pf(this.$j, n),
                n = q.Rf(this.$j, n);
            if (0 > i.x && (n.x += -i.x, i.x = 0), 1 < n.x && (i.x -= n.x - 1, n.x = 1), 0 > i.y && (n.y += -i.y, i.y = 0), 1 < n.y && (i.y -= n.y - 1, n.y = 1), this.Je) {
                if (!this.cd) {
                    this.pe = 8;
                    var e = q.gc.BYTES_PER_ELEMENT;
                    this.Sg = new ArrayBuffer(8 * e);
                    var h = [];
                    for (t = 0; 8 > t; t++) h[t] = new q.gc(null, null, null, this.Sg, t * e);
                    q.d(h, "cc.ProgressTimer. Not enough memory"), h[0].p = this.Jf(q.a(0, 1)), h[0].k = this.Kf(q.a(0, 1)), h[1].p = this.Jf(q.a(0, 0)), h[1].k = this.Kf(q.a(0, 0)), h[6].p = this.Jf(q.a(1, 1)), h[6].k = this.Kf(q.a(1, 1)), h[7].p = this.Jf(q.a(1, 0)), h[7].k = this.Kf(q.a(1, 0)), this.cd = h
                }(t = this.cd)[2].p = this.Jf(q.a(i.x, n.y)), t[2].k = this.Kf(q.a(i.x, n.y)), t[3].p = this.Jf(q.a(i.x, i.y)), t[3].k = this.Kf(q.a(i.x, i.y)), t[4].p = this.Jf(q.a(n.x, n.y)), t[4].k = this.Kf(q.a(n.x, n.y)), t[5].p = this.Jf(q.a(n.x, i.y)), t[5].k = this.Kf(q.a(n.x, i.y))
            } else {
                if (!this.cd) {
                    for (this.pe = 4, e = q.gc.BYTES_PER_ELEMENT, this.Sg = new ArrayBuffer(4 * e), this.cd = [], t = 0; 4 > t; t++) this.cd[t] = new q.gc(null, null, null, this.Sg, t * e);
                    q.d(this.cd, "cc.ProgressTimer. Not enough memory")
                }(t = this.cd)[0].p = this.Jf(q.a(i.x, n.y)), t[0].k = this.Kf(q.a(i.x, n.y)), t[1].p = this.Jf(q.a(i.x, i.y)), t[1].k = this.Kf(q.a(i.x, i.y)), t[2].p = this.Jf(q.a(n.x, n.y)), t[2].k = this.Kf(q.a(n.x, n.y)), t[3].p = this.Jf(q.a(n.x, i.y)), t[3].k = this.Kf(q.a(n.x, i.y))
            }
        }
    },
    Nh: function() {
        if (this.ra && this.cd) {
            for (var t = this.ra.ac.R.s, i = this.cd, n = 0, e = this.pe; n < e; ++n) i[n].s = t;
            this.ou = !0
        }
    },
    WD: null,
    ZU: function() {
        var t = this.ra,
            i = t.g(),
            n = this.$j;
        if (this.ng == q.Lj) {
            this.Ie = Math.round(Math.sqrt(i.width * i.width + i.height * i.height));
            var e = 270,
                h = 270,
                s = !1;
            (a = this.cD).x = i.width * n.x, a.y = -i.height * n.y, this.Je ? e = 270 - 3.6 * this.bk : h = 270 + 3.6 * this.bk, t.kd && (a.x -= 2 * i.width * this.$j.x, e = -e - 180, h = -h - 180, s = !s), t.ld && (a.y += 2 * i.height * this.$j.y, s = !s, e = -e, h = -h), this.PD = e, this.nC = h, this.dC = s
        } else {
            var s = this.Vp,
                h = this.bk / 100,
                e = this.PB,
                s = q.size(i.width * (1 - s.x), i.height * (1 - s.y)),
                h = q.size((i.width - s.width) * h, (i.height - s.height) * h),
                h = q.size(s.width + h.width, s.height + h.height),
                r = q.a(i.width * n.x, i.height * n.y),
                a = r.x - h.width / 2;
            .5 < n.x && h.width / 2 >= i.width - r.x && (a = i.width - h.width), s = r.y - h.height / 2, .5 < n.y && h.height / 2 >= i.height - r.y && (s = i.height - h.height), e.x = 0, i = 1, t.kd && (e.x -= h.width, i = -1), 0 < a && (e.x += a * i), e.y = 0, i = 1, t.ld && (e.y += h.height, i = -1), 0 < s && (e.y -= s * i), e.width = h.width, e.height = -h.height
        }
    },
    $U: function() {
        var t = this.ng;
        t === q.Lj ? this.cV() : t === q.sn && this.SU(), this.Nh(), this.ou = !0
    }
}), q.pa.Rc ? (b = q.pc.prototype, b.ctor = q.pc.prototype.Vi, b.WN = q.pc.prototype.sU, b.iv = q.pc.prototype.uU, b.cn = q.pc.prototype.BU, b.Uz = q.pc.prototype.qU, b.oF = q.pc.prototype.QS, b.xa = q.pc.prototype.fg, b.WD = q.pc.prototype.$U) : (b = q.pc.prototype, b.ctor = q.pc.prototype.Ui, b.WN = q.pc.prototype.rU, b.iv = q.pc.prototype.tU, b.cn = q.pc.prototype.AU, b.Uz = q.pc.prototype.pU, b.oF = q.pc.prototype.PS, b.xa = q.pc.prototype.Wi, b.WD = q.pc.prototype.ZU), q.pc.create = function(t) {
    var i = new q.pc;
    return i.oF(t) ? i : null
}, q.pv = -1, q.UN = function(t, i) {
    t.xe(i);
    var n = t.B;
    if (n)
        for (var e = 0; e < n.length; e++) q.UN(n[e], i)
}, q.sf = q.r.extend({
    yi: null,
    Tp: 0,
    Sn: !1,
    ctor: function() {
        q.r.prototype.ctor.call(this), this.yi = null, this.Tp = 0, this.Sn = !1
    },
    init: function(t) {
        return this.yi = t, this.Tp = 1, this.Sn = !1, q.sf.NC = !0, q.sf.NC && (q.pv = q.q.getParameter(q.q.STENCIL_BITS), 0 >= q.pv && q.log("Stencil buffer is not enabled."), q.sf.NC = !1), !0
    },
    ba: function() {
        q.r.prototype.ba.call(this), this.yi.ba()
    },
    Yh: function() {
        q.r.prototype.Yh.call(this), this.yi.Yh()
    },
    Zh: function() {
        this.yi.Zh(), q.r.prototype.Zh.call(this)
    },
    kb: function() {
        this.yi.kb(), q.r.prototype.kb.call(this)
    },
    za: function(t) {
        var i = t || q.q;
        if (1 > q.pv) q.r.prototype.za.call(this, t);
        else if (this.yi && this.yi.zc)
            if (q.sf.Dt = -1, q.sf.Dt + 1 == q.pv) q.sf.jE = !0, q.sf.jE && (q.log("Nesting more than " + q.pv + "stencils is not supported. Everything will be drawn without stencil for this node and its childs."), q.sf.jE = !1), q.r.prototype.za.call(this, t);
            else {
                q.sf.Dt++;
                var n = (f = 1 << q.sf.Dt) | f - 1,
                    e = i.isEnabled(i.STENCIL_TEST),
                    h = i.getParameter(i.STENCIL_WRITEMASK),
                    s = i.getParameter(i.STENCIL_FUNC),
                    r = i.getParameter(i.STENCIL_REF),
                    a = i.getParameter(i.STENCIL_VALUE_MASK),
                    o = i.getParameter(i.STENCIL_FAIL),
                    c = i.getParameter(i.STENCIL_PASS_DEPTH_FAIL),
                    u = i.getParameter(i.STENCIL_PASS_DEPTH_PASS);
                i.enable(i.STENCIL_TEST), i.stencilMask(f);
                var l = i.getParameter(i.DEPTH_WRITEMASK);
                if (i.depthMask(!1), i.stencilFunc(i.NEVER, f, f), i.stencilOp(this.Sn ? i.REPLACE : i.ZERO, i.KEEP, i.KEEP), q.se.RE(q.Ua(), q.RY(), q.sl(1, 1, 1, 1)), i.stencilFunc(i.NEVER, f, f), i.stencilOp(this.Sn ? i.ZERO : i.REPLACE, i.KEEP, i.KEEP), 1 > this.Tp) {
                    var f = q.ud.getInstance().Hc(q.rw),
                        d = i.getUniformLocation(f.So(), q.CI);
                    q.eF(f.So()), f.jv(d, this.Tp), q.UN(this.yi, f)
                }
                q.Xo(), this.transform(), this.yi.za(), q.Wo(), i.depthMask(l), i.stencilFunc(i.EQUAL, n, n), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), q.r.prototype.za.call(this, t), i.stencilFunc(s, r, a), i.stencilOp(o, c, u), i.stencilMask(h), e || i.disable(i.STENCIL_TEST), q.sf.Dt--
            }
        else this.Sn && q.r.prototype.za.call(this, t)
    },
    N9: function() {
        return this.yi
    },
    Nga: function(t) {
        this.yi = t
    },
    E6: function() {
        return this.Tp
    },
    Hea: function(t) {
        this.Tp = t
    },
    laa: function() {
        return this.Sn
    },
    Ffa: function(t) {
        this.Sn = t
    }
}), q.sf.NC = null, q.sf.jE = null, q.sf.Dt = null, q.sf.create = function(t) {
    var i = new q.sf;
    return i.init(t), i
}, q.dH = q.Lb.extend({
    qq: !1,
    Tq: !1,
    H: null,
    t: null,
    Kq: null,
    bu: 0,
    qC: 0,
    Zn: 0,
    XC: 0,
    rm: 0,
    oD: 0,
    kD: null,
    jD: null,
    tb: null,
    gq: null,
    Jh: null,
    be: null,
    hq: null,
    Wq: null,
    ctor: function() {
        q.Lb.prototype.ctor.call(this), this.Kq = q.Ua(), this.t = new q.Wl(770, 771), this.eE = q.q.createBuffer(), this.Tq = this.qq = !1, this.H = null, this.oD = this.rm = this.XC = this.Zn = this.qC = this.bu = 0, this.Wq = this.hq = this.be = this.Jh = this.gq = this.tb = this.jD = this.kD = null
    },
    ia: function() {
        return this.H
    },
    ya: function(t) {
        this.H != t && (this.H = t)
    },
    Mm: function() {
        return this.t
    },
    $g: function(t, i) {
        1 == arguments.length ? this.t = t : 2 == arguments.length && (this.t.src = t, this.t.sa = i)
    },
    Ei: function() {
        return q.d(!1, "Opacity no supported"), 0
    },
    w: function() {
        q.d(!1, "Set opacity no supported")
    },
    Uf: function() {},
    Bl: function() {
        return !1
    },
    kb: function() {
        q.r.prototype.kb.call(this), this.be && q.q.deleteBuffer(this.be), this.Wq && q.q.deleteBuffer(this.Wq), this.hq && q.q.deleteBuffer(this.hq)
    },
    haa: function() {
        return this.qq
    },
    ufa: function(t) {
        this.qq = t
    },
    Caa: function() {
        return this.Tq
    },
    Mga: function(t) {
        this.Tq = t
    },
    pX: function(t, i, n, e, h) {
        return q.d(null != h, "Invalid filename or texture"), "string" == typeof h && (h = q.Ka.getInstance().cc(h)), q.r.prototype.i.call(this, q.Ua()), this.v(q.Ua()), this.Vy(!0), this.Tq = !1, this.qq = !0, this.Zn = -1 == i ? n / 5 : i, this.Zn *= this.Zn, this.bu = n, this.qC = 1 / t, t = 2 + (0 | 60 * t), this.rm = 0, this.jD = new Float32Array(t), this.kD = new Float32Array(2 * t), this.tb = new Float32Array(4 * t), this.Jh = new Float32Array(4 * t), this.gq = new Uint8Array(8 * t), this.XC = t, t = q.q, this.be = t.createBuffer(), this.Wq = t.createBuffer(), this.hq = t.createBuffer(), this.t.src = t.SRC_ALPHA, this.t.sa = t.ONE_MINUS_SRC_ALPHA, this.xe(q.ud.getInstance().Hc(q.Mk)), this.ya(h), this.Qa(e), this.yN(), t.bindBuffer(t.ARRAY_BUFFER, this.be), t.bufferData(t.ARRAY_BUFFER, this.tb, t.DYNAMIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this.Wq), t.bufferData(t.ARRAY_BUFFER, this.Jh, t.DYNAMIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this.hq), t.bufferData(t.ARRAY_BUFFER, this.gq, t.DYNAMIC_DRAW), !0
    },
    Pha: function(t) {
        this.Qa(t);
        for (var i = this.gq, n = 0, e = 2 * this.rm; n < e; n++) i[4 * n] = t.h, i[4 * n + 1] = t.f, i[4 * n + 2] = t.c
    },
    reset: function() {
        this.rm = 0
    },
    i: function(t) {
        this.Tq = !0, this.Kq = q.a(t.x, t.y)
    },
    xa: function(t) {
        1 >= this.rm || !this.H || !this.H.md || (t = t || q.q, q.xs(this), q.zd(q.xn), q.Th(this.t.src, this.t.sa), q.Yg(this.H), t.bindBuffer(t.ARRAY_BUFFER, this.be), t.bufferData(t.ARRAY_BUFFER, this.tb, t.DYNAMIC_DRAW), t.vertexAttribPointer(q.Zb, 2, t.FLOAT, !1, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, this.Wq), t.bufferData(t.ARRAY_BUFFER, this.Jh, t.DYNAMIC_DRAW), t.vertexAttribPointer(q.Be, 2, t.FLOAT, !1, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, this.hq), t.bufferData(t.ARRAY_BUFFER, this.gq, t.DYNAMIC_DRAW), t.vertexAttribPointer(q.cg, 4, t.UNSIGNED_BYTE, !0, 0, 0), t.drawArrays(t.TRIANGLE_STRIP, 0, 2 * this.rm), q.Rh++)
    },
    update: function(t) {
        if (this.Tq) {
            t *= this.qC;
            var i, n, e, h, s = 0,
                r = this.rm,
                a = this.jD,
                o = this.kD,
                c = this.tb,
                u = this.gq;
            for (e = 0; e < r; e++) a[e] -= t, 0 >= a[e] ? s++ : (i = e - s, 0 < s ? (a[i] = a[e], o[2 * i] = o[2 * e], o[2 * i + 1] = o[2 * e + 1], h = 2 * e, n = 2 * i, c[2 * n] = c[2 * h], c[2 * n + 1] = c[2 * h + 1], c[2 * (n + 1)] = c[2 * (h + 1)], c[2 * (n + 1) + 1] = c[2 * (h + 1) + 1], h *= 4, n *= 4, u[n + 0] = u[h + 0], u[n + 1] = u[h + 1], u[n + 2] = u[h + 2], u[n + 4] = u[h + 4], u[n + 5] = u[h + 5], u[n + 6] = u[h + 6]) : n = 8 * i, i = 255 * a[i], u[n + 3] = i, u[n + 7] = i);
            if (r -= s, e = !0, r >= this.XC ? e = !1 : 0 < r && (t = q.ZM(q.a(o[2 * (r - 1)], o[2 * (r - 1) + 1]), this.Kq) < this.Zn, n = 1 != r && q.ZM(q.a(o[2 * (r - 2)], o[2 * (r - 2) + 1]), this.Kq) < 2 * this.Zn, t || n) && (e = !1), e && (o[2 * r] = this.Kq.x, o[2 * r + 1] = this.Kq.y, a[r] = 1, a = 8 * r, e = this.gb, u[a] = e.h, u[a + 1] = e.f, u[a + 2] = e.c, u[a + 4] = e.h, u[a + 5] = e.f, u[a + 6] = e.c, u[a + 3] = 255, u[a + 7] = 255, 0 < r && this.qq && (1 < r ? q.BG(o, this.bu, this.tb, r, 1) : q.BG(o, this.bu, this.tb, 0, 2)), r++), this.qq || q.BG(o, this.bu, this.tb, 0, r), r && this.oD != r) {
                for (o = 1 / r, u = this.Jh, e = 0; e < r; e++) u[4 * e] = 0, u[4 * e + 1] = o * e, u[2 * (2 * e + 1)] = 1, u[2 * (2 * e + 1) + 1] = o * e;
                this.oD = r
            }
            this.rm = r
        }
    }
}), q.dH.create = function(t, i, n, e, h) {
    var s = new q.dH;
    return s && s.pX(t, i, n, e, h) ? s : null
}, q.zp = q.ca.extend({
    Sp: !1,
    ek: 0,
    ka: null,
    H: null,
    Hh: null,
    uq: null,
    Un: !1,
    Wb: null,
    mC: 0,
    ga: !1,
    ctor: function() {
        this.Sp = !1, this.ek = 0, this.H = this.ka = null, this.Hh = q.a(0, 0), this.uq = null, this.Un = !1, this.Wb = null, this.mC = 0, this.ga = !1
    },
    Gi: function() {
        return this.Sp
    },
    setActive: function(t) {
        this.Sp = t, t || (t = q.n.getInstance()).ds(t.jl)
    },
    j9: function() {
        return this.ek
    },
    Q_: function(t) {
        this.ek = t
    },
    T7: function() {
        return this.ka
    },
    Afa: function(t) {
        this.ka.width = parseInt(t.width), this.ka.height = parseInt(t.height)
    },
    O9: function() {
        return this.Hh
    },
    Oga: function(t) {
        this.Hh = t
    },
    Eaa: function() {
        return this.Un
    },
    Wga: function(t) {
        this.Un != t && (this.Un = t, this.Cy())
    },
    az: function(t, i, n) {
        if (!i) {
            var e = q.n.getInstance().Ju(),
                h = q.Zl(e.width),
                s = q.Zl(e.height),
                r = new Uint8Array(h * s * 4);
            if (!r) return q.log("cocos2d: CCGrid: not enough memory."), !1;
            if ((i = new q.rb).Ou(r, q.Oj, h, s, e), !i) return q.log("cocos2d: CCGrid: error creating texture"), !1
        }
        return this.Sp = !1, this.ek = 0, this.ka = t, this.H = i, this.Un = n || !1, i = this.H.g(), this.Hh.x = i.width / t.width, this.Hh.y = i.height / t.height, this.uq = new q.zP, !!this.uq && (this.uq.cX(this.H), this.Wb = q.ud.getInstance().Hc(q.Kp), this.Cy(), !0)
    },
    xy: function() {
        this.mC = q.n.getInstance().jl, this.d_(), this.uq.xV(this.H)
    },
    ty: function(t) {
        if (this.uq.nV(this.H), q.n.getInstance().ds(this.mC), t.Ro().Dr()) {
            var i = t.UE();
            q.kz(i.x, i.y), t.Ro().GF(), q.kz(-i.x, -i.y)
        }
        q.Yg(this.H), this.vE()
    },
    vE: function() {
        q.d(0, "")
    },
    YF: function() {
        q.d(0, "")
    },
    Cy: function() {
        q.d(0, "")
    },
    d_: function() {
        var t = q.n.getInstance().Ju();
        q.q.viewport(0, 0, t.width, t.height), q.wk(q.Lk), q.Fr();
        var i = new q.ta;
        q.yF(i, 0, t.width, 0, t.height, -1, 1), q.Gr(i), q.wk(q.Kk), q.Fr(), q.VN()
    }
}), q.zp.create = function(t, i, n) {
    var e = new q.zp;
    return e && e.az(t, i, n) ? e : null
}, q.CA = q.zp.extend({
    zi: null,
    tb: null,
    fl: null,
    Tb: null,
    Ih: null,
    be: null,
    xh: null,
    ctor: function() {
        q.zp.prototype.ctor.call(this), this.xh = this.be = this.Ih = this.Tb = this.fl = this.tb = this.zi = null
    },
    DO: function(t) {
        q.d(t.x == (0 | t.x) && t.y == (0 | t.y), "Numbers must be integers"), t = 0 | 3 * (t.x * (this.ka.height + 1) + t.y);
        var i = this.tb;
        return new q.Pb(i[t], i[t + 1], i[t + 2])
    },
    Dd: function(t) {
        q.d(t.x == (0 | t.x) && t.y == (0 | t.y), "Numbers must be integers"), t = 0 | 3 * (t.x * (this.ka.height + 1) + t.y);
        var i = this.fl;
        return new q.Pb(i[t], i[t + 1], i[t + 2])
    },
    Ue: function(t, i) {
        q.d(t.x == (0 | t.x) && t.y == (0 | t.y), "Numbers must be integers");
        var n = 0 | 3 * (t.x * (this.ka.height + 1) + t.y),
            e = this.tb;
        e[n] = i.x, e[n + 1] = i.y, e[n + 2] = i.z, this.ga = !0
    },
    vE: function() {
        var t = this.ka.width * this.ka.height;
        q.zd(q.af | q.Pp), this.Wb.Fd(), this.Wb.lv();
        var i = q.q,
            n = this.ga;
        i.bindBuffer(i.ARRAY_BUFFER, this.be), n && i.bufferData(i.ARRAY_BUFFER, this.tb, i.DYNAMIC_DRAW), i.vertexAttribPointer(q.Zb, 3, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, this.Ih), n && i.bufferData(i.ARRAY_BUFFER, this.zi, i.DYNAMIC_DRAW), i.vertexAttribPointer(q.Be, 2, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.xh), n && i.bufferData(i.ELEMENT_ARRAY_BUFFER, this.Tb, i.STATIC_DRAW), i.drawElements(i.TRIANGLES, 6 * t, i.UNSIGNED_SHORT, 0), n && (this.ga = !1), q.hh()
    },
    YF: function() {
        if (0 < this.ek) {
            for (var t = this.fl, i = this.tb, n = 0, e = this.tb.length; n < e; n++) t[n] = i[n];
            --this.ek
        }
    },
    Cy: function() {
        var t = q.q,
            i = this.H.yl(),
            n = this.H.xl(),
            e = this.H.ja.height,
            h = this.ka,
            s = (h.width + 1) * (h.height + 1);
        this.tb = new Float32Array(3 * s), this.zi = new Float32Array(2 * s), this.Tb = new Uint16Array(h.width * h.height * 6), this.be && t.deleteBuffer(this.be), this.be = t.createBuffer(), this.Ih && t.deleteBuffer(this.Ih), this.Ih = t.createBuffer(), this.xh && t.deleteBuffer(this.xh), this.xh = t.createBuffer();
        for (var r, a, o = this.Tb, c = this.zi, u = this.Un, l = this.tb, s = 0; s < h.width; ++s)
            for (r = 0; r < h.height; ++r) {
                var f = r * h.width + s,
                    d = (a = s * this.Hh.x) + this.Hh.x,
                    g = r * this.Hh.y,
                    p = g + this.Hh.y,
                    b = s * (h.height + 1) + r,
                    y = (s + 1) * (h.height + 1) + r,
                    v = (s + 1) * (h.height + 1) + (r + 1),
                    w = s * (h.height + 1) + (r + 1);
                o[6 * f] = b, o[6 * f + 1] = y, o[6 * f + 2] = w, o[6 * f + 3] = y, o[6 * f + 4] = v, o[6 * f + 5] = w;
                var f = [3 * b, 3 * y, 3 * v, 3 * w],
                    x = [{
                        x: a,
                        y: g,
                        z: 0
                    }, {
                        x: d,
                        y: g,
                        z: 0
                    }, {
                        x: d,
                        y: p,
                        z: 0
                    }, {
                        x: a,
                        y: p,
                        z: 0
                    }],
                    b = [2 * b, 2 * y, 2 * v, 2 * w],
                    d = [q.a(a, g), q.a(d, g), q.a(d, p), q.a(a, p)];
                for (a = 0; 4 > a; ++a) l[f[a]] = x[a].x, l[f[a] + 1] = x[a].y, l[f[a] + 2] = x[a].z, c[b[a]] = d[a].x / i, c[b[a] + 1] = u ? (e - d[a].y) / n : d[a].y / n
            }
        this.fl = new Float32Array(this.tb), t.bindBuffer(t.ARRAY_BUFFER, this.be), t.bufferData(t.ARRAY_BUFFER, this.tb, t.DYNAMIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this.Ih), t.bufferData(t.ARRAY_BUFFER, this.zi, t.DYNAMIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.xh), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.Tb, t.STATIC_DRAW), this.ga = !0
    }
}), q.CA.create = function(t, i, n) {
    var e = new q.CA;
    return e && e.az(t, i, n) ? e : null
}, q.pB = q.zp.extend({
    zi: null,
    tb: null,
    fl: null,
    Tb: null,
    Ih: null,
    be: null,
    xh: null,
    ctor: function() {
        q.zp.prototype.ctor.call(this), this.xh = this.be = this.Ih = this.Tb = this.fl = this.tb = this.zi = null
    },
    rO: function(t) {
        q.d(t.x == (0 | t.x) && t.y == (0 | t.y), "Numbers must be integers"), t = 12 * (this.ka.height * t.x + t.y);
        var i = this.tb;
        return new q.mw(new q.Pb(i[t], i[t + 1], i[t + 2]), new q.Pb(i[t + 3], i[t + 4], i[t + 5]), new q.Pb(i[t + 6], i[t + 7], i[t + 8]), new q.Pb(i[t + 9], i[t + 10], i[t + 11]))
    },
    ai: function(t) {
        q.d(t.x == (0 | t.x) && t.y == (0 | t.y), "Numbers must be integers"), t = 12 * (this.ka.height * t.x + t.y);
        var i = this.fl;
        return new q.mw(new q.Pb(i[t], i[t + 1], i[t + 2]), new q.Pb(i[t + 3], i[t + 4], i[t + 5]), new q.Pb(i[t + 6], i[t + 7], i[t + 8]), new q.Pb(i[t + 9], i[t + 10], i[t + 11]))
    },
    vg: function(t, i) {
        q.d(t.x == (0 | t.x) && t.y == (0 | t.y), "Numbers must be integers");
        var n = 12 * (this.ka.height * t.x + t.y),
            e = this.tb;
        e[n] = i.K.x, e[n + 1] = i.K.y, e[n + 2] = i.K.z, e[n + 3] = i.S.x, e[n + 4] = i.S.y, e[n + 5] = i.S.z, e[n + 6] = i.R.x, e[n + 7] = i.R.y, e[n + 8] = i.R.z, e[n + 9] = i.N.x, e[n + 10] = i.N.y, e[n + 11] = i.N.z, this.ga = !0
    },
    vE: function() {
        var t = this.ka.width * this.ka.height;
        this.Wb.Fd(), this.Wb.lv();
        var i = q.q,
            n = this.ga;
        q.zd(q.af | q.Pp), i.bindBuffer(i.ARRAY_BUFFER, this.be), n && i.bufferData(i.ARRAY_BUFFER, this.tb, i.DYNAMIC_DRAW), i.vertexAttribPointer(q.Zb, 3, i.FLOAT, !1, 0, this.tb), i.bindBuffer(i.ARRAY_BUFFER, this.Ih), n && i.bufferData(i.ARRAY_BUFFER, this.zi, i.DYNAMIC_DRAW), i.vertexAttribPointer(q.Be, 2, i.FLOAT, !1, 0, this.zi), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.xh), n && i.bufferData(i.ELEMENT_ARRAY_BUFFER, this.Tb, i.STATIC_DRAW), i.drawElements(i.TRIANGLES, 6 * t, i.UNSIGNED_SHORT, 0), n && (this.ga = !1), q.hh()
    },
    YF: function() {
        if (0 < this.ek) {
            for (var t = this.tb, i = this.fl, n = 0; n < t.length; n++) i[n] = t[n];
            --this.ek
        }
    },
    Cy: function() {
        var t = this.H.yl(),
            i = this.H.xl(),
            n = this.H.ja.height,
            e = this.ka,
            h = e.width * e.height;
        this.tb = new Float32Array(12 * h), this.zi = new Float32Array(8 * h), this.Tb = new Uint16Array(6 * h);
        var s = q.q;
        this.be && s.deleteBuffer(this.be), this.be = s.createBuffer(), this.Ih && s.deleteBuffer(this.Ih), this.Ih = s.createBuffer(), this.xh && s.deleteBuffer(this.xh), this.xh = s.createBuffer();
        var r, a, o = 0,
            c = this.Hh,
            u = this.tb,
            l = this.zi,
            f = this.Un;
        for (r = 0; r < e.width; r++)
            for (a = 0; a < e.height; a++) {
                var d = r * c.x,
                    g = d + c.x,
                    p = a * c.y,
                    b = p + c.y;
                u[12 * o] = d, u[12 * o + 1] = p, u[12 * o + 2] = 0, u[12 * o + 3] = g, u[12 * o + 4] = p, u[12 * o + 5] = 0, u[12 * o + 6] = d, u[12 * o + 7] = b, u[12 * o + 8] = 0, u[12 * o + 9] = g, u[12 * o + 10] = b, u[12 * o + 11] = 0;
                var y = p,
                    v = b;
                f && (y = n - p, v = n - b), l[8 * o] = d / t, l[8 * o + 1] = y / i, l[8 * o + 2] = g / t, l[8 * o + 3] = y / i, l[8 * o + 4] = d / t, l[8 * o + 5] = v / i, l[8 * o + 6] = g / t, l[8 * o + 7] = v / i, o++
            }
        for (t = this.Tb, r = 0; r < h; r++) t[6 * r + 0] = 4 * r + 0, t[6 * r + 1] = 4 * r + 1, t[6 * r + 2] = 4 * r + 2, t[6 * r + 3] = 4 * r + 1, t[6 * r + 4] = 4 * r + 2, t[6 * r + 5] = 4 * r + 3;
        this.fl = new Float32Array(this.tb), s.bindBuffer(s.ARRAY_BUFFER, this.be), s.bufferData(s.ARRAY_BUFFER, this.tb, s.DYNAMIC_DRAW), s.bindBuffer(s.ARRAY_BUFFER, this.Ih), s.bufferData(s.ARRAY_BUFFER, this.zi, s.DYNAMIC_DRAW), s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, this.xh), s.bufferData(s.ELEMENT_ARRAY_BUFFER, this.Tb, s.DYNAMIC_DRAW), this.ga = !0
    }
}), q.pB.create = function(t, i, n) {
    var e = new q.pB;
    return e.az(t, i, n), e
}, q.zP = q.ca.extend({
    Tw: null,
    ak: null,
    IJ: null,
    tq: null,
    ctor: function() {
        this.tq = q.q, this.IJ = [0, 0, 0, 0], this.ak = null, this.Tw = this.tq.createFramebuffer()
    },
    cX: function(t) {
        var i = this.tq;
        this.ak = i.getParameter(i.FRAMEBUFFER_BINDING), i.bindFramebuffer(i.FRAMEBUFFER, this.Tw), i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, t.ce, 0), i.checkFramebufferStatus(i.FRAMEBUFFER) != i.FRAMEBUFFER_COMPLETE && q.log("Frame Grabber: could not attach texture to frmaebuffer"), i.bindFramebuffer(i.FRAMEBUFFER, this.ak)
    },
    xV: function() {
        var t = this.tq;
        this.ak = t.getParameter(t.FRAMEBUFFER_BINDING), t.bindFramebuffer(t.FRAMEBUFFER, this.Tw), this.IJ = t.getParameter(t.COLOR_CLEAR_VALUE), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT)
    },
    nV: function() {
        var t = this.tq;
        t.bindFramebuffer(t.FRAMEBUFFER, this.ak), t.colorMask(!0, !0, !0, !0)
    },
    destroy: function() {
        this.tq.deleteFramebuffer(this.Tw)
    }
}), q.tp = -1, q.ze = q.ca.extend({
    ao: null,
    C: null,
    D: q.tp,
    ctor: function() {
        this.C = this.ao = null, this.D = q.tp
    },
    description: function() {
        return "<cc.Action | Tag = " + this.D + ">"
    },
    copy: function() {
        return q.u(this)
    },
    u: function() {
        var t = new q.ze;
        return t.ao = null, t.C = null, t.D = this.D, t
    },
    wj: function() {
        return !0
    },
    I: function(t) {
        this.C = this.ao = t
    },
    stop: function() {
        this.C = null
    },
    step: function() {
        q.log("[Action step]. override me")
    },
    update: function() {
        q.log("[Action update]. override me")
    },
    W9: function() {
        return this.C
    },
    W_: function(t) {
        this.C = t
    },
    G8: function() {
        return this.ao
    },
    aga: function(t) {
        this.ao = t
    },
    WW: function() {
        return this.D
    },
    Qc: function(t) {
        this.D = t
    },
    XF: function() {},
    UF: function() {}
}), q.ze.create = function() {
    return new q.ze
}, q.Jk = q.ze.extend({
    o: 0,
    ctor: function() {
        q.ze.prototype.ctor.call(this), this.o = 0
    },
    Pf: function() {
        return this.o
    },
    s_: function(t) {
        this.o = t
    },
    reverse: function() {
        return q.log("cocos2d: FiniteTimeAction#reverse: Implement me"), null
    },
    u: function() {
        return new q.Jk
    }
}), q.vw = q.ze.extend({
    lo: 0,
    Rb: null,
    ctor: function() {
        q.ze.prototype.ctor.call(this), this.lo = 0, this.Rb = null
    },
    TW: function() {
        return this.lo
    },
    ZN: function(t) {
        this.lo = t
    },
    ma: function(t, i) {
        return q.d(null != t, ""), this.Rb = t, this.lo = i, !0
    },
    u: function() {
        var t = new q.vw;
        return t.ma(this.Rb.u(), this.lo), t
    },
    I: function(t) {
        q.ze.prototype.I.call(this, t), this.Rb.I(t)
    },
    stop: function() {
        this.Rb.stop(), q.ze.prototype.stop.call(this)
    },
    step: function(t) {
        this.Rb.step(t * this.lo)
    },
    wj: function() {
        return this.Rb.wj()
    },
    reverse: function() {
        return q.vw.create(this.Rb.reverse(), this.lo)
    },
    MN: function(t) {
        this.Rb != t && (this.Rb = t)
    },
    WE: function() {
        return this.Rb
    }
}), q.vw.create = function(t, i) {
    var n = new q.vw;
    return n && n.ma(t, i) ? n : null
}, q.BA = q.ze.extend({
    rq: null,
    Zp: !1,
    Zw: !1,
    ux: null,
    tt: null,
    Zo: 0,
    ip: 0,
    qp: 0,
    Go: 0,
    kE: null,
    ctor: function() {
        q.ze.prototype.ctor.call(this), this.rq = null, this.Zw = this.Zp = !1, this.tt = this.ux = null, this.Go = this.qp = this.ip = this.Zo = 0, this.kE = q.uf()
    },
    u: function() {
        var t = new q.BA,
            i = this.kE,
            i = new q.$l(i.x, i.y, i.width, i.height);
        return t.Uh(this.rq, i), t
    },
    daa: function() {
        return this.Zp
    },
    Qea: function(t) {
        this.Zp = t
    },
    Uh: function(t, i) {
        q.d(null != t, ""), i = i || q.uf(), this.rq = t, this.kE = i, this.Zp = !q.Mt(i), this.Zw = !1;
        var n = q.n.getInstance().Y;
        return this.tt = q.a(n.width, n.height), this.ux = q.yk(this.tt, .5), this.Zp && (this.Zo = -(i.x + i.width - this.tt.x), this.ip = -i.x, this.qp = -i.y, this.Go = -(i.y + i.height - this.tt.y), this.ip < this.Zo && (this.ip = this.Zo = (this.Zo + this.ip) / 2), this.qp < this.Go && (this.qp = this.Go = (this.qp + this.Go) / 2), this.qp == this.Go && this.Zo == this.ip && (this.Zw = !0)), !0
    },
    step: function() {
        var t = this.rq.Gc(),
            i = this.rq.Bc(),
            t = this.ux.x - t,
            i = this.ux.y - i;
        this.Zp ? this.Zw || this.C.i(q.Od(t, this.Zo, this.ip), q.Od(i, this.Go, this.qp)) : this.C.i(t, i)
    },
    wj: function() {
        return !this.rq.Ke
    },
    stop: function() {
        this.C = null, q.ze.prototype.stop.call(this)
    }
}), q.BA.create = function(t, i) {
    i = i || new q.uf;
    var n = new q.BA;
    return null != i && n && n.Uh(t, i) || n && n.Uh(t) ? n : null
}, q.F = q.Jk.extend({
    Gb: 0,
    rt: !1,
    ctor: function() {
        q.Jk.prototype.ctor.call(this), this.Gb = 0, this.rt = !1
    },
    u7: function() {
        return this.Gb
    },
    j: function(t) {
        return this.o = 0 === t ? q.aw : t, this.Gb = 0, this.rt = !0
    },
    wj: function() {
        return this.Gb >= this.o
    },
    u: function() {
        var t = new q.F;
        return t.j(this.o), t
    },
    step: function(t) {
        this.rt ? (this.rt = !1, this.Gb = 0) : this.Gb += t, t = 1 > (t = this.Gb / (1.192092896e-7 < this.o ? this.o : 1.192092896e-7)) ? t : 1, this.update(0 < t ? t : 0)
    },
    I: function(t) {
        q.ze.prototype.I.call(this, t), this.Gb = 0, this.rt = !0
    },
    reverse: function() {
        return q.d(!1, "cc.IntervalAction: reverse not implemented."), null
    },
    kp: function() {
        q.d(0, "Actioninterval setAmplitudeRate")
    },
    Po: function() {
        return q.d(0, "Actioninterval getAmplitudeRate"), 0
    }
}), q.F.create = function(t) {
    var i = new q.F;
    return i.j(t), i
}, q.J = q.F.extend({
    Rj: null,
    ID: null,
    Bq: 0,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.Rj = [], this.ID = null, this.Bq = 0
    },
    Qu: function(t, i) {
        return q.d(null != t, "Sequence.initWithTwoActions"), q.d(null != i, "Sequence.initWithTwoActions"), this.j(t.Pf() + i.Pf()), this.Rj[0] = t, this.Rj[1] = i, !0
    },
    u: function() {
        var t = new q.J;
        return t.Qu(this.Rj[0].u(), this.Rj[1].u()), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), this.ID = this.Rj[0].Pf() / this.o, this.Bq = -1
    },
    stop: function() {
        -1 !== this.Bq && this.Rj[this.Bq].stop(), q.ze.prototype.stop.call(this)
    },
    update: function(t) {
        var i = 0,
            n = this.ID,
            e = this.Rj,
            h = this.Bq;
        t < n ? (t = n ? t / n : 1, 0 === i && 1 === h && (e[1].update(0), e[1].stop())) : (i = 1, t = 1 === n ? 1 : (t - n) / (1 - n), -1 === h && (e[0].I(this.C), e[0].update(1), e[0].stop()), h || (e[0].update(1), e[0].stop())), h === i && e[i].wj() || (h !== i && e[i].I(this.C), e[i].update(t), this.Bq = i)
    },
    reverse: function() {
        return q.J.Bn(this.Rj[1].reverse(), this.Rj[0].reverse())
    },
    copy: function() {
        return this.u()
    }
}), q.J.create = function(t) {
    var i = t instanceof Array ? t : arguments;
    0 < i.length && null == i[i.length - 1] && q.log("parameters should not be ending with null in Javascript");
    for (var n = i[0], e = 1; e < i.length; e++) i[e] && (n = q.J.Bn(n, i[e]));
    return n
}, q.J.Bn = function(t, i) {
    var n = new q.J;
    return n.Qu(t, i), n
}, q.pw = q.F.extend({
    lf: 0,
    ml: 0,
    Ix: 0,
    KI: !1,
    Rb: null,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.Ix = this.ml = this.lf = 0, this.KI = !1, this.Rb = null
    },
    ma: function(t, i) {
        return !!this.j(t.Pf() * i) && (this.lf = i, this.Rb = t, t instanceof q.Ag && (this.lf -= 1), this.ml = 0, !0)
    },
    u: function() {
        var t = new q.pw;
        return t.ma(this.Rb.u(), this.lf), t
    },
    I: function(t) {
        this.ml = 0, this.Ix = this.Rb.Pf() / this.o, q.F.prototype.I.call(this, t), this.Rb.I(t)
    },
    stop: function() {
        this.Rb.stop(), q.ze.prototype.stop.call(this)
    },
    update: function(t) {
        var i = this.Rb,
            n = this.o,
            e = this.lf,
            h = this.Ix;
        if (t >= h) {
            for (; t > h && this.ml < e;) i.update(1), this.ml++, i.stop(), i.I(this.C), this.Ix = h += i.Pf() / n;
            1 <= t && this.ml < e && this.ml++, this.KI && (this.ml == e ? (i.update(1), i.stop()) : i.update(t - (h - i.Pf() / n)))
        } else i.update(t * e % 1)
    },
    wj: function() {
        return this.ml == this.lf
    },
    reverse: function() {
        return q.pw.create(this.Rb.reverse(), this.lf)
    },
    MN: function(t) {
        this.Rb != t && (this.Rb = t)
    },
    WE: function() {
        return this.Rb
    }
}), q.pw.create = function(t, i) {
    var n = new q.pw;
    return n.ma(t, i), n
}, q.jh = q.F.extend({
    Rb: null,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.Rb = null
    },
    ma: function(t) {
        return q.d(null != t, ""), this.Rb = t, !0
    },
    u: function() {
        var t = new q.jh;
        return t.ma(this.Rb.u()), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), this.Rb.I(t)
    },
    step: function(t) {
        var i = this.Rb;
        i.step(t), i.wj() && (i.I(this.C), i.step(i.Gb - i.Pf()))
    },
    wj: function() {
        return !1
    },
    reverse: function() {
        return q.jh.create(this.Rb.reverse())
    },
    MN: function(t) {
        this.Rb != t && (this.Rb = t)
    },
    WE: function() {
        return this.Rb
    }
}), q.jh.create = function(t) {
    var i = new q.jh;
    return i && i.ma(t) ? i : null
}, q.Zc = q.F.extend({
    dl: null,
    nl: null,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.nl = this.dl = null
    },
    Qu: function(t, i) {
        q.d(null != t, "no action1"), q.d(null != i, "no action2");
        var n = !1,
            e = t.Pf(),
            h = i.Pf();
        return this.j(Math.max(e, h)) && (this.dl = t, this.nl = i, e > h ? this.nl = q.J.Bn(i, q.Cc.create(e - h)) : e < h && (this.dl = q.J.Bn(t, q.Cc.create(h - e))), n = !0), n
    },
    u: function() {
        var t = new q.Zc;
        return t.Qu(this.dl.u(), this.nl.u()), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), this.dl.I(t), this.nl.I(t)
    },
    stop: function() {
        this.dl.stop(), this.nl.stop(), q.ze.prototype.stop.call(this)
    },
    update: function(t) {
        this.dl && this.dl.update(t), this.nl && this.nl.update(t)
    },
    reverse: function() {
        return q.Zc.Bn(this.dl.reverse(), this.nl.reverse())
    }
}), q.Zc.create = function(t) {
    var i = t instanceof Array ? t : arguments;
    0 < i.length && null == i[i.length - 1] && q.log("parameters should not be ending with null in Javascript");
    for (var n = i[0], e = 1; e < i.length; e++) null != i[e] && (n = this.Bn(n, i[e]));
    return n
}, q.Zc.Bn = function(t, i) {
    var n = new q.Zc;
    return n.Qu(t, i), n
}, q.Jp = q.F.extend({
    jt: 0,
    mo: 0,
    kC: 0,
    kx: 0,
    Am: 0,
    lC: 0,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.lC = this.Am = this.kx = this.kC = this.mo = this.jt = 0
    },
    j: function(t, i, n) {
        return !!q.F.prototype.j.call(this, t) && (this.jt = i || 0, this.kx = n || this.jt, !0)
    },
    u: function() {
        var t = new q.Jp;
        return t.j(this.o, this.jt, this.kx), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t);
        var i = t.Gh % 360,
            n = this.jt - i;
        180 < n && (n -= 360), -180 > n && (n += 360), this.mo = i, this.kC = n, this.Am = t.kj % 360, 180 < (t = this.kx - this.Am) && (t -= 360), -180 > t && (t += 360), this.lC = t
    },
    reverse: function() {
        q.d(0, "RotateTo reverse not implemented")
    },
    update: function(t) {
        this.C && (this.C.Vz(this.mo + this.kC * t), this.C.Wz(this.Am + this.lC * t))
    }
}), q.Jp.create = function(t, i, n) {
    var e = new q.Jp;
    return e.j(t, i, n), e
}, q.Bs = q.F.extend({
    lh: 0,
    mo: 0,
    Ws: 0,
    Am: 0,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.Am = this.Ws = this.mo = this.lh = 0
    },
    j: function(t, i, n) {
        return !!q.F.prototype.j.call(this, t) && (this.lh = i || 0, this.Ws = n || this.lh, !0)
    },
    u: function() {
        var t = new q.Bs;
        return t.j(this.o, this.lh, this.Ws), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), this.mo = t.Gh, this.Am = t.kj
    },
    update: function(t) {
        this.C && (this.C.Vz(this.mo + this.lh * t), this.C.Wz(this.Am + this.Ws * t))
    },
    reverse: function() {
        return q.Bs.create(this.o, -this.lh, -this.Ws)
    }
}), q.Bs.create = function(t, i, n) {
    var e = new q.Bs;
    return e.j(t, i, n), e
}, q.Ze = q.F.extend({
    ck: null,
    Nd: null,
    wd: null,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.ck = q.a(0, 0), this.Nd = q.a(0, 0), this.wd = q.a(0, 0)
    },
    j: function(t, i) {
        return !!q.F.prototype.j.call(this, t) && (this.ck.x = i.x, this.ck.y = i.y, !0)
    },
    u: function() {
        var t = new q.Ze;
        return t.j(this.o, this.ck), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t);
        var i = t.Gc();
        t = t.Bc(), this.wd.x = i, this.wd.y = t, this.Nd.x = i, this.Nd.y = t
    },
    update: function(t) {
        if (this.C) {
            var i = this.ck.x * t;
            t *= this.ck.y;
            var n = this.Nd;
            if (q.Iv) {
                var e = this.C.Bc(),
                    h = this.wd;
                n.x = n.x + this.C.Gc() - h.x, n.y = n.y + e - h.y, i += n.x, t += n.y, this.C.i(i, t), h.x = i, h.y = t
            } else this.C.i(n.x + i, n.y + t)
        }
    },
    reverse: function() {
        return q.Ze.create(this.o, q.a(-this.ck.x, -this.ck.y))
    }
}), q.Ze.create = function(t, i) {
    var n = new q.Ze;
    return n.j(t, i), n
}, q.Za = q.Ze.extend({
    pq: null,
    ctor: function() {
        q.Ze.prototype.ctor.call(this), this.pq = q.a(0, 0)
    },
    j: function(t, i) {
        return !!q.Ze.prototype.j.call(this, t, i) && (this.pq.x = i.x, this.pq.y = i.y, !0)
    },
    u: function() {
        var t = new q.Za;
        return t.j(this.o, this.pq), t
    },
    I: function(t) {
        q.Ze.prototype.I.call(this, t), this.ck.x = this.pq.x - t.Gc(), this.ck.y = this.pq.y - t.Bc()
    }
}), q.Za.create = function(t, i) {
    var n = new q.Za;
    return n.j(t, i), n
}, q.Lp = q.F.extend({
    Le: 0,
    Me: 0,
    Zt: 0,
    $t: 0,
    kt: 0,
    lt: 0,
    Bf: 0,
    Cf: 0,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.Cf = this.Bf = this.lt = this.kt = this.$t = this.Zt = this.Me = this.Le = 0
    },
    j: function(t, i, n) {
        var e = !1;
        return q.F.prototype.j.call(this, t) && (this.kt = i, this.lt = n, e = !0), e
    },
    u: function() {
        var t = new q.Lp;
        return t.j(this.o, this.kt, this.lt), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), this.Zt = t.Le % 180, this.Bf = this.kt - this.Zt, 180 < this.Bf && (this.Bf -= 360), -180 > this.Bf && (this.Bf += 360), this.$t = t.Me % 360, this.Cf = this.lt - this.$t, 180 < this.Cf && (this.Cf -= 360), -180 > this.Cf && (this.Cf += 360)
    },
    update: function(t) {
        this.C.Xz(this.Zt + this.Bf * t), this.C.Yz(this.$t + this.Cf * t)
    }
}), q.Lp.create = function(t, i, n) {
    var e = new q.Lp;
    return e && e.j(t, i, n), e
}, q.uw = q.Lp.extend({
    j: function(t, i, n) {
        var e = !1;
        return q.Lp.prototype.j.call(this, t, i, n) && (this.Le = i, this.Me = n, e = !0), e
    },
    u: function() {
        var t = new q.uw;
        return t.j(this.o, this.Le, this.Me), t
    },
    I: function(t) {
        q.Lp.prototype.I.call(this, t), this.Bf = this.Le, this.Cf = this.Me, this.kt = this.Zt + this.Bf, this.lt = this.$t + this.Cf
    },
    reverse: function() {
        return q.uw.create(this.o, -this.Le, -this.Me)
    }
}), q.uw.create = function(t, i, n) {
    var e = new q.uw;
    return e && e.j(t, i, n), e
}, q.qn = q.F.extend({
    Nd: null,
    rh: null,
    $k: 0,
    aj: 0,
    wd: null,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.Nd = q.a(0, 0), this.wd = q.a(0, 0), this.rh = q.a(0, 0), this.aj = this.$k = 0
    },
    j: function(t, i, n, e) {
        return !!q.F.prototype.j.call(this, t) && (this.rh.x = i.x, this.rh.y = i.y, this.$k = n, this.aj = e, !0)
    },
    u: function() {
        var t = new q.qn;
        return t.j(this.o, this.rh, this.$k, this.aj), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t);
        var i = t.Gc();
        t = t.Bc(), this.wd.x = i, this.wd.y = t, this.Nd.x = i, this.Nd.y = t
    },
    update: function(t) {
        if (this.C) {
            var i = t * this.aj % 1,
                i = (i = 4 * this.$k * i * (1 - i)) + this.rh.y * t;
            t *= this.rh.x;
            var n = this.Nd;
            if (q.Iv) {
                var e = this.C.Bc(),
                    h = this.wd;
                n.x = n.x + this.C.Gc() - h.x, n.y = n.y + e - h.y, t += n.x, i += n.y, this.C.i(t, i), h.x = t, h.y = i
            } else this.C.i(n.x + t, n.y + i)
        }
    },
    reverse: function() {
        return q.qn.create(this.o, q.a(-this.rh.x, -this.rh.y), this.$k, this.aj)
    }
}), q.qn.create = function(t, i, n, e) {
    var h = new q.qn;
    return h.j(t, i, n, e), h
}, q.ss = q.qn.extend({
    I: function(t) {
        q.qn.prototype.I.call(this, t), this.rh.x -= this.Nd.x, this.rh.y -= this.Nd.y
    },
    u: function() {
        var t = new q.ss;
        return t.j(this.o, this.rh, this.$k, this.aj), t
    }
}), q.ss.create = function(t, i, n, e) {
    var h = new q.ss;
    return h.j(t, i, n, e), h
}, q.HK = function(t, i, n, e) {
    return 0 * Math.pow(1 - e, 3) + 3 * e * Math.pow(1 - e, 2) * t + 3 * Math.pow(e, 2) * (1 - e) * i + Math.pow(e, 3) * n
}, q.nn = q.F.extend({
    Fn: null,
    Nd: null,
    wd: null,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.Fn = [], this.Nd = q.a(0, 0), this.wd = q.a(0, 0)
    },
    j: function(t, i) {
        return !!q.F.prototype.j.call(this, t) && (this.Fn = i, !0)
    },
    u: function() {
        for (var t = new q.nn, i = [], n = 0; n < this.Fn.length; n++) {
            var e = this.Fn[n];
            i.push(q.a(e.x, e.y))
        }
        return t.j(this.o, i), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t);
        var i = t.Gc();
        t = t.Bc(), this.wd.x = i, this.wd.y = t, this.Nd.x = i, this.Nd.y = t
    },
    update: function(t) {
        if (this.C) {
            var i = this.Fn,
                n = q.HK(i[0].x, i[1].x, i[2].x, t);
            if (t = q.HK(i[0].y, i[1].y, i[2].y, t), i = this.Nd, q.Iv) {
                var e = this.C.Bc(),
                    h = this.wd;
                i.x = i.x + this.C.Gc() - h.x, i.y = i.y + e - h.y, n += i.x, t += i.y, this.C.i(n, t), h.x = n, h.y = t
            } else this.C.i(i.x + n, i.y + t)
        }
    },
    reverse: function() {
        var t = this.Fn,
            t = [q.Rf(t[1], q.OF(t[2])), q.Rf(t[0], q.OF(t[2])), q.OF(t[2])];
        return q.nn.create(this.o, t)
    }
}), q.nn.create = function(t, i) {
    var n = new q.nn;
    return n.j(t, i), n
}, q.sA = q.nn.extend({
    ky: null,
    ctor: function() {
        q.nn.prototype.ctor.call(this), this.ky = []
    },
    j: function(t, i) {
        return !!q.F.prototype.j.call(this, t) && (this.ky = i, !0)
    },
    u: function() {
        var t = new q.sA;
        return t.j(this.o, this.ky), t
    },
    I: function(t) {
        q.nn.prototype.I.call(this, t), t = this.Nd;
        var i = this.ky,
            n = this.Fn;
        n[0] = q.pf(i[0], t), n[1] = q.pf(i[1], t), n[2] = q.pf(i[2], t)
    }
}), q.sA.create = function(t, i) {
    var n = new q.sA;
    return n.j(t, i), n
}, q.hc = q.F.extend({
    Ja: 1,
    Ta: 1,
    Rq: 1,
    Sq: 1,
    Ln: 0,
    Mn: 0,
    Bf: 0,
    Cf: 0,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.Sq = this.Rq = this.Ta = this.Ja = 1, this.Cf = this.Bf = this.Mn = this.Ln = 0
    },
    j: function(t, i, n) {
        return !!q.F.prototype.j.call(this, t) && (this.Ln = i, this.Mn = null != n ? n : i, !0)
    },
    u: function() {
        var t = new q.hc;
        return t.j(this.o, this.Ln, this.Mn), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), this.Rq = t.Ja, this.Sq = t.Ta, this.Bf = this.Ln - this.Rq, this.Cf = this.Mn - this.Sq
    },
    update: function(t) {
        this.C && this.C.vb(this.Rq + this.Bf * t, this.Sq + this.Cf * t)
    }
}), q.hc.create = function(t, i, n) {
    var e = new q.hc;
    return e.j(t, i, n), e
}, q.Es = q.hc.extend({
    I: function(t) {
        q.hc.prototype.I.call(this, t), this.Bf = this.Rq * this.Ln - this.Rq, this.Cf = this.Sq * this.Mn - this.Sq
    },
    reverse: function() {
        return q.Es.create(this.o, 1 / this.Ln, 1 / this.Mn)
    },
    u: function() {
        var t = new q.Es;
        return t.j(this.o, this.Ln, this.Mn), t
    }
}), q.Es.create = function(t, i, n) {
    var e = new q.Es;
    return e.j(t, i, n), e
}, q.Gv = q.F.extend({
    lf: 0,
    dD: !1,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.lf = 0, this.dD = !1
    },
    j: function(t, i) {
        return !!q.F.prototype.j.call(this, t) && (this.lf = i, !0)
    },
    u: function() {
        var t = new q.Gv;
        return t.j(this.o, this.lf), t
    },
    update: function(t) {
        if (this.C && !this.wj()) {
            var i = 1 / this.lf;
            this.C.M(t % i > i / 2)
        }
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), this.dD = t.zc
    },
    stop: function() {
        this.C.M(this.dD), q.F.prototype.stop.call(this)
    },
    reverse: function() {
        return q.Gv.create(this.o, this.lf)
    }
}), q.Gv.create = function(t, i) {
    var n = new q.Gv;
    return n.j(t, i), n
}, q.tf = q.F.extend({
    update: function(t) {
        this.C.w(255 * t)
    },
    reverse: function() {
        return q.$f.create(this.o)
    },
    u: function() {
        var t = new q.tf;
        return t.j(this.o), t
    }
}), q.tf.create = function(t) {
    var i = new q.tf;
    return i.j(t), i
}, q.$f = q.F.extend({
    update: function(t) {
        this.C.w(255 * (1 - t))
    },
    reverse: function() {
        return q.tf.create(this.o)
    },
    u: function() {
        var t = new q.$f;
        return t.j(this.o), t
    }
}), q.$f.create = function(t) {
    var i = new q.$f;
    return i.j(t), i
}, q.dw = q.F.extend({
    ly: null,
    nx: null,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.nx = this.ly = 0
    },
    j: function(t, i) {
        return !!q.F.prototype.j.call(this, t) && (this.ly = i, !0)
    },
    u: function() {
        var t = new q.dw;
        return t.j(this.o, this.ly), t
    },
    update: function(t) {
        this.C.w(this.nx + (this.ly - this.nx) * t)
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), this.nx = t.Ei()
    }
}), q.dw.create = function(t, i) {
    var n = new q.dw;
    return n.j(t, i), n
}, q.qB = q.F.extend({
    oe: null,
    Jd: null,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.oe = q.Qe(0, 0, 0), this.Jd = q.Qe(0, 0, 0)
    },
    j: function(t, i, n, e) {
        return !!q.F.prototype.j.call(this, t) && (this.oe = q.Qe(i, n, e), !0)
    },
    u: function() {
        var t = new q.qB,
            i = this.oe;
        return t.j(this.o, i.h, i.f, i.c), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), this.Jd = this.C.Pc()
    },
    update: function(t) {
        var i = this.Jd,
            n = this.oe;
        this.C.Qa(q.Qe(i.h + (n.h - i.h) * t, i.f + (n.f - i.f) * t, i.c + (n.c - i.c) * t))
    }
}), q.qB.create = function(t, i, n, e) {
    var h = new q.qB;
    return h.j(t, i, n, e), h
}, q.Jw = q.F.extend({
    ft: 0,
    et: 0,
    dt: 0,
    wC: 0,
    vC: 0,
    uC: 0,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.uC = this.vC = this.wC = this.dt = this.et = this.ft = 0
    },
    j: function(t, i, n, e) {
        return !!q.F.prototype.j.call(this, t) && (this.ft = i, this.et = n, this.dt = e, !0)
    },
    u: function() {
        var t = new q.Jw;
        return t.j(this.o, this.ft, this.et, this.dt), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), t.Ae && (t = t.Pc(), this.wC = t.h, this.vC = t.f, this.uC = t.c)
    },
    update: function(t) {
        this.C.Ae && this.C.Qa(q.Qe(this.wC + this.ft * t, this.vC + this.et * t, this.uC + this.dt * t))
    },
    reverse: function() {
        return q.Jw.create(this.o, -this.ft, -this.et, -this.dt)
    }
}), q.Jw.create = function(t, i, n, e) {
    var h = new q.Jw;
    return h.j(t, i, n, e), h
}, q.Cc = q.F.extend({
    update: function() {},
    reverse: function() {
        return q.Cc.create(this.o)
    },
    u: function() {
        var t = new q.Cc;
        return t.j(this.o), t
    }
}), q.Cc.create = function(t) {
    var i = new q.Cc;
    return i.j(t), i
}, q.Ip = q.F.extend({
    gl: null,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.gl = null
    },
    ma: function(t) {
        return q.d(null != t, ""), q.d(t != this.gl, ""), !!q.F.prototype.j.call(this, t.Pf()) && (this.gl = t, !0)
    },
    u: function() {
        var t = new q.Ip;
        return t.ma(this.gl.u()), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), this.gl.I(t)
    },
    update: function(t) {
        this.gl && this.gl.update(1 - t)
    },
    reverse: function() {
        return this.gl.u()
    },
    stop: function() {
        this.gl.stop(), q.ze.prototype.stop.call(this)
    }
}), q.Ip.create = function(t) {
    var i = new q.Ip;
    return i.ma(t), i
}, q.sd = q.F.extend({
    Ok: null,
    Hq: 0,
    Kx: null,
    nt: 0,
    JD: null,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.Ok = null, this.Hq = 0, this.Kx = null, this.nt = 0, this.JD = null
    },
    FL: function() {
        return this.Ok
    },
    g_: function(t) {
        this.Ok = t
    },
    YL: function(t) {
        q.d(null != t, "Animate: argument Animation must be non-NULL");
        var i = t.Pf();
        if (this.j(i * t.bl)) {
            this.Hq = 0, this.g_(t), this.Kx = null, this.nt = 0;
            var n = [],
                e = 0,
                h = i / t.to;
            t = t.df, q.Fv(t, q.Ik);
            for (var s = 0; s < t.length; s++) {
                var r = e * h / i,
                    e = e + t[s].cf;
                n.push(r)
            }
            return this.JD = n, !0
        }
        return !1
    },
    u: function() {
        var t = new q.sd;
        return t.YL(this.Ok.u()), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), this.Ok.ho && (this.Kx = t.aW()), this.nt = this.Hq = 0
    },
    update: function(t) {
        1 > t && ((0 | (t *= this.Ok.bl)) > this.nt && (this.Hq = 0, this.nt++), t %= 1);
        for (var i = this.Ok.df, n = i.length, e = this.JD, h = this.Hq; h < n && e[h] <= t; h++) this.C.Zm(i[h].tj()), this.Hq = h + 1
    },
    reverse: function() {
        var t = this.Ok,
            i = t.df,
            n = [];
        if (q.Fv(i, q.Ik), 0 < i.length)
            for (var e = i.length - 1; 0 <= e; e--) {
                var h = i[e];
                if (!h) break;
                n.push(h.u())
            }
        return (i = q.vc.XK(n, t.cf, t.bl)).ve(t.ho), q.sd.create(i)
    },
    stop: function() {
        this.Ok.ho && this.C && this.C.Zm(this.Kx), q.ze.prototype.stop.call(this)
    }
}), q.sd.create = function(t) {
    var i = new q.sd;
    return i.YL(t), i
}, q.nB = q.F.extend({
    Rp: null,
    Qn: null,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.Qn = this.Rp = null
    },
    Uh: function(t, i) {
        return !!this.j(i.Pf()) && (this.Qn = t, this.Rp = i, !0)
    },
    u: function() {
        var t = new q.nB;
        return t.Uh(this.Qn, this.Rp.u()), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), this.Rp.I(this.Qn)
    },
    stop: function() {
        this.Rp.stop()
    },
    update: function(t) {
        this.Rp.update(t)
    },
    M7: function() {
        return this.Qn
    },
    wfa: function(t) {
        this.Qn != t && (this.Qn = t)
    }
}), q.nB.create = function(t, i) {
    var n = new q.nB;
    return n.Uh(t, i), n
}, q.Ag = q.Jk.extend({
    wj: function() {
        return !0
    },
    step: function() {
        this.update(1)
    },
    update: function() {},
    reverse: function() {
        return this.u()
    },
    u: function() {
        return new q.Ag
    }
}), q.li = q.Ag.extend({
    update: function() {
        this.C.M(!0)
    },
    reverse: function() {
        return q.Ij.create()
    },
    u: function() {
        return new q.li
    }
}), q.li.create = function() {
    return new q.li
}, q.Ij = q.Ag.extend({
    update: function() {
        this.C.M(!1)
    },
    reverse: function() {
        return q.li.create()
    },
    u: function() {
        return new q.Ij
    }
}), q.Ij.create = function() {
    return new q.Ij
}, q.Kw = q.Ag.extend({
    update: function() {
        this.C.M(!this.C.zc)
    },
    reverse: function() {
        return new q.Kw
    },
    u: function() {
        return new q.Kw
    }
}), q.Kw.create = function() {
    return new q.Kw
}, q.ow = q.Ag.extend({
    At: !0,
    ctor: function() {
        q.Jk.prototype.ctor.call(this), this.At = !0
    },
    update: function() {
        this.C.Cb(this.At)
    },
    init: function(t) {
        return this.At = t, !0
    },
    reverse: function() {
        return new q.ow(this.At)
    },
    u: function() {
        return new q.ow(this.At)
    }
}), q.ow.create = function(t) {
    null == t && (t = !0);
    var i = new q.ow;
    return i && i.init(t), i
}, q.ew = q.Ag.extend({
    kd: !1,
    ctor: function() {
        q.Jk.prototype.ctor.call(this), this.kd = !1
    },
    $L: function(t) {
        return this.kd = t, !0
    },
    update: function() {
        this.C.Rz(this.kd)
    },
    reverse: function() {
        return q.ew.create(!this.kd)
    },
    u: function() {
        var t = new q.ew;
        return t.$L(this.kd), t
    }
}), q.ew.create = function(t) {
    var i = new q.ew;
    return i.$L(t) ? i : null
}, q.fw = q.Ag.extend({
    ld: !1,
    ctor: function() {
        q.Jk.prototype.ctor.call(this), this.ld = !1
    },
    aM: function(t) {
        return this.ld = t, !0
    },
    update: function() {
        this.C.Nl(this.ld)
    },
    reverse: function() {
        return q.fw.create(!this.ld)
    },
    u: function() {
        var t = new q.fw;
        return t.aM(this.ld), t
    }
}), q.fw.create = function(t) {
    var i = new q.fw;
    return i.aM(t) ? i : null
}, q.NA = q.Ag.extend({
    ea: null,
    ctor: function() {
        q.Jk.prototype.ctor.call(this), this.ea = null
    },
    dM: function(t) {
        return this.ea = t, !0
    },
    update: function() {
        this.C.i(this.ea)
    },
    u: function() {
        var t = new q.NA,
            i = this.ea;
        return t.dM(q.a(i.x, i.y)), t
    }
}), q.NA.create = function(t) {
    var i = new q.NA;
    return i.dM(t), i
}, q.P = q.Ag.extend({
    xi: null,
    Dn: null,
    nm: null,
    Hn: null,
    ctor: function() {
        q.Jk.prototype.ctor.call(this), this.Hn = this.nm = this.Dn = this.xi = null
    },
    Uh: function(t, i, n) {
        return this.Hn = n, this.Dn = t, this.xi = i, !0
    },
    lF: function(t) {
        return this.nm = t, !0
    },
    execute: function() {
        null != this.Dn ? this.Dn.call(this.xi, this.C, this.Hn) : this.nm && this.nm.call(null, this.C)
    },
    update: function() {
        this.execute()
    },
    X9: function() {
        return this.xi
    },
    Uga: function(t) {
        t != this.xi && (this.xi && (this.xi = null), this.xi = t)
    },
    copy: function() {
        var t = new q.P;
        return this.xi ? t.Uh(this.Dn, this.xi, this.Hn) : this.nm && t.lF(this.nm), t
    },
    u: function() {
        var t = new q.P;
        return this.xi ? t.Uh(this.Dn, this.xi, this.Hn) : this.nm && t.lF(this.nm), t
    }
}), q.P.create = function(t, i, n) {
    var e = new q.P;
    if (1 == arguments.length) {
        if (e && e.lF(t)) return e
    } else if (e && e.Uh(t, i, n)) return e.Dn = t, e;
    return null
}, q.DP = q.ca.extend({
    nd: null,
    target: null,
    Bo: 0,
    Bi: null,
    Io: !1,
    paused: !1,
    Ty: null,
    ctor: function() {
        this.nd = [], this.C = null, this.Bo = 0, this.Bi = null, this.paused = this.Io = !1, this.Ty = null
    }
}), q.UO = q.ca.extend({
    Qg: null,
    dg: null,
    Uj: !1,
    um: function(t, i) {
        for (var n = 0; n < t.length; n++)
            if (i == t[n].target) return t[n];
        return null
    },
    ctor: function() {
        this.Qg = [], this.dg = null, this.Uj = !1
    },
    hV: function(t, i, n) {
        q.d(null != t, "no action"), q.d(null != i, "");
        var e = this.um(this.Qg, i);
        e || (e = new q.DP, e.paused = n, e.target = i, this.Qg.push(e)), this.GR(e), e.nd.push(t), t.I(i)
    },
    cea: function() {
        for (var t = this.Qg, i = 0; i < t.length; i++) {
            var n = t[i];
            n && this.qN(n.target, !0)
        }
    },
    qN: function(t, i) {
        if (null != t) {
            var n = this.um(this.Qg, t);
            n && (-1 === n.nd.indexOf(n.Bi) || n.Io || (n.Io = !0), n.nd = [], this.dg != n || i ? this.gC(n) : this.Uj = !0)
        }
    },
    oN: function(t) {
        if (null != t) {
            var i = this.um(this.Qg, t.ao);
            if (i) {
                for (var n = 0; n < i.nd.length; n++)
                    if (i.nd[n] == t) {
                        i.nd.splice(n, 1);
                        break
                    }
            } else q.log("cocos2d: removeAction: Target not found")
        }
    },
    zZ: function(t, i) {
        q.d(t != q.tp, ""), q.d(null != i, "");
        var n = this.um(this.Qg, i);
        if (n)
            for (var e = n.nd.length, h = 0; h < e; ++h) {
                var s = n.nd[h];
                if (s && s.D === t && s.ao == i) {
                    this.NT(h, n);
                    break
                }
            }
    },
    TE: function(t, i) {
        q.d(t != q.tp, "");
        var n = this.um(this.Qg, i);
        if (n) {
            if (null != n.nd)
                for (var e = 0; e < n.nd.length; ++e) {
                    var h = n.nd[e];
                    if (h && h.D === t) return h
                }
            q.log("cocos2d : getActionByTag(tag =" + t + "): Action not found")
        }
        return null
    },
    sY: function(t) {
        return (t = this.um(this.Qg, t)) && t.nd ? t.nd.length : 0
    },
    cv: function(t) {
        (t = this.um(this.Qg, t)) && (t.paused = !0)
    },
    hp: function(t) {
        (t = this.um(this.Qg, t)) && (t.paused = !1)
    },
    Bda: function() {
        for (var t = [], i = this.Qg, n = 0; n < i.length; n++) {
            var e = i[n];
            e && !e.paused && (e.paused = !0, t.push(e.target))
        }
        return t
    },
    TZ: function(t) {
        if (t)
            for (var i = 0; i < t.length; i++) t[i] && this.hp(t[i])
    },
    Tda: function() {
        q.n.getInstance().rg().hs(this)
    },
    NT: function(t, i) {
        i.nd[t] != i.Bi || i.Io || (i.Io = !0), q.ln(i.nd, t), i.Bo >= t && i.Bo--, 0 == i.nd.length && (this.dg == i ? this.Uj = !0 : this.gC(i))
    },
    gC: function(t) {
        q.Zf(this.Qg, t), t && (t.nd = null, t.target = null)
    },
    GR: function(t) {
        null == t.nd && (t.nd = [])
    },
    update: function(t) {
        for (var i, n = this.Qg, e = 0; e < n.length; e++) {
            if (!(i = this.dg = n[e]).paused)
                for (i.Bo = 0; i.Bo < i.nd.length; i.Bo++)
                    if (i.Bi = i.nd[i.Bo], i.Bi) {
                        if (i.Io = !1, i.Bi.step(t), i.Io) i.Bi = null;
                        else if (i.Bi.wj()) {
                            i.Bi.stop();
                            var h = i.Bi;
                            i.Bi = null, this.oN(h)
                        }
                        i.Bi = null
                    }
            this.Uj && 0 === i.nd.length && this.gC(i)
        }
    }
}), q.QA = q.F.extend({
    oe: 0,
    Jd: 0,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.Jd = this.oe = 0
    },
    j: function(t, i) {
        return !!q.F.prototype.j.call(this, t) && (this.oe = i, !0)
    },
    u: function() {
        var t = new q.QA;
        return t.j(this.o, this.oe), t
    },
    reverse: function() {
        return q.d(!1, "reverse() not supported in ProgressTo"), null
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), this.Jd = t.wr(), 100 == this.Jd && (this.Jd = 0)
    },
    update: function(t) {
        this.C instanceof q.pc && this.C.Ak(this.Jd + (this.oe - this.Jd) * t)
    }
}), q.QA.create = function(t, i) {
    var n = new q.QA;
    return n.j(t, i), n
}, q.zs = q.F.extend({
    oe: 0,
    Jd: 0,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.Jd = this.oe = 0
    },
    j: function(t, i, n) {
        return !!q.F.prototype.j.call(this, t) && (this.oe = n, this.Jd = i, !0)
    },
    u: function() {
        var t = new q.zs;
        return t.j(this.o, this.Jd, this.oe), t
    },
    reverse: function() {
        return q.zs.create(this.o, this.oe, this.Jd)
    },
    I: function(t) {
        q.F.prototype.I.call(this, t)
    },
    update: function(t) {
        this.C instanceof q.pc && this.C.Ak(this.Jd + (this.oe - this.Jd) * t)
    }
}), q.zs.create = function(t, i, n) {
    var e = new q.zs;
    return e.j(t, i, n), e
}, q.pA = q.F.extend({
    VB: 0,
    WB: 0,
    XB: 0,
    hJ: 0,
    iJ: 0,
    jJ: 0,
    pK: 0,
    qK: 0,
    rK: 0,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.rK = this.qK = this.pK = this.jJ = this.iJ = this.hJ = this.XB = this.WB = this.VB = 0
    },
    I: function(t) {
        q.F.prototype.I.call(this, t);
        var i = (t = t.Ro()).IL();
        this.VB = i.x, this.WB = i.y, this.XB = i.z, i = t.NL(), this.hJ = i.x, this.iJ = i.y, this.jJ = i.z, t = t.ZW(), this.pK = t.x, this.qK = t.y, this.rK = t.z
    },
    u: function() {
        return new q.pA
    },
    reverse: function() {
        return q.Ip.create(this)
    }
}), q.ag = q.pA.extend({
    Ie: 0,
    ix: 0,
    Up: 0,
    iC: 0,
    lh: 0,
    hC: 0,
    xD: 0,
    vD: 0,
    wD: 0,
    uD: 0,
    ctor: function() {
        q.pA.prototype.ctor.call(this), this.uD = this.wD = this.vD = this.xD = this.hC = this.lh = this.iC = this.Up = this.ix = this.Ie = 0
    },
    j: function(t, i, n, e, h, s, r) {
        return !!q.F.prototype.j.call(this, t) && (this.Ie = i, this.ix = n, this.Up = e, this.iC = h, this.lh = s, this.hC = r, this.vD = q.Bg(h), this.uD = q.Bg(r), !0)
    },
    k0: function() {
        var t = (n = this.C.Ro()).NL(),
            i = n.IL(),
            n = t.x - i.x,
            e = t.y - i.y,
            t = t.z - i.z,
            i = Math.sqrt(Math.pow(n, 2) + Math.pow(e, 2) + Math.pow(t, 2)),
            h = Math.sqrt(Math.pow(n, 2) + Math.pow(e, 2));
        return 0 === h && (h = q.aw), 0 === i && (i = q.aw), {
            qY: i / q.ms.Ku(),
            W0: Math.acos(t / i),
            azimuth: 0 > n ? Math.PI - Math.asin(e / h) : Math.asin(e / h)
        }
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), t = this.k0(), isNaN(this.Ie) && (this.Ie = t.qY), isNaN(this.Up) && (this.Up = q.Gp(t.W0)), isNaN(this.lh) && (this.lh = q.Gp(t.azimuth)), this.xD = q.Bg(this.Up), this.wD = q.Bg(this.lh)
    },
    u: function() {
        var t = new q.ag;
        return t.j(this.o, this.Ie, this.ix, this.Up, this.iC, this.lh, this.hC), t
    },
    update: function(t) {
        var i = (this.Ie + this.ix * t) * q.ms.Ku(),
            n = this.xD + this.vD * t,
            e = this.wD + this.uD * t;
        t = Math.sin(n) * Math.cos(e) * i + this.VB, e = Math.sin(n) * Math.sin(e) * i + this.WB, i = Math.cos(n) * i + this.XB, this.C.Ro().HN(t, e, i)
    }
}), q.ag.create = function(t, i, n, e, h, s, r) {
    var a = new q.ag;
    return a.j(t, i, n, e, h, s, r) ? a : null
}, q.Rd = q.F.extend({
    $: null,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.$ = null
    },
    ma: function(t) {
        return q.d(null != t, ""), !!this.j(t.Pf()) && (this.$ = t, !0)
    },
    u: function() {
        var t = new q.Rd;
        return t.ma(this.$.u()), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), this.$.I(this.C)
    },
    stop: function() {
        this.$.stop(), q.F.prototype.stop.call(this)
    },
    update: function(t) {
        this.$.update(t)
    },
    reverse: function() {
        return q.Rd.create(this.$.reverse())
    },
    WE: function() {
        return this.$
    }
}), q.Rd.create = function(t) {
    var i = new q.Rd;
    return i && i.ma(t), i
}, q.pn = q.Rd.extend({
    Ff: 0,
    ctor: function() {
        q.Rd.prototype.ctor.call(this), this.Ff = 0
    },
    jga: function(t) {
        this.Ff = t
    },
    b9: function() {
        return this.Ff
    },
    ma: function(t, i) {
        return !!q.Rd.prototype.ma.call(this, t) && (this.Ff = i, !0)
    },
    u: function() {
        var t = new q.pn;
        return t.ma(this.$.u(), this.Ff), t
    },
    reverse: function() {
        return q.pn.create(this.$.reverse(), 1 / this.Ff)
    }
}), q.pn.create = function(t, i) {
    var n = new q.pn;
    return n && n.ma(t, i), n
}, q.Wv = q.pn.extend({
    update: function(t) {
        this.$.update(Math.pow(t, this.Ff))
    },
    reverse: function() {
        return q.Wv.create(this.$.reverse(), 1 / this.Ff)
    },
    u: function() {
        var t = new q.Wv;
        return t.ma(this.$.u(), this.Ff), t
    }
}), q.Wv.create = function(t, i) {
    var n = new q.Wv;
    return n && n.ma(t, i), n
}, q.on = q.pn.extend({
    update: function(t) {
        this.$.update(Math.pow(t, 1 / this.Ff))
    },
    reverse: function() {
        return q.on.create(this.$.reverse(), 1 / this.Ff)
    },
    u: function() {
        var t = new q.on;
        return t.ma(this.$.u(), this.Ff), t
    }
}), q.on.create = function(t, i) {
    var n = new q.on;
    return n && n.ma(t, i), n
}, q.qs = q.pn.extend({
    update: function(t) {
        1 > (t *= 2) ? this.$.update(.5 * Math.pow(t, this.Ff)) : this.$.update(1 - .5 * Math.pow(2 - t, this.Ff))
    },
    u: function() {
        var t = new q.qs;
        return t.ma(this.$.u(), this.Ff), t
    },
    reverse: function() {
        return q.qs.create(this.$.reverse(), this.Ff)
    }
}), q.qs.create = function(t, i) {
    var n = new q.qs;
    return n && n.ma(t, i), n
}, q.Tv = q.Rd.extend({
    update: function(t) {
        this.$.update(0 === t ? 0 : Math.pow(2, 10 * (t - 1)))
    },
    reverse: function() {
        return q.Vv.create(this.$.reverse())
    },
    u: function() {
        var t = new q.Tv;
        return t.ma(this.$.u()), t
    }
}), q.Tv.create = function(t) {
    var i = new q.Tv;
    return i && i.ma(t), i
}, q.Vv = q.Rd.extend({
    update: function(t) {
        this.$.update(1 == t ? 1 : 1 - Math.pow(2, -10 * t))
    },
    reverse: function() {
        return q.Tv.create(this.$.reverse())
    },
    u: function() {
        var t = new q.Vv;
        return t.ma(this.$.u()), t
    }
}), q.Vv.create = function(t) {
    var i = new q.Vv;
    return i && i.ma(t), i
}, q.Uv = q.Rd.extend({
    update: function(t) {
        1 != t && 0 !== t && (t *= 2, t = 1 > t ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))), this.$.update(t)
    },
    reverse: function() {
        return q.Uv.create(this.$.reverse())
    },
    u: function() {
        var t = new q.Uv;
        return t.ma(this.$.u()), t
    }
}), q.Uv.create = function(t) {
    var i = new q.Uv;
    return i && i.ma(t), i
}, q.Xv = q.Rd.extend({
    update: function(t) {
        t = 0 === t || 1 == t ? t : -1 * Math.cos(t * Math.PI / 2) + 1, this.$.update(t)
    },
    reverse: function() {
        return q.Zv.create(this.$.reverse())
    },
    u: function() {
        var t = new q.Xv;
        return t.ma(this.$.u()), t
    }
}), q.Xv.create = function(t) {
    var i = new q.Xv;
    return i && i.ma(t), i
}, q.Zv = q.Rd.extend({
    update: function(t) {
        t = 0 === t || 1 == t ? t : Math.sin(t * Math.PI / 2), this.$.update(t)
    },
    reverse: function() {
        return q.Xv.create(this.$.reverse())
    },
    u: function() {
        var t = new q.Zv;
        return t.ma(this.$.u()), t
    }
}), q.Zv.create = function(t) {
    var i = new q.Zv;
    return i && i.ma(t), i
}, q.Yv = q.Rd.extend({
    update: function(t) {
        t = 0 === t || 1 == t ? t : -.5 * (Math.cos(Math.PI * t) - 1), this.$.update(t)
    },
    u: function() {
        var t = new q.Yv;
        return t.ma(this.$.u()), t
    },
    reverse: function() {
        return q.Yv.create(this.$.reverse())
    }
}), q.Yv.create = function(t) {
    var i = new q.Yv;
    return i && i.ma(t), i
}, q.yp = q.Rd.extend({
    gf: null,
    ctor: function() {
        q.Rd.prototype.ctor.call(this), this.gf = .3
    },
    M8: function() {
        return this.gf
    },
    ega: function(t) {
        this.gf = t
    },
    ma: function(t, i) {
        return q.Rd.prototype.ma.call(this, t), this.gf = null == i ? .3 : i, !0
    },
    reverse: function() {
        return q.d(0, "Override me"), null
    },
    u: function() {
        var t = new q.yp;
        return t.ma(this.$.u(), this.gf), t
    }
}), q.yp.create = function(t, i) {
    var n = new q.yp;
    return n && n.ma(t, i) ? n : null
}, q.Qv = q.yp.extend({
    update: function(t) {
        var i = 0;
        0 === t || 1 === t ? i = t : (i = this.gf / 4, t -= 1, i = -Math.pow(2, 10 * t) * Math.sin((t - i) * Math.PI * 2 / this.gf)), this.$.update(i)
    },
    reverse: function() {
        return q.Sv.create(this.$.reverse(), this.gf)
    },
    u: function() {
        var t = new q.Qv;
        return t.ma(this.$.u(), this.gf), t
    }
}), q.Qv.create = function(t, i) {
    var n = new q.Qv;
    return n && n.ma(t, i) ? n : null
}, q.Sv = q.yp.extend({
    update: function(t) {
        var i = 0,
            i = 0 === t || 1 == t ? t : Math.pow(2, -10 * t) * Math.sin((t - this.gf / 4) * Math.PI * 2 / this.gf) + 1;
        this.$.update(i)
    },
    reverse: function() {
        return q.Qv.create(this.$.reverse(), this.gf)
    },
    u: function() {
        var t = new q.Sv;
        return t.ma(this.$.u(), this.gf), t
    }
}), q.Sv.create = function(t, i) {
    var n = new q.Sv;
    return n && n.ma(t, i), n
}, q.Rv = q.yp.extend({
    update: function(t) {
        var i = 0,
            i = this.gf;
        if (0 === t || 1 == t) i = t;
        else {
            i || (i = this.gf = .3 * 1.5);
            var n = i / 4;
            i = 0 > (t = 2 * t - 1) ? -.5 * Math.pow(2, 10 * t) * Math.sin((t - n) * Math.PI * 2 / i) : Math.pow(2, -10 * t) * Math.sin((t - n) * Math.PI * 2 / i) * .5 + 1
        }
        this.$.update(i)
    },
    reverse: function() {
        return q.Rv.create(this.$.reverse(), this.gf)
    },
    u: function() {
        var t = new q.Rv;
        return t.ma(this.$.u(), this.gf), t
    }
}), q.Rv.create = function(t, i) {
    var n = new q.Rv;
    return n && n.ma(t, i), n
}, q.Xl = q.Rd.extend({
    yy: function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    },
    u: function() {
        var t = new q.Xl;
        return t.ma(this.$.u()), t
    },
    reverse: function() {
        return q.Xl.create(this.$.reverse())
    }
}), q.Xl.create = function(t) {
    var i = new q.Xl;
    return i && i.ma(t), i
}, q.Nv = q.Xl.extend({
    update: function(t) {
        this.$.update(1 - this.yy(1 - t))
    },
    reverse: function() {
        return q.Pv.create(this.$.reverse())
    },
    u: function() {
        var t = new q.Nv;
        return t.ma(this.$.u()), t
    }
}), q.Nv.create = function(t) {
    var i = new q.Nv;
    return i && i.ma(t), i
}, q.Pv = q.Xl.extend({
    update: function(t) {
        this.$.update(this.yy(t))
    },
    reverse: function() {
        return q.Nv.create(this.$.reverse())
    },
    u: function() {
        var t = new q.Pv;
        return t.ma(this.$.u()), t
    }
}), q.Pv.create = function(t) {
    var i = new q.Pv;
    return i && i.ma(t), i
}, q.Ov = q.Xl.extend({
    update: function(t) {
        var i = 0,
            i = .5 > t ? .5 * (1 - this.yy(1 - 2 * t)) : .5 * this.yy(2 * t - 1) + .5;
        this.$.update(i)
    },
    u: function() {
        var t = new q.Ov;
        return t.ma(this.$.u()), t
    },
    reverse: function() {
        return q.Ov.create(this.$.reverse())
    }
}), q.Ov.create = function(t) {
    var i = new q.Ov;
    return i && i.ma(t), i
}, q.Kv = q.Rd.extend({
    update: function(t) {
        this.$.update(0 === t || 1 == t ? t : t * t * (2.70158 * t - 1.70158))
    },
    reverse: function() {
        return q.Mv.create(this.$.reverse())
    },
    u: function() {
        var t = new q.Kv;
        return t.ma(this.$.u()), t
    }
}), q.Kv.create = function(t) {
    var i = new q.Kv;
    return i && i.ma(t), i
}, q.Mv = q.Rd.extend({
    update: function(t) {
        t -= 1, this.$.update(t * t * (2.70158 * t + 1.70158) + 1)
    },
    reverse: function() {
        return q.Kv.create(this.$.reverse())
    },
    u: function() {
        var t = new q.Mv;
        return t.ma(this.$.u()), t
    }
}), q.Mv.create = function(t) {
    var i = new q.Mv;
    return i && i.ma(t), i
}, q.Lv = q.Rd.extend({
    update: function(t) {
        1 > (t *= 2) ? this.$.update(t * t * (3.5949095 * t - 2.5949095) / 2) : (t -= 2, this.$.update(t * t * (3.5949095 * t + 2.5949095) / 2 + 1))
    },
    u: function() {
        var t = new q.Lv;
        return t.ma(this.$.u()), t
    },
    reverse: function() {
        return q.Lv.create(this.$.reverse())
    }
}), q.Lv.create = function(t) {
    var i = new q.Lv;
    return i && i.ma(t), i
}, q.Ud = q.F.extend({
    ka: null,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.ka = q.size(0, 0)
    },
    u: function() {
        var t = new q.Ud,
            i = this.ka;
        return t.j(this.o, q.size(i.width, i.height)), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t);
        var i = this.Pd(),
            n = this.C;
        (t = n.Pd()) && 0 < t.ek ? (i = t.ka, t.Gi() && i.width == this.ka.width && i.height == this.ka.height ? t.YF() : q.d(0, "")) : (t && t.Gi() && t.setActive(!1), n.z_(i), n.Pd().setActive(!0))
    },
    reverse: function() {
        return q.Ip.create(this)
    },
    j: function(t, i) {
        return !!q.F.prototype.j.call(this, t) && (this.ka.width = i.width, this.ka.height = i.height, !0)
    },
    Pd: function() {
        return q.d(0, ""), null
    }
}), q.Ud.create = function(t, i) {
    var n = new q.Ud;
    return n.j(t, i), n
}, q.Td = q.Ud.extend({
    Pd: function() {
        return q.CA.create(this.ka)
    },
    DO: function(t) {
        return this.C.Pd().DO(t)
    },
    Dd: function(t) {
        return this.C.Pd().Dd(t)
    },
    Ue: function(t, i) {
        this.C.Pd().Ue(t, i)
    }
}), q.Td.create = function(t, i) {
    var n = new q.Td;
    return n.j(t, i), n
}, q.gd = q.Ud.extend({
    rO: function(t) {
        return this.C.Pd().rO(t)
    },
    ai: function(t) {
        return this.C.Pd().ai(t)
    },
    vg: function(t, i) {
        this.C.Pd().vg(t, i)
    },
    Pd: function() {
        return q.pB.create(this.ka)
    }
}), q.gd.create = function(t, i) {
    var n = new q.gd;
    return n.j(t, i), n
}, q.tn = q.Ag.extend({
    I: function(t) {
        q.Ag.prototype.I.call(this, t), (t = this.C.Pd()) && t.Gi() && t.setActive(!1)
    }
}), q.tn.create = function() {
    return new q.tn
}, q.BH = q.Ag.extend({
    lf: null,
    W$: function(t) {
        return this.lf = t, !0
    },
    I: function(t) {
        q.Ag.prototype.I.call(this, t), this.C.Pd() && this.C.Pd().Gi() && this.C.Pd().Q_(this.C.Pd().ek + this.lf)
    }
}), q.BH.create = function() {
    return new q.BH
}, q.DQ = 16777215, q.nc = function() {
    return Math.random() * q.DQ
}, q.GI = q.Td.extend({
    qe: null,
    ab: null,
    bb: null,
    ctor: function() {
        q.Ud.prototype.ctor.call(this), this.bb = this.ab = this.qe = 0
    },
    tr: function() {
        return this.ab
    },
    Zr: function(t) {
        this.ab = t
    },
    Po: function() {
        return this.bb
    },
    kp: function(t) {
        this.bb = t
    },
    j: function(t, i, n, e) {
        return !!q.Td.prototype.j.call(this, t, i) && (this.qe = n, this.ab = e, this.bb = 1, !0)
    },
    update: function(t) {
        for (var i = this.ka, n = this.ab, e = q.a(0, 0), h = this.bb, s = this.qe, r = 0; r < i.width + 1; ++r)
            for (var a = 0; a < i.height + 1; ++a) {
                e.x = r, e.y = a;
                var o = this.Dd(e);
                o.z += Math.sin(Math.PI * t * s * 2 + .01 * (o.y + o.x)) * n * h, this.Ue(e, o)
            }
    }
}), q.GI.create = function(t, i, n, e) {
    var h = new q.GI;
    return h.j(t, i, n, e), h
}, q.AA = q.Td.extend({
    j: function(t) {
        return q.Td.prototype.j.call(this, t, q.size(1, 1))
    },
    az: function(t, i) {
        return 1 != t.width || 1 != t.height ? (q.d(0, ""), !1) : q.Td.prototype.j.call(this, i, t)
    },
    update: function(t) {
        n = Math.PI * t;
        t = Math.sin(n);
        var i = Math.cos(n / 2),
            n = new q.Pb;
        (r = q.a(0, 0)).x = r.y = 1;
        var e = this.Dd(r);
        r.x = r.y = 0;
        var h, s, r = this.Dd(r),
            a = e.x,
            o = r.x;
        a > o ? (e = q.a(0, 0), r = q.a(0, 1), h = q.a(1, 0), s = q.a(1, 1)) : (h = q.a(0, 0), s = q.a(0, 1), e = q.a(1, 0), r = q.a(1, 1), a = o), n.x = a - a * i, n.z = Math.abs(parseFloat(a * t / 4)), (t = this.Dd(e)).x = n.x, t.z += n.z, this.Ue(e, t), (t = this.Dd(r)).x = n.x, t.z += n.z, this.Ue(r, t), (t = this.Dd(h)).x -= n.x, t.z -= n.z, this.Ue(h, t), (t = this.Dd(s)).x -= n.x, t.z -= n.z, this.Ue(s, t)
    }
}), q.AA.create = function(t) {
    var i = new q.AA;
    return i.j(t), i
}, q.OG = q.AA.extend({
    update: function(t) {
        n = Math.PI * t;
        t = Math.sin(n);
        var i = Math.cos(n / 2),
            n = new q.Pb;
        (r = q.a(0, 0)).x = r.y = 1;
        var e = this.Dd(r);
        r.x = r.y = 0;
        var h, s, r = this.Dd(r),
            a = e.y,
            o = r.y;
        a > o ? (e = q.a(0, 0), r = q.a(0, 1), h = q.a(1, 0), s = q.a(1, 1)) : (r = q.a(0, 0), e = q.a(0, 1), s = q.a(1, 0), h = q.a(1, 1), a = o), n.y = a - a * i, n.z = Math.abs(parseFloat(a * t) / 4), (t = this.Dd(e)).y = n.y, t.z += n.z, this.Ue(e, t), (t = this.Dd(r)).y -= n.y, t.z -= n.z, this.Ue(r, t), (t = this.Dd(h)).y = n.y, t.z += n.z, this.Ue(h, t), (t = this.Dd(s)).y -= n.y, t.z -= n.z, this.Ue(s, t)
    }
}), q.OG.create = function(t) {
    var i = new q.OG;
    return i.j(t), i
}, q.YG = q.Td.extend({
    ea: null,
    Ie: 0,
    Et: 0,
    aJ: !1,
    ga: !1,
    ctor: function() {
        q.Ud.prototype.ctor.call(this), this.ea = q.a(0, 0), this.Et = this.Ie = 0, this.ga = this.aJ = !1
    },
    g8: function() {
        return this.Et
    },
    Mfa: function(t) {
        this.Et = t
    },
    Zea: function(t) {
        this.aJ = t
    },
    Na: function() {
        return this.ea
    },
    i: function(t) {
        q.Sr(t, this.ea) || (this.ea.x = t.x, this.ea.y = t.y, this.ga = !0)
    },
    j: function(t, i, n, e) {
        return !!q.Td.prototype.j.call(this, t, i) && (this.ea.x = -1, this.ea.y = -1, this.i(n), this.Ie = e, this.Et = .7, this.ga = !0)
    },
    update: function() {
        if (this.ga) {
            for (var t, i, n, e = this.ka.width, h = this.ka.height, s = this.Ie, r = this.Et, a = q.a(0, 0), o = q.a(0, 0), c = 0; c < e + 1; ++c)
                for (var u = 0; u < h + 1; ++u) a.x = c, a.y = u, t = this.Dd(a), o.x = this.ea.x - t.x, o.y = this.ea.y - t.y, (i = q.Sm(o)) < s && (i = s - i, 0 == (i /= s) && (i = .001), i = Math.log(i) * r, n = Math.exp(i) * s, 0 < (i = q.Sm(o)) && (o.x /= i, o.y /= i, o.x *= n, o.y *= n, t.z += q.Sm(o) * r)), this.Ue(a, t);
            this.ga = !1
        }
    }
}), q.YG.create = function(t, i, n, e) {
    var h = new q.YG;
    return h.j(t, i, n, e), h
}, q.CH = q.Td.extend({
    ea: null,
    Ie: null,
    qe: null,
    ab: null,
    bb: null,
    ctor: function() {
        q.Ud.prototype.ctor.call(this), this.ea = q.a(0, 0), this.bb = this.ab = this.qe = this.Ie = 0
    },
    Na: function() {
        return this.ea
    },
    i: function(t) {
        this.ea.x = t.x, this.ea.y = t.y
    },
    tr: function() {
        return this.ab
    },
    Zr: function(t) {
        this.ab = t
    },
    Po: function() {
        return this.bb
    },
    kp: function(t) {
        this.bb = t
    },
    j: function(t, i, n, e, h, s) {
        return !!q.Td.prototype.j.call(this, t, i) && (this.i(n), this.Ie = e, this.qe = h, this.ab = s, this.bb = 1, !0)
    },
    update: function(t) {
        for (var i, n, e = this.ka.width, h = this.ka.height, s = q.a(0, 0), r = this.Ie, a = this.qe, o = this.ab, c = this.bb, u = q.a(0, 0), l = 0; l < e + 1; ++l)
            for (var f = 0; f < h + 1; ++f) s.x = l, s.y = f, i = this.Dd(s), u.x = this.ea.x - i.x, u.y = this.ea.y - i.y, (n = q.Sm(u)) < r && (n = r - n, i.z += Math.sin(t * Math.PI * a * 2 + .1 * n) * o * c * Math.pow(n / r, 2)), this.Ue(s, i)
    }
}), q.CH.create = function(t, i, n, e, h, s) {
    var r = new q.CH;
    return r.j(t, i, n, e, h, s), r
}, q.HH = q.Td.extend({
    hj: null,
    xm: null,
    ctor: function() {
        q.Ud.prototype.ctor.call(this), this.hj = 0, this.xm = !1
    },
    j: function(t, i, n, e) {
        return !!q.Td.prototype.j.call(this, t, i) && (this.hj = n, this.xm = e, !0)
    },
    update: function() {
        for (var t, i = this.ka.width, n = this.ka.height, e = this.hj, h = this.xm, s = q.a(0, 0), r = 0; r < i + 1; ++r)
            for (var a = 0; a < n + 1; ++a) s.x = r, s.y = a, t = this.Dd(s), t.x += q.nc() % (2 * e) - e, t.y += q.nc() % (2 * e) - e, h && (t.z += q.nc() % (2 * e) - e), this.Ue(s, t)
    }
}), q.HH.create = function(t, i, n, e) {
    var h = new q.HH;
    return h.j(t, i, n, e), h
}, q.ZG = q.Td.extend({
    qe: null,
    ab: null,
    bb: null,
    ctor: function() {
        q.Ud.prototype.ctor.call(this), this.bb = this.ab = this.qe = 0
    },
    tr: function() {
        return this.ab
    },
    Zr: function(t) {
        this.ab = t
    },
    Po: function() {
        return this.bb
    },
    kp: function(t) {
        this.bb = t
    },
    j: function(t, i, n, e) {
        return !!q.Td.prototype.j.call(this, t, i) && (this.qe = n, this.ab = e, this.bb = 1, !0)
    },
    update: function(t) {
        for (var i, n = this.ka.width, e = this.ka.height, h = q.a(0, 0), s = this.qe, r = this.ab, a = this.bb, o = 1; o < n; ++o)
            for (var c = 1; c < e; ++c) h.x = o, h.y = c, i = this.Dd(h), i.x += Math.sin(t * Math.PI * s * 2 + .01 * i.x) * r * a, i.y += Math.sin(t * Math.PI * s * 2 + .01 * i.y) * r * a, this.Ue(h, i)
    }
}), q.ZG.create = function(t, i, n, e) {
    var h = new q.ZG;
    return h.j(t, i, n, e), h
}, q.FI = q.Td.extend({
    qe: null,
    ab: null,
    bb: null,
    gE: null,
    GC: null,
    ctor: function() {
        q.Ud.prototype.ctor.call(this), this.bb = this.ab = this.qe = 0, this.GC = this.gE = !1
    },
    tr: function() {
        return this.ab
    },
    Zr: function(t) {
        this.ab = t
    },
    Po: function() {
        return this.bb
    },
    kp: function(t) {
        this.bb = t
    },
    j: function(t, i, n, e, h, s) {
        return !!q.Td.prototype.j.call(this, t, i) && (this.qe = n, this.ab = e, this.bb = 1, this.GC = h, this.gE = s, !0)
    },
    update: function(t) {
        for (var i, n = this.ka.width, e = this.ka.height, h = q.a(0, 0), s = this.gE, r = this.GC, a = this.qe, o = this.ab, c = this.bb, u = 0; u < n + 1; ++u)
            for (var l = 0; l < e + 1; ++l) h.x = u, h.y = l, i = this.Dd(h), s && (i.x += Math.sin(t * Math.PI * a * 2 + .01 * i.y) * o * c), r && (i.y += Math.sin(t * Math.PI * a * 2 + .01 * i.x) * o * c), this.Ue(h, i)
    }
}), q.FI.create = function(t, i, n, e, h, s) {
    var r = new q.FI;
    return r.j(t, i, n, e, h, s), r
}, q.AI = q.Td.extend({
    ea: null,
    TD: null,
    ab: null,
    bb: null,
    ctor: function() {
        q.Ud.prototype.ctor.call(this), this.ea = q.a(0, 0), this.bb = this.ab = this.TD = 0
    },
    Na: function() {
        return this.ea
    },
    i: function(t) {
        this.ea.x = t.x, this.ea.y = t.y
    },
    tr: function() {
        return this.ab
    },
    Zr: function(t) {
        this.ab = t
    },
    Po: function() {
        return this.bb
    },
    kp: function(t) {
        this.bb = t
    },
    j: function(t, i, n, e, h) {
        return !!q.Td.prototype.j.call(this, t, i) && (this.i(n), this.TD = e, this.ab = h, this.bb = 1, !0)
    },
    update: function(t) {
        for (var i, n, e, h = this.ea, s = this.ka.width, r = this.ka.height, a = q.a(0, 0), o = .1 * this.ab * this.bb, c = this.TD, u = q.a(0, 0), l = 0; l < s + 1; ++l)
            for (var f = 0; f < r + 1; ++f) a.x = l, a.y = f, i = this.Dd(a), u.x = l - s / 2, u.y = f - r / 2, n = q.Sm(u) * Math.cos(Math.PI / 2 + t * Math.PI * c * 2) * o, e = Math.sin(n) * (i.y - h.y) + Math.cos(n) * (i.x - h.x), n = Math.cos(n) * (i.y - h.y) - Math.sin(n) * (i.x - h.x), i.x = h.x + e, i.y = h.y + n, this.Ue(a, i)
    }
}), q.AI.create = function(t, i, n, e, h) {
    var s = new q.AI;
    return s.j(t, i, n, e, h), s
}, q.jw = q.Td.extend({
    update: function(t) {
        var i = -100 - (i = Math.max(0, t - .25)) * i * 500,
            n = +Math.PI / 2 + -Math.PI / 2 * Math.sqrt(t);
        t = Math.sin(n);
        for (var n = Math.cos(n), e = this.ka, h = q.a(0, 0), s = 0; s <= e.width; ++s)
            for (var r = 0; r <= e.height; ++r) {
                h.x = s, h.y = r;
                var a = this.Dd(h),
                    o = Math.sqrt(a.x * a.x + (a.y - i) * (a.y - i)),
                    c = o * t,
                    u = Math.asin(a.x / o) / t,
                    l = Math.cos(u);
                a.x = u <= Math.PI ? c * Math.sin(u) : 0, a.y = o + i - c * (1 - l) * t, a.z = c * (1 - l) * n / 7, .5 > a.z && (a.z = .5), this.Ue(h, a)
            }
    }
}), q.jw.create = function(t, i) {
    var n = new q.jw;
    return n.j(t, i), n
}, q.IH = q.gd.extend({
    hj: 0,
    xm: !1,
    ctor: function() {
        q.Ud.prototype.ctor.call(this), this.hj = 0, this.xm = !1
    },
    j: function(t, i, n, e) {
        return !!q.gd.prototype.j.call(this, t, i) && (this.hj = n, this.xm = e, !0)
    },
    update: function() {
        for (var t = this.ka, i = this.hj, n = q.a(0, 0), e = 0; e < t.width; ++e)
            for (var h = 0; h < t.height; ++h) {
                n.x = e, n.y = h;
                var s = this.ai(n);
                s.K.x += q.nc() % (2 * i) - i, s.S.x += q.nc() % (2 * i) - i, s.R.x += q.nc() % (2 * i) - i, s.N.x += q.nc() % (2 * i) - i, s.K.y += q.nc() % (2 * i) - i, s.S.y += q.nc() % (2 * i) - i, s.R.y += q.nc() % (2 * i) - i, s.N.y += q.nc() % (2 * i) - i, this.xm && (s.K.z += q.nc() % (2 * i) - i, s.S.z += q.nc() % (2 * i) - i, s.R.z += q.nc() % (2 * i) - i, s.N.z += q.nc() % (2 * i) - i), this.vg(n, s)
            }
    }
}), q.IH.create = function(t, i, n, e) {
    var h = new q.IH;
    return h.j(t, i, n, e), h
}, q.JH = q.gd.extend({
    hj: 0,
    Jx: !1,
    eK: !1,
    ctor: function() {
        q.Ud.prototype.ctor.call(this), this.hj = 0, this.Jx = this.xm = !1
    },
    j: function(t, i, n, e) {
        return !!q.gd.prototype.j.call(this, t, i) && (this.Jx = !1, this.hj = n, this.eK = e, !0)
    },
    update: function() {
        if (!1 === this.Jx) {
            for (var t, i = this.ka, n = this.hj, e = q.a(0, 0), h = 0; h < i.width; ++h)
                for (var s = 0; s < i.height; ++s) e.x = h, e.y = s, t = this.ai(e), t.K.x += q.nc() % (2 * n) - n, t.S.x += q.nc() % (2 * n) - n, t.R.x += q.nc() % (2 * n) - n, t.N.x += q.nc() % (2 * n) - n, t.K.y += q.nc() % (2 * n) - n, t.S.y += q.nc() % (2 * n) - n, t.R.y += q.nc() % (2 * n) - n, t.N.y += q.nc() % (2 * n) - n, this.eK && (t.K.z += q.nc() % (2 * n) - n, t.S.z += q.nc() % (2 * n) - n, t.R.z += q.nc() % (2 * n) - n, t.N.z += q.nc() % (2 * n) - n), this.vg(e, t);
            this.Jx = !0
        }
    }
}), q.JH.create = function(t, i, n, e) {
    var h = new q.JH;
    return h.j(t, i, n, e), h
}, q.KH = q.gd.extend({
    Ot: 0,
    oj: 0,
    Lh: null,
    Ib: null,
    ctor: function() {
        q.Ud.prototype.ctor.call(this), this.Lh = [], this.Ib = [], this.oj = this.Ot = 0
    },
    j: function(t, i, n) {
        return !!q.gd.prototype.j.call(this, t, i) && (this.Ot = n, this.Ib = this.Lh = null, !0)
    },
    oG: function(t, i) {
        for (var n = i - 1; 0 <= n; n--) {
            var e = 0 | q.nc() % (n + 1),
                h = t[n];
            t[n] = t[e], t[e] = h
        }
    },
    KL: function(t) {
        var i = this.ka,
            n = t.width * i.height + t.height;
        return q.size(this.Lh[n] / i.height - t.width, this.Lh[n] % i.height - t.height)
    },
    cZ: function(t, i) {
        var n = this.ai(t),
            e = this.C.Pd().Hh,
            h = i.position;
        n.K.x += h.x * e.x, n.K.y += h.y * e.y, n.S.x += h.x * e.x, n.S.y += h.y * e.y, n.R.x += h.x * e.x, n.R.y += h.y * e.y, n.N.x += h.x * e.x, n.N.y += h.y * e.y, this.vg(t, n)
    },
    I: function(t) {
        q.gd.prototype.I.call(this, t), t = this.ka, this.oj = t.width * t.height, this.Lh = [];
        for (i = 0; i < this.oj; ++i) this.Lh[i] = i;
        this.oG(this.Lh, this.oj);
        for (var i = [], n = 0, e = 0; e < t.width; ++e)
            for (var h = 0; h < t.height; ++h) i[n] = new qa, i[n].position = q.a(e, h), i[n].n0 = q.a(e, h), i[n].kr = this.KL(q.size(e, h)), ++n;
        this.Ib = i
    },
    update: function(t) {
        for (var i, n = 0, e = this.ka, h = this.Ib, s = q.a(0, 0), r = 0; r < e.width; ++r)
            for (var a = 0; a < e.height; ++a) s.x = r, s.y = a, i = h[n], i.position.x = i.kr.width * t, i.position.y = i.kr.height * t, this.cZ(s, i), ++n
    }
}), q.KH.create = function(t, i, n) {
    var e = new q.KH;
    return e.j(t, i, n), e
}, q.rs = q.gd.extend({
    eA: function(t, i) {
        var n = this.ka.width * i,
            e = this.ka.height * i;
        return 0 == n + e ? 1 : Math.pow((t.width + t.height) / (n + e), 6)
    },
    yG: function(t) {
        this.vg(t, this.ai(t))
    },
    xG: function(t) {
        this.vg(t, new q.mw)
    },
    uO: function(t, i) {
        var n = this.ai(t),
            e = this.C.Pd().Hh;
        n.K.x += e.x / 2 * (1 - i), n.K.y += e.y / 2 * (1 - i), n.S.x -= e.x / 2 * (1 - i), n.S.y += e.y / 2 * (1 - i), n.R.x += e.x / 2 * (1 - i), n.R.y -= e.y / 2 * (1 - i), n.N.x -= e.x / 2 * (1 - i), n.N.y -= e.y / 2 * (1 - i), this.vg(t, n)
    },
    update: function(t) {
        for (var i, n = this.ka, e = q.a(0, 0), h = q.size(0, 0), s = 0; s < n.width; ++s)
            for (var r = 0; r < n.height; ++r) e.x = s, e.y = r, h.width = s, h.height = r, 0 == (i = this.eA(h, t)) ? this.xG(e) : 1 > i ? this.uO(e, i) : this.yG(e)
    }
}), q.rs.create = function(t, i) {
    var n = new q.rs;
    return n.j(t, i), n
}, q.yA = q.rs.extend({
    eA: function(t, i) {
        return 0 == t.width + t.height ? 1 : Math.pow((this.ka.width * (1 - i) + this.ka.height * (1 - i)) / (t.width + t.height), 6)
    }
}), q.yA.create = function(t, i) {
    var n = new q.yA;
    return n.j(t, i), n
}, q.cw = q.rs.extend({
    eA: function(t, i) {
        var n = this.ka.height * i;
        return 0 == n ? 1 : Math.pow(t.height / n, 6)
    },
    uO: function(t, i) {
        var n = this.ai(t),
            e = this.C.Pd().Hh;
        n.K.y += e.y / 2 * (1 - i), n.S.y += e.y / 2 * (1 - i), n.R.y -= e.y / 2 * (1 - i), n.N.y -= e.y / 2 * (1 - i), this.vg(t, n)
    }
}), q.cw.create = function(t, i) {
    var n = new q.cw;
    return n.j(t, i), n
}, q.zA = q.cw.extend({
    eA: function(t, i) {
        return 0 == t.height ? 1 : Math.pow(this.ka.height * (1 - i) / t.height, 6)
    }
}), q.zA.create = function(t, i) {
    var n = new q.zA;
    return n.j(t, i), n
}, q.sB = q.gd.extend({
    Ot: null,
    oj: 0,
    Lh: null,
    ctor: function() {
        q.Ud.prototype.ctor.call(this), this.Lh = [], this.Ot = null, this.oj = 0
    },
    j: function(t, i, n) {
        return !!q.gd.prototype.j.call(this, t, i) && (this.Ot = n, this.Lh = null, !0)
    },
    oG: function(t, i) {
        for (var n = i - 1; 0 <= n; n--) {
            var e = 0 | q.nc() % (n + 1),
                h = t[n];
            t[n] = t[e], t[e] = h
        }
    },
    yG: function(t) {
        this.vg(t, this.ai(t))
    },
    xG: function(t) {
        this.vg(t, new q.mw)
    },
    I: function(t) {
        q.gd.prototype.I.call(this, t), this.oj = this.ka.width * this.ka.height, t = [];
        for (var i = 0; i < this.oj; ++i) t[i] = i;
        this.Lh = t, this.oG(this.Lh, this.oj)
    },
    update: function(t) {
        t = 0 | t * this.oj;
        for (var i, n = this.ka, e = q.a(0, 0), h = 0; h < this.oj; h++) i = this.Lh[h], e.x = 0 | i / n.height, e.y = i % (0 | n.height), h < t ? this.xG(e) : this.yG(e)
    }
}), q.sB.create = function(t, i, n) {
    n = n || 0;
    var e = new q.sB;
    return e.j(t, i, n), e
}, q.HI = q.gd.extend({
    qe: 0,
    ab: 0,
    bb: 0,
    ctor: function() {
        q.Ud.prototype.ctor.call(this), this.bb = this.ab = this.qe = 0
    },
    tr: function() {
        return this.ab
    },
    Zr: function(t) {
        this.ab = t
    },
    Po: function() {
        return this.bb
    },
    kp: function(t) {
        this.bb = t
    },
    j: function(t, i, n, e) {
        return !!q.gd.prototype.j.call(this, t, i) && (this.qe = n, this.ab = e, this.bb = 1, !0)
    },
    update: function(t) {
        for (var i, n = this.ka, e = this.qe, h = this.ab, s = this.bb, r = q.a(0, 0), a = 0; a < n.width; a++)
            for (var o = 0; o < n.height; o++) r.x = a, r.y = o, i = this.ai(r), i.K.z = Math.sin(t * Math.PI * e * 2 + .01 * (i.K.y + i.K.x)) * h * s, i.S.z = i.K.z, i.R.z = i.K.z, i.N.z = i.K.z, this.vg(r, i)
    }
}), q.HI.create = function(t, i, n, e) {
    var h = new q.HI;
    return h.j(t, i, n, e), h
}, q.TG = q.gd.extend({
    aj: 0,
    ab: 0,
    bb: 0,
    ctor: function() {
        q.Ud.prototype.ctor.call(this), this.bb = this.ab = this.aj = 0
    },
    tr: function() {
        return this.ab
    },
    Zr: function(t) {
        this.ab = t
    },
    Po: function() {
        return this.bb
    },
    kp: function(t) {
        this.bb = t
    },
    j: function(t, i, n, e) {
        return !!q.gd.prototype.j.call(this, t, i) && (this.aj = n, this.ab = e, this.bb = 1, !0)
    },
    update: function(t) {
        var i = Math.sin(Math.PI * t * this.aj * 2) * this.ab * this.bb;
        t = Math.sin(Math.PI * (t * this.aj * 2 + 1)) * this.ab * this.bb;
        for (var n, e = this.ka, h = this.C.Pd(), s = q.a(0, 0), r = 0; r < e.width; r++)
            for (var a = 0; a < e.height; a++) s.x = r, s.y = a, n = h.ai(s), 0 == (r + a) % 2 ? (n.K.z += i, n.S.z += i, n.R.z += i, n.N.z += i) : (n.K.z += t, n.S.z += t, n.R.z += t, n.N.z += t), h.vg(s, n)
    }
}), q.TG.create = function(t, i, n, e) {
    var h = new q.TG;
    return h.j(t, i, n, e), h
}, q.fB = q.gd.extend({
    VJ: 0,
    sc: null,
    ctor: function() {
        q.Ud.prototype.ctor.call(this), this.VJ = 0, this.sc = null
    },
    j: function(t, i) {
        return this.VJ = i, q.gd.prototype.j.call(this, t, q.size(1, i))
    },
    update: function(t) {
        for (var i, n, e = this.ka, h = this.sc.width, s = q.a(0, 0), r = 0; r < e.height; ++r) s.y = r, i = this.ai(s), n = 1, 0 == r % 2 && (n = -1), i.K.x += n * h * t, i.S.x += n * h * t, i.R.x += n * h * t, i.N.x += n * h * t, this.vg(s, i)
    },
    I: function(t) {
        q.gd.prototype.I.call(this, t), this.sc = q.n.getInstance().Ju()
    }
}), q.fB.create = function(t, i) {
    var n = new q.fB;
    return n.j(t, i), n
}, q.eB = q.gd.extend({
    YI: 0,
    sc: null,
    ctor: function() {
        q.Ud.prototype.ctor.call(this), this.YI = 0, this.sc = null
    },
    j: function(t, i) {
        return this.YI = i, q.gd.prototype.j.call(this, t, q.size(i, 1))
    },
    update: function(t) {
        for (var i, n, e = this.ka.width, h = this.sc.height, s = q.a(0, 0), r = 0; r < e; ++r) s.x = r, i = this.ai(s), n = 1, 0 == r % 2 && (n = -1), i.K.y += n * h * t, i.S.y += n * h * t, i.R.y += n * h * t, i.N.y += n * h * t, this.vg(s, i)
    },
    I: function(t) {
        q.gd.prototype.I.call(this, t), this.sc = q.n.getInstance().Ju()
    }
}), q.eB.create = function(t, i) {
    var n = new q.eB;
    return n.j(t, i), n
}, q.$0 = q.ca.extend({
    Wha: function() {}
}), q.Dv = q.F.extend({
    key: "",
    Oo: 0,
    op: 0,
    kr: 0,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.key = "", this.kr = this.op = this.Oo = 0
    },
    j: function(t, i, n, e) {
        return !!q.F.prototype.j.call(this, t) && (this.key = i, this.op = e, this.Oo = n, !0)
    },
    I: function(t) {
        q.d(t, "target must implement cc.ActionTweenDelegate"), q.F.prototype.I.call(this, t), this.kr = this.op - this.Oo
    },
    update: function() {},
    reverse: function() {
        return q.Dv.create(this.duration, this.key, this.op, this.Oo)
    },
    u: function() {
        var t = new q.Dv;
        return t.j(this.o, this.key, this.Oo, this.op), t
    }
}), q.Dv.create = function(t, i, n, e) {
    var h = new q.Dv;
    return h.j(t, i, n, e) ? h : null
}, q.tA = function(t, i, n, e, h, s) {
    var r = s * s,
        a = r * s,
        o = (1 - h) / 2;
    h = o * (2 * r - a - s);
    var c = o * (-a + r) + (2 * a - 3 * r + 1);
    return s = o * (a - 2 * r + s) + (-2 * a + 3 * r), r = o * (a - r), q.a(t.x * h + i.x * c + n.x * s + e.x * r, t.y * h + i.y * c + n.y * s + e.y * r)
}, q.wN = function(t) {
    for (var i = [], n = t.length - 1; 0 <= n; n--) i.push(q.a(t[n].x, t[n].y));
    return i
}, q.Dy = function(t) {
    for (var i = [], n = 0; n < t.length; n++) i.push(q.a(t[n].x, t[n].y));
    return i
}, q.Di = function(t, i) {
    return t[Math.min(t.length - 1, Math.max(i, 0))]
}, q.sea = function(t) {
    for (var i = t.length, n = 0 | i / 2, e = 0; e < n; ++e) {
        var h = t[e];
        t[e] = t[i - e - 1], t[i - e - 1] = h
    }
}, q.Fj = q.F.extend({
    gj: null,
    jC: 0,
    qo: 0,
    wd: null,
    IB: null,
    ctor: function() {
        q.F.prototype.ctor.call(this), this.gj = [], this.qo = this.jC = 0, this.IB = this.wd = null
    },
    j: function(t, i, n) {
        return q.d(0 < i.length, "Invalid configuration. It must at least have one control point"), !!q.F.prototype.j.call(this, t) && (this.L_(i), this.qo = n, !0)
    },
    u: function() {
        var t = new q.Fj;
        return t.j(this.o, q.Dy(this.gj), this.qo), t
    },
    I: function(t) {
        q.F.prototype.I.call(this, t), this.jC = 1 / (this.gj.length - 1), this.wd = this.C.Na(), this.IB = q.a(0, 0)
    },
    update: function(t) {
        var i, n = this.gj;
        if (1 == t) i = n.length - 1, t = 1;
        else {
            var e = this.jC;
            t = (t - e * (i = 0 | t / e)) / e
        }
        i = q.tA(q.Di(n, i - 1), q.Di(n, i - 0), q.Di(n, i + 1), q.Di(n, i + 2), this.qo, t), q.Iv && (n = this.C.Gc() - this.wd.x, t = this.C.Bc() - this.wd.y, 0 != n || 0 != t) && (e = this.IB, n = e.x + n, t = e.y + t, e.x = n, e.y = t, i.x += n, i.y += t), this.zO(i)
    },
    reverse: function() {
        var t = q.wN(this.gj);
        return q.Fj.create(this.o, t, this.qo)
    },
    zO: function(t) {
        this.C.i(t), this.wd = t
    },
    P8: function() {
        return this.gj
    },
    L_: function(t) {
        this.gj = t
    }
}), q.Fj.create = function(t, i, n) {
    var e = new q.Fj;
    return e.j(t, i, n) ? e : null
}, q.ns = q.Fj.extend({
    Nd: null,
    ctor: function() {
        q.Fj.prototype.ctor.call(this), this.Nd = q.a(0, 0)
    },
    I: function(t) {
        q.Fj.prototype.I.call(this, t), this.Nd = t.Na()
    },
    reverse: function() {
        for (var t, i = this.gj.slice(), n = i[0], e = 1; e < i.length; ++e) t = i[e], i[e] = q.pf(t, n), n = t;
        for (n = (i = q.wN(i))[i.length - 1], i.pop(), n.x = -n.x, n.y = -n.y, i.unshift(n), e = 1; e < i.length; ++e) t = i[e], t.x = -t.x, t.y = -t.y, t.x += n.x, t.y += n.y, n = i[e] = t;
        return q.ns.create(this.o, i, this.qo)
    },
    zO: function(t) {
        var i = this.Nd,
            n = t.x + i.x;
        t = t.y + i.y, this.C.i(n, t), this.wd.x = n, this.wd.y = t
    },
    u: function() {
        var t = new q.ns;
        return t.j(this.o, q.Dy(this.gj), this.qo), t
    }
}), q.ns.create = function(t, i, n) {
    var e = new q.ns;
    return e.j(t, i, n) ? e : null
}, q.vA = q.Fj.extend({
    j: function(t, i) {
        return q.Fj.prototype.j.call(this, t, i, .5)
    },
    u: function() {
        var t = new q.vA;
        return t.j(this.o, q.Dy(this.gj)), t
    }
}), q.vA.create = function(t, i) {
    var n = new q.vA;
    return n.j(t, i) ? n : null
}, q.uA = q.ns.extend({
    j: function(t, i) {
        return q.Fj.prototype.j.call(this, t, i, .5)
    },
    u: function() {
        var t = new q.uA;
        return t.j(this.o, q.Dy(this.gj)), t
    }
}), q.uA.create = function(t, i) {
    var n = new q.uA;
    return n.j(t, i) ? n : null
}, q.Eg = q.r.extend({
    ctor: function() {
        q.r.prototype.ctor.call(this), this.Xj = !0, this.v(q.a(.5, .5)), this.Db(q.n.getInstance().Y)
    }
}), q.Eg.create = function() {
    return new q.Eg
}, q.lB = 0, q.bR = 1, q.Ya = q.r.extend({
    ig: !1,
    pm: !1,
    xq: !1,
    uo: 0,
    iu: q.lB,
    Tn: !1,
    Fq: 0,
    ctor: function() {
        q.r.prototype.ctor.call(this), this.xq = this.pm = this.ig = !1, this.uo = 0, this.iu = q.lB, this.Tn = !1, this.Fq = 0
    },
    MS: function() {
        this.v(q.a(.5, .5)), this.Xj = !0;
        var t = q.n.getInstance();
        this.Db(t.Y)
    },
    init: function() {
        return q.r.prototype.init.call(this), this.MS(), !0
    },
    Vr: function() {
        this.iu === q.lB ? q.wZ(this, this.uo) : q.TF(this.uo, !0, this)
    },
    paa: function() {
        return this.Tn
    },
    QN: function(t) {
        this.Tn != t && (this.Tn = t, this.Ke && (t ? q.n.getInstance().Dh.BK(this, this.Fq) : q.n.getInstance().Dh.sN(this)))
    },
    Ufa: function(t) {
        this.Fq !== t && (this.Fq = t, this.Tn && (this.QN(!1), this.QN(!0)))
    },
    u8: function() {
        return this.Fq
    },
    GX: function() {
        return this.ig
    },
    da: function(t) {
        this.ig !== t && (this.ig = t, this.Ke && (t ? this.Vr() : q.kA(this)))
    },
    m$: function() {
        return this.uo
    },
    a0: function(t) {
        this.uo !== t && (this.uo = t, this.ig && (this.da(!1), this.da(!0)))
    },
    l$: function() {
        return this.iu
    },
    $_: function(t) {
        this.iu !== t && (this.iu = t, this.ig && (this.da(!1), this.da(!0)))
    },
    aaa: function() {
        return this.pm
    },
    Dea: function(t) {
        if (t !== this.pm && (this.pm = t, this.Ke)) {
            var i = q.n.getInstance();
            t ? i.Qj.tc(this) : i.Qj.tc(null)
        }
    },
    Oz: function(t) {
        this.pm && q.n.getInstance().Qj.Oz(t)
    },
    uY: function() {
        q.d(!1, "Layer#onAccelerometer override me")
    },
    oaa: function() {
        return this.xq
    },
    Hfa: function(t) {
        if (t !== this.xq && (this.xq = t, this.Ke)) {
            var i = q.n.getInstance();
            t ? i.Vn.Co(this) : i.Vn.ep(this)
        }
    },
    ba: function() {
        var t = q.n.getInstance();
        this.ig && this.Vr(), q.r.prototype.ba.call(this), this.pm && t.Qj.tc(this), this.xq && t.Vn.Co(this), this.Tn && t.Dh.BK(this, this.Fq)
    },
    kb: function() {
        var t = q.n.getInstance();
        this.ig && q.kA(this), this.pm && t.Qj.tc(null), this.xq && t.Vn.ep(this), this.Tn && t.Dh.sN(this), q.r.prototype.kb.call(this)
    },
    Yh: function() {
        this.pm && q.n.getInstance().Qj.tc(this), q.r.prototype.Yh.call(this)
    },
    Lr: function() {
        return q.d(!1, "Layer#onTouchBegan override me"), !0
    },
    Rm: function() {},
    Nr: function() {},
    Mr: function() {},
    $u: function() {},
    $o: function() {},
    av: function() {},
    VM: function() {},
    BY: function() {
        return !1
    },
    CY: function() {
        return !1
    },
    FY: function() {
        return !1
    },
    GY: function() {
        return !1
    },
    KY: function() {
        return !1
    },
    LY: function() {
        return !1
    },
    MY: function() {
        return !1
    },
    HY: function() {
        return !1
    },
    IY: function() {
        return !1
    },
    JY: function() {
        return !1
    },
    NY: function() {
        return !1
    },
    DY: function() {
        return !1
    },
    EY: function() {
        return !1
    },
    zY: function() {},
    AY: function() {}
}), q.Ya.create = function() {
    var t = new q.Ya;
    return t && t.init() ? t : null
}, q.Yl = q.Ya.extend({
    Ae: !0,
    hb: 0,
    hf: 0,
    gb: null,
    bd: null,
    xf: !1,
    wf: !1,
    ctor: function() {
        q.Ya.prototype.ctor.call(this), this.Ae = !0, this.hf = this.hb = 255, this.gb = q.zg(), this.bd = q.zg(), this.wf = this.xf = !1
    },
    init: function() {
        return !!q.Ya.prototype.init.call(this) && (this.Ym(!1), this.Xm(!1), !0)
    },
    Ei: function() {
        return this.hf
    },
    ML: function() {
        return this.hb
    },
    w: function(t) {
        if (this.hb = this.hf = t, this.xf) {
            t = 255;
            var i = this.kc;
            i && i.Ae && i.Su() && (t = i.hb), this.Yf(t)
        }
    },
    Yf: function(t) {
        if (this.hb = this.hf * t / 255, this.xf) {
            t = this.B;
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n && n.Ae && n.Yf(this.hb)
            }
        }
    },
    Su: function() {
        return this.xf
    },
    Ym: function(t) {
        this.xf = t
    },
    Pc: function() {
        return this.bd
    },
    LL: function() {
        return this.gb
    },
    Qa: function(t) {
        if (this.gb = q.Qe(t.h, t.f, t.c), this.bd = q.Qe(t.h, t.f, t.c), this.wf) {
            t = q.zg();
            var i = this.kc;
            i && i.Ae && i.Ru() && (t = i.gb), this.Xf(t)
        }
    },
    Xf: function(t) {
        if (this.gb.h = this.bd.h * t.h / 255, this.gb.f = this.bd.f * t.f / 255, this.gb.c = this.bd.c * t.c / 255, this.wf) {
            t = this.B;
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n && n.Ae && n.Xf(this.gb)
            }
        }
    },
    Ru: function() {
        return this.wf
    },
    Xm: function(t) {
        this.wf = t
    },
    Uf: function() {},
    Bl: function() {
        return !1
    }
}), q.wc = q.Yl.extend({
    t: null,
    Mm: function() {
        return this.t
    },
    x5: function(t, i) {
        this.Db(q.size(t, i))
    },
    BV: function(t) {
        this.Db(q.size(t, this.ja.height))
    },
    w5: function(t) {
        this.Db(q.size(this.ja.width, t))
    },
    Uf: function() {},
    Bl: function() {
        return !1
    },
    Qa: function(t) {
        q.Yl.prototype.Qa.call(this, t), this.Nh()
    },
    w: function(t) {
        q.Yl.prototype.w.call(this, t), this.Nh()
    },
    zt: !1,
    hK: null,
    LD: null,
    hE: null,
    bC: null,
    ND: null,
    MD: null,
    ctor: null,
    Ui: function() {
        q.Yl.prototype.ctor.call(this), this.t = new q.Wl(q.Wc, q.Vc), this.wb = new q.Fb(0, 0, 0, 0)
    },
    Vi: function() {
        q.Yl.prototype.ctor.call(this), this.t = new q.Wl(q.Wc, q.Vc), this.ND = new ArrayBuffer(32), this.MD = new ArrayBuffer(64);
        var t = this.ND,
            i = this.MD,
            n = q.Ob.BYTES_PER_ELEMENT,
            e = q.Jc.BYTES_PER_ELEMENT;
        this.hK = [new q.Ob(0, 0, t, 0), new q.Ob(0, 0, t, n), new q.Ob(0, 0, t, 2 * n), new q.Ob(0, 0, t, 3 * n)], this.LD = [new q.Jc(0, 0, 0, 1, i, 0), new q.Jc(0, 0, 0, 1, i, e), new q.Jc(0, 0, 0, 1, i, 2 * e), new q.Jc(0, 0, 0, 1, i, 3 * e)], this.hE = q.q.createBuffer(), this.bC = q.q.createBuffer()
    },
    $g: function(t, i) {
        this.t = 1 == arguments.length ? t : {
            src: t,
            sa: i
        }, q.Z === q.Jb && (this.zt = this.t && 1 == this.t.src && 771 == this.t.sa)
    },
    init: function(t, i, n) {
        if (!q.Ya.prototype.init.call(this)) return !1;
        q.Z !== q.Jb && this.xe(q.ud.getInstance().Hc(q.qw));
        var e = q.n.getInstance().Y;
        return t = t || new q.Fb(0, 0, 0, 255), i = i || e.width, n = n || e.height, e = this.gb, e.h = t.h, e.f = t.f, e.c = t.c, e = this.bd, e.h = t.h, e.f = t.f, e.c = t.c, this.hf = this.hb = t.e, this.Db(q.size(i, n)), this.Nh(), !0
    },
    Db: null,
    fU: function(t) {
        var i = this.hK;
        i[1].x = t.width, i[2].y = t.height, i[3].x = t.width, i[3].y = t.height, this.WR(), q.Ya.prototype.Db.call(this, t)
    },
    Nh: null,
    TU: function() {},
    UU: function() {
        for (var t = this.gb, i = this.hb, n = this.LD, e = 0; 4 > e; e++) n[e].h = t.h / 255, n[e].f = t.f / 255, n[e].c = t.c / 255, n[e].e = i / 255;
        this.QI()
    },
    WR: function() {
        var t = q.q;
        t.bindBuffer(t.ARRAY_BUFFER, this.hE), t.bufferData(t.ARRAY_BUFFER, this.ND, t.STATIC_DRAW)
    },
    QI: function() {
        var t = q.q;
        t.bindBuffer(t.ARRAY_BUFFER, this.bC), t.bufferData(t.ARRAY_BUFFER, this.MD, t.STATIC_DRAW)
    },
    xa: null,
    Wi: function(t) {
        t = t || q.q;
        var i = this.g(),
            n = this.gb;
        t.fillStyle = "rgba(" + (0 | n.h) + "," + (0 | n.f) + "," + (0 | n.c) + "," + this.hb / 255 + ")", t.fillRect(0, 0, i.width, -i.height), q.Rh++
    },
    fg: function(t) {
        t = t || q.q, q.xs(this), q.zd(q.af | q.Pw), t.bindBuffer(t.ARRAY_BUFFER, this.hE), t.vertexAttribPointer(q.Zb, 2, t.FLOAT, !1, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, this.bC), t.vertexAttribPointer(q.cg, 4, t.FLOAT, !1, 0, 0), q.Th(this.t.src, this.t.sa), t.drawArrays(t.TRIANGLE_STRIP, 0, 4)
    }
}), q.pa.Rc ? (q.wc.prototype.ctor = q.wc.prototype.Vi, q.wc.prototype.Db = q.wc.prototype.fU, q.wc.prototype.Nh = q.wc.prototype.UU, q.wc.prototype.xa = q.wc.prototype.fg) : (q.wc.prototype.ctor = q.wc.prototype.Ui, q.wc.prototype.Db = q.Yl.prototype.Db, q.wc.prototype.Nh = q.wc.prototype.TU, q.wc.prototype.xa = q.wc.prototype.Wi), q.wc.create = function(t, i, n) {
    var e = new q.wc;
    switch (arguments.length) {
        case 0:
            e.init();
            break;
        case 1:
            e.init(t);
            break;
        case 3:
            e.init(t, i, n);
            break;
        default:
            e.init()
    }
    return e
}, q.WG = q.wc.extend({
    wa: null,
    na: null,
    Qq: null,
    oq: null,
    Vs: null,
    gx: !1,
    tx: null,
    sx: null,
    ctor: function() {
        q.wc.prototype.ctor.call(this), this.wb = new q.oc(0, 0, 0), this.wa = new q.oc(0, 0, 0), this.na = new q.oc(0, 0, 0), this.Vs = q.a(0, -1), this.oq = this.Qq = 255, this.tx = q.a(0, 0), this.sx = q.a(0, 0)
    },
    VW: function() {
        return this.wb
    },
    U_: function(t) {
        this.Qa(t)
    },
    v_: function(t) {
        this.na = t, this.Nh()
    },
    wW: function() {
        return this.na
    },
    Fga: function(t) {
        this.Qq = t, this.Nh()
    },
    G9: function() {
        return this.Qq
    },
    mfa: function(t) {
        this.oq = t, this.Nh()
    },
    y7: function() {
        return this.oq
    },
    tha: function(t) {
        this.Vs = t, this.Nh()
    },
    u$: function() {
        return this.Vs
    },
    eaa: function() {
        return this.gx
    },
    Yea: function(t) {
        this.gx = t, this.Nh()
    },
    init: function(t, i, n) {
        t = t || q.Ay(0, 0, 0, 255), i = i || q.Ay(0, 0, 0, 255), n = n || q.a(0, -1);
        var e = this.wa,
            h = this.na;
        return e.h = t.h, e.f = t.f, e.c = t.c, this.Qq = t.e, h.h = i.h, h.f = i.f, h.c = i.c, this.oq = i.e, this.Vs = n, this.gx = !0, q.wc.prototype.init.call(this, q.er(t.h, t.f, t.c, 255)), !0
    },
    xa: function(t) {
        if (q.Z === q.eb) q.wc.prototype.xa.call(this, t);
        else {
            t = t || q.q, this.zt && (t.globalCompositeOperation = "lighter"), t.save();
            var i = this.g().width,
                n = this.g().height,
                e = t.createLinearGradient(this.tx.x, this.tx.y, this.sx.x, this.sx.y),
                h = this.gb,
                s = this.na;
            e.addColorStop(0, "rgba(" + Math.round(h.h) + "," + Math.round(h.f) + "," + Math.round(h.c) + "," + (this.Qq / 255).toFixed(4) + ")"), e.addColorStop(1, "rgba(" + Math.round(s.h) + "," + Math.round(s.f) + "," + Math.round(s.c) + "," + (this.oq / 255).toFixed(4) + ")"), t.fillStyle = e, t.fillRect(0, 0, i, -n), 0 != this.UJ && t.rotate(this.w4), t.restore()
        }
    },
    Nh: function() {
        var t = this.Vs;
        if (q.Z === q.Jb) {
            var i = .5 * this.g().width,
                n = .5 * this.g().height;
            this.tx = q.a(i * -t.x + i, n * t.y - n), this.sx = q.a(i * t.x + i, n * -t.y - n)
        } else if (0 !== (n = q.Sm(t))) {
            i = Math.sqrt(2), t = q.a(t.x / n, t.y / n), this.gx && (t = q.yk(t, 1 / (Math.abs(t.x) + Math.abs(t.y)) * i));
            var e = this.hb / 255,
                h = this.gb,
                s = this.na,
                n = h.h / 255,
                r = h.f / 255,
                h = h.c / 255,
                a = this.Qq * e / 255,
                o = s.h / 255,
                c = s.f / 255,
                s = s.c / 255,
                e = this.oq * e / 255,
                u = (d = this.LD)[0],
                l = d[1],
                f = d[2],
                d = d[3];
            u.h = o + (i + t.x + t.y) / (2 * i) * (n - o), u.f = c + (i + t.x + t.y) / (2 * i) * (r - c), u.c = s + (i + t.x + t.y) / (2 * i) * (h - s), u.e = e + (i + t.x + t.y) / (2 * i) * (a - e), l.h = o + (i - t.x + t.y) / (2 * i) * (n - o), l.f = c + (i - t.x + t.y) / (2 * i) * (r - c), l.c = s + (i - t.x + t.y) / (2 * i) * (h - s), l.e = e + (i - t.x + t.y) / (2 * i) * (a - e), f.h = o + (i + t.x - t.y) / (2 * i) * (n - o), f.f = c + (i + t.x - t.y) / (2 * i) * (r - c), f.c = s + (i + t.x - t.y) / (2 * i) * (h - s), f.e = e + (i + t.x - t.y) / (2 * i) * (a - e), d.h = o + (i - t.x - t.y) / (2 * i) * (n - o), d.f = c + (i - t.x - t.y) / (2 * i) * (r - c), d.c = s + (i - t.x - t.y) / (2 * i) * (h - s), d.e = e + (i - t.x - t.y) / (2 * i) * (a - e), this.QI()
        }
    }
}), q.WG.create = function(t, i, n) {
    var e = new q.WG;
    switch (arguments.length) {
        case 2:
            if (e && e.init(t, i)) return e;
            break;
        case 3:
            if (e && e.init(t, i, n)) return e;
            break;
        case 0:
            if (e && e.init()) return e;
            break;
        default:
            throw "Arguments error "
    }
    return null
}, q.XG = q.Ya.extend({
    lm: 0,
    Ee: null,
    V$: function(t) {
        return this.Ee = [], this.Ee.push(t), this.lm = 0, this.l(t), !0
    },
    sX: function(t) {
        return this.Ee = t, this.lm = 0, this.l(this.Ee[this.lm]), !0
    },
    Gha: function(t) {
        q.d(t < this.Ee.length, "Invalid index in MultiplexLayer switchTo message"), this.removeChild(this.Ee[this.lm], !0), this.lm = t, this.l(this.Ee[t])
    },
    Hha: function(t) {
        q.d(t < this.Ee.count(), "Invalid index in MultiplexLayer switchTo message"), this.removeChild(this.Ee[this.lm], !0), this.Ee[this.lm] = null, this.lm = t, this.l(this.Ee[t])
    },
    Q4: function(t) {
        q.d(this.Ee, "cc.Layer addLayer"), this.Ee.push(t)
    }
}), q.XG.create = function() {
    0 < arguments.length && null == arguments[arguments.length - 1] && q.log("parameters should not be ending with null in Javascript");
    var t = new q.XG;
    return t.sX(arguments) ? t : null
}, q.Cs = 4208917214, q.E3 = q.ca.extend({
    Wg: function() {}
}), q.u3 = 0, q.bm = 1, q.Fw = 0, q.t3 = 1, q.$a = q.Eg.extend({
    va: null,
    nb: null,
    o: null,
    Zi: !1,
    zJ: !1,
    YJ: function() {
        this.Sl(this.YJ);
        var t = q.n.getInstance();
        this.zJ = t.vm, t.zk(this.va), t.Pe.Qz(!0), this.nb.M(!0)
    },
    fk: function() {
        this.Zi = !0
    },
    xa: function() {
        this.Zi ? (this.nb.za(), this.va.za()) : (this.va.za(), this.nb.za())
    },
    ba: function() {
        q.r.prototype.ba.call(this), q.n.getInstance().Pe.Qz(!1), this.nb.Zh(), this.va.ba()
    },
    kb: function() {
        q.r.prototype.kb.call(this), q.n.getInstance().Pe.Qz(!0), this.nb.kb(), this.va.Yh()
    },
    Ug: function() {
        q.r.prototype.Ug.call(this), this.zJ && this.nb.Ug()
    },
    j: function(t, i) {
        return q.d(null != i, "CCTransitionScene.initWithDuration() Argument scene must be non-nil"), !!this.init() && (this.o = t, this.v(q.a(0, 0)), this.i(0, 0), this.va = i, this.nb = q.n.getInstance().rc, this.nb || (this.nb = q.Eg.create(), this.nb.init()), q.d(this.va != this.nb, "CCTransitionScene.initWithDuration() Incoming scene must be different from the outgoing scene"), this.fk(), !0)
    },
    finish: function() {
        this.va.M(!0), this.va.i(0, 0), this.va.vb(1), this.va.we(0), q.Z === q.eb && this.va.Ro().restore(), this.nb.M(!1), this.nb.i(0, 0), this.nb.vb(1), this.nb.we(0), q.Z === q.eb && this.nb.Ro().restore(), this.di(this.YJ, 0)
    },
    Uy: function() {
        this.va.M(!0), this.nb.M(!1)
    }
}), q.$a.create = function(t, i) {
    var n = new q.$a;
    return null != n && n.j(t, i) ? n : null
}, q.dm = q.$a.extend({
    Eh: 0,
    j: function(t, i, n) {
        return q.$a.prototype.j.call(this, t, i) && (this.Eh = n), !0
    }
}), q.dm.create = function(t, i, n) {
    var e = new q.dm;
    return e.j(t, i, n), e
}, q.qI = q.$a.extend({
    ba: function() {
        q.$a.prototype.ba.call(this), this.va.vb(.001), this.nb.vb(1), this.va.v(q.a(.5, .5)), this.nb.v(q.a(.5, .5));
        var t = q.J.create(q.Zc.create(q.Es.create(this.o / 2, .001), q.Bs.create(this.o / 2, 720)), q.Cc.create(this.o / 2));
        this.nb.A(t), this.va.A(q.J.create(t.reverse(), q.P.create(this.finish, this)))
    }
}), q.qI.create = function(t, i) {
    var n = new q.qI;
    return null != n && n.j(t, i) ? n : null
}, q.fI = q.$a.extend({
    ba: function() {
        q.$a.prototype.ba.call(this);
        n = q.n.getInstance().Y;
        this.va.vb(.5), this.va.i(n.width, 0), this.va.v(q.a(.5, .5)), this.nb.v(q.a(.5, .5));
        var t = q.qn.create(this.o / 4, q.a(-n.width, 0), n.width / 4, 2),
            i = q.hc.create(this.o / 4, 1),
            n = q.hc.create(this.o / 4, .5),
            n = q.J.create(n, t),
            t = q.J.create(t, i),
            i = q.Cc.create(this.o / 2);
        this.nb.A(n), this.va.A(q.J.create(i, t, q.P.create(this.finish, this)))
    }
}), q.fI.create = function(t, i) {
    var n = new q.fI;
    return null != n && n.j(t, i) ? n : null
}, q.Ns = q.$a.extend({
    ba: function() {
        q.$a.prototype.ba.call(this), this.Al();
        var t = this.action();
        this.va.A(q.J.create(this.Wg(t), q.P.create(this.finish, this)))
    },
    Al: function() {
        this.va.i(-q.n.getInstance().Y.width, 0)
    },
    action: function() {
        return q.Za.create(this.o, q.a(0, 0))
    },
    Wg: function(t) {
        return q.on.create(t, 2)
    }
}), q.Ns.create = function(t, i) {
    var n = new q.Ns;
    return null != n && n.j(t, i) ? n : null
}, q.hI = q.Ns.extend({
    Al: function() {
        this.va.i(q.n.getInstance().Y.width, 0)
    }
}), q.hI.create = function(t, i) {
    var n = new q.hI;
    return null != n && n.j(t, i) ? n : null
}, q.iI = q.Ns.extend({
    Al: function() {
        this.va.i(0, q.n.getInstance().Y.height)
    }
}), q.iI.create = function(t, i) {
    var n = new q.iI;
    return null != n && n.j(t, i) ? n : null
}, q.gI = q.Ns.extend({
    Al: function() {
        this.va.i(0, -q.n.getInstance().Y.height)
    }
}), q.gI.create = function(t, i) {
    var n = new q.gI;
    return null != n && n.j(t, i) ? n : null
}, q.Vl = .5, q.Os = q.$a.extend({
    fk: function() {
        this.Zi = !1
    },
    ba: function() {
        q.$a.prototype.ba.call(this), this.Al();
        var t = this.action(),
            i = this.action(),
            t = this.Wg(t),
            i = q.J.create(this.Wg(i), q.P.create(this.finish, this));
        this.va.A(t), this.nb.A(i)
    },
    Al: function() {
        this.va.i(-(q.n.getInstance().Y.width - q.Vl), 0)
    },
    action: function() {
        return q.Ze.create(this.o, q.a(q.n.getInstance().Y.width - q.Vl, 0))
    },
    Wg: function(t) {
        return q.on.create(t, 2)
    }
}), q.Os.create = function(t, i) {
    var n = new q.Os;
    return null != n && n.j(t, i) ? n : null
}, q.tI = q.Os.extend({
    fk: function() {
        this.Zi = !0
    },
    Al: function() {
        this.va.i(q.n.getInstance().Y.width - q.Vl, 0)
    },
    action: function() {
        return q.Ze.create(this.o, q.a(-(q.n.getInstance().Y.width - q.Vl), 0))
    }
}), q.tI.create = function(t, i) {
    var n = new q.tI;
    return null != n && n.j(t, i) ? n : null
}, q.sI = q.Os.extend({
    fk: function() {
        this.Zi = !1
    },
    Al: function() {
        this.va.i(0, q.n.getInstance().Y.height - q.Vl)
    },
    action: function() {
        return q.Ze.create(this.o, q.a(0, -(q.n.getInstance().Y.height - q.Vl)))
    }
}), q.sI.create = function(t, i) {
    var n = new q.sI;
    return null != n && n.j(t, i) ? n : null
}, q.uI = q.Os.extend({
    fk: function() {
        this.Zi = !0
    },
    Al: function() {
        this.va.i(0, -(q.n.getInstance().Y.height - q.Vl))
    },
    action: function() {
        return q.Ze.create(this.o, q.a(0, q.n.getInstance().Y.height - q.Vl))
    }
}), q.uI.create = function(t, i) {
    var n = new q.uI;
    return null != n && n.j(t, i) ? n : null
}, q.rI = q.$a.extend({
    ba: function() {
        q.$a.prototype.ba.call(this), this.va.vb(.001), this.nb.vb(1), this.va.v(q.a(2 / 3, .5)), this.nb.v(q.a(1 / 3, .5));
        var t = q.hc.create(this.o, .01),
            i = q.hc.create(this.o, 1);
        this.va.A(this.Wg(i)), this.nb.A(q.J.create(this.Wg(t), q.P.create(this.finish, this)))
    },
    Wg: function(t) {
        return q.on.create(t, 2)
    }
}), q.rI.create = function(t, i) {
    var n = new q.rI;
    return null != n && n.j(t, i) ? n : null
}, q.dI = q.dm.extend({
    ba: function() {
        q.$a.prototype.ba.call(this);
        var t, i;
        this.va.M(!1);
        var n;
        this.Eh === q.bm ? (t = 90, n = 270, i = 90) : (t = -90, n = 90, i = -90), t = q.J.create(q.Cc.create(this.o / 2), q.li.create(), q.ag.create(this.o / 2, 1, 0, n, t, 0, 0), q.P.create(this.finish, this)), i = q.J.create(q.ag.create(this.o / 2, 1, 0, 0, i, 0, 0), q.Ij.create(), q.Cc.create(this.o / 2)), this.va.A(t), this.nb.A(i)
    }
}), q.dI.create = function(t, i, n) {
    null == n && (n = q.bm);
    var e = new q.dI;
    return e.j(t, i, n), e
}, q.eI = q.dm.extend({
    ba: function() {
        q.$a.prototype.ba.call(this);
        var t, i;
        this.va.M(!1);
        var n;
        this.Eh == q.Fw ? (t = 90, n = 270, i = 90) : (t = -90, n = 90, i = -90), t = q.J.create(q.Cc.create(this.o / 2), q.li.create(), q.ag.create(this.o / 2, 1, 0, n, t, 90, 0), q.P.create(this.finish, this)), i = q.J.create(q.ag.create(this.o / 2, 1, 0, 0, i, 90, 0), q.Ij.create(), q.Cc.create(this.o / 2)), this.va.A(t), this.nb.A(i)
    }
}), q.eI.create = function(t, i, n) {
    null == n && (n = q.Fw);
    var e = new q.eI;
    return e.j(t, i, n), e
}, q.cI = q.dm.extend({
    ba: function() {
        q.$a.prototype.ba.call(this);
        var t, i;
        this.va.M(!1);
        var n;
        this.Eh === q.bm ? (t = 90, n = 270, i = 90) : (t = -90, n = 90, i = -90), t = q.J.create(q.Cc.create(this.o / 2), q.li.create(), q.ag.create(this.o / 2, 1, 0, n, t, -45, 0), q.P.create(this.finish, this)), i = q.J.create(q.ag.create(this.o / 2, 1, 0, 0, i, 45, 0), q.Ij.create(), q.Cc.create(this.o / 2)), this.va.A(t), this.nb.A(i)
    }
}), q.cI.create = function(t, i, n) {
    null == n && (n = q.bm);
    var e = new q.cI;
    return e.j(t, i, n), e
}, q.yI = q.dm.extend({
    ba: function() {
        q.$a.prototype.ba.call(this);
        var t, i;
        this.va.M(!1);
        var n;
        this.Eh === q.bm ? (t = 90, n = 270, i = 90) : (t = -90, n = 90, i = -90), t = q.J.create(q.Cc.create(this.o / 2), q.Zc.create(q.ag.create(this.o / 2, 1, 0, n, t, 0, 0), q.hc.create(this.o / 2, 1), q.li.create()), q.P.create(this.finish, this)), i = q.J.create(q.Zc.create(q.ag.create(this.o / 2, 1, 0, 0, i, 0, 0), q.hc.create(this.o / 2, .5)), q.Ij.create(), q.Cc.create(this.o / 2)), this.va.vb(.5), this.va.A(t), this.nb.A(i)
    }
}), q.yI.create = function(t, i, n) {
    null == n && (n = q.bm);
    var e = new q.yI;
    return e.j(t, i, n), e
}, q.zI = q.dm.extend({
    ba: function() {
        q.$a.prototype.ba.call(this);
        var t, i;
        this.va.M(!1);
        var n;
        this.Eh === q.Fw ? (t = 90, n = 270, i = 90) : (t = -90, n = 90, i = -90), t = q.J.create(q.Cc.create(this.o / 2), q.Zc.create(q.ag.create(this.o / 2, 1, 0, n, t, 90, 0), q.hc.create(this.o / 2, 1), q.li.create()), q.P.create(this.finish, this)), i = q.J.create(q.Zc.create(q.ag.create(this.o / 2, 1, 0, 0, i, 90, 0), q.hc.create(this.o / 2, .5)), q.Ij.create(), q.Cc.create(this.o / 2)), this.va.vb(.5), this.va.A(t), this.nb.A(i)
    }
}), q.zI.create = function(t, i, n) {
    null == n && (n = q.Fw);
    var e = new q.zI;
    return e.j(t, i, n), e
}, q.xI = q.dm.extend({
    ba: function() {
        q.$a.prototype.ba.call(this);
        var t, i;
        this.va.M(!1);
        var n;
        this.Eh === q.bm ? (t = 90, n = 270, i = 90) : (t = -90, n = 90, i = -90), t = q.J.create(q.Cc.create(this.o / 2), q.Zc.create(q.ag.create(this.o / 2, 1, 0, n, t, -45, 0), q.hc.create(this.o / 2, 1), q.li.create()), q.li.create(), q.P.create(this.finish, this)), i = q.J.create(q.Zc.create(q.ag.create(this.o / 2, 1, 0, 0, i, 45, 0), q.hc.create(this.o / 2, .5)), q.Ij.create(), q.Cc.create(this.o / 2)), this.va.vb(.5), this.va.A(t), this.nb.A(i)
    }
}), q.xI.create = function(t, i, n) {
    null == n && (n = q.bm);
    var e = new q.xI;
    return e.j(t, i, n), e
}, q.Op = q.$a.extend({
    wb: null,
    ctor: function() {
        q.$a.prototype.ctor.call(this), this.wb = new q.Fb
    },
    ba: function() {
        q.$a.prototype.ba.call(this);
        t = q.wc.create(this.wb);
        this.va.M(!1), this.l(t, 2, q.Cs);
        var t = this.od(q.Cs),
            i = q.J.create(q.tf.create(this.o / 2), q.P.create(this.Uy, this), q.$f.create(this.o / 2), q.P.create(this.finish, this));
        t.A(i)
    },
    kb: function() {
        q.$a.prototype.kb.call(this), this.dp(q.Cs, !1)
    },
    j: function(t, i, n) {
        return n = n || q.AV(), q.$a.prototype.j.call(this, t, i) && (this.wb.h = n.h, this.wb.f = n.f, this.wb.c = n.c, this.wb.e = 0), !0
    }
}), q.Op.create = function(t, i, n) {
    var e = new q.Op;
    return e.j(t, i, n), e
}, q.ZH = q.$a.extend({
    ba: function() {
        q.$a.prototype.ba.call(this);
        var t = new q.Fb(0, 0, 0, 0),
            i = q.n.getInstance().Y,
            t = q.wc.create(t),
            n = q.Nb.create(i.width, i.height);
        if (null != n) {
            n.ra.v(q.a(.5, .5)), n.i(i.width / 2, i.height / 2), n.v(q.a(.5, .5)), n.Ph(), this.va.za(), n.end();
            var e = q.Nb.create(i.width, i.height);
            e.ra.v(q.a(.5, .5)), e.i(i.width / 2, i.height / 2), e.v(q.a(.5, .5)), e.Ph(), this.nb.za(), e.end(), n.ra.$g(1, 1), e.ra.$g(770, 771), t.l(n), t.l(e), n.ra.w(255), e.ra.w(255), i = q.J.create(q.dw.create(this.o, 0), q.P.create(this.Uy, this), q.P.create(this.finish, this)), e.ra.A(i), this.l(t, 2, q.Cs)
        }
    },
    kb: function() {
        this.dp(q.Cs, !1), q.$a.prototype.kb.call(this)
    },
    xa: function() {}
}), q.ZH.create = function(t, i) {
    var n = new q.ZH;
    return n.j(t, i), n
}, q.wI = q.$a.extend({
    fk: function() {
        this.Zi = !1
    },
    ba: function() {
        q.$a.prototype.ba.call(this);
        var t = q.n.getInstance().Y,
            t = q.sB.create(this.o, q.size(0 | t.width / t.height * 12, 12)),
            t = this.Wg(t);
        this.nb.A(q.J.create(t, q.P.create(this.finish, this), q.tn.create()))
    },
    Wg: function(t) {
        return t
    }
}), q.wI.create = function(t, i) {
    var n = new q.wI;
    return null != n && n.j(t, i) ? n : null
}, q.rB = q.$a.extend({
    ba: function() {
        q.$a.prototype.ba.call(this), this.va.M(!1);
        var t = this.action(),
            t = q.J.create(t, q.P.create(this.Uy, this), t.reverse());
        this.A(q.J.create(this.Wg(t), q.P.create(this.finish, this), q.tn.create()))
    },
    Wg: function(t) {
        return q.qs.create(t, 3)
    },
    action: function() {
        return q.eB.create(this.o / 2, 3)
    }
}), q.rB.create = function(t, i) {
    var n = new q.rB;
    return null != n && n.j(t, i) ? n : null
}, q.vI = q.rB.extend({
    action: function() {
        return q.fB.create(this.o / 2, 3)
    }
}), q.vI.create = function(t, i) {
    var n = new q.vI;
    return null != n && n.j(t, i) ? n : null
}, q.Ms = q.$a.extend({
    fk: function() {
        this.Zi = !1
    },
    ba: function() {
        q.$a.prototype.ba.call(this);
        var t = q.n.getInstance().Y,
            t = this.br(q.size(0 | t.width / t.height * 12, 12));
        this.nb.A(q.J.create(this.Wg(t), q.P.create(this.finish, this), q.tn.create()))
    },
    Wg: function(t) {
        return t
    },
    br: function(t) {
        return q.rs.create(this.o, t)
    }
}), q.Ms.create = function(t, i) {
    var n = new q.Ms;
    return null != n && n.j(t, i) ? n : null
}, q.$H = q.Ms.extend({
    br: function(t) {
        return q.yA.create(this.o, t)
    }
}), q.$H.create = function(t, i) {
    var n = new q.$H;
    return null != n && n.j(t, i) ? n : null
}, q.bI = q.Ms.extend({
    br: function(t) {
        return q.cw.create(this.o, t)
    }
}), q.bI.create = function(t, i) {
    var n = new q.bI;
    return null != n && n.j(t, i) ? n : null
}, q.aI = q.Ms.extend({
    br: function(t) {
        return q.zA.create(this.o, t)
    }
}), q.aI.create = function(t, i) {
    var n = new q.aI;
    return null != n && n.j(t, i) ? n : null
}, q.DH = 49153, q.cm = q.$a.extend({
    oe: 0,
    Jd: 0,
    Xx: null,
    ba: function() {
        q.$a.prototype.ba.call(this), this.dK();
        var t = q.n.getInstance().Y,
            i = q.Nb.create(t.width, t.height);
        i.ra.v(q.a(.5, .5)), i.i(t.width / 2, t.height / 2), i.v(q.a(.5, .5)), i.clear(0, 0, 0, 1), i.Ph(), this.Xx.za(), i.end(), this.Xx == this.nb && this.Uy(), t = this.co(i), i = q.J.create(q.zs.create(this.o, this.Jd, this.oe), q.P.create(this.finish, this)), t.A(i), this.l(t, 2, q.DH)
    },
    kb: function() {
        this.dp(q.DH, !0), q.$a.prototype.kb.call(this)
    },
    dK: function() {
        this.Xx = this.nb, this.Jd = 100, this.oe = 0
    },
    co: function() {
        return q.d(!1, "override me - abstract class"), null
    },
    fk: function() {
        this.Zi = !1
    }
}), q.cm.create = function(t, i) {
    var n = new q.cm;
    return null != n && n.j(t, i) ? n : null
}, q.nI = q.cm.extend({
    co: function(t) {
        var i = q.n.getInstance().Y;
        return t = q.pc.create(t.ra), q.Z === q.eb && t.ra.Nl(!0), t.cn(q.Lj), t.Uz(!1), t.Ak(100), t.i(i.width / 2, i.height / 2), t.v(q.a(.5, .5)), t
    }
}), q.nI.create = function(t, i) {
    var n = new q.nI;
    return null != n && n.j(t, i) ? n : null
}, q.oI = q.cm.extend({
    co: function(t) {
        var i = q.n.getInstance().Y;
        return t = q.pc.create(t.ra), q.Z === q.eb && t.ra.Nl(!0), t.cn(q.Lj), t.Uz(!0), t.Ak(100), t.i(i.width / 2, i.height / 2), t.v(q.a(.5, .5)), t
    }
}), q.oI.create = function(t, i) {
    var n = new q.oI;
    return null != n && n.j(t, i) ? n : null
}, q.kI = q.cm.extend({
    co: function(t) {
        var i = q.n.getInstance().Y;
        return t = q.pc.create(t.ra), q.Z === q.eb && t.ra.Nl(!0), t.cn(q.sn), t.as(q.a(1, 0)), t.$r(q.a(1, 0)), t.Ak(100), t.i(i.width / 2, i.height / 2), t.v(q.a(.5, .5)), t
    }
}), q.kI.create = function(t, i) {
    var n = new q.kI;
    return null != n && n.j(t, i) ? n : null
}, q.pI = q.cm.extend({
    co: function(t) {
        var i = q.n.getInstance().Y;
        return t = q.pc.create(t.ra), q.Z === q.eb && t.ra.Nl(!0), t.cn(q.sn), t.as(q.a(0, 0)), t.$r(q.a(0, 1)), t.Ak(100), t.i(i.width / 2, i.height / 2), t.v(q.a(.5, .5)), t
    }
}), q.pI.create = function(t, i) {
    var n = new q.pI;
    return null != n && n.j(t, i) ? n : null
}, q.lI = q.cm.extend({
    co: function(t) {
        var i = q.n.getInstance().Y;
        return t = q.pc.create(t.ra), q.Z === q.eb && t.ra.Nl(!0), t.cn(q.sn), t.as(q.a(.5, .5)), t.$r(q.a(1, 1)), t.Ak(0), t.i(i.width / 2, i.height / 2), t.v(q.a(.5, .5)), t
    },
    fk: function() {
        this.Zi = !1
    },
    dK: function() {
        this.Xx = this.va, this.Jd = 0, this.oe = 100
    }
}), q.lI.create = function(t, i) {
    var n = new q.lI;
    return null != n && n.j(t, i) ? n : null
}, q.mI = q.cm.extend({
    co: function(t) {
        var i = q.n.getInstance().Y;
        return t = q.pc.create(t.ra), q.Z === q.eb && t.ra.Nl(!0), t.cn(q.sn), t.as(q.a(.5, .5)), t.$r(q.a(1, 1)), t.Ak(100), t.i(i.width / 2, i.height / 2), t.v(q.a(.5, .5)), t
    }
}), q.mI.create = function(t, i) {
    var n = new q.mI;
    return null != n && n.j(t, i) ? n : null
}, q.jI = q.$a.extend({
    Yw: !0,
    j: function(t, i, n) {
        return this.Yw = n, q.$a.prototype.j.call(this, t, i), !0
    },
    br: function(t) {
        return this.Yw ? q.Ip.create(q.jw.create(this.o, t)) : q.jw.create(this.o, t)
    },
    ba: function() {
        q.$a.prototype.ba.call(this);
        var t, i = q.n.getInstance().Y;
        i.width > i.height ? (i = 16, t = 12) : (i = 12, t = 16), i = this.br(q.size(i, t)), this.Yw ? (this.va.M(!1), this.va.A(q.J.create(q.li.create(), i, q.P.create(this.finish, this), q.tn.create()))) : this.nb.A(q.J.create(i, q.P.create(this.finish, this), q.tn.create()))
    },
    fk: function() {
        this.Zi = this.Yw
    }
}), q.jI.create = function(t, i, n) {
    var e = new q.jI;
    return e.j(t, i, n), e
}, q.bB = -1, q.rr = function(t) {
    function i() {
        var i = q.rr,
            e = t.width,
            h = t.height;
        n[0].width = e, n[0].height = h, n[1].width = e, n[1].height = h, n[2].width = e, n[2].height = h, n[3].width = e, n[3].height = h, i.canvas.width = e, i.canvas.height = h, (s = i.canvas.getContext("2d")).drawImage(t, 0, 0), i.tG.width = e, i.tG.height = h;
        for (var s = s.getImageData(0, 0, e, h).data, r = 0; 4 > r; r++) {
            var a = n[r].getContext("2d");
            a.getImageData(0, 0, e, h).data, i.qO.drawImage(t, 0, 0);
            for (var o = i.qO.getImageData(0, 0, e, h), c = o.data, u = 0; u < s.length; u += 4) c[u] = 0 === r ? s[u] : 0, c[u + 1] = 1 === r ? s[u + 1] : 0, c[u + 2] = 2 === r ? s[u + 2] : 0, c[u + 3] = s[u + 3];
            a.putImageData(o, 0, 0)
        }
        t.onload = null
    }
    if (t.hasOwnProperty("channelCache")) return t.CV;
    var n = [document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas")];
    try {
        i()
    } catch (n) {
        t.onload = i
    }
    return t.CV = n
}, q.rr.canvas = document.createElement("canvas"), q.rr.tG = document.createElement("canvas"), q.rr.qO = q.rr.tG.getContext("2d"), q.C6 = function(t, i, n) {
    n || (n = q.rect(0, 0, t.width, t.height), n = q.Mj(n)), i = i instanceof q.Jc ? q.er(255 * i.h, 255 * i.f, 255 * i.c, 255 * i.e) : q.er(i.h, i.f, i.c, 50);
    var e = document.createElement("canvas"),
        h = e.getContext("2d");
    return e.width != n.width && (e.width = n.width), e.height != n.height && (e.height = n.height), h.save(), h.drawImage(t, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), h.globalCompositeOperation = "source-in", h.globalAlpha = i.e / 255, h.fillStyle = "rgb(" + i.h + "," + i.f + "," + i.c + ")", h.fillRect(0, 0, n.width, n.height), h.restore(), e
}, q.sr = function(t, i, n, e, h) {
    e || (e = q.rect(0, 0, t.width, t.height)), t = null == n.e ? q.sl(n.h / 255, n.f / 255, n.c / 255, 1) : n, n = Math.min(e.width, i[0].width);
    var s, r = Math.min(e.height, i[0].height);
    h ? (s = h.getContext("2d")).clearRect(0, 0, n, r) : (h = document.createElement("canvas"), h.width = n, h.height = r, s = h.getContext("2d")), s.save(), s.globalCompositeOperation = "lighter";
    var a = s.globalAlpha;
    return 0 < t.h && (s.globalAlpha = t.h * a, s.drawImage(i[0], e.x, e.y, n, r, 0, 0, n, r)), 0 < t.f && (s.globalAlpha = t.f * a, s.drawImage(i[1], e.x, e.y, n, r, 0, 0, n, r)), 0 < t.c && (s.globalAlpha = t.c * a, s.drawImage(i[2], e.x, e.y, n, r, 0, 0, n, r)), 0 === t.h && 0 === t.f && 0 === t.c && (s.globalAlpha = a, s.drawImage(i[3], e.x, e.y, n, r, 0, 0, n, r)), s.restore(), h
}, q.$K = function(t, i) {
    if (!t) return null;
    if (!i) return t;
    var n = document.createElement("canvas");
    n.width = i.width, n.height = i.height;
    var e = n.getContext("2d");
    return e.translate(n.width / 2, n.height / 2), e.rotate(-1.5707963267948966), e.drawImage(t, i.x, i.y, i.height, i.width, -i.height / 2, -i.width / 2, i.height, i.width), n
}, q.D3 = function(t, i, n, e, h, s) {
    this.qb = t, this.scale = i, this.rotation = n, this.Ql = e, this.visible = s
}, q.ih = function(t) {
    return 0 | t
}, q.VQ && (q.ih = function(t) {
    return t
}), q.m = q.Lb.extend({
    Ae: !0,
    X: null,
    mb: 0,
    qa: null,
    ga: !1,
    ij: null,
    Vj: null,
    ym: !1,
    wo: null,
    t: null,
    H: null,
    Fa: q.rect(0, 0, 0, 0),
    Ld: !1,
    Yd: null,
    mk: null,
    fb: !1,
    kd: !1,
    ld: !1,
    Wa: !1,
    Hg: null,
    $C: null,
    w0: function() {
        return this.Wa
    },
    Lf: function(t, i) {
        this.Hg.push({
            Lo: t,
            wl: i
        })
    },
    oi: function() {
        for (var t = this.Hg, i = 0, n = t.length; i < n; i++) {
            var e = t[i];
            e.Lo.call(e.wl, this)
        }
        t.length = 0
    },
    Dr: function() {
        return this.ga
    },
    ug: function(t) {
        this.ga = t
    },
    Faa: function() {
        return this.Ld
    },
    pW: function() {
        return this.mb
    },
    qd: function(t) {
        this.mb = t
    },
    bF: function() {
        return q.rect(this.Fa.x, this.Fa.y, this.Fa.width, this.Fa.height)
    },
    aF: function() {
        return this.X
    },
    mp: function(t) {
        this.X = t
    },
    E9: function() {
        return this.qa
    },
    Cga: function(t) {
        this.qa = t
    },
    PL: function() {
        return q.a(this.Yd.x, this.Yd.y)
    },
    Mm: function() {
        return this.t
    },
    Qf: function(t) {
        q.d(null != t, ""), t.Wa || (this.Wa = !1, t.Lf(this.KD, this));
        var i = this.Ea(t.ia(), t.Fa);
        return this.Zm(t), i
    },
    KD: null,
    HU: function(t) {
        this.Ha(), this.fd(t.Fa, t.Mg, t.vr()), this.oi()
    },
    GU: function(t) {
        this.Ha(), this.fd(t.Fa, t.Mg, t.vr()), 255 === (t = this.Pc()).h && 255 === t.f && 255 === t.c || this.Pk(), this.oi()
    },
    wX: function(t) {
        return q.d(null != t, ""), t = q.kh.getInstance().tj(t), this.Qf(t)
    },
    Xha: function(t) {
        this.X = t.X, this.qa = t
    },
    cO: function(t) {
        this.Fa = t
    },
    qf: function() {
        if (this.jf) {
            for (var t, i, n, e = this.B, h = 1; h < e.length; h++) {
                for (i = e[h], n = e[t = h - 1]; 0 <= t && (i.jb < n.jb || i.jb == n.jb && i.Ig < n.Ig);) e[t + 1] = n, t -= 1, n = e[t];
                e[t + 1] = i
            }
            this.qa && this.nh(e, q.r.Fg.qf), this.jf = !1
        }
    },
    gp: function(t, i) {
        q.d(null != t, "child is null"), q.d(-1 < this.B.indexOf(t), "this child is not in children list"), i !== t.jb && (this.qa && !this.jf && (this.GD(), this.qa.uN(!0)), q.r.prototype.gp.call(this, t, i))
    },
    removeChild: function(t, i) {
        this.qa && this.qa.fp(t), q.r.prototype.removeChild.call(this, t, i)
    },
    ci: function(t) {
        var i = this.B,
            n = this.qa;
        if (n && null != i)
            for (var e = 0, h = i.length; e < h; e++) n.fp(i[e]);
        q.r.prototype.ci.call(this, t), this.Vj = !1
    },
    DN: function(t) {
        if (this.ij = t, this.ug(t), null != (t = this.B))
            for (var i = 0; i < t.length; i++) t[i] instanceof q.m && t[i].DN(!0)
    },
    ki: function() {
        this.qa && !this.ij && (this.ga = this.ij = !0, this.Vj && this.DN(!0))
    },
    i: function(t) {
        2 <= arguments.length ? q.r.prototype.i.call(this, t, arguments[1]) : q.r.prototype.i.call(this, t), this.ki()
    },
    we: function(t) {
        q.r.prototype.we.call(this, t), this.ki()
    },
    Vz: function(t) {
        q.r.prototype.Vz.call(this, t), this.ki()
    },
    Wz: function(t) {
        q.r.prototype.Wz.call(this, t), this.ki()
    },
    Xz: function(t) {
        q.r.prototype.Xz.call(this, t), this.ki()
    },
    Yz: function(t) {
        q.r.prototype.Yz.call(this, t), this.ki()
    },
    ah: function(t) {
        q.r.prototype.ah.call(this, t), this.ki()
    },
    bn: function(t) {
        q.r.prototype.bn.call(this, t), this.ki()
    },
    vb: function(t, i) {
        q.r.prototype.vb.call(this, t, i), this.ki()
    },
    Zz: function(t) {
        q.r.prototype.Zz.call(this, t), this.ki()
    },
    v: function(t) {
        q.r.prototype.v.call(this, t), this.ki()
    },
    M: function(t) {
        q.r.prototype.M.call(this, t), this.ki()
    },
    Vy: function(t) {
        q.d(!this.qa, "ignoreAnchorPointForPosition is invalid in cc.Sprite"), q.r.prototype.Vy.call(this, t)
    },
    Rz: function(t) {
        this.kd != t && (this.kd = t, this.fd(this.Fa, this.Ld, this.ja), this.Ha())
    },
    Nl: function(t) {
        this.ld != t && (this.ld = t, this.fd(this.Fa, this.Ld, this.ja), this.Ha())
    },
    iaa: function() {
        return this.kd
    },
    jaa: function() {
        return this.ld
    },
    Uf: null,
    oU: function(t) {
        this.fb !== t && (this.fb = t, this.zv())
    },
    nU: function(t) {
        this.fb !== t && (this.fb = t, this.Ha())
    },
    Bl: function() {
        return this.fb
    },
    Yf: null,
    YU: function(t) {
        q.Lb.prototype.Yf.call(this, t), this.zv()
    },
    XU: function(t) {
        q.Lb.prototype.Yf.call(this, t), this.Pk(), this.Ha()
    },
    ifa: function(t, i) {
        q.d(t, "cc.Sprite#setDisplayFrameWithAnimationName. animationName must not be null");
        var n = q.jn.getInstance().FL(t);
        q.d(n, "cc.Sprite#setDisplayFrameWithAnimationName: Frame not found"), n = n.df[i], q.d(n, "cc.Sprite#setDisplayFrame. Invalid frame"), this.Zm(n.tj())
    },
    qW: function() {
        return this.qa
    },
    GD: function() {
        if (!this.jf) {
            this.jf = !0;
            for (var t = this.kc; t && t != this.qa;) t.GD(), t = t.getParent()
        }
    },
    ia: function() {
        return this.H
    },
    ac: null,
    Sx: null,
    Lg: !1,
    fx: !1,
    zt: !1,
    kg: null,
    ctor: null,
    Vi: function(t) {
        if (q.Lb.prototype.ctor.call(this), this.ym = !1, this.Yd = q.a(0, 0), this.mk = q.a(0, 0), this.t = {
                src: q.Wc,
                sa: q.Vc
            }, this.ac = new q.Yb, this.Sx = q.q.createBuffer(), this.Wa = this.Lg = !0, this.Hg = [], t)
            if ("string" == typeof t) t = q.kh.getInstance().tj(t), this.Qf(t);
            else if ("object" == typeof t)
            if (t instanceof q.$e) this.Qf(t);
            else if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) {
            var i = new q.rb;
            i.Qd(t), i.Bd(), this.Ea(i)
        } else t instanceof q.rb && this.Ea(t)
    },
    Ui: function(t) {
        if (q.Lb.prototype.ctor.call(this), this.ym = !1, this.Yd = q.a(0, 0), this.mk = q.a(0, 0), this.t = {
                src: q.Wc,
                sa: q.Vc
            }, this.$C = !1, this.Wa = !0, this.Hg = [], t)
            if ("string" == typeof t) t = q.kh.getInstance().tj(t), this.Qf(t);
            else if ("object" == typeof t)
            if (t instanceof q.$e) this.Qf(t);
            else if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) {
            var i = new q.rb;
            i.Qd(t), i.Bd(), this.Ea(i)
        } else t instanceof q.rb && this.Ea(t)
    },
    W8: function() {
        return this.ac
    },
    $g: null,
    cU: function(t, i) {
        this.t = 1 == arguments.length ? t : {
            src: t,
            sa: i
        }
    },
    bU: function(t, i) {
        this.zt = (this.t = 1 == arguments.length ? t : {
            src: t,
            sa: i
        }) && (770 == this.t.src && 1 == this.t.sa || 1 == this.t.src && 1 == this.t.sa)
    },
    init: null,
    LS: function() {
        if (0 < arguments.length) return this.Fi(arguments[0], arguments[1]);
        q.Lb.prototype.init.call(this), this.ga = this.ij = !1, this.fb = !0, this.t.src = q.Wc, this.t.sa = q.Vc, this.ya(null), this.Wa = !0, this.kd = this.ld = !1, this.v(q.a(.5, .5)), this.Yd = q.Ua(), this.Vj = !1;
        var t = {
            h: 255,
            f: 255,
            c: 255,
            e: 255
        };
        return this.ac.K.s = t, this.ac.S.s = t, this.ac.R.s = t, this.ac.N.s = t, this.Lg = !0, this.fd(q.uf(), !1, q.Ec()), !0
    },
    KS: function() {
        return 0 < arguments.length ? this.Fi(arguments[0], arguments[1]) : (q.Lb.prototype.init.call(this), this.ga = this.ij = !1, this.fb = !0, this.t.src = q.Wc, this.t.sa = q.Vc, this.ya(null), this.Wa = !0, this.kd = this.ld = !1, this.v(q.a(.5, .5)), this.Yd = q.Ua(), this.Vj = !1, this.fd(q.uf(), !1, q.Ec()), !0)
    },
    Fi: function(t, i) {
        q.d(null != t, "Sprite#initWithFile():Invalid filename for sprite");
        var n = q.Ka.getInstance().sv(t);
        if (n) {
            if (!i) {
                var e = n.g();
                i = q.rect(0, 0, e.width, e.height)
            }
        } else n = q.Ka.getInstance().cc(t);
        return this.Ea(n, i)
    },
    Ea: null,
    wt: function(t, i, n) {
        if (0 == arguments.length) throw "Sprite.initWithTexture(): Argument must be non-nil ";
        if (n = n || !1, !q.Lb.prototype.init.call(this)) return !1;
        this.qa = null, this.ga = this.ij = !1, this.fb = !0, this.t.src = q.Wc, this.t.sa = q.Vc, this.kd = this.ld = !1, this.v(q.a(.5, .5)), this.Yd = q.a(0, 0), this.Vj = !1;
        var e = new q.Fb(255, 255, 255, 255),
            h = this.ac;
        return h.K.s = e, h.S.s = e, h.R.s = e, h.N.s = e, this.Wa = e = t.md, e ? (i || (i = q.rect(0, 0, 0, 0), i.size = t.g()), this.ya(t), this.fd(i, n, i.size), this.Ic(null), this.Lg = !0) : (this.Ld = n || !1, this.Fa = i, t.Lf(this.jy, this), !0)
    },
    vt: function(t, i, n) {
        if (0 == arguments.length) throw "Sprite.initWithTexture(): Argument must be non-nil ";
        if (n = n || !1, !q.Lb.prototype.init.call(this)) return !1;
        this.qa = null, this.ga = this.ij = !1, this.fb = !0, this.t.src = q.Wc, this.t.sa = q.Vc, this.kd = this.ld = !1, this.v(q.a(.5, .5)), this.Yd = q.a(0, 0), this.Vj = !1;
        var e = t.md;
        return this.Wa = e, e ? (i || (i = q.rect(0, 0, 0, 0), i.size = t.g()), this.kg = t, this.ya(t), this.fd(i, n, i.size), this.Ic(null), !0) : (this.Ld = n || !1, this.Fa = i, t.Lf(this.jy, this), !0)
    },
    jy: null,
    LU: function(t) {
        this.Wa = !0;
        var i = this.Fa;
        i ? q.Mt(i) && (i.size = t.g()) : (i = q.rect(0, 0, 0, 0), i.size = t.g()), this.ya(t), this.fd(i, this.Ld, i.size), this.Ic(null), this.Lg = !0, this.oi()
    },
    KU: function(t) {
        this.Wa = !0;
        var i = this.Fa;
        i ? q.Mt(i) && (i.size = t.g()) : (i = q.rect(0, 0, 0, 0), i.size = t.g()), this.kg = t, this.ya(t), this.fd(i, this.Ld, i.size), this.Ic(null), this.oi()
    },
    fd: null,
    zU: function(t, i, n) {
        this.Ld = i || !1, n = n || t.size, this.Db(n), this.cO(t), this.xU(t), t = this.mk, this.kd && (t.x = -t.x), this.ld && (t.y = -t.y);
        e = this.Fa;
        if (this.Yd.x = t.x + (this.ja.width - e.width) / 2, this.Yd.y = t.y + (this.ja.height - e.height) / 2, this.qa) this.ga = !0;
        else {
            t = 0 + this.Yd.x, i = 0 + this.Yd.y, n = t + e.width;
            var e = i + e.height,
                h = this.ac;
            h.K.k = {
                x: t,
                y: i,
                z: 0
            }, h.S.k = {
                x: n,
                y: i,
                z: 0
            }, h.R.k = {
                x: t,
                y: e,
                z: 0
            }, h.N.k = {
                x: n,
                y: e,
                z: 0
            }, this.Lg = !0
        }
    },
    yU: function(t, i, n) {
        this.Ld = i || !1, n = n || t.size, this.Db(n), this.cO(t), t = this.mk, this.kd && (t.x = -t.x), this.ld && (t.y = -t.y), this.Yd.x = t.x + (this.ja.width - this.Fa.width) / 2, this.Yd.y = t.y + (this.ja.height - this.Fa.height) / 2, this.qa && (this.ga = !0)
    },
    yg: null,
    gV: function() {
        if (this.Dr()) {
            var t = this.ac,
                i = this.kc;
            if (!this.zc || i && i != this.qa && i.ym) t.S.k = {
                x: 0,
                y: 0,
                z: 0
            }, t.R.k = {
                x: 0,
                y: 0,
                z: 0
            }, t.N.k = {
                x: 0,
                y: 0,
                z: 0
            }, t.K.k = {
                x: 0,
                y: 0,
                z: 0
            }, this.ym = !0;
            else {
                this.ym = !1;
                var n = this.wo = i && i != this.qa ? q.vp(this.Xh(), i.wo) : this.Xh(),
                    e = this.Fa.size,
                    i = this.Yd.x,
                    h = this.Yd.y,
                    s = i + e.width,
                    e = h + e.height,
                    r = n.Ra,
                    a = n.Sa,
                    o = n.e,
                    c = n.c,
                    u = n.Q,
                    n = -n.G,
                    l = this.qy;
                t.K.k = {
                    x: q.ih(i * o - h * n + r),
                    y: q.ih(i * c + h * u + a),
                    z: l
                }, t.S.k = {
                    x: q.ih(s * o - h * n + r),
                    y: q.ih(s * c + h * u + a),
                    z: l
                }, t.R.k = {
                    x: q.ih(i * o - e * n + r),
                    y: q.ih(i * c + e * u + a),
                    z: l
                }, t.N.k = {
                    x: q.ih(s * o - e * n + r),
                    y: q.ih(s * c + e * u + a),
                    z: l
                }
            }
            this.X.mA(t, this.mb), this.ij = !1, this.ug(!1)
        }
        this.Vj && this.nh(this.B, q.r.Fg.yg), q.am && (t = [q.a(this.ac.K.k.x, this.ac.K.k.y), q.a(this.ac.S.k.x, this.ac.S.k.y), q.a(this.ac.N.k.x, this.ac.N.k.y), q.a(this.ac.R.k.x, this.ac.R.k.y)], q.se.de(t, 4, !0))
    },
    fV: function() {
        if (this.ga) {
            var t = this.kc;
            !this.zc || t && t != this.qa && t.ym ? this.ym = !0 : (this.ym = !1, this.wo = t && t != this.qa ? q.vp(this.Xh(), t.wo) : this.Xh()), this.ga = this.ij = !1
        }
        this.Vj && this.nh(this.B, q.r.Fg.yg)
    },
    l: null,
    KB: function(t, i, n) {
        q.d(null != t, "Argument must be non-NULL"), null == i && (i = t.jb), null == n && (n = t.D), this.qa && (q.d(t instanceof q.m, "cc.Sprite only supports cc.Sprites as children when using cc.SpriteBatchNode"), q.d(t.ia().ce === this.X.ia().ce, ""), this.qa.appendChild(t), this.jf || this.GD()), q.r.prototype.l.call(this, t, i, n), this.Vj = !0
    },
    JB: function(t, i, n) {
        q.d(null != t, "Argument must be non-NULL"), null == i && (i = t.jb), null == n && (n = t.D), q.r.prototype.l.call(this, t, i, n), this.Vj = !0
    },
    zv: function() {
        var t = this.gb,
            i = this.hb,
            t = {
                h: t.h,
                f: t.f,
                c: t.c,
                e: i
            };
        this.fb && (t.h *= i / 255, t.f *= i / 255, t.c *= i / 255), (i = this.ac).K.s = t, i.S.s = t, i.R.s = t, i.N.s = t, this.qa && (this.mb != q.bB ? this.X.mA(i, this.mb) : this.ga = !0), this.Lg = !0
    },
    w: null,
    Rt: function(t) {
        q.Lb.prototype.w.call(this, t), this.zv()
    },
    jo: function(t) {
        q.Lb.prototype.w.call(this, t), this.Ha()
    },
    Qa: null,
    ED: function(t) {
        q.Lb.prototype.Qa.call(this, t), this.zv()
    },
    Pt: function(t) {
        var i = this.Pc();
        i.h === t.h && i.f === t.f && i.c === t.c || (q.Lb.prototype.Qa.call(this, t), this.Pk(), this.Ha())
    },
    Xf: null,
    WU: function(t) {
        q.Lb.prototype.Xf.call(this, t), this.zv()
    },
    VU: function(t) {
        q.Lb.prototype.Xf.call(this, t), this.Pk(), this.Ha()
    },
    Zm: null,
    iU: function(t) {
        this.Ha();
        var i = t.ur();
        this.mk.x = i.x, this.mk.y = i.y, i = t.ia(), t.Wa || (this.Wa = !1, t.Lf(function(t) {
            this.Wa = !0;
            var i = t.ia();
            i != this.H && this.ya(i), this.fd(t.Fa, t.Ld, t.vr()), this.oi()
        }, this)), i != this.H && this.ya(i), this.Ld = t.Mg, this.fd(t.Fa, this.Ld, t.vr())
    },
    hU: function(t) {
        this.Ha();
        i = t.ur();
        this.mk.x = i.x, this.mk.y = i.y, this.Ld = t.Mg;
        var i = t.ia(),
            n = t.Wa;
        n || (this.Wa = !1, t.Lf(function(t) {
            this.Wa = !0;
            var i = t.ia();
            i != this.H && this.ya(i), this.fd(t.Fa, this.Ld, t.vr()), this.oi()
        }, this)), i != this.H && this.ya(i), this.Ld && (this.kg = i), this.fd(t.Fa, this.Ld, t.vr()), this.fx = !1, n && (255 === (t = this.Pc()).h && 255 === t.f && 255 === t.c || this.Pk())
    },
    iM: null,
    aT: function(t) {
        return q.nN(t.Fa, this.Fa) && t.ia().getName() == this.H.getName() && q.Sr(t.ur(), this.mk)
    },
    $S: function(t) {
        return t.ia() == this.H && q.nN(t.Fa, this.Fa)
    },
    aW: function() {
        return q.$e.nf(this.H, q.nw(this.Fa), this.Ld, q.xQ(this.mk), q.aB(this.ja))
    },
    Ic: null,
    aU: function(t) {
        if (this.qa = t) this.wo = {
            e: 1,
            c: 0,
            G: 0,
            Q: 1,
            Ra: 0,
            Sa: 0
        }, this.mp(this.qa.X);
        else {
            this.mb = q.bB, this.mp(null), this.ij = !1, this.ug(!1), t = this.Yd.x;
            var i = this.Yd.y,
                n = t + this.Fa.width,
                e = i + this.Fa.height,
                h = this.ac;
            h.K.k = {
                x: t,
                y: i,
                z: 0
            }, h.S.k = {
                x: n,
                y: i,
                z: 0
            }, h.R.k = {
                x: t,
                y: e,
                z: 0
            }, h.N.k = {
                x: n,
                y: e,
                z: 0
            }, this.Lg = !0
        }
    },
    $T: function(t) {
        (this.qa = t) ? (this.wo = {
            e: 1,
            c: 0,
            G: 0,
            Q: 1,
            Ra: 0,
            Sa: 0
        }, this.mp(this.qa.X)) : (this.mb = q.bB, this.mp(null), this.ij = !1, this.ug(!1))
    },
    ya: null,
    Tt: function(t) {
        q.d(!t || t instanceof q.rb, "setTexture expects a CCTexture2D. Invalid argument"), q.d(!this.qa, "cc.Sprite: Batched sprites should use the same texture as the batchnode"), t ? this.xe(q.ud.getInstance().Hc(q.Mk)) : this.xe(q.ud.getInstance().Hc(q.qw)), this.qa || this.H == t || (this.H = t, this.Mh())
    },
    St: function(t) {
        q.d(!t || t instanceof q.rb, "setTexture expects a CCTexture2D. Invalid argument"), this.H != t && (t && t.Fc instanceof HTMLImageElement && (this.kg = t), this.H = t)
    },
    Mh: function() {
        q.d(!this.qa, "cc.Sprite: _updateBlendFunc doesn't work when the sprite is rendered using a cc.CCSpriteBatchNode"), this.H && this.H.tk() ? (this.t.src = q.Wc, this.t.sa = q.Vc, this.Uf(!0)) : (this.t.src = 770, this.t.sa = 771, this.Uf(!1))
    },
    Pk: function() {
        var t, i = this.H,
            n = this.bF();
        i && 0 < n.width && (t = i.Fc) && (i = q.Ka.getInstance().Ry(this.kg.Fc)) && (this.fx = !0, t instanceof HTMLCanvasElement && !this.Ld && !this.$C ? q.sr(t, i, this.gb, n, t) : (t = q.sr(t, i, this.gb, n), (i = new q.rb).Qd(t), i.Bd(), this.ya(i)))
    },
    xU: function(t) {
        t = q.nw(t);
        var i = this.qa ? this.X.ia() : this.H;
        if (i) {
            var n, e = i.yl(),
                h = i.xl(),
                s = this.ac;
            this.Ld ? (q.$v ? (i = (2 * t.x + 1) / (2 * e), e = i + (2 * t.height - 2) / (2 * e), n = (2 * t.y + 1) / (2 * h), t = n + (2 * t.width - 2) / (2 * h)) : (i = t.x / e, e = (t.x + t.height) / e, n = t.y / h, t = (t.y + t.width) / h), this.kd && (h = n, n = t, t = h), this.ld && (h = i, i = e, e = h), s.K.p.Oa = i, s.K.p.Ia = n, s.S.p.Oa = i, s.S.p.Ia = t, s.R.p.Oa = e, s.R.p.Ia = n, s.N.p.Oa = e, s.N.p.Ia = t) : (q.$v ? (i = (2 * t.x + 1) / (2 * e), e = i + (2 * t.width - 2) / (2 * e), n = (2 * t.y + 1) / (2 * h), t = n + (2 * t.height - 2) / (2 * h)) : (i = t.x / e, e = (t.x + t.width) / e, n = t.y / h, t = (t.y + t.height) / h), this.kd && (h = i, i = e, e = h), this.ld && (h = n, n = t, t = h), s.K.p.Oa = i, s.K.p.Ia = t, s.S.p.Oa = e, s.S.p.Ia = t, s.R.p.Oa = i, s.R.p.Ia = n, s.N.p.Oa = e, s.N.p.Ia = n), this.Lg = !0
        }
    },
    xa: null,
    fg: function() {
        if (this.Wa) {
            var t = q.q,
                i = this.H;
            i ? i.md && (this.Wb.Fd(), this.Wb.wg(), q.Th(this.t.src, this.t.sa), q.dF(0, i), q.zd(q.xn), t.bindBuffer(t.ARRAY_BUFFER, this.Sx), this.Lg && (t.bufferData(t.ARRAY_BUFFER, this.ac.sE, t.DYNAMIC_DRAW), this.Lg = !1), t.vertexAttribPointer(0, 3, t.FLOAT, !1, 24, 0), t.vertexAttribPointer(1, 4, t.UNSIGNED_BYTE, !0, 24, 12), t.vertexAttribPointer(2, 2, t.FLOAT, !1, 24, 16), t.drawArrays(t.TRIANGLE_STRIP, 0, 4)) : (this.Wb.Fd(), this.Wb.wg(), q.Th(this.t.src, this.t.sa), q.Yg(null), q.zd(q.af | q.Pw), t.bindBuffer(t.ARRAY_BUFFER, this.Sx), this.Lg && (q.q.bufferData(q.q.ARRAY_BUFFER, this.ac.sE, q.q.STATIC_DRAW), this.Lg = !1), t.vertexAttribPointer(q.Zb, 3, t.FLOAT, !1, 24, 0), t.vertexAttribPointer(q.cg, 4, t.UNSIGNED_BYTE, !0, 24, 12), t.drawArrays(t.TRIANGLE_STRIP, 0, 4)), q.Rh++, 0 !== q.am && (1 === q.am ? (t = this.ac, t = [q.a(t.R.k.x, t.R.k.y), q.a(t.K.k.x, t.K.k.y), q.a(t.S.k.x, t.S.k.y), q.a(t.N.k.x, t.N.k.y)], q.se.de(t, 4, !0)) : 2 === q.am && (t = this.bF().size, i = this.PL(), t = [q.a(i.x, i.y), q.a(i.x + t.width, i.y), q.a(i.x + t.width, i.y + t.height), q.a(i.x, i.y + t.height)], q.se.de(t, 4, !0)))
        }
    },
    Wi: function(t) {
        if (this.Wa) {
            t = t || q.q, this.zt && (t.globalCompositeOperation = "lighter"), t.globalAlpha = this.hb / 255;
            var i = this.Fa,
                n = this.ja,
                e = this.Yd,
                h = 0 | e.x,
                s = -e.y - i.height;
            (this.kd || this.ld) && (t.save(), this.kd && (h = -e.x - i.width, t.scale(-1, 1)), this.ld && (s = e.y, t.scale(1, -1))), this.H && 0 < i.width ? (n = this.H.Fc, this.fx ? t.drawImage(n, 0, 0, i.width, i.height, h, s, i.width, i.height) : t.drawImage(n, i.x, i.y, i.width, i.height, h, s, i.width, i.height)) : 0 !== n.width && (e = this.Pc(), t.fillStyle = "rgba(" + e.h + "," + e.f + "," + e.c + ",1)", t.fillRect(h, s, n.width, n.height)), 1 === q.am ? (t.strokeStyle = "rgba(0,255,0,1)", s = -s, h = [q.a(h, s), q.a(h + i.width, s), q.a(h + i.width, s - i.height), q.a(h, s - i.height)], q.se.de(h, 4, !0)) : 2 === q.am && (t.strokeStyle = "rgba(0,255,0,1)", i = this.Fa.size, s = -s, h = [q.a(h, s), q.a(h + i.width, s), q.a(h + i.width, s - i.height), q.a(h, s - i.height)], q.se.de(h, 4, !0)), (this.kd || this.ld) && t.restore(), q.Rh++
        }
    }
}), q.pa.Rc ? (b = q.m.prototype, b.KD = q.m.prototype.HU, b.Uf = q.m.prototype.oU, b.Yf = q.m.prototype.YU, b.ctor = q.m.prototype.Vi, b.$g = q.m.prototype.cU, b.init = q.m.prototype.LS, b.Ea = q.m.prototype.wt, b.jy = q.m.prototype.LU, b.fd = q.m.prototype.zU, b.yg = q.m.prototype.gV, b.l = q.m.prototype.KB, b.w = q.m.prototype.Rt, b.Qa = q.m.prototype.ED, b.Xf = q.m.prototype.WU, b.Zm = q.m.prototype.iU, b.iM = q.m.prototype.aT, b.Ic = q.m.prototype.aU, b.ya = q.m.prototype.Tt, b.xa = q.m.prototype.fg) : (b = q.m.prototype, b.KD = q.m.prototype.GU, b.Uf = q.m.prototype.nU, b.Yf = q.m.prototype.XU, b.ctor = q.m.prototype.Ui, b.$g = q.m.prototype.bU, b.init = q.m.prototype.KS, b.Ea = q.m.prototype.vt, b.jy = q.m.prototype.KU, b.fd = q.m.prototype.yU, b.yg = q.m.prototype.fV, b.l = q.m.prototype.JB, b.w = q.m.prototype.jo, b.Qa = q.m.prototype.Pt, b.Xf = q.m.prototype.VU, b.Zm = q.m.prototype.hU, b.iM = q.m.prototype.$S, b.Ic = q.m.prototype.$T, b.ya = q.m.prototype.St, b.xa = q.m.prototype.Wi), q.m.nf = function(t, i) {
    var n = arguments.length,
        e = new q.m;
    switch (n) {
        case 1:
            return e && e.Ea(t) ? e : null;
        case 2:
            return e && e.Ea(t, i) ? e : null;
        default:
            throw "Sprite.createWithTexture(): Argument must be non-nil "
    }
}, q.m.create = function(t, i) {
    var n = arguments.length,
        e = new q.m;
    if (0 === n) {
        if (e.init()) return e
    } else if (e && e.init(t, i)) return e;
    return null
}, q.m.Hy = function(t) {
    var i = null;
    return "string" != typeof t ? (q.log("Invalid argument. Expecting string."), null) : (i = q.kh.getInstance().tj(t)) ? (t = new q.m) && t.Qf(i) ? t : null : (q.log("Invalid spriteFrameName: " + t), null)
}, q.m.Gy = function(t) {
    var i = new q.m;
    return i && i.Qf(t) ? i : null
}, q.Ik = q.ca.extend({
    Xt: null,
    cf: 0,
    mu: null,
    ctor: function() {
        this.cf = 0
    },
    u: function() {
        var t = new q.Ik;
        return t.Qf(this.Xt.u(), this.cf, this.mu), t
    },
    Ey: function() {
        return q.u(this)
    },
    copy: function() {
        var t = new q.Ik;
        return t.Qf(this.Xt.u(), this.cf, this.mu), t
    },
    Qf: function(t, i, n) {
        return this.Xt = t, this.cf = i, this.mu = n, !0
    },
    tj: function() {
        return this.Xt
    },
    Dga: function(t) {
        this.Xt = t
    },
    l7: function() {
        return this.cf
    },
    efa: function(t) {
        this.cf = t
    },
    s$: function() {
        return this.mu
    },
    rha: function(t) {
        this.mu = t
    }
}), q.vc = q.ca.extend({
    df: null,
    bl: 0,
    ho: !1,
    o: 0,
    cf: 0,
    to: 0,
    ctor: function() {
        this.df = []
    },
    Q7: function() {
        return this.df
    },
    KN: function(t) {
        this.df = t
    },
    nE: function(t) {
        var i = new q.Ik;
        i.Qf(t, 1, null), this.df.push(i), this.to++
    },
    cb: function(t) {
        t = q.Ka.getInstance().cc(t);
        var i = q.uf();
        i.size = t.g(), t = q.$e.nf(t, i), this.nE(t)
    },
    oE: function(t, i) {
        var n = q.$e.nf(t, i);
        this.nE(n)
    },
    Nu: function(t, i, n) {
        for (q.Fv(t, q.Ik), this.cf = i, this.bl = n, this.KN([]), i = 0; i < t.length; i++) n = t[i], this.df.push(n), this.to += n.cf;
        return !0
    },
    u: function() {
        var t = new q.vc;
        return t.Nu(this.cJ(), this.cf, this.bl), t.ve(this.ho), t
    },
    Ey: function() {
        var t = new q.vc;
        return t.Nu(this.cJ(), this.cf, this.bl), t.ve(this.ho), t
    },
    cJ: function() {
        for (var t = [], i = 0; i < this.df.length; i++) t.push(this.df[i].u());
        return t
    },
    copy: function() {
        return this.Ey(null)
    },
    l8: function() {
        return this.bl
    },
    Qfa: function(t) {
        this.bl = t
    },
    ve: function(t) {
        this.ho = t
    },
    i9: function() {
        return this.ho
    },
    Pf: function() {
        return this.to * this.cf
    },
    k7: function() {
        return this.cf
    },
    Se: function(t) {
        this.cf = t
    },
    g$: function() {
        return this.to
    },
    eM: function(t, i) {
        if (q.Fv(t, q.$e), this.bl = 1, this.cf = i || 0, this.KN([]), t)
            for (var n = 0; n < t.length; n++) {
                var e = t[n],
                    h = new q.Ik;
                h.Qf(e, 1, null), this.df.push(h), this.to++
            }
        return !0
    },
    XF: function() {},
    UF: function() {}
}), q.vc.create = function(t, i, n) {
    var e = arguments.length,
        h = new q.vc;
    return 0 == e ? h.eM(null, 0) : 2 == e ? h.eM(t, i || 0) : 3 == e && h.Nu(t, i, n), h
}, q.vc.XK = function(t, i, n) {
    var e = new q.vc;
    return e.Nu(t, i, n), e
}, q.jn = q.ca.extend({
    yK: function(t, i) {
        this.Cn[i] = t
    },
    hea: function(t) {
        t && this.Cn.hasOwnProperty(t) && delete this.Cn[t]
    },
    FL: function(t) {
        return this.Cn.hasOwnProperty(t) ? this.Cn[t] : null
    },
    iV: function(t) {
        var i = t.animations;
        if (i) {
            var n = 1;
            if (t = t.properties) {
                n = null != t.format ? parseInt(t.format) : n, t = t.spritesheets;
                for (var e = 0; e < t.length; e++) q.kh.getInstance().lV(t[e])
            }
            switch (n) {
                case 1:
                    this.ET(i);
                    break;
                case 2:
                    this.FT(i);
                    break;
                default:
                    q.d(!1, "Invalid animation format")
            }
        } else q.log("cocos2d: cc.AnimationCache: No animations were found in provided dictionary.")
    },
    M4: function(t) {
        q.d(t, "Invalid texture file name");
        var i = q.Yc.getInstance();
        t = i.ee(t), i = i.mr(t), q.d(i, "cc.AnimationCache: File could not be found"), this.iV(i)
    },
    ET: function(t) {
        var i, n = q.kh.getInstance();
        for (i in t) {
            var e = (h = t[i]).frames,
                h = parseFloat(h.delay) || 0,
                s = null;
            if (e) {
                for (var s = [], r = 0; r < e.length; r++) {
                    var a = n.tj(e[r]);
                    if (a) {
                        var o = new q.Ik;
                        o.Qf(a, 1, null), s.push(o)
                    } else q.log("cocos2d: cc.AnimationCache: Animation '" + i + "' refers to frame '" + e[r] + "' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.")
                }
                0 === s.length ? q.log("cocos2d: cc.AnimationCache: None of the frames for animation '" + i + "' were found in the cc.SpriteFrameCache. Animation is not being added to the Animation Cache.") : (s.length != e.length && q.log("cocos2d: cc.AnimationCache: An animation in your dictionary refers to a frame which is not in the cc.SpriteFrameCache. Some or all of the frames for the animation '" + i + "' may be missing."), s = q.vc.XK(s, h, 1), q.jn.getInstance().yK(s, i))
            } else q.log("cocos2d: cc.AnimationCache: Animation '" + i + "' found in dictionary without any frames - cannot add to animation cache.")
        }
    },
    FT: function(t) {
        var i, n = q.kh.getInstance();
        for (i in t) {
            var e = t[i],
                h = parseInt(e.loops),
                h = isNaN(h) ? 1 : h,
                s = !(!e.restoreOriginalFrame || 1 != e.restoreOriginalFrame),
                r = e.frames;
            if (r) {
                for (var a = [], o = 0; o < r.length; o++) {
                    var c = (l = r[o]).spriteframe,
                        u = n.tj(c);
                    if (u) {
                        var c = parseFloat(l.delayUnits) || 0,
                            l = l.notification,
                            f = new q.Ik;
                        f.Qf(u, c, l), a.push(f)
                    } else q.log("cocos2d: cc.AnimationCache: Animation '" + i + "' refers to frame '" + c + "' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.")
                }
                e = parseFloat(e.delayPerUnit) || 0, (r = new q.vc).Nu(a, e, h), r.ve(s), q.jn.getInstance().yK(r, i)
            } else q.log("cocos2d: CCAnimationCache: Animation '" + i + "' found in dictionary without any frames - cannot add to animation cache.")
        }
    },
    init: function() {
        return this.Cn = {}, !0
    },
    Cn: null
}), q.jn.pZ = function() {
    q.jp && (q.jp.Cn = null, q.jp = null)
}, q.jn.getInstance = function() {
    return null === q.jp && (q.jp = new q.jn, q.jp.init()), q.jp
}, q.jp = null, q.$e = q.ca.extend({
    Hb: null,
    el: null,
    wi: null,
    Mg: !1,
    Fa: null,
    cj: null,
    ej: null,
    H: null,
    Xq: "",
    Wa: !1,
    pC: null,
    ctor: function() {
        this.Hb = q.a(0, 0), this.cj = q.a(0, 0), this.el = q.size(0, 0), this.wi = q.rect(0, 0, 0, 0), this.Mg = !1, this.Fa = q.rect(0, 0, 0, 0), this.ej = q.size(0, 0), this.Xq = "", this.H = null, this.Wa = !1, this.pC = []
    },
    w0: function() {
        return this.Wa
    },
    Lf: function(t, i) {
        this.pC.push({
            Lo: t,
            wl: i
        })
    },
    oi: function() {
        for (var t = this.pC, i = 0, n = t.length; i < n; i++) {
            var e = t[i];
            e.Lo.call(e.wl, this)
        }
        t.length = 0
    },
    e9: function() {
        return this.wi
    },
    lga: function(t) {
        this.wi = t, this.Fa = q.Mj(t)
    },
    waa: function() {
        return this.Mg
    },
    sga: function(t) {
        this.Mg = t
    },
    d9: function() {
        return this.Fa
    },
    kG: function(t) {
        this.Fa = t, this.wi = q.nw(this.Fa)
    },
    OW: function() {
        return q.a(this.cj.x, this.cj.y)
    },
    Yfa: function(t) {
        this.cj = t, this.Hb = q.rn(this.cj)
    },
    F8: function() {
        return this.ej
    },
    $fa: function(t) {
        this.ej = t
    },
    vr: function() {
        return q.size(this.el.width, this.el.height)
    },
    Zfa: function(t) {
        this.el = t
    },
    ia: function() {
        if (this.H) return this.H;
        if ("" !== this.Xq) {
            var t = q.Ka.getInstance().cc(this.Xq);
            return t && (this.Wa = t.md), t
        }
        return null
    },
    ya: function(t) {
        if (this.H != t) {
            var i = t.md;
            this.Wa = i, this.H = t, i || t.Lf(function(t) {
                if (this.Wa = !0, this.Mg) {
                    var i = t.Fc,
                        i = q.$K(i, this.Fa),
                        n = new q.rb;
                    n.Qd(i), n.Bd(), this.ya(n), i = this.Fa, this.kG(q.rect(0, 0, i.width, i.height))
                }
                0 === (i = this.Fa).width && 0 === i.height && (t = t.g(), this.Fa.width = t.width, this.Fa.height = t.height, this.wi = q.nw(this.Fa), this.ej.width = this.wi.width, this.ej.height = this.wi.height, this.el.width = t.width, this.el.height = t.height), this.oi()
            }, this)
        }
    },
    ur: function() {
        return q.a(this.Hb.x, this.Hb.y)
    },
    H_: function(t) {
        this.Hb.x = t.x, this.Hb.y = t.y
    },
    u: function() {
        var t = new q.$e;
        return t.bz(this.Xq, this.wi, this.Mg, this.cj, this.ej), t.ya(this.H), t
    },
    Ey: function() {
        var t = new q.$e;
        return t.bz(this.Xq, this.wi, this.Mg, this.cj, this.ej), t.ya(this.H), t
    },
    copy: function() {
        return this.Ey()
    },
    Ea: function(t, i, n, e, h) {
        return n = n || !1, e = e || q.size(0, 0), h = h || i.size, this.ya(t), this.wi = i, this.Fa = q.Mj(i), this.cj = e, this.Hb = q.rn(e), this.ej = h, this.el = q.Ds(h), this.Mg = n, !0
    },
    bz: function(t, i, n, e, h) {
        return e = e || q.size(0, 0), h = h || i.size, this.H = null, this.Xq = t, this.wi = i, this.Fa = q.Mj(i), this.Mg = n || !1, this.cj = e, this.Hb = q.rn(e), this.ej = h, this.el = q.Ds(h), !0
    }
}), q.$e.create = function(t, i, n, e, h) {
    var s = new q.$e;
    switch (arguments.length) {
        case 2:
            s.bz(t, i);
            break;
        case 5:
            s.bz(t, i, n, e, h);
            break;
        default:
            throw "Argument must be non-nil "
    }
    return s
}, q.$e.nf = function(t, i, n, e, h) {
    var s = new q.$e;
    return s.Ea(t, i, n, e, h), s
}, q.$e.e4 = function(t, i, n, e, h) {
    var s = new q.$e;
    return s.H = t, s.wi = i, s.Fa = q.Mj(i), s.cj = e, s.Hb = q.rn(s.cj), s.ej = h, s.el = q.Ds(s.ej), s.Mg = n, s
}, q.kh = q.ca.extend({
    Gf: null,
    zm: null,
    Ft: null,
    ctor: function() {
        this.Gf = {}, this.zm = {}, this.Ft = []
    },
    Vw: function(t, i) {
        var n = t.metadata,
            e = t.frames,
            h = 0;
        null != n && (h = parseInt(this.xd("format", n))), q.d(0 <= h && 3 >= h, "format is not supported for cc.SpriteFrameCache addSpriteFramesWithDictionary:textureFilename:");
        for (var s in e)
            if ((d = e[s]) && !(n = this.Gf[s])) {
                if (0 == h) {
                    var r = parseFloat(this.xd("x", d)),
                        a = parseFloat(this.xd("y", d)),
                        o = parseFloat(this.xd("width", d)),
                        c = parseFloat(this.xd("height", d)),
                        u = parseFloat(this.xd("offsetX", d)),
                        l = parseFloat(this.xd("offsetY", d)),
                        f = parseInt(this.xd("originalWidth", d)),
                        d = parseInt(this.xd("originalHeight", d));
                    f && d || q.log("cocos2d: WARNING: originalWidth/Height not found on the cc.SpriteFrame. AnchorPoint won't work as expected. Regenrate the .plist"), f = Math.abs(f), d = Math.abs(d), (n = new q.$e).Ea(i, q.rect(r, a, o, c), !1, q.a(u, l), q.size(f, d))
                } else if (1 == h || 2 == h) r = q.AH(this.xd("frame", d)), a = !1, 2 == h && (a = "true" == this.xd("rotated", d)), o = q.zH(this.xd("offset", d)), d = q.dB(this.xd("sourceSize", d)), (n = new q.$e).Ea(i, r, a, o, d);
                else if (3 == h) {
                    var g, r = q.dB(this.xd("spriteSize", d)),
                        a = q.zH(this.xd("spriteOffset", d)),
                        o = q.dB(this.xd("spriteSourceSize", d)),
                        c = q.AH(this.xd("textureRect", d)),
                        u = "true" == this.xd("textureRotated", d),
                        n = d.aliases,
                        l = s.toString();
                    for (g in n) this.zm.hasOwnProperty(n[g]) && q.log("cocos2d: WARNING: an alias with name " + g + " already exists"), this.zm[n[g]] = l;
                    n = new q.$e, d.hasOwnProperty("spriteSize") ? n.Ea(i, q.rect(c.x, c.y, r.width, r.height), u, a, o) : n.Ea(i, r, u, a, o)
                }
                q.Z === q.Jb && n.Mg && n.ia().md && (d = n.ia().Fc, d = q.$K(d, n.Fa), (r = new q.rb).Qd(d), r.Bd(), n.ya(r), d = n.Fa, n.kG(q.rect(0, 0, d.width, d.height))), this.Gf[s] = n
            }
    },
    V4: function(t) {
        q.log("addSpriteFramesWithJson is deprecated, because Json format doesn't support on JSB. Use XML format instead");
        var i = "",
            n = t.metadata;
        n && (i = this.xd("textureFileName", n), i = i.toString()), (i = q.Ka.getInstance().cc(i)) ? this.Vw(t, i) : q.log("cocos2d: cc.SpriteFrameCache: Couldn't load texture")
    },
    lV: function(t, i) {
        var n = q.Yc.getInstance(),
            e = n.ee(t),
            e = n.mr(e);
        switch (arguments.length) {
            case 1:
                if (q.d(t, "plist filename should not be NULL"), !q.wp(this.Ft, t)) {
                    var h = "",
                        s = e.metadata;
                    s && (h = this.xd("textureFileName", s).toString()), "" != h ? h = n.Ny(h, t) : (h = t, h = h.substr(0, h.lastIndexOf(".", h.length)), h += ".png"), (n = q.Ka.getInstance().cc(h)) ? this.Vw(e, n) : q.log("cocos2d: cc.SpriteFrameCache: Couldn't load texture")
                }
                break;
            case 2:
                i instanceof q.rb ? this.Vw(e, i) : (q.d(i, "texture name should not be null"), (n = q.Ka.getInstance().cc(i)) ? this.Vw(e, n) : q.log("cocos2d: cc.SpriteFrameCache: couldn't load texture file. File not found " + i));
                break;
            default:
                throw "Argument must be non-nil "
        }
    },
    nE: function(t, i) {
        this.Gf[i] = t
    },
    lea: function() {
        this.Gf = [], this.zm = [], this.Ft = {}
    },
    kea: function(t) {
        t && (this.zm.hasOwnProperty(t) && delete this.zm[t], this.Gf.hasOwnProperty(t) && delete this.Gf[t], this.Ft = {})
    },
    mea: function(t) {
        var i = (n = q.Yc.getInstance()).ee(t),
            n = n.mr(i);
        this.RT(n), q.wp(this.Ft, t) && q.Zf(t)
    },
    RT: function(t) {
        t = t.frames;
        for (var i in t) this.Gf.hasOwnProperty(i) && delete this.Gf[i]
    },
    nea: function(t) {
        for (var i in this.Gf) {
            var n = this.Gf[i];
            n && n.ia() == t && delete this.Gf[i]
        }
    },
    tj: function(t) {
        var i;
        if (this.Gf.hasOwnProperty(t) && (i = this.Gf[t]), !i) {
            var n;
            this.zm.hasOwnProperty(t) && (n = this.zm[t]), n && (this.Gf.hasOwnProperty(n.toString()) && (i = this.Gf[n.toString()]), i || q.log("cocos2d: cc.SpriteFrameCahce: Frame " + t + " not found"))
        }
        return i
    },
    xd: function(t, i) {
        return i && i.hasOwnProperty(t) ? i[t].toString() : ""
    }
}), q.Mz = null, q.kh.getInstance = function() {
    return q.Mz || (q.Mz = new q.kh), q.Mz
}, q.kh.qZ = function() {
    q.Mz = null
}, q.ps = 29, q.Va = q.r.extend({
    X: null,
    t: null,
    Wd: null,
    mV: function(t, i, n) {
        q.d(null != t, "SpriteBatchNode.addQuadFromSprite():Argument must be non-nil"), q.d(t instanceof q.m, "cc.SpriteBatchNode only supports cc.Sprites as children"), t.qd(i);
        var e = 0,
            h = this.Wd;
        if (h && 0 < h.length)
            for (var s = 0; s < h.length; s++) {
                var r = h[s];
                r && r.mb >= i && ++e
            }
        return this.Wd = q.Qi(h, t, e), q.r.prototype.l.call(this, t, i, n), this.uN(!1), this
    },
    aF: function() {
        return this.X
    },
    mp: function(t) {
        t != this.X && (this.X = t)
    },
    n7: function() {
        return this.Wd
    },
    Fi: function(t, i) {
        var n = q.Ka.getInstance().sv(t);
        return n || (n = q.Ka.getInstance().cc(t)), this.Ea(n, i)
    },
    io: function() {
        this.$w = !0
    },
    init: function(t, i) {
        var n = q.Ka.getInstance().sv(t);
        return n || (n = q.Ka.getInstance().cc(t)), this.Ea(n, i)
    },
    Zy: function() {
        var t = this.X.jd,
            i = Math.floor(4 * (t + 1) / 3);
        q.log("cocos2d: CCSpriteBatchNode: resizing TextureAtlas capacity from " + t + " to " + i + "."), this.X.WF(i) || (q.log("cocos2d: WARNING: Not enough memory to resize the atlas"), q.d(!1, "Not enough memory to resize the atla"))
    },
    CZ: function(t, i) {
        this.removeChild(this.B[t], i)
    },
    mN: function(t, i) {
        var n = t.B;
        if (n && 0 < n.length)
            for (var e = 0; e < n.length; e++) {
                var h = n[e];
                h && 0 > h.jb && (i = this.mN(h, i))
            }
        if (!t == this && (t.qd(i), i++), n && 0 < n.length)
            for (e = 0; e < n.length; e++)(h = n[e]) && 0 <= h.jb && (i = this.mN(h, i));
        return i
    },
    iF: function(t) {
        var i = t.B;
        return i && 0 != i.length ? this.iF(i[i.length - 1]) : t.mb
    },
    lY: function(t) {
        var i = t.B;
        return i && 0 != i.length ? this.lY(i[i.length - 1]) : t.mb
    },
    uV: function(t, i) {
        var n = t.getParent().B,
            e = q.Ev(n, t),
            h = t.getParent() == this,
            s = null;
        return 0 < e && e < q.BI && (s = n[e - 1]), h ? 0 == e ? 0 : this.iF(s) + 1 : 0 == e ? (n = t.getParent(), 0 > i ? n.mb : n.mb + 1) : 0 > s.jb && 0 > i || 0 <= s.jb && 0 <= i ? this.iF(s) + 1 : (n = t.getParent()).mb + 1
    },
    uN: function(t) {
        this.jf = t
    },
    $g: function(t, i) {
        this.t = 1 == arguments.length ? t : {
            src: t,
            sa: i
        }
    },
    Mm: function() {
        return this.t
    },
    gp: function(t, i) {
        q.d(null != t, "SpriteBatchNode.addChild():the child should not be null"), q.d(-1 < this.B.indexOf(t), "SpriteBatchNode.addChild():Child doesn't belong to Sprite"), i !== t.jb && (q.r.prototype.gp.call(this, t, i), this.Ha())
    },
    removeChild: function(t, i) {
        null != t && (q.d(-1 < this.B.indexOf(t), "SpriteBatchNode.addChild():sprite batch node should contain the child"), this.fp(t), q.r.prototype.removeChild.call(this, t, i))
    },
    mT: null,
    Gm: null,
    I4: !1,
    kg: null,
    ctor: null,
    Ui: function(t) {
        q.r.prototype.ctor.call(this), t && this.init(t, q.ps)
    },
    Vi: function(t) {
        q.r.prototype.ctor.call(this), this.mT = new q.ta, t && this.init(t, q.ps)
    },
    AO: null,
    aV: function(t, i) {
        q.d(null != t, "SpriteBatchNode.addQuadFromSprite():Argument must be non-nil"), q.d(t instanceof q.m, "cc.SpriteBatchNode only supports cc.Sprites as children"), t.Ic(this), t.qd(i), t.ug(!0), t.yg()
    },
    bV: function(t, i) {
        q.d(null != t, "SpriteBatchNode.addQuadFromSprite():Argument must be non-nil"), q.d(t instanceof q.m, "cc.SpriteBatchNode only supports cc.Sprites as children");
        for (var n = this.X.jd; i >= n || n == this.X.Ma;) this.Zy();
        t.Ic(this), t.qd(i), t.ug(!0), t.yg()
    },
    Dm: function(t, i) {
        var n = this.Wd,
            e = this.X,
            h = e.qc,
            s = n[t],
            r = q.AB(h[t]);
        n[i].qd(t), n[t] = n[i], e.mA(h[i], t), n[i] = s, e.mA(r, i)
    },
    cz: null,
    XS: function(t, i) {
        q.d(null != t, "Argument must be non-NULL"), q.d(t instanceof q.m, "cc.SpriteBatchNode only supports cc.Sprites as children"), t.Ic(this), t.qd(i), t.ug(!0), t.yg(), this.B = q.Qi(this.B, t, i)
    },
    YS: function(t, i) {
        q.d(null != t, "Argument must be non-NULL"), q.d(t instanceof q.m, "cc.SpriteBatchNode only supports cc.Sprites as children");
        for (var n = this.X; i >= n.jd || n.jd === n.Ma;) this.Zy();
        t.Ic(this), t.qd(i), n.vF(t.ac, i), t.ug(!0), t.yg()
    },
    sK: function(t, i) {
        var n = 0,
            e = t.B;
        e && (n = e.length);
        var h = 0;
        if (0 === n) h = t.mb, t.qd(i), t.bs(0), h != i && this.Dm(h, i), i++;
        else {
            for (h = !0, 0 <= e[0].jb && (h = t.mb, t.qd(i), t.bs(0), h != i && this.Dm(h, i), i++, h = !1), n = 0; n < e.length; n++) {
                var s = e[n];
                h && 0 <= s.jb && (h = t.mb, t.qd(i), t.bs(0), h != i && this.Dm(h, i), i++, h = !1), i = this.sK(s, i)
            }
            h && (h = t.mb, t.qd(i), t.bs(0), h != i && this.Dm(h, i), i++)
        }
        return i
    },
    Mh: function() {
        this.X.ia().tk() || (this.t.src = 770, this.t.sa = 771)
    },
    Ea: null,
    vt: function(t) {
        return this.B = [], this.Wd = [], this.t = new q.Wl(q.Wc, q.Vc), this.Gm = this.kg = t, !0
    },
    wt: function(t, i) {
        return this.B = [], this.Wd = [], this.t = new q.Wl(q.Wc, q.Vc), i = i || q.ps, this.X = new q.wn, this.X.Ea(t, i), this.Mh(), this.xe(q.ud.getInstance().Hc(q.Mk)), !0
    },
    uF: function(t, i) {
        t.Ic(this), t.qd(i), t.ug(!0), (n = this.X).Ma >= n.jd && this.Zy(), n.vF(t.ac, i), this.Wd = q.Qi(this.Wd, t, i);
        var n = i + 1,
            e = this.Wd;
        if (e && 0 < e.length)
            for (; n < e.length; n++) e[n].qd(e[n].mb + 1);
        if ((e = t.B) && 0 < e.length)
            for (n = 0; n < e.length; n++)
                if (e[n]) {
                    var h = this.uV(e[n], e[n].jb);
                    this.uF(e[n], h)
                }
    },
    appendChild: null,
    NR: function(t) {
        this.jf = !0, t.Ic(this), t.ug(!0), this.Wd.push(t), t.qd(this.Wd.length - 1), t = t.B;
        for (var i = 0; i < t.length; i++) this.appendChild(t[i])
    },
    OR: function(t) {
        this.jf = !0, t.Ic(this), t.ug(!0), this.Wd.push(t);
        var i = this.Wd.length - 1;
        t.qd(i);
        var n = this.X;
        for (n.Ma == n.jd && this.Zy(), n.vF(t.ac, i), t = t.B, i = 0; i < t.length; i++) this.appendChild(t[i])
    },
    fp: null,
    ST: function(t) {
        t.Ic(null);
        var i = this.Wd,
            n = q.Ev(i, t);
        if (-1 != n) {
            q.ln(i, n);
            for (var e = i.length; n < e; ++n) {
                var h = i[n];
                h.qd(h.mb - 1)
            }
        }
        if ((t = t.B) && 0 < t.length)
            for (i = 0; i < t.length; i++) t[i] && this.fp(t[i])
    },
    TT: function(t) {
        this.X.tN(t.mb), t.Ic(null);
        var i = this.Wd,
            n = q.Ev(i, t);
        if (-1 != n) {
            q.ln(i, n);
            for (var e = i.length; n < e; ++n) {
                var h = i[n];
                h.qd(h.mb - 1)
            }
        }
        if ((t = t.B) && 0 < t.length)
            for (i = 0; i < t.length; i++) t[i] && this.fp(t[i])
    },
    ia: null,
    AC: function() {
        return this.Gm
    },
    BC: function() {
        return this.X.ia()
    },
    ya: null,
    St: function(t) {
        this.Gm = t;
        for (var i = this.B, n = 0; n < i.length; n++) i[n].ya(t)
    },
    Tt: function(t) {
        this.X.ya(t), this.Mh()
    },
    za: null,
    pu: function(t) {
        var i = t || q.q;
        if (this.zc) {
            i.save(), this.transform(t);
            var n = this.B;
            if (n)
                for (this.qf(), t = 0; t < n.length; t++) n[t] && n[t].za(i);
            i.restore()
        }
    },
    qu: function(t) {
        if (t = t || q.q, this.zc) {
            q.Xo();
            var i = this.vh;
            i && i.Gi() && (i.xy(), this.jA()), this.qf(), this.transform(t), this.xa(t), i && i.Gi() && i.ty(this), q.Wo(), this.bs(0)
        }
    },
    l: null,
    JB: function(t, i, n) {
        null != t && (i = null == i ? t.jb : i, n = null == n ? t.D : n, q.d(null != t, "SpriteBatchNode.addChild():child should not be null"), q.d(t instanceof q.m, "cc.SpriteBatchNode only supports cc.Sprites as children"), q.r.prototype.l.call(this, t, i, n), this.appendChild(t), this.Ha())
    },
    KB: function(t, i, n) {
        null != t && (i = null == i ? t.jb : i, n = null == n ? t.D : n, q.d(null != t, "SpriteBatchNode.addChild():child should not be null"), q.d(t instanceof q.m, "cc.SpriteBatchNode only supports cc.Sprites as children"), q.d(t.ia() == this.X.ia(), "SpriteBatchNode.addChild():cc.Sprite is not using the same texture id"), q.r.prototype.l.call(this, t, i, n), this.appendChild(t), this.Ha())
    },
    ci: null,
    OT: function(t) {
        var i = this.Wd;
        if (i && 0 < i.length)
            for (var n = 0, e = i.length; n < e; n++) i[n] && i[n].Ic(null);
        q.r.prototype.ci.call(this, t), this.Wd = []
    },
    PT: function(t) {
        var i = this.Wd;
        if (i && 0 < i.length)
            for (var n = 0, e = i.length; n < e; n++) i[n] && i[n].Ic(null);
        q.r.prototype.ci.call(this, t), this.Wd = [], this.X.rN()
    },
    qf: null,
    DU: function() {
        if (this.jf) {
            var t, i, n = 0,
                e = this.B,
                h = e.length;
            for (t = 1; t < h; t++) {
                var s = e[t];
                for (i = e[n = t - 1]; 0 <= n && (s.jb < i.jb || s.jb == i.jb && s.Ig < i.Ig);) e[n + 1] = i, n -= 1, i = e[n];
                e[n + 1] = s
            }
            0 < e.length && this.nh(e, q.r.Fg.qf), this.jf = !1
        }
    },
    EU: function() {
        if (this.jf) {
            var t, i, n = this.B,
                e = 0,
                h = n.length;
            for (t = 1; t < h; t++) {
                var s = n[t];
                for (i = n[e = t - 1]; 0 <= e && (s.jb < i.jb || s.jb == i.jb && s.Ig < i.Ig);) n[e + 1] = i, e -= 1, i = n[e];
                n[e + 1] = s
            }
            if (0 < n.length)
                for (this.nh(n, q.r.Fg.qf), t = e = 0; t < n.length; t++) e = this.sK(n[t], e);
            this.jf = !1
        }
    },
    xa: null,
    fg: function() {
        0 !== this.X.Ma && (this.Wb.Fd(), this.Wb.wg(), this.nh(this.B, q.r.Fg.yg), q.Th(this.t.src, this.t.sa), this.X.qL())
    }
}), q.pa.Rc ? (b = q.Va.prototype, b.ctor = q.Va.prototype.Vi, b.AO = q.Va.prototype.bV, b.cz = q.Va.prototype.YS, b.Ea = q.Va.prototype.wt, b.appendChild = q.Va.prototype.OR, b.fp = q.Va.prototype.TT, b.ia = q.Va.prototype.BC, b.ya = q.Va.prototype.Tt, b.za = q.Va.prototype.qu, b.l = q.Va.prototype.KB, b.ci = q.Va.prototype.PT, b.qf = q.Va.prototype.EU, b.xa = q.Va.prototype.fg) : (b = q.Va.prototype, b.ctor = q.Va.prototype.Ui, b.AO = q.Va.prototype.aV, b.cz = q.Va.prototype.XS, b.Ea = q.Va.prototype.vt, b.appendChild = q.Va.prototype.NR, b.fp = q.Va.prototype.ST, b.ia = q.Va.prototype.AC, b.ya = q.Va.prototype.St, b.za = q.Va.prototype.pu, b.ci = q.Va.prototype.OT, b.l = q.Va.prototype.JB, b.qf = q.Va.prototype.DU, b.xa = q.r.prototype.xa), q.Va.create = function(t, i) {
    i = i || q.ps;
    var n = new q.Va;
    return n.init(t, i), n
}, q.Va.nf = function(t, i) {
    i = i || q.ps;
    var n = new q.Va;
    return n.Ea(t, i), n
}, q.he = q.td.extend({
    xb: null,
    WC: null,
    pd: function(t, i, n, e, h) {
        var s, r, a, o, c = t + "";
        q.d(null !== c, "Label must be non-nil"), 2 === arguments.length ? (r = q.Yc.getInstance(), a = r.ee(i), s = a.substr(0, a.lastIndexOf("/")) + "/", o = r.mr(a), q.d(1 == parseInt(o.version, 10), "Unsupported version. Upgrade cocos2d version"), s += o.textureFilename, a = q.ua(), r = parseInt(o.itemWidth, 10) / a, a = parseInt(o.itemHeight, 10) / a, o = String.fromCharCode(parseInt(o.firstChar, 10))) : (s = i, r = n || 0, a = e || 0, o = h || " ");
        var u = null,
            u = s instanceof q.rb ? s : q.Ka.getInstance().cc(s);
        return !!this.Ea(u, r, a, c.length) && (this.WC = o, this.uc(c), !0)
    },
    Qa: function(t) {
        q.td.prototype.Qa.call(this, t), this.js()
    },
    Nm: function() {
        return this.xb
    },
    xa: function(t) {
        q.td.prototype.xa.call(this, t), q.SP && (t = this.g(), t = [q.a(0, 0), q.a(t.width, 0), q.a(t.width, t.height), q.a(0, t.height)], q.se.de(t, 4, !0))
    },
    js: null,
    QU: function() {
        for (var t = this.xb, i = t.length, n = this.ia(), e = this.Yj, h = this.$i, s = q.ua(), r = 0; r < i; r++) {
            var a = t.charCodeAt(r) - this.WC.charCodeAt(0),
                a = q.rect(parseInt(a % this.zq, 10) * s * e, parseInt(a / this.zq, 10) * s * h, e, h),
                o = t.charCodeAt(r),
                c = this.od(r);
            c ? 32 == o ? (c.init(), c.fd(q.rect(0, 0, 10, 10), !1, q.Ec())) : (c.Ea(n, a), c.M(!0), c.w(this.hb)) : (c = new q.m, 32 == o ? (c.init(), c.fd(q.rect(0, 0, 10, 10), !1, q.Ec())) : c.Ea(n, a), this.l(c, 0, r)), c.i(r * e + e / 2, h / 2)
        }
    },
    RU: function() {
        var t = this.xb,
            i = t.length,
            n = this.X,
            e = (h = n.ia()).yl(),
            h = h.xl(),
            s = this.Yj,
            r = this.$i;
        this.vx || (s = this.Yj * q.ua(), r = this.$i * q.ua()), q.d(i <= n.jd, "updateAtlasValues: Invalid String length");
        for (var a = n.qc, o = {
                h: (o = this.gb).h,
                f: o.f,
                c: o.c,
                e: this.hb
            }, c = this.Yj, u = 0; u < i; u++) {
            var l, f = t.charCodeAt(u) - this.WC.charCodeAt(0),
                d = f % this.zq,
                g = 0 | f / this.zq;
            q.$v ? (d = (2 * d * s + 1) / (2 * e), f = d + (2 * s - 2) / (2 * e), g = (2 * g * r + 1) / (2 * h), l = g + (2 * r - 2) / (2 * h)) : (d = d * s / e, f = d + s / e, g = g * r / h, l = g + r / h);
            var p = (v = a[u]).R,
                b = v.N,
                y = v.K,
                v = v.S;
            p.p.Oa = d, p.p.Ia = g, b.p.Oa = f, b.p.Ia = g, y.p.Oa = d, y.p.Ia = l, v.p.Oa = f, v.p.Ia = l, y.k.x = u * c, y.k.y = 0, y.k.z = 0, v.k.x = u * c + c, v.k.y = 0, v.k.z = 0, p.k.x = u * c, p.k.y = this.$i, p.k.z = 0, b.k.x = u * c + c, b.k.y = this.$i, b.k.z = 0, p.s = o, b.s = o, y.s = o, v.s = o
        }
        0 < i && (n.ug(!0), t = n.Ma, i > t && n.VL(i - t))
    },
    uc: null,
    vU: function(t) {
        i = (t = String(t)).length;
        if (this.xb = t, this.Db(q.size(i * this.Yj, this.$i)), this.B)
            for (var i = (t = this.B).length, n = 0; n < i; n++) {
                var e = t[n];
                e && e.M(!1)
            }
        this.js(), this.eo = i
    },
    wU: function(t) {
        var i = (t = String(t)).length;
        i > this.X.Ma && this.X.WF(i), this.xb = t, this.Db(q.size(i * this.Yj, this.$i)), this.js(), this.eo = i
    },
    w: null,
    jo: function(t) {
        if (this.hb !== t) {
            q.td.prototype.w.call(this, t);
            for (var i = this.B, n = 0, e = i.length; n < e; n++) i[n] && i[n].w(t)
        }
    },
    Rt: function(t) {
        this.He !== t && q.td.prototype.w.call(this, t)
    }
}), q.pa.Rc ? (q.he.prototype.js = q.he.prototype.RU, q.he.prototype.uc = q.he.prototype.wU, q.he.prototype.w = q.he.prototype.Rt) : (q.he.prototype.js = q.he.prototype.QU, q.he.prototype.uc = q.he.prototype.vU, q.he.prototype.w = q.he.prototype.jo), q.he.create = function(t, i, n, e, h) {
    var s = new q.he;
    return s && q.he.prototype.pd.apply(s, arguments) ? s : null
}, q.Aa = q.m.extend({
    Df: null,
    om: q.Nk,
    Km: q.yn,
    Id: null,
    vd: 0,
    xb: "",
    yq: !1,
    mm: null,
    aC: null,
    hk: !1,
    wm: null,
    ay: 0,
    Ut: 0,
    jk: !1,
    cu: null,
    Bm: 0,
    ey: null,
    Em: null,
    kJ: null,
    RD: 0,
    SD: 0,
    $n: null,
    ff: !1,
    Ax: null,
    Ct: null,
    ctor: function() {
        q.m.prototype.ctor.call(this), this.Df = q.Ec(), this.om = q.un, this.Km = q.yn, this.fb = !1, this.aC = this.mm = "", this.Id = "Arial", this.hk = this.yq = !1, this.wm = q.Ec(), this.Ut = this.ay = 0, this.jk = !1, this.cu = q.zg(), this.Bm = 0, this.ey = "", this.Em = q.zg(), this.kJ = "rgba(255,255,255,1)", this.SD = this.RD = 0, this.$n = q.Ua(), this.ff = !1, this.Yx()
    },
    init: function() {
        return this.pd(" ", this.Id, this.vd)
    },
    description: function() {
        return "<cc.LabelTTF | FontName =" + this.Id + " FontSize = " + this.vd.toFixed(1) + ">"
    },
    Qa: null,
    Pt: function(t) {
        this.Sz(t, !0)
    },
    Pc: null,
    wS: function() {
        return this.Em
    },
    w: null,
    jo: function(t) {
        this.He !== t && (q.m.prototype.w.call(this, t), this.Yx(), this.ff = !0)
    },
    Yx: function() {
        var t = this.Em;
        this.aC = "rgba(" + t.h + "," + t.f + "," + t.c + ", " + this.hb / 255 + ")", this.jk && (t = this.cu, this.ey = "rgba(" + t.h + "," + t.f + "," + t.c + ", " + this.hb / 255 + ")")
    },
    Nm: function() {
        return this.xb
    },
    U7: function() {
        return this.om
    },
    x$: function() {
        return this.Km
    },
    p7: function() {
        return this.Df
    },
    L7: function() {
        return this.vd
    },
    K7: function() {
        return this.Id
    },
    pd: function(t, i, n, e, h, s) {
        return t += "", q.d(null != t, "cc.LabelTTF.initWithString() label is null"), n = n || 16, e = e || q.size(0, n), h = h || q.un, s = s || q.yn, !!q.m.prototype.init.call(this) && (this.fb = !1, this.Df = q.size(e.width, e.height), this.Id = i || "Arial", this.om = h, this.Km = s, this.vd = n * q.ua(), this.mm = this.vd + "px '" + i + "'", this.Xk = q.Aa.Uw(i, this.vd), this.uc(t), this.Yx(), this.oy(), this.ff = !1, !0)
    },
    pF: null,
    RS: function(t, i) {
        return !!q.m.prototype.init.call(this) && (this.XD(i, !1), this.uc(t), !0)
    },
    SS: function(t, i) {
        return !!q.m.prototype.init.call(this) && (this.xe(q.ud.getInstance().Hc(q.Aa.AR)), this.XD(i, !1), this.uc(t), !0)
    },
    Vga: function(t) {
        t && this.XD(t, !0)
    },
    Z9: function() {
        return this.KT(!1)
    },
    gW: function(t, i, n) {
        !1 === this.hk && (this.hk = !0);
        var e = this.wm;
        (e && e.width != t.width || e.height != t.height) && (e.width = t.width, e.height = t.height), this.ay != i && (this.ay = i), this.Ut != n && (this.Ut = n), this.ff = !0
    },
    T5: function() {
        this.hk && (this.hk = !1, this.ff = !0)
    },
    hW: function(t, i) {
        !1 === this.jk && (this.jk = !0);
        var n = this.cu;
        n.h === t.h && n.f === t.f && n.c === t.c || (this.cu = t, this.ey = "rgba(" + (0 | t.h) + "," + (0 | t.f) + "," + (0 | t.c) + ", 1)"), this.Bm !== i && (this.Bm = i || 0), this.ff = !0
    },
    U5: function() {
        this.jk && (this.jk = !1, this.ff = !0)
    },
    Sz: null,
    jU: function(t) {
        var i = this.Em;
        i.h == t.h && i.f == t.f && i.c == t.c || (this.Em = t, this.Yx(), this.ff = !0)
    },
    kU: function(t) {
        var i = this.Em;
        i.h == t.h && i.f == t.f && i.c == t.c || (this.Em = t, this.kJ = "rgba(" + (0 | t.h) + "," + (0 | t.f) + "," + (0 | t.c) + ", 1)", this.ff = !0)
    },
    XD: function(t, i) {
        t.Du ? (this.Df.width = t.Du.width, this.Df.height = t.Du.height) : (this.Df.width = 0, this.Df.height = 0), this.om = t.AL, this.Km = t.BL, this.Id = t.No, this.vd = t.fontSize || 12, this.mm = this.vd + "px '" + this.Id + "'", this.Xk = q.Aa.Uw(this.Id, this.vd), t.gO && this.gW(t.hO, t.iO, t.shadowBlur, !1), t.rG && this.hW(t.strokeColor, t.oO, !1), this.Sz(t.CL, !1), i && this.oy()
    },
    KT: function(t) {
        var i = new q.xP;
        if (t ? (i.fontSize = this.vd * q.ua(), i.Du = q.aB(this.Df)) : (i.fontSize = this.vd, i.Du = q.size(this.Df.width, this.Df.height)), i.No = this.Id, i.AL = this.om, i.BL = this.Km, this.jk) {
            i.rG = !0;
            var n = this.cu;
            i.strokeColor = new q.oc(n.h, n.f, n.c), i.oO = t ? this.Bm * q.ua() : this.Bm
        } else i.rG = !1;
        return this.hk ? (i.gO = !0, i.shadowBlur = this.Ut, i.iO = this.ay, i.hO = t ? q.aB(this.wm) : q.size(this.wm.width, this.wm.height)) : i.hk = !1, t = this.Em, i.CL = new q.oc(t.h, t.f, t.c), i
    },
    Xk: 18,
    uc: function(t) {
        t = String(t), this.xb != t && (this.xb = t + "", this.ff = !0)
    },
    Cfa: function(t) {
        t !== this.om && (this.om = t, this.ff = !0)
    },
    uha: function(t) {
        t != this.Km && (this.Km = t, this.ff = !0)
    },
    ffa: function(t) {
        t.width == this.Df.width && t.height == this.Df.height || (this.Df = t, this.ff = !0)
    },
    JN: function(t) {
        this.vd !== t && (this.vd = t, this.mm = t + "px '" + this.Id + "'", this.Xk = q.Aa.Uw(this.Id, t), this.ff = !0)
    },
    IN: function(t) {
        this.Id && this.Id != t && (this.Id = t, this.mm = this.vd + "px '" + t + "'", this.Xk = q.Aa.Uw(t, this.vd), this.ff = !0)
    },
    oS: function(t) {
        if (t) {
            var i = this.ja.height,
                n = this.Km,
                e = this.om,
                h = this.Xk;
            t.setTransform(1, 0, 0, 1, 0, i), t.font != this.mm && (t.font = this.mm), t.fillStyle = q.Z === q.Jb ? this.aC : "rgba(255,255,255,1)";
            var s = this.jk;
            s && (t.lineWidth = this.Bm, t.strokeStyle = this.ey);
            var r = !1,
                a = !1;
            if (this.hk) {
                u = this.wm;
                t.shadowColor = "rgba(128,128,128,1)", r = 0 > u.width, a = 0 > u.height, t.shadowOffsetX = u.width, t.shadowOffsetY = -u.height, t.shadowBlur = this.Ut
            }
            t.textBaseline = q.Aa.JU[n], t.textAlign = q.Aa.IU[e];
            var o = 0,
                o = this.RD,
                c = this.SD,
                u = 0,
                l = this.ja.width - o,
                o = e === q.RH ? r ? l + o : l : e === q.Nk ? r ? l / 2 + o : l / 2 : r ? o : 0;
            if (this.yq)
                for (e = this.au.length, n === q.BB ? (u = h + i - h * e, a && (u -= c)) : n === q.EI ? (u = h / 2 + (i - h * e) / 2, a && (u -= c)) : u = a ? u - c / 2 : u + c / 2, n = 0; n < e; n++) a = this.au[n], r = h * n - i + u, s && t.strokeText(a, o, r), t.fillText(a, o, r);
            else u = n === q.BB ? a ? -c : 0 : n === q.yn ? a ? -c / 2 - i : c / 2 - i : a ? -c - i / 2 : -i / 2, s && t.strokeText(this.xb, o, u), t.fillText(this.xb, o, u)
        }
    },
    zS: function() {
        if (this.Ct) return this.Ct;
        if (!this.Ax) {
            var t = document.createElement("canvas"),
                i = new q.rb;
            i.Qd(t), this.ya(i), this.Ax = t
        }
        return this.Ct = this.Ax.getContext("2d")
    },
    dV: function() {
        var t = this.Df.width,
            i = this.Ct,
            n = i.measureText(this.xb).width;
        if (-1 !== this.xb.indexOf("\n") || 0 !== t && n > t && -1 !== this.xb.indexOf(" ")) {
            for (var e = this.au = this.xb.split("\n"), h = this.dT = [], s = 0; s < e.length; s++) {
                if (-1 !== e[s].indexOf(" ") && 0 < t) {
                    var r = t / i.measureText(this.au[s]).width,
                        a = 0 | r * e[s].length + 1,
                        o = a,
                        c = 0;
                    if (1 > r) {
                        do {
                            if (o = e[s].lastIndexOf(" ", o - 1), r = e[s].substring(0, o), c = i.measureText(r).width, -1 === o) {
                                o = e[s].indexOf(" ", a);
                                break
                            }
                        } while (c > t);
                        e.splice(s + 1, 0, e[s].substr(o + 1)), e[s] = r
                    }
                }
                h[s] = c || i.measureText(e[s]).width
            }
            this.yq = !0
        } else this.yq = !1;
        e = i = 0, this.jk && (i = e = 2 * this.Bm), this.hk && (h = this.wm, i += Math.abs(h.width), e += Math.abs(h.height)), t = 0 === t ? this.yq ? q.size(0 | Math.max.apply(Math, this.dT) + i, 0 | this.Xk * this.au.length + e) : q.size(0 | n + i, 0 | this.Xk + e) : 0 === this.Df.height ? this.yq ? q.size(0 | t + i, 0 | this.Xk * this.au.length + e) : q.size(0 | t + i, 0 | this.Xk + e) : q.size(0 | t + i, 0 | this.Df.height + e), this.Db(t), this.RD = i, this.SD = e, this.ic.x = this.ja.width * this.Gg.x, this.ic.y = this.ja.height * this.Gg.y, this.i(this.$n)
    },
    i: function(t, i) {
        var n = this.$n;
        2 == arguments.length ? (n.x = t, n.y = i) : (n.x = t.x, n.y = t.y);
        var e = 0,
            h = 0;
        if (this.jk && (e = h = 2 * this.Bm), this.hk) var s = this.wm,
            e = e + (0 < s.width ? 0 : s.width),
            h = h + (0 < s.height ? 0 : s.height);
        n = q.a(n.x + e, n.y + h), q.m.prototype.i.call(this, n)
    },
    $m: function(t) {
        this.$n.x = t, q.m.prototype.$m.call(this, t)
    },
    Ol: function(t) {
        this.$n.y = t, q.m.prototype.Ol.call(this, t)
    },
    Na: function() {
        return q.a(this.$n.x, this.$n.y)
    },
    oy: function() {
        var t = this.zS(),
            i = this.Ax,
            n = this.ja;
        if (0 === this.xb.length) return i.width = 1, i.height = n.height, this.fd(q.rect(0, 0, 1, n.height)), !0;
        t.font = this.mm, this.dV();
        var e = n.width,
            n = n.height;
        return i.width = e, i.height = n, this.oS(t), this.H.Bd(), this.fd(q.rect(0, 0, e, n)), !0
    },
    za: function(t) {
        this.xb && "" != this.xb && (this.ff && (this.ff = !1, this.oy()), q.m.prototype.za.call(this, t || q.q))
    },
    xa: null,
    fg: function(t) {
        if (this.xb && "" != this.xb) {
            t = t || q.q;
            var i = this.H;
            i && i.md && (this.Wb.Fd(), this.Wb.wg(), q.Th(this.t.src, this.t.sa), q.lq[0] = i, t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, i.ce), q.zd(q.xn), t.bindBuffer(t.ARRAY_BUFFER, this.Sx), this.Lg && (t.bufferData(t.ARRAY_BUFFER, this.ac.sE, t.STATIC_DRAW), this.Lg = !1), t.vertexAttribPointer(q.Zb, 3, t.FLOAT, !1, 24, 0), t.vertexAttribPointer(q.Be, 2, t.FLOAT, !1, 24, 16), t.vertexAttribPointer(q.cg, 4, t.UNSIGNED_BYTE, !0, 24, 12), t.drawArrays(t.TRIANGLE_STRIP, 0, 4)), 1 === q.am ? (t = this.ac, t = [q.a(t.R.k.x, t.R.k.y), q.a(t.K.k.x, t.K.k.y), q.a(t.S.k.x, t.S.k.y), q.a(t.N.k.x, t.N.k.y)], q.se.de(t, 4, !0)) : 2 === q.am && (t = this.bF().size, i = this.PL(), t = [q.a(i.x, i.y), q.a(i.x + t.width, i.y), q.a(i.x + t.width, i.y + t.height), q.a(i.x, i.y + t.height)], q.se.de(t, 4, !0)), q.Rh++
        }
    }
}), q.pa.Rc ? (b = q.Aa.prototype, b.Qa = q.m.prototype.Qa, b.Pc = q.m.prototype.Pc, b.w = q.m.prototype.w, b.pF = q.Aa.prototype.SS, b.Sz = q.Aa.prototype.kU, b.xa = q.Aa.prototype.fg) : (b = q.Aa.prototype, b.Qa = q.Aa.prototype.Pt, b.Pc = q.Aa.prototype.wS, b.w = q.Aa.prototype.jo, b.pF = q.Aa.prototype.RS, b.Sz = q.Aa.prototype.jU, b.xa = q.m.prototype.xa), q.Aa.IU = ["left", "center", "right"], q.Aa.JU = ["top", "middle", "bottom"], q.Aa.create = function(t, i, n, e, h, s) {
    var r = new q.Aa;
    return r.pd(t, i, n, e, h, s) ? r : null
}, q.Aa.I5 = function(t, i) {
    var n = new q.Aa;
    return n && n.pF(t, i) ? n : null
}, q.Aa.AR = q.tR ? q.Mk : q.ZA, q.Aa.An = document.createElement("div"), q.Aa.An.style.fontFamily = "Arial", q.Aa.An.style.position = "absolute", q.Aa.An.style.left = "-100px", q.Aa.An.style.top = "-100px", q.Aa.An.style.lineHeight = "normal", document.body.appendChild(q.Aa.An), q.Aa.Uw = function(t, i) {
    var n = q.Aa.II[t + "." + i];
    if (0 < n) return n;
    var e = q.Aa.An;
    return e.innerHTML = "ajghl~!", e.style.fontFamily = t, e.style.fontSize = i + "px", n = e.clientHeight, q.Aa.II[t + "." + i] = n, e.innerHTML = "", n
}, q.Aa.II = {}, q.a2 = -1, q.VG = function() {
    this.pE = this.key = 0
}, q.wP = function() {
    this.key = 0, this.Ly = new q.YO
}, q.YO = function() {
    this.EE = 0, this.rect = q.rect(0, 0, .1, .1), this.IO = this.DG = this.CG = 0
}, q.ZO = function() {
    this.bottom = this.right = this.top = this.left = 0
}, q.rA = q.ca.extend({
    gr: 0,
    padding: null,
    Eo: null,
    Er: null,
    My: null,
    characterSet: null,
    ctor: function() {
        this.padding = new q.ZO, this.Eo = "", this.Er = new q.VG, this.My = {}, this.characterSet = []
    },
    description: function() {
        return "<cc.BMFontConfiguration | Kernings:" + this.Er.pE + " | Image = " + this.Eo.toString() + ">"
    },
    I6: function() {
        return this.Eo
    },
    Kea: function(t) {
        this.Eo = t
    },
    U6: function() {
        return this.characterSet
    },
    oX: function(t) {
        return q.d(null != t && 0 != t.length, ""), this.characterSet = this.xT(t), null != this.characterSet
    },
    xT: function(t) {
        var i = q.Yc.getInstance().ee(t),
            i = q.Si.getInstance().XE(i);
        if (q.d(i, "cc.BMFontConfiguration._parseConfigFile | Open file error."), !i) return q.log("cocos2d: Error parsing FNTfile " + t), null;
        var n, e = [];
        if (n = /padding+[a-z0-9\-= ",]+/gi, (n = n.exec(i)[0]) && this.AT(n), n = /common lineHeight+[a-z0-9\-= ",]+/gi, (n = n.exec(i)[0]) && this.wT(n), n = /page id=[0-9]+ file="[\w\-\.]+/gi, (n = n.exec(i)[0]) && this.zT(n, t), (n = /chars c+[a-z0-9\-= ",]+/gi).exec(i), n = /char id=\w[a-z0-9\-= ]+/gi, n = i.match(n))
            for (t = 0; t < n.length; t++) {
                var h = new q.wP;
                this.vT(n[t], h.Ly), h.key = h.Ly.EE, this.My[h.key] = h, e.push(h.Ly.EE)
            }
        if (n = /kerning first=\w[a-z0-9\-= ]+/gi, n = i.match(n))
            for (t = 0; t < n.length; t++) this.CT(n[t]);
        return e
    },
    vT: function(t, i) {
        var n = /id=(\d+)/gi.exec(t)[1];
        i.EE = n.toString(), n = /x=([\-\d]+)/gi.exec(t)[1], i.rect.x = parseInt(n), n = /y=([\-\d]+)/gi.exec(t)[1], i.rect.y = parseInt(n), n = /width=([\-\d]+)/gi.exec(t)[1], i.rect.width = parseInt(n), n = /height=([\-\d]+)/gi.exec(t)[1], i.rect.height = parseInt(n), n = /xoffset=([\-\d]+)/gi.exec(t)[1], i.CG = parseInt(n), n = /yoffset=([\-\d]+)/gi.exec(t)[1], i.DG = parseInt(n), n = /xadvance=([\-\d]+)/gi.exec(t)[1], i.IO = parseInt(n)
    },
    AT: function(t) {
        t = /padding=(\d+)[,](\d+)[,](\d+)[,](\d+)/gi.exec(t), this.padding.left = t[1], this.padding.top = t[2], this.padding.right = t[3], this.padding.bottom = t[4], q.log("cocos2d: padding: " + this.padding.left + "," + this.padding.top + "," + this.padding.right + "," + this.padding.bottom)
    },
    wT: function(t) {
        this.gr = parseInt(/lineHeight=(\d+)/gi.exec(t)[1]), q.Z === q.eb && (q.d(parseInt(/scaleW=(\d+)/gi.exec(t)[1]) <= q.Sd.getInstance().Xn, "cc.LabelBMFont: page can't be larger than supported"), q.d(parseInt(/scaleH=(\d+)/gi.exec(t)[1]) <= q.Sd.getInstance().Xn, "cc.LabelBMFont: page can't be larger than supported")), q.d(1 == parseInt(/pages=(\d+)/gi.exec(t)[1]), "cc.BitfontAtlas: only supports 1 page")
    },
    zT: function(t, i) {
        var n;
        n = /id=(\d+)/gi.exec(t)[1], q.d(0 == parseInt(n), "LabelBMFont file could not be found"), n = /file="([a-zA-Z0-9\-\._]+)/gi.exec(t)[1], this.Eo = q.Yc.getInstance().Ny(n, i)
    },
    s4: function() {},
    CT: function(t) {
        var i = /first=([\-\d]+)/gi.exec(t)[1],
            n = parseInt(i),
            i = /second=([\-\d]+)/gi.exec(t)[1],
            e = parseInt(i),
            i = /amount=([\-\d]+)/gi.exec(t)[1];
        (t = new q.VG).pE = parseInt(i), t.key = n << 16 | 65535 & e, this.Er[t.key] = t
    },
    u4: function() {
        this.Er = null
    },
    t4: function() {
        this.My = null
    }
}), q.rA.create = function(t) {
    var i = new q.rA;
    return i.oX(t) ? i : null
}, q.hi = q.Va.extend({
    Ae: !0,
    fb: !1,
    xb: null,
    zf: null,
    st: null,
    xt: "",
    Us: null,
    Lm: 0,
    UC: !1,
    wx: null,
    Vx: null,
    hb: 255,
    hf: 255,
    gb: null,
    bd: null,
    wf: !1,
    xf: !1,
    Wa: !1,
    bK: function(t, i) {
        i ? this.xt = t : this.xb = t;
        var n = this.B;
        if (n)
            for (var e = 0; e < n.length; e++) {
                var h = n[e];
                h && h.M(!1)
            }
        this.Wa && (this.Fy(), i && this.Ck())
    },
    ctor: function() {
        q.Va.prototype.ctor.call(this), this.wx = q.Ua(), this.xt = this.xb = "", this.Us = q.Nk, this.Lm = -1, this.zf = null, this.UC = !1, this.hf = this.hb = 255, this.gb = q.zg(), this.bd = q.zg(), this.xf = this.wf = !0, this.fb = !1, this.st = "", this.Vx = []
    },
    xa: function(t) {
        if (q.Va.prototype.xa.call(this, t), q.TP) {
            t = this.g();
            var i = q.a(0 | -this.ic.x, 0 | -this.ic.y);
            t = [q.a(i.x, i.y), q.a(i.x + t.width, i.y), q.a(i.x + t.width, i.y + t.height), q.a(i.x, i.y + t.height)], q.se.FN(0, 255, 0, 255), q.se.de(t, 4, !0)
        }
    },
    Qa: function(t) {
        if ((this.bd.h != t.h || this.bd.f != t.f || this.bd.c != t.c) && (this.gb = {
                h: t.h,
                f: t.f,
                c: t.c
            }, this.bd = {
                h: t.h,
                f: t.f,
                c: t.c
            }, this.Wa && this.wf)) {
            t = q.zg();
            var i = this.kc;
            i && i.Ae && i.Ru() && (t = i.gb), this.Xf(t)
        }
    },
    Bl: function() {
        return this.fb
    },
    Uf: function(t) {
        if (this.fb = t, t = this.B)
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n && n.Ae && n.Uf(this.fb)
            }
    },
    Ei: function() {
        return this.hf
    },
    ML: function() {
        return this.hb
    },
    w: function(t) {
        if (this.hb = this.hf = t, this.xf) {
            t = 255;
            var i = this.kc;
            i && i.Ae && i.Su() && (t = i.hb), this.Yf(t)
        }
    },
    Yf: function(t) {
        this.hb = this.hf * t / 255, t = this.B;
        for (var i = 0; i < t; i++) {
            var n = t[i];
            q.pa.Rc ? n.Yf(this.hb) : (q.Lb.prototype.Yf.call(n, this.hb), n.Ha())
        }
        this.Pk()
    },
    Su: function() {
        return !1
    },
    Ym: function(t) {
        this.xf = t
    },
    Pc: function() {
        return this.bd
    },
    LL: function() {
        return this.gb
    },
    Xf: function(t) {
        var i = this.gb,
            n = this.bd;
        for (i.h = n.h * t.h / 255, i.f = n.f * t.f / 255, i.c = n.c * t.c / 255, t = this.B, i = 0; i < t.length; i++) n = t[i], q.pa.Rc ? n.Xf(this.gb) : (q.Lb.prototype.Xf.call(n, this.gb), n.Ha());
        this.Pk()
    },
    Pk: function() {
        if (!q.pa.Rc) {
            var t, i = this.ia();
            i && (t = i.Fc) && (i = q.Ka.getInstance().Ry(this.kg.Fc)) && (t instanceof HTMLCanvasElement && !this.Ld ? q.sr(t, i, this.gb, null, t) : (t = q.sr(t, i, this.gb), (i = new q.rb).Qd(t), i.Bd(), this.ya(i)))
        }
    },
    Ru: function() {
        return !1
    },
    Xm: function(t) {
        this.wf = t
    },
    init: function() {
        return this.pd(null, null, null, null, null)
    },
    pd: function(t, i, n, e, h) {
        var s = t || "";
        return q.d(!this.zf, "re-init is no longer supported"), i ? (t = q.NG(i), q.d(t, "cc.LabelBMFont: Impossible to create font. Please check file"), this.zf = t, this.st = i, i = q.Ka.getInstance().cc(this.zf.Eo), this.Wa = t = i.md, t || (this.Wa = !1, i.Lf(function(t) {
            this.Wa = !0, this.Ea(t, s.length), this.uc(s, !0)
        }, this))) : (i = new q.rb, t = new Image, i.Qd(t), this.Wa = !1), !!this.Ea(i, s.length) && (this.Us = e || q.un, this.wx = h || q.Ua(), this.Lm = null == n ? -1 : n, this.hb = this.hf = 255, this.gb = q.zg(), this.bd = q.zg(), this.wf = this.xf = !0, this.ja = q.Ec(), this.v(q.a(.5, .5)), q.Z === q.eb && (n = this.X.ia(), this.fb = n.tk(), this.Vx = new q.m, this.Vx.Ea(n, q.rect(0, 0, 0, 0), !1), this.Vx.Ic(this)), this.uc(s, !0), !0)
    },
    Fy: function() {
        var t = q.Z,
            i = t === q.Jb ? this.ia() : this.X.ia(),
            n = 0,
            e = -1,
            h = 0,
            s = q.Ec(),
            r = 0,
            h = 1,
            a = this.xb ? this.xb.length : 0;
        if (0 !== a) {
            var o, c = this.zf.characterSet;
            for (o = 0; o < a - 1; o++) 10 == this.xb.charCodeAt(o) && h++;
            var u = this.zf.gr * h,
                l = -(this.zf.gr - this.zf.gr * h);
            for (o = 0; o < a; o++) {
                var f = this.xb.charCodeAt(o);
                if (10 === f) n = 0, l -= this.zf.gr;
                else if (null === c[f]) q.log("cc.LabelBMFont: Attempted to use character not defined in this bitmap: " + this.xb[o]);
                else {
                    var h = this.cT(e, f),
                        d = this.zf.My[f];
                    if (d) {
                        var e = d.Ly,
                            g = q.rect(e.rect.x, e.rect.y, e.rect.width, e.rect.height);
                        (g = q.Mj(g)).x += this.wx.x, g.y += this.wx.y, (d = this.od(o)) ? 32 === f && t === q.Jb ? d.fd(g, !1, q.Ec()) : (d.fd(g, !1, g.size), d.M(!0)) : (d = new q.m, 32 === f && t === q.Jb ? d.Ea(i, q.uf(), !1) : d.Ea(i, g, !1), d.$C = !0, this.l(d, 0, o)), d.Uf(this.fb), q.pa.Rc ? (d.Xf(this.gb), d.Yf(this.hb)) : (q.Lb.prototype.Xf.call(d, this.gb), q.Lb.prototype.Yf.call(d, this.hb), d.Ha()), g = q.a(n + e.CG + .5 * e.rect.width + h, l + (this.zf.gr - e.DG) - .5 * g.height * q.ua()), d.i(q.rn(g)), n += e.IO + h, e = f, r < n && (r = n)
                    } else 0 !== f && 10 !== f && q.log("cocos2d: LabelBMFont: character not found " + this.xb[o])
                }
            }
            s.width = r, s.height = u, this.Db(q.Ds(s))
        }
    },
    Vha: function(t) {
        var i = this.B;
        if (i)
            for (var n = 0; n < i.length; n++) {
                var e = i[n];
                e && e.M(!1)
            }
        this.zf && this.Fy(), t || this.Ck()
    },
    Nm: function() {
        return this.xt
    },
    uc: function(t, i) {
        t = String(t), null == i && (i = !0), null != t && "string" == typeof t || (t += ""), this.xt = t, this.bK(t, i)
    },
    Rea: function(t) {
        this.uc(t, !0)
    },
    Ck: function() {
        if (this.uc(this.xt, !1), 0 < this.Lm) {
            var t, i, n = this.xb.length,
                e = [],
                h = [],
                s = 1,
                r = 0,
                a = !1,
                o = !1,
                c = -1,
                u = -1,
                l = 0;
            for (t = 0; t < this.B.length; t++) {
                for (var f = 0; !(i = this.od(t + l + f));) f++;
                if (l += f, i.zc) {
                    if (r >= n) break;
                    var d = this.xb[r];
                    if (o || (u = this.zC(i), o = !0), a || (c = u, a = !0), 10 == d.charCodeAt(0)) {
                        if (h.push("\n"), e = e.concat(h), h.length = 0, a = o = !1, c = u = -1, r += f, s++, r >= n) break;
                        d = this.xb[r], u || (u = this.zC(i), o = !0), c || (c = u, a = !0)
                    }
                    if (32 == d.charCodeAt(0)) h.push(d), e = e.concat(h), h.length = 0, o = !1, u = -1, r++;
                    else if (this.AS(i) - c > this.Lm)
                        if (this.UC) {
                            if (q.BO(h), h.push("\n"), e = e.concat(h), h.length = 0, a = o = !1, c = u = -1, s++, r >= n) break;
                            u || (u = this.zC(i), o = !0), c || (c = u, a = !0), t--
                        } else h.push(d), -1 != e.lastIndexOf(" ") ? q.BO(e) : e = [], 0 < e.length && e.push("\n"), s++, a = !1, c = -1, r++;
                    else h.push(d), r++
                }
            }
            for (t = (e = e.concat(h)).length, i = "", r = 0; r < t; ++r) i += e[r];
            i += String.fromCharCode(0), this.bK(i, !1)
        }
        if (this.Us != q.un)
            for (e = r = 0, n = this.xb.length, h = [], s = 0; s < n; s++)
                if (10 == this.xb[s].charCodeAt(0) || 0 == this.xb[s].charCodeAt(0)) {
                    if (t = 0, a = h.length, !(0 > (i = r + a - 1 + e)) && null != (t = this.od(i))) {
                        switch (t = t.Na().x + t.g().width / 2, o = 0, this.Us) {
                            case q.Nk:
                                o = this.g().width / 2 - t / 2;
                                break;
                            case q.RH:
                                o = this.g().width - t
                        }
                        if (0 != o)
                            for (t = 0; t < a; t++) 0 > (i = r + t + e) || (i = this.od(i)) && i.i(q.Rf(i.Na(), q.a(o, 0)));
                        r += a, e++, h.length = 0
                    }
                } else h.push(this.xb[r])
    },
    Gea: function(t) {
        this.Us = t, this.Ck()
    },
    fO: function(t) {
        this.Lm = t, this.Ck()
    },
    Pfa: function(t) {
        this.UC = t, this.Ck()
    },
    vb: function(t, i) {
        q.r.prototype.vb.call(this, t, i), this.Ck()
    },
    ah: function(t) {
        q.r.prototype.ah.call(this, t), this.Ck()
    },
    bn: function(t) {
        q.r.prototype.bn.call(this, t), this.Ck()
    },
    vfa: function(t) {
        if (null != t && t != this.st) {
            var i = q.NG(t);
            q.d(i, "cc.LabelBMFont: Impossible to create font. Please check file"), this.st = t, this.zf = i, t = q.Ka.getInstance().cc(this.zf.Eo), this.Wa = i = t.md, this.ya(t), q.Z === q.Jb && (this.kg = this.ia()), i ? this.Fy() : t.Lf(function(t) {
                this.Wa = !0, this.ya(t), this.Fy(), this.Pk(), this.Ck()
            }, this)
        }
    },
    J7: function() {
        return this.st
    },
    v: function(t) {
        q.Sr(t, this.Gg) || (q.r.prototype.v.call(this, t), this.Ck())
    },
    Y3: function() {},
    cT: function(t, i) {
        var n = 0;
        if (this.zf.Er) {
            var e = this.zf.Er[(t << 16 | 65535 & i).toString()];
            e && (n = e.pE)
        }
        return n
    },
    zC: function(t) {
        return t.Na().x * this.Ja + t.g().width * this.Ja * t.Qo().x
    },
    AS: function(t) {
        return t.Na().x * this.Ja - t.g().width * this.Ja * t.Qo().x
    }
}), q.hi.create = function(t, i, n, e, h) {
    var s = new q.hi;
    return 0 == arguments.length ? s && s.init() ? s : null : s && s.pd(t, i, n, e, h) ? s : null
}, q.hi.iq = null, q.NG = function(t) {
    q.hi.iq || (q.hi.iq = {});
    var i = q.hi.iq[t];
    return i || (i = q.rA.create(t), q.hi.iq[t] = i), i
}, q.hi.Hz = function() {
    q.vP()
}, q.vP = function() {
    q.hi.iq && (q.hi.iq = null)
}, q.nM = function(t) {
    return 9 <= (t = t.charCodeAt(0)) && 13 >= t || 32 == t || 133 == t || 160 == t || 5760 == t || 8192 <= t && 8202 >= t || 8232 == t || 8233 == t || 8239 == t || 8287 == t || 12288 == t
}, q.BO = function(t) {
    var i = t.length;
    if (!(0 >= i) && (i -= 1, q.nM(t[i]))) {
        for (var n = i - 1; 0 <= n && q.nM(t[n]); --n) i = n;
        q.P0(t, i)
    }
}, q.P0 = function(t, i) {
    var n = t.length;
    i >= n || 0 > i || t.splice(i, n)
}, q.hH = 0, q.iH = 1, q.rQ = 0, q.gH = 1, q.Kj = -1, q.ii = -1, q.qQ = -1, q.Mb = 0, q.Dg = 1, q.Dp = 0, q.LA = 1, q.B2 = 2, q.ji = function(t, i, n, e, h, s, r, a, o, c, u, l) {
    this.qb = t || q.Ua(), this.qG = i || q.Ua(), this.color = n || new q.Jc(0, 0, 0, 1), this.Au = e || new q.Jc(0, 0, 0, 1), this.size = h || 0, this.LE = s || 0, this.rotation = r || 0, this.fL = a || 0, this.en = o || 0, this.cr = c || 0, this.L = u || new q.ji.HA, this.fe = l || new q.ji.IA, this.hM = !1, this.Cu = q.a(0, 0)
}, q.ji.HA = function(t, i, n) {
    this.dir = t || q.Ua(), this.ue = i || 0, this.Wf = n || 0
}, q.ji.IA = function(t, i, n, e) {
    this.tu = t || 0, this.cL = i || 0, this.Kl = n || 0, this.eL = e || 0
}, q.ji.Hw = [q.a(), q.a(), q.a(), q.a()], q.Eb = q.r.extend({
    Mx: "",
    Gb: 0,
    gJ: !1,
    L: null,
    fe: null,
    lD: q.a(0, 0),
    fj: null,
    Kn: 0,
    Jg: 0,
    qa: null,
    mb: 0,
    vo: !1,
    Xw: 0,
    jx: q.hH,
    by: q.gH,
    wq: !1,
    me: 0,
    o: 0,
    Oq: null,
    Kd: null,
    yc: 0,
    Fe: 0,
    Ce: 0,
    De: 0,
    Ne: 0,
    Oe: 0,
    le: 0,
    Nn: 0,
    wa: null,
    Da: null,
    na: null,
    Ca: null,
    no: 0,
    oo: 0,
    On: 0,
    Pn: 0,
    ke: 0,
    Xb: 0,
    H: null,
    t: null,
    fb: !1,
    dk: q.Dp,
    yt: !1,
    Ba: 0,
    qc: null,
    Tb: null,
    Vd: null,
    Ht: null,
    Wa: null,
    ne: null,
    ctor: function() {
        q.r.prototype.ctor.call(this), this.Ba = q.Mb, this.L = new q.Eb.HA, this.fe = new q.Eb.IA, this.t = {
            src: q.Wc,
            sa: q.Vc
        }, this.fj = [], this.Oq = new q.ys(0, 0), this.Kd = new q.ys(0, 0), this.wa = new q.Jc(1, 1, 1, 1), this.Da = new q.Jc(1, 1, 1, 1), this.na = new q.Jc(1, 1, 1, 1), this.Ca = new q.Jc(1, 1, 1, 1), this.Mx = "", this.Gb = 0, this.gJ = !1, this.lD = q.a(0, 0), this.Jg = this.Kn = 0, this.qa = null, this.mb = 0, this.vo = !1, this.Xw = 0, this.jx = q.hH, this.by = q.gH, this.wq = !1, this.Xb = this.ke = this.Pn = this.On = this.oo = this.no = this.Nn = this.le = this.Oe = this.Ne = this.De = this.Ce = this.Fe = this.yc = this.o = this.me = 0, this.H = null, this.fb = !1, this.dk = q.Dp, this.yt = !1, this.Vd = [0, 0], this.qc = [], this.Tb = [], this.Ht = q.uf(), this.Wa = !0, q.Z === q.eb && (this.ne = null)
    },
    kF: function() {
        for (var t = this.Tb, i = 0, n = this.Xb; i < n; ++i) {
            var e = 6 * i,
                h = 4 * i;
            t[e + 0] = h + 0, t[e + 1] = h + 1, t[e + 2] = h + 2, t[e + 5] = h + 1, t[e + 4] = h + 2, t[e + 3] = h + 3
        }
    },
    XL: function(t) {
        var i = q.ua(),
            n = q.rect(t.x * i, t.y * i, t.width * i, t.height * i),
            e = t.width,
            h = t.height;
        if (this.H && (e = this.H.yl(), h = this.H.xl()), q.Z !== q.Jb) {
            q.$v ? (t = (2 * n.x + 1) / (2 * e), i = (2 * n.y + 1) / (2 * h), e = t + (2 * n.width - 2) / (2 * e), n = i + (2 * n.height - 2) / (2 * h)) : (t = n.x / e, i = n.y / h, e = t + n.width / e, n = i + n.height / h);
            var h = n,
                n = i,
                i = h,
                s = 0,
                r = 0;
            for (this.qa ? (h = this.qa.X.qc, s = this.mb, r = this.mb + this.Xb) : (h = this.qc, s = 0, r = this.Xb); s < r; s++) {
                h[s] || (h[s] = q.Ow());
                var a = h[s];
                a.K.p.Oa = t, a.K.p.Ia = i, a.S.p.Oa = e, a.S.p.Ia = i, a.R.p.Oa = t, a.R.p.Ia = n, a.N.p.Oa = e, a.N.p.Ia = n
            }
        }
    },
    qW: function() {
        return this.qa
    },
    Ic: function(t) {
        if (this.qa != t) {
            var i = this.qa;
            if (this.qa = t)
                for (var n = this.fj, e = 0; e < this.Xb; e++) n[e].cr = e;
            t ? i || (this.qa.X.fS(this.qc, this.mb), q.q.deleteBuffer(this.Vd[1])) : (this.MI(), this.kF(), this.ya(i.ia()), this.Nq())
        }
    },
    pW: function() {
        return this.mb
    },
    qd: function(t) {
        this.mb = t
    },
    t7: function() {
        return this.jx
    },
    r_: function(t) {
        this.jx = t
    },
    y9: function() {
        return this.by
    },
    zga: function(t) {
        this.by = t
    },
    Gi: function() {
        return this.wq
    },
    L8: function() {
        return this.me
    },
    dga: function(t) {
        this.me = t
    },
    Pf: function() {
        return this.o
    },
    s_: function(t) {
        this.o = t
    },
    B9: function() {
        return {
            x: this.Oq.x,
            y: this.Oq.y
        }
    },
    Aga: function(t) {
        this.Oq = t
    },
    Q8: function() {
        return {
            x: this.Kd.x,
            y: this.Kd.y
        }
    },
    M_: function(t) {
        this.Kd = t
    },
    h8: function() {
        return this.yc
    },
    Nfa: function(t) {
        this.yc = t
    },
    i8: function() {
        return this.Fe
    },
    Ofa: function(t) {
        this.Fe = t
    },
    F6: function() {
        return this.Ce
    },
    Iea: function(t) {
        this.Ce = t
    },
    G6: function() {
        return this.De
    },
    Jea: function(t) {
        this.De = t
    },
    S7: function() {
        return q.d(this.Ba == q.Mb, "Particle Mode should be Gravity"), this.L.te
    },
    y_: function(t) {
        q.d(this.Ba == q.Mb, "Particle Mode should be Gravity"), this.L.te = t
    },
    TW: function() {
        return q.d(this.Ba == q.Mb, "Particle Mode should be Gravity"), this.L.speed
    },
    ZN: function(t) {
        q.d(this.Ba == q.Mb, "Particle Mode should be Gravity"), this.L.speed = t
    },
    D9: function() {
        return q.d(this.Ba == q.Mb, "Particle Mode should be Gravity"), this.L.Vf
    },
    T_: function(t) {
        q.d(this.Ba == q.Mb, "Particle Mode should be Gravity"), this.L.Vf = t
    },
    U9: function() {
        return q.d(this.Ba == q.Mb, "Particle Mode should be Gravity"), this.L.Wf
    },
    Sga: function(t) {
        q.d(this.Ba == q.Mb, "Particle Mode should be Gravity"), this.L.Wf = t
    },
    V9: function() {
        return q.d(this.Ba == q.Mb, "Particle Mode should be Gravity"), this.L.ei
    },
    Tga: function(t) {
        q.d(this.Ba == q.Mb, "Particle Mode should be Gravity"), this.L.ei = t
    },
    Z8: function() {
        return q.d(this.Ba == q.Mb, "Particle Mode should be Gravity"), this.L.ue
    },
    O_: function(t) {
        q.d(this.Ba == q.Mb, "Particle Mode should be Gravity"), this.L.ue = t
    },
    a9: function() {
        return q.d(this.Ba == q.Mb, "Particle Mode should be Gravity"), this.L.Sf
    },
    P_: function(t) {
        q.d(this.Ba == q.Mb, "Particle Mode should be Gravity"), this.L.Sf = t
    },
    m9: function() {
        return q.d(this.Ba === q.Mb, "Particle Mode should be Gravity"), this.L.Kz
    },
    tga: function(t) {
        q.d(this.Ba === q.Mb, "Particle Mode should be Gravity"), this.L.Kz = t
    },
    H9: function() {
        return q.d(this.Ba == q.Dg, "Particle Mode should be Radius"), this.fe.es
    },
    Gga: function(t) {
        q.d(this.Ba == q.Dg, "Particle Mode should be Radius"), this.fe.es = t
    },
    I9: function() {
        return q.d(this.Ba == q.Dg, "Particle Mode should be Radius"), this.fe.fs
    },
    Hga: function(t) {
        q.d(this.Ba == q.Dg, "Particle Mode should be Radius"), this.fe.fs = t
    },
    z7: function() {
        return q.d(this.Ba == q.Dg, "Particle Mode should be Radius"), this.fe.Ko
    },
    nfa: function(t) {
        q.d(this.Ba == q.Dg, "Particle Mode should be Radius"), this.fe.Ko = t
    },
    A7: function() {
        return q.d(this.Ba == q.Dg, "Particle Mode should be Radius"), this.fe.or
    },
    ofa: function(t) {
        q.d(this.Ba == q.Dg, "Particle Mode should be Radius"), this.fe.or = t
    },
    k9: function() {
        return q.d(this.Ba == q.Dg, "Particle Mode should be Radius"), this.fe.Xr
    },
    qga: function(t) {
        q.d(this.Ba == q.Dg, "Particle Mode should be Radius"), this.fe.Xr = t
    },
    l9: function() {
        return q.d(this.Ba == q.Dg, "Particle Mode should be Radius"), this.fe.Yr
    },
    rga: function(t) {
        q.d(this.Ba == q.Dg, "Particle Mode should be Radius"), this.fe.Yr = t
    },
    vb: function(t, i) {
        this.vo = !0, q.r.prototype.vb.call(this, t, i)
    },
    we: function(t) {
        this.vo = !0, q.r.prototype.we.call(this, t)
    },
    ah: function(t) {
        this.vo = !0, q.r.prototype.ah.call(this, t)
    },
    bn: function(t) {
        this.vo = !0, q.r.prototype.bn.call(this, t)
    },
    J9: function() {
        return this.Ne
    },
    Iga: function(t) {
        this.Ne = t
    },
    K9: function() {
        return this.Oe
    },
    Jga: function(t) {
        this.Oe = t
    },
    B7: function() {
        return this.le
    },
    pfa: function(t) {
        this.le = t
    },
    C7: function() {
        return this.Nn
    },
    qfa: function(t) {
        this.Nn = t
    },
    VW: function() {
        return this.wa
    },
    U_: function(t) {
        t instanceof q.oc && (t = q.By(t)), this.wa = t
    },
    F9: function() {
        return this.Da
    },
    Ega: function(t) {
        t instanceof q.oc && (t = q.By(t)), this.Da = t
    },
    wW: function() {
        return this.na
    },
    v_: function(t) {
        t instanceof q.oc && (t = q.By(t)), this.na = t
    },
    x7: function() {
        return this.Ca
    },
    lfa: function(t) {
        t instanceof q.oc && (t = q.By(t)), this.Ca = t
    },
    L9: function() {
        return this.no
    },
    Kga: function(t) {
        this.no = t
    },
    M9: function() {
        return this.oo
    },
    Lga: function(t) {
        this.oo = t
    },
    D7: function() {
        return this.On
    },
    rfa: function(t) {
        this.On = t
    },
    E7: function() {
        return this.Pn
    },
    sfa: function(t) {
        this.Pn = t
    },
    v7: function() {
        return this.ke
    },
    kfa: function(t) {
        this.ke = t
    },
    i$: function() {
        return this.Xb
    },
    bha: function(t) {
        if (q.Z === q.Jb) this.Xb = 200 > t ? t : 200;
        else {
            if (t > this.Xw) {
                var i = q.Yb.BYTES_PER_ELEMENT;
                this.Tb = new Uint16Array(6 * t);
                for (var n = new ArrayBuffer(t * i), e = [], h = [], s = 0; s < t; s++) e[s] = new q.ji, h[s] = new q.Yb(null, null, null, null, n, s * i);
                if (this.Xb = this.Xw = t, this.qa)
                    for (i = 0; i < t; i++) e[i].cr = i;
                this.fj = e, this.ne = n, this.qc = h, this.kF(), this.Nq(), this.H && (t = this.H.g(), this.XL(q.rect(0, 0, t.width, t.height)))
            } else this.Xb = t;
            this.NZ()
        }
    },
    ia: function() {
        return this.H
    },
    ya: function(t) {
        if (t.md) {
            var i = t.g();
            this.$N(t, q.rect(0, 0, i.width, i.height))
        } else this.Wa = !1, t.Lf(function(t) {
            this.Wa = !0;
            var i = t.g();
            this.$N(t, q.rect(0, 0, i.width, i.height))
        }, this)
    },
    Mm: function() {
        return this.t
    },
    $g: function(t, i) {
        1 == arguments.length ? this.t != t && (this.t = t, this.Mh()) : this.t.src == t && this.t.sa == i || (this.t = {
            src: t,
            sa: i
        }, this.Mh())
    },
    B8: function() {
        return this.fb
    },
    Uf: function(t) {
        this.fb = t
    },
    AX: function() {
        return 770 == this.t.src && 1 == this.t.sa || 1 == this.t.src && 1 == this.t.sa
    },
    zj: function(t) {
        var i = this.t;
        t ? (i.src = 770, i.sa = 1) : q.Z === q.eb && this.H && !this.H.tk() ? (i.src = 770, i.sa = 771) : (i.src = q.Wc, i.sa = q.Vc)
    },
    S8: function() {
        return this.dk
    },
    gga: function(t) {
        this.dk = t
    },
    caa: function() {
        return this.yt
    },
    i_: function(t) {
        this.yt = t
    },
    w7: function() {
        return this.Ba
    },
    t_: function(t) {
        this.Ba = t
    },
    init: function() {
        return this.pb(150)
    },
    Fi: function(t) {
        return this.Mx = t, t = q.Yc.getInstance().mr(this.Mx), q.d(null != t, "Particles: file not found"), this.mX(t, "")
    },
    GL: function() {
        return q.rect(0, 0, q.canvas.width, q.canvas.height)
    },
    mX: function(t) {
        var i = !1,
            n = null,
            n = this.xd,
            e = parseInt(n("maxParticles", t));
        if (this.pb(e)) {
            if (this.Ce = parseFloat(n("angle", t)), this.De = parseFloat(n("angleVariance", t)), this.o = parseFloat(n("duration", t)), this.t.src = parseInt(n("blendFuncSource", t)), this.t.sa = parseInt(n("blendFuncDestination", t)), i = this.wa, i.h = parseFloat(n("startColorRed", t)), i.f = parseFloat(n("startColorGreen", t)), i.c = parseFloat(n("startColorBlue", t)), i.e = parseFloat(n("startColorAlpha", t)), i = this.Da, i.h = parseFloat(n("startColorVarianceRed", t)), i.f = parseFloat(n("startColorVarianceGreen", t)), i.c = parseFloat(n("startColorVarianceBlue", t)), i.e = parseFloat(n("startColorVarianceAlpha", t)), i = this.na, i.h = parseFloat(n("finishColorRed", t)), i.f = parseFloat(n("finishColorGreen", t)), i.c = parseFloat(n("finishColorBlue", t)), i.e = parseFloat(n("finishColorAlpha", t)), i = this.Ca, i.h = parseFloat(n("finishColorVarianceRed", t)), i.f = parseFloat(n("finishColorVarianceGreen", t)), i.c = parseFloat(n("finishColorVarianceBlue", t)), i.e = parseFloat(n("finishColorVarianceAlpha", t)), this.Ne = parseFloat(n("startParticleSize", t)), this.Oe = parseFloat(n("startParticleSizeVariance", t)), this.le = parseFloat(n("finishParticleSize", t)), this.Nn = parseFloat(n("finishParticleSizeVariance", t)), i = parseFloat(n("sourcePositionx", t)), e = parseFloat(n("sourcePositiony", t)), this.i(i, e), this.Kd.x = parseFloat(n("sourcePositionVariancex", t)), this.Kd.y = parseFloat(n("sourcePositionVariancey", t)), this.no = parseFloat(n("rotationStart", t)), this.oo = parseFloat(n("rotationStartVariance", t)), this.On = parseFloat(n("rotationEnd", t)), this.Pn = parseFloat(n("rotationEndVariance", t)), this.Ba = parseInt(n("emitterType", t)), this.Ba == q.Mb) i = this.L, i.te.x = parseFloat(n("gravityx", t)), i.te.y = parseFloat(n("gravityy", t)), i.speed = parseFloat(n("speed", t)), i.Vf = parseFloat(n("speedVariance", t)), e = n("radialAcceleration", t), i.ue = e ? parseFloat(e) : 0, e = n("radialAccelVariance", t), i.Sf = e ? parseFloat(e) : 0, e = n("tangentialAcceleration", t), i.Wf = e ? parseFloat(e) : 0, e = n("tangentialAccelVariance", t), i.ei = e ? parseFloat(e) : 0, e = n("rotationIsDir", t).toLowerCase(), i.Kz = null != e && ("true" === e || "1" === e);
            else {
                if (this.Ba != q.Dg) return q.d(!1, "Invalid emitterType in config file"), !1;
                (i = this.fe).es = parseFloat(n("maxRadius", t)), i.fs = parseFloat(n("maxRadiusVariance", t)), i.Ko = parseFloat(n("minRadius", t)), i.or = 0, i.Xr = parseFloat(n("rotatePerSecond", t)), i.Yr = parseFloat(n("rotatePerSecondVariance", t))
            }
            if (this.yc = parseFloat(n("particleLifespan", t)), this.Fe = parseFloat(n("particleLifespanVariance", t)), this.ke = this.Xb / this.yc, !this.qa)
                if (this.fb = !1, i = n("textureFileName", t), i = q.Yc.getInstance().Ny(i, this.Mx), e = q.Ka.getInstance().sv(i)) this.ya(e);
                else if ((t = n("textureImageData", t)) && 0 == t.length) {
                if (q.d(t, "cc.ParticleSystem.initWithDictory:textureImageData is null"), !(e = q.Ka.getInstance().cc(i))) return !1;
                this.ya(e)
            } else {
                if (!(n = q.yO(t, 1))) return q.log("cc.ParticleSystem: error decoding or ungzipping textureImageData"), !1;
                if ((t = q.FW(n)) !== q.MG && t !== q.bw) return q.log("cc.ParticleSystem: unknown image format with Data"), !1;
                e = document.createElement("canvas"), t === q.bw ? new q.tQ(n).LZ(e) : q.vn.getInstance().VY(n, e), q.Ka.getInstance().LK(i, e), t = q.Ka.getInstance().sv(i), q.d(null != t, "cc.ParticleSystem: error loading the texture"), this.ya(t)
            }
            i = !0
        }
        return i
    },
    pb: function(t) {
        this.Xb = t;
        var i;
        for (this.fj = [], i = 0; i < t; i++) this.fj[i] = new q.ji;
        if (!this.fj) return q.log("Particle system: not enough memory"), !1;
        if (this.Xw = t, this.qa)
            for (i = 0; i < this.Xb; i++) this.fj[i].cr = i;
        if (this.wq = !0, this.t.src = q.Wc, this.t.sa = q.Vc, this.dk = q.Dp, this.Ba = q.Mb, this.vo = this.yt = !1, this.AN(1), q.Z === q.eb) {
            if (!this.MI()) return !1;
            this.kF(), this.Nq(), this.xe(q.ud.getInstance().Hc(q.Mk))
        }
        return !0
    },
    Q5: function() {
        this.zG()
    },
    kV: function() {
        if (this.CX()) return !1;
        var t, i = this.fj;
        return q.Z === q.Jb ? this.me < i.length ? t = i[this.me] : (t = new q.ji, i.push(t)) : t = i[this.me], this.kX(t), ++this.me, !0
    },
    kX: function(t) {
        var i = q.CQ;
        t.en = this.yc + this.Fe * i(), t.en = Math.max(0, t.en), t.qb.x = this.Oq.x + this.Kd.x * i(), t.qb.y = this.Oq.y + this.Kd.y * i();
        var n, e;
        n = this.wa;
        var h = this.Da,
            s = this.na;
        if (e = this.Ca, q.Z === q.Jb ? (n = new q.Jc(q.Od(n.h + h.h * i(), 0, 1), q.Od(n.f + h.f * i(), 0, 1), q.Od(n.c + h.c * i(), 0, 1), q.Od(n.e + h.e * i(), 0, 1)), e = new q.Jc(q.Od(s.h + e.h * i(), 0, 1), q.Od(s.f + e.f * i(), 0, 1), q.Od(s.c + e.c * i(), 0, 1), q.Od(s.e + e.e * i(), 0, 1))) : (n = {
                h: q.Od(n.h + h.h * i(), 0, 1),
                f: q.Od(n.f + h.f * i(), 0, 1),
                c: q.Od(n.c + h.c * i(), 0, 1),
                e: q.Od(n.e + h.e * i(), 0, 1)
            }, e = {
                h: q.Od(s.h + e.h * i(), 0, 1),
                f: q.Od(s.f + e.f * i(), 0, 1),
                c: q.Od(s.c + e.c * i(), 0, 1),
                e: q.Od(s.e + e.e * i(), 0, 1)
            }), t.color = n, h = t.Au, s = t.en, h.h = (e.h - n.h) / s, h.f = (e.f - n.f) / s, h.c = (e.c - n.c) / s, h.e = (e.e - n.e) / s, n = this.Ne + this.Oe * i(), n = Math.max(0, n), t.size = n, this.le === q.ii ? t.LE = 0 : (e = this.le + this.Nn * i(), e = Math.max(0, e), t.LE = (e - n) / s), n = this.no + this.oo * i(), e = this.On + this.Pn * i(), t.rotation = n, t.fL = (e - n) / s, this.dk == q.Dp ? t.qG = this.yd(this.lD) : this.dk == q.LA && (t.qG = this.ea), n = q.Bg(this.Ce + this.De * i()), this.Ba === q.Mb) s = this.L, e = t.L, h = s.speed + s.Vf * i(), e.dir.x = Math.cos(n), e.dir.y = Math.sin(n), q.Pr(e.dir, h), e.ue = s.ue + s.Sf * i(), e.Wf = s.Wf + s.ei * i(), s.Kz && (t.rotation = -q.Gp(q.UY(e.dir)));
        else {
            e = this.fe, t = t.fe;
            var h = e.es + e.fs * i(),
                r = e.Ko + e.or * i();
            t.Kl = h, t.eL = e.Ko === q.qQ ? 0 : (r - h) / s, t.tu = n, t.cL = q.Bg(e.Xr + e.Yr * i())
        }
    },
    r0: function() {
        this.wq = !1, this.Gb = this.o, this.Kn = 0
    },
    NZ: function() {
        this.wq = !0, this.Gb = 0;
        var t = this.fj;
        for (this.Jg = 0; this.Jg < this.me; ++this.Jg) t[this.Jg].en = 0
    },
    CX: function() {
        return this.me >= this.Xb
    },
    M0: function(t, i) {
        var n = null;
        this.qa ? (n = this.qa.X.qc[this.mb + t.cr], this.qa.X.ga = !0) : n = this.qc[this.Jg];
        var e, h, s, r;
        if (this.fb ? (e = 0 | t.color.h * t.color.e * 255, h = 0 | t.color.f * t.color.e * 255, s = 0 | t.color.c * t.color.e * 255) : (e = 0 | 255 * t.color.h, h = 0 | 255 * t.color.f, s = 0 | 255 * t.color.c), r = 0 | 255 * t.color.e, (a = n.K.s).h = e, a.f = h, a.c = s, a.e = r, a = n.S.s, a.h = e, a.f = h, a.c = s, a.e = r, a = n.R.s, a.h = e, a.f = h, a.c = s, a.e = r, a = n.N.s, a.h = e, a.f = h, a.c = s, a.e = r, e = t.size / 2, t.rotation) {
            h = -e, s = -e, r = i.x;
            var a = i.y,
                o = -q.Bg(t.rotation),
                c = Math.cos(o),
                o = Math.sin(o);
            n.K.k.x = h * c - s * o + r, n.K.k.y = h * o + s * c + a, n.S.k.x = e * c - s * o + r, n.S.k.y = e * o + s * c + a, n.R.k.x = h * c - e * o + r, n.R.k.y = h * o + e * c + a, n.N.k.x = e * c - e * o + r, n.N.k.y = e * o + e * c + a
        } else n.K.k.x = i.x - e, n.K.k.y = i.y - e, n.S.k.x = i.x + e, n.S.k.y = i.y - e, n.R.k.x = i.x - e, n.R.k.y = i.y + e, n.N.k.x = i.x + e, n.N.k.y = i.y + e
    },
    hZ: function() {
        if (q.Z === q.eb) {
            var t = q.q;
            t.bindBuffer(t.ARRAY_BUFFER, this.Vd[0]), t.bufferData(t.ARRAY_BUFFER, this.ne, t.DYNAMIC_DRAW)
        }
    },
    update: function(t) {
        if (this.wq && this.ke) {
            var i = 1 / this.ke;
            for (this.me < this.Xb && (this.Kn += t); this.me < this.Xb && this.Kn > i;) this.kV(), this.Kn -= i;
            this.Gb += t, -1 != this.o && this.o < this.Gb && this.r0()
        }
        if (this.Jg = 0, i = q.ji.Hw[0], this.dk == q.Dp ? q.Il(i, this.yd(this.lD)) : this.dk == q.LA && (i.x = this.ea.x, i.y = this.ea.y), this.zc) {
            for (var n = q.ji.Hw[1], e = q.ji.Hw[2], h = q.ji.Hw[3], s = this.fj; this.Jg < this.me;) {
                q.Fz(n), q.Fz(e), q.Fz(h);
                var r = s[this.Jg];
                if (r.en -= t, 0 < r.en) {
                    if (this.Ba == q.Mb) {
                        var a = h,
                            o = n,
                            c = e;
                        r.qb.x || r.qb.y ? (q.Il(o, r.qb), q.SY(o)) : q.Fz(o), q.Il(c, o), q.Pr(o, r.L.ue);
                        var u = c.x;
                        c.x = -c.y, c.y = u, q.Pr(c, r.L.Wf), q.Il(a, o), q.Dz(a, c), q.Dz(a, this.L.te), q.Pr(a, t), q.Dz(r.L.dir, a), q.Il(a, r.L.dir), q.Pr(a, t), q.Dz(r.qb, a)
                    } else a = r.fe, a.tu += a.cL * t, a.Kl += a.eL * t, r.qb.x = -Math.cos(a.tu) * a.Kl, r.qb.y = -Math.sin(a.tu) * a.Kl;
                    this.gJ || (r.color.h += r.Au.h * t, r.color.f += r.Au.f * t, r.color.c += r.Au.c * t, r.color.e += r.Au.e * t, r.hM = !0), r.size += r.LE * t, r.size = Math.max(0, r.size), r.rotation += r.fL * t, a = n, this.dk == q.Dp || this.dk == q.LA ? (o = e, q.Il(o, i), q.cN(o, r.qG), q.Il(a, r.qb), q.cN(a, o)) : q.Il(a, r.qb), this.qa && (a.x += this.ea.x, a.y += this.ea.y), q.Z == q.eb ? this.M0(r, a) : q.Il(r.Cu, a), ++this.Jg
                } else if (r = r.cr, this.Jg !== this.me - 1 && (a = s[this.Jg], s[this.Jg] = s[this.me - 1], s[this.me - 1] = a), this.qa && (this.qa.$V(this.mb + r), s[this.me - 1].cr = r), 0 == --this.me && this.yt) return this.zG(), void this.kc.removeChild(this, !0)
            }
            this.vo = !1
        }
        this.qa || this.hZ()
    },
    O0: function() {
        this.update(0)
    },
    xd: function(t, i) {
        if (i) {
            var n = i[t];
            return null != n ? n : ""
        }
        return ""
    },
    Mh: function() {
        q.d(!this.qa, "Can't change blending functions when the particle is being batched");
        var t = this.H;
        if (t && t instanceof q.rb) {
            this.fb = !1;
            var i = this.t;
            i.src == q.Wc && i.sa == q.Vc && (t.tk() ? this.fb = !0 : (i.src = 770, i.sa = 771))
        }
    },
    u: function() {
        var t = new q.Eb;
        if (t.pb(this.Xb)) {
            t.Ce = this.Ce, t.De = this.De, t.o = this.o, t.t.src = this.t.src, t.t.sa = this.t.sa;
            var i = t.wa,
                n = this.wa;
            i.h = n.h, i.f = n.f, i.c = n.c, i.e = n.e, i = t.Da, n = this.Da, i.h = n.h, i.f = n.f, i.c = n.c, i.e = n.e, i = t.na, n = this.na, i.h = n.h, i.f = n.f, i.c = n.c, i.e = n.e, i = t.Ca, n = this.Ca, i.h = n.h, i.f = n.f, i.c = n.c, i.e = n.e, t.Ne = this.Ne, t.Oe = this.Oe, t.le = this.le, t.Nn = this.Nn, t.i(new q.ys(this.ea.x, this.ea.y)), t.Kd.x = this.Kd.x, t.Kd.y = this.Kd.y, t.no = this.no, t.oo = this.oo, t.On = this.On, t.Pn = this.Pn, t.Ba = this.Ba, this.Ba == q.Mb ? (i = t.L, n = this.L, i.te.x = n.te.x, i.te.y = n.te.y, i.speed = n.speed, i.Vf = n.Vf, i.ue = n.ue, i.Sf = n.Sf, i.Wf = n.Wf, i.ei = n.ei) : this.Ba == q.Dg && (i = t.fe, n = this.fe, i.es = n.es, i.fs = n.fs, i.Ko = n.Ko, i.or = n.or, i.Xr = n.Xr, i.Yr = n.Yr), t.yc = this.yc, t.Fe = this.Fe, t.ke = this.ke, this.qa || (t.fb = this.fb, t.H = this.H)
        }
        return t
    },
    Zm: function(t) {
        q.d(q.Mt(t.OW()), "QuadParticle only supports SpriteFrames with no offsets"), q.Z === q.eb && (this.H && t.ia().ce == this.H.ce || this.ya(t.ia()))
    },
    $N: function(t, i) {
        var n = this.H;
        q.Z === q.eb ? n && t.ce == n.ce || n == t || (this.H = t, this.Mh()) : n && t == n || n == t || (this.H = t, this.Mh()), this.Ht = i, this.XL(i)
    },
    xa: function(t) {
        q.d(!this.qa, "draw should not be called when added to a particleBatchNode"), this.Wa && (q.Z === q.Jb ? this.Wi(t) : this.fg(t), q.Rh++)
    },
    Wi: function(t) {
        (t = t || q.q).save(), t.globalCompositeOperation = this.AX() ? "lighter" : "source-over";
        for (var i = 0; i < this.me; i++) {
            var n = this.fj[i],
                e = 0 | .5 * n.size;
            if (this.jx == q.iH) {
                if ((e = this.H.Fc).width && e.height) {
                    t.save(), t.globalAlpha = n.color.e, t.translate(0 | n.Cu.x, -(0 | n.Cu.y));
                    var h = 4 * Math.floor(n.size / 4),
                        s = this.Ht.width,
                        r = this.Ht.height;
                    t.scale(Math.max(1 / s * h, 1e-6), Math.max(1 / r * h, 1e-6)), n.rotation && t.rotate(q.Bg(n.rotation)), t.translate(-(0 | s / 2), -(0 | r / 2)), n.hM && (h = q.Ka.getInstance().Ry(e)) && (h.uv || (h.uv = document.createElement("canvas"), h.uv.width = e.width, h.uv.height = e.height), q.sr(e, h, n.color, this.Ht, h.uv), e = h.uv), t.drawImage(e, 0, 0), t.restore()
                }
            } else t.save(), t.globalAlpha = n.color.e, t.translate(0 | n.Cu.x, -(0 | n.Cu.y)), this.by == q.rQ ? (n.rotation && t.rotate(q.Bg(n.rotation)), q.se.eW(t, e, n.color)) : q.se.cW(t, e, n.color), t.restore()
        }
        t.restore()
    },
    fg: function(t) {
        this.H && (t = t || q.q, this.Wb.Fd(), this.Wb.wg(), q.Yg(this.H), q.$W(this.t.src, this.t.sa), q.zd(q.xn), t.bindBuffer(t.ARRAY_BUFFER, this.Vd[0]), t.vertexAttribPointer(q.Zb, 3, t.FLOAT, !1, 24, 0), t.vertexAttribPointer(q.cg, 4, t.UNSIGNED_BYTE, !0, 24, 12), t.vertexAttribPointer(q.Be, 2, t.FLOAT, !1, 24, 16), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.Vd[1]), t.drawElements(t.TRIANGLES, 6 * this.Jg, t.UNSIGNED_SHORT, 0))
    },
    yca: function() {
        q.jB || this.Nq()
    },
    z4: function() {},
    Nq: function() {
        if (q.Z != q.Jb) {
            var t = q.q;
            this.Vd[0] = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this.Vd[0]), t.bufferData(t.ARRAY_BUFFER, this.ne, t.DYNAMIC_DRAW), this.Vd[1] = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.Vd[1]), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.Tb, t.STATIC_DRAW)
        }
    },
    MI: function() {
        if (q.Z === q.Jb) return !0;
        q.d(!this.qa, "Memory should not be allocated when not using batchNode");
        var t = q.Yb.BYTES_PER_ELEMENT,
            i = this.Xb,
            n = [];
        this.Tb = new Uint16Array(6 * i);
        for (var e = new ArrayBuffer(t * i), h = 0; h < i; h++) n[h] = new q.Yb(null, null, null, null, e, h * t);
        return n && this.Tb ? (this.qc = n, this.ne = e, !0) : (q.log("cocos2d: Particle system: not enough memory"), !1)
    }
}), q.Eb.create = function(t) {
    var i = new q.Eb;
    return t && "number" != typeof t ? i && i.Fi(t) ? i : null : (t = t || 100, i.r_(q.iH), i.pb(t), i)
}, q.Eb.J5 = function(t) {
    var i = new q.Eb;
    return i && i.pb(t) ? i : null
}, q.Eb.HA = function(t, i, n, e, h, s, r, a) {
    this.te = t || q.Ua(), this.speed = i || 0, this.Vf = n || 0, this.Wf = e || 0, this.ei = h || 0, this.ue = s || 0, this.Sf = r || 0, this.Kz = a || !1
}, q.Eb.IA = function(t, i, n, e, h, s) {
    this.es = t || 0, this.fs = i || 0, this.Ko = n || 0, this.or = e || 0, this.Xr = h || 0, this.Yr = s || 0
}, q.A2 = 500, q.kw = q.r.extend({
    A3: !0,
    t: null,
    X: null,
    ctor: function() {
        q.r.prototype.ctor.call(this), this.t = {
            src: q.Wc,
            sa: q.Vc
        }
    },
    Ea: function(t, i) {
        return this.X = new q.wn, this.X.Ea(t, i), this.B = [], q.Z === q.eb && this.xe(q.ud.getInstance().Hc(q.Mk)), !0
    },
    Fi: function(t, i) {
        var n = q.Ka.getInstance().cc(t);
        return this.Ea(n, i)
    },
    init: function(t, i) {
        var n = q.Ka.getInstance().cc(t);
        return this.Ea(n, i)
    },
    l: function(t, i, n) {
        q.d(null != t, "Argument must be non-NULL"), q.d(t instanceof q.Eb, "cc.ParticleBatchNode only supports cc.ParticleSystem as children"), i = null == i ? t.jb : i, n = null == n ? t.D : n, q.d(t.ia() == this.X.ia(), "cc.ParticleSystem is not using the same texture id"), 0 === this.B.length && this.$g(t.t), q.d(this.t.src == t.t.src && this.t.sa == t.t.sa, "Can't add a ParticleSystem that uses a different blending function"), i = this.IR(t, i, n), n = 0, 0 != i ? (i = this.B[i - 1], n = i.mb + i.Xb) : n = 0, this.uF(t, n), t.Ic(this)
    },
    uF: function(t, i) {
        var n = t.Xb,
            e = this.X,
            h = e.Ma;
        t.qd(i), h + n > e.jd && (this.IS(h + n), e.vL(e.jd - n, n)), t.mb + n != h && e.KM(i, i + n), e.VL(n), this.VD()
    },
    removeChild: function(t, i) {
        if (null != t) {
            q.d(t instanceof q.Eb, "cc.ParticleBatchNode only supports cc.ParticleSystem as children"), q.d(-1 < this.B.indexOf(t), "cc.ParticleBatchNode doesn't contain the sprite. Can't remove it"), q.r.prototype.removeChild.call(this, t, i);
            var n = this.X;
            n.IZ(t.mb, t.Xb), n.vL(n.Ma, t.Xb), t.Ic(null), this.VD()
        }
    },
    gp: function(t, i) {
        if (q.d(null != t, "Child must be non-NULL"), q.d(t instanceof q.Eb, "cc.ParticleBatchNode only supports cc.QuadParticleSystems as children"), q.d(-1 === this.B.indexOf(t), "Child doesn't belong to batch"), i != t.jb) {
            if (1 < this.B.length) {
                var n = this.xS(t, i);
                if (n.TM != n.PM) {
                    q.ln(this.B, n.TM), this.B = q.Qi(this.B, t, n.PM), n = t.mb, this.VD();
                    for (var e = 0, h = this.B, s = 0; s < h.length; s++)
                        if (h[s] == t) {
                            e = t.mb;
                            break
                        }
                    this.X.KM(n, t.Xb, e), t.O0()
                }
            }
            t.Mq(i)
        }
    },
    CZ: function(t, n) {
        this.removeChild(this.B[i], n)
    },
    ci: function(t) {
        for (var i = this.B, n = 0; n < i.length; n++) i[n].Ic(null);
        q.r.prototype.ci.call(this, t), this.X.rN()
    },
    $V: function(t) {
        (t = this.X.qc[t]).S.k.x = t.S.k.y = t.N.k.x = t.N.k.y = t.R.k.x = t.R.k.y = t.K.k.x = t.K.k.y = 0, this.X.gU(!0)
    },
    xa: function() {
        q.Z !== q.Jb && 0 != this.X.Ma && (q.xs(this), q.Th(this.t.src, this.t.sa), this.X.qL())
    },
    ia: function() {
        return this.X.ia()
    },
    ya: function(t) {
        this.X.ya(t);
        var i = this.t;
        t && !t.tk() && i.src == oa.Wc && i.sa == oa.Vc && (i.src = 770, i.sa = 771)
    },
    $g: function(t, i) {
        this.t = 1 == arguments.length ? t : {
            src: t,
            sa: i
        }
    },
    Mm: function() {
        return this.t
    },
    za: function(t) {
        q.Z !== q.Jb && this.zc && (q.Xo(), this.vh && this.vh.Gi() && (this.vh.xy(), this.jA()), this.transform(t), this.xa(t), this.vh && this.vh.Gi() && this.vh.ty(this), q.Wo())
    },
    VD: function() {
        for (var t = 0, i = this.B, n = 0; n < i.length; n++) {
            var e = i[n];
            e.qd(t), t += e.Xb
        }
    },
    IS: function(t) {
        q.log("cocos2d: cc.ParticleBatchNode: resizing TextureAtlas capacity from [" + this.X.jd + "] to [" + t + "]."), this.X.WF(t) || (q.log("cocos2d: WARNING: Not enough memory to resize the atlas"), q.d(!1, "XXX: cc.ParticleBatchNode #increaseAtlasCapacity SHALL handle this assert"))
    },
    ZT: function(t) {
        for (var i = this.B, n = i.length, e = 0; e < n; e++)
            if (i[e].jb > t) return e;
        return n
    },
    xS: function(t, i) {
        for (var n = !1, e = !1, h = 0, s = 0, r = 0, a = this.B, o = a.length, c = 0; c < o; c++) {
            var u = a[c];
            if (u.jb > i && !e && (h = c, e = !0, n && e)) break;
            if (t == u && (s = c, n = !0, e || (r = -1), n && e)) break
        }
        return e || (h = o), {
            PM: h + r,
            TM: s
        }
    },
    IR: function(t, i, n) {
        q.d(null != t, "Argument must be non-nil"), q.d(null == t.getParent(), "child already added. It can't be added again"), this.B || (this.B = []);
        var e = this.ZT(i);
        return this.B = q.Qi(this.B, t, e), t.Qc(n), t.Mq(i), t.lp(this), this.Ke && (t.ba(), t.Yh()), e
    },
    Mh: function() {
        this.X.ia().tk() || (this.t.src = 770, this.t.sa = 771)
    },
    aF: function() {
        return this.X
    },
    mp: function(t) {
        this.X = t
    }
}), q.kw.nf = function(t, i) {
    var n = new q.kw;
    return n && n.Ea(t, i) ? n : null
}, q.kw.create = function(t, i) {
    var n = new q.kw;
    return n && n.init(t, i) ? n : null
}, q.oH = q.Eb.extend({
    init: function() {
        return this.pb(q.Z === q.eb ? 300 : 150)
    },
    pb: function(t) {
        return !!q.Eb.prototype.pb.call(this, t) && (this.o = q.Kj, this.Ba = q.Mb, this.L.te = q.a(0, 0), this.L.ue = 0, this.L.Sf = 0, this.L.speed = 60, this.L.Vf = 20, this.Ce = 90, this.De = 10, t = q.n.getInstance().Y, this.i(t.width / 2, 60), this.Kd = q.a(40, 20), this.yc = 3, this.Fe = .25, this.Ne = 54, this.Oe = 10, this.le = q.ii, this.ke = this.Xb / this.yc, this.wa.h = .76, this.wa.f = .25, this.wa.c = .12, this.wa.e = 1, this.Da.h = 0, this.Da.f = 0, this.Da.c = 0, this.Da.e = 0, this.na.h = 0, this.na.f = 0, this.na.c = 0, this.na.e = 1, this.Ca.h = 0, this.Ca.f = 0, this.Ca.c = 0, this.Ca.e = 0, this.zj(!0), !0)
    }
}), q.oH.create = function() {
    var t = new q.oH;
    return t.init() ? t : null
}, q.pH = q.Eb.extend({
    init: function() {
        return this.pb(q.Z === q.eb ? 1500 : 150)
    },
    pb: function(t) {
        return !!q.Eb.prototype.pb.call(this, t) && (this.o = q.Kj, this.Ba = q.Mb, this.L.te = q.a(0, -90), this.L.ue = 0, this.L.Sf = 0, this.L.speed = 180, this.L.Vf = 50, t = q.n.getInstance().Y, this.i(t.width / 2, t.height / 2), this.Ce = 90, this.De = 20, this.yc = 3.5, this.Fe = 1, this.ke = this.Xb / this.yc, this.wa.h = .5, this.wa.f = .5, this.wa.c = .5, this.wa.e = 1, this.Da.h = .5, this.Da.f = .5, this.Da.c = .5, this.Da.e = .1, this.na.h = .1, this.na.f = .1, this.na.c = .1, this.na.e = .2, this.Ca.h = .1, this.Ca.f = .1, this.Ca.c = .1, this.Ca.e = .2, this.Ne = 8, this.Oe = 2, this.le = q.ii, this.zj(!1), !0)
    }
}), q.pH.create = function() {
    var t = new q.pH;
    return t.init() ? t : null
}, q.xH = q.Eb.extend({
    init: function() {
        return this.pb(q.Z === q.eb ? 350 : 150)
    },
    pb: function(t) {
        return !!q.Eb.prototype.pb.call(this, t) && (this.zj(!0), this.o = q.Kj, this.t_(q.Mb), this.y_(q.a(0, 0)), this.O_(0), this.P_(0), this.ZN(20), this.T_(5), this.Ce = 90, this.De = 360, t = q.n.getInstance().Y, this.i(t.width / 2, t.height / 2), this.M_(q.Ua()), this.yc = 1, this.Fe = .5, this.Ne = 30, this.Oe = 10, this.le = q.ii, this.ke = this.Xb / this.yc, this.wa.h = .76, this.wa.f = .25, this.wa.c = .12, this.wa.e = 1, this.Da.h = 0, this.Da.f = 0, this.Da.c = 0, this.Da.e = 0, this.na.h = 0, this.na.f = 0, this.na.c = 0, this.na.e = 1, this.Ca.h = 0, this.Ca.f = 0, this.Ca.c = 0, this.Ca.e = 0, !0)
    }
}), q.xH.create = function() {
    var t = new q.xH;
    return t.init() ? t : null
}, q.rH = q.Eb.extend({
    init: function() {
        return this.pb(q.Z === q.eb ? 200 : 100)
    },
    pb: function(t) {
        return !!q.Eb.prototype.pb.call(this, t) && (this.o = q.Kj, this.Ba = q.Mb, this.L.te = q.a(0, 0), this.L.speed = 60, this.L.Vf = 10, this.L.ue = -80, this.L.Sf = 0, this.L.Wf = 80, this.L.ei = 0, this.Ce = 90, this.De = 360, t = q.n.getInstance().Y, this.i(t.width / 2, t.height / 2), this.Kd = q.Ua(), this.yc = 4, this.Fe = 1, this.Ne = 37, this.Oe = 10, this.le = q.ii, this.ke = this.Xb / this.yc, this.wa.h = .12, this.wa.f = .25, this.wa.c = .76, this.wa.e = 1, this.Da.h = 0, this.Da.f = 0, this.Da.c = 0, this.Da.e = 0, this.na.h = 0, this.na.f = 0, this.na.c = 0, this.na.e = 1, this.Ca.h = 0, this.Ca.f = 0, this.Ca.c = 0, this.Ca.e = 0, this.zj(!0), !0)
    }
}), q.rH.create = function() {
    var t = new q.rH;
    return t.init() ? t : null
}, q.qH = q.Eb.extend({
    init: function() {
        return this.pb(q.Z === q.eb ? 250 : 100)
    },
    pb: function(t) {
        return !!q.Eb.prototype.pb.call(this, t) && (this.o = q.Kj, this.Ba = q.Mb, this.L.te = q.a(0, 0), this.L.speed = 80, this.L.Vf = 10, this.L.ue = -60, this.L.Sf = 0, this.L.Wf = 15, this.L.ei = 0, this.Ce = 90, this.De = 360, t = q.n.getInstance().Y, this.i(t.width / 2, t.height / 2), this.Kd = q.Ua(), this.yc = 4, this.Fe = 1, this.Ne = 30, this.Oe = 10, this.le = q.ii, this.ke = this.Xb / this.yc, this.wa.h = .5, this.wa.f = .5, this.wa.c = .5, this.wa.e = 1, this.Da.h = .5, this.Da.f = .5, this.Da.c = .5, this.Da.e = .5, this.na.h = 0, this.na.f = 0, this.na.c = 0, this.na.e = 1, this.Ca.h = 0, this.Ca.f = 0, this.Ca.c = 0, this.Ca.e = 0, this.zj(!0), !0)
    }
}), q.qH.create = function() {
    var t = new q.qH;
    return t.init() ? t : null
}, q.sH = q.Eb.extend({
    init: function() {
        return this.pb(q.Z === q.eb ? 150 : 100)
    },
    pb: function(t) {
        return !!q.Eb.prototype.pb.call(this, t) && (this.o = q.Kj, this.Ba = q.Mb, this.L.te = q.a(-200, 200), this.L.speed = 15, this.L.Vf = 5, this.L.ue = 0, this.L.Sf = 0, this.L.Wf = 0, this.L.ei = 0, this.Ce = 90, this.De = 360, t = q.n.getInstance().Y, this.i(t.width / 2, t.height / 2), this.Kd = q.Ua(), this.yc = 2, this.Fe = 1, this.Ne = 60, this.Oe = 10, this.le = q.ii, this.ke = this.Xb / this.yc, this.wa.h = .2, this.wa.f = .4, this.wa.c = .7, this.wa.e = 1, this.Da.h = 0, this.Da.f = 0, this.Da.c = .2, this.Da.e = .1, this.na.h = 0, this.na.f = 0, this.na.c = 0, this.na.e = 1, this.Ca.h = 0, this.Ca.f = 0, this.Ca.c = 0, this.Ca.e = 0, this.zj(!0), !0)
    }
}), q.sH.create = function() {
    var t = new q.sH;
    return t.init() ? t : null
}, q.wH = q.Eb.extend({
    init: function() {
        return this.pb(q.Z === q.eb ? 500 : 100)
    },
    pb: function(t) {
        return !!q.Eb.prototype.pb.call(this, t) && (this.o = q.Kj, this.Ba = q.Mb, this.L.te = q.a(0, 0), this.L.speed = 150, this.L.Vf = 0, this.L.ue = -380, this.L.Sf = 0, this.L.Wf = 45, this.L.ei = 0, this.Ce = 90, this.De = 0, t = q.n.getInstance().Y, this.i(t.width / 2, t.height / 2), this.Kd = q.Ua(), this.yc = 12, this.Fe = 0, this.Ne = 20, this.Oe = 0, this.le = q.ii, this.ke = this.Xb / this.yc, this.wa.h = .5, this.wa.f = .5, this.wa.c = .5, this.wa.e = 1, this.Da.h = .5, this.Da.f = .5, this.Da.c = .5, this.Da.e = 0, this.na.h = .5, this.na.f = .5, this.na.c = .5, this.na.e = 1, this.Ca.h = .5, this.Ca.f = .5, this.Ca.c = .5, this.Ca.e = 0, this.zj(!1), !0)
    }
}), q.wH.create = function() {
    var t = new q.wH;
    return t.init() ? t : null
}, q.nH = q.Eb.extend({
    init: function() {
        return this.pb(q.Z === q.eb ? 700 : 300)
    },
    pb: function(t) {
        return !!q.Eb.prototype.pb.call(this, t) && (this.o = .1, this.Ba = q.Mb, this.L.te = q.a(0, 0), this.L.speed = 70, this.L.Vf = 40, this.L.ue = 0, this.L.Sf = 0, this.L.Wf = 0, this.L.ei = 0, this.Ce = 90, this.De = 360, t = q.n.getInstance().Y, this.i(t.width / 2, t.height / 2), this.Kd = q.Ua(), this.yc = 5, this.Fe = 2, this.Ne = 15, this.Oe = 10, this.le = q.ii, this.ke = this.Xb / this.o, this.wa.h = .7, this.wa.f = .1, this.wa.c = .2, this.wa.e = 1, this.Da.h = .5, this.Da.f = .5, this.Da.c = .5, this.Da.e = 0, this.na.h = .5, this.na.f = .5, this.na.c = .5, this.na.e = 0, this.Ca.h = .5, this.Ca.f = .5, this.Ca.c = .5, this.Ca.e = 0, this.zj(!1), !0)
    }
}), q.nH.create = function() {
    var t = new q.nH;
    return t.init() ? t : null
}, q.uH = q.Eb.extend({
    init: function() {
        return this.pb(q.Z === q.eb ? 200 : 100)
    },
    pb: function(t) {
        return !!q.Eb.prototype.pb.call(this, t) && (this.o = q.Kj, this.Ba = q.Mb, this.L.te = q.a(0, 0), this.L.ue = 0, this.L.Sf = 0, this.L.speed = 25, this.L.Vf = 10, this.Ce = 90, this.De = 5, t = q.n.getInstance().Y, this.i(t.width / 2, 0), this.Kd = q.a(20, 0), this.yc = 4, this.Fe = 1, this.Ne = 60, this.Oe = 10, this.le = q.ii, this.ke = this.Xb / this.yc, this.wa.h = .8, this.wa.f = .8, this.wa.c = .8, this.wa.e = 1, this.Da.h = .02, this.Da.f = .02, this.Da.c = .02, this.Da.e = 0, this.na.h = 0, this.na.f = 0, this.na.c = 0, this.na.e = 1, this.Ca.h = 0, this.Ca.f = 0, this.Ca.c = 0, this.Ca.e = 0, this.zj(!1), !0)
    }
}), q.uH.create = function() {
    var t = new q.uH;
    return t.init() ? t : null
}, q.vH = q.Eb.extend({
    init: function() {
        return this.pb(q.Z === q.eb ? 700 : 250)
    },
    pb: function(t) {
        return !!q.Eb.prototype.pb.call(this, t) && (this.o = q.Kj, this.Ba = q.Mb, this.L.te = q.a(0, -1), this.L.speed = 5, this.L.Vf = 1, this.L.ue = 0, this.L.Sf = 1, this.L.Wf = 0, this.L.ei = 1, t = q.n.getInstance().Y, this.i(t.width / 2, t.height + 10), this.Kd = q.a(t.width / 2, 0), this.Ce = -90, this.De = 5, this.yc = 45, this.Fe = 15, this.Ne = 10, this.Oe = 5, this.le = q.ii, this.ke = 10, this.wa.h = 1, this.wa.f = 1, this.wa.c = 1, this.wa.e = 1, this.Da.h = 0, this.Da.f = 0, this.Da.c = 0, this.Da.e = 0, this.na.h = 1, this.na.f = 1, this.na.c = 1, this.na.e = 0, this.Ca.h = 0, this.Ca.f = 0, this.Ca.c = 0, this.Ca.e = 0, this.zj(!1), !0)
    }
}), q.vH.create = function() {
    var t = new q.vH;
    return t.init() ? t : null
}, q.tH = q.Eb.extend({
    init: function() {
        return this.pb(q.Z === q.eb ? 1e3 : 300)
    },
    pb: function(t) {
        return !!q.Eb.prototype.pb.call(this, t) && (this.o = q.Kj, this.Ba = q.Mb, this.L.te = q.a(10, -10), this.L.ue = 0, this.L.Sf = 1, this.L.Wf = 0, this.L.ei = 1, this.L.speed = 130, this.L.Vf = 30, this.Ce = -90, this.De = 5, t = q.n.getInstance().Y, this.i(t.width / 2, t.height), this.Kd = q.a(t.width / 2, 0), this.yc = 4.5, this.Fe = 0, this.Ne = 4, this.Oe = 2, this.le = q.ii, this.ke = 20, this.wa.h = .7, this.wa.f = .8, this.wa.c = 1, this.wa.e = 1, this.Da.h = 0, this.Da.f = 0, this.Da.c = 0, this.Da.e = 0, this.na.h = .7, this.na.f = .8, this.na.c = 1, this.na.e = .5, this.Ca.h = 0, this.Ca.f = 0, this.Ca.c = 0, this.Ca.e = 0, this.zj(!1), !0)
    }
}), q.tH.create = function() {
    var t = new q.tH;
    return t.init() ? t : null
}, q.bg = q.ca.extend({
    Mc: null,
    Px: q.Ua(),
    Wj: 0,
    ctor: function(t, i, n) {
        this.Mc = q.a(t || 0, i || 0), this.Wj = n || 0
    },
    j8: function() {
        return this.Mc
    },
    T8: function() {
        return this.Px
    },
    KL: function() {
        return q.pf(this.Mc, this.Px)
    },
    V7: function() {
        return this.Wj
    },
    W7: function() {
        return this.Wj
    },
    mG: function(t, i, n) {
        this.Px = this.Mc, this.Mc = q.a(i || 0, n || 0), this.Wj = t
    },
    Pg: function(t, i) {
        this.Px = q.a(t || 0, i || 0)
    }
}), q.YH = q.ca.extend({
    d4: null,
    Lr: function() {
        return !1
    },
    Rm: function() {},
    Nr: function() {},
    Mr: function() {},
    $u: function() {},
    $o: function() {},
    av: function() {},
    VM: function() {},
    Rha: function() {},
    Qha: function() {}
});
q.x3 = q.YH.extend({
    Lr: function() {
        return !1
    },
    Rm: function() {},
    Nr: function() {},
    Mr: function() {}
}), q.i3 = q.YH.extend({
    $u: function() {},
    $o: function() {},
    av: function() {},
    VM: function() {}
}), q.Np = q.ca.extend({
    xc: null,
    lg: 0,
    nq: 0,
    zb: function() {
        return this.xc
    },
    tc: function(t) {
        this.xc = t
    },
    PW: function() {
        return this.lg
    },
    cs: function(t) {
        this.lg = t
    },
    vW: function() {
        return this.nq
    },
    u_: function(t) {
        this.nq = t
    },
    vj: function(t, i) {
        return q.d(null != t, "TouchHandler.initWithDelegate():touch delegate should not be null"), this.xc = t, this.lg = i, this.nq = 0, !0
    }
}), q.Np.create = function(t, i) {
    var n = new q.Np;
    return n && n.vj(t, i), n
}, q.gB = q.Np.extend({
    vj: function(t, i) {
        return q.Np.prototype.vj.call(this, t, i)
    }
}), q.gB.create = function(t, i) {
    var n = new q.gB;
    return n && n.vj(t, i), n
}, q.Gw = q.Np.extend({
    Cm: !1,
    fq: null,
    FX: function() {
        return this.Cm
    },
    Te: function(t) {
        this.Cm = t
    },
    Y6: function() {
        return this.fq
    },
    vj: function(t, i, n) {
        return !!q.Np.prototype.vj.call(this, t, i) && (this.fq = [], this.Cm = n, !0)
    }
}), q.Gw.create = function(t, i, n) {
    var e = new q.Gw;
    return e && e.vj(t, i, n), e
}, q.eR = 1, q.hR = 2, q.gR = 4, q.fR = 8, q.C3 = q.eR | q.hR | q.gR | q.fR, q.Cw = 0, q.Ew = 1, q.Dw = 2, q.mB = 3, q.B3 = 4, q.CM = function(t, i) {
    return t.lg > i.lg
}, q.Lw = function(t) {
    this.type = t
}, q.fa = q.ca.extend({
    cl: !1,
    If: null,
    Hf: null,
    qi: !1,
    ll: !1,
    Im: !1,
    wh: null,
    gg: null,
    my: !1,
    Uk: !1,
    HS: [new q.Lw(q.Cw), new q.Lw(q.Ew), new q.Lw(q.Dw), new q.Lw(q.mB)],
    init: function() {
        return this.Uk = !0, this.If = [], this.Hf = [], this.wh = [], this.gg = [], this.cl = this.qi = this.my = this.ll = this.Im = !1, q.fa.vZ(), !0
    },
    Qt: function(t) {
        this.cl = t
    },
    CS: function() {
        return this.cl
    },
    faa: function() {
        return this.Uk
    },
    Qz: function(t) {
        this.Uk = t
    },
    KR: function(t, i) {
        var n = q.gB.create(t, i || 0);
        this.qi ? -1 != this.gg.indexOf(t) ? q.Zf(this.gg, t) : (this.wh.push(n), this.ll = !0) : this.Hf = this.pr(n, this.Hf)
    },
    LR: function(t, i, n) {
        i = q.Gw.create(t, i, n), this.qi ? -1 != this.gg.indexOf(t) ? q.Zf(this.gg, t) : (this.wh.push(i), this.ll = !0) : this.If = this.pr(i, this.If)
    },
    pr: function(t, i) {
        for (var n, e = 0, h = 0; h < i.length; h++)
            if ((n = i[h]) && (n.lg < t.lg && ++e, n.zb() == t.zb())) return q.d(0, "TouchDispatcher.forceAddHandler()"), i;
        return q.Qi(i, t, e)
    },
    EL: function() {
        this.Hf.length = 0, this.If.length = 0
    },
    QT: function(t) {
        if (null != t)
            if (this.qi) {
                var i = this.wL(this.wh, t);
                i ? q.Zf(this.wh, i) : (this.gg.push(t), this.Im = !0)
            } else this.Eu(t)
    },
    AZ: function() {
        this.qi ? this.my = !0 : this.EL()
    },
    cs: function(t, i) {
        q.d(null != i, "TouchDispatcher.setPriority():Arguments is null");
        var n = this.wL(i);
        q.d(null != n, "TouchDispatcher.setPriority():Cant find TouchHandler"), n.lg != t && (n.cs(t), this.lN(this.If), this.lN(this.Hf))
    },
    touches: function(t, i, n) {
        q.d(0 <= n && 4 > n, "TouchDispatcher.touches()"), this.qi = !0;
        var e = this.If.length,
            h = this.Hf.length,
            s = e && h,
            r = s ? t.slice() : t,
            a = this.HS[n];
        if (0 < e)
            for (var o, c, u = 0; u < t.length; u++)
                for (var e = t[u], l = 0; l < this.If.length && (o = this.If[l]); l++) {
                    if (c = !1, n == q.Cw) o.zb().Lr && (c = o.zb().Lr(e, i)) && o.fq.push(e);
                    else if (0 < o.fq.length) switch (c = !0, a.type) {
                        case q.Ew:
                            q.pa.sg ? o.zb().Rm && o.zb().Rm(e, i) : this.cl && o.zb().Rm && o.zb().Rm(e, i);
                            break;
                        case q.Dw:
                            o.zb().Nr && o.zb().Nr(e, i), o.fq.length = 0;
                            break;
                        case q.mB:
                            o.zb().Mr && o.zb().Mr(e, i), o.fq.length = 0
                    }
                    if (c && o.Cm) {
                        s && q.Zf(r, e);
                        break
                    }
                }
        if (0 < h)
            for (u = 0; u < this.Hf.length && (o = this.Hf[u]); u++) switch (a.type) {
                case q.Cw:
                    0 < r.length && o.zb().$u && o.zb().$u(r, i);
                    break;
                case q.Ew:
                    0 < r.length && (q.pa.sg ? o.zb().$o && o.zb().$o(r, i) : this.cl && o.zb().$o && o.zb().$o(r, i));
                    break;
                case q.Dw:
                    o.zb().av && o.zb().av(r, i)
            }
        if (this.qi = !1, this.Im) {
            for (this.Im = !1, u = 0; u < this.gg.length; u++) this.Eu(this.gg[u]);
            this.gg.length = 0
        }
        if (this.ll) {
            for (this.ll = !1, u = 0; u < this.wh.length && (o = this.wh[u]); u++) o instanceof q.Gw ? this.If = this.pr(o, this.If) : this.Hf = this.pr(o, this.Hf);
            this.wh.length = 0
        }
        this.my && (this.my = !1, this.EL())
    },
    hA: function(t, i) {
        this.Uk && this.touches(t, i, q.Cw)
    },
    iA: function(t, i) {
        this.Uk && this.touches(t, i, q.Ew)
    },
    vv: function(t, i) {
        this.Uk && this.touches(t, i, q.Dw)
    },
    wG: function(t, i) {
        this.Uk && this.touches(t, i, q.mB)
    },
    wL: function(t, i) {
        switch (arguments.length) {
            case 1:
                i = arguments[0];
                for (var n = 0; n < this.If.length; n++)
                    if (this.If[n].zb() == i) return this.If[n];
                for (n = 0; n < this.Hf.length; n++)
                    if (this.Hf[n].zb() == i) return this.Hf[n];
                return null;
            case 2:
                for (q.d(null != t && null != i, "TouchDispatcher.findHandler():Arguments is null"), n = 0; n < t.length; n++)
                    if (t[n].zb() == i) return t[n];
                return null;
            default:
                throw "Argument must be non-nil "
        }
    },
    Eu: function(t) {
        for (var i, n = 0; n < this.Hf.length; n++)
            if ((i = this.Hf[n]) && i.zb() == t) {
                q.Zf(this.Hf, i);
                break
            }
        for (n = 0; n < this.If.length; n++)
            if ((i = this.If[n]) && i.zb() == t) {
                q.Zf(this.If, i);
                break
            }
    },
    lN: function(t) {
        t.sort(q.CM)
    }
}), q.fa.Bb = q.a(0, 0), q.fa.lM = !1, q.sk = function(t) {
    var i = document.documentElement,
        n = window,
        e = null;
    return {
        left: (e = "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : t instanceof HTMLCanvasElement ? {
            left: 0,
            top: 0,
            width: t.width,
            height: t.height
        } : {
            left: 0,
            top: 0,
            width: parseInt(t.style.width),
            height: parseInt(t.style.height)
        }).left + n.pageXOffset - i.clientLeft,
        top: e.top + n.pageYOffset - i.clientTop,
        width: e.width,
        height: e.height
    }
}, q.AQ = function(t, i) {
    var n, e, h = q.sk(t);
    null != i.pageX ? (n = i.pageX, e = i.pageY) : (h.left -= document.body.scrollLeft, h.top -= document.body.scrollTop, n = i.clientX, e = i.clientY), n = q.Dc.getInstance().ul(n, e, h), (h = new q.bg(n.x, n.y)).Pg(q.fa.Bb.x, q.fa.Bb.y), q.fa.Bb.x = n.x, q.fa.Bb.y = n.y, (n = []).push(h), q.Dc.getInstance().vv(n, null)
}, q.fa.vZ = function() {
    var t = q.canvas;
    if (!q.fa.lM) {
        if (q.pa.sg)
            if (window.navigator.msPointerEnabled) {
                var i, n = {
                    MSPointerDown: "touchesBegan",
                    MSPointerMove: "touchesMoved",
                    MSPointerUp: "touchesEnded",
                    MSPointerCancel: "touchesCancelled"
                };
                for (i in n) ! function(i, n) {
                    t.addEventListener(i, function(i) {
                        var e = q.sk(t);
                        e.left -= document.body.scrollLeft, e.top -= document.body.scrollTop;
                        var h, s;
                        h = i.clientX, s = i.clientY, h = q.Dc.getInstance().ul(h, s, e), (e = new q.bg(h.x, h.y)).Pg(q.fa.Bb.x, q.fa.Bb.y), q.fa.Bb.x = h.x, q.fa.Bb.y = h.y, q.n.getInstance().Pe[n]([e], null), i.stopPropagation(), i.preventDefault()
                    }, !1)
                }(i, n[i])
            } else t.addEventListener("touchstart", function(i) {
                if (i.changedTouches) {
                    var n = [],
                        e = q.sk(t);
                    e.left -= document.body.scrollLeft, e.top -= document.body.scrollTop;
                    for (var h, s, r, a = i.changedTouches.length, o = 0; o < a; o++)(h = i.changedTouches[o]) && (s = h.clientX, r = h.clientY, s = q.Dc.getInstance().ul(s, r, e), h.hasOwnProperty("identifier") ? (h = new q.bg(s.x, s.y, h.identifier), r = q.fa.ox(h).Mc, h.Pg(r.x, r.y), q.fa.ZJ(h)) : (h = new q.bg(s.x, s.y)).Pg(q.fa.Bb.x, q.fa.Bb.y), q.fa.Bb.x = s.x, q.fa.Bb.y = s.y, n.push(h));
                    q.Dc.getInstance().hA(n, null), i.stopPropagation(), i.preventDefault()
                }
            }, !1), t.addEventListener("touchmove", function(i) {
                if (i.changedTouches) {
                    var n = [],
                        e = q.sk(t);
                    e.left -= document.body.scrollLeft, e.top -= document.body.scrollTop;
                    for (var h, s, r, a = i.changedTouches.length, o = 0; o < a; o++)(h = i.changedTouches[o]) && (s = h.clientX, r = h.clientY, s = q.Dc.getInstance().ul(s, r, e), h.hasOwnProperty("identifier") ? (h = new q.bg(s.x, s.y, h.identifier), r = q.fa.ox(h).Mc, h.Pg(r.x, r.y), q.fa.ZJ(h)) : (h = new q.bg(s.x, s.y)).Pg(q.fa.Bb.x, q.fa.Bb.y), q.fa.Bb.x = s.x, q.fa.Bb.y = s.y, n.push(h));
                    q.Dc.getInstance().iA(n, null), i.stopPropagation(), i.preventDefault()
                }
            }, !1), t.addEventListener("touchend", function(i) {
                if (i.changedTouches) {
                    var n = [],
                        e = q.sk(t);
                    e.left -= document.body.scrollLeft, e.top -= document.body.scrollTop;
                    for (var h, s, r, a = i.changedTouches.length, o = 0; o < a; o++)(h = i.changedTouches[o]) && (s = h.clientX, r = h.clientY, s = q.Dc.getInstance().ul(s, r, e), h.hasOwnProperty("identifier") ? (h = new q.bg(s.x, s.y, h.identifier), r = q.fa.ox(h).Mc, h.Pg(r.x, r.y), q.fa.fJ(h)) : (h = new q.bg(s.x, s.y)).Pg(q.fa.Bb.x, q.fa.Bb.y), q.fa.Bb.x = s.x, q.fa.Bb.y = s.y, n.push(h));
                    q.Dc.getInstance().vv(n, null), i.stopPropagation(), i.preventDefault()
                }
            }, !1), t.addEventListener("touchcancel", function(i) {
                if (i.changedTouches) {
                    var n = [],
                        e = q.sk(t);
                    e.left -= document.body.scrollLeft, e.top -= document.body.scrollTop;
                    for (var h, s, r, a = i.changedTouches.length, o = 0; o < a; o++)(h = i.changedTouches[o]) && (s = h.clientX, r = h.clientY, s = q.Dc.getInstance().ul(s, r, e), h.hasOwnProperty("identifier") ? (h = new q.bg(s.x, s.y, h.identifier), r = q.fa.ox(h).Mc, h.Pg(r.x, r.y), q.fa.fJ(h)) : (h = new q.bg(s.x, s.y)).Pg(q.fa.Bb.x, q.fa.Bb.y), q.fa.Bb.x = s.x, q.fa.Bb.y = s.y, n.push(h));
                    q.Dc.getInstance().wG(n, null), i.stopPropagation(), i.preventDefault()
                }
            }, !1);
        else window.addEventListener("mousedown", function() {
            q.n.getInstance().Pe.Qt(!0)
        }), window.addEventListener("mouseup", function(i) {
            q.n.getInstance().Pe.Qt(!1);
            var n, e = q.sk(t);
            null != i.pageX ? (n = i.pageX, i = i.pageY) : (e.left -= document.body.scrollLeft, e.top -= document.body.scrollTop, n = i.clientX, i = i.clientY), q.tg(new q.$l(e.left, e.top, e.width, e.height), q.a(n, i)) || (n = q.Dc.getInstance().ul(n, i, e), (e = new q.bg(n.x, n.y)).Pg(q.fa.Bb.x, q.fa.Bb.y), q.fa.Bb.x = n.x, q.fa.Bb.y = n.y, (n = []).push(e), q.Dc.getInstance().vv(n, null))
        }), t.addEventListener("mousedown", function(i) {
            var n, e = q.sk(t);
            null != i.pageX ? (n = i.pageX, i = i.pageY) : (e.left -= document.body.scrollLeft, e.top -= document.body.scrollTop, n = i.clientX, i = i.clientY), n = q.Dc.getInstance().ul(n, i, e), (e = new q.bg(n.x, n.y)).Pg(q.fa.Bb.x, q.fa.Bb.y), q.fa.Bb.x = n.x, q.fa.Bb.y = n.y, (n = []).push(e), q.Dc.getInstance().hA(n, null)
        }), t.addEventListener("mouseup", function(i) {
            q.AQ(t, i)
        }), t.addEventListener("mousemove", function(i) {
            var n, e = q.sk(t);
            null != i.pageX ? (n = i.pageX, i = i.pageY) : (e.left -= document.body.scrollLeft, e.top -= document.body.scrollTop, n = i.clientX, i = i.clientY), n = q.Dc.getInstance().ul(n, i, e), (e = new q.bg(n.x, n.y)).Pg(q.fa.Bb.x, q.fa.Bb.y), q.fa.Bb.x = n.x, q.fa.Bb.y = n.y, (n = []).push(e), q.Dc.getInstance().iA(n, null)
        });
        q.fa.lM = !0
    }
}, q.fa.ox = function(t) {
    for (var i = null, n = q.fa.mD, e = t.Wj, h = n.length - 1; 0 <= h; h--)
        if (n[h].Wj == e) {
            i = n[h];
            break
        }
    return i || (i = t), i
}, q.fa.ZJ = function(t) {
    for (var i = !1, n = q.fa.mD, e = t.Wj, h = n.length - 1; 0 <= h; h--)
        if (n[h].Wj == e) {
            n[h] = t, i = !0;
            break
        }
    i || (50 >= n.length ? n.push(t) : (n[q.fa.nD] = t, q.fa.nD = (q.fa.nD + 1) % 50))
}, q.fa.fJ = function(t) {
    var i, n = q.fa.mD;
    for (i = t.Wj, t = n.length - 1; 0 <= t; t--)
        if (n[t].Wj == i) {
            i = n.pop(), t != n.length && (n[t] = i);
            break
        }
}, q.fa.mD = [], q.fa.nD = 0, q.TF = function(t, i, n) {
    q.n.getInstance().Pe.LR(n, t, i)
}, q.wZ = function(t, i) {
    q.n.getInstance().Pe.KR(t, i)
}, q.kA = function(t) {
    q.n.getInstance().Pe.QT(t)
}, q.e2 = 1, q.j2 = 2, q.f2 = 4, q.k2 = 8, q.M2 = 16, q.N2 = 32, q.O2 = 64, q.x2 = 128, q.y2 = 256, q.z2 = 512, q.X2 = 1024, q.g2 = 2048, q.h2 = 4096, q.mQ = 0, q.i2 = 1, q.aH = 2, q.m2 = q.ca.extend({
    BY: function() {
        return !1
    },
    CY: function() {
        return !1
    },
    FY: function() {
        return !1
    },
    GY: function() {
        return !1
    },
    KY: function() {
        return !1
    },
    LY: function() {
        return !1
    },
    MY: function() {
        return !1
    },
    HY: function() {
        return !1
    },
    IY: function() {
        return !1
    },
    JY: function() {
        return !1
    },
    NY: function() {
        return !1
    },
    DY: function() {
        return !1
    },
    EY: function() {
        return !1
    }
}), q.nQ = q.bg.extend({
    xK: 0,
    TI: q.mQ,
    A$: function() {
        return this.xK
    },
    eO: function(t) {
        this.xK = t
    },
    P6: function() {
        return this.TI
    },
    k_: function(t) {
        this.TI = t
    }
}), q.JA = q.ca.extend({
    xc: null,
    lg: 0,
    nq: 0,
    zb: function() {
        return this.xc
    },
    tc: function(t) {
        this.xc = t
    },
    PW: function() {
        return this.lg
    },
    cs: function(t) {
        this.lg = t
    },
    vW: function() {
        return this.nq
    },
    u_: function(t) {
        this.nq = t
    },
    vj: function(t, i) {
        this.xc = t, this.lg = i
    }
}), q.JA.create = function(t, i) {
    var n = new q.JA;
    return n.vj(t, i), n
}, q.Jj = q.ca.extend({
    cl: !1,
    CD: !1,
    Ch: null,
    Uk: !1,
    init: function() {
        return this.Uk = !0, this.Ch = [], this.CD = this.cl = !1, q.Jj.MT(), !0
    },
    Qt: function(t) {
        this.cl = t
    },
    CS: function() {
        return this.cl
    },
    $J: function(t) {
        this.CD = t
    },
    g4: function() {
        return this.CD
    },
    BK: function(t, i) {
        var n = q.JA.create(t, i);
        this.Ch = this.pr(n, this.Ch)
    },
    pr: function(t, i) {
        for (var n = 0, e = 0; e < i.length; e++) {
            var h = i[e];
            if (h && (h.lg < t.lg && ++n, h.zb() == t.zb())) return q.d(0, "TouchDispatcher.forceAddHandler()"), i
        }
        return q.Qi(i, t, n)
    },
    sN: function(t) {
        if (null != t)
            for (var i = 0; i < this.Ch.length; i++) {
                var n = this.Ch[i];
                if (n && n.zb() == t) {
                    q.Zf(this.Ch, n);
                    break
                }
            }
    },
    tS: function(t) {
        for (var i = 0; i < this.Ch.length; i++)
            if (this.Ch[i] && this.Ch[i].zb() == t) return this.Ch[i];
        return null
    },
    cs: function(t, i) {
        q.d(null != i, "MouseDispatcher.setPriority():Arguments is null");
        var n = this.tS(i);
        q.d(null != n, "MouseDispatcher.setPriority():Cant find MouseHandler"), n.lg != t && (n.cs(t), this.Ch.sort(q.CM))
    },
    fea: function() {
        this.Ch.length = 0
    },
    Hca: function() {
        for (var t = 0; t < this.Ch.length; t++);
    }
}), q.Jj.Ox = q.a(0, 0), q.Jj.bT = !1, q.Jj.MT = function() {
    function t(t) {
        var n = q.sk(i),
            e = t.pageY,
            h = (t.pageX - n.left) / q.n.getInstance().ph,
            n = (n.height - (e - n.top)) / q.n.getInstance().ph;
        return (e = new q.nQ(h, n)).Pg(q.Jj.Ox.x, q.Jj.Ox.y), e.k_(t.button), q.Jj.Ox.x = h, q.Jj.Ox.y = n, e
    }
    var i = q.canvas;
    q.Jj.bT || (window.addEventListener("mousedown", function(t) {
        t.button == q.aH ? q.n.getInstance().Dh.$J(!0) : q.n.getInstance().Dh.Qt(!0)
    }), window.addEventListener("mouseup", function(t) {
        t.button == q.aH ? q.n.getInstance().Dh.$J(!1) : q.n.getInstance().Dh.Qt(!1)
    }), i.addEventListener("mousedown", function(i) {
        q.n.getInstance(), t(i)
    }), i.addEventListener("mouseup", function(i) {
        q.n.getInstance(), t(i)
    }), i.addEventListener("mousemove", function(i) {
        q.n.getInstance(), t(i)
    }), i.addEventListener("mousewheel", function(i) {
        t(i).eO(i.wheelDelta), q.n.getInstance()
    }, !1), i.addEventListener("DOMMouseScroll", function(i) {
        t(i).eO(-120 * i.detail), q.n.getInstance()
    }), i.addEventListener("mouseout", function(i) {
        q.n.getInstance(), t(i)
    }, !1), i.addEventListener("mouseover", function(i) {
        q.n.getInstance(), t(i)
    }, !1))
}, q.Z1 = q.ca.extend({
    zY: function() {},
    AY: function() {}
}), q.FA = q.ca.extend({
    zb: function() {
        return this.xc
    },
    tc: function(t) {
        this.xc = t
    },
    vj: function(t) {
        return q.d(null != t, "It's a wrong delegate!"), this.xc = t, !0
    },
    xc: null
}), q.FA.create = function(t) {
    var i = new q.FA;
    return i.vj(t), i
}, q.v3 = 1, q.w3 = 2, q.ts = {
    GK: 8,
    v0: 9,
    sL: 13,
    shift: 16,
    K5: 17,
    alt: 18,
    pause: 19,
    t5: 20,
    escape: 27,
    zda: 33,
    yda: 34,
    end: 35,
    home: 36,
    left: 37,
    Tha: 38,
    right: 39,
    a6: 40,
    X$: 45,
    F1: 46,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    e: 65,
    c: 66,
    G: 67,
    Q: 68,
    Ci: 69,
    sj: 70,
    f: 71,
    zr: 72,
    Lu: 73,
    hz: 74,
    iz: 75,
    vz: 76,
    wz: 77,
    Jr: 78,
    Az: 79,
    a: 80,
    Iz: 81,
    h: 82,
    ZF: 83,
    sG: 84,
    Oa: 85,
    Ia: 86,
    U: 87,
    x: 88,
    y: 89,
    z: 90,
    Nca: 96,
    Oca: 97,
    Pca: 98,
    Qca: 99,
    Rca: 100,
    Sca: 101,
    Tca: 102,
    Uca: 103,
    Vca: 104,
    Wca: 105,
    "*": 106,
    "+": 107,
    "-": 109,
    numdel: 110,
    "/": 111,
    j6: 112,
    n6: 113,
    o6: 114,
    p6: 115,
    q6: 116,
    r6: 117,
    s6: 118,
    t6: 119,
    u6: 120,
    k6: 121,
    l6: 122,
    m6: 123,
    $ca: 144,
    yea: 145,
    Aea: 186,
    ",": 186,
    i6: 187,
    "=": 187,
    ";": 188,
    z5: 188,
    L5: 189,
    ".": 190,
    Dda: 190,
    z6: 191,
    K$: 192,
    "[": 219,
    hda: 219,
    "]": 221,
    y5: 221,
    i5: 220,
    quote: 222,
    kO: 32
}, q.gw = q.ca.extend({
    Co: function(t) {
        t && (this.qi ? (this.wh.push(t), this.ll = !0) : this.DL(t))
    },
    ep: function(t) {
        t && (this.qi ? (this.gg.push(t), this.Im = !0) : this.Eu(t))
    },
    DL: function(t) {
        if (t = q.FA.create(t)) {
            for (var i = 0; i < this.Jn; i++);
            this.Jn.push(t)
        }
    },
    Eu: function(t) {
        for (var i = 0; i < this.Jn.length; i++)
            if (this.Jn[i].zb() == t) {
                this.Jn.splice(i, 1);
                break
            }
    },
    jL: function(t, i) {
        this.qi = !0, t.stopPropagation(), t.preventDefault();
        var n = 0;
        if (i && t)
            for (n = 0; n < this.Jn.length; n++);
        else if (!i && t)
            for (n = 0; n < this.Jn.length; n++);
        if (this.qi = !1, this.Im) {
            for (this.Im = !1, n = 0; n < this.gg.length; ++n) this.Eu(this.gg[n]);
            delete this.gg, this.gg = []
        }
        if (this.ll) {
            for (this.ll = !1, n = 0; n < this.wh.length; ++n) this.DL(this.wh[n]);
            this.wh = []
        }
        return !0
    },
    Jn: [],
    qi: !1,
    ll: !1,
    Im: !1,
    wh: [],
    gg: []
}), q.gw.getInstance = function() {
    return q.Vo || (q.Vo = new q.gw, q.canvas.setAttribute("tabindex", 1), q.canvas.style.outline = "none", q.canvas.style.cursor = "default", q.canvas.addEventListener("keydown", function(t) {
        q.Vo.jL(t, !0)
    }), q.canvas.addEventListener("keyup", function(t) {
        q.Vo.jL(t, !1)
    })), q.Vo
}, q.gw.Sda = function() {
    q.Vo && (delete q.Vo, q.Vo = null)
}, q.U1 = function(t, i, n) {
    this.Ph = t || q.uf(), this.end = i || q.uf(), this.duration = n || 0
}, q.T1 = q.ca.extend({
    ctor: function() {
        q.Ye.getInstance().Co(this)
    },
    ep: function() {
        q.Ye.getInstance().ep(this)
    },
    vV: function() {
        return q.Ye.getInstance().FK(this)
    },
    hL: function() {
        return q.Ye.getInstance().gL(this)
    },
    BE: function() {
        return !1
    },
    WV: function() {},
    CE: function() {
        return !1
    },
    XV: function() {},
    fM: function() {},
    dL: function() {},
    VE: function() {
        return ""
    },
    MX: function() {},
    KX: function() {},
    LX: function() {},
    JX: function() {}
}), q.Ye = q.ca.extend({
    ad: null,
    ob: null,
    Sk: "",
    Cq: null,
    ctor: function() {
        this.ob = new q.Ye.IP, this.Cq = q.a(0, 0)
    },
    init: function() {
        if (!q.pa.sg) {
            this.ad = q.Sb("#imeDispatcherInput"), this.ad || (this.ad = q.Hk("input"), this.ad.setAttribute("type", "text"), this.ad.setAttribute("id", "imeDispatcherInput"), this.ad.resize(0, 0), this.ad.wv(0, 0), this.ad.style.opacity = "0", this.ad.style.fontSize = "1px", this.ad.setAttribute("tabindex", 2), this.ad.style.position = "absolute", this.ad.style.top = 0, this.ad.style.left = 0, document.body.appendChild(this.ad));
            var t = this;
            this.ad.addEventListener("input", function() {
                t.qD(t.ad.value)
            }, !1), this.ad.addEventListener("keydown", function(i) {
                i.keyCode === q.ts.v0 ? (i.stopPropagation(), i.preventDefault()) : i.keyCode == q.ts.sL && (t.Bu("\n", 1), i.stopPropagation(), i.preventDefault())
            }, !1), /msie/i.test(navigator.userAgent) && this.ad.addEventListener("keyup", function(i) {
                i.keyCode == q.ts.GK && t.qD(t.ad.value)
            }, !1), window.addEventListener("mousedown", function(i) {
                t.Cq = q.a(i.pageX || 0, i.pageY || 0)
            }, !1)
        }
    },
    qD: function(t) {
        var i, n;
        for (i = this.Sk.length < t.length ? this.Sk.length : t.length, n = 0; n < i && t[n] === this.Sk[n]; n++);
        var e = this.Sk.length - n,
            h = t.length - n;
        for (i = 0; i < e; i++) this.iL();
        for (i = 0; i < h; i++) this.Bu(t[n + i], 1);
        this.Sk = t
    },
    Bu: function(t, i) {
        !this.ob || !t || 0 >= i || this.ob.Af && this.ob.Af.fM(t, i)
    },
    iL: function() {
        this.ob && this.ob.Af && this.ob.Af.dL()
    },
    VE: function() {
        if (this.ob && this.ob.Af) {
            var t = this.ob.Af.VE();
            return t || ""
        }
        return ""
    },
    Y5: function() {
        if (this.ob)
            for (var t = 0; t < this.ob.qh.length; t++);
    },
    W5: function() {
        if (this.ob)
            for (var t = 0; t < this.ob.qh.length; t++);
    },
    X5: function() {
        if (this.ob)
            for (var t = 0; t < this.ob.qh.length; t++);
    },
    V5: function() {
        if (this.ob)
            for (var t = 0; t < this.ob.qh.length; t++);
    },
    Co: function(t) {
        !t || !this.ob || -1 < this.ob.qh.indexOf(t) || (this.ob.qh = q.Qi(this.ob.qh, t, 0))
    },
    FK: function(t) {
        return !(!this.ob || !t || -1 == this.ob.qh.indexOf(t)) && (this.ob.Af ? !(!this.ob.Af.CE() || !t.BE()) && (this.ob.Af = null, this.lJ(t), !0) : !!t.BE() && (this.lJ(t), !0))
    },
    lJ: function(t) {
        q.pa.sg ? (this.ob.Af = t, this.Sk = t.Nm ? t.Nm() : "", null != (t = prompt("please enter your word:", this.Sk)) && this.qD(t), this.Bu("\n", 1)) : (this.ob.Af = t, this.Sk = t.Nm ? t.Nm() : "", this.ad.focus(), this.ad.value = this.Sk, this.lS())
    },
    lS: function() {
        /msie/i.test(navigator.userAgent) ? (this.ad.style.left = this.Cq.x + "px", this.ad.style.top = this.Cq.y + "px") : this.ad.wv(this.Cq.x, this.Cq.y)
    },
    gL: function(t) {
        return !!(this.ob && t && this.ob.Af == t && t.CE()) && (this.ob.Af = null, q.canvas.focus(), !0)
    },
    ep: function(t) {
        this.ob && t && -1 != this.ob.qh.indexOf(t) && (this.ob.Af && t == this.ob.Af && (this.ob.Af = null), q.Zf(this.ob.qh, t))
    },
    Lda: function(t) {
        32 > t ? t == q.ts.GK ? this.iL() : t == q.ts.sL && this.Bu("\n", 1) : 255 > t && this.Bu(String.fromCharCode(t), 1)
    }
}), q.Ye.IP = q.ca.extend({
    Af: null,
    qh: null,
    ctor: function() {
        this.qh = []
    },
    w6: function(t) {
        for (var i = 0; i < this.qh.length; i++)
            if (this.qh[i] == t) return i;
        return null
    }
}), q.Ye.getInstance = function() {
    return q.Ye.dz || (q.Ye.dz = new q.Ye, q.Ye.dz.init()), q.Ye.dz
}, q.Ye.dz = null, q.y3 = q.ca.extend({
    cda: function() {
        return !1
    },
    eda: function() {
        return !1
    },
    fda: function() {
        return !1
    },
    dda: function() {
        return !1
    },
    bda: function() {
        return !1
    }
}), q.oB = q.Aa.extend({
    p4: null,
    yh: "",
    il: "",
    bx: 0,
    xc: null,
    Sw: null,
    ctor: function() {
        this.Sw = new q.oc(127, 127, 127), q.Ye.getInstance().Co(this), q.Aa.prototype.ctor.call(this)
    },
    zb: function() {
        return this.xc
    },
    tc: function(t) {
        this.xc = t
    },
    T6: function() {
        return this.bx
    },
    d7: function() {
        return this.Sw
    },
    Xea: function(t) {
        this.Sw = t
    },
    vX: function(t, i, n, e, h) {
        switch (arguments.length) {
            case 5:
                return t && (this.il = t), this.pd(this.il, e, h, i, n);
            case 3:
                return t && (this.il = t), e = arguments[1], h = arguments[2], this.pd(this.il, e, h);
            default:
                throw "Argument must be non-nil "
        }
    },
    uc: function(t) {
        this.yh = (t = String(t)) || "", this.yh.length ? q.Aa.prototype.uc.call(this, this.yh) : q.Aa.prototype.uc.call(this, this.il), this.bx = this.yh.length
    },
    Nm: function() {
        return this.yh
    },
    TN: function(t) {
        this.il = t || "", this.yh.length || q.Aa.prototype.uc.call(this, this.il)
    },
    O8: function() {
        return this.il
    },
    xa: function(t) {
        if (t = t || q.q, this.yh && 0 < this.yh.length) q.Aa.prototype.xa.call(this, t);
        else {
            var i = this.Pc();
            this.Qa(this.Sw), q.Z === q.Jb && this.oy(), q.Aa.prototype.xa.call(this, t), this.Qa(i)
        }
    },
    vV: function() {
        return q.Ye.getInstance().FK(this)
    },
    hL: function() {
        return q.Ye.getInstance().gL(this)
    },
    BE: function() {
        return !0
    },
    WV: function() {},
    CE: function() {
        return !0
    },
    XV: function() {},
    dL: function() {
        var t = this.yh.length;
        0 != t && (1 >= t ? (this.yh = "", this.bx = 0, q.Aa.prototype.uc.call(this, this.il)) : this.uc(this.yh.substring(0, t - 1)))
    },
    ep: function() {
        q.Ye.getInstance().ep(this)
    },
    fM: function(t) {
        var i = t; - 1 < (t = i.indexOf("\n")) && (i = i.substring(0, t)), 0 < i.length && (i = this.yh + i, this.bx = i.length, this.uc(i)), -1 != t && this.hL()
    },
    VE: function() {
        return this.yh
    },
    MX: function() {},
    KX: function() {},
    LX: function() {},
    JX: function() {}
}), q.oB.create = function(t, i, n, e, h) {
    var s;
    switch (arguments.length) {
        case 5:
            return (s = new q.oB) && s.vX("", i, n, e, h) ? (t && s.TN(t), s) : null;
        case 3:
            return s = new q.oB, e = arguments[1], h = arguments[2], s && s.pd("", e, h) ? (t && s.TN(t), s) : null;
        default:
            throw "Argument must be non-nil "
    }
}, q.$ha = function() {
    return {
        x: 0,
        y: 0
    }
}, q.gn = function(t, i) {
    return {
        x: t,
        y: i
    }
}, q.fi = function(t, i) {
    return q.gn(t.x + i.x, t.y + i.y)
}, q.ge = function(t, i) {
    return q.gn(t.x - i.x, t.y - i.y)
}, q.fh = function(t, i) {
    return q.gn(t.x * i, t.y * i)
}, q.nA = function(t) {
    return q.gn(-t.y, t.x)
}, q.Dk = function(t) {
    return q.gn(-t.x, -t.y)
}, q.Q0 = function(t, i) {
    return t.x * i.x + t.y * i.y
}, q.Zha = function(t) {
    return q.gn(Math.cos(t), Math.sin(t))
}, q.AG = function(t) {
    return t = q.Li(q.a(t.x, t.y)), q.gn(t.x, t.y)
}, q.Pj = function(t) {
    return q.gn(t.x, t.y)
}, q.Qb = function(t) {
    return {
        Oa: t.x,
        Ia: t.y
    }
}, q.mP = q.r.extend({
    sb: null,
    t: null,
    Mm: function() {
        return this.t
    },
    $g: function(t) {
        this.t = t
    },
    ctor: function() {
        q.r.prototype.ctor.call(this), this.sb = [], this.t = new q.Wl(q.Wc, q.Vc)
    },
    xa: function(t) {
        t = t || q.q, this.t && 770 == this.t.src && 1 == this.t.sa && (t.globalCompositeOperation = "lighter");
        for (var i = 0; i < this.sb.length; i++) {
            var n = this.sb[i];
            n.type === q.gh.VH && (t.fillStyle = "rgba(" + (0 | 255 * n.color.h) + "," + (0 | 255 * n.color.f) + "," + (0 | 255 * n.color.c) + "," + n.color.e + ")", q.se.PE(n.position, n.Kl)), n.type === q.gh.XH && (t.strokeStyle = "rgba(" + (0 | 255 * n.color.h) + "," + (0 | 255 * n.color.f) + "," + (0 | 255 * n.color.c) + "," + n.color.e + ")", t.lineWidth = 2 * n.Kl, t.lineCap = "round", q.se.rj(n.Oo, n.op)), n.type === q.gh.WH && (t.fillStyle = "rgba(" + (0 | 255 * n.fillColor.h) + "," + (0 | 255 * n.fillColor.f) + "," + (0 | 255 * n.fillColor.c) + "," + n.fillColor.e + ")", q.se.de(n.EO, n.count, !1, !0), t.lineWidth = 2 * n.borderWidth, t.lineCap = "round", t.strokeStyle = "rgba(" + (0 | 255 * n.borderColor.h) + "," + (0 | 255 * n.borderColor.f) + "," + (0 | 255 * n.borderColor.c) + "," + n.borderColor.e + ")", q.se.de(n.EO, n.count, !0, !1))
        }
    },
    vl: function(t, i, n) {
        var e = new q.CB(q.gh.VH);
        e.position = t, e.Kl = i, e.color = n, this.sb.push(e)
    },
    nr: function(t, i, n, e) {
        var h = new q.CB(q.gh.XH);
        h.Oo = t, h.op = i, h.Kl = n, h.color = e, this.sb.push(h)
    },
    de: function(t, i, n, e) {
        var h = new q.CB(q.gh.WH);
        h.EO = t, h.count = t.length, h.fillColor = i, h.borderWidth = n, h.borderColor = e, this.sb.push(h)
    },
    clear: function() {
        this.sb.length = 0
    }
}), q.nP = q.r.extend({
    aq: 0,
    sb: null,
    Jm: null,
    lK: null,
    kK: null,
    t: null,
    ga: !1,
    Mm: function() {
        return this.t
    },
    $g: function(t) {
        this.t = t
    },
    ctor: function() {
        q.r.prototype.ctor.call(this), this.sb = [], this.t = new q.Wl(q.Wc, q.Vc)
    },
    init: function() {
        return !!q.r.prototype.init.call(this) && (this.xe(q.ud.getInstance().Hc(q.FH)), this.oC(512), this.lK = q.q.createBuffer(), this.ga = !0)
    },
    VT: function() {
        var t = q.q;
        q.zd(q.xn), t.bindBuffer(t.ARRAY_BUFFER, this.lK), this.ga && (t.bufferData(t.ARRAY_BUFFER, this.Jm, t.STREAM_DRAW), this.ga = !1);
        var i = q.gc.BYTES_PER_ELEMENT;
        t.vertexAttribPointer(q.Zb, 2, t.FLOAT, !1, i, 0), t.vertexAttribPointer(q.cg, 4, t.UNSIGNED_BYTE, !0, i, 8), t.vertexAttribPointer(q.Be, 2, t.FLOAT, !1, i, 12), t.drawArrays(t.TRIANGLES, 0, 3 * this.sb.length), q.hh()
    },
    oC: function(t) {
        if (this.sb.length + t > this.aq) {
            var i = q.hd.BYTES_PER_ELEMENT;
            if (this.aq += Math.max(this.aq, t), null == this.sb || 0 === this.sb.length) this.sb = [], this.Jm = new ArrayBuffer(i * this.aq), this.kK = new Uint8Array(this.Jm);
            else {
                t = [];
                for (var n = new ArrayBuffer(i * this.aq), e = 0; e < this.sb.length; e++) t[e] = new q.hd(this.sb[e].e, this.sb[e].c, this.sb[e].G, n, e * i);
                this.kK = new Uint8Array(n), this.sb = t, this.Jm = n
            }
        }
    },
    xa: function() {
        q.Th(this.t.src, this.t.sa), this.Wb.Fd(), this.Wb.lv(), this.VT()
    },
    vl: function(t, i, n) {
        n = {
            h: 0 | 255 * n.h,
            f: 0 | 255 * n.f,
            c: 0 | 255 * n.c,
            e: 0 | 255 * n.e
        };
        var e = {
                k: {
                    x: t.x - i,
                    y: t.y - i
                },
                s: n,
                p: {
                    Oa: -1,
                    Ia: -1
                }
            },
            h = {
                k: {
                    x: t.x + i,
                    y: t.y + i
                },
                s: n,
                p: {
                    Oa: 1,
                    Ia: 1
                }
            },
            s = {
                k: {
                    x: t.x + i,
                    y: t.y - i
                },
                s: n,
                p: {
                    Oa: 1,
                    Ia: -1
                }
            };
        this.sb.push(new q.hd(e, {
            k: {
                x: t.x - i,
                y: t.y + i
            },
            s: n,
            p: {
                Oa: -1,
                Ia: 1
            }
        }, h, this.Jm, this.sb.length * q.hd.BYTES_PER_ELEMENT)), this.sb.push(new q.hd(e, h, s, this.Jm, this.sb.length * q.hd.BYTES_PER_ELEMENT)), this.ga = !0
    },
    nr: function(t, i, n, e) {
        this.oC(18), e = {
            h: 0 | 255 * e.h,
            f: 0 | 255 * e.f,
            c: 0 | 255 * e.c,
            e: 0 | 255 * e.e
        };
        f = q.Pj(t);
        i = q.Pj(i), t = q.AG(q.nA(q.ge(i, f)));
        var h = q.nA(t),
            s = q.fh(t, n);
        n = q.fh(h, n);
        var r = q.fi(i, q.ge(s, n)),
            a = q.ge(i, s),
            o = q.fi(i, s),
            c = q.ge(f, s),
            u = q.fi(f, s),
            l = q.ge(f, q.ge(s, n)),
            f = q.fi(f, q.fi(s, n)),
            d = q.hd.BYTES_PER_ELEMENT,
            g = this.Jm;
        this.sb.push(new q.hd({
            k: q.ge(i, q.fi(s, n)),
            s: e,
            p: q.Qb(q.Dk(q.fi(t, h)))
        }, {
            k: r,
            s: e,
            p: q.Qb(q.ge(t, h))
        }, {
            k: a,
            s: e,
            p: q.Qb(q.Dk(t))
        }, g, this.sb.length * d)), this.sb.push(new q.hd({
            k: o,
            s: e,
            p: q.Qb(t)
        }, {
            k: r,
            s: e,
            p: q.Qb(q.ge(t, h))
        }, {
            k: a,
            s: e,
            p: q.Qb(q.Dk(t))
        }, g, this.sb.length * d)), this.sb.push(new q.hd({
            k: o,
            s: e,
            p: q.Qb(t)
        }, {
            k: c,
            s: e,
            p: q.Qb(q.Dk(t))
        }, {
            k: a,
            s: e,
            p: q.Qb(q.Dk(t))
        }, g, this.sb.length * d)), this.sb.push(new q.hd({
            k: o,
            s: e,
            p: q.Qb(t)
        }, {
            k: c,
            s: e,
            p: q.Qb(q.Dk(t))
        }, {
            k: u,
            s: e,
            p: q.Qb(t)
        }, g, this.sb.length * d)), this.sb.push(new q.hd({
            k: l,
            s: e,
            p: q.Qb(q.ge(h, t))
        }, {
            k: c,
            s: e,
            p: q.Qb(q.Dk(t))
        }, {
            k: u,
            s: e,
            p: q.Qb(t)
        }, g, this.sb.length * d)), this.sb.push(new q.hd({
            k: l,
            s: e,
            p: q.Qb(q.ge(h, t))
        }, {
            k: f,
            s: e,
            p: q.Qb(q.fi(t, h))
        }, {
            k: u,
            s: e,
            p: q.Qb(t)
        }, g, this.sb.length * d)), this.ga = !0
    },
    de: function(t, i, n, e) {
        i = {
            h: 0 | 255 * i.h,
            f: 0 | 255 * i.f,
            c: 0 | 255 * i.c,
            e: 0 | 255 * i.e
        };
        var h, s, r, a, o = {
                h: 0 | 255 * e.h,
                f: 0 | 255 * e.f,
                c: 0 | 255 * e.c,
                e: 0 | 255 * e.e
            },
            c = [],
            u = t.length;
        for (h = 0; h < u; h++) {
            s = q.Pj(t[(h - 1 + u) % u]), r = q.Pj(t[h]), a = q.Pj(t[(h + 1) % u]);
            l = q.AG(q.nA(q.ge(r, s)));
            r = q.AG(q.nA(q.ge(a, r))), c[h] = {
                offset: q.fh(q.fi(l, r), 1 / (q.Q0(l, r) + 1)),
                Jr: r
            }
        }
        e = 0 < e.e && 0 < n, this.oC(3 * (3 * u - 2));
        var l = q.hd.BYTES_PER_ELEMENT,
            f = this.Jm,
            d = this.sb,
            g = 0 == e ? .5 : 0;
        for (h = 0; h < u - 2; h++) s = q.ge(q.Pj(t[0]), q.fh(c[0].offset, g)), r = q.ge(q.Pj(t[h + 1]), q.fh(c[h + 1].offset, g)), a = q.ge(q.Pj(t[h + 2]), q.fh(c[h + 2].offset, g)), d.push(new q.hd({
            k: s,
            s: i,
            p: q.Qb({
                x: 0,
                y: 0
            })
        }, {
            k: r,
            s: i,
            p: q.Qb({
                x: 0,
                y: 0
            })
        }, {
            k: a,
            s: i,
            p: q.Qb({
                x: 0,
                y: 0
            })
        }, f, d.length * l));
        for (h = 0; h < u; h++) {
            g = (h + 1) % u, s = q.Pj(t[h]), r = q.Pj(t[g]), a = c[h].Jr;
            var p = c[h].offset,
                b = c[g].offset,
                g = e ? q.ge(s, q.fh(p, n)) : q.ge(s, q.fh(p, .5)),
                y = e ? q.ge(r, q.fh(b, n)) : q.ge(r, q.fh(b, .5));
            s = e ? q.fi(s, q.fh(p, n)) : q.fi(s, q.fh(p, .5)), r = e ? q.fi(r, q.fh(b, n)) : q.fi(r, q.fh(b, .5)), e ? (d.push(new q.hd({
                k: g,
                s: o,
                p: q.Qb(q.Dk(a))
            }, {
                k: y,
                s: o,
                p: q.Qb(q.Dk(a))
            }, {
                k: r,
                s: o,
                p: q.Qb(a)
            }, f, d.length * l)), d.push(new q.hd({
                k: g,
                s: o,
                p: q.Qb(q.Dk(a))
            }, {
                k: s,
                s: o,
                p: q.Qb(a)
            }, {
                k: r,
                s: o,
                p: q.Qb(a)
            }, f, d.length * l))) : (d.push(new q.hd({
                k: g,
                s: i,
                p: q.Qb({
                    x: 0,
                    y: 0
                })
            }, {
                k: y,
                s: i,
                p: q.Qb({
                    x: 0,
                    y: 0
                })
            }, {
                k: r,
                s: i,
                p: q.Qb(a)
            }, f, d.length * l)), d.push(new q.hd({
                k: g,
                s: i,
                p: q.Qb({
                    x: 0,
                    y: 0
                })
            }, {
                k: s,
                s: i,
                p: q.Qb(a)
            }, {
                k: r,
                s: i,
                p: q.Qb(a)
            }, f, d.length * l)))
        }
        this.ga = !0
    },
    clear: function() {
        this.sb.length = 0, this.ga = !0
    }
}), q.gh = q.pa.Rc ? q.nP : q.mP, q.gh.create = function() {
    var t = new q.gh;
    return t && t.init() ? t : null
}, q.CB = function(t) {
    this.type = t
}, q.gh.VH = 0, q.gh.XH = 1, q.gh.WH = 2, q.CR = function(t) {
    for (var i = [], n = 0; n < t.length / 2; n++) i[n] = {
        x: t[2 * n],
        y: t[2 * n + 1]
    };
    return i
}, q.bP = function(t) {
    return t.vaa() || t.EX() ? q.sl(.5, .5, .5, .5) : t.Kca > t.kO.xha ? q.sl(.33, .33, .33, .5) : q.sl(1, 0, 0, .5)
}, q.oP = function(t) {
    var i = t.body,
        n = q.bP(i);
    switch (t.HE) {
        case cp.r1.prototype.HE:
            this.vl(t.pO, Math.max(t.h, 1), n), this.nr(t.pO, cp.Ia.add(t.pO, cp.Ia.Ica(i.uea, t.h)), 1, n);
            break;
        case cp.d3.prototype.HE:
            this.nr(t.Kha, t.Lha, Math.max(t.h, 2), n);
            break;
        case cp.H2.prototype.HE:
            i = q.sl(n.h, n.f, n.c, q.iY(n.e)), this.de(q.CR(t.Jha), n, 1, i);
            break;
        default:
            q.d(!1, "Bad assertion in DrawShape()")
    }
}, q.lP = function(t) {
    var i, n = t.e,
        e = t.c;
    t instanceof cp.D2 ? (i = n.Pm(t.EK), n = e.Pm(t.qE), this.vl(i, 3, q.Ej), this.vl(n, 3, q.Ej), this.nr(i, n, 1, q.Ej)) : t instanceof cp.g3 ? (i = n.Pm(t.EK), n = e.Pm(t.qE), this.vl(i, 3, q.Ej), this.vl(n, 3, q.Ej), this.nr(i, n, 1, q.Ej)) : t instanceof cp.E2 ? (i = n.Pm(t.EK), n = e.Pm(t.qE), this.vl(i, 3, q.Ej), this.vl(n, 3, q.Ej)) : t instanceof cp.P1 && (i = n.Pm(t.N$), n = n.Pm(t.O$), t = e.Pm(t.qE), this.vl(t, 3, q.Ej), this.nr(i, n, 1, q.Ej))
}, q.Ej = q.sl(0, 1, 0, .5), q.Ep = q.gh.extend({
    FU: null,
    ko: null,
    C9: function() {
        return this.ko
    },
    Bga: function(t) {
        this.ko = t
    },
    xa: function() {
        this.ko && (this.ko.g6(q.oP.bind(this)), this.ko.f6(q.lP.bind(this)), q.gh.prototype.xa.call(this), this.clear())
    }
}), q.Ep.M5 = function(t) {
    var i = new q.Ep;
    return i.init() ? (i.FU = t, i.ko = t.kO, i) : null
}, q.Ep.QV = function(t) {
    var i = new q.Ep;
    return i.init() ? (i.ko = t, i) : null
}, q.Ep.create = q.Ep.QV, q.Fp = q.m.extend({
    sJ: !1,
    bf: null,
    UJ: 1,
    Oea: function(t) {
        this.bf = t
    },
    M6: function() {
        return this.bf
    },
    Na: function() {
        var t = this.bf;
        return {
            x: t.a.x,
            y: t.a.y
        }
    },
    Gc: function() {
        return this.bf.a.x
    },
    Bc: function() {
        return this.bf.a.y
    },
    i: function(t, i) {
        2 == arguments.length ? (this.bf.a.x = t, this.bf.a.y = i) : (this.bf.a.x = t.x, this.bf.a.y = t.y)
    },
    D4: function() {
        var t = this.ea,
            i = this.bf;
        t.x == i.a.x && t.y == i.a.y || q.m.prototype.i.call(this, i.a.x, i.a.y)
    },
    ZE: function() {
        return this.sJ ? q.Gp(this.kl) : -q.Gp(this.bf.e)
    },
    we: function(t) {
        this.sJ ? q.m.prototype.we.call(this, t) : this.bf.e = -q.Bg(t)
    },
    E4: function() {
        this.kl != -this.bf.e && q.m.prototype.we.call(this, -q.Gp(this.bf.e))
    },
    Xh: function() {
        if (q.Z === q.Jb) return this.aD();
        var t = this.bf,
            i = this.ic,
            n = this.Ja,
            e = this.Ta,
            h = t.a.x,
            s = t.a.y;
        this.Xj && (h += i.x, s += i.y);
        var r = t.e,
            t = Math.cos(r),
            r = Math.sin(r);
        return q.Mt(i) || (h += t * -i.x * n + -r * -i.y * e, s += r * -i.x * n + t * -i.y * e), this.Rg = q.VO(t * n, r * n, -r * e, t * e, h, s)
    },
    aD: function() {
        if (this.Rg || (this.Rg = {
                e: 1,
                c: 0,
                G: 0,
                Q: 1,
                Ra: 0,
                Sa: 0
            }), this.Dr()) {
            var t = this.Rg,
                i = this.bf,
                n = this.Ja,
                e = this.Ta,
                h = this.ic;
            t.Ra = i.a.x, t.Sa = i.a.y;
            var s = 1,
                r = 0;
            (i = -i.e) && (s = Math.cos(i), r = Math.sin(i)), t.e = t.Q = s, t.c = -r, t.G = r, 1 === n && 1 === e || (t.e *= n, t.G *= n, t.c *= e, t.Q *= e), t.Ra += s * -h.x * n + -r * h.y * e, t.Sa -= r * -h.x * n + s * h.y * e, this.Xj && (t.Ra += h.x, t.Sa += h.y), this.lk = !1
        }
        return this.Rg
    },
    Dr: function() {
        return !this.bf.EX()
    }
}), q.Fp.create = function(t, i) {
    var n = arguments.length,
        e = new q.Fp;
    return 0 === n ? e.init() ? e : null : 2 > n ? e && e.Fi(t) ? e : null : e && e.Fi(t, i) ? e : null
}, q.Fp.Hy = function(t) {
    var i = null;
    return "string" != typeof t ? (q.log("Invalid argument. Expecting string."), null) : (i = q.kh.getInstance().tj(t)) ? (t = new q.Fp) && t.Qf(i) ? t : null : (q.log("Invalid spriteFrameName: " + t), null)
}, q.Fp.Gy = function(t) {
    var i = new q.Fp;
    return i && i.Qf(t) ? i : null
}, q.x1 = {
    u1: 0,
    w1: 1,
    v1: 2,
    t1: 3,
    s1: 4
}, q.Sd = q.ca.extend({
    Xn: 0,
    FJ: 0,
    Vq: !1,
    Uq: !1,
    fy: !1,
    gy: !1,
    hy: !1,
    kT: 0,
    Hx: 0,
    Ss: "",
    ol: null,
    ctor: function() {
        this.FJ = this.Xn = 0, this.hy = this.gy = this.fy = this.Uq = this.Vq = !1, this.Hx = this.kT = 0, this.Ss = "", this.ol = {}
    },
    q8: function() {
        return this.Xn
    },
    p8: function() {
        return this.FJ
    },
    r8: function() {
        return this.Hx
    },
    Cha: function() {
        return this.Uq
    },
    Dha: function() {
        return this.Vq
    },
    Aha: function() {
        return this.fy
    },
    Bha: function() {
        return this.gy
    },
    Eha: function() {
        return this.hy
    },
    fr: function(t) {
        return -1 < this.Ss.indexOf(t)
    },
    init: function() {
        var t = this.ol;
        return t["cocos2d.x.version"] = q.Jv, t["cocos2d.x.compiled_with_profiler"] = !1, t["cocos2d.x.compiled_with_gl_state_cache"] = q.Ri, !0
    },
    sW: function(t, i) {
        var n = this.ol;
        return n.hasOwnProperty(t) ? n[t] : i
    },
    N6: function(t, i) {
        null == i && (i = !1);
        var n = this.ol;
        return n.hasOwnProperty(t) ? n[t] : i
    },
    x8: function(t, i) {
        null == i && (i = 0);
        var n = this.ol;
        return n.hasOwnProperty(t) ? n[t] : i
    },
    y8: function(t) {
        var i = this.ol;
        return i.hasOwnProperty(t) ? i[t] : null
    },
    F_: function(t, i) {
        this.ol[t] = i
    },
    fW: function() {
        0 === q.Ri && (q.log(""), q.log("cocos2d: **** WARNING **** CC_ENABLE_PROFILERS is defined. Disable it when you finish profiling (from ccConfig.js)"), q.log(""))
    },
    oW: function() {
        if (q.Z !== q.Jb) {
            var t = q.q,
                i = this.ol;
            i["gl.vendor"] = t.getParameter(t.VENDOR), i["gl.renderer"] = t.getParameter(t.RENDERER), i["gl.version"] = t.getParameter(t.VERSION), this.Ss = "";
            for (var n = t.getSupportedExtensions(), e = 0; e < n.length; e++) this.Ss += n[e] + " ";
            this.Xn = t.getParameter(t.MAX_TEXTURE_SIZE), i["gl.max_texture_size"] = this.Xn, this.Hx = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS), i["gl.max_texture_units"] = this.Hx, this.Vq = this.fr("GL_IMG_texture_compression_pvrtc"), i["gl.supports_PVRTC"] = this.Vq, this.Uq = !1, i["gl.supports_NPOT"] = this.Uq, this.fy = this.fr("GL_IMG_texture_format_BGRA888"), i["gl.supports_BGRA8888"] = this.fy, this.gy = this.fr("GL_EXT_discard_framebuffer"), i["gl.supports_discard_framebuffer"] = this.gy, this.hy = this.fr("vertex_array_object"), i["gl.supports_vertex_array_object"] = this.hy, q.Hv()
        }
    },
    Bca: function(t) {
        var i = q.Yc.getInstance(),
            n = i.ee(t);
        if (null != (i = i.mr(n)))
            if (i = i.data)
                for (var e in i) this.ol[e] = i[e];
            else q.log("Expected 'data' dict, but not found. Config file: " + t)
    }
}), q.Sd.Vt = null, q.Sd.getInstance = function() {
    return q.Sd.Vt || (q.Sd.Vt = new q.Sd, q.Sd.Vt.init()), q.Sd.Vt
}, q.Sd.Qda = function() {
    q.Sd.Vt = null
}, q.Rh = 0, q.gP = 0, q.KG = 1, q.hP = 3, q.iP = q.KG, q.C1 = 0, q.A1 = 1, q.D1 = 2, q.B1 = 3, q.z1 = 2, q.G1 = q.ca.extend({
    Uha: function() {}
}), q.PG = function(t) {
    var i = new q.ta;
    q.jz(q.Lk, i);
    var n = new q.ta;
    q.jz(q.Kk, n), q.Dl(t, i, n)
}, q.n = q.ca.extend({
    o4: !1,
    Gt: !1,
    sm: !1,
    Rx: !1,
    vm: !1,
    mh: 0,
    bD: 0,
    jl: 0,
    Qp: 0,
    ph: 1,
    im: !1,
    Tk: 0,
    mx: 0,
    em: null,
    gm: null,
    jm: null,
    Y: null,
    al: null,
    bj: null,
    Iq: null,
    dj: null,
    gk: null,
    rD: null,
    rc: null,
    df: 0,
    gu: 0,
    DD: 0,
    c4: null,
    Ng: null,
    mi: null,
    Pe: null,
    Vn: null,
    Qj: null,
    Dh: null,
    m4: !1,
    ctor: function() {
        if (this.al = Date.now(), !q.wF) {
            var t = this;
            window.addEventListener("focus", function() {
                t.al = Date.now()
            }, !1)
        }
    },
    XT: function() {
        this.al = Date.now()
    },
    init: function() {
        return this.bD = this.mh = 1 / q.UV, this.gk = [], this.jl = q.iP, this.rD = null, this.mx = this.Qp = 0, this.im = !1, this.gu = this.df = 0, this.al = Date.now(), this.Rx = this.sm = !1, this.Y = q.size(0, 0), this.dj = null, this.ph = 1, this.Ng = new q.WQ, this.mi = new q.UO, this.Ng.zN(this.mi, q.iw, !1), this.Pe = new q.fa, this.Pe.init(), this.Vn = q.gw.getInstance(), this.Qj = new q.TO, this.Dh = new q.Jj, this.Dh.init(), !0
    },
    MK: function() {
        var t = Date.now();
        this.Gt ? (this.Tk = 0, this.Gt = !1) : this.Tk = (t - this.al) / 1e3, 0 < q.xp && .2 < this.Tk && (this.Tk = 1 / 60), this.al = t
    },
    JV: function(t) {
        var i = new q.ta;
        q.PG(i);
        var n = new q.ta;
        q.RX(n, i);
        var e = this.dj.je,
            h = new q.ec;
        return q.zM(h, new q.ec(2 * t.x / e.width - 1, 1 - 2 * t.y / e.height, i.b[14] / i.b[15]), n), q.a(h.x, h.y)
    },
    LV: function(t) {
        var i = new q.ta;
        q.PG(i);
        var n = new q.ec;
        return q.zM(n, new q.ec(t.x, t.y, 0), i), t = this.dj.je, q.a(t.width * (.5 * n.x + .5), t.height * (.5 * -n.y + .5))
    },
    QE: null,
    mS: function() {
        this.MK(), this.sm || this.Ng.update(this.Tk), q.q.clearRect(0, 0, q.canvas.width, -q.canvas.height), this.bj && this.RN(), this.rc && this.rc.za(), this.Iq && this.Iq.za(), this.im && this.gK(), this.gu++, this.im && this.VI()
    },
    nS: function() {
        this.MK(), this.sm || this.Ng.update(this.Tk);
        var t = q.q;
        t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), this.bj && this.RN(), q.Xo(), this.rc && this.rc.za(), this.Iq && this.Iq.za(), this.im && this.gK(), q.Wo(), this.gu++, this.im && this.VI()
    },
    end: function() {
        this.Rx = !0
    },
    e7: function() {
        return this.ph
    },
    w8: function() {
        return this.Iq
    },
    B$: function() {
        return this.Y
    },
    Ju: function() {
        return q.size(this.Y.width * this.ph, this.Y.height * this.ph)
    },
    SL: function() {
        return this.dj ? this.dj.SL() : q.size(0, 0)
    },
    RL: function() {
        return this.dj ? this.dj.RL() : q.a(0, 0)
    },
    Ku: function() {
        return this.Y.height / 1.1566
    },
    pause: function() {
        this.sm || (this.bD = this.mh, this.hv(.25), this.sm = !0)
    },
    Ida: function() {
        q.d(null != this.rc, "running scene should not null"), this.gk.pop();
        var t = this.gk.length;
        0 == t ? this.end() : (this.vm = !0, this.bj = this.gk[t - 1])
    },
    Hz: function() {
        q.hi.Hz()
    },
    oZ: function() {
        this.rg().sp(), this.Pe.AZ(), this.rc && (this.rc.Zh(), this.rc.kb(), this.rc.Ug()), this.bj = this.rc = null, this.gk = [], this.nO(), q.hi.Hz(), q.jn.pZ(), q.kh.qZ(), q.Ka.rZ(), q.Hv()
    },
    sZ: function(t) {
        q.d(t, "the scene should not null"), this.vm = !1, this.gk.push(t), this.bj = t
    },
    zk: function(t) {
        q.d(this.rc, "Use runWithScene: instead to start the director"), q.d(null != t, "the scene should not be null");
        var i = this.gk.length;
        0 === i ? (this.vm = !0, this.gk[i] = t) : (this.vm = !0, this.gk[i - 1] = t), this.bj = t
    },
    PZ: function() {
        this.sm && (this.hv(this.bD), (this.al = Date.now()) || q.log("cocos2d: Director: Error in gettimeofday"), this.sm = !1, this.Tk = 0)
    },
    xN: function(t) {
        q.d(null != t, "This command can only be used to start the CCDirector. There is already a scene present."), q.d(null == this.rc, "_runningScene should be null"), this.sZ(t), this.lO()
    },
    f_: function(t) {
        t ? q.Th(q.Wc, q.Vc) : q.Th(q.q.ONE, q.q.ZERO)
    },
    $ea: function(t) {
        t != this.ph && (this.ph = t, this.jq())
    },
    o_: function(t) {
        q.Z !== q.Jb && (t ? (q.q.clearDepth(1), q.q.enable(q.q.DEPTH_TEST), q.q.depthFunc(q.q.LEQUAL)) : q.q.disable(q.q.DEPTH_TEST))
    },
    dfa: function() {},
    LN: function() {
        this.f_(!0), this.o_(!1), this.ds(this.jl), q.q.clearColor(0, 0, 0, 1)
    },
    Vfa: function(t) {
        this.Gt = t
    },
    RN: function() {
        var t = !!this.rc && this.rc instanceof q.$a;
        this.bj && this.bj instanceof q.$a || (this.rc && (this.rc.Zh(), this.rc.kb()), this.vm && this.rc && this.rc.Ug()), this.rc = this.bj, this.bj = null, t || null == this.rc || (this.rc.ba(), this.rc.Yh())
    },
    Xfa: function(t) {
        this.Iq = t
    },
    zb: function() {
        return this.rD
    },
    tc: function(t) {
        this.rD = t
    },
    I_: function(t) {
        this.Y = q.size(q.canvas.width, q.canvas.height), this.dj = t || q.Dc.getInstance(), q.Z !== q.Jb && ((t = q.Sd.getInstance()).oW(), t.fW(), this.jq(), this.LN(), this.Pe.Qz(!0))
    },
    dO: function() {
        if (this.dj) {
            var t = this.Y;
            this.dj.e0(0, 0, t.width, t.height)
        }
    },
    ds: function(t) {
        var i = this.Y;
        if (q.Z === q.eb) switch (this.dO(), t) {
            case q.gP:
                q.wk(q.Lk), q.Fr();
                h = new q.ta;
                q.yF(h, 0, i.width, 0, i.height, -1024, 1024), q.Gr(h), q.wk(q.Kk), q.Fr();
                break;
            case q.KG:
                var n = this.Ku(),
                    e = new q.ta,
                    h = new q.ta;
                q.wk(q.Lk), q.Fr(), q.SX(e, i.width / i.height, 2 * n), q.Gr(e), q.wk(q.Kk), q.Fr(), n = q.Hr(null, i.width / 2, i.height / 2, n), q.pM(h, n, q.Hr(null, i.width / 2, i.height / 2, 0), q.Hr(null, 0, 1, 0)), q.Gr(h);
                break;
            case q.hP:
                break;
            default:
                q.log("cocos2d: Director: unrecognized projection")
        }
        this.jl = t, q.VN()
    },
    gK: function() {
        this.df++, this.Qp += this.Tk, this.im && (this.em && this.gm && this.jm ? (this.Qp > q.fP && (this.gm.uc(this.DD.toFixed(3)), this.mx = this.df / this.Qp, this.Qp = this.df = 0, this.em.uc(this.mx.toFixed(1)), this.jm.uc((0 | q.Rh).toString())), this.em.za(), this.gm.za(), this.jm.za()) : this.jq()), q.Rh = 0
    },
    Aaa: function() {
        return this.vm
    },
    p9: function() {
        return this.rc
    },
    H6: function() {
        return this.mh
    },
    gaa: function() {
        return this.im
    },
    q_: function(t) {
        this.im = t
    },
    u9: function() {
        return this.DD
    },
    C8: function() {
        return this.dj
    },
    qaa: function() {
        return this.Gt
    },
    gz: function() {
        return this.sm
    },
    h$: function() {
        return this.gu
    },
    V8: function() {
        return this.jl
    },
    Jda: function() {
        this.gZ(1)
    },
    gZ: function(t) {
        q.d(null != this.rc, "A running Scene is needed");
        var i = this.gk,
            n = i.length;
        if (0 == n) this.end();
        else if (!(t > n)) {
            for (; n > t;) {
                var e = i.pop();
                e.Ke && (e.Zh(), e.kb()), e.Ug(), n--
            }
            this.bj = i[i.length - 1], this.vm = !1
        }
    },
    rg: function() {
        return this.Ng
    },
    R_: function(t) {
        this.Ng != t && (this.Ng = t)
    },
    Sh: function() {
        return this.mi
    },
    e_: function(t) {
        this.mi != t && (this.mi = t)
    },
    k$: function() {
        return this.Pe
    },
    dha: function(t) {
        this.Pe != t && (this.Pe = t)
    },
    Z7: function() {
        return this.Vn
    },
    Gfa: function(t) {
        this.Vn = t
    },
    D6: function() {
        return this.Qj
    },
    Cea: function(t) {
        this.Qj != t && (this.Qj = t)
    },
    m7: function() {
        return this.Tk
    },
    t8: function() {
        return this.Dh
    },
    Tfa: function(t) {
        this.Dh != t && (this.Dh = t)
    },
    jq: null,
    hS: function() {
        if (null != q.n.mJ && 0 != q.n.mJ) {
            var t = new q.rb;
            t.Qd(q.n.tC), t.Bd();
            var i = q.Dc.getInstance().je.height / 320;
            0 === i && (i = this.Y.height / 320);
            var n = new q.he;
            n.FD(!0), n.pd("00.0", t, 12, 32, "."), n.vb(i), this.em = n, (n = new q.he).FD(!0), n.pd("0.000", t, 12, 32, "."), n.vb(i), this.gm = n, (n = new q.he).FD(!0), n.pd("000", t, 12, 32, "."), n.vb(i), this.jm = n, t = q.LG, this.jm.i(q.Rf(q.a(0, 34 * i), t)), this.gm.i(q.Rf(q.a(0, 17 * i), t)), this.em.i(t)
        }
    },
    gS: function() {
        var t = 0,
            t = this.Y.width > this.Y.height ? 0 | this.Y.height / 320 * 24 : 0 | this.Y.width / 320 * 24;
        this.em = q.Aa.create("000.0", "Arial", t), this.gm = q.Aa.create("0.000", "Arial", t), this.jm = q.Aa.create("0000", "Arial", t);
        var t = q.LG,
            i = this.jm.g();
        this.jm.i(q.Rf(q.a(i.width / 2, 5 * i.height / 2), t)), i = this.gm.g(), this.gm.i(q.Rf(q.a(i.width / 2, 3 * i.height / 2), t)), i = this.em.g(), this.em.i(q.Rf(q.a(i.width / 2, i.height / 2), t))
    },
    VI: function() {
        this.DD = (Date.now() - this.al) / 1e3
    }
}), q.pa.Rc ? (q.n.prototype.QE = q.n.prototype.nS, q.n.prototype.jq = q.n.prototype.hS) : (q.n.prototype.QE = q.n.prototype.mS, q.n.prototype.jq = q.n.prototype.gS), q.kP = q.n.extend({
    ez: !1,
    lO: function() {
        this.Gt = !0, this.ez = !1, q.kn.getInstance().hv(this.mh)
    },
    GM: function() {
        this.Rx ? (this.Rx = !1, this.oZ()) : this.ez || this.QE()
    },
    nO: function() {
        this.ez = !0
    },
    hv: function(t) {
        this.mh = t, this.ez || (this.nO(), this.lO())
    }
}), q.Lz = null, q.xL = !0, q.n.getInstance = function() {
    return q.xL && (q.xL = !1, q.Lz = new q.kP, q.Lz.init(), q.Lz.I_(q.Dc.getInstance())), q.Lz
}, q.y6 = !0, q.UV = 60, q.n.tC = new Image, q.n.tC.addEventListener("load", function() {
    q.n.mJ = !0, this.removeEventListener("load", arguments.callee, !1)
}), q.n.tC.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAYAAAD9qabkAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfcAgcQLxxUBNp/AAAQZ0lEQVR42u2be3QVVZbGv1N17829eRLyIKAEOiISEtPhJTJAYuyBDmhWjAEx4iAGBhxA4wABbVAMWUAeykMCM+HRTcBRWkNH2l5moS0LCCrQTkYeQWBQSCAIgYRXEpKbW/XNH5zS4noR7faPEeu31l0h4dSpvc+t/Z199jkFWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhY/H9D/MR9qfKnLj/00U71aqfJn9+HCkCR/Wk36ddsgyJ/1wF4fkDfqqm9/gPsUeTnVr6a2xlQfnxdI7zs0W7irzD17Ytb2WT7EeNv/r4ox1O3Quf2QP2pgt9utwfout4FQE8AVBSlnaRmfvAURQkg2RlAbwB9AThlW5L0GaiKojhJhgOIBqDa7XaPrusdPtr5kQwF0BVAAoBIABRCKDd5aFUhRDAAw57eAOwAhKIoupft3zoqhB1AqLwuHIBut9uFt02qqvqRDJR2dAEQJj/BAOjn56dqmma+xiaECAEQAWAggLsB6A6HQ2iaZggBhBAqgEAAnQB0kzaEmT4hAITT6VQ8Ho/HJAKKECJQtr8LwD1y/A1/vcdfEUIEyfZ9AcQbYvZ942Px88L2UwlJR0dH0EMPPbRj5syZPUeNGrXR7Xb/641xIwJ1XY9NSUlZm52dfW+XLl1w8uRJzJ8//+OGhoYJqqqe1TSt1Wsm9NN1PSIqKmr12rVrR5WUlHy1bdu2AQCumWc3IYRD1/UwVVXnFRQUTIuNjUVzczN2797dWFJSkq8oymZd15sAGAEnFEUJ1nX9nzIzM1dnZmZGh4SE4OTJk5g5c+Zf29vbp9pstrMej6fVOyhIhgAYU1hY+B+hoaGoqKg4XVlZea+XTULTNFdCQsLGiRMnPuR2u3UhBOV9eeDAAWXTpk095DUe6WsoyRE5OTlr0tLSAux2O/bs2cO5c+e+pijKUpIXSHaQVAGkvPLKK++6XK4OksJLCFlXV2cvKSlJBFAjhU+x2WwhHo9nUHp6+urMzMy7wsLCUF9fjxdffPHjxsbGiTab7WuPx9NiEutOuq4PyMjI+M+srKyYqKgoHD58GDNmzNjq8XhyVFU9b/q+LH7hBAEYu3PnTlZVVRFAGgCX6f/tAHoOHDjwa0p27txp/JO9e/f+QM7cipw9nfL3kQBKt2zZQpJ87rnn6mQmoHilw2EACs+cOUOSrK+vZ1NTE0nyo48+IoBpxswoBcMJ4Ndjx471kOTFixe5d+9ekqTH42H//v13A4jyzpAURfEH0H/OnDnthu1z5sw558MmFUCPWbNmnaMP3nrrLZoyDmP8Hl68eDFJ8siRI9/Yc+zYMQKYKdtAztrTrl27xptRXV1NAKMAOAyBBBA/Y8aMdpLs6Ojgxx9//E37+++//29yvFXppwvAwMcee8xjtDHsuXLlCqOjo//ia3wsfpkoALqFhoZuIckJEyackimm3dQmEMDUmpoakmRISMhhAHOHDx/eQJIbN24kgKEyMAHAFRMTs2XXrl1saWkhSZ0kp0+ffhrAr3wEW/S8efOukORLL72kA1gKYMPWrVtJkk899dRJAHeYrgsEsIQkjx8/TgDvAPjd448/3kaSb7zxBmUa7vC6z53BwcFbSHL9+vU6Sc6aNes8gF5ewWAH0PfVV18lSQL4DMBGIcQ6AKtcLleBFC2jXtFt8ODBe0iyoqKCAJYByC8qKmJDQwOzsrK+MAmqo1OnTveHhoa+GRkZ+XZkZOSWiIiIvzgcjk9mzpypkWRmZuZpmbYbGV4AgPnNzc1sa2sjgN0A5iQmJtaSZHl5OQHcb/K3s81mW0uSTU1NBFAFYFbfvn1Pk+Tbb79NAA8IIVzW42/hByA+Pz/fLR/2ZXIda05NI/z9/TeR5J49ewhgqlxTrtI0jY2NjQQw3zTLuWJiYjaUlJToS5Ys6fjkk080kwDEeAmADcA9GzZsIElGRUW9CyAWwLApU6Y0kOSKFSsog9QICGdERMTGsrIyZmVlEcC9AB4IDw/fTpLbtm0jgN94CUAnAJmVlZVcs2aNZ/LkyRdJcvbs2b4EwAkgZfPmzTxw4AABFAN4BkC6vFeUSewcAO5duXIlSTIhIaEawGMAxgKYAmAGgCS73e5vrKVk/yGythANYEhCQsIhkly+fDkBpKqqGmL6DgIALDKN/3yZpVWQZGVlJQE8aPI3KiMjo5okV61aRQAjAPQBMPfIkSN0u90EUCBtsPiFEwpgbn19PdetW2fM5N4zQ9ekpKQqkty0aRMBpMjiWM6JEydIkoqirJUFJ6iq6pAPVy8A6cZMehMBUACEuVyuFwG8HBwcPEIWx367ZMkSjSQXLVrUJouTRorrkAHdA8BdQogsAOsKCwtJkmPGjDkvMw2bDDo/ADEjRoz4XylyFbm5uY0mAbjLyyZ/AOOrq6tZVlbWsWDBgo69e/eyoqKCgwcPPg4gSQaoIRbp27dvN7KF+tLSUr28vJwFBQXtMpvpYRIM7+wrAkDeqVOnePbsWQIoNKfzpiXPg8uXLydJJicnNwF4f+nSpW6STEtLq5fjYwhk1wkTJtSQ5Ouvv04AqTKj+N2xY8dIkgEBAW/Ie1v8wncRegwZMmQvSfbr12+3Ua33WqPfOWbMmP0kWVpaSgCDZAqcfejQIWNZsEGKgvnh9gfQb9myZd8nAEJVVZtMkUNk8CcNHTq0liR1XWdYWNhmH1mJIme80OnTp18x1rp5eXkEsNJms92Fb7e/IgEsvHz5Mp999tkmAI/l5uZeMC0B7vEqqAYAyL106RJJsra2lpWVld+sucePH38ZQG+5NncBeOrgwYMkqbe3t/Po0aOsra011wAWyl0H7x0JJ4DE+fPnu0kyPT29DsDdUrBuyNKEEAkAdpw/f/6GeoEM8GUmfwEgPCIiopwkGxsbabPZPgOw6L777vvm4p49e26VGYjFLxUhhD+ApLKyMp44ccIoVnXybgbgzkcfffRzklyzZg0BDJYCMMmoCwQFBXkLgLGWvvcWAgBToSsKwNPTp09vMR7UuLi4rwH0lgU8c/Db5ezbeeTIkRWzZ8++aMxu+fn5BPCADBwHgP4LFy701NXVEUAJgAnPP/98kyxMNgHo53A4zH77BQQETMvPz7+Um5vbBuAlAFMSExPPmdbVL0qh8Acw8fDhw5SCchVAEYAVb775JknyhRdeaJYztHfxMwLAaqNwCGC2FArv8x0hAHKNLGPKlCme5OTk/Zs3bzb7O0wKiiG8KXl5ed8IxenTp0mSR48e1UmyW7duWywBuD2xyQcgFECgoih+8H1gyJgZV5Lkyy+/3CbTRIePtl2HDBmyw1QBHyGDdXZdXR1JUghRKkXBjOMHCoBdpr0L3nvvPZLkF198wejo6O0A4lVVDTb74HQ6AwD8Wq7Jh8rgGgDgQ13XjVR8qaxJuADMbmlpYXl5uV5UVNRWUFDgfv/993Vj/ZydnU1c37eHXML4S3viAcQqitJD2l104cIFY8lTKsXSBWBMVVWVcd9yed2A1NTUQ6Zl00CvLMMOoHdubm6zFIlWOf5+PsY/Kj09vdrU11QAwwGsv3jxIk21m2DZr10I0RXAuAcffPBgaWkpV69eTYfDcdiwUxY0w6xw+flX8L1xApjevXv3lREREaW6rofB93aPDUDQpEmTMgHgtddeqwBwEd/utZvpqK6uPgEAcXFxkA94NwB9unfvjrNnz4LklwDcf08iIqv66Zs2bXrl4YcfxooVKxAbG7uqrq5uAYA2TdOEqqpGYIi2tjbl6aeffu/YsWPv5uTk7JaC1wHg4Pnz542MwoVvTx+21dbWYvjw4WLixIl+2dnZ9lGjRgmSTE1NRUpKCkwFTGiaxtTU1OXTpk3707Bhw/6g67pDipnT4biuj7qut+Lbk3Vf1tTUXI9qu91Pjq1QFEUBgJaWFgBo8yGOQ8eNGxcAAOvXr/8QwBUfYygAKL169eoCABcuXACAWtn2hOGv0+kMNO1KiPDw8F4A4rZv3/7R1KlTR0+bNu1ht9u9r1+/fqitrQXJgwDarRC6/QjPzs4+QJIffPCB9/aQmSAA43ft2mW0e1QGoi8CAPyLsZccExNTC2BlRkbGRdOyYJCP2csBIN6UAZzCd7cBbQCijYp/dXU1ExMTz6SmptaMHj36f9LS0vYlJCRsl6mxIWSdu3fv/g5J7t+/nwC2AShMTk6+SJKff/45AWRLYbD7+fndAeDf5BJnLoCCyZMnt5JkdnZ2C4B/F0KEm1Pu+Pj4rST55ZdfEsBWAK+mpaVdMo3raDn7KwDuSEpK+m+S3LBhAwG8DuCtHTt2UBbpjgC408vvcFVV15HkuXPnjMp+p5uMf0RcXNyHJNnQ0EBVVfcCWBQXF3fG+Jv0yxABPwB5LS0tRmFxN4BlTzzxxGWSXLx4sS5F3GGFy+1Hp5SUlJq6ujoWFxdTpsZ2H+0iIyMj/0iSWVlZX5mr5jfJFroPGzasxlhTnjp1iiTZ3NxMl8tlrCd9pfa9SkpKSJI5OTmnZOageLUZZqxvfVFWVkZcPwdgNwnSCKPqb17jkmR8fPzfZMDZ5CRsFBmNI7h95s2b1yhT7/MAYmStwCx4vy0uLqa3v5qmEcCfvSr1QQAeXb16NY3Cm3HQ55133iGAp+SxZTNhKSkpfzUddkrFjYevzAQCeGjp0qXfsYckY2NjTwD4leGDLCL2HTdunNtoY+zWSHFcIHdsFCtcfuZ1vO9Eqs3m7/F47sb1k2qX/f3997W2tl7BjWfpBYDOzzzzzIVJkyZh0KBBCwEsB3AJvl9AETabLcDj8dwRFRW1ctasWb8JCgpSzp07d62wsPC/Wltb8xRFadR1/ZqPXYbgAQMGbI2Pjw/+6quv9ldVVT0r01ezuPRJSUn5Y9euXXVd11WzDaqq6kePHm3+7LPPRgO4KlNuxWazhXo8nuTk5OSXMjIyEl0uFxoaGtqKior+dPXq1VdUVT0jj7r68ieoT58+vx8yZMjdx48fP1JVVTVF9m20VW02WyfZf97YsWPjXS4X6urqWvPy8jYCWCyEuEDS8FdVFKWzruv//OSTTy5OTk7uqWkaPv3007qysrJ8RVH+LI8ym8/rB3Tu3HnRI488knLo0KG2ffv2ZQI4C98vP6mqqoZqmpaclpa2cOTIkX39/f3R0NDQUVxc/G5TU9PLqqrWa5rWLH1QVFUN0TStX1JSUvH48eP7BwYG4uDBg1cKCgpeBbBe2u+2Qug2EwD5N5sMPuNtMe8XP4TT6Qxoa2sbIGeXvUKIK7d4IISiKC5d1wPljOfA9bPwzYqiXNV13dd6Uqiq6qdpml2mpe02m63d4/G4vcTF5fF47LJf71nJA6BZVVW3pmntuPHlmAD5wk6Q9NnbHp9vHaqq6tA0zU/64PZhk1FfCZB9G/23ALiqKEqzD39tpvbGUqoFwFUhRLP3yzpCCDtJpxyXDulfG27+pqRR3DXsUWVd4Yq0x/taVQjhIhksC8L+ABpM9ljBf5sKwI8pIBr75L5E4vvu+UNeG/a+hv+AL7yFH8qPtOfHjtOP6V/Bja8D6z/B2Nys/1u9Xv33tLf4GfF/LC4GCJwByWIAAAAASUVORK5CYII=", q.ms = q.ca.extend({
    ot: null,
    pt: null,
    qt: null,
    cq: null,
    dq: null,
    eq: null,
    ju: null,
    ku: null,
    lu: null,
    ga: null,
    Fx: null,
    ctor: function() {
        this.Fx = new q.ta, this.restore()
    },
    description: function() {
        return "<CCCamera | center =(" + this.cq + "," + this.dq + "," + this.eq + ")>"
    },
    ug: function(t) {
        this.ga = t
    },
    Dr: function() {
        return this.ga
    },
    restore: function() {
        this.ot = this.pt = 0, this.qt = q.ms.Ku(), this.ju = this.cq = this.dq = this.eq = 0, this.ku = 1, this.lu = 0, q.Yo(this.Fx), this.ga = !1
    },
    GF: function() {
        if (this.ga) {
            var t = new q.ec,
                i = new q.ec,
                n = new q.ec;
            q.Hr(t, this.ot, this.pt, this.qt), q.Hr(i, this.cq, this.dq, this.eq), q.Hr(n, this.ju, this.ku, this.lu), q.pM(this.Fx, t, i, n), this.ga = !1
        }
        q.Gr(this.Fx)
    },
    tfa: function(t, i, n) {
        this.HN(t, i, n)
    },
    HN: function(t, i, n) {
        this.ot = t, this.pt = i, this.qt = n, this.ga = !0
    },
    Tea: function(t, i, n) {
        this.l_(t, i, n)
    },
    l_: function(t, i, n) {
        this.cq = t, this.dq = i, this.eq = n, this.ga = !0
    },
    qha: function(t, i, n) {
        this.d0(t, i, n)
    },
    d0: function(t, i, n) {
        this.ju = t, this.ku = i, this.lu = n, this.ga = !0
    },
    G7: function() {
        return {
            x: this.ot,
            y: this.pt,
            z: this.qt
        }
    },
    NL: function() {
        return {
            x: this.ot,
            y: this.pt,
            z: this.qt
        }
    },
    S6: function() {
        return {
            x: this.cq,
            y: this.dq,
            z: this.eq
        }
    },
    IL: function() {
        return {
            x: this.cq,
            y: this.dq,
            z: this.eq
        }
    },
    r$: function() {
        return {
            x: this.ju,
            y: this.ku,
            z: this.lu
        }
    },
    ZW: function() {
        return {
            x: this.ju,
            y: this.ku,
            z: this.lu
        }
    },
    Q3: function() {}
}), q.ms.Ku = function() {
    return q.aw
}, q.iw = -2147483648, q.C2 = q.iw + 1, q.Fv = function(t, i) {
    if (t && 0 < t.length)
        for (var n = 0; n < t.length; n++)
            if (!(t[n] instanceof i)) {
                q.log("element type is wrong!");
                break
            }
}, q.ln = function(t, i) {
    t.splice(i, 1)
}, q.Zf = function(t, i) {
    for (var n = 0, e = t.length; n < e; n++)
        if (t[n] == i) {
            t.splice(n, 1);
            break
        }
}, q.j1 = function(t, i) {
    for (var n = 0, e = i.length; n < e; n++) q.Zf(t, i[n])
}, q.i1 = function(t, i) {
    return t.indexOf(i)
}, q.g1 = function(t, i) {
    t.push(i)
}, q.Qi = function(t, i, n) {
    return t.splice(n, 0, i), t
}, q.h1 = function(t, i, n) {
    return t.splice.apply(t, [n, 0].concat(i)), t
}, q.Ev = function(t, i) {
    for (var n = 0, e = t.length; n < e; n++)
        if (t[n] == i) return n;
    return -1
}, q.wp = function(t, i) {
    return -1 != q.Ev(t, i)
}, q.Hj = function(t, i) {
    if (null == t) return null;
    for (var n = 0; n < t.length; n++)
        if (t[n].target === i) return t[n];
    return null
}, q.$G = function(t, i, n) {
    this.next = null, this.target = t, this.jN = i, this.paused = n, this.Gl = !1
}, q.QG = function(t, i, n) {
    this.list = t, this.pk = i, this.target = n, this.Ty = null
}, q.EP = function(t, i) {
    this.dh = null, this.target = t, this.gs = 0, this.yu = this.xu = null, this.paused = i, this.Ty = null
}, q.Iw = q.ca.extend({
    zh: 0,
    Og: null,
    C: null,
    Gb: 0,
    WJ: !1,
    py: !1,
    Yq: 0,
    zD: 0,
    hx: 0,
    ctor: function() {},
    Y7: function() {
        return this.zh
    },
    setInterval: function() {},
    x9: function() {
        return this.Og
    },
    Uh: function(t, i, n, e, h) {
        return this.C = t, this.Og = i, this.Gb = -1, this.zh = n || 0, this.hx = h || 0, this.py = 0 < this.hx, this.zD = null == e ? q.As : e, this.WJ = this.zD == q.As, !0
    },
    TB: function() {
        "string" == typeof this.Og ? this.C[this.Og](this.Gb) : this.Og.call(this.C, this.Gb)
    },
    update: function(t) {
        if (-1 == this.Gb) this.Yq = this.Gb = 0;
        else {
            var i = this.C,
                n = this.Og;
            this.WJ && !this.py ? (this.Gb += t, this.Gb >= this.zh && (i && n && this.TB(), this.Gb = 0)) : (this.Gb += t, this.py ? this.Gb >= this.hx && (i && n && this.TB(), this.Gb -= this.hx, this.Yq += 1, this.py = !1) : this.Gb >= this.zh && (i && n && this.TB(), this.Gb = 0, this.Yq += 1), this.Yq > this.zD && q.n.getInstance().rg().xO(i, n))
        }
    }
}), q.Iw.Oha = function(t, i, n) {
    if (2 > arguments.length) throw Error("timerWithTarget'argument can't is null");
    var e = new q.Iw;
    return e.Uh(t, i, n || 0, q.As, 0), e
}, q.A4 = null, q.WQ = q.ca.extend({
    fu: 1,
    Ai: null,
    pj: null,
    Oh: null,
    Zk: null,
    hg: null,
    dg: null,
    Uj: !1,
    ny: !1,
    ctor: function() {
        this.fu = 1, this.Ai = [], this.pj = [], this.Oh = [], this.Zk = [], this.hg = [], this.dg = null, this.ny = this.Uj = !1
    },
    yD: function(t) {
        t.Iw = null, t.target = null, q.Zf(this.hg, t)
    },
    sS: function(t, i) {
        for (var n = 0; n < t.length; n++)
            if (t[n].target == i) return t[n];
        return null
    },
    Tx: function(t) {
        (t = this.sS(this.Zk, t.target)) && (q.Zf(t.list, t.pk), t.pk = null, t.target = null, q.Zf(this.Zk, t))
    },
    PJ: function(t, i, n, e) {
        if (e = new q.$G(i, n, e), t) {
            for (var h = !1, s = 0; s < t.length; s++)
                if (n < t[s].jN) {
                    t = q.Qi(t, e, s), h = !0;
                    break
                }
            h || t.push(e)
        } else(t = []).push(e);
        return this.Zk.push(new q.QG(t, e, i)), t
    },
    PR: function(t, i, n) {
        n = new q.$G(i, 0, n), t.push(n), this.Zk.push(new q.QG(t, n, i))
    },
    aha: function(t) {
        this.fu = t
    },
    f$: function() {
        return this.fu
    },
    update: function(t) {
        this.ny = !0, 1 != this.fu && (t *= this.fu);
        var i, n;
        for (n = 0; n < this.Ai.length; n++)(i = this.Ai[n]).paused || i.Gl || i.target.update(t);
        for (n = 0; n < this.pj.length; n++)(i = this.pj[n]).paused || i.Gl || i.target.update(t);
        for (n = 0; n < this.Oh.length; n++)(i = this.Oh[n]).paused || i.Gl || i.target.update(t);
        for (n = 0; n < this.hg.length; n++) {
            if (i = this.dg = this.hg[n], this.Uj = !1, !this.dg.paused)
                for (i.gs = 0; i.gs < i.dh.length; i.gs++) i.xu = i.dh[i.gs], i.yu = !1, i.xu.update(t), i.xu = null;
            this.Uj && 0 == this.dg.dh.length && this.yD(this.dg)
        }
        for (n = 0; n < this.Ai.length; n++) this.Ai[n].Gl && this.Tx(this.Ai[n]);
        for (n = 0; n < this.pj.length; n++) this.pj[n].Gl && this.Tx(this.pj[n]);
        for (n = 0; n < this.Oh.length; n++) this.Oh[n].Gl && this.Tx(this.Oh[n]);
        this.ny = !1, this.dg = null
    },
    YZ: function(t, i, n, e, h, s) {
        q.d(i, "scheduler.scheduleCallbackForTarget() Argument callback_fn must be non-NULL"), q.d(t, "scheduler.scheduleCallbackForTarget() Argument target must be non-NULL"), n = n || 0, e = null == e ? q.As : e, h = h || 0, s = s || !1;
        var r = q.Hj(this.hg, t);
        if (r ? q.d(r.paused == s, "Sheduler.scheduleCallbackForTarget()") : (r = new q.EP(t, s), this.hg.push(r)), null == r.dh) r.dh = [];
        else
            for (var a = 0; a < r.dh.length; a++)
                if (s = r.dh[a], i == s.Og) return q.log("CCSheduler#scheduleCallback. Callback already scheduled. Updating interval from:" + s.zh.toFixed(4) + " to " + n.toFixed(4)), void(s.zh = n);
        (s = new q.Iw).Uh(t, i, n, e, h), r.dh.push(s)
    },
    zN: function(t, i, n) {
        var e = q.Hj(this.Zk, t);
        e ? (1 <= q.xp && q.d(e.pk.Gl, ""), e.pk.Gl = !1) : 0 == i ? this.PR(this.pj, t, n) : 0 > i ? this.Ai = this.PJ(this.Ai, t, i, n) : this.Oh = this.PJ(this.Oh, t, i, n)
    },
    xO: function(t, i) {
        if (null != t && null != i) {
            var n = q.Hj(this.hg, t);
            if (null != n)
                for (var e = 0; e < n.dh.length; e++) {
                    var h = n.dh[e];
                    if (i == h.Og) {
                        h != n.xu || n.yu || (n.yu = !0), q.ln(n.dh, e), n.gs >= e && n.gs--, 0 == n.dh.length && (this.dg == n ? this.Uj = !0 : this.yD(n));
                        break
                    }
                }
        }
    },
    hs: function(t) {
        null != t && null != (t = q.Hj(this.Zk, t)) && (this.ny ? t.pk.Gl = !0 : this.Tx(t.pk))
    },
    wO: function(t) {
        if (null != t) {
            var i = q.Hj(this.hg, t);
            i && (!i.yu && q.wp(i.dh, i.xu) && (i.yu = !0), i.dh.length = 0, this.dg == i ? this.Uj = !0 : this.yD(i)), this.hs(t)
        }
    },
    sp: function() {
        this.J0(q.iw)
    },
    J0: function(t) {
        var i;
        for (i = 0; i < this.hg.length; i++) this.wO(this.hg[i].target);
        if (0 > t)
            for (i = 0; i < this.Ai.length; i++) this.hs(this.Ai[i].target);
        if (0 >= t)
            for (i = 0; i < this.pj.length; i++) this.hs(this.pj[i].target);
        for (i = 0; i < this.Oh.length; i++) this.Oh[i].jN >= t && this.hs(this.Oh[i].target)
    },
    Cda: function() {
        return this.YY(q.iw)
    },
    YY: function(t) {
        var i, n, e = [];
        for (i = 0; i < this.hg.length; i++)(n = this.hg[i]) && (n.paused = !0, e.push(n.target));
        if (0 > t)
            for (i = 0; i < this.Ai.length; i++)(n = this.Ai[i]) && (n.paused = !0, e.push(n.target));
        if (0 >= t)
            for (i = 0; i < this.pj.length; i++)(n = this.pj[i]) && (n.paused = !0, e.push(n.target));
        for (i = 0; i < this.Oh.length; i++)(n = this.Oh[i]) && (n.paused = !0, e.push(n.target));
        return e
    },
    TZ: function(t) {
        if (t)
            for (var i = 0; i < t.length; i++) this.hp(t[i])
    },
    cv: function(t) {
        q.d(null != t, "Scheduler.pauseTarget():entry must be non nil");
        var i = q.Hj(this.hg, t);
        i && (i.paused = !0), (t = q.Hj(this.Zk, t)) && (q.d(null != t.pk, "Scheduler.pauseTarget():entry must be non nil"), t.pk.paused = !0)
    },
    hp: function(t) {
        q.d(null != t, "");
        var i = q.Hj(this.hg, t);
        i && (i.paused = !1), (t = q.Hj(this.Zk, t)) && (q.d(null != t.pk, "Scheduler.resumeTarget():entry must be non nil"), t.pk.paused = !1)
    },
    Daa: function(t) {
        return q.d(null != t, "Scheduler.isTargetPaused():target must be non nil"), !!(t = q.Hj(this.hg, t)) && t.paused
    }
}), q.RA = {
    IMAGE: ["png", "jpg", "bmp", "jpeg", "gif"],
    SOUND: ["mp3", "ogg", "wav", "mp4", "m4a"],
    XML: ["plist", "xml", "fnt", "tmx", "tsx"],
    BINARY: ["ccbi"],
    FONT: "FONT",
    TEXT: ["txt", "vsh", "fsh", "json"],
    UNKNOW: []
}, q.Kb = q.ca.extend({
    kq: 0,
    hu: 0,
    Cx: 0,
    fo: null,
    mh: 1 / 60,
    zh: null,
    xJ: !1,
    ctor: function() {
        this.fo = []
    },
    Pu: function(t, i, n) {
        if (q.d(null != t, "resources should not null"), i && (this.Og = i, this.C = n), t != this.fo || 0 == this.kq) {
            if (this.Cx = this.kq = 0, t[0] instanceof Array)
                for (i = 0; i < t.length; i++) this.fo = this.fo.concat(t[i]);
            else this.fo = t;
            this.hu = this.fo.length
        }
        this.YT()
    },
    h_: function(t) {
        this.xJ = t
    },
    Qm: function(t) {
        q.log("cocos2d:Failed loading resource: " + t)
    },
    $h: function() {
        this.Cx++
    },
    wr: function() {
        return 0 == this.hu ? 100 : 0 | this.Cx / this.hu * 100
    },
    yZ: function(t) {
        if (t && 0 < t.length)
            for (var i, n = q.Ka.getInstance(), e = q.Xe.getInstance(), h = q.Si.getInstance(), s = q.Yc.getInstance(), r = 0; r < t.length; r++) {
                i = t[r];
                var a = this.nJ(i);
                switch (a) {
                    case "IMAGE":
                        n.JZ(i.src);
                        break;
                    case "SOUND":
                        e.vO(i.src);
                        break;
                    case "XML":
                        h.H0(i.src);
                        break;
                    case "BINARY":
                        s.G0(i.src);
                        break;
                    case "TEXT":
                        s.I0(i.src);
                        break;
                    case "FONT":
                        break;
                    default:
                        throw "cocos2d:unknown filename extension: " + a
                }
            }
    },
    JT: function() {
        if (this.yo(), this.xJ) {
            var t = q.n.getInstance().mx;
            if (null != t && 20 > t) return void q.log("cocos2d: frame rate less than 20 fps, skip frame.")
        }
        this.kq < this.hu && (this.gT(), this.kq++)
    },
    gT: function() {
        var t = q.Ka.getInstance(),
            i = q.Xe.getInstance(),
            n = q.Si.getInstance(),
            e = q.Yc.getInstance(),
            h = this.fo[this.kq],
            s = this.nJ(h);
        switch (s) {
            case "IMAGE":
                t.cc(h.src);
                break;
            case "SOUND":
                i.Ur(h.src);
                break;
            case "XML":
                n.lZ(h.src);
                break;
            case "BINARY":
                e.iZ(h.src);
                break;
            case "TEXT":
                e.mZ(h.src);
                break;
            case "FONT":
                this.LT(h);
                break;
            default:
                throw "cocos2d:unknown filename extension: " + s
        }
    },
    YT: function() {
        var t = this;
        this.zh = setInterval(function() {
            t.JT()
        }, 1e3 * this.mh)
    },
    oK: function() {
        clearInterval(this.zh)
    },
    nJ: function(t) {
        if (null != t.No) return q.RA.FONT;
        var i = (t = (t = t.src).substring(t.lastIndexOf(".") + 1, t.length)).indexOf("?");
        0 < i && (t = t.substring(0, i));
        for (var n in q.RA)
            if (-1 != q.RA[n].indexOf(t)) return n;
        return t
    },
    yo: function() {
        100 <= this.wr() && (this.oK(), this.$I())
    },
    $I: function() {
        this.C && "string" == typeof this.Og ? this.C[this.Og](this) : this.C && "function" == typeof this.Og ? this.Og.call(this.C, this) : this.Og(this), this.hu = this.Cx = this.kq = 0
    },
    LT: function(t) {
        var i = t.src,
            n = q.Yc.getInstance();
        if (i && 0 < i.length) {
            var e = document.createElement("style");
            e.type = "text/css", document.body.appendChild(e);
            for (var h = "@font-face { font-family:" + t.No + "; src:", s = 0; s < i.length; s++) h += "url('" + n.ee(encodeURI(i[s].src)) + "') format('" + i[s].type + "')", h += s == i.length - 1 ? ";" : ",";
            e.textContent += h + "};", (i = document.createElement("div")).style.fontFamily = t.No, i.innerHTML = ".", i.style.position = "absolute", i.style.left = "-100px", i.style.top = "-100px", document.body.appendChild(i)
        }
        q.Kb.getInstance().$h()
    },
    H4: function() {}
}), q.Kb.Tr = function(t, i, n) {
    return this.La || (this.La = new q.Kb), this.La.Pu(t, i, n), this.La
}, q.Kb.Kda = function(t, i, n) {
    return this.La || (this.La = new q.Kb), this.La.h_(!0), this.La.Pu(t, i, n), this.La
}, q.Kb.Hz = function(t) {
    this.La && this.La.yZ(t)
}, q.Kb.getInstance = function() {
    return this.La || (this.La = new q.Kb), this.La
}, q.Kb.La = null, q.GA = q.Eg.extend({
    Eq: null,
    Bh: null,
    Fm: null,
    hm: null,
    jc: null,
    sc: null,
    ctor: function() {
        q.Eg.prototype.ctor.call(this), this.sc = q.n.getInstance().Y
    },
    init: function() {
        q.Eg.prototype.init.call(this);
        var t = q.a(this.sc.width / 2, this.sc.height / 2);
        this.Bh = new Image;
        var i = this;
        this.Bh.addEventListener("load", function() {
            i.MC(t), this.removeEventListener("load", arguments.callee, !1)
        }), this.Bh.src = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAlAAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM4MDBEMDY2QTU1MjExRTFBQTAzQjEzMUNFNzMxRkQwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM4MDBEMDY1QTU1MjExRTFBQTAzQjEzMUNFNzMxRkQwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU2RTk0OEM4OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU2RTk0OEM5OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQADQkJCQoJDQoKDRMMCwwTFhENDREWGhUVFhUVGhkUFhUVFhQZGR0fIB8dGScnKionJzk4ODg5QEBAQEBAQEBAQAEODAwOEA4RDw8RFA4RDhQVERISERUfFRUXFRUfKB0ZGRkZHSgjJiAgICYjLCwoKCwsNzc1NzdAQEBAQEBAQEBA/8AAEQgAyACgAwEiAAIRAQMRAf/EALAAAAEFAQEAAAAAAAAAAAAAAAQAAgMFBgcBAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgUQAAIBAgIEBwoLBgQGAwAAAAECAwAEEQUhMRIGQVFxsTITFGGBwdEiQlKSMzWRoeFicqKyI1NzFYJjJDQWB9KjVCbxwkNkJWXik3QRAAIBAgMFBQcDBQEAAAAAAAABAhEDIRIEMUFRcTJhwVIUBZGhsSJyEzOB0ULhYpIjUxX/2gAMAwEAAhEDEQA/AMJSpUqAVKlXuFAeUq9wpUB5XuFe4V6ooDzZHDox0CnGMinzwl7Z8NajaHeoO3vmTBZBtp9YUIqTEV5ROxHKnWRnaU8VRMhFBUjpV7hSoSeUq9pUB5Sr2lhQHlKvcK8oBV7hSFSRrtaKAZs07YNPM1pG2xJIAw1jSeandry/8X4m8VCKkWwaWwam7Xl/4v1W8VLtmX/i/VbxUoKkWwakSM407tmX/i/VbxUmzGwjQsjdY41IARie/U0IbZO0kNtCXnOCkEBeFu4KI3Bs7DNb27ya+jDx3kJeEnpJJEcQVbWDsk17u5urd591ucZkWhym2Vnd9RkCDEpFxDRpbw0bunu5mlp2De2FMLYXOD2wB2xbOeraUcYGJ72mlSUiqzzdzMd3Z3mixltA2yzcK/NlHM1DQyRXce1HocdNOEfJXZ88y9ZojOqhiBszIRiHQ8Y4cK5TvHuzLljHNMqxNoDjLFraHHnjPxcNCGVbxEUzYNTx5jZSxhpW6qTzlwJ+DCvO2Zf+L9VvFSgqyHYNLYNTdssPxfibxUu15f8Ai/VPiqCakOwa82DU/a8v/F+JvFTDdWPBL8R8VKCvYRYV5UzoMAy6QdIIqI0B4KJtxiRQwou16QoGUkntH5Tz0RbZbmF2hktraSVBo2lUkY8tDye0flPPXTslVUyiyVRsjqUOA4yMT8dW2ram2m6UVTNq9S7EIyUVJydMTn/6DnP+im9Wl+g5z/opvVrpteEhQWY4AaSTwAVf5WPiZh/9S5/zj7zltzlmYWkfWXNvJDGTgGcYDHirR7i7mSbwXParsFMrgb7w6jKw/wCmnc9I14kF3vpvCljbMyWMOJL4aEiB8qU/ObUK7HYWVrl1pFZWiCOCBQqKOLjPGTrNZZqKbUXVHq2nNwTuJRk1VpbgXN8s7Rk5ym0UQQzhIG2NAjhxHWbI+gCBVjBBFbwxwQqEiiUJGg1BVGAFe7dV28WYLYZFmF2Th1UD7JGjymGyn1iK5OyzIBGB1HgrLZhamzumQAGJwSqnSCh1q3GOCodxt4cxurdcpzuN4cyhiWaF5Bg09udUmnWw1H/jV9nFuJ7Quo+8h8peThFA+047vduyMtk7fYqTl07YFdfUufMPzT5p71UdtlmYXaGS2t3mQHAsgxANdadYJopLe4QS2867EsZ4QfCNYrCFbjdDPmgkYyWFxgVf04ifJf6ScNdRUW1XBb6FU5TjF5EpSSrGu/s5lN+g5z/opvVpfoOc/wCim9WtdHnatvObJXDW7xLGhB8nrPaY9/HCr+tEdPCVaSeDoYLnqF63lzW4/PFSW3ecxbI84VSzWUwUaSdg0DXXK5nvAipnd6qgKvWnQO7pri9ZUEmm3Vl2j1kr8pRlFRyquBNZjGxQ/S56Y1S2fu9OVueon11Szahoou06QoQUXadIVCD2FJJ7R+U89dMydv8Axdn+TH9muZye0flPPXQstlK5Tbka1gUjlC1q0vVLkeb6r+O3Tx9xcY1nt8c0NrZCyiOE1108NYjGv1joo7Js1jzKyScYLIvkzL6LDwHXVJksH9Sb49dKNq0tj1jA6uriOCL+02FWX7iVtZX1/AzaHTyeoauKn2MX9W79zebiZCuR5MjSrhfXuEtwTrUeZH+yNfdrRNcxI6IzhXlJEak6WIGJ2Rw4ChWnChndtlVBLMdQA0k1gbXNMzzDfDLs6mjaPKppJbWwJ1bOwwxw43OnHh71YT3DpfWUJmFlb5jHHDdeXBHIsrRea5TSqvxqG04cNN62vetoCS4tre5mgnkGE9q+3DKOkuI2WX6LDQRRHWDh1UCtwj7QRg2wdl8Djgw1qe7XvW0BQ3kfZ7mSLgU+T9E6RVbnuVrnWVSWqj+Lt8ZbRuHEdKPkYVcZ2MJY5fSGyeVar45+rkWQHAqccalPE5km1htWK5nK4Wnt5FuUBUwOMG4nGkA/BXUrW4S6torlOjMgcd/xVn7rLo7zKs0uEjCNeSvdwoBhgsZxX1l2j36k3Lu+uyprdj5Vs5A+i/lD48a0aaVJOPi7jB6lbzWozpjB48pf1NDXNN4vfl7+Z4BXS65pvF78vfzPAK71XTHmZ/S/yT+jvJ7L3fHytz1E+upbL+Qj5W56jfXWRnsIYKLtekKEFGWvSFQgyjk9o/Keet3YthlMP/5x9msJJ7R+U89biyb/AMXEv7gD6tadL1T+kwepRrC39ZkLDMbiwMvUHRPG0bjlGg8ore/23sxBldxfMPLupNhT8yL/AORNZbdzJ484scytxgLqJY5LZj6Q2sV5G1Vud1mjjyG0ij0NEGSZToKyhjtqw4waztuiXA3qKTbSxltfGhbZlE95ZtZqxVbgiOZhrER9ph3Svk9+pJILZ4Y4DGBFCUMKjRsGPobPFhUfW0NJmljE2xJcIrcI2vFUEln1lRXd6lrazXT9GCNpD+yNqoI7mOVduNw6nzlOIoPOUa6yye1XXcbMR5GdQ3xY0BSbj31/FcTQZirJ+q431q7anbHCTZ72Bw7lbPrKBMcBWNNgbMBBh+bsjBdni0VJ1lARZs6yWiupxCuMDy6KpS2IwOo6DTr3Mre3e5tZZVUM4ZBjqOOJoWO4jkXajcOOMHGgDISvWIrdAkKR80+TzVl908bPPL3LzxOuHdifxVfiTAg92qI/w+/8gGgSyN/mR7XPVlp0lF/3L3mbVKtu5Hjbk/8AHE2Fc03i9+Xv5ngFdKNc13i9+Xv5ngFaNV0x5nn+l/kn9HeEWXu+PlbnqJ9dS2Xu9OVueon11kZ7CGCjLXpCgxRlr0hUIPYUcntH5Tz1s8vb+Bt1/dqPirGSe0flPPWusG/g4Py15q06XqlyMWvVYQ+ruI9xJOqzO9hOto/sP8tbGOFIrmWeM7IuMDMnAXXQJOUjQeOsJk0nY96ip0CYunrjaHx1t+srPJUbXBm2LrFPikwTOb+T+VhbZxGMrDXp83x1QSy2tucJpUjPETp+Cn5/ftaRvKvtp3Kx48HG3erHMzOxZiWZtLMdJNQSbbL71Vk6yynViOkqnEEfOWtPbXi3EQkGg6mXiNckjeSJxJGxR10qw0GtxuxmvbImD4CZMFlA4fRfv0BqesqqzTMZNMEDbIHtHH2QeCiZJSqMQdOGiue53mz3czQwsRbIcNHnkec3c4qAMuriz68gTIToxwOOnlp0MjxMJYW741Gs3RVldtbygE/dMcHX/moDaxTiWNZB53B3arb8/wC+4SOF4sf/AKxU9kcBsfOGHfoUHtG/RbzY5Die5HHhXdvavqiZ9Q8Jdlq4/gbKua7xe/L38zwCuhpf2Uk/Zo50kmwJKIdogDjw1VzzeL35e/meAVp1LTgqY4nn+mRauzqmqwrjzCLL3fHytz1E+upLL+Qj5W56jfXWRnroYKLtekKEFF2vSFQg9hSSe0flPPWosm/hIfoLzVl5PaPynnrRWb/w0X0F5q06XqlyM2sVYx5gmbFre/t71NY2T+0h8VbSO5SWNJUOKSAMp7jDGspmMPaLRlXS6eWve1/FRO7WYdbZm1Y/eW/R7qHxHRXGojlm3ulid6aVbaW+OALvgCLq2Hm9WxHKWqjhj6xsK1e8dm15l4niG1LZkswGsxtrPeOmsvayBJA1VItlWjptLuTdPMo7LtjRDq9naK4+WF9IrUW7BaHOljGqVHB7w2hzVoZt87d8vaNYSLl02CcRsDEbJbj71Uu7UBkvJ7/D7q2QoDxySaAO8MTXdxRVMpRp5XZOWdF/ms7R5XdyKfKWJsO/5PhrG5XlNxmEywW6bTnTxAAcJNbGSMXkM1pjgbiNo1PziPJ+Os7u7m/6ReM00ZOgxSpqYYHT3wRXMKN4ll9zUG4bQfNshu8sZVuEA2hirA4qe/VOwwrVbzbww5mI44UKRRYkbWG0S3JWctbd7u5WFfOOLHiUdJqmaipfLsIsObhWe001lMkMVvJNjhghIALMcBxCs7fxXQmkupx1bXDswGPlaTidVaEyKNXkoo4eBV+Sq7L7Vs9zcBgeyQ4GQ/MB1crmoim2orezqcowTuSeEY48jQ7oZX2PLzdyLhNd6RjrEY6I7+uspvH78vfzPAK6UAAAFGAGgAcArmu8Xvy9/M8ArTfio24RW5nnaG67uou3H/KPuqT2X8hHytz1G+upLL3enK3PUb66ys9RDBRdr0hQgou06QqEGUkntH5Tz1e238vF9BeaqKT2j8p56vbb+Xi+gvNWjTdUuRn1XTHmTh8KrJTJlt8t1CPIY44cGnpJVjTJYkmjaN9Ib4u7V923njTethRauZJV3PaW1rfLIiXEDYg6R4VYc9CXW7thfOZbKdbGZtLW8uPVY/u3GrkNUkM9zlcxUjbhfWOA90cRq4gv4LhdqN+VToNYWmnRm9NNVWNTyHc6VWBv8wt4YeHqm6xyPmroq1Z7WGFLSxTq7WLSuPSdjrkfumq5yHXDUeA92oO2SKpVumNAaoJLMXH3myp0rpJ4uKhc3tbDM5BMri1zAj79j7KTiY8TcdBpcsith0286o+sPCagEX9Pzg4zXUCp6QYse8oouCG3tk6m1BYv05W6T+IdyolxbHDAAa2OgDlNCz3ryN2WxBd5PJMg1t81eId2ukqnLlTBbfcuY+9uJLiRcvtPvHdsHK+cfRHcHDWsyawjyy0WBcDI3lTP6TeIcFV+S5OmXx9bJg1048o8Cj0V8Jq2DVu09nL80up7OxHi+oal3P8AXB/IsZS8T/YOV65zvCcc7vfzPAK3ivWCz445zeH954BXOr6I8yfSfyz+jvCLP3fHytz1G+upLP3fHytz1E+usbPaQ0UXadIUIKLtekKhB7Ckk9o/Keer22/l4/oLzVRSe0flPPV7b/y8X0F5q0abqlyM+q6Y8yQsBTDMor1o8aiaE1pbluMqS3sbLLHIhSRQyngqukhaJ9uBjo+H5aOa3ao2t34qouRlLajTalGP8v0IY8ylXQ+PKPFU/bYXOLPge6CKia0LaxTOxHu1Q7cuBd9yPEJ7TbjXKO8CajbMIF6CNIeNvJHjqIWJ7tSpYkalqVblwIdyG+RGXur0hXYJFxal+Dhq5y3slkv3Y2pD0pTr+QUClpJRUdo9XW4OLrTHtM16cZLLWkeC7y4jvlNEpcRtw1Ux27Ci448NZrTFy3nn3IQWxlgGrDZ3pza7/M8ArZo+ArF5171uvp+CqdV0R5l/psUrs2vB3hdl7vTlbnqJ9dS2Xu+PlbnqJ9dY2eshooq16QoQUXa9IVCD2FLJ7RuU89WNtmUSQqkgYMgw0accKrpPaPynnrZWG4Vi+VWmY5tnMWXG+XrIYnA0rhj0mdcTgdNdwnKDqjmduM1SRR/qlr8/4KX6pa8T/BVzDuLZXudRZblmbxXcPUNPc3KqCIwrbOzgrHEnHjoyD+3eSXkht7DeKG4umDGOJVUklfouThXfmbnZ7Cvy1vt9pmv1W1+d8FL9VteJvgq5yrcOGfLmzHN80iyyETPbptAEFo2ZG8pmUa1OFNn3Ky6W/sbDKM5hv5bx2WTZA+7RF2y52WOPJTzE+z2Dy1vt9pT/AKpacTerS/U7Tib1a04/t7kDXPY03jhN0W6sQ7K7W3q2dnrMccaDy/8At80kuZfqWYxWNtlcvUPPhiGYhWDeUy7IwYU8xPs9g8tb7faUn6pacTerTxm9oOBvVq3v9z927aynuId44LiWKNnjhAXF2UYhRg516qpsryjLr21665zFLSTaK9U2GOA87SwqY37knRU+BzOzags0s1Oyr+BKM6sxwP6tSDPLMen6vy0rvdm3Sxlu7K/S7WDDrFUDUTxgnTU826eXW7KlxmqQuwDBXUKcD+1Xee/wXuKX5XDGWLapSVcOyhEM/seJ/V+WnjeGx4pPV+Wkm6kKZlFay3Jlt7iFpYZY8ASVK6DjtDDA0f8A0Tl340/1f8Ndx8xJVWXB0KbktFFpNzdVXAC/qOwA0CQni2flrO3Vwbm5lnI2TKxbDirX/wBE5d+NcfV/wVR7xZPa5U9utvI8nWhmbbw0YEAYYAVxfhfy5rlKR4Fulu6X7mW1mzT8S4Yis/5CPlbnqJ9dSWfu9OVueon11mZvQ2i7XpChKKtekKhBlNJ7R+U89bDfGTb3a3ZX0Lcj6kdY+T2j8p560288m1kWQr6MJ+ylSAr+2cnV5renjs3H1loX+3j9XvbbtxLN9lqW4UnV5jdnjtXHxihtyZNjeSBu5J9k1BJe7xy7W5CJ/wCzuD/mTVTf2+fq97LJuLrPsNRueS7W6aJ/38x+vLVXuY+xvHaNxbf2GoCezf8A36j/APsSf8w1sLnqczTefJluYoLm5uo5F61sBshItP1cNFYe1f8A3ir/APfE/wCZUe9bB94r5jwuPsrQFhmG4l/Z2M17HdW90tuu3IkTHaCjWdIw0VVZdks9/C06yJFEp2dp+E1bbqybGTZ8vpQD7L1XRv8A7blT96Oda7tpNuuNE37Cq9KSisjyuUoxrStKllHbLlWTXsMs8chuSuwEPDqwoLe5y+YRE/gLzmqRekvKKtd4327yM/ulHxmrHJStySWVRyrjxKI2XC/CTlnlPPKTpTdFbP0L1bgrf5Lp0G3dPhQHwV0S1lzBsns3sESR8Crh9WAJGjSOKuU3E+zdZQ3oJh8IArdZXFDmOTpHa3i2+YrI2KtKy4ricBsBuHHgFXSo440+Wa2qqxjvM9uMoy+WvzWpLCWWWE28HxL6e43ojgkeSCBY1Ri5BGIUDT51cl3vm276BBqSEH4WbxV0tlkyXJcxTMb+OW6uY9mGHrCzDQwwAbTp2uKuTZ9N1uYsfRRR8WPhrm419mSSjRyiqxVK7y23B/ftuTm2oSdJyzNVw3BFn7vTlbnqF9dS2fu9OVueon11lZuQ2iLdsGFD05H2dNQGV0ntG5Tz1dWm9N1b2kVq8EVwsI2UaQaQOKhmitZGLOmk68DhSFvY+gfWNSAg7z3Qvo7yKCKIohiaNR5LKxx8qpxvjcqS0VpbxvwOAcRQPZ7D0G9Y0uz2HoH1jUCpLY7zXlpbm3eKO5QuzjrBqZji3x17PvNcyT288VvDBJbMWUovS2hslW7mFQ9nsPQPrGl2ew9A+saCod/WNxtbYsrfb17WBxx5ddD2281xC88klvDcSXEnWuzrqOGGC9zRUPZ7D0G9Y0uzWHoH1jQVCLreq6ntZbaO3it1mGy7RjTs1X2mYy20ZiCq8ZOODcdEdmsPQb1jS7PYegfWNdJuLqnQiSUlRqpFLmryxtH1Ma7Qw2gNNPOdSt0oI27p007s9h6B9Y0uz2HoH1jXX3Z+I4+1b8IJdX89xLHKQFMXQUahpxoiPN5P+onfU+A0/s9h6DesaXZ7D0D6xpG7OLbUtu0StW5JJx2bBsmbtiSiEk+cxoCWWSaVpZOk2vDVo0VYdnsPQb1jSNvZcCH1jSd2c+p1XAmFqEOmOPEfaH+BQd1ueo211IzrgFUYKNAAqI1WztCpUqVCRUqVKgFSpUqAVKlSoBUqVKgFSpUqAVKlSoBUqVKgFSpUqAVKlSoD/9k=", this.Bh.width = 160, this.Bh.height = 200, this.hm = q.wc.create(q.Ay(32, 32, 32, 255)), this.hm.i(0, 0), this.l(this.hm, 0), this.jc = q.Aa.create("Loading... 0%", "Arial", 14), this.jc.Qa(q.KK(180, 180, 180)), this.jc.w(0), this.jc.i(q.Rf(t, q.a(0, -110))), this.hm.l(this.jc, 10)
    },
    MC: function(t) {
        this.Fm = new q.rb, this.Fm.Qd(this.Bh), this.Fm.Bd(), this.Eq = q.m.nf(this.Fm), this.Eq.i(t), this.hm.l(this.Eq, 10), this.jT()
    },
    ba: function() {
        q.r.prototype.ba.call(this), this.di(this.iK, .3)
    },
    kb: function() {
        q.r.prototype.kb.call(this), this.jc.uc("Loading... 0%")
    },
    Pu: function(t, i, n) {
        this.OZ = t, this.c_ = i, this.target = n
    },
    iK: function() {
        this.Sl(this.iK), q.Kb.Tr(this.OZ, this.c_, this.target), this.di(this.yo)
    },
    jT: function() {
        var t = q.Zc.create(q.Xl.create(q.Ze.create(.25, q.a(0, 10))), q.tf.create(.5)),
            i = q.J.create(q.Cc.create(.15), t.u());
        this.Eq.A(t), this.jc.A(i)
    },
    yo: function() {
        var t = q.Kb.getInstance().wr();
        this.jc.uc("Loading... " + t + "%"), 100 <= t && this.Sl(this.yo)
    }
}), q.GA.Tr = function(t, i, n) {
    return this.La || (this.La = new q.GA, this.La.init()), this.La.Pu(t, i, n), (t = q.n.getInstance()).rc ? t.zk(this.La) : t.xN(this.La), this.La
}, q.wA = q.ca.extend({
    Ga: null,
    mga: function(t) {
        this.Ga = t
    },
    f9: function() {
        return this.Ga
    },
    ctor: function(t) {
        this.Ga = t
    },
    PE: function() {
        q.log("DrawingPrimitive.drawPoint() not implement!")
    },
    oL: function() {
        q.log("DrawingPrimitive.drawPoints() not implement!")
    },
    rj: function() {
        q.log("DrawingPrimitive.drawLine() not implement!")
    },
    rL: function() {
        q.log("DrawingPrimitive.drawRect() not implement!")
    },
    RE: function() {
        q.log("DrawingPrimitive.drawSolidRect() not implement!")
    },
    de: function() {
        q.log("DrawingPrimitive.drawPoly() not implement!")
    },
    Ky: function() {
        q.log("DrawingPrimitive.drawSolidPoly() not implement!")
    },
    lL: function() {
        q.log("DrawingPrimitive.drawCircle() not implement!")
    },
    pL: function() {
        q.log("DrawingPrimitive.drawQuadBezier() not implement!")
    },
    mL: function() {
        q.log("DrawingPrimitive.drawCubicBezier() not implement!")
    },
    kL: function() {
        q.log("DrawingPrimitive.drawCardinalSpline() not implement!")
    },
    Jy: function() {
        q.log("DrawingPrimitive.drawCardinalSpline() not implement!")
    }
}), q.pP = q.wA.extend({
    PE: function(t, i) {
        i || (i = 1);
        var n = q.a(t.x * q.ua(), t.y * q.ua());
        this.Ga.beginPath(), this.Ga.arc(n.x, -n.y, i * q.ua(), 0, 2 * Math.PI, !1), this.Ga.closePath(), this.Ga.fill()
    },
    oL: function(t, i, n) {
        if (null != t) {
            for (n || (n = 1), this.Ga.beginPath(), i = 0; i < t.length; i++) this.Ga.arc(t[i].x * q.ua(), -t[i].y * q.ua(), n * q.ua(), 0, 2 * Math.PI, !1);
            this.Ga.closePath(), this.Ga.fill()
        }
    },
    rj: function(t, i) {
        this.Ga.beginPath(), this.Ga.moveTo(t.x * q.ua(), -t.y * q.ua()), this.Ga.lineTo(i.x * q.ua(), -i.y * q.ua()), this.Ga.closePath(), this.Ga.stroke()
    },
    rL: function(t, i) {
        this.rj(q.a(t.x, t.y), q.a(i.x, t.y)), this.rj(q.a(i.x, t.y), q.a(i.x, i.y)), this.rj(q.a(i.x, i.y), q.a(t.x, i.y)), this.rj(q.a(t.x, i.y), q.a(t.x, t.y))
    },
    RE: function(t, i, n) {
        t = [t, q.a(i.x, t.y), i, q.a(t.x, i.y)], this.Ky(t, 4, n)
    },
    de: function(t, i, n, e) {
        if ("undefined" == e && (e = !1), null != t) {
            if (3 > t.length) throw Error("Polygon's point must greater than 2");
            for (i = t[0], this.Ga.beginPath(), this.Ga.moveTo(i.x * q.ua(), -i.y * q.ua()), i = 1; i < t.length; i++) this.Ga.lineTo(t[i].x * q.ua(), -t[i].y * q.ua());
            n && this.Ga.closePath(), e ? this.Ga.fill() : this.Ga.stroke()
        }
    },
    Ky: function(t, i, n) {
        this.GN(n.h, n.f, n.c, n.e), this.de(t, i, !0, !0)
    },
    lL: function(t, i, n, e, h) {
        this.Ga.beginPath(), this.Ga.arc(0 | t.x, 0 | -t.y, i, -n, -(n - 2 * Math.PI), !1), h && this.Ga.lineTo(0 | t.x, 0 | -t.y), this.Ga.stroke()
    },
    pL: function(t, i, n, e) {
        for (var h = [], s = 0, r = 0; r < e; r++) {
            var a = Math.pow(1 - s, 2) * t.y + 2 * (1 - s) * s * i.y + s * s * n.y;
            h.push(q.a((Math.pow(1 - s, 2) * t.x + 2 * (1 - s) * s * i.x + s * s * n.x) * q.ua(), a * q.ua())), s += 1 / e
        }
        h.push(q.a(n.x * q.ua(), n.y * q.ua())), this.de(h, e + 1, !1, !1)
    },
    mL: function(t, i, n, e, h) {
        for (var s = [], r = 0, a = 0; a < h; a++) {
            var o = Math.pow(1 - r, 3) * t.y + 3 * Math.pow(1 - r, 2) * r * i.y + 3 * (1 - r) * r * r * n.y + r * r * r * e.y;
            s.push(q.a((Math.pow(1 - r, 3) * t.x + 3 * Math.pow(1 - r, 2) * r * i.x + 3 * (1 - r) * r * r * n.x + r * r * r * e.x) * q.ua(), o * q.ua())), r += 1 / h
        }
        s.push(q.a(e.x * q.ua(), e.y * q.ua())), this.de(s, h + 1, !1, !1)
    },
    kL: function(t, i) {
        this.Jy(t, .5, i)
    },
    Jy: function(t, i, n) {
        q.q.strokeStyle = "rgba(255,255,255,1)";
        for (var e, h, s = [], r = 1 / t.length, a = 0; a < n + 1; a++) 1 == (h = a / n) ? (e = t.length - 1, h = 1) : (e = 0 | h / r, h = (h - r * e) / r), e = q.tA(q.Di(t, e - 1), q.Di(t, e - 0), q.Di(t, e + 1), q.Di(t, e + 2), i, h), s.push(e);
        this.de(s, n + 1, !1, !1)
    },
    drawImage: function(t, i, n, e, h) {
        switch (arguments.length) {
            case 2:
                this.Ga.drawImage(t, i.x, -(i.y + t.height));
                break;
            case 3:
                this.Ga.drawImage(t, i.x, -(i.y + n.height), n.width, n.height);
                break;
            case 5:
                this.Ga.drawImage(t, i.x, i.y, n.width, n.height, e.x, -(e.y + h.height), h.width, h.height);
                break;
            default:
                throw Error("Argument must be non-nil")
        }
    },
    eW: function(t, i, n) {
        t = t || this.Ga, n instanceof q.Jc && (n = new q.oc(0 | 255 * n.h, 0 | 255 * n.f, 0 | 255 * n.c)), n = "rgba(" + n.h + "," + n.f + "," + n.c, t.fillStyle = n + ",1)";
        var e = i / 10;
        t.beginPath(), t.moveTo(-i, i), t.lineTo(0, e), t.lineTo(i, i), t.lineTo(e, 0), t.lineTo(i, -i), t.lineTo(0, -e), t.lineTo(-i, -i), t.lineTo(-e, 0), t.lineTo(-i, i), t.closePath(), t.fill();
        var h = t.createRadialGradient(0, 0, e, 0, 0, i);
        h.addColorStop(0, n + ", 1)"), h.addColorStop(.3, n + ", 0.8)"), h.addColorStop(1, n + ", 0.0)"), t.fillStyle = h, t.beginPath(), t.arc(0, 0, i - e, 0, q.jH, !1), t.closePath(), t.fill()
    },
    cW: function(t, i, n) {
        t = t || this.Ga, n instanceof q.Jc && (n = new q.oc(0 | 255 * n.h, 0 | 255 * n.f, 0 | 255 * n.c)), n = "rgba(" + n.h + "," + n.f + "," + n.c;
        var e = t.createRadialGradient(0, 0, i / 10, 0, 0, i);
        e.addColorStop(0, n + ", 1)"), e.addColorStop(.3, n + ", 0.8)"), e.addColorStop(.6, n + ", 0.4)"), e.addColorStop(1, n + ", 0.0)"), t.fillStyle = e, t.beginPath(), t.arc(0, 0, i, 0, q.jH, !1), t.closePath(), t.fill()
    },
    fillText: function(t, i, n) {
        this.Ga.fillText(t, i, -n)
    },
    FN: function(t, i, n, e) {
        this.Ga.fillStyle = "rgba(" + t + "," + i + "," + n + "," + e / 255 + ")", this.Ga.strokeStyle = "rgba(" + t + "," + i + "," + n + "," + e / 255 + ")"
    },
    GN: function(t, i, n, e) {
        this.Ga.fillStyle = "rgba(" + (0 | 255 * t) + "," + (0 | 255 * i) + "," + (0 | 255 * n) + "," + e + ")", this.Ga.strokeStyle = "rgba(" + (0 | 255 * t) + "," + (0 | 255 * i) + "," + (0 | 255 * n) + "," + e + ")"
    },
    K_: function() {},
    C_: function(t) {
        this.Ga.lineWidth = t
    }
}), q.qP = q.wA.extend({
    OC: !1,
    Vb: null,
    Tj: -1,
    wb: null,
    iD: -1,
    hD: -1,
    ctor: function(t) {
        if (null == t && (t = q.q), !t instanceof WebGLRenderingContext) throw "Can't initialise DrawingPrimitiveWebGL. context need is WebGLRenderingContext";
        q.wA.prototype.ctor.call(this, t), this.wb = new q.Jc(1, 1, 1, 1)
    },
    Fl: function() {
        this.OC || (this.Vb = q.ud.getInstance().Hc(q.$A), this.Tj = this.Ga.getUniformLocation(this.Vb.So(), "u_color"), this.iD = this.Ga.getUniformLocation(this.Vb.So(), "u_pointSize"), this.OC = !0)
    },
    b6: function() {
        this.OC = !1
    },
    PE: function(t) {
        this.Fl(), this.Vb.Fd(), this.Vb.wg(), q.zd(q.af), this.Vb.Pl(this.Tj, new Float32Array(this.wb.$b, 0, 4), 1), this.Vb.jv(this.iD, this.hD);
        var i = this.Ga,
            n = i.createBuffer();
        i.bindBuffer(i.ARRAY_BUFFER, n), i.bufferData(i.ARRAY_BUFFER, new Float32Array([t.x, t.y]), i.STATIC_DRAW), i.vertexAttribPointer(q.Zb, 2, i.FLOAT, !1, 0, 0), i.drawArrays(i.POINTS, 0, 1), i.deleteBuffer(n), q.hh()
    },
    oL: function(t) {
        if (t && 0 != t.length) {
            this.Fl(), this.Vb.Fd(), this.Vb.wg(), q.zd(q.af), this.Vb.Pl(this.Tj, new Float32Array(this.wb.$b, 0, 4), 1), this.Vb.jv(this.iD, this.hD);
            var i = this.Ga,
                n = i.createBuffer();
            i.bindBuffer(i.ARRAY_BUFFER, n), i.bufferData(i.ARRAY_BUFFER, this.Nx(t), i.STATIC_DRAW), i.vertexAttribPointer(q.Zb, 2, i.FLOAT, !1, 0, 0), i.drawArrays(i.POINTS, 0, t.length), i.deleteBuffer(n), q.hh()
        }
    },
    Nx: function(t) {
        for (var i = new Float32Array(2 * t.length), n = 0; n < t.length; n++) i[2 * n] = t[n].x, i[2 * n + 1] = t[n].y;
        return i
    },
    rj: function(t, i) {
        this.Fl(), this.Vb.Fd(), this.Vb.wg(), q.zd(q.af), this.Vb.Pl(this.Tj, new Float32Array(this.wb.$b, 0, 4), 1);
        var n = this.Ga,
            e = n.createBuffer();
        n.bindBuffer(n.ARRAY_BUFFER, e), n.bufferData(n.ARRAY_BUFFER, this.Nx([t, i]), n.STATIC_DRAW), n.vertexAttribPointer(q.Zb, 2, n.FLOAT, !1, 0, 0), n.drawArrays(n.LINES, 0, 2), n.deleteBuffer(e), q.hh()
    },
    rL: function(t, i) {
        this.rj(q.a(t.x, t.y), q.a(i.x, t.y)), this.rj(q.a(i.x, t.y), q.a(i.x, i.y)), this.rj(q.a(i.x, i.y), q.a(t.x, i.y)), this.rj(q.a(t.x, i.y), q.a(t.x, t.y))
    },
    RE: function(t, i, n) {
        t = [t, q.a(i.x, t.y), i, q.a(t.x, i.y)], this.Ky(t, 4, n)
    },
    de: function(t, i, n) {
        this.Fl(), this.Vb.Fd(), this.Vb.wg(), q.zd(q.af), this.Vb.Pl(this.Tj, new Float32Array(this.wb.$b, 0, 4), 1);
        var e = (i = this.Ga).createBuffer();
        i.bindBuffer(i.ARRAY_BUFFER, e), i.bufferData(i.ARRAY_BUFFER, this.Nx(t), i.STATIC_DRAW), i.vertexAttribPointer(q.Zb, 2, i.FLOAT, !1, 0, 0), n ? i.drawArrays(i.LINE_LOOP, 0, t.length) : i.drawArrays(i.LINE_STRIP, 0, t.length), i.deleteBuffer(e), q.hh()
    },
    Ky: function(t, i, n) {
        this.Fl(), n || (n = this.wb), this.Vb.Fd(), this.Vb.wg(), q.zd(q.af), this.Vb.Pl(this.Tj, new Float32Array(n.$b, 0, 4), 1), n = (i = this.Ga).createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, n), i.bufferData(i.ARRAY_BUFFER, this.Nx(t), i.STATIC_DRAW), i.vertexAttribPointer(q.Zb, 2, i.FLOAT, !1, 0, 0), i.drawArrays(i.TRIANGLE_FAN, 0, t.length), i.deleteBuffer(n), q.hh()
    },
    lL: function(t, i, n, e, h) {
        this.Fl();
        var s = 1;
        h && s++;
        var r = 2 * Math.PI / e;
        if (h = new Float32Array(2 * (e + 2))) {
            for (var a = 0; a <= e; a++) {
                var o = a * r,
                    c = i * Math.sin(o + n) + t.y;
                h[2 * a] = i * Math.cos(o + n) + t.x, h[2 * a + 1] = c
            }
            h[2 * (e + 1)] = t.x, h[2 * (e + 1) + 1] = t.y, this.Vb.Fd(), this.Vb.wg(), q.zd(q.af), this.Vb.Pl(this.Tj, new Float32Array(this.wb.$b, 0, 4), 1), i = (t = this.Ga).createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, i), t.bufferData(t.ARRAY_BUFFER, h, t.STATIC_DRAW), t.vertexAttribPointer(q.Zb, 2, t.FLOAT, !1, 0, 0), t.drawArrays(t.LINE_STRIP, 0, e + s), t.deleteBuffer(i), q.hh()
        }
    },
    pL: function(t, i, n, e) {
        this.Fl();
        for (var h = new Float32Array(2 * (e + 1)), s = 0, r = 0; r < e; r++) h[2 * r] = Math.pow(1 - s, 2) * t.x + 2 * (1 - s) * s * i.x + s * s * n.x, h[2 * r + 1] = Math.pow(1 - s, 2) * t.y + 2 * (1 - s) * s * i.y + s * s * n.y, s += 1 / e;
        h[2 * e] = n.x, h[2 * e + 1] = n.y, this.Vb.Fd(), this.Vb.wg(), q.zd(q.af), this.Vb.Pl(this.Tj, new Float32Array(this.wb.$b, 0, 4), 1), i = (t = this.Ga).createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, i), t.bufferData(t.ARRAY_BUFFER, h, t.STATIC_DRAW), t.vertexAttribPointer(q.Zb, 2, t.FLOAT, !1, 0, 0), t.drawArrays(t.LINE_STRIP, 0, e + 1), t.deleteBuffer(i), q.hh()
    },
    mL: function(t, i, n, e, h) {
        this.Fl();
        for (var s = new Float32Array(2 * (h + 1)), r = 0, a = 0; a < h; a++) s[2 * a] = Math.pow(1 - r, 3) * t.x + 3 * Math.pow(1 - r, 2) * r * i.x + 3 * (1 - r) * r * r * n.x + r * r * r * e.x, s[2 * a + 1] = Math.pow(1 - r, 3) * t.y + 3 * Math.pow(1 - r, 2) * r * i.y + 3 * (1 - r) * r * r * n.y + r * r * r * e.y, r += 1 / h;
        s[2 * h] = e.x, s[2 * h + 1] = e.y, this.Vb.Fd(), this.Vb.wg(), q.zd(q.af), this.Vb.Pl(this.Tj, new Float32Array(this.wb.$b, 0, 4), 1), i = (t = this.Ga).createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, i), t.bufferData(t.ARRAY_BUFFER, s, t.STATIC_DRAW), t.vertexAttribPointer(q.Zb, 2, t.FLOAT, !1, 0, 0), t.drawArrays(t.LINE_STRIP, 0, h + 1), t.deleteBuffer(i), q.hh()
    },
    kL: function(t, i) {
        this.Jy(t, .5, i)
    },
    Jy: function(t, i, n) {
        this.Fl();
        for (var e, h, s = new Float32Array(2 * (n + 1)), r = 1 / t.length, a = 0; a < n + 1; a++) 1 == (h = a / n) ? (e = t.length - 1, h = 1) : (e = 0 | h / r, h = (h - r * e) / r), e = q.tA(q.Di(t, e - 1), q.Di(t, e), q.Di(t, e + 1), q.Di(t, e + 2), i, h), s[2 * a] = e.x, s[2 * a + 1] = e.y;
        this.Vb.Fd(), this.Vb.wg(), q.zd(q.af), this.Vb.Pl(this.Tj, new Float32Array(this.wb.$b, 0, 4), 1), i = (t = this.Ga).createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, i), t.bufferData(t.ARRAY_BUFFER, s, t.STATIC_DRAW), t.vertexAttribPointer(q.Zb, 2, t.FLOAT, !1, 0, 0), t.drawArrays(t.LINE_STRIP, 0, n + 1), t.deleteBuffer(i), q.hh()
    },
    FN: function(t, i, n, e) {
        this.wb.h = t / 255, this.wb.f = i / 255, this.wb.c = n / 255, this.wb.e = e / 255
    },
    GN: function(t, i, n, e) {
        this.wb.h = t, this.wb.f = i, this.wb.c = n, this.wb.e = e
    },
    K_: function(t) {
        this.hD = t * q.ua()
    },
    C_: function(t) {
        this.Ga.lineWidth && this.Ga.lineWidth(t)
    }
}), q.jH = 2 * Math.PI, q.MH = {
    N3: 0,
    b2: 1,
    c2: 2,
    Z0: 3,
    Y1: 4,
    X1: 5,
    l1: 6,
    o2: 7,
    H1: 8,
    lQ: 100,
    sQ: 101
}, q.v2 = 0, q.w2 = 1, q.t2 = 2, q.u2 = 3, q.Jb = 0, q.eb = 1, q.se = null, q.q = null, q.canvas = null, q.nW = null, q.Z = q.Jb, q.PY = q.size(0, 0), window.VF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, window.console || (window.console = {}, window.console.log = function() {}, window.console.assert = function() {}), q.wF = !1, q.g0 = function(t) {
    var i, n;
    if ("CANVAS" == (t = q.Sb(t) || q.Sb("#" + t)).tagName ? (i = i || t.width, n = n || t.height, q.Of = q.Hk("DIV"), q.canvas = t, q.canvas.parentNode.insertBefore(q.Of, q.canvas), q.canvas.Do(q.Of), q.Of.style.width = (i || 480) + "px", q.Of.style.height = (n || 320) + "px", q.Of.setAttribute("id", "Cocos2dGameContainer"), q.canvas.setAttribute("width", i || 480), q.canvas.setAttribute("height", n || 320)) : ("DIV" != t.tagName && q.log("Warning: target element is not a DIV or CANVAS"), i = i || t.clientWidth, n = n || t.clientHeight, q.canvas = q.Hk("CANVAS"), q.canvas.zK("gameCanvas"), q.canvas.setAttribute("width", i || 480), q.canvas.setAttribute("height", n || 320), q.Of = t, t.appendChild(q.canvas), q.Of.style.width = (i || 480) + "px", q.Of.style.height = (n || 320) + "px"), q.Of.style.position = "relative", q.Of.style.overflow = "hidden", q.Of.top = "100%", !q.FB) {
        q.pa.Rc && (q.q = q.cia = q.WK(q.canvas, {
            stencil: !0,
            preserveDrawingBuffer: !0,
            alpha: !1
        })), q.q ? (q.Z = q.eb, window.E$ = q.q, q.se = new q.qP(q.q), q.Ka.getInstance().VS()) : (q.q = q.canvas.getContext("2d"), q.nY = q.q, q.Z = q.Jb, q.q.translate(0, q.canvas.height), q.se = new q.pP(q.q)), q.PY = q.size(q.canvas.width, q.canvas.height), q.nW = q.Of, q.log(q.Jv), q.Sd.getInstance(), q.n_(), q.pa.sg && (q.MR(), q.HR());
        var e, h;
        void 0 !== document.hidden ? (e = "hidden", h = "visibilitychange") : void 0 !== document.mozHidden ? (e = "mozHidden", h = "mozvisibilitychange") : void 0 !== document.msHidden ? (e = "msHidden", h = "msvisibilitychange") : void 0 !== document.webkitHidden && (e = "webkitHidden", h = "webkitvisibilitychange"), void 0 === document.addEventListener || void 0 === e ? q.wF = !1 : (q.wF = !0, document.addEventListener(h, function() {
            document[e] || q.n.getInstance().XT()
        }, !1))
    }
}, q.MR = function() {
    var t = document.createElement("style");
    t.type = "text/css", document.body.appendChild(t), t.textContent = "body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}"
}, q.HR = function() {
    var t = document.createElement("div");
    t.id = "bottom", t.style.border = t.style.margin = t.style.padding = t.style.height = t.style.lineHeight = t.style.fontSize = "0px", document.body.appendChild(t), window.location.href = "#bottom"
}, q.yJ = !1, q.n_ = function() {
    q.yJ = !1, q.canvas.oncontextmenu = q.yJ ? function() {} : function() {
        return !1
    }
}, q.kn = q.ca.extend({
    mh: null,
    ctor: function() {
        this.mh = 0, q.d(!q.cy, "CCApplication ctor"), q.cy = this
    },
    hv: function(t) {
        this.mh = t
    },
    yha: function(t) {
        t && q.rect(0, 0, 0, 0)
    },
    Y9: function() {
        return q.pa.sg ? q.MH.lQ : q.MH.sQ
    },
    VZ: function() {
        if (!this.sV()) return 0;
        var t, i = q.n.getInstance(),
            n = window;
        return n.VF && this.mh == 1 / 60 ? (t = function() {
            i.GM(), n.VF(t)
        }, n.VF(t)) : (t = function() {
            i.GM()
        }, setInterval(t, 1e3 * this.mh)), 0
    }
}), q.kn.getInstance = function() {
    return q.d(q.cy, "sharedApplication"), q.cy
}, q.kn.g7 = function() {
    var t = q.WP,
        i = navigator.language;
    if (i || (i = navigator.browserLanguage || navigator.Yha), !i) return t;
    switch (i = i.toLowerCase()) {
        case "zh-cn":
            t = q.VP;
            break;
        case "fr":
            t = q.XP;
            break;
        case "it":
            t = q.$P;
            break;
        case "de":
            t = q.YP;
            break;
        case "es":
            t = q.gQ;
            break;
        case "ru":
            t = q.fQ;
            break;
        case "ko":
            t = q.bQ;
            break;
        case "ja":
            t = q.aQ;
            break;
        case "hu":
            t = q.ZP;
            break;
        case "pt":
            t = q.eQ;
            break;
        case "ar":
            t = q.UP;
            break;
        case "no":
            t = q.cQ;
            break;
        case "pl":
            t = q.dQ
    }
    return t
}, q.cy = null, q.Si = q.ca.extend({
    dia: null,
    KJ: null,
    ar: null,
    QC: null,
    ctor: function() {
        this.ar = {}, window.DOMParser ? (this.QC = !0, this.KJ = new DOMParser) : this.QC = !1
    },
    parse: function(t) {
        i = t;
        if (t = this.XE(t), "plist" != (t = this.LJ(t, i).documentElement).tagName) throw "cocos2d: " + i + " is not a plist file";
        for (var i = null, n = 0, e = t.childNodes.length; n < e && 1 != (i = t.childNodes[n]).nodeType; n++);
        return this.gD(i)
    },
    x0: function(t, i) {
        return null != i && !1 !== i || (t = this.XE(t)), this.LJ(t)
    },
    LJ: function(t, i) {
        var n;
        return this.QC ? n = this.KJ.parseFromString(t, "text/xml") : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t)), null == n && q.log("cocos2d:xml " + i + " not found!"), n
    },
    gD: function(t) {
        i = null;
        switch (t.tagName) {
            case "dict":
                i = this.yT(t);
                break;
            case "array":
                i = this.uT(t);
                break;
            case "string":
                if (1 == t.childNodes.length) i = t.firstChild.nodeValue;
                else
                    for (var i = "", n = 0; n < t.childNodes.length; n++) i += t.childNodes[n].nodeValue;
                break;
            case "false":
                i = !1;
                break;
            case "true":
                i = !0;
                break;
            case "real":
                i = parseFloat(t.firstChild.nodeValue);
                break;
            case "integer":
                i = parseInt(t.firstChild.nodeValue, 10)
        }
        return i
    },
    uT: function(t) {
        for (var i = [], n = 0, e = t.childNodes.length; n < e; n++) {
            var h = t.childNodes[n];
            1 == h.nodeType && i.push(this.gD(h))
        }
        return i
    },
    yT: function(t) {
        for (var i = {}, n = null, e = 0, h = t.childNodes.length; e < h; e++) {
            var s = t.childNodes[e];
            1 == s.nodeType && ("key" == s.tagName ? n = s.firstChild.nodeValue : i[n] = this.gD(s))
        }
        return i
    },
    lZ: function(t) {
        if (t = q.Yc.getInstance().ee(t), window.XMLHttpRequest) {
            var i = new XMLHttpRequest;
            i.overrideMimeType && i.overrideMimeType("text/xml")
        }
        if (null != i) {
            var n = this;
            i.onreadystatechange = function() {
                4 == i.readyState && (i.responseText ? (q.Kb.getInstance().$h(), n.ar[t] = i.responseText, i = null) : q.d("cocos2d:There was a problem retrieving the xml data:" + i.statusText))
            }, i.open("GET", t, !0), i.send(null)
        } else q.d("cocos2d:Your browser does not support XMLHTTP.")
    },
    H0: function(t) {
        this.ar.hasOwnProperty(t) && delete this.ar[t]
    },
    getName: function(t) {
        return t.substring(t.lastIndexOf("/", t.length) + 1, t.lastIndexOf(".", t.length))
    },
    F7: function(t) {
        return t.substring(t.lastIndexOf(".", t.length) + 1, t.length)
    },
    XE: function(t) {
        return null != this.ar ? this.ar[t] : null
    }
}), q.Si.getInstance = function() {
    return this.La || (this.La = new q.Si), this.La
}, q.Si.La = null, q.qA = q.ca.extend({
    YV: function() {
        return q.kn.getInstance().VZ(), !0
    },
    f5: function() {
        q.n.getInstance().pause()
    },
    e5: function() {
        q.n.getInstance().PZ()
    },
    rV: function() {
        q.kn.getInstance().rV()
    },
    tV: function() {
        q.kn.getInstance().tV()
    },
    g5: function() {}
}), q.qA.i0 = function() {
    return null == q.$z && (q.$z = new q.qA), q.d(q.$z, "shareAppController"), q.$z
}, q.$z = null, q.HP = 32, q.DC = q.HP, q.rx = "Arial", q.oJ = !1, q.HG = 3233828865, q.Rw = 3233828866, q.oQ = 8801, q.GQ = 8802, q.jP = 8803, q.Gd = q.Lb.extend({
    C: null,
    Zs: null,
    Bt: !1,
    Ah: !1,
    ctor: function() {
        q.Lb.prototype.ctor.call(this), this.Zs = this.C = null, this.Ah = this.Bt = !1
    },
    zaa: function() {
        return this.Bt
    },
    Uf: function() {},
    Bl: function() {
        return !1
    },
    W_: function(t, i) {
        this.C = i, this.Zs = t
    },
    isEnabled: function() {
        return this.Ah
    },
    Ml: function(t) {
        this.Ah = t
    },
    Br: function(t, i) {
        return this.v(q.a(.5, .5)), this.C = i, this.Zs = t, this.Ah = !0, this.Bt = !1, !0
    },
    rect: function() {
        var t = this.ea,
            i = this.ja,
            n = this.Gg;
        return q.rect(t.x - i.width * n.x, t.y - i.height * n.y, i.width, i.height)
    },
    selected: function() {
        this.Bt = !0
    },
    Cj: function() {
        this.Bt = !1
    },
    Sea: function(t, i) {
        this.C = i, this.Zs = t
    },
    ru: function() {
        if (this.Ah) {
            var t = this.C,
                i = this.Zs;
            i && (t && "string" == typeof i ? t[i](this) : t && "function" == typeof i ? i.call(t, this) : i(this))
        }
    }
}), q.Gd.create = function(t, i) {
    var n = new q.Gd;
    return n.Br(t, i), n
}, q.ws = q.Gd.extend({
    it: null,
    jc: null,
    sT: 0,
    dx: null,
    ctor: function() {
        q.Gd.prototype.ctor.call(this), this.jc = this.it = null, this.sT = 0, this.dx = null
    },
    q7: function() {
        return this.it
    },
    gfa: function(t) {
        this.it = t
    },
    a8: function() {
        return this.jc
    },
    ON: function(t) {
        t && (this.l(t), t.v(q.a(0, 0)), this.Db(t.g())), this.jc && this.removeChild(this.jc, !0), this.jc = t
    },
    Ml: function(t) {
        if (this.Ah != t) {
            var i = this.jc;
            t ? i.Qa(this.dx) : (this.dx = i.Pc(), i.Qa(this.it))
        }
        q.Gd.prototype.Ml.call(this, t)
    },
    w: function(t) {
        this.jc.w(t)
    },
    Ei: function() {
        return this.jc.Ei()
    },
    Qa: function(t) {
        this.jc.Qa(t)
    },
    Pc: function() {
        return this.jc.Pc()
    },
    nF: function(t, i, n) {
        return this.Br(i, n), this.Lx = 1, this.dx = q.zg(), this.it = q.Qe(126, 126, 126), this.ON(t), this.Xm(!0), this.Ym(!0), !0
    },
    uc: function(t) {
        this.jc.uc(t), this.Db(this.jc.g())
    },
    ru: function() {
        this.Ah && (this.Ed(), this.vb(this.Lx), q.Gd.prototype.ru.call(this))
    },
    selected: function() {
        if (this.Ah) {
            q.Gd.prototype.selected.call(this);
            var t = this.TE(q.Rw);
            t ? this.p0(t) : this.Lx = this.QW(), (t = q.hc.create(.1, 1.2 * this.Lx)).Qc(q.Rw), this.A(t)
        }
    },
    Cj: function() {
        if (this.Ah) {
            q.Gd.prototype.Cj.call(this), this.q0(q.Rw);
            var t = q.hc.create(.1, this.Lx);
            t.Qc(q.Rw), this.A(t)
        }
    }
}), q.ws.create = function(t, i, n) {
    var e = new q.ws;
    return e.nF(t, i, n), e
}, q.bH = q.ws.extend({
    pd: function(t, i, n, e, h, s, r) {
        q.d(null != t && 0 != t.length, "value length must be greater than 0");
        var a = new q.he;
        return a.pd(t, i, n, e, h), this.nF(a, s, r), !0
    }
}), q.bH.create = function(t, i, n, e, h, s, r) {
    var a = new q.bH;
    return a.pd(t, i, n, e, h, s, r), a
}, q.Cp = q.ws.extend({
    vd: null,
    Id: null,
    ctor: function() {
        q.ws.prototype.ctor.call(this), this.vd = 0, this.Id = ""
    },
    pd: function(t, i, n) {
        return q.d(null != t && 0 != t.length, "Value length must be greater than 0"), this.Id = q.rx, this.vd = q.DC, t = q.Aa.create(t, this.Id, this.vd), this.nF(t, i, n), !0
    },
    JN: function(t) {
        this.vd = t, this.QJ()
    },
    fontSize: function() {
        return this.vd
    },
    IN: function(t) {
        this.Id = t, this.QJ()
    },
    No: function() {
        return this.Id
    },
    QJ: function() {
        var t = q.Aa.create(this.jc.Nm(), this.Id, this.vd);
        this.ON(t)
    }
}), q.Cp.JN = function(t) {
    q.DC = t
}, q.Cp.fontSize = function() {
    return q.DC
}, q.Cp.IN = function(t) {
    q.oJ && (q.rx = ""), q.rx = t, q.oJ = !0
}, q.Cp.No = function() {
    return q.rx
}, q.Cp.create = function(t, i, n) {
    var e = new q.Cp;
    return e.pd(t, i, n), e
}, q.hw = q.Gd.extend({
    Ge: null,
    mg: null,
    eg: null,
    ctor: function() {
        q.Gd.prototype.ctor.call(this), this.eg = this.mg = this.Ge = null
    },
    v8: function() {
        return this.Ge
    },
    Tz: function(t) {
        this.Ge != t && (t && (this.l(t, 0, q.oQ), t.v(q.a(0, 0))), this.Ge && this.removeChild(this.Ge, !0), this.Ge = t, t.Wa ? (this.Db(this.Ge.g()), this.xo()) : t.Lf(function(t) {
            this.Db(t.g()), this.xo()
        }, this))
    },
    v9: function() {
        return this.mg
    },
    XN: function(t) {
        this.mg != t && (t && (this.l(t, 0, q.GQ), t.v(q.a(0, 0))), this.mg && this.removeChild(this.mg, !0), this.mg = t, t.Wa ? this.xo() : t.Lf(function() {
            this.xo()
        }, this))
    },
    r7: function() {
        return this.eg
    },
    EN: function(t) {
        this.eg != t && (t && (this.l(t, 0, q.jP), t.v(q.a(0, 0))), this.eg && this.removeChild(this.eg, !0), this.eg = t, t.Wa ? this.xo() : t.Lf(function() {
            this.xo()
        }, this))
    },
    bM: function(t, i, n, e, h) {
        return this.Br(e, h), this.Tz(t), this.XN(i), this.EN(n), (t = this.Ge) && (t.Wa ? (this.Db(t.g()), this.Xm(!0), this.Ym(!0)) : t.Lf(function(t) {
            this.Db(t.g()), this.Xm(!0), this.Ym(!0)
        }, this)), !0
    },
    Qa: function(t) {
        this.Ge.Qa(t), this.mg && this.mg.Qa(t), this.eg && this.eg.Qa(t)
    },
    Pc: function() {
        return this.Ge.Pc()
    },
    w: function(t) {
        this.Ge.w(t), this.mg && this.mg.w(t), this.eg && this.eg.w(t)
    },
    Ei: function() {
        return this.Ge.Ei()
    },
    selected: function() {
        q.Gd.prototype.selected.call(this), this.Ge && (this.eg && this.eg.M(!1), this.mg ? (this.Ge.M(!1), this.mg.M(!0)) : this.Ge.M(!0))
    },
    Cj: function() {
        q.Gd.prototype.Cj.call(this), this.Ge && (this.Ge.M(!0), this.mg && this.mg.M(!1), this.eg && this.eg.M(!1))
    },
    Ml: function(t) {
        this.Ah != t && (q.Gd.prototype.Ml.call(this, t), this.xo())
    },
    xo: function() {
        var t = this.Ge,
            i = this.mg,
            n = this.eg;
        this.Ah ? (t && t.M(!0), i && i.M(!1), n && n.M(!1)) : n ? (t && t.M(!1), i && i.M(!1), n && n.M(!0)) : (t && t.M(!0), i && i.M(!1))
    }
}), q.hw.create = function(t, i, n, e, h) {
    var s = arguments.length;
    t = arguments[0], i = arguments[1];
    var r, a, o, c = new q.hw;
    return 5 == s ? (r = arguments[2], o = arguments[3], a = arguments[4]) : 4 == s && "function" == typeof arguments[3] ? (r = arguments[2], o = arguments[3]) : 4 == s && "function" == typeof arguments[2] ? (a = arguments[3], o = arguments[2]) : 2 >= s && (r = arguments[2]), c.bM(t, i, r, o, a), c
}, q.Kc = q.hw.extend({
    Wfa: function(t) {
        this.Tz(q.m.Gy(t))
    },
    yga: function(t) {
        this.XN(q.m.Gy(t))
    },
    hfa: function(t) {
        this.EN(q.m.Gy(t))
    },
    tX: function(t, i, n, e, h) {
        var s = null,
            r = null,
            a = null;
        return t && (s = q.m.create(t)), i && (r = q.m.create(i)), n && (a = q.m.create(n)), this.bM(s, r, a, e, h)
    }
}), q.Kc.create = function(t, i, n, e, h) {
    if (0 == arguments.length) return q.Kc.create(null, null, null, null, null);
    if (3 == arguments.length) return q.Kc.create(t, i, null, n, null);
    if (4 == arguments.length) return q.Kc.create(t, i, null, n, e);
    var s = new q.Kc;
    return s.tX(t, i, n, e, h) ? s : null
}, q.cH = q.Gd.extend({
    mj: 0,
    $d: null,
    He: null,
    wb: null,
    ctor: function() {
        q.Gd.prototype.ctor.call(this), this.mj = 0, this.$d = [], this.He = 0, this.wb = q.zg()
    },
    Ei: function() {
        return this.He
    },
    w: function(t) {
        if (this.He = t, this.$d && 0 < this.$d.length)
            for (var i = 0; i < this.$d.length; i++) this.$d[i].w(t)
    },
    Pc: function() {
        return this.wb
    },
    Qa: function(t) {
        if (this.wb = t, this.$d && 0 < this.$d.length)
            for (var i = 0; i < this.$d.length; i++) this.$d[i].Qa(t)
    },
    w9: function() {
        return this.mj
    },
    lG: function(t) {
        if (t != this.mj) {
            this.mj = t, (t = this.od(q.HG)) && t.Cb(!1), t = this.$d[this.mj], this.l(t, 0, q.HG);
            var i = t.g();
            this.Db(i), t.i(i.width / 2, i.height / 2)
        }
    },
    S9: function() {
        return this.$d
    },
    Qga: function(t) {
        this.$d = t
    },
    $y: function(t) {
        var i = t.length;
        "function" == typeof t[t.length - 2] ? (this.Br(t[t.length - 2], t[t.length - 1]), i -= 2) : "function" == typeof t[t.length - 1] ? (this.Br(t[t.length - 1], null), i -= 1) : this.Br(null, null), this.$d = [];
        for (var n = 0; n < i; n++) t[n] && this.$d.push(t[n]);
        return this.mj = q.BI, this.lG(0), this.Xm(!0), this.Ym(!0), !0
    },
    W4: function(t) {
        this.$d.push(t)
    },
    ru: function() {
        this.Ah && this.lG((this.mj + 1) % this.$d.length), q.Gd.prototype.ru.call(this)
    },
    selected: function() {
        q.Gd.prototype.selected.call(this), this.$d[this.mj].selected()
    },
    Cj: function() {
        q.Gd.prototype.Cj.call(this), this.$d[this.mj].Cj()
    },
    Ml: function(t) {
        if (this.Ah != t) {
            q.Gd.prototype.Ml.call(this, t);
            var i = this.$d;
            if (i && 0 < i.length)
                for (var n = 0; n < i.length; n++) i[n].Ml(t)
        }
    },
    zea: function() {
        return this.$d[this.mj]
    },
    ba: function() {
        q.r.prototype.ba.call(this), this.lG(this.mj)
    }
}), q.cH.create = function() {
    0 < arguments.length && null == arguments[arguments.length - 1] && q.log("parameters should not be ending with null in Javascript");
    var t = new q.cH;
    return t.$y(arguments), t
}, q.vs = 0, q.us = 1, q.kQ = -128, q.JG = 5, q.Cg = q.Yl.extend({
    wb: null,
    Vk: !1,
    He: 0,
    Md: null,
    nj: -1,
    ctor: function() {
        q.Yl.prototype.ctor.call(this), this.wb = q.zg(), this.Vk = !1, this.He = 255, this.Md = null, this.nj = -1
    },
    Pc: function() {
        return this.wb
    },
    Qa: function(t) {
        this.wb = t;
        var i = this.B;
        if (i && 0 < i.length)
            for (var n = 0; n < i.length; n++) i[n].Qa(t)
    },
    Ei: function() {
        return this.He
    },
    w: function(t) {
        this.He = t;
        var i = this.B;
        if (i && 0 < i.length)
            for (var n = 0; n < i.length; n++) i[n].w(t)
    },
    isEnabled: function() {
        return this.Vk
    },
    Ml: function(t) {
        this.Vk = t
    },
    $y: function(t) {
        var i = [];
        if (t)
            for (var n = 0; n < t.length; n++) t[n] && i.push(t[n]);
        return this.ZL(i)
    },
    ZL: function(t) {
        if (this.init()) {
            this.a0(q.kQ), this.$_(q.bR), this.da(!0), this.Vk = !0;
            var i = q.n.getInstance().Y;
            if (this.Vy(!0), this.v(q.a(.5, .5)), this.Db(i), this.i(i.width / 2, i.height / 2), t)
                for (i = 0; i < t.length; i++) this.l(t[i], i);
            return this.Md = null, this.nj = q.vs, this.Xm(!0), this.Ym(!0), !0
        }
        return !1
    },
    l: function(t, i, n) {
        q.d(t instanceof q.Gd, "Menu only supports MenuItem objects as children"), q.Ya.prototype.l.call(this, t, i, n)
    },
    c5: function() {
        this.pV(q.JG)
    },
    pV: function(t) {
        var i, n, e, h, s = -t,
            r = this.B;
        if (r && 0 < r.length) {
            for (n = 0, i = r.length; n < i; n++) s += r[n].g().height * r[n].Ta + t;
            var a = s / 2;
            for (n = 0, i = r.length; n < i; n++) h = r[n], e = h.g().height, s = h.Ta, h.i(0, a - e * s / 2), a -= e * s + t
        }
    },
    Z4: function() {
        this.oV(q.JG)
    },
    oV: function(t) {
        var i, n, e, h, s = -t,
            r = this.B;
        if (r && 0 < r.length) {
            for (i = 0, n = r.length; i < n; i++) s += r[i].g().width * r[i].Ja + t;
            var a = -s / 2;
            for (i = 0, n = r.length; i < n; i++) h = r[i], s = h.Ja, e = r[i].g().width, h.i(a + e * s / 2, 0), a += e * s + t
        }
    },
    a5: function() {
        0 < arguments.length && null == arguments[arguments.length - 1] && q.log("parameters should not be ending with null in Javascript");
        for (var t = [], i = 0; i < arguments.length; i++) t.push(arguments[i]);
        var n, e, h, s = -5,
            r = 0,
            a = 0,
            o = 0,
            c = this.B;
        if (c && 0 < c.length)
            for (i = 0, h = c.length; i < h; i++) q.d(r < t.length, ""), n = t[r], q.d(n, ""), e = c[i].g().height, a = a >= e || isNaN(e) ? a : e, ++o >= n && (s += a + 5, a = o = 0, ++r);
        q.d(!o, "");
        var u = q.n.getInstance().Y,
            l = n = a = r = 0,
            f = 0,
            s = s / 2;
        if (c && 0 < c.length)
            for (i = 0, h = c.length; i < h; i++) {
                var d = c[i];
                0 == n && (n = t[r], f = l = u.width / (1 + n)), a = a >= (e = d.g().height) || isNaN(e) ? a : e, d.i(f - u.width / 2, s - e / 2), f += l, ++o >= n && (s -= a + 5, a = n = o = 0, ++r)
            }
    },
    b5: function() {
        0 < arguments.length && null == arguments[arguments.length - 1] && q.log("parameters should not be ending with null in Javascript");
        var t, i = [];
        for (t = 0; t < arguments.length; t++) i.push(arguments[t]);
        var n, e, h, s, r, a = [],
            o = [],
            c = -10,
            u = -5,
            l = 0,
            f = 0,
            d = 0,
            g = this.B;
        if (g && 0 < g.length)
            for (t = 0, h = g.length; t < h; t++) e = g[t], q.d(l < i.length, ""), n = i[l], q.d(n, ""), r = e.g(), s = r.width, f = f >= s || isNaN(s) ? f : s, u += r.height + 5, ++d >= n && (a.push(f), o.push(u), c += f + 10, f = d = 0, u = -5, ++l);
        q.d(!d, ""), u = q.n.getInstance().Y, n = f = l = 0;
        var c = -c / 2,
            p = 0;
        if (g && 0 < g.length)
            for (t = 0, h = g.length; t < h; t++) e = g[t], 0 == n && (n = i[l], p = o[l]), r = e.g(), s = r.width, f = f >= s || isNaN(s) ? f : s, e.i(c + a[l] / 2, p - u.height / 2), p -= r.height + 10, ++d >= n && (c += f + 5, f = n = d = 0, ++l)
    },
    Vr: function() {
        q.TF(this.uo, !0, this)
    },
    removeChild: function(t, i) {
        null != t && (q.d(t instanceof q.Gd, "Menu only supports MenuItem objects as children"), this.Md == t && (this.Md = null), q.r.prototype.removeChild.call(this, t, i))
    },
    Lr: function(t) {
        if (this.nj != q.vs || !this.zc || !this.Vk) return !1;
        for (var i = this.kc; null != i; i = i.getParent())
            if (!i.zc) return !1;
        return !!(this.Md = this.AJ(t)) && (this.nj = q.us, this.Md.selected(), !0)
    },
    Nr: function() {
        q.d(this.nj == q.us, "[Menu onTouchEnded] -- invalid state"), this.Md && (this.Md.Cj(), this.Md.ru()), this.nj = q.vs
    },
    Mr: function() {
        q.d(this.nj == q.us, "[Menu onTouchCancelled] -- invalid state"), this.Md && this.Md.Cj(), this.nj = q.vs
    },
    Rm: function(t) {
        q.d(this.nj == q.us, "[Menu onTouchMoved] -- invalid state"), (t = this.AJ(t)) != this.Md && (this.Md && this.Md.Cj(), (this.Md = t) && this.Md.selected())
    },
    kb: function() {
        this.nj == q.us && (this.Md && (this.Md.Cj(), this.Md = null), this.nj = q.vs), q.Ya.prototype.kb.call(this)
    },
    Uf: function() {},
    Bl: function() {
        return !1
    },
    AJ: function(t) {
        t = t.Mc;
        var i, n = this.B;
        if (n && 0 < n.length)
            for (var e = 0; e < n.length; e++)
                if ((i = n[e]).zc && i.isEnabled()) {
                    var h = i.ed(t),
                        s = i.rect();
                    if (s.x = 0, s.y = 0, q.tg(s, h)) return i
                }
        return null
    },
    Bfa: function(t) {
        q.n.getInstance().Pe.cs(t, this)
    }
}), q.Cg.create = function() {
    0 < arguments.length && null == arguments[arguments.length - 1] && q.log("parameters should not be ending with null in Javascript");
    var t = new q.Cg;
    if (0 == arguments.length) t.$y(null, null);
    else if (1 == arguments.length && arguments[0] instanceof Array) return t.ZL(arguments[0]), t;
    return t.$y(arguments), t
}, q.Bw = 0, q.zw = 1, q.Aw = 2, q.yw = q.r.extend({
    Zj: null,
    ae: null,
    Nc: null,
    ti: null,
    Gx: null,
    BR: null,
    kk: null,
    ctor: function() {
        q.r.prototype.ctor.call(this), this.Zj = q.Ec(), this.ae = q.Ec(), this.BR = this.Gx = this.ti = this.Nc = null, this.kk = []
    },
    IW: function() {
        return this.Zj
    },
    PN: function(t) {
        this.Zj = t
    },
    YW: function() {
        return this.ae
    },
    aO: function(t) {
        this.ae = t
    },
    m8: function() {
        return this.Gx
    },
    Rfa: function(t) {
        this.Gx = t
    },
    NW: function() {
        return this.ti
    },
    SN: function(t) {
        this.ti = t
    },
    Qy: function() {
        return this.Nc
    },
    an: function(t) {
        this.Nc = t
    },
    qF: function(t, i) {
        q.d(null != t && 0 < t.length, "TMXTiledMap: tmx file should not be nil"), this.Db(q.Ec());
        var n = q.Mp.create(t, i);
        return !!n && (q.d(0 != n.Hm.length, "TMXTiledMap: Map not found. Please check the filename."), this.SI(n), !0)
    },
    sF: function(t, i) {
        this.Db(q.Ec());
        var n = q.Mp.YK(t, i);
        return q.d(0 != n.Hm.length, "TMXTiledMap: Map not found. Please check the filename."), this.SI(n), !0
    },
    SI: function(t) {
        this.Zj = t.Zj, this.ae = t.ae, this.Gx = t.Eh, this.ti = t.ti, this.Nc = t.Nc, this.kk = t.kk;
        var i = 0,
            n = t.Ee;
        if (n)
            for (var e = null, h = 0, s = n.length; h < s; h++)
                if ((e = n[h]) && e.visible) {
                    e = this.DT(e, t), this.l(e, i, i);
                    var e = e.g(),
                        r = this.g();
                    r.width = Math.max(r.width, e.width), r.height = Math.max(r.height, e.height), this.Db(r), i++
                }
    },
    b8: function(t) {
        q.d(null != t && 0 < t.length, "Invalid layer name!");
        for (var i = 0; i < this.B.length; i++) {
            var n = this.B[i];
            if (n && n.HW() == t) return n
        }
        return null
    },
    z8: function(t) {
        if (q.d(null != t && 0 < t.length, "Invalid group name!"), this.ti)
            for (var i = 0; i < this.ti.length; i++) {
                var n = this.ti[i];
                if (n && n.DW() == t) return n
            }
        return null
    },
    YE: function(t) {
        return this.Nc[t.toString()]
    },
    Nda: function(t) {
        return this.kk[t]
    },
    DT: function(t, i) {
        var n = this.MU(t, i),
            n = q.Is.create(n, t, i);
        return t.XM = !1, n.h0(), n
    },
    MU: function(t, i) {
        var n = t.ib,
            e = i.Hm;
        if (e)
            for (var h = e.length - 1; 0 <= h; h--) {
                var s = e[h];
                if (s)
                    for (var r = 0; r < n.height; r++)
                        for (var a = 0; a < n.width; a++) {
                            var o = t.Ib[a + n.width * r];
                            if (0 != o && (o & q.kB) >>> 0 >= s.Mo) return s
                        }
            }
        return q.log("cocos2d: Warning: TMX Layer " + t.name + " has no tiles"), null
    }
}), q.yw.create = function(t, i) {
    var n = new q.yw;
    return n.qF(t, i) ? n : null
}, q.yw.YK = function(t, i) {
    var n = new q.yw;
    return n.sF(t, i) ? n : null
}, q.SH = 1, q.l3 = 2, q.m3 = 4, q.n3 = 8, q.aR = 0, q.p3 = 1, q.o3 = 2, q.r3 = 3, q.q3 = 4, q.s3 = 5, q.Js = 2147483648, q.Ks = 1073741824, q.TH = 536870912, q.UH = (q.Js | q.Ks | q.TH) >>> 0, q.kB = ~q.UH >>> 0, q.YQ = q.ca.extend({
    Nc: null,
    name: "",
    ib: null,
    Ib: null,
    visible: null,
    He: null,
    XM: !0,
    Yn: 1e5,
    Wn: 0,
    offset: null,
    ctor: function() {
        this.Nc = [], this.name = "", this.ib = null, this.Ib = [], this.visible = !0, this.He = 0, this.XM = !0, this.Yn = 1e5, this.Wn = 0, this.offset = q.Ua()
    },
    Qy: function() {
        return this.Nc
    },
    an: function(t) {
        this.Nc = t
    }
}), q.$Q = q.ca.extend({
    name: "",
    Mo: 0,
    ae: null,
    nv: 0,
    margin: 0,
    jO: "",
    Xy: null,
    ctor: function() {
        this.ae = q.Ec(), this.Xy = q.Ec()
    },
    fv: function(t) {
        var i = q.uf();
        i.size = this.ae, t &= q.kB, t -= parseInt(this.Mo, 10);
        var n = parseInt((this.Xy.width - 2 * this.margin + this.nv) / (this.ae.width + this.nv), 10);
        return i.origin.x = parseInt(t % n * (this.ae.width + this.nv) + this.margin, 10), i.origin.y = parseInt(parseInt(t / n, 10) * (this.ae.height + this.nv) + this.margin, 10), i
    }
}), q.Mp = q.Si.extend({
    Eh: null,
    Zj: null,
    ae: null,
    Ee: null,
    Hm: null,
    ti: null,
    eD: null,
    fD: null,
    Bx: 0,
    QD: !1,
    Nc: null,
    zn: null,
    eC: null,
    kk: null,
    Ux: "",
    dJ: 0,
    ctor: function() {
        this.Hm = [], this.kk = [], this.Nc = [], this.Zj = q.Ec(), this.ae = q.Ec(), this.dJ = 0
    },
    E8: function() {
        return this.Eh
    },
    iG: function(t) {
        this.Eh = t
    },
    IW: function() {
        return this.Zj
    },
    PN: function(t) {
        this.Zj = t
    },
    YW: function() {
        return this.ae
    },
    aO: function(t) {
        this.ae = t
    },
    f8: function() {
        return this.Ee
    },
    B_: function(t) {
        this.Ee.push(t)
    },
    e$: function() {
        return this.Hm
    },
    Z_: function(t) {
        this.Hm.push(t)
    },
    NW: function() {
        return this.ti
    },
    SN: function(t) {
        this.ti.push(t)
    },
    J8: function() {
        return this.eD
    },
    cga: function(t) {
        this.eD = t
    },
    K8: function() {
        return this.fD
    },
    J_: function(t) {
        this.fD = t
    },
    c8: function() {
        return this.Bx
    },
    Ifa: function(t) {
        this.Bx = t
    },
    P9: function() {
        return this.QD
    },
    Pga: function(t) {
        this.QD = t
    },
    Qy: function() {
        return this.Nc
    },
    an: function(t) {
        this.Nc.push(t)
    },
    qF: function(t, i) {
        return this.vJ(t, i), this.QF(this.zn)
    },
    sF: function(t, i) {
        return this.vJ(null, i), this.WY(t)
    },
    QF: function(t, i) {
        i = i || !1, t = q.Yc.getInstance().ee(t);
        var n, e, h = q.Si.getInstance().x0(t, i).documentElement;
        if (n = h.getAttribute("version"), e = h.getAttribute("orientation"), "map" == h.nodeName && ("1.0" != n && null !== n && q.log("cocos2d: TMXFormat: Unsupported TMX version:" + n), "orthogonal" == e ? this.iG(q.Bw) : "isometric" == e ? this.iG(q.Aw) : "hexagonal" == e ? this.iG(q.zw) : null !== e && q.log("cocos2d: TMXFomat: Unsupported orientation:" + this.Eh), n = q.size(0, 0), n.width = parseFloat(h.getAttribute("width")), n.height = parseFloat(h.getAttribute("height")), this.PN(n), n = q.size(0, 0), n.width = parseFloat(h.getAttribute("tilewidth")), n.height = parseFloat(h.getAttribute("tileheight")), this.aO(n), e = h.querySelectorAll("map > properties >  property")))
            for (n = 0; n < e.length; n++) {
                var s = {};
                s[e[n].getAttribute("name")] = e[n].getAttribute("value"), this.an(s)
            }
        for (e = h.getElementsByTagName("tileset"), "map" !== h.nodeName && (e = []).push(h), n = 0; n < e.length; n++) {
            var r = e[n];
            if (s = r.getAttribute("source")) this.QF(q.Yc.getInstance().Ny(s, i ? this.Ux + "/" : t));
            else {
                (s = new q.$Q).name = r.getAttribute("name") || "", s.Mo = parseInt(r.getAttribute("firstgid")) || 0, s.nv = parseInt(r.getAttribute("spacing")) || 0, s.margin = parseInt(r.getAttribute("margin")) || 0;
                var a = q.size(0, 0);
                a.width = parseFloat(r.getAttribute("tilewidth")), a.height = parseFloat(r.getAttribute("tileheight")), s.ae = a, r = r.getElementsByTagName("image")[0].getAttribute("source"), a = -1, this.zn && (a = this.zn.lastIndexOf("/")), s.jO = -1 !== a ? this.zn.substr(0, a + 1) + r : this.Ux + (this.Ux ? "/" : "") + r, this.Z_(s)
            }
        }
        if (s = h.querySelectorAll("tile"))
            for (n = 0; n < s.length; n++)
                if (e = s[n], this.J_(parseInt(this.Hm[0].Mo) + parseInt(e.getAttribute("id") || 0)), r = e.querySelectorAll("properties > property")) {
                    for (a = {}, e = 0; e < r.length; e++) {
                        var o = r[e].getAttribute("name"),
                            c = r[e].getAttribute("value");
                        a[o] = c
                    }
                    this.kk[this.fD] = a
                }
        if (s = h.getElementsByTagName("layer"))
            for (n = 0; n < s.length; n++) {
                for (o = (a = s[n]).getElementsByTagName("data")[0], (r = new q.YQ).name = a.getAttribute("name"), (e = q.size(0, 0)).width = parseFloat(a.getAttribute("width")), e.height = parseFloat(a.getAttribute("height")), r.ib = e, e = a.getAttribute("visible"), r.visible = "0" != e, e = a.getAttribute("opacity") || 1, r.He = e ? parseInt(255 * parseFloat(e)) : 255, r.offset = q.a(parseFloat(a.getAttribute("x")) || 0, parseFloat(a.getAttribute("y")) || 0), c = "", e = 0; e < o.childNodes.length; e++) c += o.childNodes[e].nodeValue;
                c = c.trim(), e = o.getAttribute("compression");
                var u = o.getAttribute("encoding");
                switch (q.d(null == e || "gzip" === e || "zlib" === e, "TMX: unsupported compression method"), e) {
                    case "gzip":
                        r.Ib = q.yO(c, 4);
                        break;
                    case "zlib":
                        e = new Zlib.Inflate(q.Pa.mn.bL(c, 1)), r.Ib = q.F0(e.decompress());
                        break;
                    case null:
                    case "":
                        if ("base64" == u) r.Ib = q.Pa.mn.bL(c, 4);
                        else if ("csv" === u)
                            for (r.Ib = [], e = c.split(","), o = 0; o < e.length; o++) r.Ib.push(parseInt(e[o]));
                        else
                            for (e = o.getElementsByTagName("tile"), r.Ib = [], o = 0; o < e.length; o++) r.Ib.push(parseInt(e[o].getAttribute("gid")));
                        break;
                    default:
                        q.d(this.Bx != q.SH, "TMX tile map: Only base64 and/or gzip/zlib maps are supported")
                }
                if (a = a.querySelectorAll("properties > property")) {
                    for (o = {}, e = 0; e < a.length; e++) o[a[e].getAttribute("name")] = a[e].getAttribute("value");
                    r.an(o)
                }
                this.B_(r)
            }
        if (s = h.getElementsByTagName("objectgroup"))
            for (n = 0; n < s.length; n++) {
                if (a = s[n], (r = new q.ZQ).A_(a.getAttribute("name")), r.N_(q.a(parseFloat(a.getAttribute("x")) * this.ae.width || 0, parseFloat(a.getAttribute("y")) * this.ae.height || 0)), o = a.querySelectorAll("objectgroup > properties > property"))
                    for (e = 0; e < o.length; e++) c = {}, c[o[e].getAttribute("name")] = o[e].getAttribute("value"), r.an(c);
                if (a = a.querySelectorAll("object"))
                    for (e = 0; e < a.length; e++) {
                        if (c = a[e], o = {}, o.name = c.getAttribute("name") || "", o.type = c.getAttribute("type") || "", o.x = parseInt(c.getAttribute("x") || 0) + r.It.x, u = parseInt(c.getAttribute("y") || 0) + r.It.y, o.width = parseInt(c.getAttribute("width")) || 0, o.height = parseInt(c.getAttribute("height")) || 0, o.y = parseInt(this.Zj.height * this.ae.height) - u - o.height, u = c.querySelectorAll("properties > property"))
                            for (var l = 0; l < u.length; l++) o[u[l].getAttribute("name")] = u[l].getAttribute("value");
                        (u = c.querySelectorAll("polygon")) && 0 < u.length && (u = u[0].getAttribute("points")) && (o.polygonPoints = this.JJ(u)), (c = c.querySelectorAll("polyline")) && 0 < c.length && (c = c[0].getAttribute("points")) && (o.polylinePoints = this.JJ(c)), r.G_(o)
                    }
                this.SN(r)
            }
        return h
    },
    JJ: function(t) {
        if (!t) return null;
        var i = [];
        t = t.split(" ");
        for (var n = 0; n < t.length; n++) {
            var e = t[n].split(",");
            i.push({
                x: e[0],
                y: e[1]
            })
        }
        return i
    },
    WY: function(t) {
        return this.QF(t, !0)
    },
    b$: function() {
        return this.kk
    },
    Yga: function(t) {
        this.kk.push(t)
    },
    h7: function() {
        return this.eC
    },
    bfa: function(t) {
        this.eC = t
    },
    T9: function() {
        return this.zn
    },
    Rga: function(t) {
        this.zn = t
    },
    vJ: function(t, i) {
        this.Hm = [], this.Ee = [], this.zn = t, i && (this.Ux = i), this.ti = [], this.Nc = [], this.kk = [], this.eC = "", this.QD = !1, this.Bx = q.SH, this.eD = q.aR, this.dJ = 0
    }
}), q.Mp.create = function(t, i) {
    var n = new q.Mp;
    return n.qF(t, i) ? n : null
}, q.Mp.YK = function(t, i) {
    var n = new q.Mp;
    return n.sF(t, i) ? n : null
}, q.ZQ = q.ca.extend({
    EC: null,
    It: null,
    Nc: null,
    Jq: null,
    ctor: function() {
        this.EC = "", this.It = q.Ua(), this.Nc = [], this.Jq = []
    },
    R8: function() {
        return this.It
    },
    N_: function(t) {
        this.It = t
    },
    Qy: function() {
        return this.Nc
    },
    an: function(t) {
        this.Nc.push(t)
    },
    DW: function() {
        return this.EC.toString()
    },
    A_: function(t) {
        this.EC = t
    },
    Oda: function(t) {
        return this.Nc[t]
    },
    ada: function(t) {
        if (this.Jq && 0 < this.Jq.length)
            for (var i = this.Jq, n = 0, e = i.length; n < e; n++) {
                var h = i[n].name;
                if (h && h == t) return i[n]
            }
        return null
    },
    A8: function() {
        return this.Jq
    },
    G_: function(t) {
        this.Jq.push(t)
    }
}), q.Is = q.Va.extend({
    ib: null,
    ef: null,
    Ib: null,
    Kh: null,
    Dq: null,
    Nc: null,
    TC: "",
    He: 255,
    Yn: null,
    Wn: null,
    fE: null,
    YD: null,
    X3: null,
    jj: null,
    ie: null,
    ph: null,
    ni: null,
    Sj: null,
    SB: null,
    ctor: function() {
        if (q.Va.prototype.ctor.call(this), this.B = [], this.Wd = [], this.ib = q.Ec(), this.ef = q.Ec(), q.Z === q.Jb) {
            var t = q.canvas,
                i = document.createElement("canvas");
            i.width = t.width, i.height = t.height, this.ni = i, this.Sj = this.ni.getContext("2d");
            var n = new q.rb;
            n.Qd(i), n.Bd(), this.SB = n, this.Db(q.size(t.width, t.height))
        }
    },
    Db: function(t) {
        if (t && (q.r.prototype.Db.call(this, t), q.Z === q.Jb)) {
            var i = this.ni;
            i.width = 0 | 1.5 * t.width, i.height = 0 | 1.5 * t.height, this.Sj.translate(0, i.height), (t = this.SB.ja).width = i.width, t.height = i.height
        }
    },
    ia: function() {
        return q.Z === q.Jb ? this.SB : q.Va.prototype.ia.call(this)
    },
    za: function(t) {
        if (q.Z === q.eb) q.Va.prototype.za.call(this, t);
        else {
            var i = t || q.q;
            if (this.zc) {
                i.save(), this.transform(t);
                var n, e = this.B;
                if (this.$w) {
                    var h = this.Sj;
                    if (n = this.ni, h.clearRect(0, 0, n.width, -n.height), h.save(), h.translate(this.ic.x, -this.ic.y), e)
                        for (this.qf(), n = 0; n < e.length; n++) e[n] && e[n].za(h);
                    h.restore(), this.$w = !1
                }
                this.xa(t), i.restore()
            }
        }
    },
    xa: null,
    Wi: function(t) {
        t = t || q.q;
        var i = 0 | -this.ic.x,
            n = 0 | -this.ic.y,
            e = this.ni;
        e && t.drawImage(e, i, -(n + e.height))
    },
    e8: function() {
        return this.ib
    },
    Lfa: function(t) {
        this.ib = t
    },
    n8: function() {
        return this.ef
    },
    Sfa: function(t) {
        this.ef = t
    },
    d$: function() {
        return this.Ib
    },
    $ga: function(t) {
        this.Ib = t
    },
    c$: function() {
        return this.Kh
    },
    Zga: function(t) {
        this.Kh = t
    },
    d8: function() {
        return this.Dq
    },
    Kfa: function(t) {
        this.Dq = t
    },
    Qy: function() {
        return this.Nc
    },
    an: function(t) {
        this.Nc = t
    },
    yX: function(t, i, n) {
        var e, h = i.ib,
            s = .35 * parseInt(h.width * h.height) + 1;
        return t && (e = q.Ka.getInstance().cc(t.jO)), !!this.Ea(e, s) && (this.TC = i.name, this.ib = h, this.Ib = i.Ib, this.Yn = i.Yn, this.Wn = i.Wn, this.He = i.He, this.an(i.Nc), this.ph = q.n.getInstance().ph, this.Kh = t, this.ef = n.ae, this.Dq = n.Eh, t = this.XR(i.offset), this.i(q.rn(t)), this.ie = [], this.Db(q.Ds(q.size(this.ib.width * this.ef.width, this.ib.height * this.ef.height))), this.YD = !1, this.fE = 0, !0)
    },
    aea: function() {
        this.Ib && (this.Ib = null), this.ie && (this.ie = null)
    },
    a$: function(t) {
        q.d(t.x < this.ib.width && t.y < this.ib.height && 0 <= t.x && 0 <= t.y, "TMXLayer: invalid position"), q.d(this.Ib && this.ie, "TMXLayer: the tiles map has been released");
        var i = null,
            n = this.cF(t);
        if (0 === n) return i;
        var e = 0 | t.x + t.y * this.ib.width;
        return (i = this.od(e)) || (n = this.Kh.fv(n), n = q.Mj(n), (i = new q.m).Ea(this.ia(), n), i.Ic(this), i.i(this.Py(t)), i.Zz(this.wK(t)), i.v(q.Ua()), i.w(this.He), t = this.MB(e), this.mV(i, t, e)), i
    },
    cF: function(t) {
        return q.d(t.x < this.ib.width && t.y < this.ib.height && 0 <= t.x && 0 <= t.y, "TMXLayer: invalid position"), q.d(this.Ib && this.ie, "TMXLayer: the tiles map has been released"), (this.Ib[0 | t.x + t.y * this.ib.width] & q.kB) >>> 0
    },
    XW: function(t) {
        return q.d(t.x < this.ib.width && t.y < this.ib.height && 0 <= t.x && 0 <= t.y, "TMXLayer: invalid position"), q.d(this.Ib && this.ie, "TMXLayer: the tiles map has been released"), (this.Ib[0 | t.x + t.y * this.ib.width] & q.UH) >>> 0
    },
    Xga: function(t, i, n) {
        q.d(i.x < this.ib.width && i.y < this.ib.height && 0 <= i.x && 0 <= i.y, "TMXLayer: invalid position"), q.d(this.Ib && this.ie, "TMXLayer: the tiles map has been released"), q.d(0 !== t || !(t >= this.Kh.Mo), "TMXLayer: invalid gid:" + t), n = n || 0, this.io();
        var e = this.XW(i);
        if ((h = this.cF(i)) != t || e != n)
            if (e = (t | n) >>> 0, 0 === t) this.KZ(i);
            else if (0 === h) this.ZS(e, i);
        else {
            var h = i.x + i.y * this.ib.width,
                s = this.od(h);
            s ? (t = this.Kh.fv(t), t = q.Mj(t), s.fd(t, !1, t.size), null != n && this.$x(s, i, e), this.Ib[h] = e) : this.eV(e, i)
        }
    },
    KZ: function(t) {
        if (q.d(t.x < this.ib.width && t.y < this.ib.height && 0 <= t.x && 0 <= t.y, "TMXLayer: invalid position"), q.d(this.Ib && this.ie, "TMXLayer: the tiles map has been released"), 0 !== this.cF(t)) {
            q.Z === q.Jb && this.io();
            i = 0 | t.x + t.y * this.ib.width;
            if (t = this.MB(i), this.Ib[i] = 0, q.ln(this.ie, t), i = this.od(i)) q.Va.prototype.removeChild.call(this, i, !0);
            else if (q.Z === q.eb && this.X.tN(t), this.B)
                for (var i = this.B, n = 0, e = i.length; n < e; n++) {
                    var h = i[n];
                    if (h) {
                        var s = h.mb;
                        s >= t && h.qd(s - 1)
                    }
                }
        }
    },
    Py: function(t) {
        var i = q.Ua();
        switch (this.Dq) {
            case q.Bw:
                i = this.IT(t);
                break;
            case q.Aw:
                i = this.HT(t);
                break;
            case q.zw:
                i = this.GT(t)
        }
        return q.rn(i)
    },
    YE: function(t) {
        return this.Nc[t]
    },
    h0: function() {
        q.Z === q.Jb ? this.Kh.Xy = this.kg.ja : (this.Kh.Xy = this.X.ia().ja, this.X.ia().eG()), this.BT(), q.Z === q.Jb && this.io();
        for (var t = this.ib.height, i = this.ib.width, n = 0; n < t; n++)
            for (var e = 0; e < i; e++) {
                var h = this.Ib[e + i * n];
                0 !== h && (this.QR(h, q.a(e, n)), this.Yn = Math.min(h, this.Yn), this.Wn = Math.max(h, this.Wn))
            }
        this.Wn >= this.Kh.Mo && this.Yn >= this.Kh.Mo || q.log("cocos2d:TMX: Only 1 tileset per layer is supported")
    },
    l: function() {
        q.d(0, "addChild: is not supported on cc.TMXLayer. Instead use setTileGID:at:/tileAt:")
    },
    removeChild: function(t, i) {
        if (t) {
            q.d(q.wp(this.B, t), "Tile does not belong to TMXLayer"), q.Z === q.Jb && this.io();
            var n = t.mb;
            this.Ib[this.ie[n]] = 0, q.ln(this.ie, n), q.Va.prototype.removeChild.call(this, t, i)
        }
    },
    HW: function() {
        return this.TC.toString()
    },
    Jfa: function(t) {
        this.TC = t
    },
    HT: function(t) {
        return q.a(this.ef.width / 2 * (this.ib.width + t.x - t.y - 1), this.ef.height / 2 * (2 * this.ib.height - t.x - t.y - 2))
    },
    IT: function(t) {
        return q.a(t.x * this.ef.width, (this.ib.height - t.y - 1) * this.ef.height)
    },
    GT: function(t) {
        return q.a(t.x * this.ef.width * 3 / 4, (this.ib.height - t.y - 1) * this.ef.height + (1 == t.x % 2 ? -this.ef.height / 2 : 0))
    },
    XR: function(t) {
        var i = q.Ua();
        switch (this.Dq) {
            case q.Bw:
                i = q.a(t.x * this.ef.width, -t.y * this.ef.height);
                break;
            case q.Aw:
                i = q.a(this.ef.width / 2 * (t.x - t.y), this.ef.height / 2 * (-t.x - t.y));
                break;
            case q.zw:
                q.d(0 == t.x && 0 == t.y, "offset for hexagonal map not implemented yet")
        }
        return i
    },
    QR: function(t, i) {
        var n = this.Kh.fv(t),
            n = q.Mj(n),
            e = 0 | i.x + i.y * this.ib.width,
            n = this.BD(n);
        this.$x(n, i, t);
        var h = this.ie.length;
        return this.cz(n, h), this.ie = q.Qi(this.ie, e, h), n
    },
    ZS: function(t, i) {
        var n = this.Kh.fv(t),
            n = q.Mj(n),
            e = 0 | i.x + i.y * this.ib.width,
            n = this.BD(n);
        this.$x(n, i, t);
        var h = this.RR(e);
        if (this.cz(n, h), this.ie = q.Qi(this.ie, e, h), this.B)
            for (var s = this.B, r = 0, a = s.length; r < a; r++) {
                var o = s[r];
                if (o) {
                    var c = o.mb;
                    c >= h && o.qd(c + 1)
                }
            }
        return this.Ib[e] = t, n
    },
    eV: function(t, i) {
        var n = this.Kh.fv(t),
            e = this.ph,
            n = q.rect(n.x / e, n.y / e, n.width / e, n.height / e),
            e = i.x + i.y * this.ib.width,
            n = this.BD(n);
        this.$x(n, i, t);
        var h = this.MB(e);
        return n.qd(h), n.ug(!0), n.yg(), this.Ib[e] = t, n
    },
    BT: function() {
        if (i = this.YE("cc_vertexz"))
            if ("automatic" == i) {
                this.YD = !0;
                var t = this.YE("cc_alpha_func"),
                    i = 0;
                t && (i = parseFloat(t)), q.Z === q.eb && (this.xe(q.ud.getInstance().Hc(q.rw)), t = q.q.getUniformLocation(this.yr().So(), q.CI), this.yr().Fd(), this.yr().jv(t, i))
            } else this.fE = parseInt(i, 10)
    },
    $x: function(t, i, n) {
        var e = i.x + i.y * this.ib.width;
        t.i(this.Py(i)), q.Z === q.eb ? t.Zz(this.wK(i)) : t.Qc(e), t.v(q.Ua()), t.w(this.He), q.Z === q.eb && t.we(0), t.Rz(!1), t.Nl(!1), (n & q.TH) >>> 0 ? (t.v(q.a(.5, .5)), t.i(this.Py(i).x + t.g().height / 2, this.Py(i).y + t.g().width / 2), (i = (n & (q.Js | q.Ks) >>> 0) >>> 0) == q.Js ? t.we(90) : i == q.Ks ? t.we(270) : (i == (q.Ks | q.Js) >>> 0 ? t.we(90) : t.we(270), t.Rz(!0))) : ((n & q.Js) >>> 0 && t.Rz(!0), (n & q.Ks) >>> 0 && t.Nl(!0))
    },
    BD: function(t) {
        return q.Z === q.eb ? (this.jj ? (this.jj.Ic(null), this.jj.fd(t, !1, t.size)) : (this.jj = new q.m, this.jj.Ea(this.ia(), t, !1)), this.jj.Ic(this)) : (this.jj = new q.m, this.jj.Ea(this.Gm, t, !1), this.jj.Ic(this), this.jj.lp(this)), this.jj
    },
    wK: function(t) {
        var i = 0;
        if (this.YD) switch (this.Dq) {
            case q.Aw:
                i = -(this.ib.width + this.ib.height - (t.x + t.y));
                break;
            case q.Bw:
                i = -(this.ib.height - t.y);
                break;
            case q.zw:
                q.d(0, "TMX Hexa zOrder not supported");
                break;
            default:
                q.d(0, "TMX invalid value")
        } else i = this.fE;
        return i
    },
    MB: function(t) {
        var i;
        if (this.ie)
            for (var n = this.ie, e = 0, h = n.length; e < h && (i = n[e]) != t; e++);
        return q.d(null != i, "TMX atlas index not found. Shall not happen"), e
    },
    RR: function(t) {
        for (var i = this.ie, n = 0, e = i.length; n < e && !(t < i[n]); n++);
        return n
    }
}), q.Is.prototype.xa = q.pa.Rc ? q.Va.prototype.xa : q.Is.prototype.Wi, q.Is.create = function(t, i, n) {
    var e = new q.Is;
    return e.yX(t, i, n) ? e : null
}, q.PA = q.ca.extend({
    Lt: null,
    Hb: null,
    $s: null,
    c9: function() {
        return this.Lt
    },
    kga: function(t) {
        this.Lt = t
    },
    ur: function() {
        return this.Hb
    },
    H_: function(t) {
        this.Hb = t
    },
    V6: function() {
        return this.$s
    },
    m_: function(t) {
        this.$s = t
    },
    lX: function(t, i) {
        return this.Lt = t, this.Hb = i, this.$s = null, !0
    }
}), q.PA.create = function(t, i) {
    var n = new q.PA;
    return n.lX(t, i), n
}, q.mH = q.r.extend({
    SC: null,
    bo: null,
    I8: function() {
        return this.bo
    },
    bga: function(t) {
        this.bo = t
    },
    ctor: function() {
        q.r.prototype.ctor.call(this), this.bo = [], this.SC = q.a(-100, -100)
    },
    l: function(t, i, n, e) {
        if (3 === arguments.length) q.d(0, "ParallaxNode: use addChild:z:parallaxRatio:positionOffset instead");
        else {
            q.d(null != t, "Argument must be non-nil");
            var h = q.PA.create(n, e);
            h.m_(t), this.bo.push(h), (h = q.a(this.ea.x, this.ea.y)).x = h.x * n.x + e.x, h.y = h.y * n.y + e.y, t.i(h), q.r.prototype.l.call(this, t, i, t.D)
        }
    },
    removeChild: function(t, i) {
        for (var n = this.bo, e = 0; e < n.length; e++)
            if (n[e].$s == t) {
                n.splice(e, 1);
                break
            }
        q.r.prototype.removeChild.call(this, t, i)
    },
    ci: function(t) {
        this.bo = [], q.r.prototype.ci.call(this, t)
    },
    za: function() {
        var t = this.ER();
        if (!q.Sr(t, this.SC)) {
            for (var i = this.bo, n = 0, e = i.length; n < e; n++) {
                var h = i[n],
                    s = -t.x + t.x * h.Lt.x + h.ur().x,
                    r = -t.y + t.y * h.Lt.y + h.ur().y;
                h.$s.i(s, r)
            }
            this.SC = t
        }
        q.r.prototype.za.call(this)
    },
    ER: function() {
        for (var t = this.ea, i = this; null != i.getParent();) i = i.getParent(), t = q.Rf(t, i.Na());
        return t
    }
}), q.mH.create = function() {
    return new q.mH
}, (q = q || {}).Xe = q.ca.extend({
    NI: 0,
    vf: null,
    ctor: function() {
        this.vf = {}
    },
    XI: function(t) {
        var i = document.createElement("audio");
        if (i.canPlayType) {
            e = function(t) {
                return "no" != (t = i.canPlayType(t)) && "" != t
            };
            t.LM = e("audio/mpeg"), t.MM = e("audio/mp4"), t.FM = e("audio/x-m4a") || e("audio/aac"), t.SM = e('audio/ogg; codecs="vorbis"'), t.FO = e('audio/wav; codecs="1"')
        } else {
            var n, e = ["mp3", "mp4", "m4a", "ogg", "wav"];
            for (n in e) t[e[n]] = !1
        }
    },
    Yk: function(t) {
        if ("string" != typeof t) return null;
        var i = t.lastIndexOf(".");
        return -1 !== i ? t.substring(0, i) : t
    },
    sq: function(t) {
        var i = t.lastIndexOf(".");
        return -1 !== i ? t.substring(i + 1, t.length) : -1
    }
}), q.LH = function() {
    this.Mf = void 0, this.SE = ".ogg"
}, q.XQ = q.Xe.extend({
    po: null,
    km: {},
    kf: {},
    Ef: null,
    pi: 1,
    EJ: 10,
    UB: null,
    ik: !1,
    WI: !0,
    ctor: function() {
        q.Xe.prototype.ctor.call(this), this.po = [], this.km = {}, this.kf = {};
        var t = this.UB = {
            LM: !1,
            SM: !1,
            FO: !1,
            MM: !1,
            FM: !1
        };
        this.XI(t), this.ik = t.LM || t.MM || t.FM || t.SM || t.FO, t = navigator.userAgent, (/Mobile/.test(t) && (/iPhone OS/.test(t) || /iPad/.test(t) || /Firefox/.test(t)) || /MSIE/.test(t)) && (this.WI = !1)
    },
    init: function() {
        return this.FS(), this.ik
    },
    kZ: function(t) {
        this.Ur(t)
    },
    jZ: function(t) {
        this.Ur(t)
    },
    Ur: function(t) {
        if (this.ik) {
            var i = this.sq(t),
                n = this.Yk(t);
            if (this.Tu(i) && !this.kf.hasOwnProperty(n) && this.WI) {
                var e = new q.LH;
                e.SE = i, e.Mf = new Audio(t), e.Mf.Tr = "auto";
                var h = function() {
                        q.Kb.getInstance().$h(), this.removeEventListener("canplaythrough", h, !1), this.removeEventListener("error", s, !1)
                    },
                    s = function(t) {
                        q.Kb.getInstance().Qm(t.srcElement.src), this.removeEventListener("canplaythrough", h, !1), this.removeEventListener("error", s, !1)
                    };
                return e.Mf.addEventListener("canplaythrough", h, !1), e.Mf.addEventListener("error", s, !1), this.kf[n] = e, void e.Mf.load()
            }
        }
        q.Kb.getInstance().$h()
    },
    gN: function(t, i) {
        if (this.ik) {
            var n = this.Yk(t),
                e = this.sq(t),
                h = this.kf;
            if (h.hasOwnProperty(this.Ef) && h[this.Ef].Mf.pause(), this.Ef = n, h.hasOwnProperty(this.Ef)) e = h[this.Ef].Mf;
            else {
                var s = new q.LH;
                s.SE = e, e = s.Mf = new Audio(t), s.Mf.Tr = "auto", h[n] = s, s.Mf.load()
            }
            e.addEventListener("pause", this.ZC, !1), e.loop = i || !1, e.play(), q.Xe.vk = !0
        }
    },
    ZC: function(t) {
        q.Xe.vk = !1, this.removeEventListener("pause", arguments.callee, !1)
    },
    cA: function(t) {
        var i = this.kf,
            n = this.Ef;
        if (i.hasOwnProperty(n)) {
            var e = i[n].Mf;
            e.pause(), e.currentTime = e.duration, t && delete i[n], q.Xe.vk = !1
        }
    },
    $Y: function() {
        this.kf.hasOwnProperty(this.Ef) && (this.kf[this.Ef].Mf.pause(), q.Xe.vk = !1)
    },
    SZ: function() {
        if (this.kf.hasOwnProperty(this.Ef)) {
            var t = this.kf[this.Ef].Mf;
            t.play(), t.addEventListener("pause", this.ZC, !1), q.Xe.vk = !0
        }
    },
    UZ: function() {
        if (this.kf.hasOwnProperty(this.Ef)) {
            var t = this.kf[this.Ef].Mf;
            t.currentTime = 0, t.play(), t.addEventListener("pause", this.ZC, !1), q.Xe.vk = !0
        }
    },
    U0: function() {
        return !1
    },
    Hu: function() {
        return this.kf.hasOwnProperty(this.Ef) ? this.kf[this.Ef].Mf.volume : 0
    },
    hG: function(t) {
        this.kf.hasOwnProperty(this.Ef) && (this.kf[this.Ef].Mf.volume = 1 < t ? 1 : 0 > t ? 0 : t)
    },
    vk: function() {
        return q.Xe.vk
    },
    fN: function(t, i) {
        if (!this.ik) return null;
        var n, e = this.Yk(t);
        n = this.kf.hasOwnProperty(e) ? this.kf[e].SE : this.sq(t);
        var h, s = this.yS(e);
        if (0 < s.length)
            for (var r = 0; r < s.length; r++)
                if (s[r].ended) {
                    (h = s[r]).currentTime = 0, window.chrome && h.load();
                    break
                }
        if (!h) {
            if (s.length >= this.EJ) return q.log("Error: " + t + " greater than " + this.EJ), t;
            (h = new Audio(e + "." + n)).volume = this.pi, s.push(h)
        }
        return i && (h.loop = i), h.play(), e = this.NI++, this.vf[e] = h, e
    },
    uW: function() {
        return this.pi
    },
    gG: function(t) {
        this.pi = 1 < t ? 1 : 0 > t ? 0 : t;
        var i, n, e = this.km;
        for (n in e)
            if (0 < (t = e[n]).length)
                for (var h = 0; h < t.length; h++) i = t[h], i.volume = this.pi
    },
    ZY: function(t) {
        null != t && this.vf.hasOwnProperty(t) && ((t = this.vf[t]).ended || t.pause())
    },
    XY: function() {
        var t, i, n, e = this.km;
        for (n in e) {
            t = e[n];
            for (var h = 0; h < t.length; h++)(i = t[h]).ended || i.pause()
        }
    },
    RZ: function(t) {
        null != t && this.vf.hasOwnProperty(t) && ((t = this.vf[t]).ended || t.play())
    },
    QZ: function() {
        var t, i, n, e = this.km;
        for (n in e)
            if (0 < (t = e[n]).length)
                for (var h = 0; h < t.length; h++)(i = t[h]).ended || i.play()
    },
    qv: function(t) {
        null != t && this.vf.hasOwnProperty(t) && ((t = this.vf[t]).ended || (t.loop = !1, t.currentTime = t.duration))
    },
    mO: function() {
        var t, i, n, e = this.km;
        for (n in e) {
            t = e[n];
            for (var h = 0; h < t.length; h++)(i = t[h]).ended || (i.loop = !1, i.currentTime = i.duration)
        }
    },
    vO: function(t) {
        if (t) {
            t = this.Yk(t), this.km.hasOwnProperty(t) && delete this.km[t];
            var i, n, e = this.vf;
            for (n in e) i = e[n], -1 < (i = this.Yk(i.src)).indexOf(t) && (this.qv(n), delete e[n])
        }
    },
    yS: function(t) {
        var i = this.km;
        return i.hasOwnProperty(t) || (i[t] = []), i[t]
    },
    Tu: function(t) {
        for (var i = this.po, n = 0; n < i.length; n++)
            if (i[n] == t) return !0;
        return !1
    },
    FS: function() {
        if (this.ik) {
            var t, i = ["ogg", "mp3", "wav", "mp4", "m4a"];
            for (t in i) {
                var n = i[t];
                this.UB[n] && this.po.push(n)
            }
        }
    }
}), q.xR = function() {
    this.Bv = this.Ve = this.key = void 0, this.RF = this.startTime = 0, this.gz = !1
}, q.wR = q.Xe.extend({
    Gn: null,
    po: null,
    ik: !1,
    Ti: null,
    oh: null,
    Xd: null,
    HJ: 1,
    Xi: null,
    pi: 1,
    ctor: function() {
        q.Xe.prototype.ctor.call(this), this.po = [], this.Ti = {}, this.oh = {}, this.Xi = {}
    },
    init: function() {
        this.Gn = new(window.XO || window.T0 || window.pY);
        var t = {};
        this.XI(t);
        var i, n = ["ogg", "mp3", "wav", "mp4", "m4a"],
            e = this.po;
        for (i in n) {
            var h = n[i];
            t[h] && e.push(h)
        }
        return this.ik = 0 < e.length
    },
    Tu: function(t) {
        var i, n = this.po;
        for (i in n)
            if (t === n[i]) return !0;
        return !1
    },
    rC: function(t, i, n) {
        var e = new window.XMLHttpRequest;
        e.open("GET", t, !0), e.responseType = "arraybuffer";
        var h = this;
        e.onload = function() {
            h.Gn.N5(e.response, i, n)
        }, e.onerror = n, e.send()
    },
    kZ: function(t) {
        this.Ur(t)
    },
    jZ: function(t) {
        this.Ur(t)
    },
    Ur: function(t) {
        if (this.ik) {
            var i = this.Yk(t);
            if (!this.Tu(this.sq(t)) || i in this.Ti || i in this.oh) q.Kb.getInstance().$h();
            else {
                this.oh[i] = !0;
                var n = this;
                this.rC(t, function(t) {
                    n.Ti[i] = t, delete n.oh[i], q.Kb.getInstance().$h()
                }, function() {
                    delete n.oh[i], q.Kb.getInstance().Qm(t)
                })
            }
        }
    },
    Ys: function(t, i, n, e) {
        var h = new q.xR;
        return i = i || !1, n = n || 1, e = e || 0, h.key = t, h.Ve = this.Gn.G5(), h.Ve.buffer = this.Ti[t], h.Ve.loop = i, h.Bv = this.Gn.H5(), h.Bv.mW.value = n, h.Ve.IV(h.Bv), h.Bv.IV(this.Gn.P5), h.Ve.start ? h.Ve.start(0, e) : h.Ve.QM ? (t = h.Ve.buffer.duration, i ? h.Ve.QM(0, e, t) : h.Ve.QM(0, e, t - e)) : h.Ve.Mca(0), h.startTime = this.Gn.currentTime - e, h.RF = h.startTime, h.gz = !1, h
    },
    yx: function(t) {
        return 2 == t.Ve.Eda
    },
    PC: function(t) {
        return !this.yx(t) && t.gz
    },
    vk: function() {
        return !!this.Xd && this.yx(this.Xd)
    },
    gN: function(t, i) {
        var n = this.Yk(t),
            e = this.sq(t);
        if (i = i || !1, this.Xd && this.cA(), n in this.Ti) this.Xd = this.Ys(n, i, this.Hu());
        else if (this.Tu(e) && !(n in this.oh)) {
            this.oh[n] = !0;
            var h = this;
            this.rC(t, function(e) {
                h.Ti[n] = e, delete h.oh[n], h.gN(t, i)
            }, function() {
                delete h.oh[n]
            })
        }
    },
    mt: function(t) {
        t.Ve.stop ? t.Ve.stop(0) : t.Ve.Lca(0)
    },
    cA: function(t) {
        if (this.Xd) {
            var i = this.Xd.key;
            this.mt(this.Xd), this.Xd = null, t && delete this.Ti[i]
        }
    },
    MJ: function(t) {
        t.RF = this.Gn.currentTime, t.gz = !0, this.mt(t)
    },
    $Y: function() {
        this.vk() && this.MJ(this.Xd)
    },
    SJ: function(t, i) {
        return this.Ys(t.key, t.Ve.loop, i, (t.RF - t.startTime) % t.Ve.buffer.duration)
    },
    SZ: function() {
        this.Xd && this.PC(this.Xd) && (this.Xd = this.SJ(this.Xd, this.Hu()))
    },
    UZ: function() {
        if (this.Xd) {
            var t = this.Xd.key,
                i = this.Xd.Ve.loop,
                n = this.Hu();
            this.mt(this.Xd), this.Xd = this.Ys(t, i, n)
        }
    },
    U0: function() {
        return !1
    },
    Hu: function() {
        return this.HJ
    },
    aK: function(t, i) {
        t.Bv.mW.value = i
    },
    hG: function(t) {
        1 < t ? t = 1 : 0 > t && (t = 0), this.Hu() != t && (this.HJ = t, this.Xd && this.aK(this.Xd, t))
    },
    fN: function(t, i) {
        var n = this.Yk(t),
            e = this.sq(t);
        if (i = i || !1, n in this.Ti) {
            e = this.Xi, n in e || (e[n] = []);
            var h, e = e[n];
            for (h in e) {
                var s = e[h];
                if (!this.yx(s) && !this.PC(s)) return e[h] = this.Ys(n, i, this.pi), t
            }
            e.push(this.Ys(n, i, this.pi))
        } else if (this.Tu(e) && !(n in this.oh)) {
            this.oh[n] = !0;
            var r = this;
            this.rC(t, function(e) {
                r.Ti[n] = e, delete r.oh[n], r.fN(t, i)
            }, function() {
                delete r.oh[n]
            })
        }
        return h = this.NI++, this.vf[h] = this.Xi[n], h
    },
    uW: function() {
        return this.pi
    },
    gG: function(t) {
        if (1 < t ? t = 1 : 0 > t && (t = 0), this.pi != t) {
            this.pi = t;
            var i, n = this.Xi;
            for (i in n) {
                var e, h = n[i];
                for (e in h) this.aK(h[e], t)
            }
        }
    },
    NJ: function(t) {
        for (var i in t) {
            var n = t[i];
            this.yx(n) && this.MJ(n)
        }
    },
    ZY: function(t) {
        null != t && this.vf.hasOwnProperty(t) && this.NJ(this.vf[t])
    },
    XY: function() {
        for (var t in this.Xi) this.NJ(this.Xi[t])
    },
    TJ: function(t, i) {
        for (var n in t) {
            var e = t[n];
            this.PC(e) && (t[n] = this.SJ(e, i))
        }
    },
    RZ: function(t) {
        null != t && this.vf.hasOwnProperty(t) && this.TJ(this.vf[t], this.pi)
    },
    QZ: function() {
        for (var t in this.Xi) this.TJ(this.Xi[t], this.pi)
    },
    qv: function(t) {
        null != t && this.vf.hasOwnProperty(t) && this.mt(this.vf[t])
    },
    mO: function() {
        var t, i = this.Xi;
        for (t in i) {
            var n, e = i[t];
            for (n in e) this.mt(e[n]);
            delete i[t]
        }
    },
    vO: function(t) {
        if (t) {
            var i = this.Yk(t);
            this.Xi.hasOwnProperty(i) && (this.qv(t), delete this.Xi[keyname]), i in this.Ti && delete this.Ti[i]
        }
    }
}), q.Xe.La = null, q.Xe.vk = !1, q.Xe.getInstance = function() {
    if (!this.La) {
        var t = navigator.userAgent;
        this.La = q.pa.t0 && (/iPhone OS/.test(t) || /iPad/.test(t)) ? new q.wR : new q.XQ, this.La.init()
    }
    return this.La
}, q.Xe.end = function() {
    this.La && (this.La.cA(), this.La.mO()), this.La = null
};
var ra = ["res/iphone/body_st_1.png", "res/iphone/body_st_2.png", "res/iphone/body_st_3.png", "res/iphone/body_st_4.png"],
    sa = ["res/iphone/body_rl_1.png", "res/iphone/body_rl_2.png", "res/iphone/body_rl_3.png", "res/iphone/body_rl_4.png"],
    N = ["res/iphone/body_zc_zc_1.png", "res/iphone/body_zc_zc_2.png", "res/iphone/body_zc_zc_3.png", "res/iphone/body_zc_zc_4.png"],
    ta = ["res/iphone/body_sb_1.png", "res/iphone/body_sb_2.png", "res/iphone/body_sb_3.png", "res/iphone/body_sb_4.png"],
    ua = ["res/iphone/ys_tool_pf_1.png", "res/iphone/ys_tool_pf_1.png", "res/iphone/ys_tool_pf_1.png", "res/iphone/ys_tool_pf_1.png"],
    va = "res/iphone/ys_0.png res/iphone/ys_1.png res/iphone/ys_2.png res/iphone/ys_3.png res/iphone/ys_4.png res/iphone/ys_5.png res/iphone/ys_6.png res/iphone/ys_7.png res/iphone/ys_8.png res/iphone/ys_9.png".split(" "),
    wa = [{
        src: "res/iphone/ui_kjbj.png"
    }, {
        src: "res/iphone/ui_ren.png"
    }, {
        src: "res/iphone/ui_yw.png"
    }, {
        src: "res/iphone/ui_start.png"
    }, {
        src: "res/iphone/ui_start_2.png"
    }, {
        src: "res/iphone/ui_yy_1.png"
    }, {
        src: "res/iphone/ui_yy_2.png"
    }, {
        src: "res/iphone/ui_yy_4.png"
    }, {
        src: "res/iphone/ui_bg_1.png"
    }, {
        src: "res/iphone/ui_bg_2.png"
    }, {
        src: "res/iphone/ui_return.png"
    }, {
        src: "res/iphone/ui_return_1.png"
    }, {
        src: "res/iphone/ui_xz_lucas.png"
    }, {
        src: "res/iphone/ui_xz_emma.png"
    }, {
        src: "res/iphone/ui_xz_jacob.png"
    }, {
        src: "res/iphone/ui_xz_olivia.png"
    }, {
        src: "res/iphone/ui_nexta_1.png"
    }, {
        src: "res/iphone/ui_nexta_2.png"
    }, {
        src: "res/iphone/ui_ad.png"
    }, {
        src: "res/iphone/ui_dgt.png"
    }, {
        src: "res/iphone/ui_care_1.png"
    }, {
        src: "res/iphone/ui_care_2.png"
    }, {
        src: "res/iphone/ui_doctor_1.png"
    }, {
        src: "res/iphone/ui_doctor_2.png"
    }, {
        src: "res/iphone/ui_bath_1.png"
    }, {
        src: "res/iphone/ui_bath_2.png"
    }, {
        src: "res/iphone/ui_dressup_1.png"
    }, {
        src: "res/iphone/ui_dressup_1.png"
    }, {
        src: "res/iphone/yl_bg_2.png"
    }, {
        src: "res/iphone/yl_bg_1.png"
    }, {
        src: "res/iphone/body_st_1.png"
    }, {
        src: "res/iphone/body_st_2.png"
    }, {
        src: "res/iphone/body_st_3.png"
    }, {
        src: "res/iphone/body_st_4.png"
    }, {
        src: "res/iphone/body_rl_1.png"
    }, {
        src: "res/iphone/body_rl_2.png"
    }, {
        src: "res/iphone/body_rl_3.png"
    }, {
        src: "res/iphone/body_rl_4.png"
    }, {
        src: "res/iphone/body_zc_zc_1.png"
    }, {
        src: "res/iphone/body_zc_zc_2.png"
    }, {
        src: "res/iphone/body_zc_zc_3.png"
    }, {
        src: "res/iphone/body_zc_zc_4.png"
    }, {
        src: "res/iphone/body_sb_1.png"
    }, {
        src: "res/iphone/body_sb_2.png"
    }, {
        src: "res/iphone/body_sb_3.png"
    }, {
        src: "res/iphone/body_sb_4.png"
    }, {
        src: "res/iphone/body_nb.png"
    }, {
        src: "res/iphone/ui_tp.png"
    }, {
        src: "res/iphone/yl_tool_bz.png"
    }, {
        src: "res/iphone/yl_tool_np.png"
    }, {
        src: "res/iphone/yl_tool_ssf.png"
    }, {
        src: "res/iphone/yl_tool_ssf_2.png"
    }, {
        src: "res/iphone/yl_tool_ssf_3.png"
    }, {
        src: "res/iphone/yl_tool_ssf_4.png"
    }, {
        src: "res/iphone/yl_tool_zui.png"
    }, {
        src: "res/iphone/yl_tool_zui_2.png"
    }, {
        src: "res/iphone/yl_tool_nb.png"
    }, {
        src: "res/iphone/body_dk_yl_1.png"
    }, {
        src: "res/iphone/body_dk_yl_2.png"
    }, {
        src: "res/iphone/body_dk_yl_3.png"
    }, {
        src: "res/iphone/yl_tool_nz.png"
    }, {
        src: "res/iphone/yl_ui_ts_1.png"
    }, {
        src: "res/iphone/yl_ui_ts_2.png"
    }, {
        src: "res/iphone/yl_ui_ts_3.png"
    }, {
        src: "res/iphone/yl_ui_ts_4.png"
    }, {
        src: "res/iphone/yl_ui_ts_5.png"
    }, {
        src: "res/iphone/yl_tool_pg.png"
    }, {
        src: "res/iphone/yl_tool_nn.png"
    }, {
        src: "res/iphone/body_zy_zy_1.png"
    }, {
        src: "res/iphone/body_zy_zy_2.png"
    }, {
        src: "res/iphone/body_zy_zy_3.png"
    }, {
        src: "res/iphone/body_zy_zy_4.png"
    }, {
        src: "res/iphone/body_zy_zy_5.png"
    }, {
        src: "res/iphone/body_zy_zy_6.png"
    }, {
        src: "res/iphone/body_zy_zy_7.png"
    }, {
        src: "res/iphone/body_zy_zy_8.png"
    }, {
        src: "res/iphone/body_sj_sj_1.png"
    }, {
        src: "res/iphone/body_sj_sj_2.png"
    }, {
        src: "res/iphone/body_sj_sj_3.png"
    }, {
        src: "res/iphone/body_sj_sj_4.png"
    }, {
        src: "res/iphone/body_sj_sj_5.png"
    }, {
        src: "res/iphone/body_sj_sj_6.png"
    }, {
        src: "res/iphone/body_sj_sj_7.png"
    }, {
        src: "res/iphone/body_sj_sj_8.png"
    }, {
        src: "res/iphone/body_sj_sj_9.png"
    }, {
        src: "res/iphone/body_sj_sj_10.png"
    }, {
        src: "res/iphone/body_sj_sj_11.png"
    }, {
        src: "res/iphone/body_sj_sj_12.png"
    }, {
        src: "res/iphone/body_kx_kx_1.png"
    }, {
        src: "res/iphone/body_kx_kx_2.png"
    }, {
        src: "res/iphone/body_kx_kx_3.png"
    }, {
        src: "res/iphone/body_kx_kx_4.png"
    }, {
        src: "res/iphone/body_kx_kx_5.png"
    }, {
        src: "res/iphone/body_kx_kx_6.png"
    }, {
        src: "res/iphone/body_kx_kx_7.png"
    }, {
        src: "res/iphone/body_kx_kx_8.png"
    }, {
        src: "res/iphone/body_hn_hn_1.png"
    }, {
        src: "res/iphone/body_hn_hn_2.png"
    }, {
        src: "res/iphone/body_hn_hn_3.png"
    }, {
        src: "res/iphone/body_hn_hn_4.png"
    }, {
        src: "res/iphone/body_hn_hn_5.png"
    }, {
        src: "res/iphone/body_hn_hn_6.png"
    }, {
        src: "res/iphone/body_hn_hn_7.png"
    }, {
        src: "res/iphone/body_hn_hn_8.png"
    }, {
        src: "res/iphone/body_hn_hn_9.png"
    }, {
        src: "res/iphone/body_hn_hn_10.png"
    }, {
        src: "res/iphone/body_hn_hn_11.png"
    }, {
        src: "res/iphone/body_hn_hn_12.png"
    }, {
        src: "res/iphone/body_dk_dk_1.png"
    }, {
        src: "res/iphone/body_dk_dk_2.png"
    }, {
        src: "res/iphone/body_dk_dk_3.png"
    }, {
        src: "res/iphone/body_dk_dk_4.png"
    }, {
        src: "res/iphone/body_dk_dk_5.png"
    }, {
        src: "res/iphone/body_dk_dk_6.png"
    }, {
        src: "res/iphone/body_dk_dk_7.png"
    }, {
        src: "res/iphone/body_dk_dk_8.png"
    }, {
        src: "res/iphone/body_dk_dk_9.png"
    }, {
        src: "res/iphone/body_dk_dk_10.png"
    }, {
        src: "res/iphone/body_dk_dk_11.png"
    }, {
        src: "res/iphone/body_dk_dk_12.png"
    }, {
        src: "res/iphone/ui_button_home.png"
    }, {
        src: "res/iphone/ui_button_homea.png"
    }, {
        src: "res/iphone/ui_gy.png"
    }, {
        src: "res/iphone/xz_bg_2.png"
    }, {
        src: "res/iphone/hz_bg_2.png"
    }, {
        src: "res/iphone/ys_bg_1.png"
    }, {
        src: "res/iphone/ys_bg_2.png"
    }, {
        src: "res/iphone/ys_tool_pf_1.png"
    }, {
        src: "res/iphone/ys_tool_pf_1.png"
    }, {
        src: "res/iphone/ys_tool_pf_1.png"
    }, {
        src: "res/iphone/ys_tool_pf_1.png"
    }, {
        src: "res/iphone/ys_tool_mj.png"
    }, {
        src: "res/iphone/ys_ui_fg.png"
    }, {
        src: "res/iphone/ui_jiantou.png"
    }, {
        src: "res/iphone/ui_front_1.png"
    }, {
        src: "res/iphone/ui_front_2.png"
    }, {
        src: "res/iphone/ui_next_1.png"
    }, {
        src: "res/iphone/ui_next_2.png"
    }, {
        src: "res/iphone/ys_tool_twj.png"
    }, {
        src: "res/iphone/ys_tool_tzq_2.png"
    }, {
        src: "res/iphone/ys_tool_jz.png"
    }, {
        src: "res/iphone/ys_tool_jz_2.png"
    }, {
        src: "res/iphone/ys_tool_pz.png"
    }, {
        src: "res/iphone/ys_tool_pz_2.png"
    }, {
        src: "res/iphone/ys_tool_dg.png"
    }, {
        src: "res/iphone/ys_tool_zt_1.png"
    }, {
        src: "res/iphone/ys_tool_zt_2.png"
    }, {
        src: "res/iphone/ys_tool_ys.png"
    }, {
        src: "res/iphone/ys_tool_ys_1.png"
    }, {
        src: "res/iphone/ys_tool_ckt.png"
    }, {
        src: "res/iphone/ys_tool_ckt_1.png"
    }, {
        src: "res/iphone/ys_tool_ckt_2.png"
    }, {
        src: "res/iphone/ys_tool_ckt_3.png"
    }, {
        src: "res/iphone/ys_tool_ax.png"
    }, {
        src: "res/iphone/ys_tool_xdg.png"
    }, {
        src: "res/iphone/ys_tool_xdx.png"
    }, {
        src: "res/iphone/ys_tool_wd.png"
    }, {
        src: "res/iphone/ys_0.png"
    }, {
        src: "res/iphone/ys_1.png"
    }, {
        src: "res/iphone/ys_2.png"
    }, {
        src: "res/iphone/ys_3.png"
    }, {
        src: "res/iphone/ys_4.png"
    }, {
        src: "res/iphone/ys_5.png"
    }, {
        src: "res/iphone/ys_6.png"
    }, {
        src: "res/iphone/ys_7.png"
    }, {
        src: "res/iphone/ys_8.png"
    }, {
        src: "res/iphone/ys_9.png"
    }, {
        src: "res/iphone/ys_d.png"
    }, {
        src: "res/iphone/shuangshenfen.plist"
    }];
(b = Array.prototype).remove = function(t, i) {
    var n = this.slice((i || t) + 1 || this.length);
    return this.length = 0 > t ? this.length + t : t, this.push.apply(this, n)
}, b.count = function() {
    return this.length
}, b.GZ = function(t) {
    return -1 != (t = this.indexOf(t)) && this.remove(t)
}, b.BZ = function() {
    this.length = 0
}, b.jV = function(t) {
    this.push(t)
}, String.prototype.sW = function() {
    return this.valueOf()
}, String.ub = function(t) {
    if (0 == arguments.length) return "";
    var i = Array.prototype.slice.call(arguments, 1);
    return t.replace(/\{[\w]*\}/g, function(t) {
        return i[t.replace(/^\{|\}$/g, "")] || "''"
    })
};
var O = {},
    ya = document.ccConfig.SHExtension || {};
0 === ya.screenDirection ? (O.width = 480, O.height = 320) : (O.width = 320, O.height = 480);
var Aa = 0,
    Ea = "onorientationchange" in window,
    Fa = Ea ? "orientationchange" : "resize";
window.addEventListener(Fa, Da, !1), Da(), CellInScrollItemTAG_BU = 1e4;
var P;
P = {
    zE: function(t) {
        var i = q.n.getInstance().Y;
        return i.width / t.width > i.height / t.height ? i.width / t.width : i.height / t.height
    },
    ok: function(t) {
        var i = q.n.getInstance().Y;
        return i.width / t.width < i.height / t.height ? i.width / t.width : i.height / t.height
    },
    gv: function(t, i) {
        var n = q.n.getInstance().Y;
        t.v(q.a(0, 0));
        var e = this.ok(i);
        t.vb(e), t.i(q.a(n.width / 2 - i.width * e / 2, 0))
    },
    vea: function(t, i) {
        var n = q.n.getInstance().Y;
        t.v(q.a(0, 0));
        var e = this.ok(i);
        t.vb(e), t.i(q.a(n.width / 2 - i.width * e / 2, n.height - i.height * e))
    },
    Mi: function(t, i) {
        var n = q.n.getInstance().Y;
        t.v(q.a(0, 0));
        var e = this.ok(i);
        t.vb(e), t.i(q.a(0, n.height - i.height * e))
    },
    wea: function(t, i) {
        var n = q.n.getInstance().Y;
        t.v(q.a(0, 0));
        var e = this.ok(i);
        t.vb(e), t.i(q.a(n.width - i.width * e, n.height - i.height * e))
    },
    Wm: function(t, i) {
        t.v(q.a(0, 0)), t.i(q.a(0, 0)), t.vb(this.ok(i))
    },
    aG: function(t, i) {
        var n = q.n.getInstance().Y;
        t.v(q.a(0, 0));
        var e = this.ok(i);
        t.vb(e), t.i(q.a(n.width - i.width * e, 0))
    },
    jM: function() {
        return q.Sd.getInstance().Uq && q.Sd.getInstance().Vq
    },
    wha: function() {
        return !1
    },
    v5: function(t, i) {
        var n = t.getParent();
        n && (t.Cb(!0), n.l(t, i))
    },
    Baa: function() {
        return !1
    },
    naa: function() {
        return !1
    },
    maa: function() {
        return !1
    },
    k8: function(t, i) {
        return i.ed(t[0].Mc)
    },
    KE: function(t) {
        return 0 == t ? "0" : String.ub("{0}", t)
    },
    PK: function() {
        try {
            return "localStorage" in window && null !== window.localStorage
        } catch (t) {
            return !1
        }
    },
    xr: function(t) {
        for (var i = (i = location.href).replace("?", "?&").split("&"), n = "", e = 1; e < i.length; e++) 0 == i[e].indexOf(t + "=") && (n = i[e].replace(t + "=", ""));
        return n
    },
    Oy: function(t, i, n) {
        //_gaq ? _gaq.push(["_trackEvent", t, i, n]) : q.HF("google analytics has not been inited!")
    },
    TL: function() {
        var t = decodeURIComponent(P.xr("f"));
        t && 0 != t.trim().length || (t = ""), window.location.href = t
    },
    r5: function() {
        var t = window.navigator.userAgent.toLowerCase();
        return !(t.match(/android/i) && !t.match(/chrome/i))
    },
    k5: function(t) {
        var i = new Image;
        return i.src = t, (t = new q.rb).Qd(i), t.Bd(), q.m.nf(t)
    },
    fz: function() {
        return "pc" == P.xr("ref")
    },
    h3: function(t) {
        /*var i = "width=700,height=440,resizable=no,screenY=" + (screen.height - 440) / 2 + ",screenX=" + (screen.width - 700) / 2;
        switch (t) {
            case Ga:
                window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("//www.google.com"), "SocialShareWindow", i)
        }
		*/
    }
};
var Ga = 0;
ADSENSE_HTML5_PUBLISHER_ID = "", ADSENSE_HTML5_CHANNEL_ID = "", ADSENSE_HTML5_DEBUG = !1, ADSENSE_HTML5_IMAGE_ID = "imageAdContainer", ADSENSE_HTML5_VIDEO_ID = "contentElement", ADSENSE_HTML5_TEXT_ID = "textAdContainer", INMOBI_HTML5_PUBLISHER_ID = "", INMOBI_HTML5_DEBUG = !1, INMOBI_HTML5_REFREASH_TIME = 20, INMOBI_HTML5_STICKY = "top", ACTION_LOADING_SCENE_VISITED = "game_loading:host+url", ACTION_FIRST_SCENE_VISITED = "home-visited", ACTION_FIRST_SCENE_VISITED_LOGGED = !1, ACTION_FIRST_SCENE_BACK_TO_6677G = "home-back-6677g.com", ACTION_TOPBAR_CLICKED = "topbar-clicked", ACTION_TOPBAR_BACK_TO_6677G = "topbar-back-6677g.com", ACTION_LAST_SCENE_BACK_TO_6677G = "last-back-6677g.com", ACTION_LAST_SCENE_MORE_TO_6677G = "last-more-6677g.com", DGTouchableSpriteDelegate = q.ca.extend({
    NE: function() {},
    ME: function() {},
    Iy: function() {}
});
var S = q.m.extend({
    ig: !1,
    np: !1,
    dv: q.Ua(),
    PV: q.uf(),
    jr: null,
    ZV: !1,
    Cm: !1,
    WL: function() {
        this.ig = !0
    },
    GX: function() {
        return this.ig
    },
    FX: function() {
        return this.Cm
    },
    Te: function(t) {
        this.Cm = t
    },
    da: function(t) {
        this.ig !== t && (this.ig = t, this.Ke && (t ? this.Vr() : q.kA(this)))
    },
    ba: function() {
        this._super(), this.ig && this.Vr()
    },
    kb: function() {
        this._super(), this.ig && q.kA(this)
    },
    Vr: function() {
        q.TF(0, this.Cm, this)
    },
    Lr: function(t) {
        if (!this.zc) return !1;
        for (var i = this.getParent(); null != i; i = i.getParent())
            if (0 == i.zc) return !1;
        return this.np = q.tg(this.rk(), this.getParent().MV(t)), !!this.np && (this.dv = t.Mc, this.jr.NE(this), !0)
    },
    f0: function(t) {
        this.kc ? this.kc.gp(this, t) : this._super(t)
    },
    Rm: function(t) {
        if (this.np) {
            t = t.Mc;
            var i = this.Na(),
                n = q.pf(t, this.dv);
            n.x /= Ba(), n.y /= Ba(), this.i(q.Rf(i, n)), this.dv = t, this.jr.ME(this)
        }
    },
    Nr: function() {
        this.dv = q.Ua(), this.np && (this.np = !1, this.jr.Iy(this))
    },
    Mr: function() {
        this.dv = q.Ua(), this.np && (this.np = !1, this.jr.Iy(this))
    },
    zb: function() {
        return this.jr
    },
    tc: function(t) {
        this.jr = t
    },
    kG: function(t) {
        this.ZV = !0, this.PV = t
    }
});
S.rf = function(t) {
    var i = new S;
    return i && i.Fi(t) ? (i.WL(), i) : null
}, S.Hy = function(t) {
    var i = new S;
    return i && i.wX(t) ? (i.WL(), i) : null
}, DGImageLabelSpriteFileTypeSigleImages = 0, DGImageLabelSpriteFileTypeFrameImage = 1, DGImageLabelSpriteTextAlignmentLeft = 0, DGImageLabelSpriteTextAlignmentCenter = 1, DGImageLabelSpriteTextAlignmentRight = 2;
var Ha = q.m.extend({
    Wy: [],
    RM: [],
    init: function() {
        this._super(), this.xe(q.ud.getInstance().Hc(q.Kp)), q.log("DGImageLabelSprite init")
    },
    Y_: function(t, i, n, e) {
        var h = String.ub("{0}", t);
        this.Wy = [], this.ci(!0);
        for (var s = t = 0; s < h.length; s++) {
            var r = this.RM[h.substr(s, 1)],
                a = null,
                a = n == DGImageLabelSpriteFileTypeSigleImages ? q.m.create(r) : q.m.Hy(r);
            this.Wy.push(a), t += a.g().width + i
        }
        for (this.v(q.a(0, 0)), n = 0, n = e == DGImageLabelSpriteTextAlignmentLeft ? 0 : e == DGImageLabelSpriteTextAlignmentCenter ? -t / 2 : -t, s = 0; s < this.Wy.length; s++)(a = this.Wy[s]).v(q.a(0, 0)), a.i(q.a(n + s * (a.g().width + i), 0)), this.l(a)
    },
    HM: function(t, i) {
        this.RM[t] = i
    }
});
Ha.rY = function() {
    var t = new Ha;
    return q.pa.Rc && t.xe(q.ud.getInstance().Hc(q.sw)), t
};
var V = q.Ya.extend({
    bi: null,
    Fi: function(t) {
        return this.Ea(q.Ka.getInstance().cc(t))
    },
    Ea: function(t) {
        var i = O,
            n = q.n.getInstance().Y;
        return this.bi = q.m.nf(t), this.l(this.bi), this.bi.i(q.a(n.width / 2, n.height / 2)), this.bi.vb(P.zE(i)), !0
    },
    qX: function(t) {
        var i = O,
            n = q.n.getInstance().Y;
        return this.bi = q.m.Hy(t), this.l(this.bi), this.bi.i(q.a(n.width / 2, n.height / 2)), this.bi.vb(P.zE(i)), !0
    },
    Mea: function(t) {
        this.j_(q.Ka.getInstance().cc(t))
    },
    Nea: function(t) {
        this.bi.Zm(q.kh.getInstance().tj(t))
    },
    j_: function(t) {
        this.bi && this.bi.ya(t)
    },
    J6: function() {
        return this.bi ? this.bi.ia() : null
    }
});
V.El = function(t) {
    return V.fY(q.Ka.getInstance().cc(t))
}, V.fY = function(t) {
    var i = new V;
    return i && i.Ea(t) ? i : (delete i, null)
}, V.xca = function(t) {
    var i = new V;
    return i && i.qX(t) ? i : (delete i, null)
};
var Ia = document.createElement("div");
Ia.id = "textAdContainer", Ia.style.cssText = "position:fixed; top: 0%; left:0%; z-index: 99;", document.body.appendChild(Ia);
var Ma = document.createElement("div");
Ma.id = "imageAdContainer", Ma.style.cssText = "position:fixed; top: 0%; left:0%; z-index: 99;", document.body.appendChild(Ma);
var Na = document.createElement("div");
Na.id = "content", Na.style.cssText = "width:0px; height:0px; margin: 0; padding: 0;", Na.innerHTML = '<video id="contentElement" style="width:0px; height:0px; margin: 0; padding: 0;"/>', document.body.appendChild(Na);
var Oa = null;
(b = Pa.prototype).requestAds = function() {
    this.CU ? null == this.GE ? console.error("adsense: 没有配置发布商ID") : null == this.pl ? console.error("adsense: 没有配置广告类型") : null == this.Av ? console.error("adsense: 没有配置广告播放的video元素") : null == this.su && console.error("adsense: 没有配置显示广告的容器div元素") : console.info("已设置为不显示adsense广告")
}, b.lr = function() {
    this.FC = !1, this.Tg && this.Tg.destroy(), document.getElementById(this.su).innerText = ""
}, b.vY = function(t) {
    try {
        2 == W().pl && W().Tg.init(W().JC, W().IC, google.ima.ViewMode.NORMAL), 1 == W().pl && W().Tg.init(320, 68, google.ima.ViewMode.NORMAL), W().Tg.start()
    } catch (t) {
        console.error(t)
    }
}, b.UM = function(t) {
    console.log(t.getError())
}, b.xY = function() {
    document.getElementById(this.Av).pause()
}, b.yY = function() {
    document.getElementById(this.Av).play()
}, b.OY = function() {
    W().FC && Qa()
};
var Ta = null,
    Ua = !1;
Va.prototype.onError = function(t) {
    "nfr" == t && (Wa().lr(), console.info("inmobi: 广告加载失败"))
};
var inmobi_conf = {
        siteid: INMOBI_HTML5_PUBLISHER_ID,
        slot: 728 <= document.body.scrollWidth ? "11" : "15",
        test: INMOBI_HTML5_DEBUG,
        manual: !1,
        autoRefresh: INMOBI_HTML5_REFREASH_TIME,
        sticky: INMOBI_HTML5_STICKY,
        onError: Wa().onError,
        targetWindow: "_blank"
    },
    Y = document.createElement("div");
Y.id = "inmobi_ad_slot", Y.style.display = "none", document.body.appendChild(Y);
var Xa = document.createElement("script");
Xa.type = "text/javascript", Xa.async = !0, Y.appendChild(Xa), (b = Va.prototype).M = function(t) {
    var i = t ? "display:inline; " : "display:none;",
        n = inmobi_conf.sticky + ": 0%;",
        e = document.documentElement.scrollWidth,
        h = document.documentElement.scrollHeight;
    P.ok(O), h = h / 480 * 320, i = 1 == Sa() ? i + n + "position:fixed; z-index: 99; left:" + (e - h) / 2 / e * 100 + "%;" : i + n + "position:fixed; z-index: 99; left:" + (e - h) / 2 / e * 100 + "%; ", Y.style.cssText = i, (i = Y.getElementsByTagName("iframe")[0]) && (i.style.backgroundColor = "rgba(0, 0, 0, 0)"), this.zc = t
}, b.wV = function() {
    var t = document.documentElement.scrollWidth,
        i = document.documentElement.scrollHeight;
    P.ok(O);
    var n = (n = 6.4 * (i = i / 480 * 50)) > t ? t : n,
        e = Y.getElementsByTagName("img");
    if (0 < e.length)
        for (var h = 0; h < e.length; h++) {
            var s = e[h];
            1 < s.width ? (s.style.position = "fixed", "top" == inmobi_conf.sticky ? s.style.top = "0" : "bottom" == inmobi_conf.sticky && (s.style.bottom = "0"), s.style.left = (t - n) / 2 / t * 100 + "%", s.style.border = "0", s.width = n, s.height = i) : (s.width = 1, s.height = 1)
        }
}, b.wY = function() {
    Wa().lr()
}, b.requestAds = function() {
    try {
        Ua || (_inmobi.addEventListener("close", this.wY), _inmobi.getNewAd(Y, inmobi_conf), Ua = !0), this.M(!0)
    } catch (t) {
        console.error("inmobi request ad error"), console.error(t)
    }
}, b.lr = function() {
    this.M(!1)
}, 1 == Sa() && window.addEventListener("message", function(t) {
    t.origin.toLocaleLowerCase().match(/inmobi/i) && setTimeout(Wa().wV, 1)
}, !1), q.Kb.prototype.yo = function() {
    100 <= this.wr() && $a && (this.oK(), this.$I())
};
var $a = !1,
    ab = q.GA.extend({
        kY: "data:image/png;base64, data:image/png;base64, data:image/png;base64, data:image/png;base64, data:image/png;base64, data:image/png;base64, data:image/png;base64, data:image/png;base64, data:image/png;base64,".split(" "),
        Ir: [],
        Eca: [1, 0, 0, 0, 0, 0, 0, 0, 0],
        EM: 0,
        zha: 0,
        pD: null,
        Qx: null,
        Yt: null,
        Pq: null,
        fK: !1,
        Jt: 200,
        VC: null,
        qm: null,
        init: function() {
            q.Eg.prototype.init.call(this), this.sc = q.size(320, 480), this.EM = this.sc.height / 2 - .1875 * this.sc.height, q.a(this.sc.width / 2, this.sc.height / 2), this.Jt = this.sc.width, this.hm = q.wc.create(q.Ay(32, 32, 32, 255)), this.hm.i(q.a(0, 0)), this.l(this.hm, 0), this.qm = q.Ya.create(), P.gv(this.qm, this.sc), this.l(this.qm, 0), this.jc = q.Aa.create("Loading... 0%", "Arial", 14), this.jc.Qa(q.KK(180, 180, 180)), this.jc.i(q.a(this.sc.width / 2, .15 * this.sc.height)), this.qm.l(this.jc, 10), this.pD = q.wc.create(q.er(255, 0, 0, 255), this.Jt, 2), this.pD.i(q.a((this.sc.width - this.Jt) / 2, 2)), this.qm.l(this.pD), this.Qx = q.wc.create(q.er(0, 255, 0, 255), 1, 5), this.Qx.i(q.a((this.sc.width - this.Jt) / 2, 0)), this.qm.l(this.Qx), this.Pq = new Image;
            var t = this;
            this.Pq.addEventListener("load", function() {
                t.OS(), this.removeEventListener("load", arguments.callee, !1)
            }), this.Pq.src = "data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAoCAYAAACYayaMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZTM0MGM4Ni03YzlmLTQzMWEtODI4ZC05ZTkyYmNiM2ZhM2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTAzMjYzMzUzN0E5MTFFMzk0NENCMTcwOEJDMkE0MzkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTAzMjYzMzQzN0E5MTFFMzk0NENCMTcwOEJDMkE0MzkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTU2NTBlNjMtMTJlZS00OGQ4LWJjZTMtOTdkZTE4MGY5ZTkyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmFlMzQwYzg2LTdjOWYtNDMxYS04MjhkLTllOTJiY2IzZmEzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlT9VdcAAArzSURBVHja7FoLjBVXGf7n3rm77LKwvJbHlobHAottQbZYFRCkpYJijFhfjbSUNjbVxBqjtcVE6iNNUNT4KNqaGNO0JlrrI01FI1CglAKV1rZSWGSBbaELZd+wdx/3MTN+//xn7pz72r2PfVTdk5x7Z86cOXPO9///9///mTGcR6ZTerFmk9X7PrKjV+PYJAo62jUqqjjZ7g/Kn5FyThnOjdTr+r2B/scPONmvDWZx3Hk4mE4z/l9GPea22zxP2z00ybH1W6oo3nUfmeM2UHlNDZVUBskI5PAkhZhh+OfucSC9PfNMRSiOo47VuXfsdnHUzLnN9itpx4l71JjuNcfvk7gWT3l8qkC8/nkAHQjIOr3nGbweQ+ZkG2+hcQ8Ev52MYD0ZpqDh/GKqel6sDj+/o+mrF1D1cqKKaqKSsQIgD8pCcAVhpGuyzRULclCtGP5j8m/HpN2KovZhzVFp43Ovnf+9ft6xox3z2HyeEIwHtCNW6AkqAbydIjRLCU3d4wmsX2u0cgAf1mKEpK/Vi7VdFplaqtq+/DUd7cRtd0Hl/4zqgW/NwGKfpwV31NCsm9WEbF+DrQhRtJso1kUU6STq68A/jmPdquI43qPAislkGGw7ItWJaou0cjN7I9g/fWSlIK8Ecmoa4EKGeYWkv4V1RwA4lkcxX745FIBDN6EeMV0w4l0PUPV6AL8GA0RlRaxt3ZeILr1KdPksAG+BANpEwh6YSXwb1DQiKBPkNQVMl93+uwuvyRSUo28DC5IaT1ECI6fBylB/hLqaR5wHAdxCU5f4mt4DkE/8hih8BpJtQluJqpB6sBz9yul/vthQ40BIqDYeBuhhATyqabhR8OjgdXovg78K9WoKlSuSwohndhK1HoDCVhKFJo/c4tPYIVDc/bkWBj0AbY81p2u5URToelnB4M9NRBz80M43APyL0PBKoY5iFjEcAhlsanFA4pFmYebIoGh5tlJtYkFmwtuzibUcF14LTqT/i8LW5IQE9L5WAT3qk8AQgO4V01SPkaews22vH5qkY+jMoUDQTVG2GEcsUaGW2LCAnghwzaTQrheOtvscJlY2tAsfUU33QG8RLe/Vot/hAd1X/QSAHOWEL0ILkIwFKooElpOuXhGoUfbOoRfm9Fg7ojlLNN0afsBTwNcC1a4L/ey9DGREUUmuHJWzjFmMcw7PzsrizJIREkRAAok4J4eYY8/Ig54OPme03U0F0i5405hEVLOZ3Ax5yhyAPw3tUK8rbxI17ieqfxTniCIClbkJ0Z1dpa8MRo5+SFcezkt4qyPcIfQSLxJ0WwnOHBzBmYkwKw6gepoH2HnMNCFod+lCojWPIF1bnX59MiLZOTcSzVxJtHsj+ndKwpapcDLD9Df1w+L9Wvf71pLPnNwtACAV6RBNjxYZLjpqjPGoU68laj4utGUUa5O8KB4kegW1PXcNS3A7/pZ9Nxn41gai1/+EsLXBb1sAi7juy7K5lnEoAL/gXqJPvED06b8g//sG+uZJgQw61xhAvwxr7FSgFavtvL/4sZ8R3QMK/fzrolDxwdJ81kTeKItezq6VGQGDLU9cQVT7Ub/t3FGiZz4FM0fUNBaTvHUv+sySa/PR75VvKtsNJms8JzTX30k0vU7a3I08nhuumRW+sPWkiK1Ob2JAPE0P9gN4zA+w3X62FmKGUjQe06DZ70I+eq+aAhr7muQZRdKPTzvRTtmpyxrjW5nNsQLcXqrt9bQgTwgD+DEcxkFTXgLXz14t27ldSN5KqrHYS7iohMxREWt8KcYZo21lTJxHtPQhCAV9Tz+cHv4y8CEIdeGtENj1sv0dgfW24ZkNTxKdPyaO38igyYs3YN41cn72j0RlmP+8TQAVGBz9ngiR18buaSmstapWsy5cWIJ5zYEATv0EFpbfpmiSoToPl23D/xaqWgXgDuR3dxzAzVhP9Jmd/iIjEOARgHX+7xACwtau07IQU03STAExhjE2nYQp12Z+Rtu/iR6HTwlp9zm4pxRWtf4P8CV1GagCD9z1ANGBHyRrMimr2Iz51q6X8wt49rT50Dko3WX4vB3T/ITr2mVEtx/Kvv4nlhMdP4y5FIT9Dl9mrPl5b4dgwi1HiN487LeVQgM/uIXos7sglN1EG/4GTfsa2qdrdp6yFduE+986JNTnlZ52aeNrqdrLmnnNl5KBf/qLRC8/rjwZbli1FdaT2WCpt0PbYVko68iw1UPdiNTOgjbffiXZ2i+AWhv3yvVgMbTjRRGR9pQwLYdR2T9YuG/PF4hWbgd9rPOBCkHlJs2WOh/Ry0Xw+b6vEl3apbRfPSuIMZ69UzRy40EAukLa38DxMx8XduIcwQ0MguqZ0Py2E/AfT8gbr07kJ/94VNrqbhfwy8ch5H03Uftr6QAZKdI8vYfoJBSl56IINqDqBYz78zWgNljG3af8zb2nELmdj8jOulk055Ps5GWLlwcqnf8CUAB4Jkx5HpztzBugdeDUUo0qZiBEW/dLTHwtnoUoKKA5dhfcaLLAeUs35CVnJaKKFgi2r1di9hd+RXTm1+BkcPTcD4CHoYXlEwT4BMg5IMNU8/sPSWRkpjhcQ7mm0Ljke0JT0X6+6FDTn53dW1hWO+H9cJRT5M0XR0sH78KkQIITliLpugUhI+igRDnkybCCKddBaxpyc1KGsq542N9XtxXt1IJvN8KvjKnQ6CQsjj2h2c7Az+hAgMBsNwLJd3Hv9xiEuvuIFn1SFt0HZ/vkTdAicGIH+Pp51LFwYHW3JQPaXwSlkys7vb6wv6/uxes865t/7APfsI9o5x0QOKKfTc+l08qAixih7Sb/dXshFSV8QQBxeRZg1N4mCsdrqlqMeo3/NKaMLtU/E/A6aPzajiPSLi0G927jEHDKQr/vMXB/PWig4qr83nYVkva6HxR0+nv+I6b5vM6zTxPdcA94UHH4csTFs5bLe+BqcP/YSX7/esTU7S+m8GpQiNVNmLSd1Fng8bXfAZU0Ild4zHeahgoDLS1TXolseCJ8ytLPFe63cl4zJrASzr0W1Hni28jmqeCIJ5B4OV5IcUPNZ4n2PoiwSwtVr3oPIpx1PvAxoPUaEp9DX1fiVg7UdaIAsTssDu/UX/0xKmfCQWPcZV9JZgYWOHIpemmH31aFaORGhLPjZyTPb/yiLCqnEXxoALLnaTb/ExaoBSRLIOS134IPW1YUa5kU7lUeXYVx7ETz0Rie3PHvIyZHCFmDzHHKIolQXOpArt+OjLMJAmrerUK4EnljxpP2vnnxtngPPiTC4IyVbTqOi+f3p9snn++HVbQiQZqLKKukTPaMTj4l1DNhvkrQTmf+6rAe/doalcM90b/m8jXOYn+LJLTufj+bDyPEbj1cFHcYzlbaBlC2uFRQqkKtgKeZVj8fOmXYfcj2stnjbEuB7X3Z5aT0ddT1VEoOZdlpjGWhb0cTUiCLj7UHGL+/exJWU9Tezg7TvdlRWhhRmIeiMnH9eyf9o6jUJIwFZJL/MZWlAawDbaeGkRnAy5UB8+k7GJ5uCL77MtO0xlbxNGmZnkvPauvZsNKBU59RJjTbzgA00Yi/OXqnFbPf6MvRtDffyG0U6JzAN3IGdLQMdpJFLaMwjEi5wuAfVXnkaBne8iqDz5vxR0axGNbCGyfPBVR8sq34nYrRkkfZznmzl4LsQ71/FJNhKY+h/pRS8r8fom5GPTeKz5AUfne5FfVub8vAcB5M61SF+hHUlajVVPC7+dGiSpvyqTtRG/UL/xFgAPZSBOfJKXKVAAAAAElFTkSuQmCC", this.Pq.width = 95, this.Pq.height = 40, this.VC = (new Date).getTime() / 1e3 + 0, P.Oy(ACTION_LOADING_SCENE_VISITED, window.location.host, window.location.href)
        },
        OS: function() {
            var t = new q.rb;
            t.Qd(this.Pq), t.Bd(), this.Yt = q.hw.create(q.m.nf(t), null, this.p_, this), q.a(this.sc.width / 2, this.sc.height / 2), this.Yt.i(q.a(this.sc.width / 2, .15 * this.sc.height)), (t = q.Cg.create(this.Yt)).i(q.Ua()), this.qm.l(t), this.Yt.w(0)
        },
        MC: function() {
            if (this.Fm = new q.rb, this.Fm.Qd(this.Bh), this.Fm.Bd(), this.Eq = q.m.nf(this.Fm), this.Ir.push(this.Eq), 9 <= this.Ir.length)
                for (var t = 0; t < this.Ir.length; t++) {
                    var i = this.Ir[t];
                    i.i(q.a(.046875 * this.sc.width * t + .30625 * this.sc.width, this.EM)), this.qm.l(i, 10)
                } else this.fT()
        },
        fT: function() {
            this.Bh = new Image;
            var t = this;
            this.Bh.addEventListener("load", function() {
                t.MC(), this.removeEventListener("load", arguments.callee, !1)
            }), this.Bh.src = this.kY[this.Ir.length], this.Bh.width = 29, 8 == this.Ir.length && (this.Bh.width = 35), this.Bh.height = 25
        },
        yo: function() {
            var t = q.Kb.getInstance().wr(),
                i = "Loading... " + t + "%";
            this.Qx.BV(this.Jt * t / 100), 100 <= t ? (t = new Date, 0 > this.VC - t.getTime() / 1e3 ? this.S_() : (i = "Advertising remaining time: " + parseInt(this.VC - t.getTime() / 1e3) + "s", this.jc.uc(i)), $a && (this.Sl(this.yo), W().lr())) : this.jc.uc(i)
        },
        m0: function() {
            this.Yt.A(q.tf.create(.3))
        },
        p_: function() {
            $a = !0
        },
        S_: function() {
            this.fK || (this.fK = !0, this.jc.A(q.J.create(q.$f.create(.3), q.P.create(this.m0, this))))
        }
    });
ab.Tr = function(t, i, n) {
    var e = ADSENSE_HTML5_VIDEO_ID,
        h = ADSENSE_HTML5_IMAGE_ID,
        s = W();
    return s.GE = ADSENSE_HTML5_PUBLISHER_ID, s.DE = ADSENSE_HTML5_CHANNEL_ID, s.DK = ADSENSE_HTML5_DEBUG ? "on" : "off", s.Av = e, s.su = h, s.pl = 2, s.requestAds(), this.La || (this.La = new ab, this.La.init()), this.La.Pu(t, i, n), (t = q.n.getInstance()).rc ? t.zk(this.La) : t.xN(this.La), this.La
}, TAG_BABY_KIND_1 = 101, TAG_BABY_KIND_2 = 102, TAG_BABY_KIND_3 = 103, TAG_BABY_KIND_4 = 104, TAG_NURSING_KIND_1 = 101, TAG_NURSING_KIND_2 = 102, TAG_NURSING_KIND_3 = 103, TAG_NURSING_KIND_4 = 104, firstGameSharedService = !0, gShared_GameSharedService = null;
var Z = q.ca.extend({
    ha: 0,
    tl: 0,
    kM: 1,
    init: function() {
        return !0
    },
    reset: function() {
        this.tl = this.ha = 0
    },
    OL: function() {
        if (P.PK()) {
            var t = null == window.localStorage.getItem("isPlayMusic") ? "1" : window.localStorage.getItem("isPlayMusic");
            return parseInt(t)
        }
        return this.kM
    },
    NN: function(t) {
        P.PK() && window.localStorage.setItem("isPlayMusic", t), this.kM = t
    }
});
Z.getInstance = function() {
    return firstGameSharedService && (firstGameSharedService = !1, gShared_GameSharedService = new Z, gShared_GameSharedService.init()), gShared_GameSharedService
};
var fb = q.Ya.extend({
        Ki: null,
        Zu: null,
        init: function() {
            this._super();
            var t = V.El("res/iphone/ui_kjbj.png");
            this.l(t), t = q.Ya.create(), this.l(t, 1), P.Mi(t, O), this.Zu = q.Ya.create(), this.l(this.Zu, 1), P.Wm(this.Zu, O), (s = q.m.create("res/iphone/ui_yw.png")).i(q.a(O.width / 2, 2 * O.height)), t.l(s);
            var i = q.Za.create(.5, q.a(O.width / 2, .7 * O.height)),
                n = q.ss.create(.3, q.a(.5 * O.width, .75 * O.height), -100, 1),
                e = q.ss.create(.2, q.a(.5 * O.width, .72 * O.height), 30, 1);
            if (s.A(q.J.create(i, n, e)), Z.getInstance().OL() ? this.Ki = q.Kc.create("res/iphone/ui_yy_1.png", "res/iphone/ui_yy_2.png", this.NM, this) : this.Ki = q.Kc.create("res/iphone/ui_yy_4.png", "res/iphone/ui_yy_2.png", this.NM, this), !P.fz()) {
                var h = q.Kc.create("res/iphone/ui_return.png", "res/iphone/ui_return_1.png", this.tE, this),
                    s = q.Cg.create(this.Ki, h);
                t.l(s), s.i(q.Ua()), h.v(q.a(1, 1))
            }
            return this.Ki.v(q.a(1, 1)), this.Ki.i(q.a(O.width - .1 * this.Ki.g().width, O.height)), this.Ki.w(0), P.fz() || (h.i(q.a(2.3 * this.Ki.g().width, O.height - 5)), h.w(0), h.A(q.tf.create(.25))), this.Ki.A(q.tf.create(.25)), this.Ki.M(!1), (h = q.m.create("res/iphone/ui_ren.png")).v(q.a(0, 0)), h.i(q.a(0, 0)), this.Zu.l(h), h = q.Kc.create("res/iphone/ui_start.png", "res/iphone/ui_start_2.png", this.l0, this), (t = q.Cg.create(h)).i(q.Ua()), this.Zu.l(t), h.i(q.a(O.width - h.g().width / 2, O.height / 2 - .9 * h.g().height)), h.vb(.6), h.A(q.J.create(q.hc.create(.5, 1.1), q.hc.create(.3, 1))), !0
        },
        NM: function() {
            Z.getInstance().OL() ? (gSharedEngine.cA(), gSharedEngine.hG(0), gSharedEngine.gG(0), this.Ki.Tz(q.m.create("res/iphone/ui_yy_4.png")), Z.getInstance().NN(0)) : (gSharedEngine.hG(1), gSharedEngine.gG(1), this.Ki.Tz(q.m.create("res/iphone/ui_yy_1.png")), Z.getInstance().NN(1))
        },
        l0: function() {
            var t = q.n.getInstance(),
                i = new bb;
            t.zk(q.Op.create(.2, i))
        },
        tE: function() {
            P.Oy("BabyCare", ACTION_FIRST_SCENE_BACK_TO_6677G, null), P.TL()
        }
    }),
    gb = q.Eg.extend({
        ba: function() {
            if (this._super(), (t = new fb).init(), this.l(t), !ACTION_FIRST_SCENE_VISITED_LOGGED) {
                ACTION_FIRST_SCENE_VISITED_LOGGED = !0;
                var t = 0 < P.xr("client").length ? P.xr("client") : "#",
                    i = 0 < P.xr("ref").length ? P.xr("ref") : "#";
                P.Oy("BabyCare", ACTION_FIRST_SCENE_VISITED, "ref=" + i + "&client=" + t)
            }
        }
    }),
    ib = q.Ya.extend({
        O: null,
        ye: null,
        dc: null,
        dd: null,
        Ab: null,
        Vh: null,
        Hi: null,
        Ii: null,
        Ji: null,
        qg: null,
        ha: null,
        init: function() {
            this._super();
            var t = V.El("res/iphone/ui_bg_2.png");
            this.l(t), this.O = q.Ya.create(), P.gv(this.O, O), this.l(this.O, 1), this.ye = q.Ya.create(), P.Mi(this.ye, O), this.l(this.ye, 2), this.dc = q.Ya.create(), P.Wm(this.dc, O), this.l(this.dc, 2), this.dd = q.Ya.create(), P.Mi(this.dd, O), this.l(this.dd, 3), t = q.m.create("res/iphone/ui_ad.png"), this.dd.l(t), t.v(q.a(0, 1)), t.i(q.a(0, O.height)), t.ah(O.width / t.g().width), t.M(!1), this.Vh = q.Kc.create("res/iphone/ui_xz_lucas.png", "res/iphone/ui_xz_lucas.png", this.wy, this), this.Hi = q.Kc.create("res/iphone/ui_xz_emma.png", "res/iphone/ui_xz_emma.png", this.wy, this), this.Ii = q.Kc.create("res/iphone/ui_xz_jacob.png", "res/iphone/ui_xz_jacob.png", this.wy, this), this.Ji = q.Kc.create("res/iphone/ui_xz_olivia.png", "res/iphone/ui_xz_olivia.png", this.wy, this), this.Vh.Qc(TAG_BABY_KIND_3), this.Hi.Qc(TAG_BABY_KIND_4), this.Ii.Qc(TAG_BABY_KIND_2), this.Ji.Qc(TAG_BABY_KIND_1);
            var i = q.Cg.create(this.Vh, this.Hi, this.Ii, this.Ji);
            return i.i(q.Ua()), this.O.l(i), this.Vh.i(q.a(O.width / 2 + .55 * this.Vh.g().width, O.height / 2 - .85 * this.Vh.g().height)), this.Hi.i(q.a(O.width / 2 + .55 * this.Hi.g().width, O.height / 2 + .15 * this.Hi.g().height)), this.Ii.i(q.a(O.width / 2 - .55 * this.Ii.g().width, O.height / 2 - .85 * this.Ii.g().height)), this.Ji.i(q.a(O.width / 2 - .55 * this.Ji.g().width, O.height / 2 + .15 * this.Ji.g().height)), this.Ab = q.Kc.create("res/iphone/ui_nexta_1.png", "res/iphone/ui_nexta_2.png", this.JF, this), this.Ab.i(q.a(O.width, O.height - t.g().height)), this.Ab.v(q.a(1, 1)), (t = q.Cg.create(this.Ab)).i(q.Ua()), this.ye.l(t), this.Ab.M(!1), !0
        },
        wy: function(t) {
            this.ha = t.D - TAG_BABY_KIND_1 + 1, null == this.qg && (this.qg = q.m.create("res/iphone/ui_dgt.png")), this.qg.Cb(!0), this.qg.i(q.a(.8 * t.g().width, .2 * t.g().height)), t.l(this.qg), this.qg.A(q.tf.create(.3)), this.qg.M(!0), this.Ab.M(!0)
        },
        JF: function() {
            Z.getInstance().ha = this.ha;
            var t = new hb;
            q.n.getInstance().zk(q.Op.create(.2, t))
        },
        ba: function() {
            this._super(), Ya()
        }
    }),
    bb = q.Eg.extend({
        ba: function() {
            this._super();
            var t = new ib;
            t.init(), this.l(t)
        }
    }),
    lb = q.Ya.extend({
        qg: null,
        O: null,
        ye: null,
        dc: null,
        dd: null,
        Ab: null,
        Vh: null,
        Hi: null,
        Ii: null,
        Ji: null,
        MF: 0,
        init: function() {
            this._super();
            var t = V.El("res/iphone/ui_bg_1.png");
            return this.l(t), this.O = q.Ya.create(), P.gv(this.O, O), this.l(this.O, 1), this.ye = q.Ya.create(), P.Mi(this.ye, O), this.l(this.ye, 2), this.dc = q.Ya.create(), P.Wm(this.dc, O), P.Wm(this.dc, O), this.l(this.dc, 2), this.dd = q.Ya.create(), P.Mi(this.dd, O), this.l(this.dd, 3), t = q.m.create("res/iphone/ui_ad.png"), this.dd.l(t), t.v(q.a(0, 1)), t.i(q.a(0, O.height)), t.ah(O.width / t.g().width), t.M(!1), this.Vh = q.Kc.create("res/iphone/ui_care_1.png", "res/iphone/ui_care_2.png", this.zz, this), this.Hi = q.Kc.create("res/iphone/ui_doctor_1.png", "res/iphone/ui_doctor_2.png", this.zz, this), this.Ii = q.Kc.create("res/iphone/ui_bath_1.png", "res/iphone/ui_bath_2.png", this.zz, this), this.Ji = q.Kc.create("res/iphone/ui_dressup_1.png", "res/iphone/ui_dressup_1.png", this.zz, this), this.Vh.Qc(TAG_NURSING_KIND_1), this.Hi.Qc(TAG_NURSING_KIND_2), this.Ii.Qc(TAG_NURSING_KIND_3), this.Ji.Qc(TAG_NURSING_KIND_4), (t = q.Cg.create(this.Vh, this.Hi)).i(q.Ua()), this.O.l(t), this.Vh.i(q.a(O.width / 2 + .45 * this.Vh.g().width, O.height / 2 + .57 * this.Vh.g().height)), this.Hi.i(q.a(O.width / 2 - .45 * this.Hi.g().width, O.height / 2)), this.Ii.i(q.a(O.width / 2 + .45 * this.Ii.g().width, O.height / 2 - .54 * this.Ii.g().height)), this.Ji.i(q.a(O.width / 2 - .45 * this.Ji.g().width, O.height / 2 - this.Ji.g().height)), this.Ab = q.Kc.create("res/iphone/ui_nexta_1.png", "res/iphone/ui_nexta_2.png", this.JF, this), this.Ab.i(q.a(O.width - 1.1 * this.Ab.g().width, .6 * this.Ab.g().height)), this.Ab.v(q.a(0, .5)), (t = q.Cg.create(this.Ab)).i(q.Ua()), this.ye.l(t), this.Ab.M(!1), !0
        },
        zz: function(t) {
            this.MF = t.D - TAG_NURSING_KIND_1 + 1, null == this.qg && (this.qg = q.m.create("res/iphone/ui_dgt.png")), this.qg.Cb(!0), this.qg.i(q.a(.8 * t.g().width, .2 * t.g().height)), t.l(this.qg), this.qg.A(q.tf.create(.3)), this.qg.M(!0), this.Ab.M(!0)
        },
        JF: function() {
            Za(), Z.getInstance().tl = this.MF;
            var t;
            switch (this.MF) {
                case 1:
                    t = new jb;
                    break;
                case 2:
                    t = new kb
            }
            q.n.getInstance().zk(q.Op.create(.2, t))
        }
    }),
    hb = q.Eg.extend({
        ba: function() {
            this._super();
            var t = new lb;
            t.init(), this.l(t)
        }
    });
TAG_DESK = 100, TAG_SHUANGSHENFEN = 101, TOOL_BEIZI_TAG = 1e3, TOOL_NAIPIN_TAG = 1001, TOOL_FEN_TAG = 1002, TOOL_FENPU_TAG = 10021, TOOL_NAIZUI_TAG = 1003, TOOL_NIAOBU_TAG = 1004, TOOL_NIAOZI_TAG = 1005, TOOL_NEW_NAIZUI_TAG = 1006, STATUS_ZHENGCHANG_INDEX = 10, STATUS_JIE_INDEX = 11, STATUS_NIAOCHUANG_INDEX = 12, STATUS_SHUIJIAO_INDEX = 13;
var $ = !1,
    nb = q.Ya.extend({
        O: null,
        ye: null,
        dc: null,
        dd: null,
        Ab: null,
        ha: 0,
        aa: null,
        rl: null,
        uj: null,
        V: null,
        Aj: null,
        Wh: null,
        Ac: null,
        ql: null,
        Qh: null,
        qk: null,
        hF: !1,
        To: !1,
        Sc: null,
        Tc: null,
        Uc: null,
        W: null,
        Nf: 0,
        Pi: 0,
        mv: -1,
        T: q.uf(),
        init: function() {
            this._super(), this.T = O, this.da(!0);
            var t = V.El("res/iphone/yl_bg_2.png");
            return this.l(t), this.O = q.Ya.create(), P.gv(this.O, this.T), this.l(this.O, 1), this.ye = q.Ya.create(), P.Mi(this.ye, this.T), this.l(this.ye, 2), this.dc = q.Ya.create(), P.Wm(this.dc, O), P.Wm(this.dc, this.T), this.l(this.dc, 3), this.dd = q.Ya.create(), P.Mi(this.dd, this.T), this.l(this.dd, 4), t = q.m.create("res/iphone/ui_ad.png"), this.dd.l(t), t.v(q.a(0, 1)), t.i(q.a(0, this.T.height)), t.ah(this.T.width / t.g().width), t.M(!1), this.Ab = q.Kc.create("res/iphone/ui_nexta_1.png", "res/iphone/ui_nexta_2.png", this.KF, this), this.Ab.i(q.a(this.T.width, .93 * this.T.height)), this.Ab.v(q.a(1, .5)), (t = q.Cg.create(this.Ab)).i(q.Ua()), this.ye.l(t), this.ha = Z.getInstance().ha, t = q.m.create("res/iphone/yl_bg_1.png"), this.O.l(t, 0), t.v(q.a(.5, 0)), t.i(q.a(this.T.width / 2, 0)), this.aa = q.m.create("res/iphone/yl_bg_2.png").g(), this.rl = q.m.create(ra[this.ha - 1]), this.O.l(this.rl, 2), this.rl.v(q.a(0, 1)), this.rl.i(q.a(.1671875 * this.aa.width, .68333 * this.aa.height)), this.Mu(!0), this.Ac = S.rf("res/iphone/ui_tp.png"), this.Ac.Te(!0), this.Ac.Qc(TAG_DESK), this.Ac.tc(this), this.Ac.da(!0), this.dc.l(this.Ac, 1, TAG_DESK), this.Ac.v(q.a(0, 0)), this.Ac.i(q.a(0, 0)), this.Ac.ah(this.T.width / this.Ac.g().width), this.ql = S.rf("res/iphone/yl_tool_bz.png"), this.ql.Te(!0), this.ql.Qc(TOOL_BEIZI_TAG), this.ql.tc(this), this.ql.da(!0), this.ql.v(q.a(.5, 1)), this.dc.l(this.ql, 0, TOOL_BEIZI_TAG), this.ql.i(q.a(this.T.width / 2, 2 * this.Ac.g().height)), (t = S.rf("res/iphone/yl_tool_np.png")).Te(!0), t.Qc(TOOL_NAIPIN_TAG), t.tc(this), t.da(!0), this.dc.l(t, 2, TOOL_NAIPIN_TAG), t.v(q.a(.5, 1)), t.i(q.a(this.T.width / 4 - .6 * t.g().width, t.g().height)), this.Qh = S.rf("res/iphone/yl_tool_ssf.png"), this.Qh.Te(!0), this.Qh.Qc(TOOL_FEN_TAG), this.Qh.tc(this), this.Qh.da(!0), this.dc.l(this.Qh, 2, TOOL_FEN_TAG), this.Qh.i(q.a(this.T.width / 2 - .55 * this.Qh.g().width, this.Qh.g().height / 2)), this.qk = S.rf("res/iphone/yl_tool_ssf_3.png"), this.qk.Te(!0), this.qk.Qc(TOOL_FENPU_TAG), this.qk.tc(this), this.qk.da(!1), this.dc.l(this.qk, 2, TOOL_FENPU_TAG), this.qk.i(q.a(this.T.width / 2 - .55 * this.Qh.g().width, this.Qh.g().height / 2)), this.qk.w(0), (t = S.rf("res/iphone/yl_tool_zui.png")).Te(!0), t.Qc(TOOL_NAIZUI_TAG), t.tc(this), t.da(!0), this.dc.l(t, 2, TOOL_NAIZUI_TAG), t.i(q.a(this.T.width / 2 + .55 * t.g().width, t.g().height)), (t = S.rf("res/iphone/yl_tool_nb.png")).Te(!0), t.Qc(TOOL_NIAOBU_TAG), t.tc(this), t.da(!0), this.dc.l(t, 2, TOOL_NIAOBU_TAG), t.i(q.a(.75 * this.T.width + .25 * t.g().width, t.g().height / 2)), this.hF = !1, this.ov(), !0
        },
        Mu: function(t) {
            null == this.uj && (this.uj = q.m.create(sa[this.ha - 1]), this.O.l(this.uj, 2), this.uj.v(q.a(0, 1)), this.uj.i(q.a(.2703125 * this.aa.width, .929167 * this.aa.height))), this.V && this.V.getParent() ? (this.V.Ed(), this.V.ya(q.Ka.getInstance().cc(N[this.ha - 1]))) : (this.V = q.m.create(N[this.ha - 1]), this.O.l(this.V, 2), this.V.v(q.a(0, 1)), this.V.i(q.a(.2953125 * this.aa.width, .7875 * this.aa.height))), null == this.Aj && (this.Aj = q.m.create(ta[this.ha - 1]), this.O.l(this.Aj, 2), this.Aj.v(q.a(0, 1)), this.Aj.i(q.a(.1484375 * this.aa.width, .6333 * this.aa.height))), null == this.Wh && (this.Wh = q.m.create("res/iphone/body_nb.png"), this.O.l(this.Wh, 2), this.Wh.v(q.a(0, 1)), this.Wh.i(q.a(.3046875 * this.aa.width, .469792 * this.aa.height))), t && this.ap()
        },
        fZ: function() {
            var t = q.m.create("res/iphone/yl_tool_nz.png");
            this.O.l(t, 100), t.v(q.a(0, 1)), t.i(q.a(.309375 * this.aa.width, .463542 * this.aa.height)), t.w(0), t.Qc(TOOL_NIAOZI_TAG), t.A(q.tf.create(1))
        },
        ap: function() {
            this.V.Ed();
            var t = q.vc.create();
            t.cb(String.ub("res/iphone/body_zy_zy_{0}.png", 2 * this.ha)), t.cb(String.ub("res/iphone/body_zy_zy_{0}.png", 2 * this.ha - 1)), t.cb(N[this.ha - 1]), t.Se(.1), t.ve(!1), t = q.sd.create(t), this.V.A(t), this.di(this.dG, R(3) + 2)
        },
        hN: function() {
            this.Nf = STATUS_SHUIJIAO_INDEX, this.V.Ed();
            var t = q.vc.create();
            t.cb(String.ub("res/iphone/body_sj_sj_{0}.png", 1 + 3 * (this.ha - 1))), t.cb(String.ub("res/iphone/body_sj_sj_{0}.png", 2 + 3 * (this.ha - 1))), t.Se(.1), t.ve(!1), t = q.sd.create(t), this.V.A(q.J.create(t, q.P.create(this.b_, this)))
        },
        eZ: function() {
            var t = q.vc.create();
            t.cb(String.ub("res/iphone/body_zc_zc_{0}.png", this.ha)), t.cb(String.ub("res/iphone/body_kx_kx_{0}.png", 2 * this.ha - 1)), t.cb(String.ub("res/iphone/body_kx_kx_{0}.png", 2 * this.ha)), t.Se(.1), t.ve(!1), t = q.sd.create(t), this.V.A(q.J.create(t, q.Cc.create(R(3) + 2), q.P.create(this.Mu, this))), this.di(this.$Z, R(6) + 3)
        },
        dZ: function() {
            this.V.Ed();
            var t = q.vc.create();
            t.cb(String.ub("res/iphone/body_hn_hn_{0}.png", 1 + 3 * (this.ha - 1))), t.cb(String.ub("res/iphone/body_hn_hn_{0}.png", 2 + 3 * (this.ha - 1))), t.Se(.1), t.ve(!1), t = q.sd.create(t), this.V.A(q.J.create(t, q.P.create(this.ZZ, this)))
        },
        SF: function() {
            this.V.Ed();
            var t = q.vc.create();
            t.cb(String.ub("res/iphone/body_dk_dk_{0}.png", 1 + 3 * (this.ha - 1))), t.cb(String.ub("res/iphone/body_dk_dk_{0}.png", 2 + 3 * (this.ha - 1))), t.Se(.1), t.ve(!1), t = q.sd.create(t), this.V.A(q.J.create(t, q.P.create(this.bG, this))), this.di(this.Nz, 1)
        },
        Bj: function() {
            this.V.Ed(), this.sp(), -1 != this.mv && (gSharedEngine.qv(this.mv), this.Sl(this.Nz)), this.Sc && this.Sc.getParent() && (this.Sc.Cb(!0), this.Sc = null), this.Tc && this.Tc.getParent() && (this.Tc.Cb(!0), this.Tc = null), this.Uc && this.Uc.getParent() && (this.Uc.Cb(!0), this.Uc = null)
        },
        ov: function() {
            this.Nf = STATUS_ZHENGCHANG_INDEX, this.Sl(this.xz), this.hF ? this.di(this.xz, R(4) + 2) : (this.hF = !0, this.di(this.xz))
        },
        xz: function() {
            50 >= R(100) + 1 ? (this.Sl(this.xz), this.Bj(), this.SF(), 50 >= R(100) + 1 ? (this.Nf = STATUS_NIAOCHUANG_INDEX, this.fZ()) : this.Nf = STATUS_JIE_INDEX) : this.Nf = STATUS_ZHENGCHANG_INDEX
        },
        dG: function() {
            this.V.Ed();
            var t = q.vc.create();
            t.cb(N[this.ha - 1]), t.cb(String.ub("res/iphone/body_zy_zy_{0}.png", 2 * this.ha - 1)), t.cb(String.ub("res/iphone/body_zy_zy_{0}.png", 2 * this.ha)), t.cb(String.ub("res/iphone/body_zy_zy_{0}.png", 2 * this.ha - 1)), t.cb(N[this.ha - 1]), t.Se(.1), t.ve(!1), t = q.sd.create(t), this.V.A(t)
        },
        b_: function() {
            this.V.Ed();
            var t = q.vc.create();
            t.cb(String.ub("res/iphone/body_sj_sj_{0}.png", 2 + 3 * (this.ha - 1))), t.cb(String.ub("res/iphone/body_sj_sj_{0}.png", 3 + 3 * (this.ha - 1))), t.Se(.4), t.ve(!1), t = q.sd.create(t), this.V.A(q.jh.create(t))
        },
        $Z: function() {
            this.V.Ed();
            var t = q.vc.create();
            t.cb(String.ub("res/iphone/body_zc_zc_{0}.png", this.ha)), t.cb(String.ub("res/iphone/body_kx_kx_{0}.png", 2 * this.ha - 1)), t.cb(String.ub("res/iphone/body_kx_kx_{0}.png", 2 * this.ha)), t.Se(.1), t.ve(!1), t = q.sd.create(t), this.V.A(q.J.create(t, q.Cc.create(R(3) + 2), q.P.create(this.Mu, this)))
        },
        ZZ: function() {
            this.V.Ed();
            var t = q.vc.create();
            t.cb(String.ub("res/iphone/body_hn_hn_{0}.png", 2 + 3 * (this.ha - 1))), t.cb(String.ub("res/iphone/body_hn_hn_{0}.png", 3 + 3 * (this.ha - 1))), t.Se(.3), t.ve(!1), t = q.sd.create(t), this.V.A(q.jh.create(t))
        },
        bG: function() {
            this.V.Ed();
            var t = q.vc.create();
            t.cb(String.ub("res/iphone/body_dk_dk_{0}.png", 2 + 3 * (this.ha - 1))), t.cb(String.ub("res/iphone/body_dk_dk_{0}.png", 3 + 3 * (this.ha - 1))), t.Se(.1), t.ve(!1), t = q.sd.create(t), this.V.A(q.jh.create(t)), null == this.Sc && (this.Sc = q.m.create("res/iphone/body_dk_yl_1.png"), this.O.l(this.Sc, 2), this.Sc.i(q.a(.35 * this.aa.width, .703125 * this.aa.height))), null == this.Tc && (this.Tc = q.m.create("res/iphone/body_dk_yl_2.png"), this.O.l(this.Tc, 2), this.Tc.i(q.a(.35 * this.aa.width, .68125 * this.aa.height))), null == this.Uc && (this.Uc = q.m.create("res/iphone/body_dk_yl_3.png"), this.O.l(this.Uc, 2), this.Uc.i(q.a(.35 * this.aa.width, .65625 * this.aa.height))), this.Sc.v(q.a(0, 1)), this.Tc.v(q.a(0, 1)), this.Uc.v(q.a(0, 1)), this.Sc.w(0), this.Tc.w(0), this.Uc.w(0), this.di(this.cG, .1)
        },
        cG: function() {
            1 == ++this.Pi && (this.Uc.w(0), this.Sc.w(255)), 2 == this.Pi && (this.Sc.w(0), this.Tc.w(255)), 3 == this.Pi && (this.Tc.w(0), this.Uc.w(255), this.Pi = 0)
        },
        Nz: function() {},
        NE: function(t) {
            if (t.D == TAG_DESK && t.da(!1), t.D == TOOL_FEN_TAG && (t.da(!1), t.ya(q.Ka.getInstance().cc("res/iphone/yl_tool_ssf_2.png")), this.qk.da(!0), this.qk.w(255)), this.To = !0, t.D == TOOL_NEW_NAIZUI_TAG) {
                this.Bj(), this.ap(), this.Nf = STATUS_ZHENGCHANG_INDEX;
                var i = t.getParent().yd(t.Na()),
                    i = this.dc.ed(i);
                t.Cb(!0), this.dc.l(t, 3, TOOL_NEW_NAIZUI_TAG), t.i(i)
            }
        },
        ME: function(t) {
            if (t.D == TOOL_BEIZI_TAG && this.FV(t), this.FE(t))
                if (t.D == TOOL_NAIZUI_TAG) {
                    var i = t.getParent().yd(t.Na()),
                        i = this.O.ed(i),
                        n = q.rect(this.V.Gc() + .335 * this.V.g().width, this.V.Bc() - this.V.g().height, .3386 * this.V.g().width, .3856 * this.V.g().height);
                    q.tg(n, i) && (this.To = !1, t.Cb(!0), this.O.l(t, 3), t.i(i), t.da(!1), t.A(q.J.create(q.Za.create(.3, q.a(this.V.Na().x + .4882 * this.V.g().width, this.V.Na().y - .7952 * this.V.g().height)), q.P.create(this.gA, this))))
                } else t.D == TOOL_NAIPIN_TAG ? (i = t.getParent().yd(t.Na()), i = this.O.ed(i), n = q.rect(this.V.Gc() + .335 * this.V.g().width, this.V.Bc() - this.V.g().height, .3386 * this.V.g().width, .3856 * this.V.g().height), q.tg(n, i) && !this.O.od(TOOL_NEW_NAIZUI_TAG) && (this.Nf = STATUS_JIE_INDEX, this.To = !1, t.Cb(!0), this.O.l(t, 3), t.v(q.a(.5, 1)), t.i(i), t.da(!1), t.A(q.J.create(q.Za.create(.3, q.a(this.V.Na().x + .4882 * this.V.g().width, this.V.Na().y - .7952 * this.V.g().height + .25 * t.g().height)), q.P.create(this.gA, this))))) : t.D == TOOL_FENPU_TAG && (n = t.getParent().yd(t.Na()), (n = this.O.ed(n)).y + t.g().height / 2 >= this.ql.Bc() && (t.ya(q.Ka.getInstance().cc("res/iphone/yl_tool_ssf_4.png")), t.od(TAG_SHUANGSHENFEN) || (this.Nf == STATUS_ZHENGCHANG_INDEX && (this.Bj(), this.eZ()), n = q.Eb.create("res/iphone/shuangshenfen.plist"), t.l(n, -1, TAG_SHUANGSHENFEN), n.Qc(TAG_SHUANGSHENFEN), n.i(q.a(t.g().width / 2, .55 * t.g().height)), n.i_(!0))))
        },
        Iy: function(t) {
            if (t.D == TOOL_NIAOBU_TAG) {
                var i = t.getParent().yd(t.Na()),
                    i = this.O.ed(i);
                q.tg(this.Wh.rk(), i) && this.FE(t) && this.Nf != STATUS_SHUIJIAO_INDEX ? (this.To = !1, t.Cb(!0), this.O.l(t, 3, TOOL_NIAOBU_TAG), t.v(q.a(0, 1)), t.i(q.a(i.x - t.g().width / 2, i.y + t.g().height / 2)), t.da(!1), t.A(q.J.create(q.Za.create(.3, this.Wh.Na()), q.P.create(this.gA, this)))) : (t.da(!1), t.A(q.J.create(q.Za.create(.3, q.a(.75 * this.T.width + .25 * t.g().width, t.g().height / 2)), q.P.create(this.fA, this))))
            }
            if (this.To && (t.D == TOOL_NAIZUI_TAG ? (t.da(!1), t.A(q.J.create(q.Za.create(.3, q.a(this.T.width / 2 + .55 * t.g().width, t.g().height)), q.P.create(this.fA, this)))) : t.D == TOOL_NAIPIN_TAG && (t.da(!1), t.A(q.J.create(q.Za.create(.3, q.a(this.T.width / 4 - .6 * t.g().width, t.g().height)), q.P.create(this.fA, this))))), this.To = !1, t.D == TAG_DESK ? t.da(!0) : t.D == TOOL_FEN_TAG ? t.da(!0) : t.D == TOOL_FENPU_TAG && (t.od(TAG_SHUANGSHENFEN) && t.dp(TAG_SHUANGSHENFEN, !0), t.da(!1), t.A(q.J.create(q.Zc.create(q.$f.create(.3), q.Za.create(.35, q.a(this.T.width / 2 - .55 * this.Qh.g().width, this.Qh.g().height / 2))), q.P.create(this.fA, this)))), t.D == TOOL_NEW_NAIZUI_TAG) {
                var i = t.getParent().yd(t.Na()),
                    i = this.O.ed(i),
                    n = q.rect(this.V.Gc() + .335 * this.V.g().width, this.V.Bc() - this.V.g().height, .3386 * this.V.g().width, .3856 * this.V.g().height);
                q.tg(n, i) && this.FE(t) ? (this.To = !1, t.Cb(!0), this.O.l(t, 3, TOOL_NEW_NAIZUI_TAG), t.i(i), t.da(!1), t.A(q.J.create(q.Za.create(.2, q.a(this.V.Na().x + .4882 * this.V.g().width, this.V.Na().y - .7952 * this.V.g().height)), q.P.create(this.gA, this)))) : (t.da(!1), t.A(q.J.create(q.Zc.create(q.Za.create(.3, q.a(this.T.width / 2 + .55 * t.g().width, t.g().height)), q.$f.create(.25)), q.P.create(this.B0, this))))
            }
        },
        FE: function(t) {
            if (this.Nf == STATUS_ZHENGCHANG_INDEX) return this.W && this.W.w(0), t.D != TOOL_NIAOBU_TAG;
            if (this.Nf == STATUS_SHUIJIAO_INDEX) return !0;
            var i = null;
            return this.Nf == STATUS_JIE_INDEX ? i = "res/iphone/yl_ui_ts_1.png" : this.Nf == STATUS_NIAOCHUANG_INDEX && (i = "res/iphone/yl_ui_ts_2.png"), this.W ? this.W.ya(q.Ka.getInstance().cc(i)) : (this.W = q.m.create(i), this.O.l(this.W, 10), this.W.i(q.a(this.T.width - this.W.g().width / 2, .75 * this.T.height)), this.W.vb(.8), this.W.A(q.jh.create(q.J.create(q.hc.create(.3, 1), q.hc.create(.3, .8))))), this.Nf == STATUS_JIE_INDEX ? t.D == TOOL_NAIPIN_TAG ? (this.W.w(0), !0) : (this.W.w(255), !1) : this.Nf == STATUS_NIAOCHUANG_INDEX ? t.D == TOOL_NIAOBU_TAG ? (this.W.w(0), !0) : (this.W.w(255), !1) : void 0
        },
        FV: function(t) {
            (t.Gc() > this.T.width / 2 || t.Gc() < this.T.width / 2) && t.$m(this.T.width / 2), t.Bc() < 2 * this.Ac.g().height && t.Ol(2 * this.Ac.g().height), t.Bc() > 3.9 * this.Ac.g().height && t.Ol(3.9 * this.Ac.g().height)
        },
        fA: function(t) {
            t.D == TOOL_FENPU_TAG && (t.w(255), t.ya(q.Ka.getInstance().cc("res/iphone/yl_tool_ssf_3.png")), this.Nf == STATUS_ZHENGCHANG_INDEX && (this.Bj(), this.ap(), this.ov())), t.da(!0)
        },
        gA: function(t) {
            if (t.D == TOOL_NIAOBU_TAG) {
                t.Cb(!0), this.dc.l(t, 2, TOOL_NIAOBU_TAG), t.v(q.a(.5, .5)), t.w(255), t.da(!0), t.i(q.a(.75 * this.T.width + .25 * t.g().width, t.g().height / 2)), this.O.od(TOOL_NIAOZI_TAG).Ed(), this.O.dp(TOOL_NIAOZI_TAG, !0);
                var i = q.m.create("res/iphone/body_nb.png");
                this.O.l(i, 3), i.v(q.a(0, 1)), i.i(q.a(.3046875 * this.aa.width, .469792 * this.aa.height)), this.Bj(), this.ap(), this.ov()
            } else if (t.D == TOOL_NAIZUI_TAG) this.Bj(), this.hN(), (i = S.rf("res/iphone/yl_tool_zui_2.png")).Te(!0), i.Qc(TOOL_NEW_NAIZUI_TAG), this.O.l(i, 3, TOOL_NEW_NAIZUI_TAG), i.tc(this), i.da(!0), i.i(t.Na()), t.w(0);
            else if (t.D == TOOL_NEW_NAIZUI_TAG) this.Bj(), this.hN(), t.da(!0);
            else if (t.D == TOOL_NAIPIN_TAG) {
                this.Bj(), this.dZ(), (i = q.m.create("res/iphone/yl_tool_pg.png")).v(q.a(.5, 1)), this.O.l(i, 3), i.i(t.Na()), t.w(0);
                var n = q.Va.create("res/iphone/yl_tool_nn.png"),
                    e = n.g().height,
                    h = n.g().width,
                    s = .0357 * e,
                    r = .44898 * e / 20;
                t = q.m.nf(n.ia(), q.rect(0, e - (s + r), h, s + r));
                for (var a = q.vc.create(), o = 20; 0 <= o; o--) a.oE(n.ia(), q.rect(q.rect(0, e - (s + r * o), h, s + r * o)));
                a.Se(.15), (n = q.sd.create(a)).reverse(), i.l(t, -1), t.v(q.a(0, 0)), t.i(q.a(0, 0)), t.A(q.J.create(n, q.P.create(this.z0, this, i)))
            }
        },
        z0: function(t, i) {
            this.Bj(), this.ap(), this.ov();
            var n = this.O.od(TOOL_NAIPIN_TAG);
            i.A(q.J.create(q.Zc.create(q.Za.create(.3, q.a(this.T.width / 4 - .6 * n.g().width, n.g().height)), q.$f.create(.25)), q.P.create(this.A0, this)))
        },
        A0: function(t) {
            t.Cb(!0), (t = this.O.od(TOOL_NAIPIN_TAG)).Cb(!0), this.dc.l(t, 2, TOOL_NAIPIN_TAG), t.da(!0), t.w(255), t.i(q.a(this.T.width / 4 - .6 * t.g().width, t.g().height))
        },
        B0: function(t) {
            t.Cb(!0), (t = this.O.od(TOOL_NAIZUI_TAG)).Cb(!0), this.dc.l(t, 2, TOOL_NAIZUI_TAG), t.da(!0), t.w(255), t.i(q.a(this.T.width / 2 + .55 * t.g().width, t.g().height)), this.ov()
        },
        KF: function() {
            if (-1 != this.mv && (gSharedEngine.qv(this.mv), this.Sl(this.Nz)), !$) {
                $ = !0;
                var t = this.O;
                setTimeout(function() {
                    $ = !1, q.n.getInstance().zk(mb(t))
                }, 1e3)
            }
        }
    }),
    jb = q.Eg.extend({
        ba: function() {
            this._super();
            var t = new nb;
            t.init(), this.l(t), Za()
        }
    });
NAVIGATION_ITEM_LEFT_TAG = 50, NAVIGATION_ITEM_RIGHT_TAG = 51, TAG_DESK = 100, TOOL_TINGZHEN_TAG = 1001, TOOL_WENGDUJI_TAG = 1002, TOOL_MAOJIN_TAG = 1003, TOOL_ZHENGUAN_TAG = 1004, TOOL_ZHENTUI_TAG = 1005, TOOL_ZHENYE_TAG = 1006, TOOL_YAOBU_TAG = 1007, TOOL_YAOSHUI_TAG = 1008, TOOL_XINDIANTU_TAG = 1009, TOOL_XINDIANTU_TMP_TAG = 1010, TOOL_YAOSHUIPING_TAG = 1011, TOOL_YAOBUHE_TAG = 1012, TIP_XINDIANTU_TAG = 1100;
var $ = !1,
    ob = q.Ya.extend({
        T: q.Ec(),
        ha: 0,
        Pi: 0,
        Vg: 0,
        Re: !1,
        Uo: !1,
        dd: null,
        ye: null,
        O: null,
        dc: null,
        rd: null,
        gi: null,
        Ac: null,
        fc: null,
        Ul: null,
        Ab: null,
        of: null,
        Tf: null,
        aa: q.Ec(),
        Ek: q.Ec(),
        Jl: null,
        uj: null,
        V: null,
        rl: null,
        Aj: null,
        Wh: null,
        Sc: null,
        Tc: null,
        Uc: null,
        W: null,
        Fk: null,
        xg: null,
        Bk: null,
        eh: null,
        Rl: null,
        Tl: null,
        Gk: null,
        We: null,
        ks: null,
        xk: null,
        bh: null,
        Qr: null,
        uG: null,
        vG: null,
        dn: 0,
        rv: 0,
        oA: 0,
        Cr: !1,
        Vu: !1,
        mv: 0,
        ba: function() {
            this._super(), this.da(!0), Za()
        },
        init: function() {
            this._super(), this.T = O;
            var t = V.El("res/iphone/ys_bg_1.png");
            return this.l(t), this.Uo = this.Re = this.Cr = this.Vu = !1, this.Vg = this.Pi = 0, this.bh = this.fc = this.Fk = this.W = null, this.dn = 360 + R(11), this.rv = 380 + R(21), this.dd = q.Ya.create(), this.ye = q.Ya.create(), this.O = q.Ya.create(), this.dc = q.Ya.create(), this.rd = q.Ya.create(), this.l(this.O, 1), this.l(this.dc, 2), this.l(this.rd, 2), this.l(this.ye, 2), this.l(this.dd, 3), P.Mi(this.ye, this.T), P.Mi(this.dd, this.T), P.gv(this.O, this.T), P.Wm(this.dc, this.T), P.Wm(this.rd, this.T), t = q.m.create("res/iphone/ui_ad.png"), this.dd.l(t), t.v(q.a(0, 1)), t.i(q.a(0, this.T.height)), t.ah(this.T.width / t.g().width), t.M(!1), this.Ab = q.Kc.create("res/iphone/ui_nexta_1.png", "res/iphone/ui_nexta_2.png", this.KF, this), this.Ab.i(q.a(this.T.width, .93 * this.T.height)), this.Ab.v(q.a(1, .5)), (t = q.Cg.create(this.Ab)).i(q.Ua()), this.ye.l(t), this.ha = Z.getInstance().ha, t = q.m.create("res/iphone/ys_bg_2.png"), this.O.l(t, 0), t.v(q.a(.5, 0)), t.i(q.a(this.T.width / 2, 0)), this.aa = t.g(), this.rl = q.m.create(ra[this.ha - 1]), this.O.l(this.rl, 1), this.rl.v(q.a(0, 1)), this.rl.i(q.a(.1671875 * this.aa.width, .68333 * this.aa.height)), this.Jl = q.m.create(ua[this.ha - 1]), this.O.l(this.Jl, 5), this.Jl.v(q.a(0, 1)), this.Jl.i(q.a(.311 * this.aa.width, .57396 * this.aa.height)), this.Jl.M(!1), this.Mu(!0), this.SF(), this.Bk = q.m.create("res/iphone/ys_tool_mj.png"), this.O.l(this.Bk, 3), this.Bk.i(q.a(.5 * this.aa.width, .82 * this.aa.height)), this.Bk.w(0), this.W = q.m.create("res/iphone/ys_ui_fg.png"), this.O.l(this.W, 2), this.W.i(q.a(.55625 * this.aa.width, .52917 * this.aa.height)), this.W.vb(.8), this.W.A(q.jh.create(q.J.create(q.hc.create(.2, 1), q.hc.create(.2, .8)))), this.W.w(0), this.xg = q.m.create("res/iphone/ui_jiantou.png"), this.O.l(this.xg, 2), this.xg.i(q.a(.3 * this.aa.width, .63 * this.aa.height)), this.xg.we(60), this.xg.vb(.8), this.xg.A(q.jh.create(q.J.create(q.hc.create(.3, 1), q.hc.create(.3, .8)))), this.xg.w(0), this.Ac = S.rf("res/iphone/ui_tp.png"), this.Ac.Te(!0), this.Ac.tc(this), this.Ac.da(!1), this.dc.l(this.Ac, 1, TAG_DESK), this.Ac.v(q.a(0, 0)), this.Ac.i(q.a(0, 0)), this.Ac.ah(this.T.width / this.Ac.g().width), this.of = q.Kc.create("res/iphone/ui_front_1.png", "res/iphone/ui_front_2.png", this.JM, this), this.Tf = q.Kc.create("res/iphone/ui_next_1.png", "res/iphone/ui_next_2.png", this.JM, this), this.of.Qc(NAVIGATION_ITEM_LEFT_TAG), this.Tf.Qc(NAVIGATION_ITEM_RIGHT_TAG), t = q.Cg.create(this.of, this.Tf), this.dc.l(t, 1), t.i(q.Ua()), this.of.i(q.a(this.of.g().width / 2, this.Ac.g().height + this.of.g().height / 2)), this.Tf.i(q.a(this.T.width - this.Tf.g().width / 2, this.Ac.g().height + this.Tf.g().height / 2)), this.of.M(!1), this.eh = S.rf("res/iphone/ys_tool_twj.png"), this.eh.Te(!0), this.eh.tc(this), this.eh.da(!0), this.rd.l(this.eh, 2, TOOL_WENGDUJI_TAG), this.eh.v(q.a(.5, 1)), this.eh.i(q.a(.8 * this.T.width, .8 * this.eh.g().height)), this.eh.we(-45), this.Ek = this.eh.g(), this.Rl = S.rf("res/iphone/ys_tool_tzq_2.png"), this.Rl.Te(!0), this.Rl.tc(this), this.Rl.da(!0), this.rd.l(this.Rl, 2, TOOL_TINGZHEN_TAG), this.Rl.v(q.a(1, 1)), this.Rl.i(q.a(.3 * this.T.width, .8 * this.eh.g().height)), this.Tl = S.rf("res/iphone/ys_tool_jz.png"), this.Tl.Te(!0), this.Tl.tc(this), this.Tl.da(!0), this.rd.l(this.Tl, 2, TOOL_XINDIANTU_TAG), this.Tl.v(q.a(.75, 1)), this.Tl.i(q.a(.6 * this.T.width, .8 * this.eh.g().height)), t = q.m.create("res/iphone/ys_tool_pz_2.png"), this.rd.l(t, 2), t.i(q.a(this.T.width + .8 * t.g().width, .5 * t.g().height)), this.Gk = S.rf("res/iphone/ys_tool_dg.png"), this.Gk.Te(!0), this.Gk.tc(this), this.Gk.da(!0), t.l(this.Gk, 1, TOOL_YAOSHUI_TAG), this.Gk.v(q.a(.5, 0)), this.Gk.i(q.a(.5 * t.g().width, t.g().height - this.Gk.g().height)), this.gi = q.m.create("res/iphone/ys_tool_pz.png"), this.rd.l(this.gi, 2, TOOL_YAOSHUIPING_TAG), this.gi.i(q.a(this.T.width + .8 * this.gi.g().width, .55 * this.gi.g().height)), this.We = S.rf("res/iphone/ys_tool_zt_1.png"), this.We.Te(!0), this.We.tc(this), this.We.da(!0), this.rd.l(this.We, 2, TOOL_ZHENGUAN_TAG), this.We.v(q.a(.5, 1)), this.We.i(q.a(this.T.width + 1.6 * t.g().width + 3 * this.We.g().width, .9 * t.g().height)), this.We.we(45), this.ks = S.rf("res/iphone/ys_tool_zt_2.png"), this.ks.Te(!0), this.ks.tc(this), this.ks.da(!1), this.We.l(this.ks, -1, TOOL_ZHENTUI_TAG), this.ks.i(q.a(this.We.g().width / 2, this.We.g().height / 2 - .2202 * this.We.g().height)), t = q.m.create("res/iphone/ys_tool_ys_1.png"), this.We.l(t, -1, TOOL_ZHENYE_TAG), t.i(q.a(this.We.g().width / 2, this.We.g().height / 2)), this.xk = S.rf("res/iphone/ys_tool_mj.png"), this.xk.Te(!0), this.xk.tc(this), this.xk.da(!0), this.rd.l(this.xk, 2, TOOL_MAOJIN_TAG), this.xk.v(q.a(.5, 1)), this.xk.i(q.a(this.T.width + .6 * this.T.width, 1.2 * this.xk.g().height)), this.Ul = q.m.create("res/iphone/ys_tool_ckt.png"), this.rd.l(this.Ul, 2, TOOL_YAOBUHE_TAG), this.Ul.i(q.a(this.T.width + .85 * this.T.width, .6 * this.Ul.g().height)), !0
        },
        Mu: function() {
            null == this.uj && (this.uj = q.m.create(sa[this.ha - 1]), this.O.l(this.uj, 2), this.uj.v(q.a(0, 1)), this.uj.i(q.a(.2703125 * this.aa.width, .929167 * this.aa.height))), this.V && this.V.getParent() ? (this.V.Ed(), this.V.ya(q.Ka.getInstance().cc(N[this.ha - 1]))) : (this.V = q.m.create(N[this.ha - 1]), this.O.l(this.V, 2), this.V.v(q.a(0, 1)), this.V.i(q.a(.2953125 * this.aa.width, .7875 * this.aa.height))), null == this.Aj && (this.Aj = q.m.create(ta[this.ha - 1]), this.O.l(this.Aj, 2), this.Aj.v(q.a(0, 1)), this.Aj.i(q.a(.1484375 * this.aa.width, .6333 * this.aa.height))), null == this.Wh && (this.Wh = q.m.create("res/iphone/body_nb.png"), this.O.l(this.Wh, 2), this.Wh.v(q.a(0, 1)), this.Wh.i(q.a(.3046875 * this.aa.width, .469792 * this.aa.height)))
        },
        SF: function() {
            this.V.Ed();
            var t = q.vc.create();
            t.cb(String.ub("res/iphone/body_dk_dk_{0}.png", 1 + 3 * (this.ha - 1))), t.cb(String.ub("res/iphone/body_dk_dk_{0}.png", 2 + 3 * (this.ha - 1))), t.Se(.1), t.ve(!1), t = q.sd.create(t), this.V.A(q.J.create(t, q.P.create(this.bG, this)))
        },
        bG: function() {
            this.V.Ed();
            var t = q.vc.create();
            t.cb(String.ub("res/iphone/body_dk_dk_{0}.png", 2 + 3 * (this.ha - 1))), t.cb(String.ub("res/iphone/body_dk_dk_{0}.png", 3 + 3 * (this.ha - 1))), t.Se(.1), t.ve(!1), t = q.sd.create(t), this.V.A(q.jh.create(t)), null == this.Sc && (this.Sc = q.m.create("res/iphone/body_dk_yl_1.png"), this.O.l(this.Sc, 2), this.Sc.i(q.a(.35 * this.aa.width, .703125 * this.aa.height))), null == this.Tc && (this.Tc = q.m.create("res/iphone/body_dk_yl_2.png"), this.O.l(this.Tc, 2), this.Tc.i(q.a(.35 * this.aa.width, .68125 * this.aa.height))), null == this.Uc && (this.Uc = q.m.create("res/iphone/body_dk_yl_3.png"), this.O.l(this.Uc, 2), this.Uc.i(q.a(.35 * this.aa.width, .65625 * this.aa.height))), this.Sc.v(q.a(0, 1)), this.Tc.v(q.a(0, 1)), this.Uc.v(q.a(0, 1)), this.Sc.w(0), this.Tc.w(0), this.Uc.w(0), this.di(this.cG, .1)
        },
        cG: function() {
            1 == ++this.Pi && (this.Uc.w(0), this.Sc.w(255)), 2 == this.Pi && (this.Sc.w(0), this.Tc.w(255)), 3 == this.Pi && (this.Tc.w(0), this.Uc.w(255), this.Pi = 0)
        },
        Nz: function() {},
        ap: function() {
            this.Bj(), this.V.Ed();
            var t = q.vc.create();
            t.cb(String.ub("res/iphone/body_zy_zy_{0}.png", 2 * this.ha)), t.cb(String.ub("res/iphone/body_zy_zy_{0}.png", 2 * this.ha - 1)), t.cb(String.ub("res/iphone/body_zc_zc_{0}.png", this.ha)), t.Se(.1), t.ve(!1), t = q.sd.create(t), this.V.A(t), this.di(this.dG, R(3) + 2)
        },
        dG: function() {
            this.V.Ed();
            var t = q.vc.create();
            t.cb(String.ub("res/iphone/body_zc_zc_{0}.png", this.ha)), t.cb(String.ub("res/iphone/body_zy_zy_{0}.png", 2 * this.ha - 1)), t.cb(String.ub("res/iphone/body_zy_zy_{0}.png", 2 * this.ha)), t.cb(String.ub("res/iphone/body_zy_zy_{0}.png", 2 * this.ha - 1)), t.cb(String.ub("res/iphone/body_zc_zc_{0}.png", this.ha)), t.Se(.1), t.ve(!1), t = q.sd.create(t), this.V.A(t)
        },
        Bj: function() {
            this.V.Ed(), this.sp(), this.Sc && this.Sc.getParent() && (this.Sc.Cb(!0), this.Sc = null), this.Tc && this.Tc.getParent() && (this.Tc.Cb(!0), this.Tc = null), this.Uc && this.Uc.getParent() && (this.Uc.Cb(!0), this.Uc = null)
        },
        NE: function(t) {
            this.Re || (t.D == TOOL_TINGZHEN_TAG || t.D == TOOL_XINDIANTU_TAG || t.D == TOOL_WENGDUJI_TAG ? (this.Tf.M(!1), this.of.M(!1), this.W.w(255), t.D == TOOL_TINGZHEN_TAG && this.W.i(q.a(.55625 * this.aa.width, .52917 * this.aa.height)), t.D == TOOL_XINDIANTU_TAG && this.W.i(q.a(.82 * this.aa.width, .55 * this.aa.height)), t.D == TOOL_WENGDUJI_TAG && this.W.i(q.a(.38 * this.aa.width, .54 * this.aa.height))) : (this.Tf.M(!1), this.of.M(!1), t.D == TOOL_YAOSHUI_TAG ? (this.gi.ya(q.Ka.getInstance().cc("res/iphone/ys_tool_pz_2.png")), this.W.i(q.a(.5 * this.aa.width, .64 * this.aa.height)), this.W.w(0), this.xg.i(q.a(.3 * this.aa.width, .63 * this.aa.height)), this.xg.w(255), t.we(45)) : t.D != TOOL_ZHENGUAN_TAG || this.Cr ? t.D == TOOL_MAOJIN_TAG && (this.xg.w(255), this.xg.i(q.a(.24375 * this.aa.width, .7833 * this.aa.height))) : (this.W.w(255), this.W.i(q.a(.311 * this.aa.width + this.Jl.g().width, .57396 * this.aa.height - this.Jl.g().height / 2)))))
        },
        ME: function(t) {
            if (!this.Re)
                if (t.D == TOOL_TINGZHEN_TAG ? this.EV(t) : t.D == TOOL_XINDIANTU_TAG && this.GV(t), t.D == TOOL_TINGZHEN_TAG) {
                    var i = t.getParent().yd(t.Na()),
                        i = this.O.ed(i);
                    q.tg(this.W.rk(), i) && (this.Ab.M(!1), this.Vg = t.D, this.Re = !0, this.W.w(0), t.da(!1), i = this.W.getParent().yd(this.W.Na()), i = this.rd.ed(i), t.A(q.J.create(q.Za.create(.2, q.a(i.x + this.W.g().width / 4, i.y + this.W.g().height / 4)), q.P.create(this.pp, this))))
                } else t.D == TOOL_XINDIANTU_TAG ? (i = t.getParent().yd(t.Na()), i = this.O.ed(i), q.tg(this.W.rk(), i) && (this.Ab.M(!1), this.Vg = t.D, this.Re = !0, this.W.w(0), t.da(!1), t.Cb(!0), this.O.l(t, 0, TOOL_XINDIANTU_TAG), t.i(i), t.A(q.J.create(q.Za.create(.2, q.a(this.W.Gc(), this.W.Bc() + .5 * this.W.g().height)), q.P.create(this.pp, this))))) : t.D == TOOL_WENGDUJI_TAG ? (i = t.getParent().yd(t.Na()), i = this.O.ed(i), q.tg(this.W.rk(), i) && (this.Ab.M(!1), this.Vg = t.D, this.Re = !0, this.W.w(0), t.da(!1), t.Cb(!0), this.O.l(t, 1, TOOL_WENGDUJI_TAG), t.i(i), t.A(q.J.create(q.Za.create(.2, q.a(this.W.Gc() - .35 * this.W.g().width, this.W.Bc() + .25 * this.W.g().height)), q.P.create(this.pp, this))))) : t.D == TOOL_YAOSHUI_TAG ? (i = t.getParent().yd(t.Na()), i = this.O.ed(i), q.tg(this.W.rk(), i) && (this.Ab.M(!1), this.Vg = t.D, this.Re = !0, this.W.w(0), this.xg.w(0), t.da(!1), i = this.W.getParent().yd(this.W.Na()), i = t.getParent().ed(i), t.A(q.J.create(q.Za.create(.2, q.a(i.x, i.y + this.W.g().height)), q.P.create(this.pp, this))))) : t.D == TOOL_ZHENGUAN_TAG ? this.Cr || (i = t.getParent().yd(t.Na()), i = this.O.ed(i), q.tg(this.W.rk(), i) && (this.Ab.M(!1), this.Vg = t.D, this.Re = !0, this.W.w(0), t.da(!1), t.Cb(!0), this.O.l(t, 3, TOOL_ZHENGUAN_TAG), t.i(i), t.A(q.J.create(q.Za.create(.2, this.W.Na()), q.P.create(this.pp, this))))) : t.D == TOOL_MAOJIN_TAG && (i = t.getParent().yd(t.Na()), i = this.O.ed(i), q.tg(this.Bk.rk(), i) && (this.Ab.M(!1), this.Vg = t.D, this.Re = !0, this.W.w(0), this.xg.w(0), this.Bk.w(0), t.da(!1), t.Cb(!0), this.O.l(t, 3, TOOL_MAOJIN_TAG), t.v(q.a(.5, 1)), t.i(i), t.A(q.J.create(q.Za.create(.2, q.a(this.Bk.Gc(), this.Bk.Bc() + this.Bk.g().height / 2)), q.P.create(this.pp, this)))))
        },
        Iy: function(t) {
            if (this.Re) t.D != this.Vg && (t.D == TOOL_TINGZHEN_TAG ? (i = q.a(.3 * this.T.width, .8 * this.Ek.height), t.A(q.Za.create(.3, i))) : t.D == TOOL_XINDIANTU_TAG ? (i = q.a(.6 * this.T.width, .8 * this.Ek.height), t.A(q.Za.create(.3, i))) : t.D == TOOL_WENGDUJI_TAG ? (i = q.a(.8 * this.T.width, .8 * this.Ek.height), t.A(q.Za.create(.3, i))) : t.D == TOOL_YAOSHUI_TAG ? (i = q.m.create("res/iphone/ys_tool_pz_2.png"), i = q.a(.5 * i.g().width, i.g().height - t.g().height), t.A(q.J.create(q.Zc.create(q.Za.create(.3, i), q.Jp.create(.2, 0)), q.P.create(this.Ni, this)))) : t.D == TOOL_ZHENGUAN_TAG ? (i = q.a(this.T.width + 1.6 * this.gi.g().width + 3 * t.g().width, .9 * this.gi.g().height), t.A(q.Za.create(.3, i))) : t.D == TOOL_MAOJIN_TAG && (i = q.a(this.T.width + .6 * this.T.width, 1.2 * t.g().height), t.A(q.Za.create(.3, i))));
            else if (this.W && this.W.w(0), this.xg && this.xg.w(0), t.D == TOOL_TINGZHEN_TAG) {
                var i = q.a(.3 * this.T.width, .8 * this.Ek.height);
                t.A(q.J.create(q.P.create(this.Oi, this), q.Za.create(.3, i), q.P.create(this.Ni, this)))
            } else t.D == TOOL_XINDIANTU_TAG ? (i = q.a(.6 * this.T.width, .8 * this.Ek.height), t.A(q.J.create(q.P.create(this.Oi, this), q.Za.create(.3, i), q.P.create(this.Ni, this)))) : t.D == TOOL_WENGDUJI_TAG ? (i = q.a(.8 * this.T.width, .8 * this.Ek.height), t.A(q.J.create(q.P.create(this.Oi, this), q.Za.create(.3, i), q.P.create(this.Ni, this)))) : t.D == TOOL_YAOSHUI_TAG ? (i = q.m.create("res/iphone/ys_tool_pz_2.png"), i = q.a(.5 * i.g().width, i.g().height - t.g().height), t.A(q.J.create(q.P.create(this.Oi, this), q.Zc.create(q.Za.create(.3, i), q.Jp.create(.2, 0)), q.P.create(this.Ni, this)))) : t.D == TOOL_ZHENGUAN_TAG ? (i = q.a(this.T.width + 1.6 * this.gi.g().width + 3 * t.g().width, .9 * this.gi.g().height), t.A(q.J.create(q.P.create(this.Oi, this), q.Za.create(.3, i), q.P.create(this.Ni, this)))) : t.D == TOOL_MAOJIN_TAG && (i = q.a(this.T.width + .6 * this.T.width, 1.2 * t.g().height), t.A(q.J.create(q.P.create(this.Oi, this), q.Za.create(.3, i), q.P.create(this.Ni, this))))
        },
        $u: function(t) {
            !this.Uo && null == this.fc && this.Ul && q.tg(this.Ul.rk(), this.rd.ed(t[0].Mc)) && (this.fc = S.rf("res/iphone/ys_tool_ckt_1.png"), this.fc.Te(!0), this.rd.l(this.fc, 2, TOOL_YAOBU_TAG), this.fc.da(!1), this.fc.tc(this), this.fc.i(this.Ul.Na()), this.Cr && (this.W.w(255), this.W.i(q.a(.311 * this.aa.width + this.Jl.g().width, .57396 * this.aa.height - this.Jl.g().height / 2))), this.Tf.M(!1), this.of.M(!1))
        },
        $o: function(t) {
            this.Uo || (t = this.rd.ed(t[0].Mc), this.fc && this.fc.i(t), this.fc && !this.Re && this.Cr && (t = this.fc.getParent().yd(this.fc.Na()), t = this.O.ed(t), q.tg(this.W.rk(), t) && (this.Ab.M(!1), this.Vg = this.fc.D, this.Uo = this.Re = !0, this.W.w(0), this.fc.Cb(!0), this.O.l(this.fc, 11, TOOL_YAOBU_TAG), this.fc.i(t), this.fc.A(q.J.create(q.Za.create(.2, q.a(this.W.Gc(), this.W.Bc())), q.P.create(this.pp, this))))))
        },
        av: function() {
            if (!this.Uo)
                if (!this.Re && this.fc) {
                    var t = this.Ul.Na();
                    this.fc.A(q.J.create(q.P.create(this.Oi, this), q.Za.create(.3, t), q.P.create(this.sO, this)))
                } else this.fc && this.fc.D != this.Vg && (t = this.Ul.Na(), this.fc.A(q.J.create(q.Za.create(.3, t), q.P.create(this.sO, this))))
        },
        pp: function(t) {
            if (t.D == TOOL_TINGZHEN_TAG) null == this.Fk ? (this.Fk = q.m.create("res/iphone/ys_tool_ax.png"), this.O.l(this.Fk, 2), this.Fk.i(q.a(.85 * this.aa.width, .771 * this.aa.height)), this.Fk.vb(.8), this.Fk.A(q.jh.create(q.J.create(q.hc.create(.3, 1), q.hc.create(.3, .8))))) : this.Fk.w(255);
            else if (t.D == TOOL_XINDIANTU_TAG) {
                n = q.m.create("res/iphone/ys_tool_jz_2.png");
                this.O.l(n, 3, TOOL_XINDIANTU_TMP_TAG), n.v(q.a(.75, 1)), n.i(q.a(this.W.Gc(), this.W.Bc() + .8 * this.W.g().height));
                c = q.m.create("res/iphone/ys_tool_xdg.png");
                this.O.l(c, 1, TIP_XINDIANTU_TAG), c.i(q.a(.85 * this.aa.width, .771 * this.aa.height));
                for (var i = (o = q.Ka.getInstance().cc("res/iphone/ys_tool_xdx.png")).g().height, n = 20, e = .05, h = o.g().width / n, s = q.m.nf(o, q.rect(0, 0, h, i)), r = q.vc.create(), a = 0; a <= n; a++) r.oE(o, q.rect(0, 0, h * a, i));
                r.Se(e), n = q.sd.create(r), c.l(s), s.v(q.a(0, 0)), s.i(q.a(0, 0)), s.A(q.jh.create(n))
            } else {
                if (t.D == TOOL_WENGDUJI_TAG) return this.Vu && (this.dn = 350 + R(11), this.rv = 355 + R(11)), void this.yV();
                if (t.D == TOOL_YAOSHUI_TAG) return this.oA = 0, n = q.m.create("res/iphone/ys_tool_ys.png"), this.O.l(n, 4), n.i(q.a(this.W.Gc() + n.g().width / 2, this.W.Bc() + this.W.g().height - n.g().height / 2)), void n.A(q.J.create(q.Zc.create(q.$f.create(.3), q.Ze.create(.3, q.a(0, -this.W.g().height + n.g().height / 2))), q.P.create(this.tO, this, t)));
                if (t.D == TOOL_ZHENGUAN_TAG) {
                    t.dp(TOOL_ZHENYE_TAG, !0);
                    for (var o = q.Va.create("res/iphone/ys_tool_ys_1.png"), c = o.g().height, i = o.g().width, h = .38095 * c, e = .2, r = .23 * c / (n = 10), s = q.m.nf(o.ia(), q.rect(0, h, i, .619 * c)), u = q.vc.create(), a = 0; a <= n; a++) u.oE(o.ia(), q.rect(q.rect(0, h + r * a, i, .619 * c - r * a)));
                    return u.Se(e), n = q.sd.create(u), t.l(s, -1), s.v(q.a(0, 1)), s.i(q.a(0, t.g().height - .38095 * c)), s.A(n), this.Cr = !0, void t.od(TOOL_ZHENTUI_TAG).A(q.J.create(q.Za.create(2.2, q.a(t.g().width / 2, t.g().height / 2)), q.P.create(this.y0, this, t)))
                }
                if (t.D == TOOL_MAOJIN_TAG) return this.Re = !1, this.Vg = 0, this.Ab.M(!0), this.of.M(!0), void this.Tf.M(!1);
                if (t.D == TOOL_YAOBU_TAG) return (n = q.vc.create()).cb("res/iphone/ys_tool_ckt_2.png"), n.cb("res/iphone/ys_tool_ckt_3.png"), n.cb("res/iphone/ys_tool_ckt_1.png"), n.Se(.2), n.ve(!1), n = q.sd.create(n), void t.A(q.J.create(n, q.P.create(this.D0, this)))
            }
            t.D == TOOL_TINGZHEN_TAG ? (n = q.a(.3 * this.T.width, .8 * this.Ek.height), t.A(q.J.create(q.Cc.create(R(4) + 2), q.P.create(this.Oi, this), q.Za.create(.3, n), q.P.create(this.Ni, this)))) : t.D == TOOL_XINDIANTU_TAG && t.A(q.J.create(q.Cc.create(R(4) + 2), q.P.create(this.Oi, this)))
        },
        Ni: function(t) {
            this.Re && t.D != this.Vg || (this.Re = !1, this.Vg = 0, this.Ab.M(!0), t.da(!0), t.D == TOOL_TINGZHEN_TAG || t.D == TOOL_XINDIANTU_TAG || t.D == TOOL_WENGDUJI_TAG ? (this.of.M(!1), this.Tf.M(!0)) : (this.of.M(!0), this.Tf.M(!1))), t.D == TOOL_YAOSHUI_TAG && this.gi.ya(q.Ka.getInstance().cc("res/iphone/ys_tool_pz.png"))
        },
        Oi: function(t) {
            if (this.Fk && this.Fk.w(0), t.D == TOOL_XINDIANTU_TAG) {
                if (this.O.od(TOOL_XINDIANTU_TMP_TAG)) {
                    this.O.dp(TOOL_XINDIANTU_TMP_TAG, !0), this.O.od(TIP_XINDIANTU_TAG) && this.O.od(TIP_XINDIANTU_TAG).Cb(!0), t.Cb(!0), this.rd.l(t, 2, TOOL_XINDIANTU_TAG);
                    var i = t.getParent().yd(t.Na()),
                        i = this.rd.ed(i);
                    t.i(i), i = q.a(.6 * this.T.width, .8 * this.Ek.height), t.A(q.J.create(q.Za.create(.3, i), q.P.create(this.Ni, this)))
                }
            } else t.D == TOOL_WENGDUJI_TAG ? this.bh && this.bh.A(q.J.create(q.$f.create(.3), q.tf.create(.3), q.$f.create(.3), q.tf.create(.3), q.$f.create(.3), q.tf.create(.3), q.P.create(this.C0, this))) : t.D == TOOL_MAOJIN_TAG ? this.Bk.w(0) : t.D == TOOL_YAOBU_TAG && this.W.w(0)
        },
        C0: function() {
            this.bh && this.bh.getParent() && (this.bh.Cb(!0), this.bh = null, this.Vu ? (this.dn = 350 + R(11), this.rv = 355 + R(11)) : (this.dn = 360 + R(11), this.rv = 380 + R(21)))
        },
        tO: function(t, i) {
            if (this.oA++, t.Cb(!0), 5 == this.oA) {
                this.oA = 0;
                var n = q.m.create("res/iphone/ys_tool_pz_2.png"),
                    n = q.a(.5 * n.g().width, n.g().height - i.g().height);
                i.A(q.J.create(q.P.create(this.Oi, this), q.Zc.create(q.Za.create(.3, n), q.Jp.create(.2, 0)), q.P.create(this.Ni, this)))
            } else n = q.m.create("res/iphone/ys_tool_ys.png"), this.O.l(n, 4), n.i(q.a(this.W.Gc() + n.g().width / 2, this.W.Bc() + this.W.g().height - n.g().height / 2)), n.A(q.J.create(q.Zc.create(q.$f.create(.3), q.Ze.create(.3, q.a(0, -this.W.g().height + n.g().height / 2))), q.P.create(this.tO, this, i)))
        },
        y0: function(t, i) {
            var n = this.O.yd(i.Na()),
                n = this.rd.ed(n);
            i.Cb(!0), this.rd.l(i, 2, TOOL_ZHENGUAN_TAG), i.v(q.a(.5, 1)), i.i(n), this.a_(this.ap, 2), this.Vu = !0, n = q.a(this.T.width + 1.6 * this.gi.g().width + 3 * i.g().width, .9 * this.gi.g().height), i.A(q.J.create(q.P.create(this.Oi, this), q.Za.create(.3, n), q.P.create(this.Ni, this)))
        },
        D0: function(t) {
            this.Vg = 0, this.Ab.M(!0), this.Tf.M(!1), this.of.M(!0);
            var i = q.m.create("res/iphone/ys_tool_ckt_1.png");
            this.O.l(i, 11), i.i(t.Na()), this.fc && this.fc.getParent() && (this.fc.Cb(!0), this.fc = null), this.Re = this.Uo = !1
        },
        sO: function() {
            this.fc && this.fc.getParent() && (this.Ab.M(!0), this.Tf.M(!1), this.of.M(!0), this.fc.Cb(!0), this.fc = null, this.Uo = this.Re = !1)
        },
        yV: function() {
            this.bh = q.m.create("res/iphone/ys_tool_wd.png"), this.O.l(this.bh, 2), this.bh.i(q.a(.85 * this.aa.width, .8 * this.aa.height)), this.bh.g(), this.Qr = Ha.rY();
            for (var t = 0; 10 > t; t++) {
                var i = va[t];
                this.Qr.HM(P.KE(t), i)
            }
            this.Qr.HM(".", "res/iphone/ys_d.png"), this.Qr.i(q.a(.5 * this.bh.g().width, .2 * this.bh.g().height)), this.bh.l(this.Qr, 3), this.uG = this.Vu ? "35" : "38", this.vG = "0", this.di(this.OK, .1)
        },
        OK: function() {
            this.dn++, this.uG = P.KE(this.dn / 10), this.vG = P.KE(this.dn % 10);
            var t = (t = parseInt(this.uG) + ".") + this.vG;
            if (this.Qr.Y_(t, 0, DGImageLabelSpriteFileTypeSigleImages, DGImageLabelSpriteTextAlignmentCenter), this.dn >= this.rv && (this.Sl(this.OK), t = this.O.od(TOOL_WENGDUJI_TAG))) {
                t.Cb(!0), this.rd.l(t, 2, TOOL_WENGDUJI_TAG);
                var i = t.getParent().yd(t.Na()),
                    i = this.rd.ed(i);
                t.i(i), i = q.a(.8 * this.T.width, .8 * this.Ek.height), t.A(q.J.create(q.Zc.create(q.Za.create(2, i), q.P.create(this.Oi, this)), q.P.create(this.Ni, this)))
            }
        },
        EV: function(t) {
            t.Gc() > .9 * t.g().width ? t.$m(.9 * t.g().width) : t.Gc() < .05 * this.T.width && t.$m(.05 * this.T.width), t.Bc() < .1 * this.T.height ? t.Ol(.1 * this.T.height) : t.Bc() > .9 * this.T.height && t.Ol(.9 * this.T.height)
        },
        GV: function(t) {
            t.Gc() > .95 * this.T.width ? t.$m(.95 * this.T.width) : t.Gc() < .1 * this.T.width && t.$m(.1 * this.T.width), t.Bc() < .1 * this.T.height ? t.Ol(.1 * this.T.height) : t.Bc() > .95 * t.g().height && t.Ol(.95 * t.g().height)
        },
        JM: function(t) {
            var i = q.n.getInstance().Y;
            t.D == NAVIGATION_ITEM_LEFT_TAG ? (this.of.M(!1), this.rd.A(q.J.create(q.Ze.create(.3, q.a(i.width, 0)), q.P.create(this.IM, this, t)))) : t.D == NAVIGATION_ITEM_RIGHT_TAG && (this.Tf.M(!1), this.rd.A(q.J.create(q.Ze.create(.3, q.a(-i.width, 0)), q.P.create(this.IM, this, t))))
        },
        IM: function(t, i) {
            i.D == NAVIGATION_ITEM_LEFT_TAG ? (this.Tf.M(!0), this.eh.da(!0), this.Rl.da(!0), this.Tl.da(!0), this.Gk.da(!1), this.We.da(!1), this.xk.da(!1)) : i.D == NAVIGATION_ITEM_RIGHT_TAG && (this.of.M(!0), this.eh.da(!1), this.Rl.da(!1), this.Tl.da(!1), this.Gk.da(!0), this.We.da(!0), this.xk.da(!0))
        },
        KF: function() {
            if (!$) {
                $ = !0;
                var t = this.O;
                setTimeout(function() {
                    $ = !1;
                    var i = mb(t);
                    q.n.getInstance().zk(i)
                }, 1e3)
            }
        }
    }),
    kb = q.Eg.extend({
        ba: function() {
            this._super();
            var t = new ob;
            t.init(), this.l(t)
        }
    }),
    pb = q.Ya.extend({
        uu: null,
        zu: null,
        ry: null,
        dd: null,
        bA: null,
        OE: null,
        Wr: null,
        xea: null,
        h6: null,
        v6: null,
        Mha: null,
        message: null,
        Fo: null,
        WM: null,
        SK: null,
        Xg: q.Ec(),
        Iha: null,
        ha: 0,
        tl: 0,
        init: function() {
            this._super(), this.Xg = O, this.zu = q.Ya.create(), this.ry = q.Ya.create(), this.dd = q.Ya.create();
            var t = q.m.create("res/iphone/ui_ad.png");
            this.dd.l(t), t.v(q.a(0, 1)), t.i(q.a(0, this.Xg.height)), t.ah(this.Xg.width / t.g().width), t.M(!1), this.bA = q.Ya.create(), this.OE = q.Ya.create(), this.Fo = q.r.create(), this.Fo.v(q.a(.5, .5)), this.Fo.Db(O), this.Fo.i(q.a(O.width / 2, O.height / 2)), this.WM = q.r.create(), this.tl = Z.getInstance().tl, 1 == this.tl ? this.uu = V.El("res/iphone/ys_bg_1.png") : 2 == this.tl ? this.uu = V.El("res/iphone/yl_bg_2.png") : 3 == this.tl ? this.uu = V.El("res/iphone/xz_bg_2.png") : 4 == this.tl && (this.uu = V.El("res/iphone/hz_bg_2.png")), P.Mi(this.dd, this.Xg), P.Mi(this.bA, this.Xg), P.aG(this.zu, this.Xg), P.aG(this, this.Xg), P.aG(this.ry, this.Xg), P.Mi(this.OE, this.Xg), this.Wr = q.Kc.create("res/iphone/ui_button_home.png", "res/iphone/ui_button_homea.png", this.MZ, this), t = null, P.fz() || ((t = q.Kc.create("res/iphone/ui_return.png", "res/iphone/ui_return_1.png", this.tE, this)).v(q.a(.5, 1)), t.i(q.a(this.Xg.width / 2 - t.g().width, this.Xg.height - 50 - t.g().height / 2)));
            var i;
            return P.jM() || (i = t ? q.Cg.create(t, this.Wr) : q.Cg.create(this.Wr)), this.Wr.i(q.a(this.Xg.width - this.Wr.g().width / 2, O.height - 45 - this.Wr.g().height)), i.i(q.a(0, 0)), this.ry.l(i), this.da(!0), this.SK = q.r.create(), this.zu.l(this.SK, 100), this.j0(), !0
        },
        MZ: function() {
            Z.getInstance().reset();
            var t = new gb;
            q.n.getInstance().zk(q.Op.create(.2, t))
        },
        tE: function() {
            P.Oy("BabyCare", ACTION_LAST_SCENE_BACK_TO_6677G, null), P.TL()
        },
        j0: function() {
            for (var t = 1; 5 >= t; t++) {
                var i = q.m.create("res/iphone/ui_gy.png");
                this.bA.l(i), i.i(q.a(this.Xg.width * q.Hp(), this.Xg.height * q.Hp())), i.w(0), i.vb(0), i.A(q.J.create(q.Zc.create(q.hc.create(q.Hp(), 1), q.tf.create(q.Hp())), q.Cc.create(.1), q.Zc.create(q.hc.create(q.Hp(), 0), q.$f.create(q.Hp())), q.P.create(this.oea, this)))
            }
        },
        Y4: null,
        ba: function() {
            this._super(), 
			//facebook.setScale(P.zE(O)), facebook.setPosition(280, 410), facebook.show(), 
			Ya()
        },
        kb: function() {
            this._super(), 
			//facebook.hide(), 
			Za()
        }
    }),
    qb = 0;
q.Dc.prototype.LC = function() {
    this.Ub.width = this.mq.clientWidth, this.Ub.height = this.mq.clientHeight, navigator.userAgent.match(/iPhone/i) && 2 > qb && (qb++, this.Ub.height += this.Ub.width / 320 * 60), q.pa.sg && (this.Ub.width = window.innerWidth, this.Ub.height = window.innerHeight)
}, Da = function() {
    if (q.pa.sg) {
        var t = !1;
        if ("number" == typeof window.orientation && "object" == typeof window.onorientationchange) switch (window.orientation) {
            case 90:
            case -90:
                t = !0;
                break;
            default:
                t = !1
        } else t = window.innerWidth > window.innerHeight;
        Ca(t ? !0 : !1)
    }
}, Fa = (Ea = "onorientationchange" in window) ? "orientationchange" : "resize", window.addEventListener(Fa, Da, !1), Da();
var rb = q.kn.extend({
    wu: document.ccConfig,
    ctor: function(t) {
        this._super(), this.o0 = t, q.xp = this.wu.COCOS2D_DEBUG, q.jX(), q.g0(this.wu.tag), q.qA.i0().YV()
    },
    sV: function() {
        if (q.FQ()) return alert("Browser doesn't support WebGL"), !1;
        var t = q.n.getInstance(),
            i = O.width * Ba(),
            n = za();
        q.Dc.getInstance().fG(i, n, q.Nj.SHOW_ALL), cocos2d_inited = !0, t.q_(this.wu.showFPS), t.hv(1 / this.wu.frameRate);
        try {
            ab.Tr(wa, function() {
                t.zk(new this.o0)
            }, this)
        } catch (t) {
            alert(t)
        }
        return !0
    }
}); - 1 != q.pa.yv.indexOf(" silk/") && (q.pa.sg = !0);
var sb = document.getElementById("gameCanvas");
if (sb) {
    var tb = za(),
        ub = O.width * Ba(),
        vb = (window.innerHeight - za()) / 2 / window.innerHeight * 100;
    sb.width = ub, sb.height = tb, sb.cssText = "width=" + ub + "px; height=" + tb + "px; position:fixed; top:" + vb + "%;"
} else console.error("没有设置Canvas， id=‘gameCanvas’");
new rb(gb);