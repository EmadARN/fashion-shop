import { Box, Button, Grid } from "@mui/material";
import { Button_style, Button_style1 } from "./Style";
import { CiSettings } from "react-icons/ci";
import Tooltip from '@mui/material/Tooltip';
function ButtonDesk() {
  return (
    <>
      <Grid container sx={{ width: "50%", mb: 0 }}>
        <Grid xs={2}>
          <Tooltip title="ویرایش پروفایل">
          <Button
            sx={Button_style1}
            variant="contained"
            startIcon={<CiSettings color="#111" />}
          ></Button>
          </Tooltip>
        </Grid>
        <Grid xs={5}>
          <Button sx={Button_style} variant="contained">
            اشتراک گذاری
          </Button>
        </Grid>
        <Grid xs={5}>
          <Button sx={Button_style} variant="contained">
            آمار بازدید
          </Button>
        </Grid>

        <Grid xs={4}>
          <Button sx={Button_style} variant="contained">
            پربازدید ترین
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button sx={Button_style} variant="contained">
            ارزان ترین
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button sx={Button_style} variant="contained">
            گران ترین
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
export default ButtonDesk;
