"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { PenTool, Menu } from "lucide-react"
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="py-6 px-6 border-b border-border/50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <PenTool className="w-8 h-8 text-primary" />
          <span className="font-bold text-xl gradient-text">IELTS Writing AI</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
            <strong>Features</strong>
          </Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
            <strong>How It Works</strong>
          </Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
            <strong>Pricing</strong>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="hidden md:inline-flex">Sign In</Button>
          <Button variant="outline" className="hidden md:inline-flex">Sign Up</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link href="#features" className="justify-center block text-muted-foreground hover:text-primary transition-colors"><strong>Features</strong></Link>
          <Link href="#how-it-works" className="justify-center block text-muted-foreground hover:text-primary transition-colors"><strong>How It Works</strong></Link>
          <Link href="#pricing" className="justify-center block text-muted-foreground hover:text-primary transition-colors"><strong>Pricing</strong></Link>
          <Button className="w-full">Sign In</Button>
          <Button variant="outline" className="w-full">Sign Up</Button>
          
        </div>
      )}
    </nav>
  )
}

export default Navbar