import { Suspense } from "react";
import { OrbitControls, Stats } from "@react-three/drei";
import { useControls } from "leva";

// Components
import Room from "./components/Room";
import Desk from "./components/Desk";
import Couch from "./components/Couch";
import Chair from "./components/Chair";
import {
    Keyboard,
    Trackpad,
    Laptopstand,
    CupAndCoaster,
    MovingBalls,
    Lamp,
    Screen,
    StackOfBooks,
} from "./components/onDesk";

import Welcome from "./components/Welcome";

// Lighting
import Lighting from "./components/Lighting";
import LightingGui from "./components/Lighting/indexGui";
import LightingStudio from "./components/Lighting/Studio";
import LightingStudioGui from "./components/Lighting/StudioGui";
import LightingThreePoint from "./components/Lighting/ThreePoint";
import LightingThreePointGui from "./components/Lighting/ThreePointGui";

const components = [
  "Room"
];

const lightings = ["None", "Default", "Studio", "ThreePoint"];

const Content = () => {
  
  return (
    <>
      <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
      

      
      <LightingThreePoint />
      

      <Suspense fallback={null}>
        <Room />
        <Desk />
        <Keyboard />
        <Trackpad />
        <Laptopstand />
        <CupAndCoaster />
        <MovingBalls />
        <Lamp />
        <Screen />
        <StackOfBooks />
        <Couch />
        <Chair />
        <Welcome />
      </Suspense>
    </>
  );
};

export default Content;
