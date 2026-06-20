import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './HeroContent.css'

export default function HeroContent() {
  const badgeRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(badgeRef.current, {
      backgroundPosition: '200% center',
      duration: 4,
      ease: 'none',
      repeat: -1,
    })
  })

  return (
    <div className="hero__content">
      <div ref={badgeRef} className="hero-badge">
        <span className="hero-badge__dot" />
        Available for freelance &amp; full-time
      </div>

      <h1 className="hero-title">
        <span className="hero-title__line">Crafting</span>
        <span className="hero-title__line hero-title__gradient">
          Immersive
        </span>
        <span className="hero-title__line">Digital Experiences</span>
      </h1>

      <p className="hero-subtitle">
        Frontend engineer specializing in WebGL, motion design, and
        pixel-perfect interfaces. Turning complex ideas into fluid,
        interactive realities.
      </p>

      <div className="hero-actions">
        <button type="button" className="hero-btn hero-btn--primary">
          View Projects
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" className="hero-btn hero-btn--ghost">
          Get in Touch
        </button>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat__value">50+</span>
          <span className="hero-stat__label">Projects shipped</span>
        </div>
        <div className="hero-stat__divider" />
        <div className="hero-stat">
          <span className="hero-stat__value">6yr</span>
          <span className="hero-stat__label">Experience</span>
        </div>
        <div className="hero-stat__divider" />
        <div className="hero-stat">
          <span className="hero-stat__value">12</span>
          <span className="hero-stat__label">Awwwards</span>
        </div>
      </div>
    </div>
  )
}
