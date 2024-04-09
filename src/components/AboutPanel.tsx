import { Box } from '@mui/material';

const AboutPanel = () => {
    return (
        <Box p={10}>
            <h1 style={{ paddingLeft: '30px' }}>about</h1>
            <p style={{ paddingLeft: '30px', fontSize: '150%'}}>
                hi, welcome to my personal site (which is very much still in progress)! i'm a curious student who loves to code and create new things. 
                i have interests in data science, web development, and mathematics - but in my free time, you can find me
                reading a good book or out playing tennis. 
            </p>
        </Box>
    )
}

export default AboutPanel