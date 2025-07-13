import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, Plus } from "lucide-react";

export default function FAQSection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-pink-500 text-sm font-semibold mb-2">
              Got Questions? We've Got You Covered!
            </div>
            <h2 className="text-4xl font-bold mb-8">
              Frequently Asked Questions
            </h2>

            <div className="mb-8">
              <p className="text-lg mb-4">
                Book Your <strong>FREE Consultation & Assessment</strong> With A
                Member Of Our Medical Team
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  BOOK MY APPOINTMENT 👉
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                >
                  TEXT ME
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span>
                Rated <strong>4.9</strong> Stars By <strong>5000+</strong>{" "}
                Satisfied Clients
              </span>
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-pink-500">
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    What is Botox®?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Botox® is a prescription medicine that is injected into
                  muscles to temporarily improve the look of moderate to severe
                  frown lines.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-pink-500">
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    How long does Botox® last?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Results typically last 3-4 months, though individual results
                  may vary.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-pink-500">
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    What is the difference between Botox® and dermal fillers?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Botox® relaxes muscles to reduce wrinkles, while dermal
                  fillers add volume to restore facial contours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-pink-500">
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Are Botox® injections painful?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Most patients experience minimal discomfort during the
                  procedure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-pink-500">
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    How soon will I see results after my first Botox®
                    treatment?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Results typically begin to appear within 3-5 days, with full
                  results visible in 1-2 weeks.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-pink-500">
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Will I still be able to make facial expressions?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Yes, when administered properly, Botox® allows for natural
                  facial expressions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-pink-500">
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    How is the recovery time?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  There is minimal downtime with Botox® treatments. Most
                  patients return to normal activities immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-pink-500">
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Do you offer Botox at all Skin Vitality locations?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Yes, Botox® treatments are available at all of our 14 clinic
                  locations across Ontario.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
