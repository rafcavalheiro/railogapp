/* eslint-disable */

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DarkModeToggle from './DarkModeToggle';
import BasicMenu from './BasicMenu';
import Stack from '@mui/material/Stack';



export default function ButtonAppBar(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">

        <Toolbar>
          <BasicMenu />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <strong> RailogApp </strong> | Sistema Ferroviário e Logistico
          </Typography>

          <Stack direction="row" spacing={1}>
            <DarkModeToggle />
            <Button color="inherit">Modo Noturno</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}