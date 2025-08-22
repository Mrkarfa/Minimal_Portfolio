import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Resume from './components/resume.jsx'
import Uses from './components/uses.jsx'
import Contact from './components/contact.jsx'

function App() {
  const titleRef = useRef(null)
  const waveRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
    tl.from(titleRef.current?.children || [], { y: 20, opacity: 0, stagger: 0.08, duration: 0.6 })

    // Animate the wavy divider drawing in
    const path = waveRef.current
    if (path) {
      const length = path.getTotalLength()
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
      tl.to(path, { strokeDashoffset: 0, duration: 0.8 }, "<")
    }
  }, [])

  return (
    <main id="home" className="w-full min-h-screen">
      <section className="container-max px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            <span className="block">Hey, I’m <span className="text-amber-400">Souvik Karfa</span>!</span>
          </h1>
          <p className="mt-5 text-white/80 text-sm md:text-base leading-relaxed">
            A freelance full-stack engineer based in Kolkata, West Bengal. I specialize in developing applications using React ecosystem. Currently, I’m leading the front-end team at <a href="#" className="text-amber-300 underline underline-offset-4 hover:text-amber-200">Upwork</a>.
          </p>
          <div className="mt-6">
            <svg width="144" height="16" viewBox="0 0 144 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                ref={waveRef}
                d="M2 8 Q 14 2 26 8 T 50 8 T 74 8 T 98 8 T 122 8 T 142 8"
                stroke="#f4b000"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          <div className="mt-8">
            <h2 className="text-white/70 text-sm font-semibold">Find me on</h2>
            <ul className="mt-8 flex items-center gap-5 text-white/90 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors rounded-full
 border-neutral-400 border-2 p-1.5">Twitter</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors rounded-full
 border-neutral-400 border-2 p-1.5">GitHub</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors rounded-full
 border-neutral-400 border-2 p-1.5">Reddit</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors rounded-full
 border-neutral-400 border-2 p-1.5">LinkedIn</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors rounded-full
 border-neutral-400 border-2 p-1.5">Upwork</a></li>
            </ul>
          </div>

          <div id="contact" className="mt-8">
            <h2 className="text-white/70 text-sm font-semibold">Contact</h2>
            <p className="mt-2 text-white/80 text-sm md:text-base">You can reach me anytime at <a href="mailto:souvikkarfa40227@gmail.com" className="text-amber-300 hover:text-amber-200 underline underline-offset-4">souvikkarfa40227@gmail.com</a></p>
          </div>
        </div>
      </section>
      <section id="resume" className="container-max px-6 md:px-8 py-24">
        <Resume />
      </section>

      <section id="uses" className="container-max px-6 md:px-8 pb-24">
        <Uses />
      </section>

      <section id="contact" className="container-max px-6 md:px-8 pb-24">
        <Contact />
      </section>
    </main>
  );
}

export default App;
