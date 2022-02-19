import { useState } from "react";

const PointSizeLogic = () => {
    const pointSizeDefault = 5;
    const [pointSize, setPointSize] = useState(pointSizeDefault);
    return { pointSize, setPointSize };
};

export default PointSizeLogic;
