import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { aboutImage } from '../utils/constants'

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
                pt: '80px',
                pb: '40px',
                px: '0',
                color: '#ababab'
            }}
        >
            <Box className="container">
                <Box className="row">
                    <Box className="about-col-1">
                        <img src={aboutImage} alt="" />
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
                        <Typography>
                            I am a proven .NET Developer with 4-year Computer Science degree and 4+ years experience. As a dedicated problem solver, I have focused
                            on developing simple & efficient code to solve complex problems. Through my time at Clarity & Anovaa, I have gained hands-on
                            development experience using C# and .NET and remain motivated to expanding my skill set.
                        </Typography>
                        <Box
                            display={'flex'}
                            justifyContent={{ xs: 'space-between', md: 'inherit' }}
                            gap={{ xs: 0, md: 8 }}
                            sx={{
                                mt: {xs: '40px', md: '20px'},
                                mb: '15px'
                            }}
                        >
                            <Typography
                                className={`tab-links ${activeTabLink === 'skills' ? 'active-link' : ''}`}
                                onClick={() => opentab('skills')}
                                sx={{
                                    fontSize: '1.375rem',
                                    fontWeight: '500',
                                }}
                            >
                                Skills
                            </Typography>
                            <Typography
                                className={`tab-links ${activeTabLink === 'experience' ? 'active-link' : ''}`}
                                onClick={() => opentab('experience')}
                                sx={{
                                    fontSize: '1.375rem',
                                    fontWeight: '500',
                                }}
                            >
                                Experience
                            </Typography>
                            <Typography
                                className={`tab-links ${activeTabLink === 'technologies' ? 'active-link' : ''}`}
                                onClick={() => opentab('technologies')}
                                sx={{
                                    fontSize: '1.375rem',
                                    fontWeight: '500',
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
                                <ListItem  sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="2023 - Current"
                                        secondary="Software developer at TheWebstarauntStore.com"
                                        secondaryTypographyProps={{ fontSize: '1.125rem', color: '#ababab', pt: '2px' }}
                                        sx={{ color: '#990099' }}
                                    />
                                </ListItem>
                                <ListItem  sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="2023 - 2023"
                                        secondary="Software developer at Clarity Ventures Inc."
                                        secondaryTypographyProps={{ fontSize: '1.125rem', color: '#ababab', pt: '2px' }}
                                        sx={{ color: '#990099' }}
                                    />
                                </ListItem>
                                <ListItem  sx={{ px: 0 }}>
                                    <ListItemText
                                        primary="2019 - 2022"
                                        secondary="Software developer at Entech LLC."
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
                                        secondary="Developing scalable web applications"
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
                                        primary="React JS"
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