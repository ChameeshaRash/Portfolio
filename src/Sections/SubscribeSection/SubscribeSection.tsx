import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";

export const SubscribeSection = (): JSX.Element => {
  const subscriptionData = {
    title: "Subscribe !",
    description: "A monthly updates email\nabout latest update in AI world",
    placeholder: "your@email.com",
  };

  return (
    <section className="relative w-full rounded-2xl overflow-hidden px-4 sm:px-6 lg:px-8 xl:px-[20%]">
      <div className="relative w-full">
        <div className="absolute w-full h-[250px] sm:h-[303px] bottom-0 left-0 bg-[#161616]" />
        <div className="absolute w-full h-[200px] sm:h-[298px] top-0 left-0 bg-[#bae800]" />
        
        <img
          className="absolute w-full h-[80px] sm:h-[100px] lg:h-[174px] top-[60px] sm:top-[75px] lg:top-[125px] left-0"
          alt="Cityscape divider"
          src="/vector-1.svg"
        />

        <div className="relative flex flex-col items-center justify-center py-6 sm:py-8 lg:py-16 px-4">
          <h2 className="font-display-font-display-xl font-bold text-white text-2xl sm:text-3xl lg:text-[64px] whitespace-nowrap mt-[120px] sm:mt-[150px] lg:mt-[267px]">
            {subscriptionData.title}
          </h2>

          <p className="max-w-[356px] mt-4 sm:mt-6 lg:mt-10 font-body-font-body-lg text-[#d6d6d6] text-sm sm:text-base lg:text-[18px] text-center leading-relaxed px-4">
            {subscriptionData.description.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < subscriptionData.description.split("\n").length - 1 && (
                  <br />
                )}
              </React.Fragment>
            ))}
          </p>

          <div className="flex flex-col sm:flex-row w-full max-w-[893px] mt-4 sm:mt-6 lg:mt-10 gap-4 sm:gap-0 px-4">
            <Card className="flex-1 sm:mr-5 bg-[#0e0e0e] border-none rounded-[10px]">
              <CardContent className="p-0">
                <Input
                  className="w-full h-[45px] sm:h-[50px] lg:h-[62px] bg-transparent border-none text-[#bdbdbd] text-base sm:text-lg lg:text-2xl pl-4 sm:pl-6 lg:pl-[69px] font-['Roboto',Helvetica] focus-visible:ring-0 focus-visible:ring-offset-0"
                  type="email"
                  placeholder={subscriptionData.placeholder}
                />
              </CardContent>
            </Card>

            <Button className="w-full sm:w-[100px] lg:w-[122px] h-[45px] sm:h-[50px] lg:h-[62px] bg-[#0e0e0e] hover:bg-[#1a1a1a] rounded-[10px] flex items-center justify-center transition-colors">
              <ArrowRight className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};