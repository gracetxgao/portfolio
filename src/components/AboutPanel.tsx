import { Box } from '@mui/material';

interface AboutPanelTypes {
    textColor: string;
}

const AboutPanel = (props: AboutPanelTypes) => {
    const { textColor } = props

    return (
        <Box paddingInline={10}>
            <h1 style={{ paddingLeft: '30px', color: textColor }}>About</h1>
            <p style={{ paddingLeft: '30px', fontSize: '150%', color: textColor}}>
                I'm a first-year student at the University of British Columbia who loves creating things, whether it's a cool coding project or another crochet piece :)
                I'm interested in AI/ML, data science, web development, and math - but in my free time, you can find me out playing tennis or reading a good book!
            </p>
        </Box>
    )
}

export default AboutPanel