import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, isSanityConfigured } from "./env";

export const sanityClient = createClient({
  projectId: projectId || "placeholder",
  dataset: dataset || "production",
  apiVersion,
  useCdn: true,
  stega: false,
});

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T | null> {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });
  } catch {
    return null;
  }
}
