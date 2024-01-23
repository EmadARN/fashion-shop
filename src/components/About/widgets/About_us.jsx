import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import {
  DescTypography,
  ContainerGridStyle,
  FirstGridStyle,
  FirstBoxStyle,
  TitleTypography,
  ImgStyle,
  SeccondBoxStyle,
} from "../style";
const About_us = () => {
  return (
    <Grid sx={ContainerGridStyle}>
      <Grid xs={12} mb={5} sx={FirstGridStyle}>
        <Box sx={FirstBoxStyle}>
          <Typography sx={TitleTypography}>درباره ی ما</Typography>
          <Typography sx={DescTypography}>
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
            style={ImgStyle}
          />
        </Box>
      </Grid>

      <Grid sx={FirstGridStyle}>
        <Box>
          <img
            src="https://imgs7.luluandsky.com/catalog/product/8/9/89TGC-1151-KHAKI_1.jpeg"
            alt=""
            style={ImgStyle}
          />
        </Box>
        <Box sx={SeccondBoxStyle}>
          <Typography sx={TitleTypography}> هدف ما</Typography>
          <Typography sx={DescTypography}>
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
