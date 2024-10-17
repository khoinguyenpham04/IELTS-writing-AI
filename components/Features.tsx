"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Target, Clock, BarChart } from "lucide-react"
import Image from 'next/image'

const features = [
  {
    icon: Brain,
    title: "AI-Powered Feedback",
    description: "Get instant, precise feedback on your essays with our advanced AI, helping you improve faster."
  },
  {
    icon: Target,
    title: "Targeted Improvement",
    description: "Identify and focus on specific areas for improvement with personalized suggestions and exercises."
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Enhance your practice efficiency with timed writing sessions and quick, actionable feedback."
  },
  {
    icon: BarChart,
    title: "Track Progress",
    description: "Easily monitor your progress over time with detailed analytics and comprehensive reports."
  }
]

export default function Features() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" id="features">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          fill
          style={{objectFit: "cover"}}
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Why Choose Our IELTS Writing AI Helper?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fadeInUp" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-muted-foreground mb-4">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}