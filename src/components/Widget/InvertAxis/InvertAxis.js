const InvertAxisToggle = ({ labelX, labelY, unitsX, unitsY, toggleInvertAxis }) => {
    return (
        <>
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
            <button onClick={toggleInvertAxis}>Toggle Axis</button>
        </>
    );
};

export default InvertAxisToggle;
