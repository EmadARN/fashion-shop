import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Box, Container } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";
import {
  CardContentStyle,
  CardStyle,
  CardMediaStyle,
  ProfileImgStyle,
  FirstBoxStyle,
  SeccondBoxStyle,
  ThirdBoxStyle,
  ForthBoxStyle,
  CardAction,
  ButtonStyle,
  ShareIconStyle,
  TypographyStyle,
  TimeTypoGraphy,
  TimeIcon,
  ItemDescStyle,
  xsTimeTypo,
} from "../Style";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ShareIcon from "@mui/icons-material/Share";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const CardItem = ({ item, redbutton }) => {
  return (
    <Card sx={CardStyle}>
      <CardActionArea>
        <Box
          sx={{
            position: "relative",
            minHeight: "40vh !important",
            width: "100%",
            backgroundImage: `url(${item.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
        <Box sx={FirstBoxStyle}>
          <Box mr={1}>
            <Typography sx={TimeTypoGraphy}>{item.time}</Typography>
          </Box>
          <Box>
            <AccessTimeIcon sx={TimeIcon} />
          </Box>
        </Box>

        <Box sx={SeccondBoxStyle}>
          <Box mr={1}>
            <Typography sx={xsTimeTypo}>{item.time}</Typography>
          </Box>
          <Box>
            <AccessTimeIcon sx={TimeIcon} />
          </Box>
        </Box>

        <Box sx={ThirdBoxStyle}>
          <img style={ProfileImgStyle} src={item.profile_img} alt="" />
        </Box>

        <Box sx={ForthBoxStyle}>
          <img style={ProfileImgStyle} src={item.profile_img} alt="" />
        </Box>

        <CardContent sx={CardContentStyle}>
          <Typography
            gutterBottom
            sx={TypographyStyle}
            component="div"
            fontWeight="550"
          >
            {item.title}
          </Typography>
          <Typography
            sx={ItemDescStyle}
            fontWeight="550"
            color="text.secondary"
          >
            {item.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={CardAction}>
        <Box
          width="50%"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          <ShareIcon sx={ShareIconStyle} />
          <RemoveRedEyeIcon sx={{ cursor: "pointer" }} />
        </Box>
        <Box width="58%">
          <Button sx={ButtonStyle} startIcon={<KeyboardBackspaceIcon />}>
            مشاهده محصول
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CardItem;
