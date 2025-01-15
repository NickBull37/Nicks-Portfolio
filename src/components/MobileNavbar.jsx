import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Box, Typography, AppBar, Toolbar, Container, IconButton, Menu, MenuItem } from '@mui/material';
import { nblogo } from '../utils/constants';
import MenuIcon from '@mui/icons-material/Menu';

const NavbarContainer = styled(Box)(({ theme }) => ({
    display: 'flex', // default size
    [theme.breakpoints.up('md')]: {
        display: 'none', // for medium and larger screens
    },
    backgroundColor: '#080808',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    paddingTop: '0.5rem',
    alignItems: 'center',
    gap: 8,
}));

const NavMenuContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1
}));

const MobileNavbar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    
    return (
        <NavbarContainer>

            <AppBar
                position="static"
                elevation={0}
                sx={{
                    backgroundColor: '#080808'
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <LogoContainer
                            // className="grad-border"
                        >
                            <img src={nblogo} height={40}/>
                            {/* <Typography
                                className="progress-h3"
                            >
                                Portfolio
                            </Typography> */}
                        </LogoContainer>

                        <NavMenuContainer>

                            <IconButton
                                size="large"
                                aria-label="menu icon"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon
                                    sx={{
                                        color: '#fff',
                                    }}
                                />
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
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                <MenuItem
                                    key={'about-me'}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography>
                                        <a href='#about-me'>
                                            About Me
                                        </a>
                                    </Typography>
                                </MenuItem>

                                <MenuItem
                                    key={'services'}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography>
                                        <a href='#services'>
                                            Services
                                        </a>
                                    </Typography>
                                </MenuItem>

                                <MenuItem
                                    key={'experience'}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography>
                                        <a href='#work-history'>
                                            Experience
                                        </a>
                                    </Typography>
                                </MenuItem>

                                <MenuItem
                                    key={'portfolio'}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography>
                                        <a href='#portfolio'>
                                            Portfolio
                                        </a>
                                    </Typography>
                                </MenuItem>

                                <MenuItem
                                    key={'contact'}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography>
                                        <a href='#contact'>
                                            Contact
                                        </a>
                                    </Typography>
                                </MenuItem>
                                
                            </Menu>
                        </NavMenuContainer>

                    </Toolbar>
                </Container>
            </AppBar>
        </NavbarContainer>
    );
}

export default MobileNavbar;