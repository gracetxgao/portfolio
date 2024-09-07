import { useState } from 'react';
import { Grid, Box, Typography, Link, Snackbar } from '@mui/material';

import photo from '../assets/photo.jpeg';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import github_white from '../assets/github_white.png';
import linkedin_white from '../assets/linkedin_white.png';
import email from '../assets/email.png';
import email_white from '../assets/email_white.png';


interface AboutTypes {
    textColor: string
    highlightColor: string
    darkMode: Boolean
}

const About = (props: AboutTypes) => {
    const { textColor, highlightColor, darkMode } = props

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("gracetxgao@gmail.com");
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box
            sx={{ 
                height: '100vh', 
                display: 'flex', 
                flexDirection: {xs: 'column', lg: 'row'}, 
                alignItems: 'center', 
                justifyContent: 'center',
                paddingTop: {xs: 2, sm: 0, lg: 0},
            }}
        >
            <Grid item xs={12} sm={4}>
                <img src={photo} style={{ height: '50vh', boxShadow: `10px 10px 10px grey`}}/>
            </Grid>
            <Grid item xs={12} sm={8} 
                sx={{ 
                    marginLeft: {xs: 0, lg: 10}, 
                    marginTop: {xs: 2, sm: 5, lg: 0}, 
                    textAlign: {xs: 'center', md: 'start'},
                    color: textColor
                }}>
                <Box>
                    <Typography fontSize='3rem' fontWeight='500'>grace gao</Typography>
                    <Typography fontSize='1.5rem' paddingBlock={2}>
                        hi! i'm a computer science + math student at the university of british columbia, 
                        and 2023 <Link href="https://schulichleaders.com"  target="_blank" underline="none" color={highlightColor}>{'schulich leader scholar'}</Link> :)
                    </Typography>
                    <Box>
                        <Link href="https://www.linkedin.com/in/gracetxgao/" target="_blank">
                            <img src={darkMode ? linkedin_white : linkedin} width={40} style={{ marginRight: '5%' }}/>
                        </Link>
                        <Link href="https://github.com/gracetxgao" target="_blank">
                            <img src={darkMode ? github_white : github} width={40} style={{ marginRight: '5%' }}/>
                        </Link>
                        <Link onClick={handleCopyEmail}>
                            <img src={darkMode ? email_white : email} width={40} style={{ marginRight: '5%' }} />
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message="email copied to clipboard"
            />
        </Box>
    )
}

export default About