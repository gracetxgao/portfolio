import { Grid, Box } from '@mui/material';
import photo from '../assets/photo.jpeg';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import resume from '../assets/resume.png';

interface IntroductionPanelTypes {
    textColor: string,
    shadowColor: string,
    darkMode: Boolean
}

const IntroductionPanel = (props: IntroductionPanelTypes) => {
    const { textColor, shadowColor, darkMode } = props

    return (
        <Box sx={{ height: '100vh', display: 'flex', alignContent: 'center', justifyItems: {sm: 'center'} }}>
            <Grid container sx={{ direction: 'row', alignItems: 'center', justifyItems: 'center' }}>
                <Grid item md={12} lg={6} 
                    sx={{ 
                        paddingRight: {sm: 0, lg: 5}, 
                        textAlign: {sm: 'center', lg: 'end'},
                        color: textColor
                    }}>
                    <div>
                        <h1 style={{ fontSize: '400%'}}>Hi, I'm Grace!</h1>
                        <p style={{ fontSize: '200%', color: 'inherit' }}>
                            <a href='https://schulichleaders.com/scholars/grace-gao/' target="_blank" style={{ color: 'inherit' }}>2023 Schulich Leader Scholar</a> and Computer Science + Math student @ UBC</p>
                        <div style={{ marginRight: '5%' }}>
                            <a href="https://github.com/gracetxgao" target="_blank">
                                <img src={github} width={'8%'} style={{ marginRight: '5%', backgroundColor: darkMode ? 'white' : 'initial', padding: '2%', borderRadius: '50%' }}/>
                            </a>
                            <a href="https://www.linkedin.com/in/gracetxgao/" target="_blank">
                                <img src={linkedin} width={'8%'} style={{ marginRight: '5%', backgroundColor: darkMode ? 'white' : 'initial', padding: '2%', borderRadius: '50%' }}/>
                            </a>
                            <a href="https://drive.google.com/file/d/1Wwk9bmDCGh9xUIiQHa-RE2UO5WwvFzXe/view?usp=sharing" target="_blank">
                                <img src={resume} width={'8%'}  style={{ backgroundColor: darkMode ? 'white' : 'initial', padding: '2%', borderRadius: '50%' }}/>
                            </a>
                        </div>
                    </div>
                </Grid>
                <Grid item md={12} lg={6} sx={{ paddingLeft: {lg: 3}, alignItems: {lg: 'flex-start'}}}>
                    <img src={photo} style={{ height: '50vh', borderRadius: '50px', boxShadow: `10px 10px 5px ${shadowColor}`}}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default IntroductionPanel