import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";
import {  Button,CardActionArea, CardActions } from "@mui/material";
import { CardContentStyle,CardStyle,CardMediaStyle,ProfileImgStyle,FirstBoxStyle ,SeccondBoxStyle,ThirdBoxStyle,ForthBoxStyle,CardAction,ButtonStyle,ShareIconStyle,TypographyStyle} from "../Style";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const CardItem = ({ item, redbutton }) => {
  return (
    <Card sx={CardStyle}>
      <CardActionArea>
        <CardMedia
          sx={CardMediaStyle}
          component="img"
          height="300px"
       
          image={item.img}
          alt="green iguana"
        />
        <Box
          sx={
            FirstBoxStyle
          
          }
        
        >
          <Box ml={1}>
            <Typography>{item.time}</Typography>
          </Box>
          <Box>
            <AccessTimeIcon />
          </Box>
        </Box>



        <Box
          sx={
            
            SeccondBoxStyle
          }
  
        >
          <Box ml={1}>
            <Typography>{item.time}</Typography>
          </Box>
          <Box>
            <AccessTimeIcon />
          </Box>
        </Box>

        <Box
          sx={
            ThirdBoxStyle
          }
        
        >
          <img
            style={ProfileImgStyle}
            src={item.profile_img}
            alt=""
          />
        </Box>




        <Box
          sx={
            ForthBoxStyle
          }
         
        >
          <img
            style={ProfileImgStyle}
            src={item.profile_img}
            alt=""
          />
        </Box>
        <CardContent
          sx={
          
            CardContentStyle
          }
        >
          <Typography gutterBottom sx={TypographyStyle} component="div" fontWeight="550">
            {item.title}
          </Typography>
          <Typography variant="h6" fontWeight="550" color="text.secondary">
            {item.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={ CardAction}
      >
        <Box display="flex" justifyContent="flex-start" alignItems="center" >
          <ShareIcon sx={ShareIconStyle}/>
          <FavoriteBorderIcon sx={{cursor:"pointer"}}/>
        </Box>
        <Button sx={ButtonStyle }  endIcon={<KeyboardBackspaceIcon sx={{mr:2}}/>} >مشاهده محصول</Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
