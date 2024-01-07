import React from 'react'
import { Button } from "@mui/material";
import { ButtonStyle } from './style';

const RedButton = (props) => {
  return (
  <Button sx={ButtonStyle}>{props.name}</Button>
  )
}

export default RedButton