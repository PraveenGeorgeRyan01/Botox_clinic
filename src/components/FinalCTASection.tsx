import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

export default function FinalCTASection() {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80"
            alt="Happy client"
            width={600}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-black text-white p-12 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-sm mb-4">
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

          <div className="text-pink-500 text-sm font-semibold mb-2">
            So What Are You Waiting For?
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Get Your Appointment For A FREE Consultation Today
          </h2>

          <p className="text-gray-300 mb-8">
            Dedicated to providing dynamic & natural looking results that help
            you own your look with confidence, style & grace.
          </p>

          <div className="flex gap-4 mb-8 flex-wrap">
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

          <div className="border-t border-gray-700 pt-6">
            <div className="flex items-center gap-3">
              <Image
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=nicolette"
                alt="Nicolette L."
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="font-semibold">-Nicolette L.</div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-300 mt-3 italic">
              &quot;First time getting botox and they could not have been more
              assuring. Going back in 3 weeks to get another treatment done!
              Will be my new clinic for any work I need done.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
