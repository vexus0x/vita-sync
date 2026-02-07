"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Activity, Sun, Moon, Thermometer, Dumbbell, Utensils, ChevronDown, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

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
    science: "Morning sunlight exposure helps regulate circadian rhythm, boosting cortisol at the right time and melatonin production at night. Hydration after sleep helps kickstart metabolism.",
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
    science: "Zone 2 training builds mitochondrial density, the powerhouses of your cells. Studies show this type of cardio is superior for longevity compared to high-intensity training alone.",
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
    science: "Fasting triggers autophagy, the cellular cleanup process. Research shows time-restricted eating improves metabolic health markers and may extend lifespan.",
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
    science: "Sleep is when growth hormone is released and cellular repair occurs. Poor sleep is linked to accelerated aging, reduced cognitive function, and chronic disease.",
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
    science: "Cold exposure activates brown adipose tissue, increases norepinephrine, and reduces inflammation. Finnish studies show reduced mortality in regular sauna and cold plunge users.",
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
    science: "Muscle mass declines with age (sarcopenia), leading to metabolic slowdown and frailty. Resistance training is the most effective way to maintain muscle and bone density.",
  },
]

const categories = ["All", "Routine", "Exercise", "Nutrition", "Recovery", "Biohack"]

export default function ProtocolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProtocols = selectedCategory === "All" 
    ? protocols 
    : protocols.filter(p => p.category === selectedCategory)

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
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-emerald-500 hover:bg-emerald-600 cursor-pointer" : "border-zinc-700 text-zinc-400 hover:text-white cursor-pointer"}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Protocols Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProtocols.map((protocol) => (
            <Dialog key={protocol.id}>
              <DialogTrigger asChild>
                <Card className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all cursor-pointer group">
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
                      <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
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
                          <li className="text-zinc-500 text-xs flex items-center gap-1">
                            <ChevronDown className="h-3 w-3" /> + {protocol.steps.length - 3} more steps
                          </li>
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

                    <Button variant="ghost" className="w-full text-emerald-400 hover:text-emerald-300">
                      View Full Details <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              {/* Expanded Card Content */}
              <DialogContent className="bg-zinc-900 border-zinc-800 max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-emerald-500/10">
                      <protocol.icon className="h-8 w-8 text-emerald-400" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl text-white">{protocol.title}</DialogTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
                          {protocol.category}
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                          {protocol.difficulty}
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                          {protocol.time}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="space-y-6">
                  <p className="text-zinc-300">{protocol.description}</p>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2">Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {protocol.benefits.map((benefit) => (
                        <Badge key={benefit} className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Steps */}
                  <div>
                    <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2">Step-by-Step Guide</h4>
                    <ol className="space-y-3">
                      {protocol.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-300">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Science */}
                  <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                    <h4 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-2">The Science</h4>
                    <p className="text-zinc-300 text-sm">{protocol.science}</p>
                  </div>

                  {/* Supplements */}
                  {protocol.supplements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2">Recommended Supplements</h4>
                      <div className="flex flex-wrap gap-2">
                        {protocol.supplements.map((supp) => (
                          <Badge key={supp} className="bg-zinc-800 text-zinc-300">
                            {supp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  )
}
