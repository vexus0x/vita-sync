import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, ArrowRight } from "lucide-react"
import { getSortedContent } from "@/lib/content"

export default function BlogPage() {
  const posts = getSortedContent('blog')

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
            <Link href="/" className="hover:text-emerald-400">Home</Link>
            <span>/</span>
            <span className="text-zinc-300">Blog</span>
          </nav>
          
          <h1 className="text-4xl font-bold text-white">Blog</h1>
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Deep dives into the science of longevity, nutrition, and health optimization.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', 'Science', 'Exercise', 'Nutrition', 'Protocols'].map((category) => (
            <Badge
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              className={category === 'All' ? 'bg-emerald-500 hover:bg-emerald-600' : 'border-zinc-700 text-zinc-400 hover:text-white'}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all h-full group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-zinc-500">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white mt-4 group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-zinc-400 line-clamp-2">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-zinc-500">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}
