import React, { useState } from 'react';
import { aboutImage } from '../utils/constants';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

const About = () => {

    const [activeTabLink, setActiveTabLink] = useState('skills');
    const [activeTabContent, setActiveTabContent] = useState('skills');

    function opentab(tabname){
        setActiveTabLink(tabname);
        setActiveTabContent(tabname);
    }

    return (
        <Box
            id="about"
            sx={{
                pt: { xs: '0', md: '40px' },
                pb: '40px',
                px: '0',
                color: '#ababab'
            }}
        >
            <Box className="container">
                <Box className="row">
                    <Box className="about-col-1">
                        <img src={aboutImage} alt="Nick" />
                    </Box>
                    <Box className="about-col-2">
                        <Typography
                            sx={{
                                fontSize: '3.75rem',
                                fontWeight: '600',
                                color: '#fff'
                            }}
                        >
                            About Me
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '1rem', md: '1.125rem' }
                            }}
                        >
                            I am a full-stack software developer with 5+ years experience working primarily on .NET applications. As a dedicated problem solver, I have focused
                            on developing simple, efficient, & scalable solutions that solve complex problems. Outside of work, I enjoy playing Destiny 2 or a good game of chess, hanging 
                            out with my friends, and cheering on the Philadelphia sports teams.
                        </Typography>
                        <Box
                            display={'flex'}
                            justifyContent={{ xs: 'space-between', md: 'inherit' }}
                            gap={{ xs: 0, md: 8 }}
                            sx={{
                                mt: '40px',
                                mb: '10px'
                            }}
                        >
                            <Typography
                                className={`tab-links ${activeTabLink === 'skills' ? 'active-link' : ''}`}
                                onClick={() => opentab('skills')}
                                sx={{
                                    fontSize: '1.375rem',
                                    fontWeight: '600',
                                }}
                            >
                                Skills
                            </Typography>
                            <Typography
                                className={`tab-links ${activeTabLink === 'experience' ? 'active-link' : ''}`}
                                onClick={() => opentab('experience')}
                                sx={{
                                    fontSize: '1.375rem',
                                    fontWeight: '600',
                                }}
                            >
                                Experience
                            </Typography>
                            <Typography
                                className={`tab-links ${activeTabLink === 'technologies' ? 'active-link' : ''}`}
                                onClick={() => opentab('technologies')}
                                sx={{
                                    fontSize: '1.375rem',
                                    fontWeight: '600',
                                }}
                            >
                                Tools
                            </Typography>
                        </Box>
                        <Box
                            id="skills"
                            className={`tab-contents ${activeTabContent === 'skills' ? 'active-tab' : ''}`}
                        >
                            <List>
                                <ListItem sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="API Development"
                                        secondary="Building fast and scalable RESTful APIs"
                                        secondaryTypographyProps={{ fontSize: '1.125rem', color: '#ababab', pt: '2px' }}
                                        sx={{ color: '#990099' }}
                                    />
                                </ListItem>
                                <ListItem sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="External Integrations"
                                        secondary="Creating reliable integrations with 3rd party services"
                                        secondaryTypographyProps={{ fontSize: '1.125rem', color: '#ababab', pt: '2px' }}
                                        sx={{ color: '#990099' }}
                                    />
                                </ListItem>
                                <ListItem sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="UI/UX Design"
                                        secondary="Designing Web/App interfaces"
                                        secondaryTypographyProps={{ fontSize: '1.125rem', color: '#ababab', pt: '2px' }}
                                        sx={{ color: '#990099' }}
                                    />
                                </ListItem>
                            </List>
                        </Box>
                        <Box
                            id="experience"
                            className={`tab-contents ${activeTabContent === 'experience' ? 'active-tab' : ''}`}
                        >
                            <List>
                                <ListItem sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="2023 - Current"
                                        secondary={
                                            <span>
                                                Software developer at WebstaurantStore.com{' '}
                                                <a
                                                    href="https://www.webstaurantstore.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <OpenInNewRoundedIcon fontSize='small' sx={{ color: "#ff00ff", ml: 1 }} />
                                                </a>
                                            </span>
                                        }
                                        secondaryTypographyProps={{ fontSize: '1.125rem', color: '#ababab', pt: '2px' }}
                                        sx={{ color: '#990099' }}
                                    />
                                </ListItem>
                                <ListItem sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="2023 - 2023"
                                        secondary={
                                            <span>
                                                Software developer at Clarity Ventures, Inc.{' '}
                                                <a
                                                    href="https://www.clarity-ventures.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <OpenInNewRoundedIcon fontSize='small' sx={{ color: "#ff00ff", ml: 1 }} />
                                                </a>
                                            </span>
                                        }
                                        secondaryTypographyProps={{ fontSize: '1.125rem', color: '#ababab', pt: '2px' }}
                                        sx={{ color: '#990099' }}
                                    />
                                </ListItem>
                                <ListItem sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="2019 - 2022"
                                        secondary={
                                            <span>
                                                Software developer at Anovaa{' '}
                                                <a
                                                    href="https://www.anovaa.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <OpenInNewRoundedIcon fontSize='small' sx={{ color: "#ff00ff", ml: 1 }} />
                                                </a>
                                            </span>
                                        }
                                        secondaryTypographyProps={{ fontSize: '1.125rem', color: '#ababab', pt: '2px' }}
                                        sx={{ color: '#990099' }}
                                    />
                                </ListItem>
                            </List>
                        </Box>
                        <Box
                            id="technologies"
                            className={`tab-contents ${activeTabContent === 'technologies' ? 'active-tab' : ''}`}
                        >
                            <List>
                                <ListItem  sx={{ px: 0 }}>
                                    <ListItemText
                                        primary=".NET / ASP.NET"
                                        secondary="Developing clean & scalable web applications"
                                        secondaryTypographyProps={{ fontSize: '1.125rem', color: '#ababab', pt: '2px' }}
                                        sx={{ color: '#990099' }}
                                    />
                                </ListItem>
                                <ListItem  sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="Entity Framework"
                                        secondary="Advanced data mapping using EF and LINQ"
                                        secondaryTypographyProps={{ fontSize: '1.125rem', color: '#ababab', pt: '2px' }}
                                        sx={{ color: '#990099' }}
                                    />
                                </ListItem>
                                <ListItem  sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="React JS / Material UI"
                                        secondary="Developing mobile responsive front-end solutions"
                                        secondaryTypographyProps={{ fontSize: '1.125rem', color: '#ababab', pt: '2px' }}
                                        sx={{ color: '#990099' }}
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default About;