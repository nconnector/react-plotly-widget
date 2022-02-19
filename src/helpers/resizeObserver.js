import { useEffect } from "react";

const useResizeObserver = (elementSelector) => {
    useEffect(() => {
        // set up the observer to emit "resize" events on window
        const observer = new ResizeObserver(() => {
            window.dispatchEvent(new Event("resize"));
        });

        // connect observer to desired Element
        const targetElement = document.querySelector(elementSelector);
        observer.observe(targetElement, { attributes: true });
        return () => observer.disconnect;
    }, []);
};

export default useResizeObserver;
