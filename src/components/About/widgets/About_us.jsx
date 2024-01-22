import React from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
const About_us = () => {
  return (
    <Grid container mt={4} flexDirection="column" justifyContent="center" alignItems="center">
      <Grid xs={12}   mb={5} display="flex" justifyContent="center" alignItems="center" width="100%" >
        <Box ml={5} display="flex" flexDirection="column" width="100%" maxWidth="25%">
          <Typography sx={{fontSize:"24px",fontWeight:"bold"}}>درباره ی ما</Typography>
          <Typography sx={{textAlign:"justify" ,fontSize:"17px"}}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
        </Box>

        <Box>
          <img
            src="https://d2w9m16hs9jc37.cloudfront.net/dimg/blog/2023/09/hockerty_dark_grey_overcoat_over_a_suit_abeab026_600f_4557_85d1_65742fbb21e9.png"
            alt=""
            style={{ width: 300, height: 300 }}
          />
        </Box>
      </Grid>

      <Grid xs={12} display="flex" justifyContent="center" alignItems="center" width="100%" >
        <Box>
          <img
            src="https://imgs7.luluandsky.com/catalog/product/8/9/89TGC-1151-KHAKI_1.jpeg"
            alt=""
            style={{ width: 300, height: 300 }}
          />
        </Box>
        <Box mr={5} display="flex" flexDirection="column" width="100%" maxWidth="25%">
          <Typography sx={{fontSize:"24px",fontWeight:"bold"}}> هدف ما</Typography>
          <Typography  sx={{textAlign:"justify" ,fontSize:"17px"}}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About_us;
