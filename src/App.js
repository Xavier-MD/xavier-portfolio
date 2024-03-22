import { useEffect, useState } from 'react';
import { useControls } from 'leva';
import { Canvas } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight, Center, Environment, OrbitControls, Html } from '@react-three/drei';

export default function App() {
  const [ballProps, setBallProps] = useState({
    color: 'white',
    size: 1
    // ... other properties
  });

  const [currentCode, setCurrentCode] = useState('');

  useEffect(() => {
    const newCode = generateCodeSnippet(ballProps);
    setCurrentCode(newCode);
  }, [ballProps]);

  function Sphere() {
    const { roughness } = useControls({ roughness: { value: 1, min: 0, max: 1 } });
    const handleInteraction = () => {
      // Logic to change properties and set state
      setBallProps({ color: 'blue' });
    };
    return (
      <Center top>
        <mesh onClick={handleInteraction} castShadow>
          <sphereGeometry args={[0.75, 64, 64]} />
          <meshStandardMaterial color={ballProps.color} roughness={roughness} />
        </mesh>
      </Center>
    );
  }

  function CodeDisplay({ code }) {
    return (
      <Html position={[0, 0, 0]} transform occlude>
        <div className='absolute top-0 left-0 p-4'>
          <pre>{code}</pre>
        </div>
      </Html>
    );
  }

  function generateCodeSnippet(props) {
    // Logic to return a JSX code snippet
    // return `...`;
  }

  return (
    <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
      <group position={[0, -0.65, 0]}>
        <Sphere />
        <CodeDisplay code={currentCode} />
        <AccumulativeShadows temporal frames={200} color='purple' colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
          <RandomizedLight amount={10} radius={5} ambient={0.2} position={[5, 5, 2]} bias={0.001} />
        </AccumulativeShadows>
      </group>
      <Environment preset={'dawn'} />
      <OrbitControls autoRotate autoRotateSpeed={4} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} />
    </Canvas>
  );
}
