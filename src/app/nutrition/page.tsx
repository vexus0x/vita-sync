import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Utensils, Coffee, Apple, Sparkles, Clock, Flame, Leaf } from "lucide-react"

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
    ingredients: ["2 cups spinach", "1 cup frozen berries", "1 tbsp chia seeds", "1 tbsp hemp seeds", "1/2 avocado", "1 cup almond milk", "1 tsp ashwagandha (optional)"],
  },
  {
    title: "Mediterranean Bowl",
    description: "Legume-rich bowl inspired by Blue Zone diets for heart and brain health.",
    calories: 450,
    prepTime: "20 min",
    category: "Lunch",
    benefits: ["Plant Protein", "Fiber", "Healthy Fats"],
    ingredients: ["1 cup quinoa", "1/2 cup chickpeas", "1/2 cup lentils", "1/2 cup roasted vegetables", "2 tbsp olive oil", "Lemon juice", "Fresh herbs (parsley, mint)"],
  },
  {
    title: "Salmon & Vegetables",
    description: "Omega-3 rich dinner for brain and heart health with anti-inflammatory benefits.",
    calories: 380,
    prepTime: "25 min",
    category: "Dinner",
    benefits: ["Omega-3", "Protein", "Vitamin D"],
    ingredients: ["5 oz wild-caught salmon", "2 cups roasted broccoli", "1 cup roasted sweet potato", "2 tbsp olive oil", "Garlic", "Lemon", "Dill"],
  },
  {
    title: "Blue Zone Overnight Oats",
    description: "Sardinian-inspired oats with nuts and berries for longevity.",
    calories: 350,
    prepTime: "5 min + overnight",
    category: "Breakfast",
    benefits: ["Fiber", "Plant Protein", "Antioxidants"],
    ingredients: ["1/2 cup rolled oats", "1/2 cup oat milk", "1 tbsp walnuts", "1 tbsp chia seeds", "1/2 cup berries", "1 tsp honey", "Pinch of cinnamon"],
  },
  {
    title: "Okinawan Sweet Potato Bowl",
    description: "Okinawan-inspired bowl from one of the world's Blue Zones.",
    calories: 420,
    prepTime: "25 min",
    category: "Lunch",
    benefits: ["Complex Carbs", "Fiber", "Vitamins"],
    ingredients: ["1 large sweet potato", "1/2 cup black beans", "1/2 cup edamame", "1/2 cup brown rice", "Sea vegetables (wakame)", "1 tbsp sesame oil", "Sesame seeds"],
  },
  {
    title: "Sardinian Minestrone",
    description: "Hearty vegetable soup from Sardinia, rich in polyphenols.",
    calories: 280,
    prepTime: "35 min",
    category: "Dinner",
    benefits: ["Polyphenols", "Fiber", "Hydration"],
    ingredients: ["2 cups vegetable broth", "1/2 cup cannellini beans", "1 cup seasonal vegetables", "1/2 cup chopped tomatoes", "1/4 cup small pasta", "Fresh rosemary", "Parmesan rind"],
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
            <Card key={recipe.title} className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all">
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
                <CardTitle className="text-white mt-4">{recipe.title}</CardTitle>
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
                      <li className="text-zinc-500 text-xs">+ {recipe.ingredients.length - 4} more</li>
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
