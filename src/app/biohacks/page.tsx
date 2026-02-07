import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Zap, Moon, Heart, Brain, Thermometer } from "lucide-react"

const biohacks = [
  {
    title: "Cold Exposure",
    description: "Build cold resilience and boost metabolism through intentional cold exposure.",
    icon: Thermometer,
    level: "Intermediate",
    evidence: "High",
    benefits: ["Metabolism", "Immune System", "Mental Clarity"],
  },
  {
    title: "Sauna Use",
    description: "Heat therapy for cardiovascular health and recovery.",
    icon: Zap,
    level: "Beginner",
    evidence: "High",
    benefits: ["Heart Health", "Detoxification", "Recovery"],
  },
  {
    title: "Blue Light Blocking",
    description: "Protect your circadian rhythm by blocking blue light in the evening.",
    icon: Moon,
    level: "Beginner",
    evidence: "Moderate",
    benefits: ["Sleep Quality", "Circadian Health", "Eye Health"],
  },
  {
    title: "Omega-3 Supplementation",
    description: "Essential fatty acids for brain and heart health.",
    icon: Brain,
    level: "Beginner",
    evidence: "High",
    benefits: ["Cognitive Function", "Heart Health", "Inflammation"],
  },
  {
    title: "Polyphenol-Rich Foods",
    description: "Antioxidant compounds for cellular protection and longevity.",
    icon: Leaf,
    level: "Beginner",
    evidence: "High",
    benefits: ["Cellular Health", "Longevity", "Inflammation"],
  },
  {
    title: "Heart Rate Variability (HRV) Tracking",
    description: "Monitor your autonomic nervous system for recovery insights.",
    icon: Heart,
    level: "Intermediate",
    evidence: "Moderate",
    benefits: ["Recovery", "Stress Management", "Sleep Quality"],
  },
]

export default function BiohacksPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white">Biohacks</h1>
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Evidence-based interventions to optimize your biology. Start with high-evidence hacks
            and progress as you learn more about your body.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {biohacks.map((biohack) => (
            <Card key={biohack.title} className="bg-zinc-900/50 border-zinc-800 hover:border-cyan-500/50 transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <biohack.icon className="h-8 w-8 text-cyan-400" />
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                      {biohack.level}
                    </Badge>
                    <Badge className={biohack.evidence === "High" ? "bg-emerald-500" : "bg-yellow-500"}>
                      {biohack.evidence} Evidence
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-white mt-4">{biohack.title}</CardTitle>
                <CardDescription className="text-zinc-400">{biohack.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {biohack.benefits.map((benefit) => (
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
