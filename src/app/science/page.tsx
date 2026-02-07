import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FlaskConical, FileText, Clock, BarChart } from "lucide-react"

const articles = [
  {
    title: "Understanding mTOR and Longevity",
    description: "How this protein complex influences aging and what interventions can modulate it.",
    type: "Explainer",
    readTime: "8 min",
    level: "Intermediate",
    keyPoints: [
      "mTOR senses nutrients and growth factors",
      "Chronic mTOR activation promotes aging",
      "Fasting and rapamycin can inhibit mTOR",
      "Balance is key for muscle maintenance",
    ],
  },
  {
    title: "The Science of Autophagy",
    description: "How your cells clean up damage and trigger this powerful longevity pathway.",
    type: "Explainer",
    readTime: "10 min",
    level: "Intermediate",
    keyPoints: [
      "Autophagy means 'self-eating'",
      "Triggers: fasting, exercise, certain compounds",
      "Peak effect at 12-24 hours of fasting",
      "Declines with age - crucial to maintain",
    ],
  },
  {
    title: "Blue Zones: Lessons from Centenarians",
    description: "What we can learn from the world's longest-lived populations.",
    type: "Research Review",
    readTime: "12 min",
    level: "Beginner",
    keyPoints: [
      "5 Blue Zones identified worldwide",
      "Common: plant-based diet, movement, purpose",
      "Social connections are crucial",
      "Moderate alcohol, stress management",
    ],
  },
  {
    title: "NMN and NR: NAD+ Precursors Explained",
    description: "The science behind popular longevity supplements and their efficacy.",
    type: "Deep Dive",
    readTime: "15 min",
    level: "Advanced",
    keyPoints: [
      "NAD+ declines with age by ~50% by age 50",
      "NR more stable than NMN orally",
      "Human studies show increased NAD+ levels",
      "Long-term benefits still being studied",
    ],
  },
  {
    title: "Zone 2 Training: The Sweet Spot for Longevity",
    description: "Why moderate-intensity cardio may be the most effective exercise for healthspan.",
    type: "Research Review",
    readTime: "7 min",
    level: "Beginner",
    keyPoints: [
      "Zone 2: 60-70% of max heart rate",
      "Builds mitochondrial density",
      "90+ minutes per week for benefits",
      "Complements high-intensity training",
    ],
  },
  {
    title: "Epigenetic Clocks and Biological Age",
    description: "Understanding how we measure aging and what interventions work.",
    type: "Explainer",
    readTime: "12 min",
    level: "Advanced",
    keyPoints: [
      "DNA methylation patterns reveal biological age",
      "Several clocks: Horvath, GrimAge, PhenoAge",
      "Some interventions reverse epigenetic age",
      "Tests available but expensive",
    ],
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
            <Card key={index} className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all">
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
                  <div className="flex items-center gap-1 text-sm text-zinc-500">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-white mt-4">{article.title}</CardTitle>
                <CardDescription className="text-zinc-400">{article.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Key Takeaways</p>
                  <ul className="space-y-1">
                    {article.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                        <span className="text-emerald-400 mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">
                    {article.level}
                  </Badge>
                  <Badge variant="ghost" className="text-emerald-400 hover:text-emerald-300 cursor-pointer">
                    Read More →
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
