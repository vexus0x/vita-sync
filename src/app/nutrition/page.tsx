import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Utensils, Coffee, Apple, Sparkles } from "lucide-react"

const nutritionSections = [
  {
    title: "Blueprint-Inspired Recipes",
    description: "Recipes designed for longevity and optimal nutrition.",
    icon: Utensils,
    count: 12,
    color: "text-emerald-400",
  },
  {
    title: "Blue Zone Foods",
    description: "Foods from the world's longest-lived populations.",
    icon: Apple,
    count: 24,
    color: "text-cyan-400",
  },
  {
    title: "Intermittent Fasting",
    description: "Time-restricted eating protocols and meal plans.",
    icon: Coffee,
    count: 5,
    color: "text-purple-400",
  },
  {
    title: "Superfoods Guide",
    description: "Evidence-based guide to longevity-boosting foods.",
    icon: Sparkles,
    count: 30,
    color: "text-yellow-400",
  },
]

const featuredRecipes = [
  {
    title: "Green Longevity Smoothie",
    description: "Packed with leafy greens, berries, and healthy fats.",
    calories: 320,
    prepTime: "5 min",
    category: "Breakfast",
  },
  {
    title: "Mediterranean Bowl",
    description: "Legume-rich bowl inspired by Blue Zone diets.",
    calories: 450,
    prepTime: "20 min",
    category: "Lunch",
  },
  {
    title: "Salmon & Vegetables",
    description: "Omega-3 rich dinner for brain and heart health.",
    calories: 380,
    prepTime: "25 min",
    category: "Dinner",
  },
]

export default function NutritionPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white">Nutrition</h1>
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Evidence-based nutrition for longevity. From Blue Zone diets to modern biohacking,
            discover foods and eating patterns that support a longer, healthier life.
          </p>
        </div>

        {/* Nutrition Sections */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {nutritionSections.map((section) => (
            <Card key={section.title} className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all cursor-pointer">
              <CardHeader>
                <section.icon className={`h-8 w-8 ${section.color}`} />
                <CardTitle className="text-white text-lg">{section.title}</CardTitle>
                <CardDescription className="text-zinc-400">{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">
                  {section.count} items
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Recipes */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white">Featured Recipes</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredRecipes.map((recipe) => (
            <Card key={recipe.title} className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all cursor-pointer">
              <CardHeader>
                <Badge className="w-fit bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
                  {recipe.category}
                </Badge>
                <CardTitle className="text-white mt-4">{recipe.title}</CardTitle>
                <CardDescription className="text-zinc-400">{recipe.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 text-sm text-zinc-500">
                  <span>{recipe.calories} cal</span>
                  <span>{recipe.prepTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
