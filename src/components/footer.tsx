import Link from "next/link"
import { Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500" />
              <span className="text-xl font-bold text-white">Blueprint</span>
            </div>
            <p className="text-sm text-zinc-400">
              Science-backed longevity and health optimization, simplified.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/protocols" className="hover:text-emerald-400">Protocols</Link></li>
              <li><Link href="/nutrition" className="hover:text-emerald-400">Nutrition</Link></li>
              <li><Link href="/biohacks" className="hover:text-emerald-400">Biohacks</Link></li>
              <li><Link href="/science" className="hover:text-emerald-400">Science</Link></li>
              <li><Link href="/tools" className="hover:text-emerald-400">Tools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/about" className="hover:text-emerald-400">About</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-400">Blog</Link></li>
              <li><Link href="/newsletter" className="hover:text-emerald-400">Newsletter</Link></li>
              <li><Link href="/community" className="hover:text-emerald-400">Community</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-emerald-400">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-400">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Blueprint. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
