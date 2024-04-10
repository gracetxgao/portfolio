import { Box } from '@mui/material';

const AboutPanel = () => {
    return (
        <Box p={10}>
            <h1 style={{ paddingLeft: '30px' }}>About</h1>
            <p style={{ paddingLeft: '30px', fontSize: '150%'}}>
            Welcome to my personal site (a work in progress)! I'm a student who's passionate about coding, data science, and mathematics. 
            In my free time, you can find me out playing tennis or reading a good book!
            </p>
        </Box>
    )
}

export default AboutPanel