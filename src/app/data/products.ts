import blackCurrantImg from "/assets/images/black-currant.png";
import pomegranateImg from "/assets/images/pomegranate-blueberry-acai.png";
import whiteGrapeImg from "/assets/images/white-grape-pear.png";
import limeMintImg from "/assets/images/lime-mint-elderflower.png";

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
        coaLink: "/assets/pdfs/2603ANSCT0379-2630-BlackHogBrewing-BUDR-BC-081.pdf"
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
        coaLink: "/assets/pdfs/2603ANSCT0388-2680-BlackHogBrewing-BUDR-PBA-082.pdf"
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
        coaLink: "/assets/pdfs/2603ANSCT0397-2730-BlackHogBrewing-BUDR-WGP-083.pdf"
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
        coaLink: "/assets/pdfs/2603ANSCT0406-2780-BlackHogBrewing-BUDR-LME-084.pdf"
      }
    ]
  }
];