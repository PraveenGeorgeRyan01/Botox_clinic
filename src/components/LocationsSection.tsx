import { MapPin } from "lucide-react";
import Image from "next/image";

export default function LocationsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-pink-500 text-sm font-semibold mb-2">
              Our Locations
            </div>
            <h2 className="text-4xl font-bold text-black mb-8">
              Find A Location Near You
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <div className="font-semibold">Oakville</div>
                    <div className="text-sm text-gray-600">481 Cornwall Rd</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <div className="font-semibold">Mississauga</div>
                    <div className="text-sm text-gray-600">
                      126 Lakeshore Rd. E.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <div className="font-semibold">Toronto</div>
                    <div className="text-sm text-gray-600">
                      351 Eglinton Avenue West
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <div className="font-semibold">Ajax</div>
                    <div className="text-sm text-gray-600">
                      15 Westney Road North Unit 1C
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <div className="font-semibold">Burlington</div>
                    <div className="text-sm text-gray-600">5014 New St</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <div className="font-semibold">Richmond Hill</div>
                    <div className="text-sm text-gray-600">
                      8865 Yonge Street
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <div className="font-semibold">Hamilton</div>
                    <div className="text-sm text-gray-600">
                      #101-25 Main Street West Suite
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <div className="font-semibold">Stoney Creek</div>
                    <div className="text-sm text-gray-600">
                      311 Fruitland Road Unit 3
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <div className="font-semibold">London</div>
                    <div className="text-sm text-gray-600">
                      595 Fanshawe Park Rd. W., Unit F
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <div className="font-semibold">Milton</div>
                    <div className="text-sm text-gray-600">
                      1250 Steeles Ave E
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <div className="font-semibold">Whitby</div>
                    <div className="text-sm text-gray-600">
                      1614 Dundas St. E Unit # 101
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <div className="font-semibold">St. Catharines</div>
                    <div className="text-sm text-gray-600">
                      436 Vansickle Rd, Unit #3
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <div className="font-semibold">Kitchener</div>
                    <div className="text-sm text-gray-600">
                      4281 King St. E.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <div className="font-semibold">Barrie</div>
                    <div className="text-sm text-gray-600">
                      555 Essa Rd Unit 28
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-green-100 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80"
                alt="Map of locations"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
