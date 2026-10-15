"use client"

import Image from "next/image"
import { motion } from "motion/react"

const projects = [
  {
    title: "The Business District",
    category: "Commercial Architecture",
    src: "/work-1.webp",
  },
  {
    title: "Everyday Living",
    category: "Residential Interior",
    src: "/work-2.webp",
  },
  {
    title: "Quiet Comfort",
    category: "Living Room Visualization",
    src: "/work-6.webp",
  },
  {
    title: "The Modern Console",
    category: "Furniture Visualization",
    src: "/work-4.jpg",
  },
  {
    title: "Frames in Motion",
    category: "3D Animation",
    src: "/work-5.mp4",
    video: true,
  },
]

export function SelectedWork() {
  return (
    <section
      id="work"
      className="bg-zinc-950 px-6 py-20 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-xs tracking-widest text-white/40 uppercase">
            Portfolio
          </p>

          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
            Selected <span className="text-white/40">Work.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`group ${project.video ? "sm:col-span-2" : ""}`}
            >
              <div
                className={`relative overflow-hidden bg-zinc-900 ${
                  project.video ? "aspect-video" : "aspect-square"
                }`}
              >
                {project.video ? (
                  <video
                    src={project.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-medium">{project.title}</h3>

                <p className="mt-1 text-xs text-white/40">{project.category}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
