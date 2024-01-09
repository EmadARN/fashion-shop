import React, {useState} from "react";
import {Box} from "@mui/system";


const CardProductView_List = ({ item , colorTab, setColorTab, activeTab, setActiveTab }) => {
    const colorText=colorTab === item.id ? "#fff" : "#222"
    const bgColor= activeTab !== item.id ? "#fff" : "red"
    const clickHandler = (id)=>{
        setActiveTab(id)
        setColorTab(id)
    }

    return (



                <Box
                      onClick={()=> clickHandler(item.id)}
                      sx={{
                          minWidth: "130px",
                          minHeight: "190px",
                          width: "100%",
                          height:"100%",
                          backgroundColor:bgColor,
                          p:5,
                          borderRadius: "0 130px 0 130px"

                      }}
                      key={item.id}

                >

                    <span
                        onClick={()=> clickHandler(item.id)}

                        style={{
                            fontSize:"60px",
                            display:"flex",
                            justifyContent:"center",
                            color:colorText}}>
                        {item.img}


                    </span>

                    <p
                    onClick={(e)=> clickHandler(item.id)}
                    style={{
                        fontWeight:"bold",
                        textAlign:"center",
                        color:colorText
                    }}>
                    {item.name}
                </p>

                </Box>
    );
};

export default CardProductView_List;
