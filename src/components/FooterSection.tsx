import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <Image
                src="https://skinvitality.com/botox/wp-content/themes/botox-lp/resources/images/logo.png"
                alt="Botox Lp"
                width={240}
                height={73}
                className="h-auto"
              />
            </div>
            <div className="text-sm text-gray-400 space-y-2">
              <p>
                Copyright © 2025 Skin Vitality Medical Clinic. All rights
                reserved.
              </p>
              <p>
                <a
                  href="https://www.skinvitality.ca/privacy-statement/"
                  className="hover:text-pink-500"
                >
                  Privacy Policy ‐ Terms & Conditions
                </a>
              </p>
            </div>
          </div>

          <div className="text-xs text-gray-400 space-y-3">
            <p>
              <strong>*Please Note:</strong> Before and after photos are
              examples of patient results. Results may vary. All patients must
              undergo our medical consultation with one of our licensed
              physicians prior to receiving prescription medication. This offer
              is valid for new patients only and cannot be used in conjunction
              with any other offers. Taxes not included. Some conditions apply,
              please contact us for full details. Botox Cosmetic® is a
              registered trademark of Allergan Inc.
            </p>
            <p>
              <strong>*Please Note:</strong> Free giftcard offers are to be used
              on your next purchase.
            </p>
            <p>
              *<strong>10 free units</strong> to be used in a separate visit.
            </p>
            <p>
              *<strong>20 units of Botox for $87</strong> is available for first
              time patients, and returning patients who have not purchase within
              the calendar year.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
