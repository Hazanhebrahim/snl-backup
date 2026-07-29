import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = imageUrlBuilder(sanityClient);

export type SanityImage = {
  asset?: {
    _ref?: string;
    url?: string;
  };
  alt?: string;
};

export function imageUrl(source?: SanityImage | string | null) {
  if (!source) {
    return "";
  }

  if (typeof source === "string") {
    return source;
  }

  if (source.asset?.url) {
    return source.asset.url;
  }

  if (source.asset?._ref) {
    return builder.image(source).auto("format").fit("max").url();
  }

  return "";
}
