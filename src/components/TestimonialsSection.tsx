import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
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

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=nicole"
                  alt="Nicole P."
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">-Nicole P.</div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <div className="ml-auto text-2xl font-bold text-blue-500">
                  G
                </div>
              </div>
              <p className="text-sm text-gray-600">
                &quot;Answered all of the questions I had prior to my
                appointment. The actual botox treatment with Nurse Jennifer also
                went smoothly. I just had my two week follow up appointment and
                can say that I am seeing the results that I wanted. I've already
                purchased a package with this clinic and plan to return! The
                clinic is also super clean and safe.&quot;
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=stephanie"
                  alt="Stephanie E."
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">-Stephanie E.</div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <div className="ml-auto text-2xl font-bold text-blue-500">
                  G
                </div>
              </div>
              <p className="text-sm text-gray-600">
                &quot;From my first consultation to the day of my procedure! I
                received my FIRST ever botox and lip filler treatments with
                nurse Nicole and it was an amazing experience! The staff are so
                friendly and professional and you can tell they want nothing,
                but for their clients to feel happy and beautiful! I would
                recommend for anyone either experienced or not to come to Skin
                Vitality!&quot;
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=vanessa"
                  alt="Vanessa T."
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">-Vanessa T.</div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <div className="ml-auto text-2xl font-bold text-blue-500">
                  G
                </div>
              </div>
              <p className="text-sm text-gray-600">
                &quot;I love this clinic! The entire staff team is so kind and
                welcoming. I went in for my first ever botox treatment and was
                nervous that I might feel some pressure to do more than I wanted
                to. I love how I look and just wanted to ease some tension in my
                forehead. The consultation went so well and I actually felt more
                beautiful than ever before I even received a treatment. I LOVED
                the process and the result. I can't wait to go back for my
                second treatment! So happy.&quot;
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
