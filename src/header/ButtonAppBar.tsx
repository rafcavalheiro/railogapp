
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DarkModeToggle from './DarkModeToggle';
import BasicMenu from './BasicMenu';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



export default function ButtonAppBar(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
      
        <Toolbar>           
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}                       
          >                                                                       
        </IconButton>

        <MenuIcon/>
        <BasicMenu/>
        

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu                                                      
          </Typography>          

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RailogApp | Sistema Ferrroviário e Logistico                                           
          </Typography>           
          <div>
          <DarkModeToggle/>
          <Button color="inherit">Modo Noturno</Button>
          </div>          
        </Toolbar>
      </AppBar>
    </Box>
  );
}