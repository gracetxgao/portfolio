import { Grid, Box } from '@mui/material';
// import Box from '@mui/material/Box';

const IntroductionPanel = () => {
    return (
        <Box sx={{ border: '2px solid black', height: '10%' }}>
        <Grid container>
            <Grid item xs={6} sm={6} sx={{ border: '2px solid black' }}>
                <p>description</p>
            </Grid>
            <Grid item xs={6} sm={6} sx={{ border: '2px solid black' }}>
                <p>photo</p>
            </Grid>
        </Grid>
    </Box>
    )
}

export default IntroductionPanel