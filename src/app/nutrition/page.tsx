"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Utensils, Coffee, Apple, Sparkles, Clock, Flame, Leaf, ChevronDown, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const nutritionSections = [
  {
    title: "VitaSync Recipes",
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
    description: "Packed with leafy greens, berries, and healthy fats for optimal cellular health.",
    calories: 320,
    prepTime: "5 min",
    category: "Breakfast",
    benefits: ["Antioxidants", "Omega-3", "Fiber"],
    ingredients: [
      "2 cups fresh spinach",
      "1 cup frozen mixed berries",
      "1 tbsp chia seeds",
      "1 tbsp hemp seeds",
      "1/2 ripe avocado",
      "1 cup unsweetened almond milk",
      "1 tsp ashwagandha (optional)",
      "1 tsp raw honey (optional)",
    ],
    instructions: [
      "Add almond milk to blender first",
      "Add spinach and blend until smooth",
      "Add frozen berries and blend",
      "Add chia seeds, hemp seeds, and avocado",
      "Blend until creamy",
      "Add ashwagandha and honey if using",
      "Blend briefly and serve immediately",
    ],
    science: "Leafy greens are rich in folate and nitrates, which support cardiovascular health. Berries provide anthocyanins for brain health. Chia and hemp seeds offer omega-3 fatty acids and plant-based protein.",
  },
  {
    title: "Mediterranean Bowl",
    description: "Legume-rich bowl inspired by Blue Zone diets for heart and brain health.",
    calories: 450,
    prepTime: "20 min",
    category: "Lunch",
    benefits: ["Plant Protein", "Fiber", "Healthy Fats"],
    ingredients: [
      "1 cup cooked quinoa",
      "1/2 cup chickpeas (roasted optional)",
      "1/2 cup lentils",
      "1/2 cup roasted vegetables (zucchini, bell peppers)",
      "2 tbsp extra virgin olive oil",
      "Fresh lemon juice",
      "Fresh parsley, chopped",
      "Fresh mint, chopped",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Cook quinoa according to package directions",
      "Prepare and roast vegetables at 400°F for 15 minutes",
      "Warm chickpeas and lentils gently",
      "Create a bed of quinoa in a bowl",
      "Arrange chickpeas, lentils, and vegetables on top",
      "Drizzle with olive oil and lemon juice",
      "Garnish with fresh herbs and season to taste",
    ],
    science: "The Mediterranean diet is consistently ranked as one of the healthiest eating patterns. Legumes provide slow-digesting protein and fiber, while olive oil delivers heart-healthy monounsaturated fats and polyphenols.",
  },
  {
    title: "Salmon & Vegetables",
    description: "Omega-3 rich dinner for brain and heart health with anti-inflammatory benefits.",
    calories: 380,
    prepTime: "25 min",
    category: "Dinner",
    benefits: ["Omega-3", "Protein", "Vitamin D"],
    ingredients: [
      "5 oz wild-caught salmon fillet",
      "2 cups broccoli florets",
      "1 large sweet potato, cubed",
      "2 tbsp extra virgin olive oil",
      "3 cloves garlic, minced",
      "Fresh lemon juice",
      "Fresh dill",
      "Sea salt and black pepper",
    ],
    instructions: [
      "Preheat oven to 400°F (200°C)",
      "Toss sweet potato cubes with 1 tbsp olive oil, salt, and pepper",
      "Spread sweet potatoes on baking sheet",
      "Place salmon on same sheet with vegetables",
      "Drizzle salmon with remaining olive oil and lemon juice",
      "Season with garlic, dill, salt, and pepper",
      "Roast for 18-22 minutes until salmon flakes easily",
    ],
    science: "Wild-caught salmon provides EPA and DHA omega-3s, which reduce inflammation and support brain function. Sweet potatoes offer vitamin A and fiber, while broccoli contains sulforaphane, a powerful anticancer compound.",
  },
  {
    title: "Blue Zone Overnight Oats",
    description: "Sardinian-inspired oats with nuts and berries for longevity.",
    calories: 350,
    prepTime: "5 min + overnight",
    category: "Breakfast",
    benefits: ["Fiber", "Plant Protein", "Antioxidants"],
    ingredients: [
      "1/2 cup rolled oats",
      "1/2 cup oat milk (or any milk)",
      "1 tbsp walnuts, chopped",
      "1 tbsp chia seeds",
      "1/2 cup mixed berries (fresh or frozen)",
      "1 tsp raw honey or maple syrup",
      "Pinch of cinnamon",
      "Pinch of sea salt",
    ],
    instructions: [
      "Add oats to a mason jar or airtight container",
      "Pour oat milk over oats",
      "Add chia seeds and stir well",
      "Add walnuts and half the berries",
      "Drizzle with honey and sprinkle cinnamon",
      "Add pinch of salt",
      "Cover and refrigerate overnight (at least 6 hours)",
      "Top with remaining berries before serving",
    ],
    science: "Oats contain beta-glucan, which supports heart health. Walnuts are the only nut significantly high in omega-3 ALA. Blue Zone centenarians regularly consume whole grains and nuts as part of their daily diet.",
  },
  {
    title: "Okinawan Sweet Potato Bowl",
    description: "Okinawan-inspired bowl from one of the world's Blue Zones.",
    calories: 420,
    prepTime: "25 min",
    category: "Lunch",
    benefits: ["Complex Carbs", "Fiber", "Vitamins"],
    ingredients: [
      "1 large orange sweet potato",
      "1/2 cup black beans, rinsed",
      "1/2 cup edamame, shelled",
      "1/2 cup cooked brown rice",
      "1/2 cup sea vegetables (wakame or arame)",
      "1 tbsp sesame oil",
      "1 tbsp rice vinegar",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],
    instructions: [
      "Bake sweet potato at 400°F for 20-25 minutes until soft",
      "Prepare wakame according to package (rehydrate in water)",
      "Cook brown rice if not pre-cooked",
      "Warm black beans and edamame gently",
      "Slice sweet potato when cooled slightly",
      "Create bowl with rice as base",
      "Arrange sweet potato, beans, edamame, and wakame",
      "Drizzle with sesame oil and rice vinegar",
      "Garnish with sesame seeds and green onions",
    ],
    science: "Okinawans have the longest disability-free life expectancy. Sweet potatoes are a staple in their diet, providing beta-carotene and fiber. Black beans offer plant protein and folate. Sea vegetables are rich in minerals and unique compounds called fucoidan.",
  },
  {
    title: "Sardinian Minestrone",
    description: "Hearty vegetable soup from Sardinia, rich in polyphenols.",
    calories: 280,
    prepTime: "35 min",
    category: "Dinner",
    benefits: ["Polyphenols", "Fiber", "Hydration"],
    ingredients: [
      "2 cups low-sodium vegetable broth",
      "1/2 cup cannellini beans (or white beans)",
      "1 cup seasonal vegetables (carrots, celery, zucchini)",
      "1/2 cup chopped tomatoes (canned or fresh)",
      "1/4 cup small pasta (ditalini or similar)",
      "1 bay leaf",
      "Fresh rosemary",
      "Parmesan rind (optional)",
      "Extra virgin olive oil for serving",
      "Crusty bread for serving",
    ],
    instructions: [
      "Dice all vegetables into small pieces",
      "Sauté vegetables in olive oil for 3-4 minutes",
      "Add broth, tomatoes, beans, and bay leaf",
      "Add Parmesan rind if using",
      "Simmer for 15 minutes",
      "Add pasta and cook according to package directions",
      "Remove bay leaf and Parmesan rind",
      "Serve hot with a drizzle of olive oil",
      "Garnish with fresh rosemary",
    ],
    science: "Sardinia has one of the highest concentrations of centenarians. This minestrone embodies their vegetable-forward diet. Tomatoes provide lycopene, beans offer resistant starch, and fresh herbs contribute polyphenols that support longevity.",
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
                <div className="p-2 rounded-lg bg-emerald-500/10 w-fit">
                  <section.icon className={`h-6 w-6 ${section.color}`} />
                </div>
                <CardTitle className="text-white text-lg mt-4">{section.title}</CardTitle>
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredRecipes.map((recipe) => (
            <Dialog key={recipe.title}>
              <DialogTrigger asChild>
                <Card className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
                        {recipe.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-zinc-500">
                        <Flame className="h-4 w-4" />
                        <span>{recipe.calories}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white mt-4 group-hover:text-emerald-400 transition-colors">
                      {recipe.title}
                    </CardTitle>
                    <CardDescription className="text-zinc-400">{recipe.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Clock className="h-4 w-4" />
                      <span>{recipe.prepTime}</span>
                    </div>
                    
                    <div>
                      <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Ingredients</p>
                      <ul className="space-y-1 text-sm text-zinc-300">
                        {recipe.ingredients.slice(0, 4).map((ing, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Leaf className="h-3 w-3 text-emerald-400" />
                            {ing}
                          </li>
                        ))}
                        {recipe.ingredients.length > 4 && (
                          <li className="text-zinc-500 text-xs flex items-center gap-1">
                            <ChevronDown className="h-3 w-3" /> + {recipe.ingredients.length - 4} more ingredients
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {recipe.benefits.map((benefit) => (
                        <Badge key={benefit} variant="secondary" className="bg-zinc-800 text-zinc-300 text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="ghost" className="w-full text-emerald-400 hover:text-emerald-300">
                      View Full Recipe <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="bg-zinc-900 border-zinc-800 max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-emerald-500/10">
                      <Utensils className="h-8 w-8 text-emerald-400" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl text-white">{recipe.title}</DialogTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
                          {recipe.category}
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                          {recipe.calories} cal
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                          {recipe.prepTime}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="space-y-6">
                  <p className="text-zinc-300">{recipe.description}</p>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-2">Health Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {recipe.benefits.map((benefit) => (
                        <Badge key={benefit} className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2">Ingredients</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {recipe.ingredients.map((ing, i) => (
                        <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm">
                          <span className="text-emerald-400 mt-1">•</span>
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructions */}
                  <div>
                    <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2">Instructions</h4>
                    <ol className="space-y-2">
                      {recipe.instructions.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
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
                    <p className="text-zinc-300 text-sm">{recipe.science}</p>
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
