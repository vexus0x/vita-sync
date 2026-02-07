"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { title: "Protocols", href: "/protocols" },
  { title: "Nutrition", href: "/nutrition" },
  { title: "Biohacks", href: "/biohacks" },
  { title: "Science", href: "/science" },
  { title: "Tools", href: "/tools" },
]

export function Navbar() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500" />
          <span className="text-xl font-bold text-white">VitaSync</span>
        </Link>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="text-zinc-400 hover:text-white"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          {/* Mobile Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-zinc-400">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-900 border-zinc-800">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500" />
                  <span className="text-xl font-bold text-white">VitaSync</span>
                </Link>
                
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg text-zinc-300 hover:text-emerald-400 transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
                
                <div className="pt-4 border-t border-zinc-800">
                  <Link href="/about">
                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                      About
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Button className="hidden md:inline-flex bg-emerald-500 hover:bg-emerald-600 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
