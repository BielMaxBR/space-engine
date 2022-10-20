export default class Vector {
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }

    copy() {
        return new Vector(this.x, this.y)
    }


    add(v) {
        this.x += v.x
        this.y += v.y
    }
    sub(v) {
        this.x -= v.x
        this.y -= v.y
    }
    scale(n) {
        this.x *= n
        this.y *= n
    }
    div(n) {
        this.x /= n
        this.y /= n
    }
    length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
    normalized() {
        let len = this.length()
        if (len > 0) {
            this.scale(1 / len)
        }
    }
    limit(s) {
        let len = this.length()

        if (len > s && len > 0) {
            this.scale(s / len)
        }
    }
    lerp(v, t) {
        this.x = this.x + (v.x - this.x) * t
        this.y = this.y + (v.y - this.y) * t
    }
    toObject() {
        return {
            x: this.x,
            y: this.y
        }
    }
    toArray() {
        return [this.x, this.y]
    }
    distance(v) {
        let dx = v.x - this.x
        let dy = v.y - this.y
        return Math.sqrt(dx * dx + dy * dy)
    }
    angle() {
        var rad = Math.atan2(this.y, this.x);
        var deg = rad * 180 / Math.PI;
        if (deg < 0) deg = 360 + deg;

        return deg;
    };
    angleRad() {
        var rad = Math.atan2(this.y, this.x);
        return rad;
    };
    constrain(min, max) {
        let ix = false
        if (this.x < 0) ix = true
        let iy = false
        if (this.y < 0) iy = true

        if (this.x < min) {
            this.x = min
        }
        if (this.x > max) {
            this.x = max
        }
        if (this.y < min) {
            this.y = min
        }
        if (this.y > max) {
            this.y = max
        }

        if (ix) this.x = -this.x
        if (iy) this.y = -this.y

        return this.copy()
    }

    static add(v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y)
    }
    static sub(v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y)
    }
    static div(v, n) {
        return new Vector(v.x / n, v.y / n)
    }
    static Vdiv(v1, v2) {
        return new Vector(v1.x / v2.x, v1.y / v2.y)
    }
    static scale(v, n) {
        return new Vector(v.x * n, v.y * n)
    }
    static Vscale(v1, v2) {
        return new Vector(v1.x * v2.x, v1.y * v2.y)
    }
    static length(v) {
        return Math.sqrt(v.x ** 2 + v.y ** 2)
    }
    static normalized(v) {
        let len = this.length(v)
        if (len > 0) {
            this.scale(1 / len)
        }
    }
    static distance(v1, v2) {
        let dx = v2.x - v2.x
        let dy = v2.y - v1.y
        return Math.sqrt(dx * dx + dy * dy)
    }

}