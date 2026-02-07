"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Check, ArrowRight, Loader2 } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setStatus("success")
    setEmail("")
  }

  if (status === "success") {
    return (
      <Card className="bg-gradient-to-br from-emerald-900/30 to-zinc-900/30 border-emerald-500/30">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 mb-4">
              <Check className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">You're subscribed!</h3>
            <p className="text-zinc-400">
              Check your inbox for a welcome email. We'll send you weekly protocols, research updates, and tips.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-zinc-900/50 border-zinc-800">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Mail className="h-5 w-5 text-emerald-400" />
          Join the VitaSync Newsletter
        </CardTitle>
        <CardDescription className="text-zinc-400">
          Get weekly longevity protocols, research updates, and actionable health tips delivered to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
              required
            />
            <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white" disabled={status === "loading"}>
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
          <p className="text-xs text-zinc-500">
            No spam, ever. Unsubscribe at any time.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
