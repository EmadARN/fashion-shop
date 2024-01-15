import { CardInfo } from "./data";
import React, { useState } from "react";
import { responsive_CardProductView_List } from "@/components/home/CardProductView/style";
import Carousels from "@/common/carousel/Carousels";
import CardProductView_List from "@/components/home/CardProductView/widgets/CardProductView_List";
import { Box } from "@mui/system";
import { CustomButtonGroupAsArrows } from "@/common/CustomButtons_Slider";

function CardProductView() {
  const [activeTab, setActiveTab] = useState(0);
  const [colorTab, setColorTab] = useState(0);

  const colorText = (item) => {
    const ct = colorTab === item.id ? "#fff" : "#222";
    return ct;
  };
  const bgColor = (item) => {
    const br = activeTab !== item.id ? "#f9f9f9" : "#c72929";
    return br;
  };
  return (
    <Box>
      <Carousels
        responsive={responsive_CardProductView_List}
        dotted={false}
        arrow={false}
        customButtonGroup={<CustomButtonGroupAsArrows />}
      >
        {CardInfo.map((item) => {
          return (
            <CardProductView_List
              item={item}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              colorTab={colorTab}
              setColorTab={setColorTab}
              colorText={colorText}
              bgColor={bgColor}
            />
          );
        })}
      </Carousels>
    </Box>
  );
}
export default CardProductView;
