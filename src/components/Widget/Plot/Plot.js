import PlotlyPlot from "react-plotly.js";
import useResizeObserver from "../../../helpers/resizeObserver";

const Plot = ({ valuesX, valuesY, labelX, labelY, pointSize }) => {
    useResizeObserver(".plot-element"); // integrate CSS resize with plotly reactive functionality
    return (
        <PlotlyPlot
            className="plot-element"
            data={[
                {
                    x: valuesX,
                    y: valuesY,
                    type: "scatter",
                    mode: "markers",
                    marker: {
                        color: "#2196f3",
                        size: pointSize,
                    },
                },
            ]}
            useResizeHandler={true}
            style={{
                width: "100%",
                height: "100%",
            }}
            layout={{
                xaxis: {
                    fixedrange: true,
                    title: labelX,
                },
                yaxis: {
                    fixedrange: true,
                    title: labelY,
                },
                margin: {
                    l: 25,
                    r: 0,
                    b: 30,
                    t: 0,
                    pad: 0,
                },
            }}
            config={{
                displayModeBar: false,
                autosizable: true,
                responsive: true,
            }}
        />
    );
};

export default Plot;
