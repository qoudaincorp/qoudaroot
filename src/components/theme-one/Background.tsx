import React from "react";
import Particles from "react-particles";
import { particleParams } from "../../config/tsparticles-config";
import { loadFull } from "tsparticles";

function Background() {
    async function loadParticles(main: any) {
        await loadFull(main);
    }
    return (
        <div>
            <div style={{
                background: "rgba(0, 0, 0, 0.6)",
                zIndex: "-1",
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }}>
            </div>
            {/*@ts-ignore*/}
            <Particles options={particleParams} init={loadParticles} />
        </div>
    );
}

export default Background;
