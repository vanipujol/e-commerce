import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuItem from '@mui/material/MenuItem';
import Brand from "./Brand.jsx";
import {NavLink} from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

const pages = ['Tortas', 'Tartas', 'Especialidades'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#F9E7E7" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
            style={{ width: '120px'}}
          >
              <Brand/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', "& .MuiMenu-paper":
                        { backgroundColor: "#F9E7E7" }},
              }}
            >
                {pages.map((page) => (
                    <NavLink className={`nav-link`} to={`/category/${page}`}>
                        <MenuItem key={page} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    </NavLink>
                ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
            style={{ width: '100%'}}
          >
              <Brand/>
          </Typography>
            <Box sx={{ flexGrow: 0 }} display={{xs: 'none', md: 'block' }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenUserMenu}
                    color="black"
                >
                    <Typography textAlign="center" >Categorias</Typography>
                    <ArrowDropDownIcon></ArrowDropDownIcon>
                </IconButton>

                <Menu
                    sx={{ mt: '45px', ".MuiMenu-paper":
                    { backgroundColor: "#F9E7E7", '.MuiOutlinedInput-notchedOutline': { borderRadius: "0%"}, ".MuiButtonBase-root-MuiIconButton-root:hover": {
                        borderRadius: "0%", "& .MuiTypography-root": {fontSize: "2rem"}
                    } }}}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {pages.map((page) => (
                        <NavLink className={`nav-link `} to={`/category/${page}`}  >
                            <MenuItem key={page} onClick={handleCloseUserMenu}  >
                                    <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        </NavLink>
                    ))}
                </Menu>
            </Box>
            <CartWidget/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;