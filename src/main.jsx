import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Lenis from '@studio-freight/lenis'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>,
)

// Initialize Lenis smooth scrolling
const lenis = new Lenis({
  smoothWheel: true,
  lerp: 0.1,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
