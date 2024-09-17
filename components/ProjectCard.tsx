import { Html, Javascript, Tailwindcss, Typescript } from "@/assets/icons";
import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <>
      <Typescript />
      <Html />
      <Javascript />
      <Tailwindcss />
    </>
  );
};

const ProjectCard = () => {
  return (
    <div className="max-w-[32rem] mx-4 p-4 pb-5 h-[35rem] text-white rounded-lg bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] border border-white border-opacity-20">
      <div className="w-full h-3/4 rounded-md cursor-pointer overflow-hidden">
        <Image
          src="/banner-1.jpg"
          className="w-full h-full object-cover transition-all hover:scale-150"
          alt="banner"
          width={500}
          height={400}
        />
      </div>
      <div className="pb-[10px] pt-[10px] text-left">
        <h2>frontend developer</h2>
        <h3 className="text-lg sm:text-2xl py-2 border-[rgba(255,255,255,0.1)] border-b">
          Agro Predict
        </h3>
      </div>
      <div className="flex pt-[10px] items-center gap-2">
        <TechStack />
      </div>
    </div>
  );
};

export default ProjectCard;
