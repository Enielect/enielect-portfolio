import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    color: "text-primary",
  },
  {
    title: "Styling & Design",
    icon: Palette,
    skills: ["Tailwind CSS", "Sass", "CSS Modules", "Responsive Design", "UI/UX"],
    color: "text-secondary",
  },
  {
    title: "Performance & Tools",
    icon: Zap,
    skills: ["Webpack", "Vite", "Git", "npm/yarn", "ESLint", "Prettier"],
    color: "text-accent",
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["REST APIs", "GraphQL", "PWA", "SEO", "Accessibility", "Testing"],
    color: "text-primary",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <p className="text-lg text-white max-w-2xl mx-auto text-pretty">
            {"I specialize in modern web technologies and have a passion for creating exceptional user experiences."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border border-gray-700 shadow-lg bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800/90"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className={`h-8 w-8 text-white`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-balance text-white">{category.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-xs bg-gray-700/50 text-gray-200 border-gray-600 hover:bg-blue-500/20 hover:border-blue-400 hover:text-blue-200 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
