import React, {useEffect, useState} from 'react';

const RippleEffect = ({visibleRipple, position}: Props) => {
    const [rippleClass, setRippleClass] = useState<string>("");
    const [rippleContentClass, setRippleContentClass] = useState<string>("hidden");
    const [ripplePosition, setRipplePosition] = useState<any>([]);

    /**
     * Set the ripple effect view/hide
     * */
    useEffect(() => {
        if (visibleRipple) {
            setRippleContentClass("visible");
            setRippleClass("ripple-animation");
            setRipplePosition({
                top: position.y + "px",
                left: position.x + "px",
            });
        } else {
            setRippleContentClass("hidden");
            setRippleClass("");
        }
    }, [visibleRipple]);

    return (
        <div className={"w-full h-screen fixed top-0 right-0 left-0 bg-transparent z-[111111] overflow-hidden " + rippleContentClass}>
            <div className={"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[0px] h-[0px] rounded-[100%] bg-white " + rippleClass} style={ripplePosition}></div>
            <button className="ripple-transition-display" style={ripplePosition}></button>
            <button className="ripple-transition-display" style={ripplePosition}></button>
        </div>
    );
};

interface Props {
    visibleRipple: boolean;
    position: any;
}

export default RippleEffect;
