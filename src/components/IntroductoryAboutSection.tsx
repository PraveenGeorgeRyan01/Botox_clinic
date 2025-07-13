import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";

export default function IntroductoryAboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="text-lg font-semibold mb-2">
            0% Financing Available{" "}
            <span className="text-blue-500 font-bold">affirm</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-pink-500 text-sm font-semibold mb-2">
              About Skin Vitality
            </div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Skin Vitality Medical Clinic: Proudly Serving Canadians Since 1992
            </h2>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1594824804732-ca8db7d1e4ca?w=600&q=80"
              alt="Happy client"
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
