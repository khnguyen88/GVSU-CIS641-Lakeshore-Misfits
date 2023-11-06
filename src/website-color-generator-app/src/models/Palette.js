import ColorMindAPIService from "../services/ColorMindAPIService/ColorMindAPIService";
import ContrastCheckerApiService from "../services/ContrastCheckerAPIService/ContrastCheckerAPIService";
import RandomColorGeneratorService from "../services/RandomColorGeneratorService/RandomColorGeneratorService";
import tinycolor from 'tinycolor2';

export default class Palette {
  colors = []; //TinyColor[]
  pairedColors = []; //ColorPair[]
  _contrastCheckerService = null; //DI ContrastCheckerService
  _colorGeneratorService = null; //DI ColorGeneratorService

  constructor(
    newColors = [
      tinycolor('rgb (255, 255, 255)'), // Light Primary
      tinycolor('rgb (230, 230, 230)'), // Accent #1
      tinycolor('rgb (128, 128, 128)'), // Brand Color
      tinycolor('rgb (25, 25, 25)'), // Accent #2
      tinycolor('rgb (0, 0, 0)'), // Dark Primary
    ],
    colorGeneratorService = new ColorMindAPIService(),
    contrastCheckerService = new ContrastCheckerApiService()) {
    
    this.StorePalette(newColors);
    this._colorGeneratorService = colorGeneratorService;
    this._contrastCheckerService = contrastCheckerService;
  }

  async GeneratePalette() {
    // return new Palette(this._colorGeneratorService.GenerateNewRandomPalette());
    let newGenColors = await this._colorGeneratorService.GetGeneratedColors();
    // alert(JSON.stringify(newGenColors));
    return new Palette(newGenColors);
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