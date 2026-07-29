import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({
      name: "offices",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", type: "string" }),
            defineField({ name: "address", type: "text", rows: 3 }),
            defineField({ name: "email", type: "string" }),
            defineField({ name: "phone", type: "string" }),
          ],
        },
      ],
    }),
    defineField({ name: "socialLinks", type: "array", of: [{ type: "linkItem" }] }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({ name: "headerLinks", type: "array", of: [{ type: "linkItem" }] }),
    defineField({ name: "footerLinks", type: "array", of: [{ type: "linkItem" }] }),
  ],
  preview: { prepare: () => ({ title: "Navigation" }) },
});

const postFields = [
  defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
  defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
  defineField({ name: "excerpt", type: "text", rows: 3 }),
  defineField({ name: "body", type: "bodyBlock" }),
  defineField({ name: "image", type: "imageWithAlt" }),
  defineField({
    name: "imagePath",
    type: "string",
    description:
      "Temporary path to an existing public image before uploading it into Sanity.",
  }),
  defineField({ name: "publishDate", type: "datetime" }),
  defineField({ name: "externalUrl", type: "url" }),
  defineField({ name: "source", type: "string" }),
  defineField({ name: "featured", type: "boolean", initialValue: false }),
  defineField({ name: "seo", type: "seo" }),
];

function collectionType(name: string, title: string) {
  return defineType({
    name,
    title,
    type: "document",
    fields: postFields,
  });
}

export const newsPost = collectionType("newsPost", "News Post");
export const eventPost = collectionType("eventPost", "Event Post");
export const articlePost = collectionType("articlePost", "Article Post");
export const project = collectionType("project", "Project");
export const communityImpactPost = collectionType(
  "communityImpactPost",
  "Community Impact Post",
);

export const leader = defineType({
  name: "leader",
  title: "Leader",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 4 }),
    defineField({ name: "bio", type: "array", of: [{ type: "text" }] }),
    defineField({ name: "image", type: "imageWithAlt" }),
    defineField({
      name: "imagePath",
      type: "string",
      description:
        "Temporary path to an existing public image before uploading it into Sanity.",
    }),
    defineField({ name: "imageClassName", type: "string" }),
    defineField({ name: "linkedin", type: "url" }),
    defineField({ name: "order", type: "number" }),
  ],
});
