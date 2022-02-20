const InvertAxisToggle = ({ labelX, labelY, unitsX, unitsY, toggleInvertAxis }) => {
    return (
        <>
            <div>
                <div>
                    <span>X-axis: </span>
                    <span>
                        {labelX}, {unitsX}
                    </span>
                </div>
                <div>
                    <span>Y-axis: </span>
                    <span>
                        {labelY}, {unitsY}
                    </span>
                </div>
            </div>
            <button onClick={toggleInvertAxis}>Invert Axis</button>
        </>
    );
};

export default InvertAxisToggle;
