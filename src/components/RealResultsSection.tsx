"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

function ComparisonSlider({
  beforeImage,
  afterImage,
  alt,
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
      {/* Before Image */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt={`${alt} - Before`}
          fill
          className="object-contain"
        />
      </div>

      {/* After Image with clip */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={afterImage}
          alt={`${alt} - After`}
          fill
          className="object-contain"
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-pink-500">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-4 bg-pink-500 rounded"></div>
            <div className="w-0.5 h-4 bg-pink-500 rounded"></div>
          </div>
        </div>
      </div>

      {/* Range Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-20"
      />

      {/* Before/After Labels */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-20 text-white font-semibold text-lg drop-shadow-lg">
        <span>Before</span>
        <span>After</span>
      </div>
    </div>
  );
}

export default function RealResultsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      beforeImage:
        "https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/02/Botox-1-Before-e1676392765652.jpg",
      afterImage:
        "https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/02/Botox-1-After-e1676392748413.jpg",
      alt: "Botox Treatment Result 1",
    },
    {
      beforeImage:
        "https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/02/Botox-2-Before-e1676392782573.jpg",
      afterImage:
        "https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/02/Botox-2-After-e1676392817709.jpg",
      alt: "Botox Treatment Result 2",
    },
    {
      beforeImage:
        "https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/02/Botox-3-Before-e1676392846517.jpg",
      afterImage:
        "https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/02/Botox-3-After-e1676392832908.jpg",
      alt: "Botox Treatment Result 3",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Real results. Real clients. This is the Skin Vitality difference.
          </h1>
        </header>

        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="relative flex items-center">
            {/* Previous Image Preview */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-48 h-72 opacity-30 z-10">
              <Image
                src={
                  slides[(currentSlide - 1 + slides.length) % slides.length]
                    .beforeImage
                }
                alt="Previous slide preview"
                fill
                className="object-contain rounded-lg"
              />
            </div>

            {/* Main Comparison Slider */}
            <div className="flex-1 mx-24">
              <ComparisonSlider
                beforeImage={slides[currentSlide].beforeImage}
                afterImage={slides[currentSlide].afterImage}
                alt={slides[currentSlide].alt}
              />
            </div>

            {/* Next Image Preview */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-48 h-72 opacity-30 z-10">
              <Image
                src={slides[(currentSlide + 1) % slides.length].beforeImage}
                alt="Next slide preview"
                fill
                className="object-contain rounded-lg"
              />
            </div>

            {/* Navigation Arrows */}
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 bg-white hover:bg-gray-50 shadow-xl z-40 border-2 border-gray-300 flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </Button>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 bg-white hover:bg-gray-50 shadow-xl z-40 border-2 border-gray-300 flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </Button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-pink-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <footer className="text-center">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-3xl font-bold text-black whitespace-nowrap">
              0% Financing Available
            </h2>
            <Image
              src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/01/logo-affirm.png"
              alt="Affirm Logo"
              width={120}
              height={48}
              className="cursor-pointer hover:opacity-80 transition-opacity pb-4"
            />
          </div>
        </footer>
      </div>
    </section>
  );
}
