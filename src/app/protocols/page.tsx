import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BarChart, Activity } from "lucide-react"
import Link from "next/link"

const protocols = [
  {
    id: "morning-routine",
    title: "Morning Protocol",
    description: "Start your day with science-backed habits for optimal energy and focus.",
    time: "15 min",
    difficulty: "Beginner",
    category: "Routine",
    benefits: ["Energy", "Focus", "Hormone Optimization"],
  },
  {
    id: "zone-2-training",
    title: "Zone 2 Training",
    description: "Build aerobic base and maximize fat oxidation with low-intensity cardio.",
    time: "45-60 min",
    difficulty: "Intermediate",
    category: "Exercise",
    benefits: ["Cardio Health", "Fat Loss", "Endurance"],
  },
  {
    id: "intermittent-fasting",
    title: "Intermittent Fasting",
    description: "Time-restricted eating for autophagy and metabolic health.",
    time: "16:8 daily",
    difficulty: "Beginner",
    category: "Nutrition",
    benefits: ["Longevity", "Metabolism", "Cellular Health"],
  },
  {
    id: "sleep-stack",
    title: "Evening Sleep Stack",
    description: "Optimize your sleep with evidence-based supplements and habits.",
    time: "30 min before bed",
    difficulty: "Beginner",
    category: "Recovery",
    benefits: ["Sleep Quality", "Recovery", "Cognitive Function"],
  },
  {
    id: "cold-exposure",
    title: "Cold Exposure Protocol",
    description: "Build resilience and boost metabolism with cold therapy.",
    time: "2-5 min",
    difficulty: "Intermediate",
    category: "Biohack",
    benefits: ["Metabolism", "Immune System", "Mental Clarity"],
  },
  {
    id: "resistance-training",
    title: "Resistance Training",
    description: "Build and maintain muscle for longevity and metabolic health.",
    time: "45 min",
    difficulty: "Intermediate",
    category: "Exercise",
    benefits: ["Muscle Mass", "Bone Density", "Metabolism"],
  },
]

const categories = ["All", "Routine", "Exercise", "Nutrition", "Recovery", "Biohack"]

export default function ProtocolsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white">Protocols</h1>
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Actionable, science-backed routines for optimizing your health and longevity.
            Start with beginner protocols and progress as you build habits.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-emerald-500 hover:bg-emerald-600" : "border-zinc-700 text-zinc-400 hover:text-white"}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Protocols Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {protocols.map((protocol) => (
            <Card key={protocol.id} className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all cursor-pointer group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
                    {protocol.category}
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                    {protocol.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-white mt-4 group-hover:text-emerald-400 transition-colors">
                  {protocol.title}
                </CardTitle>
                <CardDescription className="text-zinc-400">{protocol.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{protocol.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Activity className="h-4 w-4" />
                    <span>{protocol.benefits.length} benefits</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {protocol.benefits.map((benefit) => (
                    <Badge key={benefit} variant="secondary" className="bg-zinc-800 text-zinc-300">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
