"use client"

import { motion } from "motion/react"
import { ArrowDownRight, ArrowUpRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="min-h-svh bg-[#0a0c0b] text-white">
      <section className="relative flex min-h-svh flex-col overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />

        {/* Cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        {/* Navigation */}
        <header className="relative z-10 mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-7 md:px-12 lg:px-20">
          <a href="/" className="text-2xl font-bold tracking-[-0.12em]">
            AR<span className="text-white/60">.</span>
          </a>

          <nav className="hidden items-center gap-10 text-sm text-white/65 md:flex">
            <a
              href="/"
              className="text-white transition-colors hover:text-white"
            >
              Home
            </a>
            <a href="#work" className="transition-colors hover:text-white">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
            <a
              href="mailto:hello@example.com"
              className="transition-colors hover:text-white"
            >
              Contact
            </a>
          </nav>

          <Button
            variant="outline"
            className="hidden rounded-full border-white/25 bg-black/20 px-6 text-white backdrop-blur-md hover:bg-white hover:text-black md:inline-flex"
            render={<a href="mailto:hello@example.com" />}
          >
            Let's Talk <ArrowUpRight className="ml-1 size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </Button>
        </header>

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-6 pt-16 pb-24 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="max-w-[620px]"
          >
            <p className="mb-6 text-xs font-medium tracking-[0.15em] text-white/65 uppercase md:text-xs">
              Artwerk, 3D Artist and Digital Creator
            </p>

            <h1 className="text-[clamp(3.2rem,6vw,6.8rem)] leading-[1.02] font-semibold tracking-[-0.065em]">
              Bringing
              <br />
              Ideas to Life
              <br />
              in 3D<span className="text-white/50">.</span>
            </h1>

            <p className="mt-7 max-w-[410px] text-sm leading-7 text-white/65 md:text-base">
              Creating immersive worlds, detailed 3D models, and captivating
              visuals that turn imagination into reality.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Button
                className="h-12 rounded-full bg-white px-7 text-sm font-medium text-black hover:bg-white/85"
                render={<a href="#work" />}
              >
                View My Work
                <ArrowUpRight className="ml-2 size-4" />
              </Button>

              <a
                href="#about"
                className="px-3 py-3 text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                About Me
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom details */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] items-end justify-between px-6 pb-8 md:px-12 md:pb-12 lg:px-20">
          <div>
            <p className="mb-3 text-xs tracking-[0.15em] text-white/50 uppercase">
              Crafted from scratch
            </p>
            <p className="text-xs text-white/70">Est 2024</p>
          </div>

          <div className="flex items-center gap-3 text-xs text-white/70">
            <span className="hidden tracking-[0.15em] uppercase sm:inline">
              Explore the work
            </span>
            <a
              href="#work"
              aria-label="Scroll to work"
              className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <ArrowDownRight className="size-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
