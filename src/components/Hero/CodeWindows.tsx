import { useRef, type CSSProperties } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './CodeWindows.css'

interface CodeWindow {
  id: string
  title: string
  filename: string
  position: { top?: string; bottom?: string; left?: string; right?: string }
  rotation: number
  delay: number
  lines: { tokens: { text: string; type: string }[] }[]
}

const CODE_WINDOWS: CodeWindow[] = [
  {
    id: 'scene',
    title: 'HeroScene.tsx',
    filename: 'src/components/HeroScene.tsx',
    position: { top: '12%', left: '4%' },
    rotation: -4,
    delay: 0.6,
    lines: [
      {
        tokens: [
          { text: 'export', type: 'keyword' },
          { text: ' function ', type: 'plain' },
          { text: 'HeroScene', type: 'function' },
          { text: '() {', type: 'plain' },
        ],
      },
      {
        tokens: [
          { text: '  return', type: 'keyword' },
          { text: ' (', type: 'plain' },
        ],
      },
      {
        tokens: [
          { text: '    <', type: 'plain' },
          { text: 'Canvas', type: 'component' },
          { text: ' camera', type: 'prop' },
          { text: '={{ fov: ', type: 'plain' },
          { text: '50', type: 'number' },
          { text: ' }}>', type: 'plain' },
        ],
      },
      {
        tokens: [
          { text: '      <', type: 'plain' },
          { text: 'FloatingSpheres', type: 'component' },
          { text: ' />', type: 'plain' },
        ],
      },
      {
        tokens: [
          { text: '      <', type: 'plain' },
          { text: 'Environment', type: 'component' },
          { text: ' preset', type: 'prop' },
          { text: '="night"', type: 'string' },
          { text: ' />', type: 'plain' },
        ],
      },
      {
        tokens: [{ text: '    </Canvas>', type: 'plain' }],
      },
      {
        tokens: [{ text: '  )', type: 'plain' }],
      },
      {
        tokens: [{ text: '}', type: 'plain' }],
      },
    ],
  },
  {
    id: 'gsap',
    title: 'animations.ts',
    filename: 'src/lib/animations.ts',
    position: { top: '18%', right: '3%' },
    rotation: 3,
    delay: 0.9,
    lines: [
      {
        tokens: [
          { text: 'gsap', type: 'function' },
          { text: '.', type: 'plain' },
          { text: 'timeline', type: 'method' },
          { text: '({', type: 'plain' },
        ],
      },
      {
        tokens: [
          { text: '  defaults', type: 'prop' },
          { text: ': { ', type: 'plain' },
          { text: 'ease', type: 'prop' },
          { text: ': ', type: 'plain' },
          { text: "'power3.out'", type: 'string' },
          { text: ' }', type: 'plain' },
        ],
      },
      {
        tokens: [{ text: '})', type: 'plain' }],
      },
      {
        tokens: [
          { text: '  .', type: 'plain' },
          { text: 'from', type: 'method' },
          { text: "('.sphere', {", type: 'plain' },
        ],
      },
      {
        tokens: [
          { text: '    scale', type: 'prop' },
          { text: ': ', type: 'plain' },
          { text: '0', type: 'number' },
          { text: ',', type: 'plain' },
        ],
      },
      {
        tokens: [
          { text: '    opacity', type: 'prop' },
          { text: ': ', type: 'plain' },
          { text: '0', type: 'number' },
          { text: ',', type: 'plain' },
        ],
      },
      {
        tokens: [
          { text: '    stagger', type: 'prop' },
          { text: ': ', type: 'plain' },
          { text: '0.08', type: 'number' },
          { text: ',', type: 'plain' },
        ],
      },
      {
        tokens: [{ text: '  })', type: 'plain' }],
      },
    ],
  },
  {
    id: 'shader',
    title: 'fragment.glsl',
    filename: 'src/shaders/fragment.glsl',
    position: { bottom: '14%', left: '6%' },
    rotation: 2,
    delay: 1.2,
    lines: [
      {
        tokens: [
          { text: 'uniform', type: 'keyword' },
          { text: ' vec3 ', type: 'plain' },
          { text: 'uColor', type: 'variable' },
          { text: ';', type: 'plain' },
        ],
      },
      {
        tokens: [
          { text: 'varying', type: 'keyword' },
          { text: ' vec2 ', type: 'plain' },
          { text: 'vUv', type: 'variable' },
          { text: ';', type: 'plain' },
        ],
      },
      {
        tokens: [{ text: '', type: 'plain' }],
      },
      {
        tokens: [
          { text: 'void', type: 'keyword' },
          { text: ' ', type: 'plain' },
          { text: 'main', type: 'function' },
          { text: '() {', type: 'plain' },
        ],
      },
      {
        tokens: [
          { text: '  float ', type: 'plain' },
          { text: 'glow', type: 'variable' },
          { text: ' = ', type: 'plain' },
          { text: 'sin', type: 'function' },
          { text: '(vUv.y * ', type: 'plain' },
          { text: '10.0', type: 'number' },
          { text: ');', type: 'plain' },
        ],
      },
      {
        tokens: [
          { text: '  gl_FragColor', type: 'variable' },
          { text: ' = vec4(', type: 'plain' },
        ],
      },
      {
        tokens: [
          { text: '    uColor * glow, ', type: 'plain' },
          { text: '0.8', type: 'number' },
        ],
      },
      {
        tokens: [{ text: '  );', type: 'plain' }],
      },
      {
        tokens: [{ text: '}', type: 'plain' }],
      },
    ],
  },
  {
    id: 'terminal',
    title: 'Terminal',
    filename: 'nexus — zsh',
    position: { bottom: '18%', right: '5%' },
    rotation: -2,
    delay: 1.5,
    lines: [
      {
        tokens: [
          { text: '$ ', type: 'prompt' },
          { text: 'npm run dev', type: 'command' },
        ],
      },
      {
        tokens: [
          { text: '  VITE ', type: 'plain' },
          { text: 'v6.0.0', type: 'string' },
          { text: '  ready in ', type: 'plain' },
          { text: '312ms', type: 'number' },
        ],
      },
      {
        tokens: [{ text: '', type: 'plain' }],
      },
      {
        tokens: [
          { text: '  ➜  Local:   ', type: 'plain' },
          { text: 'http://localhost:5173/', type: 'string' },
        ],
      },
      {
        tokens: [
          { text: '  ➜  ', type: 'plain' },
          { text: 'Three.js', type: 'component' },
          { text: ' r', type: 'plain' },
          { text: '170', type: 'number' },
          { text: ' loaded', type: 'plain' },
        ],
      },
      {
        tokens: [
          { text: '  ➜  ', type: 'plain' },
          { text: 'GSAP', type: 'component' },
          { text: ' animations active', type: 'plain' },
        ],
      },
    ],
  },
]

function CodeLine({ tokens }: { tokens: { text: string; type: string }[] }) {
  return (
    <div className="code-line">
      {tokens.map((token, i) => (
        <span key={i} className={`code-token code-token--${token.type}`}>
          {token.text}
        </span>
      ))}
    </div>
  )
}

function CodeWindowPanel({ window: win }: { window: CodeWindow }) {
  const panelRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const panel = panelRef.current
      if (!panel) return

      gsap.fromTo(
        panel,
        {
          opacity: 0,
          y: 40,
          rotateX: 15,
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          delay: win.delay,
          ease: 'power3.out',
        },
      )

      gsap.to(panel, {
        y: '+=8',
        duration: 3 + Math.random() * 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: win.delay + 1.5,
      })
    },
    { scope: panelRef },
  )

  return (
    <div
      ref={panelRef}
      className={`code-window code-window--${win.id}`}
      style={{
        ...win.position,
        '--rotation': `${win.rotation}deg`,
      } as CSSProperties}
    >
      <div className="code-window__chrome">
        <div className="code-window__dots">
          <span className="code-window__dot code-window__dot--red" />
          <span className="code-window__dot code-window__dot--yellow" />
          <span className="code-window__dot code-window__dot--green" />
        </div>
        <span className="code-window__title">{win.title}</span>
        <span className="code-window__filename">{win.filename}</span>
      </div>
      <div className="code-window__body">
        {win.lines.map((line, i) => (
          <CodeLine key={i} tokens={line.tokens} />
        ))}
      </div>
    </div>
  )
}

export default function CodeWindows() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const handleMouseMove = (e: MouseEvent) => {
        const panels = containerRef.current?.querySelectorAll('.code-window')
        if (!panels) return

        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2
        const offsetX = (e.clientX - centerX) / centerX
        const offsetY = (e.clientY - centerY) / centerY

        panels.forEach((panel, i) => {
          const depth = 1 + i * 0.3
          gsap.to(panel, {
            x: offsetX * 12 * depth,
            y: offsetY * 8 * depth,
            duration: 0.8,
            ease: 'power2.out',
          })
        })
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className="code-windows" aria-hidden="true">
      {CODE_WINDOWS.map((win) => (
        <CodeWindowPanel key={win.id} window={win} />
      ))}
    </div>
  )
}
