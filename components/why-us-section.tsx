import { Target, Users, Lightbulb, Clock, Award } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "Results-Driven Approach",
    description:
      "Every engagement starts with clearly defined success metrics. We focus on outcomes that matter to your business, not just technical deliverables.",
  },
  {
    icon: Users,
    title: "Senior-Level Engagement",
    description:
      "Your projects are led by experienced consultants who bring decades of enterprise experience. No hand-offs to junior resources mid-project.",
  },
  {
    icon: Lightbulb,
    title: "Technology Agnostic",
    description:
      "We recommend solutions based on your specific needs, not vendor partnerships. Our independence ensures you get the right technology for your context.",
  },
  {
    icon: Clock,
    title: "Rapid Time-to-Value",
    description:
      "Our proven delivery frameworks accelerate implementation without compromising quality. We get you operational faster with less risk.",
  },
  {
    icon: Award,
    title: "Knowledge Transfer",
    description:
      "We build your internal capabilities alongside delivering solutions. Your team gains the skills to maintain and evolve what we build together.",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            The Izerfan Difference
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg text-pretty">
            We combine strategic thinking with technical excellence to deliver 
            transformative results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`${index === 4 ? "lg:col-start-2" : ""}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
