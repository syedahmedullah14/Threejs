import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  })

  return <mesh ref={meshRef}>
    <cylinderGeometry args={[1, 1, 1]}/>
    <meshLambertMaterial color={"#468585"} emissive={"#468585"} />
  </mesh>
}

const SparklesComponent = () => {
  return (
    <Sparkles 
      count={50} 
      scale={4} 
      size={6} 
      speed={0.3} 
      noise={0.5} 
      color="red"
      position={[0, 0, 0]}
    />
  )
}

const App = () =>{
  return <Canvas style={{height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
    <OrbitControls enableZoom enablePan enableRotate enableKeys/>
    
    <ambientLight intensity={0.5} />
    <directionalLight position={[1, 1, 1]} intensity={10} color={"#9CDBA6"}/>
    <color attach="background" args={["#000000"]}/>

    <RotatingCube />
    <SparklesComponent />
    
    {/* Test sphere to verify scene is working */}
    <mesh position={[3, 0, 0]}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color="blue" />
    </mesh>

  </Canvas>
}

export default App;