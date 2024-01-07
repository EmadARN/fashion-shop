import React from "react";
import { GallaryGrid1, imgStyle } from "./style";
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import { image } from "./data";

const Explore = () => {
  return (
    <Container maxWidth="md">
      <Grid container sx={GallaryGrid1}>
        {image.map((item, index) => {
          return (
            <Grid xs={4} sm={3} md={3} sx={{ p: { xs: 0.2, md: 0 } }}>
              <Link
                style={{
                  color: "#fff",
                  padding: "3px",
                }}
                key={index}
                href={"#"}
              >
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
