import ContrastRatings from "./ContrastRating";

export default class ColorPair {
  pairedColorsIds = []; // int[], 2 elements only
  pairedColors = []; // TinyColor[], 2 elements only
  contrastRatings = null; //ContrastRatings
  constructor(
    colorId1 = -1,
    color1 = tinycolor('#fff'),
    colorId2 = -2,
    color2 = tinycolor('#000'),
    contrastRatings = new ContrastRatings()
  ) {
    this.pairedColorsIds = [colorId1, colorId2];
    this.pairedColors = [color1, color2];
    this.contrastRatings = contrastRatings;
  }
}