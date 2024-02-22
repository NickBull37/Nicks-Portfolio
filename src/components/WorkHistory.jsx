import React from 'react';
import { Box, Typography, Card, CardMedia, Button, Accordion, AccordionActions, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { webstaurantLogo, clarityLogo, anovaaLogo, millersvilleLogo } from '../utils/constants';

const WorkHistory = () => {
    return (
        <Box id="work-history">
            <Box className="container">
                <Typography
                    sx={{
                        fontSize: '3.75rem',
                        fontWeight: '600',
                        color: '#fff'
                    }}
                >
                    My Experience
                </Typography>
                <Box display={'flex'} gap={8} mt={'20px'}>
                    <Box>
                        <Accordion sx={{ color: '#fff', backgroundColor: '#262626' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height='25'
                                        image={webstaurantLogo}
                                        alt=""
                                    />
                                </Card>
                                <Typography
                                    sx={{
                                        width: { xs: '75%', md: '35%' },
                                        flexShrink: 0,
                                        ml: 2
                                    }}
                                >
                                    WebstaurantStore.com
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#cccccc',
                                        display: { xs: 'none', md: 'block' }
                                    }}
                                >
                                    Software Developer
                                </Typography>
                                {/* <Chip
                                    className="color-bg-acc"
                                    label="current"
                                    size='small'
                                    sx={{
                                        ml: 4
                                    }}
                                /> */}
                            </AccordionSummary>
                            <AccordionDetails
                                className="border-acc-top"
                                sx={{
                                    pt: 4
                                }}
                            >
                                <Typography mb={1}>
                                    <CalendarMonthIcon
                                        size='small'
                                        sx={{
                                            mb: -0.5,
                                            mr: 1,
                                            color: '#ababab'
                                        }}
                                    />
                                    November 2023 - Current
                                </Typography>
                                <Typography>
                                    <LocationOnIcon
                                        size='small'
                                        sx={{
                                            mb: -0.5,
                                            mr: 1,
                                            color: '#ababab'
                                        }}
                                    />
                                    Lititz, PA
                                </Typography>
                                <Box sx={{ px: 1 }}>
                                    <Typography><br /></Typography>
                                    <Typography>
                                        I joined the WebstaurantStore.com mobile back-end team to assist creating the WebstaurantStore mobile app. My daily tasks 
                                        usually involve building new features specific to the mobile app or recreating features from the desktop application. 
                                    </Typography>
                                    <Typography><br /></Typography>
                                    <Typography>
                                        My largest project so far is a mobile device Image Search feature which allows users to take a picture of a product 
                                        and search our product catalog for similar items. We utilize OpenAI and Tensorflow technologies to perform these 
                                        searches.
                                    </Typography>
                                    <Typography><br /></Typography>
                                </Box>
                            </AccordionDetails>
                            <AccordionActions>
                                <Typography variant='body2'>
                                    Check out their link here
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="success"
                                    sx={{
                                        textTransform: 'none',
                                        ml: 1
                                    }}
                                >
                                    Webstaurant
                                </Button>
                            </AccordionActions>
                        </Accordion>
                        <Accordion sx={{ color: '#fff', backgroundColor: '#262626' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height='25'
                                        image={clarityLogo}
                                        alt=""
                                    />
                                </Card>
                                <Typography
                                    sx={{
                                        width: { xs: '75%', md: '35%' },
                                        flexShrink: 0,
                                        ml: 2
                                    }}
                                >
                                    Clarity Ventures, Inc.
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#cccccc',
                                        display: { xs: 'none', md: 'block' }
                                    }}
                                >
                                    Software Developer
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                className="border-acc-top"
                                sx={{
                                    pt: 4
                                }}
                            >
                                <Typography mb={1}>
                                    <CalendarMonthIcon
                                        size='small'
                                        sx={{
                                            mb: -0.5,
                                            mr: 1,
                                            color: '#ababab'
                                        }}
                                    />
                                    January 2023 - June 2023
                                </Typography>
                                <Typography>
                                    <LocationOnIcon
                                        size='small'
                                        sx={{
                                            mb: -0.5,
                                            mr: 1,
                                            color: '#ababab'
                                        }}
                                    />
                                    Austin, TX
                                </Typography>
                                <Box sx={{ px: 1 }}>
                                    <Typography><br /></Typography>
                                    <Typography>
                                        At Clarity, I was responsible for designing and implementing new features and client customizations for Clarity's 
                                        eCommerce platform. These updates mostly included updates to default business logic or integrations with new 3rd
                                        party systems.
                                    </Typography>
                                    <Typography><br /></Typography>
                                    <Typography>
                                        I completed several large integration projects including Paya payment processing, the National Weather Service, and HautAI
                                        <ul className="pad-list">
                                            <li>Paya Payment Processing - for processing credit card and ACH payments</li>
                                            <li>Haut AI - a SaaS provider that generates skin analysis reports for user uploaded images</li>
                                            <li>National Weather Service - for limiting shipping options based on forecasted temperature</li>
                                        </ul>
                                    </Typography>
                                    <Typography><br /></Typography>
                                    <Typography>
                                        I also designed and built a brand new platform AI Provider including an integration with Open AI's ChatGPT for generating 
                                        client product details and images. The goal of this project was to use AI generation to reduce the amount of time & effort
                                        needed to update product details. 
                                    </Typography>
                                    <Typography><br /></Typography>
                                    <Typography>
                                        Clarity also gave me the opportunity to lead multiple training sessions with the development team focused on various parts 
                                        of the core platform. Each training session was approximately 1 hour 30 mins.
                                    </Typography>
                                    <Typography><br /></Typography>
                                </Box>
                            </AccordionDetails>
                            <AccordionActions>
                                <Typography variant='body2'>
                                    Check out their link here
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        backgroundColor: '#26b5d9',
                                        ml: 1
                                    }}
                                >
                                    Clarity Ventures
                                </Button>
                            </AccordionActions>
                        </Accordion>
                        <Accordion sx={{ color: '#fff', backgroundColor: '#262626' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height='25'
                                        image={anovaaLogo}
                                        alt=""
                                    />
                                </Card>
                                <Typography
                                    sx={{
                                        width: { xs: '75%', md: '35%' },
                                        flexShrink: 0,
                                        ml: 2
                                    }}
                                >
                                    Anovaa
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#cccccc',
                                        display: { xs: 'none', md: 'block' }
                                    }}
                                >
                                    Jr. Software Developer
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                className="border-acc-top"
                                sx={{
                                    pt: 4
                                }}
                            >
                                <Typography mb={1}>
                                    <CalendarMonthIcon
                                        size='small'
                                        sx={{
                                            mb: -0.5,
                                            mr: 1,
                                            color: '#ababab'
                                        }}
                                    />
                                    January 2019 - August 2022
                                </Typography>
                                <Typography>
                                    <LocationOnIcon
                                        size='small'
                                        sx={{
                                            mb: -0.5,
                                            mr: 1,
                                            color: '#ababab'
                                        }}
                                    />
                                    Malvern, PA
                                </Typography>
                                <Box sx={{ px: 1 }}>
                                    <Typography><br /></Typography>
                                    <Typography>
                                        Shortly after obtaining my degree, I started working at Entech (now Anovaa) on the Web Content Publishing Team. We were responsibile for 
                                        all content updates requested for 2 client websites and 3 corresponding microsites. The goal of this entry level team is to learn the company's,
                                        system, clients, and application, then move up to an application team after 1 year. I worked on this team for 8 months before moving up to an 
                                        application team.
                                    </Typography>
                                    <Typography><br /></Typography>
                                    <Typography>
                                        During my time with the WCP Team, my biggest project was the modernization of 100+ pages for the Citizens Bank  & Citizens One loan origination 
                                        websites. For this project, I was responsibile for creating all new web pages and overseeing the entire production deployment.
                                    </Typography>
                                    <Typography><br /></Typography>
                                    <Typography>
                                        I was then promoted to a full-stack position to work on the loan origination web application for Entech's largest client. Afterwards I was 
                                        selected to join Entech's original Platform (Anovaa) team from a pool of existing development teams shortly before the initial release.
                                    </Typography>
                                    <Typography><br /></Typography>
                                    <Typography>
                                        While on this team, I designed and implemented a new process to reduce development time of client agnostic UI layout changes by 66%. Since the
                                        platform was brand new, I also spent a lot of time writing new procedures & documentation for the new application.
                                    </Typography>
                                    <Typography><br /></Typography>
                                </Box>
                            </AccordionDetails>
                            <AccordionActions>
                                <Typography variant='body2'>
                                    Check out their link here
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        textTransform: 'none',
                                        ml: 1
                                    }}
                                >
                                    Anovaa
                                </Button>
                            </AccordionActions>
                        </Accordion>
                        <Accordion sx={{ color: '#fff', backgroundColor: '#262626' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height='25'
                                        image={millersvilleLogo}
                                        alt=""
                                    />
                                </Card>
                                <Typography
                                    sx={{
                                        width: { xs: '75%', md: '35%' },
                                        flexShrink: 0,
                                        ml: 2
                                    }}
                                >
                                    Millersville University
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#cccccc',
                                        display: { xs: 'none', md: 'block' }
                                    }}
                                >
                                    Undergrad Student
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                className="border-acc-top"
                                sx={{
                                    pt: 4
                                }}
                            >
                                <Typography mb={1}>
                                    <CalendarMonthIcon
                                        size='small'
                                        sx={{
                                            mb: -0.5,
                                            mr: 1,
                                            color: '#ababab'
                                        }}
                                    />
                                    September 2014 - December 2018
                                </Typography>
                                <Typography>
                                    <LocationOnIcon
                                        size='small'
                                        sx={{
                                            mb: -0.5,
                                            mr: 1,
                                            color: '#ababab'
                                        }}
                                    />
                                    Millersville, PA
                                </Typography>
                                <Box sx={{ px: 1 }}>
                                    <Typography><br /></Typography>
                                    <Typography>
                                        I graduated from Millersville univerity in 2018 with a Bachelor's degree in Computer Science. Below are some of the relevant courses I completed while obtaining my degree
                                        <ul className="pad-list">
                                            <li>Software Engineering</li>
                                            <li>Database & Web Development</li>
                                            <li>Data Structures</li>
                                            <li>Computer Architecture</li>
                                            <li>Technical Writing</li>
                                        </ul>
                                    </Typography>
                                    <Typography><br /></Typography>
                                    <Typography>
                                        During my time at Millersville I also worked part-time at the Sugar Bowl, a local family owned restaurant on campus, while maintaining a full course load.
                                    </Typography>
                                    <Typography><br /></Typography>
                                </Box>
                            </AccordionDetails>
                            <AccordionActions>
                                <Typography variant='body2'>
                                    Check out their link here
                                </Typography>
                                <Button
                                    variant="contained"
                                    color='warning'
                                    sx={{
                                        textTransform: 'none',
                                        backgroundColor: '#b3b300',
                                        // color: '#e6e600',
                                        ml: 1
                                    }}
                                >
                                    Millersville
                                </Button>
                            </AccordionActions>
                        </Accordion>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default WorkHistory;