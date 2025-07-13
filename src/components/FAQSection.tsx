import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";

export default function FAQSection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="text-pink-500 text-sm font-semibold">
              Got Questions? We've Got You Covered!
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-lg">
              Book Your <strong>FREE Consultation & Assessment</strong> With A
              Member Of Our Medical Team
            </p>

            <div className="space-y-3">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 text-base">
                BOOK MY APPOINTMENT 👉
              </Button>
              <Button
                variant="outline"
                className="w-full border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold py-3 text-base"
              >
                TEXT ME
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span>
                Rated <strong>4.9</strong> Stars By <strong>5000+</strong>{" "}
                Satisfied Clients
              </span>
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-0">
              <AccordionItem
                value="item-1"
                className="border-gray-700 border-b"
              >
                <AccordionTrigger className="text-white hover:text-white text-left py-4 hover:no-underline">
                  What is Botox<sup>®</sup>?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  Botox<sup>®</sup> is a purified protein authorized by Health
                  Canada and the FDA to treat moderate to severe frown lines,
                  crow's feet, and horizontal forehead wrinkles. At Skin
                  Vitality Medical Clinic—recognized as Canada's #1 Botox
                  Clinic—we provide expertly delivered treatments that help you
                  achieve a smoother, more refreshed appearance. In addition to
                  facial wrinkles, Botox can also treat a range of concerns
                  including masseter Botox for jaw slimming, chin dimpling,
                  bunny lines on the nose, neck bands, and excessive sweating.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-gray-800 border-b"
              >
                <AccordionTrigger className="text-white hover:text-white text-left py-4 hover:no-underline">
                  How long does Botox<sup>®</sup> last?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  Typically, Botox<sup>®</sup> results last 3 to 4 months, with
                  muscle activity gradually returning around six months
                  post-treatment. Sticking to a consistent schedule—such as
                  booking your first three sessions every three months—can help
                  prolong results. Treatments at Skin Vitality, your trusted
                  Botox clinic near me, are administered by experienced
                  professionals to ensure safe, consistent outcomes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-gray-800 border-b"
              >
                <AccordionTrigger className="text-white hover:text-white text-left py-4 hover:no-underline">
                  What is the difference between Botox<sup>®</sup> and dermal fillers?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  While both are injectable treatments, Botox<sup>®</sup> and
                  dermal fillers serve different purposes. Botox<sup>®</sup>{" "}
                  relaxes muscle movement to soften fine lines, while dermal
                  fillers restore lost volume in areas like the cheeks, lips,
                  and under eyes. In some cases, Botox can also be used
                  therapeutically—for example, masseter Botox may be recommended
                  to ease jaw clenching or help contour the lower face.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-gray-800 border-b"
              >
                <AccordionTrigger className="text-white hover:text-white text-left py-4 hover:no-underline">
                  Are Botox<sup>®</sup> injections painful?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  Discomfort is minimal—most clients describe it as a brief
                  pinch. The treatment is fast and typically doesn't require any
                  numbing. Whether you're smoothing forehead lines or addressing
                  a functional concern, the expert team at Skin Vitality ensures
                  a comfortable and professional experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border-gray-800 border-b"
              >
                <AccordionTrigger className="text-white hover:text-white text-left py-4 hover:no-underline">
                  How soon will I see results after my first Botox<sup>®</sup> treatment?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  You may begin noticing results within 3 to 4 days, with full
                  effects visible by 10 to 14 days. Your injector at Skin
                  Vitality, Canada's #1 Botox Clinic, will monitor your progress
                  and help plan any necessary follow-up treatments for optimal
                  results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="border-gray-800 border-b"
              >
                <AccordionTrigger className="text-white hover:text-white text-left py-4 hover:no-underline">
                  Will I still be able to make facial expressions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  Yes. Botox<sup>®</sup> softens muscle movement but does not
                  erase your ability to express emotion. Our skilled injectors
                  tailor each treatment to deliver natural-looking results that
                  preserve your facial expressions while reducing the appearance
                  of lines.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="border-gray-800 border-b"
              >
                <AccordionTrigger className="text-white hover:text-white text-left py-4 hover:no-underline">
                  How is the recovery time?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  There is no downtime required after Botox<sup>®</sup>{" "}
                  injections. Most clients return to their usual routine
                  immediately, though we recommend avoiding lying down or
                  strenuous exercise for about 4 hours post-treatment. This
                  ensures the best possible outcome from your visit to Skin
                  Vitality, your nearby Botox clinic.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="border-gray-800 border-b"
              >
                <AccordionTrigger className="text-white hover:text-white text-left py-4 hover:no-underline">
                  Do you offer Botox at all Skin Vitality locations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  Yes, Botox injections near me are available at all Skin
                  Vitality clinics across Ontario, including Toronto,
                  Mississauga, Ajax, Barrie, Burlington, Hamilton, Kitchener,
                  London, Milton, Oakville, Richmond Hill, St. Catharines,
                  Stoney Creek, and Whitby. No matter where you book, you'll
                  receive expert care from a team you can trust.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
