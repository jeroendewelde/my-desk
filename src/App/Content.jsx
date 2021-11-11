import { Suspense } from "react";
import { OrbitControls, Stats } from "@react-three/drei";
import { useControls } from "leva";

// Components
import Suzanne from "./components/Suzanne";
import SuzanneMatcapTexture from "./components/Suzanne/MatcapTexture";
import SuzanneNormalTexture from "./components/Suzanne/NormalTexture";
import SuzannePhysicalMaterial from "./components/Suzanne/PhysicalMaterial";
import SuzanneStandardMaterial from "./components/Suzanne/StandardMaterial";
import SuzanneToonMaterial from "./components/Suzanne/ToonMaterial";

// Lighting
import Lighting from "./components/Lighting";
import LightingGui from "./components/Lighting/indexGui";
import LightingStudio from "./components/Lighting/Studio";
import LightingStudioGui from "./components/Lighting/StudioGui";
import LightingThreePoint from "./components/Lighting/ThreePoint";
import LightingThreePointGui from "./components/Lighting/ThreePointGui";

const components = [
  "Suzanne",
  "SuzanneMatcapTexture",
  "SuzanneNormalTexture",
  "SuzannePhysicalMaterial",
  "SuzanneStandardMaterial",
  "SuzanneToonMaterial",
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
      value: "Suzanne",
    },
    useLighting: {
      label: "Lighting",
      options: lightings,
      value: "Studio",
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

        {showComponent("Suzanne") && <Suzanne />}
        {showComponent("SuzanneMatcapTexture") && <SuzanneMatcapTexture />}
        {showComponent("SuzanneNormalTexture") && <SuzanneNormalTexture />}
        {showComponent("SuzannePhysicalMaterial") && (
          <SuzannePhysicalMaterial />
        )}
        {showComponent("SuzanneStandardMaterial") && (
          <SuzanneStandardMaterial />
        )}
        {showComponent("SuzanneToonMaterial") && <SuzanneToonMaterial />}
      </Suspense>
    </>
  );
};

export default Content;
