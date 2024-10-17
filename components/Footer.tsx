import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-4 gradient-text">IELTS Writing AI Helper</h3>
          <p className="text-muted-foreground">Empowering IELTS test-takers with AI-driven writing assistance.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
            <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
            <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-muted-foreground">
        <p>&copy; 2024 IELTS Writing AI Helper. All rights reserved.</p>
      </div>
    </footer>
  )
}