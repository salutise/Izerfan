import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Enterprise-grade solutions",
  "Proven methodology",
  "Long-term partnership approach",
]

export function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
          <defs>
            <pattern id="circuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="currentColor" />
              <line x1="25" y1="0" x2="25" y2="23" stroke="currentColor" strokeWidth="1" />
              <line x1="25" y1="27" x2="25" y2="50" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="25" x2="23" y2="25" stroke="currentColor" strokeWidth="1" />
              <line x1="27" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[600px]">
          {/* Left Section - Text Content */}
          <div className="flex-1 flex flex-col justify-center py-8 lg:py-0 lg:pr-12 xl:pr-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              IT Consulting & Digital Transformation
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Engineering Your Digital Future
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
              We partner with mid-size and large enterprises to design, build, and optimize 
              information systems that drive measurable business outcomes. From strategic 
              consulting to full-scale digital transformation.
            </p>

            <ul className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">Explore Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px bg-border self-stretch" />

          {/* Right Section - Logo */}
          <div className="flex-1 flex items-center justify-center py-8 lg:py-0 lg:pl-12 xl:pl-16">
            <div className="relative p-8 lg:p-12 bg-card rounded-2xl shadow-xl border border-border">
              <Image
                src="/images/logo-izerfan-technologies-defenitif.png"
                alt="Izerfan Technologies"
                width={400}
                height={400}
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
