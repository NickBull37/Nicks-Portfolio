import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import { nblogo } from '../utils/constants';

const NavbarContainer = styled(Box)(({ theme }) => ({
    display: 'flex', // for medium and larger screens
    [theme.breakpoints.down('md')]: {
        display: 'none', // for small screens
    },
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#080808',
    height: '70px',
    paddingLeft: '1.5rem',
    paddingRight: '2rem',
}));

const LogoContainer = styled(Box)(() => ({
    display: 'flex',
    paddingRight: '0.5rem',
    paddingLeft: '0.5rem',
    paddingBottom: '0.125rem',
    alignItems: 'center',
    gap: 8,
}));

const NavBtnContainer = styled(Box)(() => ({
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '2.25rem',
}));

const NavBtn = styled(Button)(() => ({
    minWidth: 0,
    margin: 0,
    padding: '0 4px',
    color: '#fff',
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#080808',
    },
}));

const Navbar = () => {

    return (
        <NavbarContainer>

            <LogoContainer
                className="grad-border"
            >
                <img src={nblogo} height={24}/>
                <Typography
                    className="progress-h3"
                >
                    Portfolio
                </Typography>
            </LogoContainer>
            
            <NavBtnContainer>
                <NavBtn
                    className='hover-fade'
                    href='#about-me'
                >
                    About Me
                </NavBtn>

                <NavBtn
                    className='hover-fade'
                    href='#services'
                >
                    Services
                </NavBtn>

                <NavBtn
                    className='hover-fade'
                    href='#work-history'
                >
                    Experience
                </NavBtn>
                
                <NavBtn
                    className='hover-fade'
                    href='#portfolio'
                >
                    Portfolio
                </NavBtn>

                <NavBtn
                    className='hover-fade'
                    href='#contact'
                >
                    Contact
                </NavBtn>
            </NavBtnContainer>

        </NavbarContainer>
    );
}

export default Navbar;