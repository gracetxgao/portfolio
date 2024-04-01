import { Grid, Box } from '@mui/material';

const SkillsPanel = () => {
    return (
        <Box sx={{ border: '2px solid black' }}>
        <h1>skills</h1>
        <Grid container>
            <Grid item xs={3} sm={3} sx={{ border: '2px solid black' }}>
                <p>skill1</p>
            </Grid>
            <Grid item xs={3} sm={3} sx={{ border: '2px solid black' }}>
                <p>skill2</p>
            </Grid>
            <Grid item xs={3} sm={3} sx={{ border: '2px solid black' }}>
                <p>skill3</p>
            </Grid>
            <Grid item xs={3} sm={3} sx={{ border: '2px solid black' }}>
                <p>skill4</p>
            </Grid>
        </Grid>
    </Box>
    )
}

export default SkillsPanel