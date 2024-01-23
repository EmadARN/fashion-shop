import SignUpMobileLatout from '@/common/signUp/signUpMobile_Layout/SignUpMobileLatout'
import { Box } from '@mui/material'
import React from 'react'
import { BoxStyle1 } from '../style'
import VerifyCode from '@/common/signUp/verify_code/VerifyCode'
import Btn from '@/common/signUp/Btn/Btn'
import Svg from './widgets/Svg'

const VerifyCodeMobile = () => {
  return (
    <SignUpMobileLatout>
      <Box sx={BoxStyle1}>
        <VerifyCode />
        <Btn />
      </Box>
      <Box>
        <Svg />
      </Box>
    </SignUpMobileLatout>
  )
}

export default VerifyCodeMobile