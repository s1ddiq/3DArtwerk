"use client"

import { motion, useReducedMotion } from "motion/react"
import {
  ArrowUpRight,
  Box,
  Building2,
  Layers3,
  Clapperboard,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const specialties = [
  { title: "Architecture", icon: Building2 },
  { title: "3D Modeling", icon: Box },
  { title: "Interior Design", icon: Layers3 },
  { title: "Animation", icon: Clapperboard },
]

export function About() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="about"
      className="bg-linear-to-t from-zinc-900/50 via-zinc-950 to-zinc-950 px-6 py-20 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-3 text-xs tracking-widest text-white/40 uppercase">
            The artist behind the work
          </p>

          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
            About <span className="text-white/40">Me.</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <motion.h3
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl leading-snug font-medium tracking-tight md:text-3xl"
          >
            Turning imagination into
            <span className="text-white/40"> something you can see.</span>
          </motion.h3>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm leading-relaxed text-white/55">
              I'm a 3D artist passionate about creating detailed environments,
              realistic interiors, and compelling digital experiences. I focus
              on lighting, materials, and composition to bring ideas to life.
            </p>

            <Button
              variant="outline"
              className="group mt-6 h-10 rounded-full border-white/25 bg-transparent px-5 text-white hover:bg-white hover:text-black"
              render={<a href="#contact" />}
            >
              Let's Work Together
              <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="mb-6 text-xs tracking-widest text-white/40 uppercase">
            What I Do
          </p>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {specialties.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={reducedMotion ? false : { opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex flex-col gap-4 border border-white/10 p-4 transition-colors hover:bg-white/5"
                >
                  <Icon className="size-5 text-white/50" strokeWidth={1.5} />

                  <h4 className="text-sm font-medium">{item.title}</h4>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
