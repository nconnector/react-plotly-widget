import { useState } from "react";

const InvertAxis = () => {
    const invertAxisDefault = false;
    const [invertAxis, setInvertAxis] = useState(invertAxisDefault);

    const toggleInvertAxis = () => {
        setInvertAxis((currentValue) => !currentValue);
    };

    return { invertAxis, toggleInvertAxis };
};

export default InvertAxis;
