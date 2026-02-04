import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  services: [
    { label: "IT Consulting", href: "#services" },
    { label: "Digital Transformation", href: "#services" },
    { label: "E-Commerce Solutions", href: "#services" },
    { label: "Data Analytics", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-izerfan-technologies-defenitif.png"
              alt="Izerfan Technologies"
              width={200}
              height={60}
              unoptimized
            />
            <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed">
              Engineering digital futures for mid-size and large enterprises through 
              strategic IT consulting and transformation services.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="not-italic text-sm text-primary-foreground/70 space-y-2">
              <p>C1 - F1 - SF3520</p>
              <p>Ajman Free Zone</p>
              <p>United Arab Emirates</p>
              <p className="pt-2">
                <a
                  href="mailto:contact@izerfan.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  contact@izerfan.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+971504028935"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +971 50 402 8935
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            2026 Izerfan Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
