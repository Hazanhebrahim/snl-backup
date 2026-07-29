import { defineField, defineType } from "sanity";

const pageFields = [
  defineField({ name: "seo", type: "seo" }),
  defineField({ name: "intro", type: "pageIntro" }),
  defineField({
    name: "sections",
    type: "array",
    of: [{ type: "sectionBlock" }],
  }),
  defineField({ name: "cta", type: "cta" }),
];

function pageType(name: string, title: string) {
  return defineType({
    name,
    title,
    type: "document",
    fields: pageFields,
    preview: {
      prepare: () => ({ title }),
    },
  });
}

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({ name: "seo", type: "seo" }),
    defineField({
      name: "hero",
      type: "object",
      fields: [
        defineField({
          name: "slides",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "titleLines", type: "array", of: [{ type: "string" }] }),
                defineField({ name: "description", type: "text", rows: 3 }),
              ],
            },
          ],
        }),
        defineField({ name: "images", type: "array", of: [{ type: "imageWithAlt" }] }),
        defineField({ name: "profileStats", type: "array", of: [{ type: "card" }] }),
        defineField({ name: "partnerNote", type: "text", rows: 3 }),
        defineField({ name: "statStrip", type: "array", of: [{ type: "card" }] }),
      ],
    }),
    defineField({ name: "sections", type: "array", of: [{ type: "sectionBlock" }] }),
    defineField({ name: "cta", type: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Home Page" }) },
});

export const aboutPage = pageType("aboutPage", "About Page");
export const servicesPage = pageType("servicesPage", "Services Page");
export const solutionsPage = pageType("solutionsPage", "Solutions Page");
export const partnersPage = pageType("partnersPage", "Partners Page");
export const projectPage = pageType("projectPage", "Project Page");
export const mediaPage = pageType("mediaPage", "Media Page");
export const contactPage = pageType("contactPage", "Contact Page");
export const communityImpactPage = pageType("communityImpactPage", "Community Impact Page");
