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

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#EEF8FF',
            light: '#000000',
            dark: '#B8D4E8'
        },
        secondary: {
            main: '#1C2231'
        }
    },
    typography: {
        fontFamily: ['Lato', 'sans-serif'].join(','),
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#1C2231',
            light: '#FFFFFF',
            dark: '#12161F'
        },
        secondary: {
            main: '#EEF8FF'
        }
    },
    typography: {
        fontFamily: ['Lato', 'sans-serif'].join(','),
    },
});

const App = () => {
    const [useTheme, setUseTheme] = useState(lightTheme);

    const toggleDarkMode = () => {
        setUseTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    return (
        <ThemeProvider theme={useTheme}>
            <AppBar sx={{ backgroundColor: useTheme.palette.primary.main, height: '8vh' }} position='fixed'>
                <Container maxWidth={false}>
                    <Toolbar disableGutters>
                        <Grid container justifyContent="space-between" alignItems="center" p={2}>
                            <Grid item>
                                <Typography variant="h6">Grace Gao</Typography>
                            </Grid>
                            <Grid item>
                                <Button color="inherit" onClick={toggleDarkMode}>
                                    <img src={(useTheme === lightTheme) ? moon : sun} style={{ height: '3vh' }} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{ width: '80%', backgroundColor: useTheme.palette.primary.main, paddingInline: '10%' }}>
                <Stack spacing={2}>
                    <IntroductionPanel textColor={useTheme.palette.primary.light}/>
                    <AboutPanel />
                    <ProjectsPanel />
                    <ExperiencePanel />
                    <SkillsPanel />
                    <Footer />
                </Stack>
            </Box>
        </ThemeProvider>
    );
}

export default App;


