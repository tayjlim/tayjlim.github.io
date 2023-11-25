import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particlesPackageBG/particles.json"
import React, { useCallback } from 'react';

const Background = () => {

const particlesInit = useCallback( async main => {
    await loadFull(main);

}, [])
return(
    <div>
    <Particles id="tsparticles" options={particlesOptions} init={particlesInit}/>
    </div>
    )
}

export default Background;
