import * as React from "react";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import { BoxStyle1Card_item_xs, MainXsCard } from "../Style";
import Cardactions from "./Cardactions";
import CardHeadeXs from "./CardHeadeXs";
import BtnInformations from "./BtnInformations";

const Card_item_xs = () => {
  return (
    <Card sx={MainXsCard}>
      <CardHeadeXs />
      <Box position="relative">
        <Box sx={BoxStyle1Card_item_xs} />
        <Cardactions />
        <BtnInformations />
      </Box>
    </Card>
  );
};

export default Card_item_xs;
