"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

const plans = [
  {
    name: "Free Trial",
    price: "$0.00",
    description: "Perfect for beginners",
    features: [
      "5 essay reviews per month",
      "Basic grammar and vocabulary feedback",
      "24-hour response time"
    ]
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "Ideal for serious learners",
    features: [
      "Unlimited essay reviews",
      "Advanced feedback on coherence and task achievement",
      "1-hour response time",
      "Progress tracking dashboard"
    ]
  },
  {
    name: "Premium",
    price: "$19.99",
    description: "For those aiming for top scores",
    features: [
      "All Pro features",
      "Personalized study plan",
      "Live chat support with IELTS experts",
      "Mock tests with detailed analysis"
    ]
  }
]

export default function Pricing() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" id="pricing">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          fill
          style={{objectFit: "cover"}}
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fadeInUp" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-6 gradient-text">{plan.price}<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}