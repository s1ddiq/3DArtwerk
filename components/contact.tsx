"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowUpRight, ArrowUp, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const email = "hello@example.com"

const socialLinks = [
  {
    label: "ArtStation",
    href: "https://www.artstation.com/",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
]

export function Contact() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 text-white"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-zinc-900/50 via-zinc-950 to-zinc-950" />

      {/* Main contact content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:px-12 md:pt-40 md:pb-36 lg:px-20">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12 flex items-center justify-between gap-4">
            <p className="text-xs tracking-widest text-white/40 uppercase">
              Have something in mind?
            </p>

            <span className="hidden text-xs tracking-widest text-white/35 uppercase sm:block">
              03 / Contact
            </span>
          </div>

          {/* Headline */}
          <h2 className="max-w-7xl text-5xl leading-tight font-medium tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Let's create
            <br />
            something
            <br />
            <span className="text-white/35">extraordinary.</span>
          </h2>

          <div className="mt-12 flex flex-col items-start justify-between gap-8 md:mt-16 md:flex-row md:items-end">
            <p className="max-w-md text-sm leading-relaxed text-white/50 md:text-base">
              Have a project, an idea, or just want to say hello? I'm always
              open to new opportunities and creative collaborations.
            </p>

            <motion.div
              whileHover={reducedMotion ? undefined : { scale: 1.05 }}
              whileTap={reducedMotion ? undefined : { scale: 0.97 }}
            >
              <Button
                className="group h-14 rounded-full bg-white px-8 text-sm font-medium text-black hover:bg-zinc-200"
                render={<a href={`mailto:${email}`} />}
              >
                <Mail className="mr-2 size-4" />
                Get in Touch
                <ArrowUpRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:px-20">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
            {/* Brand */}
            <div>
              <a
                href="#home"
                className="text-2xl font-bold tracking-tight text-white"
              >
                AR<span className="text-white/40">.</span>
              </a>

              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/40">
                Creating worlds, shaping ideas, and bringing imagination to life
                through 3D.
              </p>
            </div>

            {/* Social links */}
            <div>
              <p className="mb-5 text-xs tracking-widest text-white/35 uppercase">
                Elsewhere
              </p>

              <div className="flex flex-wrap gap-x-7 gap-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            <p className="text-xs text-white/35">
              © {new Date().getFullYear()} AR Studio. All rights reserved.
            </p>

            <a
              href="#home"
              className="group flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-white"
            >
              Back to top
              <ArrowUp className="size-4 transition-transform group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}
