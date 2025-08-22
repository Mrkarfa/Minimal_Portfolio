import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Resume() {
  const rootRef = useRef(null)
  const waveRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      // Draw the wavy line
      const path = waveRef.current
      if (path) {
        const length = path.getTotalLength()
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
        tl.to(path, { strokeDashoffset: 0, duration: 0.9 })
      }

      // Fade in blocks on scroll
      gsap.utils.toArray('.resume-fade').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%'
          }
        })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  const skills = [
    'Next.js','React','Typescript','Javascript','Zustand','Redux','Tailwind','shadcn/ui','Radix','Vue','Nuxt','Astro','Node','Bun','Workers','Postgres','MongoDB','Redis','Supabase','Fastify','Hono','Vite','Turborepo','Docker','Git','GitHub','Payload','Sanity','ChatGPT','AG Grid','Mapbox','Figma'
  ]

  const jobs = [
    {
      title: 'Lead Front-end Engineer',
      company: 'Propbar',
      location: 'United Kingdom',
      type: 'Full-Time',
      period: 'Mar 2023 - Present',
      bullets: [
        'Led the front-end work from the project inception.',
        'Maintained a browser extension, widget and web application as a monorepo.',
        'Architected a highly complex real-estate map service.',
        'Implemented a sophisticated data grid of property comparables.'
      ]
    },
    {
      title: 'Senior Front-end Engineer',
      company: 'LolaDB',
      location: 'United States',
      type: 'Contract',
      period: 'Jun 2022 - Feb 2023',
      bullets: [
        'Solved complex problems using the latest Web Standards.',
        'Architected the product’s front-end structure.',
        'Accomplished the development of sophisticated UI components.',
        'Developed the open-source component library.',
        'Crafted responsive marketing landing pages.'
      ]
    },
    {
      title: 'Senior Front-end Engineer',
      company: 'Casogo',
      location: 'United States',
      type: 'Full-Time',
      period: 'Oct 2021 - Apr 2022',
      bullets: [
        'Joined the new company after Nokori’s acquisition.',
        'Helped to adapt and embed the new assets into the franchise ecosystem.',
        'Developed the ground for the new property analytics project.'
      ]
    },
    {
      title: 'Middle Front-end Engineer',
      company: 'Nokori',
      location: 'United States',
      type: 'Full-time',
      period: 'Jul 2020 - Oct 2021',
      bullets: [
        'Primary and sole front‑end developer of the team.',
        'Responsible for development of the single‑page application.',
        'Managed migration from Vue 2 to Vue 3 and Composition API.'
      ]
    },
    {
      title: 'Front-end Developer',
      company: 'Freelance Platforms',
      location: 'Worldwide',
      type: '',
      period: 'Jan 2015 - Jul 2020',
      bullets: [
        'Kick‑started career as a PSD‑to‑HTML developer.',
        'Built and deployed sites for clients worldwide.',
        'Worked hard to meet client deadlines.',
        'Matured as a self‑taught front‑end engineer.'
      ]
    }
  ]

  return (
    <div ref={rootRef} className="text-white">
      <div className="text-left resume-fade">
        <h2 className="text-3xl md:text-4xl font-extrabold">My Resume / CV</h2>
        <p className="mt-3 text-white/75 text-sm md:text-base max-w-2xl">
          I’m a highly skilled full‑stack engineer with more than 2 years of experience in building web applications. On this page, you can learn more about my knowledge stack and my previous work experience.
        </p>
        <div className="mt-5">
          <svg width="144" height="16" viewBox="0 0 144 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={waveRef} d="M2 8 Q 14 2 26 8 T 50 8 T 74 8 T 98 8 T 122 8 T 142 8" stroke="#f4b000" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      </div>

      <div className="mt-10 space-y-6 resume-fade">
        <h3 className="text-xl font-bold">Skills</h3>
        <p className="text-white/70 text-sm md:text-base max-w-2xl">
          Here are the frameworks, libraries, services and runtimes I have experience with. This is not a complete list—I’m constantly gaining new skills, and hence it can be a little bit outdated.
        </p>
        <ul className="flex flex-wrap gap-2 pt-2">
          {skills.map((s) => (
            <li key={s} className="px-3 py-1 rounded-full bg-white/[0.06] text-white/80 text-[12px] border border-white/10">
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 resume-fade">
        <h3 className="text-xl font-bold">Work History</h3>
        <p className="text-white/70 text-sm md:text-base max-w-2xl mt-2">
          Below you will find a summary of my past employment experience. Additionally, if you require, you can <a href="#" className="text-amber-300 underline underline-offset-4">download my resume</a>.
        </p>

        <ol className="relative mt-8 border-l border-white/10">
          {jobs.map((job, idx) => (
            <li key={idx} className="ml-4 pb-10 last:pb-0">
              <span className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_4px_rgba(244,176,0,0.15)]" />
              <div className="flex flex-wrap items-center gap-x-2 text-[15px] font-semibold">
                <span className="text-white">{job.title}</span>
              </div>
              <div className="mt-1 text-[13px] text-white/70">
                <span className="text-amber-300">{job.company}</span>
                <span className="mx-2">•</span>
                <span>{job.location}</span>
                {job.type && (<><span className="mx-2">•</span><span>{job.type}</span></>)}
              </div>
              <div className="mt-1 text-[12px] text-white/50">{job.period}</div>
              <ul className="mt-3 list-disc pl-5 text-[13px] text-white/75 space-y-2">
                {job.bullets.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Resume
