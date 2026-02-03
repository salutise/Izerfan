import { Monitor, RefreshCw, ShoppingCart, Database, Shield, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Monitor,
    title: "IT Consulting",
    description:
      "Strategic technology advisory services that align your IT infrastructure with business objectives. We assess, plan, and guide your technology investments for maximum ROI.",
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    description:
      "End-to-end transformation programs that modernize your operations, automate workflows, and enable data-driven decision making across your organization.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Scalable commerce platforms tailored to B2B and B2C requirements. From marketplace integration to custom storefronts, we build systems that grow with your business.",
  },
  {
    icon: Database,
    title: "Information Systems",
    description:
      "Design and implementation of enterprise information systems including ERP integration, data architecture, and business intelligence solutions.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Comprehensive security assessments and compliance frameworks. We help you protect critical assets while meeting regulatory requirements.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights. Our analytics solutions help you understand customer behavior, optimize operations, and identify growth opportunities.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Comprehensive Technology Services
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-pretty">
            We deliver integrated solutions that address the full spectrum of enterprise 
            technology needs, from strategy through implementation and ongoing optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border bg-background hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
