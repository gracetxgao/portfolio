import { Grid, Box, Typography, Link } from '@mui/material';
import { useInView } from 'react-intersection-observer';

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
        <Grid display='flex' justifyContent='space-between' pb={0.5}>
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

const Experience: React.FC<ExperienceTypes> = ({ textColor, highlightColor }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const items = [
        ['software engineer intern', 'Datadog', 'https://www.datadoghq.com/', 'may 2025', 'present'],
        ['webmaster', 'UBC Women in Computer Science', 'https://ubcwics.com/', 'oct 2024', 'apr 2025'],
        ['undergraduate research assistant', 'UBC - NC4 Lab', 'https://www.nc4.sbme.ubc.ca', 'sep 2024', 'apr 2025'],
        ['undergraduate teaching assistant', 'UBC CS', 'https://www.cs.ubc.ca/', 'sep 2024', 'dec 2024'],
        ['software engineer intern', 'Graycore', 'https://www.graycore.io', 'sep 2024', 'dec 2024'],
        ['machine learning fellow', 'Mila - AI4Good Lab', 'https://www.ai4goodlab.com', 'may 2024', 'jun 2024'],
        ['software developer', 'UBC Launch Pad', 'https://www.ubclaunchpad.com', 'sep 2023', 'apr 2024'],
        ['research intern', 'TRIUMF', 'https://www.triumf.ca', 'jul 2023', 'aug 2023']
    ]

    return (
        <Box pb={{ xs: 2, sm: 4}} ref={ref}
            sx={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(100px)',
                transition: 'opacity 1.0s ease-out, transform 1.0s ease-out',
                color: textColor,
                margin: '2rem 0',
            }}>
            <Typography color={textColor} fontSize='2rem' fontWeight='500' pb={2}>experience</Typography>
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