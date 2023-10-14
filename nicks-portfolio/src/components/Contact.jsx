import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, Snackbar, LinearProgress, Typography, Fade } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import DownloadIcon from '@mui/icons-material/Download';
import { paperPlaneIcon, phoneIcon, githubIcon, linkedInIcon } from '../utils/constants';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ff00ff',
          },
    },
});

const PurpleButton = styled(Button)(() => ({
    '&:hover': {
        backgroundColor: '#990099',
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
        <Box id="contact" sx={{mt: '30px'}}>
            <Box className="container">
                <Box className="row">
                    <Box
                        className="contact-left"
                        display={{ xs: 'flex', md: 'block' }}
                        flexDirection={{ xs: 'column', md: 'inherit' }}
                        justifyContent={{ xs: 'flex-start', md: 'inherit' }}
                    >
                        <Typography
                            sx={{
                                fontSize: '3.75rem',
                                fontWeight: '600',
                                color: '#fff',
                                lineHeight: '1.3'
                            }}
                        >
                            Contact Me
                        </Typography>
                        <Typography
                            sx={{
                                mt: '30px'
                            }}
                        >
                            {paperPlaneIcon}nbulisky@gmail.com
                        </Typography>
                        <Typography
                            sx={{
                                mt: '30px'
                            }}
                        >
                            {phoneIcon}215-260-4875
                        </Typography>
                        <Box className="social-icons">
                            <a href="https://github.com/NickBull37">{githubIcon}</a>
                            <a href="https://www.linkedin.com/in/nicholas-bulisky-959975161/">{linkedInIcon}</a>
                        </Box>
                        <Box
                            display={{ xs: 'flex', md: 'block' }}
                            justifyContent={'center'}
                        >
                            <PurpleButton
                                variant='contained'
                                href="/documents/Nicholas-Bulisky-Resume.pdf"
                                download
                                startIcon={<DownloadIcon />}
                                sx={{
                                    background: '#ff00ff',
                                    my: '50px',
                                }}
                            >
                                My Resume
                            </PurpleButton>
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
                            <textarea name="Message" rows="6" placeholder="Your Message" />
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
                                <PurpleButton
                                    variant='contained'
                                    size='large'
                                    type='submit'
                                    sx={{
                                        background: '#ff00ff',
                                        mt: {xs: '30px', md: '20px' },
                                        mb: '50px'
                                    }}
                                >
                                    Submit
                                </PurpleButton>
                                <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                        Message sent successfully.
                                    </Alert>
                                </Snackbar>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
            <Box
                className="copyright"
            >
                <Typography>Copyright <span className="color-purple">©</span> Nick.</Typography>
            </Box>
        </Box>
    );
}

export default Contact;