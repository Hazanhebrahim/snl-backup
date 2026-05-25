import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Community Impact",
  description:
    "SNL Technology community impact and social responsibility initiatives.",
};

export default function CommunityImpactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Community Impact"
        title="Building capability beyond operations"
        description="SNL Technology's community impact section can highlight career development, business empowerment, training, local content, and social initiatives connected to the company's work in Nigeria."
      />

      <Section
        title="Impact focus"
        description="The page is ready for stories, photos, partner names, impact numbers, and programme updates as the business provides approved details.">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-4 text-base leading-8 text-slate-600">
            <p>
              The business content references Innovate, a non-profit initiative
              focused on career development and business empowerment for young
              Nigerians. This would be a strong anchor for the first community
              impact story.
            </p>
            <p>
              Recommended additions include programme dates, beneficiary
              numbers, partner organizations, photos, and clear outcomes.
            </p>
          </div>
          <Image
            src="/images/IMG_8647.jpg"
            alt="SNL Technology team member in safety gear"
            width={1080}
            height={1080}
            className="aspect-4/3 w-full rounded-xl object-cover"
          />
        </div>
      </Section>
    </>
  );
}
