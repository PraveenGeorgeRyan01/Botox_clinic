"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "-Nicole P.",
    image:
      "https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/01/photo-nicole.webp",
    text: "Answered all of the questions I had prior to my appointment. The actual botox treatment with Nurse Jennifer also went smoothly. I just had my two week follow up appointment and can say that I am seeing the results that I wanted. I've already purchased a package with this clinic and plan to return! The clinic is also super clean and safe.",
  },
  {
    id: 2,
    name: "-Stephanie E.",
    image:
      "https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/01/photo-tiana.webp",
    text: "From my first consultation to the day of my procedure! I received my FIRST ever botox and lip filler treatments with nurse Nicole and it was an amazing experience! The staff are so friendly and professional and you can tell they want nothing, but for their clients to feel happy and beautiful! I would recommend for anyone either experienced or not to come to Skin Vitality!",
  },
  {
    id: 3,
    name: "- Vanessa T.",
    image:
      "https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/01/photo-tiana.webp",
    text: "I love this clinic! The entire staff team is so kind and welcoming. I went in for my first ever botox treatment and was nervous that I might feel some pressure to do more than I wanted to. I love how I look and just wanted to ease some tension in my forehead. The consultation went so well and I actually felt more beautiful than ever before I even received a treatment. I LOVED the process and the result. I can't wait to go back for my second treatment! So happy.",
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-pink-500 text-sm font-semibold mb-2">
            Testimonials
          </div>
          <h2 className="text-4xl font-bold text-black">
            Check Out What Our Clients Have To Say About Our Services
          </h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-[0_0_100%] md:flex-[0_0_33.333%] px-4"
              >
                <div className="bg-white border border-gray-200 rounded-lg p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm mb-1">
                          {testimonial.name}
                        </p>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Image
                              key={i}
                              src="https://skinvitality.com/botox/wp-content/themes/botox-lp/resources/images/icon-star.svg"
                              alt="star"
                              width={15}
                              height={15}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Image
                      src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/01/logo-google-1.png"
                      alt="Google"
                      width={53}
                      height={50}
                      className="flex-shrink-0"
                    />
                  </div>
                  <blockquote className="text-sm text-gray-600 leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedIndex ? "bg-pink-500" : "bg-gray-300"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
