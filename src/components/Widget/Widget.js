import "./Widget.css";
import React from "react";
import Header from "./Header/Header";
import PointSizeLogic from "./PointSize/PointSizeLogic";
import PointSize from "./PointSize/PointSize";
import InvertAxisLogic from "./InvertAxis/InvertAxisLogic";
import InvertAxis from "./InvertAxis/InvertAxis";
import Plot from "./Plot/Plot";

const Widget = () => {
    const { pointSize, setPointSize } = PointSizeLogic();
    const { invertAxis, toggleInvertAxis } = InvertAxisLogic();

    const data = [
        {
            label: "volume",
            units: "M^3",
            values: [1, 4, 6, 3, 7, 4],
        },
        {
            label: "weight",
            units: "kg",
            values: [3, 6, 3, 2, 1, 6],
        },
    ];
    const dataX = invertAxis ? data[0] : data[1];
    const dataY = invertAxis ? data[1] : data[0];
    const valuesX = dataX.values;
    const valuesY = dataY.values;
    const labelX = dataX.label;
    const labelY = dataY.label;
    const unitsX = dataX.units;
    const unitsY = dataY.units;

    return (
        <div id="widget">
            <div id="widget-header">
                <Header />
            </div>
            <div id="widget-content">
                <div id="widget-menu-top">
                    <InvertAxis {...{ labelX, labelY, unitsX, unitsY, toggleInvertAxis }} />
                </div>
                <div id="widget-plot-container">
                    <Plot {...{ valuesX, valuesY, pointSize, labelX, labelY }} />
                </div>
                <div id="widget-menu-bottom">
                    <PointSize {...{ pointSize, setPointSize }} />
                </div>
            </div>
        </div>
    );
};

export default Widget;
