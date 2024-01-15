import React from "react";
import ReactImageMagnify from "react-image-magnify";

const Magnify = ({ image, width }) => {
  return (
    <div style={{ width: width }}>
      <ReactImageMagnify
        enlargedImagePosition="over"
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            src: `/images/${image}`,
          },

          largeImage: {
            src: `/images/${image}`,
            width: 1200,
            height: 1800,
          },
        }}
      />
    </div>
  );
};

export default Magnify;
