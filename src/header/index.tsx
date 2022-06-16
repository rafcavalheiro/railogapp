/* eslint-disable */

import { FC } from 'react'
import { AppBar } from '@mui/material'


import ButtonAppBar from '@/header/ButtonAppBar'


const Header: FC = () => {
  return (
    <AppBar position='fixed'>
      <ButtonAppBar />
    </AppBar>
  )
}

export default Header
