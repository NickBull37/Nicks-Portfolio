import React, { useState } from 'react';
import { Box, Stack, Typography, AppBar, Toolbar, IconButton, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DiamondIcon from '@mui/icons-material/Diamond';

const Header = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
        <Box pb={'2.5rem'}>
            <AppBar position="static" elevation={0}
                sx={{
                    backgroundColor: '#080808'
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/*---------------------------------- DESKTOP VIEW ----------------------------------*/}
                        {/* <DiamondIcon
                            className="color-acc"
                            sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
                        /> */}
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                                mt: 2,
                                display: { xs: 'none', md: 'flex' },
                                // fontFamily: 'monospace',
                                fontSize: '1.875rem',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                // Styles for border
                                py: '5px',
                                px: '20px',
                                border: '1px solid #ff00ff',
                                borderRadius: '10px'
                            }}
                        >
                            Nick<span className="color-purple">'</span>s Portfolio
                            {/* NICK<span className="color-purple">'</span>S PORTFOLIO */}
                            {/* <span className="color-purple">[</span>NICK<span className="color-purple">'</span>S PORTFOLIO<span className="color-purple">]</span> */}
                        </Typography>
                        <Box
                            justifyContent={'flex-end'}
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' }
                            }}
                        >
                            <Button
                                className='hover-fade'
                                size='large'
                                key='About'
                                href='#about'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}
                            >
                                About
                            </Button>
                            <Button
                                className='hover-fade'
                                size='large'
                                key='Services'
                                href='#services'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}
                            >
                                Services
                            </Button>
                            <Button
                                className='hover-fade'
                                size='large'
                                key='Experience'
                                href='#work-history'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}
                            >
                                Experience
                            </Button>
                            <Button
                                className='hover-fade'
                                size='large'
                                key='Portfolio'
                                href='#portfolio'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}
                            >
                                Portfolio
                            </Button>
                            <Button
                                className='hover-fade'
                                size='large'
                                key='Contact'
                                href='#contact'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}
                            >
                                Contact
                            </Button>
                        </Box>
                        {/*---------------------------------- MOBILE VIEW ----------------------------------*/}
                        {/* <DiamondIcon
                            className="color-acc"
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                ml: 1
                            }}
                        /> */}
                        <Typography
                            flexGrow={1}
                            ml={1}
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <span className='color-purple'>[&nbsp;</span>NICK<span className="color-purple">'</span>S PORTFOLIO<span className='color-purple'>&nbsp;]</span>
                        </Typography>
                        <Box
                            sx={{
                                display: { xs: 'flex', md: 'none' }
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
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
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem key={'about'} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"><a href='#about'>About</a></Typography>
                                </MenuItem>
                                <MenuItem key={'services'} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"><a href='#services'>Services</a></Typography>
                                </MenuItem>
                                <MenuItem key={'experience'} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"><a href='#work-history'>Experience</a></Typography>
                                </MenuItem>
                                <MenuItem key={'portfolio'} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"><a href='#portfolio'>Portfolio</a></Typography>
                                </MenuItem>
                                <MenuItem href='#contact' key={'contact'} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"><a href='#contact'>Contact</a></Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box className="container">
                <Box
                    display="flex"
                    flexDirection={{ xs: 'column-reverse', md: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Stack>
                        <Typography
                            variant='h4'
                            sx={{
                                fontSize: { xs: '2.5rem', md: '3.75rem' },
                                fontWeight: '700',
                                
                            }}
                        >
                            Hi, my name is<br /><span className="color-purple">Nick Bulisky</span>
                        </Typography>
                        <Typography
                            display={{ xs: 'none', md: 'block' }}
                            variant='h5'
                            sx={{
                                fontSize: { xs: '1.25rem', md: '1.5rem' },
                                marginTop: '30px'
                            }}
                        >
                            I am a full-stack software developer<br />from Pennsylvania.
                        </Typography>
                        <Typography
                            display={{ md: 'none' }}
                            variant='h5'
                            sx={{
                                fontSize: { xs: '1.25rem', md: '1.5rem' },
                                marginTop: '30px'
                            }}
                            >
                            I am a full-stack software developer from Pennsylvania.
                        </Typography>
                    </Stack>
                    <Box
                        id="hero-img"
                        sx={{
                            mb: { xs: '30px', md: '0' }
                        }}
                    >
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;