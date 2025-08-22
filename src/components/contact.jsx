import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const rootRef = useRef(null)
  const waveRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const path = waveRef.current
      if (path) {
        const length = path.getTotalLength()
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
        gsap.to(path, { strokeDashoffset: 0, duration: 0.9, ease: 'power3.out' })
      }

      gsap.from('.contact-fade', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: { trigger: rootRef.current, start: 'top 85%' }
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="text-white">
      <div className="contact-fade">
        <h2 className="text-3xl md:text-4xl font-extrabold">Get in touch</h2>
        <p className="mt-3 text-white/75 text-sm md:text-base max-w-2xl">Do you have an exciting project? Let's talk!</p>
        <div className="mt-5">
          <svg width="144" height="16" viewBox="0 0 144 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={waveRef} d="M2 8 Q 14 2 26 8 T 50 8 T 74 8 T 98 8 T 122 8 T 142 8" stroke="#f4b000" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      </div>

      <div className="mt-8 space-y-4 contact-fade">
        <p className="text-white/85 text-sm md:text-base">
          You can reach me out anytime at{' '}
          <a href="mailto:hello@hudovich.dev" className="text-amber-300 underline underline-offset-4 hover:text-amber-200">
            hello@hudovich.dev
          </a>
        </p>
        <p className="text-white/85 text-sm md:text-base">
          As a backup option, you can{' '}
          <a href="#" className="text-amber-300 underline underline-offset-4 hover:text-amber-200">
            DM me on X
          </a>
        </p>
        <p className="text-white/60 text-sm">I usually respond right away on business days.</p>
      </div>
    </div>
  )
}

export default Contact