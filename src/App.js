import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import "./App.css";
import Model from "./components/Model";
import Background from "./components/Background"
import Loading from "./components/Loading";

export default function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {load && (
        <div style={{display:'flex', justifyContent:'center', alignItems:'flex-end'}}>
          <h1 style={{color:'white'}}>Loading...</h1>
        </div>
      )}
      <Canvas>
        <directionalLight intensity={0.5} />
        {load ? (
          <>
            <Loading />
          </>
        ) : (
          <Suspense fallback={<Loading />}>
            <Background/>
            <Model />
          </Suspense>
        )}
      </Canvas>
    </>
  );
}
