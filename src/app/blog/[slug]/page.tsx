import { getContent, getAllSlugs } from "@/lib/content"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs('blog')
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getContent('blog', slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-emerald-400">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-emerald-400">Blog</Link>
          <span>/</span>
          <span className="text-zinc-300">{post.title}</span>
        </nav>

        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
              {post.category}
            </Badge>
            <Badge variant="outline" className="border-zinc-700 text-zinc-400">
              {post.readTime} read
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-zinc-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-invert prose-zinc max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  )
}
