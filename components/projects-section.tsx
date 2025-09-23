import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Whispers",
    description:
      "A modern social platform for sharing thoughts and secrets anonymously. Built with React and modern web technologies.",
    image: "/projectImages/whispers.png",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://whispers-gray.vercel.app/",
    githubUrl: "https://github.com/Enielect/whispers-frontend",
  },
  {
    title: "Movie App",
    description:
      "Discover and explore movies with this sleek movie database application featuring search, filters, and detailed movie information.",
    image: "/projectImages/movie-app.png",
    tags: ["React", "API Integration", "Tailwind CSS"],
    liveUrl: "https://movie-app-mu-ochre.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "4eva Braids",
    description:
      "a web application for a fictional hair braiding business, showcasing services, portfolio, and booking options.",
    image: "/projectImages/4evabraid_bg.png",
    tags: ["Next.js", "Tailwind CSS", "FastAPI"],
    liveUrl: "https://www.4evabraids.live/",
    githubUrl: "https://github.com/Enielect/4Eva-Braids",
  },
  {
    title: "Productivity App",
    description:
      "Task management and productivity application designed to help users organize their work and boost efficiency.",
    image: "/projectImages/productivity.png",
    tags: ["React", "TypeScript", "Local Storage"],
    liveUrl: "http://productivity-chi.vercel.app/",
    githubUrl: "https://github.com/Enielect/productivity",
  },
  {
    title: "Url Shortener",
    description:
      "A simple and efficient URL shortening service that allows users to create and manage short links.",
    image: "/projectImages/url_shortner_bg.png",
    tags: ["React", "date-fns", "Framer Motion"],
    liveUrl: "https://url-shortener-phi-lake.vercel.app/",
    githubUrl: "https://github.com/Enielect/url-shortner",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto text-pretty">
            {
              "Here are some of my recent projects that showcase my skills in frontend development and problem-solving."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all !pt-0 bg-[rgba(255,255,255,0.1)] duration-300 border-0 shadow-lg backdrop-blur-sm"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  width={500}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <div className="flex items-center text-white justify-between">
                  <CardTitle className="text-xl font-semibold">
                    {project.title}
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-white leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-white/10 text-white hover:bg-white/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
