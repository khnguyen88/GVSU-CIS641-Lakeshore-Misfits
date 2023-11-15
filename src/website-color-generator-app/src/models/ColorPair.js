import ContrastRatings from "./ContrastRating";
import tinycolor from 'tinycolor2';

export default class ColorPair {
  colorPairsIds = []; // int[], 2 elements only
  colorPair = []; // TinyColor[], 2 elements only
  contrastRatings = null; //ContrastRatings
  constructor(
    colorId1 = -1,
    color1 = tinycolor('#fff'),
    colorId2 = -2,
    color2 = tinycolor('#000'),
    contrastRatings = new ContrastRatings()
  ) {
    this.colorPairsIds = [colorId1, colorId2];
    this.colorPair = [color1, color2];
    this.contrastRatings = contrastRatings;
  }
}