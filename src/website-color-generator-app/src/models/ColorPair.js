import ContrastRatings from "./ContrastRating";
import tinycolor from 'tinycolor2';

export default class ColorPair {
  colorPairsIds = []; // int[], 2 elements only
  colorPairs = []; // TinyColor[], 2 elements only
  contrastRatings = null; //ContrastRatings
  constructor(
    colorId1 = -1,
    color1 = tinycolor('#fff'),
    colorId2 = -2,
    color2 = tinycolor('#000'),
    contrastRatings = new ContrastRatings()
  ) {
    this.colorPairsIds = [colorId1, colorId2];
    this.colorPairs = [color1, color2];
    this.contrastRatings = contrastRatings;
  }
}