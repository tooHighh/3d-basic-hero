import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'
import FloatingSpheres from './FloatingSpheres'
import ParticleField from './ParticleField'

function MouseParallax() {
  const groupRef = useRef<THREE.Group>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })

  useFrame((state) => {
    if (!groupRef.current) return

    const { x, y } = state.pointer
    target.current.x = x * 0.4
    target.current.y = y * 0.25

    current.current.x += (target.current.x - current.current.x) * 0.04
    current.current.y += (target.current.y - current.current.y) * 0.04

    groupRef.current.rotation.y = current.current.x
    groupRef.current.rotation.x = -current.current.y
  })

  return (
    <group ref={groupRef}>
      <FloatingSpheres />
      <ParticleField />
    </group>
  )
}

function SceneContent() {
  return (
    <>
      <color attach="background" args={['#06060b']} />
      <fog attach="fog" args={['#06060b', 8, 22]} />

      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 8, 5]} intensity={0.6} color="#e0e8ff" />
      <pointLight position={[-6, 4, -3]} intensity={2} color="#00e5ff" distance={15} />
      <pointLight position={[6, -2, 4]} intensity={1.5} color="#a855f7" distance={12} />
      <pointLight position={[0, -4, 6]} intensity={0.8} color="#ec4899" distance={10} />

      <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4}>
        <MouseParallax />
      </Float>

      <Stars
        radius={100}
        depth={10}
        count={1200}
        factor={3}
        saturation={0}
        fade
        speed={0.4}
      />

      <Environment preset="night" />
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  )
}
