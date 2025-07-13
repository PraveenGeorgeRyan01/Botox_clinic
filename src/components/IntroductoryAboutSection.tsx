import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";

export default function IntroductoryAboutSection() {
  return (
    <section className="py-0 bg-white">
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        {/* Left Content Compartment */}
        <div className="flex items-center justify-center px-8 lg:px-16 py-12 bg-white">
          <div className="max-w-md">
            <div className="text-pink-500 text-sm font-semibold mb-4">
              About Skin Vitality
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
              Skin Vitality Medical Clinic: Proudly Serving Canadians Since 1992
            </h1>
          </div>
        </div>

        {/* Right Video Compartment */}
        <div className="relative bg-gray-100 min-h-[500px] flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2025/04/landing-page-images-8-673x505.png"
              alt="Botox Wrinkle Relaxers Near Me"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all duration-300 hover:scale-110">
                <Play
                  className="w-12 h-12 text-black ml-1"
                  fill="currentColor"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
