import ColorMindAPIService from "../services/ColorMindAPIService/ColorMindAPIService";
import ColorService from "../services/ColorService/ColorService";
import ContrastCheckerApiService from "../services/ContrastCheckerAPIService/ContrastCheckerAPIService";
import RandomColorGeneratorService from "../services/RandomColorGeneratorService/RandomColorGeneratorService";
import tinycolor from 'tinycolor2';

export default class Palette {
  colors = []; //TinyColor[]
  pairedColors = []; //ColorPair[]
  _colorService = null; //DI ColorService
  _contrastCheckerService = null; //DI ContrastCheckerService
  _colorGeneratorService = null; //DI ColorGeneratorService

  constructor(
    newPalette = [
      tinycolor('rgb (255, 255, 255)'), // Light Primary
      tinycolor('rgb (230, 230, 230)'), // Accent #1
      tinycolor('rgb (128, 128, 128)'), // Brand Color
      tinycolor('rgb (25, 25, 25)'), // Accent #2
      tinycolor('rgb (0, 0, 0)'), // Dark Primary
    ],
    colorService = new ColorService(),
    colorGeneratorService = new RandomColorGeneratorService(),
    contrastCheckerService = new ContrastCheckerApiService()) {
    
    this.StorePalette(newPalette);
    this._colorService = colorService;
    this._colorGeneratorService = colorGeneratorService;
    this._contrastCheckerService = contrastCheckerService;
  }

  GeneratePalette() {
    return new Palette(this._colorGeneratorService.GenerateNewRandomPalette());
  }

  AdjustPalette() {}

  CopyPalette() {
    let HEXStringCollection = JSON.stringify(
      this.colors.map((c) => {
        return c.toHexString();
      })
    );

    navigator.clipboard.writeText(HEXStringCollection);
    alert(HEXStringCollection);
  }

  StorePalette(newPalette) {
    if (newPalette.length > 0 && newPalette.length <= 5) {
      if (Array.isArray(newPalette[0]) && typeof newPalette[0][0] == 'number') {
        for (let i = 0; i < newPalette.length; i++) {
          this.colors.push(
            tinycolor(
              `rgb (${newPalette[i][0]}, ${newPalette[i][1]}, ${newPalette[i][2]})`
            )
          );
        }
      } else if (
        !Array.isArray(newPalette[0]) &&
        typeof newPalette[0] == 'string'
      ) {
        for (let i = 0; i < newPalette.length; i++) {
          this.colors.push(tinycolor(newPalette[i]));
        }
      } else {
        this.colors = newPalette;
      }
    }
  }

  UpdatePairedColors() {}
}