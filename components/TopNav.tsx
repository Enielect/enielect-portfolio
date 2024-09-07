"use client";

import { Hamburger } from "@/assets/icons";
import { Eniola } from "@/public/eniola";
import Image from "next/image";
import React, { useState } from "react";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed  text-white backdrop-blur-md left-0 right-0 top-0 h-12 z-10 hidden md:flex justify-between items-center py-12 pr-10">
        <em>
          <Eniola />
        </em>
        <nav>
          <ul className="flex gap-6 uppercase">
            <li className="">
              <a href="/#projects" rel="noopener noreferrer">
                <div className="h-[1.5rem] nav cursor-pointer  overflow-hidden">
                  <p className="shrink-0">projects</p>
                  <p className="shrink-0">projects</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">
                <div className="h-[1.5rem] nav cursor-pointer  overflow-hidden">
                  <p className="shrink-0">resume</p>
                  <p className="shrink-0">resume</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/#contact" rel="noopener noreferrer">
                <div className="h-[1.5rem] nav cursor-pointer  overflow-hidden">
                  <p className="shrink-0">contact</p>
                  <p className="shrink-0">contact</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">
                <div className="h-[1.5rem] nav cursor-pointer  overflow-hidden">
                  <p className="shrink-0">Experience</p>
                  <p className="shrink-0">Experience</p>
                </div>
              </a>
            </li>
          </ul>
        </nav>
        <div className="w-[40px] h-[40px] p-[1] rounded-full overflow-hidden border-[#58c4dc] border">
          <Image
            src="/react.jpeg"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            alt="react logo"
          />
        </div>
      </div>

      <div className="fixed  text-white backdrop-blur-md left-0 right-0 top-0 h-12 z-10  flex justify-between items-center py-12 px-10">
        <div onClick={() => setIsOpen((c) => !c)}>
          <Hamburger />
        </div>
        <div className="w-[40px] h-[40px] p-[1] rounded-full overflow-hidden border-[#58c4dc] border">
          <Image
            src="/react.jpeg"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            alt="react logo"
          />
        </div>
      </div>
      <nav
        className={`absolute overflow-hidden transition-all left-0 backdrop-blur-lg right-0 bottom-0 top-[83px] ${
          isOpen ? "left-0" : "left-[700px]"
        }`}
      >
        <ul className="flex flex-col justify-between text-white py-[30vh] p h-full text-2xl text-center">
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact</li>
          <li>Experience</li>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
