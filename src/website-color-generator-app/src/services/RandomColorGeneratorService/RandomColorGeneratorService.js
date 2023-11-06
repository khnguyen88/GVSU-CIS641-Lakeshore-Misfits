import tinycolor from "tinycolor2";

export default class RandomColorGeneratorService { 
    constructor() {
        
    }

    rngRGB(){
        return Math.floor(Math.random() * 255);
    };

    GetGeneratedHarmonizedColors() {
        let newColor = tinycolor(`rgb (${this.rngRGB()}, ${this.rngRGB()}, ${this.rngRGB()}`);

        let tetradColor = newColor.tetrad().map((c) => {
        return c.toRgbString();
        });

        let newColors = [
        newColor.toRgbString(),
        newColor.complement().spin(-30).toRgbString(),
        tetradColor[1],
        tetradColor[2],
        tetradColor[3],
        ];

        return newColors;
    }

    GetGeneratedColors() {
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