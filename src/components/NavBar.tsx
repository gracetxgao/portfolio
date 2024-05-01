import { AppBar, Button, Container, Grid, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import sun from '../../src/assets/sun.png';
import moon from '../../src/assets/moon.png';

const NavBar = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#EEF8FF' : '#1C2231'
            },
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
        </ThemeProvider>
    );
}

  
  export default NavBar;