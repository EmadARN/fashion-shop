import React from "react";
import { Box } from "@mui/material";
import { market_list_data } from "./data";

import RedButton from "@/common/redButton/Button";
import Market_list_data_grid from "@/common/carousel/widgets/Market_list_data_grid";

import Testcarousel from "@/common/carousel/Testcarousel";


const Market_item = () => {
  return (
    <>
      <Testcarousel>
        {market_list_data.map((item) => {
          return <Market_list_data_grid item={item} />;
        })}
      </Testcarousel>

      <Box
        sx={{ my: 10 }}
        display="flex"
        justifyContent="center"
        mt="3%"
        width="100%"
      >
        <RedButton name={"همه ی فروشگاه ها"} />
      </Box>
    </>
  );
};

export default Market_item;
