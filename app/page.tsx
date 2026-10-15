import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SelectedWork } from "@/components/selected-work"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <SelectedWork />
      <About />
      <Contact />
    </main>
  )
}
