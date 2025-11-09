"use client";
import React, { useEffect, useRef, useState } from "react";
import { setTheme, Theme } from "@/utils/themeManager";
import NavBar from "@/components/NavBar";
import * as BABYLON from "@babylonjs/core";

const themes: Theme[] = ["yellow", "blue", "green", "red", "white"];

const App: React.FC = () => {
  const [currentTheme, setCurrent] = useState<Theme>("green");
  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
    setCurrent(theme);
  };
  React.useEffect(() => {
    handleThemeChange("green");
  }, []);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<BABYLON.Engine | null>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    console.log("Canvas is ready");
    const engine = new BABYLON.Engine(canvasRef.current, true);
    engineRef.current = engine;

    const scene = new BABYLON.Scene(engine);

    // Camera
    const camera = new BABYLON.ArcRotateCamera(
      "camera",
      Math.PI / 2,
      Math.PI / 4,
      4,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControl(canvasRef.current, true);

    // Light
    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(1, 1, 0),
      scene
    );

    // Simple box
    const box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);

    // Animation
    engine.runRenderLoop(() => {
      box.rotation.y += 0.01;
      scene.render();
    });

    // Resize
    window.addEventListener("resize", () => engine.resize());

    return () => {
      engine.dispose();
    };
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Multi-Theme Example</h1>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        {themes.map((theme) => (
          <button key={theme} onClick={() => handleThemeChange(theme)}>
            {theme}
          </button>
        ))}
      </div>
      <NavBar />
      <div style={{ width: "800px", height: "600px" }}>
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      </div>
      <button className="bg-(--color-primary)">sssss</button>
    </div>
  );
};

export default App;
