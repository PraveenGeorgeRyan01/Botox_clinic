"use client";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";

export default function HowItWorksSection() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-12">
          <div className="text-pink-500 text-sm font-semibold mb-4">
            How It Works
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">
            Getting Started With Us Is As Easy As
            <br />
            1, 2, 3...
          </h1>
        </header>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/01/icon-phone.png"
                alt="Phone icon"
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>
            <h6 className="text-xl font-semibold mb-4">
              1- Fill In Our Short Form
            </h6>
            <p className="text-gray-300">
              To book an appointment for FREE Assessment & Consultation
            </p>
          </div>

          <div className="text-center">
            <div className="mb-6">
              <Image
                src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/01/icon-headset.png"
                alt="Headset icon"
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>
            <h6 className="text-xl font-semibold mb-4">
              2- We Will Get In Touch
            </h6>
            <p className="text-gray-300">
              Skin Vitality Team of Experts will get in touch with you asap
            </p>
          </div>

          <div className="text-center">
            <div className="mb-6">
              <Image
                src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/01/icon-enjoy.png"
                alt="Enjoy icon"
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>
            <h6 className="text-xl font-semibold mb-4">3- Enjoy</h6>
            <p className="text-gray-300">
              Enjoy the Best Medical Services
              <br />
              in the Country
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center">
          <div className="mb-6">
            <p className="text-lg">
              Book Your <strong>FREE Consultation & Assessment</strong> With A
              Member Of Our Medical Team
            </p>
          </div>

          <div className="flex justify-center gap-4 flex-wrap mb-8">
            <Button
              variant="outline"
              className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-3"
            >
              Text Me
            </Button>
            <Button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-green-500 hover:bg-green-600 px-8 py-3"
            >
              Book My Appointment
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm">
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
        </footer>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
}
