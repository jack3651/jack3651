var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Loading: {
        Loading: "LOADING..."
    },
    Tutorial: [
        ["Hello!", "Welcome to Escape From Aztec!"],
        ["Collect coins to buy special items", "and enhance your abilities!"],
        ["Flick upwards to jump", "over the obstacle."],
        ["Press the UP ARROW to", "jump over the obstacle."],
        ["Tap on or Flick to the right", "to pick up those coins!"],
        ["Press the RIGHT ARROW", "to pick up those coins!"],
        ["We need to go to the left now.", "Tap or Flick to the left."],
        ["We need to go to the left now.", "Press the LEFT ARROW."],
        ["Almost there! Tap or Flick", "to the left again."],
        ["Almost there! Press the", "LEFT ARROW again."],
        ["Flick downwards to slide", "under the barrier!"],
        ["Press the DOWN ARROW to slide", "under the barrier!"],
        ["It's all up to you now.", "Good luck and have fun!"]
    ],
    UI: {
        enter: "enter",
        "continue": "continue"
    },
    Game: {
        Options: "Options",
        Music: "Music",
        Sound: "Sound",
        Tutorial: "Tutorial",
        Close: "Close",
        Play: "Play",
        HomeMenu: "Home Menu",
        Resume: "Resume",
        Paused: "Paused",
        GameOver: "Game Over",
        Replay: "Replay",
        Store: "Store",
        Magnet: "Coin magnet lasts longer",
        Invin: "Invincibility lasts longer",
        MultiCoins: "Coin x ",
        After: " after ",
        Mega: "Megaboost",
        Resurrect: "Increase number of lives",
        Stats: "Stats",
        Score: "SCORE",
        BestScore: "Best Score",
        SingleRun: "Single Run",
        Lifetime: "Lifetime",
        HighestScore: "Highest Score:",
        LongestRun: "Longest Run:",
        MostCoins: "Most Coins:",
        TotalGames: "Total Games:",
        TotalDistance: "Total Distance:",
        TotalCoins: "Total Coins:"
    }
};
var _SETTINGS = {
    API: {
        Enabled: !1,
        Log: {
            Events: {
                InitializeGame: !1,
                EndGame: !1,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !1,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !0,
            NewWindow: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !1,
        Link: "http://www.google.com",
        NewWindow: !0
    },
    Gamecenter: {
        Enabled: !1
    }
};
var MobileAdInGamePreroll = {};
var MobileAdInGameHeader = {};
var MobileAdInGameFooter = {};
var MobileAdInGameEnd = {};
(function(b, c) {
    function d(b, y, d) {
        if (d === c && 1 === b.nodeType)
            if (d = "data-" + y.replace(qc, "-$1").toLowerCase(), d = b.getAttribute(d), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : rc.test(d) ? g.parseJSON(d) : d
                } catch (e) {}
                g.data(b, y, d)
            } else d = c;
        return d
    }

    function f(b) {
        for (var c in b)
            if (!("data" === c && g.isEmptyObject(b[c])) && "toJSON" !== c) return !1;
        return !0
    }

    function e() {
        return !1
    }

    function j() {
        return !0
    }

    function n(b) {
        return !b || !b.parentNode || 11 === b.parentNode.nodeType
    }

    function q(b, c) {
        do b = b[c]; while (b && 1 !== b.nodeType);
        return b
    }

    function l(b, c, d) {
        c = c || 0;
        if (g.isFunction(c)) return g.grep(b, function(b, x) {
            return !!c.call(b, x, b) === d
        });
        if (c.nodeType) return g.grep(b, function(b) {
            return b === c === d
        });
        if ("string" == typeof c) {
            var e = g.grep(b, function(b) {
                return 1 === b.nodeType
            });
            if (tc.test(c)) return g.filter(c, e, !d);
            c = g.filter(c, e)
        }
        return g.grep(b, function(b) {
            return 0 <= g.inArray(b, c) === d
        })
    }

    function m(b) {
        var c = sb.split("|");
        b = b.createDocumentFragment();
        if (b.createElement)
            for (; c.length;) b.createElement(c.pop());
        return b
    }

    function p(b, c) {
        if (1 === c.nodeType && g.hasData(b)) {
            var d, e, f;
            e = g._data(b);
            var l = g._data(c, e),
                z = e.events;
            if (z)
                for (d in delete l.handle, l.events = {}, z) {
                    e = 0;
                    for (f = z[d].length; e < f; e++) g.event.add(c, d, z[d][e])
                }
            l.data && (l.data = g.extend({}, l.data))
        }
    }

    function r(b, c) {
        var d;
        1 === c.nodeType && (c.clearAttributes && c.clearAttributes(), c.mergeAttributes && c.mergeAttributes(b), d = c.nodeName.toLowerCase(), "object" === d ? (c.parentNode && (c.outerHTML = b.outerHTML), g.support.html5Clone && b.innerHTML && !g.trim(c.innerHTML) && (c.innerHTML = b.innerHTML)) : "input" === d && tb.test(b.type) ? (c.defaultChecked = c.checked = b.checked, c.value !== b.value && (c.value = b.value)) : "option" === d ? c.selected = b.defaultSelected : "input" === d || "textarea" === d ? c.defaultValue = b.defaultValue : "script" === d && c.text !== b.text && (c.text = b.text), c.removeAttribute(g.expando))
    }

    function s(b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
    }

    function t(b) {
        tb.test(b.type) && (b.defaultChecked = b.checked)
    }

    function v(b, c) {
        if (c in b) return c;
        for (var d = c.charAt(0).toUpperCase() + c.slice(1), g = c, e = ub.length; e--;)
            if (c = ub[e] + d, c in b) return c;
        return g
    }

    function B(b, c) {
        return b = c || b, "none" === g.css(b, "display") || !g.contains(b.ownerDocument, b)
    }

    function E(b, c) {
        for (var d, e, f = [], l = 0, z = b.length; l < z; l++) d = b[l], d.style && (f[l] = g._data(d, "olddisplay"), c ? (!f[l] && "none" === d.style.display && (d.style.display = ""), "" === d.style.display && B(d) && (f[l] = g._data(d, "olddisplay", ca(d.nodeName)))) : (e = M(d, "display"), !f[l] && "none" !== e && g._data(d, "olddisplay", e)));
        for (l = 0; l < z; l++)
            if (d = b[l], d.style && (!c || "none" === d.style.display || "" === d.style.display)) d.style.display = c ? f[l] || "" : "none";
        return b
    }

    function A(b, c, d) {
        return (b = uc.exec(c)) ? Math.max(0, b[1] - (d || 0)) + (b[2] || "px") : c
    }

    function C(b, c, d, e) {
        c = d === (e ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
        for (var f = 0; 4 > c; c += 2) "margin" === d && (f += g.css(b, d + da[c], !0)), e ? ("content" === d && (f -= parseFloat(M(b, "padding" + da[c])) || 0), "margin" !== d && (f -= parseFloat(M(b, "border" + da[c] + "Width")) || 0)) : (f += parseFloat(M(b, "padding" + da[c])) || 0, "padding" !== d && (f += parseFloat(M(b, "border" + da[c] + "Width")) || 0));
        return f
    }

    function Y(b, c, d) {
        var e = "width" === c ? b.offsetWidth : b.offsetHeight,
            f = !0,
            l = g.support.boxSizing && "border-box" === g.css(b, "boxSizing");
        if (0 >= e || null == e) {
            e = M(b, c);
            if (0 > e || null == e) e = b.style[c];
            if (va.test(e)) return e;
            f = l && (g.support.boxSizingReliable || e === b.style[c]);
            e = parseFloat(e) || 0
        }
        return e + C(b, c, d || (l ? "border" : "content"), f) + "px"
    }

    function ca(b) {
        if (Ua[b]) return Ua[b];
        var c = g("<" + b + ">").appendTo(u.body),
            d = c.css("display");
        c.remove();
        if ("none" === d || "" === d) {
            ka = u.body.appendChild(ka || g.extend(u.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!la || !ka.createElement) la = (ka.contentWindow || ka.contentDocument).document, la.write("<!doctype html><html><body>"), la.close();
            c = la.body.appendChild(la.createElement(b));
            d = M(c, "display");
            u.body.removeChild(ka)
        }
        return Ua[b] = d, d
    }

    function F(b, c, d, e) {
        var f;
        if (g.isArray(c)) g.each(c, function(c, y) {
            d || vc.test(b) ? e(b, y) : F(b + "[" + ("object" == typeof y ? c : "") + "]", y, d, e)
        });
        else if (!d && "object" === g.type(c))
            for (f in c) F(b + "[" + f + "]", c[f], d, e);
        else e(b, c)
    }

    function vb(b) {
        return function(c, d) {
            "string" != typeof c && (d = c, c = "*");
            var e, f, l = c.toLowerCase().split(ea),
                z = 0,
                j = l.length;
            if (g.isFunction(d))
                for (; z < j; z++) e = l[z], (f = /^\+/.test(e)) && (e = e.substr(1) || "*"), e = b[e] = b[e] || [], e[f ? "unshift" : "push"](d)
        }
    }

    function wa(b, y, d, g, e, f) {
        e = e || y.dataTypes[0];
        f = f || {};
        f[e] = !0;
        var l;
        e = b[e];
        for (var j = 0, m = e ? e.length : 0, p = b === Va; j < m && (p || !l); j++) l = e[j](y, d, g), "string" == typeof l && (!p || f[l] ? l = c : (y.dataTypes.unshift(l), l = wa(b, y, d, g, l, f)));
        return (p || !l) && !f["*"] && (l = wa(b, y, d, g, "*", f)), l
    }

    function wb(b, y) {
        var d, e, f = g.ajaxSettings.flatOptions || {};
        for (d in y) y[d] !== c && ((f[d] ? b : e || (e = {}))[d] = y[d]);
        e && g.extend(!0, b, e)
    }

    function xb() {
        try {
            return new b.XMLHttpRequest
        } catch (c) {}
    }

    function yb() {
        return setTimeout(function() {
            xa = c
        }, 0), xa = g.now()
    }

    function zb(b, c, d) {
        var e, f = 0,
            l = ya.length,
            z = g.Deferred().always(function() {
                delete j.elem
            }),
            j = function() {
                for (var c = xa || yb(), c = Math.max(0, m.startTime + m.duration - c), y = 1 - (c / m.duration || 0), d = 0, e = m.tweens.length; d < e; d++) m.tweens[d].run(y);
                return z.notifyWith(b, [m, y, c]), 1 > y && e ? c : (z.resolveWith(b, [m]), !1)
            },
            m = z.promise({
                elem: b,
                props: g.extend({}, c),
                opts: g.extend(!0, {
                    specialEasing: {}
                }, d),
                originalProperties: c,
                originalOptions: d,
                startTime: xa || yb(),
                duration: d.duration,
                tweens: [],
                createTween: function(c, y) {
                    var d = g.Tween(b, m.opts, c, y, m.opts.specialEasing[c] || m.opts.easing);
                    return m.tweens.push(d), d
                },
                stop: function(c) {
                    for (var y = 0, d = c ? m.tweens.length : 0; y < d; y++) m.tweens[y].run(1);
                    return c ? z.resolveWith(b, [m, c]) : z.rejectWith(b, [m, c]), this
                }
            });
        c = m.props;
        d = m.opts.specialEasing;
        var p, r, s, q;
        for (e in c)
            if (p = g.camelCase(e), r = d[p], s = c[e], g.isArray(s) && (r = s[1], s = c[e] = s[0]), e !== p && (c[p] = s, delete c[e]), (q = g.cssHooks[p]) && "expand" in q)
                for (e in s = q.expand(s), delete c[p], s) e in c || (c[e] = s[e], d[e] = r);
            else d[p] = r;
        for (; f < l; f++)
            if (e = ya[f].call(m, b, c, m.opts)) return e;
        var n = m;
        g.each(c, function(b, c) {
            for (var x = (qa[b] || []).concat(qa["*"]), y = 0, d = x.length; y < d && !x[y].call(n, b, c); y++);
        });
        return g.isFunction(m.opts.start) && m.opts.start.call(b, m), g.fx.timer(g.extend(j, {
            anim: m,
            queue: m.opts.queue,
            elem: b
        })), m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always)
    }

    function O(b, c, d, e, g) {
        return new O.prototype.init(b, c, d, e, g)
    }

    function za(b, c) {
        var d, e = {
                height: b
            },
            g = 0;
        for (c = c ? 1 : 0; 4 > g; g += 2 - c) d = da[g], e["margin" + d] = e["padding" + d] = b;
        return c && (e.opacity = e.width = b), e
    }

    function Ab(b) {
        return g.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }
    var Bb, Aa, u = b.document,
        xc = b.location,
        yc = b.navigator,
        zc = b.jQuery,
        Ac = b.$,
        Cb = Array.prototype.push,
        X = Array.prototype.slice,
        Db = Array.prototype.indexOf,
        Bc = Object.prototype.toString,
        Wa = Object.prototype.hasOwnProperty,
        Xa = String.prototype.trim,
        g = function(b, c) {
            return new g.fn.init(b, c, Bb)
        },
        Ba = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Cc = /\S/,
        ea = /\s+/,
        Dc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Ec = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Eb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Fc = /^[\],:{}\s]*$/,
        Gc = /(?:^|:|,)(?:\s*\[)+/g,
        Hc = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Ic = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Jc = /^-ms-/,
        Kc = /-([\da-z])/gi,
        Lc = function(b, c) {
            return (c + "").toUpperCase()
        },
        Ca = function() {
            u.addEventListener ? (u.removeEventListener("DOMContentLoaded", Ca, !1), g.ready()) : "complete" === u.readyState && (u.detachEvent("onreadystatechange", Ca), g.ready())
        },
        Fb = {};
    g.fn = g.prototype = {
        constructor: g,
        init: function(b, d, e) {
            var f, l;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? f = [null, b, null] : f = Ec.exec(b);
                if (f && (f[1] || !d)) {
                    if (f[1]) return d = d instanceof g ? d[0] : d, l = d && d.nodeType ? d.ownerDocument || d : u, b = g.parseHTML(f[1], l, !0), Eb.test(f[1]) && g.isPlainObject(d) && this.attr.call(b, d, !0), g.merge(this, b);
                    if ((d = u.getElementById(f[2])) && d.parentNode) {
                        if (d.id !== f[2]) return e.find(b);
                        this.length = 1;
                        this[0] = d
                    }
                    return this.context = u, this.selector = b, this
                }
                return !d || d.jquery ? (d || e).find(b) : this.constructor(d).find(b)
            }
            return g.isFunction(b) ? e.ready(b) : (b.selector !== c && (this.selector = b.selector, this.context = b.context), g.makeArray(b, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return X.call(this)
        },
        get: function(b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        },
        pushStack: function(b, c, d) {
            b = g.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, "find" === c ? b.selector = this.selector + (this.selector ? " " : "") + d : c && (b.selector = this.selector + "." + c + "(" + d + ")"), b
        },
        each: function(b, c) {
            return g.each(this, b, c)
        },
        ready: function(b) {
            return g.ready.promise().done(b), this
        },
        eq: function(b) {
            return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments), "slice", X.call(arguments).join(","))
        },
        map: function(b) {
            return this.pushStack(g.map(this, function(c, d) {
                return b.call(c, d, c)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Cb,
        sort: [].sort,
        splice: [].splice
    };
    g.fn.init.prototype = g.fn;
    g.extend = g.fn.extend = function() {
        var b, d, e, f, l, j, z = arguments[0] || {},
            m = 1,
            p = arguments.length,
            r = !1;
        "boolean" == typeof z && (r = z, z = arguments[1] || {}, m = 2);
        "object" != typeof z && !g.isFunction(z) && (z = {});
        for (p === m && (z = this, --m); m < p; m++)
            if (null != (b = arguments[m]))
                for (d in b) e = z[d], f = b[d], z !== f && (r && f && (g.isPlainObject(f) || (l = g.isArray(f))) ? (l ? (l = !1, j = e && g.isArray(e) ? e : []) : j = e && g.isPlainObject(e) ? e : {}, z[d] = g.extend(r, j, f)) : f !== c && (z[d] = f));
        return z
    };
    g.extend({
        noConflict: function(c) {
            return b.$ === g && (b.$ = Ac), c && b.jQuery === g && (b.jQuery = zc), g
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? g.readyWait++ : g.ready(!0)
        },
        ready: function(b) {
            if (!(!0 === b ? --g.readyWait : g.isReady)) {
                if (!u.body) return setTimeout(g.ready, 1);
                g.isReady = !0;
                !0 !== b && 0 < --g.readyWait || (Aa.resolveWith(u, [g]), g.fn.trigger && g(u).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) {
            return "function" === g.type(b)
        },
        isArray: Array.isArray || function(b) {
            return "array" === g.type(b)
        },
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return !isNaN(parseFloat(b)) && isFinite(b)
        },
        type: function(b) {
            return null == b ? String(b) : Fb[Bc.call(b)] || "object"
        },
        isPlainObject: function(b) {
            if (!b || "object" !== g.type(b) || b.nodeType || g.isWindow(b)) return !1;
            try {
                if (b.constructor && !Wa.call(b, "constructor") && !Wa.call(b.constructor.prototype, "isPrototypeOf")) return !1
            } catch (d) {
                return !1
            }
            for (var e in b);
            return e === c || Wa.call(b, e)
        },
        isEmptyObject: function(b) {
            for (var c in b) return !1;
            return !0
        },
        error: function(b) {
            throw Error(b);
        },
        parseHTML: function(b, c, d) {
            var e;
            return !b || "string" != typeof b ? null : ("boolean" == typeof c && (d = c, c = 0), c = c || u, (e = Eb.exec(b)) ? [c.createElement(e[1])] : (e = g.buildFragment([b], c, d ? null : []), g.merge([], (e.cacheable ? g.clone(e.fragment) : e.fragment).childNodes)))
        },
        parseJSON: function(c) {
            if (!c || "string" != typeof c) return null;
            c = g.trim(c);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(c);
            if (Fc.test(c.replace(Hc, "@").replace(Ic, "]").replace(Gc, ""))) return (new Function("return " + c))();
            g.error("Invalid JSON: " + c)
        },
        parseXML: function(x) {
            var d, e;
            if (!x || "string" != typeof x) return null;
            try {
                b.DOMParser ? (e = new DOMParser, d = e.parseFromString(x, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(x))
            } catch (f) {
                d = c
            }
            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && g.error("Invalid XML: " + x), d
        },
        noop: function() {},
        globalEval: function(c) {
            c && Cc.test(c) && (b.execScript || function(c) {
                b.eval.call(b, c)
            })(c)
        },
        camelCase: function(b) {
            return b.replace(Jc, "ms-").replace(Kc, Lc)
        },
        nodeName: function(b, c) {
            return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
        },
        each: function(b, d, e) {
            var f, l = 0,
                j = b.length,
                z = j === c || g.isFunction(b);
            if (e)
                if (z)
                    for (f in b) {
                        if (!1 === d.apply(b[f], e)) break
                    } else
                        for (; l < j && !1 !== d.apply(b[l++], e););
                else if (z)
                for (f in b) {
                    if (!1 === d.call(b[f], f, b[f])) break
                } else
                    for (; l < j && !1 !== d.call(b[l], l, b[l++]););
            return b
        },
        trim: Xa && !Xa.call("\ufeff\u00a0") ? function(b) {
            return null == b ? "" : Xa.call(b)
        } : function(b) {
            return null == b ? "" : (b + "").replace(Dc, "")
        },
        makeArray: function(b, c) {
            var d, e = c || [];
            return null != b && (d = g.type(b), null == b.length || "string" === d || "function" === d || "regexp" === d || g.isWindow(b) ? Cb.call(e, b) : g.merge(e, b)), e
        },
        inArray: function(b, c, d) {
            var e;
            if (c) {
                if (Db) return Db.call(c, b, d);
                e = c.length;
                for (d = d ? 0 > d ? Math.max(0, e + d) : d : 0; d < e; d++)
                    if (d in c && c[d] === b) return d
            }
            return -1
        },
        merge: function(b, d) {
            var e = d.length,
                g = b.length,
                f = 0;
            if ("number" == typeof e)
                for (; f < e; f++) b[g++] = d[f];
            else
                for (; d[f] !== c;) b[g++] = d[f++];
            return b.length = g, b
        },
        grep: function(b, c, d) {
            var e, g = [],
                f = 0,
                l = b.length;
            for (d = !!d; f < l; f++) e = !!c(b[f], f), d !== e && g.push(b[f]);
            return g
        },
        map: function(b, d, e) {
            var f, l, j = [],
                z = 0,
                m = b.length;
            if (b instanceof g || m !== c && "number" == typeof m && (0 < m && b[0] && b[m - 1] || 0 === m || g.isArray(b)))
                for (; z < m; z++) f = d(b[z], z, e), null != f && (j[j.length] = f);
            else
                for (l in b) f = d(b[l], l, e), null != f && (j[j.length] = f);
            return j.concat.apply([], j)
        },
        guid: 1,
        proxy: function(b, d) {
            var e, f, l;
            return "string" == typeof d && (e = b[d], d = b, b = e), g.isFunction(b) ? (f = X.call(arguments, 2), l = function() {
                return b.apply(d, f.concat(X.call(arguments)))
            }, l.guid = b.guid = b.guid || g.guid++, l) : c
        },
        access: function(b, d, e, f, l, j, z) {
            var m, p = null == e,
                r = 0,
                s = b.length;
            if (e && "object" == typeof e) {
                for (r in e) g.access(b, d, r, e[r], 1, j, f);
                l = 1
            } else if (f !== c) {
                m = z === c && g.isFunction(f);
                p && (m ? (m = d, d = function(b, c, x) {
                    return m.call(g(b), x)
                }) : (d.call(b, f), d = null));
                if (d)
                    for (; r < s; r++) d(b[r], e, m ? f.call(b[r], r, d(b[r], e)) : f, z);
                l = 1
            }
            return l ? b : p ? d.call(b) : s ? d(b[0], e) : j
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    g.ready.promise = function(c) {
        if (!Aa)
            if (Aa = g.Deferred(), "complete" === u.readyState) setTimeout(g.ready, 1);
            else if (u.addEventListener) u.addEventListener("DOMContentLoaded", Ca, !1), b.addEventListener("load", g.ready, !1);
        else {
            u.attachEvent("onreadystatechange", Ca);
            b.attachEvent("onload", g.ready);
            var d = !1;
            try {
                d = null == b.frameElement && u.documentElement
            } catch (e) {}
            d && d.doScroll && function sc() {
                if (!g.isReady) {
                    try {
                        d.doScroll("left")
                    } catch (b) {
                        return setTimeout(sc, 50)
                    }
                    g.ready()
                }
            }()
        }
        return Aa.promise(c)
    };
    g.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, c) {
        Fb["[object " + c + "]"] = c.toLowerCase()
    });
    Bb = g(u);
    var Gb = {};
    g.Callbacks = function(b) {
        var d;
        if ("string" == typeof b) {
            if (!(d = Gb[b])) {
                d = b;
                var e = Gb[d] = {};
                d = (g.each(d.split(ea), function(b, c) {
                    e[c] = !0
                }), e)
            }
        } else d = g.extend({}, b);
        b = d;
        var f, l, j, z, m, p, r = [],
            s = !b.once && [],
            q = function(c) {
                f = b.memory && c;
                l = !0;
                p = z || 0;
                z = 0;
                m = r.length;
                for (j = !0; r && p < m; p++)
                    if (!1 === r[p].apply(c[0], c[1]) && b.stopOnFalse) {
                        f = !1;
                        break
                    }
                j = !1;
                r && (s ? s.length && q(s.shift()) : f ? r = [] : n.disable())
            },
            n = {
                add: function() {
                    if (r) {
                        var c = r.length;
                        (function wc(c) {
                            g.each(c, function(c, d) {
                                var y = g.type(d);
                                "function" === y && (!b.unique || !n.has(d)) ? r.push(d) : d && d.length && "string" !== y && wc(d)
                            })
                        })(arguments);
                        j ? m = r.length : f && (z = c, q(f))
                    }
                    return this
                },
                remove: function() {
                    return r && g.each(arguments, function(b, c) {
                        for (var x; - 1 < (x = g.inArray(c, r, x));) r.splice(x, 1), j && (x <= m && m--, x <= p && p--)
                    }), this
                },
                has: function(b) {
                    return -1 < g.inArray(b, r)
                },
                empty: function() {
                    return r = [], this
                },
                disable: function() {
                    return r = s = f = c, this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return s = c, f || n.disable(), this
                },
                locked: function() {
                    return !s
                },
                fireWith: function(b, c) {
                    return c = c || [], c = [b, c.slice ? c.slice() : c], r && (!l || s) && (j ? s.push(c) : q(c)), this
                },
                fire: function() {
                    return n.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!l
                }
            };
        return n
    };
    g.extend({
        Deferred: function(b) {
            var c = [
                    ["resolve", "done", g.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", g.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", g.Callbacks("memory")]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var b = arguments;
                        return g.Deferred(function(x) {
                            g.each(c, function(c, d) {
                                var y = d[0],
                                    e = b[c];
                                f[d[1]](g.isFunction(e) ? function() {
                                    var b = e.apply(this, arguments);
                                    b && g.isFunction(b.promise) ? b.promise().done(x.resolve).fail(x.reject).progress(x.notify) : x[y + "With"](this === f ? x : this, [b])
                                } : x[y])
                            });
                            b = null
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? g.extend(b, e) : e
                    }
                },
                f = {};
            return e.pipe = e.then, g.each(c, function(b, x) {
                var g = x[2],
                    l = x[3];
                e[x[1]] = g.add;
                l && g.add(function() {
                    d = l
                }, c[b ^ 1][2].disable, c[2][2].lock);
                f[x[0]] = g.fire;
                f[x[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(b) {
            var c = 0,
                d = X.call(arguments),
                e = d.length,
                f = 1 !== e || b && g.isFunction(b.promise) ? e : 0,
                l = 1 === f ? b : g.Deferred(),
                j = function(b, c, x) {
                    return function(d) {
                        c[b] = this;
                        x[b] = 1 < arguments.length ? X.call(arguments) : d;
                        x === m ? l.notifyWith(c, x) : --f || l.resolveWith(c, x)
                    }
                },
                m, p, r;
            if (1 < e) {
                m = Array(e);
                p = Array(e);
                for (r = Array(e); c < e; c++) d[c] && g.isFunction(d[c].promise) ? d[c].promise().done(j(c, r, d)).fail(l.reject).progress(j(c, p, m)) : --f
            }
            return f || l.resolveWith(r, d), l.promise()
        }
    });
    var Mc = g,
        Ya, K, Da, fa, Ea, Fa, Q, ga, Ga, Za, ra, Hb, H = u.createElement("div");
    H.setAttribute("className", "t");
    H.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Da = H.getElementsByTagName("*");
    fa = H.getElementsByTagName("a")[0];
    fa.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Da || !Da.length) Ya = {};
    else {
        Ea = u.createElement("select");
        Fa = Ea.appendChild(u.createElement("option"));
        Q = H.getElementsByTagName("input")[0];
        K = {
            leadingWhitespace: 3 === H.firstChild.nodeType,
            tbody: !H.getElementsByTagName("tbody").length,
            htmlSerialize: !!H.getElementsByTagName("link").length,
            style: /top/.test(fa.getAttribute("style")),
            hrefNormalized: "/a" === fa.getAttribute("href"),
            opacity: /^0.5/.test(fa.style.opacity),
            cssFloat: !!fa.style.cssFloat,
            checkOn: "on" === Q.value,
            optSelected: Fa.selected,
            getSetAttribute: "t" !== H.className,
            enctype: !!u.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== u.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === u.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        Q.checked = !0;
        K.noCloneChecked = Q.cloneNode(!0).checked;
        Ea.disabled = !0;
        K.optDisabled = !Fa.disabled;
        try {
            delete H.test
        } catch (Od) {
            K.deleteExpando = !1
        }!H.addEventListener && H.attachEvent && H.fireEvent && (H.attachEvent("onclick", Hb = function() {
            K.noCloneEvent = !1
        }), H.cloneNode(!0).fireEvent("onclick"), H.detachEvent("onclick", Hb));
        Q = u.createElement("input");
        Q.value = "t";
        Q.setAttribute("type", "radio");
        K.radioValue = "t" === Q.value;
        Q.setAttribute("checked", "checked");
        Q.setAttribute("name", "t");
        H.appendChild(Q);
        ga = u.createDocumentFragment();
        ga.appendChild(H.lastChild);
        K.checkClone = ga.cloneNode(!0).cloneNode(!0).lastChild.checked;
        K.appendChecked = Q.checked;
        ga.removeChild(Q);
        ga.appendChild(H);
        if (H.attachEvent)
            for (Za in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) Ga = "on" + Za, (ra = Ga in H) || (H.setAttribute(Ga, "return;"), ra = "function" == typeof H[Ga]), K[Za + "Bubbles"] = ra;
        Ya = (g(function() {
            var c, d, e, f, g = u.getElementsByTagName("body")[0];
            g && (c = u.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", g.insertBefore(c, g.firstChild), d = u.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = d.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", ra = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", K.reliableHiddenOffsets = ra && 0 === e[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", K.boxSizing = 4 === d.offsetWidth, K.doesNotIncludeMarginInBodyOffset = 1 !== g.offsetTop, b.getComputedStyle && (K.pixelPosition = "1%" !== (b.getComputedStyle(d, null) || {}).top, K.boxSizingReliable = "4px" === (b.getComputedStyle(d, null) || {
                width: "4px"
            }).width, f = u.createElement("div"), f.style.cssText = d.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", f.style.marginRight = f.style.width = "0", d.style.width = "1px", d.appendChild(f), K.reliableMarginRight = !parseFloat((b.getComputedStyle(f, null) || {}).marginRight)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", K.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", K.shrinkWrapBlocks = 3 !== d.offsetWidth, c.style.zoom = 1), g.removeChild(c))
        }), ga.removeChild(H), Da = fa = Ea = Fa = Q = ga = H = null, K)
    }
    Mc.support = Ya;
    var rc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        qc = /([A-Z])/g;
    g.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (g.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            return b = b.nodeType ? g.cache[b[g.expando]] : b[g.expando], !!b && !f(b)
        },
        data: function(b, d, e, f) {
            if (g.acceptData(b)) {
                var l, j, m = g.expando,
                    p = "string" == typeof d,
                    r = b.nodeType,
                    s = r ? g.cache : b,
                    q = r ? b[m] : b[m] && m;
                if (q && s[q] && (f || s[q].data) || !(p && e === c)) {
                    q || (r ? b[m] = q = g.deletedIds.pop() || g.guid++ : q = m);
                    s[q] || (s[q] = {}, r || (s[q].toJSON = g.noop));
                    if ("object" == typeof d || "function" == typeof d) f ? s[q] = g.extend(s[q], d) : s[q].data = g.extend(s[q].data, d);
                    return l = s[q], f || (l.data || (l.data = {}), l = l.data), e !== c && (l[g.camelCase(d)] = e), p ? (j = l[d], null == j && (j = l[g.camelCase(d)])) : j = l, j
                }
            }
        },
        removeData: function(b, c, d) {
            if (g.acceptData(b)) {
                var e, l, j, m = b.nodeType,
                    p = m ? g.cache : b,
                    r = m ? b[g.expando] : g.expando;
                if (p[r]) {
                    if (c && (e = d ? p[r] : p[r].data)) {
                        g.isArray(c) || (c in e ? c = [c] : (c = g.camelCase(c), c in e ? c = [c] : c = c.split(" ")));
                        l = 0;
                        for (j = c.length; l < j; l++) delete e[c[l]];
                        if (!(d ? f : g.isEmptyObject)(e)) return
                    }
                    if (d || !(delete p[r].data, !f(p[r]))) m ? g.cleanData([b], !0) : g.support.deleteExpando || p != p.window ? delete p[r] : p[r] = null
                }
            }
        },
        _data: function(b, c, d) {
            return g.data(b, c, d, !0)
        },
        acceptData: function(b) {
            var c = b.nodeName && g.noData[b.nodeName.toLowerCase()];
            return !c || !0 !== c && b.getAttribute("classid") === c
        }
    });
    g.fn.extend({
        data: function(b, e) {
            var f, l, j, m, z, p = this[0],
                r = 0,
                s = null;
            if (b === c) {
                if (this.length && (s = g.data(p), 1 === p.nodeType && !g._data(p, "parsedAttrs"))) {
                    j = p.attributes;
                    for (z = j.length; r < z; r++) m = j[r].name, m.indexOf("data-") || (m = g.camelCase(m.substring(5)), d(p, m, s[m]));
                    g._data(p, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof b ? this.each(function() {
                g.data(this, b)
            }) : (f = b.split(".", 2), f[1] = f[1] ? "." + f[1] : "", l = f[1] + "!", g.access(this, function(e) {
                if (e === c) return s = this.triggerHandler("getData" + l, [f[0]]), s === c && p && (s = g.data(p, b), s = d(p, b, s)), s === c && f[1] ? this.data(f[0]) : s;
                f[1] = e;
                this.each(function() {
                    var c = g(this);
                    c.triggerHandler("setData" + l, f);
                    g.data(this, b, e);
                    c.triggerHandler("changeData" +
                        l, f)
                })
            }, null, e, 1 < arguments.length, null, !1))
        },
        removeData: function(b) {
            return this.each(function() {
                g.removeData(this, b)
            })
        }
    });
    g.extend({
        queue: function(b, c, d) {
            var e;
            if (b) return c = (c || "fx") + "queue", e = g._data(b, c), d && (!e || g.isArray(d) ? e = g._data(b, c, g.makeArray(d)) : e.push(d)), e || []
        },
        dequeue: function(b, c) {
            c = c || "fx";
            var d = g.queue(b, c),
                e = d.length,
                f = d.shift(),
                l = g._queueHooks(b, c),
                j = function() {
                    g.dequeue(b, c)
                };
            "inprogress" === f && (f = d.shift(), e--);
            f && ("fx" === c && d.unshift("inprogress"), delete l.stop, f.call(b, j, l));
            !e && l && l.empty.fire()
        },
        _queueHooks: function(b, c) {
            var d = c + "queueHooks";
            return g._data(b, d) || g._data(b, d, {
                empty: g.Callbacks("once memory").add(function() {
                    g.removeData(b, c + "queue", !0);
                    g.removeData(b, d, !0)
                })
            })
        }
    });
    g.fn.extend({
        queue: function(b, d) {
            var e = 2;
            return "string" != typeof b && (d = b, b = "fx", e--), arguments.length < e ? g.queue(this[0], b) : d === c ? this : this.each(function() {
                var c = g.queue(this, b, d);
                g._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && g.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                g.dequeue(this, b)
            })
        },
        delay: function(b, c) {
            return b = g.fx ? g.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = setTimeout(c, b);
                d.stop = function() {
                    clearTimeout(e)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, d) {
            var e, f = 1,
                l = g.Deferred(),
                j = this,
                m = this.length,
                p = function() {
                    --f || l.resolveWith(j, [j])
                };
            "string" != typeof b && (d = b, b = c);
            for (b = b || "fx"; m--;)(e = g._data(j[m], b + "queueHooks")) && e.empty && (f++, e.empty.add(p));
            return p(), l.promise(d)
        }
    });
    var Z, Ib, Jb, Kb = /[\t\r\n]/g,
        Nc = /\r/g,
        Oc = /^(?:button|input)$/i,
        Pc = /^(?:button|input|object|select|textarea)$/i,
        Qc = /^a(?:rea|)$/i,
        Lb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Mb = g.support.getSetAttribute;
    g.fn.extend({
        attr: function(b, c) {
            return g.access(this, g.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                g.removeAttr(this, b)
            })
        },
        prop: function(b, c) {
            return g.access(this, g.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(b) {
            return b = g.propFix[b] || b, this.each(function() {
                try {
                    this[b] = c, delete this[b]
                } catch (d) {}
            })
        },
        addClass: function(b) {
            var c, d, e, f, l, j, m;
            if (g.isFunction(b)) return this.each(function(c) {
                g(this).addClass(b.call(this, c, this.className))
            });
            if (b && "string" == typeof b) {
                c = b.split(ea);
                d = 0;
                for (e = this.length; d < e; d++)
                    if (f = this[d], 1 === f.nodeType)
                        if (!f.className && 1 === c.length) f.className = b;
                        else {
                            l = " " + f.className + " ";
                            j = 0;
                            for (m = c.length; j < m; j++) 0 > l.indexOf(" " + c[j] + " ") && (l += c[j] + " ");
                            f.className = g.trim(l)
                        }
            }
            return this
        },
        removeClass: function(b) {
            var d, e, f, l, j, m, p;
            if (g.isFunction(b)) return this.each(function(c) {
                g(this).removeClass(b.call(this, c, this.className))
            });
            if (b && "string" == typeof b || b === c) {
                d = (b || "").split(ea);
                m = 0;
                for (p = this.length; m < p; m++)
                    if (f = this[m], 1 === f.nodeType && f.className) {
                        e = (" " + f.className + " ").replace(Kb, " ");
                        l = 0;
                        for (j = d.length; l < j; l++)
                            for (; 0 <= e.indexOf(" " + d[l] + " ");) e = e.replace(" " + d[l] + " ", " ");
                        f.className = b ? g.trim(e) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, c) {
            var d = typeof b,
                e = "boolean" == typeof c;
            return g.isFunction(b) ? this.each(function(d) {
                g(this).toggleClass(b.call(this, d, this.className, c), c)
            }) : this.each(function() {
                if ("string" === d)
                    for (var f, l = 0, j = g(this), m = c, p = b.split(ea); f = p[l++];) m = e ? m : !j.hasClass(f), j[m ? "addClass" : "removeClass"](f);
                else if ("undefined" === d || "boolean" === d) this.className && g._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : g._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var c = 0, d = this.length; c < d; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Kb, " ").indexOf(b)) return !0;
            return !1
        },
        val: function(b) {
            var d, e, f, l = this[0];
            if (arguments.length) return f = g.isFunction(b), this.each(function(e) {
                var l, N = g(this);
                if (1 === this.nodeType && (f ? l = b.call(this, e, N.val()) : l = b, null == l ? l = "" : "number" == typeof l ? l += "" : g.isArray(l) && (l = g.map(l, function(b) {
                        return null == b ? "" : b + ""
                    })), d = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()], !d || !("set" in d) || d.set(this, l, "value") === c)) this.value = l
            });
            if (l) return d = g.valHooks[l.type] || g.valHooks[l.nodeName.toLowerCase()], d && "get" in d && (e = d.get(l, "value")) !== c ? e : (e = l.value, "string" == typeof e ? e.replace(Nc, "") : null == e ? "" : e)
        }
    });
    g.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = b.attributes.value;
                    return !c || c.specified ? b.value : b.text
                }
            },
            select: {
                get: function(b) {
                    var c, d, e = b.selectedIndex,
                        f = [],
                        l = b.options,
                        j = "select-one" === b.type;
                    if (0 > e) return null;
                    b = j ? e : 0;
                    for (d = j ? e + 1 : l.length; b < d; b++)
                        if (c = l[b], c.selected && (g.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !g.nodeName(c.parentNode, "optgroup"))) {
                            c = g(c).val();
                            if (j) return c;
                            f.push(c)
                        }
                    return j && !f.length && l.length ? g(l[e]).val() : f
                },
                set: function(b, c) {
                    var d = g.makeArray(c);
                    return g(b).find("option").each(function() {
                        this.selected = 0 <= g.inArray(g(this).val(), d)
                    }), d.length || (b.selectedIndex = -1), d
                }
            }
        },
        attrFn: {},
        attr: function(b, d, e, f) {
            var l, j, m = b.nodeType;
            if (b && !(3 === m || 8 === m || 2 === m)) {
                if (f && g.isFunction(g.fn[d])) return g(b)[d](e);
                if ("undefined" == typeof b.getAttribute) return g.prop(b, d, e);
                (f = 1 !== m || !g.isXMLDoc(b)) && (d = d.toLowerCase(), j = g.attrHooks[d] || (Lb.test(d) ? Ib : Z));
                if (e !== c) {
                    if (null === e) {
                        g.removeAttr(b, d);
                        return
                    }
                    return j && "set" in j && f && (l = j.set(b, e, d)) !== c ? l : (b.setAttribute(d, e + ""), e)
                }
                return j && "get" in j && f && null !== (l = j.get(b, d)) ? l : (l = b.getAttribute(d), null === l ? c : l)
            }
        },
        removeAttr: function(b, c) {
            var d, e, f, l, j = 0;
            if (c && 1 === b.nodeType)
                for (e = c.split(ea); j < e.length; j++)(f = e[j]) && (d = g.propFix[f] || f, l = Lb.test(f), l || g.attr(b, f, ""), b.removeAttribute(Mb ? f : d), l && d in b && (b[d] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (Oc.test(b.nodeName) && b.parentNode) g.error("type property can't be changed");
                    else if (!g.support.radioValue && "radio" === c && g.nodeName(b, "input")) {
                        var d = b.value;
                        return b.setAttribute("type", c), d && (b.value = d), c
                    }
                }
            },
            value: {
                get: function(b, c) {
                    return Z && g.nodeName(b, "button") ? Z.get(b, c) : c in b ? b.value : null
                },
                set: function(b, c, d) {
                    if (Z && g.nodeName(b, "button")) return Z.set(b, c, d);
                    b.value = c
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, d, e) {
            var f, l, j, m = b.nodeType;
            if (b && !(3 === m || 8 === m || 2 === m)) return j = 1 !== m || !g.isXMLDoc(b), j && (d = g.propFix[d] || d, l = g.propHooks[d]), e !== c ? l && "set" in l && (f = l.set(b, e, d)) !== c ? f : b[d] = e : l && "get" in l && null !== (f = l.get(b, d)) ? f : b[d]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var d = b.getAttributeNode("tabindex");
                    return d && d.specified ? parseInt(d.value, 10) : Pc.test(b.nodeName) || Qc.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    Ib = {
        get: function(b, d) {
            var e, f = g.prop(b, d);
            return !0 === f || "boolean" != typeof f && (e = b.getAttributeNode(d)) && !1 !== e.nodeValue ? d.toLowerCase() : c
        },
        set: function(b, c, d) {
            var e;
            return !1 === c ? g.removeAttr(b, d) : (e = g.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
        }
    };
    Mb || (Jb = {
        name: !0,
        id: !0,
        coords: !0
    }, Z = g.valHooks.button = {
        get: function(b, d) {
            var e;
            return e = b.getAttributeNode(d), e && (Jb[d] ? "" !== e.value : e.specified) ? e.value : c
        },
        set: function(b, c, d) {
            var e = b.getAttributeNode(d);
            return e || (e = u.createAttribute(d), b.setAttributeNode(e)), e.value = c + ""
        }
    }, g.each(["width", "height"], function(b, c) {
        g.attrHooks[c] = g.extend(g.attrHooks[c], {
            set: function(b, d) {
                if ("" === d) return b.setAttribute(c, "auto"), d
            }
        })
    }), g.attrHooks.contenteditable = {
        get: Z.get,
        set: function(b, c, d) {
            "" === c && (c = "false");
            Z.set(b, c, d)
        }
    });
    g.support.hrefNormalized || g.each(["href", "src", "width", "height"], function(b, d) {
        g.attrHooks[d] = g.extend(g.attrHooks[d], {
            get: function(b) {
                b = b.getAttribute(d, 2);
                return null === b ? c : b
            }
        })
    });
    g.support.style || (g.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() || c
        },
        set: function(b, c) {
            return b.style.cssText = c + ""
        }
    });
    g.support.optSelected || (g.propHooks.selected = g.extend(g.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }));
    g.support.enctype || (g.propFix.enctype = "encoding");
    g.support.checkOn || g.each(["radio", "checkbox"], function() {
        g.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    g.each(["radio", "checkbox"], function() {
        g.valHooks[this] = g.extend(g.valHooks[this], {
            set: function(b, c) {
                if (g.isArray(c)) return b.checked = 0 <= g.inArray(g(b).val(), c)
            }
        })
    });
    var $a = /^(?:textarea|input|select)$/i,
        Nb = /^([^\.]*|)(?:\.(.+)|)$/,
        Rc = /(?:^|\s)hover(\.\S+|)\b/,
        Sc = /^key/,
        Tc = /^(?:mouse|contextmenu)|click/,
        Ob = /^(?:focusinfocus|focusoutblur)$/,
        Pb = function(b) {
            return g.event.special.hover ? b : b.replace(Rc, "mouseenter$1 mouseleave$1")
        };
    g.event = {
        add: function(b, d, e, f, l) {
            var j, m, p, r, s, q, n, t, v;
            if (!(3 === b.nodeType || 8 === b.nodeType || !d || !e || !(j = g._data(b)))) {
                e.handler && (n = e, e = n.handler, l = n.selector);
                e.guid || (e.guid = g.guid++);
                (p = j.events) || (j.events = p = {});
                (m = j.handle) || (j.handle = m = function(b) {
                    return "undefined" != typeof g && (!b || g.event.triggered !== b.type) ? g.event.dispatch.apply(m.elem, arguments) : c
                }, m.elem = b);
                d = g.trim(Pb(d)).split(" ");
                for (j = 0; j < d.length; j++) {
                    r = Nb.exec(d[j]) || [];
                    s = r[1];
                    q = (r[2] || "").split(".").sort();
                    v = g.event.special[s] || {};
                    s = (l ? v.delegateType : v.bindType) || s;
                    v = g.event.special[s] || {};
                    r = g.extend({
                        type: s,
                        origType: r[1],
                        data: f,
                        handler: e,
                        guid: e.guid,
                        selector: l,
                        needsContext: l && g.expr.match.needsContext.test(l),
                        namespace: q.join(".")
                    }, n);
                    t = p[s];
                    if (!t && (t = p[s] = [], t.delegateCount = 0, !v.setup || !1 === v.setup.call(b, f, q, m))) b.addEventListener ? b.addEventListener(s, m, !1) : b.attachEvent && b.attachEvent("on" + s, m);
                    v.add && (v.add.call(b, r), r.handler.guid || (r.handler.guid = e.guid));
                    l ? t.splice(t.delegateCount++, 0, r) : t.push(r);
                    g.event.global[s] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, c, d, e, f) {
            var l, j, m, p, r, s, q, n, t, v, u = g.hasData(b) && g._data(b);
            if (u && (q = u.events)) {
                c = g.trim(Pb(c || "")).split(" ");
                for (l = 0; l < c.length; l++)
                    if (j = Nb.exec(c[l]) || [], m = p = j[1], j = j[2], m) {
                        n = g.event.special[m] || {};
                        m = (e ? n.delegateType : n.bindType) || m;
                        t = q[m] || [];
                        r = t.length;
                        j = j ? RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (s = 0; s < t.length; s++) v = t[s], (f || p === v.origType) && (!d || d.guid === v.guid) && (!j || j.test(v.namespace)) && (!e || e === v.selector || "**" === e && v.selector) && (t.splice(s--, 1), v.selector && t.delegateCount--, n.remove && n.remove.call(b, v));
                        0 === t.length && r !== t.length && ((!n.teardown || !1 === n.teardown.call(b, j, u.handle)) && g.removeEvent(b, m, u.handle), delete q[m])
                    } else
                        for (m in q) g.event.remove(b, m + c[l], d, e, !0);
                g.isEmptyObject(q) && (delete u.handle, g.removeData(b, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(d, e, f, l) {
            if (!f || 3 !== f.nodeType && 8 !== f.nodeType) {
                var j, m, p, r, s, q, n, t = d.type || d;
                r = [];
                if (!Ob.test(t + g.event.triggered) && (0 <= t.indexOf("!") && (t = t.slice(0, -1), j = !0), 0 <= t.indexOf(".") && (r = t.split("."), t = r.shift(), r.sort()), f && !g.event.customEvent[t] || g.event.global[t]))
                    if (d = "object" == typeof d ? d[g.expando] ? d : new g.Event(t, d) : new g.Event(t), d.type = t, d.isTrigger = !0, d.exclusive = j, d.namespace = r.join("."), d.namespace_re = d.namespace ? RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r = 0 > t.indexOf(":") ? "on" + t : "", f) {
                        if (d.result = c, d.target || (d.target = f), e = null != e ? g.makeArray(e) : [], e.unshift(d), s = g.event.special[t] || {}, !(s.trigger && !1 === s.trigger.apply(f, e))) {
                            n = [
                                [f, s.bindType || t]
                            ];
                            if (!l && !s.noBubble && !g.isWindow(f)) {
                                m = s.delegateType || t;
                                j = Ob.test(m + t) ? f : f.parentNode;
                                for (p = f; j; j = j.parentNode) n.push([j, m]), p = j;
                                p === (f.ownerDocument || u) && n.push([p.defaultView || p.parentWindow || b, m])
                            }
                            for (m = 0; m < n.length && !d.isPropagationStopped(); m++) j = n[m][0], d.type = n[m][1], (q = (g._data(j, "events") || {})[d.type] && g._data(j, "handle")) && q.apply(j, e), (q = r && j[r]) && g.acceptData(j) && q.apply && !1 === q.apply(j, e) && d.preventDefault();
                            return d.type = t, !l && !d.isDefaultPrevented() && (!s._default || !1 === s._default.apply(f.ownerDocument, e)) && ("click" !== t || !g.nodeName(f, "a")) && g.acceptData(f) && r && f[t] && ("focus" !== t && "blur" !== t || 0 !== d.target.offsetWidth) && !g.isWindow(f) && (p = f[r], p && (f[r] = null), g.event.triggered = t, f[t](), g.event.triggered = c, p && (f[r] = p)), d.result
                        }
                    } else
                        for (m in f = g.cache, f) f[m].events && f[m].events[t] && g.event.trigger(d, e, f[m].handle.elem, !0)
            }
        },
        dispatch: function(d) {
            d = g.event.fix(d || b.event);
            var e, f, l, j, m, p, r = (g._data(this, "events") || {})[d.type] || [],
                s = r.delegateCount,
                q = X.call(arguments),
                n = !d.exclusive && !d.namespace,
                t = g.event.special[d.type] || {},
                v = [];
            q[0] = d;
            d.delegateTarget = this;
            if (!(t.preDispatch && !1 === t.preDispatch.call(this, d))) {
                if (s && (!d.button || "click" !== d.type))
                    for (f = d.target; f != this; f = f.parentNode || this)
                        if (!0 !== f.disabled || "click" !== d.type) {
                            j = {};
                            m = [];
                            for (e = 0; e < s; e++) l = r[e], p = l.selector, j[p] === c && (j[p] = l.needsContext ? 0 <= g(p, this).index(f) : g.find(p, this, null, [f]).length), j[p] && m.push(l);
                            m.length && v.push({
                                elem: f,
                                matches: m
                            })
                        }
                r.length > s && v.push({
                    elem: this,
                    matches: r.slice(s)
                });
                for (e = 0; e < v.length && !d.isPropagationStopped(); e++) {
                    j = v[e];
                    d.currentTarget = j.elem;
                    for (f = 0; f < j.matches.length && !d.isImmediatePropagationStopped(); f++)
                        if (l = j.matches[f], n || !d.namespace && !l.namespace || d.namespace_re && d.namespace_re.test(l.namespace)) d.data = l.data, d.handleObj = l, l = ((g.event.special[l.origType] || {}).handle || l.handler).apply(j.elem, q), l !== c && (d.result = l, !1 === l && (d.preventDefault(), d.stopPropagation()))
                }
                return t.postDispatch && t.postDispatch.call(this, d), d.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, c) {
                return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, d) {
                var e, f, l, g = d.button,
                    j = d.fromElement;
                return null == b.pageX && null != d.clientX && (e = b.target.ownerDocument || u, f = e.documentElement, l = e.body, b.pageX = d.clientX + (f && f.scrollLeft || l && l.scrollLeft || 0) - (f && f.clientLeft || l && l.clientLeft || 0), b.pageY = d.clientY + (f && f.scrollTop || l && l.scrollTop || 0) - (f && f.clientTop || l && l.clientTop || 0)), !b.relatedTarget && j && (b.relatedTarget = j === b.target ? d.toElement : j), !b.which && g !== c && (b.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0), b
            }
        },
        fix: function(b) {
            if (b[g.expando]) return b;
            var c, d, e = b,
                f = g.event.fixHooks[b.type] || {},
                l = f.props ? this.props.concat(f.props) : this.props;
            b = g.Event(e);
            for (c = l.length; c;) d = l[--c], b[d] = e[d];
            return b.target || (b.target = e.srcElement || u), 3 === b.target.nodeType && (b.target = b.target.parentNode), b.metaKey = !!b.metaKey, f.filter ? f.filter(b, e) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b, c, d) {
                    g.isWindow(this) && (this.onbeforeunload = d)
                },
                teardown: function(b, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, c, d, e) {
            b = g.extend(new g.Event, d, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            e ? g.event.trigger(b, null, c) : g.event.dispatch.call(c, b);
            b.isDefaultPrevented() && d.preventDefault()
        }
    };
    g.event.handle = g.event.dispatch;
    g.removeEvent = u.removeEventListener ? function(b, c, d) {
        b.removeEventListener && b.removeEventListener(c, d, !1)
    } : function(b, c, d) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, d))
    };
    g.Event = function(b, c) {
        if (this instanceof g.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? j : e) : this.type = b, c && g.extend(this, c), this.timeStamp = b && b.timeStamp || g.now(), this[g.expando] = !0;
        else return new g.Event(b, c)
    };
    g.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = j;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = j;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = j;
            this.stopPropagation()
        },
        isDefaultPrevented: e,
        isPropagationStopped: e,
        isImmediatePropagationStopped: e
    };
    g.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b, c) {
        g.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var d, e = b.relatedTarget,
                    x = b.handleObj;
                if (!e || e !== this && !g.contains(this, e)) b.type = x.origType, d = x.handler.apply(this, arguments), b.type = c;
                return d
            }
        }
    });
    g.support.submitBubbles || (g.event.special.submit = {
        setup: function() {
            if (g.nodeName(this, "form")) return !1;
            g.event.add(this, "click._submit keypress._submit", function(b) {
                b = b.target;
                (b = g.nodeName(b, "input") || g.nodeName(b, "button") ? b.form : c) && !g._data(b, "_submit_attached") && (g.event.add(b, "submit._submit", function(b) {
                    b._submit_bubble = !0
                }), g._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && g.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (g.nodeName(this, "form")) return !1;
            g.event.remove(this, "._submit")
        }
    });
    g.support.changeBubbles || (g.event.special.change = {
        setup: function() {
            if ($a.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) g.event.add(this, "propertychange._change", function(b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }), g.event.add(this, "click._change", function(b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    g.event.simulate("change", this, b, !0)
                });
                return !1
            }
            g.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                $a.test(b.nodeName) && !g._data(b, "_change_attached") && (g.event.add(b, "change._change", function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger && g.event.simulate("change", this.parentNode, b, !0)
                }), g._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) {
            var c = b.target;
            if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return g.event.remove(this, "._change"), !$a.test(this.nodeName)
        }
    });
    g.support.focusinBubbles || g.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var d = 0,
            e = function(b) {
                g.event.simulate(c, b.target, g.event.fix(b), !0)
            };
        g.event.special[c] = {
            setup: function() {
                0 === d++ && u.addEventListener(b, e, !0)
            },
            teardown: function() {
                0 === --d && u.removeEventListener(b, e, !0)
            }
        }
    });
    g.fn.extend({
        on: function(b, d, f, l, j) {
            var m, p;
            if ("object" == typeof b) {
                "string" != typeof d && (f = f || d, d = c);
                for (p in b) this.on(p, d, f, b[p], j);
                return this
            }
            null == f && null == l ? (l = d, f = d = c) : null == l && ("string" == typeof d ? (l = f, f = c) : (l = f, f = d, d = c));
            if (!1 === l) l = e;
            else if (!l) return this;
            return 1 === j && (m = l, l = function(b) {
                return g().off(b), m.apply(this, arguments)
            }, l.guid = m.guid || (m.guid = g.guid++)), this.each(function() {
                g.event.add(this, b, l, f, d)
            })
        },
        one: function(b, c, d, e) {
            return this.on(b, c, d, e, 1)
        },
        off: function(b, d, f) {
            var l, j;
            if (b && b.preventDefault && b.handleObj) return l = b.handleObj, g(b.delegateTarget).off(l.namespace ? l.origType + "." + l.namespace : l.origType, l.selector, l.handler), this;
            if ("object" == typeof b) {
                for (j in b) this.off(j, d, b[j]);
                return this
            }
            if (!1 === d || "function" == typeof d) f = d, d = c;
            return !1 === f && (f = e), this.each(function() {
                g.event.remove(this, b, f, d)
            })
        },
        bind: function(b, c, d) {
            return this.on(b, null, c, d)
        },
        unbind: function(b, c) {
            return this.off(b, null, c)
        },
        live: function(b, c, d) {
            return g(this.context).on(b, this.selector, c, d), this
        },
        die: function(b, c) {
            return g(this.context).off(b, this.selector || "**", c), this
        },
        delegate: function(b, c, d, e) {
            return this.on(c, b, d, e)
        },
        undelegate: function(b, c, d) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
        },
        trigger: function(b, c) {
            return this.each(function() {
                g.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            if (this[0]) return g.event.trigger(b, c, this[0], !0)
        },
        toggle: function(b) {
            var c = arguments,
                d = b.guid || g.guid++,
                e = 0,
                f = function(d) {
                    var f = (g._data(this, "lastToggle" + b.guid) || 0) % e;
                    return g._data(this, "lastToggle" + b.guid, f + 1), d.preventDefault(), c[f].apply(this, arguments) || !1
                };
            for (f.guid = d; e < c.length;) c[e++].guid = d;
            return this.click(f)
        },
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(b, c) {
        g.fn[c] = function(b, d) {
            return null == d && (d = b, b = null), 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
        };
        Sc.test(c) && (g.event.fixHooks[c] = g.event.keyHooks);
        Tc.test(c) && (g.event.fixHooks[c] = g.event.mouseHooks)
    });
    var Uc = b,
        G = function(b, c, d, e) {
            d = d || [];
            c = c || U;
            var f, l, g, j, m = c.nodeType;
            if (!b || "string" != typeof b) return d;
            if (1 !== m && 9 !== m) return [];
            g = Ha(c);
            if (!g && !e && (f = Vc.exec(b)))
                if (j = f[1])
                    if (9 === m) {
                        l = c.getElementById(j);
                        if (!l || !l.parentNode) return d;
                        if (l.id === j) return d.push(l), d
                    } else {
                        if (c.ownerDocument && (l = c.ownerDocument.getElementById(j)) && Qb(c, l) && l.id === j) return d.push(l), d
                    }
            else {
                if (f[2]) return ma.apply(d, na.call(c.getElementsByTagName(b), 0)), d;
                if ((j = f[3]) && Rb && c.getElementsByClassName) return ma.apply(d, na.call(c.getElementsByClassName(j), 0)), d
            }
            return ab(b.replace(Ia, "$1"), c, d, e, g)
        },
        sa = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Sb = function(b) {
            return function(c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        },
        ha = function(b) {
            return V(function(c) {
                return c = +c, V(function(d, e) {
                    for (var f, l = b([], d.length, c), g = l.length; g--;) d[f = l[g]] && (d[f] = !(e[f] = d[f]))
                })
            })
        },
        Ja = function(b, c, d) {
            if (b === c) return d;
            for (b = b.nextSibling; b;) {
                if (b === c) return -1;
                b = b.nextSibling
            }
            return 1
        },
        La = function(b, c) {
            var d, e, f, l, g, j, m;
            if (g = Tb[I][b]) return c ? 0 : g.slice(0);
            g = b;
            j = [];
            for (m = J.preFilter; g;) {
                if (!d || (e = Wc.exec(g))) e && (g = g.slice(e[0].length)), j.push(f = []);
                d = !1;
                if (e = Xc.exec(g)) f.push(d = new Ub(e.shift())), g = g.slice(d.length), d.type = e[0].replace(Ia, " ");
                for (l in J.filter)(e = Ka[l].exec(g)) && (!m[l] || (e = m[l](e, U, !0))) && (f.push(d = new Ub(e.shift())), g = g.slice(d.length), d.type = l, d.matches = e);
                if (!d) break
            }
            return c ? g.length : g ? G.error(b) : Tb(b, j).slice(0)
        },
        cb = function(b, c, d) {
            var e = c.dir,
                f = d && "parentNode" === c.dir,
                l = Yc++;
            return c.first ? function(c, d, l) {
                for (; c = c[e];)
                    if (f || 1 === c.nodeType) return b(c, d, l)
            } : function(c, d, g) {
                if (g)
                    for (; c = c[e];) {
                        if ((f || 1 === c.nodeType) && b(c, d, g)) return c
                    } else
                        for (var j, y = ta + " " + l + " ", m = y + bb; c = c[e];)
                            if (f || 1 === c.nodeType) {
                                if ((j = c[I]) === m) return c.sizset;
                                if ("string" == typeof j && 0 === j.indexOf(y)) {
                                    if (c.sizset) return c
                                } else {
                                    c[I] = m;
                                    if (b(c, d, g)) return c.sizset = !0, c;
                                    c.sizset = !1
                                }
                            }
            }
        },
        db = function(b) {
            return 1 < b.length ? function(c, d, e) {
                for (var f = b.length; f--;)
                    if (!b[f](c, d, e)) return !1;
                return !0
            } : b[0]
        },
        Ma = function(b, c, d, e, f) {
            for (var l, g = [], j = 0, m = b.length, p = null != c; j < m; j++)
                if (l = b[j])
                    if (!d || d(l, e, f)) g.push(l), p && c.push(j);
            return g
        },
        eb = function(b, c, d, e, f, l) {
            return e && !e[I] && (e = eb(e)), f && !f[I] && (f = eb(f, l)), V(function(l, g, j, m) {
                if (!l || !f) {
                    var p, r, s = [],
                        q = [],
                        n = g.length;
                    if (!(r = l)) {
                        r = c || "*";
                        var L = j.nodeType ? [j] : j,
                            t = [];
                        p = 0;
                        for (var v = L.length; p < v; p++) G(r, L[p], t, l);
                        r = t
                    }
                    L = b && (l || !c) ? Ma(r, s, b, j, m) : r;
                    t = d ? f || (l ? b : n || e) ? [] : g : L;
                    d && d(L, t, j, m);
                    if (e) {
                        r = Ma(t, q);
                        e(r, [], j, m);
                        for (j = r.length; j--;)
                            if (p = r[j]) t[q[j]] = !(L[q[j]] = p)
                    }
                    if (l)
                        for (j = b && t.length; j--;) {
                            if (p = t[j]) l[s[j]] = !(g[s[j]] = p)
                        } else t = Ma(t === g ? t.splice(n, t.length) : t), f ? f(null, g, t, m) : ma.apply(g, t)
                }
            })
        },
        fb = function(b) {
            var c, d, e, f = b.length,
                l = J.relative[b[0].type];
            d = l || J.relative[" "];
            for (var g = l ? 1 : 0, j = cb(function(b) {
                    return b === c
                }, d, !0), m = cb(function(b) {
                    return -1 < Vb.call(c, b)
                }, d, !0), p = [
                    function(b, d, e) {
                        return !l && (e || d !== Na) || ((c = d).nodeType ? j(b, d, e) : m(b, d, e))
                    }
                ]; g < f; g++)
                if (d = J.relative[b[g].type]) p = [cb(db(p), d)];
                else {
                    d = J.filter[b[g].type].apply(null, b[g].matches);
                    if (d[I]) {
                        for (e = ++g; e < f && !J.relative[b[e].type]; e++);
                        return eb(1 < g && db(p), 1 < g && b.slice(0, g - 1).join("").replace(Ia, "$1"), d, g < e && fb(b.slice(g, e)), e < f && fb(b = b.slice(e)), e < f && b.join(""))
                    }
                    p.push(d)
                }
            return db(p)
        },
        ab = function(b, c, d, e, f) {
            var l, g, j, m, p = La(b);
            if (!e && 1 === p.length) {
                g = p[0] = p[0].slice(0);
                if (2 < g.length && "ID" === (j = g[0]).type && 9 === c.nodeType && !f && J.relative[g[1].type]) {
                    c = J.find.ID(j.matches[0].replace(ia, ""), c, f)[0];
                    if (!c) return d;
                    b = b.slice(g.shift().length)
                }
                for (l = Ka.POS.test(b) ? -1 : g.length - 1; 0 <= l; l--) {
                    j = g[l];
                    if (J.relative[m = j.type]) break;
                    if (m = J.find[m])
                        if (e = m(j.matches[0].replace(ia, ""), gb.test(g[0].type) && c.parentNode || c, f)) {
                            g.splice(l, 1);
                            b = e.length && g.join("");
                            if (!b) return ma.apply(d, na.call(e, 0)), d;
                            break
                        }
                }
            }
            return hb(b, p)(e, c, f, d, gb.test(b)), d
        },
        Wb = function() {},
        bb, ib, J, Oa, Ha, Qb, hb, jb, ua, Na, Xb = !0,
        I = ("sizcache" + Math.random()).replace(".", ""),
        Ub = String,
        U = Uc.document,
        T = U.documentElement,
        ta = 0,
        Yc = 0,
        Zc = [].pop,
        ma = [].push,
        na = [].slice,
        Vb = [].indexOf || function(b) {
            for (var c = 0, d = this.length; c < d; c++)
                if (this[c] === b) return c;
            return -1
        },
        V = function(b, c) {
            return b[I] = null == c || c, b
        },
        kb = function() {
            var b = {},
                c = [];
            return V(function(d, e) {
                return c.push(d) > J.cacheLength && delete b[c.shift()], b[d] = e
            }, b)
        },
        Yb = kb(),
        Tb = kb(),
        Zb = kb(),
        $b = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        lb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + $b + ")|[^:]|\\\\.)*|.*))\\)|)",
        Ia = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Wc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Xc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        $c = RegExp(lb),
        Vc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        gb = /[\x20\t\r\n\f]*[+~]/,
        ad = /h\d/i,
        bd = /input|select|textarea|button/i,
        ia = /\\(?!\\)/g,
        Ka = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + $b),
            PSEUDO: RegExp("^" + lb),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        aa = function(b) {
            var c = U.createElement("div");
            try {
                return b(c)
            } catch (d) {
                return !1
            } finally {}
        },
        cd = aa(function(b) {
            return b.appendChild(U.createComment("")), !b.getElementsByTagName("*").length
        }),
        dd = aa(function(b) {
            return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
        }),
        ed = aa(function(b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }),
        Rb = aa(function(b) {
            return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
        }),
        fd = aa(function(b) {
            b.id = I + 0;
            b.innerHTML = "<a name='" + I + "'></a><div name='" + I + "'></div>";
            T.insertBefore(b, T.firstChild);
            var c = U.getElementsByName && U.getElementsByName(I).length === 2 + U.getElementsByName(I + 0).length;
            return ib = !U.getElementById(I), T.removeChild(b), c
        });
    try {
        na.call(T.childNodes, 0)[0].nodeType
    } catch (Pd) {
        na = function(b) {
            for (var c, d = []; c = this[b]; b++) d.push(c);
            return d
        }
    }
    G.matches = function(b, c) {
        return G(b, null, null, c)
    };
    G.matchesSelector = function(b, c) {
        return 0 < G(c, null, null, [b]).length
    };
    Oa = G.getText = function(b) {
        var c, d = "",
            e = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b = b.nextSibling) d += Oa(b)
            } else {
                if (3 === c || 4 === c) return b.nodeValue
            }
        else
            for (; c = b[e]; e++) d += Oa(c);
        return d
    };
    Ha = G.isXML = function(b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    };
    Qb = G.contains = T.contains ? function(b, c) {
        var d = 9 === b.nodeType ? b.documentElement : b,
            e = c && c.parentNode;
        return b === e || !(!e || !(1 === e.nodeType && d.contains && d.contains(e)))
    } : T.compareDocumentPosition ? function(b, c) {
        return c && !!(b.compareDocumentPosition(c) & 16)
    } : function(b, c) {
        for (; c = c.parentNode;)
            if (c === b) return !0;
        return !1
    };
    G.attr = function(b, c) {
        var d, e = Ha(b);
        return e || (c = c.toLowerCase()), (d = J.attrHandle[c]) ? d(b) : e || ed ? b.getAttribute(c) : (d = b.getAttributeNode(c), d ? "boolean" == typeof b[c] ? b[c] ? c : null : d.specified ? d.value : null : null)
    };
    J = G.selectors = {
        cacheLength: 50,
        createPseudo: V,
        match: Ka,
        attrHandle: dd ? {} : {
            href: function(b) {
                return b.getAttribute("href", 2)
            },
            type: function(b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: ib ? function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (b = c.getElementById(b)) && b.parentNode ? [b] : []
            } : function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            },
            TAG: cd ? function(b, c) {
                if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b)
            } : function(b, c) {
                var d = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var e, f = [], l = 0; e = d[l]; l++) 1 === e.nodeType && f.push(e);
                    return f
                }
                return d
            },
            NAME: fd && function(b, c) {
                if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name)
            },
            CLASS: Rb && function(b, c, d) {
                if ("undefined" !== typeof c.getElementsByClassName && !d) return c.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(ia, ""), b[3] = (b[4] || b[5] || "").replace(ia, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || G.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) : 2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && G.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c, d;
                if (Ka.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3];
                else if (c = b[4]) $c.test(c) && (d = La(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d), b[0] = b[0].slice(0, d)), b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: ib ? function(b) {
                return b = b.replace(ia, ""),
                    function(c) {
                        return c.getAttribute("id") === b
                    }
            } : function(b) {
                return b = b.replace(ia, ""),
                    function(c) {
                        return (c = "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id")) && c.value === b
                    }
            },
            TAG: function(b) {
                return "*" === b ? function() {
                    return !0
                } : (b = b.replace(ia, "").toLowerCase(), function(c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                })
            },
            CLASS: function(b) {
                var c = Yb[I][b];
                return c || (c = Yb(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function(b) {
                        return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                    }
            },
            ATTR: function(b, c, d) {
                return function(e) {
                    e = G.attr(e, b);
                    return null == e ? "!=" === c : c ? (e += "", "=" === c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.substr(e.length - d.length) === d : "~=" === c ? -1 < (" " + e + " ").indexOf(d) : "|=" === c ? e === d || e.substr(0, d.length + 1) === d + "-" : !1) : !0
                }
            },
            CHILD: function(b, c, d, e) {
                return "nth" === b ? function(b) {
                    var c, f;
                    c = b.parentNode;
                    if (1 === d && 0 === e) return !0;
                    if (c) {
                        f = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (f++, b === c)); c = c.nextSibling);
                    }
                    return f -= e, f === d || 0 === f % d && 0 <= f / d
                } : function(c) {
                    var d = c;
                    switch (b) {
                        case "only":
                        case "first":
                            for (; d = d.previousSibling;)
                                if (1 === d.nodeType) return !1;
                            if ("first" === b) return !0;
                            d = c;
                        case "last":
                            for (; d = d.nextSibling;)
                                if (1 === d.nodeType) return !1;
                            return !0
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, e = J.pseudos[b] || J.setFilters[b.toLowerCase()] || G.error("unsupported pseudo: " + b);
                return e[I] ? e(c) : 1 < e.length ? (d = [b, b, "", c], J.setFilters.hasOwnProperty(b.toLowerCase()) ? V(function(b, d) {
                    for (var f, l = e(b, c), g = l.length; g--;) f = Vb.call(b, l[g]), b[f] = !(d[f] = l[g])
                }) : function(b) {
                    return e(b, 0, d)
                }) : e
            }
        },
        pseudos: {
            not: V(function(b) {
                var c = [],
                    d = [],
                    e = hb(b.replace(Ia, "$1"));
                return e[I] ? V(function(b, c, d, f) {
                    f = e(b, null, f, []);
                    for (var l = b.length; l--;)
                        if (d = f[l]) b[l] = !(c[l] = d)
                }) : function(b, f, l) {
                    return c[0] = b, e(c, null, l, d), !d.pop()
                }
            }),
            has: V(function(b) {
                return function(c) {
                    return 0 < G(b, c).length
                }
            }),
            contains: V(function(b) {
                return function(c) {
                    return -1 < (c.textContent || c.innerText || Oa(c)).indexOf(b)
                }
            }),
            enabled: function(b) {
                return !1 === b.disabled
            },
            disabled: function(b) {
                return !0 === b.disabled
            },
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" === c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            parent: function(b) {
                return !J.pseudos.empty(b)
            },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function(b) {
                return ad.test(b.nodeName)
            },
            text: function(b) {
                var c, d;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c)
            },
            radio: sa("radio"),
            checkbox: sa("checkbox"),
            file: sa("file"),
            password: sa("password"),
            image: sa("image"),
            submit: Sb("submit"),
            reset: Sb("reset"),
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function(b) {
                return bd.test(b.nodeName)
            },
            focus: function(b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
            },
            active: function(b) {
                return b === b.ownerDocument.activeElement
            },
            first: ha(function() {
                return [0]
            }),
            last: ha(function(b, c) {
                return [c - 1]
            }),
            eq: ha(function(b, c, d) {
                return [0 > d ? d + c : d]
            }),
            even: ha(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: ha(function(b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: ha(function(b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: ha(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    jb = T.compareDocumentPosition ? function(b, c) {
        return b === c ? (ua = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    } : function(b, c) {
        if (b === c) return ua = !0, 0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var d, e, f = [],
            l = [];
        d = b.parentNode;
        e = c.parentNode;
        var g = d;
        if (d === e) return Ja(b, c);
        if (!d) return -1;
        if (!e) return 1;
        for (; g;) f.unshift(g), g = g.parentNode;
        for (g = e; g;) l.unshift(g), g = g.parentNode;
        d = f.length;
        e = l.length;
        for (g = 0; g < d && g < e; g++)
            if (f[g] !== l[g]) return Ja(f[g], l[g]);
        return g === d ? Ja(b, l[g], -1) : Ja(f[g], c, 1)
    };
    [0, 0].sort(jb);
    Xb = !ua;
    G.uniqueSort = function(b) {
        var c, d = 1;
        ua = Xb;
        b.sort(jb);
        if (ua)
            for (; c = b[d]; d++) c === b[d - 1] && b.splice(d--, 1);
        return b
    };
    G.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    hb = G.compile = function(b, c) {
        var d, e = [],
            f = [],
            l = Zb[I][b];
        if (!l) {
            c || (c = La(b));
            for (d = c.length; d--;) l = fb(c[d]), l[I] ? e.push(l) : f.push(l);
            var g = 0 < e.length,
                j = 0 < f.length,
                m = function(b, c, d, l, x) {
                    var p, y, r = [],
                        s = 0,
                        q = "0",
                        N = b && [],
                        n = null != x,
                        t = Na,
                        L = b || j && J.find.TAG("*", x && c.parentNode || c),
                        v = ta += null == t ? 1 : Math.E;
                    for (n && (Na = c !== U && c, bb = m.el); null != (x = L[q]); q++) {
                        if (j && x) {
                            for (p = 0; y = f[p]; p++)
                                if (y(x, c, d)) {
                                    l.push(x);
                                    break
                                }
                            n && (ta = v, bb = ++m.el)
                        }
                        g && ((x = !y && x) && s--, b && N.push(x))
                    }
                    s += q;
                    if (g && q !== s) {
                        for (p = 0; y = e[p]; p++) y(N, r, c, d);
                        if (b) {
                            if (0 < s)
                                for (; q--;) !N[q] && !r[q] && (r[q] = Zc.call(l));
                            r = Ma(r)
                        }
                        ma.apply(l, r);
                        n && !b && 0 < r.length && 1 < s + e.length && G.uniqueSort(l)
                    }
                    return n && (ta = v, Na = t), N
                };
            d = (m.el = 0, g ? V(m) : m);
            l = Zb(b, d)
        }
        return l
    };
    if (U.querySelectorAll) {
        var ac, gd = ab,
            hd = /'|\\/g,
            id = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            W = [":focus"],
            Pa = [":active", ":focus"],
            Qa = T.matchesSelector || T.mozMatchesSelector || T.webkitMatchesSelector || T.oMatchesSelector || T.msMatchesSelector;
        aa(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || W.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || W.push(":checked")
        });
        aa(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && W.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || W.push(":enabled", ":disabled")
        });
        W = RegExp(W.join("|"));
        ab = function(b, c, d, e, f) {
            if (!e && !f && (!W || !W.test(b))) {
                var l, g, j = !0,
                    m = I;
                g = c;
                l = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    l = La(b);
                    (j = c.getAttribute("id")) ? m = j.replace(hd, "\\$&"): c.setAttribute("id", m);
                    m = "[id='" + m + "'] ";
                    for (g = l.length; g--;) l[g] = m + l[g].join("");
                    g = gb.test(b) && c.parentNode || c;
                    l = l.join(",")
                }
                if (l) try {
                    return ma.apply(d, na.call(g.querySelectorAll(l), 0)), d
                } catch (p) {} finally {
                    j || c.removeAttribute("id")
                }
            }
            return gd(b, c, d, e, f)
        };
        Qa && (aa(function(b) {
            ac = Qa.call(b, "div");
            try {
                Qa.call(b, "[test!='']:sizzle"), Pa.push("!=", lb)
            } catch (c) {}
        }), Pa = RegExp(Pa.join("|")), G.matchesSelector = function(b, c) {
            c = c.replace(id, "='$1']");
            if (!Ha(b) && !Pa.test(c) && (!W || !W.test(c))) try {
                var d = Qa.call(b, c);
                if (d || ac || b.document && 11 !== b.document.nodeType) return d
            } catch (e) {}
            return 0 < G(c, null, null, [b]).length
        })
    }
    J.pseudos.nth = J.pseudos.eq;
    J.filters = Wb.prototype = J.pseudos;
    J.setFilters = new Wb;
    G.attr = g.attr;
    g.find = G;
    g.expr = G.selectors;
    g.expr[":"] = g.expr.pseudos;
    g.unique = G.uniqueSort;
    g.text = G.getText;
    g.isXMLDoc = G.isXML;
    g.contains = G.contains;
    var jd = /Until$/,
        kd = /^(?:parents|prev(?:Until|All))/,
        tc = /^.[^:#\[\.,]*$/,
        bc = g.expr.match.needsContext,
        ld = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    g.fn.extend({
        find: function(b) {
            var c, d, e, f, l, j, m = this;
            if ("string" != typeof b) return g(b).filter(function() {
                c = 0;
                for (d = m.length; c < d; c++)
                    if (g.contains(m[c], this)) return !0
            });
            j = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++)
                if (e = j.length, g.find(b, this[c], j), 0 < c)
                    for (f = e; f < j.length; f++)
                        for (l = 0; l < e; l++)
                            if (j[l] === j[f]) {
                                j.splice(f--, 1);
                                break
                            }
            return j
        },
        has: function(b) {
            var c, d = g(b, this),
                e = d.length;
            return this.filter(function() {
                for (c = 0; c < e; c++)
                    if (g.contains(this, d[c])) return !0
            })
        },
        not: function(b) {
            return this.pushStack(l(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(l(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !!b && ("string" == typeof b ? bc.test(b) ? 0 <= g(b, this.context).index(this[0]) : 0 < g.filter(b, this).length : 0 < this.filter(b).length)
        },
        closest: function(b, c) {
            for (var d, e = 0, f = this.length, l = [], j = bc.test(b) || "string" != typeof b ? g(b, c || this.context) : 0; e < f; e++)
                for (d = this[e]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                    if (j ? -1 < j.index(d) : g.find.matchesSelector(d, b)) {
                        l.push(d);
                        break
                    }
                    d = d.parentNode
                }
            return l = 1 < l.length ? g.unique(l) : l, this.pushStack(l, "closest", b)
        },
        index: function(b) {
            return b ? "string" == typeof b ? g.inArray(this[0], g(b)) : g.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(b, c) {
            var d = "string" == typeof b ? g(b, c) : g.makeArray(b && b.nodeType ? [b] : b),
                e = g.merge(this.get(), d);
            return this.pushStack(n(d[0]) || n(e[0]) ? e : g.unique(e))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    g.fn.andSelf = g.fn.addBack;
    g.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return g.dir(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return g.dir(b, "parentNode", d)
        },
        next: function(b) {
            return q(b, "nextSibling")
        },
        prev: function(b) {
            return q(b, "previousSibling")
        },
        nextAll: function(b) {
            return g.dir(b, "nextSibling")
        },
        prevAll: function(b) {
            return g.dir(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return g.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return g.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return g.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return g.sibling(b.firstChild)
        },
        contents: function(b) {
            return g.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : g.merge([], b.childNodes)
        }
    }, function(b, c) {
        g.fn[b] = function(d, e) {
            var f = g.map(this, c, d);
            return jd.test(b) || (e = d), e && "string" == typeof e && (f = g.filter(e, f)), f = 1 < this.length && !ld[b] ? g.unique(f) : f, 1 < this.length && kd.test(b) && (f = f.reverse()), this.pushStack(f, b, X.call(arguments).join(","))
        }
    });
    g.extend({
        filter: function(b, c, d) {
            return d && (b = ":not(" + b + ")"), 1 === c.length ? g.find.matchesSelector(c[0], b) ? [c[0]] : [] : g.find.matches(b, c)
        },
        dir: function(b, d, e) {
            var f = [];
            for (b = b[d]; b && 9 !== b.nodeType && (e === c || 1 !== b.nodeType || !g(b).is(e));) 1 === b.nodeType && f.push(b), b = b[d];
            return f
        },
        sibling: function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b);
            return d
        }
    });
    var sb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        md = / jQuery\d+="(?:null|\d+)"/g,
        mb = /^\s+/,
        cc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        dc = /<([\w:]+)/,
        nd = /<tbody/i,
        od = /<|&#?\w+;/,
        pd = /<(?:script|style|link)/i,
        qd = /<(?:script|object|embed|option|style)/i,
        nb = RegExp("<(?:" + sb + ")[\\s/>]", "i"),
        tb = /^(?:checkbox|radio)$/,
        ec = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rd = /\/(java|ecma)script/i,
        sd = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        S = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        fc = m(u),
        ob = fc.appendChild(u.createElement("div"));
    S.optgroup = S.option;
    S.tbody = S.tfoot = S.colgroup = S.caption = S.thead;
    S.th = S.td;
    g.support.htmlSerialize || (S._default = [1, "X<div>", "</div>"]);
    g.fn.extend({
        text: function(b) {
            return g.access(this, function(b) {
                return b === c ? g.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(b))
            }, null, b, arguments.length)
        },
        wrapAll: function(b) {
            if (g.isFunction(b)) return this.each(function(c) {
                g(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = g(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return g.isFunction(b) ? this.each(function(c) {
                g(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = g(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = g.isFunction(b);
            return this.each(function(d) {
                g(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                g.nodeName(this, "body") || g(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (!n(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = g.clean(arguments);
                return this.pushStack(g.merge(b, this), "before", this.selector)
            }
        },
        after: function() {
            if (!n(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = g.clean(arguments);
                return this.pushStack(g.merge(this, b), "after", this.selector)
            }
        },
        remove: function(b, c) {
            for (var d, e = 0; null != (d = this[e]); e++)
                if (!b || g.filter(b, [d]).length) !c && 1 === d.nodeType && (g.cleanData(d.getElementsByTagName("*")), g.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++)
                for (1 === b.nodeType && g.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function() {
                return g.clone(this, b, c)
            })
        },
        html: function(b) {
            return g.access(this, function(b) {
                var d = this[0] || {},
                    e = 0,
                    f = this.length;
                if (b === c) return 1 === d.nodeType ? d.innerHTML.replace(md, "") : c;
                if ("string" == typeof b && !pd.test(b) && (g.support.htmlSerialize || !nb.test(b)) && (g.support.leadingWhitespace || !mb.test(b)) && !S[(dc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(cc, "<$1></$2>");
                    try {
                        for (; e < f; e++) d = this[e] || {}, 1 === d.nodeType && (g.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                        d = 0
                    } catch (l) {}
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function(b) {
            return n(this[0]) ? this.length ? this.pushStack(g(g.isFunction(b) ? b() : b), "replaceWith", b) : this : g.isFunction(b) ? this.each(function(c) {
                var d = g(this),
                    e = d.html();
                d.replaceWith(b.call(this, c, e))
            }) : ("string" != typeof b && (b = g(b).detach()), this.each(function() {
                var c = this.nextSibling,
                    d = this.parentNode;
                g(this).remove();
                c ? g(c).before(b) : g(d).append(b)
            }))
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, d, e) {
            b = [].concat.apply([], b);
            var f, l, j, m = 0,
                p = b[0],
                r = [],
                s = this.length;
            if (!g.support.checkClone && 1 < s && "string" == typeof p && ec.test(p)) return this.each(function() {
                g(this).domManip(b, d, e)
            });
            if (g.isFunction(p)) return this.each(function(f) {
                var l = g(this);
                b[0] = p.call(this, f, d ? l.html() : c);
                l.domManip(b, d, e)
            });
            if (this[0]) {
                f = g.buildFragment(b, this, r);
                j = f.fragment;
                l = j.firstChild;
                1 === j.childNodes.length && (j = l);
                if (l) {
                    d = d && g.nodeName(l, "tr");
                    for (f = f.cacheable || s - 1; m < s; m++) e.call(d && g.nodeName(this[m], "table") ? this[m].getElementsByTagName("tbody")[0] || this[m].appendChild(this[m].ownerDocument.createElement("tbody")) : this[m], m === f ? j : g.clone(j, !0, !0))
                }
                j = l = null;
                r.length && g.each(r, function(b, c) {
                    c.src ? g.ajax ? g.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : g.error("no ajax") : g.globalEval((c.text || c.textContent || c.innerHTML || "").replace(sd, ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    g.buildFragment = function(b, d, e) {
        var f, l, j, m = b[0];
        return d = d || u, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === b.length && "string" == typeof m && 512 > m.length && d === u && "<" === m.charAt(0) && !qd.test(m) && (g.support.checkClone || !ec.test(m)) && (g.support.html5Clone || !nb.test(m)) && (l = !0, f = g.fragments[m], j = f !== c), f || (f = d.createDocumentFragment(), g.clean(b, d, f, e), l && (g.fragments[m] = j && f)), {
            fragment: f,
            cacheable: l
        }
    };
    g.fragments = {};
    g.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        g.fn[b] = function(d) {
            var e, f = 0,
                l = [];
            d = g(d);
            var j = d.length;
            e = 1 === this.length && this[0].parentNode;
            if ((null == e || e && 11 === e.nodeType && 1 === e.childNodes.length) && 1 === j) return d[c](this[0]), this;
            for (; f < j; f++) e = (0 < f ? this.clone(!0) : this).get(), g(d[f])[c](e), l = l.concat(e);
            return this.pushStack(l, b, d.selector)
        }
    });
    g.extend({
        clone: function(b, c, d) {
            var e, f, l, j;
            g.support.html5Clone || g.isXMLDoc(b) || !nb.test("<" + b.nodeName + ">") ? j = b.cloneNode(!0) : (ob.innerHTML = b.outerHTML, ob.removeChild(j = ob.firstChild));
            if ((!g.support.noCloneEvent || !g.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !g.isXMLDoc(b)) {
                r(b, j);
                e = s(b);
                f = s(j);
                for (l = 0; e[l]; ++l) f[l] && r(e[l], f[l])
            }
            if (c && (p(b, j), d)) {
                e = s(b);
                f = s(j);
                for (l = 0; e[l]; ++l) p(e[l], f[l])
            }
            return j
        },
        clean: function(b, c, d, e) {
            var f, l, j, p, r, s, q, n = c === u && fc,
                v = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = u;
            for (f = 0; null != (j = b[f]); f++)
                if ("number" == typeof j && (j += ""), j) {
                    if ("string" == typeof j)
                        if (od.test(j)) {
                            n = n || m(c);
                            s = c.createElement("div");
                            n.appendChild(s);
                            j = j.replace(cc, "<$1></$2>");
                            l = (dc.exec(j) || ["", ""])[1].toLowerCase();
                            p = S[l] || S._default;
                            r = p[0];
                            for (s.innerHTML = p[1] + j + p[2]; r--;) s = s.lastChild;
                            if (!g.support.tbody) {
                                r = nd.test(j);
                                p = "table" === l && !r ? s.firstChild && s.firstChild.childNodes : "<table>" === p[1] && !r ? s.childNodes : [];
                                for (l = p.length - 1; 0 <= l; --l) g.nodeName(p[l], "tbody") && !p[l].childNodes.length && p[l].parentNode.removeChild(p[l])
                            }!g.support.leadingWhitespace && mb.test(j) && s.insertBefore(c.createTextNode(mb.exec(j)[0]), s.firstChild);
                            j = s.childNodes;
                            s.parentNode.removeChild(s)
                        } else j = c.createTextNode(j);
                    j.nodeType ? v.push(j) : g.merge(v, j)
                }
            s && (j = s = n = null);
            if (!g.support.appendChecked)
                for (f = 0; null != (j = v[f]); f++) g.nodeName(j, "input") ? t(j) : "undefined" != typeof j.getElementsByTagName && g.grep(j.getElementsByTagName("input"), t);
            if (d) {
                b = function(b) {
                    if (!b.type || rd.test(b.type)) return e ? e.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                };
                for (f = 0; null != (j = v[f]); f++)
                    if (!g.nodeName(j, "script") || !b(j)) d.appendChild(j), "undefined" != typeof j.getElementsByTagName && (q = g.grep(g.merge([], j.getElementsByTagName("script")), b), v.splice.apply(v, [f + 1, 0].concat(q)), f += q.length)
            }
            return v
        },
        cleanData: function(b, c) {
            for (var d, e, f, l, j = 0, m = g.expando, p = g.cache, r = g.support.deleteExpando, s = g.event.special; null != (f = b[j]); j++)
                if (c || g.acceptData(f))
                    if (d = (e = f[m]) && p[e]) {
                        if (d.events)
                            for (l in d.events) s[l] ? g.event.remove(f, l) : g.removeEvent(f, l, d.handle);
                        p[e] && (delete p[e], r ? delete f[m] : f.removeAttribute ? f.removeAttribute(m) : f[m] = null, g.deletedIds.push(e))
                    }
        }
    });
    var Ra, ba;
    g.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    };
    Ra = g.uaMatch(yc.userAgent);
    ba = {};
    Ra.browser && (ba[Ra.browser] = !0, ba.version = Ra.version);
    ba.chrome ? ba.webkit = !0 : ba.webkit && (ba.safari = !0);
    g.browser = ba;
    g.sub = function() {
        function b(c, d) {
            return new b.fn.init(c, d)
        }
        g.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, e) {
            return e && e instanceof g && !(e instanceof b) && (e = b(e)), g.fn.init.call(this, d, e, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(u);
        return b
    };
    var M, ka, la, pb = /alpha\([^)]*\)/i,
        td = /opacity=([^)]*)/,
        ud = /^(top|right|bottom|left)$/,
        vd = /^(none|table(?!-c[ea]).+)/,
        gc = /^margin/,
        uc = RegExp("^(" + Ba + ")(.*)$", "i"),
        va = RegExp("^(" + Ba + ")(?!px)[a-z%]+$", "i"),
        wd = RegExp("^([-+])=(" + Ba + ")", "i"),
        Ua = {},
        xd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        hc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        da = ["Top", "Right", "Bottom", "Left"],
        ub = ["Webkit", "O", "Moz", "ms"],
        yd = g.fn.toggle;
    g.fn.extend({
        css: function(b, d) {
            return g.access(this, function(b, d, e) {
                return e !== c ? g.style(b, d, e) : g.css(b, d)
            }, b, d, 1 < arguments.length)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return g.isFunction(b) && g.isFunction(c) ? yd.apply(this, arguments) : this.each(function() {
                (d ? b : B(this)) ? g(this).show(): g(this).hide()
            })
        }
    });
    g.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = M(b, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": g.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b, d, e, f) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var l, j, m, p = g.camelCase(d),
                    r = b.style;
                d = g.cssProps[p] || (g.cssProps[p] = v(r, p));
                m = g.cssHooks[d] || g.cssHooks[p];
                if (e === c) return m && "get" in m && (l = m.get(b, !1, f)) !== c ? l : r[d];
                j = typeof e;
                "string" === j && (l = wd.exec(e)) && (e = (l[1] + 1) * l[2] + parseFloat(g.css(b, d)), j = "number");
                if (!(null == e || "number" === j && isNaN(e)))
                    if ("number" === j && !g.cssNumber[p] && (e += "px"), !m || !("set" in m) || (e = m.set(b, e, f)) !== c) try {
                        r[d] = e
                    } catch (s) {}
            }
        },
        css: function(b, d, e, f) {
            var l, j, m, p = g.camelCase(d);
            return d = g.cssProps[p] || (g.cssProps[p] = v(b.style, p)), m = g.cssHooks[d] || g.cssHooks[p], m && "get" in m && (l = m.get(b, !0, f)), l === c && (l = M(b, d)), "normal" === l && d in hc && (l = hc[d]), e || f !== c ? (j = parseFloat(l), e || g.isNumeric(j) ? j || 0 : l) : l
        },
        swap: function(b, c, d) {
            var e, f = {};
            for (e in c) f[e] = b.style[e], b.style[e] = c[e];
            d = d.call(b);
            for (e in c) b.style[e] = f[e];
            return d
        }
    });
    b.getComputedStyle ? M = function(c, d) {
        var e, f, l, j, m = b.getComputedStyle(c, null),
            p = c.style;
        return m && (e = m[d], "" === e && !g.contains(c.ownerDocument, c) && (e = g.style(c, d)), va.test(e) && gc.test(d) && (f = p.width, l = p.minWidth, j = p.maxWidth, p.minWidth = p.maxWidth = p.width = e, e = m.width, p.width = f, p.minWidth = l, p.maxWidth = j)), e
    } : u.documentElement.currentStyle && (M = function(b, c) {
        var d, e, f = b.currentStyle && b.currentStyle[c],
            l = b.style;
        return null == f && l && l[c] && (f = l[c]), va.test(f) && !ud.test(c) && (d = l.left, e = b.runtimeStyle && b.runtimeStyle.left, e && (b.runtimeStyle.left = b.currentStyle.left), l.left = "fontSize" === c ? "1em" : f, f = l.pixelLeft + "px", l.left = d, e && (b.runtimeStyle.left = e)), "" === f ? "auto" : f
    });
    g.each(["height", "width"], function(b, c) {
        g.cssHooks[c] = {
            get: function(b, d, e) {
                if (d) return 0 === b.offsetWidth && vd.test(M(b, "display")) ? g.swap(b, xd, function() {
                    return Y(b, c, e)
                }) : Y(b, c, e)
            },
            set: function(b, d, e) {
                return A(b, d, e ? C(b, c, e, g.support.boxSizing && "border-box" === g.css(b, "boxSizing")) : 0)
            }
        }
    });
    g.support.opacity || (g.cssHooks.opacity = {
        get: function(b, c) {
            return td.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function(b, c) {
            var d = b.style,
                e = b.currentStyle,
                f = g.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                l = e && e.filter || d.filter || "";
            d.zoom = 1;
            if (!(1 <= c && "" === g.trim(l.replace(pb, "")) && d.removeAttribute && (d.removeAttribute("filter"), e && !e.filter))) d.filter = pb.test(l) ? l.replace(pb, f) : l + " " + f
        }
    });
    g(function() {
        g.support.reliableMarginRight || (g.cssHooks.marginRight = {
            get: function(b, c) {
                return g.swap(b, {
                    display: "inline-block"
                }, function() {
                    if (c) return M(b, "marginRight")
                })
            }
        });
        !g.support.pixelPosition && g.fn.position && g.each(["top", "left"], function(b, c) {
            g.cssHooks[c] = {
                get: function(b, d) {
                    if (d) {
                        var e = M(b, c);
                        return va.test(e) ? g(b).position()[c] + "px" : e
                    }
                }
            }
        })
    });
    g.expr && g.expr.filters && (g.expr.filters.hidden = function(b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight || !g.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || M(b, "display"))
    }, g.expr.filters.visible = function(b) {
        return !g.expr.filters.hidden(b)
    });
    g.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        g.cssHooks[b + c] = {
            expand: function(d) {
                var e = "string" == typeof d ? d.split(" ") : [d],
                    f = {};
                for (d = 0; 4 > d; d++) f[b + da[d] + c] = e[d] || e[d - 2] || e[0];
                return f
            }
        };
        gc.test(b) || (g.cssHooks[b + c].set = A)
    });
    var zd = /%20/g,
        vc = /\[\]$/,
        ic = /\r?\n/g,
        Ad = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Bd = /^(?:select|textarea)/i;
    g.fn.extend({
        serialize: function() {
            return g.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? g.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Bd.test(this.nodeName) || Ad.test(this.type))
            }).map(function(b, c) {
                var d = g(this).val();
                return null == d ? null : g.isArray(d) ? g.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(ic, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(ic, "\r\n")
                }
            }).get()
        }
    });
    g.param = function(b, d) {
        var e, f = [],
            l = function(b, c) {
                c = g.isFunction(c) ? c() : null == c ? "" : c;
                f[f.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        d === c && (d = g.ajaxSettings && g.ajaxSettings.traditional);
        if (g.isArray(b) || b.jquery && !g.isPlainObject(b)) g.each(b, function() {
            l(this.name, this.value)
        });
        else
            for (e in b) F(e, b[e], d, l);
        return f.join("&").replace(zd, "+")
    };
    var oa, ja, Cd = /#.*$/,
        Dd = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Ed = /^(?:GET|HEAD)$/,
        Fd = /^\/\//,
        jc = /\?/,
        Gd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Hd = /([?&])_=[^&]*/,
        kc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        lc = g.fn.load,
        Va = {},
        mc = {},
        nc = ["*/"] + ["*"];
    try {
        ja = xc.href
    } catch (Qd) {
        ja = u.createElement("a"), ja.href = "", ja = ja.href
    }
    oa = kc.exec(ja.toLowerCase()) || [];
    g.fn.load = function(b, d, e) {
        if ("string" != typeof b && lc) return lc.apply(this, arguments);
        if (!this.length) return this;
        var f, l, j, m = this,
            p = b.indexOf(" ");
        return 0 <= p && (f = b.slice(p, b.length), b = b.slice(0, p)), g.isFunction(d) ? (e = d, d = c) : d && "object" == typeof d && (l = "POST"), g.ajax({
            url: b,
            type: l,
            dataType: "html",
            data: d,
            complete: function(b, c) {
                e && m.each(e, j || [b.responseText, c, b])
            }
        }).done(function(b) {
            j = arguments;
            m.html(f ? g("<div>").append(b.replace(Gd, "")).find(f) : b)
        }), this
    };
    g.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        g.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    g.each(["get", "post"], function(b, d) {
        g[d] = function(b, e, f, l) {
            return g.isFunction(e) && (l = l || f, f = e, e = c), g.ajax({
                type: d,
                url: b,
                data: e,
                success: f,
                dataType: l
            })
        }
    });
    g.extend({
        getScript: function(b, d) {
            return g.get(b, c, d, "script")
        },
        getJSON: function(b, c, d) {
            return g.get(b, c, d, "json")
        },
        ajaxSetup: function(b, c) {
            return c ? wb(b, g.ajaxSettings) : (c = b, b = g.ajaxSettings), wb(b, c), b
        },
        ajaxSettings: {
            url: ja,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(oa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": nc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": g.parseJSON,
                "text xml": g.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: vb(Va),
        ajaxTransport: vb(mc),
        ajax: function(b, d) {
            function e(b, d, j, r) {
                var q, x, y, N, L, P = d;
                if (2 !== E) {
                    E = 2;
                    p && clearTimeout(p);
                    m = c;
                    l = r || "";
                    D.readyState = 0 < b ? 4 : 0;
                    if (j) {
                        N = n;
                        r = D;
                        var R, A, C, H, J = N.contents,
                            I = N.dataTypes,
                            K = N.responseFields;
                        for (A in K) A in j && (r[K[A]] = j[A]);
                        for (;
                            "*" === I[0];) I.shift(), R === c && (R = N.mimeType || r.getResponseHeader("content-type"));
                        if (R)
                            for (A in J)
                                if (J[A] && J[A].test(R)) {
                                    I.unshift(A);
                                    break
                                }
                        if (I[0] in j) C = I[0];
                        else {
                            for (A in j) {
                                if (!I[0] || N.converters[A + " " + I[0]]) {
                                    C = A;
                                    break
                                }
                                H || (H = A)
                            }
                            C = C || H
                        }
                        N = j = C ? (C !== I[0] && I.unshift(C), j[C]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b)
                        if (n.ifModified && (L = D.getResponseHeader("Last-Modified"), L && (g.lastModified[f] = L), L = D.getResponseHeader("Etag"), L && (g.etag[f] = L)), 304 === b) P = "notmodified", q = !0;
                        else {
                            var F;
                            a: {
                                q = n;
                                x = N;
                                var M, P = q.dataTypes.slice();
                                j = P[0];
                                R = {};
                                A = 0;
                                q.dataFilter && (x = q.dataFilter(x, q.dataType));
                                if (P[1])
                                    for (F in q.converters) R[F.toLowerCase()] = q.converters[F];
                                for (; y = P[++A];)
                                    if ("*" !== y) {
                                        if ("*" !== j && j !== y) {
                                            F = R[j + " " + y] || R["* " + y];
                                            if (!F)
                                                for (M in R)
                                                    if (L = M.split(" "), L[1] === y && (F = R[j + " " + L[0]] || R["* " + L[0]])) {
                                                        !0 === F ? F = R[M] : !0 !== R[M] && (y = L[0], P.splice(A--, 0, y));
                                                        break
                                                    }
                                            if (!0 !== F)
                                                if (F && q["throws"]) x = F(x);
                                                else try {
                                                    x = F(x)
                                                } catch (O) {
                                                    F = {
                                                        state: "parsererror",
                                                        error: F ? O : "No conversion from " + j + " to " + y
                                                    };
                                                    break a
                                                }
                                        }
                                        j = y
                                    }
                                F = {
                                    state: "success",
                                    data: x
                                }
                            }
                            q = F;
                            P = q.state;
                            x = q.data;
                            y = q.error;
                            q = !y
                        }
                    else if (y = P, !P || b) P = "error", 0 > b && (b = 0);
                    D.status = b;
                    D.statusText = (d || P) + "";
                    q ? u.resolveWith(t, [x, P, D]) : u.rejectWith(t, [D, P, y]);
                    D.statusCode(G);
                    G = c;
                    s && v.trigger("ajax" + (q ? "Success" : "Error"), [D, n, q ? x : y]);
                    B.fireWith(t, [D, P]);
                    s && (v.trigger("ajaxComplete", [D, n]), --g.active || g.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var f, l, j, m, p, r, s, q, n = g.ajaxSetup({}, d),
                t = n.context || n,
                v = t !== n && (t.nodeType || t instanceof g) ? g(t) : g.event,
                u = g.Deferred(),
                B = g.Callbacks("once memory"),
                G = n.statusCode || {},
                A = {},
                C = {},
                E = 0,
                H = "canceled",
                D = {
                    readyState: 0,
                    setRequestHeader: function(b, c) {
                        if (!E) {
                            var d = b.toLowerCase();
                            b = C[d] = C[d] || b;
                            A[b] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === E ? l : null
                    },
                    getResponseHeader: function(b) {
                        var d;
                        if (2 === E) {
                            if (!j)
                                for (j = {}; d = Dd.exec(l);) j[d[1].toLowerCase()] = d[2];
                            d = j[b.toLowerCase()]
                        }
                        return d === c ? null : d
                    },
                    overrideMimeType: function(b) {
                        return E || (n.mimeType = b), this
                    },
                    abort: function(b) {
                        return b = b || H, m && m.abort(b), e(0, b), this
                    }
                };
            u.promise(D);
            D.success = D.done;
            D.error = D.fail;
            D.complete = B.add;
            D.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > E)
                        for (c in b) G[c] = [G[c], b[c]];
                    else c = b[D.status], D.always(c)
                }
                return this
            };
            n.url = ((b || n.url) + "").replace(Cd, "").replace(Fd, oa[1] + "//");
            n.dataTypes = g.trim(n.dataType || "*").toLowerCase().split(ea);
            null == n.crossDomain && (r = kc.exec(n.url.toLowerCase()) || !1, n.crossDomain = r && r.join(":") + (r[3] ? "" : "http:" === r[1] ? 80 : 443) !== oa.join(":") + (oa[3] ? "" : "http:" === oa[1] ? 80 : 443));
            n.data && n.processData && "string" != typeof n.data && (n.data = g.param(n.data, n.traditional));
            wa(Va, n, d, D);
            if (2 === E) return D;
            s = n.global;
            n.type = n.type.toUpperCase();
            n.hasContent = !Ed.test(n.type);
            s && 0 === g.active++ && g.event.trigger("ajaxStart");
            if (!n.hasContent && (n.data && (n.url += (jc.test(n.url) ? "&" : "?") + n.data, delete n.data), f = n.url, !1 === n.cache)) {
                r = g.now();
                var J = n.url.replace(Hd, "$1_=" + r);
                n.url = J + (J === n.url ? (jc.test(n.url) ? "&" : "?") + "_=" + r : "")
            }(n.data && n.hasContent && !1 !== n.contentType || d.contentType) && D.setRequestHeader("Content-Type", n.contentType);
            n.ifModified && (f = f || n.url, g.lastModified[f] && D.setRequestHeader("If-Modified-Since", g.lastModified[f]), g.etag[f] && D.setRequestHeader("If-None-Match", g.etag[f]));
            D.setRequestHeader("Accept", n.dataTypes[0] && n.accepts[n.dataTypes[0]] ? n.accepts[n.dataTypes[0]] + ("*" !== n.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : n.accepts["*"]);
            for (q in n.headers) D.setRequestHeader(q, n.headers[q]);
            if (!n.beforeSend || !1 !== n.beforeSend.call(t, D, n) && 2 !== E) {
                H = "abort";
                for (q in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) D[q](n[q]);
                if (m = wa(mc, n, d, D)) {
                    D.readyState = 1;
                    s && v.trigger("ajaxSend", [D, n]);
                    n.async && 0 < n.timeout && (p = setTimeout(function() {
                        D.abort("timeout")
                    }, n.timeout));
                    try {
                        E = 1, m.send(A, e)
                    } catch (I) {
                        if (2 > E) e(-1, I);
                        else throw I;
                    }
                } else e(-1, "No Transport");
                return D
            }
            return D.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var oc = [],
        Id = /\?/,
        Sa = /(=)\?(?=&|$)|\?\?/,
        Jd = g.now();
    g.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = oc.pop() || g.expando + "_" + Jd++;
            return this[b] = !0, b
        }
    });
    g.ajaxPrefilter("json jsonp", function(d, e, f) {
        var l, j, m, p = d.data,
            r = d.url,
            s = !1 !== d.jsonp,
            q = s && Sa.test(r),
            n = s && !q && "string" == typeof p && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Sa.test(p);
        if ("jsonp" === d.dataTypes[0] || q || n) return l = d.jsonpCallback = g.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, j = b[l], q ? d.url = r.replace(Sa, "$1" + l) : n ? d.data = p.replace(Sa, "$1" + l) : s && (d.url += (Id.test(r) ? "&" : "?") + d.jsonp + "=" + l), d.converters["script json"] = function() {
            return m || g.error(l + " was not called"), m[0]
        }, d.dataTypes[0] = "json", b[l] = function() {
            m = arguments
        }, f.always(function() {
            b[l] = j;
            d[l] && (d.jsonpCallback = e.jsonpCallback, oc.push(l));
            m && g.isFunction(j) && j(m[0]);
            m = j = c
        }), "script"
    });
    g.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                return g.globalEval(b), b
            }
        }
    });
    g.ajaxPrefilter("script", function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    g.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var d, e = u.head || u.getElementsByTagName("head")[0] || u.documentElement;
            return {
                send: function(f, l) {
                    d = u.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function(b, f) {
                        if (f || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = c, f || l(200, "success")
                    };
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var pa, qb = b.ActiveXObject ? function() {
            for (var b in pa) pa[b](0, 1)
        } : !1,
        Kd = 0;
    g.ajaxSettings.xhr = b.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && xb())) a: {
            try {
                c = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (d) {}
            c = void 0
        }
        return c
    } : xb;
    var rb = g.ajaxSettings.xhr();
    g.extend(g.support, {
        ajax: !!rb,
        cors: !!rb && "withCredentials" in rb
    });
    g.support.ajax && g.ajaxTransport(function(d) {
        if (!d.crossDomain || g.support.cors) {
            var e;
            return {
                send: function(f, l) {
                    var j, m, p = d.xhr();
                    d.username ? p.open(d.type, d.url, d.async, d.username, d.password) : p.open(d.type, d.url, d.async);
                    if (d.xhrFields)
                        for (m in d.xhrFields) p[m] = d.xhrFields[m];
                    d.mimeType && p.overrideMimeType && p.overrideMimeType(d.mimeType);
                    !d.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (m in f) p.setRequestHeader(m, f[m])
                    } catch (r) {}
                    p.send(d.hasContent && d.data || null);
                    e = function(b, f) {
                        var m, r, s, q, n;
                        try {
                            if (e && (f || 4 === p.readyState))
                                if (e = c, j && (p.onreadystatechange = g.noop, qb && delete pa[j]), f) 4 !== p.readyState && p.abort();
                                else {
                                    m = p.status;
                                    s = p.getAllResponseHeaders();
                                    q = {};
                                    (n = p.responseXML) && n.documentElement && (q.xml = n);
                                    try {
                                        q.text = p.responseText
                                    } catch (t) {}
                                    try {
                                        r = p.statusText
                                    } catch (v) {
                                        r = ""
                                    }!m && d.isLocal && !d.crossDomain ? m = q.text ? 200 : 404 : 1223 === m && (m = 204)
                                }
                        } catch (N) {
                            f || l(-1, N)
                        }
                        q && l(m, r, q, s)
                    };
                    d.async ? 4 === p.readyState ? setTimeout(e, 0) : (j = ++Kd, qb && (pa || (pa = {}, g(b).unload(qb)), pa[j] = e), p.onreadystatechange = e) : e()
                },
                abort: function() {
                    e && e(0, 1)
                }
            }
        }
    });
    var xa, Ta, Ld = /^(?:toggle|show|hide)$/,
        Md = RegExp("^(?:([-+])=|)(" + Ba + ")([a-z%]*)$", "i"),
        Nd = /queueHooks$/,
        ya = [
            function(b, c, d) {
                var e, f, l, j, m, p, r = this,
                    s = b.style,
                    q = {},
                    n = [],
                    t = b.nodeType && B(b);
                d.queue || (m = g._queueHooks(b, "fx"), null == m.unqueued && (m.unqueued = 0, p = m.empty.fire, m.empty.fire = function() {
                    m.unqueued || p()
                }), m.unqueued++, r.always(function() {
                    r.always(function() {
                        m.unqueued--;
                        g.queue(b, "fx").length || m.empty.fire()
                    })
                }));
                1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [s.overflow, s.overflowX, s.overflowY], "inline" === g.css(b, "display") && "none" === g.css(b, "float") && (!g.support.inlineBlockNeedsLayout || "inline" === ca(b.nodeName) ? s.display = "inline-block" : s.zoom = 1));
                d.overflow && (s.overflow = "hidden", g.support.shrinkWrapBlocks || r.done(function() {
                    s.overflow = d.overflow[0];
                    s.overflowX = d.overflow[1];
                    s.overflowY = d.overflow[2]
                }));
                for (e in c) f = c[e], Ld.exec(f) && (delete c[e], f !== (t ? "hide" : "show") && n.push(e));
                if (f = n.length) {
                    l = g._data(b, "fxshow") || g._data(b, "fxshow", {});
                    t ? g(b).show() : r.done(function() {
                        g(b).hide()
                    });
                    r.done(function() {
                        var c;
                        g.removeData(b, "fxshow", !0);
                        for (c in q) g.style(b, c, q[c])
                    });
                    for (e = 0; e < f; e++) c = n[e], j = r.createTween(c, t ? l[c] : 0), q[c] = l[c] || g.style(b, c), c in l || (l[c] = j.start, t && (j.end = j.start, j.start = "width" === c || "height" === c ? 1 : 0))
                }
            }
        ],
        qa = {
            "*": [
                function(b, c) {
                    var d, e, f = this.createTween(b, c),
                        l = Md.exec(c),
                        j = f.cur(),
                        m = +j || 0,
                        p = 1,
                        r = 20;
                    if (l) {
                        d = +l[2];
                        e = l[3] || (g.cssNumber[b] ? "" : "px");
                        if ("px" !== e && m) {
                            m = g.css(f.elem, b, !0) || d || 1;
                            do p = p || ".5", m /= p, g.style(f.elem, b, m + e); while (p !== (p = f.cur() / j) && 1 !== p && --r)
                        }
                        f.unit = e;
                        f.start = m;
                        f.end = l[1] ? m + (l[1] + 1) * d : d
                    }
                    return f
                }
            ]
        };
    g.Animation = g.extend(zb, {
        tweener: function(b, c) {
            g.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, e = 0, f = b.length; e < f; e++) d = b[e], qa[d] = qa[d] || [], qa[d].unshift(c)
        },
        prefilter: function(b, c) {
            c ? ya.unshift(b) : ya.push(b)
        }
    });
    g.Tween = O;
    O.prototype = {
        constructor: O,
        init: function(b, c, d, e, f, l) {
            this.elem = b;
            this.prop = d;
            this.easing = f || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = l || (g.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = O.propHooks[this.prop];
            return b && b.get ? b.get(this) : O.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = O.propHooks[this.prop];
            return this.options.duration ? this.pos = c = g.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : O.propHooks._default.set(this), this
        }
    };
    O.prototype.init.prototype = O.prototype;
    O.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = g.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            },
            set: function(b) {
                g.fx.step[b.prop] ? g.fx.step[b.prop](b) : b.elem.style && (null != b.elem.style[g.cssProps[b.prop]] || g.cssHooks[b.prop]) ? g.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    g.each(["toggle", "show", "hide"], function(b, c) {
        var d = g.fn[c];
        g.fn[c] = function(e, f, l) {
            return null == e || "boolean" == typeof e || !b && g.isFunction(e) && g.isFunction(f) ? d.apply(this, arguments) : this.animate(za(c, !0), e, f, l)
        }
    });
    g.fn.extend({
        fadeTo: function(b, c, d, e) {
            return this.filter(B).css("opacity", 0).show().end().animate({
                opacity: c
            }, b, d, e)
        },
        animate: function(b, c, d, e) {
            var f = g.isEmptyObject(b),
                l = g.speed(c, d, e);
            c = function() {
                var c = zb(this, g.extend({}, b), l);
                f && c.stop(!0)
            };
            return f || !1 === l.queue ? this.each(c) : this.queue(l.queue, c)
        },
        stop: function(b, d, e) {
            var f = function(b) {
                var c = b.stop;
                delete b.stop;
                c(e)
            };
            return "string" != typeof b && (e = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    d = null != b && b + "queueHooks",
                    l = g.timers,
                    j = g._data(this);
                if (d) j[d] && j[d].stop && f(j[d]);
                else
                    for (d in j) j[d] && j[d].stop && Nd.test(d) && f(j[d]);
                for (d = l.length; d--;) l[d].elem === this && (null == b || l[d].queue === b) && (l[d].anim.stop(e), c = !1, l.splice(d, 1));
                (c || !e) && g.dequeue(this, b)
            })
        }
    });
    g.each({
        slideDown: za("show"),
        slideUp: za("hide"),
        slideToggle: za("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        g.fn[b] = function(b, d, e) {
            return this.animate(c, b, d, e)
        }
    });
    g.speed = function(b, c, d) {
        var e = b && "object" == typeof b ? g.extend({}, b) : {
            complete: d || !d && c || g.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !g.isFunction(c) && c
        };
        e.duration = g.fx.off ? 0 : "number" == typeof e.duration ? e.duration : e.duration in g.fx.speeds ? g.fx.speeds[e.duration] : g.fx.speeds._default;
        if (null == e.queue || !0 === e.queue) e.queue = "fx";
        return e.old = e.complete, e.complete = function() {
            g.isFunction(e.old) && e.old.call(this);
            e.queue && g.dequeue(this, e.queue)
        }, e
    };
    g.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    g.timers = [];
    g.fx = O.prototype.init;
    g.fx.tick = function() {
        for (var b, c = g.timers,
                d = 0; d < c.length; d++) b = c[d], !b() && c[d] === b && c.splice(d--, 1);
        c.length || g.fx.stop()
    };
    g.fx.timer = function(b) {
        b() && g.timers.push(b) && !Ta && (Ta = setInterval(g.fx.tick, g.fx.interval))
    };
    g.fx.interval = 13;
    g.fx.stop = function() {
        clearInterval(Ta);
        Ta = null
    };
    g.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    g.fx.step = {};
    g.expr && g.expr.filters && (g.expr.filters.animated = function(b) {
        return g.grep(g.timers, function(c) {
            return b === c.elem
        }).length
    });
    var pc = /^(?:body|html)$/i;
    g.fn.offset = function(b) {
        if (arguments.length) return b === c ? this : this.each(function(c) {
            g.offset.setOffset(this, b, c)
        });
        var d, e, f, l, j, m, p, r = {
                top: 0,
                left: 0
            },
            s = this[0],
            q = s && s.ownerDocument;
        if (q) return (e = q.body) === s ? g.offset.bodyOffset(s) : (d = q.documentElement, g.contains(d, s) ? ("undefined" != typeof s.getBoundingClientRect && (r = s.getBoundingClientRect()), f = Ab(q), l = d.clientTop || e.clientTop || 0, j = d.clientLeft || e.clientLeft || 0, m = f.pageYOffset || d.scrollTop, p = f.pageXOffset || d.scrollLeft, {
            top: r.top + m - l,
            left: r.left + p - j
        }) : r)
    };
    g.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return g.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(g.css(b, "marginTop")) || 0, d += parseFloat(g.css(b, "marginLeft")) || 0), {
                top: c,
                left: d
            }
        },
        setOffset: function(b, c, d) {
            var e = g.css(b, "position");
            "static" === e && (b.style.position = "relative");
            var f = g(b),
                l = f.offset(),
                j = g.css(b, "top"),
                m = g.css(b, "left"),
                p = {},
                r = {},
                s, q;
            ("absolute" === e || "fixed" === e) && -1 < g.inArray("auto", [j, m]) ? (r = f.position(), s = r.top, q = r.left) : (s = parseFloat(j) || 0, q = parseFloat(m) || 0);
            g.isFunction(c) && (c = c.call(b, d, l));
            null != c.top && (p.top = c.top - l.top + s);
            null != c.left && (p.left = c.left - l.left + q);
            "using" in c ? c.using.call(b, p) : f.css(p)
        }
    };
    g.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0],
                    c = this.offsetParent(),
                    d = this.offset(),
                    e = pc.test(c[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : c.offset();
                return d.top -= parseFloat(g.css(b, "marginTop")) || 0, d.left -= parseFloat(g.css(b, "marginLeft")) || 0, e.top += parseFloat(g.css(c[0], "borderTopWidth")) || 0, e.left += parseFloat(g.css(c[0], "borderLeftWidth")) || 0, {
                    top: d.top - e.top,
                    left: d.left - e.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent || u.body; b && !pc.test(b.nodeName) && "static" === g.css(b, "position");) b = b.offsetParent;
                return b || u.body
            })
        }
    });
    g.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, d) {
        var e = /Y/.test(d);
        g.fn[b] = function(f) {
            return g.access(this, function(b, f, l) {
                var j = Ab(b);
                if (l === c) return j ? d in j ? j[d] : j.document.documentElement[f] : b[f];
                j ? j.scrollTo(e ? g(j).scrollLeft() : l, e ? l : g(j).scrollTop()) : b[f] = l
            }, b, f, arguments.length, null)
        }
    });
    g.each({
        Height: "height",
        Width: "width"
    }, function(b, d) {
        g.each({
            padding: "inner" +
                b,
            content: d,
            "": "outer" + b
        }, function(e, f) {
            g.fn[f] = function(f, l) {
                var j = arguments.length && (e || "boolean" != typeof f),
                    m = e || (!0 === f || !0 === l ? "margin" : "border");
                return g.access(this, function(d, e, f) {
                    var l;
                    return g.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (l = d.documentElement, Math.max(d.body["scroll" + b], l["scroll" + b], d.body["offset" + b], l["offset" + b], l["client" + b])) : f === c ? g.css(d, e, f, m) : g.style(d, e, f, m)
                }, d, j ? f : c, j, null)
            }
        })
    });
    b.jQuery = b.$ = g;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return g
    })
})(window);
var portraitMode = !0,
    mobilePortraitWidth = 480,
    mobilePortraitHeight = 640,
    mobileLandscapeWidth = 640,
    mobileLandscapeHeight = 480,
    mobileWidth = portraitMode ? mobilePortraitWidth : mobileLandscapeWidth,
    mobileHeight = portraitMode ? mobilePortraitHeight : mobileLandscapeHeight,
    desktopWidth = 640,
    desktopHeight = 640,
    w, h, multiplier, destW, destH, dynamicClickableEntityDivs = {},
    coreDivsToResize = ["game", "play", "orientate"],
    advancedDivsToResize = {};

function adjustLayers(b) {
    for (i = 0; i < coreDivsToResize.length; i++) ig.ua.mobile ? ($("#" + coreDivsToResize[i]).width(w), $("#" + coreDivsToResize[i]).height(h)) : ($("#" + coreDivsToResize[i]).width(destW), $("#" + coreDivsToResize[i]).height(destH), $("#" + coreDivsToResize[i]).css("left", b ? 0 : w / 2 - destW / 2));
    for (key in advancedDivsToResize) try {
        $("#" + key).width(w), $("#" + key).height(h), $("#" + key + "-Box").css("left", (w - advancedDivsToResize[key]["box-width"]) / 2), $("#" + key + "-Box").css("top", (h - advancedDivsToResize[key]["box-height"]) /
            2)
    } catch (c) {
        console.log(c)
    }
    $("#ajaxbar").width(w);
    $("#ajaxbar").height(h)
}

function sizeHandler() {
    if ($("#game")) {
        w = window.innerWidth;
        h = window.innerHeight;
        ig.ua.mobile ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth), destW = mobileWidth * multiplier, destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth), destW = desktopWidth * multiplier, destH = desktopHeight * multiplier);
        widthRatio = window.innerWidth / mobileWidth;
        heightRatio = window.innerHeight / mobileHeight;
        adjustLayers();
        window.scrollTo(0, 1);
        for (var b = navigator.userAgent.split(" "), c = 0; c < b.length; c++) b[c].substr(0, 8)
    }
}

function orientationHandler() {
    console.log("changing orientation ...");
    ig.ua.mobile && ((portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) ? ($("#orientate").show(), $("#game").hide()) : ($("#orientate").hide(), $("#game").show()));
    sizeHandler()
}

function fixSamsungHandler() {
    ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchmove", function(b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchend", function(b) {
        b.preventDefault();
        return !1
    }, !1))
}
window.addEventListener("resize", function() {
    orientationHandler()
}, !1);
window.addEventListener("orientationchange", function() {
    orientationHandler()
}, !1);
document.ontouchmove = function(b) {
    b.preventDefault();
    window.scrollTo(0, 1)
};

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var f = c[d].split("=");
        if (decodeURIComponent(f[0]) == b) return decodeURIComponent(f[1])
    }
}
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var f in b) this.settings[f] = b[f];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
            c = this.settings,
            d = {},
            f;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var e = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", e, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", e, !0);
                    e("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (f in this.HTML5API) this[f] = this.HTML5API[f];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (f in this.FLASHAPI) this[f] = this.FLASHAPI[f];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
            f, e = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var j = document.createElement("object");
            j.id = "jukebox-flashstream-" + this.id;
            j.setAttribute("type", "application/x-shockwave-flash");
            j.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            j.setAttribute("width", "0");
            j.setAttribute("height", "0");
            e.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            e.flashvars = b.join("&amp;");
            for (f in e) b = document.createElement("param"), b.setAttribute("name", f), b.setAttribute("value", e[f]), j.appendChild(b);
            c.outerHTML = j.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c = document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            e.play = !1;
            e.loop = !1;
            e.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (f in e) c.setAttribute(f, e[f]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started = b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                f;
            if (void 0 !== d[b]) f = d[b].start;
            else if ("number" === typeof b) {
                f = b;
                for (var e in d)
                    if (f >= d[e].start && f <=
                        d[e].end) {
                        b = e;
                        break
                    }
            }
            void 0 !== f && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(f))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" === typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ? this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                    e: "3gp",
                    m: ["audio/3gpp", "audio/amr"]
                }, {
                    e: "aac",
                    m: ["audio/aac", "audio/aacp"]
                }, {
                    e: "amr",
                    m: ["audio/amr", "audio/3gpp"]
                }, {
                    e: "caf",
                    m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                }, {
                    e: "m4a",
                    m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                }, {
                    e: "mp3",
                    m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                }, {
                    e: "mpga",
                    m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                }, {
                    e: "mp4",
                    m: ["audio/mp4", "video/mp4"]
                }, {
                    e: "ogg",
                    m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                }, {
                    e: "wav",
                    m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                }, {
                    e: "webm",
                    m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                }], d, f, e = 0, j = c.length; e < j; e++)
                if (f = c[e].e, c[e].m.length && "object" === typeof c[e].m)
                    for (var n = 0, q = c[e].m.length; n < q; n++)
                        if (d = c[e].m[n], "" !== b.canPlayType(d)) {
                            this.codecs[f] = d;
                            break
                        } else this.codecs[f] || (this.codecs[f] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (l) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var f = this.__clones[d];
            if (null === f.isPlaying && f.origin === b) return f
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var e in c) d[e] = c[e];
            d.autoplay = !1;
            e = new jukebox.Player(d, b);
            e.isClone = !0;
            e.wasReady = !1;
            return this.__clones[e.id] = e
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length && this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d], c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var f = b[c],
                e = f.match(/\.([^\.]*)$/)[1];
            if (e && this.codecs[e]) return f
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                    e: "3gp",
                    m: ["audio/3gpp", "audio/amr"]
                }, {
                    e: "aac",
                    m: ["audio/aac", "audio/aacp"]
                }, {
                    e: "amr",
                    m: ["audio/amr", "audio/3gpp"]
                }, {
                    e: "caf",
                    m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                }, {
                    e: "m4a",
                    m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                }, {
                    e: "mp3",
                    m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                }, {
                    e: "mpga",
                    m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                }, {
                    e: "mp4",
                    m: ["audio/mp4", "video/mp4"]
                }, {
                    e: "ogg",
                    m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                }, {
                    e: "wav",
                    m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                }, {
                    e: "webm",
                    m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                }], d, f, e = 0, j = c.length; e < j; e++)
                if (f = c[e].e, c[e].m.length && "object" === typeof c[e].m)
                    for (var n = 0, q = c[e].m.length; n < q; n++)
                        if (d = c[e].m[n], "" !== b.canPlayType(d)) {
                            this.codecs[f] = d;
                            break
                        } else this.codecs[f] || (this.codecs[f] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (l) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var f = this.__clones[d];
            if (null === f.isPlaying && f.origin === b) return f
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var e in c) d[e] = c[e];
            d.autoplay = !1;
            e = new jukebox.Player(d, b);
            e.isClone = !0;
            e.wasReady = !1;
            return this.__clones[e.id] = e
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length && this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d], c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var f = b[c],
                e = f.match(/\.([^\.]*)$/)[1];
            if (e && this.codecs[e]) return f
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function() {
    var b = function() {
        this.init()
    };
    b.prototype = {
        init: function() {
            var b = this || c;
            b._codecs = {};
            b._howls = [];
            b._muted = !1;
            b._volume = 1;
            b._canPlayEvent = "canplaythrough";
            b._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null;
            b.masterGain = null;
            b.noAudio = !1;
            b.usingWebAudio = !0;
            b.autoSuspend = !0;
            b.ctx = null;
            b.mobileAutoEnable = !0;
            b._setup();
            return b
        },
        volume: function(b) {
            var d = this || c;
            b = parseFloat(b);
            d.ctx || q();
            if ("undefined" !== typeof b && 0 <= b && 1 >= b) {
                d._volume = b;
                if (d._muted) return d;
                d.usingWebAudio && (d.masterGain.gain.value = b);
                for (var e = 0; e < d._howls.length; e++)
                    if (!d._howls[e]._webAudio)
                        for (var f = d._howls[e]._getSoundIds(), j = 0; j < f.length; j++) {
                            var n = d._howls[e]._soundById(f[j]);
                            n && n._node && (n._node.volume = n._volume * b)
                        }
                return d
            }
            return d._volume
        },
        mute: function(b) {
            var d = this || c;
            d.ctx || q();
            d._muted = b;
            d.usingWebAudio && (d.masterGain.gain.value = b ? 0 : d._volume);
            for (var e = 0; e < d._howls.length; e++)
                if (!d._howls[e]._webAudio)
                    for (var f = d._howls[e]._getSoundIds(), j = 0; j < f.length; j++) {
                        var n = d._howls[e]._soundById(f[j]);
                        n && n._node && (n._node.muted = b ? !0 : n._muted)
                    }
            return d
        },
        unload: function() {
            for (var b = this || c, d = b._howls.length - 1; 0 <= d; d--) b._howls[d].unload();
            b.usingWebAudio && b.ctx && "undefined" !== typeof b.ctx.close && (b.ctx.close(), b.ctx = null, q());
            return b
        },
        codecs: function(b) {
            return (this || c)._codecs[b.replace(/^x-/, "")]
        },
        _setup: function() {
            var b = this || c;
            b.state = b.ctx ? b.ctx.state || "running" : "running";
            b._autoSuspend();
            if (!b.usingWebAudio)
                if ("undefined" !== typeof Audio) try {
                    var d = new Audio;
                    "undefined" === typeof d.oncanplaythrough && (b._canPlayEvent = "canplay")
                } catch (e) {
                    b.noAudio = !0
                } else b.noAudio = !0;
            try {
                d = new Audio, d.muted && (b.noAudio = !0)
            } catch (f) {}
            b.noAudio || b._setupCodecs();
            return b
        },
        _setupCodecs: function() {
            var b = this || c,
                d = null;
            try {
                d = "undefined" !== typeof Audio ? new Audio : null
            } catch (e) {
                return b
            }
            if (!d || "function" !== typeof d.canPlayType) return b;
            var f = d.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                j = b._navigator && b._navigator.userAgent.match(/OPR\/([0-6].)/g),
                j = j && 33 > parseInt(j[0].split("/")[1], 10);
            b._codecs = {
                mp3: !(j || !f && !d.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!f,
                opus: !!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!d.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!d.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!d.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(d.canPlayType("audio/x-m4a;") || d.canPlayType("audio/m4a;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(d.canPlayType("audio/x-mp4;") || d.canPlayType("audio/mp4;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!d.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(d.canPlayType("audio/x-flac;") || d.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return b
        },
        _enableMobileAudio: function() {
            var b = this || c,
                d = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(b._navigator && b._navigator.userAgent),
                e = !!("ontouchend" in window || b._navigator && 0 < b._navigator.maxTouchPoints || b._navigator && 0 < b._navigator.msMaxTouchPoints);
            if (!b._mobileEnabled && b.ctx && (d || e)) {
                b._mobileEnabled = !1;
                !b._mobileUnloaded && 44100 !== b.ctx.sampleRate && (b._mobileUnloaded = !0, b.unload());
                b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050);
                var f = function() {
                    var c = b.ctx.createBufferSource();
                    c.buffer = b._scratchBuffer;
                    c.connect(b.ctx.destination);
                    "undefined" === typeof c.start ? c.noteOn(0) : c.start(0);
                    c.onended = function() {
                        c.disconnect(0);
                        b._mobileEnabled = !0;
                        b.mobileAutoEnable = !1;
                        document.removeEventListener("touchend", f, !0)
                    }
                };
                document.addEventListener("touchend", f, !0);
                return b
            }
        },
        _autoSuspend: function() {
            var b = this;
            if (b.autoSuspend && b.ctx && "undefined" !== typeof b.ctx.suspend && c.usingWebAudio) {
                for (var d = 0; d < b._howls.length; d++)
                    if (b._howls[d]._webAudio)
                        for (var e = 0; e < b._howls[d]._sounds.length; e++)
                            if (!b._howls[d]._sounds[e]._paused) return b;
                b._suspendTimer && clearTimeout(b._suspendTimer);
                b._suspendTimer = setTimeout(function() {
                    b.autoSuspend && (b._suspendTimer = null, b.state = "suspending", b.ctx.suspend().then(function() {
                        b.state = "suspended";
                        b._resumeAfterSuspend && (delete b._resumeAfterSuspend, b._autoResume())
                    }))
                }, 3E4);
                return b
            }
        },
        _autoResume: function() {
            var b = this;
            if (b.ctx && "undefined" !== typeof b.ctx.resume && c.usingWebAudio) return "running" === b.state && b._suspendTimer ? (clearTimeout(b._suspendTimer), b._suspendTimer = null) : "suspended" === b.state ? (b.state = "resuming", b.ctx.resume().then(function() {
                b.state = "running";
                for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit("resume")
            }), b._suspendTimer && (clearTimeout(b._suspendTimer), b._suspendTimer = null)) : "suspending" === b.state && (b._resumeAfterSuspend = !0), b
        }
    };
    var c = new b,
        d = function(b) {
            !b.src || 0 === b.src.length ? console.error("An array of source files must be passed with any new Howl.") : this.init(b)
        };
    d.prototype = {
        init: function(b) {
            var d = this;
            c.ctx || q();
            d._autoplay = b.autoplay || !1;
            d._format = "string" !== typeof b.format ? b.format : [b.format];
            d._html5 = b.html5 || !1;
            d._muted = b.mute || !1;
            d._loop = b.loop || !1;
            d._pool = b.pool || 5;
            d._preload = "boolean" === typeof b.preload ? b.preload : !0;
            d._rate = b.rate || 1;
            d._sprite = b.sprite || {};
            d._src = "string" !== typeof b.src ? b.src : [b.src];
            d._volume = void 0 !== b.volume ? b.volume : 1;
            d._duration = 0;
            d._state = "unloaded";
            d._sounds = [];
            d._endTimers = {};
            d._queue = [];
            d._onend = b.onend ? [{
                fn: b.onend
            }] : [];
            d._onfade = b.onfade ? [{
                fn: b.onfade
            }] : [];
            d._onload = b.onload ? [{
                fn: b.onload
            }] : [];
            d._onloaderror = b.onloaderror ? [{
                fn: b.onloaderror
            }] : [];
            d._onpause = b.onpause ? [{
                fn: b.onpause
            }] : [];
            d._onplay = b.onplay ? [{
                fn: b.onplay
            }] : [];
            d._onstop = b.onstop ? [{
                fn: b.onstop
            }] : [];
            d._onmute = b.onmute ? [{
                fn: b.onmute
            }] : [];
            d._onvolume = b.onvolume ? [{
                fn: b.onvolume
            }] : [];
            d._onrate = b.onrate ? [{
                fn: b.onrate
            }] : [];
            d._onseek = b.onseek ? [{
                fn: b.onseek
            }] : [];
            d._onresume = [];
            d._webAudio = c.usingWebAudio && !d._html5;
            "undefined" !== typeof c.ctx && c.ctx && c.mobileAutoEnable && c._enableMobileAudio();
            c._howls.push(d);
            d._autoplay && d._queue.push({
                event: "play",
                action: function() {
                    d.play()
                }
            });
            d._preload && d.load();
            return d
        },
        load: function() {
            var b = null;
            if (c.noAudio) this._emit("loaderror", null, "No audio support.");
            else {
                "string" === typeof this._src && (this._src = [this._src]);
                for (var d = 0; d < this._src.length; d++) {
                    var p, r;
                    if (this._format && this._format[d]) p = this._format[d];
                    else {
                        r = this._src[d];
                        if ("string" !== typeof r) {
                            this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }(p = /^data:audio\/([^;,]+);/i.exec(r)) || (p = /\.([^.]+)$/.exec(r.split("?", 1)[0]));
                        p && (p = p[1].toLowerCase())
                    }
                    if (c.codecs(p)) {
                        b = this._src[d];
                        break
                    }
                }
                if (b) {
                    this._src = b;
                    this._state = "loading";
                    "https:" === window.location.protocol && "http:" === b.slice(0, 5) && (this._html5 = !0, this._webAudio = !1);
                    new f(this);
                    if (this._webAudio) {
                        var s = this,
                            q = s._src;
                        if (e[q]) s._duration = e[q].duration, n(s);
                        else if (/^data:[^;]+;base64,/.test(q)) {
                            b = atob(q.split(",")[1]);
                            d = new Uint8Array(b.length);
                            for (p = 0; p < b.length; ++p) d[p] = b.charCodeAt(p);
                            j(d.buffer, s)
                        } else {
                            var v = new XMLHttpRequest;
                            v.open("GET", q, !0);
                            v.responseType = "arraybuffer";
                            v.onload = function() {
                                var b = (v.status + "")[0];
                                "0" !== b && "2" !== b && "3" !== b ? s._emit("loaderror", null, "Failed loading audio file with status: " +
                                    v.status + ".") : j(v.response, s)
                            };
                            v.onerror = function() {
                                s._webAudio && (s._html5 = !0, s._webAudio = !1, s._sounds = [], delete e[q], s.load())
                            };
                            try {
                                v.send()
                            } catch (B) {
                                v.onerror()
                            }
                        }
                    }
                    return this
                }
                this._emit("loaderror", null, "No codec support for selected audio sources.")
            }
        },
        play: function(b, d) {
            var e = this,
                f = null;
            if ("number" === typeof b) f = b, b = null;
            else {
                if ("string" === typeof b && "loaded" === e._state && !e._sprite[b]) return null;
                if ("undefined" === typeof b) {
                    b = "__default";
                    for (var j = 0, q = 0; q < e._sounds.length; q++) e._sounds[q]._paused && !e._sounds[q]._ended && (j++, f = e._sounds[q]._id);
                    1 === j ? b = null : f = null
                }
            }
            var n = f ? e._soundById(f) : e._inactiveSound();
            if (!n) return null;
            f && !b && (b = n._sprite || "__default");
            if ("loaded" !== e._state && !e._sprite[b]) return e._queue.push({
                event: "play",
                action: function() {
                    e.play(e._soundById(n._id) ? n._id : void 0)
                }
            }), n._id;
            if (f && !n._paused) return d || setTimeout(function() {
                e._emit("play", n._id)
            }, 0), n._id;
            e._webAudio && c._autoResume();
            var B = Math.max(0, 0 < n._seek ? n._seek : e._sprite[b][0] / 1E3),
                E = Math.max(0, (e._sprite[b][0] + e._sprite[b][1]) /
                    1E3 - B),
                A = 1E3 * E / Math.abs(n._rate);
            n._paused = !1;
            n._ended = !1;
            n._sprite = b;
            n._seek = B;
            n._start = e._sprite[b][0] / 1E3;
            n._stop = (e._sprite[b][0] + e._sprite[b][1]) / 1E3;
            n._loop = !(!n._loop && !e._sprite[b][2]);
            var C = n._node;
            if (e._webAudio) f = function() {
                e._refreshBuffer(n);
                C.gain.setValueAtTime(n._muted || e._muted ? 0 : n._volume, c.ctx.currentTime);
                n._playStart = c.ctx.currentTime;
                "undefined" === typeof C.bufferSource.start ? n._loop ? C.bufferSource.noteGrainOn(0, B, 86400) : C.bufferSource.noteGrainOn(0, B, E) : n._loop ? C.bufferSource.start(0,
                    B, 86400) : C.bufferSource.start(0, B, E);
                Infinity !== A && (e._endTimers[n._id] = setTimeout(e._ended.bind(e, n), A));
                d || setTimeout(function() {
                    e._emit("play", n._id)
                }, 0)
            }, j = "running" === c.state, "loaded" === e._state && j ? f() : (e.once(j ? "load" : "resume", f, j ? n._id : null), e._clearTimer(n._id));
            else {
                var Y = function() {
                        C.currentTime = B;
                        C.muted = n._muted || e._muted || c._muted || C.muted;
                        C.volume = n._volume * c.volume();
                        C.playbackRate = n._rate;
                        setTimeout(function() {
                            C.play();
                            Infinity !== A && (e._endTimers[n._id] = setTimeout(e._ended.bind(e, n), A));
                            d || e._emit("play", n._id)
                        }, 0)
                    },
                    f = "loaded" === e._state && (window && window.ejecta || !C.readyState && c._navigator.isCocoonJS);
                if (4 === C.readyState || f) Y();
                else {
                    var ca = function() {
                        Y();
                        C.removeEventListener(c._canPlayEvent, ca, !1)
                    };
                    C.addEventListener(c._canPlayEvent, ca, !1);
                    e._clearTimer(n._id)
                }
            }
            return n._id
        },
        pause: function(b, c) {
            var d = this;
            if ("loaded" !== d._state) return d._queue.push({
                event: "pause",
                action: function() {
                    d.pause(b)
                }
            }), d;
            for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
                d._clearTimer(e[f]);
                var j = d._soundById(e[f]);
                if (j && !j._paused && (j._seek = d.seek(e[f]), j._rateSeek = 0, j._paused = !0, d._stopFade(e[f]), j._node))
                    if (d._webAudio) {
                        if (!j._node.bufferSource) break;
                        "undefined" === typeof j._node.bufferSource.stop ? j._node.bufferSource.noteOff(0) : j._node.bufferSource.stop(0);
                        d._cleanBuffer(j._node)
                    } else(!isNaN(j._node.duration) || Infinity === j._node.duration) && j._node.pause();
                c || d._emit("pause", j ? j._id : null)
            }
            return d
        },
        stop: function(b, c) {
            var d = this;
            if ("loaded" !== d._state) return d._queue.push({
                event: "stop",
                action: function() {
                    d.stop(b)
                }
            }), d;
            for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
                d._clearTimer(e[f]);
                var j = d._soundById(e[f]);
                if (j && (j._seek = j._start || 0, j._rateSeek = 0, j._paused = !0, j._ended = !0, d._stopFade(e[f]), j._node))
                    if (d._webAudio) {
                        if (!j._node.bufferSource) {
                            c || d._emit("stop", j._id);
                            break
                        }
                        "undefined" === typeof j._node.bufferSource.stop ? j._node.bufferSource.noteOff(0) : j._node.bufferSource.stop(0);
                        d._cleanBuffer(j._node)
                    } else if (!isNaN(j._node.duration) || Infinity === j._node.duration) j._node.currentTime = j._start || 0, j._node.pause();
                j && !c && d._emit("stop", j._id)
            }
            return d
        },
        mute: function(b, d) {
            var e = this;
            if ("loaded" !== e._state) return e._queue.push({
                event: "mute",
                action: function() {
                    e.mute(b, d)
                }
            }), e;
            if ("undefined" === typeof d)
                if ("boolean" === typeof b) e._muted = b;
                else return e._muted;
            for (var f = e._getSoundIds(d), j = 0; j < f.length; j++) {
                var n = e._soundById(f[j]);
                n && (n._muted = b, e._webAudio && n._node ? n._node.gain.setValueAtTime(b ? 0 : n._volume, c.ctx.currentTime) : n._node && (n._node.muted = c._muted ? !0 : b), e._emit("mute", n._id))
            }
            return e
        },
        volume: function() {
            var b = this,
                d = arguments,
                e, f;
            if (0 === d.length) return b._volume;
            1 === d.length || 2 === d.length && "undefined" === typeof d[1] ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 <= d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            var j;
            if ("undefined" !== typeof e && 0 <= e && 1 >= e) {
                if ("loaded" !== b._state) return b._queue.push({
                    event: "volume",
                    action: function() {
                        b.volume.apply(b, d)
                    }
                }), b;
                "undefined" === typeof f && (b._volume = e);
                f = b._getSoundIds(f);
                for (var n = 0; n < f.length; n++)
                    if (j = b._soundById(f[n])) j._volume = e, d[2] || b._stopFade(f[n]), b._webAudio && j._node && !j._muted ? j._node.gain.setValueAtTime(e, c.ctx.currentTime) : j._node && !j._muted && (j._node.volume = e * c.volume()), b._emit("volume", j._id)
            } else return (j = f ? b._soundById(f) : b._sounds[0]) ? j._volume : 0;
            return b
        },
        fade: function(b, d, e, f) {
            var j = this,
                n = Math.abs(b - d),
                q = b > d ? "out" : "in",
                B = n / 0.01,
                n = 0 < B ? e / B : e;
            4 > n && (B = Math.ceil(B / (4 / n)), n = 4);
            if ("loaded" !== j._state) return j._queue.push({
                event: "fade",
                action: function() {
                    j.fade(b, d, e, f)
                }
            }), j;
            j.volume(b, f);
            for (var E = j._getSoundIds(f), A = 0; A < E.length; A++) {
                var C = j._soundById(E[A]);
                if (C) {
                    f || j._stopFade(E[A]);
                    if (j._webAudio && !C._muted) {
                        var Y = c.ctx.currentTime,
                            ca = Y + e / 1E3;
                        C._volume = b;
                        C._node.gain.setValueAtTime(b, Y);
                        C._node.gain.linearRampToValueAtTime(d, ca)
                    }
                    var F = b;
                    C._interval = setInterval(function(b, c) {
                        0 < B && (F += "in" === q ? 0.01 : -0.01);
                        F = Math.max(0, F);
                        F = Math.min(1, F);
                        F = Math.round(100 * F) / 100;
                        j._webAudio ? ("undefined" === typeof f && (j._volume = F), c._volume = F) : j.volume(F, b, !0);
                        F === d && (clearInterval(c._interval), c._interval = null, j.volume(F, b),
                            j._emit("fade", b))
                    }.bind(j, E[A], C), n)
                }
            }
            return j
        },
        _stopFade: function(b) {
            var d = this._soundById(b);
            d && d._interval && (this._webAudio && d._node.gain.cancelScheduledValues(c.ctx.currentTime), clearInterval(d._interval), d._interval = null, this._emit("fade", b));
            return this
        },
        loop: function() {
            var b = arguments,
                c, d;
            if (0 === b.length) return this._loop;
            if (1 === b.length)
                if ("boolean" === typeof b[0]) this._loop = c = b[0];
                else return (b = this._soundById(parseInt(b[0], 10))) ? b._loop : !1;
            else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
            d = this._getSoundIds(d);
            for (var e = 0; e < d.length; e++)
                if (b = this._soundById(d[e]))
                    if (b._loop = c, this._webAudio && b._node && b._node.bufferSource && (b._node.bufferSource.loop = c)) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            return this
        },
        rate: function() {
            var b = this,
                d = arguments,
                e, f;
            0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            var j;
            if ("number" === typeof e) {
                if ("loaded" !== b._state) return b._queue.push({
                    event: "rate",
                    action: function() {
                        b.rate.apply(b, d)
                    }
                }), b;
                "undefined" === typeof f && (b._rate = e);
                f = b._getSoundIds(f);
                for (var n = 0; n < f.length; n++)
                    if (j = b._soundById(f[n])) {
                        j._rateSeek = b.seek(f[n]);
                        j._playStart = b._webAudio ? c.ctx.currentTime : j._playStart;
                        j._rate = e;
                        b._webAudio && j._node && j._node.bufferSource ? j._node.bufferSource.playbackRate.value = e : j._node && (j._node.playbackRate = e);
                        var q = b.seek(f[n]),
                            q = 1E3 * ((b._sprite[j._sprite][0] + b._sprite[j._sprite][1]) / 1E3 - q) / Math.abs(j._rate);
                        if (b._endTimers[f[n]] || !j._paused) b._clearTimer(f[n]), b._endTimers[f[n]] = setTimeout(b._ended.bind(b, j), q);
                        b._emit("rate", j._id)
                    }
            } else return (j = b._soundById(f)) ? j._rate : b._rate;
            return b
        },
        seek: function() {
            var b = this,
                d = arguments,
                e, f;
            0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : (f = b._sounds[0]._id, e = parseFloat(d[0])) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            if ("undefined" === typeof f) return b;
            if ("loaded" !== b._state) return b._queue.push({
                event: "seek",
                action: function() {
                    b.seek.apply(b, d)
                }
            }), b;
            var j = b._soundById(f);
            if (j)
                if ("number" === typeof e && 0 <= e) {
                    var n = b.playing(f);
                    n && b.pause(f, !0);
                    j._seek = e;
                    j._ended = !1;
                    b._clearTimer(f);
                    n && b.play(f, !0);
                    !b._webAudio && j._node && (j._node.currentTime = e);
                    b._emit("seek", f)
                } else return b._webAudio ? (e = b.playing(f) ? c.ctx.currentTime - j._playStart : 0, j._seek + ((j._rateSeek ? j._rateSeek - j._seek : 0) + e * Math.abs(j._rate))) : j._node.currentTime;
            return b
        },
        playing: function(b) {
            if ("number" === typeof b) return (b = this._soundById(b)) ? !b._paused : !1;
            for (b = 0; b < this._sounds.length; b++)
                if (!this._sounds[b]._paused) return !0;
            return !1
        },
        duration: function(b) {
            var c = this._duration;
            (b = this._soundById(b)) && (c = this._sprite[b._sprite][1] / 1E3);
            return c
        },
        state: function() {
            return this._state
        },
        unload: function() {
            for (var b = this._sounds, d = 0; d < b.length; d++) {
                b[d]._paused || (this.stop(b[d]._id), this._emit("end", b[d]._id));
                this._webAudio || (b[d]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=", b[d]._node.removeEventListener("error", b[d]._errorFn, !1), b[d]._node.removeEventListener(c._canPlayEvent, b[d]._loadFn, !1));
                delete b[d]._node;
                this._clearTimer(b[d]._id);
                var f = c._howls.indexOf(this);
                0 <= f && c._howls.splice(f, 1)
            }
            b = !0;
            for (d = 0; d < c._howls.length; d++)
                if (c._howls[d]._src === this._src) {
                    b = !1;
                    break
                }
            e && b && delete e[this._src];
            c.noAudio = !1;
            this._state = "unloaded";
            this._sounds = [];
            return null
        },
        on: function(b, c, d, e) {
            b = this["_on" + b];
            "function" === typeof c && b.push(e ? {
                id: d,
                fn: c,
                once: e
            } : {
                id: d,
                fn: c
            });
            return this
        },
        off: function(b, c, d) {
            var e = this["_on" +
                    b],
                f = 0;
            if (c)
                for (f = 0; f < e.length; f++) {
                    if (c === e[f].fn && d === e[f].id) {
                        e.splice(f, 1);
                        break
                    }
                } else if (b) this["_on" + b] = [];
                else {
                    b = Object.keys(this);
                    for (f = 0; f < b.length; f++) 0 === b[f].indexOf("_on") && Array.isArray(this[b[f]]) && (this[b[f]] = [])
                }
            return this
        },
        once: function(b, c, d) {
            this.on(b, c, d, 1);
            return this
        },
        _emit: function(b, c, d) {
            for (var e = this["_on" + b], f = e.length - 1; 0 <= f; f--)
                if (!e[f].id || e[f].id === c || "load" === b) setTimeout(function(b) {
                    b.call(this, c, d)
                }.bind(this, e[f].fn), 0), e[f].once && this.off(b, e[f].fn, e[f].id);
            return this
        },
        _loadQueue: function() {
            var b = this;
            if (0 < b._queue.length) {
                var c = b._queue[0];
                b.once(c.event, function() {
                    b._queue.shift();
                    b._loadQueue()
                });
                c.action()
            }
            return b
        },
        _ended: function(b) {
            var d = b._sprite,
                d = !(!b._loop && !this._sprite[d][2]);
            this._emit("end", b._id);
            !this._webAudio && d && this.stop(b._id, !0).play(b._id);
            if (this._webAudio && d) {
                this._emit("play", b._id);
                b._seek = b._start || 0;
                b._rateSeek = 0;
                b._playStart = c.ctx.currentTime;
                var e = 1E3 * (b._stop - b._start) / Math.abs(b._rate);
                this._endTimers[b._id] = setTimeout(this._ended.bind(this,
                    b), e)
            }
            this._webAudio && !d && (b._paused = !0, b._ended = !0, b._seek = b._start || 0, b._rateSeek = 0, this._clearTimer(b._id), this._cleanBuffer(b._node), c._autoSuspend());
            !this._webAudio && !d && this.stop(b._id);
            return this
        },
        _clearTimer: function(b) {
            this._endTimers[b] && (clearTimeout(this._endTimers[b]), delete this._endTimers[b]);
            return this
        },
        _soundById: function(b) {
            for (var c = 0; c < this._sounds.length; c++)
                if (b === this._sounds[c]._id) return this._sounds[c];
            return null
        },
        _inactiveSound: function() {
            this._drain();
            for (var b = 0; b < this._sounds.length; b++)
                if (this._sounds[b]._ended) return this._sounds[b].reset();
            return new f(this)
        },
        _drain: function() {
            var b = this._pool,
                c = 0,
                d = 0;
            if (!(this._sounds.length < b)) {
                for (d = 0; d < this._sounds.length; d++) this._sounds[d]._ended && c++;
                for (d = this._sounds.length - 1; 0 <= d && !(c <= b); d--) this._sounds[d]._ended && (this._webAudio && this._sounds[d]._node && this._sounds[d]._node.disconnect(0), this._sounds.splice(d, 1), c--)
            }
        },
        _getSoundIds: function(b) {
            if ("undefined" === typeof b) {
                b = [];
                for (var c = 0; c < this._sounds.length; c++) b.push(this._sounds[c]._id);
                return b
            }
            return [b]
        },
        _refreshBuffer: function(b) {
            b._node.bufferSource = c.ctx.createBufferSource();
            b._node.bufferSource.buffer = e[this._src];
            b._panner ? b._node.bufferSource.connect(b._panner) : b._node.bufferSource.connect(b._node);
            if (b._node.bufferSource.loop = b._loop) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            b._node.bufferSource.playbackRate.value = b._rate;
            return this
        },
        _cleanBuffer: function(b) {
            if (this._scratchBuffer) {
                b.bufferSource.onended = null;
                b.bufferSource.disconnect(0);
                try {
                    b.bufferSource.buffer = this._scratchBuffer
                } catch (c) {}
            }
            b.bufferSource = null;
            return this
        }
    };
    var f = function(b) {
        this._parent = b;
        this.init()
    };
    f.prototype = {
        init: function() {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._muted = b._muted;
            this._rate = b._rate;
            this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = Math.round(Date.now() * Math.random());
            b._sounds.push(this);
            this.create();
            return this
        },
        create: function() {
            var b = this._parent,
                d = c._muted || this._muted || this._parent._muted ? 0 : this._volume;
            b._webAudio ? (this._node = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), this._node.gain.setValueAtTime(d, c.ctx.currentTime), this._node.paused = !0, this._node.connect(c.masterGain)) : (this._node = new Audio, this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(c._canPlayEvent, this._loadFn, !1), this._node.src = b._src, this._node.preload = "auto", this._node.volume = d * c.volume(), this._node.load());
            return this
        },
        reset: function() {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._muted = b._muted;
            this._rate = b._rate;
            this._rateSeek = this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = Math.round(Date.now() * Math.random());
            return this
        },
        _errorListener: function() {
            this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0);
            this._node.removeEventListener("error", this._errorListener, !1)
        },
        _loadListener: function() {
            var b = this._parent;
            b._duration = Math.ceil(10 * this._node.duration) / 10;
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0, 1E3 * b._duration]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue());
            this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1)
        }
    };
    var e = {},
        j = function(b, d) {
            c.ctx.decodeAudioData(b, function(b) {
                b && 0 < d._sounds.length && (e[d._src] = b, n(d, b))
            }, function() {
                d._emit("loaderror", null, "Decoding audio data failed.")
            })
        },
        n = function(b,
            c) {
            c && !b._duration && (b._duration = c.duration);
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0, 1E3 * b._duration]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue())
        },
        q = function() {
            try {
                "undefined" !== typeof AudioContext ? c.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? c.ctx = new webkitAudioContext : c.usingWebAudio = !1
            } catch (b) {
                c.usingWebAudio = !1
            }
            var d = /iP(hone|od|ad)/.test(c._navigator && c._navigator.platform),
                e = c._navigator && c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                e = e ? parseInt(e[1], 10) : null;
            if (d && e && 9 > e && (d = /safari/.test(c._navigator && c._navigator.userAgent.toLowerCase()), c._navigator && c._navigator.standalone && !d || c._navigator && !c._navigator.standalone && !d)) c.usingWebAudio = !1;
            c.usingWebAudio && (c.masterGain = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), c.masterGain.gain.value = 1, c.masterGain.connect(c.ctx.destination));
            c._setup()
        };
    "function" === typeof define && define.amd && define([], function() {
        return {
            Howler: c,
            Howl: d
        }
    });
    "undefined" !== typeof exports && (exports.Howler = c, exports.Howl = d);
    "undefined" !== typeof window ? (window.HowlerGlobal = b, window.Howler = c, window.Howl = d, window.Sound = f) : "undefined" !== typeof global && (global.HowlerGlobal = b, global.Howler = c, global.Howl = d, global.Sound = f)
})();
(function() {
    HowlerGlobal.prototype._pos = [0, 0, 0];
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
    HowlerGlobal.prototype.stereo = function(b) {
        if (!this.ctx || !this.ctx.listener) return this;
        for (var c = this._howls.length - 1; 0 <= c; c--) this._howls[c].stereo(b);
        return this
    };
    HowlerGlobal.prototype.pos = function(b, c, d) {
        if (!this.ctx || !this.ctx.listener) return this;
        c = "number" !== typeof c ? this._pos[1] : c;
        d = "number" !== typeof d ? this._pos[2] : d;
        if ("number" === typeof b) this._pos = [b, c, d], this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]);
        else return this._pos;
        return this
    };
    HowlerGlobal.prototype.orientation = function(b, c, d, f, l, m) {
        if (!this.ctx || !this.ctx.listener) return this;
        var p = this._orientation;
        c = "number" !== typeof c ? p[1] : c;
        d = "number" !== typeof d ? p[2] : d;
        f = "number" !== typeof f ? p[3] : f;
        l = "number" !== typeof l ? p[4] : l;
        m = "number" !== typeof m ? p[5] : m;
        if ("number" === typeof b) this._orientation = [b, c, d, f, l, m], this.ctx.listener.setOrientation(b, c, d, f, l, m);
        else return p;
        return this
    };
    var b = Howl.prototype.init;
    Howl.prototype.init = function(c) {
        this._orientation = c.orientation || [1, 0, 0];
        this._stereo = c.stereo || null;
        this._pos = c.pos || null;
        this._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : 360,
            coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : 360,
            coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : 0,
            distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : "inverse",
            maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : 1E4,
            panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : "HRTF",
            refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : 1,
            rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : 1
        };
        this._onstereo = c.onstereo ? [{
            fn: c.onstereo
        }] : [];
        this._onpos = c.onpos ? [{
            fn: c.onpos
        }] : [];
        this._onorientation = c.onorientation ? [{
            fn: c.onorientation
        }] : [];
        return b.call(this, c)
    };
    Howl.prototype.stereo = function(b, c) {
        var d = this;
        if (!d._webAudio) return d;
        if ("loaded" !== d._state) return d._queue.push({
            event: "stereo",
            action: function() {
                d.stereo(b, c)
            }
        }), d;
        var q = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof c)
            if ("number" === typeof b) d._stereo = b, d._pos = [b, 0, 0];
            else return d._stereo;
        for (var l = d._getSoundIds(c), m = 0; m < l.length; m++) {
            var p = d._soundById(l[m]);
            if (p)
                if ("number" === typeof b) p._stereo = b, p._pos = [b, 0, 0], p._node && (p._pannerAttr.panningModel = "equalpower", (!p._panner || !p._panner.pan) && f(p, q), "spatial" === q ? p._panner.setPosition(b, 0, 0) : p._panner.pan.value = b), d._emit("stereo", p._id);
                else return p._stereo
        }
        return d
    };
    Howl.prototype.pos = function(b, c, d, q) {
        var l = this;
        if (!l._webAudio) return l;
        if ("loaded" !== l._state) return l._queue.push({
            event: "pos",
            action: function() {
                l.pos(b, c, d, q)
            }
        }), l;
        c = "number" !== typeof c ? 0 : c;
        d = "number" !== typeof d ? -0.5 : d;
        if ("undefined" === typeof q)
            if ("number" === typeof b) l._pos = [b, c, d];
            else return l._pos;
        for (var m = l._getSoundIds(q), p = 0; p < m.length; p++) {
            var r = l._soundById(m[p]);
            if (r)
                if ("number" === typeof b) r._pos = [b, c, d], r._node && ((!r._panner || r._panner.pan) && f(r, "spatial"), r._panner.setPosition(b, c, d)), l._emit("pos", r._id);
                else return r._pos
        }
        return l
    };
    Howl.prototype.orientation = function(b, c, d, q) {
        var l = this;
        if (!l._webAudio) return l;
        if ("loaded" !== l._state) return l._queue.push({
            event: "orientation",
            action: function() {
                l.orientation(b, c, d, q)
            }
        }), l;
        c = "number" !== typeof c ? l._orientation[1] : c;
        d = "number" !== typeof d ? l._orientation[2] : d;
        if ("undefined" === typeof q)
            if ("number" === typeof b) l._orientation = [b, c, d];
            else return l._orientation;
        for (var m = l._getSoundIds(q), p = 0; p < m.length; p++) {
            var r = l._soundById(m[p]);
            if (r)
                if ("number" === typeof b) r._orientation = [b, c, d], r._node && (r._panner || (r._pos || (r._pos = l._pos || [0, 0, -0.5]), f(r, "spatial")), r._panner.setOrientation(b, c, d)), l._emit("orientation", r._id);
                else return r._orientation
        }
        return l
    };
    Howl.prototype.pannerAttr = function() {
        var b = arguments,
            c, d;
        if (!this._webAudio) return this;
        if (0 === b.length) return this._pannerAttr;
        if (1 === b.length)
            if ("object" === typeof b[0]) c = b[0], "undefined" === typeof d && (this._pannerAttr = {
                coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : this._coneInnerAngle,
                coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : this._coneOuterAngle,
                coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : this._coneOuterGain,
                distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : this._distanceModel,
                maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : this._maxDistance,
                panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : this._panningModel,
                refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : this._refDistance,
                rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : this._rolloffFactor
            });
            else return (b = this._soundById(parseInt(b[0], 10))) ? b._pannerAttr : this._pannerAttr;
        else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
        d = this._getSoundIds(d);
        for (var q = 0; q < d.length; q++)
            if (b = this._soundById(d[q])) {
                var l = b._pannerAttr,
                    l = {
                        coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : l.coneInnerAngle,
                        coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : l.coneOuterAngle,
                        coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : l.coneOuterGain,
                        distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : l.distanceModel,
                        maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : l.maxDistance,
                        panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : l.panningModel,
                        refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : l.refDistance,
                        rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : l.rolloffFactor
                    },
                    m = b._panner;
                m ? (m.coneInnerAngle = l.coneInnerAngle, m.coneOuterAngle = l.coneOuterAngle, m.coneOuterGain = l.coneOuterGain, m.distanceModel = l.distanceModel, m.maxDistance = l.maxDistance, m.panningModel = l.panningModel, m.refDistance = l.refDistance, m.rolloffFactor = l.rolloffFactor) : (b._pos || (b._pos = this._pos || [0, 0, -0.5]), f(b, "spatial"))
            }
        return this
    };
    var c = Sound.prototype.init;
    Sound.prototype.init = function() {
        var b = this._parent;
        this._orientation = b._orientation;
        this._stereo = b._stereo;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        c.call(this);
        this._stereo ? b.stereo(this._stereo) : this._pos && b.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
    };
    var d = Sound.prototype.reset;
    Sound.prototype.reset = function() {
        var b = this._parent;
        this._orientation = b._orientation;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        return d.call(this)
    };
    var f = function(b, c) {
        "spatial" === (c || "spatial") ? (b._panner = Howler.ctx.createPanner(), b._panner.coneInnerAngle = b._pannerAttr.coneInnerAngle, b._panner.coneOuterAngle = b._pannerAttr.coneOuterAngle, b._panner.coneOuterGain = b._pannerAttr.coneOuterGain, b._panner.distanceModel = b._pannerAttr.distanceModel, b._panner.maxDistance = b._pannerAttr.maxDistance, b._panner.panningModel = b._pannerAttr.panningModel, b._panner.refDistance = b._pannerAttr.refDistance, b._panner.rolloffFactor = b._pannerAttr.rolloffFactor, b._panner.setPosition(b._pos[0], b._pos[1], b._pos[2]), b._panner.setOrientation(b._orientation[0], b._orientation[1], b._orientation[2])) : (b._panner = Howler.ctx.createStereoPanner(), b._panner.pan.value = b._stereo);
        b._panner.connect(b._node);
        b._paused || b._parent.pause(b._id, !0).play(b._id)
    }
})();
(function(b) {
    Number.prototype.map = function(b, c, d, e) {
        return d + (e - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            e = function() {},
            f = function() {
                return d.apply(this instanceof e && b ? this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        e.prototype = this.prototype;
        f.prototype = new e;
        return f
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b || b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array)
                for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var e = c[d];
                if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
                    ig.merge(b[d], e)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                e;
            for (e in b) c.push(e);
            c.sort();
            for (e = 0; e < c.length; e++) d.push(b[c[e]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var e = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + e] = b["moz" + e] = b["o" + e] = d : b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b, c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, e, f) {
            var j = ig.$new("canvas");
            j.width = b.width;
            j.height = b.height;
            var n = j.getContext("2d");
            ig.System.SCALE.CRISP(j, n);
            var v = ig.getVendorAttribute(n, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(n, "getImageDataHD");
            var B = b.width / v,
                E = b.height / v;
            j.width = Math.ceil(B);
            j.height = Math.ceil(E);
            n.drawImage(b, 0, 0, B, E);
            return 1 === v ? n.getImageData(c, d, e, f) : n.getImageDataHD(c, d, e, f)
        },
        module: function(b) {
            if (ig._current) throw "Module '" +
                ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                e = ig.$new("script");
            e.type = "text/javascript";
            e.src = d;
            e.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            e.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(e)
        },
        _execModules: function() {
            for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], e = !0, f = 0; f < d.requires.length; f++) {
                    var j = d.requires[f];
                    ig.modules[j] ? ig.modules[j].loaded || (e = !1) : (e = !1, ig._loadScript(j, d.name))
                }
                e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    e = [];
                    j = ig._loadQueue[c].requires;
                    for (f = 0; f < j.length; f++) d = ig.modules[j[f]], (!d || !d.loaded) && e.push(j[f]);
                    b.push(ig._loadQueue[c].name + " (requires: " + e.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio = b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
                b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = true;ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1,
            d = {};
        b.ig.setAnimation = function(e, f) {
            var j = c++;
            d[j] = !0;
            var n = function() {
                d[j] && (b.requestAnimationFrame(n, f), e())
            };
            b.requestAnimationFrame(n, f);
            return j
        };
        b.ig.clearAnimation = function(b) {
            delete d[b]
        }
    } else b.ig.setAnimation = function(c) {
        return b.setInterval(c, 1E3 / 60)
    }, b.ig.clearAnimation = function(c) {
        b.clearInterval(c)
    };
    var f = !1,
        e = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/,
        j = 0;
    b.ig.Class = function() {};
    var n = function(b) {
        var c = this.prototype,
            d = {},
            f;
        for (f in b) "function" == typeof b[f] && "function" == typeof c[f] && e.test(b[f]) ? (d[f] = c[f], c[f] = function(b, c) {
            return function() {
                var e = this.parent;
                this.parent = d[b];
                var f = c.apply(this, arguments);
                this.parent = e;
                return f
            }
        }(f, b[f])) : c[f] = b[f]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!f) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var m = this.prototype;
        f = !0;
        var p = new this;
        f = !1;
        for (var r in c) p[r] = "function" == typeof c[r] && "function" == typeof m[r] && e.test(c[r]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = m[b];
                var e = c.apply(this, arguments);
                this.parent = d;
                return e
            }
        }(r, c[r]) : c[r];
        d.prototype = p;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = n;
        d.classId = p.classId = ++j;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        anchor: {
            x: 0,
            y: 0
        },
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = ig.getImagePixels(this.data, 0, 0, this.width, this.height),
                d = this.width * b,
                f = this.height * b,
                e = ig.$new("canvas");
            e.width = d;
            e.height = f;
            for (var j = e.getContext("2d"), n = j.getImageData(0, 0, d, f), q = 0; q < f; q++)
                for (var l = 0; l < d; l++) {
                    var m = 4 * (Math.floor(q / b) * this.width + Math.floor(l / b)),
                        p = 4 * (q * d + l);
                    n.data[p] = c.data[m];
                    n.data[p + 1] = c.data[m + 1];
                    n.data[p + 2] = c.data[m + 2];
                    n.data[p + 3] = c.data[m + 3]
                }
            j.putImageData(n, 0, 0);
            this.data = e
        },
        draw: function(b, c, d, f, e, j) {
            if (this.loaded) {
                var n = ig.system.scale;
                e = (e ? e : this.width) * n;
                j = (j ? j : this.height) * n;
                ig.system.context.drawImage(this.data, d ? d * n : 0, f ? f * n : 0, e, j, ig.system.getDrawPos(b) - this.anchor.x * e, ig.system.getDrawPos(c) - this.anchor.y * j, e, j);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, f, e, j, n) {
            e = e ? e : f;
            if (this.loaded && !(f > this.width || e > this.height)) {
                var q = ig.system.scale,
                    l = Math.floor(f * q),
                    m = Math.floor(e * q),
                    p = j ? -1 : 1,
                    r = n ? -1 : 1;
                if (j || n) ig.system.context.save(), ig.system.context.scale(p, r);
                ig.system.context.drawImage(this.data, Math.floor(d * f) % this.width * q, Math.floor(d * f / this.width) * e * q, l, m, ig.system.getDrawPos(b) * p - (j ? l : 0), ig.system.getDrawPos(c) * r - (n ? m : 0), l, m);
                (j || n) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        },
        setAnchor: function(b, c) {
            this.anchor.x = b;
            this.anchor.y = c
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, f) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var e = this.height + this.lineSpacing, j = 0; j < b.length; j++) this.draw(b[j], c, d + j * e, f)
            } else {
                if (f == ig.Font.ALIGN.RIGHT || f == ig.Font.ALIGN.CENTER) j = this._widthForLine(b), c -= f == ig.Font.ALIGN.CENTER ? j / 2 : j;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (j = 0; j < b.length; j++) f = b.charCodeAt(j), c += this._drawChar(f - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var f = ig.system.scale,
                e = this.widthMap[b] * f,
                j = (this.height - 2) * f;
            ig.system.context.drawImage(this.data, this.indices[b] * f, 0, e, j, ig.system.getDrawPos(c), ig.system.getDrawPos(d), e, j);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, f = 0, e = 0; e < b.width; e++) {
                var j = 4 * e + 3;
                127 < c.data[j] ? f++ : 128 > c.data[j] && f && (this.widthMap.push(f), this.indices.push(e - f), d++, f = 0)
            }
            this.widthMap.push(f);
            this.indices.push(e - f)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                    var d = ig.Sound.use[c];
                    if (b.canPlayType(d.mime)) {
                        this.format = d;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(b, c, d) {
            var f = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
                        var e = new Audio(f);
                        e.load();
                        this.clips[b].push(e)
                    }
                return this.clips[b][0]
            }
            var j = new Audio(f);
            d && (j.addEventListener("canplaythrough", function q(c) {
                j.removeEventListener("canplaythrough", q, !1);
                d(b, !0, c)
            }, !1), j.addEventListener("error", function(c) {
                d(b, !1, c)
            }, !1));
            j.preload = "auto";
            j.load();
            this.clips[b] = [j];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++) e = new Audio(f), e.load(), this.clips[b].push(e);
            return j
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended) return d.ended && (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                get: this.getVolume.bind(this),
                set: this.setVolume.bind(this)
            }), Object.defineProperty(this, "loop", {
                get: this.getLooping.bind(this),
                set: this.setLooping.bind(this)
            })) : this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack || (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function(b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(), this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this), 50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b = 0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt = ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(b, c, d, f, e) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, f, e);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (c = ig.system.realWidth);
            var c = ig.system.scale * (c / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" ==
                    c))
                if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, 0 > c && window.focus(), ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
        },
        keyup: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function(b) {
            this.accel = b.accelerationIncludingGravity
        },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                f = this;
            d.addEventListener("touchstart", function(b) {
                f.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function(b) {
                f.touchEnd(b, c)
            }, !1);
            d.addEventListener("MSPointerDown", function(b) {
                f.touchStart(b, c)
            }, !1);
            d.addEventListener("MSPointerUp", function(b) {
                f.touchEnd(b, c)
            }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return !!this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b, c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
    ig.main = function(b, c, d, f, e, j, n) {
        ig.system = new ig.System(b, d, f, e, j || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        (new(n || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, f) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!f;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b, c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function(b, c, d) {
            var f = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = f.vel.x;
            this.vel.y = f.vel.y;
            this.accel.x = f.accel.x;
            this.accel.y = f.accel.y;
            this.health = f.health;
            this._killed = f._killed;
            this.standing = f.standing;
            this.type = f.type;
            this.checkAgainst = f.checkAgainst;
            this.collides = f.collides;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, f) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                b + " to.";
            c = new ig.Animation(this.animSheet, c, d, f);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, f) {
            return c ? (b + c * ig.system.tick).limit(-f, f) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-f, f)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y +
                b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision = function(b, c) {
        var d = null;
        if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
        else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
        b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c, b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
    };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var f = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -f : f, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -f / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, f / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var f = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var e = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, e = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, e, d == b ? -f : f, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, e = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, e, -f / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, f / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                f = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= f && f < this.height ? this.data[f][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c /
                this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, e) {
            this.parent(b, c);
            this.tiledef = e || ig.CollisionMap.defaultTileDef;
            for (var j in this.tiledef) j | 0 > this.lastSlope && (this.lastSlope = j | 0)
        },
        trace: function(b, c, e, j, n, q) {
            var l = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                m = Math.ceil(Math.max(Math.abs(e), Math.abs(j)) / this.tilesize);
            if (1 < m)
                for (var p = e / m, r = j / m, s = 0; s < m && (p || r) && !(this._traceStep(l,
                        b, c, p, r, n, q, e, j, s), b = l.pos.x, c = l.pos.y, l.collision.x && (e = p = 0), l.collision.y && (j = r = 0), l.collision.slope); s++);
            else this._traceStep(l, b, c, e, j, n, q, e, j, 0);
            return l
        },
        _traceStep: function(b, c, e, j, n, q, l, m, p, r) {
            b.pos.x += j;
            b.pos.y += n;
            var s = 0;
            if (j) {
                var t = 0 < j ? q : 0,
                    v = 0 > j ? this.tilesize : 0,
                    s = Math.max(Math.floor(e / this.tilesize), 0),
                    B = Math.min(Math.ceil((e + l) / this.tilesize), this.height);
                j = Math.floor((b.pos.x + t) / this.tilesize);
                var E = Math.floor((c + t) / this.tilesize);
                if (0 < r || j == E || 0 > E || E >= this.width) E = -1;
                if (0 <= j && j < this.width)
                    for (var A =
                            s; A < B && !(-1 != E && (s = this.data[A][E], 1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, e, m, p, q, l, E, A))); A++)
                        if (s = this.data[A][j], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(b, s, c, e, m, p, q, l, j, A)) {
                            if (1 < s && s <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = s;
                            c = b.pos.x = j * this.tilesize - t + v;
                            m = 0;
                            break
                        }
            }
            if (n) {
                t = 0 < n ? l : 0;
                n = 0 > n ? this.tilesize : 0;
                s = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                v = Math.min(Math.ceil((b.pos.x + q) / this.tilesize), this.width);
                A = Math.floor((b.pos.y + t) / this.tilesize);
                B = Math.floor((e + t) / this.tilesize);
                if (0 < r || A == B || 0 > B || B >= this.height) B = -1;
                if (0 <= A && A < this.height)
                    for (j = s; j < v && !(-1 != B && (s = this.data[B][j], 1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, e, m, p, q, l, j, B))); j++)
                        if (s = this.data[A][j], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(b, s, c, e, m, p, q, l, j, A)) {
                            if (1 < s && s <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = s;
                            b.pos.y = A * this.tilesize - t + n;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, e, j, n, q, l, m, p, r) {
            var s = this.tiledef[c];
            if (!s) return !1;
            c = (s[2] -
                s[0]) * this.tilesize;
            var t = (s[3] - s[1]) * this.tilesize,
                v = s[4];
            l = e + n + (0 > t ? l : 0) - (p + s[0]) * this.tilesize;
            m = j + q + (0 < c ? m : 0) - (r + s[1]) * this.tilesize;
            if (0 < c * m - t * l) {
                if (0 > n * -t + q * c) return v;
                p = Math.sqrt(c * c + t * t);
                r = t / p;
                p = -c / p;
                var B = l * r + m * p,
                    s = r * B,
                    B = p * B;
                if (s * s + B * B >= n * n + q * q) return v || 0.5 > c * (m - q) - t * (l - n);
                b.pos.x = e + n - s;
                b.pos.y = j + q - B;
                b.collision.slope = {
                    x: c,
                    y: t,
                    nx: r,
                    ny: p
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0, 1, 1, 0, !0],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0, 0, b, !0],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, e, j) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + e,
                    y: c + j
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b, c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
            var d = Math.ceil(b / this.chunkSize),
                f = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var e = 0; e < f; e++) {
                this.preRenderedChunks[e] = [];
                for (var j = 0; j < d; j++) this.preRenderedChunks[e][j] = this.preRenderChunk(j, e, j == d - 1 ? b - j * this.chunkSize : this.chunkSize, e == f - 1 ? c - e * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, f) {
            var e = d / this.tilesize / ig.system.scale + 1,
                j = f / this.tilesize / ig.system.scale + 1,
                n = b * this.chunkSize / ig.system.scale % this.tilesize,
                q = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var l = ig.$new("canvas");
            l.width = d;
            l.height = f;
            l.retinaResolutionEnabled = !1;
            f = l.getContext("2d");
            ig.System.scaleMode(l, f);
            d = ig.system.context;
            ig.system.context = f;
            for (f = 0; f < e; f++)
                for (var m = 0; m < j; m++)
                    if (f + b < this.width && m + c < this.height) {
                        var p = this.data[m + c][f + b];
                        p && this.tiles.drawTile(f * this.tilesize - n, m * this.tilesize - q, p - 1, this.tilesize)
                    }
            ig.system.context = d;
            return l
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d = this.width * this.tilesize * ig.system.scale,
                b = (b % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale,
                c = (c % d + d) % d;
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                f = Math.max(Math.floor(c / this.chunkSize), 0),
                e = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                j = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                n = this.preRenderedChunks[0].length,
                q = this.preRenderedChunks.length;
            this.repeat || (e = Math.min(e, n), j = Math.min(j, q));
            for (var l = 0; f < j; f++) {
                for (var m = 0, p = d; p < e; p++) {
                    var r = this.preRenderedChunks[f % q][p % n],
                        s = -b + p * this.chunkSize - m,
                        t = -c + f * this.chunkSize - l;
                    ig.system.context.drawImage(r, s, t);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(s, t, this.chunkSize, this.chunkSize));
                    this.repeat && r.width < this.chunkSize && s + r.width < ig.system.realWidth && (m += this.chunkSize - r.width, e++)
                }
                this.repeat && r.height < this.chunkSize && t + r.height < ig.system.realHeight && (l += this.chunkSize - r.height, j++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(), f = (this.scroll.y / this.tilesize).toInt(), e = this.scroll.x % this.tilesize, j = this.scroll.y % this.tilesize, n = -e - this.tilesize, e = ig.system.width + this.tilesize - e, q = ig.system.height + this.tilesize - j, l = -1, j = -j - this.tilesize; j < q; l++, j += this.tilesize) {
                var m = l + f;
                if (m >= this.height || 0 > m) {
                    if (!this.repeat) continue;
                    m = (m % this.height + this.height) % this.height
                }
                for (var p = -1, r = n; r < e; p++, r += this.tilesize) {
                    b = p + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[m][b])(c = this.anims[b -
                        1]) ? c.draw(r, j) : this.tiles.drawTile(r, j, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var f = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    f.anims = this.backgroundAnims[d.tilesetName] || {};
                    f.repeat = d.repeat;
                    f.distance = d.distance;
                    f.foreground = !!d.foreground;
                    f.preRender = !!d.preRender;
                    f.name = d.name;
                    this.backgroundMaps.push(f)
                }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b = "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var f = this.entities[d];
                f instanceof b && !f._killed && c.push(f)
            }
            return c
        },
        spawnEntity: function(b, c, d, f) {
            var e = "string" === typeof b ? ig.global[b] : b;
            if (!e) throw "Can't spawn entity of type " + b;
            b = new e(c, d, f || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name && delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c =
                    this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var f = {}, e = Math.floor(d.pos.y / this.cellSize), j = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, n = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, q = Math.floor(d.pos.x / this.cellSize); q < j; q++)
                        for (var l = e; l < n; l++)
                            if (b[q])
                                if (b[q][l]) {
                                    for (var m = b[q][l], p = 0; p < m.length; p++) d.touches(m[p]) && !f[m[p].id] && (f[m[p].id] = !0, ig.Entity.checkPair(d, m[p]));
                                    m.push(d)
                                } else b[q][l] = [d];
                else b[q] = {}, b[q][l] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x +
                c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function() {
    ig.DomHandler = ig.Class.extend({
        JQUERYAVAILABLE: !1,
        init: function() {
            this.JQUERYAVAILABLE = this._jqueryAvailable()
        },
        _jqueryAvailable: function() {
            return "undefined" !== typeof jQuery
        },
        addEvent: function(b, c, d, f) {
            if (this.JQUERYAVAILABLE) b.on(c, d);
            else b.addEventListener(c, d, f)
        },
        create: function(b) {
            return this.JQUERYAVAILABLE ? $("<" + b + ">") : ig.$new(b)
        },
        getElementByClass: function(b) {
            return this.JQUERYAVAILABLE ? $("." + b) : document.getElementsByClassName(b)
        },
        getElementById: function(b) {
            return this.JQUERYAVAILABLE ? 0 < $(b).length ? $(b) : null : ig.$(b)
        },
        appendChild: function(b, c) {
            this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c)
        },
        appendToBody: function(b) {
            this.JQUERYAVAILABLE ? $("body").append(b) : document.body.appendChild(b)
        },
        resize: function(b, c, d) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2));
            else {
                var f = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = f
            }
        },
        resizeOffsetLeft: function(b, c, d, f) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", f);
            else {
                var e = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + f.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = e
            }
        },
        css: function(b, c) {
            if (this.JQUERYAVAILABLE) b.css(c);
            else {
                var d = "",
                    f;
                for (f in c) d += f + ":" + c[f] + ";";
                this.attr(b, "style", d)
            }
        },
        getOffsets: function(b) {
            return this.JQUERYAVAILABLE ? (b = b.offset(), {
                left: b.left,
                top: b.top
            }) : {
                left: b.offsetLeft,
                top: b.offsetTop
            }
        },
        attr: function(b, c, d) {
            if ("undefined" === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
            this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d)
        },
        show: function(b) {
            this.JQUERYAVAILABLE ? (b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible" : b[0] && (b[0].style.visibility = "visible"))
        },
        hide: function(b) {
            this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden" : b[0] && (b[0].style.visibility = "hidden"))
        },
        getQueryVariable: function(b) {
            for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
                var f = c[d].split("=");
                if (decodeURIComponent(f[0]) == b) return decodeURIComponent(f[1])
            }
        },
        forcedDeviceDetection: function() {
            var b = this.getQueryVariable("device");
            if (b) switch (b) {
                case "mobile":
                    console.log("serving mobile version ...");
                    ig.ua.mobile = !0;
                    break;
                case "desktop":
                    console.log("serving desktop version ...");
                    ig.ua.mobile = !1;
                    break;
                default:
                    console.log("serving universal version ...")
            } else console.log("serving universal version ...")
        },
        forcedDeviceRotation: function() {
            var b = this.getQueryVariable("force-rotate");
            if (b) switch (b) {
                case "portrait":
                    console.log("force rotate to portrait");
                    window.orientation = 0;
                    break;
                case "landscape":
                    console.log("force rotate to horizontal");
                    window.orientation = 90;
                    break;
                default:
                    alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function() {
    Vector2 = ig.Class.extend({
        x: null,
        y: null,
        valType: "number",
        init: function(b, c) {
            typeof b === this.valType && typeof c === this.valType && (this.x = b, this.y = c)
        },
        row: function(b) {
            typeof b === this.valType && (this.y = b);
            return this.y
        },
        col: function(b) {
            typeof b === this.valType && (this.x = b);
            return this.x
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function() {
    ig.SizeHandler = ig.Class.extend({
        portraitMode: !0,
        desktop: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(960, 540)
        },
        mobile: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(540, 960)
        },
        windowSize: new Vector2(window.innerWidth, window.innerHeight),
        scaleRatioMultiplier: new Vector2(1, 1),
        sizeRatio: new Vector2(1, 1),
        scale: 1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {},
        init: function(b) {
            this.domHandler = b;
            if ("undefined" === typeof b) throw "undefined Dom Handler for Size Handler";
            this.sizeCalcs();
            this.eventListenerSetup();
            this.samsungFix()
        },
        sizeCalcs: function() {
            this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
            if (ig.ua.mobile) {
                this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
                var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
                this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y / b.y);
                var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
                this.mobile.actualSize.x = b.x * this.scaleRatioMultiplier.x;
                this.mobile.actualSize.y = b.y * this.scaleRatioMultiplier.y
            } else this.desktop.actualSize = new Vector2(window.innerWidth, window.innerHeight), b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y), c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c;
            this.sizeRatio.x = window.innerWidth / this.mobile.actualResolution.x;
            this.sizeRatio.y = window.innerHeight / this.mobile.actualResolution.y
        },
        resizeLayers: function() {
            for (var b = 0; b < this.coreDivsToResize.length; b++) {
                var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
                ig.ua.mobile ? ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y)) : ig.domHandler.resizeOffsetLeft(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2))
            }
            for (var d in this.adsToResize) {
                var b = ig.domHandler.getElementById("#" +
                        d),
                    c = ig.domHandler.getElementById("#" + d + "-Box"),
                    f = (window.innerWidth - this.adsToResize[d]["box-width"]) / 2 + "px",
                    e = (window.innerHeight - this.adsToResize[d]["box-height"]) / 2 + "px";
                b && ig.domHandler.css(b, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                c && ig.domHandler.css(c, {
                    left: f,
                    top: e
                })
            }
            for (d in this.dynamicClickableEntityDivs) {
                c = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
                b = ig.domHandler.getElementById("#" + d);
                if (ig.ua.mobile) var j = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    n = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    e = this.dynamicClickableEntityDivs[d].width,
                    f = this.dynamicClickableEntityDivs[d].height,
                    q = Math.floor(j * this.scaleRatioMultiplier.x) + "px",
                    n = Math.floor(n * this.scaleRatioMultiplier.y) + "px",
                    e = Math.floor(e * this.scaleRatioMultiplier.x) + "px",
                    c = Math.floor(f * this.scaleRatioMultiplier.y) + "px";
                else var f = ig.domHandler.getElementById("#canvas"),
                    f = ig.domHandler.getOffsets(f),
                    q = f.left,
                    l = f.top,
                    j = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    n = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    e = this.dynamicClickableEntityDivs[d].width,
                    f = this.dynamicClickableEntityDivs[d].height,
                    q = Math.floor(q + j * c) + "px",
                    n = Math.floor(l + n * c) + "px",
                    e = Math.floor(e * c) + "px",
                    c = Math.floor(f * c) + "px";
                ig.domHandler.css(b, {
                    "float": "left",
                    position: "absolute",
                    left: q,
                    top: n,
                    width: e,
                    height: c,
                    "z-index": 3
                })
            }
        },
        resize: function() {
            this.sizeCalcs();
            this.resizeLayers()
        },
        reorient: function() {
            if (ig.ua.mobile) {
                var b = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
                    c = this.domHandler.getElementById("#orientate"),
                    d = this.domHandler.getElementById("#game");
                b ? (this.domHandler.show(c), this.domHandler.hide(d)) : (this.domHandler.show(d), this.domHandler.hide(c))
            }
            ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
        },
        resizeAds: function() {
            for (var b in this.adsToResize) {
                var c = ig.domHandler.getElementById("#" + b),
                    d = ig.domHandler.getElementById("#" + b + "-Box"),
                    f = (window.innerWidth - this.adsToResize[b]["box-width"]) / 2 + "px",
                    e = (window.innerHeight - this.adsToResize[b]["box-height"]) / 2 + "px";
                c && ig.domHandler.css(c, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                d && ig.domHandler.css(d, {
                    left: f,
                    top: e
                })
            }
        },
        samsungFix: function() {
            ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchmove", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchend", function(b) {
                b.preventDefault();
                return !1
            }, !1))
        },
        eventListenerSetup: function() {
            window.addEventListener("resize", function() {
                this.reorient();
                window.scrollTo(0, 1)
            }.bind(this), !1);
            window.addEventListener("orientationchange", function() {
                this.reorient();
                window.scrollTo(0, 1)
            }.bind(this), !1);
            document.ontouchmove = function(b) {
                window.scrollTo(0, 1);
                b.preventDefault()
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function() {
    ig.ApiHandler = ig.Class.extend({
        apiAvailable: {
            MJSPreroll: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE
                // && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
            },
            MJSHeader: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE
                // && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize()
            },
            MJSFooter: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE
                // && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize()
            },
            MJSEnd: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE
                // && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize()
            }
        },
        run: function(b, c) {
            if (this.apiAvailable[b]) this.apiAvailable[b](c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        bgImage: new ig.Image("media/graphics/game/backgrounds/main.png"),
        titleImage: new ig.Image("media/graphics/game/backgrounds/maintitle.png"),
        loadingbar1: new ig.Image("media/graphics/splash/loading/loadframe.png"),
        loadingbar2: new ig.Image("media/graphics/splash/loading/loadbar.png"),
        loadingTextAlpha: 1,
        init: function(b, c) {
            this.parent(b, c);
            this.setupCustomAnimation();
            // ig.ua.mobile 
            // && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize();
            ig.system.context.font = "18px mainfont, Helvetica, Verdana";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.fillText("", 0, 0)
        },
        end: function() {
            this.loadingTextAlpha = 1;
            this.draw();
            this.parent();
            window.setTimeout("ig.system.setGame(MyGame)", 100)
        },
        setupCustomAnimation: function() {
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 200)
        },
        animate: function() {
            var b = Date.now() / 1E3 % 1;
            0.5 < b && (b = 1 - b);
            this.loadingTextAlpha = 1 - 2 * b
        },
        draw: function() {
            this._drawStatus += (this.status - this._drawStatus) / 5;
            var b = ig.system.context;
            b.save();
            b.fillStyle = "#000000";
            b.fillRect(0, 0, ig.system.width, ig.system.height);
            this.bgImage.width < ig.system.width && b.scale(ig.system.width / this.bgImage.width, 1);
            this.bgImage.draw(0, 0);
            b.restore();
            this.titleImage.draw(ig.system.width / 2 - this.titleImage.width / 2, 0);
            var c, d;
            c = Math.floor(0.5 * ig.system.width - 84);
            d = Math.floor(ig.system.height / 2 + 70);
            this.loadingbar1.draw(c,
                d);
            b.drawImage(this.loadingbar2.data, 0, 0, Math.floor(168 * this._drawStatus), 14, c, d, Math.floor(170 * this._drawStatus), 14);
            b.save();
            b.globalAlpha = this.loadingTextAlpha;
            b.fillStyle = "#FFFFFF";
            b.fillText(_STRINGS.Loading.Loading, ig.system.width / 2, d + 40);
            b.restore()
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens = b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, f) {
        var e = {},
            j = {},
            n = {},
            q = 0,
            l = !1,
            m = !1,
            p = !1;
        this.duration = d;
        this.paused = this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onStart = this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, f);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            p = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, e) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);
            else
                for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop, c[b], d[b], e[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            q = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            m = !0;
            l = new ig.Timer;
            for (var d in c) this.initEnd(d, c, j);
            for (d in j) this.initStart(d, j, b, e), this.initDelta(d, n, b, j);
            if (!this.delay && this.onStart) this.onStart()
        };
        this.initDelta = function(b, c, d, e) {
            if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
            else
                for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
        };
        this.propUpdate = function(b, c, d, e, f) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ? d[b] + e[b] * f : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], f)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!m) return !1;
            if (this.delay) {
                if (l.delta() < this.delay) return;
                this.delay = 0;
                l.reset();
                if (this.onStart) this.onStart()
            }
            if (this.paused || this.complete) return !1;
            var c = (l.delta() + q) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in n) this.propUpdate(property, b, e, n, d);
            if (1 <= c) {
                if (0 == this.loopNum || !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    p && p.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in e) this.propSet(property, e, b);
                    q = 0;
                    l.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, j);
                    ig.merge(d, e);
                    ig.merge(e, c);
                    ig.merge(j, d);
                    for (property in j) this.initDelta(property, n, b, j);
                    q = 0;
                    l.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            q += l.delta()
        };
        this.resume = function() {
            this.paused = !1;
            l.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, q += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
    };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn = function(b) {
        return b * b * b * b * b
    };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2, 10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn = function(b) {
        var c, d = 0.1,
            f = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f))
    };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
            f = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
            f = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn = function(b) {
        return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
    };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (key in dynamicClickableEntityDivs) ig.game.hideOverlay([key]);
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length -
                1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        isSupported: !0,
        hash: {},
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            try {
                if (!window.localStorage) return !1
            } catch (b) {
                return !1
            }
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            this.isCapable() || (this.isSupported = !1);
            if (this.isSupported) try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            } else return this.hash[b] ? JSON.parse(this.hash[b]) : null
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            this.isCapable() || (this.isSupported = !1);
            return this.isSupported ? window.localStorage.key(b) : this.hash[b]
        },
        set: function(b, c) {
            this.isCapable() || (this.isSupported = !1);
            if (this.isSupported) try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            } else this.hash[b] = JSON.stringify(c)
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            this.isCapable() || (this.isSupported = !1);
            this.isSupported ? window.localStorage.removeItem(b) : delete this.hash[b]
        },
        clear: function() {
            this.isCapable() || (this.isSupported = !1);
            this.isSupported ? window.localStorage.clear() : this.hash = {}
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-player").defines(function() {
    SoundPlayer = ig.Class.extend({
        tagName: "SoundPlayer",
        stayMuteFlag: !1,
        debug: !1,
        init: function() {
            this.debug && console.log(this.tagName)
        },
        play: function(b) {
            this.debug && console.log("play sound ", b)
        },
        stop: function() {
            this.debug && console.log("stop sound ")
        },
        volume: function() {
            this.debug && console.log("set volume")
        },
        mute: function(b) {
            this.debug && console.log("mute");
            "undefined" === typeof b ? this.stayMuteFlag = !0 : b && (this.stayMuteFlag = !0)
        },
        unmute: function(b) {
            this.debug && console.log("unmute");
            "undefined" === typeof b ? this.stayMuteFlag = !1 : b && (this.stayMuteFlag = !1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactMusicPlayer = SoundPlayer.extend({
        tagName: "ImpactMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) this.soundList[d] = d, ig.music.add(b[d].path + ".*", d);
            c && c.loop && (ig.music.loop = c.loop)
        },
        play: function(b) {
            this.stayMuteFlag || (this.bgmPlaying = !0, "undefined" === typeof b ? ig.music.play(b) : ig.music.play())
        },
        stop: function() {
            this.bgmPlaying = !1;
            ig.music.pause()
        },
        volume: function(b) {
            console.log("impactmusic:", b);
            ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.music.volume
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && this.stop()
        },
        unmute: function(b) {
            this.parent(b);
            this.play()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactSoundPlayer = SoundPlayer.extend({
        tagName: "ImpactSoundPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var f = new ig.Sound(b[d].path + ".*");
                this.soundList[d] = f
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? (console.log(b + " exists"), b.play()) : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            b.stop()
        },
        volume: function(b) {
            ig.soundManager.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.soundManager.volume
        },
        mute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !1
        },
        unmute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !0
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerPlayer = SoundPlayer.extend({
        tagName: "HowlerPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var f = b[d].path,
                    f = new Howl({
                        src: [f + "." + ig.Sound.FORMAT.OGG.ext, f + "." + ig.Sound.FORMAT.MP3.ext]
                    });
                this.soundList[d] = f
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? b.play() : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            "object" === typeof b ? b.stop() : "string" === typeof b && this.soundList[b].stop()
        },
        volume: function(b) {
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute(!0)
        },
        unmute: function(b) {
            this.parent(b);
            Howler.mute(!1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerMusicPlayer = SoundPlayer.extend({
        tagName: "HowlerMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var f = b[d].path,
                    f = new Howl({
                        src: [f + "." + ig.Sound.FORMAT.OGG.ext, f + "." + ig.Sound.FORMAT.MP3.ext],
                        loop: !0,
                        autoplay: !1,
                        onend: function() {}.bind(this)
                    });
                this.soundList[d] = f
            }
        },
        play: function(b) {
            if (!this.stayMuteFlag && !this.bgmPlaying)
                if ("object" === typeof b) this.bgmPlaying = !0, b.play();
                else if ("string" === typeof b) this.bgmPlaying = !0, this.soundList[b].play();
            else
                for (var c in this.soundList) {
                    this.soundList[c].play();
                    this.bgmPlaying = !0;
                    break
                }
        },
        stop: function(b) {
            this.parent(b);
            if (this.bgmPlaying) {
                for (var c in this.soundList) this.soundList[c].stop();
                this.bgmPlaying = !1
            }
        },
        volume: function(b) {
            console.log("howler", b);
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute(!0)
        },
        unmute: function(b) {
            this.parent(b);
            Howler.mute(!1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function() {
    JukeboxPlayer = SoundPlayer.extend({
        tagName: "JukeboxPlayer",
        bgmPlaying: !1,
        soundList: {},
        jukeboxPlayer: null,
        pausePosition: 0,
        premuteVolume: 0,
        minVolume: 0.0010,
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                this.soundList[d] = d;
                var f = b[d].path;
                this.jukeboxPlayer = new jukebox.Player({
                    resources: [f + "." + ig.Sound.FORMAT.OGG.ext, f + "." + ig.Sound.FORMAT.MP3.ext],
                    autoplay: !1,
                    spritemap: {
                        music: {
                            start: b[d].startMp3,
                            end: b[d].endMp3,
                            loop: !0
                        }
                    }
                })
            }
        },
        play: function() {
            this.stayMuteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume())
        },
        stop: function() {
            this.bgmPlaying = !1;
            this.pausePosition = this.jukeboxPlayer.pause()
        },
        volume: function(b) {
            console.log("jukebox:", b);
            0 >= b ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(b) ? this.jukeboxPlayer.setVolume(1) : 1 < b ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(b)
        },
        getVolume: function() {
            return this.jukeboxPlayer.getVolume()
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
        },
        unmute: function(b) {
            this.parent(b);
            this.stayMuteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function() {
    WebaudioMusicPlayer = SoundPlayer.extend({
        tagName: "WebaudioMusicPlayer",
        bgmPlaying: !1,
        isSupported: !1,
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        useHTML5Audio: !1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        _volume: 1,
        soundList: {},
        init: function(b) {
            this.webaudio = {
                compatibility: {},
                gainNode: null,
                buffer: null,
                source_loop: {},
                source_once: {}
            };
            try {
                this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext, this.isSupported = !0
            } catch (c) {
                console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0
            }
            if (this.useHTML5Audio)
                if ("undefined" !== typeof Audio) try {
                    new Audio
                } catch (d) {
                    this.useHTML5Audio = !1
                } else this.useHTML5Audio = !1;
            this.useHTML5Audio && (this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b));
            if (!this.isSupported) return null;
            this.webaudio && this.initWebAudio(b)
        },
        initWebAudio: function(b) {
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode = this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            this.webaudio.gainNode.gain.value = this._volume;
            var c = "start",
                d = "stop",
                f = this.webaudio.context.createBufferSource();
            "function" !== typeof f.start && (c = "noteOn");
            this.webaudio.compatibility.start = c;
            "function" !== typeof f.stop && (d = "noteOff");
            this.webaudio.compatibility.stop = d;
            for (var e in b) {
                this.soundList[e] = e;
                c = b[e].path;
                b = c + "." + ig.Sound.FORMAT.MP3.ext;
                var j = c + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS && (j = b) : (c = navigator.userAgent.toLowerCase(), -1 != c.indexOf("safari") && -1 >= c.indexOf("chrome") && (j = b));
                var n = new XMLHttpRequest;
                n.open("GET", j, !0);
                n.responseType = "arraybuffer";
                n.onload = function() {
                    this.webaudio.context.decodeAudioData(n.response, function(b) {
                        this.webaudio.buffer = b;
                        this.webaudio.source_loop = {};
                        this.bgmPlaying ? this.play() : this.stop()
                    }.bind(this), function() {
                        console.log('Error decoding audio "' + j + '".')
                    })
                }.bind(this);
                n.send();
                break
            }
        },
        initIOSWebAudioUnlock: function() {
            if (this.webaudio) {
                webaudio = this.webaudio;
                var b = function() {
                    var c = webaudio.context,
                        d = c.createBuffer(1, 1, 22050),
                        f = c.createBufferSource();
                    f.buffer = d;
                    f.connect(c.destination);
                    "undefined" === typeof f.start ? f.noteOn(0) : f.start(0);
                    setTimeout(function() {
                        (f.playbackState === f.PLAYING_STATE || f.playbackState === f.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
                    }, 0)
                };
                window.addEventListener("touchend", b, !1)
            }
        },
        initHTML5Audio: function(b) {
            if (this.useHTML5Audio && this.audio) {
                var c = this.audio;
                this.codecs = {};
                this.codecs = {
                    mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
                    m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
                };
                this.is = {
                    ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
                    ie: Boolean(document.all && !window.opera),
                    opera: Boolean(window.opera),
                    chrome: Boolean(window.chrome),
                    safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
                };
                this.playDelay = -60;
                this.stopDelay = 30;
                this.is.chrome && (this.playDelay = -25);
                this.is.chrome && (this.stopDelay = 25);
                this.is.ff && (this.playDelay = -25);
                this.is.ff && (this.stopDelay = 85);
                this.is.opera && (this.playDelay = 5);
                this.is.opera && (this.stopDelay = 0);
                for (var d in b) {
                    this.soundList[d] = d;
                    var f = b[d].path,
                        c = f + "." + ig.Sound.FORMAT.OGG.ext,
                        f = f + "." + ig.Sound.FORMAT.MP3.ext,
                        e = null;
                    this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? e = c : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (e = f);
                    if (e) {
                        ig.ua.mobile ? ig.ua.iOS && (e = f) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (e = f));
                        this.audio.addEventListener("error", function() {
                            this.audio.error && 4 === this.audio.error.code && (this.isSupported = !1)
                        }, !1);
                        this.audio.src = e;
                        this.audio._pos = 0;
                        this.audio.preload = "auto";
                        this.audio.volume = this._volume;
                        this.inactiveAudio = new Audio;
                        this.inactiveAudio.src = e;
                        this.inactiveAudio._pos = 0;
                        this.inactiveAudio.preload = "auto";
                        this.inactiveAudio.volume = this._volume;
                        this.inactiveAudio.load();
                        var j = function() {
                            this._duration = this.audio.duration;
                            this._loaded || (this._loaded = !0);
                            this.bgmPlaying ? this.play() : this.stop();
                            this.audio.removeEventListener("canplaythrough", j, !1)
                        }.bind(this);
                        this.audio.addEventListener("canplaythrough", j, !1);
                        this.audio.load();
                        break
                    }
                }
            }
        },
        play: function(b) {
            if (this.isSupported)
                if (this.bgmPlaying = !0, this.webaudio)
                    if (this.webaudio.buffer) {
                        if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                            this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                            this.webaudio.source_loop.buffer = this.webaudio.buffer;
                            this.webaudio.source_loop.loop = !0;
                            this.webaudio.source_loop.connect(this.webaudio.gainNode);
                            isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime));
                            this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
                            if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration -
                                b));
                            else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
                            this.webaudio.source_loop._playing = !0
                        }
                    } else this.bgmPlaying = !0;
            else if (this.audio) {
                var c = this.audio;
                if (!this.muteFlag) {
                    this.bgmPlaying = !0;
                    isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime));
                    var d = this._duration - b;
                    this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null);
                    this._onEndTimer = setTimeout(function() {
                        this.audio.currentTime = 0;
                        this.audio.pause();
                        this.pausedTime = 0;
                        if (this.inactiveAudio) {
                            var b = this.audio;
                            this.audio = this.inactiveAudio;
                            this.inactiveAudio = b
                        }
                        this.play()
                    }.bind(this), 1E3 * d + this.playDelay);
                    4 === c.readyState || !c.readyState && navigator.isCocoonJS ? (c.readyState = 4, c.currentTime = b, c.muted = this.muteFlag || c.muted, c.volume = this._volume, setTimeout(function() {
                        c.play()
                    }, 0)) : (clearTimeout(this._onEndTimer), this._onEndTimer = null, function() {
                        var b = function() {
                            this.play();
                            c.removeEventListener("canplaythrough", b, !1)
                        }.bind(this);
                        c.addEventListener("canplaythrough", b, !1)
                    }())
                }
            }
        },
        stop: function() {
            this.bgmPlaying = !1;
            if (this.isSupported)
                if (this.webaudio) {
                    if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
                } else if (this.audio) {
                var b = this.audio;
                this.pausedTime = b.currentTime;
                b.currentTime = 0;
                b.pause();
                clearTimeout(this._onEndTimer);
                this._onEndTimer = null
            }
        },
        volume: function(b) {
            this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
        },
        getVolume: function() {
            return !this.isSupported ? 0 : this._volume
        },
        mute: function(b) {
            this.parent(b);
            !1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
        },
        unmute: function(b) {
            this.parent(b);
            !this.stayMuteFlag && !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-info").defines(function() {
    SoundInfo = ig.Class.extend({
        FORMATS: {
            OGG: ".ogg",
            MP3: ".mp3"
        },
        sfx: {
            kittyopeningSound: {
                path: "media/audio/opening/kittyopening"
            },
            staticSound: {
                path: "media/audio/play/static"
            },
            openingSound: {
                path: "media/audio/opening/opening"
            },
            button: {
                path: "media/audio/sfx/button"
            },
            hit: {
                path: "media/audio/sfx/hit2"
            },
            step: {
                path: "media/audio/sfx/step"
            },
            jump: {
                path: "media/audio/sfx/jump"
            },
            slide: {
                path: "media/audio/sfx/woosh"
            },
            crunch: {
                path: "media/audio/sfx/crunch"
            },
            coin: {
                path: "media/audio/sfx/ding"
            },
            chirp: {
                path: "media/audio/sfx/chirp"
            },
            button_in: {
                path: "media/audio/sfx/button_in"
            },
            power: {
                path: "media/audio/sfx/power"
            }
        },
        bgm: {
            background: {
                path: "media/audio/music/bgm",
                startOgg: 0.025,
                endOgg: 17.215,
                startMp3: 0.075,
                endMp3: 17.241
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        bgmPlayer: null,
        sfxPlayer: null,
        focusBlurMute: !1,
        soundInfo: new SoundInfo,
        init: function() {
            console.log("Initiating sound handler");
            this.initWindowHandler();
            ig.ua.mobile ? (this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                loop: !0
            }), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
                loop: !0
            }))) : (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                loop: !0
            }), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
                loop: !0
            })));
            this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx)
        },
        checkBGM: function() {
            return this.bgmPlayer.stayMuteFlag
        },
        checkSFX: function() {
            return this.sfxPlayer.stayMuteFlag
        },
        muteSFX: function(b) {
            this.sfxPlayer && this.sfxPlayer.mute(b)
        },
        muteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.mute(b)
        },
        unmuteSFX: function(b) {
            this.sfxPlayer && this.sfxPlayer.unmute(b)
        },
        unmuteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.unmute(b)
        },
        muteAll: function(b) {
            this.muteSFX(b);
            this.muteBGM(b)
        },
        unmuteAll: function(b) {
            this.unmuteSFX(b);
            this.unmuteBGM(b)
        },
        forceMuteAll: function() {
            this.focusBlurMute || this.muteAll(!1);
            this.focusBlurMute = !0
        },
        forceUnMuteAll: function() {
            this.focusBlurMute && (this.unmuteAll(!1), this.focusBlurMute = !1)
        },
        initWindowHandler: function() {
            "true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function() {
                ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }), $(window).blur(function() {
                ig.game && ig.game.pauseGame();
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })) : (window.onfocus = function() {
                ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, window.onblur = function() {
                ig.game && ig.game.pauseGame();
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })
        },
        initPowerButtonFix: function() {
            var b = this.getHiddenProp();
            b && (b = b.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(b, this.visChange));
            window.addEventListener("pagehide", function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            }, !1);
            window.addEventListener("pageshow", function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, !1)
        },
        getHiddenProp: function() {
            var b = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var c = 0; c < b.length; c++)
                if (b[c] + "Hidden" in document) return b[c] + "Hidden";
            return null
        },
        isHidden: function() {
            var b = this.getHiddenProp();
            return !b ? !1 : document[b]
        },
        visChange: function() {
            ig.soundHandler.isHidden() ? ig.soundHandler && ig.soundHandler.forceMuteAll() : ig.soundHandler && ig.soundHandler.forceUnMuteAll()
        },
        saveVolume: function() {
            this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
            this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
        },
        forceLoopBGM: function() {
            var b;
            if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
                var c = this.bgmPlayer.jukeboxPlayer;
                if (c) {
                    null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase());
                    b = Boolean(window.chrome);
                    !window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
                    var d = 0.1;
                    ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3)));
                    c.settings.spritemap.music && (b = c.settings.spritemap.music.end - d, c.getCurrentTime() >= b && (b = c.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (c.play(b, !0), this.forcelooped = !0, setTimeout(function() {
                        ig.soundHandler.forcelooped = !1
                    }, d)) : c.setCurrentTime(b)))
                } else "ImpactMusicPlayer" == this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), b = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), d = 0.1, ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3))), c = 0, "mp3" == ig.soundManager.format.ext && (c = 0.05), ig.music.currentTrack && (b = ig.music.currentTrack.duration - d, ig.music.currentTrack.currentTime >= b && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime = c, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function() {
                    ig.soundHandler.forcelooped = !1
                }, d)) : ig.music.currentTrack.currentTime = c)))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.storage").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.fake-storage").requires("impact.impact", "plugins.impact-storage").defines(function() {
    ig.FakeStorage = ig.Class.extend({
        data: {},
        supported: !1,
        convert: function() {
            try {
                return localStorage.setItem("testStorage", "testStorage"), localStorage.removeItem("testStorage"), localStorageSupport = "localStorage" in window && null !== window.localStorage, new ig.Storage
            } catch (b) {
                return this
            }
        },
        isSet: function(b) {
            return this.data[b] ? !0 : !1
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        initUnset: function(b, c) {
            this.get(b) || this.set(b, c)
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        set: function(b, c) {
            this.data[b] = c
        },
        get: function(b) {
            return this.data[b]
        },
        getBool: function(b) {
            return !!this.get(b)
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.mouse").defines(function() {
    Mouse = ig.Class.extend({
        bindings: {
            click: [ig.KEY.MOUSE1]
        },
        init: function() {
            ig.input.initMouse();
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        },
        getPos: function() {
            if (ig.ua.mobile) var b = ig.input.mouse.x / widthRatio,
                c = ig.input.mouse.y / heightRatio;
            else b = ig.input.mouse.x, c = ig.input.mouse.y;
            return new Vector2(b, c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function() {
    Keyboard = ig.Class.extend({
        bindings: {
            jump: [ig.KEY.W, ig.KEY.UP_ARROW],
            moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
            moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
            shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
        },
        init: function() {
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function() {
    ig.PADKEY = {
        BUTTON_0: 0,
        PADBUTTON_1: 1,
        BUTTON_2: 2,
        BUTTON_3: 3,
        BUTTON_LEFT_BUMPER: 4,
        BUTTON_RIGHT_BUMPER: 5,
        BUTTON_LEFT_TRIGGER: 6,
        BUTTON_RIGHT_TRIGGER: 7,
        BUTTON_LEFT_JOYSTICK: 10,
        BUTTON_RIGHT_JOYSTICK: 11,
        BUTTON_DPAD_UP: 12,
        BUTTON_DPAD_DOWN: 13,
        BUTTON_DPAD_LEFT: 14,
        BUTTON_DPAD_RIGHT: 15,
        BUTTON_MENU: 16,
        AXIS_LEFT_JOYSTICK_X: 0,
        AXIS_LEFT_JOYSTICK_Y: 1,
        AXIS_RIGHT_JOYSTICK_X: 2,
        AXIS_RIGHT_JOYSTICK_Y: 3
    };
    ig.GamepadInput = ig.Class.extend({
        isInit: !1,
        isSupported: !1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: {
            x: 0,
            y: 0
        },
        rightStick: {
            x: 0,
            y: 0
        },
        start: function() {
            if (!this.isInit) {
                this.isInit = !0;
                var b = navigator.getGamepads || navigator.webkitGetGamepads;
                b && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
                this.isSupported = b
            }
        },
        isAvailable: function() {
            return this.isInit && this.isSupported
        },
        buttonPressed: function(b) {
            return "object" == typeof b ? b.pressed : 1 == b
        },
        buttonDown: function(b) {
            if (b = this.bindings[b]) this.states[b] = !0, this.downLocks[b] || (this.presses[b] = !0, this.downLocks[b] = !0)
        },
        buttonUp: function(b) {
            if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b]) this.states[b] = !1, this.releases[b] = !0, this.upLocks[b] = !0
        },
        clearPressed: function() {
            for (var b in this.releases) this.states[b] = !1, this.downLocks[b] = !1;
            this.releases = {};
            this.presses = {};
            this.upLocks = {}
        },
        bind: function(b, c) {
            this.bindings[b] = c
        },
        unbind: function(b) {
            this.releases[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.states = {};
            this.presses = {};
            this.releases = {};
            this.downLocks = {};
            this.upLocks = {}
        },
        state: function(b) {
            return this.states[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return this.releases[b]
        },
        clamp: function(b, c, d) {
            return b < c ? c : b > d ? d : b
        },
        pollGamepads: function() {
            if (this.isSupported) {
                this.leftStick.x = 0;
                this.leftStick.y = 0;
                this.rightStick.x = 0;
                this.rightStick.y = 0;
                this.list = navigator.getGamepads();
                for (var b in this.bindings) {
                    for (var c = !1, d = 0; d < this.list.length; d++) {
                        var f = this.list[d];
                        if (f && f.buttons && this.buttonPressed(f.buttons[b])) {
                            c = !0;
                            break
                        }
                    }
                    c ? this.buttonDown(b) : this.buttonUp(b)
                }
                for (d = 0; d < this.list.length; d++)
                    if ((f = this.list[d]) && f.axes) {
                        b = f.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
                        var c = f.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
                            e = f.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
                            f = f.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
                        this.leftStick.x += isNaN(b) ? 0 : b;
                        this.leftStick.y += isNaN(c) ? 0 : c;
                        this.rightStick.x += isNaN(e) ? 0 : e;
                        this.rightStick.y += isNaN(f) ? 0 : f
                    }
                0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function() {
    Gamepad = ig.Class.extend({
        bindings: {
            padJump: [ig.PADKEY.BUTTON_0]
        },
        init: function() {
            ig.gamepadInput.start();
            for (var b in this.bindings)
                for (var c = 0; c < this.bindings[b].length; c++) ig.gamepadInput.bind(this.bindings[b][c], b)
        },
        press: function() {},
        held: function() {},
        release: function() {}
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function() {
    Multitouch = ig.Class.extend({
        init: function() {
            ig.multitouchInput.start()
        },
        getTouchesPos: function() {
            if (ig.ua.mobile) {
                if (0 < ig.multitouchInput.touches.length) {
                    for (var b = [], c = 0; c < ig.multitouchInput.touches.length; c++) {
                        var d = ig.multitouchInput.touches[c];
                        b.push({
                            x: d.x,
                            y: d.y
                        })
                    }
                    return b
                }
                return null
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function() {
    ig.MultitouchInput = ig.Class.extend({
        isStart: !1,
        touches: [],
        multitouchCapable: !1,
        lastEventUp: null,
        start: function() {
            this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)))
        },
        touchmove: function(b) {
            if (ig.ua.touchDevice) {
                var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                    d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                    c = ig.system.scale * (c / ig.system.realWidth),
                    d = ig.system.scale * (d / ig.system.realHeight);
                if (b.touches) {
                    for (; 0 < this.touches.length;) this.touches.pop();
                    !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                    var f = {
                        left: 0,
                        top: 0
                    };
                    ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
                    for (var e = 0; e < b.touches.length; e++) {
                        var j = b.touches[e];
                        j && this.touches.push({
                            x: (j.clientX - f.left) / c,
                            y: (j.clientY - f.top) / d
                        })
                    }
                } else this.windowMove(b)
            }
        },
        touchdown: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) this.windowKeyDown(b);
            else if (ig.ua.touchDevice && b.touches) {
                for (; 0 < this.touches.length;) this.touches.pop();
                !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                var f = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
                for (var e = 0; e < b.touches.length; e++) {
                    var j = b.touches[e];
                    j && this.touches.push({
                        x: (j.clientX - f.left) / c,
                        y: (j.clientY - f.top) / d
                    })
                }
            }
        },
        touchup: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            parseInt(ig.system.canvas.offsetHeight);
            c = ig.system.scale * (c / ig.system.realWidth);
            if (window.navigator.msPointerEnabled) this.windowKeyUp(b);
            else {
                this.lastEventUp = b;
                var d = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
                if (ig.ua.touchDevice) {
                    b =
                        (b.changedTouches[0].clientX - d.left) / c;
                    for (c = 0; c < this.touches.length; c++) this.touches[c].x >= b - 40 && this.touches[c].x <= b + 40 && this.touches.splice(c, 1)
                }
            }
        },
        windowKeyDown: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) {
                var f = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
                b = b.changedTouches ? b.changedTouches : [b];
                for (var e = 0; e < b.length; ++e) {
                    for (var j = b[e], n = "undefined" != typeof j.identifier ? j.identifier : "undefined" != typeof j.pointerId ? j.pointerId : 1, q = (j.clientX - f.left) / c, j = (j.clientY - f.top) / d, l = 0; l < this.touches.length; ++l) this.touches[l].identifier == n && this.touches.splice(l, 1);
                    this.touches.push({
                        x: q,
                        y: j,
                        identifier: n
                    })
                }
                for (c = 0; c < this.touches.length; c++);
            }
        },
        windowKeyUp: function(b) {
            b = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId :
                1;
            for (var c = 0; c < this.touches.length; ++c) this.touches[c].identifier == b && this.touches.splice(c, 1);
            for (; 0 < this.touches.length;) this.touches.pop()
        },
        windowMove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight),
                f = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
            if (window.navigator.msPointerEnabled)
                for (var e = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1, j = 0; j < this.touches.length; ++j)
                    if (this.touches[j].identifier == e) {
                        var n = (b.clientY - f.top) / d;
                        this.touches[j].x = (b.clientX - f.left) / c;
                        this.touches[j].y = n
                    }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.fake-storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input").defines(function() {
    IoManager = ig.Class.extend({
        storage: null,
        localStorageSupport: !1,
        gamekey: "TeamKaboom",
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function() {
            ig.multitouchInput = new ig.MultitouchInput;
            ig.gamepadInput = new ig.GamepadInput;
            this.unbindAll();
            this.initStorage();
            this.initMouse();
            this.initKeyboard()
        },
        unbindAll: function() {
            ig.input.unbindAll();
            ig.gamepadInput.unbindAll()
        },
        initStorage: function() {
            this.storage = this._supportsLocalStorage() ? new ig.Storage : new ig.FakeStorage;
            this.storage.initUnset("dtb-level", 1);
            this.storage.initUnset("dtb-sfx", !0);
            this.storage.initUnset("dtb-bgm", !0)
        },
        initMouse: function() {
            this.mouse = new Mouse
        },
        initKeyboard: function() {
            this.keyboard = new Keyboard
        },
        initMultitouch: function() {
            this.multitouch = new Multitouch
        },
        initGamepad: function() {
            this.gamepad = new Gamepad
        },
        press: function(b) {
            return ig.input.pressed(b) || this.gamepad.press(b) ? !0 : !1
        },
        held: function(b) {
            return ig.input.state(b) || this.gamepad.state(b) ? !0 : !1
        },
        release: function(b) {
            return ig.input.released(b) || this.gamepad.released(b) ? !0 : !1
        },
        getClickPos: function() {
            return this.mouse.getPos()
        },
        getTouchesPos: function() {
            return this.multitouch.getTouchesPos()
        },
        checkOverlap: function(b, c, d, f, e) {
            return b.x > c + f || b.x < c || b.y > d + e || b.y < d ? !1 : !0
        },
        _supportsLocalStorage: function() {
            try {
                return localStorage.setItem("test", "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage
            } catch (b) {
                return this.localStorageSupport
            }
        },
        storageIsSet: function(b) {
            return !this.localStorageSupport ? null : this.storage.isSet(b)
        },
        storageGet: function(b) {
            return !this.localStorageSupport ? null : this.storage.get(b)
        },
        storageSet: function(b, c) {
            if (!this.localStorageSupport) return null;
            this.storage.set(b, c)
        },
        assert: function(b, c, d) {
            if (c !== d) throw "actualValue:" + c + " not equal to testValue:" + d + " at " +
                b;
        }
    })
});
ig.baked = !0;
ig.module("plugins.perspective").defines(function() {
    ig.Perspective = ig.Class.extend({
        scrollPercent: 0,
        segments: 50,
        segmentIndex: 0,
        framesContext: [],
        scrollTotalHeight: null,
        controlPointsRoad: [{
            x: 274,
            y: 144
        }, {
            x: 367,
            y: 144
        }, {
            x: 640,
            y: 770
        }, {
            x: 0,
            y: 770
        }],
        controlPointsBg: [{
            x: 0,
            y: 144
        }, {
            x: 640,
            y: 144
        }, {
            x: 1140,
            y: 640
        }, {
            x: -500,
            y: 640
        }],
        drawSkeleton: !1,
        maximumTriangleCount: 200,
        maxAllowableBadness: 0.01,
        rendered: 0,
        init: function(b, c) {
            this.image = b;
            (this.isRoad = c) ? (this.controlPoints = this.controlPointsRoad, this.segments = 60) : (this.controlPoints = this.controlPointsBg, this.segments = 35);
            this.sx = this.controlPoints[3].x;
            this.sy = this.controlPoints[0].y;
            this.sw = this.controlPoints[2].x - this.controlPoints[3].x;
            this.sh = this.controlPoints[2].y - this.controlPoints[0].y;
            this.smallScale = (this.controlPoints[1].x - this.controlPoints[0].x) / this.image.width;
            this.bigScale = (this.controlPoints[2].x - this.controlPoints[3].x) / this.image.width;
            this.scaleDiff = Math.abs(this.bigScale - this.smallScale);
            this.scrollTotalHeight = this.image.height / 3;
            this.clippedImageHeight =
                Math.floor(this.image.height - this.scrollTotalHeight);
            this.srcCtx = this.create_canvas_context(this.image.width, this.clippedImageHeight);
            this.prerenderFrames()
        },
        prerenderFrames: function() {
            this.rendered > this.segments ? !0 == this.isRoad ? ig.game.roadRendered = !0 : ig.game.seaRendered = !0 : (this.framesContext.push(this.create_canvas_context(ig.system.width, ig.system.height)), this.redrawImg(this.rendered), this.renderPerspective(this.rendered), this.rendered++)
        },
        redrawImg: function(b) {
            this.srcCtx.drawImage(this.image.data, 0, Math.floor(this.scrollTotalHeight * (this.segments - b) / this.segments), this.image.width, this.clippedImageHeight, 0, 0, this.image.width, this.clippedImageHeight)
        },
        renderPerspective: function(b) {
            for (var c = 0; c < this.sh; c++) {
                var d = this.framesContext[b],
                    f = 1;
                0 < this.sh && (f = c / (this.sh - 1));
                var e = this.smallScale + this.scaleDiff * f;
                d.save();
                var j = Math.floor(0.5 * this.image.width);
                d.translate(0.5 * ig.system.width, this.sy + c);
                d.scale(e, 1);
                f /= e;
                f %= 1;
                f = Math.floor(f * (this.clippedImageHeight - 1)) - 1;
                0 > f && (f = 0);
                d.drawImage(this.srcCtx.canvas,
                    0, f, this.image.width, 1, -j, 0, this.image.width, 1);
                d.restore()
            }
        },
        create_canvas_context: function(b, c) {
            var d = document.createElement("canvas");
            d.width = b;
            d.height = c;
            return d.getContext("2d")
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0)
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash_320x480: new ig.AnimationSheet("branding/splash_320x480.png", 320, 200),
        splash_480x640: new ig.AnimationSheet("branding/splash_480x640.png", 480, 240),
        init: function(b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200, this.anims.idle = new ig.Animation(this.splash_320x480, 0, [0], !0)) : (this.size.x = 480, this.size.y = 240, this.anims.idle = new ig.Animation(this.splash_480x640, 0, [0], !0));
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, !0)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var e = ig.$new("div");
            e.id = b;
            document.body.appendChild(e);
            $("#" + e.id).css("float", "left");
            $("#" + e.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var j = window.innerHeight / mobileHeight,
                    n = window.innerWidth / mobileWidth;
                $("#" + e.id).css("left", this.pos.x * n);
                $("#" + e.id).css("top", this.pos.y * j);
                $("#" + e.id).css("width", this.size.x * n);
                $("#" + e.id).css("height", this.size.y * j)
            } else j = w / 2 - destW / 2, n = h / 2 - destH / 2, console.log(j, n), $("#" + e.id).css("left", j + this.pos.x * multiplier), $("#" + e.id).css("top", n + this.pos.y * multiplier), $("#" + e.id).css("width", this.size.x * multiplier), $("#" + e.id).css("height", this.size.y * multiplier);
            f ? $("#" + e.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + e.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.parent()
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch (f) {
                    console.log(f)
                }
                this.kill()
            }
        }
    })
});
this.START_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.branding-logo").requires("impact.entity").defines(function() {
    EntityBrandingLogo = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        size: {
            x: 32,
            y: 32
        },
        zIndex: 10001,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, d && d.centralize && (this.pos.x = ig.system.width /
                2 - this.size.x / 2, console.log("centralize true ... centering branded logo ..."))) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle;
            d ? (console.log("branding settings found ... using that div layer name"), b = d.div_layer_name) : b = "branding-logo";
            _SETTINGS.Branding.Logo.LinkEnabled && (console.log("logo link enabled"), this.checkClickableLayer(b, _SETTINGS.Branding.Logo.Link, !0));
            console.log("branding logo spawed ...")
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var e = ig.$new("div");
            e.id = b;
            document.body.appendChild(e);
            $("#" + e.id).css("float", "left");
            $("#" + e.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var j = window.innerHeight / mobileHeight,
                    n = window.innerWidth /
                    mobileWidth;
                $("#" + e.id).css("left", this.pos.x * n);
                $("#" + e.id).css("top", this.pos.y * j);
                $("#" + e.id).css("width", this.size.x * n);
                $("#" + e.id).css("height", this.size.y * j)
            } else j = w / 2 - destW / 2, n = h / 2 - destH / 2, console.log(j, n), $("#" + e.id).css("left", j + this.pos.x * multiplier), $("#" + e.id).css("top", n + this.pos.y * multiplier), $("#" + e.id).css("width", this.size.x * multiplier), $("#" + e.id).css("height", this.size.y * multiplier);
            f ? $("#" + e.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" +
                d + "'></a>") : $("#" + e.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
this.END_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.button-more-games").requires("impact.entity").defines(function() {
    EntityButtonMoreGames = ig.Entity.extend({
        size: {
            x: 138,
            y: 22
        },
        zIndex: 750,
        type: ig.Entity.TYPE.B,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            setTimeout(this.spawnDiv(), 5)
        },
        spawnDiv: function() {
            if (!this.canSpawnDiv)
                if (this.canSpawnDiv = !0, _SETTINGS.MoreGames.Enabled) {
                    var b;
                    b = this.divLayerName ? this.divLayerName : "more-games";
                    this.checkClickableLayer(b, _SETTINGS.MoreGames.Link, _SETTINGS.MoreGames.NewWindow);
                    if (ig.ua.mobile) {
                        var c = window.innerHeight / mobileHeight,
                            d = window.innerWidth / mobileWidth;
                        $("#" + b).css("left", this.pos.x * d);
                        $("#" + b).css("top", this.pos.y * c);
                        $("#" + b).css("width", this.size.x * d);
                        $("#" + b).css("height", this.size.y * c)
                    } else c = document.getElementById("game").offsetLeft, d = document.getElementById("game").offsetTop, $("#" + b).css("left", c + this.pos.x * multiplier), $("#" + b).css("top", d + this.pos.y * multiplier), $("#" + b).css("width", this.size.x * multiplier), $("#" + b).css("height", this.size.y * multiplier)
                } else this.kill()
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var e = ig.$new("div");
            e.id = b;
            document.body.appendChild(e);
            $("#" + e.id).css("float", "left");
            $("#" + e.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var j = window.innerHeight / mobileHeight,
                    n = window.innerWidth / mobileWidth;
                $("#" + e.id).css("left", this.pos.x * n);
                $("#" + e.id).css("top", this.pos.y * j);
                $("#" + e.id).css("width", this.size.x * n);
                $("#" + e.id).css("height", this.size.y * j)
            } else j = document.getElementById("game").offsetLeft, n = document.getElementById("game").offsetTop, $("#" + e.id).css("left", j + this.pos.x * multiplier), $("#" + e.id).css("top", n + this.pos.y * multiplier), $("#" + e.id).css("width", this.size.x * multiplier), $("#" + e.id).css("height", this.size.y * multiplier);
            f ? $("#" + e.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + e.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hide: function() {
            // var b = "more-games";
            // this.divLayerName && (b = this.divLayerName);
            // document.getElementById(b).style.visibility = "hidden";
            // $("#" + b).hide()
        },
        show: function() {
            // var b = "more-games";
            // this.divLayerName && (b = this.divLayerName);
            // document.getElementById(b).style.visibility = "visible";
            // $("#" + b).show()
        },
        clicking: function() {},
        released: function() {},
        over: function() {},
        leave: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.sfxPlayer.play("openingSound")
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer = null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                    d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var f = 0, e = 1; 48 >= e; e += 1) b.lineTo(0 + 800 * Math.cos(2 * e * Math.PI / 48), 0 + 800 * Math.sin(2 * e * Math.PI / 48)), f++, 2 == f && (f = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim, 166,
                160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.sfxPlayer.play("kittyopeningSound")
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) : (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        checkAgainst: ig.Entity.TYPE.BOTH,
        isFirstPressed: !1,
        isPressed: !1,
        isReleased: !1,
        isHovering: !1,
        hoveringItem: null,
        objectArray: [],
        clickedObjectList: [],
        ignorePause: !0,
        zIndex: 5E3,
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isFirstPressed && "function" == typeof b.clicked && (b.clicked(), this.addToClickedObjectList(b));
            this.isPressed && !this.isReleased && "function" == typeof b.clicking && b.clicking();
            this.isReleased && "function" == typeof b.released && (b.released(), this.removeFromClickedObjectList(b))
        },
        downAnim: function() {},
        upAnim: function() {},
        refreshPos: function() {
            this.pos.x = ig.game.io.getClickPos().x - this.size.x / 2;
            this.pos.y = ig.game.io.getClickPos().y - this.size.y / 2
        },
        update: function() {
            this.parent();
            this.refreshPos();
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            if (null != b) null != this.hoveringItem ? (this.hoveringItem != b && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(), "function" == typeof b.over && b.over()), this.isReleased && null != this.clickedObjectList[0] && this.hoveringItem != this.clickedObjectList[0] && ("function" == typeof this.clickedObjectList[0].releasedOutside && this.clickedObjectList[0].releasedOutside(), this.clickedObjectList = [])) : "function" == typeof b.over && b.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = [];
            else if (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
                for (b = 0; b < this.clickedObjectList.length; b++) c = this.clickedObjectList[b], "function" == typeof c.releasedOutside && c.releasedOutside();
                this.clickedObjectList = []
            }
            this.isFirstPressed = ig.input.pressed("click");
            this.isReleased = ig.input.released("click");
            this.isPressed = ig.input.state("click");
            ig.input.pressed("click") && this.downAnim();
            ig.input.released("click") && this.upAnim()
        },
        addToClickedObjectList: function(b) {
            this.clickedObjectList.push(b)
        },
        removeFromClickedObjectList: function(b) {
            for (var c = [], d = 0; d < this.clickedObjectList.length; d++) {
                var f = this.clickedObjectList[d];
                f != b && c.push(f)
            }
            this.clickedObjectList = c
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 10,
            y: 10
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.menu.dialogue").requires("impact.entity", "plugins.tween").defines(function() {
    EntityDialogue = ig.Entity.extend({
        size: {
            x: 324,
            y: 641
        },
        pos0: {},
        zIndex: 1E5,
        animSheet: new ig.AnimationSheet("media/graphics/game/ui/game/dialogue.png", 324, 641),
        text: {},
        outDelay: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.pos0.y = (ig.system.height - this.size.y) / 2;
            this.pos0.yu = -this.size.y;
            this.pos0.yd = ig.system.height;
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = this.pos0.yu;
            this.moveInTime = 0.34
        },
        draw: function() {
            this.parent()
        },
        drawText: function(b, c, d, f, e, j) {
            ig.system.context.fillStyle = e || "#FFFFFF";
            ig.system.context.textAlign = j || "left";
            ig.system.context.font = f || "25pt chelsea";
            ig.system.context.fillText(b, c || 0, d || 0)
        },
        moveIn: function() {
            this.tween({
                pos: {
                    y: this.pos0.y
                }
            }, this.moveInTime, {
                easing: ig.Tween.Easing.Quadratic.EaseIn,
                onComplete: function() {
                    this.callback()
                }.bind(this)
            }).start()
        },
        moveOut: function() {
            this.tween({
                pos: {
                    y: this.pos0.yd
                }
            }, 0.34, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                delay: this.outDelay,
                onComplete: function() {
                    this.kill()
                }.bind(this)
            }).start()
        },
        callback: function() {}
    })
});
ig.baked = !0;
ig.module("game.buttons.button").requires("impact.entity", "plugins.data.vector").defines(function() {
    EntityButton = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        size: {
            x: 48,
            y: 48
        },
        fillColor: null,
        zIndex: 25E4,
        state: "",
        enabled: !0,
        scale: {
            x: 1,
            y: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            !ig.global.wm && !isNaN(d.zIndex) && (this.zIndex = d.zIndex);
            b = Math.floor(256 * Math.random());
            c = Math.floor(256 * Math.random());
            d = Math.floor(256 * Math.random());
            this.fillColor = "rgba(" + b + "," + d + "," + c + ",1)"
        },
        clicked: function() {
            this.enabled && (this.state = "clicked", this.tween({
                scale: {
                    x: 0.82,
                    y: 0.82
                }
            }, 0.025).start(), ig.soundHandler.sfxPlayer.play("button"))
        },
        clicking: function() {
            throw "no implementation on clicking()";
        },
        released: function() {
            "clicked" == this.state && this.enabled && (this.state = "released", this.tween({
                scale: {
                    x: 1,
                    y: 1
                }
            }, 0.025, {
                onComplete: function() {
                    this.callback()
                }.bind(this)
            }).start())
        },
        leave: function() {
            "clicked" == this.state && this.enabled && (this.state = "idle", this.tween({
                scale: {
                    x: 1,
                    y: 1
                }
            }, 0.025).start())
        },
        draw: function() {
            var b = ig.system.context;
            b.save();
            b.translate(ig.system.getDrawPos(this.pos.x.round() + this.size.x * (1 - this.scale.x) / 2), ig.system.getDrawPos(this.pos.y.round() + this.size.y * (1 - this.scale.y) / 2));
            b.scale(this.scale.x, this.scale.y);
            this.currentAnim && this.currentAnim.draw(0, 0);
            b.restore()
        },
        callback: function() {},
        drawText: function(b, c, d, f, e, j) {
            ig.system.context.fillStyle = e || "#FFFFFF";
            ig.system.context.textAlign = j || "left";
            ig.system.context.font = f || "30pt mainfont";
            ig.system.context.fillText(b,
                c || 0, d || 0)
        }
    })
});
ig.baked = !0;
ig.module("game.buttons.onoff").requires("game.buttons.button").defines(function() {
    EntityOnoffBtn = EntityButton.extend({
        size: {
            x: 65,
            y: 30
        },
        offset: {
            x: 0,
            y: 0
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/ui/game/onoff.png", 25, 25),
        control: null,
        isOn: !0,
        companion: null,
        text: "ON",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("on", 1, [0]);
            this.addAnim("off", 1, [1]);
            this.isOn ? (this.currentAnim = this.anims.on, this.enabled = !1) : (this.currentAnim = this.anims.off, this.enabled = !0)
        },
        clicked: function() {
            ig.soundHandler.sfxPlayer.play("button");
            this.enabled && !this.isOn && (this.transform(), this.companion.transform(), this.enabled = !1)
        },
        transform: function() {
            this.tween({
                currentAnim: {
                    alpha: 0
                }
            }, 0.2, {
                onComplete: function() {
                    this.currentAnim = this.isOn ? this.anims.off : this.anims.on;
                    this.isOn = !this.isOn;
                    this.tween({
                        currentAnim: {
                            alpha: 1
                        }
                    }, 0.2, {
                        onComplete: function() {
                            this.enabled = !0;
                            this.callback()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start()
        },
        setCompanion: function(b) {
            this.companion = b
        },
        draw: function() {
            this.parent();
            this.drawText(this.text, this.pos.x + 27, this.pos.y +
                19, "14pt chelsea", "#FFFFFF", "left")
        },
        clicking: function() {},
        released: function() {},
        leave: function() {},
        callback: function() {}
    })
});
ig.baked = !0;
ig.module("game.menu.slider").requires("impact.entity").defines(function() {
    EntitySlider = ig.Entity.extend({
        size: {
            x: 35,
            y: 35
        },
        offset: {
            x: -5,
            y: -5
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/ui/game/slider.png", 25, 25),
        xLength: null,
        type: ig.Entity.TYPE.B,
        ignorePause: !0,
        name: "",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.cons = this.xLength / 100;
            this.x0 = b - 17.5;
            this.x1 = this.x0 + this.xLength;
            this.isClicked = !1;
            this.xTemp = this.pointerDx = 0;
            b = "sliderBgm" == this.name ? ig.game.storage.get("EFA.musicVolume") : ig.game.storage.get("EFA.sfxVolume");
            this.pos.x = 100 * b * this.cons + this.x0
        },
        clicked: function() {
            this.isClicked = !0;
            this.pointerDx = ig.game.io.getClickPos().x - this.pos.x
        },
        clicking: function() {},
        released: function() {
            this.isClicked = !1;
            var b = (this.pos.x - this.x0) / this.xLength;
            "sliderBgm" == this.name ? (ig.game.storage.set("EFA.musicVolume", b), ig.soundHandler.bgmPlayer.volume(b)) : (ig.game.storage.set("EFA.sfxVolume", b), ig.soundHandler.sfxPlayer.volume(b));
            ig.soundHandler.sfxPlayer.play("button")
        },
        releasedOutside: function() {
            this.released()
        },
        update: function() {
            this.parent();
            this.isClicked && (this.xTemp = ig.game.io.getClickPos().x - this.pointerDx, this.pos.x = this.xTemp >= this.x0 && this.xTemp <= this.x1 ? this.xTemp : this.xTemp < this.x0 ? this.x0 : this.x1)
        }
    })
});
ig.baked = !0;
ig.module("game.menu.options").requires("game.menu.dialogue", "game.buttons.onoff", "game.menu.slider").defines(function() {
    EntityOptionsMenu = EntityDialogue.extend({
        bar: new ig.Image("media/graphics/game/ui/game/bar.png", 122, 7),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.play = ig.game.spawnEntity(EntityPlayBtn, 0, ig.system.height - 265, {
                zIndex: this.zIndex + 1,
                text: _STRINGS.Game.Play
            });
            this.home = ig.game.spawnEntity(EntityHomeBtn, 0, ig.system.height - 180, {
                zIndex: this.zIndex + 1,
                isHome: !0
            });
            this.title = ig.game.spawnEntity(EntityTitle, 0, ig.system.height / 2 - 200, {
                text: _STRINGS.Game.Options
            });
            this.title.callback3 = function() {
                this.play.moveIn()
            }.bind(this);
            this.play.callback3 = function() {
                this.home.moveIn()
            }.bind(this);
            this.title.pos0.x = this.play.pos0.x - this.title.size.x / 2 + 18;
            this.text.Bgm = _STRINGS.Game.Music;
            this.text.Sfx = _STRINGS.Game.Sound;
            this.text.Tutorial = _STRINGS.Game.Tutorial;
            this.slideBarX = this.pos.x + 140;
            this.sliderBgm = ig.game.spawnEntity(EntitySlider, this.slideBarX, this.pos.y + 110, {
                xLength: this.bar.width,
                zIndex: this.zIndex + 3,
                name: "sliderBgm"
            });
            this.sliderSfx = ig.game.spawnEntity(EntitySlider, this.slideBarX, this.pos.y + 160, {
                xLength: this.bar.width,
                zIndex: this.zIndex + 4,
                name: "sliderSfx"
            });
            this.onoff1 = ig.game.spawnEntity(EntityOnoffBtn, this.pos.x + 140, 0, {
                zIndex: this.zIndex + 5,
                isOn: ig.game.doTutorialFlag
            });
            this.onoff2 = ig.game.spawnEntity(EntityOnoffBtn, this.pos.x + 205, 0, {
                isOn: !this.onoff1.isOn,
                companion: this.onoff1,
                zIndex: this.zIndex + 5,
                text: "OFF"
            });
            this.onoff1.setCompanion(this.onoff2);
            this.onoff1.callback = function() {
                ig.game.doTutorialFlag = this.onoff1.isOn
            }.bind(this);
            ig.game.sortEntitiesDeferred();
            this.moveIn()
        },
        callback: function() {
            this.parent();
            this.title.moveIn()
        },
        draw: function() {
            this.parent();
            this.drawText(this.text.Bgm, this.pos.x + 58, this.pos.y + 225, "24px chelsea", "#ffce48", "left");
            this.drawText(this.text.Sfx, this.pos.x + 58, this.pos.y + 275, "24px chelsea", "#ffce48", "left");
            this.drawText(this.text.Tutorial, this.pos.x + 58, this.pos.y + 325, "24px chelsea", "#ffce48", "left");
            this.bar.draw(this.slideBarX, this.pos.y + 216);
            this.bar.draw(this.slideBarX, this.pos.y + 265);
            this.sliderBgm.pos.y = this.pos.y + 201;
            this.sliderSfx.pos.y = this.pos.y + 250;
            this.onoff1.pos.y = this.onoff2.pos.y = this.pos.y + 305
        },
        kill: function() {
            this.parent();
            this.play.kill();
            this.home.kill();
            this.title.kill();
            this.sliderBgm.kill();
            this.sliderSfx.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.buttons.button2").requires("game.buttons.button").defines(function() {
    EntityButton2 = EntityButton.extend({
        size: {
            x: 338,
            y: 87
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/ui/game/button.png", 338, 87),
        text: "",
        pos0: {},
        isCount: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.state = "idle";
            this.pos0.x = (ig.system.width - this.size.x) / 2;
            this.pos0.xr = ig.system.width;
            this.pos.x = this.pos0.xr;
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0]
        },
        clicked: function() {
            this.parent()
        },
        clicking: function() {},
        released: function() {
            this.parent()
        },
        leave: function() {
            this.parent()
        },
        callback: function() {
            this.moveOut()
        },
        draw: function() {
            this.parent();
            ig.system.context.fillStyle = "#3c1f0b";
            ig.system.context.textAlign = "center";
            ig.system.context.font = Math.floor(17 * this.scale.x).toString() + "pt mainfont";
            ig.system.context.fillText(this.text, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2)
        },
        moveIn: function() {
            ig.soundHandler.sfxPlayer.play("button_in");
            this.tween({
                pos: {
                    x: this.pos0.x
                }
            }, 0.34, {
                easing: ig.Tween.Easing.Quadratic.EaseIn,
                onComplete: function() {
                    this.callback3()
                }.bind(this)
            }).start()
        },
        moveOut: function() {
            this.tween({
                pos: {
                    x: this.pos0.xr
                }
            }, 0.34, {
                easing: ig.Tween.Easing.Quadratic.EaseOut,
                onComplete: function() {
                    this.callback2()
                }.bind(this)
            }).start()
        },
        callback2: function() {
            this.kill()
        },
        callback3: function() {}
    })
});
ig.baked = !0;
ig.module("game.buttons.play").requires("game.buttons.button2").defines(function() {
    EntityPlayBtn = EntityButton2.extend({
        text: _STRINGS.Game.Play,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clicked: function() {
            this.parent()
        },
        clicking: function() {},
        released: function() {
            this.parent()
        },
        leave: function() {
            this.parent()
        },
        callback: function() {
            var b = Number(ig.game.storage.get("EFA.totalGames"));
            ig.game.storage.set("EFA.totalGames", ++b);
            ig.game.director.jumpTo(LevelPreload)
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.buttons.home").requires("game.buttons.button2").defines(function() {
    EntityHomeBtn = EntityButton2.extend({
        isHome: !1,
        isPause: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.text = _STRINGS.Game.HomeMenu;
            this.isHome && (this.text = _STRINGS.Game.Close)
        },
        clicked: function() {
            this.parent()
        },
        clicking: function() {},
        released: function() {
            this.parent()
        },
        leave: function() {
            this.parent()
        },
        callback: function() {
            this.isPause && ig.game.getEntitiesByType(EntityGameControl)[0].saveGame();
            ig.game.director.jumpTo(LevelHome)
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.menu.buybar").requires("impact.entity").defines(function() {
    EntityBuyBar = ig.Entity.extend({
        bar0: new ig.Image("media/graphics/game/ui/store/bar0.png"),
        bar1: new ig.Image("media/graphics/game/ui/store/bar1.png"),
        no: 0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent();
            for (var b = 0; 5 > b; b++) this.bar0.draw(this.pos.x + 31 * b, this.pos.y);
            for (b = 0; b < this.no; b++) this.bar1.draw(this.pos.x + 31 * b, this.pos.y)
        }
    })
});
ig.baked = !0;
ig.module("game.buttons.buy").requires("game.buttons.button").defines(function() {
    EntityBuyBtn = EntityButton.extend({
        size: {
            x: 66,
            y: 27
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/ui/store/buy.png", 66, 27),
        price: "",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.state = "idle"
        },
        clicked: function() {
            this.parent()
        },
        clicking: function() {},
        released: function() {
            this.parent()
        },
        leave: function() {
            this.parent()
        },
        callback: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            ig.system.context.fillStyle = "#220d03";
            ig.system.context.textAlign = "center";
            ig.system.context.font = Math.floor(14 * this.scale.x).toString() + "pt chelsea";
            ig.system.context.fillText(this.price, this.pos.x + 42, this.pos.y + 17 + 2 * this.scale.x)
        }
    })
});
ig.baked = !0;
ig.module("game.menu.store").requires("game.menu.dialogue", "game.menu.slider", "game.menu.buybar", "game.buttons.buy").defines(function() {
    EntityStoreMenu = EntityDialogue.extend({
        coin: new ig.Image("media/graphics/game/ui/game/coin.png"),
        magnet: new ig.Image("media/graphics/game/ui/store/magnet.png"),
        invin: new ig.Image("media/graphics/game/ui/store/invin.png"),
        multiCoins: new ig.Image("media/graphics/game/ui/store/multi.png"),
        mega: new ig.Image("media/graphics/game/ui/store/mega.png"),
        resurrect: new ig.Image("media/graphics/game/ui/store/resurrect.png"),
        isHome: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.moveInTime = 0.6;
            this.playTxt = _STRINGS.Game.Replay;
            this.isHome && (this.playTxt = _STRINGS.Game.Play);
            this.play = ig.game.spawnEntity(EntityPlayBtn, 0, ig.system.height - 180, {
                zIndex: this.zIndex + 1,
                text: this.playTxt
            });
            this.home = ig.game.spawnEntity(EntityHomeBtn, 0, ig.system.height - 100, {
                zIndex: this.zIndex + 1,
                isHome: this.isHome
            });
            this.title = ig.game.spawnEntity(EntityTitle, 0, 0, {
                text: _STRINGS.Game.Store
            });
            this.title.callback3 = function() {
                this.play.moveIn()
            }.bind(this);
            this.play.callback3 = function() {
                this.home.moveIn()
            }.bind(this);
            this.title.pos0.x = this.play.pos0.x - this.title.size.x / 2 + 18;
            this.title.pos.y = 30;
            this.money = ig.game.storage.get("EFA.money");
            this.centerX = ig.system.width / 2;
            this.coinPosX = this.centerX - 26 - 10.5 * this.money.toLocaleString().length;
            this.x0 = this.pos.x + 34;
            this.dy = 52;
            this.magnetText = _STRINGS.Game.Magnet;
            c = Number(ig.game.storage.get("EFA.magnet"));
            this.magnetBar = ig.game.spawnEntity(EntityBuyBar, this.x0 + 32, 0, {
                no: c,
                zIndex: this.zIndex + 1
            });
            b = "";
            5 > c && (b = ig.game.price[c]);
            this.magnetBuy = ig.game.spawnEntity(EntityBuyBtn, this.x0 + 194, 0, {
                price: b
            });
            this.magnetBuy.callback = function() {
                5 != this.magnetBar.no && !(this.money < this.magnetBuy.price) && (this.money -= this.magnetBuy.price, this.coinPosX = this.centerX - 26 - 10.5 * this.money.toLocaleString().length, ig.game.storage.set("EFA.magnet", ++this.magnetBar.no), ig.game.storage.set("EFA.money", this.money), this.magnetBuy.price = 5 > this.magnetBar.no ? ig.game.price[this.magnetBar.no] : "")
            }.bind(this);
            this.invinText = _STRINGS.Game.Invin;
            c = Number(ig.game.storage.get("EFA.invin"));
            this.invinBar = ig.game.spawnEntity(EntityBuyBar, this.x0 + 32, 0, {
                no: c,
                zIndex: this.zIndex + 1
            });
            b = "";
            5 > c && (b = ig.game.price[c]);
            this.invinBuy = ig.game.spawnEntity(EntityBuyBtn, this.x0 + 194, 0, {
                price: b
            });
            this.invinBuy.callback = function() {
                5 != this.invinBar.no && !(this.money < this.invinBuy.price) && (this.money -= this.invinBuy.price, this.coinPosX = this.centerX - 26 - 10.5 * this.money.toLocaleString().length, ig.game.storage.set("EFA.invin", ++this.invinBar.no), ig.game.storage.set("EFA.money", this.money), this.invinBuy.price = 5 > this.invinBar.no ? ig.game.price[this.invinBar.no] : "")
            }.bind(this);
            c = Number(ig.game.storage.get("EFA.multiCoins"));
            this.multiCoinsBar = ig.game.spawnEntity(EntityBuyBar, this.x0 + 32, 0, {
                no: c,
                zIndex: this.zIndex + 1
            });
            b = "";
            5 > c ? (b = ig.game.price[c], this.multiCoinsText = _STRINGS.Game.MultiCoins + (c + 2).toString() + _STRINGS.Game.After + (500 * c + 500).toLocaleString() + "m") : this.multiCoinsText = _STRINGS.Game.MultiCoins + "6" + _STRINGS.Game.After + (2500).toLocaleString() + "m";
            this.multiCoinsBuy = ig.game.spawnEntity(EntityBuyBtn, this.x0 + 194, 0, {
                price: b
            });
            this.multiCoinsBuy.callback = function() {
                5 != this.multiCoinsBar.no && !(this.money < this.multiCoinsBuy.price) && (this.money -= this.multiCoinsBuy.price, this.coinPosX = this.centerX - 26 - 10.5 * this.money.toLocaleString().length, ig.game.storage.set("EFA.multiCoins", ++this.multiCoinsBar.no), ig.game.storage.set("EFA.money", this.money), 5 > this.multiCoinsBar.no ? (this.multiCoinsBuy.price = ig.game.price[this.multiCoinsBar.no], this.multiCoinsText = _STRINGS.Game.MultiCoins +
                    (this.multiCoinsBar.no + 2).toString() + _STRINGS.Game.After + (500 * this.multiCoinsBar.no + 500).toLocaleString() + "m") : this.multiCoinsBuy.price = "")
            }.bind(this);
            this.megaText = _STRINGS.Game.Mega;
            c = Number(ig.game.storage.get("EFA.mega"));
            this.megaBar = ig.game.spawnEntity(EntityBuyBar, this.x0 + 32, 0, {
                no: c,
                zIndex: this.zIndex + 1
            });
            b = "";
            5 > c ? (b = ig.game.price[c], this.megaText = _STRINGS.Game.Mega + " to " + (200 + 100 * c).toString() + "m") : this.megaText = _STRINGS.Game.Mega + " to 600m";
            this.megaBuy = ig.game.spawnEntity(EntityBuyBtn, this.x0 + 194, 0, {
                price: b
            });
            this.megaBuy.callback = function() {
                5 != this.megaBar.no && !(this.money < this.megaBuy.price) && (this.money -= this.megaBuy.price, this.coinPosX = this.centerX - 26 - 10.5 * this.money.toLocaleString().length, ig.game.storage.set("EFA.mega", ++this.megaBar.no), ig.game.storage.set("EFA.money", this.money), 5 > this.megaBar.no ? (this.megaBuy.price = ig.game.price[this.megaBar.no], this.megaText = _STRINGS.Game.Mega + " to " + (200 + 100 * this.megaBar.no).toString() + "m") : this.megaBuy.price = "")
            }.bind(this);
            this.resurrectText = _STRINGS.Game.Resurrect;
            c = Number(ig.game.storage.get("EFA.resurrect"));
            this.resurrectBar = ig.game.spawnEntity(EntityBuyBar, this.x0 + 32, 0, {
                no: c,
                zIndex: this.zIndex + 1
            });
            b = "";
            5 > c && (b = ig.game.price[c]);
            this.resurrectBuy = ig.game.spawnEntity(EntityBuyBtn, this.x0 + 194, 0, {
                price: b
            });
            this.resurrectBuy.callback = function() {
                5 != this.resurrectBar.no && !(this.money < this.resurrectBuy.price) && (this.money -= this.resurrectBuy.price, this.coinPosX = this.centerX - 26 - 10.5 * this.money.toLocaleString().length, ig.game.storage.set("EFA.resurrect", ++this.resurrectBar.no), ig.game.storage.set("EFA.money", this.money), this.resurrectBuy.price = 5 > this.resurrectBar.no ? ig.game.price[this.resurrectBar.no] : "")
            }.bind(this);
            ig.game.sortEntitiesDeferred();
            this.moveIn()
        },
        update: function() {
            this.parent();
            this.magnetBar.pos.y = this.pos.y + 190;
            this.magnetBuy.pos.y = this.pos.y + 172;
            this.invinBar.pos.y = this.pos.y + 190 + this.dy;
            this.invinBuy.pos.y = this.pos.y + 172 + this.dy;
            this.multiCoinsBar.pos.y = this.pos.y + 190 + 2 * this.dy;
            this.multiCoinsBuy.pos.y = this.pos.y + 172 + 2 * this.dy;
            this.megaBar.pos.y = this.pos.y + 190 + 3 * this.dy;
            this.megaBuy.pos.y = this.pos.y + 172 + 3 * this.dy;
            this.resurrectBar.pos.y = this.pos.y + 190 + 4 * this.dy;
            this.resurrectBuy.pos.y = this.pos.y + 172 + 4 * this.dy
        },
        callback: function() {
            this.parent();
            this.title.moveIn()
        },
        draw: function() {
            this.parent();
            this.coin.draw(this.coinPosX, this.pos.y + 100);
            this.drawText(this.money.toLocaleString(), this.coinPosX + 50, this.pos.y + 133, "33pt chelsea", "#ffee01", "left");
            this.magnet.draw(this.x0, this.pos.y + 170);
            this.drawText(this.magnetText, this.x0 +
                31, this.pos.y + 180, "13pt chelsea", "#ffce48", "left");
            this.invin.draw(this.x0, this.pos.y + 165 + this.dy);
            this.drawText(this.invinText, this.x0 + 31, this.pos.y + 180 + this.dy, "13pt chelsea", "#ffce48", "left");
            this.multiCoins.draw(this.x0 - 7, this.pos.y + 173 + 2 * this.dy);
            this.drawText(this.multiCoinsText, this.x0 + 31, this.pos.y + 180 + 2 * this.dy, "13pt chelsea", "#ffce48", "left");
            this.mega.draw(this.x0 - 7, this.pos.y + 170 + 3 * this.dy);
            this.drawText(this.megaText, this.x0 + 31, this.pos.y + 180 + 3 * this.dy, "13pt chelsea", "#ffce48", "left");
            this.resurrect.draw(this.x0 - 4, this.pos.y + 164 + 4 * this.dy);
            this.drawText(this.resurrectText, this.x0 + 31, this.pos.y + 180 + 4 * this.dy, "13pt chelsea", "#ffce48", "left")
        },
        kill: function() {
            this.parent();
            this.play.kill();
            this.home.kill();
            this.title.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.menu.stats").requires("game.menu.dialogue").defines(function() {
    EntityStatsMenu = EntityDialogue.extend({
        coin: new ig.Image("media/graphics/game/ui/game/coin.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.play = ig.game.spawnEntity(EntityPlayBtn, 0, ig.system.height - 170, {
                zIndex: this.zIndex + 1,
                text: _STRINGS.Game.Play
            });
            this.home = ig.game.spawnEntity(EntityHomeBtn, 0, ig.system.height - 90, {
                zIndex: this.zIndex + 1,
                isHome: !0
            });
            this.title = ig.game.spawnEntity(EntityTitle, 0, 40, {
                text: _STRINGS.Game.Stats
            });
            this.title.callback3 = function() {
                this.play.moveIn()
            }.bind(this);
            this.play.callback3 = function() {
                this.home.moveIn()
            }.bind(this);
            this.title.pos0.x = this.pos.x - this.title.size.x / 2 + 18;
            this.title.pos.y = 25;
            this.money = ig.game.storage.get("EFA.money").toLocaleString();
            this.txtSingleRun = _STRINGS.Game.SingleRun;
            this.txtHighestScore = _STRINGS.Game.HighestScore;
            this.highestScore = ig.game.storage.get("EFA.bestScore").toLocaleString();
            this.txtLongestRun = _STRINGS.Game.LongestRun;
            this.longestRun = Math.round(ig.game.storage.get("EFA.longestRun")).toLocaleString() + "m";
            this.txtMostCoins = _STRINGS.Game.MostCoins;
            this.mostCoins = ig.game.storage.get("EFA.mostCoins").toLocaleString();
            this.txtLifetime = _STRINGS.Game.Lifetime;
            this.txtTotalGames = _STRINGS.Game.TotalGames;
            this.totalGames = ig.game.storage.get("EFA.totalGames").toLocaleString();
            this.txtTotalDistance = _STRINGS.Game.TotalDistance;
            this.totalDistance = Math.round(ig.game.storage.get("EFA.totalDistance")).toLocaleString() + "m";
            this.txtTotalCoins = _STRINGS.Game.TotalCoins;
            this.totalCoins = ig.game.storage.get("EFA.totalCoins").toLocaleString();
            this.centerX = ig.system.width / 2;
            this.coinX = this.centerX - 26 - 10.5 * this.money.length;
            this.posX = this.pos.x + 45;
            this.posX2 = this.centerX + 117;
            ig.game.sortEntitiesDeferred();
            this.moveIn()
        },
        callback: function() {
            this.parent();
            this.title.moveIn()
        },
        draw: function() {
            this.parent();
            this.coin.draw(this.coinX, this.pos.y + 95);
            this.drawText(this.money, this.coinX + 45, this.pos.y + 128, "33pt chelsea", "#ffee01", "left");
            this.drawText(this.txtSingleRun, this.centerX, this.pos.y + 185, "22pt chelsea", "#ffffff", "center");
            this.drawText(this.txtHighestScore, this.posX, this.pos.y + 220, "17pt chelsea", "#ffce48", "left");
            this.drawText(this.highestScore, this.posX2, this.pos.y + 220, "17pt chelsea", "#ffee01", "right");
            this.drawText(this.txtLongestRun, this.posX, this.pos.y + 255, "17pt chelsea", "#ffce48", "left");
            this.drawText(this.longestRun, this.posX2, this.pos.y + 255, "17pt chelsea", "#ffee01", "right");
            this.drawText(this.txtMostCoins, this.posX, this.pos.y + 290, "17pt chelsea", "#ffce48", "left");
            this.drawText(this.mostCoins, this.posX2, this.pos.y + 290, "17pt chelsea", "#ffee01", "right");
            this.drawText(this.txtLifetime, this.centerX, this.pos.y + 340, "22pt chelsea", "#ffffff", "center");
            this.drawText(this.txtTotalGames, this.posX, this.pos.y + 375, "17pt chelsea", "#ffce48", "left");
            this.drawText(this.totalGames, this.posX2, this.pos.y + 375, "17pt chelsea", "#ffee01", "right");
            this.drawText(this.txtTotalDistance, this.posX, this.pos.y + 410, "17pt chelsea", "#ffce48", "left");
            this.drawText(this.totalDistance, this.posX2, this.pos.y + 410, "17pt chelsea", "#ffee01", "right");
            this.drawText(this.txtTotalCoins, this.posX, this.pos.y + 445, "17pt chelsea", "#ffce48", "left");
            this.drawText(this.totalCoins, this.posX2, this.pos.y + 445, "17pt chelsea", "#ffee01", "right")
        },
        kill: function() {
            this.parent();
            this.play.kill();
            this.home.kill();
            this.title.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.home-control").requires("impact.entity", "game.entities.button-more-games", "game.menu.options", "game.buttons.play", "game.buttons.home", "game.menu.store", "game.menu.stats").defines(function() {
    EntityHomeControl = ig.Entity.extend({
        zIndex: 100,
        isHome: !0,
        bgImage: new ig.Image("media/graphics/game/backgrounds/main.png"),
        titleImage: new ig.Image("media/graphics/game/backgrounds/maintitle.png"),
        time: 1,
        playButtonAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/playgame.png", 106, 54), 0, [0, 1, 2]),
        playButtonPos: {
            x: 0,
            y: 290
        },
        playButtonRect: {
            x: 0,
            y: 0,
            w: 106,
            h: 54
        },
        playButtonOffset: {
            x: 0,
            y: 0
        },
        playButtonAlpha: 1,
        playButtonDown: !1,
        playButtonEnabled: !0,
        statsButtonAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/stats.png", 124, 38), 0, [0, 1, 2]),
        statsButtonPos: {
            x: 0,
            y: 355
        },
        statsButtonRect: {
            x: 0,
            y: 0,
            w: 124,
            h: 38
        },
        statsButtonOffset: {
            x: 0,
            y: 0
        },
        statsButtonAlpha: 1,
        statsButtonDown: !1,
        statsButtonEnabled: !0,
        storeButtonAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/store.png", 124, 38), 0, [0, 1, 2]),
        storeButtonPos: {
            x: 0,
            y: 402
        },
        storeButtonRect: {
            x: 0,
            y: 0,
            w: 124,
            h: 38
        },
        storeButtonOffset: {
            x: 0,
            y: 0
        },
        storeButtonAlpha: 1,
        storeButtonDown: !1,
        storeButtonEnabled: !0,
        settingsButtonAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/options.png", 124, 38), 0, [0, 1, 2]),
        settingsButtonPos: {
            x: 0,
            y: 449
        },
        settingsButtonRect: {
            x: 0,
            y: 0,
            w: 124,
            h: 38
        },
        settingsButtonOffset: {
            x: 0,
            y: 0
        },
        settingsButtonAlpha: 1,
        settingsButtonDown: !1,
        settingsButtonsEnabled: !0,
        moregamesButtonImage: new ig.Image("media/graphics/game/ui/mainmenu/moregames.png"),
        moregamesButtonPos: {
            x: 41,
            y: 630
        },
        moregamesButtonRect: {
            x: -31,
            y: -21,
            w: 138,
            h: 22
        },
        moregamesButtonOffset: {
            x: 0,
            y: 0
        },
        moregamesButtonAlpha: 1,
        moregamesButtonDown: !1,
        moregamesButtonEnabled: !0,
        pointer: null,
        moregames: null,
        menuPaused: !1,
        mainMenuAlpha: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.playButtonPos.x = ig.system.width / 2 - this.playButtonRect.w / 2 + 3, this.statsButtonPos.x = ig.system.width / 2 - this.statsButtonRect.w / 2, this.storeButtonPos.x = ig.system.width / 2 - this.storeButtonRect.w / 2, this.settingsButtonPos.x = ig.system.width / 2 - this.settingsButtonRect.w / 2)
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.moregames = ig.game.spawnEntity(EntityButtonMoreGames, this.moregamesButtonPos.x + this.moregamesButtonRect.x, this.moregamesButtonPos.y + this.moregamesButtonRect.y);
            this.moregames.divLayerName = "more-games";
            this.moregames.size.x = this.moregamesButtonRect.w;
            this.moregames.size.y = this.moregamesButtonRect.h;
            this.moregames.ready();
            ig.game.sortEntitiesDeferred()
        },
        draw: function() {
            var b = ig.system.context;
            b.save();
            this.bgImage.width < ig.system.width && b.scale(ig.system.width / this.bgImage.width, 1);
            this.bgImage.draw(0, 0);
            b.restore();
            if (0 != this.mainMenuAlpha) {
                b.globalAlpha = this.mainMenuAlpha;
                this.titleImage.draw(ig.system.width / 2 - this.titleImage.width / 2, 0);
                var c = this.playButtonPos.x + this.playButtonOffset.x + this.playButtonRect.x,
                    d = this.playButtonPos.y + this.playButtonOffset.y + this.playButtonRect.y;
                this.playButtonDown && (d += 2);
                b.save();
                b.globalAlpha = this.mainMenuAlpha * this.playButtonAlpha;
                this.playButtonAnim.draw(c, d);
                b.restore();
                c = this.statsButtonPos.x + this.statsButtonOffset.x + this.statsButtonRect.x;
                d = this.statsButtonPos.y + this.statsButtonOffset.y + this.statsButtonRect.y;
                this.statsButtonDown && (d += 2);
                b.save();
                b.globalAlpha = this.mainMenuAlpha * this.statsButtonAlpha;
                this.statsButtonAnim.draw(c, d);
                b.restore();
                c = this.storeButtonPos.x + this.storeButtonOffset.x + this.storeButtonRect.x;
                d = this.storeButtonPos.y + this.storeButtonOffset.y + this.storeButtonRect.y;
                this.storeButtonDown && (d += 2);
                b.save();
                b.globalAlpha = this.mainMenuAlpha * this.storeButtonAlpha;
                this.storeButtonAnim.draw(c, d);
                b.restore();
                c = this.settingsButtonPos.x + this.settingsButtonOffset.x + this.settingsButtonRect.x;
                d = this.settingsButtonPos.y + this.settingsButtonOffset.y + this.settingsButtonRect.y;
                this.settingsButtonDown && (d += 2);
                b.save();
                b.globalAlpha = this.mainMenuAlpha * this.settingsButtonAlpha;
                this.settingsButtonAnim.draw(c, d);
                b.restore();
                _SETTINGS.MoreGames.Enabled && this.moregamesButtonEnabled && (c = this.moregamesButtonPos.x + this.moregamesButtonOffset.x +
                    this.moregamesButtonRect.x, d = this.moregamesButtonPos.y + this.moregamesButtonOffset.y + this.moregamesButtonRect.y, this.moregamesButtonDown && (d += 2), b.save(), b.globalAlpha = this.mainMenuAlpha * this.moregamesButtonAlpha, this.moregamesButtonImage.draw(c, d), b.restore());
                b.globalAlpha = 1
            }
        },
        playGame: function() {
            ig.input.clearPressed();
            _SETTINGS.MoreGames.Enabled && this.moregames.hide();
            ig.game.director.jumpTo(LevelPreload)
        },
        pause: function() {
            this.menuPaused = !0;
            _SETTINGS.MoreGames.Enabled && this.moregames.hide()
        },
        unpause: function() {
            this.menuPaused = !1;
            _SETTINGS.MoreGames.Enabled && this.moregames.show()
        },
        update: function() {
            this.time += ig.system.tick;
            this.menuPaused || this.checkClicks()
        },
        aabbCheck: function(b, c) {
            return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
        },
        checkClicks: function() {
            this.pointer.refreshPos();
            var b = {};
            b.x = this.pointer.pos.x;
            b.y = this.pointer.pos.y;
            b.w = 1;
            b.h = 1;
            if (this.playButtonEnabled) {
                var c = {};
                c.x = this.playButtonPos.x + this.playButtonRect.x;
                c.y = this.playButtonPos.y + this.playButtonRect.y;
                c.w = this.playButtonRect.w;
                c.h = this.playButtonRect.h;
                if (this.aabbCheck(b, c)) {
                    if (this.playButtonDown = !1, this.playButtonAnim.tile = 0, ig.ua.mobile || (this.playButtonAnim.tile = 1), ig.input.state("click") && (this.playButtonDown = !0, this.playButtonAnim.tile = 0), ig.input.released("click")) {
                        this.playButtonDown = !1;
                        ig.ua.mobile || (this.playButtonAnim.tile = 1);
                        ig.soundHandler.sfxPlayer.play("button");
                        this.playGame();
                        return
                    }
                } else this.playButtonDown = !1, this.playButtonAnim.tile = 0
            }
            if (this.statsButtonEnabled)
                if (c = {}, c.x = this.statsButtonPos.x + this.statsButtonRect.x, c.y = this.statsButtonPos.y + this.statsButtonRect.y, c.w = this.statsButtonRect.w, c.h = this.statsButtonRect.h, this.aabbCheck(b, c)) {
                    if (this.statsButtonDown = !1, this.statsButtonAnim.tile = 0, ig.ua.mobile || (this.statsButtonAnim.tile = 1), ig.input.state("click") && (this.statsButtonDown = !0, this.statsButtonAnim.tile = 0), ig.input.released("click")) {
                        this.statsButtonDown = !1;
                        ig.ua.mobile || (this.statsButtonAnim.tile = 1);
                        ig.soundHandler.sfxPlayer.play("button");
                        ig.game.spawnEntity(EntityStatsMenu, 0, 0);
                        this.statsButtonEnabled = !1;
                        this.moregames.hide();
                        this.playButtonEnabled = this.storeButtonEnabled = this.settingsButtonsEnabled = this.moregamesButtonEnabled = !1;
                        return
                    }
                } else this.statsButtonDown = !1, this.statsButtonAnim.tile = 0;
            if (this.storeButtonEnabled)
                if (c = {}, c.x = this.storeButtonPos.x + this.storeButtonRect.x, c.y = this.storeButtonPos.y + this.storeButtonRect.y, c.w = this.storeButtonRect.w, c.h = this.storeButtonRect.h, this.aabbCheck(b, c)) {
                    if (this.storeButtonDown = !1, this.storeButtonAnim.tile = 0, ig.ua.mobile || (this.storeButtonAnim.tile = 1), ig.input.state("click") && (this.storeButtonDown = !0, this.storeButtonAnim.tile = 0), ig.input.released("click")) {
                        this.storeButtonDown = !1;
                        ig.ua.mobile || (this.storeButtonAnim.tile = 1);
                        ig.soundHandler.sfxPlayer.play("button");
                        ig.game.spawnEntity(EntityStoreMenu, 0, 0, {
                            isHome: !0
                        });
                        this.storeButtonEnabled = !1;
                        this.moregames.hide();
                        this.playButtonEnabled = this.statsButtonEnabled = this.settingsButtonsEnabled = this.moregamesButtonEnabled = !1;
                        return
                    }
                } else this.storeButtonDown = !1, this.storeButtonAnim.tile = 0;
            if (this.settingsButtonsEnabled)
                if (c = {}, c.x = this.settingsButtonPos.x + this.settingsButtonRect.x, c.y = this.settingsButtonPos.y + this.settingsButtonRect.y, c.w = this.settingsButtonRect.w, c.h = this.settingsButtonRect.h, this.aabbCheck(b, c)) {
                    if (this.settingsButtonDown = !1, this.settingsButtonAnim.tile = 0, ig.ua.mobile || (this.settingsButtonAnim.tile = 1), ig.input.state("click") && (this.settingsButtonDown = !0, this.settingsButtonAnim.tile = 0), ig.input.released("click")) {
                        this.settingsButtonDown = !1;
                        ig.ua.mobile || (this.settingsButtonAnim.tile = 1);
                        ig.soundHandler.sfxPlayer.play("button");
                        ig.game.spawnEntity(EntityOptionsMenu, 0, 0);
                        this.settingsButtonsEnabled = !1;
                        this.moregames.hide();
                        this.playButtonEnabled = this.statsButtonEnabled = this.storeButtonEnabled = this.moregamesButtonEnabled = !1;
                        return
                    }
                } else this.settingsButtonDown = !1, this.settingsButtonAnim.tile = 0;
            c = {};
            c.x = this.moregamesButtonPos.x + this.moregamesButtonRect.x;
            c.y = this.moregamesButtonPos.y + this.moregamesButtonRect.y;
            c.w = this.moregamesButtonRect.w;
            c.h = this.moregamesButtonRect.h;
            this.aabbCheck(b, c) ? this.moregamesButtonEnabled && (this.moregamesButtonDown = !1, ig.input.state("click") && (this.moregamesButtonDown = !0), ig.input.released("click") && (this.moregamesButtonDown = !1, ig.soundHandler.sfxPlayer.play("button"))) : this.moregamesButtonDown = !1
        },
        roundRect: function(b, c, d, f, e, j, n, q) {
            "undefined" == typeof q && (q = !0);
            "undefined" === typeof j && (j = 5);
            b.beginPath();
            b.moveTo(c + j, d);
            b.lineTo(c + f - j, d);
            b.quadraticCurveTo(c + f, d, c + f, d + j);
            b.lineTo(c + f, d + e - j);
            b.quadraticCurveTo(c + f, d + e, c + f - j, d + e);
            b.lineTo(c + j, d + e);
            b.quadraticCurveTo(c, d + e, c, d + e - j);
            b.lineTo(c, d + j);
            b.quadraticCurveTo(c, d, c + j, d);
            b.closePath();
            q && b.stroke();
            n && b.fill()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.home").requires("impact.image", "game.entities.home-control", "game.entities.pointer-selector").defines(function() {
    LevelHome = {
        entities: [{
            type: "EntityHomeControl",
            x: 0,
            y: 0
        }, {
            type: "EntityPointerSelector",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.game-ui").requires("impact.entity").defines(function() {
    EntityGameUi = ig.Entity.extend({
        zIndex: 15E4,
        showGameOver: !0,
        overlayAlpha: 1,
        playRect: {
            x: 615,
            y: 5,
            w: 35,
            h: 44
        },
        creeper: new ig.Image("media/graphics/game/ui/game/creeper.png"),
        distBar: new ig.Image("media/graphics/game/ui/game/distance.png"),
        distBarPos: {
            x: 0,
            y: 20
        },
        coinBar: new ig.Image("media/graphics/game/ui/game/coinbar.png"),
        coinBarPos: {
            x: 0,
            y: 73
        },
        control: null,
        pointer: null,
        magnet: new ig.Image("media/graphics/game/pickups/smagnet.png"),
        "double": new ig.Image("media/graphics/game/pickups/sdouble.png"),
        resurrect: new ig.Image("media/graphics/game/pickups/sresurrect.png"),
        fingerImage: new ig.Image("media/graphics/game/ui/game/finger.png"),
        fingerRect: {
            x: 0,
            y: 0,
            w: 50,
            h: 50
        },
        fingerOffset: {
            x: 0,
            y: 0
        },
        tutorialUIShowTime: 0,
        tutorialUIShowingFlag: !1,
        tutorialUIHideTime: 0,
        tutorialUIHidingFlag: !1,
        tutorialUITickStartTime: 0,
        tutorialUITickFlag: !1,
        tutorialUIFadeTime: 0,
        tutorialUIFadeFlag: !1,
        tutorialUIDrawFlag: !1,
        tutorialUIAlpha: 0,
        tutorialUIOffset: {
            x: 0,
            y: 0
        },
        tutorialID: 0,
        nextTutorialID: 0,
        tutorialTextOrder: 0,
        tutorialTextAlpha: 0,
        tutorialTextRect: {
            x: 40,
            y: 470,
            w: 360,
            h: 100
        },
        tutorialTime: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.tutorialTextRect.x = ig.system.width / 2 - this.tutorialTextRect.w / 2
        },
        ready: function() {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.itemsX0 = 7;
            this.itemsY0 = 75;
            this.itemsDy = 55;
            this.coinsAlpha = this.magnetAlpha = 0;
            this.alphaSpeed = 1 / 30
        },
        draw: function() {
            var b = ig.system.context;
            b.fillStyle = this.control.bgHorizonLinGrad;
            b.fillRect(0, 121, ig.system.width, 195);
            this.drawGameStats();
            this.drawTutorialUI();
            this.drawGameOver();
            if (this.control.gameStarting || this.control.gameEnding) ig.system.context.globalAlpha = this.overlayAlpha, ig.system.context.fillStyle = "#000000", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.globalAlpha = 1;
            this.control.isMagnet ? (-3 > this.control.magnetTimer.delta() ? 1 > this.magnetAlpha && (this.magnetAlpha += 1 / 30, 1 <= this.magnetAlpha && (this.magnetAlpha = 1)) : (b = -this.control.magnetTimer.delta() % 0.6, 0.3 < b && (b = 0.3 - (b - 0.3)), this.magnetAlpha = 0.3 + 0.7 * (b / 0.3)), ig.system.context.globalAlpha = this.magnetAlpha, this.magnet.draw(this.itemsX0, this.itemsY0 + this.control.magnetIndex * this.itemsDy), ig.system.context.globalAlpha = 1) : 0 < this.magnetAlpha && (this.magnetAlpha -= 1 / 30, 0 >= this.magnetAlpha && (this.magnetAlpha = 0, this.control.itemsNo--, 0 < this.control.coinsIndex && this.control.coinsIndex--), ig.system.context.globalAlpha = this.magnetAlpha, this.magnet.draw(this.itemsX0, this.itemsY0 + this.control.magnetIndex * this.itemsDy), ig.system.context.globalAlpha = 1);
            this.control.isMultiCoins ? (-3 > this.control.multiCoinsTimer.delta() ? 1 > this.coinsAlpha && (this.coinsAlpha += 1 / 30, 1 <= this.coinsAlpha && (this.coinsAlpha = 1)) : (b = -this.control.multiCoinsTimer.delta() % 0.6, 0.3 < b && (b = 0.3 - (b - 0.3)), this.coinsAlpha = 0.3 + 0.7 * (b / 0.3)), ig.system.context.globalAlpha = this.coinsAlpha, this.double.draw(this.itemsX0 - 7, this.itemsY0 + this.control.coinsIndex * this.itemsDy), ig.system.context.globalAlpha = 1) : 0 < this.coinsAlpha && (this.coinsAlpha -= 1 / 30, 0 >= this.coinsAlpha && (this.coinsAlpha = 0, this.control.itemsNo--, 0 < this.control.magnetIndex && this.control.magnetIndex--), ig.system.context.globalAlpha = this.coinsAlpha, this.double.draw(this.itemsX0 - 7, this.itemsY0 + this.control.coinsIndex * this.itemsDy), ig.system.context.globalAlpha = 1)
        },
        drawGameStats: function() {
            this.creeper.draw(0, 0);
            this.resurrect.draw(5, 5);
            ig.system.context.textAlign = "left";
            ig.system.context.font = "28px chelsea, Helvetica, Verdana";
            ig.system.context.fillStyle = "#f4d01a";
            ig.system.context.fillText("x " + this.control.lifeCount, 61, 45);
            this.coinBarPos.x = ig.system.width - 50 - 8 * this.control.coinsCollected.toLocaleString().length;
            this.coinBar.draw(this.coinBarPos.x, this.coinBarPos.y);
            ig.system.context.textAlign = "left";
            ig.system.context.font = "22px chelsea, Helvetica, Verdana";
            ig.system.context.fillStyle = "#f4d01a";
            ig.system.context.fillText(this.control.coinsCollected.toLocaleString(), this.coinBarPos.x + 39, this.coinBarPos.y + 27);
            this.distBarPos.x = ig.system.width - 50 - 8 * Math.round(0.5 * this.control.totalDistance).toLocaleString().length;
            this.distBar.draw(this.distBarPos.x, this.distBarPos.y);
            ig.system.context.textAlign = "left";
            ig.system.context.font = "22px chelsea, Helvetica, Verdana";
            ig.system.context.fillStyle = "#f4d01a";
            ig.system.context.fillText(Math.round(0.5 * this.control.totalDistance).toLocaleString(), this.distBarPos.x + 39, this.distBarPos.y + 27)
        },
        drawGameOver: function() {
            if (this.control.gameOver && this.showGameOver) {
                ig.game.spawnEntity(EntityGameOverMenu, 0, 0);
                this.showGameOver = !1;
                var b = ig.game.getEntitiesByType(EntityPauseBtn)[0];
                b.enabled = !1;
                b.currentAnim.alpha = 0
            }
        },
        drawFPS: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.font = "20px mainfont, Helvetica, Verdana";
            ig.system.context.textAlign = "center";
            ig.system.context.fillText(ig.game.fps, ig.system.width / 2, 40)
        },
        aabbCheck: function(b, c) {
            return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
        },
        update: function() {
            if (this.control.gameStarting) {
                var b = ig.system.clock.delta() - this.control.gameStartTime,
                    b = b /
                    0.25;
                1 < b && (b = 1);
                this.overlayAlpha = 1 - b
            } else this.control.gameEnding && (b = ig.system.clock.delta() - this.control.gameEndTime, b /= 0.25, 1 < b && (b = 1), this.overlayAlpha = b);
            this.control.tutorialMode && !this.control.gamePaused && (this.tutorialTime += ig.system.tick);
            this.updateTutorialUI()
        },
        drawTime: function(b, c, d, f) {
            if (!isNaN(this.control.gameTime)) {
                b = Math.floor(this.control.gameTime / 60);
                c = Math.floor(this.control.gameTime % 60);
                10 > c && (c = "0" + c);
                var e = _STRINGS.UI.TIME + ": " + b + ":" + c;
                d = ig.system.context.measureText(e).width;
                f = ig.system.context.measureText("m").width;
                b = ig.system.width / 2 - d / 2;
                c = ig.system.height / 2 + f / 3 + 30;
                ig.system.context.fillText(e, b, c)
            }
        },
        drawArrow: function(b, c, d, f) {
            var e, j;
            e = d - b;
            j = f - c;
            var n = Math.sqrt(e * e + j * j);
            if (0 != n) {
                var q;
                e /= n;
                q = j / n;
                j = d - 10 * e;
                var n = f - 10 * q,
                    l;
                l = -q;
                var m;
                q = j + 10 * l;
                m = n + 10 * e;
                l = j - 10 * l;
                e = n - 10 * e;
                var p = ig.system.context;
                p.fillStyle = "#000000";
                p.beginPath();
                p.moveTo(d, f);
                p.lineTo(q, m);
                p.lineTo(l, e);
                p.closePath();
                p.fill();
                p.strokeStyle = "#000000";
                p.lineWidth = 10;
                p.beginPath();
                p.moveTo(j, n);
                p.lineTo(b, c);
                p.stroke()
            }
        },
        roundRect: function(b, c, d, f, e, j, n, q) {
            "undefined" == typeof q && (q = !0);
            "undefined" === typeof j && (j = 5);
            b.beginPath();
            b.moveTo(c + j, d);
            b.lineTo(c + f - j, d);
            b.quadraticCurveTo(c + f, d, c + f, d + j);
            b.lineTo(c + f, d + e - j);
            b.quadraticCurveTo(c + f, d + e, c + f - j, d + e);
            b.lineTo(c + j, d + e);
            b.quadraticCurveTo(c, d + e, c, d + e - j);
            b.lineTo(c, d + j);
            b.quadraticCurveTo(c, d, c + j, d);
            b.closePath();
            q && b.stroke();
            n && b.fill()
        },
        checkTutorialClicks: function() {
            if (this.control.tutorialMode && !this.tutorialUIHidingFlag && (!this.tutorialUIShowingFlag && !this.tutorialUITickFlag) && (0 == this.control.tutorialStage || 1 == this.control.tutorialStage || 2 == this.control.tutorialStage || 13 == this.control.tutorialStage)) {
                this.pointer.refreshPos();
                var b = {};
                b.x = this.pointer.pos.x;
                b.y = this.pointer.pos.y;
                b.w = this.pointer.size.x;
                b.h = this.pointer.size.y;
                this.aabbCheck(b, this.tutorialTextRect) && ig.input.released("click") && (this.control.doNextTutorialStage(), ig.soundHandler.sfxPlayer.play("button"));
                ig.input.released("enter") && (this.control.doNextTutorialStage(), ig.soundHandler.sfxPlayer.play("button"))
            }
        },
        updateTutorialUI: function() {
            if (this.tutorialUIDrawFlag) {
                if (this.tutorialUIShowingFlag) {
                    var b = 1 - this.tutorialUIOffset.x / ig.system.width;
                    0 > b && (b = 0);
                    1 < b && (b = 1);
                    this.tutorialUIAlpha = 0.25 + 0.75 * b;
                    0 < this.tutorialUIOffset.x ? this.tutorialUIOffset.x -= 2E3 * ig.system.tick : 0 > this.tutorialUIOffset.x && (this.tutorialUIOffset.x += 2E3 * ig.system.tick, 0 <= this.tutorialUIOffset.x && (this.tutorialUIOffset.x = 0, this.tutorialUIShowingFlag = !1, this.tutorialUITickStartTime = ig.system.clock.delta(), this.tutorialUITickFlag = !0, this.tutorialUIAlpha = 1))
                } else this.tutorialUIHidingFlag && (b = this.tutorialUIOffset.x / -ig.system.width, 0 > b && (b = 0), 1 < b && (b = 1), this.tutorialUIAlpha = 0.25 + 0.75 * (1 - b), this.tutorialUIOffset.x -= 2E3 * ig.system.tick, this.tutorialUIOffset.x <= -ig.system.width && (this.tutorialUITickFlag = this.tutorialUIFadeFlag = this.tutorialUIShowingFlag = this.tutorialUIDrawFlag = this.tutorialUIHidingFlag = !1, this.tutorialUIAlpha = this.tutorialTextAlpha = 0));
                if (this.tutorialUITickFlag) {
                    var b = (_STRINGS.Tutorial[this.tutorialID][0] + _STRINGS.Tutorial[this.tutorialID][1]).length,
                        c = (ig.system.clock.delta() - this.tutorialUITickStartTime) / (0.02 * b);
                    1 < c && (c = 1);
                    this.tutorialTextOrder = Math.floor(c * b);
                    1 <= c && (this.tutorialUITickFlag = !1, this.tutorialTextOrder = b);
                    this.tutorialTextAlpha = 1
                } else this.tutorialUIFadeFlag && (c = (ig.system.clock.delta() - this.tutorialUIFadeTime) / 0.25, 1 <= c ? (this.tutorialID = this.nextTutorialID, this.tutorialUIFadeFlag = !1, this.tutorialUITickStartTime = ig.system.clock.delta(), this.tutorialUITickFlag = !0, this.tutorialTextOrder = this.tutorialTextAlpha = 0) : this.tutorialTextAlpha =
                    1 - c);
                !this.tutorialUIShowingFlag && !this.tutorialUIHidingFlag && (this.tutorialUITickFlag || this.checkTutorialClicks())
            }
        },
        showTutorialUI: function(b) {
            this.tutorialUIDrawFlag ? this.tutorialUIHidingFlag ? (this.tutorialUIHidingFlag = !1, this.tutorialUIShowingFlag = !0, this.tutorialUIShowTime = ig.system.clock.delta(), this.tutorialUIOffset.x = ig.system.width, this.tutorialID = b, this.tutorialTextAlpha = this.tutorialTextOrder = 0) : (this.tutorialUIFadeFlag = !0, this.tutorialUIFadeTime = ig.system.clock.delta(), this.nextTutorialID = b) : (this.tutorialUIShowingFlag = this.tutorialUIDrawFlag = !0, this.tutorialUIShowTime = ig.system.clock.delta(), this.tutorialUIOffset.x = ig.system.width, this.tutorialID = b, this.tutorialTextAlpha = this.tutorialTextOrder = 0)
        },
        hideTutorialUI: function() {
            this.tutorialUIHidingFlag = !0;
            this.tutorialUIHideTime = ig.system.clock.delta()
        },
        drawTutorialUI: function() {
            if (this.tutorialUIDrawFlag) {
                var b = ig.system.context;
                b.globalAlpha = this.tutorialUIAlpha;
                b.save();
                b.fillStyle = "rgba(0,0,0,0.75)";
                b.strokeStyle = "rgba(0,0,0,0.75)";
                var c = this.tutorialTextRect.x + this.tutorialUIOffset.x,
                    d = this.tutorialTextRect.y + this.tutorialUIOffset.y,
                    f = this.tutorialTextRect.w,
                    e = this.tutorialTextRect.h;
                this.roundRect(b, c, d, f, e, 20, !0, !1);
                b.restore();
                b.globalAlpha = 1;
                this.tutorialUIShowingFlag || this.drawText();
                if (!this.tutorialUIShowingFlag && !this.tutorialUIHidingFlag && !this.tutorialUITickFlag && !this.tutorialUIFadeFlag && (0 == this.control.tutorialStage || 1 == this.control.tutorialStage || 2 == this.control.tutorialStage || 13 == this.control.tutorialStage) && 0.5 < ig.system.clock.delta() - this.control.tutorialPausedTime) c = c + f - 20, d = d + e - 10, f = this.tutorialTime % 2, 1 < f && (f = 2 - f), f = 0.25 + 0.75 * f, b.save(), b.font = "12px mainfont, Helvetica, Verdana", b.translate(c, d), b.textAlign = "right", b.fillStyle = "rgba(255,255,255," + f + ")", b.fillText(_STRINGS.UI["continue"], 0, 0), b.restore();
                !this.tutorialUIShowingFlag && !this.tutorialUIHidingFlag && !this.tutorialUIFadeFlag && (3 == this.control.tutorialStage ? this.drawJumpInstructions() : 5 == this.control.tutorialStage ? this.drawRightInstructions() : 7 == this.control.tutorialStage || 9 == this.control.tutorialStage ? this.drawLeftInstructions() : 11 == this.control.tutorialStage && this.drawSlideInstructions());
                b.globalAlpha = 1
            }
        },
        drawText: function() {
            if (0 != this.tutorialTextOrder) {
                var b, c, d;
                d = this.tutorialTextRect.y + this.tutorialUIOffset.y;
                c = ig.system.width / 2;
                d += 28;
                var f = ig.system.context;
                b = this.tutorialTextOrder;
                var e = _STRINGS.Tutorial[this.tutorialID][0],
                    j = _STRINGS.Tutorial[this.tutorialID][1];
                b < e.length ? (e = e.substr(0, b), j = "") : b < e.length + j.length && (j = j.substr(0, b - e.length));
                f.save();
                f.font = "16px mainfont, Helvetica, Verdana";
                b = 2 * f.measureText("m").width / 3;
                f.translate(c, d + b);
                f.textAlign = "center";
                f.fillStyle = "rgba(255,255,255," + this.tutorialTextAlpha + ")";
                f.fillText(e, 0, 0);
                f.translate(0, 4 * b / 2);
                f.fillText(j, 0, 0);
                f.restore()
            }
        },
        drawJumpInstructions: function() {
            var b = ig.system.context;
            if (ig.ua.mobile) {
                var c = ig.system.width / 2 + 200,
                    d = this.tutorialTextRect.y - 50,
                    f = 0;
                b.fillStyle = "rgba(0,0,0,0.75)";
                b.strokeStyle = "rgba(0,0,0,0.75)";
                this.roundRect(b, c - 40, d - 140, 80, 180, 10, !0, !1);
                f = this.tutorialTime % 1.5;
                if (0 <= f && 0.5 > f) {
                    var e = f / 0.25;
                    1 < e && (e = 1);
                    f = -Math.PI / 8 + (1 - e) * Math.PI / 4;
                    0 > f && (f = 2 * Math.PI + f)
                } else 0.5 <= f && 0.75 > f ? (e = (f - 0.5) / 0.25, 1 < e && (e = 1), f = -Math.PI / 8, 0 > f && (f = 2 * Math.PI + f), d -= 100 * e) : (e = (f - 0.75) / 0.25, 1 < e && (e = 1), f = -Math.PI / 8 + e * Math.PI / 4, 0 > f && (f = 2 * Math.PI + f), d -= 100);
                b.save();
                b.translate(c, d);
                b.rotate(f);
                this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
                b.restore()
            } else c = ig.system.width / 2 + 150, d = this.tutorialTextRect.y - 100, b.fillStyle = "rgba(0,0,0,0.75)",
                b.strokeStyle = "rgba(0,0,0,0.75)", this.roundRect(b, c - 75, d - 30, 150, 105, 10, !0, !1), f = this.tutorialTime % 2, 1 < f && (f = 2 - f), b.globalAlpha = 0.25 + 0.75 * f, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c, d + 10, c, d - 10), b.globalAlpha = 1, d += 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c, d - 10, c, d + 10), c -= 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c + 10, d, c - 10, d), c += 90, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c - 10, d, c + 10, d)
        },
        drawSlideInstructions: function() {
            var b = ig.system.context;
            if (ig.ua.mobile) {
                var c = ig.system.width / 2 + 200,
                    d = this.tutorialTextRect.y - 50 - 100,
                    f = 0;
                b.fillStyle = "rgba(0,0,0,0.75)";
                b.strokeStyle = "rgba(0,0,0,0.75)";
                this.roundRect(b, c - 40, d - 40, 80, 180, 10, !0, !1);
                f = this.tutorialTime % 1.5;
                if (0 <= f && 0.5 > f) {
                    var e = f / 0.25;
                    1 < e && (e = 1);
                    f = -Math.PI / 8 + (1 - e) * Math.PI / 4;
                    0 > f && (f = 2 * Math.PI + f)
                } else 0.5 <= f && 0.75 > f ? (e = (f - 0.5) / 0.25, 1 < e && (e = 1), f = -Math.PI / 8, 0 > f && (f = 2 * Math.PI + f), d += 100 * e) : (e = (f - 0.75) / 0.25, 1 < e && (e = 1), f = -Math.PI / 8 + e * Math.PI / 4, 0 > f && (f = 2 * Math.PI + f), d += 100);
                b.save();
                b.translate(c, d);
                b.rotate(f);
                this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
                b.restore()
            } else c = ig.system.width / 2 + 150, d = this.tutorialTextRect.y - 100, b.fillStyle = "rgba(0,0,0,0.75)", b.strokeStyle = "rgba(0,0,0,0.75)",
                this.roundRect(b, c - 75, d - 30, 150, 105, 10, !0, !1), b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c, d + 10, c, d - 10), f = this.tutorialTime % 2, 1 < f && (f = 2 - f), b.globalAlpha = 0.25 + 0.75 * f, d += 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c, d - 10, c, d + 10), b.globalAlpha = 1, c -= 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c + 10, d, c - 10, d), c += 90, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c - 10, d, c + 10, d)
        },
        drawLeftInstructions: function() {
            var b = ig.system.context;
            if (ig.ua.mobile) {
                var c = ig.system.width / 2 + 200,
                    d = this.tutorialTextRect.y - 50,
                    f = 0;
                b.fillStyle = "rgba(0,0,0,0.75)";
                b.strokeStyle = "rgba(0,0,0,0.75)";
                this.roundRect(b, c - 140, d - 40, 180, 80, 10, !0, !1);
                f = this.tutorialTime % 1.5;
                if (0 <= f && 0.5 > f) {
                    var e = f / 0.25;
                    1 < e && (e = 1);
                    f = -Math.PI / 8 + (1 - e) * Math.PI / 4;
                    0 > f && (f = 2 * Math.PI + f)
                } else 0.5 <= f && 0.75 > f ? (e = (f - 0.5) / 0.25, 1 < e && (e = 1), f = -Math.PI / 8, 0 > f && (f = 2 * Math.PI + f), c -= 100 * e) : (e = (f - 0.75) / 0.25, 1 < e && (e = 1), f = -Math.PI / 8 + e * Math.PI / 4, 0 > f && (f = 2 * Math.PI + f), c -= 100);
                b.save();
                b.translate(c, d);
                b.rotate(f);
                this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
                b.restore()
            } else c = ig.system.width / 2 + 150, d = this.tutorialTextRect.y - 100, b.fillStyle = "rgba(0,0,0,0.75)", b.strokeStyle = "rgba(0,0,0,0.75)", this.roundRect(b, c - 75,
                d - 30, 150, 105, 10, !0, !1), b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c, d + 10, c, d - 10), d += 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c, d - 10, c, d + 10), f = this.tutorialTime % 2, 1 < f && (f = 2 - f), b.globalAlpha = 0.25 + 0.75 * f, c -= 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c +
                10, d, c - 10, d), b.globalAlpha = 1, c += 90, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c - 10, d, c + 10, d)
        },
        drawRightInstructions: function() {
            var b = ig.system.context;
            if (ig.ua.mobile) {
                var c = ig.system.width / 2 + 100,
                    d = this.tutorialTextRect.y - 50,
                    f = 0;
                b.fillStyle = "rgba(0,0,0,0.75)";
                b.strokeStyle = "rgba(0,0,0,0.75)";
                this.roundRect(b, c - 40, d - 40, 180, 80, 10, !0, !1);
                f = this.tutorialTime % 1.5;
                if (0 <= f && 0.5 > f) {
                    var e = f / 0.25;
                    1 < e && (e = 1);
                    f = -Math.PI / 8 + (1 -
                        e) * Math.PI / 4;
                    0 > f && (f = 2 * Math.PI + f)
                } else 0.5 <= f && 0.75 > f ? (e = (f - 0.5) / 0.25, 1 < e && (e = 1), f = -Math.PI / 8, 0 > f && (f = 2 * Math.PI + f), c += 100 * e) : (e = (f - 0.75) / 0.25, 1 < e && (e = 1), f = -Math.PI / 8 + e * Math.PI / 4, 0 > f && (f = 2 * Math.PI + f), c += 100);
                b.save();
                b.translate(c, d);
                b.rotate(f);
                this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
                b.restore()
            } else c = ig.system.width / 2 + 150, d = this.tutorialTextRect.y - 100, b.fillStyle = "rgba(0,0,0,0.75)", b.strokeStyle = "rgba(0,0,0,0.75)", this.roundRect(b, c - 75, d - 30, 150, 105, 10, !0, !1),
                b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c, d + 10, c, d - 10), d += 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c, d - 10, c, d + 10), c -= 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c + 10, d, c - 10, d), f = this.tutorialTime % 2, 1 < f && (f = 2 - f), b.globalAlpha = 0.25 + 0.75 * f, c += 90, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c - 10, d, c + 10, d), b.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-trail").requires("impact.entity").defines(function() {
    GameTrailNode = ig.Class.extend({
        x: 0,
        y: 0,
        time: 0,
        remainder: 0,
        prev: null,
        next: null,
        l: 0,
        w: 1,
        dx: 0,
        dy: 0,
        adx: 0,
        ady: 0,
        ndx: 0,
        ndy: 0,
        init: function(b, c, d, f) {
            this.x = b;
            this.y = c;
            this.time = d;
            this.remainder = f
        },
        setNext: function(b) {
            this.next = b;
            b = this.next.x - this.x;
            var c = this.next.y - this.y,
                d = Math.sqrt(b * b + c * c);
            this.l = d;
            this.next.l = d;
            this.next.dx = b / d;
            this.next.dy = c / d;
            this.next.ndx = -this.next.dy;
            this.next.ndy = this.next.dx;
            this.prev ? (this.adx = (this.dx + this.next.dx) / 2, this.ady = (this.dy + this.next.dy) / 2, this.ndx = -this.ady, this.ndy = this.adx) : (this.adx = this.next.dx, this.ady = this.next.dy, this.ndx = -this.ady, this.ndy = this.adx, this.dx = this.next.dx, this.dy = this.next.dy)
        },
        setPrev: function(b) {
            this.prev = b
        }
    });
    EntityGameTrail = ig.Entity.extend({
        zIndex: 2E4,
        nodeList: [],
        lineList: [],
        pollInterval: 0.01,
        pollMaxDuration: 0.15,
        maxPollInterval: 0.1,
        nodeMinDistance: 16,
        pollFlag: !1,
        hidden: !0,
        control: null,
        character: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            this.control =
                ig.game.getEntitiesByType(EntityGameControl)[0];
            this.dY = this.character.pos.y - this.control.vanishingPoint.y;
            this.nodeY = 650;
            this.nodeX = 310;
            this.nodeSwitch = !1
        },
        draw: function() {
            this.hidden || this.drawLineFromNodeList(this.nodeList)
        },
        update: function() {
            if (!this.control.gamePaused) {
                for (var b = ig.system.clock.delta(), c = b % this.pollInterval; 0 < this.nodeList.length;) {
                    var d = this.nodeList[0];
                    if (b - c - (d.time - d.remainder) >= this.pollMaxDuration) this.nodeList.splice(0, 1), 0 < this.nodeList.length && this.nodeList[0].setPrev(null);
                    else break
                }
                for (var f = 0; f < this.lineList.length;) {
                    for (var e = this.lineList[f]; 0 < e.length;)
                        if (d = e[0], b - c - (d.time - d.remainder) >= this.pollMaxDuration) e.splice(0, 1), 0 < e.length && e[0].setPrev(null);
                        else break;
                    0 == e.length ? this.lineList.splice(0, 1) : f++
                }
                if (!(0 < this.nodeList.length && (d = this.nodeList[this.nodeList.length - 1], b - (d.time - d.remainder) < this.pollInterval))) {
                    this.nodeY -= 15;
                    f = this.nodeX = this.nodeSwitch ? ig.system.width / 2 + this.nodeY * (this.character.pos.x - ig.system.width / 2) / this.dY - 11 + 3 * Math.random() : ig.system.width /
                        2 + this.nodeY * (this.character.pos.x - ig.system.width / 2) / this.dY + 9 + 3 * Math.random();
                    e = this.nodeY;
                    490 >= this.nodeY && (this.nodeY = 650, this.nodeSwitch = !this.nodeSwitch);
                    if (0 < this.nodeList.length) {
                        var d = this.nodeList[this.nodeList.length - 1],
                            j = f - d.x,
                            d = e - d.y;
                        if (j * j + d * d < this.nodeMinDistance) return
                    }
                    b = new GameTrailNode(f, e, b, c);
                    0 < this.nodeList.length && (d = this.nodeList[this.nodeList.length - 1], d.setNext(b), b.setPrev(d));
                    this.nodeList.push(b)
                }
            }
        },
        drawLineFromNodeList: function(b) {
            if (b && !(1 >= b.length)) {
                var c = ig.system.context;
                c.lineWidth = 2;
                c.strokeStyle = "rgba(255,255,255,0.5)";
                for (var d = 12, f = 0; f < b.length; f++) {
                    var e = b[f],
                        j = ig.system.clock.delta() - e.time,
                        j = j / this.pollMaxDuration;
                    1 < j && (j = 1);
                    j = 1 - j;
                    e.t = j;
                    e.w = d * j
                }
                c.beginPath();
                e = b[0];
                j = e.x - e.dx * e.w;
                e = e.y - e.dy * e.w;
                c.moveTo(j, e);
                for (f = 0; f < b.length - 1; f++) e = b[f], j = e.x + e.ndx * e.w, e = e.y + e.ndy * e.w, c.lineTo(j, e);
                e = b[b.length - 1];
                d > e.l && (d = e.l);
                j = e.x + e.ndx * e.w - e.dx * d;
                e = e.y + e.ndy * e.w - e.dy * d;
                c.lineTo(j, e);
                e = b[b.length - 1];
                j = e.x + e.dx * e.w;
                e = e.y + e.dy * e.w;
                c.lineTo(j, e);
                e = b[b.length - 1];
                j = e.x -
                    e.ndx * e.w - e.dx * d;
                e = e.y - e.ndy * e.w - e.dy * d;
                c.lineTo(j, e);
                for (f = b.length - 2; 0 <= f; f--) e = b[f], j = e.x - e.ndx * e.w, e = e.y - e.ndy * e.w, c.lineTo(j, e);
                c.closePath();
                c.fillStyle = "rgba(127,127,127,0.75)";
                c.fill();
                d = 8;
                for (f = 0; f < b.length; f++) e = b[f], j = ig.system.clock.delta() - e.time, j /= this.pollMaxDuration, 1 < j && (j = 1), j -= 1, e.t = j, e.w = d * j * j;
                c.beginPath();
                e = b[0];
                j = e.x - e.dx * e.w;
                e = e.y - e.dy * e.w;
                c.moveTo(j, e);
                for (f = 0; f < b.length - 1; f++) e = b[f], j = e.x + e.ndx * e.w, e = e.y + e.ndy * e.w, c.lineTo(j, e);
                e = b[b.length - 1];
                d > e.l && (d = e.l);
                j = e.x + e.ndx * e.w - e.dx * d;
                e = e.y + e.ndy * e.w - e.dy * d;
                c.lineTo(j, e);
                e = b[b.length - 1];
                j = e.x + e.dx * e.w;
                e = e.y + e.dy * e.w;
                c.lineTo(j, e);
                e = b[b.length - 1];
                j = e.x - e.ndx * e.w - e.dx * d;
                e = e.y - e.ndy * e.w - e.dy * d;
                c.lineTo(j, e);
                for (f = b.length - 2; 0 <= f; f--) e = b[f], j = e.x - e.ndx * e.w, e = e.y - e.ndy * e.w, c.lineTo(j, e);
                c.closePath();
                c.fillStyle = "rgb(255,255,255)";
                c.fill()
            }
        },
        hide: function() {
            this.hidden = !0
        },
        show: function() {
            this.hidden = !1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-character").requires("impact.entity", "game.entities.game-trail").defines(function() {
    EntityGameCharacter = ig.Entity.extend({
        offset: {
            x: 64,
            y: 155
        },
        size: {
            x: 128,
            y: 165
        },
        charWidth: 50,
        charHeight: 50,
        runContactRect: {
            x: -25,
            y: -50,
            w: 50,
            h: 50
        },
        jumpContactRect: {
            x: -25,
            y: -100,
            w: 50,
            h: 50
        },
        jumpOffset: 0,
        jumpTime: 0,
        alpha: 1,
        zIndex0: 1200,
        runAnimSheet: new ig.AnimationSheet("media/graphics/game/character/run.png", 128, 165),
        runAnimSheet2: new ig.AnimationSheet("media/graphics/game/character/run2.png", 128, 165),
        slideAnimSheet: new ig.AnimationSheet("media/graphics/game/character/slide.png", 128, 165),
        slideAnimSheet2: new ig.AnimationSheet("media/graphics/game/character/slide2.png", 128, 165),
        jumpAnimSheet: new ig.AnimationSheet("media/graphics/game/character/jump.png", 128, 165),
        jumpAnimSheet2: new ig.AnimationSheet("media/graphics/game/character/jump2.png", 128, 165),
        runAnim: null,
        slideAnim: null,
        jumpAnim: null,
        anim: null,
        STATES: {
            RUN: 0,
            SLIDE: 1,
            JUMP: 2,
            POWERED: 3,
            INTRO: 4,
            MEGA: 5
        },
        state: 0,
        worldPos: {
            x: 0,
            y: 0,
            z: 0
        },
        referPos: {
            x: 0,
            y: 150,
            z: 0
        },
        zValue: 13,
        scale: 1,
        scaleModifier: 1,
        zWidth: 1,
        invulnerableDuration: 2,
        invulnerableStartTime: 0,
        isInvulnerable: !1,
        isShaking: !1,
        shakeDuration: 0.25,
        shakeStartTime: 0,
        shakeOffset: {
            x: 0,
            y: 0
        },
        shakeAmount: 5,
        queuedPowerUp: !1,
        control: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.runAnim = new ig.Animation(this.runAnimSheet, 0.038, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], !1);
            this.jumpAnim = new ig.Animation(this.jumpAnimSheet, 0.038, [5, 0, 0, 1, 2, 2, 3, 4, 5], !0);
            this.slideAnim = new ig.Animation(this.slideAnimSheet, 0.038, [0, 1, 1, 2, 3, 3, 3, 3, 3], !0);
            this.nanims = [this.runAnim, this.jumpAnim, this.slideAnim];
            this.anim = this.runAnim;
            this.charWidth *= this.scaleModifier;
            this.charHeight *= this.scaleModifier;
            this.runAnim2 = new ig.Animation(this.runAnimSheet2, 0.038, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], !1);
            this.jumpAnim2 = new ig.Animation(this.jumpAnimSheet2, 0.038, [5, 0, 0, 1, 2, 2, 3, 4, 5], !0);
            this.slideAnim2 = new ig.Animation(this.slideAnimSheet2, 0.038, [0, 1, 1, 2, 3, 3, 3, 3, 3], !0);
            this.state = this.STATES.RUN;
            this.stepTimer = new ig.Timer(0.2);
            this.stepPaused = !1;
            this.playStep = !0;
            this.trail = ig.game.spawnEntity(EntityGameTrail, 100, 100, {
                character: this
            })
        },
        ready: function() {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.zIndex = this.zIndex0 - this.zValue;
            ig.game.sortEntitiesDeferred();
            this.growTime = this.control.gameTime
        },
        draw: function() {
            var b = this.bitwiseRound(this.pos.x),
                c = this.bitwiseRound(this.pos.y);
            this.state == this.STATES.SLIDE && (c -= 60);
            0 > c && (c = 0);
            if (0 < c) {
                var d = 1 - -this.jumpOffset / 500;
                0 > d && (d = 0);
                var f = 30 * d,
                    e = ig.system.context;
                e.save();
                e.translate(b, c);
                e.scale(1, 0.5);
                e.beginPath();
                e.arc(0, 0, f, 0, 2 * Math.PI, !1);
                e.fillStyle = "rgba(0,0,0," + 0.2 * d + ")";
                e.fill();
                e.restore()
            }
            b = this.pos.x - this.offset.x + this.shakeOffset.x;
            c = this.pos.y + this.jumpOffset - this.offset.y + this.shakeOffset.y;
            ig.system.context.globalAlpha = this.alpha;
            this.anim.draw(this.bitwiseRound(b), this.bitwiseRound(c));
            ig.system.context.globalAlpha = 1
        },
        drawTrail: function(b, c) {
            var d = ig.system.clock.delta() % 0.6;
            ig.system.context.globalAlpha = 0.6 - d;
            this.anim.draw(b, c + 125 * d)
        },
        update: function() {
            if (!this.control.gamePaused && !this.control.gameOver && !this.control.gameStarting && (this.parent(), this.playStep ? this.control.tutorialPauseMode || (this.stepPaused && (this.stepTimer.unpause(), this.stepPaused = !1), 0 < this.stepTimer.delta() && (ig.soundHandler.sfxPlayer.play("step"), this.stepTimer.reset())) : this.stepPaused || (this.stepTimer.pause(), this.stepPaused = !0), !this.control.tutorialPauseMode)) {
                this.anim.update();
                if (this.isInvulnerable) {
                    var b = this.control.gameTime - this.invulnerableStartTime;
                    b >= this.invulnerableDuration ? (this.alpha = 1, this.isInvulnerable = !1) : (b %= 0.5, 0.25 < b && (b = 0.25 - (b - 0.25)), this.alpha = 0.25 + 0.75 * (b / 0.25))
                }
                this.isShaking && (b = this.control.gameTime - this.shakeStartTime, b >= this.shakeDuration && (this.shakeOffset.x = 0, this.shakeOffset.y = 0, this.isShaking = !1));
                this.queuedPowerUp && (this.state == this.STATES.RUN || this.state == this.STATES.SLIDE) && this.powerUp()
            }
        },
        megaRun: function() {
            for (var b = 0; 3 > b; b++) this.nanims[b].alpha = 0.6;
            this.state = this.STATES.MEGA;
            ig.soundHandler.sfxPlayer.play("power")
        },
        megaEnd: function() {
            for (var b = 0; 3 > b; b++) this.nanims[b].alpha = 1;
            0 > this.jumpOffset ? (this.state = this.STATES.JUMP, this.anim = this.jumpAnim, b = Math.floor((this.control.gameTime - this.jumpTime) / this.anim.frameTime), this.anim.rewind(), this.anim.gotoFrame(b)) : (this.state = this.STATES.RUN, this.run());
            this.control.runSpeed = 15;
            this.control.maxRunSpeed = 20;
            this.invulnerableStartTime = this.control.gameTime;
            this.isInvulnerable = !0;
            this.trail.hide();
            ig.soundHandler.sfxPlayer.play("power")
        },
        run: function() {
            this.state == this.STATES.POWERED ? this.anim = this.runAnim2 :
                this.state == this.STATES.MEGA ? (this.anim = this.runAnim, this.trail.show()) : (this.anim = this.runAnim, this.state = this.STATES.RUN);
            this.anim.rewind();
            this.playStep = !0;
            this.zIndex = this.zIndex0 - this.zValue;
            ig.game.sortEntitiesDeferred()
        },
        slide: function() {
            this.state == this.STATES.POWERED || this.state == this.STATES.MEGA || (this.anim = this.slideAnim, this.state = this.STATES.SLIDE, this.anim.rewind(), this.playStep = !1, this.zIndex = this.zIndex0 - this.zValue - 5, ig.game.sortEntitiesDeferred(), ig.soundHandler.sfxPlayer.play("slide"))
        },
        jump: function() {
            this.jumpTime = this.control.gameTime;
            this.zIndex = this.zIndex0 - this.zValue;
            this.zIndex += 10;
            ig.game.sortEntitiesDeferred();
            this.state == this.STATES.POWERED ? (this.anim = this.jumpAnim2, this.anim.gotoFrame(0), this.anim.rewind()) : this.state == this.STATES.MEGA ? (this.anim = this.jumpAnim, this.anim.gotoFrame(0), this.anim.rewind()) : (this.anim = this.jumpAnim, this.anim.gotoFrame(0), this.anim.rewind(), this.state = this.STATES.JUMP);
            this.playStep = !1;
            this.trail.hide();
            ig.soundHandler.sfxPlayer.play("jump")
        },
        queuePowerUp: function() {
            this.queuedPowerUp = !0
        },
        powerUp: function() {
            this.queuedPowerUp = !1;
            this.state != this.STATES.POWERED && (this.state = this.STATES.POWERED, this.anim = this.runAnim2, this.anim.rewind(), this.zIndex = 1200 - this.zValue, ig.game.sortEntitiesDeferred(), ig.soundHandler.sfxPlayer.play("power"))
        },
        powerDown: function() {
            if (0 > this.jumpOffset) {
                this.state = this.STATES.JUMP;
                this.anim = this.jumpAnim;
                var b = Math.floor((this.control.gameTime - this.jumpTime) / this.anim.frameTime);
                this.anim.rewind();
                this.anim.gotoFrame(b)
            } else this.state =
                this.STATES.RUN, this.run();
            console.log("powerdown");
            this.invulnerableStartTime = this.control.gameTime - 0.5;
            this.isInvulnerable = !0;
            ig.soundHandler.sfxPlayer.play("power")
        },
        shake: function() {
            this.isShaking = !0;
            this.shakeStartTime = this.control.gameTime;
            this.shakeOffset.x = -this.shakeAmount + 2 * Math.random() * this.shakeAmount;
            this.shakeOffset.y = -this.shakeAmount
        },
        bitwiseRound: function(b) {
            return 0.5 + b << 0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-bgObject").requires("impact.entity").defines(function() {
    EntityGameBgObject = ig.Entity.extend({
        offset: {
            x: 140,
            y: 362
        },
        size: {
            x: 1,
            y: 1
        },
        contactRect: {
            x: 0,
            y: 0
        },
        zIndex: 1200,
        image: null,
        images: [new ig.Image("media/graphics/game/objects/bg00.png"), new ig.Image("media/graphics/game/objects/bg01.png"), new ig.Image("media/graphics/game/objects/bg02.png"), new ig.Image("media/graphics/game/objects/bg03.png"), new ig.Image("media/graphics/game/objects/bg04.png"), new ig.Image("media/graphics/game/objects/bg05.png"), new ig.Image("media/graphics/game/objects/bg06.png"), new ig.Image("media/graphics/game/objects/bg07.png")],
        imageId: 0,
        worldPos: {
            x: 0,
            y: 0,
            z: 0
        },
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        objType: 0,
        control: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.setImageId(this.imageId);
            this.scale = this.control.cameraDistance / this.zValue;
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred()
        },
        setImageId: function(b) {
            null != b && (this.imageId = b, this.image = this.images[b], this.offset.x = this.image.width / 2, this.offset.y = this.image.height)
        },
        draw: function() {
            var b = this.worldPos.x,
                c = this.worldPos.y,
                d = this.zValue,
                f = this.control.cameraDistance; - 10 > d ? (this.killed = !0, this.control.cleanObjects(), this.kill()) : (d = f / d, b = ig.system.width / 2 - this.control.cameraPos.x * d + b * d, c = this.control.cameraPos.y * d + ig.system.height - c * d - (1 - d) * (ig.system.height - this.control.vanishingPoint.y), this.pos.x = b, this.pos.y = c, b = this.control.horizonLine.y, f = this.control.horizonLine.y +
                this.control.distanceFogHeight, c < b || (c < f && (ig.system.context.globalAlpha = (c - b) / (f - b)), d *= this.scaleModifier, c = this.pos.y - this.offset.y * d - ig.game._rscreen.y, ig.system.context.drawImage(this.image.data, this.bitwiseRound(this.pos.x - this.offset.x * d - ig.game._rscreen.x), this.bitwiseRound(c), this.image.width * d, this.image.height * d), ig.system.context.globalAlpha = 1))
        },
        update: function() {
            this.control.gamePaused || this.control.gameOver || this.control.gameStarting || this.control.character.state != this.control.character.STATES.INTRO &&
                (this.control.tutorialPauseMode || this.moveForward(-this.control.runSpeed * ig.system.tick))
        },
        moveForward: function(b) {
            this.zValue += b;
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred()
        },
        bitwiseRound: function(b) {
            return 0.5 + b << 0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-obstacle").requires("impact.entity").defines(function() {
    EntityGameObstacle = ig.Entity.extend({
        offset: {
            x: 72,
            y: 100
        },
        size: {
            x: 1,
            y: 1
        },
        contactRect: {
            x: -58,
            y: -95,
            w: 119,
            h: 92
        },
        zIndex0: 1200,
        image: null,
        images: [new ig.Image("media/graphics/game/objects/obstacle00.png"), new ig.Image("media/graphics/game/objects/obstacle01.png"), new ig.Image("media/graphics/game/objects/obstacle02.png"), new ig.Image("media/graphics/game/objects/obstacle03.png"), new ig.Image("media/graphics/game/objects/obstacle04.png"), new ig.Image("media/graphics/game/objects/obstacle05.png"), new ig.Image("media/graphics/game/objects/obstacle06.png"), new ig.Image("media/graphics/game/objects/obstacle07.png"), new ig.Image("media/graphics/game/objects/obstacle08.png")],
        imageId: 0,
        worldPos: {
            x: 0,
            y: 0,
            z: 0
        },
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        objType: 1,
        slidable: !1,
        zWidth: 0,
        knockedOut: !1,
        knockOutPos: {
            x: 0,
            y: 0
        },
        knockOutOffset: {
            x: 0,
            y: 0
        },
        knockOutGravity: 1200,
        knockOutVector: {
            x: 0,
            y: 0
        },
        knockOutAlpha: 0,
        knockOutAngle: 0,
        knockOutDirection: 1,
        knockOutStopped: !1,
        control: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.setImageId(this.imageId);
            this.scale = this.control.cameraDistance / this.zValue;
            this.zIndex = this.zIndex0 - this.zValue;
            ig.game.sortEntitiesDeferred()
        },
        setImageId: function(b) {
            if (null != b) {
                if (0 == b || 1 == b) b = 0 + Math.floor(2 * Math.random());
                this.imageId = b;
                if (2 == b || 4 == b || 5 == b) this.zIndex0 = 1195;
                this.image = this.images[b];
                this.offset.x = this.image.width / 2;
                this.offset.y = this.image.height;
                this.slidable = 3 == b ? !0 : !1;
                8 == b && (this.objType = 3);
                this.contactRect.w = this.image.width * this.scaleModifier;
                this.contactRect.h = this.image.height / 2 * this.scaleModifier;
                this.contactRect.x = -this.contactRect.w / 2;
                this.contactRect.y = -this.contactRect.h
            }
        },
        draw: function() {
            var b = this.worldPos.x,
                c = this.worldPos.y,
                d = this.zValue,
                f = this.control.cameraDistance;
            if (-10 > d) this.killed = !0, this.control.cleanObjects(), this.kill();
            else {
                var e = 0;
                this.knockedOut && (b += this.knockOutPos.x, c -= this.knockOutPos.y, e = this.knockOutAngle);
                d = f / d;
                b = ig.system.width / 2 - this.control.cameraPos.x * d + b * d;
                c = this.control.cameraPos.y * d + ig.system.height - c * d - (1 - d) * (ig.system.height - this.control.vanishingPoint.y);
                this.pos.x = b;
                this.pos.y = c;
                b = this.control.horizonLine.y;
                f = this.control.horizonLine.y + this.control.distanceFogHeight;
                if (!(c < b)) {
                    c < f && (ig.system.context.globalAlpha = (c - b) / (f - b));
                    this.knockedOut && (ig.system.context.globalAlpha *= this.knockOutAlpha);
                    var j = d * this.scaleModifier,
                        d = this.pos.x,
                        c = this.pos.y,
                        b = -this.offset.x * j,
                        f = -this.offset.y * j,
                        n = this.image.width *
                        j,
                        j = this.image.height * j;
                    0 > n && (n = 0);
                    0 > j && (j = 0);
                    ig.system.context.save();
                    ig.system.context.translate(d, c);
                    0 < e && ig.system.context.rotate(e);
                    ig.system.context.drawImage(this.image.data, b, f, n, j);
                    ig.system.context.restore();
                    ig.system.context.globalAlpha = 1
                }
            }
        },
        update: function() {
            this.control.gamePaused || this.control.gameOver || this.control.gameStarting || this.control.character.state != this.control.character.STATES.INTRO && (this.control.tutorialPauseMode || this.moveForward(-this.control.runSpeed * ig.system.tick))
        },
        moveForward: function(b) {
            this.zValue += b;
            this.zIndex = this.zIndex0 - this.zValue;
            ig.game.sortEntitiesDeferred();
            this.knockedOut && (this.zIndex = 2E3, ig.game.sortEntitiesDeferred(), this.knockOutPos.x += this.knockOutVector.x * ig.system.tick, this.knockOutPos.y += this.knockOutVector.y * ig.system.tick, 0 < this.knockOutPos.y && (this.knockOutPos.y = 0, this.knockOutVector.x = 0, this.knockOutVector.y = 0, this.knockOutStopped = !0), this.knockOutStopped || (this.knockOutVector.y += this.knockOutGravity * ig.system.tick, this.knockOutAngle += 3 * (this.knockOutDirection * Math.PI) * ig.system.tick, 0 > this.knockOutAngle && (this.knockOutAngle = 2 * Math.PI + this.knockOutAngle), this.knockOutAlpha -= 2 * ig.system.tick, 0 > this.knockOutAlpha && (this.knockOutAlpha = 0, this.knockOutStopped = !0)))
        },
        bitwiseRound: function(b) {
            return 0.5 + b << 0
        },
        knockOut: function() {
            if (!this.knockedOut && !(2 == this.imageId || 4 == this.imageId || 5 == this.imageId)) {
                this.knockedOut = !0;
                var b = 200 + 100 * Math.random(),
                    c = 1;
                85 < this.worldPos.x ? c = 1 : -85 > this.worldPos.x ? c = -1 : 0.5 <= Math.random() && (c = -1);
                this.knockOutVector.x = b * c / 0.25;
                this.knockOutVector.y = -1200;
                this.knockOutPos.x = 0;
                this.knockOutPos.y = 0;
                this.knockOutAlpha = 1;
                this.knockOutAngle = 0;
                this.knockOutDirection = c
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-pickup").requires("impact.entity").defines(function() {
    EntityGamePickup = ig.Entity.extend({
        offset: {
            x: 68,
            y: 126
        },
        size: {
            x: 60,
            y: 68
        },
        speed: {
            x: 0,
            y: 0
        },
        angle: 0,
        angle2: 0,
        contactRect: {
            x: -57,
            y: -109,
            w: 114,
            h: 106
        },
        zIndex: 12E5,
        itemImage: null,
        magnet: new ig.Image("media/graphics/game/pickups/magnet.png"),
        invin: new ig.Image("media/graphics/game/pickups/invin.png"),
        "double": new ig.Image("media/graphics/game/pickups/double.png"),
        mega: new ig.Image("media/graphics/game/pickups/mega.png"),
        resurrect: new ig.Image("media/graphics/game/pickups/resurrect.png"),
        itemOffset: {
            x: 0,
            y: 0
        },
        itemDown: !1,
        coinAnimSheet: new ig.AnimationSheet("media/graphics/game/pickups/coin.png", 60, 68),
        anim: null,
        worldPos: {
            x: 0,
            y: 0,
            z: 0
        },
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        objType: 2,
        zWidth: 0,
        pickupId: 0,
        control: null,
        isAdsorbed: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.anim = new ig.Animation(this.coinAnimSheet, 0.08, [0, 1, 2, 3, 4, 5], !1);
            this.coinSize = {};
            this.coinSize.x = 60;
            this.coinSize.y = 68;
            this.offset.x = this.coinSize.x / 2;
            this.offset.y = this.coinSize.y;
            this.contactRect.w = this.coinSize.x;
            this.contactRect.h = this.coinSize.y;
            this.contactRect.x = -this.contactRect.w / 2;
            this.contactRect.y = -this.contactRect.h;
            ig.game.sortEntitiesDeferred()
        },
        ready: function() {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.scale = this.control.cameraDistance / this.zValue;
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred()
        },
        setPickupId: function(b) {
            null != b && (this.pickupId = b, 0 != b ? (this.itemImages = [], this.itemImages.push(this.magnet), this.itemImages.push(this.invin), this.itemImages.push(this.double), this.itemImages.push(this.mega), this.itemImages.push(this.resurrect), this.itemImage = this.itemImages[b - 1], this.offset.x = this.itemImage.width / 2, this.offset.y = this.itemImage.height, this.contactRect.w = 62, this.contactRect.h = this.itemImage.height) : (this.offset.x = this.coinSize.x / 2, this.offset.y = this.coinSize.y, this.contactRect.w = this.coinSize.x, this.contactRect.h = this.coinSize.y), this.contactRect.x = -this.contactRect.w / 2, this.contactRect.y = -this.contactRect.h / 2)
        },
        draw: function() {
            var b = this.worldPos.x,
                c = this.worldPos.y,
                d = this.zValue,
                f = this.control.cameraDistance;
            if (-10 > d) this.killed = !0, this.control.cleanObjects(), this.kill();
            else {
                var f = f / d,
                    e, b = ig.system.width / 2 - this.control.cameraPos.x * f + b * f;
                e = this.control.cameraPos.y * f + ig.system.height - c * f - (1 - f) * (ig.system.height - this.control.vanishingPoint.y);
                this.pos.x = b;
                this.pos.y = e;
                if (!(65 < d)) {
                    45 < d && (ig.system.context.globalAlpha = 1 - (d - 45) / 20);
                    d = f * this.scaleModifier;
                    f = this.control.cameraPos.y * f + ig.system.height - (1 - f) * (ig.system.height - this.control.vanishingPoint.y);
                    0 > f && (f = 0);
                    if (0 != this.pickupId) {
                        if (0 < f) {
                            b = 1 - (c - this.itemOffset.y) /
                                500;
                            0 > b && (b = 0);
                            e = this.itemImage.width / 4 * d * b;
                            var c = this.pos.x,
                                j = ig.system.context;
                            j.save();
                            j.translate(this.bitwiseRound(c), this.bitwiseRound(f));
                            j.scale(1, 0.5);
                            j.beginPath();
                            j.arc(0, 0, e, 0, 2 * Math.PI, !1);
                            j.fillStyle = "rgba(0,0,0," + 0.2 * b + ")";
                            j.fill();
                            j.restore()
                        }
                        c = this.pos.x - (this.offset.x - this.itemOffset.x) * d;
                        f = this.pos.y - (this.offset.y - this.itemOffset.y) * d;
                        b = this.itemImage.width * d;
                        d *= this.itemImage.height;
                        0 < b && 0 < d && ig.system.context.drawImage(this.itemImage.data, c, f, b, d)
                    } else 0 < f && (b = 1 - c / 500, 0 > b && (b = 0), e = 17.5 * d * b, c = this.pos.x, j = ig.system.context, j.save(), j.translate(this.bitwiseRound(c), this.bitwiseRound(f)), j.scale(1, 0.5), j.beginPath(), j.arc(0, 0, e, 0, 2 * Math.PI, !1), j.fillStyle = "rgba(0,0,0," + 0.2 * b + ")", j.fill(), j.restore()), c = this.pos.x - this.offset.x * d, f = this.pos.y - this.offset.y * d, ig.system.context.save(), ig.system.context.translate(this.bitwiseRound(c), this.bitwiseRound(f)), ig.system.context.scale(d, d), this.anim.draw(0, 0), ig.system.context.restore();
                    ig.system.context.globalAlpha = 1
                }
            }
        },
        update: function() {
            !this.control.gamePaused && !this.control.gameOver && (!this.control.gameStarting && this.control.character.state != this.control.character.STATES.INTRO && !this.control.tutorialPauseMode) && (0 == this.pickupId && this.control.isMagnet && 20 > this.zValue ? this.moveToCharacter() : this.moveForward(-this.control.runSpeed * ig.system.tick), 0 != this.pickupId ? this.itemDown ? (this.itemOffset.y += 60 * ig.system.tick, 0 <= this.itemOffset.y && (this.itemOffset.y = -this.itemOffset.y, this.itemDown = !1)) : (this.itemOffset.y -= 60 * ig.system.tick, -20 >= this.itemOffset.y && (this.itemOffset.y = -20 - (this.itemOffset.y + 20), this.itemDown = !0)) : this.anim.update())
        },
        moveForward: function(b) {
            this.zValue += b;
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred()
        },
        bitwiseRound: function(b) {
            return 0.5 + b << 0
        },
        moveToCharacter: function() {
            this.angle = Math.atan(this.worldPos.x - this.control.character.referPos.x, this.zValue);
            this.worldPos.x -= 0.15 * Math.tan(this.angle);
            this.angle2 = Math.atan(this.worldPos.y - this.control.character.referPos.y, this.zValue);
            this.worldPos.y -= 0.15 * Math.tan(this.angle2);
            this.zValue -= 0.5;
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred();
            11 >= this.zValue && (this.killed = !0, this.control.cleanObjects(), this.kill(), this.control.collectPickup(this.pickupId), this.control.spawnCollectEffect(this))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-hiteffect").requires("impact.entity").defines(function() {
    EntityGameHiteffect = ig.Entity.extend({
        offset: {
            x: 150,
            y: 150
        },
        size: {
            x: 1,
            y: 1
        },
        contactRect: {
            x: 0,
            y: 0
        },
        zIndex: 1300,
        explodeAnimSheet: new ig.AnimationSheet("media/graphics/game/effects/coin_effect.png", 300, 300),
        explode2AnimSheet: new ig.AnimationSheet("media/graphics/game/effects/explosion2_4x2.png", 300, 300),
        explodeAnim: null,
        explode2Anim: null,
        anim: null,
        worldPos: {
            x: 0,
            y: 0,
            z: 0
        },
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        angle: 0,
        alpha: 1,
        timeAlive: 0,
        effectDuration: 0.3,
        effectId: 0,
        control: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.explodeAnim = new ig.Animation(this.explodeAnimSheet, this.effectDuration / 10, [0, 1, 2, 3, 2, 1, 0], !0);
            this.anim = this.explode2Anim = new ig.Animation(this.explode2AnimSheet, this.effectDuration / 8, [0, 1, 2, 3, 4, 5, 6, 7], !0);
            this.angle = 2 * Math.random() * Math.PI
        },
        ready: function() {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0]
        },
        setEffectId: function(b) {
            this.effectId = b;
            1 == b ? (this.anim = this.explodeAnim, this.offset.y = 150, this.scaleModifier = 0.8) : this.anim = this.explode2Anim
        },
        draw: function() {
            var b = this.scale * this.scaleModifier,
                c = this.bitwiseRound(this.pos.x),
                d = this.bitwiseRound(this.pos.y),
                f = this.bitwiseRound(-this.offset.x),
                e = this.bitwiseRound(-this.offset.y);
            ig.system.context.save();
            ig.system.context.globalAlpha = this.alpha;
            ig.system.context.translate(c, d);
            ig.system.context.rotate(this.angle);
            ig.system.context.scale(b, b);
            this.anim.draw(f, e);
            ig.system.context.restore()
        },
        update: function() {
            if (!this.control.gamePaused && (this.anim.update(), this.timeAlive += ig.system.tick, this.timeAlive > this.effectDuration && (this.killed = !0, this.control.cleanEffects(), this.kill()), 1 == this.effectId)) {
                var b = this.timeAlive / this.effectDuration;
                1 < b && (b = 1);
                0 > b && (b = 0);
                0.5 < b && (this.alpha = 1 - (b - 0.5) / 0.5)
            }
        },
        bitwiseRound: function(b) {
            return 0.5 + b << 0
        }
    })
});
ig.baked = !0;
ig.module("game.menu.pause").requires("game.menu.dialogue", "game.menu.slider").defines(function() {
    EntityPauseMenu = EntityDialogue.extend({
        bar: new ig.Image("media/graphics/game/ui/game/bar.png", 122, 7),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.resume = ig.game.spawnEntity(EntityResumeBtn, 0, ig.system.height - 265, {
                zIndex: this.zIndex + 1
            });
            this.home = ig.game.spawnEntity(EntityHomeBtn, 0, ig.system.height - 180, {
                zIndex: this.zIndex + 1,
                isPause: !0
            });
            this.title = ig.game.spawnEntity(EntityTitle, 0, ig.system.height / 2 - 34, {
                text: _STRINGS.Game.Paused
            });
            this.title.callback3 = function() {
                this.resume.moveIn()
            }.bind(this);
            this.resume.callback3 = function() {
                this.home.moveIn()
            }.bind(this);
            this.title.pos0.x = this.resume.pos0.x - this.title.size.x / 2 + 18;
            this.text.Bgm = _STRINGS.Game.Music;
            this.text.Sfx = _STRINGS.Game.Sound;
            this.slideBarX = this.pos.x + 140;
            this.sliderBgm = ig.game.spawnEntity(EntitySlider, this.slideBarX, this.pos.y + 115, {
                xLength: this.bar.width,
                zIndex: this.zIndex + 3,
                name: "sliderBgm"
            });
            this.sliderSfx = ig.game.spawnEntity(EntitySlider, this.slideBarX, this.pos.y + 165, {
                xLength: this.bar.width,
                zIndex: this.zIndex + 4,
                name: "sliderSfx"
            });
            ig.game.sortEntitiesDeferred();
            this.moveIn()
        },
        update: function() {
            this.parent()
        },
        callback: function() {
            this.parent();
            this.title.moveIn()
        },
        draw: function() {
            this.parent();
            this.drawText(this.text.Bgm, this.pos.x + 61, this.pos.y + 245, "24px chelsea", "#ffce48");
            this.drawText(this.text.Sfx, this.pos.x + 61, this.pos.y + 295, "24px chelsea", "#ffce48");
            this.bar.draw(this.slideBarX, this.pos.y + 236);
            this.bar.draw(this.slideBarX, this.pos.y +
                285);
            this.sliderBgm.pos.y = this.pos.y + 221;
            this.sliderSfx.pos.y = this.pos.y + 270
        },
        kill: function() {
            this.parent();
            this.home.kill();
            this.title.kill();
            this.sliderBgm.kill();
            this.sliderSfx.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.menu.title").requires("game.buttons.button2").defines(function() {
    EntityTitle = EntityButton2.extend({
        text: "",
        enabled: !1,
        size: {
            x: 178,
            y: 69
        },
        zIndex: 2E5,
        init: function(b, c, d) {
            this.animSheet = new ig.AnimationSheet("media/graphics/game/ui/game/panel.png", 178, 69);
            this.parent(b, c, d);
            this.size.x = 178;
            this.size.y = 69;
            this.pos0.xr = this.pos.x = -this.size.x;
            this.pos.y = ig.system.height / 2 - 215
        },
        clicked: function() {
            this.parent()
        },
        clicking: function() {},
        released: function() {
            this.parent()
        },
        leave: function() {
            this.parent()
        },
        callback: function() {},
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.buttons.resume").requires("game.buttons.button2").defines(function() {
    EntityResumeBtn = EntityButton2.extend({
        isCount: !1,
        count: 3,
        counter: new ig.Timer,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.state = "idle";
            this.text = _STRINGS.Game.Resume
        },
        clicked: function() {
            this.parent()
        },
        clicking: function() {},
        released: function() {
            this.parent()
        },
        leave: function() {
            this.parent()
        },
        callback: function() {
            this.enabled = !1;
            this.currentAnim.alpha = 0;
            ig.game.getEntitiesByType(EntityPauseMenu)[0].kill();
            this.counter.set(1);
            this.isCount = !0
        },
        draw: function() {
            if (this.isCount) {
                if (ig.system.context.fillStyle = "#FFFFFF", ig.system.context.strokeStyle = "#383FF5", ig.system.context.lineWidth = 1, ig.system.context.textAlign = "center", ig.system.context.font = "60pt chelsea", ig.system.context.fillText(this.count.toString(), ig.system.width / 2, 200), ig.system.context.strokeText(this.count.toString(), ig.system.width / 2, 200), 0 < this.counter.delta() && (this.counter.reset(), this.count--), 0 == this.count) {
                    this.control.unpauseGame();
                    var b = ig.game.getEntitiesByType(EntityPauseBtn)[0];
                    b.currentAnim.alpha = b.pAlpha;
                    b.enabled = !0;
                    this.kill()
                }
            } else this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.buttons.store").requires("game.buttons.button2", "game.menu.store").defines(function() {
    EntityStoreBtn = EntityButton2.extend({
        text: _STRINGS.Game.Store,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clicked: function() {
            this.parent()
        },
        clicking: function() {},
        released: function() {
            this.parent()
        },
        leave: function() {
            this.parent()
        },
        callback: function() {
            ig.game.spawnEntity(EntityStoreMenu, 0, 0);
            var b = ig.game.getEntitiesByType(EntityGameOverMenu)[0];
            null != b && b.kill()
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.menu.gameover").requires("game.menu.dialogue", "game.menu.slider", "game.buttons.store").defines(function() {
    EntityGameOverMenu = EntityDialogue.extend({
        coin: new ig.Image("media/graphics/game/ui/game/coin.png", 38, 38),
        distance: new ig.Image("media/graphics/game/ui/game/dist.png", 18, 37),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.moveInTime = 0.6;
            this.play = ig.game.spawnEntity(EntityPlayBtn, 0, ig.system.height - 250, {
                zIndex: this.zIndex + 1,
                text: _STRINGS.Game.Replay
            });
            this.store = ig.game.spawnEntity(EntityStoreBtn, 0, ig.system.height - 170, {
                zIndex: this.zIndex + 1
            });
            this.home = ig.game.spawnEntity(EntityHomeBtn, 0, ig.system.height - 90, {
                zIndex: this.zIndex + 1
            });
            this.title = ig.game.spawnEntity(EntityTitle, 0, 0, {
                text: _STRINGS.Game.GameOver
            });
            this.title.callback3 = function() {
                this.play.moveIn()
            }.bind(this);
            this.play.callback3 = function() {
                this.store.moveIn()
            }.bind(this);
            this.store.callback3 = function() {
                this.home.moveIn()
            }.bind(this);
            this.title.pos0.x = this.play.pos0.x - this.title.size.x / 2 + 18;
            this.title.pos.y = 30;
            this.posX = this.pos.x +
                85;
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
            b = ig.game.storage.get("EFA.bestScore");
            this.score = Math.round(0.5 * this.control.totalDistance) + this.control.coinsCollected + 10 * ig.game.cookies;
            this.scoreTxt = _STRINGS.Game.Score;
            this.score > Number(b) && (ig.game.storage.set("EFA.bestScore", this.score), this.scoreTxt = _STRINGS.Game.BestScore);
            this.score = this.score.toLocaleString();
            this.txtCoin = this.control.coinsCollected.toLocaleString();
            this.txtDistance = Math.round(0.5 * this.control.totalDistance).toLocaleString() + "m";
            ig.game.sortEntitiesDeferred();
            this.moveIn()
        },
        update: function() {
            this.parent()
        },
        callback: function() {
            this.parent();
            this.title.moveIn()
        },
        draw: function() {
            this.parent();
            this.drawText(this.scoreTxt, ig.system.width / 2 + 1, this.pos.y + 151, "42pt chelsea", "#ac852e", "center");
            this.drawText(this.scoreTxt, ig.system.width / 2, this.pos.y + 150, "42pt chelsea", "#220d03", "center");
            this.drawText(this.score, ig.system.width / 2, this.pos.y + 205, "46pt chelsea", "#ffee01", "center");
            this.coin.draw(this.posX, this.pos.y + 245);
            this.drawText(this.txtCoin, this.posX + 55, this.pos.y + 275);
            this.distance.draw(this.posX + 8, this.pos.y + 312);
            this.drawText(this.txtDistance, this.posX + 55, this.pos.y + 340)
        },
        kill: function() {
            this.parent();
            this.play.kill();
            this.store.kill();
            this.home.kill();
            this.title.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.buttons.pause").requires("game.buttons.button").defines(function() {
    EntityPauseBtn = EntityButton.extend({
        size: {
            x: 42,
            y: 43
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/ui/game/pause.png", 42, 43),
        control: null,
        pAlpha: 0.6,
        isHome: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.addAnim("home", 1, [1]);
            this.state = "idle";
            this.currentAnim.alpha = this.pAlpha
        },
        clicked: function() {
            this.parent()
        },
        clicking: function() {},
        released: function() {
            this.parent()
        },
        leave: function() {
            this.parent()
        },
        callback: function() {
            this.parent();
            this.isHome ? ig.game.director.jumpTo(LevelHome) : (this.control.togglePauseGame(), this.enabled = !1, this.currentAnim.alpha = 0, ig.game.spawnEntity(EntityPauseMenu, 0, 0))
        }
    })
});
ig.baked = !0;
ig.module("game.menu.panel").requires("game.menu.dialogue").defines(function() {
    EntityPanel = EntityDialogue.extend({
        coin: new ig.Image("media/graphics/game/ui/game/coin.png", 38, 38),
        animSheet: new ig.AnimationSheet("media/graphics/game/ui/game/spanel.png", 170, 90),
        size: {
            x: 170,
            y: 90
        },
        dist: 0,
        zIndex: 2E5,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.pos0.y = 30;
            this.pos0.yu = -this.size.y;
            this.pos0.yd = this.pos0.yu;
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = this.pos0.yu;
            this.pText =
                this.dist.toLocaleString() + "m";
            this.textX = ig.system.width / 2;
            b = Number(ig.game.storage.get("EFA.multiCoins"));
            switch (this.dist) {
                case 500:
                    0 < b ? (this.drawCoin = !0, this.coinText = "x 2") : this.drawCoin = !1;
                    break;
                case 1E3:
                    1 < b ? (this.drawCoin = !0, this.coinText = "x 3") : this.drawCoin = !1;
                    break;
                case 1500:
                    2 < b ? (this.drawCoin = !0, this.coinText = "x 4") : this.drawCoin = !1;
                    break;
                case 2E3:
                    3 < b ? (this.drawCoin = !0, this.coinText = "x 5") : this.drawCoin = !1;
                    break;
                case 2500:
                    4 < b ? (this.drawCoin = !0, this.coinText = "x 6") : this.drawCoin = !1;
                    break;
                default:
                    this.drawCoin = !1
            }
            this.drawCoin ? (this.textDy = 35, this.coinX = this.pos.x + 28) : this.textDy = 55;
            this.outDelay = 3;
            ig.game.sortEntitiesDeferred();
            this.moveIn()
        },
        callback: function() {
            this.moveOut()
        },
        draw: function() {
            this.parent();
            this.drawCoin ? (this.drawText(this.pText, this.textX, this.pos.y + this.textDy, "28pt chelsea", "#ffee01", "center"), this.coin.draw(this.coinX, this.pos.y + 40), this.drawText(this.coinText, this.coinX + 75, this.pos.y + 67, "28pt chelsea", "#ffee01", "center")) : this.drawText(this.pText, this.textX, this.pos.y + this.textDy, "28pt chelsea", "#ffee01", "center")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-control").requires("impact.entity", "game.entities.game-ui", "game.entities.game-character", "game.entities.game-bgObject", "game.entities.game-obstacle", "game.entities.game-pickup", "game.entities.game-hiteffect", "game.menu.pause", "game.menu.title", "game.buttons.resume", "game.buttons.home", "game.menu.gameover", "game.buttons.pause", "game.menu.panel").defines(function() {
    EntityGameControl = ig.Entity.extend({
        zIndex: 100,
        fog: new ig.Image("media/graphics/game/backgrounds/fog.png"),
        gameStarting: !0,
        gameEnding: !1,
        gamePaused: !1,
        gameOver: !1,
        ui: null,
        character: null,
        gameStartTime: 0,
        gameTime: 0,
        gameOverTime: 0,
        tutorialMode: !1,
        tutorialPauseMode: !1,
        tutorialStage: 0,
        tutorialStopDistance: 0,
        tutorialPausedTime: 0,
        vanishingPoint: {
            x: 240,
            y: 35
        },
        horizonLine: {
            x: 0,
            y: 144
        },
        distanceFogHeight: 60,
        cameraPos: {
            x: 0,
            y: 0,
            z: 0
        },
        cameraDistance: 10,
        vanishingPointOffset: {
            x: 0,
            y: 0
        },
        runSpeed: 15,
        maxRunSpeed: 20,
        acceleration: 1 / 60,
        jumpGravity: 2E3,
        jumpAmt: 0,
        canSlide: !0,
        isSliding: !1,
        slideDuration: 1,
        slideTime: 0,
        objects: [],
        effects: [],
        segments: [],
        bgSets: [],
        segmentSize: 30,
        bgSetSize: 60,
        segmentSizeVariable: 5,
        totalDistance: 0,
        lastBgSetDistance: 0,
        lastSegmentDistance: 0,
        isMagnet: !1,
        magnetTimer: new ig.Timer,
        isMultiCoins: !1,
        multiCoinsTimer: new ig.Timer,
        isMega: !1,
        megaDist: 0,
        itemsNo: 0,
        magnetIndex: 0,
        coinsIndex: 0,
        segmentDefinitions: [
            [{
                id: 8,
                x: 0,
                y: 0,
                z: 15
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 200,
                z: 15
            }],
            [{
                id: 3,
                x: 0,
                y: 0,
                z: 11
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 200,
                z: 11
            }, {
                type: 2,
                id: 0,
                x: 125,
                y: 0,
                z: 18
            }, {
                type: 2,
                id: 0,
                x: -125,
                y: 0,
                z: 20
            }],
            [{
                id: 6,
                x: -110,
                y: 0,
                z: 17
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 17
            }, {
                id: 0,
                x: 110,
                y: 0,
                z: 17
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 10
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 12
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 14
            }],
            [{
                id: 2,
                x: 0,
                y: 0,
                z: 10
            }, {
                id: 5,
                x: 130,
                y: 0,
                z: 10
            }, {
                type: 2,
                id: 0,
                x: -125,
                y: 0,
                z: 10
            }, {
                type: 2,
                id: 0,
                x: -125,
                y: 0,
                z: 14
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 16.5
            }],
            [{
                id: 4,
                x: -130,
                y: 0,
                z: 10
            }, {
                id: 2,
                x: 0,
                y: 0,
                z: 10
            }, {
                id: 5,
                x: 130,
                y: 0,
                z: 10
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 16.5
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 18.5
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 20.5
            }],
            [{
                id: 6,
                x: -115,
                y: 0,
                z: 11
            }, {
                id: 7,
                x: 0,
                y: 0,
                z: 11
            }, {
                id: 1,
                x: 130,
                y: 0,
                z: 11
            }, {
                type: 2,
                id: 0,
                x: -125,
                y: 0,
                z: 14
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 16
            }, {
                type: 2,
                id: 0,
                x: 125,
                y: 0,
                z: 18
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 20
            }, {
                type: 2,
                id: 0,
                x: -125,
                y: 0,
                z: 22
            }],
            [{
                id: 3,
                x: 0,
                y: 0,
                z: 7
            }, {
                id: 0,
                x: -110,
                y: 0,
                z: 18
            }, {
                id: 5,
                x: 130,
                y: 0,
                z: 18
            }, {
                id: 1,
                x: 10,
                y: 0,
                z: 18
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 6
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 21
            }, {
                type: 2,
                id: 0,
                x: -125,
                y: 0,
                z: 23
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 25
            }, {
                type: 2,
                id: 0,
                x: 125,
                y: 0,
                z: 27
            }],
            [{
                id: 6,
                x: -110,
                y: 0,
                z: 10
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 10
            }, {
                id: 2,
                x: 0,
                y: 0,
                z: 17
            }, {
                id: 0,
                x: 125,
                y: 0,
                z: 17
            }, {
                type: 2,
                id: 0,
                x: 125,
                y: 0,
                z: 10
            }, {
                type: 2,
                id: 0,
                x: -125,
                y: 0,
                z: 17
            }],
            [{
                id: 4,
                x: -130,
                y: 0,
                z: 11
            }, {
                id: 2,
                x: 0,
                y: 0,
                z: 11
            }, {
                id: 5,
                x: 130,
                y: 0,
                z: 11
            }, {
                id: 3,
                x: 0,
                y: 0,
                z: 25
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 22
            }, {
                type: 2,
                id: 0,
                x: -125,
                y: 200,
                z: 11
            }],
            [{
                id: 8,
                x: 0,
                y: 0,
                z: 12,
                type: 3
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 200,
                z: 11
            }],
            [{
                id: 6,
                x: -115,
                y: 0,
                z: 11
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 11
            }, {
                id: 4,
                x: -130,
                y: 0,
                z: 20
            }, {
                id: 5,
                x: 130,
                y: 0,
                z: 20
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 20
            }, {
                type: 2,
                id: 0,
                x: 125,
                y: 0,
                z: 11
            }],
            [{
                id: 2,
                x: 0,
                y: 0,
                z: 10
            }, {
                id: 5,
                x: 130,
                y: 0,
                z: 9.5
            }, {
                id: 0,
                x: -115,
                y: 0,
                z: 20
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 20
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 10.5
            }, {
                type: 2,
                x: 125,
                y: 0,
                z: 20.5
            }],
            [{
                id: 3,
                x: 0,
                y: 0,
                z: 15
            }, {
                type: 2,
                x: -125,
                y: 200,
                z: 14
            }, {
                type: 2,
                x: 125,
                y: 200,
                z: 16
            }],
            [{
                id: 1,
                x: 0,
                y: 0,
                z: 15
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 13
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 11
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 15
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 13
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 11
            }, {
                type: 2,
                x: 125,
                y: 0,
                z: 13
            }, {
                type: 2,
                x: 125,
                y: 0,
                z: 11
            }, {
                type: 2,
                x: 125,
                y: 0,
                z: 15
            }, {
                type: 2,
                x: 125,
                y: 0,
                z: 18
            }, {
                type: 2,
                x: 125,
                y: 0,
                z: 20
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 18
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 20
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 18
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 20
            }],
            [{
                id: 1,
                x: 0,
                y: 0,
                z: 15
            }, {
                type: 2,
                x: -125,
                y: 200,
                z: 11
            }, {
                type: 2,
                x: 0,
                y: 200,
                z: 11
            }, {
                type: 2,
                x: 125,
                y: 200,
                z: 11
            }, {
                type: 2,
                x: -125,
                y: 200,
                z: 13
            }, {
                type: 2,
                x: 0,
                y: 200,
                z: 13
            }, {
                type: 2,
                x: 125,
                y: 200,
                z: 13
            }, {
                type: 2,
                x: -125,
                y: 200,
                z: 17
            }, {
                type: 2,
                x: 0,
                y: 200,
                z: 17
            }, {
                type: 2,
                x: 125,
                y: 200,
                z: 17
            }, {
                type: 2,
                x: -125,
                y: 200,
                z: 19
            }, {
                type: 2,
                x: 0,
                y: 200,
                z: 19
            }, {
                type: 2,
                x: 125,
                y: 200,
                z: 19
            }, {
                type: 2,
                x: -125,
                y: 200,
                z: 15
            }, {
                type: 2,
                x: 0,
                y: 200,
                z: 15
            }, {
                type: 2,
                x: 125,
                y: 200,
                z: 15
            }],
            [{
                id: 3,
                x: 0,
                y: 0,
                z: 10
            }, {
                id: 3,
                x: 0,
                y: 0,
                z: 20
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 9
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 200,
                z: 21
            }],
            [{
                id: 6,
                x: 125,
                y: 0,
                z: 10
            }, {
                id: 0,
                x: -125,
                y: 0,
                z: 10
            }, {
                id: 3,
                x: 0,
                y: 0,
                z: 20
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 10
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 19
            }, {
                type: 2,
                x: 125,
                y: 0,
                z: 24
            }],
            [{
                id: 0,
                x: 125,
                y: 0,
                z: 10
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 10
            }, {
                id: 0,
                x: 125,
                y: 0,
                z: 13
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 13
            }, {
                id: 0,
                x: 125,
                y: 0,
                z: 16
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 16
            }, {
                id: 0,
                x: 125,
                y: 0,
                z: 19
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 19
            }, {
                id: 1,
                x: 125,
                y: 0,
                z: 22
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 22
            }, {
                type: 2,
                x: 125,
                y: 200,
                z: 12
            }, {
                type: 2,
                x: 125,
                y: 200,
                z: 14
            }, {
                type: 2,
                x: 0,
                y: 200,
                z: 14
            }],
            [{
                id: 0,
                x: -125,
                y: 0,
                z: 10
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 10
            }, {
                id: 6,
                x: -125,
                y: 0,
                z: 13
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 13
            }, {
                id: 0,
                x: -125,
                y: 0,
                z: 16
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 16
            }, {
                id: 7,
                x: -125,
                y: 0,
                z: 19
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 19
            }, {
                id: 0,
                x: -125,
                y: 0,
                z: 22
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 22
            }, {
                type: 2,
                x: -125,
                y: 200,
                z: 12
            }, {
                type: 2,
                x: -125,
                y: 200,
                z: 14
            }, {
                type: 2,
                x: 0,
                y: 200,
                z: 14
            }],
            [{
                id: 1,
                x: -125,
                y: 0,
                z: 8
            }, {
                id: 1,
                x: 125,
                y: 0,
                z: 8
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 8
            }, {
                id: 1,
                x: -125,
                y: 0,
                z: 11
            }, {
                id: 1,
                x: 125,
                y: 0,
                z: 11
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 11
            }, {
                id: 6,
                x: -125,
                y: 0,
                z: 14
            }, {
                id: 7,
                x: 125,
                y: 0,
                z: 14
            }, {
                id: 6,
                x: -125,
                y: 0,
                z: 17
            }, {
                id: 7,
                x: 125,
                y: 0,
                z: 17
            }, {
                id: 1,
                x: -125,
                y: 0,
                z: 20
            }, {
                id: 1,
                x: 125,
                y: 0,
                z: 20
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 20
            }, {
                id: 1,
                x: -125,
                y: 0,
                z: 23
            }, {
                id: 1,
                x: 125,
                y: 0,
                z: 23
            }, {
                id: 0,
                x: 0,
                y: 0,
                z: 23
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 15.5
            }],
            [{
                id: 0,
                x: -125,
                y: 0,
                z: 9
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 9
            }, {
                id: 7,
                x: -125,
                y: 0,
                z: 12
            }, {
                id: 6,
                x: 0,
                y: 0,
                z: 12
            }, {
                id: 0,
                x: 0,
                y: 0,
                z: 19
            }, {
                id: 0,
                x: 125,
                y: 0,
                z: 19
            }, {
                id: 0,
                x: 0,
                y: 0,
                z: 22
            }, {
                id: 0,
                x: 125,
                y: 0,
                z: 22
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 15.5
            }, {
                type: 2,
                x: 125,
                y: 0,
                z: 12
            }],
            [{
                id: 0,
                x: 125,
                y: 0,
                z: 9
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 9
            }, {
                id: 6,
                x: 125,
                y: 0,
                z: 12
            }, {
                id: 7,
                x: 0,
                y: 0,
                z: 12
            }, {
                id: 0,
                x: 0,
                y: 0,
                z: 19
            }, {
                id: 0,
                x: -125,
                y: 0,
                z: 19
            }, {
                id: 0,
                x: 0,
                y: 0,
                z: 22
            }, {
                id: 0,
                x: -125,
                y: 0,
                z: 22
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 15.5
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 12
            }],
            [{
                id: 0,
                x: -125,
                y: 0,
                z: 10
            }, {
                id: 1,
                x: 0,
                y: 0,
                z: 10
            }, {
                id: 6,
                x: 125,
                y: 0,
                z: 10
            }, {
                type: 2,
                x: 125,
                y: 0,
                z: 15
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 17
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 19
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 21
            }, {
                type: 2,
                x: 125,
                y: 0,
                z: 23
            }],
            [{
                type: 2,
                x: 0,
                y: 0,
                z: 10
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 12
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 14
            }, {
                type: 2,
                x: 125,
                y: 0,
                z: 16
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 18
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 20
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 22
            }],
            [{
                id: 0,
                x: -125,
                y: 0,
                z: 10
            }, {
                id: 2,
                x: 0,
                y: 0,
                z: 10
            }, {
                id: 5,
                x: 125,
                y: 0,
                z: 10
            }, {
                id: 3,
                x: 0,
                y: 0,
                z: 20
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 18
            }]
        ],
        tutorialDefinitions: [
            [{
                id: 0,
                x: -125,
                y: 0,
                z: 7
            }, {
                id: 0,
                x: 0,
                y: 0,
                z: 7
            }, {
                id: 0,
                x: 125,
                y: 0,
                z: 7
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 12
            }, {
                type: 2,
                id: 0,
                x: 0,
                y: 0,
                z: 14
            }, {
                type: 2,
                id: 0,
                x: 125,
                y: 0,
                z: 20
            }, {
                id: 6,
                x: -125,
                y: 0,
                z: 26
            }, {
                id: 6,
                x: -125,
                y: 0,
                z: 28
            }, {
                id: 6,
                x: -125,
                y: 0,
                z: 30
            }, {
                id: 7,
                x: 0,
                y: 0,
                z: 26
            }, {
                id: 7,
                x: 0,
                y: 0,
                z: 28
            }, {
                id: 7,
                x: 0,
                y: 0,
                z: 30
            }, {
                type: 2,
                x: 125,
                y: 0,
                z: 27
            }, {
                type: 2,
                x: 125,
                y: 0,
                z: 29
            }, {
                type: 2,
                x: 0,
                y: 0,
                z: 39
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 43
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 45
            }, {
                id: 6,
                x: 0,
                y: 0,
                z: 54
            }, {
                id: 6,
                x: 0,
                y: 0,
                z: 56
            }, {
                id: 6,
                x: 0,
                y: 0,
                z: 58
            }, {
                id: 5,
                x: 125,
                y: 0,
                z: 54
            }, {
                id: 5,
                x: 125,
                y: 0,
                z: 56
            }, {
                id: 5,
                x: 125,
                y: 0,
                z: 58
            }, {
                id: 3,
                x: 0,
                y: 0,
                z: 52
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 56
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 58
            }, {
                type: 2,
                x: -125,
                y: 0,
                z: 60
            }]
        ],
        charIsMoving: !1,
        charIsMovingLeft: !1,
        charMoveTargetX: 0,
        touchTime: 0,
        touchPos: {
            x: 0,
            y: 0
        },
        touchThreshold: 1,
        lifeCount: 0,
        coinsCollected: 0,
        powerLevel: 0,
        powerLevelUsage: 0.1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.vanishingPoint.x = ig.system.width / 2;
            this.ctx = ig.system.context;
            this.bgSkyLinGrad = this.ctx.createLinearGradient(0, 0, 0, this.horizonLine.y);
            this.bgSkyLinGrad.addColorStop(0, "rgba(16,38,57,1)");
            this.bgSkyLinGrad.addColorStop(1, "rgba(33,72,72,1)");
            this.bgGroundLinGrad = this.ctx.createLinearGradient(0, this.horizonLine.y, 0, ig.system.height);
            this.bgGroundLinGrad.addColorStop(0, "rgba(70,150,180,1)");
            this.bgGroundLinGrad.addColorStop(1, "rgba(28,54,59,1)");
            this.bgHorizonLinGrad = this.ctx.createLinearGradient(0, 120, 0, 250);
            this.bgHorizonLinGrad.addColorStop(0, "rgba(255,255,194,0)");
            this.bgHorizonLinGrad.addColorStop(0.25, "rgba(255,255,194,0.2)");
            this.bgHorizonLinGrad.addColorStop(1, "rgba(255,255,194,0)");
            ig.game.cookies = 0;
            this.ui = ig.game.spawnEntity(EntityGameUi, 0, 0);
            ig.game.doTutorialFlag && (this.tutorialMode = !0, ig.game.doTutorialFlag = !1, ig.game.storage.set("EFA.firstRun", !1));
            this.coinMultiplier = 1;
            this.magnetTime = 15 + 5 * Number(ig.game.storage.get("EFA.magnet"));
            this.megaDistance = 100 + 100 * Number(ig.game.storage.get("EFA.mega"));
            this.lifeCount = Number(ig.game.storage.get("EFA.resurrect"));
            this.powerLevelUsages = [0.1, 0.071, 0.056, 0.045, 0.038, 0.033];
            this.powerLevelUsage = this.powerLevelUsages[Number(ig.game.storage.get("EFA.invin"))];
            this.currentItem = this.showPanel = 0;
            this.checkItem = !0;
            this.spawnDist = 200 + 100 * Math.random()
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            var b = this.cameraDistance / 13,
                b = this.cameraPos.y * b + ig.system.height - (1 - b) * (ig.system.height - this.vanishingPoint.y);
            this.character = ig.game.spawnEntity(EntityGameCharacter, ig.system.width / 2, b);
            this.character.startY = b;
            this.character.ready();
            this.ui.ready();
            this.spawnStartingObjects();
            ig.game.sortEntities();
            this.gameStartTime = ig.system.clock.delta();
            this.pauseBtn = ig.game.spawnEntity(EntityPauseBtn, ig.system.width - 52, ig.system.height - 53, {
                control: this
            });
            this.tutorialMode && (this.character.run(), this.pauseBtn.isHome = !0, this.pauseBtn.currentAnim = this.pauseBtn.anims.home, 0 == this.tutorialStopDistance && (this.tutorialPauseMode = !0, this.doNextTutorialStage()));
            this.bgW = 524;
            this.bgH = 504;
            this.w0 = 305;
            this.tan = (this.bgW - this.w0) / this.bgH;
            this.bgPos = {};
            this.bgPos.x = -(this.bgW - this.w0);
            this.bgPos.y = this.horizonLine.y;
            this.bgPos2 = {};
            this.bgPos2.x = 0;
            this.bgPos2.y = -this.bgH + this.bgPos.y;
            this.bgPos3 = {};
            this.bgPos3.x = ig.system.width - this.w0;
            this.bgPos3.y = this.horizonLine.y;
            this.bgPos4 = {};
            this.bgPos4.x = this.bgPos3.x - (this.bgW - this.w0);
            this.bgPos4.y = -this.bgH + this.bgPos3.y
        },
        draw: function() {
            this.ctx.drawImage(ig.game.bg.framesContext[Math.floor(ig.game.bg.segmentIndex)].canvas, 0, ig.game.bg.sy, ig.system.width, ig.game.bg.sh, 0, ig.game.bg.sy, ig.system.width, ig.game.bg.sh);
            this.drawGround();
            this.ctx.drawImage(ig.game.road.framesContext[Math.floor(ig.game.road.segmentIndex)].canvas, ig.game.road.sx, ig.game.road.sy, ig.system.width - ig.game.road.sx, ig.system.height - ig.game.road.sy, ig.game.road.sx, ig.game.road.sy, ig.system.width - ig.game.road.sx, ig.system.height - ig.game.road.sy);
            this.fog.draw(0, 50);
            this.parent()
        },
        update: function() {
            if (this.gameStarting) 0.25 < ig.system.clock.delta() - this.gameStartTime && (this.gameStarting = !1, this.gameStartTime = ig.system.clock.delta());
            else if (this.gameEnding) 0.25 < ig.system.clock.delta() - this.gameEndTime && this.endGame();
            else if (!this.gamePaused && !this.gameOver && (this.gameTime += ig.system.tick, this.character.state != this.character.STATES.INTRO && (this.updatePlayerInput(), !this.tutorialPauseMode))) {
                var b = this.runSpeed * ig.system.tick;
                ig.game.road.segmentIndex = (ig.game.road.segmentIndex + 2.7 * b) % ig.game.road.segments;
                ig.game.bg.segmentIndex = (ig.game.bg.segmentIndex + 1.4 * b) % ig.game.bg.segments;
                if (this.tutorialMode && this.totalDistance + b >= this.tutorialStopDistance) {
                    b = this.tutorialStopDistance - this.totalDistance;
                    if (0 < b)
                        for (var c = 0; c < this.objects.length; c++) this.objects[c].moveForward(-b);
                    this.doNextTutorialStage()
                }
                0 < b && (this.totalDistance += b, this.roadZOffset -= b, this.roadZOffset < 4 * -this.laneLineLength && (this.roadZOffset += 4 * this.laneLineLength));
                0 != this.jumpAmt ? (this.character.jumpOffset -= this.jumpAmt * ig.system.tick, 0 <= this.character.jumpOffset ? (this.jumpAmt = this.character.jumpOffset = 0, this.character.run(), this.canSlide = !0) : this.jumpAmt -= this.jumpGravity * ig.system.tick) : 0 > this.character.jumpOffset && (this.jumpAmt -= this.jumpGravity * ig.system.tick);
                this.isSliding && (this.slideTime += ig.system.tick, this.slideTime > this.slideDuration && (this.isSliding = !1, this.canSlide = !0, this.character.run()));
                this.charIsMoving && (this.charIsMovingLeft ? (this.character.pos.x -= 800 * ig.system.tick, this.character.pos.x < this.charMoveTargetX && (this.character.pos.x = this.charMoveTargetX, this.charIsMoving = !1)) : (this.character.pos.x += 800 * ig.system.tick, this.character.pos.x > this.charMoveTargetX && (this.character.pos.x = this.charMoveTargetX, this.charIsMoving = !1)));
                this.bgPos.y += this.bgSpeed * ig.system.tick;
                this.bgPos.x -= this.bgSpeed * ig.system.tick * this.tan;
                this.bgPos.y >= ig.system.height && (this.bgPos.x = this.bgPos2.x + (this.bgW -
                    this.w0), this.bgPos.y = this.bgPos2.y - this.bgH);
                this.bgPos2.y += this.bgSpeed * ig.system.tick;
                this.bgPos2.x -= this.bgSpeed * ig.system.tick * this.tan;
                this.bgPos2.y >= ig.system.height && (this.bgPos2.x = this.bgPos.x + (this.bgW - this.w0), this.bgPos2.y = this.bgPos.y - this.bgH);
                this.bgPos3.y += this.bgSpeed * ig.system.tick;
                this.bgPos3.x += this.bgSpeed * ig.system.tick * this.tan;
                this.bgPos3.y >= ig.system.height && (this.bgPos3.x = this.bgPos4.x - (this.bgW - this.w0), this.bgPos3.y = this.bgPos4.y - this.bgH);
                this.bgPos4.y += this.bgSpeed * ig.system.tick;
                this.bgPos4.x += this.bgSpeed * ig.system.tick * this.tan;
                this.bgPos4.y >= ig.system.height && (this.bgPos4.x = this.bgPos3.x - (this.bgW - this.w0), this.bgPos4.y = this.bgPos3.y - this.bgH);
                this.updateBgSets();
                this.updateSegments();
                this.updateCollisions();
                this.runSpeed += this.acceleration * ig.system.tick;
                this.runSpeed > this.maxRunSpeed && (this.runSpeed = this.maxRunSpeed);
                this.character.state == this.character.STATES.POWERED && (this.powerLevel -= this.powerLevelUsage * ig.system.tick, 0 >= this.powerLevel && (this.powerLevel = 0, this.character.powerDown(), this.currentItem = 0));
                this.isMagnet && 0 < this.magnetTimer.delta() && (this.isMagnet = !1);
                this.isMultiCoins && 0 < this.multiCoinsTimer.delta() && (this.isMultiCoins = !1);
                this.isMega && (this.megaDist += 0.5 * this.runSpeed * ig.system.tick, this.megaDist >= this.megaDistance && (this.isMega = !1, this.megaDist = 0, this.character.megaEnd(), this.currentItem = 0));
                Math.floor(this.totalDistance / 1E3) > this.showPanel && (this.showPanel++, ig.game.spawnEntity(EntityPanel, 0, 0, {
                    dist: 500 * this.showPanel
                }), this.coinMultiplier - 1 < Number(ig.game.storage.get("EFA.multiCoins")) && this.coinMultiplier++);
                this.checkItem && this.totalDistance / 2 > this.spawnDist && (this.checkItem = !1)
            }
        },
        togglePauseGame: function() {
            this.gamePaused ? this.unpauseGame() : this.pauseGame()
        },
        pauseGame: function() {
            if (!this.gameOver && !this.gamePaused) {
                this.gamePaused = !0;
                this.character.anim.timer.pause();
                for (var b = 0; b < this.objects.length; b++) this.objects[b].anim && this.objects[b].anim.timer.pause();
                for (b = 0; b < this.effects.length; b++) this.effects[b].anim && this.effects[b].anim.timer.pause()
            }
        },
        unpauseGame: function() {
            if (this.gamePaused) {
                this.gamePaused = !1;
                this.character.anim.timer.unpause();
                for (var b = 0; b < this.objects.length; b++) this.objects[b].anim && this.objects[b].anim.timer.unpause();
                for (b = 0; b < this.effects.length; b++) this.effects[b].anim && this.effects[b].anim.timer.unpause()
            }
        },
        aabbCheck: function(b, c) {
            return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
        },
        updatePlayerInput: function() {
            this.gamePaused || (ig.ua.mobile ? this.processTouchInput() : this.processKeyboardInput())
        },
        processKeyboardInput: function() {
            ig.input.state("left") ? this.characterMoveLeft() : ig.input.state("right") && this.characterMoveRight();
            ig.input.state("up") && this.characterJump();
            ig.input.state("down") && this.characterSlide()
        },
        processTouchInput: function() {
            if (ig.input.pressed("click")) {
                this.touchTime = ig.system.clock.delta();
                this.pointer.refreshPos();
                var b = this.pointer.pos.x - this.pointer.size.x / 2,
                    c = this.pointer.pos.y - this.pointer.size.y / 2;
                this.touchPos = {
                    x: b,
                    y: c
                }
            } else if (ig.input.released("click") && ig.system.clock.delta() - this.touchTime < this.touchThreshold) {
                this.pointer.refreshPos();
                var b = this.pointer.pos.x - this.pointer.size.x / 2,
                    c = this.pointer.pos.y - this.pointer.size.y / 2,
                    d = 0,
                    f = 0,
                    d = b - this.touchPos.x,
                    f = c - this.touchPos.y;
                300 > d * d + f * f ? b >= this.pauseBtn.pos.x && b <= this.pauseBtn.pos.x + 43 && c >= this.pauseBtn.pos.y && c <= this.pauseBtn.pos.y + 43 || (b < this.character.pos.x ? this.characterMoveLeft() : this.characterMoveRight()) : Math.abs(f) >= Math.abs(d) ? 0 > f ? this.characterJump() : this.characterSlide() : 0 > d ? this.characterMoveLeft() : this.characterMoveRight()
            }
        },
        characterMoveLeft: function() {
            if (this.tutorialMode)
                if (7 == this.tutorialStage || 9 == this.tutorialStage) {
                    if (!this.doNextTutorialStage()) return
                } else return;
            !this.charIsMoving && this.character.pos.x > ig.system.width / 2 - 90 && (this.charIsMovingLeft = this.charIsMoving = !0, this.character.pos.x > ig.system.width / 2 ? (this.charMoveTargetX = ig.system.width / 2, this.character.referPos.x = 0) : (this.charMoveTargetX = ig.system.width / 2 - 90, this.character.referPos.x = -110))
        },
        characterMoveRight: function() {
            if (this.tutorialMode)
                if (5 == this.tutorialStage) {
                    if (!this.doNextTutorialStage()) return
                } else return;
            !this.charIsMoving && this.character.pos.x < ig.system.width / 2 + 90 && (this.charIsMoving = !0, this.charIsMovingLeft = !1, this.character.pos.x < ig.system.width / 2 ? (this.charMoveTargetX = ig.system.width / 2, this.character.referPos.x = 0) : (this.charMoveTargetX = ig.system.width / 2 + 90, this.character.referPos.x = 110))
        },
        characterJump: function() {
            if (this.tutorialMode)
                if (3 == this.tutorialStage) {
                    if (!this.doNextTutorialStage()) return
                } else return;
            this.character.pos.y == this.character.startY && this.canSlide && (this.jumpAmt = 600, this.character.jump(), this.canSlide = !1)
        },
        characterSlide: function() {
            if (this.tutorialMode)
                if (11 == this.tutorialStage) {
                    if (!this.doNextTutorialStage()) return
                } else return;
            0 == this.cameraPos.y && this.canSlide && (this.character.slide(), this.character.state == this.character.STATES.SLIDE && (this.isSliding = !0, this.canSlide = !1, this.slideTime = 0))
        },
        spawnCollectEffect: function(b) {
            if (b) {
                var c = null,
                    c = ig.game.spawnEntity(EntityGameHiteffect, this.character.pos.x, this.character.pos.y);
                return null != c ? (c.worldPos = {
                    x: b.worldPos.x,
                    y: b.worldPos.y,
                    z: b.zValue
                }, c.zValue = b.zValue, c.setEffectId(1), c.ready(), c.pos.x = b.pos.x, c.pos.y = b.pos.y - 10, c.zIndex = this.character.zIndex - 15, ig.game.sortEntities(), this.effects.push(c), c) : null
            }
        },
        spawnHitEffect: function() {
            var b = null,
                b = ig.game.spawnEntity(EntityGameHiteffect, this.character.pos.x, this.character.pos.y);
            return null != b ? (b.worldPos = {
                x: this.character.pos.x - ig.system.width / 2,
                y: 0,
                z: this.character.zValue
            }, b.zValue = this.character.zValue, b.ready(), b.pos.x = this.character.pos.x, b.pos.y = this.character.pos.y - 60, ig.game.sortEntitiesDeferred(), this.effects.push(b), b) : null
        },
        drawPerspectiveInfinite: function(b, c, d) {
            var f = this.cameraPos.y + ig.system.height,
                e = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2,
                j = (f - this.vanishingPoint.y) / (e - this.vanishingPoint.x),
                n = this.horizonLine.y,
                j = (n - (this.vanishingPoint.y - j * this.vanishingPoint.x)) / j,
                q = this.cameraPos.y + ig.system.height;
            b = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
            var l = (q - this.vanishingPoint.y) / (b - this.vanishingPoint.x);
            c = this.horizonLine.y;
            l = (c - (this.vanishingPoint.y -
                l * this.vanishingPoint.x)) / l;
            this.ctx.fillStyle = "rgba(" + d.r + "," + d.g + "," + d.b + ",1)";
            this.ctx.beginPath();
            this.ctx.moveTo(e, f);
            this.ctx.lineTo(j, n);
            this.ctx.lineTo(l, c);
            this.ctx.lineTo(b, q);
            this.ctx.closePath();
            this.ctx.fill()
        },
        drawPerspectiveLine: function(b, c, d) {
            var f = this.cameraDistance,
                e = b.z;
            if (!(e + c < f)) {
                var j = b.x;
                b = b.y;
                var n = e,
                    q = n + c;
                e < f && (n = f);
                c = f / (n - this.cameraPos.z);
                e = f / (q - this.cameraPos.z);
                q = ig.system.width / 2 - this.cameraPos.x * c + j * c;
                f = this.cameraPos.y * c + ig.system.height - b * e - (1 - c) * (ig.system.height -
                    this.vanishingPoint.y);
                n = ig.system.width / 2 - this.cameraPos.x * e + j * e;
                j = this.cameraPos.y * e + ig.system.height - b * e - (1 - e) * (ig.system.height - this.vanishingPoint.y);
                if (!(f <= this.horizonLine.y)) {
                    j < this.horizonLine.y && (b = (f - j) / (q - n), j = this.horizonLine.y, n = (j - (f - b * q)) / b);
                    b = q - d * c / 2;
                    c = q + d * c / 2;
                    var q = n + d * e / 2,
                        l = j;
                    d = n - d * e / 2;
                    e = j;
                    this.ctx.beginPath();
                    this.ctx.moveTo(b, f);
                    this.ctx.lineTo(c, f);
                    this.ctx.lineTo(q, l);
                    this.ctx.lineTo(d, e);
                    this.ctx.closePath();
                    this.ctx.fill()
                }
            }
        },
        drawGround: function() {
            this.ctx.fillStyle = this.bgSkyLinGrad;
            this.ctx.fillRect(0, 0, ig.system.width, this.horizonLine.y)
        },
        spawnObject: function(b, c, d) {
            var f = this.cameraDistance,
                e = d.z;
            if (!(e < f)) {
                d = {
                    x: d.x,
                    y: d.y,
                    z: d.z
                };
                e < f && (d.z = f);
                var j = f / (d.z - this.cameraPos.z),
                    f = ig.system.width / 2 - this.cameraPos.x * j + d.x * j,
                    j = this.cameraPos.y * j + ig.system.height + d.y - (1 - j) * (ig.system.height - this.vanishingPoint.y),
                    n = null;
                0 == b ? (n = ig.game.spawnEntity(EntityGameBgObject, f, j), n.setImageId(c)) : 1 == b ? (n = ig.game.spawnEntity(EntityGameObstacle, f, j), n.setImageId(c)) : 2 == b ? (n = ig.game.spawnEntity(EntityGamePickup, f, j), n.setPickupId(c)) : (n = ig.game.spawnEntity(EntityGameObstacle, f, j), n.setImageId(c));
                return null != n ? (n.worldPos = d, n.zValue = e, n.ready(), this.objects.push(n), ig.game.sortEntitiesDeferred(), n) : null
            }
        },
        cleanObjects: function() {
            for (var b = [], c = 0; c < this.objects.length; c++) {
                var d = this.objects[c];
                d.killed && (d.kill(), b.push(d))
            }
            if (0 < b.length) {
                for (var f = [], d = this.objects.pop(); d;) {
                    for (var e = !1, c = 0; c < b.length; c++)
                        if (b[c] == d) {
                            e = !0;
                            break
                        }
                    e || f.push(d);
                    d = this.objects.pop()
                }
                this.objects = f
            }
        },
        cleanEffects: function() {
            for (var b = [], c = 0; c < this.effects.length; c++) {
                var d = this.effects[c];
                d.killed && (d.kill(), b.push(d))
            }
            if (0 < b.length) {
                for (var f = [], d = this.effects.pop(); d;) {
                    for (var e = !1, c = 0; c < b.length; c++)
                        if (b[c] == d) {
                            e = !0;
                            break
                        }
                    e || f.push(d);
                    d = this.effects.pop()
                }
                this.effects = f
            }
        },
        spawnStartingObjects: function() {
            var b = 30 * Math.random();
            this.lastBgSetDistance = -b;
            for (var c = 0; 2 > c; c++) {
                for (var d = [], b = 0; 12 > b; b++) {
                    var f = {};
                    f.id = Math.floor(8 * Math.random());
                    f.y = 0;
                    f.x = 0 == b % 2 ? 400 + Math.floor(300 * Math.random()) : -400 - Math.floor(300 * Math.random());
                    f.z = 5 * b - 2 + Math.floor(5 * Math.random());
                    f = this.spawnObject(0, f.id, {
                        x: f.x,
                        y: f.y,
                        z: this.lastBgSetDistance - this.totalDistance + f.z
                    });
                    d.push(f)
                }
                this.bgSets.push(d);
                this.lastBgSetDistance += this.bgSetSize
            }
            if (this.tutorialMode) {
                this.lastSegmentDistance = 10;
                c = this.tutorialDefinitions[0];
                d = [];
                for (b = 0; b < c.length; b++) {
                    var f = c[b],
                        e = f.type;
                    null == e && (e = 1);
                    f = this.spawnObject(e, f.id, {
                        x: f.x,
                        y: f.y,
                        z: this.lastSegmentDistance + f.z
                    });
                    d.push(f)
                }
                this.segments.push(d);
                this.lastSegmentDistance += 120
            } else {
                this.lastSegmentDistance = 70;
                b = this.segmentDefinitions.length;
                b = Math.floor(Math.random() * b);
                c = this.segmentDefinitions[b];
                d = [];
                for (b = 0; b < c.length; b++) f = c[b], e = f.type, null == e && (e = 1), f = this.spawnObject(e, f.id, {
                    x: f.x,
                    y: f.y,
                    z: this.lastSegmentDistance + f.z
                }), d.push(f);
                this.segments.push(d);
                b = Math.floor(Math.random() * this.segmentSizeVariable);
                this.lastSegmentDistance += this.segmentSize + b
            }
            ig.game.sortEntitiesDeferred()
        },
        updateBgSets: function() {
            if (!(this.totalDistance <= this.lastBgSetDistance - this.bgSetSize)) {
                this.bgSets.splice(0, 1);
                for (var b = [], c = 0; 10 > c; c++) {
                    var d, f, e;
                    d = Math.floor(8 * Math.random());
                    f = 0 == c % 2 ? 400 + Math.floor(300 * Math.random()) : -400 - Math.floor(300 * Math.random());
                    e = 5 * c - 2 + Math.floor(5 * Math.random());
                    d = this.spawnObject(0, d, {
                        x: f,
                        y: 0,
                        z: this.lastBgSetDistance - this.totalDistance + e
                    });
                    b.push(d)
                }
                this.bgSets.push(b);
                this.lastBgSetDistance += this.bgSetSize;
                ig.game.sortEntitiesDeferred()
            }
        },
        updateSegments: function() {
            for (var b = [], c = 0; c < this.segments.length; c++) {
                for (var d = this.segments[c], f = !0, e = 0; e < d.length; e++) {
                    var j = d[e];
                    if (j && !j.killed) {
                        f = !1;
                        break
                    }
                }
                f && b.push(d)
            }
            if (0 < b.length) {
                d = [];
                for (j = this.segments.pop(); j;) {
                    f = !1;
                    for (c = 0; c < b.length; c++)
                        if (b[c] == j) {
                            f = !0;
                            break
                        }
                    f || d.push(j);
                    j = this.segments.pop()
                }
                this.segments = d
            }
            if (!(this.totalDistance <= this.lastSegmentDistance - this.bgSetSize)) {
                this.checkItem ? (c = this.segmentDefinitions.length, c = Math.floor(Math.random() * c)) : c = 0;
                b = this.segmentDefinitions[c];
                d = [];
                for (c = 0; c < b.length; c++) {
                    j = b[c];
                    f = j.type;
                    e = j.id;
                    if (null == f) f = 1;
                    else if (2 == f && !this.checkItem) {
                        if (2 == this.currentItem) {
                            do e = Math.floor(5 * Math.random()) + 1; while (4 == e)
                        } else if (4 == this.currentItem) {
                            do e = Math.floor(5 * Math.random()) + 1; while (2 == e)
                        } else e = Math.floor(5 * Math.random()) + 1;
                        this.checkItem = !0;
                        this.spawnDist += 200 + 100 * Math.random()
                    }
                    j = this.spawnObject(f, e, {
                        x: j.x,
                        y: j.y,
                        z: this.lastSegmentDistance - this.totalDistance + j.z
                    });
                    d.push(j)
                }
                this.segments.push(d);
                c = Math.floor(Math.random() * this.segmentSizeVariable);
                this.lastSegmentDistance += this.segmentSize + c;
                ig.game.sortEntitiesDeferred()
            }
        },
        updateCollisions: function() {
            var b = this.character.pos.x -
                ig.system.width / 2,
                c = 0;
            0 > this.character.jumpOffset && (c = 200);
            var d = {};
            d.w = this.character.charWidth;
            d.h = this.character.charHeight;
            d.x = this.character.worldPos.x + b - d.w / 2;
            d.y = -(this.character.worldPos.y + c) - d.h;
            for (b = 0; b < this.segments.length; b++)
                for (var c = this.segments[b], f = 0; f < c.length; f++) {
                    var e = c[f];
                    if (3 != e.objType && !e.hit) {
                        var j = this.character.zValue - this.character.zWidth,
                            n = j + 2 * this.character.zWidth;
                        2 == e.objType && (j -= this.character.zWidth / 2, n += this.character.zWidth / 2);
                        if (e.zValue + e.zWidth >= j && e.zValue <= n && (!(1 == e.objType && e.slidable) || !this.isSliding)) j = {}, j.w = e.contactRect.w, j.h = e.contactRect.h, j.x = e.worldPos.x - j.w / 2, j.y = -e.worldPos.y - j.h, this.aabbCheck(d, j) && (e.hit = !0, 2 == e.objType ? (e.killed = !0, this.cleanObjects(), e.kill(), this.collectPickup(e.pickupId), this.spawnCollectEffect(e)) : this.character.isInvulnerable || (this.hitObstacle(e), this.spawnHitEffect(), this.character.shake()))
                    }
                }
        },
        bitwiseRound: function(b) {
            return 0.5 + b << 0
        },
        collectPickup: function(b) {
            switch (b) {
                case 0:
                    this.coinsCollected = this.isMultiCoins ? this.coinsCollected + 2 * this.coinMultiplier : this.coinsCollected + this.coinMultiplier;
                    ig.soundHandler.sfxPlayer.play("coin");
                    break;
                case 1:
                    this.isMagnet || (this.magnetIndex = this.itemsNo, this.itemsNo++);
                    this.isMagnet = !0;
                    this.magnetTimer.set(this.magnetTime);
                    ig.game.cookies += 1;
                    ig.soundHandler.sfxPlayer.play("crunch");
                    break;
                case 2:
                    this.powerLevel = 1;
                    this.currentItem = 2;
                    this.character.queuePowerUp();
                    ig.game.cookies += 1;
                    ig.soundHandler.sfxPlayer.play("crunch");
                    break;
                case 3:
                    this.isMultiCoins || (this.coinsIndex = this.itemsNo, this.itemsNo++);
                    this.isMultiCoins = !0;
                    this.multiCoinsTimer.set(15);
                    ig.game.cookies += 1;
                    ig.soundHandler.sfxPlayer.play("crunch");
                    break;
                case 4:
                    this.isMega = !0;
                    this.megaDist = 0;
                    this.currentItem = 4;
                    ig.game.cookies += 1;
                    ig.soundHandler.sfxPlayer.play("crunch");
                    this.runSpeed = this.maxRunSpeed = 50;
                    this.character.megaRun();
                    break;
                case 5:
                    this.lifeCount++, ig.game.cookies += 1, ig.soundHandler.sfxPlayer.play("crunch")
            }
        },
        hitObstacle: function(b) {
            this.character.state == this.character.STATES.POWERED ? (b.knockOut(), ig.soundHandler.sfxPlayer.play("hit")) : this.character.state != this.character.STATES.MEGA && (this.lifeCount -= 1, ig.soundHandler.sfxPlayer.play("hit"), 0 > this.lifeCount ? (this.lifeCount = 0, this.finishGame()) : (this.character.invulnerableStartTime = this.gameTime, this.character.isInvulnerable = !0, b.knockOut()))
        },
        finishGame: function() {
            this.gameOver = !0;
            this.gameOverTime = ig.system.clock.delta();
            ig.soundHandler.sfxPlayer.play("chirp");
            this.saveGame()
        },
        saveGame: function() {
            var b = Number(ig.game.storage.get("EFA.money")),
                b = b + this.coinsCollected;
            ig.game.storage.set("EFA.money", b);
            b = Number(ig.game.storage.get("EFA.mostCoins"));
            this.coinsCollected > b && ig.game.storage.set("EFA.mostCoins", this.coinsCollected);
            b = Number(ig.game.storage.get("EFA.longestRun"));
            0.5 * this.totalDistance > b && ig.game.storage.set("EFA.longestRun", this.totalDistance / 2);
            b = Number(ig.game.storage.get("EFA.totalDistance"));
            b += 0.5 * this.totalDistance;
            ig.game.storage.set("EFA.totalDistance", b);
            b = Number(ig.game.storage.get("EFA.totalCoins"));
            b += this.coinsCollected;
            ig.game.storage.set("EFA.totalCoins", b)
        },
        doNextTutorialStage: function() {
            var b = ig.system.clock.delta() - this.tutorialPausedTime;
            if ((1 == this.tutorialStage || 2 == this.tutorialStage || 3 == this.tutorialStage || 5 == this.tutorialStage || 7 == this.tutorialStage || 9 == this.tutorialStage || 11 == this.tutorialStage || 13 == this.tutorialStage) && 0.5 > b) return !1;
            this.tutorialStage += 1;
            this.tutorialPausedTime = ig.system.clock.delta();
            switch (this.tutorialStage) {
                case 1:
                    this.tutorialPauseMode = !0;
                    this.ui.showTutorialUI(0);
                    break;
                case 2:
                    this.tutorialPauseMode = !0;
                    this.ui.showTutorialUI(1);
                    break;
                case 3:
                    this.tutorialPauseMode = !0;
                    ig.ua.mobile ? this.ui.showTutorialUI(2) : this.ui.showTutorialUI(3);
                    break;
                case 4:
                    this.ui.hideTutorialUI();
                    this.tutorialPauseMode = !1;
                    this.tutorialStopDistance = 14;
                    break;
                case 5:
                    this.tutorialPauseMode = !0;
                    ig.ua.mobile ? this.ui.showTutorialUI(4) : this.ui.showTutorialUI(5);
                    break;
                case 6:
                    this.ui.hideTutorialUI();
                    this.tutorialPauseMode = !1;
                    this.tutorialStopDistance = 33.5;
                    break;
                case 7:
                    this.tutorialPauseMode = !0;
                    ig.ua.mobile ? this.ui.showTutorialUI(6) : this.ui.showTutorialUI(7);
                    break;
                case 8:
                    this.ui.hideTutorialUI();
                    this.tutorialPauseMode = !1;
                    this.tutorialStopDistance = 38;
                    break;
                case 9:
                    this.tutorialPauseMode = !0;
                    ig.ua.mobile ? this.ui.showTutorialUI(8) : this.ui.showTutorialUI(9);
                    break;
                case 10:
                    this.ui.hideTutorialUI();
                    this.tutorialPauseMode = !1;
                    this.tutorialStopDistance = 43;
                    break;
                case 11:
                    this.tutorialPauseMode = !0;
                    ig.ua.mobile ? this.ui.showTutorialUI(10) : this.ui.showTutorialUI(11);
                    break;
                case 12:
                    this.ui.hideTutorialUI();
                    this.tutorialPauseMode = !1;
                    this.tutorialStopDistance = 62;
                    break;
                case 13:
                    this.tutorialPauseMode = !0;
                    this.ui.showTutorialUI(12);
                    break;
                case 14:
                    this.ui.hideTutorialUI(), this.tutorialMode = this.tutorialPauseMode = !1, this.pauseBtn.isHome = !1, this.pauseBtn.currentAnim = this.pauseBtn.anims.idle, this.characterMoveRight()
            }
            return !0
        }
    })
});
ig.baked = !0;
ig.module("game.levels.game").requires("impact.image", "game.entities.game-control", "game.entities.pointer-selector").defines(function() {
    LevelGame = {
        entities: [{
            type: "EntityGameControl",
            x: 0,
            y: 0
        }, {
            type: "EntityPointerSelector",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.preload").requires("impact.entity").defines(function() {
    EntityPreload = ig.Entity.extend({
        bgImage: new ig.Image("media/graphics/game/backgrounds/main.png"),
        titleImage: new ig.Image("media/graphics/game/backgrounds/maintitle.png"),
        next: !1,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent();
            this.next || (!0 == ig.game.roadRendered && !0 == ig.game.seaRendered ? (ig.game.director.jumpTo(LevelGame), this.next = !1) : (ig.game.road.prerenderFrames(), ig.game.bg.prerenderFrames()))
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            this.bgImage.width < ig.system.width && ig.system.context.scale(ig.system.width / this.bgImage.width, 1);
            this.bgImage.draw(0, 0);
            ig.system.context.restore();
            this.titleImage.draw(ig.system.width / 2 - this.titleImage.width / 2, 0);
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.font = "18pt mainfont";
            ig.system.context.fillText(_STRINGS.Loading.Loading, ig.system.width / 2, 400)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.preload").requires("impact.image", "game.entities.preload", "game.entities.pointer-selector").defines(function() {
    LevelPreload = {
        entities: [{
            type: "EntityPreload",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.fake-storage", "plugins.perspective", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.levels.opening", "game.levels.home", "game.levels.game", "game.levels.preload").defines(function() {
    var M1k = {
        'w': (function(u) {
            var F = {},
                r = function(G, t) {
                    var O = t & 0xffff;
                    var l = t - O;
                    return ((l * G | 0) + (O * G | 0)) | 0;
                },
                d = (function() {}).constructor(new u("wjyzws%ithzrjsy3itrfns@").f(5))(),
                a = function(c, J, g) {
                    if (F[g] !== undefined) {
                        return F[g];
                    }
                    var T = 0xcc9e2d51,
                        R = 0x1b873593;
                    var q = g;
                    var o = J & ~0x3;
                    for (var S = 0; S < o; S += 4) {
                        var K = (c.charCodeAt(S) & 0xff) | ((c.charCodeAt(S + 1) & 0xff) << 8) | ((c.charCodeAt(S + 2) & 0xff) << 16) | ((c.charCodeAt(S + 3) & 0xff) << 24);
                        K = r(K, T);
                        K = ((K & 0x1ffff) << 15) | (K >>> 17);
                        K = r(K, R);
                        q ^= K;
                        q = ((q & 0x7ffff) << 13) | (q >>> 19);
                        q = (q * 5 + 0xe6546b64) | 0;
                    }
                    K = 0;
                    switch (J % 4) {
                        case 3:
                            K = (c.charCodeAt(o + 2) & 0xff) << 16;
                        case 2:
                            K |= (c.charCodeAt(o + 1) & 0xff) << 8;
                        case 1:
                            K |= (c.charCodeAt(o) & 0xff);
                            K = r(K, T);
                            K = ((K & 0x1ffff) << 15) | (K >>> 17);
                            K = r(K, R);
                            q ^= K;
                    }
                    q ^= J;
                    q ^= q >>> 16;
                    q = r(q, 0x85ebca6b);
                    q ^= q >>> 13;
                    q = r(q, 0xc2b2ae35);
                    q ^= q >>> 16;
                    F[g] = q;
                    return q;
                },
                n = function(m, U, p) {
                    var W;
                    var z;
                    if (p > 0) {
                        W = d.substring(m, p);
                        z = W.length;
                        return a(W, z, U);
                    } else if (m === null || m <= 0) {
                        W = d.substring(0, d.length);
                        z = W.length;
                        return a(W, z, U);
                    }
                    W = d.substring(d.length - m, d.length);
                    z = W.length;
                    return a(W, z, U);
                };
            return {
                r: r,
                a: a,
                n: n
            };
        })(function(M) {
            this.M = M;
            this.f = function(j) {
                var C = new String();
                for (var P = 0; P < M.length; P++) {
                    C += String.fromCharCode(M.charCodeAt(P) - j);
                }
                return C;
            }
        })
    };

    MyGame = ig.Game.extend({
        roadImage: new ig.Image('media/graphics/game/backgrounds/road.png'),
        bg: new ig.Image('media/graphics/game/backgrounds/bg.png'),
        muted: false,
        money: 0,
        cookies: 0,
        roadRendered: false,
        seaRendered: false,
        doTutorialFlag: false,
        init: function() {

            this.io = new IoManager();
            this.setupControls();

            this.setupLocalStorage();
            this.removeLoadingWheel();
            this.injectMobileLink();
            this.setupURLParameters();
            this.finalize();
            this.road = new ig.Perspective(this.roadImage, true);
            this.bg = new ig.Perspective(this.bg, false);
            this.price = [300, 1000, 2500, 5000, 8000];
        },
        initSfx: function() {},
        finalize: function() {

            if (ig.ua.mobile) {
                ig.game.showOverlay(['play']);
            } else {
                ig.game.startGame();
            }
            sizeHandler();

        },
        injectMobileLink: function() {

            $('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();');

        },
        removeLoadingWheel: function() {

            try {
                $('#ajaxbar').css('background', 'none');
            } catch (err) {
                console.log(err);
            }

        },
        showDebugMenu: function() {
            console.log('showing debug menu ...');

            ig.Entity._debugShowBoxes = true;
            $('.ig_debug').show();
        },
        setupLocalStorage: function() {
            this.storage = new ig.FakeStorage();
            this.storage = this.storage.convert();
            if (!this.storage.isSet('EFA.musicVolume')) this.storage.set('EFA.musicVolume', 1);
            if (!this.storage.isSet('EFA.sfxVolume')) this.storage.set('EFA.sfxVolume', 1);
            if (!this.storage.isSet('EFA.bestScore')) this.storage.set('EFA.bestScore', 0);

            if (!this.storage.isSet('EFA.firstRun')) this.storage.set('EFA.firstRun', true);
            if (!this.storage.isSet('EFA.money')) this.storage.set('EFA.money', 0);
            if (!this.storage.isSet('EFA.magnet')) this.storage.set('EFA.magnet', 0);
            if (!this.storage.isSet('EFA.invin')) this.storage.set('EFA.invin', 0);
            if (!this.storage.isSet('EFA.multiCoins')) this.storage.set('EFA.multiCoins', 0);
            if (!this.storage.isSet('EFA.mega')) this.storage.set('EFA.mega', 0);
            if (!this.storage.isSet('EFA.resurrect')) this.storage.set('EFA.resurrect', 0);
            if (!this.storage.isSet('EFA.longestRun')) this.storage.set('EFA.longestRun', 0);
            if (!this.storage.isSet('EFA.mostCoins')) this.storage.set('EFA.mostCoins', 0);
            if (!this.storage.isSet('EFA.totalGames')) this.storage.set('EFA.totalGames', 0);
            if (!this.storage.isSet('EFA.totalDistance')) this.storage.set('EFA.totalDistance', 0);
            if (!this.storage.isSet('EFA.totalCoins')) this.storage.set('EFA.totalCoins', 0);
        },
        startGame: function() {
            this.director = new ig.Director(this, [LevelOpening, LevelHome, LevelPreload, LevelGame]);
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                } catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.jumpTo(LevelOpening);
                }
            } else {
                this.director.jumpTo(LevelOpening);
            }
            if (this.storage.getBool('EFA.firstRun')) {
                this.doTutorialFlag = true;
            }
            var vol = ig.game.storage.get('EFA.musicVolume');
            ig.soundHandler.bgmPlayer.volume(vol);
            vol = ig.game.storage.get('EFA.sfxVolume');
            ig.soundHandler.sfxPlayer.volume(vol);
            ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
        },
        fpsCount: function() {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
            console.log('End game');
            ig.soundHandler.stopBackgroundMusic();
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['End']['Enabled']) MobileAdInGameEnd.Initialize();
            }
        },
        setupControls: function() {
            ig.input.unbindAll();
            ig.input.initMouse();
            ig.input.bind(ig.KEY.MOUSE1, 'click');
            ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
            ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
            ig.input.bind(ig.KEY.UP_ARROW, 'up');
            ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
            ig.input.bind(ig.KEY.ENTER, 'enter');
        },
        setupURLParameters: function() {
            this.setupURLParameters = new ig.UrlParameters();
        },
        setupMarketJsGameCenter: function() {

            if (_SETTINGS) {
                if (_SETTINGS['MarketJSGameCenter']) {
                    if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                            console.log('MarketJSGameCenter activator settings present ....');
                            $('.gamecenter-activator').css('top', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top']);
                            $('.gamecenter-activator').css('left', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left']);
                        }
                    }
                    $('.gamecenter-activator').show();
                } else {
                    console.log('MarketJSGameCenter settings not defined in game settings');
                }
            }

        },
        pressPlay: function() {
            this.hideOverlay(['play']);
            this.startGame();
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Footer']['Enabled']) MobileAdInGameFooter.Initialize();
            }
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Header']['Enabled']) MobileAdInGameHeader.Initialize();
            }
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            console.log('Game Resumed');
        },
        showOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                $('#' + divList[i]).show();
                document.getElementById(divList[i]).style.visibility = "visible";
            }
        },
        hideOverlay: function(divList) {

            for (i = 0; i < divList.length; i++) {
                $('#' + divList[i]).hide();
                document.getElementById(divList[i]).style.visibility = "hidden";
            }

        },
        update: function() {
            this.fpsCount();
            if (this.paused) {
                for (var i = 0; i < this.entities.length; i++) {
                    if (this.entities[i].ignorePause) {
                        this.entities[i].update();
                    }
                }
            } else {
                this.parent();
                if (ig.soundHandler) {
                    ig.soundHandler.forceLoopBGM();
                }
            }
        },
        draw: function() {
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            this.drawEntities();
        },
        drawDebug: function() {
            if (!ig.global.wm) {
                this.debugEnable();
                if (this.viewDebug) {
                    ig.system.context.fillStyle = '#000000';
                    ig.system.context.globalAlpha = 0.35;
                    ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                    ig.system.context.globalAlpha = 1;
                    if (this.debug && this.debug.length > 0) {
                        for (i = 0; i < this.debug.length; i++) {
                            ig.system.context.font = "10px Arial";
                            ig.system.context.fillStyle = '#ffffff';
                            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                        }
                    }
                }
            }
        },
        debugCL: function(consoleLog) {
            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            } else {
                if (this.debug.length < 50) {
                    this.debug.push(consoleLog);
                } else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);

        },
        debugEnable: function() {

            if (ig.input.pressed('click')) {
                this.debugEnableTimer = new ig.Timer(2);
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                } else {
                    this.viewDebug = true;
                }
            }

        }
    });
    var device = getQueryVariable("device");
    if (device) {
        switch (device) {
            case 'mobile':
                console.log('serving mobile version ...');
                ig.ua.mobile = true;
                break;
            case 'desktop':
                console.log('serving desktop version ...');
                ig.ua.mobile = false;
                break;
            default:
                console.log('serving universal version ...');
                break;
        }
    } else {
        console.log('serving universal version ...');
    }
    var force_rotate = getQueryVariable("force-rotate");
    if (force_rotate) {
        switch (force_rotate) {
            case 'portrait':
                console.log('force rotate to portrait');
                window.orientation = 0;
                break;
            case 'landscape':
                console.log('force rotate to horizontal');
                window.orientation = 90;
                break;
            default:
                alert('wrong command/type in param force-rotate. Defaulting value to portrait');
                window.orientation = 0;
        }
    }
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader);
    } else {
        ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
    }
    if (ig.ua.mobile) {
        orientationHandler();
    }
    sizeHandler();
    fixSamsungHandler();
    ig.domHandler = null;
    ig.domHandler = new ig.DomHandler();
    ig.domHandler.forcedDeviceDetection();
    ig.domHandler.forcedDeviceRotation();
    ig.soundHandler = null;
    ig.soundHandler = new ig.SoundHandler();
    Array
});