import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const modelRef = useRef();
  // public/models/character.glb file ko load kar rahe hain
  const { scene } = useGLTF('/models/character.glb');

  // Mouse movement ke sath 3D character ko rotate karne ka logic
  useFrame((state) => {
    const { x, y } = state.pointer;
    if (modelRef.current) {
      modelRef.current.rotation.y = x * 0.5; // Horizontal cursor tracking
      modelRef.current.rotation.x = -y * 0.2; // Vertical cursor tracking
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2} position={[0, -2, 0]} />;
};

const ModelViewer = () => {
  return (
    <div className="w-full h-[400px] lg:h-[500px]">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Model />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;