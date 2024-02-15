import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import { information_store_data } from "../data";
import {
  Typography_style,
  img_style,
  grid_item,
  store_name_typhography,
  box_item,
  boxes_style,
} from "../style";
import { toPersianDigits } from "../../../../utils/toPersianDigits";
import { ButtonGrid, ButtonGrid2 } from "@/components/Desk/style";
import Desk_Button from "@/components/Desk/Desk_Button/Desk_Button";

const Information_store = ({
  displayMd,
  displayXs,
  displayXs1,
  displayMd1,
}) => {
  return (
    <Container maxWidth="md" sx={{  }}>
      <Grid flexDirection="column" justifyContent="flex-start">
        <Grid pr={1} item display="flex" alignItems="center">
          <Box pl={2}>
            <img style={img_style} src={information_store_data.img} alt="" />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography sx={store_name_typhography}>
              {information_store_data.store_name}
            </Typography>
          </Box>

          <Box sx={ButtonGrid(displayMd, displayXs)}>
            <Desk_Button />
          </Box>
        </Grid>
        <Box sx={ButtonGrid2(displayMd1, displayXs1)}>
          <Desk_Button />
        </Box>
        <Grid sx={grid_item}>
          <Box sx={boxes_style}>
            <Box sx={box_item}>
              <Typography sx={Typography_style}>نام فروشنده:</Typography>
              <Typography pr={3} sx={Typography_style}>
                {information_store_data.store_admin}
              </Typography>
            </Box>

            <Box sx={box_item}>
              <Typography sx={Typography_style}>آدرس اینستاگرام:</Typography>
              <Typography pr={2} sx={Typography_style}>
                {information_store_data.insta_id}
              </Typography>
            </Box>
          </Box>

          <Box sx={boxes_style}>
            <Box sx={box_item}>
              <Typography sx={Typography_style}>شماره همراه:</Typography>
              <Typography pr={2} sx={Typography_style}>
                {toPersianDigits(information_store_data.phone_number)}
              </Typography>
            </Box>

            <Box sx={box_item}>
              <Typography sx={Typography_style}> آدرس:</Typography>
              <Typography pr={2} sx={Typography_style}>
                {information_store_data.address}
              </Typography>
            </Box>
          </Box>

          <Box sx={boxes_style}>
            <Box sx={box_item}>
              <Typography sx={Typography_style}>ایمیل:</Typography>
              <Typography pr={2} sx={Typography_style}>
                {information_store_data.email}
              </Typography>
            </Box>

            <Box sx={box_item}>
              <Typography sx={Typography_style}>دسته بندی:</Typography>
              <Typography pr={2} sx={Typography_style}>
                {information_store_data.what_to_sell}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Information_store;
