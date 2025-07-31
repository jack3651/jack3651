(window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = [].slice,
                    r = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    n = function(t) {
                        return t.jquery || t.length && t !== window && t[0] && (t[0] === window || t[0].nodeType && t[0].style && !t.nodeType)
                    },
                    a = r.prototype = i.to({}, .1, {}),
                    o = [];
                r.version = "1.10.2", a.constructor = r, a.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.ticker = i.ticker, a.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, a.updateTo = function(t, e) {
                    var s, r = this.ratio;
                    e && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted)
                        if (e) this._initted = !1;
                        else if (this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var n = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(n, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var a, o = 1 / (1 - r), h = this._firstPT; h;) a = h.s + h.c, h.c *= o, h.s = a - h.c, h = h._next
                    }
                    return this
                }, a.render = function(t, e, i) {
                    var s, r, n, a, h, l, _, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        f = this._totalTime,
                        c = this._cycle;
                    if (t >= u ? (this._totalTime = u, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== f || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = t)) : this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (a = this._duration + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 != (1 & this._cycle) && (this._time = this._duration - this._time), this._time > this._duration ? this._time = this._duration : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / this._duration, l = this._easeType, _ = this._easePower, (1 === l || 3 === l && h >= .5) && (h = 1 - h), 3 === l && (h *= 2), 1 === _ ? h *= h : 2 === _ ? h *= h * h : 3 === _ ? h *= h * h * h : 4 === _ && (h *= h * h * h * h), this.ratio = 1 === l ? 1 - h : 2 === l ? h : .5 > this._time / this._duration ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / this._duration)), p === this._time && !i) return void(f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)));
                    if (!this._initted) {
                        if (this._init(), !this._initted) return;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === f && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)), this._cycle !== c && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || o)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || o)))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
                }, r.staggerTo = r.allTo = function(t, e, a, h, l, _, u) {
                    h = h || 0;
                    var p, f, c, m, d = a.delay || 0,
                        g = [],
                        v = function() {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), l.apply(u || this, _ || o)
                        };
                    for (t instanceof Array || ("string" == typeof t && (t = i.selector(t) || t), n(t) && (t = s.call(t, 0))), p = t.length, c = 0; p > c; c++) {
                        f = {};
                        for (m in a) f[m] = a[m];
                        f.delay = d, c === p - 1 && l && (f.onComplete = v), g[c] = new r(t[c], e, f), d += h
                    }
                    return g
                }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h)
                }, r.delayedCall = function(t, e, i, s, n) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: s,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    for (var e, s = i.getTweensOf(t), r = s.length; --r > -1;)
                        if (e = s[r], e._active || e._startTime === e._timeline._time && e._timeline._active) return !0;
                    return !1
                };
                var h = function(t, e) {
                        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(h(n, e)), r = s.length), n = n._next;
                        return s
                    },
                    l = r.getAllTweens = function(e) {
                        return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, h = l(0 != r),
                        _ = h.length,
                        u = i && s && r;
                    for (o = 0; _ > o; o++) a = h[o], (u || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var a, o, h, l, _, u = i._tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), n(t) && (t = s(t, 0)), t instanceof Array)
                            for (l = t.length; --l > -1;) r.killChildTweensOf(t[l], e);
                        else {
                            a = [];
                            for (h in u)
                                for (o = u[h].target.parentNode; o;) o === t && (a = a.concat(u[h].tweens)), o = o.parentNode;
                            for (_ = a.length, l = 0; _ > l; l++) e && a[l].totalTime(a[l].totalDuration()), a[l]._enabled(!1, !1)
                        }
                    }
                };
                var _ = function(t, i, s, r) {
                    i = !1 !== i, s = !1 !== s, r = !1 !== r;
                    for (var n, a, o = l(r), h = i && s && r, _ = o.length; --_ > -1;) a = o[_], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    _(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    _(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || 1e-6, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, a.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, a.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, a.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, a.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, a.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, a.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, a.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, a.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r)(i = r[s]) instanceof Array && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        r.tweens instanceof Array && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = [],
                    n = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    a = function(t, e, i, s) {
                        t._timeline.pause(t._startTime), e && e.apply(s || t._timeline, i || r)
                    },
                    o = r.slice,
                    h = s.prototype = new e;
                return s.version = "1.10.2", h.constructor = s, h.kill()._gc = !1, h.to = function(t, e, s, r) {
                    return e ? this.add(new i(t, e, s), r) : this.set(t, s, r)
                }, h.from = function(t, e, s, r) {
                    return this.add(i.from(t, e, s), r)
                }, h.fromTo = function(t, e, s, r, n) {
                    return e ? this.add(i.fromTo(t, e, s, r), n) : this.set(t, r, n)
                }, h.staggerTo = function(t, e, r, a, h, l, _, u) {
                    var p, f = new s({
                        onComplete: l,
                        onCompleteParams: _,
                        onCompleteScope: u
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), !(t instanceof Array) && t.length && t !== window && t[0] && (t[0] === window || t[0].nodeType && t[0].style && !t.nodeType) && (t = o.call(t, 0)), a = a || 0, p = 0; t.length > p; p++) r.startAt && (r.startAt = n(r.startAt)), f.to(t[p], e, n(r), p * a);
                    return this.add(f, h)
                }, h.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
                }, h.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
                }, h.call = function(t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r)
                }, h.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a
                }, h.add = function(r, n, a, o) {
                    var h, l, _, u, p;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array) {
                            for (a = a || "normal", o = o || 0, h = n, l = r.length, _ = 0; l > _; _++)(u = r[_]) instanceof Array && (u = new s({
                                tweens: u
                            })), this.add(u, h), "string" != typeof u && "function" != typeof u && ("sequence" === a ? h = u._startTime + u.totalDuration() / u._timeScale : "start" === a && (u._startTime -= u.delay())), h += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is neither a tween, timeline, function, nor a string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n), this._gc && !this._paused && this._time === this._duration && this._time < this.duration())
                        for (p = this; p._gc && p._timeline;) p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._enabled(!0, !1), p = p._timeline;
                    return this
                }, h.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, h._remove = function(t, i) {
                    return e.prototype._remove.call(this, t, i), this._last ? this._time > this._last._startTime && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
                }, h.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, h.insert = h.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, h.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, h.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, h.addPause = function(t, e, i, s) {
                    return this.call(a, ["{self}", e, i, s], this, t)
                }, h.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, h.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, h._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r instanceof Array)
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (-1 === (n = e.indexOf("="))) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, h.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }, h.stop = function() {
                    return this.paused(!0)
                }, h.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, h.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, h.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, h, l = this._dirty ? this.totalDuration() : this._totalDuration,
                        _ = this._time,
                        u = this._startTime,
                        p = this._timeScale,
                        f = this._paused;
                    if (t >= l ? (this._totalTime = this._time = l, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 0 && (o = "onReverseComplete"))), this._rawPrevTime = t, t = l + 1e-6) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== _ || 0 === this._duration && this._rawPrevTime > 0) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = t, t = 0, this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== _ && this._first || i || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= _)
                            for (s = this._first; s && (a = s._next, !this._paused || f);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || f);)(s._active || _ >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)), o && (this._gc || (u === this._startTime || p !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || r)))
                    }
                }, h._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, h.getChildren = function(t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? !1 !== e && (n[o++] = a) : (!1 !== s && (n[o++] = a), !1 !== t && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                    return n
                }, h.getTweensOf = function(t, e) {
                    for (var s = i.getTweensOf(t), r = s.length, n = [], a = 0; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (n[a++] = s[r]);
                    return n
                }, h._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, h.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, h._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r
                }, h.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, h.invalidate = function() {
                    for (var t = this._first; t;) t.invalidate(), t = t._next;
                    return this
                }, h._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, h.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * t, !1) : this._time / this.duration()
                }, h.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, h.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, h.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, h.rawTime = function() {
                    return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, s
            }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                    },
                    r = [],
                    n = new i(null, null, 1, 0),
                    a = function(t) {
                        for (; t;) {
                            if (t._paused) return !0;
                            t = t._timeline
                        }
                        return !1
                    },
                    o = s.prototype = new t;
                return o.constructor = s, o.kill()._gc = !1, s.version = "1.10.2", o.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, o.addCallback = function(t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i)
                }, o.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }, o.tweenTo = function(t, i) {
                    i = i || {};
                    var s, a, o = {
                        ease: n,
                        overwrite: 2,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (s in i) o[s] = i[s];
                    return o.time = this._parseTimeOrLabel(t), a = new e(this, Math.abs(Number(o.time) - this._time) / this._timeScale || .001, o), o.onStart = function() {
                        a.target.paused(!0), a.vars.time !== a.target.time() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || r)
                    }, a
                }, o.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        onCompleteScope: this
                    }, i.immediateRender = !1 !== i.immediateRender;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, o.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, h, l, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                        u = this._duration,
                        p = this._time,
                        f = this._totalTime,
                        c = this._startTime,
                        m = this._timeScale,
                        d = this._rawPrevTime,
                        g = this._paused,
                        v = this._cycle;
                    if (t >= _ ? (this._locked || (this._totalTime = _, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === u && (0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 0 && (o = "onReverseComplete"))), this._rawPrevTime = t, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = u, t = u + 1e-6)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === u && this._rawPrevTime > 0 && !this._locked) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === u && this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = t, t = 0, this._initted || (h = !0))) : (this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = u + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = u - this._time), this._time > u ? (this._time = u, t = u + 1e-6) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== v && !this._locked) {
                        var y = this._yoyo && 0 != (1 & v),
                            T = y === (this._yoyo && 0 != (1 & this._cycle)),
                            x = this._totalTime,
                            w = this._cycle,
                            b = this._rawPrevTime,
                            P = this._time;
                        if (this._totalTime = v * u, v > this._cycle ? y = !y : this._totalTime += u, this._time = p, this._rawPrevTime = 0 === u ? d - 1e-5 : d, this._cycle = v, this._locked = !0, p = y ? 0 : u, this.render(p, e, 0 === u), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || r), T && (p = y ? u + 1e-6 : -1e-6, this.render(p, !0, !1)), this._locked = !1, this._paused && !g) return;
                        this._time = P, this._totalTime = x, this._cycle = w, this._rawPrevTime = b
                    }
                    if (!(this._time !== p && this._first || i || h)) return void(f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= p)
                        for (s = this._first; s && (a = s._next, !this._paused || g);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    else
                        for (s = this._last; s && (a = s._prev, !this._paused || g);)(s._active || p >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)), o && (this._locked || this._gc || (c === this._startTime || m !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || r)))
                }, o.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = [],
                        o = this.getChildren(t, e, i),
                        h = 0,
                        l = o.length;
                    for (s = 0; l > s; s++) r = o[s], r._paused || r._timeline._time >= r._startTime && r._timeline._time < r._startTime + r._totalDuration / r._timeScale && (a(r._timeline) || (n[h++] = r));
                    return n
                }, o.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, o.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, o.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, o.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, o.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, o.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, o.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, o.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, o.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, o.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, o.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = Math.PI / 180,
                    i = [],
                    s = [],
                    r = [],
                    n = {},
                    a = function(t, e, i, s) {
                        this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    o = function(t, e, i, s) {
                        var r = {
                                a: t
                            },
                            n = {},
                            a = {},
                            o = {
                                c: s
                            },
                            h = (t + e) / 2,
                            l = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (h + l) / 2,
                            p = (l + _) / 2,
                            f = (p - u) / 8;
                        return r.b = h + (t - h) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
                    },
                    h = function(t, e, n, a, h) {
                        var l, _, u, p, f, c, m, d, g, v, y, T, x, w = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (l = 0; w > l; l++) f = t[b], _ = f.a, u = f.d, p = t[b + 1].d, h ? (y = i[l], T = s[l], x = .25 * (T + y) * e / (a ? .5 : r[l] || .5), c = u - (u - _) * (a ? .5 * e : 0 !== y ? x / y : 0), m = u + (p - u) * (a ? .5 * e : 0 !== T ? x / T : 0), d = u - (c + ((m - c) * (3 * y / (y + T) + .5) / 4 || 0))) : (c = u - .5 * (u - _) * e, m = u + .5 * (p - u) * e, d = u - (c + m) / 2), c += d, m += d, f.c = g = c, f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a), f.da = u - _, f.ca = g - _, f.ba = P - _, n ? (v = o(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        f = t[b], f.b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = o(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    l = function(t, e, r, n) {
                        var o, h, l, _, u, p, f = [];
                        if (n)
                            for (t = [n].concat(t), h = t.length; --h > -1;) "string" == typeof(p = t[h][e]) && "=" === p.charAt(1) && (t[h][e] = n[e] + Number(p.charAt(0) + p.substr(2)));
                        if (0 > (o = t.length - 2)) return f[0] = new a(t[0][e], 0, 0, t[-1 > o ? 0 : 1][e]), f;
                        for (h = 0; o > h; h++) l = t[h][e], _ = t[h + 1][e], f[h] = new a(l, 0, 0, _), r && (u = t[h + 2][e], i[h] = (i[h] || 0) + (_ - l) * (_ - l), s[h] = (s[h] || 0) + (u - _) * (u - _));
                        return f[h] = new a(t[h][e], 0, 0, t[h + 1][e]), f
                    },
                    _ = function(t, e, a, o, _, u) {
                        var p, f, c, m, d, g, v, y, T = {},
                            x = [],
                            w = u || t[0];
                        _ = "string" == typeof _ ? "," + _ + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1);
                        for (f in t[0]) x.push(f);
                        if (t.length > 1) {
                            for (y = t[t.length - 1], v = !0, p = x.length; --p > -1;)
                                if (f = x[p], Math.abs(w[f] - y[f]) > .05) {
                                    v = !1;
                                    break
                                }
                            v && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
                        }
                        for (i.length = s.length = r.length = 0, p = x.length; --p > -1;) f = x[p], n[f] = -1 !== _.indexOf("," + f + ","), T[f] = l(t, f, n[f], u);
                        for (p = i.length; --p > -1;) i[p] = Math.sqrt(i[p]), s[p] = Math.sqrt(s[p]);
                        if (!o) {
                            for (p = x.length; --p > -1;)
                                if (n[f])
                                    for (c = T[x[p]], g = c.length - 1, m = 0; g > m; m++) d = c[m + 1].da / s[m] + c[m].da / i[m], r[m] = (r[m] || 0) + d * d;
                            for (p = r.length; --p > -1;) r[p] = Math.sqrt(r[p])
                        }
                        for (p = x.length, m = a ? 4 : 1; --p > -1;) f = x[p], c = T[f], h(c, e, a, o, n[f]), v && (c.splice(0, m), c.splice(c.length - m, m));
                        return T
                    },
                    u = function(t, e, i) {
                        e = e || "soft";
                        var s, r, n, o, h, l, _, u, p, f, c, m = {},
                            d = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
                        for (p in t[0]) v.push(p);
                        for (l = v.length; --l > -1;) {
                            for (p = v[l], m[p] = h = [], f = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][p] : "string" == typeof(c = t[_][p]) && "=" === c.charAt(1) ? i[p] + Number(c.charAt(0) + c.substr(2)) : Number(c), g && _ > 1 && u - 1 > _ && (h[f++] = (s + h[f - 2]) / 2), h[f++] = s;
                            for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d) s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[f++] = c = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            h.length = f
                        }
                        return m
                    },
                    p = function(t, e, i) {
                        for (var s, r, n, a, o, h, l, _, u, p, f, c = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) l = c * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), f = m * i + _ - 1, e[f] = (e[f] || 0) + s * s
                    },
                    f = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, r, n, a = [],
                            o = [],
                            h = 0,
                            l = 0,
                            _ = e - 1,
                            u = [],
                            f = [];
                        for (i in t) p(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]), n = s % e, f[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = f, o[n] = l, h = 0, f = []);
                        return {
                            length: l,
                            lengths: o,
                            segments: u
                        }
                    },
                    c = window._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, h = e.values || [],
                                l = {},
                                p = h[0],
                                c = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = c ? c instanceof Array ? c : [
                                ["x", "y", "rotation", !0 === c ? 0 : Number(c) || 0]
                            ] : null;
                            for (s in p) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? _(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : u(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = f(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (c = this._autoRotate)
                                for (c[0] instanceof Array || (this._autoRotate = c = [c]), n = c.length; --n > -1;)
                                    for (a = 0; 3 > a; a++) s = c[n][a], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                            return !0
                        },
                        set: function(e) {
                            var i, s, r, n, a, o, h, l, _, u, p = this._segCount,
                                f = this._func,
                                c = this._target;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                                    for (l = p - 1; l > r && e >= (this._l2 = _[++r]););
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = h + (h > 0 ? .5 : -.5) >> 0), f[n] ? c[n](h) : c[n] = h;
                            if (this._autoRotate) {
                                var m, d, g, v, y, T, x, w = this._autoRotate;
                                for (r = w.length; --r > -1;) n = w[r][2], T = w[r][3] || 0, x = !0 === w[r][4] ? 1 : t, a = this._beziers[w[r][0]], m = this._beziers[w[r][1]], a && m && (a = a[i], m = m[i], d = a.a + (a.b - a.a) * o, v = a.b + (a.c - a.b) * o, d += (v - d) * o, v += (a.c + (a.d - a.c) * o - v) * o, g = m.a + (m.b - m.a) * o, y = m.b + (m.c - m.b) * o, g += (y - g) * o, y += (m.c + (m.d - m.c) * o - y) * o, h = Math.atan2(y - g, v - d) * x + T, f[n] ? c[n](h) : c[n] = h)
                            }
                        }
                    }),
                    m = c.prototype;
                c.bezierThrough = _, c.cubicToQuadratic = o, c._autoCSS = !0, c.quadraticToCubic = function(t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, c._cssRegister = function() {
                    var t = window._gsDefine.globals.CSSPlugin;
                    if (t) {
                        var i = t._internals,
                            s = i._parseToProxy,
                            r = i._setPluginRatio,
                            n = i.CSSPropTween;
                        i._registerComplexSpecialProp("bezier", {
                            parser: function(t, i, a, o, h, l) {
                                i instanceof Array && (i = {
                                    values: i
                                }), l = new c;
                                var _, u, p, f = i.values,
                                    m = f.length - 1,
                                    d = [],
                                    g = {};
                                if (0 > m) return h;
                                for (_ = 0; m >= _; _++) p = s(t, f[_], o, h, l, m !== _), d[_] = p.end;
                                for (u in i) g[u] = i[u];
                                return g.values = d, h = new n(t, "bezier", 0, 0, p.pt, 2), h.data = p, h.plugin = l, h.setRatio = r, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (_ = !0 === g.autoRotate ? 0 : Number(g.autoRotate) * e, g.autoRotate = null != p.end.left ? [
                                    ["left", "top", "rotation", _, !0]
                                ] : null != p.end.x && [
                                    ["x", "y", "rotation", _, !0]
                                ]), g.autoRotate && (o._transform || o._enableTransforms(!1), p.autoRotate = o._target._gsTransform), l._onInitTween(p.proxy, g, o._tween), h
                            }
                        })
                    }
                }, m._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
                }, m._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = {},
                    h = a.prototype = new t("css");
                h.constructor = a, a.version = "1.10.2", a.API = 2, a.defaultTransformPerspective = 0, h = "px", a.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h
                };
                var l, _, u, p, f, c, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    d = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /[^\d\-\.]/g,
                    y = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/,
                    x = /opacity:([^;]*)/,
                    w = /^(rgb|hsl)/,
                    b = /([A-Z])/g,
                    P = /-([a-z])/gi,
                    S = function(t, e) {
                        return e.toUpperCase()
                    },
                    R = /(?:Left|Right|Width)/i,
                    k = /,(?=[^\)]*(?:\(|$))/gi,
                    A = Math.PI / 180,
                    C = 180 / Math.PI,
                    O = {},
                    M = document,
                    D = M.createElement("div"),
                    I = M.createElement("img"),
                    F = a._internals = {
                        _specialProps: o
                    },
                    X = navigator.userAgent,
                    N = function() {
                        var t, e = X.indexOf("Android"),
                            i = M.createElement("div");
                        return u = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === e || Number(X.substr(e + 8, 1)) > 3), f = u && 6 > Number(X.substr(X.indexOf("Version/") + 8, 1)), p = -1 !== X.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X), c = parseFloat(RegExp.$1), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", !!(t = i.getElementsByTagName("a")[0]) && /^0.55/.test(t.style.opacity)
                    }(),
                    L = function(t) {
                        return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    E = function(t) {
                        window.console && console.log(t)
                    },
                    z = "",
                    Y = "",
                    U = function(t, e) {
                        e = e || D;
                        var i, s, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (Y = 3 === s ? "ms" : i[s], z = "-" + Y.toLowerCase() + "-", Y + t) : null
                    },
                    B = M.defaultView ? M.defaultView.getComputedStyle : function() {},
                    j = a.getStyle = function(t, e, i, s, r) {
                        var n;
                        return N || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || B(t, null)) ? (t = i.getPropertyValue(e.replace(b, "-$1").toLowerCase()), n = t || i.length ? t : i[e]) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : L(t)
                    },
                    V = function(t, e, i, s, r) {
                        if ("px" === s || !s) return i;
                        if ("auto" === s || !i) return 0;
                        var n, a = R.test(e),
                            o = t,
                            h = D.style,
                            l = 0 > i;
                        return l && (i = -i), "%" === s && -1 !== e.indexOf("border") ? n = i / 100 * (a ? t.clientWidth : t.clientHeight) : (h.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", "%" !== s && o.appendChild ? h[a ? "borderLeftWidth" : "borderTopWidth"] = i + s : (o = t.parentNode || M.body, h[a ? "width" : "height"] = i + s), o.appendChild(D), n = parseFloat(D[a ? "offsetWidth" : "offsetHeight"]), o.removeChild(D), 0 !== n || r || (n = V(t, e, i, s, !0))), l ? -n : n
                    },
                    q = function(t, e, i) {
                        if ("absolute" !== j(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            r = j(t, "margin" + s, i);
                        return t["offset" + s] - (V(t, e, parseFloat(r), r.replace(y, "")) || 0)
                    },
                    Z = function(t, e) {
                        var i, s, r = {};
                        if (e = e || B(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r[e[i].replace(P, S)] = e.getPropertyValue(e[i]);
                            else
                                for (i in e) r[i] = e[i];
                        else if (e = t.currentStyle || t.style)
                            for (i in e) r[i.replace(P, S)] = e[i];
                        return N || (r.opacity = L(t)), s = vt(t, e, !1), r.rotation = s.rotation * C, r.skewX = s.skewX * C, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, gt && (r.z = s.z, r.rotationX = s.rotationX * C, r.rotationY = s.rotationY * C, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
                    },
                    W = function(t, e, i, s, r) {
                        var n, a, o, h = {},
                            l = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : q(t, a), void 0 !== l[a] && (o = new ot(l, a, l[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (h[a] = s[a]);
                        return {
                            difs: h,
                            firstMPT: o
                        }
                    },
                    $ = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    G = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    Q = function(t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = $[e],
                            n = r.length;
                        for (i = i || B(t, null); --n > -1;) s -= parseFloat(j(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(j(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    },
                    H = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "")
                    },
                    K = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    J = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
                    },
                    tt = function(t, e, i, s) {
                        var r, n, a, o;
                        return null == t ? o = e : "number" == typeof t ? o = t * A : (r = 2 * Math.PI, n = t.split("_"), a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? A : 1) - ("=" === t.charAt(1) ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r) !== a % (r / 2) && (a = 0 > a ? a + r : a - r), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), 1e-6 > o && o > -1e-6 && (o = 0), o
                    },
                    et = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    it = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    st = function(t) {
                        var e, i, s, r, n, a;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), et[t] ? et[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = it(r + 1 / 3, e, i), t[1] = it(r, e, i), t[2] = it(r - 1 / 3, e, i), t) : (t = t.match(m) || et.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : et.black
                    },
                    rt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (h in et) rt += "|" + h + "\\b";
                rt = RegExp(rt + ")", "gi");
                var nt = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, n = e ? (t.match(rt) || [""])[0] : "",
                            a = t.split(n).join("").match(g) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(m, "") : "";
                        return _ ? r = e ? function(t) {
                            var e, p, f, c;
                            if ("number" == typeof t) t += u;
                            else if (s && k.test(t)) {
                                for (c = t.replace(k, "|").split("|"), f = 0; c.length > f; f++) c[f] = r(c[f]);
                                return c.join(",")
                            }
                            if (e = (t.match(rt) || [n])[0], p = t.split(e).join("").match(g) || [], f = p.length, _ > f--)
                                for (; _ > ++f;) p[f] = i ? p[0 | (f - 1) / 2] : a[f];
                            return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, p;
                            if ("number" == typeof t) t += u;
                            else if (s && k.test(t)) {
                                for (n = t.replace(k, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]);
                                return n.join(",")
                            }
                            if (e = t.match(g) || [], p = e.length, _ > p--)
                                for (; _ > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                            return o + e.join(l) + h
                        } : function(t) {
                            return t
                        }
                    },
                    at = function(t) {
                        return t = t.split(","),
                            function(e, i, s, r, n, a, o) {
                                var h, l = (i + "").split(" ");
                                for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return r.parse(e, o, n, a)
                            }
                    },
                    ot = (F._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT; o;) e = a[o.v], o.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : 1e-6 > e && e > -1e-6 && (e = 0), o.t[o.p] = e, o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, s, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
                    }),
                    ht = (F._parseToProxy = function(t, e, i, s, r, n) {
                        var a, o, h, l, _, u = s,
                            p = {},
                            f = {},
                            c = i._transform,
                            m = O;
                        for (i._transform = null, O = e, s = _ = i.parse(t, e, s, r), O = m, n && (i._transform = c, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, p[o] = s.s, n || (l = new ot(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) h = "xn" + a, o = s.p + "_" + h, f[o] = s.data[h], p[o] = s[h], n || (l = new ot(s, h, o, l, s.rxp[h]));
                            s = s._next
                        }
                        return {
                            proxy: p,
                            end: f,
                            firstMPT: l,
                            pt: _
                        }
                    }, F.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) {
                        this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof ht || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this)
                    }),
                    lt = a.parseComplex = function(t, e, i, s, r, n, a, o, h, _) {
                        i = i || n || "", a = new ht(t, e, 0, 0, a, _ ? 2 : 1, null, !1, o, i, s), s += "";
                        var u, p, f, c, g, v, y, T, x, b, P, S, R = i.split(", ").join(",").split(" "),
                            A = s.split(", ").join(",").split(" "),
                            C = R.length,
                            O = !1 !== l;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (R = R.join(" ").replace(k, ", ").split(" "), A = A.join(" ").replace(k, ", ").split(" "), C = R.length), C !== A.length && (R = (n || "").split(" "), C = R.length), a.plugin = h, a.setRatio = _, u = 0; C > u; u++)
                            if (c = R[u], g = A[u], (T = parseFloat(c)) || 0 === T) a.appendXtra("", T, K(g, T), g.replace(d, ""), O && -1 !== g.indexOf("px"), !0);
                            else if (r && ("#" === c.charAt(0) || et[c] || w.test(c))) S = "," === g.charAt(g.length - 1) ? ")," : ")", c = st(c), g = st(g), x = c.length + g.length > 6, x && !N && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(A[u]).join("transparent")) : (N || (x = !1), a.appendXtra(x ? "rgba(" : "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], x ? "," : S, !0), x && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, S, !1)));
                        else if (v = c.match(m)) {
                            if (!(y = g.match(d)) || y.length !== v.length) return a;
                            for (f = 0, p = 0; v.length > p; p++) P = v[p], b = c.indexOf(P, f), a.appendXtra(c.substr(f, b - f), Number(P), K(y[p], P), "", O && "px" === c.substr(b + P.length, 2), 0 === p), f = b + P.length;
                            a["xs" + a.l] += c.substr(f)
                        } else a["xs" + a.l] += a.l ? " " + c : c;
                        if (-1 !== s.indexOf("=") && a.data) {
                            for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) S += a["xs" + u] + a.data["xn" + u];
                            a.e = S + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    _t = 9;
                for (h = ht.prototype, h.l = h.pr = 0; --_t > 0;) h["xn" + _t] = 0, h["xs" + _t] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, r, n) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new ht(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var ut = function(t, e) {
                        e = e || {}, this.p = e.prefix ? U(t) || t : t, o[t] = o[this.p] = this, this.format = e.formatter || nt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    pt = F._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, r = t.split(","),
                            n = e.defaultValue;
                        for (i = i || [n], s = 0; r.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || n, new ut(r[s], e)
                    };
                h = ut.prototype, h.parseComplex = function(t, e, i, s, r, n) {
                    var a, o, h, l, _, u, p = this.keyword;
                    if (this.multi && (k.test(i) || k.test(e) ? (o = e.replace(k, "|").split("|"), h = i.replace(k, "|").split("|")) : p && (o = [e], h = [i])), h) {
                        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
                        e = o.join(", "), i = h.join(", ")
                    }
                    return lt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }, h.parse = function(t, e, i, s, n, a) {
                    return this.parseComplex(t.style, this.format(j(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    pt(t, {
                        parser: function(t, s, r, n, a, o) {
                            var h = new ht(t, r, 0, 0, a, 2, r, !1, i);
                            return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
                        },
                        priority: i
                    })
                };
                var ft = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                    ct = U("transform"),
                    mt = z + "transform",
                    dt = U("transformOrigin"),
                    gt = null !== U("perspective"),
                    vt = function(t, e, i, s) {
                        if (t._gsTransform && i && !s) return t._gsTransform;
                        var r, n, o, h, l, _, u, p, f, c, m, d, g, v = i ? t._gsTransform || {
                                skewY: 0
                            } : {
                                skewY: 0
                            },
                            y = 0 > v.scaleX,
                            T = 2e-5,
                            x = 1e5,
                            w = 1e-4 - Math.PI,
                            b = Math.PI - 1e-4,
                            P = gt ? parseFloat(j(t, dt, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
                        for (ct ? r = j(t, mt, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(/(M11|M12|M21|M22)=[\d\-\.e]+/gi), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = n.length; --o > -1;) h = Number(n[o]), n[o] = (l = h - (h |= 0)) ? (0 | l * x + (0 > l ? -.5 : .5)) / x + h : h;
                        if (16 === n.length) {
                            var S = n[8],
                                R = n[9],
                                k = n[10],
                                A = n[12],
                                C = n[13],
                                O = n[14];
                            if (v.zOrigin && (O = -v.zOrigin, A = S * O - n[12], C = R * O - n[13], O = k * O + v.zOrigin - n[14]), !i || s || null == v.rotationX) {
                                var M, D, I, F, X, N, L, E = n[0],
                                    z = n[1],
                                    Y = n[2],
                                    U = n[3],
                                    B = n[4],
                                    V = n[5],
                                    q = n[6],
                                    Z = n[7],
                                    W = n[11],
                                    $ = v.rotationX = Math.atan2(q, k),
                                    G = w > $ || $ > b;
                                $ && (F = Math.cos(-$), X = Math.sin(-$), M = B * F + S * X, D = V * F + R * X, I = q * F + k * X, S = B * -X + S * F, R = V * -X + R * F, k = q * -X + k * F, W = Z * -X + W * F, B = M, V = D, q = I), $ = v.rotationY = Math.atan2(S, E), $ && (N = w > $ || $ > b, F = Math.cos(-$), X = Math.sin(-$), M = E * F - S * X, D = z * F - R * X, I = Y * F - k * X, R = z * X + R * F, k = Y * X + k * F, W = U * X + W * F, E = M, z = D, Y = I), $ = v.rotation = Math.atan2(z, V), $ && (L = w > $ || $ > b, F = Math.cos(-$), X = Math.sin(-$), E = E * F + B * X, D = z * F + V * X, V = z * -X + V * F, q = Y * -X + q * F, z = D), L && G ? v.rotation = v.rotationX = 0 : L && N ? v.rotation = v.rotationY = 0 : N && G && (v.rotationY = v.rotationX = 0), v.scaleX = (0 | Math.sqrt(E * E + z * z) * x + .5) / x, v.scaleY = (0 | Math.sqrt(V * V + R * R) * x + .5) / x, v.scaleZ = (0 | Math.sqrt(q * q + k * k) * x + .5) / x, v.skewX = 0, v.perspective = W ? 1 / (0 > W ? -W : W) : 0, v.x = A, v.y = C, v.z = O
                            }
                        } else if (!(gt && !s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === j(t, "display", e))) {
                            var Q = n.length >= 6,
                                H = Q ? n[0] : 1,
                                K = n[1] || 0,
                                J = n[2] || 0,
                                tt = Q ? n[3] : 1;
                            v.x = n[4] || 0, v.y = n[5] || 0, _ = Math.sqrt(H * H + K * K), u = Math.sqrt(tt * tt + J * J), p = H || K ? Math.atan2(K, H) : v.rotation || 0, f = J || tt ? Math.atan2(J, tt) + p : v.skewX || 0, c = _ - Math.abs(v.scaleX || 0), m = u - Math.abs(v.scaleY || 0), Math.abs(f) > Math.PI / 2 && Math.abs(f) < 1.5 * Math.PI && (y ? (_ *= -1, f += 0 >= p ? Math.PI : -Math.PI, p += 0 >= p ? Math.PI : -Math.PI) : (u *= -1, f += 0 >= f ? Math.PI : -Math.PI)), d = (p - v.rotation) % Math.PI, g = (f - v.skewX) % Math.PI, (void 0 === v.skewX || c > T || -T > c || m > T || -T > m || d > w && b > d && !1 | d * x || g > w && b > g && !1 | g * x) && (v.scaleX = _, v.scaleY = u, v.rotation = p, v.skewX = f), gt && (v.rotationX = v.rotationY = v.z = 0, v.perspective = parseFloat(a.defaultTransformPerspective) || 0, v.scaleZ = 1)
                        }
                        v.zOrigin = P;
                        for (o in v) T > v[o] && v[o] > -T && (v[o] = 0);
                        return i && (t._gsTransform = v), v
                    },
                    yt = function(t) {
                        var e, i, s = this.data,
                            r = -s.rotation,
                            n = r + s.skewX,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = h, h = -l, l = -i, e = p.filter, u.filter = "";
                            var f, m, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== p.position,
                                x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                                w = s.x,
                                b = s.y;
                            if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, m = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, w += f - (f * o + m * h), b += m - (f * l + m * _)), v) f = d / 2, m = g / 2, x += ", Dx=" + (f - (f * o + m * h) + w) + ", Dy=" + (m - (f * l + m * _) + b) + ")";
                            else {
                                var P, S, R, k = 8 > c ? 1 : -1;
                                for (f = s.ieOffsetX || 0, m = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), _t = 0; 4 > _t; _t++) S = G[_t], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : V(this.t, S, parseFloat(P), P.replace(y, "")) || 0, R = i !== s[S] ? 2 > _t ? -s.ieOffsetX : -s.ieOffsetY : 2 > _t ? f - s.ieOffsetX : m - s.ieOffsetY, u[S] = (s[S] = Math.round(i - R * (0 === _t || 2 === _t ? 1 : k))) + "px";
                                x += ", sizingMethod='auto expand')"
                            }
                            u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, x) : x + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === x.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(") && u.removeAttribute("filter"))
                        }
                    },
                    Tt = function() {
                        var t, e, i, s, r, n, a, o, h, l, _, u, f, c, m, d, g, v, y, T, x, w, b, P, S, R, k, A = this.data,
                            C = this.t.style,
                            O = A.rotation,
                            M = A.scaleX,
                            D = A.scaleY,
                            I = A.scaleZ;
                        if (p && (S = C.top ? "top" : C.bottom ? "bottom" : parseFloat(j(this.t, "top", null, !1)) ? "bottom" : "top", x = j(this.t, S, null, !1), R = parseFloat(x) || 0, k = x.substr((R + "").length) || "px", A._ffFix = !A._ffFix, C[S] = (A._ffFix ? R + .05 : R - .05) + k), O || A.skewX) y = Math.cos(O), T = Math.sin(O), t = y, r = T, A.skewX && (O -= A.skewX, y = Math.cos(O), T = Math.sin(O)), e = -T, n = y;
                        else {
                            if (!A.rotationY && !A.rotationX && 1 === I) return void(C[ct] = "translate3d(" + A.x + "px," + A.y + "px," + A.z + "px)" + (1 !== M || 1 !== D ? " scale(" + M + "," + D + ")" : ""));
                            t = n = 1, e = r = 0
                        }
                        _ = 1, i = s = a = o = h = l = u = f = c = 0, d = A.perspective, m = d ? -1 / d : 0, g = A.zOrigin, v = 1e5, O = A.rotationY, O && (y = Math.cos(O), T = Math.sin(O), h = _ * -T, f = m * -T, i = t * T, a = r * T, _ *= y, m *= y, t *= y, r *= y), O = A.rotationX, O && (y = Math.cos(O), T = Math.sin(O), x = e * y + i * T, w = n * y + a * T, b = l * y + _ * T, P = c * y + m * T, i = e * -T + i * y, a = n * -T + a * y, _ = l * -T + _ * y, m = c * -T + m * y, e = x, n = w, l = b, c = P), 1 !== I && (i *= I, a *= I, _ *= I, m *= I), 1 !== D && (e *= D, n *= D, l *= D, c *= D), 1 !== M && (t *= M, r *= M, h *= M, f *= M), g && (u -= g, s = i * u, o = a * u, u = _ * u + g), s = (x = (s += A.x) - (s |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + s : s, o = (x = (o += A.y) - (o |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + o : o, u = (x = (u += A.z) - (u |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + u : u, C[ct] = "matrix3d(" + [(0 | t * v) / v, (0 | r * v) / v, (0 | h * v) / v, (0 | f * v) / v, (0 | e * v) / v, (0 | n * v) / v, (0 | l * v) / v, (0 | c * v) / v, (0 | i * v) / v, (0 | a * v) / v, (0 | _ * v) / v, (0 | m * v) / v, s, o, u, d ? 1 + -u / d : 1].join(",") + ")"
                    },
                    xt = function() {
                        var t, e, i, s, r, n, a, o, h, l = this.data,
                            _ = this.t,
                            u = _.style;
                        p && (t = u.top ? "top" : u.bottom ? "bottom" : parseFloat(j(_, "top", null, !1)) ? "bottom" : "top", e = j(_, t, null, !1), i = parseFloat(e) || 0, s = e.substr((i + "").length) || "px", l._ffFix = !l._ffFix, u[t] = (l._ffFix ? i + .05 : i - .05) + s), l.rotation || l.skewX ? (r = l.rotation, n = r - l.skewX, a = 1e5, o = l.scaleX * a, h = l.scaleY * a, u[ct] = "matrix(" + (0 | Math.cos(r) * o) / a + "," + (0 | Math.sin(r) * o) / a + "," + (0 | Math.sin(n) * -h) / a + "," + (0 | Math.cos(n) * h) / a + "," + l.x + "," + l.y + ")") : u[ct] = "matrix(" + l.scaleX + ",0,0," + l.scaleY + "," + l.x + "," + l.y + ")"
                    };
                pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
                    parser: function(t, e, i, s, n, a, o) {
                        if (s._transform) return n;
                        var h, l, _, u, p, f, c, m = s._transform = vt(t, r, !0, o.parseTransform),
                            d = t.style,
                            g = ft.length,
                            v = o,
                            y = {};
                        if ("string" == typeof v.transform && ct) _ = d.cssText, d[ct] = v.transform, d.display = "block", h = vt(t, null, !1), d.cssText = _;
                        else if ("object" == typeof v) {
                            if (h = {
                                    scaleX: J(null != v.scaleX ? v.scaleX : v.scale, m.scaleX),
                                    scaleY: J(null != v.scaleY ? v.scaleY : v.scale, m.scaleY),
                                    scaleZ: J(null != v.scaleZ ? v.scaleZ : v.scale, m.scaleZ),
                                    x: J(v.x, m.x),
                                    y: J(v.y, m.y),
                                    z: J(v.z, m.z),
                                    perspective: J(v.transformPerspective, m.perspective)
                                }, null != (c = v.directionalRotation))
                                if ("object" == typeof c)
                                    for (_ in c) v[_] = c[_];
                                else v.rotation = c;
                            h.rotation = tt("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : "rotationZ" in v ? v.rotationZ : m.rotation * C, m.rotation, "rotation", y), gt && (h.rotationX = tt("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : m.rotationX * C || 0, m.rotationX, "rotationX", y), h.rotationY = tt("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : m.rotationY * C || 0, m.rotationY, "rotationY", y)), h.skewX = null == v.skewX ? m.skewX : tt(v.skewX, m.skewX), h.skewY = null == v.skewY ? m.skewY : tt(v.skewY, m.skewY), (l = h.skewY - m.skewY) && (h.skewX += l, h.rotation += l)
                        }
                        for (null != v.force3D && (m.force3D = v.force3D, f = !0), (p = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == v.scale || (h.scaleZ = 1); --g > -1;) i = ft[g], ((u = h[i] - m[i]) > 1e-6 || -1e-6 > u || null != O[i]) && (f = !0, n = new ht(m, i, m[i], u, n), i in y && (n.e = y[i]), n.xs0 = 0, n.plugin = a, s._overwriteProps.push(n.n));
                        return u = v.transformOrigin, (u || gt && p && m.zOrigin) && (ct ? (f = !0, i = dt, u = (u || j(t, i, r, !1, "50% 50%")) + "", n = new ht(d, i, 0, 0, n, -1, "transformOrigin"), n.b = d[i], n.plugin = a, gt ? (_ = m.zOrigin, u = u.split(" "), m.zOrigin = (u.length > 2 && (0 === _ || "0px" !== u[2]) ? parseFloat(u[2]) : _) || 0, n.xs0 = n.e = d[i] = u[0] + " " + (u[1] || "50%") + " 0px", n = new ht(m, "zOrigin", 0, 0, n, -1, n.n), n.b = _, n.xs0 = n.e = m.zOrigin) : n.xs0 = n.e = d[i] = u) : H(u + "", m)), f && (s._transformType = p || 3 === this._transformType ? 3 : 2), n
                    },
                    prefix: !0
                }), pt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), pt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a) {
                        e = this.format(e);
                        var o, h, l, _, u, p, f, c, m, d, g, v, y, T, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) this.p.indexOf("border") && (b[h] = U(b[h])), u = _ = j(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], f = parseFloat(u), v = u.substr((f + "").length), y = "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)), "" === g && (g = s[i] || v), g !== v && (T = V(t, "borderLeft", f, v), x = V(t, "borderTop", f, v), "%" === g ? (u = T / m * 100 + "%", _ = x / d * 100 + "%") : "em" === g ? (w = V(t, "borderLeft", 1, "em"), u = T / w + "em", _ = x / w + "em") : (u = T + "px", _ = x + "px"), y && (p = parseFloat(u) + c + g, l = parseFloat(_) + c + g)), a = lt(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: nt("0px 0px 0px 0px", !1, !0)
                }), pt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l, _, u, p, f = "background-position",
                            m = r || B(t, null),
                            d = this.format((m ? c ? m.getPropertyValue(f + "-x") + " " + m.getPropertyValue(f + "-y") : m.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = j(t, "backgroundImage").replace(/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, "")) && "none" !== p) {
                            for (o = d.split(" "), h = g.split(" "), I.setAttribute("src", p), l = 2; --l > -1;) d = o[l], (_ = -1 !== d.indexOf("%")) !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - I.width : t.offsetHeight - I.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : parseFloat(d) / u * 100 + "%");
                            d = o.join(" ")
                        }
                        return this.parseComplex(t.style, d, g, n, a)
                    },
                    formatter: H
                }), pt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: H
                }), pt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), pt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), pt("transformStyle", {
                    prefix: !0
                }), pt("backfaceVisibility", {
                    prefix: !0
                }), pt("margin", {
                    parser: at("marginTop,marginRight,marginBottom,marginLeft")
                }), pt("padding", {
                    parser: at("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), pt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l;
                        return 9 > c ? (h = t.currentStyle, l = 8 > c ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(j(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                    }
                }), pt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), pt("autoRound,strictUnits", {
                    parser: function(t, e, i, s, r) {
                        return r
                    }
                }), pt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, n, a) {
                        return this.parseComplex(t.style, this.format(j(t, "borderTopWidth", r, !1, "0px") + " " + j(t, "borderTopStyle", r, !1, "solid") + " " + j(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(rt) || ["#000"])[0]
                    }
                }), pt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r) {
                        var n = t.style,
                            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new ht(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                    }
                });
                var wt = function(t) {
                    var e, i = this.t,
                        s = i.filter || j(this.data, "filter"),
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") ? (i.removeAttribute("filter"), e = !j(this.data, "filter")) : (i.filter = s.replace(/alpha\(opacity *=.+?\)/i, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("opacity") ? 0 === r && this.xn1 || (i.filter += " alpha(opacity=" + r + ")") : i.filter = s.replace(T, "opacity=" + r))
                };
                pt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, n, a) {
                        var o = parseFloat(j(t, "opacity", r, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i;
                        return e = parseFloat(e), l && 1 === o && "hidden" === j(t, "visibility", r) && 0 !== e && (o = 0), N ? n = new ht(h, "opacity", o, e - o, n) : (n = new ht(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = wt), l && (n = new ht(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n)), n
                    }
                });
                var bt = function(t, e) {
                        e && (t.removeProperty ? t.removeProperty(e.replace(b, "-$1").toLowerCase()) : t.removeAttribute(e))
                    },
                    Pt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.className = 0 === t ? this.b : this.e;
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : bt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.className !== this.e && (this.t.className = this.e)
                    };
                pt("className", {
                    parser: function(t, e, s, n, a, o, h) {
                        var l, _, u, p, f, c = t.className,
                            m = t.style.cssText;
                        if (a = n._classNamePT = new ht(t, s, 0, 0, a, 2), a.setRatio = Pt, a.pr = -11, i = !0, a.b = c, _ = Z(t, r), u = t._gsClassPT) {
                            for (p = {}, f = u.data; f;) p[f.p] = 1, f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.className = a.e, l = W(t, _, Z(t), h, p), t.className = c, a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)), a
                    }
                });
                var St = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration) {
                        if ("all" === this.e) return this.t.style.cssText = "", void(this.t._gsTransform && delete this.t._gsTransform);
                        for (var e, i = this.t.style, s = this.e.split(","), r = s.length, n = o.transform.parse; --r > -1;) e = s[r], o[e] && (e = o[e].parse === n ? ct : o[e].p), bt(i, e)
                    }
                };
                for (pt("clearProps", {
                        parser: function(t, e, s, r, n) {
                            return n = new ht(t, s, 0, 0, n, 2), n.setRatio = St, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), _t = h.length; _t--;) ! function(t) {
                    if (!o[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        pt(t, {
                            parser: function(t, i, s, r, n, a, h) {
                                var l = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                                return l ? (l._cssRegister(), o[s].parse(t, i, s, r, n, a, h)) : (E("Error: " + e + " js file not loaded."), n)
                            }
                        })
                    }
                }(h[_t]);
                h = a.prototype, h._firstPT = null, h._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, l = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = B(t, ""), n = this._overwriteProps;
                    var h, p, c, m, d, g, v, y, T, w = t.style;
                    if (_ && "" === w.zIndex && ("auto" === (h = j(t, "zIndex", r)) || "" === h) && (w.zIndex = 0), "string" == typeof e && (m = w.cssText, h = Z(t, r), w.cssText = m + ";" + e, h = W(t, h, Z(t)).difs, !N && x.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, w.cssText = m), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                        for (T = 3 === this._transformType, ct ? u && (_ = !0, "" === w.zIndex && ("auto" === (v = j(t, "zIndex", r)) || "" === v) && (w.zIndex = 0), f && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : w.zoom = 1, c = p; c && c._next;) c = c._next;
                        y = new ht(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && gt ? Tt : ct ? xt : yt, y.data = this._transform || vt(t, r, !0), n.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (g = p._next, c = m; c && c.pr > p.pr;) c = c._next;
                            (p._prev = c ? c._prev : d) ? p._prev._next = p: m = p, (p._next = c) ? c._prev = p : d = p, p = g
                        }
                        this._firstPT = m
                    }
                    return !0
                }, h.parse = function(t, e, i, n) {
                    var a, h, _, u, p, f, c, m, d, g, v = t.style;
                    for (a in e) f = e[a], h = o[a], h ? i = h.parse(t, f, a, this, i, n, e) : (p = j(t, a, r) + "", d = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && w.test(f) ? (d || (f = st(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = lt(v, a, p, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (_ = parseFloat(p), c = _ || 0 === _ ? p.substr((_ + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (_ = Q(t, a, r), c = "px") : "left" === a || "top" === a ? (_ = q(t, a, r), c = "px") : (_ = "opacity" !== a ? 0 : 1, c = "")), g = d && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(y, "")) : (u = parseFloat(f), m = d ? f.substr((u + "").length) || "" : ""), "" === m && (m = s[a] || c), f = u || 0 === u ? (g ? u + _ : u) + m : e[a], c !== m && "" !== m && (u || 0 === u) && (_ || 0 === _) && (_ = V(t, a, _, c), "%" === m ? (_ /= V(t, a, 100, "%") / 100, _ > 100 && (_ = 100), !0 !== e.strictUnits && (p = _ + "%")) : "em" === m ? _ /= V(t, a, 1, "em") : (u = V(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + _ + m)), g && (u += _), !_ && 0 !== _ || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new ht(v, a, u || _ || 0, 0, i, -1, a, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : p) : E("invalid " + a + " tween value: " + e[a]) : (i = new ht(v, a, _, u - _, i, 0, a, !1 !== l && ("px" === m || "zIndex" === a), 0, p, f), i.xs0 = m)) : i = lt(v, a, p, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                    return i
                }, h.setRatio = function(t) {
                    var e, i, s, r = this._firstPT;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : 1e-6 > e && e > -1e-6 && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (2 === (s = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
                }, h._enableTransforms = function(t) {
                    this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || vt(this._target, r, !0)
                }, h._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
                };
                var Rt = function(t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Rt(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(Z(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Rt(n, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var r, n, a, o = e.to(t, i, s),
                        h = [o],
                        l = [],
                        _ = [],
                        u = [],
                        p = e._internals.reservedProps;
                    for (t = o._targets || o.target, Rt(t, l, u), o.render(i, !0), Rt(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > -1;)
                        if (n = W(u[r], l[r], _[r]), n.firstMPT) {
                            n = n.difs;
                            for (a in s) p[a] && (n[a] = s[a]);
                            h.push(e.to(u[r], i, n))
                        }
                    return h
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = window._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1;
                    for (n = r.length; --n > -1;)
                        for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev),
                            e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
                    return !1
                }, e._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
                }
            }(), window._gsDefine.plugin({
                propName: "attr",
                API: 2,
                init: function(t, e) {
                    var i;
                    if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {};
                    for (i in e) this._addTween(this._proxy, i, parseFloat(t.getAttribute(i)), e[i], i) && this._overwriteProps.push(i);
                    return !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    for (var e, i = this._overwriteProps, s = i.length; --s > -1;) e = i[s], this._target.setAttribute(e, this._proxy[e] + "")
                }
            }), window._gsDefine.plugin({
                propName: "directionalRotation",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, s, r, n, a, o, h = !0 === e.useRadians ? 2 * Math.PI : 360;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h) !== a % (h / 2) && (a = 0 > a ? a + h : a - h), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > 1e-6 || -1e-6 > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, r = window.GreenSockGlobals || window,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = n._class,
                    l = function(e, i) {
                        var s = h("easing." + e, function() {}, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, s
                    },
                    _ = t.register || function() {},
                    u = function(t, e, i, s) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return _(r, t), r
                    },
                    p = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var s = h("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, r.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    c = u("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                    }, !0),
                    d = m.prototype = new t;
                return d.constructor = m, d.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = h("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, d.config = e.config = function(t) {
                    return new e(t)
                }, i = h("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, c = !1 !== e.randomize, m = !0 === e.clamp, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = c ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), c ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                        x: i,
                        y: s
                    };
                    for (l.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new p(1, 1, null), f = u; --f > -1;) a = l[f], o = new p(a.x, a.y, o);
                    this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
                }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, d.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), l("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), l("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", l("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), l("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), l("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var r = h("easing." + e, function(t, e) {
                            this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1))) * Math.sin((t - this._p3) * a / this._p2)
                }, .3), s("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
                }, .45)), u("Expo", l("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), l("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), l("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", l("SineOut", function(t) {
                    return Math.sin(t * o)
                }), l("SineIn", function(t) {
                    return 1 - Math.cos(t * o)
                }), l("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), c
            }, !0)
    }),
    function(t) {
        "use strict";
        var e, i, s, r, n, a = t.GreenSockGlobals || t,
            o = function(t) {
                var e, i = t.split("."),
                    s = a;
                for (e = 0; i.length > e; e++) s[i[e]] = s = s[i[e]] || {};
                return s
            },
            h = o("com.greensock"),
            l = [].slice,
            _ = function() {},
            u = {},
            p = function(e, i, s, r) {
                this.sc = u[e] ? u[e].sc : [], u[e] = this, this.gsClass = null, this.func = s;
                var n = [];
                this.check = function(h) {
                    for (var l, _, f, c, m = i.length, d = m; --m > -1;)(l = u[i[m]] || new p(i[m], [])).gsClass ? (n[m] = l.gsClass, d--) : h && l.sc.push(this);
                    if (0 === d && s)
                        for (_ = ("com.greensock." + e).split("."), f = _.pop(), c = o(_.join("."))[f] = this.gsClass = s.apply(s, n), r && (a[f] = c, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").join("/"), [], function() {
                                return c
                            }) : "undefined" != typeof module && module.exports && (module.exports = c)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                }, this.check(!0)
            },
            f = t._gsDefine = function(t, e, i, s) {
                return new p(t, e, i, s)
            },
            c = h._class = function(t, e, i) {
                return e = e || function() {}, f(t, [], function() {
                    return e
                }, i), e
            };
        f.globals = a;
        var m = [0, 0, 1, 1],
            d = [],
            g = c("easing.Ease", function(t, e, i, s) {
                this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? m.concat(e) : m
            }, !0),
            v = g.map = {},
            y = g.register = function(t, e, i, s) {
                for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                    for (n = l[_], r = s ? c("easing." + n, null, !0) : h.easing[n] || {}, a = u.length; --a > -1;) o = u[a], v[n + "." + o] = v[o + n] = r[o] = t.getRatio ? t : t[o] || new t
            };
        for (s = g.prototype, s._calcEnd = !1, s.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
            }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], i = e.length; --i > -1;) s = e[i] + ",Power" + i, y(new g(null, null, 1, i), s, "easeOut", !0), y(new g(null, null, 2, i), s, "easeIn" + (0 === i ? ",easeNone" : "")), y(new g(null, null, 3, i), s, "easeInOut");
        v.linear = h.easing.Linear.easeIn, v.swing = h.easing.Quad.easeInOut;
        var T = c("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        s = T.prototype, s.addEventListener = function(t, e, i, s, a) {
            a = a || 0;
            var o, h, l = this._listeners[t],
                _ = 0;
            for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) o = l[h], o.c === e && o.s === i ? l.splice(h, 1) : 0 === _ && a > o.pr && (_ = h + 1);
            l.splice(_, 0, {
                c: e,
                s: i,
                up: s,
                pr: a
            }), this !== r || n || r.wake()
        }, s.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s)
                for (i = s.length; --i > -1;)
                    if (s[i].c === e) return void s.splice(i, 1)
        }, s.dispatchEvent = function(t) {
            var e, i, s, r = this._listeners[t];
            if (r)
                for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s.up ? s.c.call(s.s || i, {
                    type: t,
                    target: i
                }) : s.c.call(s.s || i)
        };
        var x = t.requestAnimationFrame,
            w = t.cancelAnimationFrame,
            b = Date.now || function() {
                return (new Date).getTime()
            },
            P = b();
        for (e = ["ms", "moz", "webkit", "o"], i = e.length; --i > -1 && !x;) x = t[e[i] + "RequestAnimationFrame"], w = t[e[i] + "CancelAnimationFrame"] || t[e[i] + "CancelRequestAnimationFrame"];
        c("Ticker", function(t, e) {
            var i, s, a, o, h, l = this,
                u = b(),
                p = !1 !== e && x,
                f = function(t) {
                    P = b(), l.time = (P - u) / 1e3;
                    var e, r = l.time - h;
                    (!i || r > 0 || !0 === t) && (l.frame++, h += r + (r >= o ? .004 : o - r), e = !0), !0 !== t && (a = s(f)), e && l.dispatchEvent("tick")
                };
            T.call(l), this.time = this.frame = 0, this.tick = function() {
                f(!0)
            }, this.sleep = function() {
                null != a && (p && w ? w(a) : clearTimeout(a), s = _, a = null, l === r && (n = !1))
            }, this.wake = function() {
                null !== a && l.sleep(), s = 0 === i ? _ : p && x ? x : function(t) {
                    return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
                }, l === r && (n = !0), f(2)
            }, this.fps = function(t) {
                return arguments.length ? (i = t, o = 1 / (i || 60), h = this.time + o, void l.wake()) : i
            }, this.useRAF = function(t) {
                return arguments.length ? (l.sleep(), p = t, void l.fps(i)) : p
            }, l.fps(t), setTimeout(function() {
                p && (!a || 5 > l.frame) && l.useRAF(!1)
            }, 1500)
        }), s = h.Ticker.prototype = new h.events.EventDispatcher, s.constructor = h.Ticker;
        var S = c("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, E) {
                n || r.wake();
                var i = this.vars.useFrames ? L : E;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        r = S.ticker = new h.Ticker, s = S.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
        var R = function() {
            b() - P > 2e3 && r.wake(), setTimeout(R, 2e3)
        };
        R(), s.play = function(t, e) {
            return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
        }, s.pause = function(t, e) {
            return arguments.length && this.seek(t, e), this.paused(!0)
        }, s.resume = function(t, e) {
            return arguments.length && this.seek(t, e), this.paused(!1)
        }, s.seek = function(t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }, s.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }, s.reverse = function(t, e) {
            return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, s.render = function() {}, s.invalidate = function() {
            return this
        }, s._enabled = function(t, e) {
            return n || r.wake(), this._gc = !t, this._active = t && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, s._kill = function() {
            return this._enabled(!1, !1)
        }, s.kill = function(t, e) {
            return this._kill(t, e), this
        }, s._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, s._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, s.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = i instanceof Array && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, s.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, s.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, s.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, s.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, s.totalTime = function(t, e, i) {
            if (n || r.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                        a = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : a._time) - (this._reversed ? s - t : t) / this._timeScale, a._dirty || this._uncache(!1), a._timeline)
                        for (; a._timeline;) a._timeline._time !== (a._startTime + a._totalTime) / a._timeScale && a.totalTime(a._totalTime, !0), a = a._timeline
                }
                this._gc && this._enabled(!0, !1), this._totalTime !== t && this.render(t, e, !1)
            }
            return this
        }, s.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, s.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, s.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
        }, s.paused = function(t) {
            if (!arguments.length) return this._paused;
            if (t != this._paused && this._timeline) {
                n || t || r.wake();
                var e = this._timeline,
                    i = e.rawTime(),
                    s = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = !t && this._totalTime > 0 && this._totalTime < this._totalDuration, t || 0 === s || 0 === this._duration || this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1), this
        };
        var k = c("core.SimpleTimeline", function(t) {
            S.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        s = k.prototype = new S, s.constructor = k, s.kill()._gc = !1, s._first = s._last = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (s = t._startTime; i && i._startTime > s;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
        }, s._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
        }, s.render = function(t, e, i) {
            var s, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
        }, s.rawTime = function() {
            return n || r.wake(), this._totalTime
        };
        var A = c("TweenLite", function(e, i, s) {
                if (S.call(this, i, s), this.render = A.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : A.selector(e) || e;
                var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    h = this.vars.overwrite;
                if (this._overwrite = h = null == h ? N[A.defaultOverwrite] : "number" == typeof h ? h >> 0 : N[h], (o || e instanceof Array) && "number" != typeof e[0])
                    for (this._targets = a = l.call(e, 0), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(l.call(n, 0))) : (this._siblings[r] = z(n, this, !1), 1 === h && this._siblings[r].length > 1 && Y(n, this, null, 1, this._siblings[r])) : "string" == typeof(n = a[r--] = A.selector(n)) && a.splice(r + 1, 1) : a.splice(r--, 1);
                else this._propLookup = {}, this._siblings = z(e, this, !1), 1 === h && this._siblings.length > 1 && Y(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && this.render(-this._delay, !1, !0)
            }, !0),
            C = function(e) {
                return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            },
            O = function(t, e) {
                var i, s = {};
                for (i in t) X[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!D[i] || D[i] && D[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                t.css = s
            };
        s = A.prototype = new S, s.constructor = A, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = !1, A.version = "1.10.2", A.defaultEase = s._ease = new g(null, null, 1, 1), A.defaultOverwrite = "auto", A.ticker = r, A.autoSleep = !0, A.selector = t.$ || t.jQuery || function(e) {
            return t.$ ? (A.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
        };
        var M = A._internals = {},
            D = A._plugins = {},
            I = A._tweenLookup = {},
            F = 0,
            X = M.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            },
            N = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },
            L = S._rootFramesTimeline = new k,
            E = S._rootTimeline = new k;
        E._startTime = r.time, L._startTime = r.frame, E._active = L._active = !0, S._updateRoot = function() {
            if (E.render((r.time - E._startTime) * E._timeScale, !1, !1), L.render((r.frame - L._startTime) * L._timeScale, !1, !1), !(r.frame % 120)) {
                var t, e, i;
                for (i in I) {
                    for (e = I[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete I[i]
                }
                if ((!(i = E._first) || i._paused) && A.autoSleep && !L._first && 1 === r._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || r.sleep()
                }
            }
        }, r.addEventListener("tick", S._updateRoot);
        var z = function(t, e, i) {
                var s, r, n = t._gsTweenID;
                if (I[n || (t._gsTweenID = n = "t" + F++)] || (I[n] = {
                        target: t,
                        tweens: []
                    }), e && (s = I[n].tweens, s[r = s.length] = e, i))
                    for (; --r > -1;) s[r] === e && s.splice(r, 1);
                return I[n].tweens
            },
            Y = function(t, e, i, s, r) {
                var n, a, o, h;
                if (1 === s || s >= 4) {
                    for (h = r.length, n = 0; h > n; n++)
                        if ((o = r[n]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                        else if (5 === s) break;
                    return a
                }
                var l, _ = e._startTime + 1e-10,
                    u = [],
                    p = 0,
                    f = 0 === e._duration;
                for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || U(e, 0, f), 0 === U(o, l, f) && (u[p++] = o)) : _ >= o._startTime && o._startTime + o.totalDuration() / o._timeScale + 1e-10 > _ && ((f || !o._initted) && 2e-10 >= _ - o._startTime || (u[p++] = o)));
                for (n = p; --n > -1;) o = u[n], 2 === s && o._kill(i, t) && (a = !0), (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                return a
            },
            U = function(t, e, i) {
                for (var s = t._timeline, r = s._timeScale, n = t._startTime, a = 1e-10; s._timeline;) {
                    if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                    s = s._timeline
                }
                return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * a > n - e ? a : (n += t.totalDuration() / t._timeScale / r) > e + a ? 0 : n - e - a
            };
        s._init = function() {
            var t, e, i, s, r = this.vars,
                n = this._overwrittenProps,
                a = this._duration,
                o = r.immediateRender,
                h = r.ease;
            if (r.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = A.to(this.target, 0, r.startAt), o)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== a) return
            } else if (r.runBackwards && r.immediateRender && 0 !== a)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else if (0 === this._time) {
                i = {};
                for (s in r) X[s] && "autoCSS" !== s || (i[s] = r[s]);
                return i.overwrite = 0, void(this._startAt = A.to(this.target, 0, i))
            }
            if (this._ease = h ? h instanceof g ? r.easeParams instanceof Array ? h.config.apply(h, r.easeParams) : h : "function" == typeof h ? new g(h, r.easeParams) : v[h] || A.defaultEase : A.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], n ? n[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, n);
            if (e && A._onPluginEvent("_onInitAllProps", this), n && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, s._initProps = function(e, i, s, r) {
            var n, a, o, h, l, _;
            if (null == e) return !1;
            this.vars.css || e.style && e !== t && e.nodeType && D.css && !1 !== this.vars.autoCSS && O(this.vars, e);
            for (n in this.vars) {
                if (_ = this.vars[n], X[n]) _ instanceof Array && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                else if (D[n] && (h = new D[n])._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = l = {
                            _next: this._firstPT,
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: n,
                            pg: !0,
                            pr: h._priority
                        }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[n] = l = {
                    _next: this._firstPT,
                    t: e,
                    p: n,
                    f: "function" == typeof e[n],
                    n: n,
                    pg: !1,
                    pr: 0
                }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                l && l._next && (l._next._prev = l)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && Y(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : o
        }, s.render = function(t, e, i) {
            var s, r, n, a = this._time;
            if (t >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = t)) : this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var o = t / this._duration,
                    h = this._easeType,
                    l = this._easePower;
                (1 === h || 3 === h && o >= .5) && (o = 1 - o), 3 === h && (o *= 2), 1 === l ? o *= o : 2 === l ? o *= o * o : 3 === l ? o *= o * o * o : 4 === l && (o *= o * o * o * o), this.ratio = 1 === h ? 1 - o : 2 === h ? o : .5 > t / this._duration ? o / 2 : 1 - o / 2
            } else this.ratio = this._ease.getRatio(t / this._duration);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted) return;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || d))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || d)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || d)))
            }
        }, s._kill = function(t, e) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : A.selector(e) || e;
            var i, s, r, n, a, o, h, l;
            if ((e instanceof Array || C(e)) && "number" != typeof e[0])
                for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1;)
                        if (e === this._targets[i]) {
                            a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    h = t || a, l = t !== s && "all" !== s && t !== a && (null == t || !0 !== t._tempKill);
                    for (r in h)(n = a[r]) && (n.pg && n.t._kill(h) && (o = !0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete a[r]), l && (s[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return o
        }, s.invalidate = function() {
            return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        }, s._enabled = function(t, e) {
            if (n || r.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s)
                    for (i = s.length; --i > -1;) this._siblings[i] = z(s[i], this, !0);
                else this._siblings = z(this.target, this, !0)
            }
            return S.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, A.to = function(t, e, i) {
            return new A(t, e, i)
        }, A.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new A(t, e, i)
        }, A.fromTo = function(t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new A(t, e, s)
        }, A.delayedCall = function(t, e, i, s, r) {
            return new A(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }, A.set = function(t, e) {
            return new A(t, 0, e)
        }, A.killTweensOf = A.killDelayedCallsTo = function(t, e) {
            for (var i = A.getTweensOf(t), s = i.length; --s > -1;) i[s]._kill(e, t)
        }, A.getTweensOf = function(t) {
            if (null == t) return [];
            t = "string" != typeof t ? t : A.selector(t) || t;
            var e, i, s, r;
            if ((t instanceof Array || C(t)) && "number" != typeof t[0]) {
                for (e = t.length, i = []; --e > -1;) i = i.concat(A.getTweensOf(t[e]));
                for (e = i.length; --e > -1;)
                    for (r = i[e], s = e; --s > -1;) r === i[s] && i.splice(e, 1)
            } else
                for (i = z(t).concat(), e = i.length; --e > -1;) i[e]._gc && i.splice(e, 1);
            return i
        };
        var B = c("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = B.prototype
        }, !0);
        if (s = B.prototype, B.version = "1.10.1", B.API = 2, s._firstPT = null, s._addTween = function(t, e, i, s, r, n) {
                var a, o;
                return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: a,
                    f: "function" == typeof t[e],
                    n: r || e,
                    r: n
                }, o._next && (o._next._prev = o), o) : void 0
            }, s.setRatio = function(t) {
                for (var e, i = this._firstPT; i;) e = i.c * t + i.s, i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : 1e-6 > e && e > -1e-6 && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, s._kill = function(t) {
                var e, i = this._overwriteProps,
                    s = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                return !1
            }, s._roundProps = function(t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, A._onPluginEvent = function(t, e) {
                var i, s, r, n, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                        (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                    }
                    o = e._firstPT = r
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, B.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === B.API && (D[(new t[e])._propName] = t[e]);
                return !0
            }, f.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    s = t.priority || 0,
                    r = t.overwriteProps,
                    n = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    a = c("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        B.call(this, i, s), this._overwriteProps = r || []
                    }, !0 === t.global),
                    o = a.prototype = new B(i);
                o.constructor = a, a.API = t.API;
                for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                return a.version = t.version, B.activate([a]), a
            }, e = t._gsQueue) {
            for (i = 0; e.length > i; i++) e[i]();
            for (s in u) u[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        n = !1
    }(window);
! function() {
    var e = {},
        o = null,
        n = !0,
        t = !1;
    try {
        "undefined" != typeof AudioContext ? o = new AudioContext : "undefined" != typeof webkitAudioContext ? o = new webkitAudioContext : n = !1
    } catch (e) {
        n = !1
    }
    if (!n)
        if ("undefined" != typeof Audio) try {
            new Audio
        } catch (e) {
            t = !0
        } else t = !0;
    if (n) {
        var r = void 0 === o.createGain ? o.createGainNode() : o.createGain();
        r.gain.value = 1, r.connect(o.destination)
    }
    var a = function(e) {
        this._volume = 1, this._muted = !1, this.usingWebAudio = n, this.ctx = o, this.noAudio = t, this._howls = [], this._codecs = e, this.iOSAutoEnable = !0
    };
    a.prototype = {
        volume: function(e) {
            var o = this;
            if ((e = parseFloat(e)) >= 0 && 1 >= e) {
                o._volume = e, n && (r.gain.value = e);
                for (var t in o._howls)
                    if (o._howls.hasOwnProperty(t) && !1 === o._howls[t]._webAudio)
                        for (var a = 0; a < o._howls[t]._audioNode.length; a++) o._howls[t]._audioNode[a].volume = o._howls[t]._volume * o._volume;
                return o
            }
            return n ? r.gain.value : o._volume
        },
        mute: function() {
            return this._setMuted(!0), this
        },
        unmute: function() {
            return this._setMuted(!1), this
        },
        _setMuted: function(e) {
            var o = this;
            o._muted = e, n && (r.gain.value = e ? 0 : o._volume);
            for (var t in o._howls)
                if (o._howls.hasOwnProperty(t) && !1 === o._howls[t]._webAudio)
                    for (var a = 0; a < o._howls[t]._audioNode.length; a++) o._howls[t]._audioNode[a].muted = e
        },
        codecs: function(e) {
            return this._codecs[e]
        },
        _enableiOSAudio: function() {
            var e = this;
            if (!o || !e._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                e._iOSEnabled = !1;
                var n = function() {
                    var t = o.createBuffer(1, 1, 22050),
                        r = o.createBufferSource();
                    r.buffer = t, r.connect(o.destination), void 0 === r.start ? r.noteOn(0) : r.start(0), setTimeout(function() {
                        (r.playbackState === r.PLAYING_STATE || r.playbackState === r.FINISHED_STATE) && (e._iOSEnabled = !0, e.iOSAutoEnable = !1, window.removeEventListener("touchstart", n, !1))
                    }, 0)
                };
                return window.addEventListener("touchstart", n, !1), e
            }
        }
    };
    var i = null,
        u = {};
    t || (i = new Audio, u = {
        mp3: !!i.canPlayType("audio/mpeg;").replace(/^no$/, ""),
        opus: !!i.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
        ogg: !!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        wav: !!i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
        aac: !!i.canPlayType("audio/aac;").replace(/^no$/, ""),
        m4a: !!(i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""),
        mp4: !!(i.canPlayType("audio/x-mp4;") || i.canPlayType("audio/mp4;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""),
        weba: !!i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
    });
    var d = new a(u),
        l = function(e) {
            var t = this;
            t._autoplay = e.autoplay || !1, t._buffer = e.buffer || !1, t._duration = e.duration || 0, t._format = e.format || null, t._loop = e.loop || !1, t._loaded = !1, t._sprite = e.sprite || {}, t._src = e.src || "", t._pos3d = e.pos3d || [0, 0, -.5], t._volume = void 0 !== e.volume ? e.volume : 1, t._urls = e.urls || [], t._rate = e.rate || 1, t._model = e.model || null, t._onload = [e.onload || function() {}], t._onloaderror = [e.onloaderror || function() {}], t._onend = [e.onend || function() {}], t._onpause = [e.onpause || function() {}], t._onplay = [e.onplay || function() {}], t._onendTimer = [], t._webAudio = n && !t._buffer, t._audioNode = [], t._webAudio && t._setupAudioNode(), void 0 !== o && o && d.iOSAutoEnable && d._enableiOSAudio(), d._howls.push(t), t.load()
        };
    if (l.prototype = {
            load: function() {
                var e = this,
                    o = null;
                if (t) return void e.on("loaderror");
                for (var n = 0; n < e._urls.length; n++) {
                    var r, i;
                    if (e._format) r = e._format;
                    else {
                        if (i = e._urls[n], r = /^data:audio\/([^;,]+);/i.exec(i), r || (r = /\.([^.]+)$/.exec(i.split("?", 1)[0])), !r) return void e.on("loaderror");
                        r = r[1].toLowerCase()
                    }
                    if (u[r]) {
                        o = e._urls[n];
                        break
                    }
                }
                if (!o) return void e.on("loaderror");
                if (e._src = o, e._webAudio) f(e, o);
                else {
                    var l = new Audio;
                    l.addEventListener("error", function() {
                        l.error && 4 === l.error.code && (a.noAudio = !0), e.on("loaderror", {
                            type: l.error ? l.error.code : 0
                        })
                    }, !1), e._audioNode.push(l), l.src = o, l._pos = 0, l.preload = "auto", l.volume = d._muted ? 0 : e._volume * d.volume();
                    var _ = function() {
                        e._duration = Math.ceil(10 * l.duration) / 10, 0 === Object.getOwnPropertyNames(e._sprite).length && (e._sprite = {
                            _default: [0, 1e3 * e._duration]
                        }), e._loaded || (e._loaded = !0, e.on("load")), e._autoplay && e.play(), l.removeEventListener("canplaythrough", _, !1)
                    };
                    l.addEventListener("canplaythrough", _, !1), l.load()
                }
                return e
            },
            urls: function(e) {
                var o = this;
                return e ? (o.stop(), o._urls = "string" == typeof e ? [e] : e, o._loaded = !1, o.load(), o) : o._urls
            },
            play: function(e, n) {
                var t = this;
                return "function" == typeof e && (n = e), e && "function" != typeof e || (e = "_default"), t._loaded ? t._sprite[e] ? (t._inactiveNode(function(r) {
                    r._sprite = e;
                    var a = r._pos > 0 ? r._pos : t._sprite[e][0] / 1e3,
                        i = 0;
                    t._webAudio ? (i = t._sprite[e][1] / 1e3 - r._pos, r._pos > 0 && (a = t._sprite[e][0] / 1e3 + a)) : i = t._sprite[e][1] / 1e3 - (a - t._sprite[e][0] / 1e3);
                    var u, l = !(!t._loop && !t._sprite[e][2]),
                        f = "string" == typeof n ? n : Math.round(Date.now() * Math.random()) + "";
                    if (function() {
                            var o = {
                                id: f,
                                sprite: e,
                                loop: l
                            };
                            u = setTimeout(function() {
                                !t._webAudio && l && t.stop(o.id).play(e, o.id), t._webAudio && !l && (t._nodeById(o.id).paused = !0, t._nodeById(o.id)._pos = 0, t._clearEndTimer(o.id)), t._webAudio || l || t.stop(o.id), t.on("end", f)
                            }, 1e3 * i), t._onendTimer.push({
                                timer: u,
                                id: o.id
                            })
                        }(), t._webAudio) {
                        var _ = t._sprite[e][0] / 1e3,
                            s = t._sprite[e][1] / 1e3;
                        r.id = f, r.paused = !1, c(t, [l, _, s], f), t._playStart = o.currentTime, r.gain.value = t._volume, void 0 === r.bufferSource.start ? l ? r.bufferSource.noteGrainOn(0, a, 86400) : r.bufferSource.noteGrainOn(0, a, i) : l ? r.bufferSource.start(0, a, 86400) : r.bufferSource.start(0, a, i)
                    } else {
                        if (4 !== r.readyState && (r.readyState || !navigator.isCocoonJS)) return t._clearEndTimer(f),
                            function() {
                                var o = t,
                                    a = e,
                                    i = n,
                                    u = r,
                                    d = function() {
                                        o.play(a, i), u.removeEventListener("canplaythrough", d, !1)
                                    };
                                u.addEventListener("canplaythrough", d, !1)
                            }(), t;
                        r.readyState = 4, r.id = f, r.currentTime = a, r.muted = d._muted || r.muted, r.volume = t._volume * d.volume(), setTimeout(function() {
                            r.play()
                        }, 0)
                    }
                    return t.on("play"), "function" == typeof n && n(f), t
                }), t) : ("function" == typeof n && n(), t) : (t.on("load", function() {
                    t.play(e, n)
                }), t)
            },
            pause: function(e) {
                var o = this;
                if (!o._loaded) return o.on("play", function() {
                    o.pause(e)
                }), o;
                o._clearEndTimer(e);
                var n = e ? o._nodeById(e) : o._activeNode();
                if (n)
                    if (n._pos = o.pos(null, e), o._webAudio) {
                        if (!n.bufferSource || n.paused) return o;
                        n.paused = !0, void 0 === n.bufferSource.stop ? n.bufferSource.noteOff(0) : n.bufferSource.stop(0)
                    } else n.pause();
                return o.on("pause"), o
            },
            stop: function(e) {
                var o = this;
                if (!o._loaded) return o.on("play", function() {
                    o.stop(e)
                }), o;
                o._clearEndTimer(e);
                var n = e ? o._nodeById(e) : o._activeNode();
                if (n)
                    if (n._pos = 0, o._webAudio) {
                        if (!n.bufferSource || n.paused) return o;
                        n.paused = !0, void 0 === n.bufferSource.stop ? n.bufferSource.noteOff(0) : n.bufferSource.stop(0)
                    } else isNaN(n.duration) || (n.pause(), n.currentTime = 0);
                return o
            },
            mute: function(e) {
                var o = this;
                if (!o._loaded) return o.on("play", function() {
                    o.mute(e)
                }), o;
                var n = e ? o._nodeById(e) : o._activeNode();
                return n && (o._webAudio ? n.gain.value = 0 : n.muted = !0), o
            },
            unmute: function(e) {
                var o = this;
                if (!o._loaded) return o.on("play", function() {
                    o.unmute(e)
                }), o;
                var n = e ? o._nodeById(e) : o._activeNode();
                return n && (o._webAudio ? n.gain.value = o._volume : n.muted = !1), o
            },
            volume: function(e, o) {
                var n = this;
                if ((e = parseFloat(e)) >= 0 && 1 >= e) {
                    if (n._volume = e, !n._loaded) return n.on("play", function() {
                        n.volume(e, o)
                    }), n;
                    var t = o ? n._nodeById(o) : n._activeNode();
                    return t && (n._webAudio ? t.gain.value = e : t.volume = e * d.volume()), n
                }
                return n._volume
            },
            loop: function(e) {
                var o = this;
                return "boolean" == typeof e ? (o._loop = e, o) : o._loop
            },
            sprite: function(e) {
                var o = this;
                return "object" == typeof e ? (o._sprite = e, o) : o._sprite
            },
            pos: function(e, n) {
                var t = this;
                if (!t._loaded) return t.on("load", function() {
                    t.pos(e)
                }), "number" == typeof e ? t : t._pos || 0;
                e = parseFloat(e);
                var r = n ? t._nodeById(n) : t._activeNode();
                if (r) return e >= 0 ? (t.pause(n), r._pos = e, t.play(r._sprite, n), t) : t._webAudio ? r._pos + (o.currentTime - t._playStart) : r.currentTime;
                if (e >= 0) return t;
                for (var a = 0; a < t._audioNode.length; a++)
                    if (t._audioNode[a].paused && 4 === t._audioNode[a].readyState) return t._webAudio ? t._audioNode[a]._pos : t._audioNode[a].currentTime
            },
            pos3d: function(e, o, n, t) {
                var r = this;
                if (o = void 0 !== o && o ? o : 0, n = void 0 !== n && n ? n : -.5, !r._loaded) return r.on("play", function() {
                    r.pos3d(e, o, n, t)
                }), r;
                if (!(e >= 0 || 0 > e)) return r._pos3d;
                if (r._webAudio) {
                    var a = t ? r._nodeById(t) : r._activeNode();
                    a && (r._pos3d = [e, o, n], a.panner.setPosition(e, o, n), a.panner.panningModel = r._model || "HRTF")
                }
                return r
            },
            fade: function(e, o, n, t, r) {
                var a = this,
                    i = Math.abs(e - o),
                    u = e > o ? "down" : "up",
                    d = i / .01,
                    l = n / d;
                if (!a._loaded) return a.on("load", function() {
                    a.fade(e, o, n, t, r)
                }), a;
                a.volume(e, r);
                for (var f = 1; d >= f; f++) ! function() {
                    var e = a._volume + ("up" === u ? .01 : -.01) * f,
                        n = Math.round(1e3 * e) / 1e3,
                        i = o;
                    setTimeout(function() {
                        a.volume(n, r), n === i && t && t()
                    }, l * f)
                }()
            },
            fadeIn: function(e, o, n) {
                return this.volume(0).play().fade(0, e, o, n)
            },
            fadeOut: function(e, o, n, t) {
                var r = this;
                return r.fade(r._volume, e, o, function() {
                    n && n(), r.pause(t), r.on("end")
                }, t)
            },
            _nodeById: function(e) {
                for (var o = this, n = o._audioNode[0], t = 0; t < o._audioNode.length; t++)
                    if (o._audioNode[t].id === e) {
                        n = o._audioNode[t];
                        break
                    }
                return n
            },
            _activeNode: function() {
                for (var e = this, o = null, n = 0; n < e._audioNode.length; n++)
                    if (!e._audioNode[n].paused) {
                        o = e._audioNode[n];
                        break
                    }
                return e._drainPool(), o
            },
            _inactiveNode: function(e) {
                for (var o = this, n = null, t = 0; t < o._audioNode.length; t++)
                    if (o._audioNode[t].paused && 4 === o._audioNode[t].readyState) {
                        e(o._audioNode[t]), n = !0;
                        break
                    }
                if (o._drainPool(), !n) {
                    var r;
                    if (o._webAudio) r = o._setupAudioNode(), e(r);
                    else {
                        o.load(), r = o._audioNode[o._audioNode.length - 1];
                        var a = navigator.isCocoonJS ? "canplaythrough" : "loadedmetadata",
                            i = function() {
                                r.removeEventListener(a, i, !1), e(r)
                            };
                        r.addEventListener(a, i, !1)
                    }
                }
            },
            _drainPool: function() {
                var e, o = this,
                    n = 0;
                for (e = 0; e < o._audioNode.length; e++) o._audioNode[e].paused && n++;
                for (e = o._audioNode.length - 1; e >= 0 && !(5 >= n); e--) o._audioNode[e].paused && (o._webAudio && o._audioNode[e].disconnect(0), n--, o._audioNode.splice(e, 1))
            },
            _clearEndTimer: function(e) {
                for (var o = this, n = 0, t = 0; t < o._onendTimer.length; t++)
                    if (o._onendTimer[t].id === e) {
                        n = t;
                        break
                    }
                var r = o._onendTimer[n];
                r && (clearTimeout(r.timer), o._onendTimer.splice(n, 1))
            },
            _setupAudioNode: function() {
                var e = this,
                    n = e._audioNode,
                    t = e._audioNode.length;
                return n[t] = void 0 === o.createGain ? o.createGainNode() : o.createGain(), n[t].gain.value = e._volume, n[t].paused = !0, n[t]._pos = 0, n[t].readyState = 4, n[t].connect(r), n[t].panner = o.createPanner(), n[t].panner.panningModel = e._model || "equalpower", n[t].panner.setPosition(e._pos3d[0], e._pos3d[1], e._pos3d[2]), n[t].panner.connect(n[t]), n[t]
            },
            on: function(e, o) {
                var n = this,
                    t = n["_on" + e];
                if ("function" == typeof o) t.push(o);
                else
                    for (var r = 0; r < t.length; r++) o ? t[r].call(n, o) : t[r].call(n);
                return n
            },
            off: function(e, o) {
                var n = this,
                    t = n["_on" + e],
                    r = o ? o.toString() : null;
                if (r) {
                    for (var a = 0; a < t.length; a++)
                        if (r === t[a].toString()) {
                            t.splice(a, 1);
                            break
                        }
                } else n["_on" + e] = [];
                return n
            },
            unload: function() {
                for (var o = this, n = o._audioNode, t = 0; t < o._audioNode.length; t++) n[t].paused || (o.stop(n[t].id), o.on("end", n[t].id)), o._webAudio ? n[t].disconnect(0) : n[t].src = "";
                for (t = 0; t < o._onendTimer.length; t++) clearTimeout(o._onendTimer[t].timer);
                var r = d._howls.indexOf(o);
                null !== r && r >= 0 && d._howls.splice(r, 1), delete e[o._src], o = null
            }
        }, n) var f = function(o, n) {
            if (n in e) return o._duration = e[n].duration, void s(o);
            if (/^data:[^;]+;base64,/.test(n)) {
                for (var t = atob(n.split(",")[1]), r = new Uint8Array(t.length), a = 0; a < t.length; ++a) r[a] = t.charCodeAt(a);
                _(r.buffer, o, n)
            } else {
                var i = new XMLHttpRequest;
                i.open("GET", n, !0), i.responseType = "arraybuffer", i.onload = function() {
                    _(i.response, o, n)
                }, i.onerror = function() {
                    o._webAudio && (o._buffer = !0, o._webAudio = !1, o._audioNode = [], delete o._gainNode, delete e[n], o.load())
                };
                try {
                    i.send()
                } catch (e) {
                    i.onerror()
                }
            }
        },
        _ = function(n, t, r) {
            o.decodeAudioData(n, function(o) {
                o && (e[r] = o, s(t, o))
            }, function(e) {
                t.on("loaderror")
            })
        },
        s = function(e, o) {
            e._duration = o ? o.duration : e._duration, 0 === Object.getOwnPropertyNames(e._sprite).length && (e._sprite = {
                _default: [0, 1e3 * e._duration]
            }), e._loaded || (e._loaded = !0, e.on("load")), e._autoplay && e.play()
        },
        c = function(n, t, r) {
            var a = n._nodeById(r);
            a.bufferSource = o.createBufferSource(), a.bufferSource.buffer = e[n._src], a.bufferSource.connect(a.panner), a.bufferSource.loop = t[0], t[0] && (a.bufferSource.loopStart = t[1], a.bufferSource.loopEnd = t[1] + t[2]), a.bufferSource.playbackRate.value = n._rate
        };
    "function" == typeof define && define.amd && define(function() {
        return {
            Howler: d,
            Howl: l
        }
    }), "undefined" != typeof exports && (exports.Howler = d, exports.Howl = l), "undefined" != typeof window && (window.Howler = d, window.Howl = l)
}();
var vis = function() {
    var i, e, n = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
    };
    for (i in n)
        if (i in document) {
            e = n[i];
            break
        }
    return function(n) {
        return n && document.addEventListener(e, n), !document[i]
    }
}();
vis(function() {
    vis() ? setTimeout(function() {
        visibleResume()
    }, 300) : visiblePause()
});
var notIE = void 0 === document.documentMode,
    isChromium = window.chrome;
notIE && !isChromium || (window.addEventListener ? (window.addEventListener("focus", function(i) {
    setTimeout(function() {
        visibleResume()
    }, 300)
}, !1), window.addEventListener("blur", function(i) {
        visiblePause()
}, !1)) : (window.attachEvent("focus", function(i) {
    setTimeout(function() {
        visibleResume()
    }, 300)
}), window.attachEvent("blur", function(i) {
    visiblePause()
})));

function visibleResume() {
    muted || manualPause || Howler.unmute()
}

function visiblePause() {
    Howler.mute()
}

function isStock() {
    var t = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
    return t && parseFloat(t[1]) < 537
}

function initSplash() {
	gradle.event('splash');
    gameState = "splash", resizeCanvas(), 1 != audioType || muted || music.play(), 
	window.gradle_onPauseRequested = function() {
		window.gradle_unmuteAfterPause = !muted, muted || toggleMute()
    }, 
	window.gradle_onResumeRequested = function() {
        window.gradle_unmuteAfterPause && muted && toggleMute(), window.gradle_unmuteAfterPause = !1
    }, textDisplay = new Utils.TextDisplay, aLevelData = assetLib.textData.levelData.text, totalScore = saveDataHandler.getTotalScore(), initStartScreen()
}

function initStartScreen() {
    gameState = "start", 
	userInput.removeHitArea("moreGames"), 
	muted || 1 != audioType || (musicTween && musicTween.kill(), musicTween = TweenLite.to(music, 1, {
        volume: .2,
        ease: "Linear.easeNone"
    })), 
	totalScore = saveDataHandler.getTotalScore(), 
	background = new Elements.Background, 
	background.renderState = "ripple", 
	background.setBackground(0), 
	
	aFallingBubbles = new Array;
    for (var t = 0; t < 10; t++) {
        var a = new Elements.BasicFallingBubble;
        aFallingBubbles.push(a)
    }
    
	userInput.addHitArea("mute", butEventHandler, null, "rect", {
        aRect: [372, 0, 445, 52]
    }, !0);
    
	var e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2, 500],
            id: oImageIds.bigPlayBut
        },
        i = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [72, 650],
            id: oImageIds.infoBut,
            noMove: !0
        },
        s = {
            oImgData: assetLib.getData("moreGamesBut"),
            aPos: [350, 650],
            id: "none",
            scale: .28,
            noMove: !0
        };
    userInput.addHitArea("startScreenPlayBut", butEventHandler, {
        multiTouch: !0
    }, "image", e), 
	userInput.addHitArea("moreGames", butEventHandler, null, "image", s), 
	userInput.addHitArea("credits", butEventHandler, null, "image", i);
    
	var o = new Array(e, i, s);
    panel = new Elements.Panel(gameState, o), 
	panel.startTween1(), 
	previousTime = (new Date).getTime(), 
	updateStartScreenEvent();
}

function initMapScreen() {
    gameState = "map", muted || 1 != audioType || (musicTween && musicTween.kill(), musicTween = TweenLite.to(music, .5, {
        volume: .2,
        ease: "Linear.easeNone"
    })), totalScore = saveDataHandler.getTotalScore(), userInput.addHitArea("mute", butEventHandler, null, "rect", {
        aRect: [372, 0, 445, 52]
    }, !0);
    var t = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [72, 650],
        id: oImageIds.backBut,
        noMove: !0
    };
    userInput.addHitArea("backFromMap", butEventHandler, null, "image", t);
    var a = new Array(t);
    panel = new Elements.Panel(gameState, a);
    var e = 1400;
    userInput.addHitArea("mapTouch", butEventHandler, {
        isDraggable: !0,
        multiTouch: !0
    }, "rect", {
        aRect: [0, 0, canvas.width, canvas.height]
    }, !0), panel.mapDragY = 1e4, panel.mapButIdToHighlight = -1;
    for (var i = 0; i < aMapButs.length; i++) aMapButs[i][1] < e && saveDataHandler.getStars(i) > 0 && (e = aMapButs[i][1]), 1 == saveDataHandler.getStars(i) && 0 == saveDataHandler.getScore(i) && (panel.mapButIdToHighlight = i);
    panel.mapPosY = panel.mapPosRealY = Math.max(Math.min(e - canvas.height / 2, 1400 - canvas.height), 0), panel.startTween1(), aGlints = new Array;
    for (var i = 0; i < 5; i++) {
        var s = new Elements.Glint(i, "map");
        aGlints.push(s)
    }
    previousTime = (new Date).getTime(), updateMapScreenEvent()
}

function initCreditsScreen() {
    gameState = "credits", userInput.addHitArea("mute", butEventHandler, null, "rect", {
        aRect: [372, 0, 445, 52]
    }, !0);
    var t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [72, 650],
            id: oImageIds.backBut
        },
        a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [72, 50],
            id: oImageIds.resetBut,
            noMove: !0
        };
    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", t), userInput.addHitArea("resetGame", butEventHandler, null, "image", a);
    var e = new Array(t, a);
    panel = new Elements.Panel(gameState, e), panel.startTween2(), previousTime = (new Date).getTime(), updateCreditsScreenEvent()
}

function initGame() {
    gameState = "game", background = new Elements.Background, background.renderState = "none", levelReset(), previousTime = (new Date).getTime(), updateGameEvent()
}

function levelReset() {
    muted || 1 != audioType || (musicTween.kill(), musicTween = TweenLite.to(music, 1, {
        volume: .4,
        ease: "Linear.easeNone"
    })), gameTouchState = 3, curPopChain = -1, curStarLevel = 0, gameIsInPlay = !0, levelScore = 0, totalScore = saveDataHandler.getTotalScore() - saveDataHandler.getScore(levelNum), gameControlState = !0, aimX = bubbleStartX, aimY = 0, aimRot = 90 * radian, animTextY = -100, startPanelInc = 0, firstPop = !0, aAllowedBubbleStates = new Array(0, 0, 0, 0, 0);
    for (var t = 0; t < aLevelData[levelNum]["@grid"].length; t++)
        if (-1 != aLevelData[levelNum]["@grid"][t]) {
            var a = aLevelData[levelNum]["@grid"][t];
            a < 5 && (aAllowedBubbleStates[a] = !0)
        }
    flame = new Elements.Flame, hud = new Elements.Hud, panel = new Elements.Panel("startPanel", new Array), panel.startTween1(), setTimeout(function() {
        userInput.addHitArea("startPanelTouch", butEventHandler, {
            multiTouch: !0
        }, "rect", {
            aRect: [0, 0, canvas.width, canvas.height]
        }, !0), userInput.addHitArea("pause", butEventHandler, null, "rect", {
            aRect: [372, 0, 445, 52]
        }, !0)
    }, 1e3), userBubble = new Elements.UserBubble, aFallingBubbles = new Array, launcher = new Elements.Launcher, launcher.x = bubbleStartX, launcher.y = bubbleStartY, bubbleStack = new Elements.BubbleStack(aLevelData[levelNum]["@grid"]), aStarMarkers = new Array, starBarLength = 0, aStarMarkers.push(aLevelData[levelNum]["@1Star"]), aStarMarkers.push(aLevelData[levelNum]["@2Star"]), aStarMarkers.push(aLevelData[levelNum]["@3Star"]), background.setBackground(aLevelData[levelNum]["@levelTheme"]), 0 == aLevelData[levelNum]["@levelType"] ? (bubbleTargNum = aLevelData[levelNum]["@bTargNum"], bubbleTargId = aLevelData[levelNum]["@bTargId"]) : bubbleTargNum = 0, bubblesToFire = 0 != aLevelData[levelNum]["@bLimit"] ? aLevelData[levelNum]["@bLimit"] - 1 : 0, playSound("startLevel"), aGlints = new Array;
    for (var t = 0; t < 5; t++) {
        var e = new Elements.Glint(t, "game");
        aGlints.push(e)
    }
    aEffects = new Array
}

function butEventHandler(t, a) {
	if(t=='startScreenPlayBut')a.isDown || gradle.event(t,a);
    else gradle.event(t,a);
	switch (t) {
        case "langSelect":
            curLang = a.lang, ctx.clearRect(0, 0, canvas.width, canvas.height), userInput.removeHitArea("langSelect"), preAssetLib = new Utils.AssetLoader(curLang, [{
                id: "preloadImage",
                file: "images/preloadImage.png"
            }], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLoadAssets);
            break;
        case "startScreenPlayBut":
            a.isDown || (playSound("click"), userInput.removeHitArea("startScreenPlayBut"), userInput.removeHitArea("mute"), userInput.removeHitArea("credits"), userInput.removeHitArea("moreGames"), initMapScreen());
            break;
        case "backFromMap":
            playSound("click"), userInput.removeHitArea("mute"), userInput.removeHitArea("backFromMap"), userInput.removeHitArea("mapTouch"), initStartScreen();
            break;
        case "mapTouch":
            if (a.isBeingDragged && !a.hasLeft) panel.mapPosY = Math.max(Math.min(panel.mapStartY - a.y, 1400 - canvas.height), 0);
            else if (a.isDown) panel.mapTween && panel.mapTween.kill(), toggleMapButs(!1), panel.mapStartY = panel.mapPosRealY + a.y, panel.mapDragY = a.y;
            else if (toggleMapButs(!0), Math.abs(panel.mapDragY - a.y) < 10)
                for (var e = 0; e < aMapButs.length; e++)
                    if (saveDataHandler.getStars(e) > 0 && a.x > aMapButs[e][0] - 22 && a.x < aMapButs[e][0] + 22 && a.y + panel.mapPosY > aMapButs[e][1] - 22 && a.y + panel.mapPosY < aMapButs[e][1] + 22) {
                        levelNum = e, 
						userInput.removeHitArea("mute"), 
						userInput.removeHitArea("backFromMap"), 
						userInput.removeHitArea("mapTouch"), 
						gradle.event('initGame'),
						initGame();
                        break;
                    }
            break;
        case "credits":
            playSound("click"), userInput.removeHitArea("startScreenPlayBut"), userInput.removeHitArea("mute"), userInput.removeHitArea("credits"), userInput.removeHitArea("moreGames"), initCreditsScreen();
            break;
        case "backFromCredits":
            playSound("click"), userInput.removeHitArea("backFromCredits"), userInput.removeHitArea("resetGame"), initStartScreen();
            break;
        case "resetGame":
            playSound("click"), userInput.removeHitArea("backFromCredits"), userInput.removeHitArea("resetGame"), saveDataHandler.resetData(), initStartScreen();
            break;
        case "moreGames":
        case "moreGamesPause":
            playSound("click");
            
            break;
        case "switchBubble":
            if (a.isDown) {
                var i = hud.nextBubbleId;
                hud.nextBubbleId = userBubble.id, userBubble.id = i, playSound("switchBubbles"), toggleGameTouch(!1), 0 == gameTouchState && (gameTouchState = 2)
            } else toggleGameTouch(!0), gameTouchState = 0;
            break;
        case "firstGameTouch":
            a.isDown || (userInput.removeHitArea("firstGameTouch"), userInput.addHitArea("gameTouch", butEventHandler, {
                isDraggable: !0,
                multiTouch: !0
            }, "rect", {
                aRect: [0, 0, canvas.width, canvas.height]
            }, !0));
            break;
        case "startPanelTouch":
            startPanelInc = 100, aimX = a.x, aimY = a.y;
            break;
        case "gameTouch":
            if (gameTouchState >= 2 || a.y > bubbleStartY - ballRadius && a.y < bubbleStartY + ballRadius && a.x > bubbleStartX - ballRadius && a.x < bubbleStartX + ballRadius) return launcher.aimLineAlpha = 0, void toggleHudButs(!0);
            if (a.isBeingDragged && !a.hasLeft) 0 == gameTouchState && (aimX = a.x, aimY = a.y, launcher.aimLineAlpha = 1);
            else if (a.isDown) aimClickStartY = a.y, 0 == gameTouchState && (toggleHudButs(!1), aimX = a.x, aimY = a.y), a.hasLeft ? launcher.aimLineAlpha = 0 : launcher.aimLineAlpha = 1;
            else if (toggleHudButs(!0), 0 == gameTouchState) return playSound("fire" + Math.floor(4 * Math.random())), gameTouchState = 2, userBubble.shoot(), void(launcher.aimLineAlpha = 0);
            break;
        case "mute":
            manualPause || (playSound("click"), toggleMute());
            break;
        case "muteFromPause":
            playSound("click"), toggleMute();
            var s = assetLib.getData("uiButs"),
                i = 0;
            muted && (i = 1);
            var o = (assetLib.getData("uiButs"), canvas.width, oImageIds.muteBut1, s.oData.oAtlasData[oImageIds["muteBut" + i]].x),
                h = s.oData.oAtlasData[oImageIds["muteBut" + i]].y,
                r = s.oData.oAtlasData[oImageIds["muteBut" + i]].width,
                l = s.oData.oAtlasData[oImageIds["muteBut" + i]].height;
            ctx.drawImage(s.img, o + 26, h + 12, r - 52, l - 24, canvas.width / 2 - 70 - (r - 52) / 2, 355 - (l - 24) / 2, r - 52, l - 24);
            break;
        case "pause":
            playSound("click"), toggleManualPause();
            break;
        case "resumeFromPause":
            a.isDown || (playSound("click"), toggleManualPause());
            break;
        case "menuFromPause":
            a.isDown || (playSound("click"), toggleManualPause(), userInput.removeHitArea("pause"), userInput.removeHitArea("firstGameTouch"), userInput.removeHitArea("startPanelTouch"), userInput.removeHitArea("gameTouch"), userInput.removeHitArea("switchBubble"), userInput.removeHitArea("retryFromPause"), userInput.removeHitArea("resumeFromPause"), userInput.removeHitArea("muteFromPause"), userInput.removeHitArea("menuFromPause"), initMapScreen());
            break;
        case "retryFromPause":
            a.isDown || (playSound("click"), toggleManualPause(), userInput.removeHitArea("pause"), userInput.removeHitArea("firstGameTouch"), userInput.removeHitArea("startPanelTouch"), userInput.removeHitArea("gameTouch"), userInput.removeHitArea("switchBubble"), userInput.removeHitArea("retryFromPause"), userInput.removeHitArea("resumeFromPause"), userInput.removeHitArea("muteFromPause"), userInput.removeHitArea("menuFromPause"), initGame());
            break;
        case "retryLevel":
            userInput.removeHitArea("retryLevel"), userInput.removeHitArea("nextLevel"), levelReset();
            break;
        case "retryFromFail":
            userInput.removeHitArea("retryFromFail"), userInput.removeHitArea("menuFromFail"), levelReset();
            break;
        case "menuFromFail":
            userInput.removeHitArea("retryFromFail"), userInput.removeHitArea("menuFromFail"), initMapScreen();
            break;
        case "nextLevel":
            userInput.removeHitArea("retryLevel"), userInput.removeHitArea("nextLevel"), levelNum++, console.log(levelNum, aLevelData.length), levelNum >= aLevelData.length ? (levelNum = 0, initMapScreen()) : levelReset()
    }
}

function addFallingBubble(t, a, e, i, s) {
    void 0 === i && (i = null), void 0 === s && (s = null), t > 9 && t < 15 && playSound("gemRelease");
    var o = new Elements.FallingBubble(i, s, t);
    o.x = a, o.y = e, aFallingBubbles.push(o), 0 == aLevelData[levelNum]["@levelType"] && (0 != bubbleTargId && t != bubbleTargId - 1 || gameIsInPlay && --bubbleTargNum <= 0 && (bubbleTargNum = 0, gameIsInPlay = !1, initLevelCompleteSequence()))
}

function addFirework(t, a, e) {
    var i = new Elements.Firework(t);
    i.x = a, i.y = e, i.scaleX = i.scaleY = 1, aEffects.push(i)
}

function addPop(t, a, e, i) {
    var s;
    s = 9 == i ? 500 : getPopScore();
    var o = new Elements.Pop(e, i, s);
    if (o.x = t, o.y = a, aEffects.push(o), updateScore(s), 0 == aLevelData[levelNum]["@levelType"] && (0 == bubbleTargId || i == bubbleTargId - 1)) {
        if (firstPop) return void(firstPop = !1);
        gameIsInPlay && --bubbleTargNum <= 0 && (bubbleTargNum = 0, gameIsInPlay = !1, initLevelCompleteSequence())
    }
}

function initLevelCompleteSequence() {
    setTimeout(function() {
        initBubbleRain()
    }, 100), muted || 1 != audioType || (musicTween && musicTween.kill(), musicTween = TweenLite.to(music, .1, {
        volume: .1,
        ease: "Linear.easeNone"
    })), userInput.removeHitArea("pause"), userInput.removeHitArea("gameTouch"), userInput.removeHitArea("switchBubble"), gameControlState = !1, displayInGameText("levelComplete", .3, initLevelComplete), playSound("levelSuccess"), aGlints = new Array
}

function initLevelComplete() {
    muted || 1 != audioType || (musicTween && musicTween.kill(), musicTween = TweenLite.to(music, .5, {
        volume: .4,
        ease: "Linear.easeNone"
    }));
    var t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [65, 650],
            id: oImageIds.retryBut,
            scale: .75
        },
        a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2, 445],
            id: oImageIds.nextBut
        };
    userInput.addHitArea("retryLevel", butEventHandler, null, "image", t), userInput.addHitArea("nextLevel", butEventHandler, null, "image", a);
    var e = new Array(t, a),
        i = 0;
    starBarLength >= aStarMarkers[2] / aStarMarkers[2] ? i = 3 : starBarLength >= aStarMarkers[1] / aStarMarkers[2] ? i = 2 : starBarLength >= aStarMarkers[0] / aStarMarkers[2] && (i = 1), saveDataHandler.setData(levelNum, i, levelScore), saveDataHandler.saveData();
    try {
        window.gradle.submitHighscore(levelNum, totalScore)
    } catch (t) {}
    panel = new Elements.Panel("endPanel", e), panel.startTween1()
}

function initLevelFailSequence() {
    userInput.removeHitArea("pause"), userInput.removeHitArea("gameTouch"), userInput.removeHitArea("switchBubble"), gameControlState = !1, displayInGameText("outOfBubbles", .3, initLevelFail), muted || 1 != audioType || (musicTween && musicTween.kill(), musicTween = TweenLite.to(music, .1, {
        volume: .1,
        ease: "Linear.easeNone"
    })), playSound("levelFail"), aGlints = new Array
}

function initLevelFail() {
    muted || 1 != audioType || (musicTween && musicTween.kill(), musicTween = TweenLite.to(music, .5, {
        volume: .4,
        ease: "Linear.easeNone"
    }));
    var t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2 - 70, 450],
            id: oImageIds.retryBut
        },
        a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2 + 70, 450],
            id: oImageIds.menuBut
        };
    userInput.addHitArea("retryFromFail", butEventHandler, null, "image", t), userInput.addHitArea("menuFromFail", butEventHandler, null, "image", a);
    var e = new Array(t, a);
    panel = new Elements.Panel("endFailPanel", e), panel.startTween1()
}

function initBubbleRain() {
    for (var t = 0; t < bubbleStack.aBubblePos.length; t++) addFallingBubble(bubbleStack.aBubblePos[t].id, bubbleStack.aBubblePos[t].x, bubbleStack.aBubblePos[t].y + bubbleStack.ceiling, null, 10 * Math.random()), bubbleStack.aBubblePos.splice(t, 1), t -= 1
}

function displayInGameText(t, a, e) {
    void 0 === a && (a = 0), void 0 === e && (e = null);
    var i = this;
    inGameText = t, animTextY = -100, messageTween && messageTween.kill(), messageTween = TweenLite.to(this, .4, {
        animTextY: 290,
        ease: "Back.easeOut",
        delay: a,
        onComplete: function() {
            TweenLite.to(i, .4, {
                animTextY: -100,
                delay: .7,
                ease: "Back.easeIn",
                onComplete: function() {
                    e && e()
                }
            })
        }
    })
}

function getPopScore() {
    return aPopScores[Math.min(curPopChain, aPopScores.length - 1)]
}

function toggleHudButs(t) {
    t ? (userInput.addHitArea("pause", butEventHandler, null, "rect", {
        aRect: [372, 0, 445, 52]
    }, !0), userInput.addHitArea("switchBubble", butEventHandler, {
        multiTouch: !0
    }, "rect", {
        aRect: [48, 545, 119, 663]
    }, !0), userInput.addHitArea("gameTouch", butEventHandler, {
        isDraggable: !0,
        multiTouch: !0
    }, "rect", {
        aRect: [0, 0, canvas.width, canvas.height]
    }, !0)) : (userInput.removeHitArea("pause"), userInput.removeHitArea("switchBubble"))
}

function toggleMapButs(t) {
    if (t) {
        userInput.addHitArea("mute", butEventHandler, null, "rect", {
            aRect: [372, 0, 445, 52]
        }, !0);
        var a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [55, canvas.height - 45],
            id: oImageIds.backBut,
            noMove: !0
        };
        userInput.addHitArea("backFromMap", butEventHandler, null, "image", a), userInput.addHitArea("mapTouch", butEventHandler, {
            isDraggable: !0,
            multiTouch: !0
        }, "rect", {
            aRect: [0, 0, canvas.width, canvas.height]
        }, !0)
    } else userInput.removeHitArea("mute"), userInput.removeHitArea("backFromMap")
}

function toggleGameTouch(t) {
    t ? userInput.addHitArea("gameTouch", butEventHandler, {
        isDraggable: !0,
        multiTouch: !0
    }, "rect", {
        aRect: [0, 0, canvas.width, canvas.height]
    }, !0) : (userInput.removeHitArea("firstGameTouch"), userInput.removeHitArea("gameTouch"))
}

function updateScore(t) {
    levelScore += t, totalScore += t, starBarLength = Math.min(levelScore / aStarMarkers[2], 1), curStarLevel < 3 && starBarLength >= aStarMarkers[curStarLevel] / aStarMarkers[2] && (playSound("starProgress"), curStarLevel++)
}

function setAimRot() {
    var t = bubbleStartX - aimX,
        a = bubbleStartY - aimY,
        e = Math.atan2(a, t);
    aimClickStartY > bubbleStartY ? (aimingFlipped = !0, aimRot = Math.max(Math.min(160 * radian, e + 180 * radian), 20 * radian), aimX > canvas.width / 2 && aimRot == 160 * radian && (aimRot = 20 * radian)) : (aimRot = Math.max(Math.min(160 * radian, e), 20 * radian), aimingFlipped = !1, aimX > canvas.width / 2 && aimRot == 20 * radian && (aimRot = 160 * radian))
}

function updateGameEvent() {
    if (!manualPause && !rotatePause && "game" == gameState) {
        delta = getDelta(), setAimRot(), background.update(), background.render(), bubbleStack.update(), bubbleStack.render();
        for (var t = 0; t < aGlints.length; t++) aGlints[t].updateInGame(), aGlints[t].render();
        hud.renderUnder(), flame.update(), flame.render(), launcher.update(), launcher.render(), userBubble.update(), userBubble.render(), hud.renderOver();
        for (var t = 0; t < aFallingBubbles.length; t++) aFallingBubbles[t].update(), aFallingBubbles[t].render(), aFallingBubbles[t].removeMe && (aFallingBubbles.splice(t, 1), updateScore(10), t -= 1);
        for (var t = 0; t < aEffects.length; t++) aEffects[t].update(), aEffects[t].render(), aEffects[t].removeMe && (aEffects.splice(t, 1), t -= 1);
        if (panel.posY < 550) {
            if (panel.render(ctx), startPanelInc >= 0 && (startPanelInc += delta), startPanelInc > 3) {
                startPanelInc = -1, userInput.removeHitArea("startPanelTouch");
                var a = function() {
                    userInput.addHitArea("pause", butEventHandler, null, "rect", {
                        aRect: [372, 0, 445, 52]
                    }, !0), userInput.addHitArea("switchBubble", butEventHandler, {
                        multiTouch: !0
                    }, "rect", {
                        aRect: [48, 545, 119, 663]
                    }, !0), userInput.addHitArea("gameTouch", butEventHandler, {
                        isDraggable: !0,
                        multiTouch: !0
                    }, "rect", {
                        aRect: [0, 0, canvas.width, canvas.height]
                    }, !0)
                };
                panel.tweenOffScreen(a)
            }
            "endPanel" == panel.panelType && Math.random() < .05 && addFirework(Math.floor(2 * Math.random()), Math.random() * (canvas.width - 200) + 100, Math.random() * (canvas.height - 200) + 100)
        }
        if (animTextY > -50) {
            var e = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].x,
                i = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].y,
                s = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].width,
                o = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].height;
            ctx.drawImage(panel.oGameElementsImgData.img, e, i, s, o, canvas.width / 2 - s / 2, animTextY - o / 2, s, o);
            var h = {
                text: inGameText,
                x: canvas.width / 2,
                y: animTextY,
                alignX: "centre",
                alignY: "centre",
                scale: 1,
                lineOffsetY: -5,
                anim: !0,
                maxWidth: 400
            };
            textDisplay.renderText(h)
        }
        requestAnimFrame(updateGameEvent)
    }
}

function updateCreditsScreenEvent() {
    rotatePause || "credits" != gameState || (delta = getDelta(), panel.update(delta), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateCreditsScreenEvent))
}

function updateLevelComplete() {
    rotatePause || "levelComplete" != gameState || (delta = getDelta(), background.render(), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateLevelComplete))
}

function updateGameEndFail() {
    rotatePause || "gameEndFail" != gameState || (delta = getDelta(), background.render(), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateGameEndFail))
}

function updateSplashScreenEvent() {
    if (!rotatePause && "splash" == gameState) {
        if (delta = getDelta(), (splashTimer += delta) > 2.5) return 1 != audioType || muted || music.play(), void initStartScreen();
        splash.render(ctx, delta), requestAnimFrame(updateSplashScreenEvent)
    }
}

function updateStartScreenEvent() {
    if (!rotatePause && "start" == gameState) {
        delta = getDelta(), background.update(), background.render();
        for (var t = 0; t < aFallingBubbles.length; t++) aFallingBubbles[t].update(), aFallingBubbles[t].render();
        panel.update(delta), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateStartScreenEvent)
    }
}

function updateMapScreenEvent() {
    if (!rotatePause && "map" == gameState) {
        delta = getDelta(), panel.update(delta), panel.render(ctx), renderMuteBut();
        for (var t = 0; t < aGlints.length; t++) aGlints[t].updateInMap(), aGlints[t].render();
        requestAnimFrame(updateMapScreenEvent)
    }
}

function getDelta() {
    var t = (new Date).getTime(),
        a = (t - previousTime) / 1e3;
    return previousTime = t, a > .5 && (a = 0), a
}

function checkSpriteCollision(t, a) {
    var e = t.x,
        i = t.y,
        s = a.x,
        o = a.y;
    return (e - s) * (e - s) + (i - o) * (i - o) < t.radius * a.radius
}

function getScaleImageToMax(t, a) {
    return t.isSpriteSheet ? a[0] / t.oData.spriteWidth < a[1] / t.oData.spriteHeight ? Math.min(a[0] / t.oData.spriteWidth, 1) : Math.min(a[1] / t.oData.spriteHeight, 1) : a[0] / t.img.width < a[1] / t.img.height ? Math.min(a[0] / t.img.width, 1) : Math.min(a[1] / t.img.height, 1)
}

function getCentreFromTopLeft(t, a, e) {
    var i = new Array;
    return i.push(t[0] + a.oData.spriteWidth / 2 * e), i.push(t[1] + a.oData.spriteHeight / 2 * e), i
}

function loadPreAssets() {
    if (aLangs.length > 1) {
        for (var t = new Array, a = 0; a < aLangs.length; a++) t.push({
            id: "lang" + aLangs[a],
            file: "images/lang" + aLangs[a] + ".png"
        });
        preAssetLib = new Utils.AssetLoader(curLang, t, ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLangSelect)
    } else curLang = aLangs[0], preAssetLib = new Utils.AssetLoader(curLang, [{
        id: "preloadImage",
        file: "images/preloadImage.png"
    }], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLoadAssets)
}

function initLangSelect() {
    for (var t, a, e, i = 0, s = 0, o = 0; o < aLangs.length && (t = preAssetLib.getData("lang" + aLangs[o]), (o + 1) * (1 * t.img.width) + 10 * (o + 2) < canvas.width); o++) i++;
    s = Math.ceil(aLangs.length / i);
    for (var o = 0; o < aLangs.length; o++) {
        t = preAssetLib.getData("lang" + aLangs[o]), a = canvas.width / 2 - i / 2 * (1 * t.img.width) - (i - 1) / 2 * 10, a += o % i * (1 * t.img.width + 10), e = canvas.height / 2 - s / 2 * (1 * t.img.height) - (s - 1) / 2 * 10, e += Math.floor(o / i) % s * (1 * t.img.height + 10), ctx.drawImage(t.img, 0, 0, t.img.width, t.img.height, a, e, 1 * t.img.width, 1 * t.img.height);
        var h = {
            oImgData: t,
            aPos: [a + 1 * t.img.width / 2, e + 1 * t.img.height / 2],
            scale: 1,
            id: "none",
            noMove: !0
        };
        userInput.addHitArea("langSelect", butEventHandler, {
            lang: aLangs[o]
        }, "image", h)
    }
}

function initLoadAssets() {
    loadAssets()
}

function loadAssets() {
    var t;
    try {
        t = window.gradle.getMoreGamesButtonImage()
    } catch (a) {
        t = "images/more_games.png"
    }
    assetLib = new Utils.AssetLoader(curLang, [{
        id: "background0",
        file: "images/background0.jpg"
    }, {
        id: "background1",
        file: "images/background1.jpg"
    }, {
        id: "background2",
        file: "images/background2.jpg"
    }, {
        id: "background3",
        file: "images/background3.jpg"
    }, {
        id: "background4",
        file: "images/background4.jpg"
    }, {
        id: "rotateDeviceMessage",
        file: "images/rotateDeviceMessage.jpg"
    }, {
        id: "splash",
        file: "images/splashScreen.jpg"
    }, {
        id: "hud",
        file: "images/hud_450x700.png"
    }, {
        id: "muteBut",
        file: "images/mute_54x50.png"
    }, {
        id: "uiButs",
        file: "images/uiButs.png",
        oAtlasData: {
            id0: {
                x: 180,
                y: 0,
                width: 129,
                height: 86
            },
            id1: {
                x: 0,
                y: 216,
                width: 129,
                height: 86
            },
            id10: {
                x: 262,
                y: 322,
                width: 61,
                height: 56
            },
            id11: {
                x: 131,
                y: 128,
                width: 129,
                height: 86
            },
            id12: {
                x: 0,
                y: 0,
                width: 178,
                height: 126
            },
            id13: {
                x: 311,
                y: 0,
                width: 54,
                height: 50
            },
            id14: {
                x: 0,
                y: 304,
                width: 129,
                height: 86
            },
            id15: {
                x: 0,
                y: 128,
                width: 129,
                height: 86
            },
            id2: {
                x: 262,
                y: 88,
                width: 129,
                height: 86
            },
            id3: {
                x: 262,
                y: 176,
                width: 129,
                height: 86
            },
            id4: {
                x: 131,
                y: 304,
                width: 129,
                height: 86
            },
            id5: {
                x: 131,
                y: 216,
                width: 129,
                height: 86
            },
            id6: {
                x: 325,
                y: 264,
                width: 24,
                height: 24
            },
            id7: {
                x: 311,
                y: 52,
                width: 44,
                height: 24
            },
            id8: {
                x: 180,
                y: 88,
                width: 60,
                height: 28
            },
            id9: {
                x: 262,
                y: 264,
                width: 61,
                height: 56
            }
        }
    }, {
        id: "gameElements",
        file: "images/gameElements.png",
        oAtlasData: {
            id0: {
                x: 0,
                y: 0,
                width: 1010,
                height: 12
            },
            id1: {
                x: 0,
                y: 801,
                width: 137,
                height: 147
            },
            id10: {
                x: 263,
                y: 844,
                width: 33,
                height: 26
            },
            id11: {
                x: 298,
                y: 788,
                width: 31,
                height: 26
            },
            id12: {
                x: 228,
                y: 788,
                width: 34,
                height: 26
            },
            id13: {
                x: 264,
                y: 788,
                width: 32,
                height: 26
            },
            id14: {
                x: 228,
                y: 816,
                width: 34,
                height: 26
            },
            id15: {
                x: 281,
                y: 872,
                width: 32,
                height: 26
            },
            id16: {
                x: 251,
                y: 957,
                width: 33,
                height: 26
            },
            id17: {
                x: 286,
                y: 956,
                width: 31,
                height: 26
            },
            id18: {
                x: 215,
                y: 957,
                width: 34,
                height: 26
            },
            id19: {
                x: 281,
                y: 928,
                width: 32,
                height: 26
            },
            id2: {
                x: 0,
                y: 56,
                width: 1010,
                height: 12
            },
            id20: {
                x: 228,
                y: 844,
                width: 33,
                height: 26
            },
            id21: {
                x: 286,
                y: 984,
                width: 31,
                height: 26
            },
            id22: {
                x: 98,
                y: 950,
                width: 34,
                height: 26
            },
            id23: {
                x: 264,
                y: 816,
                width: 32,
                height: 26
            },
            id24: {
                x: 98,
                y: 978,
                width: 34,
                height: 26
            },
            id25: {
                x: 281,
                y: 900,
                width: 32,
                height: 26
            },
            id26: {
                x: 0,
                y: 978,
                width: 46,
                height: 26
            },
            id27: {
                x: 0,
                y: 950,
                width: 52,
                height: 26
            },
            id28: {
                x: 0,
                y: 291,
                width: 388,
                height: 495
            },
            id29: {
                x: 0,
                y: 160,
                width: 450,
                height: 129
            },
            id3: {
                x: 0,
                y: 14,
                width: 1010,
                height: 12
            },
            id30: {
                x: 0,
                y: 788,
                width: 179,
                height: 11
            },
            id31: {
                x: 0,
                y: 1006,
                width: 1,
                height: 1
            },
            id32: {
                x: 0,
                y: 1006,
                width: 1,
                height: 1
            },
            id33: {
                x: 0,
                y: 1006,
                width: 1,
                height: 1
            },
            id34: {
                x: 0,
                y: 1006,
                width: 1,
                height: 1
            },
            id35: {
                x: 0,
                y: 1006,
                width: 1,
                height: 1
            },
            id36: {
                x: 0,
                y: 1006,
                width: 1,
                height: 1
            },
            id37: {
                x: 0,
                y: 1006,
                width: 1,
                height: 1
            },
            id38: {
                x: 390,
                y: 291,
                width: 386,
                height: 302
            },
            id39: {
                x: 54,
                y: 950,
                width: 42,
                height: 43
            },
            id4: {
                x: 0,
                y: 42,
                width: 1010,
                height: 12
            },
            id40: {
                x: 139,
                y: 801,
                width: 87,
                height: 87
            },
            id41: {
                x: 139,
                y: 890,
                width: 74,
                height: 110
            },
            id42: {
                x: 0,
                y: 84,
                width: 453,
                height: 74
            },
            id5: {
                x: 0,
                y: 28,
                width: 1010,
                height: 12
            },
            id6: {
                x: 215,
                y: 890,
                width: 64,
                height: 65
            },
            id7: {
                x: 0,
                y: 70,
                width: 1010,
                height: 12
            },
            id8: {
                x: 298,
                y: 816,
                width: 29,
                height: 26
            },
            id9: {
                x: 298,
                y: 844,
                width: 26,
                height: 26
            }
        }
    }, {
        id: "numbers0",
        file: "images/numbers0_28x48.png"
    }, {
        id: "bubbles",
        file: "images/bubbles_48x52.png"
    }, {
        id: "flare",
        file: "images/flare.png"
    }, {
        id: "firework0",
        file: "images/firework0_175x175.png",
        oAnims: {
            explode: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
        }
    }, {
        id: "flame",
        file: "images/flame_247x176.png",
        oAnims: {
            burn: [0, 1, 2, 3, 4, 5, 6, 7]
        }
    }, {
        id: "firework1",
        file: "images/firework1_175x175.png",
        oAnims: {
            explode: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
        }
    }, {
        id: "pop",
        file: "images/pop_166x167.png",
        oAnims: {
            hide: [30],
            explode0: [0, 1, 2, 3, 4, 5, 6, 7],
            explode1: [8, 9, 10, 11, 12, 13, 14, 15],
            explode2: [16, 17, 18, 19, 20, 21, 22, 23],
            explode3: [24, 25, 26, 27, 28, 29, 30, 31],
            explode4: [32, 33, 34, 35, 36, 37, 38, 39],
            explode5: [40, 41, 42, 43, 44, 45, 46, 47, 48]
        }
    }, {
        id: "langText",
        file: "json/text.json"
    }, {
        id: "font0",
        file: "images/font0.png"
    }, {
        id: "fontData0",
        file: "json/font0.json"
    }, {
        id: "levelData",
        file: "json/levelData.json"
    }, {
        id: "title",
        file: "images/preloadImage.png"
    }, {
        id: "map",
        file: "images/map.jpg"
    }, {
        id: "moreGamesBut",
        file: t
    }], ctx, canvas.width, canvas.height), oImageIds.playBut = "id0", oImageIds.retryBut = "id1", oImageIds.nextBut = "id2", oImageIds.muteBut1 = "id3", oImageIds.muteBut0 = "id4", oImageIds.menuBut = "id5", oImageIds.mapStars0 = "id6", oImageIds.mapStars1 = "id7", oImageIds.mapStars2 = "id8", oImageIds.mapBut0 = "id9", oImageIds.mapBut1 = "id10", oImageIds.backBut = "id11", oImageIds.bigPlayBut = "id12", oImageIds.pauseBut = "id13", oImageIds.infoBut = "id14", oImageIds.resetBut = "id15", oImageIds.aimLine0 = "id0", oImageIds.star = "id1", oImageIds.aimLine1 = "id2", oImageIds.aimLine2 = "id3", oImageIds.aimLine3 = "id4", oImageIds.aimLine4 = "id5", oImageIds.glint = "id6", oImageIds.aimLine5 = "id7", oImageIds.score10 = "id8", oImageIds.score15 = "id9", oImageIds.score20 = "id10", oImageIds.score25 = "id11", oImageIds.score30 = "id12", oImageIds.score35 = "id13", oImageIds.score40 = "id14", oImageIds.score45 = "id15", oImageIds.score50 = "id16", oImageIds.score55 = "id17", oImageIds.score60 = "id18", oImageIds.score65 = "id19", oImageIds.score70 = "id20", oImageIds.score75 = "id21", oImageIds.score80 = "id22", oImageIds.score85 = "id23", oImageIds.score90 = "id24", oImageIds.score95 = "id25", oImageIds.score100 = "id26", oImageIds.score500 = "id27", oImageIds.infoPanel = "id28", oImageIds.messagePanel = "id29", oImageIds.starBar = "id30", oImageIds.launcher0 = "id31", oImageIds.launcher1 = "id32", oImageIds.launcher2 = "id33", oImageIds.launcher3 = "id34", oImageIds.launcher4 = "id35", oImageIds.launcher15 = "id36", oImageIds.launcher5 = "id37", oImageIds.launcher6 = "id37", oImageIds.launcher7 = "id37", oImageIds.introPanel = "id38", oImageIds.allColourBubble = "id39", oImageIds.starFade = "id40", oImageIds.hintFinger = "id41", oImageIds.ceiling = "id42", assetLib.onReady(initSplash)
}

function resizeCanvas() {
    var t = window.innerWidth,
        a = window.innerHeight,
        e = canvas.width,
        i = canvas.height;
    t > 480 && (t -= 1, a -= 1), 
	
	t > a && isMobile && "loading" != gameState ? 
		rotatePauseOn() 
		: 
		rotatePause && isMobile && rotatePauseOff(), 
		
	t / a < canvas.width / canvas.height ? 
		(
			//case portrait phone :
			//=====================
			canvas.style.width = t + "px", 
			//canvas.style.height = "100%",//t * i / e + "px", 
			canvasX = 0, 
			canvasY =0,// canvasY = (a - t * i / e) / 2 ,    //<-- center the canvas 
			gradle.fullsize ? (canvas.style.height = '100%', canvasScaleY = i / a) : (canvas.style.height = t * i / e + "px", canvasScaleY = e / t),
			canvasScaleX = e / t
			//canvasScaleY = i / a
		) 
		: 
		(canvas.style.width = a / i * e + "px", canvas.style.height = a + "px", canvasX = (t - a / i * e) / 2, canvasY = 0, canvasScaleX = canvasScaleY = i / a), 
		
	//canvas.style.marginTop = canvasY + "px", 
	canvas.style.marginTop = "0px", 
	canvas.style.marginLeft = canvasX + "px", 
	userInput.setCanvas(canvasX, canvasY, canvasScaleX, canvasScaleY);
}

function playSound(t) {
    1 == audioType && sound.play(t)
}

function toggleMute() {
    muted = !muted, 1 == audioType ? muted ? (Howler.mute(), musicTween && musicTween.kill()) : (Howler.unmute(), musicTween && musicTween.kill(), "game" == gameState ? music.volume(.4) : music.volume(.2)) : 2 == audioType && (muted ? music.pause() : music.play()), "start" == gameState && renderMuteBut()
}

function renderMuteBut() {
    if (0 != audioType) {
        var t = assetLib.getData("muteBut"),
            a = 0;
        muted && (a = 1);
        var e = a * t.oData.spriteWidth % t.img.width,
            i = Math.floor(a / (t.img.width / t.oData.spriteWidth)) * t.oData.spriteHeight;
        ctx.drawImage(t.img, e, i, t.oData.spriteWidth, t.oData.spriteHeight, 385, 0, t.oData.spriteWidth, t.oData.spriteHeight)
    }
}

function toggleManualPause() {
    if (manualPause) manualPause = !1, userInput.removeHitArea("retryFromPause"), userInput.removeHitArea("resumeFromPause"), userInput.removeHitArea("muteFromPause"), userInput.removeHitArea("menuFromPause"), pauseCoreOff();
    else {
        manualPause = !0, pauseCoreOn();
        var t = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [canvas.width / 2 - 70, 255],
                id: oImageIds.retryBut
            },
            a = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [canvas.width / 2 + 70, 255],
                id: oImageIds.playBut
            };
        if (muted) var e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2 - 70, 355],
            id: oImageIds.muteBut1
        };
        else var e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2 - 70, 355],
            id: oImageIds.muteBut0
        };
        var i = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2 + 70, 355],
            id: oImageIds.menuBut
        };
        userInput.addHitArea("retryFromPause", butEventHandler, {
            multiTouch: !0
        }, "image", t), userInput.addHitArea("resumeFromPause", butEventHandler, {
            multiTouch: !0
        }, "image", a), userInput.addHitArea("muteFromPause", butEventHandler, null, "image", e), userInput.addHitArea("menuFromPause", butEventHandler, {
            multiTouch: !0
        }, "image", i);
        var s = new Array(t, a, e, i);
        panel = new Elements.Panel("pause", s), panel.render(ctx)
    }
}

function rotatePauseOn() {
    rotatePause = !0, ctx.drawImage(assetLib.getImg("rotateDeviceMessage"), 0, 0), userInput.pauseIsOn = !0, pauseCoreOn()
}

function rotatePauseOff() {
    rotatePause = !1, userInput.removeHitArea("retryFromPause"), userInput.removeHitArea("resumeFromPause"), userInput.removeHitArea("muteFromPause"), userInput.removeHitArea("menuFromPause"), pauseCoreOff()
}

function pauseCoreOn() {
    switch (1 == audioType ? Howler.mute() : 2 == audioType && music.pause(), gameState) {
        case "start":
        case "help":
            break;
        case "game":
            userInput.removeHitArea("pause"), userInput.removeHitArea("startPanelTouch"), userInput.removeHitArea("gameTouch"), userInput.removeHitArea("switchBubble"), userInput.removeHitArea("firstGameTouch")
    }
}

function pauseCoreOff() {
    switch (1 == audioType ? muted || Howler.unmute() : 2 == audioType && (muted || music.play()), previousTime = (new Date).getTime(), userInput.pauseIsOn = !1, gameState) {
        case "splash":
            updateSplashScreenEvent();
            break;
        case "start":
            initStartScreen();
            break;
        case "map":
            initMapScreen();
            break;
        case "credits":
            initCreditsScreen();
            break;
        case "game":
            "endFailPanel" != panel.panelType && "endPanel" != panel.panelType && (panel.posY = 550, panel.panelType = "game", panel.aButs = new Array), manualPause ? (manualPause = !1, updateGameEvent(), toggleManualPause()) : (gameControlState && (userInput.addHitArea("pause", butEventHandler, null, "rect", {
                aRect: [372, 0, 445, 52]
            }, !0), userInput.addHitArea("switchBubble", butEventHandler, {
                multiTouch: !0
            }, "rect", {
                aRect: [48, 545, 119, 663]
            }, !0), userInput.addHitArea("gameTouch", butEventHandler, {
                isDraggable: !0,
                multiTouch: !0
            }, "rect", {
                aRect: [0, 0, canvas.width, canvas.height]
            }, !0)), updateGameEvent())
    }
}
var Utils;
! function(t) {
    var a = function() {
        function t(t, a, e, i, s, o) {
            void 0 === o && (o = !0), this.oAssetData = {}, this.assetsLoaded = 0, this.textData = {}, this.totalAssets = a.length, this.ctx = e, this.canvasWidth = i, this.canvasHeight = s, this.showBar = o, this.topLeftX = this.canvasWidth / 2 - i / 4, this.topLeftY = 440, this.showBar && (ctx.strokeStyle = "#ffffff", ctx.lineWidth = 2, ctx.fillStyle = "#1E95EF", ctx.moveTo(this.topLeftX, this.topLeftY), ctx.lineTo(this.topLeftX + i / 2, this.topLeftY + 0), ctx.lineTo(this.topLeftX + i / 2, this.topLeftY + 20), ctx.lineTo(this.topLeftX + 0, this.topLeftY + 20), ctx.lineTo(this.topLeftX + 0, this.topLeftY + 0), ctx.stroke());
            for (var h = 0; h < a.length; h++) - 1 != a[h].file.indexOf(".json") ? this.loadJSON(a[h]) : this.loadImage(a[h])
        }
        return t.prototype.loadExtraAssets = function(t, a) {
            this.showBar = !1, this.totalAssets = a.length, this.assetsLoaded = 0, this.loadedCallback = t;
            for (var e = 0; e < a.length; e++) - 1 != a[e].file.indexOf(".json") ? this.loadJSON(a[e]) : this.loadImage(a[e])
        }, t.prototype.loadJSON = function(t) {
            var a = this,
                e = new XMLHttpRequest;
            e.open("GET", t.file, !0),
                e.onreadystatechange = function() {
                    4 == e.readyState && 200 == e.status && (a.textData[t.id] = JSON.parse(e.responseText), ++a.assetsLoaded, a.updatePreloadScreen(), a.checkLoadComplete())
                }, e.send(null)
        }, t.prototype.loadImage = function(t) {
            var a = this,
                e = new Image;
            e.onload = function() {
                a.oAssetData[t.id] = {}, a.oAssetData[t.id].img = e, a.oAssetData[t.id].oData = {};
                var i = a.getSpriteSize(t.file);
                0 != i[0] ? (a.oAssetData[t.id].oData.spriteWidth = i[0], a.oAssetData[t.id].oData.spriteHeight = i[1]) : (a.oAssetData[t.id].oData.spriteWidth = a.oAssetData[t.id].img.width, a.oAssetData[t.id].oData.spriteHeight = a.oAssetData[t.id].img.height), t.oAnims && (a.oAssetData[t.id].oData.oAnims = t.oAnims), t.oAtlasData ? a.oAssetData[t.id].oData.oAtlasData = t.oAtlasData : a.oAssetData[t.id].oData.oAtlasData = {
                    none: {
                        x: 0,
                        y: 0,
                        width: a.oAssetData[t.id].oData.spriteWidth,
                        height: a.oAssetData[t.id].oData.spriteHeight
                    }
                }, ++a.assetsLoaded, a.updatePreloadScreen(), a.checkLoadComplete()
            }, e.src = t.file
        }, t.prototype.updatePreloadScreen = function() {
            ctx.fillStyle = "#C094E7", ctx.fillRect(0, 0, canvas.width, canvas.height), ctx.strokeStyle = "#8548B8", ctx.lineWidth = 2, ctx.fillStyle = "#E9DFF3", ctx.moveTo(this.topLeftX, this.topLeftY), ctx.lineTo(this.topLeftX + canvas.width / 2, this.topLeftY + 0), ctx.lineTo(this.topLeftX + canvas.width / 2, this.topLeftY + 20), ctx.lineTo(this.topLeftX + 0, this.topLeftY + 20), ctx.lineTo(this.topLeftX + 0, this.topLeftY + 0), ctx.stroke(), this.showBar && ctx.fillRect(this.topLeftX + 2, this.topLeftY + 2, (this.canvasWidth / 2 - 4) / this.totalAssets * this.assetsLoaded, 16);
            var t = preAssetLib.getData("preloadImage");
            ctx.drawImage(t.img, 0, 0)
        }, t.prototype.getSpriteSize = function(t) {
            for (var a = new Array, e = "", i = "", s = 0, o = t.lastIndexOf("."), h = !0; h;) o--, 0 == s && this.isNumber(t.charAt(o)) ? e = t.charAt(o) + e : 0 == s && e.length > 0 && "x" == t.charAt(o) ? (o--, s = 1, i = t.charAt(o) + i) : 1 == s && this.isNumber(t.charAt(o)) ? i = t.charAt(o) + i : 1 == s && i.length > 0 && "_" == t.charAt(o) ? (h = !1, a = [parseInt(i), parseInt(e)]) : (h = !1, a = [0, 0]);
            return a
        }, t.prototype.isNumber = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, t.prototype.checkLoadComplete = function() {
			console.log('>>>>>>>>>>>check load images complete');
            this.assetsLoaded == this.totalAssets && this.loadedCallback()
        }, t.prototype.onReady = function(t) {
			console.log('>>>>>>>>>>>load images ready');
            this.loadedCallback = t
        }, t.prototype.getImg = function(t) {
            return this.oAssetData[t].img
        }, t.prototype.getData = function(t) {
            return this.oAssetData[t]
        }, t
    }();
    t.AssetLoader = a
}(Utils || (Utils = {}));
var Utils;
! function(t) {
    var a = function() {
        function t(t, a, e, i) {
            this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.frameInc = 0, this.animType = "loop", this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.alpha = 1, this.oImgData = t, this.oAnims = this.oImgData.oData.oAnims, this.fps = a, this.radius = e, this.animId = i, this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2), this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2)
        }
        return t.prototype.updateAnimation = function(t) {
            this.frameInc += this.fps * t
        }, t.prototype.changeImgData = function(t, a) {
            this.oImgData = t, this.oAnims = this.oImgData.oData.oAnims, this.animId = a, this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2), this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2), this.resetAnim()
        }, t.prototype.resetAnim = function() {
            this.frameInc = 0
        }, t.prototype.setFrame = function(t) {
            this.fixedFrame = t
        }, t.prototype.setAnimType = function(t, a, e) {
            switch (void 0 === e && (e = !0), this.animId = a, this.animType = t, e && this.resetAnim(), t) {
                case "loop":
                    break;
                case "once":
                    this.maxIdx = this.oAnims[this.animId].length - 1
            }
        }, t.prototype.render = function(t) {
            if (t.save(), t.translate(this.x, this.y), t.rotate(this.rotation), t.scale(this.scaleX, this.scaleY), t.globalAlpha = this.alpha, null != this.animId) {
                var a = this.oAnims[this.animId].length,
                    e = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][e % a];
                var i = this.curFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                    s = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if ("once" == this.animType && e > this.maxIdx) {
                    this.fixedFrame = this.oAnims[this.animId][a - 1], this.animId = null, null != this.animEndedFunc && this.animEndedFunc();
                    var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                        s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight
                }
            } else var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            t.drawImage(this.oImgData.img, i, s, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.centreX + this.offsetX, -this.centreY + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight), t.restore()
        }, t.prototype.renderSimple = function(t) {
            if (null != this.animId) {
                var a = this.oAnims[this.animId].length,
                    e = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][e % a];
                var i = this.curFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                    s = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if ("once" == this.animType && e > this.maxIdx) {
                    this.fixedFrame = this.oAnims[this.animId][a - 1], this.animId = null, null != this.animEndedFunc && this.animEndedFunc();
                    var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                        s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight
                }
            } else var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            t.drawImage(this.oImgData.img, i, s, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, this.x - (this.centreX - this.offsetX) * this.scaleX, this.y - (this.centreY - this.offsetY) * this.scaleY, this.oImgData.oData.spriteWidth * this.scaleX, this.oImgData.oData.spriteHeight * this.scaleY)
        }, t
    }();
    t.AnimSprite = a
}(Utils || (Utils = {}));
var Utils;
! function(t) {
    var a = function() {
        function t(t, a, e) {
            void 0 === e && (e = 0), this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.oImgData = t, this.radius = a, this.setFrame(e)
        }
        return t.prototype.setFrame = function(t) {
            this.frameNum = t
        }, t.prototype.render = function(t) {
            t.save(), t.translate(this.x, this.y), t.rotate(this.rotation), t.scale(this.scaleX, this.scaleY);
            var a = this.frameNum * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                e = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            t.drawImage(this.oImgData.img, a, e, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight), t.restore()
        }, t
    }();
    t.BasicSprite = a
}(Utils || (Utils = {}));
var Utils;
! function(t) {
    var a = function() {
        function t(t, a) {
            var e = this;
            this.canvasX = 0, this.canvasY = 0, this.canvasScaleX = 1, this.canvasScaleY = 1, this.prevHitTime = 0, this.pauseIsOn = !1, this.isDown = !1, this.isBugBrowser = a, this.keyDownEvtFunc = function(t) {
                e.keyDown(t)
            }, this.keyUpEvtFunc = function(t) {
                e.keyUp(t)
            }, t.addEventListener("touchstart", function(t) {
                for (var a = 0; a < t.changedTouches.length; a++) e.hitDown(t, t.changedTouches[a].pageX, t.changedTouches[a].pageY, t.changedTouches[a].identifier)
            }, !1), t.addEventListener("touchend", function(t) {
                for (var a = 0; a < t.changedTouches.length; a++) e.hitUp(t, t.changedTouches[a].pageX, t.changedTouches[a].pageY, t.changedTouches[a].identifier)
            }, !1), t.addEventListener("touchmove", function(t) {
                for (var a = 0; a < t.changedTouches.length; a++) e.move(t, t.changedTouches[a].pageX, t.changedTouches[a].pageY, t.changedTouches[a].identifier, !0)
            }, !1), t.addEventListener("mousedown", function(t) {
                e.isDown = !0, e.hitDown(t, t.pageX, t.pageY, 1)
            }, !1), t.addEventListener("mouseup", function(t) {
                e.isDown = !1, e.hitUp(t, t.pageX, t.pageY, 1)
            }, !1), t.addEventListener("mousemove", function(t) {
                e.move(t, t.pageX, t.pageY, 1, e.isDown)
            }, !1), this.aHitAreas = new Array, this.aKeys = new Array
        }
        return t.prototype.setCanvas = function(t, a, e, i) {
            this.canvasX = t, 
			this.canvasY = a, 
			this.canvasScaleX = e, 
			this.canvasScaleY = i
        }, t.prototype.hitDown = function(t, a, e, i) {
            if (t.preventDefault(), t.stopPropagation(), !this.pauseIsOn) {
                var s = (new Date).getTime();
                a = (a - this.canvasX) * this.canvasScaleX, e = (e - this.canvasY) * this.canvasScaleY;
                for (var o = 0; o < this.aHitAreas.length; o++)
                    if (this.aHitAreas[o].rect && a > this.aHitAreas[o].area[0] && e > this.aHitAreas[o].area[1] && a < this.aHitAreas[o].area[2] && e < this.aHitAreas[o].area[3]) {
                        if (this.aHitAreas[o].aTouchIdentifiers.push(i), this.aHitAreas[o].oData.hasLeft = !1, !this.aHitAreas[o].oData.isDown) {
                            if (this.aHitAreas[o].oData.isDown = !0, this.aHitAreas[o].oData.x = a, this.aHitAreas[o].oData.y = e, s - this.prevHitTime < 500 && ("game" != gameState || "pause" == this.aHitAreas[o].id) && isBugBrowser) return;
                            this.aHitAreas[o].callback(this.aHitAreas[o].id, this.aHitAreas[o].oData)
                        }
                        break
                    }
                this.prevHitTime = s
            }
        }, t.prototype.hitUp = function(t, a, e, i) {
            if (ios9FirstTouch || (playSound("silence"), ios9FirstTouch = !0), !this.pauseIsOn) {
                t.preventDefault(), t.stopPropagation(), a = (a - this.canvasX) * this.canvasScaleX, e = (e - this.canvasY) * this.canvasScaleY;
                for (var s = 0; s < this.aHitAreas.length; s++)
                    if (this.aHitAreas[s].rect && a > this.aHitAreas[s].area[0] && e > this.aHitAreas[s].area[1] && a < this.aHitAreas[s].area[2] && e < this.aHitAreas[s].area[3]) {
                        for (var o = 0; o < this.aHitAreas[s].aTouchIdentifiers.length; o++) this.aHitAreas[s].aTouchIdentifiers[o] == i && (this.aHitAreas[s].aTouchIdentifiers.splice(o, 1), o -= 1);
                        0 == this.aHitAreas[s].aTouchIdentifiers.length && (this.aHitAreas[s].oData.isDown = !1, this.aHitAreas[s].oData.multiTouch && (this.aHitAreas[s].oData.x = a, this.aHitAreas[s].oData.y = e, this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData)));
                        break
                    }
            }
        }, t.prototype.move = function(t, a, e, i, s) {
            if (!this.pauseIsOn && s) {
                a = (a - this.canvasX) * this.canvasScaleX, e = (e - this.canvasY) * this.canvasScaleY;
                for (var o = 0; o < this.aHitAreas.length; o++)
                    if (this.aHitAreas[o].rect)
                        if (a > this.aHitAreas[o].area[0] && e > this.aHitAreas[o].area[1] && a < this.aHitAreas[o].area[2] && e < this.aHitAreas[o].area[3]) this.aHitAreas[o].oData.hasLeft = !1, this.aHitAreas[o].oData.isDown || (this.aHitAreas[o].oData.isDown = !0, this.aHitAreas[o].oData.x = a, this.aHitAreas[o].oData.y = e, this.aHitAreas[o].aTouchIdentifiers.push(i), this.aHitAreas[o].oData.multiTouch && this.aHitAreas[o].callback(this.aHitAreas[o].id, this.aHitAreas[o].oData)), this.aHitAreas[o] && this.aHitAreas[o].oData.isDraggable && (this.aHitAreas[o].oData.isBeingDragged = !0, this.aHitAreas[o].oData.x = a, this.aHitAreas[o].oData.y = e, this.aHitAreas[o].callback(this.aHitAreas[o].id, this.aHitAreas[o].oData), this.aHitAreas[o].oData.isBeingDragged = !1);
                        else if (this.aHitAreas[o].oData.isDown && !this.aHitAreas[o].oData.hasLeft) {
                    for (var h = 0; h < this.aHitAreas[o].aTouchIdentifiers.length; h++) this.aHitAreas[o].aTouchIdentifiers[h] == i && (this.aHitAreas[o].aTouchIdentifiers.splice(h, 1), h -= 1);
                    0 == this.aHitAreas[o].aTouchIdentifiers.length && (this.aHitAreas[o].oData.hasLeft = !0, this.aHitAreas[o].oData.isBeingDragged || (this.aHitAreas[o].oData.isDown = !1), this.aHitAreas[o].oData.multiTouch && this.aHitAreas[o].callback(this.aHitAreas[o].id, this.aHitAreas[o].oData))
                }
            }
        }, t.prototype.keyDown = function(t) {
            for (var a = 0; a < this.aKeys.length; a++) t.keyCode == this.aKeys[a].keyCode && (this.aKeys[a].oData.isDown = !0, this.aKeys[a].callback(this.aKeys[a].id, this.aKeys[a].oData))
        }, t.prototype.keyUp = function(t) {
            for (var a = 0; a < this.aKeys.length; a++) t.keyCode == this.aKeys[a].keyCode && (this.aKeys[a].oData.isDown = !1, this.aKeys[a].callback(this.aKeys[a].id, this.aKeys[a].oData))
        }, t.prototype.checkKeyFocus = function() {
            window.focus(), this.aKeys.length > 0 && (window.removeEventListener("keydown", this.keyDownEvtFunc, !1), window.removeEventListener("keyup", this.keyUpEvtFunc, !1), window.addEventListener("keydown", this.keyDownEvtFunc, !1), window.addEventListener("keyup", this.keyUpEvtFunc, !1))
        }, t.prototype.addKey = function(t, a, e, i) {
            null == e && (e = new Object), this.aKeys.push({
                id: t,
                callback: a,
                oData: e,
                keyCode: i
            }), this.checkKeyFocus()
        }, t.prototype.removeKey = function(t) {
            for (var a = 0; a < this.aKeys.length; a++) this.aKeys[a].id == t && (this.aKeys.splice(a, 1), a -= 1)
        }, t.prototype.addHitArea = function(t, a, e, i, s, o) {
            void 0 === o && (o = !1), null == e && (e = new Object), o && this.removeHitArea(t), s.scale || (s.scale = 1);
            var h = new Array;
			//console.log(s);
            switch (i) {
                case "image":
					//console.log(s.aPos[1] , s.oImgData.oData.oAtlasData[s.id].height , s.scale);
                    var r;
                    r = new Array(
						s.aPos[0] - s.oImgData.oData.oAtlasData[s.id].width / 2 * s.scale, 
						s.aPos[1] - s.oImgData.oData.oAtlasData[s.id].height / 2 * s.scale, 
						
						s.aPos[0] + s.oImgData.oData.oAtlasData[s.id].width / 2 * s.scale, 
						s.aPos[1] + s.oImgData.oData.oAtlasData[s.id].height / 2 * s.scale
					), 
					this.aHitAreas.push({
                        id: t,
                        aTouchIdentifiers: h,
                        callback: a,
                        oData: e,
                        rect: !0,
                        area: r
                    });
					/*console.log({
                        id: t,
                        aTouchIdentifiers: h,
                        callback: a,
                        oData: e,
                        rect: !0,
                        area: r
                    });*/
                    break;
                case "rect":
                    this.aHitAreas.push({
                        id: t,
                        aTouchIdentifiers: h,
                        callback: a,
                        oData: e,
                        rect: !0,
                        area: s.aRect
                    })
            }
        }, t.prototype.removeHitArea = function(t) {
            for (var a = 0; a < this.aHitAreas.length; a++) this.aHitAreas[a].id == t && (this.aHitAreas.splice(a, 1), a -= 1)
        }, t.prototype.resetAll = function() {
            for (var t = 0; t < this.aHitAreas.length; t++) this.aHitAreas[t].oData.isDown = !1, this.aHitAreas[t].oData.isBeingDragged = !1, this.aHitAreas[t].aTouchIdentifiers = new Array;
            this.isDown = !1
        }, t
    }();
    t.UserInput = a
}(Utils || (Utils = {}));
var Utils;
! function(t) {
    var a = function() {
        function t(t) {
            this.updateFreq = 10, this.updateInc = 0, this.frameAverage = 0, this.display = 1, this.log = "", this.render = function(t) {
                this.frameAverage += this.delta / this.updateFreq, ++this.updateInc >= this.updateFreq && (this.updateInc = 0, this.display = this.frameAverage, this.frameAverage = 0), t.textAlign = "left", ctx.font = "10px Helvetica", t.fillStyle = "#333333", t.beginPath(), t.rect(0, this.canvasHeight - 15, 40, 15), t.closePath(), t.fill(), t.fillStyle = "#ffffff", t.fillText(Math.round(1e3 / (1e3 * this.display)) + " fps " + this.log, 5, this.canvasHeight - 5)
            }, this.canvasHeight = t
        }
        return t.prototype.update = function(t) {
            this.delta = t
        }, t
    }();
    t.FpsMeter = a
}(Utils || (Utils = {}));
var Elements;
! function(t) {
    var a = function() {
        function t() {
            this.x = 0, this.y = 0, this.targY = 0, this.incY = 0, this.renderState = "none", this.bgId = 0, this.setBackground()
        }
        return t.prototype.setBackground = function(t) {
            void 0 === t && (t = -1), -1 == t && (t = Math.floor(5 * Math.random())), this.oImgData = assetLib.getData("background" + t)
        }, t.prototype.update = function() {
            switch (this.renderState) {
                case "menuScroll":
                    this.incY += 5 * delta, this.x = this.x - 50 * Math.sin(this.incY / 10) * delta, this.y = this.y - 50 * delta;
                    break;
                case "ripple":
                    this.incY += 2 * delta
            }
        }, t.prototype.render = function() {
            switch (this.renderState) {
                case "menuScroll":
                    this.x = this.x % canvas.width, this.y = this.y % canvas.height, this.x < 0 && (this.x += canvas.width), this.y < 0 && (this.y += canvas.height), ctx.drawImage(this.oImgData.img, this.x, this.y, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
                    break;
                case "ripple":
                    ;
                    ctx.drawImage(this.oImgData.img, 0, 0);
                    for (var t = 0; t < 25; t++) ctx.drawImage(this.oImgData.img, 0, t * (canvas.height / 25), canvas.width, canvas.height / 25, 5 * Math.sin(this.incY + t / 2), t * (canvas.height / 25), canvas.width, canvas.height / 25);
                    break;
                case "none":
                    ctx.drawImage(this.oImgData.img, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height)
            }
        }, t
    }();
    t.Background = a
}(Elements || (Elements = {}));
var Elements;
! function(t) {
    var a = function() {
        function t(t, a, e) {
            this.inc = 0, this.oSplashScreenImgData = t, this.canvasWidth = a, this.canvasHeight = e, this.posY = -this.canvasHeight, TweenLite.to(this, .5, {
                posY: 0
            })
        }
        return t.prototype.render = function(t, a) {
            this.inc += 5 * a, t.drawImage(this.oSplashScreenImgData.img, 0, 0 - this.posY)
        }, t
    }();
    t.Splash = a
}(Elements || (Elements = {}));
var Elements;
! function(t) {
    var a = function() {
        function t(t, a) {
            this.timer = .3, this.endTime = 0, this.posY = 0, this.numberSpace = 17, this.incY = 0, this.flareRot = 0, this.letterSpace = 24, this.numberScale = .75, this.oTitleImgData = assetLib.getData("title"), this.oSplashImgData = assetLib.getData("splash"), this.oNumbers0ImgData = assetLib.getData("numbers0"), this.oNumbers1ImgData = assetLib.getData("numbers1"), this.oTopFlareImgData = assetLib.getData("flare"), this.oGameElementsImgData = assetLib.getData("gameElements"), this.oBubblesImgData = assetLib.getData("bubbles"), this.oMapImgData = assetLib.getData("map"), this.oUiButsImgData = assetLib.getData("uiButs"), this.panelType = t, this.aButs = a
        }
        return t.prototype.update = function(t) {
            this.incY += 10 * t
        }, t.prototype.startTween1 = function() {
            this.posY = 550, TweenLite.to(this, .4, {
                posY: 0,
                ease: "Back.easeOut"
            })
        }, t.prototype.startMapTween = function(t) {
            this.mapPosY = Math.max(t - 100, 0), this.mapTween = TweenLite.to(this, 1, {
                mapPosY: t,
                ease: "Cubic.easeOut"
            })
        }, t.prototype.startTween2 = function() {
            this.posY = 550, TweenLite.to(this, .5, {
                posY: 0,
                ease: "Quad.easeOut"
            })
        }, t.prototype.tweenOffScreen = function(t) {
            void 0 === t && (t = null), TweenLite.to(this, .5, {
                posY: 550,
                ease: "Quad.easeIn",
                onComplete: t
            })
        }, t.prototype.render = function(t, a) {
            switch (void 0 === a && (a = !0), a || this.addButs(t), this.panelType) {
                case "start":
                    this.flareRot += delta / 3, t.save(), t.translate(canvas.width / 2, 292 + this.posY), t.rotate(this.flareRot), t.scale(1.3, 1.3), t.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), t.restore(), t.save(), t.translate(canvas.width / 2, 292 + this.posY), t.rotate(-this.flareRot), t.scale(1.3, 1.3), t.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), t.restore(), t.drawImage(this.oTitleImgData.img, 0, 0, canvas.width, canvas.height, 0, 0 + this.posY, canvas.width, canvas.height);
                    for (var e = 0; e < totalScore.toString().length; e++) {
                        var i = parseFloat(totalScore.toString().charAt(e)),
                            s = i * this.oNumbers0ImgData.oData.spriteWidth % this.oNumbers0ImgData.img.width,
                            o = Math.floor(i / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbers0ImgData.img, s, o, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, 10 + e * (this.letterSpace * this.numberScale), 4, this.oNumbers0ImgData.oData.spriteWidth * this.numberScale, this.oNumbers0ImgData.oData.spriteHeight * this.numberScale)
                    }
                    break;
                case "map":
                    this.mapPosRealY -= 8 * (this.mapPosRealY - this.mapPosY) * delta, ctx.drawImage(this.oMapImgData.img, 0, this.mapPosRealY, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
                    var h; - 1 != this.mapButIdToHighlight && (this.flareRot += delta / 3, ctx.save(), ctx.translate(aMapButs[this.mapButIdToHighlight][0], aMapButs[this.mapButIdToHighlight][1] - this.mapPosRealY), ctx.rotate(this.flareRot), ctx.scale(.5, .5), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore(), ctx.save(), ctx.translate(aMapButs[this.mapButIdToHighlight][0], aMapButs[this.mapButIdToHighlight][1] - this.mapPosRealY), ctx.rotate(-this.flareRot), ctx.scale(.5, .5), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore());
                    for (var e = 0; e < aMapButs.length; e++) {
                        h = 0 == saveDataHandler.getStars(e) ? 0 : 1;
                        var r = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapBut" + h]].x,
                            l = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapBut" + h]].y,
                            n = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapBut" + h]].width,
                            u = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapBut" + h]].height;
                        if (t.drawImage(this.oUiButsImgData.img, r, l, n, u, aMapButs[e][0] - n / 2, aMapButs[e][1] - u / 2 - this.mapPosRealY, n, u), 1 == h && aLevelData.length > e) {
                            var m = saveDataHandler.getStars(e);
                            if (m > 1) {
                                var r = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapStars" + (m - 2)]].x,
                                    l = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapStars" + (m - 2)]].y,
                                    n = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapStars" + (m - 2)]].width,
                                    u = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapStars" + (m - 2)]].height;
                                t.drawImage(this.oUiButsImgData.img, r, l, n, u, aMapButs[e][0] - n / 2, aMapButs[e][1] - u / 2 - this.mapPosRealY - 20, n, u)
                            }
                        }
                    }
                    if (-1 != this.mapButIdToHighlight) {
                        var r = this.oGameElementsImgData.oData.oAtlasData[oImageIds.hintFinger].x,
                            l = this.oGameElementsImgData.oData.oAtlasData[oImageIds.hintFinger].y,
                            n = this.oGameElementsImgData.oData.oAtlasData[oImageIds.hintFinger].width,
                            u = this.oGameElementsImgData.oData.oAtlasData[oImageIds.hintFinger].height;
                        t.drawImage(this.oGameElementsImgData.img, r, l, n, u, aMapButs[this.mapButIdToHighlight][0] - n / 2, aMapButs[this.mapButIdToHighlight][1] - u - this.mapPosRealY + 5 * Math.sin(this.incY + 45 * this.mapButIdToHighlight) - 20, n, u)
                    }
                    for (var e = 0; e < totalScore.toString().length; e++) {
                        var i = parseFloat(totalScore.toString().charAt(e)),
                            s = i * this.oNumbers0ImgData.oData.spriteWidth % this.oNumbers0ImgData.img.width,
                            o = Math.floor(i / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbers0ImgData.img, s, o, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, 10 + e * (this.letterSpace * this.numberScale), 4, this.oNumbers0ImgData.oData.spriteWidth * this.numberScale, this.oNumbers0ImgData.oData.spriteHeight * this.numberScale)
                    }
                    break;
                case "credits":
                    t.drawImage(this.oSplashImgData.img, 0, 0, canvas.width, canvas.height, 0, 0 + this.posY, canvas.width, canvas.height);
                    break;
                case "startPanel":
                    var r = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].x,
                        l = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].y,
                        n = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].width,
                        u = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].height;
                    if (t.drawImage(this.oGameElementsImgData.img, r, l, n, u, canvas.width / 2 - n / 2, 300 - u / 2 + this.posY, n, u), 0 == aLevelData[levelNum]["@levelType"]) {
                        if (0 == bubbleTargId) {
                            var r = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].x,
                                l = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].y,
                                n = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].width,
                                u = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].height;
                            ctx.drawImage(this.oGameElementsImgData.img, r, l, n, u, canvas.width / 2 + 10 - n / 2, 317 - u / 2 + this.posY, n, u)
                        } else {
                            var s = (bubbleTargId - 1) * this.oBubblesImgData.oData.spriteWidth % this.oBubblesImgData.img.width,
                                o = Math.floor((bubbleTargId - 1) / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                            ctx.drawImage(this.oBubblesImgData.img, s, o, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, canvas.width / 2 + 10 - this.oBubblesImgData.oData.spriteWidth / 2, 317 - this.oBubblesImgData.oData.spriteHeight / 2 + this.posY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight)
                        }
                        for (var e = 0; e < bubbleTargNum.toString().length; e++) {
                            var i = parseFloat(bubbleTargNum.toString().charAt(e)),
                                s = i * this.oNumbers0ImgData.oData.spriteWidth % this.oNumbers0ImgData.img.width,
                                o = Math.floor(i / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                            ctx.drawImage(this.oNumbers0ImgData.img, s, o, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, canvas.width / 2 - 16 + e * (this.letterSpace * this.numberScale) - this.letterSpace * bubbleTargNum.toString().length * this.numberScale, 300 + this.posY, this.oNumbers0ImgData.oData.spriteWidth * this.numberScale, this.oNumbers0ImgData.oData.spriteHeight * this.numberScale)
                        }
                    } else if (1 == aLevelData[levelNum]["@levelType"]) {
                        var r = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ceiling].x,
                            l = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ceiling].y,
                            n = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ceiling].width,
                            u = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ceiling].height;
                        t.drawImage(this.oGameElementsImgData.img, r, l, n, u, canvas.width / 2 - n / 2 * .55, 290 + this.posY, .55 * n, .55 * u);
                        for (var e = 0; e < 6; e++) {
                            var s = 16 * this.oBubblesImgData.oData.spriteWidth % this.oBubblesImgData.img.width,
                                o = Math.floor(16 / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                            ctx.drawImage(this.oBubblesImgData.img, s, o, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, canvas.width / 2 - 110 + 36 * e, 320 + this.posY, .9 * this.oBubblesImgData.oData.spriteWidth, .9 * this.oBubblesImgData.oData.spriteHeight)
                        }
                    } else
                        for (var e = 0; e < 5; e++) {
                            var s = (e + 10) * this.oBubblesImgData.oData.spriteWidth % this.oBubblesImgData.img.width,
                                o = Math.floor((e + 10) / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                            ctx.drawImage(this.oBubblesImgData.img, s, o, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, canvas.width / 2 - 93 - this.oBubblesImgData.oData.spriteWidth / 2 + 45 * e, 335 - this.oBubblesImgData.oData.spriteHeight / 2 + this.posY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight)
                        }
                    var g = {
                        text: "startLevel" + aLevelData[levelNum]["@levelType"],
                        x: canvas.width / 2,
                        y: 260 + this.posY,
                        alignX: "centre",
                        alignY: "centre",
                        lineOffsetY: -6,
                        maxWidth: 270
                    };
                    textDisplay.renderText(g);
                    break;
                case "endPanel":
                    t.fillStyle = "rgba(0, 0, 0, 0.5)", t.fillRect(0, 0, canvas.width, canvas.height);
                    var r = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].x,
                        l = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].y,
                        n = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].width,
                        u = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].height;
                    t.drawImage(this.oGameElementsImgData.img, r, l, n, u, canvas.width / 2 - n / 2, 310 - u / 2 + this.posY, n, u);
                    var d;
                    d = starBarLength >= aStarMarkers[0] / aStarMarkers[2] ? "star" : "starFade";
                    var r = this.oGameElementsImgData.oData.oAtlasData[oImageIds[d]].x,
                        l = this.oGameElementsImgData.oData.oAtlasData[oImageIds[d]].y,
                        n = this.oGameElementsImgData.oData.oAtlasData[oImageIds[d]].width,
                        u = this.oGameElementsImgData.oData.oAtlasData[oImageIds[d]].height;
                    t.drawImage(this.oGameElementsImgData.img, r, l, n, u, canvas.width / 2 - 95 - n / 2, 190 - u / 2 + this.posY, n, u), d = starBarLength >= aStarMarkers[1] / aStarMarkers[2] ? "star" : "starFade";
                    var r = this.oGameElementsImgData.oData.oAtlasData[oImageIds[d]].x,
                        l = this.oGameElementsImgData.oData.oAtlasData[oImageIds[d]].y,
                        n = this.oGameElementsImgData.oData.oAtlasData[oImageIds[d]].width,
                        u = this.oGameElementsImgData.oData.oAtlasData[oImageIds[d]].height;
                    t.drawImage(this.oGameElementsImgData.img, r, l, n, u, canvas.width / 2 - n / 2, 175 - u / 2 + this.posY, n, u), d = starBarLength >= aStarMarkers[2] / aStarMarkers[2] ? "star" : "starFade";
                    var r = this.oGameElementsImgData.oData.oAtlasData[oImageIds[d]].x,
                        l = this.oGameElementsImgData.oData.oAtlasData[oImageIds[d]].y,
                        n = this.oGameElementsImgData.oData.oAtlasData[oImageIds[d]].width,
                        u = this.oGameElementsImgData.oData.oAtlasData[oImageIds[d]].height;
                    t.drawImage(this.oGameElementsImgData.img, r, l, n, u, canvas.width / 2 + 95 - n / 2, 190 - u / 2 + this.posY, n, u);
                    var g = {
                        text: "endLevel" + aLevelData[levelNum]["@levelType"],
                        x: canvas.width / 2,
                        y: 260 + this.posY,
                        alignX: "centre",
                        alignY: "top",
                        lineOffsetY: -6,
                        scale: .9,
                        maxWidth: 270
                    };
                    textDisplay.renderText(g);
                    var g = {
                        text: "levelScore",
                        x: canvas.width / 2,
                        y: 305 + this.posY,
                        alignX: "centre",
                        alignY: "top",
                        lineOffsetY: -6,
                        scale: .9,
                        maxWidth: 270
                    };
                    textDisplay.renderText(g);
                    for (var b = 1, e = 0; e < levelScore.toString().length; e++) {
                        var i = parseFloat(levelScore.toString().charAt(e)),
                            s = i * this.oNumbers0ImgData.oData.spriteWidth % this.oNumbers0ImgData.img.width,
                            o = Math.floor(i / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbers0ImgData.img, s, o, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, canvas.width / 2 + e * (this.letterSpace * b) - this.letterSpace * levelScore.toString().length / 2 * b, 345 + this.posY, this.oNumbers0ImgData.oData.spriteWidth * b, this.oNumbers0ImgData.oData.spriteHeight * b)
                    }
                    break;
                case "endFailPanel":
                    t.fillStyle = "rgba(0, 0, 0, 0.5)", t.fillRect(0, 0, canvas.width, canvas.height);
                    var r = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].x,
                        l = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].y,
                        n = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].width,
                        u = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].height;
                    t.drawImage(this.oGameElementsImgData.img, r, l, n, u, canvas.width / 2 - n / 2, 310 - u / 2 + this.posY, n, u);
                    var g = {
                        text: "gameOver",
                        x: canvas.width / 2,
                        y: 158 + this.posY,
                        alignX: "centre",
                        alignY: "top",
                        lineOffsetY: -6,
                        scale: .9,
                        maxWidth: 270
                    };
                    textDisplay.renderText(g);
                    var g = {
                        text: "tryAgain",
                        x: canvas.width / 2,
                        y: 350 + this.posY,
                        alignX: "centre",
                        alignY: "top",
                        lineOffsetY: -6,
                        scale: .9,
                        maxWidth: 270
                    };
                    textDisplay.renderText(g);
                    var g = {
                        text: "totalScore",
                        x: canvas.width / 2,
                        y: 260 + this.posY,
                        alignX: "centre",
                        alignY: "top",
                        lineOffsetY: -6,
                        scale: .9,
                        maxWidth: 270
                    };
                    textDisplay.renderText(g);
                    for (var b = 1, e = 0; e < totalScore.toString().length; e++) {
                        var i = parseFloat(totalScore.toString().charAt(e)),
                            s = i * this.oNumbers0ImgData.oData.spriteWidth % this.oNumbers0ImgData.img.width,
                            o = Math.floor(i / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbers0ImgData.img, s, o, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, canvas.width / 2 + e * (this.letterSpace * b) - this.letterSpace * totalScore.toString().length / 2 * b, 300 + this.posY, this.oNumbers0ImgData.oData.spriteWidth * b, this.oNumbers0ImgData.oData.spriteHeight * b)
                    }
                    break;
                case "pause":
                    t.fillStyle = "rgba(0, 0, 0, 0.5)", t.fillRect(0, 0, canvas.width, canvas.height);
                    var r = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].x,
                        l = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].y,
                        n = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].width,
                        u = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].height;
                    t.drawImage(this.oGameElementsImgData.img, r, l, n, u, canvas.width / 2 - n / 2, 310 - u / 2 + this.posY, n, u)
            }
            a && this.addButs(t)
        }, t.prototype.addButs = function(t) {
            for (var a = 0; a < this.aButs.length; a++) {
                var e = this.posY,
                    i = 0;
                0 == this.incY || this.aButs[a].noMove || (i = 3 * Math.sin(this.incY + 45 * a)), this.aButs[a].scale || (this.aButs[a].scale = 1);
                var s = this.aButs[a].oImgData.oData.oAtlasData[this.aButs[a].id].x,
                    o = this.aButs[a].oImgData.oData.oAtlasData[this.aButs[a].id].y,
                    h = this.aButs[a].oImgData.oData.oAtlasData[this.aButs[a].id].width,
                    r = this.aButs[a].oImgData.oData.oAtlasData[this.aButs[a].id].height;
                if (t.drawImage(this.aButs[a].oImgData.img, s, o, h, r, this.aButs[a].aPos[0] - h / 2 * this.aButs[a].scale - i / 2, this.aButs[a].aPos[1] - r / 2 * this.aButs[a].scale + i / 2 + this.posY, h * this.aButs[a].scale + i, r * this.aButs[a].scale - i), this.aButs[a].text) {
                    var l = {
                        text: this.aButs[a].text,
                        x: this.aButs[a].aPos[0] + e,
                        y: this.aButs[a].aPos[1],
                        alignX: "centre",
                        alignY: "centre",
                        maxWidth: h - 8
                    };
                    textDisplay.renderText(l)
                }
            }
        }, t
    }();
    t.Panel = a
}(Elements || (Elements = {}));
var Elements;
! function(t) {
    var a = function() {
        function t() {
            this.bonusScore = 0, this.letterSpace = 24, this.aSpecialBubbleIds = new Array, this.numberScale = .75, this.starBarLength = 179, this.oHudImgData = assetLib.getData("hud"), this.oNumbers0ImgData = assetLib.getData("numbers0"), this.oGameElementsImgData = assetLib.getData("gameElements"), this.oUiButsImgData = assetLib.getData("uiButs"), this.oBubblesImgData = assetLib.getData("bubbles"), 1 == aLevelData[levelNum]["@vBombs"] && this.aSpecialBubbleIds.push(5), 1 == aLevelData[levelNum]["@hBombs"] && this.aSpecialBubbleIds.push(6), 1 == aLevelData[levelNum]["@lBombs"] && this.aSpecialBubbleIds.push(7), 1 == aLevelData[levelNum]["@rBubbles"] && this.aSpecialBubbleIds.push(15), this.addNextBubble()
        }
        return t.prototype.setLevelSpecificTargets = function(t, a) {
            1 == aLevelData[levelNum]["@levelType"] ? aLevelSpecificTarget = new Array(t, 6) : 2 == aLevelData[levelNum]["@levelType"] && (aLevelSpecificTarget = new Array(0, a))
        }, t.prototype.getRandomBubble = function() {
            for (var t = new Array, a = 0; a < aAllowedBubbleStates.length; a++) aAllowedBubbleStates[a] && t.push(a);
            if (this.aSpecialBubbleIds.length > 0) {
                return 1 * Math.random() < aLevelData[levelNum]["@specialChance"] / 100 ? this.aSpecialBubbleIds[Math.floor(Math.random() * this.aSpecialBubbleIds.length)] : t[Math.floor(Math.random() * t.length)]
            }
            return t[Math.floor(Math.random() * t.length)]
        }, t.prototype.addNextBubble = function() {
            this.nextBubbleId = this.getRandomBubble()
        }, t.prototype.renderOver = function() {
            var t = 1,
                a = t * this.oHudImgData.oData.spriteWidth % this.oHudImgData.img.width,
                e = Math.floor(t / (this.oHudImgData.img.width / this.oHudImgData.oData.spriteWidth)) * this.oHudImgData.oData.spriteHeight;
            ctx.drawImage(this.oHudImgData.img, a, e, this.oHudImgData.oData.spriteWidth, this.oHudImgData.oData.spriteHeight, 0, 0, this.oHudImgData.oData.spriteWidth, this.oHudImgData.oData.spriteHeight);
            var i = this.oUiButsImgData.oData.oAtlasData[oImageIds.pauseBut].x,
                s = this.oUiButsImgData.oData.oAtlasData[oImageIds.pauseBut].y,
                o = this.oUiButsImgData.oData.oAtlasData[oImageIds.pauseBut].width,
                h = this.oUiButsImgData.oData.oAtlasData[oImageIds.pauseBut].height;
            if (ctx.drawImage(this.oUiButsImgData.img, i, s, o, h, 385, 0, o, h), starBarLength > 0) {
                var i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.starBar].x,
                    s = this.oGameElementsImgData.oData.oAtlasData[oImageIds.starBar].y,
                    o = this.oGameElementsImgData.oData.oAtlasData[oImageIds.starBar].width,
                    h = this.oGameElementsImgData.oData.oAtlasData[oImageIds.starBar].height;
                ctx.drawImage(this.oGameElementsImgData.img, i, s, o * starBarLength, h, 185, 20 - h / 2, o * starBarLength, h)
            }
            for (var r = 0; r < aStarMarkers.length; r++) {
                var l = .3;
                starBarLength >= aStarMarkers[r] / aStarMarkers[2] && (l = .45);
                var i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.star].x,
                    s = this.oGameElementsImgData.oData.oAtlasData[oImageIds.star].y,
                    o = this.oGameElementsImgData.oData.oAtlasData[oImageIds.star].width,
                    h = this.oGameElementsImgData.oData.oAtlasData[oImageIds.star].height;
                ctx.drawImage(this.oGameElementsImgData.img, i, s, o, h, 185 + aStarMarkers[r] / aStarMarkers[2] * this.starBarLength - o / 2 * l, 20 - h / 2 * l, o * l, h * l)
            }
            if (0 == aLevelData[levelNum]["@bLimit"] || 0 != aLevelData[levelNum]["@bLimit"] && bubblesToFire > 0) {
                var a = this.nextBubbleId * this.oBubblesImgData.oData.spriteWidth % this.oBubblesImgData.img.width,
                    e = Math.floor(this.nextBubbleId / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                ctx.drawImage(this.oBubblesImgData.img, a, e, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, 88 - this.oBubblesImgData.oData.spriteWidth / 2, 572 - this.oBubblesImgData.oData.spriteHeight / 2, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight)
            }
            for (var r = 0; r < totalScore.toString().length; r++) {
                var t = parseFloat(totalScore.toString().charAt(r)),
                    a = t * this.oNumbers0ImgData.oData.spriteWidth % this.oNumbers0ImgData.img.width,
                    e = Math.floor(t / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                ctx.drawImage(this.oNumbers0ImgData.img, a, e, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, 165 + r * (this.letterSpace * this.numberScale) - this.letterSpace * totalScore.toString().length * this.numberScale, 4, this.oNumbers0ImgData.oData.spriteWidth * this.numberScale, this.oNumbers0ImgData.oData.spriteHeight * this.numberScale)
            }
            if (0 != aLevelData[levelNum]["@bLimit"])
                for (var l = .5, r = 0; r < bubblesToFire.toString().length; r++) {
                    var t = parseFloat(bubblesToFire.toString().charAt(r)),
                        a = t * this.oNumbers0ImgData.oData.spriteWidth % this.oNumbers0ImgData.img.width,
                        e = Math.floor(t / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                    ctx.drawImage(this.oNumbers0ImgData.img, a, e, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, 86 + r * (this.letterSpace * l) - this.letterSpace * bubblesToFire.toString().length / 2 * l, 530, this.oNumbers0ImgData.oData.spriteWidth * l, this.oNumbers0ImgData.oData.spriteHeight * l)
                }
            if (0 == aLevelData[levelNum]["@levelType"]) {
                if (bubbleTargId > 0) {
                    var t = bubbleTargId - 1,
                        a = t * this.oBubblesImgData.oData.spriteWidth % this.oBubblesImgData.img.width,
                        e = Math.floor(t / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                    ctx.drawImage(this.oBubblesImgData.img, a, e, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, 425 - this.oBubblesImgData.oData.spriteWidth / 2, 675 - this.oBubblesImgData.oData.spriteHeight / 2, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight)
                } else {
                    var i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].x,
                        s = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].y,
                        o = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].width,
                        h = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].height;
                    ctx.drawImage(this.oGameElementsImgData.img, i, s, o, h, 425 - o / 2, 675 - h / 2, o, h)
                }
                for (var r = 0; r < bubbleTargNum.toString().length; r++) {
                    var t = parseFloat(bubbleTargNum.toString().charAt(r)),
                        a = t * this.oNumbers0ImgData.oData.spriteWidth % this.oNumbers0ImgData.img.width,
                        e = Math.floor(t / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                    ctx.drawImage(this.oNumbers0ImgData.img, a, e, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, 400 + r * (this.letterSpace * this.numberScale) - this.letterSpace * bubbleTargNum.toString().length * this.numberScale, 662, this.oNumbers0ImgData.oData.spriteWidth * this.numberScale, this.oNumbers0ImgData.oData.spriteHeight * this.numberScale)
                }
            } else {
                if (1 == aLevelData[levelNum]["@levelType"]) {
                    var a = 16 * this.oBubblesImgData.oData.spriteWidth % this.oBubblesImgData.img.width,
                        e = Math.floor(16 / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                    ctx.drawImage(this.oBubblesImgData.img, a, e, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, 425 - this.oBubblesImgData.oData.spriteWidth / 2, 675 - this.oBubblesImgData.oData.spriteHeight / 2, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight)
                } else {
                    var a = 10 * this.oBubblesImgData.oData.spriteWidth % this.oBubblesImgData.img.width,
                        e = Math.floor(10 / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                    ctx.drawImage(this.oBubblesImgData.img, a, e, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, 425 - this.oBubblesImgData.oData.spriteWidth / 2, 675 - this.oBubblesImgData.oData.spriteHeight / 2, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight)
                }
                for (var r = 0; r < aLevelSpecificTarget[0].toString().length; r++) {
                    var t = parseFloat(aLevelSpecificTarget[0].toString().charAt(r)),
                        a = t * this.oNumbers0ImgData.oData.spriteWidth % this.oNumbers0ImgData.img.width,
                        e = Math.floor(t / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                    ctx.drawImage(this.oNumbers0ImgData.img, a, e, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, 400 + r * (this.letterSpace * this.numberScale) - this.letterSpace * (1 + aLevelSpecificTarget[0].toString().length + aLevelSpecificTarget[1].toString().length) * this.numberScale, 662, this.oNumbers0ImgData.oData.spriteWidth * this.numberScale, this.oNumbers0ImgData.oData.spriteHeight * this.numberScale)
                }
                var t = 10,
                    a = t * this.oNumbers0ImgData.oData.spriteWidth % this.oNumbers0ImgData.img.width,
                    e = Math.floor(t / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                ctx.drawImage(this.oNumbers0ImgData.img, a, e, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, 400 - this.letterSpace * (1 + aLevelSpecificTarget[1].toString().length) * this.numberScale, 662, this.oNumbers0ImgData.oData.spriteWidth * this.numberScale, this.oNumbers0ImgData.oData.spriteHeight * this.numberScale);
                for (var r = 0; r < aLevelSpecificTarget[1].toString().length; r++) {
                    var t = parseFloat(aLevelSpecificTarget[1].toString().charAt(r)),
                        a = t * this.oNumbers0ImgData.oData.spriteWidth % this.oNumbers0ImgData.img.width,
                        e = Math.floor(t / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                    ctx.drawImage(this.oNumbers0ImgData.img, a, e, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, 400 + r * (this.letterSpace * this.numberScale) - this.letterSpace * aLevelSpecificTarget[1].toString().length * this.numberScale, 662, this.oNumbers0ImgData.oData.spriteWidth * this.numberScale, this.oNumbers0ImgData.oData.spriteHeight * this.numberScale)
                }
            }
        }, t.prototype.renderUnder = function() {
            var t = 0 * this.oHudImgData.oData.spriteWidth % this.oHudImgData.img.width,
                a = Math.floor(0 / (this.oHudImgData.img.width / this.oHudImgData.oData.spriteWidth)) * this.oHudImgData.oData.spriteHeight;
            ctx.drawImage(this.oHudImgData.img, t, a, this.oHudImgData.oData.spriteWidth, this.oHudImgData.oData.spriteHeight, 0, 0, this.oHudImgData.oData.spriteWidth, this.oHudImgData.oData.spriteHeight)
        }, t
    }();
    t.Hud = a
}(Elements || (Elements = {}));
var Elements;
! function(t) {
    var a = function() {
        function t() {
            this.x = 0, this.y = 0, this.scaleX = 1, this.scaleY = 1, this.vx = 0, this.vy = 0, this.isFlying = !1, this.oBubblesImgData = assetLib.getData("bubbles"), this.reset(!0)
        }
        return t.prototype.reset = function(t) {
            if (void 0 === t && (t = !1), this.wasClose = !1, t) this.id = hud.getRandomBubble();
            else {
                if (!(0 == aLevelData[levelNum]["@bLimit"] || 0 != aLevelData[levelNum]["@bLimit"] && --bubblesToFire >= 0)) return void(bubblesToFire = 0);
                this.id = hud.nextBubbleId, hud.addNextBubble()
            }
            this.x = bubbleStartX, this.y = bubbleStartY
        }, t.prototype.shoot = function() {
            this.isFlying = !0, this.vx = 900 * Math.cos(aimRot), this.vy = 900 * Math.sin(aimRot)
        }, t.prototype.tweenBubbleToPark = function() {
            this.isFlying = !1, this.hitAngle = Math.atan2(this.vy, this.vx), this.vx = 0, this.vy = 0, gameTouchState = 3, bubbleStack.addBubble(this.id, bubbleTarget.x, bubbleTarget.y)
        }, t.prototype.update = function() {
            if (2 == gameTouchState && this.isFlying) {
                this.x -= this.vx * delta, this.y -= this.vy * delta, this.x < wallDepth + ballRadius ? (this.x = wallDepth + ballRadius, this.vx *= -1, playSound("bounce")) : this.x > canvas.width - (wallDepth + ballRadius) && (this.x = canvas.width - (wallDepth + ballRadius), this.vx *= -1, playSound("bounce"));
                this.x, bubbleTarget.x, this.x, bubbleTarget.x, this.y, bubbleTarget.y, this.y, bubbleTarget.y;
                this.y < bubbleTarget.y && this.tweenBubbleToPark()
            }
        }, t.prototype.render = function() {
            if (gameControlState && gameTouchState <= 2) {
                var t = this.id * this.oBubblesImgData.oData.spriteWidth % this.oBubblesImgData.img.width,
                    a = Math.floor(this.id / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                ctx.drawImage(this.oBubblesImgData.img, t, a, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, this.x - this.oBubblesImgData.oData.spriteWidth / 2, this.y - this.oBubblesImgData.oData.spriteHeight / 2, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight)
            }
        }, t
    }();
    t.UserBubble = a
}(Elements || (Elements = {}));
var Elements;
! function(t) {
    var a = function() {
        function t() {
            this.x = 0, this.y = 0, this.scaleX = 1, this.scaleY = 1, this.colourId = 0, this.aimLineAlpha = 0, this.aimLineLength = 0, this.hitSomething = !1, this.lineScroll = 0, this.oGameElementsImgData = assetLib.getData("gameElements")
        }
        return t.prototype.findNearestFreePos = function(t, a, e) {
            var i = 0;
            for (this.hitSomething = !1; i < this.aimLineLength;) {
                for (var s = t - i * Math.cos(e), o = a - i * Math.sin(e) - bubbleStack.ceiling, h = 0; h < bubbleStack.aFreePos.length; h++) {
                    if ((s - bubbleStack.aFreePos[h].targX) * (s - bubbleStack.aFreePos[h].targX) + (o - bubbleStack.aFreePos[h].targY) * (o - bubbleStack.aFreePos[h].targY) < ballRadius * ballRadius) {
                        bubbleTarget = {
                            x: bubbleStack.aFreePos[h].posX,
                            y: bubbleStack.ceiling + bubbleStack.aFreePos[h].posY
                        }, this.aimLineLength = i, this.hitSomething = !0;
                        break
                    }
                }
                i++
            }
        }, t.prototype.update = function() {
            this.lineScroll += 50 * delta, this.lineScroll > 500 && (this.lineScroll = 0)
        }, t.prototype.render = function() {
            ctx.save(), ctx.translate(this.x, this.y), ctx.rotate(aimRot);
            var t = this.oGameElementsImgData.oData.oAtlasData[oImageIds["launcher" + userBubble.id]].x,
                a = this.oGameElementsImgData.oData.oAtlasData[oImageIds["launcher" + userBubble.id]].y,
                e = this.oGameElementsImgData.oData.oAtlasData[oImageIds["launcher" + userBubble.id]].width,
                i = this.oGameElementsImgData.oData.oAtlasData[oImageIds["launcher" + userBubble.id]].height;
            if (ctx.drawImage(this.oGameElementsImgData.img, t, a, e, i, -20, -i / 2, e, i), ctx.restore(), 0 == gameTouchState) {
                var s = oImageIds["aimLine" + Math.min(userBubble.id, 5)],
                    t = this.oGameElementsImgData.oData.oAtlasData[s].x,
                    a = this.oGameElementsImgData.oData.oAtlasData[s].y,
                    e = this.oGameElementsImgData.oData.oAtlasData[s].width,
                    i = this.oGameElementsImgData.oData.oAtlasData[s].height,
                    o = Math.abs(Math.tan(aimRot) * (canvas.width / 2 - (wallDepth + ballRadius)));
                this.aimLineLength = Math.min(Math.sqrt(o * o + (canvas.width / 2 - (wallDepth + ballRadius)) * (canvas.width / 2 - (wallDepth + ballRadius))), bubbleStartY - bubbleStack.ceiling + 100), this.findNearestFreePos(bubbleStartX, bubbleStartY, aimRot), this.aimLineLength = Math.min(this.aimLineLength, e), ctx.save(), ctx.globalAlpha = this.aimLineAlpha, ctx.translate(this.x, this.y), ctx.rotate(aimRot), ctx.drawImage(this.oGameElementsImgData.img, t + (e / 2 - this.aimLineLength) + this.lineScroll, a, e / 2 - (e / 2 - this.aimLineLength), i, -this.aimLineLength, -i / 2, e / 2 - (e / 2 - this.aimLineLength), i), ctx.restore();
                var h;
                h = aimingFlipped ? aimX < canvas.width / 2 ? "right" : "left" : aimX < canvas.width / 2 ? "left" : "right";
                for (var r = bubbleStartY, l = 0; !this.hitSomething && o < r - bubbleStack.ceiling;) {
                    if ("left" == h) {
                        var n, t = this.oGameElementsImgData.oData.oAtlasData[s].x,
                            a = this.oGameElementsImgData.oData.oAtlasData[s].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[s].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[s].height;
                        n = l % 2 == 0 ? 180 * radian - aimRot : aimRot;
                        var u = Math.abs(Math.tan(n) * (canvas.width - 2 * (wallDepth + ballRadius)));
                        if (this.aimLineLength = Math.min(Math.sqrt(u * u + (canvas.width - 2 * (wallDepth + ballRadius)) * (canvas.width - 2 * (wallDepth + ballRadius))), bubbleStartY - bubbleStack.ceiling + 100), this.findNearestFreePos(wallDepth + ballRadius, r - o, n), this.aimLineLength = Math.min(this.aimLineLength, e), 0 == l) {
                            ctx.save(), ctx.globalAlpha = this.aimLineAlpha, ctx.translate(wallDepth + ballRadius, r - o), ctx.rotate(n);
                            var m = Math.max(Math.min(this.aimLineLength, 70), 1);
                            ctx.drawImage(this.oGameElementsImgData.img, t + this.lineScroll, a, m, i, -m, -i / 2, m, i), ctx.restore()
                        }
                        r -= o, o = u, h = "right"
                    } else if ("right" == h) {
                        var n, t = this.oGameElementsImgData.oData.oAtlasData[s].x,
                            a = this.oGameElementsImgData.oData.oAtlasData[s].y,
                            e = this.oGameElementsImgData.oData.oAtlasData[s].width,
                            i = this.oGameElementsImgData.oData.oAtlasData[s].height;
                        n = l % 2 == 0 ? 180 * radian - aimRot : aimRot;
                        var u = Math.abs(Math.tan(n) * (canvas.width - 2 * (wallDepth + ballRadius)));
                        if (this.aimLineLength = Math.min(Math.sqrt(u * u + (canvas.width - 2 * (wallDepth + ballRadius)) * (canvas.width - 2 * (wallDepth + ballRadius))), bubbleStartY - bubbleStack.ceiling + 100), this.findNearestFreePos(canvas.width - (wallDepth + ballRadius), r - o, n), this.aimLineLength = Math.min(this.aimLineLength, e), 0 == l) {
                            ctx.save(), ctx.globalAlpha = this.aimLineAlpha, ctx.translate(canvas.width - (wallDepth + ballRadius), r - o), ctx.rotate(n);
                            var m = Math.max(Math.min(this.aimLineLength, 70), 1);
                            ctx.drawImage(this.oGameElementsImgData.img, t + this.lineScroll, a, m, i, -m, -i / 2, m, i), ctx.restore()
                        }
                        r -= o, o = u, h = "left"
                    }
                    if (++l > 50) break
                }
            }
        }, t
    }();
    t.Launcher = a
}(Elements || (Elements = {}));
var Elements;
! function(t) {
    var a = function() {
        function t(t) {
            this.ceilingLimit = 55, this.moveCeilingUpAt = 385, this.moveCeilingDownAt = 360, this.freePosAdjust = .8, this.hasRemoved = !1, this.praiseTarg = 10, this.oBubblesImgData = assetLib.getData("bubbles"), this.ceiling = this.ceilingLimit, this.aBubblePos = new Array;
            for (var a = wallDepth + ballRadius, e = ballRadius, i = 0, s = 0, o = 10, h = 0, r = 0; r < t.length; r++) {
                if (-1 != t[r]) {
                    var l = t[r];
                    10 == l && (l += Math.floor(5 * Math.random())), 0 == i && o--, 10 == t[r] && h++, this.aBubblePos.push({
                        id: l,
                        x: a,
                        y: e,
                        state: 0,
                        float: 0,
                        vx: 0,
                        vy: 0,
                        inc: 0,
                        dist: 0
                    })
                }
                a += 2 * ballRadius, s++, i % 2 == 0 ? 10 == s && (s = 0, a = wallDepth + ballRadius + ballRadius, e += 1.75 * ballRadius, i++) : 9 == s && (s = 0, a = wallDepth + ballRadius, e += 1.75 * ballRadius, i++)
            }
            this.animateInitialCeiling(), hud.setLevelSpecificTargets(o, h), this.getAllFreePos()
        }
        return t.prototype.animateInitialCeiling = function() {
            var t = this,
                a = this.getLowestBubbleY() + this.ceiling,
                e = this.ceiling;
            a > this.moveCeilingUpAt && (e = this.ceiling - (a - this.moveCeilingUpAt)), TweenLite.to(this, 1, {
                ceiling: e,
                ease: "Quad.easeInOut",
                onComplete: function() {
                    t.animateInitialComplete()
                }
            })
        }, t.prototype.animateInitialComplete = function() {
            gameTouchState = 0
        }, t.prototype.setCeiling = function() {
            var t = this.getLowestBubbleY() + this.ceiling;
            t > this.moveCeilingUpAt && (this.ceiling = this.ceiling - (t - this.moveCeilingUpAt))
        }, t.prototype.addBubble = function(t, a, e) {
            var i = this;
            this.aBubblePos.push({
                id: t,
                x: a,
                y: e - this.ceiling,
                state: 1,
                float: 0,
                vx: 0,
                vy: 0,
                inc: 0,
                dist: 0
            }), this.aToRemove = new Array, this.aSpecials = new Array;
            var s = !0,
                o = !1;
            switch (t) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    this.findMatchingConnectingBubbles(t, a, e - this.ceiling), s = !1;
                    break;
                case 15:
                    this.findRainbowConnectingBubbles(t, a, e - this.ceiling, !0);
                    break;
                case 5:
                    this.findVerticleBubbles(t, a, e - this.ceiling, !0), o = !0;
                    break;
                case 6:
                    this.findHorizontalBubbles(t, a, e - this.ceiling, !0), o = !0;
                    break;
                case 7:
                    this.findNuclearBubbles(t, a, e - this.ceiling, !0), o = !0
            }
            for (var h = 0; h < this.aSpecials.length; h++) switch (this.aSpecials[h].id) {
                case 5:
                    this.findVerticleBubbles(this.aSpecials[h].id, this.aSpecials[h].x, this.aSpecials[h].y), o = !0;
                    break;
                case 6:
                    this.findHorizontalBubbles(this.aSpecials[h].id, this.aSpecials[h].x, this.aSpecials[h].y), o = !0;
                    break;
                case 7:
                    this.findNuclearBubbles(this.aSpecials[h].id, this.aSpecials[h].x, this.aSpecials[h].y), o = !0;
                    break;
                case 9:
                    playSound("bonusBubble")
            }
            if (o && playSound("explode" + Math.floor(4 * Math.random())), this.aToRemove.length >= 3 || t > 4 || this.aSpecials.length > 0) curPopChain++, this.hasRemoved = !0, this.aSpecials.length > 0 || s ? addFirework(1, a, e) : addFirework(0, a, e), this.findFloatingBubbles(), this.removeBubbles(a, e - this.ceiling);
            else {
                curPopChain = -1, this.hasRemoved = !1, playSound("bounce");
                for (var h = 0; h < this.aBubblePos.length; h++) this.aBubblePos[h].state = 0
            }
            this.getAllFreePos();
            var r = this.getLowestBubbleY() + this.ceiling;
            r > this.moveCeilingUpAt ? TweenLite.to(this, .75, {
                ceiling: this.ceiling - (r - this.moveCeilingUpAt),
                ease: "Quad.easeInOut",
                onComplete: function() {
                    i.ceilingMoved()
                }
            }) : r < this.moveCeilingDownAt && this.ceiling < this.ceilingLimit ? TweenLite.to(this, .75, {
                ceiling: Math.min(this.ceiling + (this.moveCeilingDownAt - r), this.ceilingLimit),
                ease: "Quad.easeInOut",
                onComplete: function() {
                    i.ceilingMoved()
                }
            }) : this.ceilingMoved()
        }, t.prototype.findNuclearBubbles = function(t, a, e, i) {
            void 0 === i && (i = !1);
            for (var s = 4 * ballRadius * (4 * ballRadius) + 50, o = 0; o < this.aBubblePos.length; o++) {
                this.aBubblePos[o].float = 1;
                var h = (a - this.aBubblePos[o].x) * (a - this.aBubblePos[o].x) + (e - this.aBubblePos[o].y) * (e - this.aBubblePos[o].y),
                    r = Math.atan2(e - this.aBubblePos[o].y, a - this.aBubblePos[o].x),
                    l = Math.max(2e4 - h, 0) / 500;
                this.aBubblePos[o].vx = l * Math.cos(r), this.aBubblePos[o].vy = l * Math.sin(r), this.aBubblePos[o].inc = 0, this.aBubblePos[o].dist = l / 2.5, this.aBubblePos[o].range = Math.sqrt(h) / 25, a != this.aBubblePos[o].x || e != this.aBubblePos[o].y ? h < s && (this.aToRemove.push(this.aBubblePos[o]), this.aBubblePos[o].state = 1, i && this.aBubblePos[o].id > 4 && 8 != this.aBubblePos[o].id && !(this.aBubblePos[o].id > 9 && this.aBubblePos[o].id < 15) && (this.aSpecials.push(this.aBubblePos[o]), this.aBubblePos[o].state = 1)) : (this.aBubblePos[o].vx = l * Math.cos(userBubble.hitAngle), this.aBubblePos[o].vy = l * Math.sin(userBubble.hitAngle), this.aBubblePos[o].inc = 0, this.aBubblePos[o].dist = l / 2.5)
            }
            this.aToRemove.push({
                id: t,
                x: a,
                y: e
            })
        }, t.prototype.findHorizontalBubbles = function(t, a, e, i) {
            void 0 === i && (i = !1);
            for (var s = 2 * ballRadius * (2 * ballRadius) + 50, o = 0; o < this.aBubblePos.length; o++) {
                this.aBubblePos[o].float = 1;
                var h = (a - this.aBubblePos[o].x) * (a - this.aBubblePos[o].x) + (e - this.aBubblePos[o].y) * (e - this.aBubblePos[o].y),
                    r = Math.atan2(e - this.aBubblePos[o].y, a - this.aBubblePos[o].x),
                    l = Math.max(2e4 - h, 0) / 500;
                this.aBubblePos[o].vx = l * Math.cos(r), this.aBubblePos[o].vy = l * Math.sin(r), this.aBubblePos[o].inc = 0, this.aBubblePos[o].dist = l / 2.5, a != this.aBubblePos[o].x || e != this.aBubblePos[o].y ? (e == this.aBubblePos[o].y && (this.aToRemove.push(this.aBubblePos[o]), this.aBubblePos[o].range = Math.abs(Math.round((this.aBubblePos[o].x - a) / (2 * ballRadius))), this.aBubblePos[o].state = 1), i && h < s && this.aBubblePos[o].id > 4 && 8 != this.aBubblePos[o].id && !(this.aBubblePos[o].id > 9 && this.aBubblePos[o].id < 15) && (this.aSpecials.push(this.aBubblePos[o]), this.aBubblePos[o].state = 1)) : (this.aBubblePos[o].vx = l * Math.cos(userBubble.hitAngle), this.aBubblePos[o].vy = l * Math.sin(userBubble.hitAngle), this.aBubblePos[o].inc = 0, this.aBubblePos[o].dist = l / 2.5)
            }
            this.aToRemove.push({
                id: t,
                x: a,
                y: e
            })
        }, t.prototype.findVerticleBubbles = function(t, a, e, i) {
            void 0 === i && (i = !1);
            for (var s = 2 * ballRadius * (2 * ballRadius) + 50, o = 0; o < this.aBubblePos.length; o++) {
                this.aBubblePos[o].float = 1;
                var h = (a - this.aBubblePos[o].x) * (a - this.aBubblePos[o].x) + (e - this.aBubblePos[o].y) * (e - this.aBubblePos[o].y),
                    r = Math.atan2(e - this.aBubblePos[o].y, a - this.aBubblePos[o].x),
                    l = Math.max(2e4 - h, 0) / 500;
                this.aBubblePos[o].vx = l * Math.cos(r), this.aBubblePos[o].vy = l * Math.sin(r), this.aBubblePos[o].inc = 0, this.aBubblePos[o].dist = l / 2.5, a != this.aBubblePos[o].x || e != this.aBubblePos[o].y ? (a > this.aBubblePos[o].x - ballRadius - 5 && a < this.aBubblePos[o].x + ballRadius + 5 && e > this.aBubblePos[o].y - 300 && e < this.aBubblePos[o].y + 300 && (this.aToRemove.push(this.aBubblePos[o]), this.aBubblePos[o].range = Math.abs(Math.round((this.aBubblePos[o].y - e) / (2 * ballRadius))), this.aBubblePos[o].state = 1), i && h < s && this.aBubblePos[o].id > 4 && 8 != this.aBubblePos[o].id && !(this.aBubblePos[o].id > 9 && this.aBubblePos[o].id < 15) && (this.aSpecials.push(this.aBubblePos[o]), this.aBubblePos[o].state = 1)) : (this.aBubblePos[o].vx = l * Math.cos(userBubble.hitAngle), this.aBubblePos[o].vy = l * Math.sin(userBubble.hitAngle), this.aBubblePos[o].inc = 0, this.aBubblePos[o].dist = l / 2.5)
            }
            this.aToRemove.push({
                id: t,
                x: a,
                y: e
            })
        }, t.prototype.findRainbowConnectingBubbles = function(t, a, e, i) {
            void 0 === i && (i = !1);
            for (var s = 2 * ballRadius * (2 * ballRadius) + 50, o = 0; o < this.aBubblePos.length; o++) {
                this.aBubblePos[o].float = 1;
                var h = (a - this.aBubblePos[o].x) * (a - this.aBubblePos[o].x) + (e - this.aBubblePos[o].y) * (e - this.aBubblePos[o].y),
                    r = Math.atan2(e - this.aBubblePos[o].y, a - this.aBubblePos[o].x),
                    l = Math.max(2e4 - h, 0) / 500;
                this.aBubblePos[o].vx = l * Math.cos(r), this.aBubblePos[o].vy = l * Math.sin(r), this.aBubblePos[o].inc = 0, this.aBubblePos[o].dist = l / 2.5, this.aBubblePos[o].range = Math.sqrt(h) / 25, a != this.aBubblePos[o].x || e != this.aBubblePos[o].y ? h < s && (this.aBubblePos[o].id > 4 && 8 != this.aBubblePos[o].id && !(this.aBubblePos[o].id > 9 && this.aBubblePos[o].id < 15) ? (this.aSpecials.push(this.aBubblePos[o]), this.aBubblePos[o].state = 1) : this.aBubblePos[o].id < 5 ? (this.aBubblePos[o].state = 1, this.aToRemove.push(this.aBubblePos[o])) : i && this.aBubblePos[o].id > 4 && 8 != this.aBubblePos[o].id && !(this.aBubblePos[o].id > 9 && this.aBubblePos[o].id < 15) && (this.aSpecials.push(this.aBubblePos[o]), this.aBubblePos[o].state = 1)) : (this.aBubblePos[o].vx = l * Math.cos(userBubble.hitAngle), this.aBubblePos[o].vy = l * Math.sin(userBubble.hitAngle), this.aBubblePos[o].inc = 0, this.aBubblePos[o].dist = l / 2.5)
            }
            if (this.aToRemove.length > 0)
                for (var o = 0; o < this.aToRemove.length; o++)
                    for (var n = 0; n < this.aBubblePos.length; n++)
                        if (this.aToRemove[o].id == this.aBubblePos[n].id && 0 == this.aBubblePos[n].state) {
                            var h = (this.aToRemove[o].x - this.aBubblePos[n].x) * (this.aToRemove[o].x - this.aBubblePos[n].x) + (this.aToRemove[o].y - this.aBubblePos[n].y) * (this.aToRemove[o].y - this.aBubblePos[n].y);
                            h < s && (this.aBubblePos[n].state = this.aToRemove.length + 1, this.aToRemove.push(this.aBubblePos[n]))
                        }
            this.aToRemove.push({
                id: t,
                x: a,
                y: e
            })
        }, t.prototype.findMatchingConnectingBubbles = function(t, a, e) {
            for (var i = 2 * ballRadius * (2 * ballRadius) + 50, s = 0; s < this.aBubblePos.length; s++) {
                this.aBubblePos[s].float = 1;
                var o = (a - this.aBubblePos[s].x) * (a - this.aBubblePos[s].x) + (e - this.aBubblePos[s].y) * (e - this.aBubblePos[s].y),
                    h = Math.atan2(e - this.aBubblePos[s].y, a - this.aBubblePos[s].x),
                    r = Math.max(2e4 - o, 0) / 500;
                this.aBubblePos[s].vx = r * Math.cos(h), this.aBubblePos[s].vy = r * Math.sin(h), this.aBubblePos[s].inc = 0, this.aBubblePos[s].dist = r / 2.5, this.aBubblePos[s].range = Math.sqrt(o) / 25, a != this.aBubblePos[s].x || e != this.aBubblePos[s].y ? o < i && (this.aBubblePos[s].id == t ? (this.aToRemove.push(this.aBubblePos[s]), this.aBubblePos[s].state = 1) : this.aBubblePos[s].id > 4 && 8 != this.aBubblePos[s].id && !(this.aBubblePos[s].id > 9 && this.aBubblePos[s].id < 15) && (this.aSpecials.push(this.aBubblePos[s]), this.aBubblePos[s].state = 1)) : (this.aBubblePos[s].vx = r * Math.cos(userBubble.hitAngle), this.aBubblePos[s].vy = r * Math.sin(userBubble.hitAngle), this.aBubblePos[s].inc = 0, this.aBubblePos[s].dist = r / 2.5)
            }
            if (this.aToRemove.length > 0)
                for (var s = 0; s < this.aToRemove.length; s++)
                    for (var l = 0; l < this.aBubblePos.length; l++)
                        if (this.aToRemove[s].id == this.aBubblePos[l].id && 0 == this.aBubblePos[l].state) {
                            var o = (this.aToRemove[s].x - this.aBubblePos[l].x) * (this.aToRemove[s].x - this.aBubblePos[l].x) + (this.aToRemove[s].y - this.aBubblePos[l].y) * (this.aToRemove[s].y - this.aBubblePos[l].y);
                            this.aToRemove[s].x, this.aToRemove[s].x, this.aToRemove[s].y, this.aToRemove[s].y;
                            o < i && (this.aBubblePos[l].state = 1, this.aToRemove.push(this.aBubblePos[l]))
                        }
            this.aToRemove.push({
                id: t,
                x: a,
                y: e
            })
        }, t.prototype.findFloatingBubbles = function() {
            for (var t = (new Array, 0); t < this.aBubblePos.length; t++) this.aBubblePos[t].y == ballRadius && 0 == this.aBubblePos[t].state && (this.aBubblePos[t].float = 0, this.findAnyConnectingBubbles(this.aBubblePos[t].x, this.aBubblePos[t].y))
        }, t.prototype.findAnyConnectingBubbles = function(t, a) {
            for (var e = 2 * ballRadius * (2 * ballRadius) + 50, i = new Array, s = 0; s < this.aBubblePos.length; s++)
                if ((t != this.aBubblePos[s].x || a != this.aBubblePos[s].y) && 0 == this.aBubblePos[s].state) {
                    var o = (t - this.aBubblePos[s].x) * (t - this.aBubblePos[s].x) + (a - this.aBubblePos[s].y) * (a - this.aBubblePos[s].y);
                    o < e && (this.aBubblePos[s].float = 0, i.push(this.aBubblePos[s]))
                }
            if (i.length > 0)
                for (var s = 0; s < i.length; s++)
                    for (var h = 0; h < this.aBubblePos.length; h++)
                        if (1 == this.aBubblePos[h].float && 0 == this.aBubblePos[h].state) {
                            var o = (i[s].x - this.aBubblePos[h].x) * (i[s].x - this.aBubblePos[h].x) + (i[s].y - this.aBubblePos[h].y) * (i[s].y - this.aBubblePos[h].y);
                            o < e && (this.aBubblePos[h].float = 0, i.push(this.aBubblePos[h]))
                        }
        }, t.prototype.removeBubbles = function(t, a) {
            this.aToRemove.length > this.praiseTarg && (displayInGameText("praise" + Math.floor(3 * Math.random()), .5), playSound("praise"), this.praiseTarg += 5);
            for (var e = 0; e < this.aBubblePos.length; e++)
                if (0 != this.aBubblePos[e].state || 1 == this.aBubblePos[e].float) {
                    0 != this.aBubblePos[e].state ? addPop(this.aBubblePos[e].x, this.aBubblePos[e].y, this.aBubblePos[e].range, this.aBubblePos[e].id) : addFallingBubble(this.aBubblePos[e].id, this.aBubblePos[e].x, this.aBubblePos[e].y + this.ceiling);
                    for (var i = 0; i < aGlints.length; i++) aGlints[i].bubbleTargId == e && aGlints[i].resetInGame();
                    this.aBubblePos.splice(e, 1), e -= 1
                }
        }, t.prototype.ceilingMoved = function() {
            if (1 == aLevelData[levelNum]["@levelType"]) {
                for (var t = 10, a = 0; a < this.aBubblePos.length; a++) this.aBubblePos[a].y == ballRadius && t--;
                if (aLevelSpecificTarget[0] = t, aLevelSpecificTarget[0] >= aLevelSpecificTarget[1]) return void initLevelCompleteSequence()
            } else if (2 == aLevelData[levelNum]["@levelType"]) {
                var t = aLevelSpecificTarget[1],
                    e = !1;
                aLevelSpecificTarget[0] != aLevelSpecificTarget[1] - 1 && (e = !0);
                for (var a = 0; a < this.aBubblePos.length; a++) this.aBubblePos[a].id > 9 && this.aBubblePos[a].id < 15 && t--;
                if (aLevelSpecificTarget[0] = t, aLevelSpecificTarget[0] >= aLevelSpecificTarget[1]) return void initLevelCompleteSequence();
                e && aLevelSpecificTarget[0] == aLevelSpecificTarget[1] - 1 && displayInGameText("oneLeft", .5)
            }
            firstPop = !0, gameTouchState = 0, launcher.render(), 0 != aLevelData[levelNum]["@bLimit"] && gameIsInPlay && 0 == bubblesToFire && initLevelFailSequence(), userBubble.reset()
        }, t.prototype.getLowestBubbleY = function() {
            for (var t = 0, a = 0; a < this.aBubblePos.length; a++) this.aBubblePos[a].y > t && (t = this.aBubblePos[a].y);
            return t
        }, t.prototype.getAllFreePos = function() {
            this.aFreePos = new Array;
            for (var t = wallDepth + ballRadius + ballRadius, a = 0; a < 9; a++) {
                for (var e = new Array(1, 1), i = 0; i < this.aBubblePos.length; i++) t > wallDepth + ballRadius ? t - ballRadius == this.aBubblePos[i].x && 0 == this.aBubblePos[i].y && (e[0] = 0) : e[0] = 0, t < canvas.width - (wallDepth + ballRadius) ? t + ballRadius == this.aBubblePos[i].x && 0 == this.aBubblePos[i].y && (e[1] = 0) : e[1] = 0;
                1 == e[0] && this.aFreePos.push({
                    posX: t - ballRadius,
                    posY: ballRadius,
                    targX: t - ballRadius / 2,
                    targY: ballRadius
                }), 1 == e[0] && this.aFreePos.push({
                    posX: t + ballRadius,
                    posY: ballRadius,
                    targX: t + ballRadius / 2,
                    targY: ballRadius
                }), t += 2 * ballRadius
            }
            aAllowedBubbleStates = new Array(0, 0, 0, 0, 0);
            for (var a = 0; a < this.aBubblePos.length; a++) {
                for (var e = new Array(1, 1, 1, 1), i = 0; i < this.aBubblePos.length; i++) this.aBubblePos[a].y != ballRadius && this.aBubblePos[a].x > wallDepth + 2 * ballRadius ? this.aBubblePos[a].x - 2 * ballRadius == this.aBubblePos[i].x && this.aBubblePos[a].y == this.aBubblePos[i].y && (e[0] = 0) : e[0] = 0, this.aBubblePos[a].x > wallDepth + ballRadius ? this.aBubblePos[a].x - ballRadius == this.aBubblePos[i].x && this.aBubblePos[a].y + 1.75 * ballRadius == this.aBubblePos[i].y && (e[1] = 0) : e[1] = 0, this.aBubblePos[a].x < canvas.width - (wallDepth + ballRadius) ? this.aBubblePos[a].x + ballRadius == this.aBubblePos[i].x && this.aBubblePos[a].y + 1.75 * ballRadius == this.aBubblePos[i].y && (e[2] = 0) : e[2] = 0, this.aBubblePos[a].y != ballRadius && this.aBubblePos[a].x < canvas.width - (wallDepth + 2 * ballRadius) ? this.aBubblePos[a].x + 2 * ballRadius == this.aBubblePos[i].x && this.aBubblePos[a].y == this.aBubblePos[i].y && (e[3] = 0) : e[3] = 0;
                1 == e[0] && this.aFreePos.push({
                    posX: this.aBubblePos[a].x - 2 * ballRadius,
                    posY: this.aBubblePos[a].y,
                    targX: this.aBubblePos[a].x - 2 * ballRadius / 2 * this.freePosAdjust,
                    targY: this.aBubblePos[a].y
                }), 1 == e[1] && this.aFreePos.push({
                    posX: this.aBubblePos[a].x - ballRadius,
                    posY: this.aBubblePos[a].y + 1.75 * ballRadius,
                    targX: this.aBubblePos[a].x - ballRadius / 2 * this.freePosAdjust,
                    targY: this.aBubblePos[a].y + 1.75 * ballRadius / 2 * this.freePosAdjust
                }), 1 == e[2] && this.aFreePos.push({
                    posX: this.aBubblePos[a].x + ballRadius,
                    posY: this.aBubblePos[a].y + 1.75 * ballRadius,
                    targX: this.aBubblePos[a].x + ballRadius / 2 * this.freePosAdjust,
                    targY: this.aBubblePos[a].y + 1.75 * ballRadius / 2 * this.freePosAdjust
                }), 1 == e[3] && this.aFreePos.push({
                    posX: this.aBubblePos[a].x + 2 * ballRadius,
                    posY: this.aBubblePos[a].y,
                    targX: this.aBubblePos[a].x + 2 * ballRadius / 2 * this.freePosAdjust,
                    targY: this.aBubblePos[a].y
                }), this.aBubblePos[a].id < 5 && (aAllowedBubbleStates[this.aBubblePos[a].id] = !0)
            }
            for (var s = !0, a = 0; a < aAllowedBubbleStates.length; a++) aAllowedBubbleStates[a] && (s = !1);
            s && (aAllowedBubbleStates = new Array(1, 1, 1, 1, 1))
        }, t.prototype.update = function() {}, t.prototype.render = function() {
            var t, a, e, i;
            if (this.hasRemoved ? (e = 10, i = 1.5) : (e = 5, i = .75), 1 == aLevelData[levelNum]["@levelType"])
                for (var s = 0; s < 10; s++) {
                    var o = 16 * this.oBubblesImgData.oData.spriteWidth % this.oBubblesImgData.img.width,
                        h = Math.floor(16 / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                    ctx.drawImage(this.oBubblesImgData.img, o, h, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, wallDepth + ballRadius - this.oBubblesImgData.oData.spriteWidth / 2 + 2 * ballRadius * s, this.ceiling + ballRadius - this.oBubblesImgData.oData.spriteHeight / 2, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight)
                }
            for (var s = 0; s < this.aBubblePos.length; s++) {
                this.aBubblePos[s].inc < e ? (this.aBubblePos[s].inc += this.aBubblePos[s].dist * delta, t = this.aBubblePos[s].vx * (this.aBubblePos[s].inc / e) * (this.aBubblePos[s].inc / e - 2) + this.aBubblePos[s].vx, a = this.aBubblePos[s].vy * (this.aBubblePos[s].inc / e) * (this.aBubblePos[s].inc / e - 2) + this.aBubblePos[s].vy) : (t = 0, a = 0, this.aBubblePos[s].inc = e);
                var o = this.aBubblePos[s].id * this.oBubblesImgData.oData.spriteWidth % this.oBubblesImgData.img.width,
                    h = Math.floor(this.aBubblePos[s].id / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                ctx.drawImage(this.oBubblesImgData.img, o, h, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, this.aBubblePos[s].x - this.oBubblesImgData.oData.spriteWidth / 2 - Math.sin(this.aBubblePos[s].inc) * (t * i), this.ceiling + this.aBubblePos[s].y - this.oBubblesImgData.oData.spriteHeight / 2 - Math.sin(this.aBubblePos[s].inc) * (a * i), this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight)
            }
        }, t
    }();
    t.BubbleStack = a
}(Elements || (Elements = {}));
var Elements;
! function(t) {
    var a = function() {
        function t() {
            this.x = 0, this.y = 0, this.removeMe = !1, this.flickerInc = 0, this.flickerIncTarg = .2 * Math.random() + .05, this.bounceInc = 0, this.flipX = 1, this.state = 0, this.flashInc = 0, this.scale = 1, this.fallSpeed = 1e3, this.oBubblesImgData = assetLib.getData("bubbles"), this.reset(), this.y = Math.random() * canvas.height
        }
        return t.prototype.reset = function() {
            this.id = Math.floor(5 * Math.random()), this.x = 50 + Math.random() * (canvas.width - 100), this.y = -50 - 300 * Math.random(), this.vx = 100 * Math.random() - 50, this.vy = 150 * Math.random() + 200
        }, t.prototype.update = function() {
            this.x += this.vx * delta, this.y += this.vy * delta, this.x > canvas.width - (wallDepth + ballRadius) ? (this.x = canvas.width - (wallDepth + ballRadius), this.vx *= -1) : this.x < wallDepth + ballRadius && (this.x = wallDepth + ballRadius, this.vx *= -1),
                this.y > canvas.height + 50 && this.reset()
        }, t.prototype.render = function() {
            var t = this.id * this.oBubblesImgData.oData.spriteWidth % this.oBubblesImgData.img.width,
                a = Math.floor(this.id / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
            ctx.drawImage(this.oBubblesImgData.img, t, a, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, this.x - this.oBubblesImgData.oData.spriteWidth / 2 * this.scale, this.y - this.oBubblesImgData.oData.spriteHeight / 2 * this.scale, this.oBubblesImgData.oData.spriteWidth * this.scale, this.oBubblesImgData.oData.spriteHeight * this.scale)
        }, t
    }();
    t.BasicFallingBubble = a
}(Elements || (Elements = {}));
var Elements;
! function(t) {
    var a = function() {
        function t(t, a, e) {
            this.x = 0, this.y = 0, this.removeMe = !1, this.flickerInc = 0, this.flickerIncTarg = .2 * Math.random() + .05, this.bounceInc = 0, this.flipX = 1, this.state = 0, this.flashInc = 0, this.scale = 1, this.fallSpeed = 1e3, this.oBubblesImgData = assetLib.getData("bubbles");
            var i = 200 * Math.random() + 400;
            null == t ? (t = 360 * Math.random() * radian, i = 100 * Math.random() + 100) : t += (10 * Math.random() - 5) * radian, this.flashIncTarg = null == a ? 0 : (a - 1) / 20, this.vx = -i * Math.cos(t), this.vy = -i * Math.sin(t), e > 9 && e < 15 && (e += 7, this.scale = 3, TweenLite.to(this, 2, {
                scale: 1.5,
                ease: "Elastic.easeOut"
            }), this.vy = -100, this.fallSpeed = 500), this.setId(e), this.vTween = TweenLite.to(this, 3, {
                vx: .25 * this.vx,
                ease: "Quad.easeOut"
            })
        }
        return t.prototype.setId = function(t) {
            this.flickerId = this.id = t
        }, t.prototype.update = function() {
            0 == this.state ? (this.flashInc += delta, this.flashInc >= this.flashIncTarg && (this.state = 1)) : (this.x += this.vx * delta * this.flipX, this.vy += this.fallSpeed * delta, this.y += this.vy * delta, this.x > canvas.width - (wallDepth + ballRadius) ? (this.x = canvas.width - (wallDepth + ballRadius), this.flipX *= -1) : this.x < wallDepth + ballRadius && (this.x = wallDepth + ballRadius, this.flipX *= -1), this.bounceInc < 0 && this.y > 600 - ballRadius && (this.bounceInc++, this.y = 600 - ballRadius, this.vy *= -.5), this.y > canvas.height + 50 && (this.removeMe = !0))
        }, t.prototype.render = function() {
            var t = this.id * this.oBubblesImgData.oData.spriteWidth % this.oBubblesImgData.img.width,
                a = Math.floor(this.id / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
            ctx.drawImage(this.oBubblesImgData.img, t, a, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, this.x - this.oBubblesImgData.oData.spriteWidth / 2 * this.scale, this.y - this.oBubblesImgData.oData.spriteHeight / 2 * this.scale, this.oBubblesImgData.oData.spriteWidth * this.scale, this.oBubblesImgData.oData.spriteHeight * this.scale)
        }, t
    }();
    t.FallingBubble = a
}(Elements || (Elements = {}));
var __extends = this.__extends || function(t, a) {
        function e() {
            this.constructor = t
        }
        e.prototype = a.prototype, t.prototype = new e
    },
    Elements;
! function(t) {
    var a = function(t) {
        function a(a) {
            t.call(this, assetLib.getData("firework" + a), 30, 30, "explode"), this.vy = 0, this.setAnimType("once", "explode"), this.animEndedFunc = function() {
                this.removeMe = !0
            };
            var e = 3;
            1 == a && (e = 4), TweenLite.to(this, 1, {
                scaleX: e,
                scaleY: e,
                ease: "Quad.easeOut"
            })
        }
        return __extends(a, t), a.prototype.update = function() {
            this.vy += 150 * delta, this.y += this.vy * delta, t.prototype.updateAnimation.call(this, delta)
        }, a.prototype.render = function() {
            t.prototype.renderSimple.call(this, ctx)
        }, a
    }(Utils.AnimSprite);
    t.Firework = a
}(Elements || (Elements = {}));
var Elements;
! function(t) {
    var a = function() {
        function t(t, a) {
            this.x = 0, this.y = 0, this.scale = 0, this.inc = 0, this.canShow = !0, this.oGameElementsImgData = assetLib.getData("gameElements"), this.id = t, TweenLite.to(this, 1, {
                scale: 4,
                ease: "Quad.easeOut"
            }), "game" == a ? this.resetInGame() : "map" == a && this.resetInMap()
        }
        return t.prototype.resetInGame = function() {
            bubbleStack.aBubblePos.length / 4 > this.id ? (this.bubbleTargId = Math.floor(Math.random() * bubbleStack.aBubblePos.length), this.incRate = 3 * Math.random() + 1, this.canShow = !0) : this.canShow = !1
        }, t.prototype.resetInMap = function() {
            this.incRate = 3 * Math.random() + 1, this.canShow = !0, this.targX = 400 * Math.random() + 25, this.targY = 1200 * Math.random() + 100
        }, t.prototype.updateInGame = function() {
            if (!bubbleStack.aBubblePos[this.bubbleTargId]) return this.resetInGame(), void(this.canShow = !1);
            this.x = bubbleStack.aBubblePos[this.bubbleTargId].x + 3, this.y = bubbleStack.aBubblePos[this.bubbleTargId].y - 13 + bubbleStack.ceiling, this.inc += this.incRate * delta, this.scale = 2 * Math.sin(this.inc), this.inc > 3.14 && (this.inc = 0, this.resetInGame())
        }, t.prototype.updateInMap = function() {
            this.x = this.targX, this.y = this.targY - panel.mapPosRealY, this.inc += this.incRate * delta, this.scale = 1.5 * Math.sin(this.inc), this.inc > 3.14 && (this.inc = 0, this.resetInMap())
        }, t.prototype.render = function() {
            if (this.canShow) {
                var t = this.oGameElementsImgData.oData.oAtlasData[oImageIds.glint].x,
                    a = this.oGameElementsImgData.oData.oAtlasData[oImageIds.glint].y,
                    e = this.oGameElementsImgData.oData.oAtlasData[oImageIds.glint].width,
                    i = this.oGameElementsImgData.oData.oAtlasData[oImageIds.glint].height;
                ctx.drawImage(this.oGameElementsImgData.img, t, a, e, i, this.x - e / 2 * this.scale, this.y - i / 2 * this.scale, e * this.scale, i * this.scale)
            }
        }, t
    }();
    t.Glint = a
}(Elements || (Elements = {}));
var Elements;
! function(t) {
    var a = function(t) {
        function a(a, e, i) {
            t.call(this, assetLib.getData("pop"), 20, 10, "hide"), this.explodeStage = 0, this.incY = 0, this.oBubblesImgData = assetLib.getData("bubbles"), this.oGameElementsImgData = assetLib.getData("gameElements"), this.bubbleId = e, this.score = i;
            var s = this;
            setTimeout(function() {
                s.startAnim()
            }, 50 * (a - 1))
        }
        return __extends(a, t), a.prototype.startAnim = function() {
            playSound("pop" + Math.floor(4 * Math.random())), this.bubbleId = Math.min(this.bubbleId, 5), this.setAnimType("once", "explode" + this.bubbleId), this.explodeStage = 1, this.animEndedFunc = function() {
                this.startY = this.y, this.explodeStage = 2, this.scaleX = 0, this.scaleY = 0, TweenLite.to(this, .5, {
                    scaleX: 1,
                    scaleY: 1,
                    ease: "Back.easeOut"
                })
            }
        }, a.prototype.update = function() {
            1 == this.explodeStage ? (this.offsetY = bubbleStack.ceiling, t.prototype.updateAnimation.call(this, delta)) : 2 == this.explodeStage && (this.incY += 7 * delta, this.y = this.startY + 5 * Math.sin(this.incY + this.x + this.startY), this.incY > 8 && (TweenLite.to(this, 1, {
                x: canvas.width / 2,
                y: -300,
                scaleX: 0,
                scaleY: 0,
                ease: "Back.easeIn",
                onComplete: function(t) {
                    t.removeMe = !0
                },
                onCompleteParams: [this]
            }), this.explodeStage = 3))
        }, a.prototype.render = function() {
            if (0 == this.explodeStage) {
                var a = this.bubbleId * this.oBubblesImgData.oData.spriteWidth % this.oBubblesImgData.img.width,
                    e = Math.floor(this.bubbleId / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                ctx.drawImage(this.oBubblesImgData.img, a, e, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, this.x - this.oBubblesImgData.oData.spriteWidth / 2, this.y - this.oBubblesImgData.oData.spriteHeight / 2 + bubbleStack.ceiling, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight)
            } else if (1 == this.explodeStage) t.prototype.renderSimple.call(this, ctx);
            else if (2 == this.explodeStage || 3 == this.explodeStage) {
                var i = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.score]].x,
                    s = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.score]].y,
                    o = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.score]].width,
                    h = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.score]].height;
                ctx.drawImage(this.oGameElementsImgData.img, i, s, o, h, this.x - o / 2 * this.scaleX, this.y - h / 2 * this.scaleY + bubbleStack.ceiling, o * this.scaleX, h * this.scaleY)
            }
        }, a
    }(Utils.AnimSprite);
    t.Pop = a
}(Elements || (Elements = {}));
var Elements;
! function(t) {
    var a = function(t) {
        function a() {
            t.call(this, assetLib.getData("flame"), 12, 10, "burn"), this.x = 170, this.y = 550
        }
        return __extends(a, t), a.prototype.update = function() {
            t.prototype.updateAnimation.call(this, delta)
        }, a.prototype.render = function() {
            t.prototype.renderSimple.call(this, ctx)
        }, a
    }(Utils.AnimSprite);
    t.Flame = a
}(Elements || (Elements = {}));
var Utils;
! function(t) {
    var a = function() {
        function t(t) {
            this.dataGroupNum = 2, this.saveDataId = t, window.gradle = window.gradle ? window.gradle : {}, window.gradle.localStorage = window.gradle.localStorage ? window.gradle.localStorage : window.localStorage, window.gradle.sessionStorage = window.gradle.sessionStorage ? window.gradle.sessionStorage : window.sessionStorage, this.clearData(), this.setInitialData()
        }
        return t.prototype.clearData = function() {
            this.aLevelStore = new Array, this.aLevelStore.push(1), this.aLevelStore.push(0);
            for (var t = 0; t < aMapButs.length - 1; t++) this.aLevelStore.push(0), this.aLevelStore.push(0)
        }, t.prototype.resetData = function() {
            this.clearData(), this.saveData()
        }, t.prototype.setInitialData = function() {
            if (null != localStorage.getItem(this.saveDataId) && "" != localStorage.getItem(this.saveDataId)) {
                this.aLevelStore = localStorage.getItem(this.saveDataId).split(",");
                for (var t in this.aLevelStore) this.aLevelStore[t] = parseInt(this.aLevelStore[t])
            } else this.saveData()
        }, t.prototype.setData = function(t, a, e) {
            e > this.aLevelStore[2 * t + 1] && (this.aLevelStore[2 * t + 1] = e), a + 1 > this.aLevelStore[2 * t] && (this.aLevelStore[2 * t] = a + 1), t < aMapButs.length - 1 && 0 == this.aLevelStore[2 * (t + 1)] && (this.aLevelStore[2 * (t + 1)] = 1)
        }, t.prototype.getStars = function(t) {
            return this.aLevelStore[2 * t]
        }, t.prototype.getTotalScore = function() {
            for (var t = 0, a = 0; a < saveDataHandler.aLevelStore.length; a++) t += saveDataHandler.aLevelStore[a + 1], a++;
            return t
        }, t.prototype.getScore = function(t) {
            return this.aLevelStore[2 * t + 1]
        }, t.prototype.saveData = function() {
            for (var t = "", a = 0; a < this.aLevelStore.length; a++) t += this.aLevelStore[a], a < this.aLevelStore.length - 1 && (t += ",");
			console.log(this.saveDataId);
            localStorage.setItem(this.saveDataId, t)
        }, t
    }();
    t.SaveDataHandler = a
}(Utils || (Utils = {}));
var Utils;
! function(t) {
    var a = function() {
        function t() {
            this.oTextData = {}, this.inc = 0, this.kernOffset = 1, this.createTextObjects()
        }
        return t.prototype.createTextObjects = function() {
            for (var t in assetLib.textData.langText.text[curLang]) {
				var gradle_t = assetLib.textData.langText.text[curLang][t];
				this.oTextData[t] = {}, this.oTextData[t].aLineData = this.getCharData(gradle_t["@text"], gradle_t["@fontId"]), this.oTextData[t].aLineWidths = this.getLineWidths(this.oTextData[t].aLineData), this.oTextData[t].blockWidth = this.getBlockWidth(this.oTextData[t].aLineData), this.oTextData[t].blockHeight = this.getBlockHeight(this.oTextData[t].aLineData, gradle_t["@fontId"]), this.oTextData[t].lineHeight = parseInt(assetLib.textData["fontData" + gradle_t["@fontId"]].text.common["@lineHeight"]), this.oTextData[t].oFontImgData = assetLib.getData("font" + gradle_t["@fontId"])
			}
        }, t.prototype.getLineWidths = function(t) {
            for (var a, e = new Array, i = 0; i < t.length; i++) {
                a = 0;
                for (var s = 0; s < t[i].length; s++) a += parseInt(t[i][s]["@xadvance"]) + this.kernOffset, 0 == s ? a -= parseInt(t[i][s]["@xoffset"]) : s == t[i].length - 1 && (a += parseInt(t[i][s]["@xoffset"]));
                e.push(a)
            }
            return e
        }, t.prototype.getBlockWidth = function(t) {
            for (var a, e = 0, i = 0; i < t.length; i++) {
                a = 0;
                for (var s = 0; s < t[i].length; s++) a += parseInt(t[i][s]["@xadvance"]) + this.kernOffset, 0 == s ? a -= parseInt(t[i][s]["@xoffset"]) : s == t[i].length - 1 && (a += parseInt(t[i][s]["@xoffset"]));
                a > e && (e = a)
            }
            return e
        }, t.prototype.getBlockHeight = function(t, a) {
            return t.length * parseInt(assetLib.textData["fontData" + a].text.common["@lineHeight"])
        }, t.prototype.getCharData = function(t, a) {
            for (var e = new Array, i = 0; i < t.length; i++) {
                e[i] = new Array;
                for (var s = 0; s < t[i].length; s++)
                    for (var o = 0; o < assetLib.textData["fontData" + a].text.chars.char.length; o++) t[i][s].charCodeAt() == assetLib.textData["fontData" + a].text.chars.char[o]["@id"] && e[i].push(assetLib.textData["fontData" + a].text.chars.char[o])
            }
            return e
        }, t.prototype.renderText = function(t) {
            var a, e = this.oTextData[t.text].aLineData,
                i = this.oTextData[t.text].oFontImgData,
                s = 0,
                o = 0,
                h = 0,
                r = 1,
                l = 0;
            t.lineOffsetY && (h = t.lineOffsetY), t.scale && (r = t.scale);
            var n = 1 * r;
            t.maxWidth && this.oTextData[t.text].blockWidth * r > t.maxWidth && (n = t.maxWidth / this.oTextData[t.text].blockWidth), t.anim && (this.inc += 7 * delta);
            for (var u = 0; u < e.length; u++) {
                a = 0, "centre" == t.alignX && (s = this.oTextData[t.text].aLineWidths[u] / 2), "centre" == t.alignY && (o = this.oTextData[t.text].blockHeight / 2 + h * (e.length - 1) / 2);
                for (var m = 0; m < e[u].length; m++) {
                    var g = e[u][m]["@x"],
                        d = e[u][m]["@y"],
                        b = e[u][m]["@width"],
                        c = e[u][m]["@height"];
                    t.anim && (l = Math.sin(this.inc + m / 2) * (c / 10 * n)), ctx.drawImage(i.img, g, d, b, c, t.x + (a + parseInt(e[u][m]["@xoffset"]) - s) * n, t.y + (parseInt(e[u][m]["@yoffset"]) + u * this.oTextData[t.text].lineHeight + u * h - o) * n + l, b * n, c * n), a += parseInt(e[u][m]["@xadvance"]) + this.kernOffset
                }
            }
        }, t
    }();
    t.TextDisplay = a
}(Utils || (Utils = {}));
var requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            window.setTimeout(t, 1e3 / 60, (new Date).getTime())
        }
    }(),
    previousTime, canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
canvas.width = 450, canvas.height = 700;
var canvasX, canvasY, canvasScaleX, canvasScaleY, div = document.getElementById("canvas-wrapper"),
    sound, music, audioType = 0,
    muted = !1,
    splash, splashTimer = 0,
    assetLib, preAssetLib, rotatePause = !1,
    manualPause = !1,
    isMobile = !0,
    gameState = "loading",
    aLangs = new Array("EN"),
    curLang = "",
    isBugBrowser = !1,
    isIE10 = !1,
    delta, radian = Math.PI / 180,
    ios9FirstTouch = !1,
    textDisplay;
navigator.userAgent.match(/MSIE\s([\d]+)/) && (isIE10 = !0);
var deviceAgent = navigator.userAgent.toLowerCase();
(deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i)) && (isMobile = !0, deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent) && (isBugBrowser = !0));
var userInput = new Utils.UserInput(canvas, isBugBrowser);
/*resizeCanvas(), */window.onresize = function() {
    setTimeout(function() {
        resizeCanvas()
    }, 1)
}, window.addEventListener("load", function() {
    setTimeout(function() {
        resizeCanvas()
    }, 0), 
	window.addEventListener("orientationchange", function() {
        setTimeout(function() {
            resizeCanvas()
        }, 500), setTimeout(function() {
            resizeCanvas()
        }, 2e3)
    }, !1)
});
var ua = navigator.userAgent,
    isSharpStock = /SHL24|SH-01F/i.test(ua) && isStock(),
    isXperiaAStock = /SO-04E/i.test(ua) && isStock(),
    isFujitsuStock = /F-01F/i.test(ua) && isStock();
!isIE10 && (void 0 !== window.AudioContext || void 0 !== window.webkitAudioContext || -1 == navigator.userAgent.indexOf("Android") || isSharpStock || isXperiaAStock || isFujitsuStock) ? (audioType = 1, sound = new Howl({
    urls: ["audio/sound.ogg", "audio/sound.m4a"],
    sprite: {
        click: [0, 450],
        explode0: [500, 800],
        explode1: [1500, 800],
        explode2: [2500, 800],
        explode3: [3500, 800],
        gemRelease: [4500, 1400],
        levelSuccess: [6e3, 1900],
        pop0: [8e3, 300],
        pop1: [8500, 300],
        pop2: [9e3, 300],
        pop3: [9500, 300],
        switchBubbles: [1e4, 400],
        startLevel: [10500, 2e3],
        levelFail: [13e3, 1200],
        fire0: [14500, 600],
        fire1: [15500, 600],
        fire2: [16500, 600],
        fire3: [17500, 600],
        bonusBubble: [18500, 2e3],
        starProgress: [21e3, 1600],
        bounce: [23e3, 500],
        praise: [24e3, 1300]
    }
}), music = new Howl({
    urls: ["audio/music.ogg", "audio/music.m4a"],
    volume: .01,
    loop: !0
})) : audioType = 0;
var panel, hud, background, totalScore = 0,
    levelScore = 0,
    levelNum = 0,
    aLevelUps, levelBonusScore, bonusScore, aTutorials = new Array,
    panelFrame, oLogoData = {},
    oLogoBut, musicTween, oImageIds = {},
    bubbleStartX = canvas.width / 2,
    bubbleStartY = 530,
    userBubble, launcher, bubbleStack, gameTouchState, aimX, aimY, aimRot, testVar = "------",
    ballRadius = 20,
    wallDepth = 25,
    bubbleTarget, aFallingBubbles, aEffects, aGlints, aimingFlipped = !1,
    aPopScores = new Array(10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100),
    curPopChain, aimClickStartY, bubbleTargNum, bubbleTargId, bubblesToFire, gameControlState, inGameText, animTextY, startPanelInc, topSpacesFilled, aLevelSpecificTarget, aStarMarkers, starBarLength, messageTween, firstPop, gameIsInPlay, aAllowedBubbleStates, curStarLevel, flame, aMapButs = new Array([248, 1342], [321, 1325], [394, 1294], [374, 1233], [299, 1224], [221, 1245], [147, 1255], [75, 1230], [51, 1169], [112, 1128], [187, 1117], [259, 1112], [329, 1099], [384, 1053], [399, 994], [350, 946], [279, 966], [210, 953], [158, 906], [146, 841], [109, 785], [70, 732], [69, 669], [101, 611], [166, 626], [211, 678], [273, 712], [341, 691], [384, 641], [392, 579], [394, 516], [395, 454], [392, 392], [373, 329], [304, 312], [259, 361], [198, 394], [129, 396], [83, 347], [96, 283], [158, 239], [233, 221], [308, 223], [382, 207], [404, 144], [360, 94], [292, 70], [215, 62], [142, 63], [73, 78]),
    aLevelData = new Array,
    saveDataHandler = new Utils.SaveDataHandler("gradlebubbles");
	
curLang = "en", curLang = curLang.toUpperCase(), preAssetLib = new Utils.AssetLoader(curLang, [{
    id: "preloadImage",
    file: "images/preloadImage.png"
}], ctx, canvas.width, canvas.height, !1);
preAssetLib.onReady(initLoadAssets);
gradle.event('ready');
