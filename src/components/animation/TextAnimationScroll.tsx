import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function TextAnimationScroll({ children, customProps, onChangeCatch }: Props) {
    const ref = useRef(null);
    const mainControls = useAnimation();
    // Animation position from
    const positionObject = customProps && customProps.position === "top-to-bottom"
        ? { opacity: 0, y: -75 }
        : { opacity: 0, y: 75 };

    useEffect(() => {
        mainControls.set("hidden");
        mainControls.start("visible");
    }, [onChangeCatch]);

    return (
        <div ref={ref} style={{ position: "relative", width: "100%" }}>
            <motion.div
                variants={{
                    hidden: positionObject,
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ 
                    duration: customProps && customProps.duration ? customProps.duration : 1,
                    delay: customProps && customProps.delay ? customProps.delay : 0.25 
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

interface Props {
    children: React.ReactNode;
    customProps?: {
        position?: string,
        delay?: number,
        duration?: number,
    };
    onChangeCatch: any;
}

export default TextAnimationScroll;
