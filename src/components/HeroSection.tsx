"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Star, Play } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="bg-black text-white relative">
      {/* Top Bar */}
      <div className="bg-pink-500 text-center py-2 text-sm font-medium">
        0% Financing Available
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-sm">Get In Touch Today</span>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">(877) 356-7776</span>
          </div>
        </div>

        <div className="text-2xl font-bold">
          SkinVitality<span className="text-sm">™</span>
          <div className="text-xs font-normal">MEDICAL CLINIC</div>
        </div>

        <div className="flex items-center gap-4">
          <Input
            placeholder="000-000-0000"
            className="w-32 bg-white text-black"
          />
          <Button className="bg-pink-500 hover:bg-pink-600">Text Me!</Button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Form */}
          <div className="space-y-6 h-full flex flex-col">
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

            <div className="text-pink-400 text-sm mb-2">
              Same day appointments for lip flip, brow lift, crows feet,
              forehead, TMJ and more!
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              20 Botox® Units For Just $87.
              <br />
              Exclusively Available By
              <br />
              Canada's #1 Provider.
            </h1>

            {/* Form */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">First Name</label>
                  <Input placeholder="Monica" className="bg-white text-black" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Last Name</label>
                  <Input placeholder="Finch" className="bg-white text-black" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <Input
                    placeholder="Monicafinch@Gmail.Com"
                    className="bg-white text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone Number</label>
                  <Input
                    placeholder="123-1122-123"
                    className="bg-white text-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">
                    Preferred Method Of Contact
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Text" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Text</SelectItem>
                      <SelectItem value="call">Call</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm mb-2">Clinic Location</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Select Desired Clinic Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oakville">Oakville</SelectItem>
                      <SelectItem value="mississauga">Mississauga</SelectItem>
                      <SelectItem value="toronto">Toronto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="consent" className="mt-1" />
                <label htmlFor="consent" className="text-xs leading-relaxed">
                  Please Email/Text Me Discount Offers From Skin Vitality (You
                  Can Withdraw Your Consent Anytime)
                </label>
              </div>

              <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 text-lg">
                REQUEST A FREE CONSULTATION 👉
              </Button>

              <div className="text-center text-xs">
                🔒 Your Information Is Safe With Us
                <div className="mt-2">
                  <span className="bg-green-600 px-2 py-1 rounded text-xs">
                    SECURED
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative h-[700px]">
            <div className="relative rounded-lg overflow-hidden h-full">
              {!isVideoPlaying ? (
                // Thumbnail with play button
                <div className="relative h-full">
                  <img
                    src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2025/06/2-864x1536.png"
                    alt="Botox Process"
                    className="w-full h-full object-cover"
                  />
                  {/* Play button overlay */}
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
                </div>
              ) : (
                // Video player
                <video
                  src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2025/06/botox_for_first-timers__start_with_20_units_for_just_87_-360p.mp4"
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
