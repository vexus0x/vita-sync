import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star, ExternalLink, Check, Shield, Zap, Heart, Brain, Moon, Dumbbell, Utensils } from "lucide-react"

const productCategories = [
  { id: "supplements", name: "Supplements", icon: Zap },
  { id: "devices", name: "Wearables & Devices", icon: Heart },
  { id: "books", name: "Books & Guides", icon: Brain },
  { id: "sleep", name: "Sleep Aids", icon: Moon },
  { id: "fitness", name: "Fitness Equipment", icon: Dumbbell },
  { id: "food", name: "Food & Nutrition", icon: Utensils },
]

const products = [
  // DEVICES
  {
    id: "oura-ring",
    name: "Oura Ring Gen 4",
    description: "Advanced sleep and recovery tracker. Measures HRV, sleep stages, and daily readiness score.",
    price: "$299",
    commission: "5-10%",
    rating: 4.8,
    reviews: 12500,
    category: "devices",
    features: ["Sleep Tracking", "HRV Monitoring", "Body Temperature", "Activity Score"],
    ourPick: true,
  },
  {
    id: "whoop-4",
    name: "WHOOP 4.0",
    description: "Recovery and performance optimizer. Tracks strain, sleep, and recovery 24/7.",
    price: "$239/year",
    commission: "10%",
    rating: 4.6,
    reviews: 8400,
    category: "devices",
    features: ["Strain Tracking", "Sleep Coach", "Recovery Score", "HRV Analysis"],
    ourPick: true,
  },
  {
    id: "apple-watch",
    name: "Apple Watch Ultra 2",
    description: "Advanced health monitoring with ECG, blood oxygen, and comprehensive fitness tracking.",
    price: "$799",
    commission: "3-5%",
    rating: 4.7,
    reviews: 5200,
    category: "devices",
    features: ["ECG", "Blood Oxygen", "Temperature", "GPS"],
    ourPick: false,
  },
  {
    id: "eight-sleep",
    name: "Eight Sleep Pod 4",
    description: "Smart mattress with temperature control for optimal sleep recovery.",
    price: "$2,395+",
    commission: "5-10%",
    rating: 4.5,
    reviews: 890,
    category: "devices",
    features: ["Temperature Control", "Sleep Tracking", "HEQ", "Smart Alarm"],
    ourPick: false,
  },
  
  // SUPPLEMENTS
  {
    id: "ag1",
    name: "AG1 (Athletic Greens)",
    description: "Daily greens superfood powder with probiotics, vitamins, and minerals.",
    price: "$99/30 days",
    commission: "20-30%",
    rating: 4.5,
    reviews: 15800,
    category: "supplements",
    features: ["75+ nutrients", "Probiotics", "Adaptogens", "1-minute prep"],
    ourPick: true,
  },
  {
    id: "nordic-naturals",
    name: "Nordic Naturals Ultimate Omega",
    description: "Pharmaceutical-grade fish oil with high EPA/DHA for brain and heart health.",
    price: "~40",
    commission: "5-10%",
    rating: 4.7,
    reviews: 5200,
    category: "supplements",
    features: ["1400mg EPA/DHA", "IFOS Certified", "Sustainable", "Lemon Flavored"],
    ourPick: false,
  },
  {
    id: "life-extension-nmn",
    name: "Life Extension NMN",
    description: "Nicotinamide mononucleotide for NAD+ support and cellular energy.",
    price: "~45",
    commission: "5-10%",
    rating: 4.5,
    reviews: 2100,
    category: "supplements",
    features: ["250mg per capsule", "Third-party tested", "Capsule form", "60 servings"],
    ourPick: true,
  },
  {
    id: "jarrow-nr",
    name: "Jarrow Formulas NR (Niagen)",
    description: "Nicotinamide riboside for NAD+ optimization and mitochondrial health.",
    price: "~30",
    commission: "5-10%",
    rating: 4.6,
    reviews: 3800,
    category: "supplements",
    features: ["300mg NR", "Patented TRU Niagen", "60 capsules", "Gluten-free"],
    ourPick: false,
  },
  {
    id: "threshold-enterprises",
    name: "Threshold Enterprises NMN",
    description: "High-quality NMN powder for longevity and cellular health support.",
    price: "~50",
    commission: "5-10%",
    rating: 4.4,
    reviews: 950,
    category: "supplements",
    features: ["Pure NMN powder", "Vegetable capsules", "Third-party tested", "Fast absorption"],
    ourPick: false,
  },
  {
    id: "magnesium-glycinate",
    name: "Pure Encapsulations Magnesium Glycinate",
    description: "Highly absorbable magnesium for sleep, muscle recovery, and stress support.",
    price: "~25",
    commission: "5-10%",
    rating: 4.8,
    reviews: 4200,
    category: "supplements",
    features: ["400mg per serving", "Hypoallergenic", "Capsule form", "No fillers"],
    ourPick: false,
  },
  {
    id: "resveratrol",
    name: "ReserveAge Resveratrol",
    description: "Trans-resveratrol for cardiovascular and anti-aging support.",
    price: "~35",
    commission: "5-10%",
    rating: 4.5,
    reviews: 2800,
    category: "supplements",
    features: ["500mg trans-resveratrol", "95% potency", "Capsule form", "60 servings"],
    ourPick: false,
  },
  {
    id: "quercetin",
    name: "Thorne Quercetin Phytosome",
    description: "Enhanced absorption quercetin for immune support and longevity.",
    price: "~45",
    commission: "5-10%",
    rating: 4.6,
    reviews: 1650,
    category: "supplements",
    features: ["Phytosome technology", "Enhanced absorption", "Immune support", "60 capsules"],
    ourPick: false,
  },
  {
    id: "fisetin",
    name: "Life Extension Fisetin",
    description: "Senolytic compound for cellular rejuvenation and healthy aging.",
    price: "~40",
    commission: "5-10%",
    rating: 4.4,
    reviews: 890,
    category: "supplements",
    features: ["500mg per serving", "99% purity", "60 capsules", "Third-party tested"],
    ourPick: false,
  },
  {
    id: "taurine",
    name: "NOW Taurine",
    description: "Essential amino acid for cardiovascular and nervous system support.",
    price: "~15",
    commission: "5-10%",
    rating: 4.6,
    reviews: 3400,
    category: "supplements",
    features: ["1000mg per capsule", "Pure form", "120 capsules", "Budget-friendly"],
    ourPick: false,
  },
  
  // SLEEP
  {
    id: "blue-light-glasses",
    name: "Swanwick Swannies Blue Light Blockers",
    description: "Premium amber glasses for evening blue light protection.",
    price: "$89",
    commission: "10-15%",
    rating: 4.6,
    reviews: 3100,
    category: "sleep",
    features: ["Amber lens", "Style options", "Case included", "30-night trial"],
    ourPick: false,
  },
  {
    id: "mela-sleep",
    name: "Mela Sleep Mask",
    description: "Light-blocking sleep mask with cooling gel for optimal sleep.",
    price: "$49",
    commission: "10-15%",
    rating: 4.5,
    reviews: 1200,
    category: "sleep",
    features: ["100% light blocking", "Cooling gel", "Adjustable strap", "Travel case"],
    ourPick: false,
  },
  {
    id: "weighted-blanket",
    name: "Bearaby Cotton Napper",
    description: "Organic weighted blanket for deep, restorative sleep.",
    price: "$249+",
    commission: "8-12%",
    rating: 4.7,
    reviews: 2100,
    category: "sleep",
    features: ["Organic cotton", "No beads", "Cooling design", "Various weights"],
    ourPick: false,
  },
  
  // BOOKS
  {
    id: "matthew-walker",
    name: "Why We Sleep by Matthew Walker",
    description: "Essential read on the science of sleep and its impact on health and longevity.",
    price: "$18",
    commission: "4-8%",
    rating: 4.7,
    reviews: 28400,
    category: "books",
    features: ["400+ pages", "Science-backed", "Award-winning", "Must-read"],
    ourPick: true,
  },
  {
    id: "peter-attia-outlive",
    name: "Outlive by Peter Attia",
    description: "The science and art of longevity medicine. Practical guide to extending lifespan.",
    price: "$28",
    commission: "4-8%",
    rating: 4.8,
    reviews: 12500,
    category: "books",
    features: ["500+ pages", "Longevity roadmap", "Evidence-based", "Actionable insights"],
    ourPick: true,
  },
  {
    id: "blue-zones",
    name: "The Blue Zones Kitchen",
    description: "80+ recipes from the world's longest-lived people by Dan Buettner.",
    price: "$25",
    commission: "4-8%",
    rating: 4.5,
    reviews: 2100,
    category: "books",
    features: ["Blue Zone recipes", "Photography", "Shopping lists", "Meal plans"],
    ourPick: false,
  },
  {
    id: "david-sinclair",
    name: "Lifespan by David Sinclair",
    description: "Why we age and why we don't have to. The science of aging and longevity.",
    price: "$20",
    commission: "4-8%",
    rating: 4.4,
    reviews: 18200,
    category: "books",
    features: ["400+ pages", "Epigenetics", "Practical guide", "Controversial but insightful"],
    ourPick: false,
  },
  {
    id: "huberman",
    name: "Huberman Lab Podcast Book",
    description: "Huberman's insights on neuroscience, health, and longevity protocols.",
    price: "$35",
    commission: "4-8%",
    rating: 4.6,
    reviews: 3400,
    category: "books",
    features: ["Based on podcast", "Protocols", "Science explained", "Practical tips"],
    ourPick: false,
  },
  
  // FITNESS EQUIPMENT
  {
    id: "peloton",
    name: "Peloton Bike+",
    description: "High-quality indoor cycling with live classes and metrics tracking.",
    price: "$1,995+",
    commission: "5-10%",
    rating: 4.6,
    reviews: 8500,
    category: "fitness",
    features: ["Live classes", "Metrics tracking", "Variety of workouts", "Community"],
    ourPick: false,
  },
  {
    id: "tonal",
    name: "Tonal Smart Home Gym",
    description: "AI-powered strength training with digital weights.",
    price: "$2,995+",
    commission: "5-10%",
    rating: 4.5,
    reviews: 2100,
    category: "fitness",
    features: ["AI coaching", "Digital weights", "Space-saving", "Full body"],
    ourPick: false,
  },
  {
    id: "resistance-bands",
    name: "Ghost Band Pro Set",
    description: "Professional resistance bands for home workouts and travel.",
    price: "$39",
    commission: "10-15%",
    rating: 4.7,
    reviews: 4800,
    category: "fitness",
    features: ["5 resistance levels", "Carrying case", "Lifetime warranty", "Exercise guide"],
    ourPick: false,
  },
  {
    id: "adjustable-dumbbells",
    name: "Bowflex SelectTech 552",
    description: "Space-saving adjustable dumbbells from 5-52.5 lbs.",
    price: "$349",
    commission: "5-8%",
    rating: 4.6,
    reviews: 9200,
    category: "fitness",
    features: ["Quick change", "Space efficient", "2.5-52.5 lb range", "Durable"],
    ourPick: false,
  },
  
  // FOOD & NUTRITION
  {
    id: "kettlebells",
    name: "Kettlebell Kings Cast Iron",
    description: "High-quality cast iron kettlebells for functional training.",
    price: "$99-199",
    commission: "5-10%",
    rating: 4.8,
    reviews: 1200,
    category: "fitness",
    features: ["Cast iron", "Various weights", "Grip friendly", "Durable"],
    ourPick: false,
  },
  {
    id: "athletic-greens",
    name: "Athletic Greens Kids",
    description: "Daily superfood for kids - delicious and nutritious.",
    price: "$79/30 days",
    commission: "20-30%",
    rating: 4.4,
    reviews: 850,
    category: "food",
    features: ["Kid-friendly", "75+ nutrients", "Great taste", "Immune support"],
    ourPick: false,
  },
  {
    id: "super-beauty",
    name: "Four Sigmatic Mushroom Coffee",
    description: "Organic mushroom coffee with lion's mane and reishi for focus and calm.",
    price: "$30-50",
    commission: "10-15%",
    rating: 4.4,
    reviews: 5600,
    category: "food",
    features: ["Lion's mane", "Reishi", "Organic", "Great taste"],
    ourPick: false,
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Recommended Products</h1>
          <p className="text-zinc-400 max-w-2xl">
            We've tested and researched hundreds of health products. These are our top picks for longevity, 
            backed by science and personally vetted. As an affiliate, we earn from qualifying purchases.
          </p>
        </div>

        {/* Trust Banner */}
        <div className="grid gap-4 md:grid-cols-3 mb-12">
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <Shield className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <p className="font-medium text-white">100% Independent</p>
                  <p className="text-sm text-zinc-500">No brand influence on reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <Check className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Science-Backed</p>
                  <p className="text-sm text-zinc-500">Evidence-based recommendations</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <ShoppingCart className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Your Support Helps</p>
                  <p className="text-sm text-zinc-500">Affiliate commissions fund research</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {productCategories.map((cat) => (
            <Badge
              key={cat.id}
              variant="outline"
              className="border-zinc-700 text-zinc-400 hover:text-white hover:border-emerald-500 cursor-pointer"
            >
              <cat.icon className="h-4 w-4 mr-1" />
              {cat.name}
            </Badge>
          ))}
        </div>

        {/* Our Picks */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-400" />
            Our Top Picks
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.filter(p => p.ourPick).map((product) => (
              <Card key={product.id} className="bg-gradient-to-br from-emerald-900/30 to-zinc-900/30 border-emerald-500/30">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                      Our Pick
                    </Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white">{product.rating}</span>
                      <span className="text-zinc-500">({product.reviews.toLocaleString()})</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-zinc-400">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="bg-zinc-800 text-zinc-300">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-zinc-500">From</p>
                      <p className="text-xl font-bold text-white">{product.price}</p>
                    </div>
                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Product
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Products */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">All Recommended Products</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.filter(p => !p.ourPick).map((product) => (
              <Card key={product.id} className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/30 transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-xs">
                      {productCategories.find(c => c.id === product.category)?.name}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white">{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-base">{product.name}</CardTitle>
                  <CardDescription className="text-zinc-400 text-sm line-clamp-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 3).map((feature) => (
                      <Badge key={feature} variant="secondary" className="bg-zinc-800 text-zinc-300 text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-lg font-bold text-white">{product.price}</p>
                    <Button variant="ghost" className="text-emerald-400 hover:text-emerald-300 text-sm">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Disclosure */}
        <div className="mt-12 p-6 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <p className="text-sm text-zinc-500 text-center">
            <strong className="text-zinc-400">Affiliate Disclosure:</strong> VitaSync participates in affiliate programs. 
            We earn commissions on qualifying purchases through our links at no extra cost to you. 
            We only recommend products we use, trust, and believe in.
          </p>
        </div>
      </div>
    </div>
  )
}
