import { Canvas } from "@react-three/fiber";

const App = () =>{
  return <Canvas style={{height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
    <OrbitControls enableZoom enablePan enableRotate enableKeys/>
    Hello World
  </Canvas>
}

export default App;