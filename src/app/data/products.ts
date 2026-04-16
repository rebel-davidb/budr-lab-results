import blackCurrantImg from "../../assets/img_7e6d718b.png";
import pomegranateImg from "../../assets/img_88fb1102.png";
import whiteGrapeImg from "../../assets/img_c0e34780.png";
import limeMintImg from "../../assets/img_f66081f8.png";

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
        coaLink: "/coa/BUDR-BC-081.pdf"
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
        coaLink: "/coa/BUDR-PBA-082.pdf"
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
        coaLink: "/coa/BUDR-WGP-091.pdf"
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
        coaLink: "/coa/BUDR-LME-080.pdf"
      }
    ]
  }
];