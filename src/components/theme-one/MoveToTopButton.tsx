import {useEffect, useState} from "react";

function MoveToTopButton() {
    const [buttonCss, setButtonCss] = useState("-right-14");

    useEffect(() => {
        setButtonVisibility();
    }, []);

    /**
     * Onscroll event
     * */
    window.onscroll = () => {
        setButtonVisibility();
    }

    /**
     * Set the button visibility according to page position
     * */
    const setButtonVisibility = () => {
        if (window.pageYOffset === 0) {
            setButtonCss("-right-14");
        } else {
            setButtonCss("right-6")
        }
    }

    /**
     * Move to top
     * */
    const moveToTop = () => {
        window.scrollTo({
            top: 0,
        });
    }

    return (
        <div className={"py-3 fixed bottom-4 z-10 hover:bottom-6 transition-all duration-500 " + buttonCss}
             onClick={moveToTop}>
            <button
                className="p-2 rounded-md border-2 border-primary_one-200 mt-7 bg-primary_one-200 cursor-pointer relative flex max-md:text-lg items-center justify-center overflow-hidden transition-all">
                <img className="rotate-90" width={30} height={30} src="assets/icons/left-arrow-icon.svg"
                     alt="GO TO TOP"/>
            </button>
        </div>
    );
}

export default MoveToTopButton;
