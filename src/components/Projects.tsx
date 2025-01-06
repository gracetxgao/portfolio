import { Box, Typography, Link } from '@mui/material';
import { useInView } from 'react-intersection-observer';

interface ProjectItemTypes {
    textColor: string
    highlightColor: string
    title: string
    github: string
    place: string
}

const ProjectItem = (props: ProjectItemTypes) => {
    const { textColor, highlightColor, title, github, place } = props

    return (
        <Typography color={textColor}><Link href={github} target="_blank" underline="none" color={highlightColor}>{title}</Link> - {place}</Typography>
    )
}

interface ProjectTypes {
    textColor: string
    highlightColor: string
}

const Projects: React.FC<ProjectTypes> = ({ textColor, highlightColor }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const items = [
        ['VerbaTeX', 'https://github.com/leozhang14/VerbaTeX', 'Best Use of Defang @ Hack the North 2024'],
        ['spineCARE', 'https://github.com/gracetxgao/spineCARE', 'AI4Good Lab 2024'],
        ['Stranger Endanger', 'https://github.com/gracetxgao/stranger-endanger', 'Best Design @ SFU StormHacks 2024'],
        ['DareVenture', 'https://github.com/gracetxgao/DareVenture', 'CS Project Hub Award @ youCode 2024 x Arc\'teryx'],
        ['Stock Master', 'https://github.com/gracetxgao/stockmaster', 'UBC CPSC 210'],
        ['notable', 'https://github.com/gracetxgao/notable', 'Best Education Hack @ MesoHacks 2022, 2nd @ Hack to School 2022 (MLH)'],

    ]

    return (
        <Box pb={{ xs: 3, sm: 10}} ref={ref}
            sx={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(100px)',
                transition: 'opacity 1.0s ease-out, transform 1.0s ease-out',
                color: textColor,
                margin: '2rem 0',
            }}
        >
            <Typography color={textColor} fontSize='2rem' fontWeight='500' pb={2}>projects</Typography>
            <Box>
                {items.map((item, idx) => (
                    <ProjectItem 
                        textColor={textColor} 
                        highlightColor={highlightColor} 
                        title={item[0]}
                        github={item[1]}
                        place={item[2]}
                        key={idx}
                    />
                ))}
            </Box>

        </Box>
    )
}

export default Projects