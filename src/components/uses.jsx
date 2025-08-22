import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Uses() {
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

      gsap.utils.toArray('.uses-card').forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          delay: i * 0.05,
          scrollTrigger: { trigger: el, start: 'top 85%' }
        })
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  const section = (title, rows) => (
    <div className="uses-card rounded-lg border border-white/10 bg-white/[0.04] p-5 md:p-6">
      <h4 className="text-white font-semibold">{title}</h4>
      <dl className="mt-3 space-y-1 text-sm">
        {rows.map(([k, v], i) => (
          <div key={i} className="flex flex-wrap gap-x-2">
            <dt className="text-white/70 w-28 shrink-0">{k}</dt>
            <dd className="text-white/85">
              <a href="#" className="text-amber-300 underline underline-offset-4 hover:text-amber-200">{v}</a>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )

  const hardware = section('Hardware', [
    ['Laptop', 'Apple MacBook Pro 13” (2020)'],
    ['Monitor', 'Dell UltraSharp U2723QE'],
    ['Monitor Light', 'BenQ ScreenBar Halo'],
    ['Headphones', 'Sennheiser Momentum M3'],
    ['Speakers', 'Audioengine A1 Wireless'],
    ['Mouse', 'Logitech MX Master 2S']
  ])

  const workspace = section('Workspace', [
    ['Chair', 'Herman Miller Mirra 2'],
    ['Standing Desk', 'Jarvis Bamboo'],
    ['Desk Pad', 'Grovemade Wool Felt'],
    ['Desk Shelf', 'Grovemade Walnut'],
    ['Desk Tray', 'Grovemade Tray']
  ])

  const devtools = section('Dev Tools', [
    ['IDE', 'Visual Studio Code'],
    ['Font', 'CamingoCode'],
    ['Terminal', 'Warp'],
    ['Shell', 'Zsh'],
    ['Browser', 'Chrome'],
    ['Design', 'Figma']
  ])

  const productivity = section('Productivity', [
    ['Notes / Docs', 'Notion'],
    ['Tasks', 'Notion'],
    ['Todo', 'Microsoft To Do'],
    ['Time Tracker', 'Flow'],
    ['Launcher', 'Raycast']
  ])

  return (
    <div ref={rootRef} className="text-white">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold">Uses</h2>
        <p className="mt-3 text-white/75 text-sm md:text-base max-w-2xl">The stuff I use on my day-to-day basis.</p>
        <div className="mt-5">
          <svg width="144" height="16" viewBox="0 0 144 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={waveRef} d="M2 8 Q 14 2 26 8 T 50 8 T 74 8 T 98 8 T 122 8 T 142 8" stroke="#f4b000" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      </div>

      <div className="mt-8 grid gap-5">
        {hardware}
        {workspace}

        <div className="grid md:grid-cols-2 gap-5">
          {devtools}
          {productivity}
        </div>
      </div>

      <p className="text-[12px] text-white/60 mt-6">* Inspired by Wes Bos and his cool project — <a href="#" className="text-amber-300 underline underline-offset-4">https://uses.tech/</a></p>
    </div>
  )
}

export default Uses