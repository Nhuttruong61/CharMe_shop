import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import config from "./config";

export const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: "2022-10-22",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);
export const urlFor = (source)=>builder.image(source);