import tinycolor from "tinycolor2";

export default class RandomColorGeneratorService { 
    constructor() {
        
    }

    rngRGB(){
        return Math.floor(Math.random() * 255);
    };

    GetGeneratedColors() {
        let newColor = tinycolor(`rgb (${this.rngRGB()}, ${this.rngRGB()}, ${this.rngRGB()}`);

        let tetradColor = newColor.tetrad().map((c) => {
        return c.toRgbString();
        });

        let newColors = [
        tinycolor(newColor.toRgbString()).saturate(-50).brighten(40).toRgbString(),
        newColor.complement().spin(-30).saturate(-30).brighten(20).toRgbString(),
        tetradColor[1],
        tinycolor(tetradColor[2]).saturate(10).saturate(-10).brighten(-20).toRgbString(),
        tinycolor(tetradColor[3]).saturate(10).brighten(-25).toRgbString(),
        ];

        return newColors;
    }

    GetRandomGeneratedColors() {
        let newColors = [
            tinycolor(`rgb (${this.rngRGB()}, ${this.rngRGB()}, ${this.rngRGB()}`),
            tinycolor(`rgb (${this.rngRGB()}, ${this.rngRGB()}, ${this.rngRGB()}`),
            tinycolor(`rgb (${this.rngRGB()}, ${this.rngRGB()}, ${this.rngRGB()}`),
            tinycolor(`rgb (${this.rngRGB()}, ${this.rngRGB()}, ${this.rngRGB()}`),
            tinycolor(`rgb (${this.rngRGB()}, ${this.rngRGB()}, ${this.rngRGB()}`)
        ];

        return newColors;
    }
}