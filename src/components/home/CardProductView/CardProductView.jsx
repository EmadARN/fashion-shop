import {Grid} from "@mui/material";
import {CardInfo} from "./data";
import React, {useRef, useState} from "react";
import {GridP, GridS, GridW, responsive_CardProductView_List} from "@/components/home/CardProductView/style";
import Carousel from "react-multi-carousel";
import {responsive_MarketList} from "@/components/home/market_list/style";
import {market_list_data} from "@/components/home/market_list/data";
import Market_list_data_grid from "@/components/home/market_list/widgets/Market_list_data_grid";
import Carousels from "@/common/carousel/Carousels";
import CardProductView_List from "@/components/home/CardProductView/widgets/CardProductView_List";
import {Box} from "@mui/system";






function CardProductView({Card ,item}){


    const [activeTab , setActiveTab] = useState(0);
    const [colorTab , setColorTab] = useState(0);


    return(


    <Box sx={{py:15}}>
        <Carousels responsive={responsive_CardProductView_List} dotted={false} arrow={true}>
            {CardInfo.map((item) => {
                return <CardProductView_List item={item} setActiveTab={setActiveTab} activeTab={activeTab} colorTab={colorTab} setColorTab={setColorTab} />;
            })}
        </Carousels>
    </Box>


    )
}
export default CardProductView


