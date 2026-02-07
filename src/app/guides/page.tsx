import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Star, FileText, BookOpen, Utensils, Activity, Clock, Check, ChevronRight } from "lucide-react"

const guides = [
  {
    id: "30-day-longevity",
    title: "30-Day Longevity Protocol",
    description: "A comprehensive daily protocol for beginners. Transform your health with science-backed habits.",
    price: 29,
    originalPrice: 99,
    format: "PDF",
    pages: 120,
    category: "Protocol",
    icon: Activity,
    features: [
      "Daily morning & evening routines",
      "Supplement schedule & dosages",
      "Exercise program (no gym needed)",
      "Meal planning guide",
      "Progress tracking templates",
      "30-day checklist",
    ],
    whatsInside: [
      "Week 1: Foundation habits",
      "Week 2: Building consistency",
      "Week 3: Optimization",
      "Week 4: Mastery & maintenance",
    ],
    testimonial: "Life-changing! I've never felt better. The daily structure keeps me accountable.",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "blue-zone-recipes",
    title: "Blue Zone Recipes Collection",
    description: "80+ authentic recipes from the world's longest-lived populations.",
    price: 24,
    originalPrice: 49,
    format: "PDF",
    pages: 200,
    category: "Nutrition",
    icon: Utensils,
    features: [
      "80+ authentic Blue Zone recipes",
      "Shopping lists for each recipe",
      "Nutritional information",
      "Meal prep guides",
      "Regional cuisine guides (Sardinia, Okinawa, Nicoya, Ikaria, Loma Linda)",
      "Seasonal adaptations",
    ],
    whatsInside: [
      "Mediterranean classics from Sardinia",
      "Okinawan sweet potato dishes",
      "Plant-based Nicoyan meals",
      "Ikarian herbal teas",
      "Loma Linda vegetarian recipes",
    ],
    testimonial: "The recipes are delicious and easy to follow. My whole family loves them!",
    rating: 4.8,
    reviews: 203,
  },
  {
    id: "supplement-stack-guide",
    title: "Evidence-Based Supplement Guide",
    description: "Complete guide to supplements for longevity with dosage, timing, and brand recommendations.",
    price: 19,
    originalPrice: 59,
    format: "PDF",
    pages: 85,
    category: "Supplements",
    icon: FileText,
    features: [
      "25+ supplements explained",
      "Evidence ratings for each",
      "Optimal dosages & timing",
      "Brand comparisons & recommendations",
      "Stack building templates",
      "Budget vs premium options",
    ],
    whatsInside: [
      "NAD+ boosters (NMN, NR)",
      "Senolytics guide",
      "Anti-inflammatory compounds",
      "Cognitive enhancers",
      "Sleep optimization stack",
      "Exercise performance stack",
    ],
    testimonial: "Finally, a supplement guide that cites actual studies. Worth every penny.",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: "sleep-optimization",
    title: "Sleep Optimization Masterclass",
    description: "Transform your sleep with advanced techniques used by elite performers.",
    price: 34,
    originalPrice: 79,
    format: "PDF + Video",
    pages: 95,
    category: "Sleep",
    icon: BookOpen,
    features: [
      "Complete sleep protocol",
      "Temperature optimization guide",
      "Light management strategies",
      "Sleep tracking templates",
      "Recovery assessment tools",
      "2-hour video course access",
    ],
    whatsInside: [
      "Circadian rhythm reset protocol",
      "Bedroom optimization checklist",
      "Evening routine guide",
      "Morning light protocol",
      "Nap strategy guide",
      "Shift work adaptation plan",
    ],
    testimonial: "My sleep improved dramatically. From 5 hours to 8 hours of quality sleep.",
    rating: 4.9,
    reviews: 124,
  },
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Premium Guides & Downloads</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            In-depth, actionable resources to accelerate your longevity journey. 
            Created by synthesizing the latest research and practical experience.
          </p>
        </div>

        {/* Featured Guide */}
        <div className="mb-12">
          <Badge className="mb-4 bg-emerald-500">Most Popular</Badge>
          <Card className="bg-gradient-to-br from-emerald-900/50 to-zinc-900/50 border-emerald-500/30">
            <CardContent className="pt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-emerald-500/10">
                      <Activity className="h-8 w-8 text-emerald-400" />
                    </div>
                    <div>
                      <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
                        Protocol Guide
                      </Badge>
                      <h3 className="text-2xl font-bold text-white mt-2">30-Day Longevity Protocol</h3>
                    </div>
                  </div>
                  <p className="text-zinc-300 mb-6">
                    Transform your health in 30 days with our comprehensive longevity protocol. 
                    Based on the best practices from Blue Zones and leading longevity researchers.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <FileText className="h-4 w-4" />
                      <span>120 pages</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Clock className="h-4 w-4" />
                      <span>Daily protocols</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Check className="h-4 w-4" />
                      <span>Printable templates</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white font-medium">4.9</span>
                    <span className="text-zinc-500">({156} reviews)</span>
                  </div>
                </div>
                <div>
                  <div className="bg-zinc-800/50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-white mb-4">What's Inside:</h4>
                    <ul className="space-y-2 mb-6">
                      {[
                        "Daily morning & evening routines",
                        "Supplement schedule & dosages",
                        "Exercise program (no gym needed)",
                        "Meal planning guide",
                        "Progress tracking templates",
                        "30-day checklist",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-zinc-300">
                          <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mb-6">
                    <p className="text-zinc-300 italic mb-2">"{guides[0].testimonial}"</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-zinc-500 line-through">${guides[0].originalPrice}</p>
                      <p className="text-3xl font-bold text-white">${guides[0].price}</p>
                    </div>
                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8">
                      <Download className="h-4 w-4 mr-2" />
                      Download Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Guides Grid */}
        <h2 className="text-2xl font-bold text-white mb-6">All Guides & Downloads</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {guides.slice(1).map((guide) => (
            <Card key={guide.id} className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/30 transition-all">
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                    {guide.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white">{guide.rating}</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-zinc-800/50 w-fit mb-3">
                  <guide.icon className="h-6 w-6 text-emerald-400" />
                </div>
                <CardTitle className="text-white text-lg">{guide.title}</CardTitle>
                <CardDescription className="text-zinc-400">{guide.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <span>{guide.format}</span>
                  <span>{guide.pages} pages</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-500 line-through">${guide.originalPrice}</p>
                    <p className="text-xl font-bold text-white">${guide.price}</p>
                  </div>
                  <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bundle Offer */}
        <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-zinc-800">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Get All Guides Bundle</h2>
            <p className="text-zinc-400 mb-6">
              Complete longevity toolkit at 40% off individual prices
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-3xl font-bold text-white">$79</span>
              <span className="text-xl text-zinc-500 line-through">$199</span>
              <Badge className="bg-emerald-500">Save 60%</Badge>
            </div>
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8">
              Get Complete Bundle <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-white mb-2">How do I access my download?</h3>
                <p className="text-zinc-400 text-sm">
                  Immediately after purchase, you'll receive an email with a download link. 
                  You can also access your purchases from your account page.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-white mb-2">Can I print the guides?</h3>
                <p className="text-zinc-400 text-sm">
                  Yes! All guides are PDF format and fully printable. We recommend printing 
                  the daily checklists and tracking templates.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-white mb-2">What's your refund policy?</h3>
                <p className="text-zinc-400 text-sm">
                  30-day money-back guarantee. If you're not satisfied, email us and 
                  we'll refund your purchase, no questions asked.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-white mb-2">Do you update the guides?</h3>
                <p className="text-zinc-400 text-sm">
                  Yes! purchasers get free updates for life. When we update a guide, 
                  you'll receive an email with the new version.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
