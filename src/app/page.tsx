import Link from "next/link"
import { ArrowRight, Heart, Brain, Zap, Moon, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterSignup } from "@/components/newsletter"

const features = [
  {
    icon: Heart,
    title: "Cardio Health",
    description: "Optimize your heart with Zone 2 training and tracking",
  },
  {
    icon: Brain,
    title: "Cognitive Performance",
    description: "Boost brain health with evidence-based protocols",
  },
  {
    icon: Zap,
    title: "Energy & Metabolism",
    description: "Mitochondrial health and metabolic optimization",
  },
  {
    icon: Moon,
    title: "Sleep Quality",
    description: "Master your circadian rhythm for optimal recovery",
  },
  {
    icon: Activity,
    title: "Biomarkers",
    description: "Track and optimize your key health metrics",
  },
]

const featuredProtocols = [
  {
    title: "Morning Protocol",
    description: "Start your day with science-backed habits",
    time: "15 min",
    category: "Routine",
  },
  {
    title: "Zone 2 Training",
    description: "Cardio at the optimal fat-burning intensity",
    time: "45 min",
    category: "Exercise",
  },
  {
    title: "Sleep Stack",
    description: "Evening routine for deep, restorative sleep",
    time: "30 min",
    category: "Recovery",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-black to-cyan-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Live Longer. Live Better.
            </h1>
            <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
              Science-backed longevity and health optimization. Protocols inspired by the world's leading biohackers, distilled into actionable habits.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/protocols">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  Explore Protocols <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/tools">
                <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                  Try Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Optimize Every Dimension</h2>
            <p className="mt-4 text-zinc-400">Key areas for maximizing healthspan and lifespan</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-zinc-900/50 border-zinc-800">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-emerald-400 mb-2" />
                  <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Protocols Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white">Featured Protocols</h2>
              <p className="mt-2 text-zinc-400">Actionable routines to improve your daily life</p>
            </div>
            <Link href="/protocols">
              <Button variant="ghost" className="text-emerald-400 hover:text-emerald-300">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProtocols.map((protocol) => (
              <Card key={protocol.title} className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">{protocol.category}</span>
                      <CardTitle className="text-white mt-2">{protocol.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-zinc-400">{protocol.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <Activity className="h-4 w-4" />
                    <span>{protocol.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Start Your Longevity Journey Today</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Explore our science-backed protocols, tools, and resources to optimize your health and extend your healthspan.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/protocols">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Browse Protocols
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
