"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator as CalculatorIcon, RefreshCw, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface Question {
  id: string
  text: string
  options: { label: string; value: number }[]
}

const questions: Question[] = [
  {
    id: "sleep",
    text: "How many hours of sleep do you get on average?",
    options: [
      { label: "Less than 6 hours", value: -3 },
      { label: "6-7 hours", value: 0 },
      { label: "7-8 hours", value: 3 },
      { label: "More than 8 hours", value: 2 },
    ],
  },
  {
    id: "exercise",
    text: "How often do you exercise (moderate intensity)?",
    options: [
      { label: "Rarely or never", value: -4 },
      { label: "1-2 times per week", value: -1 },
      { label: "3-4 times per week", value: 3 },
      { label: "5+ times per week", value: 4 },
    ],
  },
  {
    id: "diet",
    text: "How would you describe your diet?",
    options: [
      { label: "Mostly processed foods", value: -4 },
      { label: "Standard American diet", value: -1 },
      { label: "Balanced with mostly whole foods", value: 3 },
      { label: "Optimized (whole foods, limited sugar)", value: 5 },
    ],
  },
  {
    id: "stress",
    text: "How would you rate your stress levels?",
    options: [
      { label: "Chronic high stress", value: -4 },
      { label: "Moderate stress", value: -1 },
      { label: "Low stress", value: 2 },
      { label: "Well-managed / Minimal", value: 3 },
    ],
  },
  {
    id: "social",
    text: "How would you describe your social connections?",
    options: [
      { label: "Isolated", value: -3 },
      { label: "Some connections", value: 0 },
      { label: "Strong community", value: 2 },
      { label: "Close relationships + community", value: 3 },
    ],
  },
  {
    id: "alcohol",
    text: "How often do you consume alcohol?",
    options: [
      { label: "Daily", value: -3 },
      { label: "A few times per week", value: -2 },
      { label: "Occasionally", value: 0 },
      { label: "Rarely or never", value: 2 },
    ],
  },
  {
    id: "smoking",
    text: "Do you smoke or use tobacco?",
    options: [
      { label: "Daily", value: -8 },
      { label: "Occasionally", value: -4 },
      { label: "Former smoker", value: -1 },
      { label: "Never", value: 3 },
    ],
  },
]

export function LongevityCalculator() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleAnswer = (value: number) => {
    setIsAnimating(true)
    const questionId = questions[currentQuestion].id
    setAnswers((prev) => ({ ...prev, [questionId]: value }))

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
      } else {
        setShowResults(true)
      }
      setIsAnimating(false)
    }, 300)
  }

  const calculateScore = () => {
    const baseScore = 50 // Starting biological age
    const lifestyleScore = Object.values(answers).reduce((sum, val) => sum + val, 0)
    const biologicalAge = baseScore - lifestyleScore
    
    // Calculate a "longevity score" (0-100)
    const longevityScore = Math.min(100, Math.max(0, 50 + lifestyleScore * 5))
    
    return { biologicalAge, longevityScore }
  }

  const resetCalculator = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  const getRecommendations = (score: number) => {
    const recs: string[] = []
    
    if (!answers.sleep || answers.sleep < 0) {
      recs.push("Prioritize 7-9 hours of quality sleep per night")
    }
    if (!answers.exercise || answers.exercise < 0) {
      recs.push("Start with Zone 2 cardio 2-3x per week")
    }
    if (!answers.diet || answers.diet < 1) {
      recs.push("Reduce processed foods and increase whole foods")
    }
    if (!answers.stress || answers.stress < 0) {
      recs.push("Incorporate stress management techniques (meditation, cold exposure)")
    }
    if (!answers.social || answers.social < 0) {
      recs.push("Build stronger social connections and community")
    }
    
    return recs
  }

  if (showResults) {
    const { biologicalAge, longevityScore } = calculateScore()
    const recommendations = getRecommendations(longevityScore)

    return (
      <Card className="bg-gradient-to-br from-emerald-900/50 to-zinc-900/50 border-emerald-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <CalculatorIcon className="h-6 w-6 text-emerald-400" />
            Your Longevity Results
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Based on your lifestyle factors, here's your assessment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center p-6 rounded-xl bg-zinc-800/50"
            >
              <p className="text-sm text-zinc-400 mb-2">Estimated Biological Age</p>
              <p className="text-5xl font-bold text-emerald-400">
                {biologicalAge < 30 ? "30+" : biologicalAge > 80 ? "80+" : biologicalAge}
              </p>
              <p className="text-xs text-zinc-500 mt-2">Based on lifestyle factors</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center p-6 rounded-xl bg-zinc-800/50"
            >
              <p className="text-sm text-zinc-400 mb-2">Longevity Score</p>
              <div className="relative inline-block">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-zinc-700"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${longevityScore * 2.51} 251`}
                    className={longevityScore > 70 ? "text-emerald-400" : longevityScore > 40 ? "text-yellow-400" : "text-red-400"}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
                  {Math.round(longevityScore)}
                </span>
              </div>
              <p className="text-xs text-zinc-500 mt-2">Out of 100</p>
            </motion.div>
          </div>

          {recommendations.length > 0 && (
            <div>
              <h4 className="font-semibold text-white mb-3">Recommendations</h4>
              <ul className="space-y-2">
                {recommendations.map((rec, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 text-sm text-zinc-300"
                  >
                    <ArrowRight className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {rec}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-4 border-t border-zinc-700">
            <p className="text-xs text-zinc-500">
              * This calculator provides a rough estimate based on lifestyle factors and is not a medical assessment. 
              Consult a healthcare professional for personalized advice.
            </p>
          </div>

          <Button onClick={resetCalculator} variant="outline" className="w-full border-zinc-700 text-white hover:bg-zinc-800">
            <RefreshCw className="mr-2 h-4 w-4" />
            Calculate Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  const question = questions[currentQuestion]

  return (
    <Card className="bg-zinc-900/50 border-zinc-800">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline" className="border-zinc-700">
            Question {currentQuestion + 1} of {questions.length}
          </Badge>
          <Badge className="bg-emerald-500">Calculate</Badge>
        </div>
        <CardTitle className="text-white text-xl">{question.text}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {question.options.map((option, index) => (
          <motion.div
            key={option.label}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              variant="outline"
              className={`w-full justify-start h-auto py-3 px-4 border-zinc-700 hover:bg-zinc-800 hover:border-emerald-500/50 transition-all ${
                isAnimating ? "pointer-events-none opacity-50" : ""
              }`}
              onClick={() => handleAnswer(option.value)}
            >
              {option.label}
            </Button>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}
