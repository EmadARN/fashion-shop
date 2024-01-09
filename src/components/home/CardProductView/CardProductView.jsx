import { CardInfo } from "./data";
import React, { useState } from "react";
import { responsive_CardProductView_List } from "@/components/home/CardProductView/style";
import Carousels from "@/common/carousel/Carousels";
import CardProductView_List from "@/components/home/CardProductView/widgets/CardProductView_List";
import { Box } from "@mui/system";

function CardProductView() {
  const [activeTab, setActiveTab] = useState(0);
  const [colorTab, setColorTab] = useState(0);

  const colorText = (item) => {
    const ct = colorTab === item.id ? "#fff" : "#222";
    return ct;
  };
  const bgColor = (item) => {
    const br = activeTab !== item.id ? "#fff" : "red";
    return br;
  };
  return (
    <Box sx={{ py: 15 }}>
      <Carousels
        responsive={responsive_CardProductView_List}
        dotted={false}
        arrow={true}
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
