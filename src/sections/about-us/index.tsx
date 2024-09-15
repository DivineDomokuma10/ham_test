import {
  aboutUsTag,
  aboutUsMainText,
  aboutUsDescriptionText,
} from "@/lib/constants/captions";

import SectionTag from "@/components/common/section-tag";
import CustomImage from "@/components/common/custom-image";
import AnimatorWrapper from "@/components/common/animate-in-view";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full h-fit flex flex-col bg-gray-50 space-y-10 py-10 px-5 lg:px-20 lg:flex-row-reverse lg:space-y-0"
    >
      <section className="w-full flex items-center justify-center lg:w-1/2">
        <AnimatorWrapper type="fade-in" delay={1}>
          <CustomImage
            alt=""
            mobile={{ w: 350, h: 500 }}
            desktop={{ w: 500, h: 700 }}
            src={"/about_us_illustrator.svg"}
          />
        </AnimatorWrapper>
      </section>

      <section className="w-full flex flex-col space-y-7 items-center lg:w-1/2 lg:items-start lg:justify-center">
        <AnimatorWrapper type="slide-top" delay={1}>
          <SectionTag>{aboutUsTag}</SectionTag>
        </AnimatorWrapper>

        <AnimatorWrapper type="slide-left" delay={1}>
          <h1 className="text-2xl text-center text-primary-black font-semibold lg:text-4xl lg:text-start">
            {aboutUsMainText}
          </h1>
        </AnimatorWrapper>

        <AnimatorWrapper type="slide-right" delay={1}>
          <p className="text-center lg:w-4/5 lg:text-start">
            {aboutUsDescriptionText}.
          </p>
        </AnimatorWrapper>
      </section>
    </section>
  );
};

export default AboutUs;
