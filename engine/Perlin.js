let list = []

export default class Perlin {
    constructor(
        seed = Math.random(),
        amp = 128,
        wl = 128,
        width = 4048,
        octaves = 8,
        divisor = 2
    ) {

        this.amp = amp
        this.wl = wl
        this.width = width

        this.octaves = octaves
        this.divisor = divisor

        this.PSNG = class {
            constructor() {
                this.M = 4294967296
                this.A = 1664525
                this.C = 1

                this.Z = Math.floor(seed * this.M);

                this.next = () => {
                    this.Z = (this.A * this.Z + this.C) % this.M;
                    return this.Z / this.M - 0.5;
                }
            }
        }

        list = this.noiseList()
    }

    Interpolate(pa, pb, px) {
        var ft = px * Math.PI,
            f = (1 - Math.cos(ft)) * 0.5;
        return pa * (1 - f) + pb * f;
    }

    perlin(amp, wl, width) {
        let x = 0,
            psng = new this.PSNG(),
            a = psng.next(),
            b = psng.next(),
            pos = []
        while (x < width) {
            if (x % wl === 0) {
                a = b;
                b = psng.next();
                pos.push(a * amp);
            } else {
                pos.push(this.Interpolate(a, b, (x % wl) / wl) * amp);
            }
            x++;
        }
        return pos
    }

    GenerateNoise(amp, wl, octaves, divisor, width) {
        var result = [];
        for (var i = 0; i < octaves; i++) {
            result.push(this.perlin(amp, wl, width));
            amp /= divisor;
            wl /= divisor;
        }
        return result;
    }

    CombineNoise(pl) {
        var result = []
        for (var i = 0, total = 0, j = 0; i < pl[0].length; i++) {
            total = 0;
            for (j = 0; j < pl.length; j++) {
                total += pl[j][i];
            }
            result.push(total);
        }
        return result;
    }

    noiseList() {
        return this.CombineNoise(this.GenerateNoise(this.amp, this.wl, this.octaves, this.divisor, this.width))
    }

    noise(i = 0) {
        return list[i]
    }
}