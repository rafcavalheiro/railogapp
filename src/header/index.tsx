import { FC } from 'react'
import { AppBar, Toolbar } from '@mui/material'

import DarkModeToggle from './DarkModeToggle'
import ButtonAppBar from '@/header/ButtonAppBar'

const Header: FC = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar variant='dense'>        
        <ButtonAppBar/>
      </Toolbar>
    </AppBar>
  )
}

export default Header
