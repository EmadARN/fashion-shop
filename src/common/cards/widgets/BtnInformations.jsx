import { Box, Button } from "@mui/material";
import React from "react";
import { ButtonStyle1Card_item_xs } from "../Style";
import Drewer_cradItemXs from "./Drewer_cradItemXs";

const BtnInformations = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box display="flex" justifyContent="center">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        sx={ButtonStyle1Card_item_xs(isOpen)}
      >
        <Drewer_cradItemXs isOpen={isOpen} setIsOpen={setIsOpen} />
      </Button>
    </Box>
  );
};

export default BtnInformations;
