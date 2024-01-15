import React from "react";
import { Box } from "@mui/material";
import { market_list_data } from "./data";
import RedButton from "@/common/redButton/Button";
import Carousels from "@/common/carousel/Carousels";
import Market_list_data_grid from "./widgets/Market_list_data_grid";
import { responsive_MarketList } from "./style";
import { CustomButtonGroupAsArrows, CustomButtonGroupAsArrows2 } from "@/common/CustomButtons_Slider";
import { Container } from "@mui/material";
const Market_item = () => {
  return (
    <>
 <Container maxWidth="lg">
      <Carousels
        responsive={responsive_MarketList}
        dotted={false}
        arrow={false}
        customButtonGroup={<CustomButtonGroupAsArrows2 />}
      >
    
        {market_list_data.map((item) => {
          return <Market_list_data_grid item={item} />;
        })}
       
      </Carousels>
      </Container>

      <Box display="flex" justifyContent="center" mt="2%" width="100%">
        <RedButton name={"همه ی فروشگاه ها"} />
      </Box>
      
    </>
  );
};

export default Market_item;
