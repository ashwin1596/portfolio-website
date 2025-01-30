import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-1/2 flex flex-row items-start gap-3">
                <div className="flex flex-col justify-center items-start sm:mt-32 mt-20 ml-[100px]">
                    {/*<div className="w-5 h-5 rounded-sm bg-[#FF3131]" />*/}
                    <div className="w-1 sm:h-80 h-40 red-gradient ml-2"/>
                </div>

                <div className="w-full flex flex-col sm:mt-32 mt-20 gap-3">
                    <p className="sm:text-7xl text-7xl font-medium text-white font-arial-black">
                        Hi, I'm Ashwin
                    </p>
                    {/*<p className="hero_tag text-gray_gradient">*/}
                    {/*    Building scalable systems, optimizing performance, and pushing the boundaries of AI and*/}
                    {/*    distributed computing*/}
                    {/*</p>*/}
                    <p className="hero_tag text-gray_gradient text-justify">
                        Transforming complex ideas into powerful software solutions at the intersection of cloud and AI — but that's just the beginning. I'm a computer scientist who thrives on pushing technical boundaries and exploring new frontiers in technology.
                    </p>
                </div>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>

                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                        {/*<HeroCamera isMobile={isMobile}>*/}
                            <HackerRoom
                                position={sizes.deskPosition}
                                rotation={[0, Math.PI, 0]}
                                scale={sizes.deskScale}
                            />
                        {/*</HeroCamera>*/}

                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>

                    </Suspense>
                </Canvas>
            </div>

            <div className="w-10 h-10 absolute mx-auto bottom-10 left-0 right-0 flex flex-col items-center">
                <a href="#experience" className={"w-fit mx-auto"}>
                    <Button isBeam containerClass="shadow-lg hover:bg-purple-700" />
                </a>
            </div>
        </section>

    )
}
export default Hero
