import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";
import {  Button,CardActionArea, CardActions } from "@mui/material";
import RedButton from "@/common/redButton/Button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const CardItem = ({ item, redbutton }) => {
  return (
    <Card sx={{ maxWidth:{lg:300,xl:385} , height:{lg:520,xl:500},borderRadius:"10px" }}>
      <CardActionArea>
        <CardMedia
          sx={{ position: "relative", padding: "15px" }}
          component="img"
          height="300px"
       
          image={item.img}
          alt="green iguana"
        />
        <Box
          sx={{
            position: "absolute",
            top: "15px",
            left: "0",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: { xs: "blur(7px)", md: "blur(55px)" },
          }}
          width="115px"
          padding="7px"
        >
          <Box ml={1}>
            <Typography>{item.time}</Typography>
          </Box>
          <Box>
            <AccessTimeIcon />
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: {xs:"115px",sm:"120px",md:"110px",lg:"140px",xl:"105px"},
            right: "10px",
            width: 60,
            height: 60,
            borderRadius: 50,
            padding: "3px",
        

            cursor: "pointer",
          }}
          width="115px"
          padding="7px"
        >
          <img
            style={{ width: 60, height: 60, borderRadius: 50 }}
            src={item.profile_img}
            alt=""
          />
        </Box>
        <CardContent
          sx={{
          
            textAlign: "right",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography gutterBottom variant="h5" component="div" fontWeight="550">
            {item.title}
          </Typography>
          <Typography variant="h6" fontWeight="550" color="text.secondary">
            {item.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{ mt:2,textAlign: "center", display: "flex", justifyContent: "space-around" }}
      >
        <Box display="flex" justifyContent="flex-start" alignItems="center" >
          <ShareIcon sx={{ml:2,cursor:'pointer'}}/>
          <FavoriteBorderIcon sx={{cursor:"pointer"}}/>
        </Box>
        <Button sx={{ whiteSpace:'nowrap',width:"50%",fontSize:"18px",backgroundColor:"#ddd",color:"#111",'&:hover':{backgroundColor:'#e2d5d3'}}}  endIcon={<KeyboardBackspaceIcon sx={{mr:2}}/>} >مشاهده محصول</Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;

// <Grid
//   onMouseOver={() => setStyle(true)}
//   onMouseOut={() => setStyle(false)}
//   sx={cardStyle}
// >
//   <Box sx={{position:"relative"}}>
//     <img style={style ? filterImage:null} width="100%" src={item.img} alt="" />
//   </Box>

//   {style ? (
//     <Box my={4} sx={{ position:'absolute',top:110}}>

//       {/* <RedButton name="مشاهده ی محصول" /> */}
//       {redbutton}
//     </Box>
//   ) : null}

//       <Box mt={4}>
//         <Typography
//           sx={{ fontSize: { xs: "20px", md: "23px" } }}
//           fontWeight="bold"
//         >
//           {item.title}
//         </Typography>
//       </Box>

//       <Box mt={4} mb={4}>
//         <Typography
//           sx={{ fontSize: { xs: "15px", md: "20px" } }}
//           fontWeight="560"
//           variant="h6"
//         >
//           {item.price} تومان
//         </Typography>
//       </Box>

// </Grid>
