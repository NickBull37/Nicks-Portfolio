import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import { nblogo } from '../utils/constants';

const NavbarContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#080808',
    height: '60px',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.6), 0px 4px 5px 0px rgba(0, 0, 0, 0.35), 0px 1px 10px 0px rgba(0, 0, 0, 0.50)',
}));

const LogoContainer = styled(Box)(() => ({
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
}));

const NavBtn = styled(Button)(() => ({
    minWidth: 0,
    margin: 0,
    padding: 0,
    color: '#fff',
}));

const Navbar = () => {

    return (
        <NavbarContainer>

            <LogoContainer>
                <img src={nblogo} height={23}/>
                <Typography
                    className="progress-h3"
                >
                    Portfolio
                </Typography>
            </LogoContainer>
            
            <NavBtn>
                Home
            </NavBtn>

            <NavBtn>
                About Me
            </NavBtn>

            <NavBtn>
                Written Work
            </NavBtn>
            
            <NavBtn>
                Portfolio
            </NavBtn>

            <NavBtn>
                Contact
            </NavBtn>

        </NavbarContainer>
    );
}

export default Navbar;