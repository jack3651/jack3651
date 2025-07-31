function aTile(a, b, c, d, e) {
    this.x = a, this.y = b, this.width = c, this.height = d, this.color = e, this.active = !0, this.death = !1, this.deathTimer = 0, this.mine = !1, this.haveTween = !1, this.doubleLayer = !1
}
var p = aTile.prototype;
p.moveOnY = function(a) {
    this.y += a
};