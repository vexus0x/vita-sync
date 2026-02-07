"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, Zap, Moon, Heart, Brain, Thermometer, Sun, Activity, ChevronDown } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const biohacks = [
  {
    title: "Cold Exposure",
    description: "Build cold resilience and boost metabolism through intentional cold exposure.",
    icon: Thermometer,
    level: "Intermediate",
    evidence: "High",
    benefits: ["Metabolism", "Immune System", "Mental Clarity"],
    howTo: "Start with 30-second cold showers, gradually increase to 2-5 minutes. Target water temperature: 50-60°F (10-15°C).",
    science: "Cold exposure activates brown adipose tissue, increases norepinephrine, and reduces inflammation. Studies show improved metabolic rate for hours after exposure.",
    tips: [
      "Start warmer than you think - 60°F is fine for beginners",
      "Focus on breathing: inhale through nose, exhale through mouth",
      " Wim Hof breathing can help manage the cold shock",
      "End with a cold rinse to seal the benefits",
    ],
  },
  {
    title: "Sauna Use",
    description: "Heat therapy for cardiovascular health and longevity.",
    icon: Sun,
    level: "Beginner",
    evidence: "High",
    benefits: ["Heart Health", "Detoxification", "Recovery"],
    howTo: "20-30 minutes at 174-212°F (80-100°C). 3-4 sessions per week. Hydrate well before and after.",
    science: "Finnish studies show 40% reduction in cardiovascular mortality in regular sauna users. Mimics some benefits of exercise.",
    tips: [
      "Pre-hydrate with 500ml water",
      "Cool down gradually after sessions",
      "Avoid alcohol before and after",
      "20 minutes is ideal for longevity benefits",
    ],
  },
  {
    title: "Blue Light Blocking",
    description: "Protect your circadian rhythm by blocking blue light in the evening.",
    icon: Moon,
    level: "Beginner",
    evidence: "Moderate",
    benefits: ["Sleep Quality", "Circadian Health", "Eye Health"],
    howTo: "Use amber-tinted glasses 2-3 hours before bed. Install f.lux or Night Shift on devices. Dim all lights in evening.",
    science: "Blue light suppresses melatonin production. Evening blue light exposure delays circadian rhythm by 1-3 hours.",
    tips: [
      "Get 琥珀 amber glasses (not cheap blue blockers)",
      "Start blocking 2-3 hours before bed",
      "Use warm-colored bulbs in evening",
      "Candlelight dinners are actually科学ly better",
    ],
  },
  {
    title: "Omega-3 Supplementation",
    description: "Essential fatty acids for brain and heart health.",
    icon: Brain,
    level: "Beginner",
    evidence: "High",
    benefits: ["Cognitive Function", "Heart Health", "Inflammation"],
    howTo: "2-3g combined EPA/DHA daily. Take with food containing fat for better absorption. Choose molecularly distilled fish oil.",
    science: "Omega-3s reduce inflammation, support cell membrane health, and may slow cognitive decline. Low levels associated with increased all-cause mortality.",
    tips: [
      "Choose IFOS-certified fish oil for purity",
      "Store in freezer to prevent oxidation",
      "Krill oil may have better absorption",
      "Vegetarian: algae-based DHA is equally effective",
    ],
  },
  {
    title: "Polyphenol-Rich Foods",
    description: "Antioxidant compounds for cellular protection and longevity.",
    icon: Leaf,
    level: "Beginner",
    evidence: "High",
    benefits: ["Cellular Health", "Longevity", "Inflammation"],
    howTo: "Include berries, dark leafy greens, dark chocolate (70%+), green tea, and olive oil daily. Target 5+ servings of colorful plants.",
    science: "Polyphenols activate Nrf2 pathway, reducing oxidative stress. Associated with longevity in Blue Zone populations.",
    tips: [
      "Color = polyphenols: eat the rainbow",
      "Raw cacao > dutched cocoa for polyphenols",
      "Extra virgin olive oil is a polyphenol powerhouse",
      "Green tea catechins are uniquely powerful",
    ],
  },
  {
    title: "Heart Rate Variability (HRV) Tracking",
    description: "Monitor your autonomic nervous system for recovery insights.",
    icon: Activity,
    level: "Intermediate",
    evidence: "Moderate",
    benefits: ["Recovery", "Stress Management", "Sleep Quality"],
    howTo: "Use Oura Ring, Whoop, or chest strap HRV monitor. Track morning readings and compare to baseline. Higher HRV indicates better recovery.",
    science: "HRV reflects parasympathetic nervous system activity. Low HRV correlates with stress, illness, and overtraining.",
    tips: [
      "Measure at the same time each morning",
      "Don't stress about daily fluctuations",
      "Look at 7-day rolling averages",
      "Use HRV to guide training intensity",
    ],
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

        <div className="grid gap-6 md:grid-cols-2">
          {biohacks.map((biohack) => (
            <Dialog key={biohack.title}>
              <DialogTrigger asChild>
                <Card className="bg-zinc-900/50 border-zinc-800 hover:border-cyan-500/50 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                          <biohack.icon className="h-6 w-6 text-cyan-400" />
                        </div>
                        <CardTitle className="text-white">{biohack.title}</CardTitle>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                          {biohack.level}
                        </Badge>
                        <Badge className={biohack.evidence === "High" ? "bg-emerald-500" : "bg-yellow-500"}>
                          {biohack.evidence} Evidence
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-zinc-400">{biohack.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-medium text-cyan-400 uppercase tracking-wider mb-1">How To</p>
                      <p className="text-sm text-zinc-300 line-clamp-2">{biohack.howTo}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">The Science</p>
                      <p className="text-sm text-zinc-400 line-clamp-2">{biohack.science}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {biohack.benefits.map((benefit) => (
                        <Badge key={benefit} variant="secondary" className="bg-zinc-800 text-zinc-300">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full text-cyan-400 hover:text-cyan-300">
                      Learn More <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="bg-zinc-900 border-zinc-800 max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10">
                      <biohack.icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl text-white">{biohack.title}</DialogTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                          {biohack.level}
                        </Badge>
                        <Badge className={biohack.evidence === "High" ? "bg-emerald-500" : "bg-yellow-500"}>
                          {biohack.evidence} Evidence
                        </Badge>
                      </div>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="space-y-6">
                  <p className="text-zinc-300">{biohack.description}</p>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2">Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {biohack.benefits.map((benefit) => (
                        <Badge key={benefit} className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* How To */}
                  <div>
                    <h4 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-2">How To Implement</h4>
                    <p className="text-zinc-300">{biohack.howTo}</p>
                  </div>

                  {/* Science */}
                  <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                    <h4 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-2">The Science</h4>
                    <p className="text-zinc-300 text-sm">{biohack.science}</p>
                  </div>

                  {/* Tips */}
                  <div>
                    <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2">Pro Tips</h4>
                    <ul className="space-y-2">
                      {biohack.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm">
                          <span className="text-cyan-400 mt-1">→</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  )
}
