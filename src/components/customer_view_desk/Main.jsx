import React from "react";
import { Grid } from "@mui/material";
import { MainGrid } from "./style";
import Information_store from "../information_store/widgets/information_store";
import Explore from "@/common/explore/Explore";

const CustomerViewDesk = ({ mt1, mb1 }) => {
  return (
    <>
      <Grid container sx={MainGrid}>
        <Grid sx={{ width: { xs: "100%", md: "63%" } }}>
          <Information_store
            mt1 ={mt1}
            mb1={mb1}
            displayMd="flex"
            displayXs="none"
            displayXs1="flex"
            displayMd1="none"
          />
        </Grid>
      </Grid>

      <Explore />
    </>
  );
};

export default CustomerViewDesk;


{/* <CustomerViewDesk mt1="15%" mb1="10%" /> */}