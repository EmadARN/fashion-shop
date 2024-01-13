import * as React from "react";
import Box from "@mui/material/Box";
import TabImgs from "./widgets/TabImgs";
import TabPanelImg from "./widgets/TabPanelImg";
import { ImgDesktopBox } from "./style";

export default function ImgDesktop() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ mt: 10, mb: 50 }}>
      <Box sx={ImgDesktopBox} dir="ltr">
        <TabImgs value={value} setValue={setValue} />
        <TabPanelImg value={value} />
      </Box>
    </Box>
  );
}
