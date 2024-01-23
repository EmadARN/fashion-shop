import { Box, Button, Grid } from "@mui/material";
import { Button_style } from "./Style";

function ButtonDesk() {
  return (
    <>
      <Grid container>
        <Grid>
          <Button sx={Button_style} variant="contained">
            ویرایش پروفایل
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button sx={Button_style} variant="contained">
            اشتراک گذاری
          </Button>
        </Grid>
        <Grid xs={4}>
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
