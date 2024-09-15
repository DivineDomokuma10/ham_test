import React from "react";

import SectionTag from "@/components/common/section-tag";
import CustomImage from "@/components/common/custom-image";
import AnimatorWrapper from "@/components/common/animate-in-view";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="w-full h-fit flex flex-col bg-gray-50 space-y-10 py-10 px-5 lg:px-20 lg:flex-row lg:justify-between lg:space-y-0"
    >
      <section className="w-full flex items-center justify-center lg:w-1/2">
        <AnimatorWrapper type="fade-in" delay={1}>
          <CustomImage
            alt=""
            mobile={{ w: 350, h: 500 }}
            desktop={{ w: 500, h: 700 }}
            src={"/why_choose_us_illustrator.svg"}
          />
        </AnimatorWrapper>
      </section>

      <section className="w-full flex flex-col space-y-5 items-center lg:w-[45%] lg:items-start lg:justify-center">
        <AnimatorWrapper type="slide-top" delay={1}>
          <SectionTag>{"Why choose us"}</SectionTag>
        </AnimatorWrapper>

        <AnimatorWrapper type="slide-left" delay={1}>
          <h1 className="text-2xl text-center text-primary-black font-semibold lg:text-4xl lg:text-start">
            {"Exceptional Investment Growth"}
          </h1>
        </AnimatorWrapper>

        <AnimatorWrapper type="slide-right" delay={1}>
          <p className="text-center lg:w-full lg:text-start">
            {
              "Welcome to Wealthinv, where we go beyond traditional investment paradigms to redefine excellence."
            }
            .
          </p>
        </AnimatorWrapper>

        <div></div>
      </section>
    </section>
  );
};

export default WhyChooseUs;
