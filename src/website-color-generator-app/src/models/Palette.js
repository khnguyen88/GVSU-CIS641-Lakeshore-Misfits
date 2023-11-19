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
    this.PopulateColorPairs(this.colors); //Note: Async does not work in method
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

  async AdjustPalette() {
    //Palette
    let lightPrimary = this.colors[0];
    let darkPrimary = this.colors[4];
    let secondaryOpt1 = this.colors[1];
    let secondaryOpt2 = this.colors[3];
    let mainBrandColor = this.colors[2];
    
    let isPaletteShade = true;

    this.colors.map(c => { isPaletteShade = c.toHsl().s == 0 ? true : false });

    if (!isPaletteShade) {
      // TODO: This is a bunch of magic numbers. Should create a ColorTone class that contains this information.
      
      // Light Primary Color, Neutral Tone, Saturation: 1-10, Brightness: 77-99
      this.AdjustColorBrightnessSaturation(lightPrimary, 1, 10, 77, 99);

      // Secondary Color 1, Soft Pop Tone, Saturation: 50-60, Brightness: 70-80
      this.AdjustColorBrightnessSaturation(secondaryOpt1, 50, 60, 70, 80);

      //Dark Primary Color, Dark Jewel Tone - Saturation: 73-83, Brightness: 5-20
      this.AdjustColorBrightnessSaturation(darkPrimary, 73, 83, 5, 20);

      // Secondary Color 2, Dim Earth Tones - Saturation: 36-41, Brightness: 30-55
      this.AdjustColorBrightnessSaturation(secondaryOpt2, 36, 41, 30, 55);

      //Brand Color, Jewel Tones - Saturation: 73-83, Brightness: 56-76
      this.AdjustColorBrightnessSaturation(mainBrandColor, 73, 83, 56, 76);
    }
    else {
      alert("This is the default shade tone palette! Please generate a new color palette to adjust saturation, brightness, and value");
    }

    let newLightPrimary = tinycolor(this.colors[0].toHexString());
    let newDarkPrimary = tinycolor(this.colors[4].toHexString());
    let newSecondaryOpt1 = tinycolor(this.colors[1].toHexString());
    let newSecondaryOpt2 = tinycolor(this.colors[3].toHexString());
    let newMainBrandColor = tinycolor(this.colors[2].toHexString());

    let newColorArray = [newLightPrimary, newSecondaryOpt1, newMainBrandColor, newSecondaryOpt2, newDarkPrimary];

    return new Palette(newColorArray);
  }

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

  PopulateColorPairs(colors) {
    let colorArrayLength = colors.length;

    for (let i = 0; i < colorArrayLength; i++){
      for (let j = 0; j < colorArrayLength; j++){
        let colorPair = new ColorPair(i, colors[i], j, colors[j]);
        
        //Estimating a Color Pair's Contrast Ratings
        //----------------------------------------------
        //Get ratio 
        colorPair.contrastRatings.ratio = tinycolor.readability(colors[i], colors[j]).toFixed(2);
        //WCAG AA, normal font = 12pt(16px) or larger size, "pass" if ratio > 4.5:1
        colorPair.contrastRatings.AA = colorPair.contrastRatings.ratio > 4.5 ? "pass" : "fail";
        //WCAG AA-Large, large font = 14pt(18.66px) & bold or 18pt(24px) or larger, "pass" if ratio > 3.1:1
        colorPair.contrastRatings.AALarge = colorPair.contrastRatings.ratio > 3.1 ? "pass" : "fail";
        //WCAG AAA, normal font = 12pt(16px) or larger size, "pass" if ratio > 7:1
        colorPair.contrastRatings.AAA = colorPair.contrastRatings.ratio > 7.1 ? "pass" : "fail";
        //WCAG AA-Large, large font = 14pt(18.66px) & bold or 18pt(24px) or larger, "pass" if ratio > 4.5:1
        colorPair.contrastRatings.AAALarge = colorPair.contrastRatings.ratio > 4.5 ? "pass" : "fail";

        //Populating the Color Pairs Array
        //----------------------------------------------
        this.colorPairs.push(colorPair);
      }
    }
  }

  async UpdateColorPairs() {
    this.colorPairs.map(async (cp) => {
        let contrastRatingResults = await this._contrastCheckerService.GetColorPairContrastRatings(cp.colorPair[0].toHex(), cp.colorPair[1].toHex());
        
        if (contrastRatingResults !== null) {
          cp.contrastRatings = contrastRatingResults;
        }
        else {
          alert(`API Network Error! Constrast Rating Could Not Be Estimated for the ${cp.colorPair[0].toHex()} and ${cp.colorPair[1].toHex()} color pair`);
        }});

    // alert(JSON.stringify(this.colorPairs.map(cPairs => cPairs.contrastRatings)));
  }

  RandomRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  AdjustColorBrightnessSaturation(color, satMin, satMax, brightMin, brightMax) {
    //TODO:  Adjust for saturation of HSV/HSB and not HSL. Might have to be rewritten

    let colorBrightness = color.getBrightness() / 255 * 100; //Adjust brightness values in terms of 0-100 value.
    let brightnessRange = brightMax - brightMin;
    let colorBrightnessDelta = 0;

    let colorSaturation = color.toHsl().s * 100; //Adjust saturation values in terms of 0-100 value.
    let saturationRange = satMax - satMin;
    let colorSaturationDelta = 0;

    // alert(`Initial Brightness: ${colorBrightness}`);
    // alert(`Initial Saturation: ${colorSaturation}`);
    
    while ((colorBrightness < brightMin || colorBrightness > brightMax) || (colorSaturation < satMin || colorSaturation > satMax)) {
      if (colorBrightness < brightMin) {
        colorBrightnessDelta = (brightMin - colorBrightness) + this.RandomRange(0, brightnessRange);
        color.brighten(colorBrightnessDelta);
      }

      if (colorBrightness > brightMax) {
        colorBrightnessDelta = -(colorBrightness - brightMax) - this.RandomRange(0, brightnessRange);
        color.brighten(colorBrightnessDelta);
      }
      
      colorBrightness = color.getBrightness() / 255 * 100;
      colorSaturation = color.toHsl().s * 100;

      if (colorSaturation < satMin) {
        colorSaturationDelta = (satMin - colorSaturation) + this.RandomRange(0, saturationRange);
        color.saturate(colorSaturationDelta);
      }

      if (colorSaturation > satMax) {
        colorSaturationDelta = (colorSaturation - satMax) + this.RandomRange(0, saturationRange);
        color.desaturate(colorSaturationDelta);
      }

      colorBrightness = color.getBrightness() / 255 * 100;
      colorSaturation = color.toHsl().s * 100;
    }
    // alert(`Final Brightness: ${colorBrightness}`);
    // alert(`Final Saturation: ${colorSaturation}`);
  }
}