import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface SphereConfig {
  position: [number, number, number]
  scale: number
  color: string
  type: 'glass' | 'distort' | 'metal'
  speed: number
  distort?: number
}

const SPHERES: SphereConfig[] = [
  { position: [-3.2, 1.8, -2], scale: 1.4, color: '#00e5ff', type: 'glass', speed: 0.3 },
  { position: [3.5, 0.5, -3], scale: 1.8, color: '#a855f7', type: 'distort', speed: 0.2, distort: 0.35 },
  { position: [-2, -1.5, -1], scale: 0.9, color: '#ec4899', type: 'metal', speed: 0.45 },
  { position: [2.8, 2.2, -4], scale: 1.1, color: '#6366f1', type: 'glass', speed: 0.25 },
  { position: [0.5, -2, -2.5], scale: 1.6, color: '#00e5ff', type: 'distort', speed: 0.15, distort: 0.5 },
  { position: [-4, -0.5, -3.5], scale: 0.7, color: '#f472b6', type: 'metal', speed: 0.5 },
  { position: [4.2, -1.8, -2], scale: 0.85, color: '#818cf8', type: 'glass', speed: 0.35 },
  { position: [-1, 2.5, -5], scale: 2.2, color: '#a855f7', type: 'distort', speed: 0.1, distort: 0.25 },
  { position: [1.5, 0, -6], scale: 3, color: '#00e5ff', type: 'glass', speed: 0.08 },
  { position: [-3, -2.5, -4], scale: 1.3, color: '#ec4899', type: 'metal', speed: 0.3 },
]

function GlassSphere({ config }: { config: SphereConfig }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * config.speed
    ref.current.position.y = config.position[1] + Math.sin(t) * 0.15
    ref.current.rotation.y = t * 0.15
  })

  return (
    <mesh ref={ref} position={config.position} scale={config.scale}>
      <icosahedronGeometry args={[1, 4]} />
      <MeshTransmissionMaterial
        backside
        samples={6}
        resolution={256}
        transmission={0.95}
        roughness={0.05}
        thickness={0.8}
        ior={1.5}
        chromaticAberration={0.06}
        anisotropy={0.3}
        distortion={0.2}
        distortionScale={0.4}
        temporalDistortion={0.1}
        color={config.color}
      />
    </mesh>
  )
}

function DistortSphere({ config }: { config: SphereConfig }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * config.speed
    ref.current.position.y = config.position[1] + Math.sin(t * 1.3) * 0.2
    ref.current.rotation.x = t * 0.1
    ref.current.rotation.z = t * 0.08
  })

  return (
    <mesh ref={ref} position={config.position} scale={config.scale}>
      <icosahedronGeometry args={[1, 5]} />
      <MeshDistortMaterial
        color={config.color}
        emissive={config.color}
        emissiveIntensity={0.15}
        roughness={0.2}
        metalness={0.8}
        distort={config.distort ?? 0.3}
        speed={2}
      />
    </mesh>
  )
}

function MetalSphere({ config }: { config: SphereConfig }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * config.speed
    ref.current.position.y = config.position[1] + Math.cos(t * 0.9) * 0.12
    ref.current.rotation.y = -t * 0.2
  })

  return (
    <mesh ref={ref} position={config.position} scale={config.scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color={config.color}
        emissive={config.color}
        emissiveIntensity={0.08}
        roughness={0.15}
        metalness={0.95}
      />
    </mesh>
  )
}

function Sphere({ config }: { config: SphereConfig }) {
  switch (config.type) {
    case 'glass':
      return <GlassSphere config={config} />
    case 'distort':
      return <DistortSphere config={config} />
    case 'metal':
      return <MetalSphere config={config} />
  }
}

export default function FloatingSpheres() {
  const configs = useMemo(() => SPHERES, [])

  return (
    <group>
      {configs.map((config, i) => (
        <Sphere key={i} config={config} />
      ))}
    </group>
  )
}
