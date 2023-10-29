export default class ContrastRatings {
  ratio = null; // string
  AA = null; // string
  AALarge = null; // string
  AAA = null; // string
  AAALarge = null; // string

  constructor(
    ratio = 'N/A',
    AA = 'N/A',
    AALarge = 'N/A',
    AAA = 'N/A',
    AAALarge = 'N/A'
  ) {
    this.ratio = ratio;
    this.AA = AA;
    this.AALarge = AALarge;
    this.AAA = AAA;
    this.AAALarge = AAALarge;
  }
}