import { Box, Grid, Typography } from "@mui/material";
import { ModelNameLg, ModelNameLgGrid } from "../style";

export default function ModelBox({ model }) {
  return (
    <Grid>
      <Box>
        <Typography sx={ModelNameLgGrid} style={ModelNameLg}>
          {model}
        </Typography>
      </Box>
    </Grid>
  );
}
