import { Box, Typography, Link } from '@mui/material';
import { useInView } from 'react-intersection-observer';

interface ProjectItemTypes {
    textColor: string
    highlightColor: string
    title: string
    github: string
    award?: string
    event: string
    website?: string
}

const ProjectItem = (props: ProjectItemTypes) => {
  const { textColor, highlightColor, title, github, award, event, website } = props

  return (
    <Box pb={0.5}>
      <Typography color={textColor}>
        <Link href={github} target="_blank" underline="none" color={highlightColor}>
          {title}
        </Link>
        {" - "}
        {(award && website) ? (
          <>
            {award} @ <Link 
              href={website} 
              target="_blank" 
              underline="none" 
              sx={{
                color: textColor,
                "&:hover": {
                  color: highlightColor,
                },
              }}
            >
              {event}
            </Link>
          </>
        ) : (
          <>
            {event}
          </>
        )}
      </Typography>
    </Box>
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

    const items: Omit<ProjectItemTypes, 'textColor' | 'highlightColor'>[] = [
      {
        title: 'VerbaTeX',
        github: 'https://github.com/leozhang14/VerbaTeX',
        award: 'Best Use of Defang',
        event: 'Hack the North 2024',
        website: 'https://hackthenorth2024.devpost.com',
      },
      {
        title: 'spineCARE',
        github: 'https://github.com/gracetxgao/spineCARE',
        event: 'AI4Good Lab 2024',
      },
      {
        title: 'Stranger Endanger',
        github: 'https://github.com/gracetxgao/stranger-endanger',
        award: 'Best Design',
        event: 'StormHacks 2024',
        website: 'https://stormhacks.devpost.com',
      },
      {
        title: 'DareVenture',
        github: 'https://github.com/gracetxgao/DareVenture',
        award: 'CS Project Hub Award',
        event: "youCode 2024",
        website: 'https://youcode-2024.devpost.com',
      },
      {
        title: 'Stock Master',
        github: 'https://github.com/gracetxgao/stockmaster',
        event: 'UBC CPSC 210',
      },
      {
        title: 'notable',
        github: 'https://github.com/gracetxgao/notable',
        award: 'Best Education Hack',
        event: 'MesoHacks 2022',
        website: 'https://mesohacks2022.devfolio.co/overview',
      }
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
                  key={idx} 
                  {...item} 
                  textColor={textColor}
                  highlightColor={highlightColor}
                />
              ))}
            </Box>
        </Box>
    )
}

export default Projects