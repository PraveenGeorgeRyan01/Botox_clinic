export default function FooterSection() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              SkinVitality<span className="text-sm">™</span>
              <div className="text-xs font-normal">MEDICAL CLINIC</div>
            </div>
            <div className="text-sm text-gray-400 space-y-2">
              <p>
                Copyright © 2025 Skin Vitality Medical Clinic. All rights
                reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-pink-500">
                  Privacy Policy
                </a>
                <span>-</span>
                <a href="#" className="hover:text-pink-500">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-400 space-y-2">
            <p>
              *Please Note: Before and after photos are examples of patient
              results. Results may vary. All patients must undergo our medical
              consultation with one of our licensed physicians prior to
              receiving prescription medication. This offer is valid for new
              patients only and cannot be used in conjunction with any other
              offers. Taxes not included. Some conditions apply, please contact
              us for full details. Botox Cosmetic is a registered trademark of
              Allergan Inc.
            </p>
            <p>
              *Please Note: Free giftcard offers are to be used on your next
              purchase.
            </p>
            <p>*10 free units to be used in a separate visit.</p>
            <p>
              *20 units of Botox for $87 is available for first time patients,
              and returning patients who have not purchase within the calendar
              year.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
