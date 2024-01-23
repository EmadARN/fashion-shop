import { Button, Grid, Typography } from "@mui/material";
import {
  ButtonInsta,
  ContainerStyle,
  FontSze,
  InfoStyle,
  RedColor,
  bioItem,
  eyeStyle,
} from "../style";
import { IoMdEye } from "react-icons/io";

export default function ContainerGrid({
  name,
  viewpost,
  price,
  AboutTitle,
  alertTitle,
}) {
  return (
    <Grid container sx={ContainerStyle}>
      <Grid xs={12} style={InfoStyle}>
        <Typography sx={FontSze} mb="10px">
          مدل :
        </Typography>
        <Typography sx={FontSze} mb="10px">
          {name}
        </Typography>
      </Grid>

      <Grid item xs={12} sx={InfoStyle}>
        <Typography sx={FontSze} mb="10px">
          تعداد بازدید :
        </Typography>
        <Typography sx={FontSze}>
          <IoMdEye style={eyeStyle} />
          {viewpost}
        </Typography>
      </Grid>

      <Grid item xs={12} sx={bioItem}>
        <Typography sx={FontSze}>قیمت (تومان):</Typography>
        <Typography sx={(FontSze, RedColor)}>{price}</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography mt="20px">توضیحات:</Typography>
        <Typography sx={(FontSze, RedColor)}>{AboutTitle}</Typography>
      </Grid>
      <Grid>
        <Typography sx={FontSze}>توجه:</Typography>
        <Typography sx={(FontSze, RedColor)}>{alertTitle}</Typography>
      </Grid>
      <Button sx={ButtonInsta}>ورود به صفحه فروشگاه</Button>
    </Grid>
  );
}
