import { Button, Container, Grid } from "@mui/material";
import { Button_style, Button_style1, Button_style2, oneBox } from "./Style";
import { CiSettings } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";
import LabTabs from "@/components/labTab/LabTabs";
function ButtonDesk() {
  return (
    <Container maxWidth="md">
      <Grid container sx={oneBox}>
        <Grid >
          <Tooltip title="ویرایش پروفایل">
            <Button
              sx={Button_style1}
              variant="contained"
              startIcon={<CiSettings color="#111" />}
            ></Button>
          </Tooltip>
        </Grid>
        <Grid xs={4} sm={4} md={4}>
          <Button sx={Button_style} variant="contained">
            اشتراک گذاری
          </Button>
        </Grid>
        <Grid xs={4} sm={4} md={4}>
          <Button sx={Button_style} variant="contained">
            آمار بازدید
          </Button>
        </Grid>
        <Grid>
          <LabTabs />
        </Grid>
      </Grid>
    </Container>
  );
}
export default ButtonDesk;
