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
import sun from '../src/assets/sun.png'
import moon from '../src/assets/moon.png';

const App = () => {

    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: darkMode ? '#EEF8FF' : '#1C2231',
            },
        },
        typography: {
            fontFamily: ['Lato', 'sans-serif'].join(','),
          },
    });

	return (
        <ThemeProvider theme={theme}>
            <AppBar sx={{ backgroundColor: theme.palette.primary.main, height: '5vh' }} position='fixed'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant="h6">grace</Typography>
                            </Grid>
                            <Grid item>
                                <Button color="inherit" onClick={toggleDarkMode}>
                                    <img src={darkMode ? moon : sun} style={{ height: '3vh' }}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{ width: '80%', backgroundColor: theme.palette.primary.main, paddingInline: '10%' }}>
                <Stack spacing={2}>
                    <IntroductionPanel />
                    <AboutPanel />
                    <ProjectsPanel />
                    <ExperiencePanel />
                    <SkillsPanel />
                    <Footer />
                </Stack>
            </Box>
        </ThemeProvider>
    )
}

export default App
