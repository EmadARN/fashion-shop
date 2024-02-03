import { Typography, Grid } from "@mui/material";
import { HrTypographyStyl } from "@/common/hr/HrStyl";

function Hr({ paragraph }) {
  return (
    <Grid>
      <Typography sx={HrTypographyStyl}>{paragraph}</Typography>
    </Grid>
  );
}
export default Hr;
