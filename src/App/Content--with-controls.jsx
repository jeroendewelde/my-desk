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
  const { showStats } = useControls("General", {
    showStats: {
      label: "Stats",
      value: false,
    },
  });

  const {
    showAxesHelper,
    showGridHelper,
    useComponent,
    useLighting,
    useLightingGui,
  } = useControls("Helpers", {
    showAxesHelper: {
      label: "Axes Helper",
      value: false,
    },
    showGridHelper: {
      label: "Grid Helper",
      value: false,
    },
    useComponent: {
      label: "Component",
      options: components,
      value: "Room",
    },
    useLighting: {
      label: "Lighting",
      options: lightings,
      value: "ThreePoint",
    },
    useLightingGui: {
      label: "Lighting GUI",
      value: false,
    },
  });

  function showComponent(name) {
    return useComponent === name;
  }

  function showLighting(name) {
    return useLighting === name;
  }

  return (
    <>
      <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
      {showAxesHelper && <axesHelper />}
      {showGridHelper && <gridHelper />}
      {showStats && <Stats />}

      {showLighting("Default") && !useLightingGui && <Lighting />}
      {showLighting("Default") && useLightingGui && <LightingGui />}
      {showLighting("Studio") && !useLightingGui && <LightingStudio />}
      {showLighting("Studio") && useLightingGui && <LightingStudioGui />}
      {showLighting("ThreePoint") && !useLightingGui && <LightingThreePoint />}
      {showLighting("ThreePoint") && useLightingGui && (
        <LightingThreePointGui />
      )}

      <Suspense fallback={null}>
        {showComponent("Room") && <Room />}
        {showComponent("Room") && <Desk />}
        {showComponent("Room") && <Keyboard />}
        {showComponent("Room") && <Trackpad />}
        {showComponent("Room") && <Laptopstand />}
        {showComponent("Room") && <CupAndCoaster />}
        {showComponent("Room") && <MovingBalls />}
        {showComponent("Room") && <Lamp />}
        {showComponent("Room") && <Screen />}
        {showComponent("Room") && <StackOfBooks />}
        {showComponent("Room") && <Couch />}
        {showComponent("Room") && <Chair />}
        {showComponent("Room") && <Welcome />}
      </Suspense>
    </>
  );
};

export default Content;
