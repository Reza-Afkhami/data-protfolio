import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const timelineEvents = [
  {
    year: "Sep 2024 - Present",
    title: "AI Research Assistant ",
    company: "Northumbria University",
    description: "Assisted in the development and deployment of machine learning models for various research projects",
  },
  {
    year: "Sep 2024 - Aug 2025",
    title: "MSc.Tech Degree",
    company: "Northumbria University",
    description: "Completed master's in Artificial Intelligence Technology",
  },
  {
    year: "Nov 2023 - Jan 2024",
    title: "Research Paper Publication",
    company: "Building Energy, Physics, Environment, and Systems",
    description: "Published research on Simulation of Fire Emergency Evacuation in a Primary School Based on Pathfinder Software",
  },
  {
    year: "Jan 2019  - Jan 2021",
    title: "Web Developer Intern ",
    company: "SGA",
    description: "Designed and developed responsive, accessible, and user-friendly websites for the company's clients",
  },
]

export function Timeline() {
  return (
    <div className="relative space-y-8">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border" />

      {timelineEvents.map((event, index) => (
        <motion.div
          key={event.year}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex ${
            index % 2 === 0 ? "justify-end" : "justify-start"
          } relative`}
        >
          {/* Circle on the line */}
          <div className="absolute left-1/2 top-8 -ml-1.5 h-3 w-3 rounded-full bg-primary" />

          <Card className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? "mr-8" : "ml-8"}`}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{event.description}</p>
              <div className="mt-4 text-sm font-semibold text-primary">{event.year}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}