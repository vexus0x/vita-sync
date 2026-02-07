import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, BookOpen, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white">About Blueprint</h1>
          <p className="mt-6 text-xl text-zinc-400">
            Making the science of longevity accessible, actionable, and achievable for everyone.
          </p>
        </div>

        {/* Values */}
        <div className="grid gap-8 md:grid-cols-4 mb-16">
          <div className="text-center">
            <Target className="h-10 w-10 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white">Evidence-Based</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Every protocol is backed by peer-reviewed research.
            </p>
          </div>
          <div className="text-center">
            <BookOpen className="h-10 w-10 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white">Science First</h3>
            <p className="mt-2 text-sm text-zinc-400">
              We explain the "why" behind every recommendation.
            </p>
          </div>
          <div className="text-center">
            <Sparkles className="h-10 w-10 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white">Actionable</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Practical steps you can implement today.
            </p>
          </div>
          <div className="text-center">
            <Users className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white">Community-Driven</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Learn from others on the same journey.
            </p>
          </div>
        </div>

        {/* Inspiration */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Our Inspiration</CardTitle>
              <CardDescription className="text-zinc-400">
                Blueprint draws inspiration from pioneers like Bryan Johnson and the Blue Zone researchers,
                but our voice and approach are entirely our own.
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p className="text-zinc-300">
                We've studied the protocols of the world's leading biohackers and longevity researchers,
                distilling their approaches into accessible, actionable guidance. We believe that longevity
                shouldn't require millions of dollars or a team of doctors — it should be available to everyone.
              </p>
              <p className="text-zinc-300 mt-4">
                Our mission is to bridge the gap between cutting-edge research and everyday application,
                empowering you to take control of your healthspan and lifespan.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team/CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white">Join the Journey</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Subscribe to our newsletter for weekly protocols, research updates, and community insights.
          </p>
          <div className="mt-6">
            <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 text-base">
              Subscribe to Newsletter
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
