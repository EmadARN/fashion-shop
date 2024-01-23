import React from "react";
import Productimg_phone from "./Productimg_phone/Productimg_phone";
import ImgDesktop from "./Product_page_img_desktop/ImgDesktop";
import { Box, Container, Grid, Typography } from "@mui/material";
import Information_Product from "./information_product/Information_Product";
import Hr from "@/common/hr/Hr";
import { ModelName, ModelNameXs } from "./information_product/style";
import {
  BoxImageDesktop,
  BoxProductimg_phone,
  ContainerGridXs,
  GridInformation_Product,
  ModelNameXsGrid,
} from "./Productimg_phone/style";

const Product_page = ({ modelxs }) => {
  return (
    <section>
      <Container maxWidth="lg">
        <Grid>
          <Box>
            <Typography sx={ModelNameXsGrid} style={ModelNameXs}>
              {modelxs}
            </Typography>
          </Box>
        </Grid>
        <Grid container>
          <Grid xs={12} sm={12} md={12} lg={7} xl={7} sx={ContainerGridXs}>
            <Box sx={BoxImageDesktop}>
              <ImgDesktop />
            </Box>
            <Box sx={BoxProductimg_phone}>
              <Productimg_phone />
            </Box>
          </Grid>

          <Grid
            xs={12}
            sm={12}
            md={11}
            lg={5}
            xl={5}
            sx={GridInformation_Product}
          >
            <Information_Product
              name={"کفش زنانه "}
              viewpost={"300"}
              price={"210,000"}
              model={"کفش پاشنه دار زنانه "}
              AboutTitle={"این کفش برای زنان شیک پوش هست."}
              alertTitle={
                " امکان خرید این محصول تنها از پیج فروشگاه قابل سفارش هست."
              }
            />
          </Grid>
        </Grid>
      </Container>

      <Hr paragraph={"محصولات مشابه در همین فروشگاه"} />
      <Hr paragraph={"محصولات مشابه"} />
    </section>
  );
};

export default Product_page;
