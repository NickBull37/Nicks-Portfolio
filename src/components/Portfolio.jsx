import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import { sunshot, famfiction, vanhornContractors, comingsoon } from '../utils/constants';
import { upRightSquareIcon } from '../utils/constants';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Portfolio = () => {
    return (
        <Box id="portfolio">
            <Box className="container">
                <Typography
                    sx={{
                        fontSize: '3.75rem',
                        fontWeight: '600',
                        color: '#fff'
                    }}
                >
                    My Work
                </Typography>
                <Box className="work-list">
                    <Box className="work">
                        <img src={vanhornContractors} alt="Van Horn Contractors" />
                        <Box className="layer">
                            <Typography
                                sx={{
                                    fontSize: '1.5rem',
                                    mb: '15px'
                                }}
                            >
                                Van Horn Contractors
                            </Typography>
                            <Typography
                                textAlign="left"
                                sx={{
                                    mb: { xs: '0', md: '12px' }
                                }}
                            >
                                    This is a website built to promote a local, family owned & operated contracting business Check it out at the link below!
                            </Typography>
                            <Box
                                display={'flex'}
                                width={"100%"}
                                justifyContent="space-between"
                                my={1}
                            >
                                <Tooltip title="React">
                                    <img className="svg-img" src="/svgs/React.svg"></img>
                                </Tooltip>
                                <Tooltip title="HTML5">
                                    <img className="svg-img" src="/svgs/html5.svg"></img>
                                </Tooltip>
                                <Tooltip title="CSS3">
                                    <img className="svg-img" src="/svgs/css3.svg"></img>
                                </Tooltip>
                                <Tooltip title="Javascript">
                                    <img className="svg-img" src="/svgs/javascript.svg"></img>
                                </Tooltip>
                                <Tooltip title="Material UI">
                                    <img className="svg-img" src="/svgs/materialui.svg"></img>
                                </Tooltip>
                            </Box>
                            
                            <a
                                href="https://vanhorncontractors.com/"
                                target="_blank"
                                rel="noreferrer">
                                    <OpenInNewIcon />
                            </a>
                        </Box>
                    </Box>
                    <Box className="work">
                        <img src={sunshot} alt="SunShot AI" />
                        <Box className="layer">
                            <Typography
                                sx={{
                                    fontSize: '1.5rem',
                                    mb: '15px'
                                }}
                            >
                                SunShot AI
                            </Typography>
                            <Typography
                                textAlign="left"
                                sx={{
                                    mb: { xs: '0', md: '12px' }
                                }}
                            >
                                    This is a AI generation SaaS platform that supports text, code, image, music, and video generation. Try it out for free with 5 free generations!
                            </Typography>
                            <Box
                                display={'flex'}
                                width={"100%"}
                                justifyContent="space-between"
                                my={1}
                            >
                                <Tooltip title="TypeScript">
                                    <img className="svg-img" src="/svgs/typescript.svg"></img>
                                </Tooltip>
                                <Tooltip title="NextJS">
                                    <img className="svg-img" src="/svgs/nextjs.svg"></img>
                                </Tooltip>
                                <Tooltip title="Prisma">
                                    <img className="svg-img-d3" src="/svgs/prisma.svg"></img>
                                </Tooltip>
                                <Tooltip title="ChatGPT">
                                    <img className="svg-img" src="/svgs/chatgpt.svg"></img>
                                </Tooltip>
                                <Tooltip title="Stripe">
                                    <img className="svg-img" src="/svgs/stripe.svg"></img>
                                </Tooltip>
                                <Tooltip title="HTML5">
                                    <img className="svg-img" src="/svgs/html5.svg"></img>
                                </Tooltip>
                                <Tooltip title="CSS3">
                                    <img className="svg-img" src="/svgs/css3.svg"></img>
                                </Tooltip>
                            </Box>
                            
                            <a
                                href="https://sunshotai.com/"
                                target="_blank"
                                rel="noreferrer">
                                    <OpenInNewIcon />
                            </a>
                        </Box>
                    </Box>
                    <Box className="work">
                        <img src={famfiction} alt="Fam-Fiction" />
                        <Box className="layer">
                            <Box
                                display="flex"
                                alignItems="baseline"
                                gap={1}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '1.5rem',
                                        mb: '15px'
                                    }}
                                >
                                    FamFiction
                                </Typography>
                                <Typography
                                    sx={{
                                        fontStyle: 'italic',
                                    }}
                                >
                                    (in-progress)
                                </Typography>
                            </Box>
                            <Typography
                                textAlign="left"
                                sx={{
                                    mb: { xs: '0', md: '12px' }
                                }}
                            >
                                A collaborative story builder and reading environment. Contribute to stories by writing or designing story art. Checkout the code using the github link below.
                            </Typography>
                            <Box
                                display={'flex'}
                                width={"100%"}
                                justifyContent="space-between"
                                my={1}
                            >
                                <Tooltip title="C#">
                                    <img className="svg-img" src="/svgs/csharp.svg"></img>
                                </Tooltip>
                                <Tooltip title="React">
                                    <img className="svg-img" src="/svgs/React.svg"></img>
                                </Tooltip>
                                <Tooltip title="NodeJS">
                                    <img className="svg-img" src="/svgs/nodejs.svg"></img>
                                </Tooltip>
                                <Tooltip title="HTML5">
                                    <img className="svg-img" src="/svgs/html5.svg"></img>
                                </Tooltip>
                                <Tooltip title="CSS3">
                                    <img className="svg-img" src="/svgs/css3.svg"></img>
                                </Tooltip>
                                <Tooltip title="Material UI">
                                    <img className="svg-img" src="/svgs/materialui.svg"></img>
                                </Tooltip>
                                <Tooltip title="SQLite">
                                    <img className="svg-img" src="/svgs/sqlite.svg"></img>
                                </Tooltip>
                            </Box>
                            <a
                                href="https://github.com/NickBull37/Fam-Fiction"
                                target="_blank"
                                rel="noreferrer">
                                    <OpenInNewIcon />
                            </a>
                        </Box>
                    </Box>
                    {/* <Box className="work">
                        <img src={comingsoon} alt="Coming Soon" />
                        <Box className="layer">
                            <Typography
                                sx={{
                                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                                }}
                            >
                                New Projects Coming Soon!
                            </Typography>
                        </Box>
                    </Box> */}
                </Box>
            </Box>
        </Box>
    );
}

export default Portfolio;