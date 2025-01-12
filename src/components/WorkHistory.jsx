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
                        <Accordion
                            sx={{
                                color: '#fff',
                                backgroundColor: '#262626',
                                minHeight: '50px'
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height='25px'
                                        image={webstaurantLogo}
                                        alt="WebstaurantStore Logo"
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
                                    <Typography><br /></Typography>
                                    <Typography variant='button' sx={{ fontStyle: 'bold', fontSize: '1rem', color: '#bfbfbf' }}>
                                        My Role
                                    </Typography>
                                    <Typography sx={{ mt: 1 }}>
                                        I joined the WebstaurantStore.com mobile back-end team to assist with development of the WebstaurantStore mobile app. My daily 
                                        responsibilities include building new features specific to the mobile app or recreating features from the desktop application. 
                                        I felt right at home when I started here and was able to jump in and start contributing almost immediately. I've really enjoyed 
                                        the dynamic of my team and the environment we work in. I'm still pretty new in this role but I feel confident in skills here and 
                                        I'm ready to make a positive impact any way I can. 
                                    </Typography>
                                    <Typography><br /></Typography>
                                    <Typography><br /></Typography>
                                    {/* <Typography variant='button' sx={{ fontStyle: 'bold', fontSize: '1rem', color: '#bfbfbf' }}>
                                        Projects
                                    </Typography>
                                    <Typography sx={{ mt: 1 }}>
                                        My largest project so far is a mobile device Image Search feature which allows users to take a picture of a product 
                                        and search our product catalog for similar items. We utilize OpenAI and Tensorflow technologies to perform these 
                                        searches.
                                    </Typography>
                                    <Typography><br /></Typography> */}
                                </Box>
                            </AccordionDetails>
                            <AccordionActions>
                                <Typography variant='body2'>
                                    Check out their link here
                                </Typography>
                                <Button
                                    href='https://www.webstaurantstore.com/'
                                    target='_blank'
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
                        <Accordion
                            sx={{
                                color: '#fff',
                                backgroundColor: '#262626',
                                minHeight: '50px'
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height='25px'
                                        image={clarityLogo}
                                        alt="Clarity Ventures Logo"
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
                                    <Typography><br /></Typography>
                                    <Typography variant='button' sx={{ fontStyle: 'bold', fontSize: '1rem', color: '#bfbfbf' }}>
                                        My Role
                                    </Typography>
                                    <Typography sx={{ mt: 1 }}>
                                        Clarity was an amazing company to work for and really enjoyed the time I spent here. Even if it was only 6 months, I made 
                                        incredible strides here as a developer and met some fantastic people along the way. The company's enthusiasm for the work that they do and the 
                                        level of talent among the dev teams are truly unmatched. At Clarity, I was responsible for 
                                        designing and implementing new features and client customizations for Clarity's eCommerce platform. This mostly 
                                        included updates to default business logic requested by the client or integrations with new 3rd party systems to support 
                                        upcoming features.
                                    </Typography>
                                    <Typography><br /></Typography>
                                    <Typography>
                                        Clarity also holds training sessions for each team 2 hours every week. For developers, that meant a rotating schedule of team members picking 
                                        a topic and running a training session. Topics were compiled by the team and consisted of new technologies, internal systems, common mistakes, 
                                        and more. I had the opportunity to lead multiple training sessions with the development team focused on various parts of the core platform, 
                                        each session being approximately 1 hour 30 mins.
                                    </Typography>
                                    <Typography><br /></Typography>
                                    <Typography><br /></Typography>
                                    <Typography variant='button' sx={{ fontStyle: 'bold', fontSize: '1rem', color: '#bfbfbf' }}>
                                        Projects
                                    </Typography>
                                    <Typography sx={{ mt: 1 }}>
                                        I completed several large integration projects including Paya payment processing, the National Weather Service, and HautAI.
                                        <ul className="pad-list">
                                            <li>Paya Payment Processing - for processing credit card and ACH payments</li>
                                            <li>Haut AI - a SaaS provider that generates skin analysis reports for user uploaded images</li>
                                            <li>National Weather Service - to limit shipping options based on forecasted temperatures</li>
                                        </ul>
                                    </Typography>
                                    <Typography><br /></Typography>
                                    <Typography>
                                        Along with these projects, I also designed and implemented a brand new platform AI Provider including an integration with Open 
                                        AI's ChatGPT for generating product details and images. The goal of this project was to use AI generation to reduce the amount 
                                        of time & effort needed to update product details compared to doing it by hand. This was definitely my favorite project during 
                                        my time here. It allowed me to work with a new popular technology and presented a lot of unique problems to solve. 
                                    </Typography>
                                    
                                    <Typography><br /></Typography>
                                </Box>
                            </AccordionDetails>
                            <AccordionActions>
                                <Typography variant='body2'>
                                    Check out their link here
                                </Typography>
                                <Button
                                    href='https://www.clarity-ventures.com/'
                                    target='_blank'
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
                        <Accordion
                            sx={{
                                color: '#fff',
                                backgroundColor: '#262626',
                                minHeight: '50px'
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height='25px'
                                        image={anovaaLogo}
                                        alt="Anovaa Logo"
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
                                    <Typography><br /></Typography>
                                    <Typography variant='button' sx={{ fontStyle: 'bold', fontSize: '1rem', color: '#bfbfbf' }}>
                                        My Role
                                    </Typography>
                                    <Typography sx={{ mt: 1 }}>
                                        Shortly after obtaining my degree, I began my career at Entech (now Anovaa) on the Web Content Publishing Team. We were responsibile 
                                        for all content updates requested for 2 client websites and 3 corresponding microsites. The goal of this entry level team was to 
                                        learn the company's, history, mission, clients, and applications, then move up to a Client Application team after 1 year. I worked 
                                        on this team for 8 months before moving up to work on the application team for Entech's largest client. Entech was in the process of 
                                        building a brand new, state of the art, loan origination platform, that would later be known as Anovaa, which had been in development 
                                        for the past 5 years. After a year and a half working on a CA team, the individual client teams were condensed down to one Platform 
                                        Team. I was brought on to this "Anovaa" team to assist with the final stages on production and to convert all existing clients were 
                                        being converted to the new system.
                                    </Typography>
                                    <Typography><br /></Typography>
                                    <Typography><br /></Typography>
                                    <Typography variant='button' sx={{ fontStyle: 'bold', fontSize: '1rem', color: '#bfbfbf' }}>
                                        Projects
                                    </Typography>
                                    <Typography sx={{ mt: 1 }}>
                                        During my time with the WCP Team, the largest project I completed was the modernization of 100+ pages for the Citizens Bank & Citizens 
                                        One loan origination websites. This included building each new web page from scratch in our CMS as well as overseeing the entire 
                                        production deployment.
                                    </Typography>
                                    <Typography><br /></Typography>
                                    <Typography>
                                        While on the Anovaa Platform team, I took on a new project with the goal of reducing time & effort required to make UI updates to the 
                                        platform. I designed and implemented a new process to reduce development time of client agnostic UI layout changes by 66%. Since the
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
                                    href='https://www.anovaa.com/'
                                    target='_blank'
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
                        <Accordion
                            sx={{
                                color: '#fff',
                                backgroundColor: '#262626',
                                minHeight: '50px'
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height='25px'
                                        image={millersvilleLogo}
                                        alt="Millersville University Logo"
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
                                        During my time at Millersville I also worked part-time at the Sugar Bowl, a local family owned restaurant on campus. 
                                        While at Sugar Bowl, my role varied day to day and included working the counter, cooking food, and delivering to the 
                                        local area. I worked approximately 25 hours/week while maintaining a full course load.
                                    </Typography>
                                    <Typography><br /></Typography>
                                </Box>
                            </AccordionDetails>
                            <AccordionActions>
                                <Typography variant='body2'>
                                    Check out their link here
                                </Typography>
                                <Button
                                    href='https://www.millersville.edu/'
                                    target='_blank'
                                    variant="contained"
                                    color='warning'
                                    sx={{
                                        textTransform: 'none',
                                        backgroundColor: '#b3b300',
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