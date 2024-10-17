"use client"

import { Button } from "@/components/ui/button"
import { FileText, Edit, MessageSquare } from "lucide-react"
import Image from 'next/image'

const steps = [
  {
    icon: FileText,
    title: "Submit Your Essay",
    description: "Upload your IELTS writing task or start a new one directly in our platform."
  },
  {
    icon: Edit,
    title: "Receive AI Feedback",
    description: "Our AI analyzes your writing and provides detailed feedback on grammar, vocabulary, coherence, and more."
  },
  {
    icon: MessageSquare,
    title: "Improve and Practice",
    description: "Use the AI's suggestions to revise your essay and continue practicing with new prompts."
  }
]

export default function HowItWorks() {
  return (
    <section className="relative py-32 px-6 overflow-hidden gradient-bg" id="how-it-works">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          fill
          style={{objectFit: "cover"}}
        />
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-16 gradient-text">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center animate-fadeInUp" style={{animationDelay: `${index * 100}ms`}}>
              <step.icon className="w-20 h-20 mb-6 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        <Button size="lg" className="mt-16 bg-primary hover:bg-primary/90 text-lg px-8 py-6 animate-fadeInUp animate-delay-300">Get Started Now</Button>
      </div>
    </section>
  )
}