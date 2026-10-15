"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const links = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "mailto:jn.artwerk3d@gmail.com" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 md:px-12 lg:px-20">
        <Link
          href="/"
          className="text-2xl font-bold tracking-[-0.12em] text-white"
        >
          AR<span className="text-white/50">.</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/65 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          variant="outline"
          className="hidden h-10 rounded-full border-white/25 bg-white/10 px-6 text-white backdrop-blur-md hover:bg-white hover:text-black md:inline-flex"
          render={<a href="mailto:jn.artwerk3d@gmail.com" />}
        >
          Let's Talk
          <ArrowUpRight className="ml-1 size-4" />
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white md:hidden"
                aria-label="Open navigation"
              />
            }
          >
            <Menu className="size-6" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="flex w-[85vw] max-w-sm flex-col border-white/10 bg-[#101311] p-8 text-white"
          >
            <SheetHeader className="p-0">
              <SheetTitle className="text-left text-2xl font-bold tracking-tight text-white">
                AR.
              </SheetTitle>
            </SheetHeader>

            <nav className="mt-16 flex flex-col gap-8">
              {links.map((link, index) => (
                <SheetClose
                  key={link.label}
                  render={<a href={link.href} />}
                  className="flex items-center justify-between border-b border-white/10 pb-5 text-2xl font-medium text-white transition-colors hover:text-white/60"
                >
                  <span>{link.label}</span>
                  <span className="text-sm text-white/35">0{index + 1}</span>
                </SheetClose>
              ))}
            </nav>

            <p className="mt-auto text-xs tracking-widest text-white/40 uppercase">
              3D Artist & Digital Creator
            </p>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
