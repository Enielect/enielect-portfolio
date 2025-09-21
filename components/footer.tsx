import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Eniola</h3>
            <p className="text-background/80">
              Frontend Developer • React Specialist • UI/UX Enthusiast
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-background/80 hover:text-background transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-background/80 hover:text-background transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-background/80 hover:text-background transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-background/80 hover:text-background transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Created by Eni Dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
