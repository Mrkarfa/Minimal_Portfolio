import React from 'react'

function Footer() {
  return (
    <footer className="w-full border-t border-white/10">
      <div className="container-max px-6 md:px-8 py-6 flex items-center justify-between text-[13px] text-white/60">
        <p>© 2024 Built with <span className="text-amber-400">♥</span> by Andrei Hudovich</p>
        <ul className="hidden sm:flex items-center gap-6">
          <li><a href="#" className="hover:text-amber-400 transition-colors">Uses</a></li>
          <li><a href="#" className="hover:text-amber-400 transition-colors">Tech Stack</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
