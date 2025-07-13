import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="text-pink-500 text-sm font-semibold mb-2">
          How It Works
        </div>
        <h2 className="text-4xl font-bold mb-12">
          Getting Started With Us Is As Easy As 1, 2, 3...
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 border-2 border-pink-500 rounded-lg flex items-center justify-center">
              <div className="text-pink-500 text-2xl">📋</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              1- Fill In Our Short Form
            </h3>
            <p className="text-gray-300">
              To book an appointment for FREE Assessment & Consultation
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 border-2 border-pink-500 rounded-lg flex items-center justify-center">
              <div className="text-pink-500 text-2xl">🎧</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              2- We Will Get In Touch
            </h3>
            <p className="text-gray-300">
              Skin Vitality Team of Experts will get in touch with you asap
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 border-2 border-pink-500 rounded-lg flex items-center justify-center">
              <div className="text-pink-500 text-2xl">😊</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">3- Enjoy</h3>
            <p className="text-gray-300">
              Enjoy the Best Medical Services in the Country
            </p>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-lg mb-4">
            Book Your <strong>FREE Consultation & Assessment</strong> With A
            Member Of Our Medical Team
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant="outline"
              className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
            >
              TEXT ME
            </Button>
            <Button className="bg-green-500 hover:bg-green-600">
              BOOK MY APPOINTMENT 👉
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span>
            Rated <strong>4.9</strong> Stars By <strong>5000+</strong> Satisfied
            Clients
          </span>
        </div>
      </div>
    </section>
  );
}
