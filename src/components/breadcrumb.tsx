"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumb() {
  const pathname = usePathname()
  
  if (pathname === "/") {
    return null
  }

  const segments = pathname.split("/").filter(Boolean)
  const items: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/")
      const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")
      return { label, href }
    }),
  ]

  return (
    <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
      {items.map((item, index) => (
        <div key={item.href || index} className="flex items-center gap-2">
          {index > 0 && <span>/</span>}
          {item.href ? (
            <Link 
              href={item.href} 
              className="hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-zinc-300">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
