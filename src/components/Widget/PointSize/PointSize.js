const PointSize = ({ pointSize, setPointSize }) => {
    const minSize = 1;
    const maxSize = 15;

    return (
        <>
            <div className="header">Point Size:</div>
            <input
                className="input-number"
                type="number"
                min={minSize}
                max={maxSize}
                value={pointSize}
                onChange={(e) => {
                    let newSize = e.target.value;
                    if (newSize > maxSize) {
                        newSize = maxSize;
                    } else if (newSize < minSize) {
                        newSize = "";
                    }
                    setPointSize(newSize);
                }}
            />
            <input
                className="input-slider"
                type="range"
                min={minSize}
                max={maxSize}
                value={pointSize}
                onChange={(e) => {
                    setPointSize(e.target.value);
                }}
            />
        </>
    );
};

export default PointSize;
