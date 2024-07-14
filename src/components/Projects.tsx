import { Box, Typography, Link } from '@mui/material';

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

const Projects = (props: ProjectTypes) => {
    const { textColor, highlightColor } = props

    const items = [
        ['spineCare', 'https://github.com/gracetxgao/spineCARE', 'AI4Good Lab 2024'],
        ['Stranger Endanger', 'https://github.com/gracetxgao/stranger-endanger', 'Best Design @ SFU StormHacks 2024'],
        ['DareVenture', 'https://github.com/gracetxgao/DareVenture', 'CS Project Hub Award @ youCode 2024 x Arc\'teryx'],
        ['Stock Master', 'https://github.com/gracetxgao/stockmaster', 'UBC CPSC 210'],
        ['notable', 'https://github.com/gracetxgao/notable', 'Best Education Hack @ MesoHacks 2022, 2nd @ Hack to School 2024 (MLH)'],

    ]

    return (
        <Box>
            <Typography color={textColor} fontSize='2rem' fontWeight='500' pb={2}>projects</Typography>
            <Box pb={10}>
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