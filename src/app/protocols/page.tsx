import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Activity, Sun, Moon, Thermometer, Dumbbell, Utensils } from "lucide-react"

const protocols = [
  {
    id: "morning-routine",
    title: "Morning Protocol",
    description: "Start your day with science-backed habits for optimal energy and focus.",
    time: "15 min",
    difficulty: "Beginner",
    category: "Routine",
    icon: Sun,
    benefits: ["Energy", "Focus", "Hormone Optimization"],
    steps: [
      "Wake at consistent time (7-8 AM ideal)",
      "Drink 500ml water with pinch of salt",
      "Get sunlight exposure within 30 min",
      "Quick movement or stretching (5-10 min)",
      "Avoid phone for first 30 minutes",
    ],
    supplements: ["Vitamin D3 (if deficient)", "Omega-3"],
  },
  {
    id: "zone-2-training",
    title: "Zone 2 Training",
    description: "Build aerobic base and maximize fat oxidation with low-intensity cardio.",
    time: "45-60 min",
    difficulty: "Intermediate",
    category: "Exercise",
    icon: Activity,
    benefits: ["Cardio Health", "Fat Loss", "Endurance"],
    steps: [
      "Warm up 5 minutes easy",
      "Maintain heart rate at 60-70% of max",
      "Can talk but with effort (talk test)",
      "Duration: 30-90 minutes",
      "2-3x per week ideal",
    ],
    supplements: ["Electrolytes", "Creatine"],
  },
  {
    id: "intermittent-fasting",
    title: "Intermittent Fasting",
    description: "Time-restricted eating for autophagy and metabolic health.",
    time: "16:8 daily",
    difficulty: "Beginner",
    category: "Nutrition",
    icon: Utensils,
    benefits: ["Longevity", "Metabolism", "Cellular Health"],
    steps: [
      "Eat within 8-hour window",
      "Common: 12 PM - 8 PM",
      "Black coffee/tea allowed during fast",
      "Stay hydrated (3-4L water daily)",
      "Ease into it over 1-2 weeks",
    ],
    supplements: [],
  },
  {
    id: "sleep-stack",
    title: "Evening Sleep Stack",
    description: "Optimize your sleep with evidence-based supplements and habits.",
    time: "30 min before bed",
    difficulty: "Beginner",
    category: "Recovery",
    icon: Moon,
    benefits: ["Sleep Quality", "Recovery", "Cognitive Function"],
    steps: [
      "Dim lights 2 hours before bed",
      "Avoid screens or use blue light blockers",
      "Keep room cool (65-68°F / 18-20°C)",
      "No food 3 hours before bed",
      "Magnesium glycinate 200-400mg",
    ],
    supplements: ["Magnesium Glycinate", "L-Theanine", "Glycine"],
  },
  {
    id: "cold-exposure",
    title: "Cold Exposure Protocol",
    description: "Build resilience and boost metabolism with cold therapy.",
    time: "2-5 min",
    difficulty: "Intermediate",
    category: "Biohack",
    icon: Thermometer,
    benefits: ["Metabolism", "Immune System", "Mental Clarity"],
    steps: [
      "Start with cold shower (30 sec)",
      "Gradually increase to 2-5 minutes",
      "Water temperature: 50-60°F / 10-15°C",
      "Focus on breathing exercises",
      "3-4x per week after adaptation",
    ],
    supplements: [],
  },
  {
    id: "resistance-training",
    title: "Resistance Training",
    description: "Build and maintain muscle for longevity and metabolic health.",
    time: "45 min",
    difficulty: "Intermediate",
    category: "Exercise",
    icon: Dumbbell,
    benefits: ["Muscle Mass", "Bone Density", "Metabolism"],
    steps: [
      "Focus on compound movements",
      "8-12 reps, 3-4 sets per exercise",
      "Progressive overload weekly",
      "Full body or upper/lower split",
      "2-4x per week with rest days",
    ],
    supplements: ["Creatine", "Whey or plant protein"],
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
            <Card key={protocol.id} className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
                    {protocol.category}
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                    {protocol.difficulty}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <protocol.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-white">{protocol.title}</CardTitle>
                </div>
                <CardDescription className="text-zinc-400">{protocol.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{protocol.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Activity className="h-4 w-4" />
                    <span>{protocol.benefits.length} benefits</span>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Key Steps</p>
                  <ul className="space-y-1 text-sm text-zinc-300">
                    {protocol.steps.slice(0, 3).map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        {step}
                      </li>
                    ))}
                    {protocol.steps.length > 3 && (
                      <li className="text-zinc-500 text-xs">+ {protocol.steps.length - 3} more steps</li>
                    )}
                  </ul>
                </div>

                {protocol.supplements.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {protocol.supplements.map((supp) => (
                      <Badge key={supp} variant="secondary" className="bg-zinc-800 text-zinc-300 text-xs">
                        {supp}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
