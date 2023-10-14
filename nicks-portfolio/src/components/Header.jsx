import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {

    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    function toggleMenu() {
        setSideMenuOpen(!sideMenuOpen);
    }

    useEffect(() => {
        var menu = document.getElementById("sidemenu");
        if (sideMenuOpen) {
            menu.style.right = "0";
        }
        else {
            menu.style.right = "-200px";
        }
    }, [sideMenuOpen])

    return (
        <Box id="header">
            <Box className="container">
                <nav>
                    <Typography
                        sx={{
                            fontSize: { xs: '1.875rem', md: '1.875rem' },
                            fontWeight: '600',
                            mt: '15px',
                            py: '5px',
                            px: '20px',
                            border: '1px solid #ff00ff',
                            borderRadius: '10px'
                        }}
                    >
                        Nick<span className="color-purple">'</span>s Portfolio
                    </Typography>
                    <ul id="sidemenu">
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <i className="fa-solid fa-xmark" onClick={() => toggleMenu()}></i>
                    </ul>
                    <i className="fa-solid fa-bars" onClick={() => toggleMenu()}></i>
                </nav>
                <Box
                    sx={{
                        mt: { xs: '197%', md: '20%' },
                    }}
                >
                    <Typography
                        variant='h5'
                        sx={{
                            fontSize: { xs: '1.5rem', md: '1.875rem' },
                        }}
                    >
                        Software Engineer
                    </Typography>
                    <Typography
                        variant='h4'
                        sx={{
                            fontSize: { xs: '2.5rem', md: '3.75rem' },
                            fontWeight: '700',
                            marginTop: '10px'
                        }}
                    >
                        Hi, my name is<br /><span className="color-purple">Nick Bulisky</span>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;