import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, Snackbar, LinearProgress, Typography, Fade } from '@mui/material';
import { paperPlaneIcon, phoneIcon, githubIcon, linkedInIcon } from '../utils/constants';
import MuiAlert from '@mui/material/Alert';
import DownloadIcon from '@mui/icons-material/Download';
import SectionContainer from '../styled/SectionContainer';
import SectionHeader from '../styled/SectionHeader';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ff00ff',
          },
    },
});

const RedGradButton = styled(Button)(() => ({
    color: '#fff',
    background: 'linear-gradient(to right, #DE04AE, #EE0425)',
    boxShadow: '0px 2px 10px 1px #1a1a1a',
    backgroundColor: '#7e22ce',
    '&:hover': {
        background: 'linear-gradient(to right, #af048a, #c9031d)',
    },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [loadingBar, setLoadingBar] = useState(false);

    const handleSubmit = async (e) => {

        setLoadingBar(true);
        e.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwwKX73p8TM7-NLQylDNF0LvZ7ShQIUxA416LpeNrqt2fnSRvOL7p03spOcFudl-uBdqQ/exec';
        const form = e.target;

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            });

            if (response.ok) {
                setTimeout(() => {
                    setLoadingBar(false);
                    setSnackbarOpen(true);
                    form.reset();
                }, 1000);
            } else {
                console.error('Error!', response.status);
            }
        } catch (error) {
            console.error('Error!', error.message);
        }
    }

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackbarOpen(false);
    };

    return (
        <SectionContainer
            id="contact"
            sx={{
                mb: 8
            }}
        >
            <Box className="row">
                <Box
                    className="contact-left"
                    display={{ xs: 'flex', md: 'block' }}
                    flexDirection={{ xs: 'column', md: 'inherit' }}
                    justifyContent={{ xs: 'flex-start', md: 'inherit' }}
                >
                    <SectionHeader>
                        Contact Me
                    </SectionHeader>

                    <Typography
                        sx={{
                            mt: '30px'
                        }}
                    >
                        <Box display="flex">
                            <span className="red-grad-icon">{paperPlaneIcon}</span>nbulisky@gmail.com
                        </Box>
                    </Typography>

                    <Typography
                        sx={{
                            mt: '30px'
                        }}
                    >
                        <Box display="flex">
                            <span className="red-grad-icon">{phoneIcon}</span>215-260-4875
                        </Box>
                    </Typography>

                    <Box className="social-icons">
                        <a href="https://github.com/NickBull37" target="_blank" rel="noreferrer">{githubIcon}</a>
                        <a href="https://www.linkedin.com/in/nicholas-bulisky-959975161/" target="_blank" rel="noreferrer">{linkedInIcon}</a>
                    </Box>

                    <Box
                        display={{ xs: 'flex', md: 'block' }}
                        justifyContent={'center'}
                    >
                        <RedGradButton
                            variant='contained'
                            href="/documents/Nicholas-Bulisky-Resume.pdf"
                            download
                            startIcon={<DownloadIcon />}
                            sx={{
                                my: '50px',
                            }}
                        >
                            My Resume
                        </RedGradButton>
                    </Box>

                </Box>

                <Box
                    className="contact-right"
                    display={{ xs: 'flex', md: 'block' }}
                    flexDirection={{ xs: 'column', md: 'inherit' }}
                    justifyContent={{ xs: 'flex-start', md: 'inherit' }}
                >

                    <form onSubmit={handleSubmit} name="submit-to-google-sheet">
                        <input type="text" name="Name" placeholder="Your Name" required />
                        <input type="email" name="Email" placeholder="Your Email" required />
                        <textarea name="Message" rows="6" placeholder="Your Message" style={{resize: 'none'}} />
                        <ThemeProvider theme={theme}>
                            <Fade
                                in={loadingBar}
                                unmountOnExit
                            >
                                <LinearProgress />
                            </Fade>
                        </ThemeProvider>
                        <Box
                            display={{ xs: 'flex', md: 'block' }}
                            justifyContent={'center'}
                        >
                            <RedGradButton
                                variant='contained'
                                size='large'
                                type='submit'
                                sx={{
                                    mt: {xs: '30px', md: '20px' },
                                }}
                            >
                                Submit
                            </RedGradButton>
                            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    Message sent successfully.
                                </Alert>
                            </Snackbar>
                        </Box>
                    </form>
                </Box>
            </Box>

            {/* <Box
                display="flex"
                justifyContent="flex-end"
            >
                <CardMedia
                    component='img'
                    height='70px'
                    image={cat}
                    sx={{
                        
                        minWidth: '80px',
                        maxWidth: '80px'
                    }}
                />
            </Box> */}
            
        </SectionContainer>
    );
}

export default Contact;