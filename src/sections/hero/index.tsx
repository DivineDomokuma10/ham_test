"use client";
import {
  heroMainText,
  heroCardTextOne,
  heroCardTextTwo,
  heroCardTextFour,
  heroCardTextThree,
} from "@/lib/constants/captions";
import Card from "@/components/hero/card";
import AnimatorWrapper from "@/components/common/animate-in-view";

const Hero = () => {
  return (
    <section className="w-full h-fit flex flex-col px-5 py-10 items-center lg:space-y-10 lg:px-20 lg:h-screen lg:bg-primary-white">
      <AnimatorWrapper
        delay={0.4}
        type="slide-top"
        classStyle="w-full lg:w-3/4"
      >
        <h1 className="font-extrabold text-3xl text-center text-primary-black lg:text-6xl">
          {heroMainText}
        </h1>
      </AnimatorWrapper>

      <section className="w-full flex flex-col space-y-5 py-5 lg:space-y-0 lg:py-0 lg:flex-row lg:space-x-7">
        <Card
          delay={0.6}
          hasFullWidth
          type="slide-top"
          image="/hero-house-img-1.jpg"
        >
          <h1 className="text-3xl font-semibold text-primary-white">
            {heroCardTextOne}
          </h1>
        </Card>

        <div className="w-full flex flex-col space-y-5 lg:w-1/3">
          <Card delay={1} type="fade-in" bgColor="purple">
            <h1 className="text-3xl font-semibold text-primary-white">
              {heroCardTextTwo}
            </h1>
          </Card>

          <Card delay={1} type="fade-in" bgColor="green">
            <div className="flex flex-col space-y-5">
              <h3 className="text-2xl text-primary-white font-semibold">
                {heroCardTextThree[0]}
              </h3>

              <div className="w-full flex flex-col space-y-4">
                <div className="w-full flex justify-between">
                  <p>{heroCardTextThree[1]}</p>
                  <p>{heroCardTextThree[2]}</p>
                </div>

                <div className="w-full h-[6px] rounded-full bg-primary-purple bg-opacity-20 ">
                  <div className="w-2/4 h-full rounded-full bg-primary-purple"></div>
                </div>
              </div>

              <p className="text-xl text-primary-black font-medium">
                {heroCardTextThree[3]}
              </p>
            </div>
          </Card>
        </div>

        <Card
          delay={0.7}
          hasFullWidth
          type="slide-bottom"
          image="/hero-house-img-2.jpg"
        >
          <h1 className="text-3xl font-semibold text-primary-white">
            {heroCardTextFour}
          </h1>
        </Card>
      </section>
    </section>
  );
};

export default Hero;
