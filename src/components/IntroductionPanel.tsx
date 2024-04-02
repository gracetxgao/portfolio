import { Grid, Box } from '@mui/material';
import photo from '../assets/photo.jpeg';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import resume from '../assets/resume.png';

const IntroductionPanel = () => {
    return (
        <Box>
            <Grid container direction={'row'} alignItems={'center'} p={10}>
                <Grid item xs={6} sm={6} p={5} textAlign={'end'}>
                    <div>
                        <h1 style={{ fontSize: '400%', marginRight: '5%' }}>hi, i'm grace :)</h1>
                        <p style={{ fontSize: '200%', marginLeft: '5%', marginRight: '5%' }}>
                            <a href='https://www.tricitynews.com/local-news/port-moody-grad-receives-100k-scholarship-for-science-studies-7203967' target="_blank" style={{ color: 'black' }}>2023 schulich leader scholar</a> and 
                            computer science + math student @ the university of british columbia</p>
                        <div style={{ marginRight: '5%' }}>
                            <a href="https://github.com/gracetxgao" target="_blank">
                                <img src={github} width={'8%'} style={{ paddingRight: '5%'}}/>
                            </a>
                            <a href="https://www.linkedin.com/in/gracetxgao/" target="_blank">
                                <img src={linkedin} width={'8%'} style={{ paddingRight: '5%'}}/>
                            </a>
                            <a href="https://drive.google.com/file/d/1zFvdwJTRtwMAWenlOFJa1Q-Bu0xb_rq7/view?usp=sharing" target="_blank">
                                <img src={resume} width={'8%'}/>
                            </a>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} p={3}>
                    <img src={photo} width={'70%'} style={{ borderRadius: '20%'}}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default IntroductionPanel