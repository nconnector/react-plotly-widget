import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";

const PointSize = ({ pointSize, setPointSize }) => {
    const minSize = 1;
    const maxSize = 15;

    return (
        // <Box label="123" sx={{ border: "var(--border)", borderRadius: "4px", padding: "0.5em" }}>
        <Stack direction="row" spacing={2} justifyContent="laft" alignItems="center">
            <TextField
                className="input-number"
                type="number"
                min={minSize}
                max={maxSize}
                value={pointSize}
                label="Point Size"
                size="small"
                sx={{
                    width: "5em",
                }}
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
            <Slider
                className="input-slider"
                type="range"
                min={minSize}
                max={maxSize}
                value={pointSize}
                sx={{
                    maxWidth: "150px",
                }}
                onChange={(e) => {
                    setPointSize(e.target.value);
                }}
            />
        </Stack>
        // </Box>
    );
};

export default PointSize;
