import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";
import { fluidSystemProducts, softwareServices } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Partners | Swagelok Sub-Saharan Africa & IFS Nigeria",
  description:
    "SNL Technology is the authorised reseller of Swagelok products for Swagelok Sub-Saharan Africa and partner of IFS in Nigeria, supporting fluid systems and enterprise software services.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Partners"
        title="Global technology, local execution"
        description="SNL Technology brings together Swagelok fluid system products and IFS enterprise software services with the local engineering and delivery support required for Nigerian operations."
        primaryCta={{
          href: "/contact",
          label: "Speak with our team",
        }}
      />

      <Section
        eyebrow="Swagelok"
        title="Authorized product reseller"
        description="SNL Technology supplies Swagelok products for Swagelok Sub-Saharan Africa, delivering global-standard fluid system components with local technical support.">
        <div className="mb-10 overflow-hidden rounded-xl border border-slate-200">
          <Image
            src="/images/fluid-systems-closeup.png"
            alt="Swagelok-style fluid system components including tube fittings, valves, regulators, and manifolds"
            width={1792}
            height={1024}
            className="aspect-21/9 w-full object-cover"
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Product supply</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Access to the full Swagelok catalogue — fittings, valves, tubing,
              hose, and instrumentation — with genuine parts and traceability.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Technical support</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Engineering guidance on product selection, system design, and
              compliance with applicable codes and standards.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Training</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Authorized Swagelok training programmes covering installation,
              maintenance, and best practice for fluid system integrity.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="IFS"
        title="Enterprise software partner in Nigeria"
        description="SNL Technology supports IFS enterprise software services for asset-intensive businesses that need better reliability, production data, operational intelligence, and business process control.">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Image
            src="/images/software-operations-center.png"
            alt="Energy operations center showing dashboards for asset performance and production data"
            width={1792}
            height={1024}
            className="aspect-4/3 w-full rounded-xl object-cover"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {softwareServices.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Swagelok portfolio"
        title="Fluid system product families"
        description="The core Swagelok product areas represented across upstream, industrial, and critical operating environments.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fluidSystemProducts.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Partnership model"
        title="How we work with clients"
        description="Our partnerships combine authorized distribution, technical advisory, and delivery accountability.">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">
              Framed price agreements
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Pre-negotiated commercial terms for predictable procurement with
              zero inflation exposure and global discount access.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">
              Client collaboration
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Joint planning with your operations and engineering teams to
              ensure practical, fully integrated implementation.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Interested in Swagelok products or IFS software services?"
        description="Contact our team to discuss technical requirements, supply arrangements, or enterprise software implementation support."
        primaryCta={{ href: "/contact", label: "Contact our team" }}
      />
    </>
  );
}
