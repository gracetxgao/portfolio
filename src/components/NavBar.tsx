import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position='fixed'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid container sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Grid item sm={3} justifyContent={'flex-start'}>
                            <p>grace</p>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
      );
}

export default NavBar;