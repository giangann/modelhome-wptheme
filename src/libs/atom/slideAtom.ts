import { atom } from "jotai";
import { BANNER } from "~/constants/constants";
import { DEFAULT_INDEX } from "~/constants/form";

const activeHompageSlideAtom = atom(DEFAULT_INDEX);
const bannerAtom = atom(BANNER);
export { activeHompageSlideAtom, bannerAtom };
