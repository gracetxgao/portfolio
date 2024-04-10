import { Box } from '@mui/material';

const AboutPanel = () => {
    return (
        <Box p={10}>
            <h1 style={{ paddingLeft: '30px' }}>About</h1>
            <p style={{ paddingLeft: '30px', fontSize: '150%'}}>
                I'm a student who's passionate about computer science and mathematics, with interests in web development, data science, and AI. 
                In my free time, you can find me out playing tennis or reading a good book!
            </p>
        </Box>
    )
}

export default AboutPanel