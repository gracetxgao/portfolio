import { Box } from '@mui/material';

const AboutPanel = () => {
    return (
        <Box paddingInline={10}>
            <h1 style={{ paddingLeft: '30px' }}>About</h1>
            <p style={{ paddingLeft: '30px', fontSize: '150%'}}>
                I'm a first-year student at the University of British Columbia who's passionate about creating cool projects using computer science! I'm interested in AI, data science,
                and web development, but in my free time you can find me out playing tennis or reading a good book :)
            </p>
        </Box>
    )
}

export default AboutPanel