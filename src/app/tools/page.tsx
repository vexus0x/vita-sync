import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, ClipboardList, Activity, TrendingUp } from "lucide-react"
import { LongevityCalculator } from "@/components/calculator"

const tools = [
  {
    title: "Longevity Calculator",
    description: "Estimate your biological age based on lifestyle factors and identify areas for improvement.",
    icon: Calculator,
    category: "Assessment",
    status: "Available",
  },
  {
    title: "Supplement Stack Builder",
    description: "Build and track your personalized supplement protocol based on your goals.",
    icon: ClipboardList,
    category: "Tracking",
    status: "Coming Soon",
  },
  {
    title: "Progress Tracker",
    description: "Track key biomarkers, habits, and progress over time.",
    icon: Activity,
    category: "Tracking",
    status: "Coming Soon",
  },
  {
    title: "Biological Age Estimator",
    description: "Input blood work and biomarkers to estimate your biological age.",
    icon: TrendingUp,
    category: "Assessment",
    status: "Coming Soon",
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white">Tools</h1>
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Interactive tools to track, measure, and optimize your longevity journey.
            From simple calculators to comprehensive tracking systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {tools.map((tool) => (
            <Card key={tool.title} className={`bg-zinc-900/50 border-zinc-800 ${tool.status === "Available" ? "hover:border-emerald-500/50" : "opacity-75"} transition-all cursor-pointer`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <tool.icon className="h-8 w-8 text-emerald-400" />
                  <Badge className={tool.status === "Available" ? "bg-emerald-500" : "bg-zinc-600"}>
                    {tool.status}
                  </Badge>
                </div>
                <CardTitle className="text-white mt-4">{tool.title}</CardTitle>
                <CardDescription className="text-zinc-400">{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                  {tool.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Longevity Calculator */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Interactive Longevity Calculator</h2>
          <LongevityCalculator />
        </div>
      </div>
    </div>
  )
}
