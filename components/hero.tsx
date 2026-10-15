"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const ease = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.35,
    },
  },
}

const reveal = {
  hidden: {
    y: "110%",
    opacity: 0,
    rotateX: -12,
  },
  visible: {
    y: "0%",
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 1.1,
      ease,
    },
  },
}

export function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col overflow-hidden bg-zinc-950 text-white"
    >
      {/* Cinematic background */}
      <motion.div
        initial={reducedMotion ? false : { scale: 1.15, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 2.5,
          ease,
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Cinematic overlays */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/90 via-black/55 to-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30" />

      {/* Subtle background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 1 }}
        className="pointer-events-none absolute inset-0 bg-radial from-white/10 via-transparent to-transparent"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-36 pb-24 md:px-12 lg:px-20">
        <motion.div
          variants={container}
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <div className="mb-6 overflow-hidden">
            <motion.p
              variants={reveal}
              className="text-xs font-medium tracking-widest text-white/65 uppercase"
            >
              3D Artist & Digital Creator
            </motion.p>
          </div>

          {/* Animated headline */}
          <h1 className="text-5xl leading-tight font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            {["Bringing", "Ideas to Life", "in 3D."].map((line, index) => (
              <span key={line} className="block overflow-hidden pb-2">
                <motion.span variants={reveal} className="block origin-bottom">
                  {index === 2 ? (
                    <>
                      in 3D
                      <span className="text-white/50">.</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                  ease,
                },
              },
            }}
            className="mt-7 max-w-md text-sm leading-relaxed text-white/65 md:text-base"
          >
            Creating immersive worlds, detailed 3D models, and captivating
            visuals that turn imagination into reality.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease,
                },
              },
            }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <Button
              className="group h-12 rounded-full bg-white px-7 text-sm font-medium text-black transition-all duration-300 hover:bg-white/85"
              render={<a href="#work" />}
            >
              View My Work
              <ArrowUpRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>

            <a
              href="#about"
              className="group flex items-center gap-2 px-3 py-3 text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              About Me
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom details */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: reducedMotion ? 0 : 1.5,
          ease,
        }}
        className="relative z-10 mx-auto flex w-full max-w-7xl items-end justify-between px-6 pb-8 md:px-12 md:pb-12 lg:px-20"
      >
        <div>
          <p className="mb-3 text-xs tracking-widest text-white/50 uppercase">
            Crafted with passion
          </p>

          <p className="text-xs text-white/70">Art. Detail. Imagination.</p>
        </div>

        {/* Floating scroll indicator */}
        <motion.a
          href="#work"
          aria-label="Explore selected work"
          animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={reducedMotion ? undefined : { scale: 1.1 }}
          className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20"
        >
          <ArrowDownRight className="size-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
