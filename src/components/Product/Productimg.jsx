import { ExploreXsimage } from "@/common/explore/data";
import { ExploreXsimgStyle, ResponsiveXs } from "@/common/explore/style";
import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Productimg = () => {
  return (
    <Box sx={{ pb: 7 }}>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={ResponsiveXs}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <main>
          <img
            style={ExploreXsimgStyle}
            src={ExploreXsimage.map(() => {
              `/images/${ExploreXsimage.pic}`;
            })}
            alt=""
          />
        </main>
        {/* <img style={ExploreXsimgStyle} src="/images/manAccessory.png" alt="" />

        <img style={ExploreXsimgStyle} src="/images/manAccessory.png" alt="" />

        <img style={ExploreXsimgStyle} src="/images/manAccessory.png" alt="" /> */}
      </Carousel>
    </Box>
  );
};

export default Productimg;
// style={{ width: "100%", display: "block" }}
