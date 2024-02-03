import React from "react";
import { ContainerStyle, GallaryGrid1, GridStyle, LinkStyle, imgStyle } from "./style";
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import { image } from "./data";

const Explore = ({displayxsHome}) => {
  return (
    <Container maxWidth="md" sx={ContainerStyle(displayxsHome)}>
      <Grid container sx={GallaryGrid1}>
        {image.map((item, index) => {
          return (
            <Grid xs={4} sm={3} md={3} sx={GridStyle}>
              <Link style={LinkStyle} key={index} href={"#"}>
                <img
                  className="imgScale"
                  style={imgStyle}
                  src={`/images/${item}`}
                ></img>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Explore;
