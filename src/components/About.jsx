import React from 'react';
import { aboutImage } from '../utils/constants';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import PropTypes from 'prop-types';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

function CustomTabPanel(props) {

    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const About = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            id="about"
            sx={{
                pt: { xs: 8, md: 12 },
                pb: 4,
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
                            sx={{
                                width: '100%',
                                mt: "1rem"
                            }}
                        >
                            <Box
                                sx={{
                                    borderBottom: 1,
                                    borderColor: 'divider'
                                }}
                            >
                                <Tabs
                                    value={value}
                                    variant="fullWidth"
                                    textColor="secondary"
                                    indicatorColor="secondary"
                                    onChange={handleChange}
                                    aria-label="About me tabs"
                                >
                                    <Tab label="Skills" {...a11yProps(0)} />
                                    <Tab label="Experience" {...a11yProps(1)} />
                                    <Tab label="Tools" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <Typography variant='body2' className="about-mini-header">
                                    API Development
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                                        mb: 2
                                    }}
                                >
                                    Building fast and scalable RESTful APIs
                                </Typography>
                                <Typography variant='body2' className="about-mini-header">
                                    External Integrations
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                                        mb: 2
                                    }}
                                >
                                    Creating reliable integrations with 3rd party services
                                </Typography>
                                <Typography variant='body2' className="about-mini-header">
                                    UI/UX Design
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.125rem', md: '1.25rem' }
                                    }}
                                >
                                    Designing Web/App interfaces
                                </Typography>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <Typography variant='body2' className="about-mini-header">
                                    2023 - Current
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                                        mb: 2
                                    }}
                                >
                                    Software developer at WebstaurantStore.com
                                    <a
                                        href="https://www.webstaurantstore.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <OpenInNewRoundedIcon fontSize='small' sx={{ color: "rgb(200, 90, 218)", ml: 1 }} />
                                    </a>
                                </Typography>
                                <Typography variant='body2' className="about-mini-header">
                                    2023 - 2023
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                                        mb: 2
                                    }}
                                >
                                    Software developer at Clarity Ventures, Inc.
                                    <a
                                        href="https://www.clarity-ventures.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <OpenInNewRoundedIcon fontSize='small' sx={{ color: "rgb(200, 90, 218)", ml: 1 }} />
                                    </a>
                                </Typography>
                                <Typography variant='body2' className="about-mini-header">
                                    2019 - 2022
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.125rem', md: '1.25rem' }
                                    }}
                                >
                                    Junior Software developer at Anovaa
                                    <a
                                        href="https://www.anovaa.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <OpenInNewRoundedIcon fontSize='small' sx={{ color: "rgb(200, 90, 218)", ml: 1 }} />
                                    </a>
                                </Typography>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={2}>
                                <Typography variant='body2' className="about-mini-header">
                                    .NET / ASP.NET
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                                        mb: 2
                                    }}
                                >
                                    Developing clean & scalable web applications
                                </Typography>
                                <Typography variant='body2' className="about-mini-header">
                                    Entity Framework
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                                        mb: 2
                                    }}
                                >
                                    Advanced data mapping using EF and LINQ
                                </Typography>
                                <Typography variant='body2' className="about-mini-header">
                                    React JS / Material UI
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                                    }}
                                >
                                    Developing mobile responsive front-end solutions
                                </Typography>
                            </CustomTabPanel>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default About;