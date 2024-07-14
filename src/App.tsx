import { Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IntroductionPanel from './components/IntroductionPanel';
import About from './components/About';
import ProjectsPanel from './components/ProjectsPanel';
import ExperiencePanel from './components/ExperiencePanel';
import SkillsPanel from './components/SkillsPanel';
import AboutPanel from './components/AboutPanel';
import Footer from './components/Footer';
import { useState } from 'react';
import { AppBar, Button, Container, Grid, Toolbar, Typography } from '@mui/material';
import sun from '../src/assets/sun.png';
import moon from '../src/assets/moon.png';
import darkTheme from './themes/DarkTheme';
import lightTheme from './themes/LightTheme';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    let theme = darkMode ? createTheme(darkTheme) : createTheme(lightTheme)

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: theme.palette.background.default,
                }}
            >
                <Box sx={{ width: {sm: '80vw', md: '50vw'} }} >             
                    <About textColor={theme.palette.primary.main} highlightColor={theme.palette.secondary.main} darkMode={darkMode}/>
                    <Experience textColor={theme.palette.primary.main} highlightColor={theme.palette.secondary.main}/>
                    <Projects textColor={theme.palette.primary.main} highlightColor={theme.palette.secondary.main}/>
                    <Footer textColor={theme.palette.primary.main} />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;