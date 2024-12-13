"use client";
import * as THREE from "three";
import { useState } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import {
  VRMLoaderPlugin,
  MToonMaterialLoaderPlugin,
  VRMUtils,
} from "@pixiv/three-vrm";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import "@/app/globals.scss";
export default function Model() {
  const [toolTip, setToolTip] = useState("");
  const poses = [
    { rotation: new THREE.Euler(0, Math.PI, 0) },
    { rotation: new THREE.Euler(0, Math.PI / 2, 0) },
    { rotation: new THREE.Euler(0, Math.PI / 4, 0) },
  ];
  const cont = useRef<HTMLDivElement>(null);
  const loader = new GLTFLoader();
  const scene = new THREE.Scene();
  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      20.0
    );
    const renderer = new THREE.WebGLRenderer();
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(0.0, 1.0, 0.0).normalize();
    camera.position.set(0.0, 1.0, 3.0);
    camera.lookAt(0, 1, 0);
    scene.add(light);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = true;
    controls.screenSpacePanning = false;
    controls.enableDamping = true; // For smooth interactions
    controls.dampingFactor = 0.05;
    controls.target.set(0.0, 1.0, 0.0); // Adjust the target to center the model
    if (cont.current) {
      renderer.setSize(window.innerWidth, window.innerHeight);
      cont.current.appendChild(renderer.domElement);
    }
    loader.register((parser) => {
      return new VRMLoaderPlugin(parser);
    });
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    loader.load(
      "/me.vrm",
      (gltf) => {
        const vrm = gltf.userData.vrm;
        VRMUtils.removeUnnecessaryVertices(gltf.scene);
        VRMUtils.combineSkeletons(gltf.scene);
        VRMUtils.combineMorphs(vrm);
        scene.add(vrm.scene);
        console.log(vrm);
        // const gridHelper = new THREE.GridHelper( 10, 10 );
        // scene.add( gridHelper );

        // const axesHelper = new THREE.AxesHelper( 5 );
        // scene.add( axesHelper );
        vrm.scene.rotation.set(0, Math.PI, 0);
      },
      (progress) =>
        console.log(
          "Loading model...",
          100.0 * (progress.loaded / progress.total),
          "%"
        ),
      (error) => console.error(error)
    );
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toolTipText = "Made the model using Vroid, no I am not a vtuber";

  return (
    <>
      <div
        ref={cont}
        className="model"
        onMouseEnter={() => setToolTip(toolTipText)}
        onMouseLeave={() => setToolTip("")}
      ></div>
      {toolTip && <ToolTip text={toolTip} />}
    </>
  );
}

const ToolTip = ({ text }: { text: string }) => {
  return <div className="tooltip">{text}</div>;
};
