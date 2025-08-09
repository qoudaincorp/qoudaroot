import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function BoxAnimationExpand({ children, customProps }: Props) {
    const ref = useRef(null);
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const isInView = useInView(ref, { once: windowSize.current[0] > 1024 ? false : true });
    const mainControls = useAnimation();
    const [animationType, setAnimationType] = useState<any>({});

    useEffect(() => {
        const directionType = customProps && customProps.directionType === "minus" ? -20 : 20;
        if (customProps && customProps.direction && customProps.direction === "left") {
            setAnimationType({
                hidden: { x: directionType, opacity: 0 },
                visible: {
                    x: 0,
                    opacity: 1
                }
            });
        } else {
            setAnimationType({
                hidden: { y: directionType, opacity: 0 },
                visible: {
                    y: 0,
                    opacity: 1
                }
            });
        }
        if (isInView) {
            mainControls.set("hidden");
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <motion.div
            ref={ref}
            style={{ width: "100%", height: "100%" }}
            variants={animationType}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: customProps && customProps.delay ? customProps.delay + (customProps.extraDelay ? 2 : 0) : 0 }}
        >
            {children}
        </motion.div>
    );
}

interface Props {
    children: React.ReactNode;
    customProps?: {
        position?: string;
        width?: string;
        delay?: number;
        extraDelay?: boolean;
        direction?: string;
        directionType?: string;
    };
}

export default BoxAnimationExpand;
