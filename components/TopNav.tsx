"use client";

import { Hamburger } from "@/assets/icons";
import { Eniola } from "@/public/eniola";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="fixed  text-white backdrop-blur-md left-0 right-0 top-0 h-12 z-10 hidden sm:flex justify-between items-center py-12 pr-10">
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

      <div className="fixed text-white backdrop-blur-md left-0 right-0 top-0 h-8 z-10 sm:hidden  flex justify-between items-center py-10 px-10">
        <button onClick={() => setIsOpen((c) => !c)}>
          <Hamburger />
        </button>
        <button
          onClick={() => router.push("/#contact")}
          className="w-[40px] h-[40px] p-[1] rounded-full overflow-hidden border-[#58c4dc] border"
        >
          <Image
            src="/react.jpeg"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            alt="react logo"
          />
        </button>
      </div>
      {/* <div className="fixed inset-0 z-40"> */}
      <nav
        className={`fixed z-40 h-[calc(100dvh-5rem)] overflow-hidden md:hidden transition-all left-0 backdrop-blur-lg right-0 bottom-0 top-[5.03rem] ${
          isOpen ? "left-0" : "left-[1800px]"
        }`}
      >
        <ul className="flex flex-col justify-between text-white py-[30vh] p h-full text-2xl text-center">
          <li onClick={() => setIsOpen((c) => !c)}>
            <a href="/#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li onClick={() => setIsOpen((c) => !c)}>
            <a href="/#resume" className="hover:underline">
              Resume
            </a>
          </li>
          <li onClick={() => setIsOpen((c) => !c)}>
            <a href="/#contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li onClick={() => setIsOpen((c) => !c)}>
            <a href="/#experience" className="hover:underline">
              Experience
            </a>
          </li>
        </ul>
      </nav>
      {/* </div> */}
    </>
  );
};

export default TopNav;
