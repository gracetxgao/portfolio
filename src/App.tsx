import { Stack } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IntroductionPanel from './components/IntroductionPanel';
import ProjectsPanel from './components/ProjectsPanel';
import ExperiencePanel from './components/ExperiencePanel';
import SkillsPanel from './components/SkillsPanel';
import AboutPanel from './components/AboutPanel';
import Footer from './components/Footer';
import { useState } from 'react';
import { AppBar, Button, Container, Grid, Toolbar, Typography } from '@mui/material';
import sun from '../src/assets/sun.png';
import moon from '../src/assets/moon.png';
import darkTheme from './components/themes/DarkTheme';
import lightTheme from './components/themes/LightTheme';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    let theme = darkMode ? createTheme(darkTheme) : createTheme(lightTheme)

    return (
        <ThemeProvider theme={theme}>
            <AppBar sx={{ backgroundColor: theme.palette.primary.dark, height: '8vh' }} position='fixed'>
                <Container maxWidth={false}>
                    <Toolbar disableGutters>
                        <Grid container justifyContent="space-between" alignItems="center" p={2}>
                            <Grid item>
                                <Typography variant="h6" style={{ color: theme.palette.secondary.main }}>Grace Gao</Typography>
                            </Grid>
                            <Grid item>
                                <Button color="inherit" onClick={() => setDarkMode(!darkMode)}>
                                    <img src={darkMode ? sun : moon} style={{ height: '3vh' }} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{ width: '80%', backgroundColor: theme.palette.primary.main, paddingInline: '10%' }}>
                <Stack spacing={2}>
                    <IntroductionPanel textColor={theme.palette.primary.contrastText} shadowColor={theme.palette.secondary.dark} darkMode={darkMode}/>
                    <AboutPanel textColor={theme.palette.primary.contrastText}/>
                    <ProjectsPanel textColor={theme.palette.primary.contrastText} backgroundColor={theme.palette.primary.light}/>
                    <ExperiencePanel textColor={theme.palette.primary.contrastText} backgroundColor={theme.palette.secondary.main} highlightColor={theme.palette.secondary.light}/>
                    <SkillsPanel textColor={theme.palette.primary.contrastText} backgroundColor={theme.palette.secondary.main} shadowColor={theme.palette.secondary.dark}/>
                    <Footer textColor={theme.palette.primary.contrastText} />
                </Stack>
            </Box>
        </ThemeProvider>
    );
}

export default App;