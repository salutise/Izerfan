import Image from "next/image"

const stats = [
  { value: "50+", label: "Enterprise Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              About Izerfan Technologies
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Your Strategic Technology Partner
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Izerfan Technologies was founded on a simple premise: enterprise technology 
                should enable business growth, not hinder it. We bring together deep technical 
                expertise and business acumen to deliver solutions that create lasting value.
              </p>
              <p>
                Our team of consultants, architects, and engineers has worked across industries 
                including financial services, manufacturing, retail, and healthcare. We understand 
                that every organization has unique challenges, and we approach each engagement 
                with fresh perspective and proven methodologies.
              </p>
              <p>
                We measure our success by yours. Our long-term client relationships reflect 
                our commitment to being more than a vendor—we are a partner invested in your 
                continued growth and digital evolution.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-secondary rounded-2xl p-8 lg:p-10">
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/logo-izerfan-technologies-defenitif.png"
                  alt="Izerfan Technologies"
                  width={200}
                  height={120}
                  unoptimized
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
