import Hr from "@/common/hr/Hr";
import React from "react";
import CardProductView from "./CardProductView/CardProductView";
import { Container, Grid } from "@mui/material";
import RightbarDrawer from "./Right_bar_drawer_sm/Main";
import CategoryListMain from "./Right_bar/Main";
import Market_item from "./market_list/market_item";
import Explore from "@/common/explore/Explore";
import Carousel from "./Carousel/Carousel";
import {
  GridCarousel,
  GridCategoryListMain,
  GridRightBar,
  GridcontainerRightBar,
  container,
} from "./style";

const Home = () => {
  return (
    <Grid mt={2} container sx={container}>
      <Grid item xs={2} sm={2} md={3} lg={3} sx={GridcontainerRightBar}>
        <Grid sx={GridRightBar}>
          <RightbarDrawer />
        </Grid>
        <Grid sx={GridCategoryListMain}>
          <CategoryListMain />
        </Grid>
      </Grid>
      <Grid item sx={GridCarousel} xs={12} sm={12} md={9} lg={9} xl={9}>
        <Carousel />
      </Grid>
      <Container maxWidth="xl">
        <Grid mt={5} item xs={12}>
          <Hr paragraph={"لیست فروشگاه های فعال"} />
          <Market_item />
        </Grid>

        <Grid item xs={12}>
          {/* <Hr paragraph={"محصولات پر بازدید"} /> */}
          <CardProductView displayxsHome={"none"} />
        </Grid>
        <Grid item xs={12}>
          <Explore displayxsHome={"none"} />
        </Grid>
      </Container>
    </Grid>
  );
};

export default Home;
