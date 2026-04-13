import blackCurrantImg from "figma:asset/7e6d718bc5282000a651ba93ce80c167e729f250.png";
import pomegranateImg from "figma:asset/88fb1102f0fca3414eb4dcfcfcc11746507bcef6.png";
import whiteGrapeImg from "figma:asset/c0e34780fdbdf799f60c1b86c353a8a3fc63478a.png";
import limeMintImg from "figma:asset/f66081f878d329170364e252b415b35a3eff427e.png";

export interface ProductVariant {
  dose: string;
  coaLink: string;
}

export interface Product {
  name: string;
  image: string;
  description: string;
  variants: ProductVariant[];
}

export const products: Product[] = [
  {
    name: "Black Currant",
    image: blackCurrantImg,
    description: "THC-Infused Seltzer",
    variants: [
      {
        dose: "3MG THC",
        coaLink: "#"
      }
    ]
  },
  {
    name: "Pomegranate Blueberry Acai",
    image: pomegranateImg,
    description: "THC-Infused Seltzer",
    variants: [
      {
        dose: "3MG THC",
        coaLink: "#"
      }
    ]
  },
  {
    name: "White Grape Pear",
    image: whiteGrapeImg,
    description: "THC-Infused Seltzer",
    variants: [
      {
        dose: "3MG THC",
        coaLink: "#"
      }
    ]
  },
  {
    name: "Lime Mint Elderflower",
    image: limeMintImg,
    description: "THC-Infused Seltzer",
    variants: [
      {
        dose: "3MG THC",
        coaLink: "#"
      }
    ]
  }
];