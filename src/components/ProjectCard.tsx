import { Grid } from '@mui/material';
import github from '../assets/github.png';

interface ProjectCardTypes {
    title: String;
    hasAward: Boolean;
    hackathons?: String;
    hasHackathon: Boolean;
    tools: Array<any>;
    description: String;
    link: string;
    image: String;
}

const ProjectCard = (props: ProjectCardTypes) => {
    const { title, hackathons, hasHackathon, tools, description, link, image } = props
    return (
        <>
            <Grid
                container
                sx={{
                    height: '25vw',
                    width: '30vw',
                    position: 'relative',
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundColor: '#B8D4E8',
                    borderRadius: '10%',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(184, 212, 232, 0.8)',
                        borderRadius: '10%',
                        padding: '10px',
                    },
                }}
                >
                <Grid item xs={12} sm={12} textAlign={'center'} fontSize={'200%'} sx={{ height: '10%', zIndex: 100 }}>
                    <h2>{title}</h2>
                </Grid>
                {hasHackathon &&
                    <Grid item xs={6} sm={6} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ height: '20%', zIndex: 100 }} marginTop={10} paddingInline={5}>
                        <p style={{ fontSize: 'inherit', whiteSpace: 'pre-wrap', textAlign: 'center'}}>
                            {hackathons}
                        </p>
                    </Grid>
                }
                <Grid item xs={hasHackathon ? 6 : 12} sm={hasHackathon ? 6 : 12} sx={{ height: '20%', zIndex: 100 }} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} marginTop={10}>
                    {tools.map(tool => tool)}
                </Grid>
                <Grid item xs={12} sm={12} sx={{ height: '60%', zIndex: 100 }} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} paddingInline={'15%'}>
                    <p style={{ textAlign: 'center' }}>{description}</p>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ height: '12%', zIndex: 100 }} display={'flex'} justifyContent={'center'} marginTop={-15}>
                    <a href={link} target="_blank">
                        <img src={github} alt="GitHub" width={'50vw'} height={'auto'}/>
                    </a>
                </Grid>
            </Grid>
        </>
    )
}

export default ProjectCard