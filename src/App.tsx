import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import IntroductionPanel from './components/IntroductionPanel';
import ProjectsPanel from './components/ProjectsPanel';
import ExperiencePanel from './components/ExperiencePanel';
import SkillsPanel from './components/SkillsPanel';
import AboutPanel from './components/AboutPanel';
import NavBar from './components/NavBar';

const App = () => {
	return (
        <>
            <NavBar />
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    <IntroductionPanel />
                    <ProjectsPanel />
                    <ExperiencePanel />
                    <SkillsPanel />
                    <AboutPanel />
                </Stack>
            </Box>
        </>
    )
}

export default App
