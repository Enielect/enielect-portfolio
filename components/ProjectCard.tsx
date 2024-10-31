import Image from "next/image";
import Link from "next/link";
import React from "react";

// const TechStack = () => {
//   return (
//     <>
//       <Typescript />
//       <Html />
//       <Javascript />
//       <Tailwindcss />
//     </>
//   );
// };

type ProjectCardProps = {
  url: string;
  projectTitle: string;
  role: string;
  description: string;
  liveUrl: string;
  techStack: (() => JSX.Element)[];
};

const ProjectCard = ({
  url,
  projectTitle,
  description,
  role,
  techStack,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <div className="max-w-[32rem] mx-4 p-4 pb-5 h-[35rem] text-white rounded-lg grid grid-rows-[75%_1fr] bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] border border-white border-opacity-20">
      <Link href={liveUrl} className="w-full h-3/4 rounded-md  overflow-hidden">
        <Image
          src={url ?? ""}
          className="w-full h-full object-cover transition-all hover:scale-150"
          alt={description}
          width={500}
          height={400}
        />
      </Link>
      <div className="pb-[10px] pt-[10px] text-left">
        <h2>{role}</h2>
        <h3 className="text-lg sm:text-2xl py-2 border-[rgba(255,255,255,0.1)] border-b">
          {projectTitle}
        </h3>
      </div>
      <div className="flex pt-[10px] items-center gap-2">
        {/* <TechStack /> */}
        {techStack.map((Stack, i) => (
          <Stack key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
