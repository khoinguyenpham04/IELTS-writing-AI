"use client"

import { Button } from "@/components/ui/button"
import { PenTool } from "lucide-react"
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative py-32 px-6 overflow-hidden gradient-bg">
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          fill
          style={{objectFit: "cover"}}
        />
      </div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <PenTool className="w-20 h-20 mx-auto mb-8 text-primary animate-fadeInUp" />
        <h1 className="text-6xl font-bold mb-6 gradient-text animate-fadeInUp animate-delay-100">Elevate Your IELTS Writing Skills with AI</h1>
        <p className="text-xl mb-10 text-muted-foreground animate-fadeInUp animate-delay-200">Get personalized feedback, improve your scores, and boost your confidence with our advanced AI-powered IELTS writing assistant.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fadeInUp animate-delay-300">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">Try for Free</Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">Learn More</Button>
        </div>
      </div>
    </section>
  )
}