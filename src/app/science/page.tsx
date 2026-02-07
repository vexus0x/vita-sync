import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FlaskConical, FileText } from "lucide-react"

const articles = [
  {
    title: "Understanding mTOR and Longevity",
    description: "How this protein complex influences aging and what interventions can modulate it.",
    type: "Explainer",
    readTime: "8 min",
    level: "Intermediate",
  },
  {
    title: "The Science of Autophagy",
    description: "How your cells clean up damage and what triggers this longevity pathway.",
    type: "Explainer",
    readTime: "10 min",
    level: "Intermediate",
  },
  {
    title: "Blue Zones: Lessons from Centenarians",
    description: "What we can learn from the world's longest-lived populations.",
    type: "Research Review",
    readTime: "12 min",
    level: "Beginner",
  },
  {
    title: "NMN and NR: NAD+ Precursors Explained",
    description: "The science behind popular longevity supplements and their efficacy.",
    type: "Deep Dive",
    readTime: "15 min",
    level: "Advanced",
  },
  {
    title: "Zone 2 Training: The Sweet Spot for Longevity",
    description: "Why moderate-intensity cardio may be the most effective exercise for healthspan.",
    type: "Research Review",
    readTime: "7 min",
    level: "Beginner",
  },
  {
    title: "Epigenetic Clocks and Biological Age",
    description: "Understanding how we measure aging and what interventions work.",
    type: "Explainer",
    readTime: "12 min",
    level: "Advanced",
  },
]

const categories = ["All", "Explainer", "Research Review", "Deep Dive"]

export default function SciencePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white">Science</h1>
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Deep dives into the science of longevity. We break down complex research into
            actionable insights you can apply to your life.
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

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article, index) => (
            <Card key={index} className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    {article.type === "Explainer" && <BookOpen className="h-5 w-5 text-emerald-400" />}
                    {article.type === "Research Review" && <FlaskConical className="h-5 w-5 text-cyan-400" />}
                    {article.type === "Deep Dive" && <FileText className="h-5 w-5 text-purple-400" />}
                    <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                      {article.type}
                    </Badge>
                  </div>
                  <span className="text-sm text-zinc-500">{article.readTime} read</span>
                </div>
                <CardTitle className="text-white mt-4">{article.title}</CardTitle>
                <CardDescription className="text-zinc-400">{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">
                  {article.level}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
