import ColorMindAPIService from "../services/ColorMindAPIService/ColorMindAPIService";
import ContrastCheckerApiService from "../services/ContrastCheckerAPIService/ContrastCheckerAPIService";
import RandomColorGeneratorService from "../services/RandomColorGeneratorService/RandomColorGeneratorService";
import tinycolor from 'tinycolor2';
import ColorPair from './ColorPair'

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
    
    this._colorGeneratorService = colorGeneratorService;
    this._contrastCheckerService = contrastCheckerService;
    this.StorePalette(newColors);
    this.UpdatePairedColors(this.colors);
  }

  async GeneratePalette() {
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

  StorePalette(newColors) {
    if (newColors.length > 0 && newColors.length <= 5) {
      if (Array.isArray(newColors[0]) && typeof newColors[0][0] == 'number') {
        for (let i = 0; i < newColors.length; i++) {
          this.colors.push(
            tinycolor(
              `rgb (${newColors[i][0]}, ${newColors[i][1]}, ${newColors[i][2]})`
            )
          );
        }
      } else if (
        !Array.isArray(newColors[0]) &&
        typeof newColors[0] == 'string'
      ) {
        for (let i = 0; i < newColors.length; i++) {
          this.colors.push(tinycolor(newColors[i]));
        }
      } else {
        this.colors = newColors;
      }
    }
  }

  async UpdatePairedColors(colors) {
    let colorArrayLength = colors.length;

    for (let i = 0; i < colorArrayLength; i++){
      for (let j = 0; j < colorArrayLength; j++){
        let colorPair = new ColorPair(i, colors[i], j, colors[j]);

        //TODO: Uncomment and check once the Contrast Checker Service has been populated
        // colorPair.contrastRatings = await this._contrastCheckerService(colors[i].toHex(), colors[j].toHex());

        this.pairedColors.push(colorPair);
      }
    }
  }
}