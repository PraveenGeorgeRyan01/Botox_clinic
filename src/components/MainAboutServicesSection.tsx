import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";

export default function MainAboutServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-pink-500 text-sm font-semibold mb-2">
              About Skin Vitality
            </div>
            <h2 className="text-4xl font-bold text-black mb-6">
              The #1 Provider Of Botox® In Canada
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Founded in 1992, Skin Vitality Medical Clinic has 14 Locations
                across Southeastern Ontario. Our Medical Team consists of over
                200 professionals including 10 Doctors and 50 Nurses.
              </p>
              <p>
                We are the Largest Provider of Botox, Juvederm, CoolSculpting,
                Morpheus8, Sculptra, Hair Restoration, EMSculpt, Intiimalase and
                Fraxel in Canada.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80"
              alt="Clinic interior"
              width={600}
              height={400}
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                className="rounded-full w-16 h-16 bg-white/20 hover:bg-white/30"
              >
                <Play className="w-8 h-8 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
