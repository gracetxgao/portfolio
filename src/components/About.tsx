import { Grid, Box, Typography, Link } from '@mui/material';

import photo from '../assets/photo.jpeg';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import github_white from '../assets/github_white.png';
import linkedin_white from '../assets/linkedin_white.png';
import resume from '../assets/resume.png';
import resume_white from '../assets/resume_white.png';

interface AboutTypes {
    textColor: string
    highlightColor: string
    darkMode: Boolean
}

const About = (props: AboutTypes) => {
    const { textColor, highlightColor, darkMode } = props

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
                        hi! i'm a second-year computer science + math student at the University of British Columbia, 
                        and 2023 <Link href="https://schulichleaders.com/scholars/grace-gao/"  target="_blank" underline="none" color={highlightColor}>{'schulich leader scholar'}</Link> :)
                    </Typography>
                    <Box>
                        <Link href="https://github.com/gracetxgao" target="_blank">
                            <img src={darkMode ? github_white : github} width={40} style={{ marginRight: '5%' }}/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/gracetxgao/" target="_blank">
                            <img src={darkMode ? linkedin_white : linkedin} width={40} style={{ marginRight: '5%' }}/>
                        </Link>
                        <Link href="https://drive.google.com/file/d/1iJ1WkvXJTjnX0CoQXeZpWBcdzFa4bgUV/view?usp=sharing" target="_blank">
                            <img src={darkMode ? resume_white : resume} width={40}  />
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Box>
    )
}

export default About