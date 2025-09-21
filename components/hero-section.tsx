"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-accent/20 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto pt-[6rem] px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-[20rem] h-[20rem] mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <Image
                  src="/eniola_abayomi.png"
                  alt="Abayomi Eniola"
                  className="w-full h-full rounded-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-5xl md:text-7xl text-blue-400 font-bold mb-6 text-balance">
              Hi there <span className="inline-block animate-bounce">👋</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
              {"I am "}
              <span className="text-blue-400 font-semibold">Abayomi Eniola</span>
              <span className="text-accent"> Faithful</span>
            </h2>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              {
                "I am a software developer with a passion for building web applications. I am proficient in React, Next.js, and Tailwind CSS."
              }
            </p>
            <p className="text-base md:text-lg text-white mb-12 max-w-xl mx-auto text-pretty">
              {
                "Not your regular web developer, my hunger for pixel perfect design, performance and animations makes me stand out"
              }
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-white hover:bg-white/70 text-black px-8 py-3 text-lg"
              onClick={scrollToProjects}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf'; // Make sure to place your resume.pdf in the public folder
              link.download = 'Abayomi_Eniola_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              }}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* React Logo */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div
          className="w-40 h-40 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-primary/30">
            <path
              fill="currentColor"
              d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.37 1.95c-1.47-.84-1.63-3.05-1.01-5.63C.98 14.93.15 13.69.15 12s.83-2.93 4.37-3.68C3.9 5.74 4.06 3.53 5.53 2.69c1.46-.84 3.45.12 5.37 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26S20.07 10.37 17.97 9.74c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m2.44-4.46c-.29.85-.51 1.72-.67 2.61c.52-.06 1.08-.1 1.67-.1c.59 0 1.15.04 1.67.1c-.16-.89-.38-1.76-.67-2.61c-.54-.24-1.1-.35-1.67-.35c-.57 0-1.13.11-1.67.35m0 8.92c.54.24 1.1.35 1.67.35c.57 0 1.13-.11 1.67-.35c.29-.85.51-1.72.67-2.61c-.52.06-1.08.1-1.67.1c-.59 0-1.15-.04-1.67-.1c.16.89.38 1.76.67 2.61M12 15.1c-.59 0-1.15-.04-1.67-.1c.16.89.38 1.76.67 2.61c.54.24 1.1.35 1.67.35c.57 0 1.13-.11 1.67-.35c.29-.85.51-1.72.67-2.61c-.52.06-1.08.1-1.67.1z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
