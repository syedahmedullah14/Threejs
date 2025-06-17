import { Canvas } from "@react-three/fiber";

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  })
}

const App = () =>{
  return <Canvas style={{height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
    <OrbitControls enableZoom enablePan enableRotate enableKeys/>
    
    <directionalLight position={[1, 1, 1]} intensity={10} color={"0x9CDBA6"}/>
    <color attach="background" args={["#F0F0F0"]}/>

  </Canvas>
}

export default App;