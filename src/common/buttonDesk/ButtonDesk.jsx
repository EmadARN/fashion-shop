import { Box, Button, Grid } from "@mui/material";
import { Button_style, Button_style1, Button_style2, oneBox } from "./Style";
import { CiSettings } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";
import LabTabs from "@/components/labTab/LabTabs";
function ButtonDesk() {
  return (
    <>
      <Grid container sx={oneBox}>
        <Grid xs={1.8} sm={1.2} md={1.5}  >
          <Tooltip title="ویرایش پروفایل">
            <Button
              sx={Button_style1}
              variant="contained"
              startIcon={<CiSettings color="#111" />}
            ></Button>
          </Tooltip>
        </Grid>
        <Grid xs={5} md={4}>
          <Button sx={Button_style} variant="contained">
            اشتراک گذاری
          </Button>
        </Grid>
        <Grid xs={5} md={4}>
          <Button sx={Button_style} variant="contained">
            آمار بازدید
          </Button>
        </Grid>
        <Grid>
          <LabTabs />
        </Grid>
      </Grid>
    </>
  );
}
export default ButtonDesk;
