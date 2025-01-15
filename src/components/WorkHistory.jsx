import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Button, Card, CardMedia } from '@mui/material';
import { Accordion, AccordionActions, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { webstaurantLogo, clarityLogo, anovaaLogo, millersvilleLogo } from '../utils/constants';
import SectionContainer from '../styled/SectionContainer';

const WorkHistoryHeader = styled(Typography)(() => ({
    fontSize: '3.75rem',
    fontWeight: '600',
    color: '#fff'
}));

const StyledAccordion = styled(Accordion)(() => ({
    color: '#fff',
    backgroundColor: '#262626',
    // padding: '10px'
    // minHeight: '50px',
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    padding: '2rem',
    [theme.breakpoints.down('md')]: { // for smaller screens
        padding: '1.25rem',
    },
}));

const DatesAndLocationStack = styled(Stack)(() => ({
    display: 'flex',
    gap: '8px'
}));

const AccordionDetailsColumnBox = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 96,
    marginTop: '32px',
    padding: '4px',
    [theme.breakpoints.down('md')]: { // for smaller screens
        flexDirection: 'column',
        gap: 40,
    },
}));

const AccordionDetailsColumn = styled(Box)(({ theme }) => ({
    width: '50%',
    [theme.breakpoints.down('md')]: { // for smaller screens
        width: '100%',
    },
}));

const StyledAccordionActions = styled(AccordionActions)(() => ({
    padding: '0 15px 15px 15px',
}));

const CompanyName = styled(Typography)(({ theme }) => ({
    width: '35%',
    flexShrink: 0,
    marginLeft: '20px',
    lineHeight: '2',
    fontSize: '1.063rem',
    [theme.breakpoints.down('md')]: {
        width: '75%', // for smaller screens
    },
}));

const JobTitle = styled(Typography)(({ theme }) => ({
    color: '#cccccc',
    lineHeight: '2',
    display: 'block',
    [theme.breakpoints.down('md')]: {
        display: 'none', // for smaller screens
    },
}));

const BodyText = styled(Typography)(({ theme }) => ({
    color: '#fff',
    fontSize: '0.938rem',
    letterSpacing: '0.03em',
}));

const WorkHistory = () => {

    const pastEmployers = [
        {
            name: 'WebstaurantStore.com',
            title: 'Software Developer',
            logoImg: webstaurantLogo,
            date: 'November 2023 - Current',
            location: 'Lititz, PA',
            myRole1: 'I have been an active member of the Mobile App team at the WebstaurantStore.com for over a year now and I have felt right at home the whole time. I was able to jump in and start contributing right away building new features specific for the mobile app and bringing over existing features from the desktop web application.',
            myRole2: 'I\'ve really enjoyed the dynamic of our team and the environment we work in. The opportunities for advancement give me something I can strive for and the tools the company offers to help get there make me believe I am getting better every day.',
            projects1: 'I have worked on a number new features and have been part of multiple redesigns for various areas of the mobile app. Redesigns could be to increase performance, make features more intuitive & user friendly, or to accomodate updates made by a 3rd party service.',
            projects2: '',
            projList: `Barcode/Image Search - uses the camera on a mobile device to search our product catalog
                    FeatBit integration - allows our backend to deploy & toggle features with a single click instead of a code deployment
                    FedEx Address Validation - redesign of address validation process after updates to 3rd party address validation API`,
            btnText: 'WebstaurantStore',
            btnColor: '#308234',
            btnHovercolor: '#225d25',
            btnLink: 'https://www.webstaurantstore.com/',
        },
        {
            name: 'Clarity Ventures, Inc.',
            title: 'Software Developer',
            logoImg: clarityLogo,
            date: 'January 2023 - June 2023',
            location: 'Austin, TX',
            myRole1: 'Clarity was an amazing company to work for and I really enjoyed the time I spent there, even if it was only 6 months. I made incredible strides here as a developer and met some fantastic people along the way. The company\'s enthusiasm and the level of talent among the dev teams are truly unmatched. At Clarity, I was responsible for designing and implementing new features as well as client customizations for the company\'s eCommerce platform.',
            myRole2: 'Clarity also holds training sessions for developers every week with a rotating schedule of team members running the session. Topics were suggested by the team and consisted of new technologies, internal systems, common mistakes, and more. I had the opportunity to lead multiple training sessions focused on various parts of the core platform, each session being approximately 1 hour 30 mins.',
            projects1: 'I completed several large integration projects including Paya payment processing, the National Weather Service, and HautAI.',
            projList: `Paya Payment Processing - for processing credit card and ACH payments
                    Haut AI - a SaaS provider that generates skin analysis reports from user uploaded images
                    National Weather Service - to limit shipping options based on forecasted temperatures`,
            projects2: 'I also designed a brand new platform AI Provider with an integration with Open AI\'s ChatGPT for generating product details and images. The goal was to use AI generation to reduce the amount of time & effort needed to update product details compared to doing it by hand. This was my favorite project because it allowed me to work with a new popular technology and presented a lot of unique problems to solve.',
            btnText: 'Clarity Ventures',
            btnColor: '#1f91ad',
            btnHovercolor: '#176d82',
            btnLink: 'https://www.clarity-ventures.com/',
        },
        {
            name: 'Anovaa',
            title: 'Jr. Software Developer',
            logoImg: anovaaLogo,
            date: 'January 2019 - August 2022',
            location: 'Malvern, PA',
            myRole1: 'I began my career at Entech (now Anovaa) on the Web Content Publishing Team shortly after obtaining my degree. We were responsibile for all content updates for two client websites and three corresponding microsites. The goal of this entry level team was to learn the company\'s, history, mission, clients, and applications, then move up to a Client Application team after one year.',
            myRole2: 'After graduating from WCPT I spent a year and a half working on a Client Application team. These teams were consoildated into a single Anovaa Team when the company\'s brand new loan origination platform launched. I was brought on to the Anovaa team to assist with the final stages of production and to help convert all existing clients to the new system.',

            projects1: 'During my time with the WCPT, the largest project I completed was the modernization of 100+ pages of the Citizens Bank & Citizens One loan origination websites. This included the creation of each new web page from scratch in our CMS as well as handling client interactions and deployments.',
            projList: ``,
            projects2: 'While on the Anovaa Platform team, I took on a new project with the goal of reducing time & effort required to make UI updates to the platform. I designed and implemented a new process to reduce development time of client agnostic UI layout changes by 66%. Since the platform was brand new, I also spent a lot of time writing new procedures & documentation.',
            btnText: 'Anovaa',
            btnColor: '#3d67ff',
            btnHovercolor: '#1a4bff',
            btnLink: 'https://www.anovaa.com/',
        },
        {
            name: 'Millersville University',
            title: 'Undergrad Student',
            logoImg: millersvilleLogo,
            date: 'September 2014 - December 2018',
            location: 'Millersville, PA',
            myRole1: 'I graduated from Millersville univerity in 2018 with a Bachelor\'s degree in Computer Science.',
            myRole2: 'During my time at Millersville I also worked part-time at the Sugar Bowl, a local family owned restaurant on campus. My role varied day to day and included working the counter, cooking food, and delivering to the local area. I worked approximately 25 hours per week while maintaining a full course load.',
            projects1: 'Below are some of the relevant courses I completed while obtaining my degree',
            projects2: '',
            projList: `Software Engineering
                    Database & Web Development
                    Data Structures
                    Computer Architecture
                    Operating Systems
                    Technical Writing`,
            btnText: 'Millersville',
            btnColor: '#d79e0f',
            btnHovercolor: '#a77b0c',
            btnLink: 'https://www.millersville.edu/',
        },
    ];

    return (
        <SectionContainer
            id="work-history"
        >
            <WorkHistoryHeader>
                My Experience
            </WorkHistoryHeader>

            <Box
                display={'flex'}
                gap={8}
                mt={'20px'}
            >
                <Box>

                    {pastEmployers.map((employer, index) => (

                        <StyledAccordion
                            key={index}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon
                                        sx={{ color: '#fff' }}
                                    />
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height='35px'
                                        image={employer.logoImg}
                                        alt="Clarity Ventures Logo"
                                    />
                                </Card>
                                <CompanyName>
                                    {employer.name}
                                </CompanyName>
                                <JobTitle>
                                    {employer.title}
                                </JobTitle>
                            </AccordionSummary>

                            <StyledAccordionDetails
                                className="border-acc-top"
                            >
                                <DatesAndLocationStack>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <CalendarMonthIcon
                                            size='small'
                                            sx={{
                                                mr: 1,
                                                color: '#ababab'
                                            }}
                                        />
                                        <Typography>
                                            {employer.date}
                                        </Typography>
                                    </Box>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <LocationOnIcon
                                            size='small'
                                            sx={{
                                                mr: 1,
                                                color: '#ababab'
                                            }}
                                        />
                                        <Typography>
                                            {employer.location}
                                        </Typography>
                                    </Box>
                                </DatesAndLocationStack>

                                <AccordionDetailsColumnBox>

                                    {/* Column 1: My Role */}
                                    <AccordionDetailsColumn>
                                        <Typography variant='button' sx={{ fontStyle: 'bold', fontSize: '1rem', color: '#bfbfbf' }}>
                                            My Role
                                        </Typography>
                                        <BodyText sx={{ mt: 1 }}>
                                            {employer.myRole1}
                                        </BodyText>
                                        <BodyText sx={{ mt: 2 }}>
                                            {employer.myRole2}
                                        </BodyText>
                                    </AccordionDetailsColumn>

                                    {/* Column 2: Projects */}
                                    <AccordionDetailsColumn>
                                        <Typography variant='button' sx={{ fontStyle: 'bold', fontSize: '1rem', color: '#bfbfbf' }}>
                                            Projects
                                        </Typography>
                                        <BodyText sx={{ mt: 1 }}>
                                            {employer.projects1}
                                        </BodyText>
                                        <BodyText sx={{ mt: 2 }}>
                                            {employer.projList && (
                                                <ul className='pad-list'>
                                                    {employer.projList.split('\n').map((project, idx) => (
                                                        <li key={idx}>{project}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </BodyText>
                                        <BodyText sx={{ mt: 2 }}>
                                            {employer.projects2}
                                        </BodyText>
                                    </AccordionDetailsColumn>

                                </AccordionDetailsColumnBox>
                            </StyledAccordionDetails>
                            <StyledAccordionActions>
                                <Typography variant='body2' sx={{ color: '#cccccc' }}>
                                    Check them out here
                                </Typography>
                                <Button
                                    href={employer.btnLink}
                                    target='_blank'
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        ml: 1.5,
                                        px: 1,
                                        py: 0.5,
                                        backgroundColor: employer.btnColor,
                                        '&:hover': {
                                            backgroundColor: employer.btnHovercolor,
                                        },
                                    }}
                                >
                                    {employer.btnText}
                                </Button>
                            </StyledAccordionActions>
                        </StyledAccordion>
                    ))}

                </Box>
            </Box>
        </SectionContainer>
    );
}

export default WorkHistory;