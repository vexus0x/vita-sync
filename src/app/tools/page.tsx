"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calculator, ClipboardList, Activity, TrendingUp, ChevronDown, Check } from "lucide-react"
import { LongevityCalculator } from "@/components/calculator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const tools = [
  {
    title: "Longevity Calculator",
    description: "Estimate your biological age based on lifestyle factors and identify areas for improvement.",
    icon: Calculator,
    category: "Assessment",
    status: "Available",
    features: [
      "7 lifestyle questions",
      "Biological age estimate",
      "Longevity score (0-100)",
      "Personalized recommendations",
      "Track progress over time"
    ],
    howItWorks: [
      "Answer 7 questions about your lifestyle",
      "Get your estimated biological age",
      "Receive personalized recommendations",
      "Track improvements over time"
    ]
  },
  {
    title: "Supplement Stack Builder",
    description: "Build and track your personalized supplement protocol based on your goals and budget.",
    icon: ClipboardList,
    category: "Tracking",
    status: "Coming Soon",
    features: [
      "Drag-and-drop stack builder",
      "Budget optimization",
      "Dosage timing reminders",
      "Interaction checker",
      "Export to PDF"
    ],
    howItWorks: [
      "Select your health goals",
      "Choose supplements from our database",
      "Optimize for your budget",
      "Set daily reminders",
      "Track effectiveness over time"
    ]
  },
  {
    title: "Progress Tracker",
    description: "Track key biomarkers, habits, and progress over time with visual charts and insights.",
    icon: Activity,
    category: "Tracking",
    status: "Coming Soon",
    features: [
      "Habit streak tracking",
      "Biomarker logging",
      "Visual progress charts",
      "Weekly insights report",
      "Export data for analysis"
    ],
    howItWorks: [
      "Log daily habits and metrics",
      "Input weekly biomarker values",
      "View progress on visual charts",
      "Receive AI-powered insights",
      "Share reports with your doctor"
    ]
  },
  {
    title: "Biological Age Estimator",
    description: "Input blood work and biomarkers to estimate your biological age and track aging markers.",
    icon: TrendingUp,
    category: "Assessment",
    status: "Coming Soon",
    features: [
      "Blood work input",
      "Multiple aging clock estimates",
      "Historical tracking",
      "Intervention impact analysis",
      "Doctor-ready reports"
    ],
    howItWorks: [
      "Enter blood test results",
      "Calculate multiple biological ages",
      "Compare chronological vs biological",
      "See intervention impact",
      "Generate detailed report"
    ]
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
            <Dialog key={tool.title}>
              <DialogTrigger asChild>
                <Card className={`bg-zinc-900/50 border-zinc-800 ${tool.status === "Available" ? "hover:border-emerald-500/50" : "hover:border-zinc-700"} transition-all cursor-pointer group`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                        <tool.icon className="h-8 w-8 text-emerald-400" />
                      </div>
                      <Badge className={tool.status === "Available" ? "bg-emerald-500" : "bg-zinc-600"}>
                        {tool.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-white mt-4">{tool.title}</CardTitle>
                    <CardDescription className="text-zinc-400">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                        {tool.category}
                      </Badge>
                      <Button variant="ghost" className="text-emerald-400 hover:text-emerald-300">
                        {tool.status === "Available" ? "Launch" : "Learn More"} <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="bg-zinc-900 border-zinc-800 max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-emerald-500/10">
                      <tool.icon className="h-8 w-8 text-emerald-400" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl text-white">{tool.title}</DialogTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge className={tool.status === "Available" ? "bg-emerald-500" : "bg-zinc-600"}>
                          {tool.status}
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="space-y-6">
                  <p className="text-zinc-300">{tool.description}</p>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-3">Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {tool.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm">
                          <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How It Works */}
                  <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                    <h4 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-3">How It Works</h4>
                    <ol className="space-y-2">
                      {tool.howItWorks.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-medium">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* CTA */}
                  <div className="flex justify-end pt-4">
                    {tool.status === "Available" ? (
                      <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                        <tool.icon className="h-4 w-4 mr-2" />
                        Launch Tool
                      </Button>
                    ) : (
                      <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                        Get Notified When Available
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Interactive Longevity Calculator */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Interactive Longevity Calculator</h2>
          <LongevityCalculator />
        </div>
      </div>
    </div>
  )
}
