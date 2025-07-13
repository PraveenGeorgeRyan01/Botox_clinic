"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    firstName: "Monica",
    lastName: "Finch",
    email: "Monicafinch@Gmail.Com",
    phone: "123-1122-123",
    contactMethod: "text",
    location: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-black">
            Book Your FREE Consultation
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                First Name
              </label>
              <Input
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="bg-white border-gray-300 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Last Name
              </label>
              <Input
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="bg-white border-gray-300 text-black"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Email
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-white border-gray-300 text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Phone Number
            </label>
            <Input
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="bg-white border-gray-300 text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Clinic Location
            </label>
            <Select
              value={formData.location}
              onValueChange={(value) =>
                setFormData({ ...formData, location: value })
              }
            >
              <SelectTrigger className="bg-white border-gray-300 text-black">
                <SelectValue placeholder="Select Desired Clinic Location" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="toronto">Toronto</SelectItem>
                <SelectItem value="milton">Milton</SelectItem>
                <SelectItem value="burlington">Burlington</SelectItem>
                <SelectItem value="whitby">Whitby</SelectItem>
                <SelectItem value="ajax">Ajax</SelectItem>
                <SelectItem value="richmond-hill">Richmond Hill</SelectItem>
                <SelectItem value="stoney-creek">Stoney Creek</SelectItem>
                <SelectItem value="st-catharines">St. Catharines</SelectItem>
                <SelectItem value="oakville">Oakville</SelectItem>
                <SelectItem value="mississauga">Mississauga</SelectItem>
                <SelectItem value="london">London</SelectItem>
                <SelectItem value="kitchener">Kitchener</SelectItem>
                <SelectItem value="hamilton">Hamilton</SelectItem>
                <SelectItem value="barrie">Barrie</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Preferred Method Of Contact
            </label>
            <Select
              value={formData.contactMethod}
              onValueChange={(value) =>
                setFormData({ ...formData, contactMethod: value })
              }
            >
              <SelectTrigger className="bg-white border-gray-300 text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="text">Text</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="call">Call</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, consent: checked as boolean })
              }
              className="mt-1"
            />
            <label
              htmlFor="consent"
              className="text-xs text-black leading-relaxed"
            >
              Please Email/Text Me Discount Offers From Skin Vitality (You Can
              Withdraw Your Consent Anytime)
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 text-lg"
          >
            SUBMIT TO BOOK MY APPOINTMENT 👉
          </Button>

          <div className="text-center text-xs text-black">
            🔒 Your Information Is Safe With Us
            <div className="mt-2">
              <span className="bg-green-600 px-2 py-1 rounded text-xs text-white">
                SECURED
              </span>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
