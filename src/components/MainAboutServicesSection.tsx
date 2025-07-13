"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function MainAboutServicesSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-pink-500 text-sm font-semibold mb-2">
              About Skin Vitality
            </div>
            <h2 className="text-4xl font-bold text-black mb-6">
              The #1 Provider Of Botox<sup>®</sup> In Canada
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Founded in 1992, Skin Vitality Medical Clinic has 14 Locations
                across Southeastern Ontario. Our Medical Team consists of over
                200 professionals including 10 Doctors and 50 Nurses.
              </p>
              <p>
                We are the Largest Provider of Botox, Juvederm, CoolSculpting,
                Morpheus8, Sculptra, Hair Restoration, EMSculpt, Intimalase and
                Fraxel in Canada.
              </p>
            </div>
          </div>

          <div className="relative">
            {!isVideoPlaying ? (
              <>
                <Image
                  src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2025/04/landing-page-video-thumbnail-1-1.png"
                  alt="Skin Vitality Botox Near Me"
                  width={800}
                  height={392}
                  className="w-full h-80 object-cover rounded-lg"
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
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/1073587754?autoplay=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
