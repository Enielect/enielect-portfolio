import { React, Tailwindcss, Typescript } from "@/assets/icons";

export default function projects() {
  return [
    {
      id: 1,
      url: "/projectImages/whispers.png",
      liveUrl: "https://whispers-gray.vercel.app/",
      projectTitle: "Whispers",
      role: "Frontend Developer",
      description: "A  platform for sharing secrets anonymously",
      techStack: [React, Tailwindcss, Typescript],
    },
    {
      id: 2,
      url: "/projectImages/movie-app.png",
      projectTitle: "Movie App",
      liveUrl: "https://movie-app-mu-ochre.vercel.app/",
      role: "Frontend Developer",
      description: "A movie app that fetches data from the TMDB API",
      techStack: [React, Tailwindcss, Typescript],
    },
    {
      id: 3,
      url: "/projectImages/agro-predict.png",
      projectTitle: "Agro Predict",
      liveUrl: "https://agro-predict.vercel.app/",
      role: "Frontend Developer",
      description: "A platform for predicting weather conditions for farmers",
      techStack: [React, Tailwindcss, Typescript],
    },
    {
      id: 4,
      url: "/projectImages/productivity.png",
      projectTitle: "Productivity App",
      liveUrl: "http://productivity-chi.vercel.app/",
      role: "Frontend Developer",
      description:
        "A productivity app that helps you keep track of your daily tasks",
      techStack: [React, Tailwindcss, Typescript],
    },
  ];
}
