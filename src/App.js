import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import ProjectsPage from './pages/projects_page';

function Model({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} />;
}

function App() {
  return (
    <div className='App'>
      <div className='Viewport w-screen h-screen overflow-hidden'>
        <ProjectsPage />
      </div>
    </div>
  );
}

export default App;
