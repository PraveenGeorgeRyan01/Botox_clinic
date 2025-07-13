"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function IntroductoryAboutSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

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
            {!isVideoPlaying ? (
              <>
                <Image
                  src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2025/04/landing-page-images-8-673x505.png"
                  alt="Botox Wrinkle Relaxers Near Me"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlayVideo}
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all duration-300 hover:scale-110"
                  >
                    <Play
                      className="w-12 h-12 text-black ml-1"
                      fill="currentColor"
                    />
                  </button>
                </div>
              </>
            ) : (
              <div
                className="w-full h-full"
                style={{ padding: "177.78% 0 0 0", position: "relative" }}
              >
                <iframe
                  src="https://player.vimeo.com/video/825227712?controls=1&autoplay=1&app_id=122963"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title="Botox Injection Areas"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
