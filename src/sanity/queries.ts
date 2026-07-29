export const imageFields = `{
  ...,
  "asset": asset->{url, _id},
  alt
}`;

export const seoFields = `seo{
  title,
  description,
  path,
  image ${imageFields}
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  name,
  description,
  phone,
  email,
  offices,
  socialLinks
}`;

export const navigationQuery = `*[_type == "navigation"][0]{
  headerLinks[]{label, href, children[]{label, href}},
  footerLinks[]{label, href}
}`;

export const homePageQuery = `*[_type == "homePage"][0]{
  ${seoFields},
  hero,
  about,
  services,
  trust,
  partners,
  clients,
  cta
}`;

export const pageByTypeQuery = `*[_type == $type][0]`;

export const collectionQuery = `*[_type == $type] | order(coalesce(publishDate, _createdAt) desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  source,
  externalUrl,
  publishDate,
  featured,
  "image": coalesce(image.asset->url, imagePath),
  ${seoFields}
}`;

export const postBySlugQuery = `*[_type == $type && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  source,
  externalUrl,
  publishDate,
  "image": coalesce(image.asset->url, imagePath),
  body,
  ${seoFields}
}`;

export const leadersQuery = `*[_type == "leader"] | order(order asc, name asc){
  name,
  role,
  summary,
  bio,
  "image": coalesce(image.asset->url, imagePath),
  imageClassName,
  linkedin
}`;
