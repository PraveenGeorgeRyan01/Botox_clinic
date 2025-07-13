import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FinalCTASection() {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2 items-center">
        <div className="relative">
          <Image
            src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2025/04/Botox-Near-Me.png"
            alt="Botox Near Me"
            width={1000}
            height={750}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="bg-black text-white p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-sm mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="https://skinvitality.com/botox/wp-content/themes/botox-lp/resources/images/icon-star.svg"
                  alt="star"
                  width={15}
                  height={15}
                  className="w-4 h-4"
                />
              ))}
            </div>
            <span>
              Rated <strong>4.9</strong> Stars By <strong>5000+</strong>{" "}
              Satisfied Clients
            </span>
          </div>

          <div className="text-pink-500 text-sm font-semibold mb-2">
            So What Are You Waiting For?
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Get Your Appointment For A FREE Consultation Today
          </h1>

          <p className="text-gray-300 mb-8 text-lg">
            Dedicated to providing dynamic & natural looking results that help
            you own your look with confidence, style & grace.
          </p>

          <div className="flex gap-4 mb-8 flex-wrap">
            <Button
              variant="outline"
              className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-3 text-base font-semibold"
            >
              Text Me
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 px-8 py-3 text-base font-semibold">
              Book My Appointment
            </Button>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <blockquote className="text-gray-300 mb-4 italic text-base">
              &quot;First time getting botox and they could not have been more
              assuring. Going back in 3 weeks to get another treatment done!
              Will be my new clinic for any work I need done.&quot;
            </blockquote>

            <div className="flex items-center gap-3">
              <Image
                src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/02/download-50x50.jpg"
                alt="Nicolette L."
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <div className="font-semibold text-white">-Nicolette L.</div>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="https://skinvitality.com/botox/wp-content/themes/botox-lp/resources/images/icon-star.svg"
                      alt="star"
                      width={15}
                      height={15}
                      className="w-4 h-4"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
