import { Stack } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IntroductionPanel from './components/IntroductionPanel';
import ProjectsPanel from './components/ProjectsPanel';
import ExperiencePanel from './components/ExperiencePanel';
import SkillsPanel from './components/SkillsPanel';
import AboutPanel from './components/AboutPanel';
import Footer from './components/Footer';

const theme = createTheme({
    typography: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
    },
  });

const App = () => {
	return (
        <ThemeProvider theme={theme}>
            {/* <NavBar /> */}
            <Box sx={{ width: '80%', backgroundColor: '#EEF8FF', paddingInline: '10%' }}>
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
