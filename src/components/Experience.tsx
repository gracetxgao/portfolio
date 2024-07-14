import { Grid, Box, Typography, Link } from '@mui/material';

interface ExperienceItemTypes {
    textColor: string
    highlightColor: string
    title: string
    place: string
    placeLink: string
    start: string
    end: string
}

const ExperienceItem = (props: ExperienceItemTypes) => {
    const { textColor, highlightColor, title, place, placeLink, start, end} = props

    return (
        <Grid display='flex' justifyContent='space-between'>
            <Grid item xs={6} sm={8} display='flex' justifyContent='start' mr={{ xs: 5, sm: 0}} sx={{ textAlign: 'start' }}>
                <Typography color={textColor}>{title} @ <Link href={placeLink} target="_blank" underline="none" color={highlightColor}>{place}</Link></Typography>
            </Grid>
            <Grid item xs={6} sm={4} display='flex' justifyContent='end'  sx={{ textAlign: 'end' }}>
                <Typography color={textColor}>{start} - {end}</Typography>
            </Grid>
        </Grid>
    )
}

interface ExperienceTypes {
    textColor: string
    highlightColor: string
}

const Experience = (props: ExperienceTypes) => {
    const { textColor, highlightColor } = props

    const items = [
        ['undergraduate research assistant', 'NC4 Lab', 'https://www.nc4.sbme.ubc.ca', 'jul 2024', 'present'],
        ['machine learning fellow', 'AI4Good Lab', 'https://www.ai4goodlab.com', 'may 2024', 'jun 2024'],
        ['software developer', 'UBC Launch Pad', 'https://www.ubclaunchpad.com', 'sep 2023', 'apr 2024'],
        ['research intern', 'TRIUMF', 'https://www.triumf.ca', 'jul 2023', 'aug 2023'],

    ]

    return (
        <Box pb={10}>
            <Typography color={textColor} fontSize='2rem' fontWeight='500' pb={2}>experience/volunteering</Typography>
            <Box>
                {items.map((item, idx) => (
                    <ExperienceItem 
                        textColor={textColor} 
                        highlightColor={highlightColor} 
                        title={item[0]}
                        place={item[1]}
                        placeLink={item[2]}
                        start={item[3]}
                        end={item[4]}
                        key={idx}
                    />
                ))}
            </Box>

        </Box>
    )
}

export default Experience