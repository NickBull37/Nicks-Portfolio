import React from 'react';
import { styled } from '@mui/material/styles';
import { aboutImage } from '../utils/constants';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import PropTypes from 'prop-types';
import SectionContainer from '../styled/SectionContainer';
import SectionHeader from '../styled/SectionHeader';

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

const AboutMeText = styled(Typography)(({ theme }) => ({
    color: '#ababab',
    fontSize: '1rem', // default size
    [theme.breakpoints.up('md')]: {
        fontSize: '1.125rem', // font size for medium and larger screens
    }
}));

const StyledTabs = styled(Tabs)(() => ({
    backgroundColor: '#1a1a1a',
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
    '& .MuiTabs-indicator': {
        backgroundColor: '#fc1d3b', // Custom indicator color
    },
}));

const StyledTab = styled(Tab)(() => ({
    color: '#ababab',
    '&.Mui-selected': {
        fontWeight: 600,
        color: '#ababab',
    },
    '&:hover': {
        background: '#0d0d0d',
    },
}));

const TabText = styled(Typography)(({ theme }) => ({
    color: '#ababab',
    fontSize: '1.25rem',
    marginBottom: '16px',
    [theme.breakpoints.down('md')]: {
        fontSize: '1.125rem',
    }
}));

const TabTextNoMargin = styled(Typography)(({ theme }) => ({
    color: '#ababab',
    fontSize: '1.25rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '1.125rem',
    }
}));

const About = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <SectionContainer id="about-me">
            <Box className="row">

                <Box className="about-col-1">
                    <img src={aboutImage} alt="Nick" />
                </Box>

                <Box className="about-col-2">

                    <SectionHeader>
                        About Me
                    </SectionHeader>

                    <AboutMeText>
                        I am a full-stack software developer with 6+ years experience 
                        working primarily on .NET applications. I am focused on developing 
                        simple, efficient, & scalable solutions that solve complex problems. 
                        Outside of work, I have my own projects I like to work on that help 
                        me continue to grow as an engineer. I also enjoy cars, playing 
                        chess, and watching Philadelphia sports.
                    </AboutMeText>

                    <Box
                        sx={{
                            width: '100%',
                            mt: "1rem",
                            backgroundColor: '#262626',
                            borderRadius: '10px'
                        }}
                    >
                        <Box
                            sx={{
                                borderBottom: 1,
                                borderColor: 'divider',
                            }}
                        >
                            <StyledTabs
                                value={value}
                                variant="fullWidth"
                                textColor="secondary"
                                indicatorColor="secondary"
                                onChange={handleChange}
                                aria-label="About me tabs"
                            >
                                <StyledTab label="Skills" {...a11yProps(0)} sx={{ borderRight: '2px solid #262626' }} />
                                <StyledTab label="Experience" {...a11yProps(1)} sx={{ borderRight: '2px solid #262626' }} />
                                <StyledTab label="Tools" {...a11yProps(2)} />
                            </StyledTabs>
                        </Box>

                        <CustomTabPanel
                            value={value}
                            index={0}
                        >
                            <Typography variant='body2' className="about-mini-header">
                                API Development
                            </Typography>

                            <TabText>
                                Building fast and scalable RESTful APIs
                            </TabText>

                            <Typography variant='body2' className="about-mini-header">
                                External Integrations
                            </Typography>

                            <TabText>
                                Creating reliable integrations with 3rd party services
                            </TabText>

                            <Typography variant='body2' className="about-mini-header">
                                UI/UX Design
                            </Typography>

                            <TabTextNoMargin>
                                Designing Web/App interfaces
                            </TabTextNoMargin>
                        </CustomTabPanel>

                        <CustomTabPanel value={value} index={1}>
                            <Typography variant='body2' className="about-mini-header">
                                2023 - Current
                            </Typography>

                            <TabText>
                                Software developer at WebstaurantStore.com
                            </TabText>

                            <Typography variant='body2' className="about-mini-header">
                                2023 - 2023
                            </Typography>

                            <TabText>
                                Software developer at Clarity Ventures, Inc.
                            </TabText>

                            <Typography variant='body2' className="about-mini-header">
                                2019 - 2022
                            </Typography>

                            <TabTextNoMargin>
                                Junior Software developer at Anovaa
                            </TabTextNoMargin>
                        </CustomTabPanel>

                        <CustomTabPanel value={value} index={2}>
                            <Typography variant='body2' className="about-mini-header">
                                .NET / ASP.NET
                            </Typography>

                            <TabText>
                                Developing clean & scalable web applications
                            </TabText>

                            <Typography variant='body2' className="about-mini-header">
                                Entity Framework
                            </Typography>

                            <TabText>
                                Advanced data mapping using EF and LINQ
                            </TabText>

                            <Typography variant='body2' className="about-mini-header">
                                React JS / Material UI
                            </Typography>

                            <TabTextNoMargin>
                                Developing mobile responsive front-end solutions
                            </TabTextNoMargin>
                        </CustomTabPanel>
                    </Box>
                </Box>
            </Box>
        </SectionContainer>
    );
}

export default About;