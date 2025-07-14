import React, { useState } from "react";
import { Calendar, Clock, MapPin, UserPlus, Check, Users, GraduationCap, Gift } from "lucide-react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";

export const EventSection = ({ id }: { id?: string }): JSX.Element => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      console.log("Event signup:", { name, email });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        setName("");
      }, 3000);
    }
  };

  return (
    <section id={id} className="w-full px-4 sm:px-6 lg:px-8 xl:px-[20%]">
      <Card className="w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#2e1818] to-[#1a1a1a] border-none shadow-2xl">
        <CardContent className="p-6 sm:p-8 lg:p-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#bae800] rounded-full mb-6">
              <Calendar className="w-8 h-8 text-black" />
            </div>
            
            <h2 className="font-display-font-display-lg font-bold text-white text-xl sm:text-2xl lg:text-[48px] mb-4">
              Upcoming AI Workshop
            </h2>
            
            <p className="font-body-font-body-lg text-[#d6d6d6] text-sm sm:text-base lg:text-[18px] leading-relaxed max-w-2xl mx-auto mb-6">
              Join our exclusive Sinhala AI workshop and learn the latest tools and techniques
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[#bae800] mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="font-body-font-body-md text-sm sm:text-base">March 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-body-font-body-md text-sm sm:text-base">2:00 PM - 5:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="font-body-font-body-md text-sm sm:text-base">Online</span>
              </div>
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-12 bg-[#0e0e0e] border border-gray-600 rounded-lg text-white placeholder-gray-400 px-4 focus:border-[#bae800] focus:ring-1 focus:ring-[#bae800]"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 bg-[#0e0e0e] border border-gray-600 rounded-lg text-white placeholder-gray-400 px-4 focus:border-[#bae800] focus:ring-1 focus:ring-[#bae800]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#bae800] hover:bg-[#a5cf00] text-black font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <UserPlus className="w-5 h-5" />
                Sign Up for Event
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-headings-font-heading-sm font-semibold text-white text-xl mb-2">
                Registration Successful!
              </h3>
              <p className="text-[#d6d6d6]">
                We'll send you the event details and joining link soon.
              </p>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-600">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-[#bae800] mb-2" />
                <span className="text-white font-semibold">50+ Attendees</span>
                <span className="text-gray-400 text-sm">Expected</span>
              </div>
              <div className="flex flex-col items-center">
                <GraduationCap className="w-8 h-8 text-[#bae800] mb-2" />
                <span className="text-white font-semibold">Expert Speakers</span>
                <span className="text-gray-400 text-sm">Industry Leaders</span>
              </div>
              <div className="flex flex-col items-center">
                <Gift className="w-8 h-8 text-[#bae800] mb-2" />
                <span className="text-white font-semibold">Free Resources</span>
                <span className="text-gray-400 text-sm">Templates & Tools</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};