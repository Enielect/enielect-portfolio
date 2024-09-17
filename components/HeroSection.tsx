import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full flex justify-between px-[1rem] sm:px-[15.8rem] pt-[13rem] min-h-[100dvh] overflow-hidden">
      {/* There was an overflow issue with the circle animation, the was incresing the min-h of this section and adding an overflow hidden class the to hero-section toot */}
      <div>
        <h1 className="md:text-6xl text-4xl font-bold text-white">Hi there 💡</h1>
        <h2 className="md:text-3xl text-lg font-bold text-white py-3">
          I am Abayomi Eniola <em>Faithful</em>
        </h2>
        <p className="sm:text-2xl text-lg md:max-w-[50rem]  font-light text-white">
          I am a software developer with a passion for building web
          applications. I am proficient in React, Next.js, and Tailwind CSS.
        </p>
        <p className="py-[3rem] w-[25rem] text-white text-base sm:text-xl">
          Not your regular web developer, my hunger for pixel perfect design,
          performance and animtions makes me stand out
        </p>
      </div>
      <div className="hidden md:block relative w-[25rem]  h-[25rem]">
        <div className="absolute left-0 right-0 bottom-0 top-0 -z-[1]">
          <div className="bg-circle first"></div>
          <div className="bg-circle second"></div>
          <div className="bg-circle third"></div>
        </div>
        <div className="min-w-[min(25rem,29vw)] h-[25rem] rounded-full overflow-hidden mr-[6.25rem]">
          <Image
            src="/react.jpeg"
            className="w-full h-full"
            alt="react logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
