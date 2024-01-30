import { Box, Typography } from "@mui/material";
import * as React from "react";
import { motion } from "framer-motion";
import {
  BoxStyle1SwipeableEdgeDrawer,
  TypographyStyleSwipeableEdgeDrawer,
} from "../Style";

function Drewer_cradItemXs({ isOpen }) {
  return (
    <Box>
      <Typography sx={TypographyStyleSwipeableEdgeDrawer}>مشخصات</Typography>
      {isOpen ? (
        <motion.div
          transition={{ delay: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
        >
          <Box sx={BoxStyle1SwipeableEdgeDrawer(isOpen)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            consequatur necessitatibus autem sint fugit voluptas fugiat in
            illum? Labore officiis inventore recusandae quae maxime obcaecati
            tenetur dicta unde dolor necessitatibus!
          </Box>
        </motion.div>
      ) : null}
    </Box>
  );
}

export default Drewer_cradItemXs;
