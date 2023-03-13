import { atom } from "jotai";
import { imageBanner } from "~/constants/images";

const animationAtom = atom(true);
const imageTopLayerAtom = atom({
  display: false,
  image: imageBanner,
});

export { animationAtom, imageTopLayerAtom };
