import { Button } from "@/components/ui/button";
import { Users, Clock, Building, Diamond, Award } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-pink-500 text-sm font-semibold mb-2">
            Why Choose Us?
          </div>
          <h2 className="text-4xl font-bold mb-8">
            With 96% Success Rate, We Can Offer You The Best Services In Country
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Users className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">
              An Experienced Medical Team with the Most Specialized Training
            </h3>
          </div>

          <div className="text-center">
            <Clock className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">
              Open 9am to 8pm Monday to Friday plus Saturdays until 5pm
            </h3>
          </div>

          <div className="text-center">
            <Users className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">
              Over 200 staff members including 10 Doctors & 50 Nurses
            </h3>
          </div>

          <div className="text-center">
            <Building className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">
              Free same day in clinic assessments available
            </h3>
          </div>

          <div className="text-center">
            <Diamond className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">State-of-the-art Facilities</h3>
          </div>

          <div className="text-center">
            <Award className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">
              Five Star Testimonials / 96% Patient Satisfaction
            </h3>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg mb-6">
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
      </div>
    </section>
  );
}
