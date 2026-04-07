import React, { Suspense, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Center, ContactShadows, Sky, Sparkles, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function useWASD() {
  const [keys, setKeys] = useState({ w: false, a: false, s: false, d: false });

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd'].includes(key)) {
        setKeys((k) => ({ ...k, [key]: true }));
      }
    };
    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd'].includes(key)) {
        setKeys((k) => ({ ...k, [key]: false }));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return keys;
}

function Model({ url }) {
  const { scene } = useGLTF(url);
  const keys = useWASD();
  
  useFrame((state, delta) => {
    const moveSpeed = 5 * delta;
    const rotateSpeed = 2 * delta;

    if (keys.w) scene.translateZ(moveSpeed);
    if (keys.s) scene.translateZ(-moveSpeed);
    if (keys.a) scene.rotateY(rotateSpeed);
    if (keys.d) scene.rotateY(-rotateSpeed);

    // 3rd Person Follow Camera
    const idealOffset = new THREE.Vector3(0, 4, -12); // Positioned behind and slightly above
    idealOffset.applyQuaternion(scene.quaternion);
    idealOffset.add(scene.position);

    const idealLookAt = new THREE.Vector3(0, 0, 5); // Looking slightly ahead of the model
    idealLookAt.applyQuaternion(scene.quaternion);
    idealLookAt.add(scene.position);

    // Smoothly transition the camera position and rotation
    state.camera.position.lerp(idealOffset, 5 * delta);
    state.camera.lookAt(idealLookAt);
  });
  
  // Enable shadows for the model's children
  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
}

function Ground() {
  // Using a verified rocky texture from three.js examples repository
  const texture = useTexture('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/terrain/grasslight-big.jpg');
  
  useMemo(() => {
    if (texture) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(16, 16); 
      texture.colorSpace = THREE.SRGBColorSpace;
    }
  }, [texture]);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]} receiveShadow>
      <circleGeometry args={[80, 64]} />
      <meshStandardMaterial 
        map={texture}
        color="#a54b2a" // Deep Martian tint
        roughness={1} 
        metalness={0.05}
      />
    </mesh>
  );
}

export default function TelemetryModel() {
  return (
    <div className="w-full h-full transition-all duration-1000 bg-transparent absolute inset-0">
      <Canvas shadows="soft" camera={{ position: [10, 5, 9], fov: 25 }}>
        {/* Deep Martian Atmosphere Background */}
        <color attach="background" args={['#1a0805']} />
        <fog attach="fog" args={['#1a0805', 8, 35]} />
        
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[15, 20, 9]} 
          intensity={10} 
          castShadow 
          shadow-mapSize={[2048, 2048]}
          shadow-camera-far={50}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />
        
        <Suspense fallback={null}>
          <Center top>
            <Model url="/model.glb" />
          </Center>
          
          <Ground />
          
          {/* Atmospheric Dust / Sand Particles */}
          <Sparkles 
            count={150} 
            scale={20} 
            size={10} 
            speed={0.6} 
            opacity={0.8} 
            color="#ff4500" 
          />

          <Environment preset="night" />
          
          {/* Martian Sky Horizon */}
          <Sky 
            distance={45000} 
            sunPosition={[15, 2, 10]} 
            inclination={0.5} 
            azimuth={0.2} 
            mieCoefficient={0.005} 
            mieDirectionalG={0.8} 
            rayleigh={2} 
          />
          
          <ContactShadows 
            position={[0, 0, 0]} 
            opacity={0.75} 
            scale={30} 
            blur={2.8} 
            far={5} 
          />
        </Suspense>
        
        {/* Custom 3rd person camera overrides OrbitControls */}
      </Canvas>
    </div>
  );
}

useGLTF.preload('/model.glb');
