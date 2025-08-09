import React, {useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion";

function BoxAnimationPro({children, customProps}: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    // Animation position from
    const positionObject = customProps && customProps.position === "top-to-bottom"
        ? { opacity: 0, y: customProps && customProps.from ? customProps.from : -300 }
        : { opacity: 0, y: customProps && customProps.from ? customProps.from :  300 };

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{position: "relative", width: "100%"}}>
            <motion.div
                variants={{
                    hidden: positionObject,
                    visible: {opacity: 1, y: 0}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 1, delay: customProps && customProps.delay ? customProps.delay : 0.5}}
            >
                {children}
            </motion.div>
        </div>
    );
}

interface Props {
    children: React.ReactNode;
    customProps?: {
        position?: string;
        from?: number;
        delay?: number;
    };
}

export default BoxAnimationPro;
