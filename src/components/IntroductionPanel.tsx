import { Grid, Box } from '@mui/material';
import photo from '../assets/photo.jpeg';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import resume from '../assets/resume_icon.png';

const IntroductionPanel = () => {
    return (
        <Box sx={{ border: '2px solid black' }}>
        <Grid container direction={'row'} justifyContent={'space-around'} alignItems={'center'} p={10}>
            <Grid item xs={6} sm={6} display={'flex'} justifyContent={'space-around'} alignItems={'center'} p={5}>
                <div>
                    <h1>hi! my name is grace :)</h1>
                    <p>schulich leader scholar and computer science + math student @ the university of british columbia</p>
                    <a href="https://github.com/gracetxgao" target="_blank">
                        <img src={github} width={'10%'}/>
                    </a>
                    <a href="https://www.linkedin.com/in/gracetxgao/" target="_blank">
                        <img src={linkedin} width={'10%'}/>
                    </a>
                    <a href="https://drive.google.com/file/d/1zFvdwJTRtwMAWenlOFJa1Q-Bu0xb_rq7/view?usp=sharing" target="_blank">
                        <img src={resume} width={'10%'}/>
                    </a>
                </div>
            </Grid>
            <Grid item xs={6} sm={6} p={3}>
                <img src={photo} width={'60%'} style={{ borderRadius: '20%'}}/>
            </Grid>
        </Grid>
    </Box>
    )
}

export default IntroductionPanel