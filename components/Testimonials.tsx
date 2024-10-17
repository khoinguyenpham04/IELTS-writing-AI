"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah L.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D&auto=format&fit=crop&w=150&q=80",
    role: "IELTS Student",
    content: "This AI helper improved my writing score from 6.5 to 7.5 in just two weeks! The feedback is so detailed and helpful.",
  },
  {
    name: "Ahmed K.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D&auto=format&fit=crop&w=150&q=80",
    role: "English Teacher",
    content: "I recommend this tool to all my IELTS students. It's like having a personal writing tutor available 24/7.",
  },
  {
    name: "Maria G.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D&auto=format&fit=crop&w=150&q=80",
    role: "Recent IELTS Taker",
    content: "The progress tracking feature motivated me to practice regularly. I achieved my target score thanks to this AI helper!",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 px-8 bg-secondary text-secondary-foreground overflow-hidden"> {/* Increased padding */}
      <Image
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D&auto=format&fit=crop&w=1920&q=80"
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 z-0 opacity-10"
      />
      <div className="max-w-7xl mx-auto relative z-10"> {/* Increased max-width */}
        <h2 className="text-4xl font-bold text-center mb-20">What Our Users Say</h2> {/* Larger text and more margin */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> {/* Increased gap between cards */}
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background/80 backdrop-blur-sm p-6 mb-16"> {/* Added padding and margin */}
              <CardHeader>
                <div className="flex items-center space-x-6"> {/* Increased spacing between avatar and text */}
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle> {/* Slightly larger text */}
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed">{testimonial.content}</p> {/* Improved readability with line-height */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
