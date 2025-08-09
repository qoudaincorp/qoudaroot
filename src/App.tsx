// Libraries
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, MemoryRouter } from "react-router-dom";
// Components
import ThemeOne from "./components/theme-one/ThemeOne";
import ThemeTwoR from "./components/theme-two/ThemeTwoR";
import ThemeThree from "./components/theme-three/ThemeThree";
import RippleEffect from "./components/animation/RippleEffect";
import { ToastContainer } from "react-toastify";
// CSS
import "./styles/common.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [visibleRipple, setVisibleRipple] = useState<boolean>(false);
    const [visibleRippleSend, setVisibleRippleSend] = useState<any>([]);
    const [position, setPosition] = useState<any>({ x: 0, y: 0 });

    /**
     * Ripple effect and position handling
     * */
    useEffect(() => {
        setVisibleRipple(visibleRippleSend.visible);
        setPosition({
            x: visibleRippleSend.x,
            y: visibleRippleSend.y
        });
    }, [visibleRippleSend]);

    return (
        <div>
        <RippleEffect visibleRipple={visibleRipple} position={position} />
        <ToastContainer />
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<ThemeOne setVisibleRipple={setVisibleRippleSend} />}></Route>
                <Route path="/theme-two" element={<ThemeTwoR setVisibleRipple={setVisibleRippleSend} />}></Route>
                <Route path="/theme-three" element={<ThemeThree />}></Route>
            </Routes>
        </MemoryRouter>
    </div>
    );
}

export default App;
