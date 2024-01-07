import React from "react";
import { Grid, Stack, Box } from "@mui/material";
import { market_list_data } from "./data";


import RedButton from "@/common/redButton/Button";
import Market_list_data_grid from "./widgets/Market_list_data_grid";
const Market_item = () => {
  return (
    <Grid container  sx={{overflowX:"auto",overflowY:"hidden",whiteSpace:"nowrap"}}>
      <Stack
        display="flex"
        justifyContent="center"
        direction="row"
        spacing={5}
        width="100%"
      >
        {market_list_data.map((item) => {
          return <Market_list_data_grid item={item} />;
        })}
      </Stack>
      <Box
        sx={{ my: 10 }}
        display="flex"
        justifyContent="center"
        mt="3%"
        width="100%"
      >
        <RedButton name={"همه ی فروشگاه ها"} />
      </Box>
    </Grid>
  );
};

export default Market_item;
