import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-pink-500 text-sm font-semibold mb-2">
            Why Choose Us?
          </div>
          <h2 className="text-4xl font-bold mb-8">
            With 96% Success Rate, We Can
            <br />
            Offer You The Best Services In Country
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-15 h-15 mx-auto mb-4">
              <img
                width="60"
                height="60"
                src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/01/icon-team.png"
                alt="Medical Team"
                className="mx-auto"
              />
            </div>
            <h3 className="font-semibold mb-2">
              An Experienced Medical Team with the Most Specialized Training
            </h3>
          </div>

          <div className="text-center">
            <div className="w-15 h-15 mx-auto mb-4">
              <img
                width="60"
                height="60"
                src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/01/icon-calendar.png"
                alt="Calendar"
                className="mx-auto"
              />
            </div>
            <h3 className="font-semibold mb-2">
              Open 9am to 8pm Monday to Friday plus Saturdays until 5pm
            </h3>
          </div>

          <div className="text-center">
            <div className="w-15 h-15 mx-auto mb-4">
              <img
                width="60"
                height="60"
                src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/01/icon-staff.png"
                alt="Staff"
                className="mx-auto"
              />
            </div>
            <h3 className="font-semibold mb-2">
              Over 200 staff members including 10 Doctors & 50 Nurses
            </h3>
          </div>

          <div className="text-center">
            <div className="w-15 h-15 mx-auto mb-4">
              <img
                width="60"
                height="60"
                src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/01/icon-clinic.png"
                alt="Clinic"
                className="mx-auto"
              />
            </div>
            <h3 className="font-semibold mb-2">
              Free same day in clinic assessments available
            </h3>
          </div>

          <div className="text-center">
            <div className="w-15 h-15 mx-auto mb-4">
              <img
                width="60"
                height="60"
                src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/01/icon-diamond.png"
                alt="Diamond"
                className="mx-auto"
              />
            </div>
            <h3 className="font-semibold mb-2">
              State-of-the-art
              <br />
              Facilities
            </h3>
          </div>

          <div className="text-center">
            <div className="w-15 h-15 mx-auto mb-4">
              <img
                width="60"
                height="60"
                src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2023/01/icon-stars.png"
                alt="Stars"
                className="mx-auto"
              />
            </div>
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
          <div className="flex justify-center gap-4 flex-wrap mb-8">
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

          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-sm">
              Rated <strong>4.9</strong> Stars By <strong>5000+</strong>{" "}
              Satisfied Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
