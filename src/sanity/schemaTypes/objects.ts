import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "path", type: "string" }),
    defineField({
      name: "image",
      type: "imageWithAlt",
      title: "Social image",
    }),
  ],
});

export const imageWithAlt = defineType({
  name: "imageWithAlt",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [defineField({ name: "alt", type: "string", validation: (Rule) => Rule.required() })],
});

export const cta = defineType({
  name: "cta",
  title: "CTA",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "primaryLabel", type: "string" }),
    defineField({ name: "primaryHref", type: "string" }),
    defineField({ name: "secondaryLabel", type: "string" }),
    defineField({ name: "secondaryHref", type: "string" }),
  ],
});

export const pageIntro = defineType({
  name: "pageIntro",
  title: "Page intro",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "primaryLabel", type: "string" }),
    defineField({ name: "primaryHref", type: "string" }),
  ],
});

export const card = defineType({
  name: "card",
  title: "Card",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "label", type: "string" }),
    defineField({ name: "value", type: "string" }),
    defineField({ name: "href", type: "url" }),
    defineField({ name: "image", type: "imageWithAlt" }),
  ],
});

export const sectionBlock = defineType({
  name: "sectionBlock",
  title: "Section",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "image", type: "imageWithAlt" }),
    defineField({ name: "cards", type: "array", of: [{ type: "card" }] }),
  ],
});

export const linkItem = defineType({
  name: "linkItem",
  title: "Link",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "href", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "children", type: "array", of: [{ type: "linkItem" }] }),
  ],
});

export const bodyBlock = defineType({
  name: "bodyBlock",
  title: "Body",
  type: "array",
  of: [
    { type: "block" },
    { type: "imageWithAlt" },
  ],
});
