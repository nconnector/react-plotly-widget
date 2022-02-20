import Button from "@mui/material/Button";

const InvertAxisToggle = ({ labelX, labelY, unitsX, unitsY, toggleInvertAxis }) => {
    return (
        <>
            <div className="header">Select X-Y plot data:</div>

            <Button size="small" variant="outlined" onClick={toggleInvertAxis}>
                Toggle Axis
            </Button>
            <div>
                <div>
                    <span>X-axis: </span>
                    <span className="value">
                        {labelX}, {unitsX}
                    </span>
                </div>
                <div>
                    <span>Y-axis: </span>
                    <span className="value">
                        {labelY}, {unitsY}
                    </span>
                </div>
            </div>
        </>
    );
};

export default InvertAxisToggle;
