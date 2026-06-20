import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import HeroScene from './HeroScene.tsx'
import CodeWindows from './CodeWindows.tsx'
import HeroContent from './HeroContent.tsx'
import './Hero.css'

gsap.registerPlugin(useGSAP)

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero__grid', {
        opacity: 0,
        duration: 2,
      })
        .from(
          '.hero__vignette',
          { opacity: 0, duration: 1.2 },
          0,
        )
        .from(
          '.hero__content > *',
          {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
          },
          0.3,
        )
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__vignette" aria-hidden="true" />

      <div className="hero__canvas">
        <HeroScene />
      </div>

      <CodeWindows />
      <HeroContent />

      <nav className="hero__nav">
        <span className="hero__logo">nexus</span>
        <div className="hero__nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
