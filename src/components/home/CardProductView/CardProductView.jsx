import {Grid} from "@mui/material";
import {CardInfo} from "./data";
import {useRef, useState} from "react";
import {GridP, GridS, GridW} from "@/components/home/CardProductView/style";
import Carousel from "react-multi-carousel";






function CardProductView({Card ,item}){

    const [activeTab , setActiveTab] = useState(1);
    const [colorTab , setColorTab] = useState(1);



    const clickHandler = (id , name)=>{
        setActiveTab(id)
        setColorTab(id)
    }


    return(

        <Grid container xs={12} sm={12} md={12} lg={12} xl={12}
              sx={{width: "100%",}}>


            {CardInfo.map((Card) =>(

                <Grid xs={2} sm={2} md={2} lg={2} xl={2}

                      onClick={()=> clickHandler(Card.id)}
                      sx={GridW}
                      key={Card.id}
                      className={activeTab === Card.id ? "active" : ""}>

                    <span
                        onClick={()=> clickHandler(Card.id.value)}
                        className={colorTab === Card.id ? "active-fff" : ""}
                        style={GridS}>
                        {Card.img}


                    </span>

                    <p
                    onClick={(e)=> clickHandler(e,setColorTab)}
                    className={colorTab === Card.id ? "active-fff" : ""}
                    style={GridP}>
                    {Card.name}
                </p>

                </Grid>
            ))}

         </Grid>


    )
}
export default CardProductView


