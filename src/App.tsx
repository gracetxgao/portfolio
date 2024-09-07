import { useState } from 'react';

import { Box, IconButton, GlobalStyles } from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import darkTheme from './themes/DarkTheme';
import lightTheme from './themes/LightTheme';

import About from './components/About';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Projects from './components/Projects';

import sun from './assets/sun.png';
import moon from './assets/moon.png';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    let theme = darkMode ? createTheme(darkTheme) : createTheme(lightTheme)

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles
                styles={{
                    body: { margin: 0, padding: 0, boxSizing: 'border-box' },
                    html: { margin: 0, padding: 0, boxSizing: 'border-box' },
                }}
            />
            <IconButton
                sx={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                }}
                onClick={toggleDarkMode}
            >
                <img src={darkMode ? sun : moon} width={36} height={36} />
            </IconButton>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: theme.palette.background.default,
                    paddingInline: {xs: 10, sm: 0}
                }}
            >
                <Box sx={{ width: {sm: '80vw', md: '50vw'}}} >             
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