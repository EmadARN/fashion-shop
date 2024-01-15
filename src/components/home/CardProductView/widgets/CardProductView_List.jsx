import React from "react";
import { Box } from "@mui/system";
import { style1, style2, style3 } from "../style";

const CardProductView_List = ({
  item,
  setColorTab,
  setActiveTab,
  colorText,
  bgColor,
}) => {
  const clickHandler = (id) => {
    setActiveTab(id);
    setColorTab(id);
  };

  return (
    <Box
    mt={5}
      onClick={() => clickHandler(item.id)}
      sx={style1(bgColor, item)}
      key={item.id}
    >
      <span
        onClick={() => clickHandler(item.id)}
        style={style2(colorText, item)}
      >
        {item.img}
      </span>

      <p onClick={(e) => clickHandler(item.id)} style={style3(colorText, item)}>
        {item.name}
      </p>
    </Box>
  );
};

export default CardProductView_List;
