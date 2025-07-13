import Image from "next/image";
import { MapPin } from "lucide-react";

export default function LocationsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-pink-500 text-sm font-semibold mb-2">
              Our Locations
            </div>
            <h2 className="text-4xl font-bold text-black mb-8">
              Find A Location Near You
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <address className="not-italic">
                    <div className="font-semibold text-black">Oakville</div>
                    <div className="text-sm text-gray-600">481 Cornwall Rd</div>
                  </address>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <address className="not-italic">
                    <div className="font-semibold text-black">Mississauga</div>
                    <div className="text-sm text-gray-600">
                      126 Lakeshore Rd. E.
                    </div>
                  </address>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <address className="not-italic">
                    <div className="font-semibold text-black">Toronto</div>
                    <div className="text-sm text-gray-600">
                      351 Eglinton Avenue West
                    </div>
                  </address>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <address className="not-italic">
                    <div className="font-semibold text-black">Ajax</div>
                    <div className="text-sm text-gray-600">
                      15 Westney Road North Unit 1C
                    </div>
                  </address>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <address className="not-italic">
                    <div className="font-semibold text-black">Burlington</div>
                    <div className="text-sm text-gray-600">5014 New St</div>
                  </address>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <address className="not-italic">
                    <div className="font-semibold text-black">
                      Richmond Hill
                    </div>
                    <div className="text-sm text-gray-600">
                      8865 Yonge Street
                    </div>
                  </address>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <address className="not-italic">
                    <div className="font-semibold text-black">Hamilton</div>
                    <div className="text-sm text-gray-600">
                      #101-25 Main Street West Suite
                    </div>
                  </address>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <address className="not-italic">
                    <div className="font-semibold text-black">Stoney Creek</div>
                    <div className="text-sm text-gray-600">
                      311 Fruitland Road Unit 3
                    </div>
                  </address>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <address className="not-italic">
                    <div className="font-semibold text-black">London</div>
                    <div className="text-sm text-gray-600">
                      595 Fanshawe Park Rd. W., Unit F
                    </div>
                  </address>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <address className="not-italic">
                    <div className="font-semibold text-black">Milton</div>
                    <div className="text-sm text-gray-600">
                      1250 Steeles Ave E
                    </div>
                  </address>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <address className="not-italic">
                    <div className="font-semibold text-black">Whitby</div>
                    <div className="text-sm text-gray-600">
                      1614 Dundas St. E Unit # 101
                    </div>
                  </address>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <address className="not-italic">
                    <div className="font-semibold text-black">
                      St. Catharines
                    </div>
                    <div className="text-sm text-gray-600">
                      436 Vansickle Rd, Unit #3
                    </div>
                  </address>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <address className="not-italic">
                    <div className="font-semibold text-black">Kitchener</div>
                    <div className="text-sm text-gray-600">
                      4281 King St. E.
                    </div>
                  </address>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <address className="not-italic">
                    <div className="font-semibold text-black">Barrie</div>
                    <div className="text-sm text-gray-600">
                      555 Essa Rd Unit 28
                    </div>
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Image
              src="https://skinvitality.com/botox/wp-content/uploads/sites/7/2025/07/Map-of-locations.png"
              alt="Medical clinic location map"
              width={684}
              height={503}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
