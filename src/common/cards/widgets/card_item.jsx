import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import RedButton from '@/common/redButton/Button';
const CardItem = ({ item ,redbutton}) => {

 

  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={item.img}
        alt="green iguana"
      />
      <CardContent sx={{textAlign:"center", display:"flex", justifyContent:"center",flexDirection:'column'}}>
        <Typography gutterBottom variant="h5" component="div">
        {item.title}
        </Typography>
        <Typography variant="h6" fontWeight="bold" color="text.secondary">
          {item.desc}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions sx={{textAlign:"center", display:"flex", justifyContent:"center"}}>
   <RedButton name="مشاهده محصول"/>
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