import { Grid, Box } from '@mui/material';

const ProjectsPanel = () => {
    return (
        <Box sx={{ border: '2px solid black' }}>
            <h1>projects</h1>
            <Grid container>
                <Grid item xs={6} sm={6} sx={{ border: '2px solid black' }}>
                    <p>project1</p>
                </Grid>
                <Grid item xs={6} sm={6} sx={{ border: '2px solid black' }}>
                    <p>project2</p>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProjectsPanel
