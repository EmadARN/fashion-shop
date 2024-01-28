import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
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

import ModalMain from "./Modal";
import EditIcon from "@mui/icons-material/Edit";

const Edit_information_store = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  

  return (
    <>
      {open && <ModalMain open={open}  setOpen = {setOpen}/>}
      <Grid flexDirection="column" justifyContent="flex-start" display="flex">
        <Grid mr={2} item display="flex" alignItems="center">
          <Box ml={2}>
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
        </Grid>

        <Grid sx={grid_item}>
          <Box sx={boxes_style}>
            <Box sx={box_item}>
              <Typography sx={Typography_style}>نام فروشنده:</Typography>
              <Typography ml={1} pr={3} sx={Typography_style}>
                {information_store_data.store_admin}
              </Typography>
              <EditIcon
                onClick={handleOpen}
                sx={{ fontSize: "20px", color: "#DB4444", cursor: "pointer" }}
              />
            </Box>

            <Box sx={box_item}>
              <Typography sx={Typography_style}>آدرس اینستاگرام:</Typography>
              <Typography ml={1} pr={2} sx={Typography_style}>
                {information_store_data.insta_id}
              </Typography>
              <EditIcon
                onClick={handleOpen}
                sx={{ fontSize: "20px", color: "#DB4444", cursor: "pointer" }}
              />
            </Box>
          </Box>

          <Box sx={boxes_style}>
            <Box sx={box_item}>
              <Typography sx={Typography_style}>شماره همراه:</Typography>
              <Typography ml={1} pr={2} sx={Typography_style}>
                {toPersianDigits(information_store_data.phone_number)}
              </Typography>
              <EditIcon
                onClick={handleOpen}
                sx={{ fontSize: "20px", color: "#DB4444", cursor: "pointer" }}
              />
            </Box>

            <Box sx={box_item}>
              <Typography sx={Typography_style}> آدرس:</Typography>
              <Typography ml={1} pr={2} sx={Typography_style}>
                {information_store_data.address}
              </Typography>
              <EditIcon
                onClick={handleOpen}
                sx={{ fontSize: "20px", color: "#DB4444", cursor: "pointer" }}
              />
            </Box>
          </Box>

          <Box sx={boxes_style}>
            <Box sx={box_item}>
              <Typography sx={Typography_style}>ایمیل:</Typography>
              <Typography ml={1} pr={2} sx={Typography_style}>
                {information_store_data.email}
              </Typography>
              <EditIcon
                onClick={handleOpen}
                sx={{ fontSize: "20px", color: "#DB4444", cursor: "pointer" }}
              />
            </Box>

            <Box sx={box_item}>
              <Typography sx={Typography_style}>دسته بندی:</Typography>
              <Typography ml={1} pr={2} sx={Typography_style}>
                {information_store_data.what_to_sell}
              </Typography>
              <EditIcon
                onClick={handleOpen}
                sx={{ fontSize: "20px", color: "#DB4444", cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit_information_store;
