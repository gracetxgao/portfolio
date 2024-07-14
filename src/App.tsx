import { useState } from 'react';

import Box from '@mui/material/Box';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import darkTheme from './themes/DarkTheme';
import lightTheme from './themes/LightTheme';

import About from './components/About';
import Footer from './components/Footer';
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