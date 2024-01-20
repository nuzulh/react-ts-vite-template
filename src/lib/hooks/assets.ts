import { Assets, ImageAssets } from "../models";

const assets: Assets = {
  imageAssets: {
    "hero": require("@/assets/images/hero.svg"),
  },
};

export function useAssets() {
  const getImage = (key: keyof ImageAssets) => assets.imageAssets[key];

  return { getImage };
}
