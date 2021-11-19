import { Text, useMatcapTexture } from "@react-three/drei";
import { DoubleSide } from "three"; 
import MatCap from "../../lib/MatCap";
import { MathUtils } from "three"
import FontFamily from "../../lib/FontFamily";

const Welcome = () => {
    const [matcap] = useMatcapTexture(MatCap.id.METALIC, MatCap.size.XL);
    return(
        <>
        <group 
            rotation={[0, MathUtils.degToRad(90), 0]}
            position={[-3.99, 2.5, 3.2]}
            >
            <Text 
                fontSize={.6}
                font={FontFamily.Architects_Daughter}
            >
                Welcome to 
                my Office!
                <meshStandardMaterial matcap={matcap} side={DoubleSide} color={0x3B2725}/>
            </Text>

        </group>
        </>

    )
}

export default Welcome;