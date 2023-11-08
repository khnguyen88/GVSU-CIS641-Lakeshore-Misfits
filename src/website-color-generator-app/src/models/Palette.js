import ColorMindAPIService from "../services/ColorMindAPIService/ColorMindAPIService";
import ContrastCheckerApiService from "../services/ContrastCheckerAPIService/ContrastCheckerAPIService";
import RandomColorGeneratorService from "../services/RandomColorGeneratorService/RandomColorGeneratorService";
import tinycolor from 'tinycolor2';
import ColorPair from './ColorPair';

export default class Palette {
  colors = []; //TinyColor[]
  colorPairs = []; //ColorPair[]
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
    this.UpdateColorPairs(this.colors);
  }

  async GeneratePalette() {
    let newGenColors = await this._colorGeneratorService.GetGeneratedColors();

    if (newGenColors !== null) {
      return new Palette(newGenColors);
    }
    else {
      alert("API Network Error! A New Color Palette Could Not Be Generated, Please Try Again!");
      return new Palette(this.colors);
    }
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

  async UpdateColorPairs(colors) {
    let colorArrayLength = colors.length;

    for (let i = 0; i < colorArrayLength; i++){
      for (let j = 0; j < colorArrayLength; j++){
        let colorPair = new ColorPair(i, colors[i], j, colors[j]);

        let contrastRatingResults = await this._contrastCheckerService.GetColorPairContrastRatings(colors[i].toHex(), colors[j].toHex());
        
        if (contrastRatingResults !== null) {
          colorPair.contrastRatings = contrastRatingResults;
        }
        else {
          alert(`API Network Error! Constrast Rating Could Not Be Estimated for the ${colors[i].toHex()} and ${colors[j].toHex()} color pair`);
        }

        this.colorPairs.push(colorPair);
      }
    }
    
    // alert(JSON.stringify(this.colorPairs.map(cPairs => cPairs.contrastRatings)));
  }
}