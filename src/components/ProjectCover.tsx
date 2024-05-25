import { Grid } from '@mui/material';
import award from '../assets/award.png';

interface ProjectCoverTypes {
    title: String;
    hasAward: Boolean;
    hasHackathon: Boolean;
    hackathons?: String;
    tools: Array<any>;
    image: String;
    backgroundColor: string
    textColor: string
}

const ProjectCover = (props: ProjectCoverTypes) => {
    const { title, hasAward, hasHackathon, hackathons, tools, image, backgroundColor, textColor } = props
    
    return (
    <Grid
        container
        sx={{
            height: '25vw',
            width: '30vw',
            position: 'relative',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            borderRadius: '10%',
            color: textColor,
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: {backgroundColor},
                borderRadius: '10%',
                padding: '10px',
            },
        }}
        >
            <Grid container >
                {hasAward && (
                    <Grid item xs={12} sm={3} sx={{ zIndex: 100, padding: '5%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', overflow: 'hidden' }}>
                        <img src={award} style={{ height: 'auto', width: '100%' }} alt="Award" />
                    </Grid>
                )}
                {hasHackathon && (
                    <Grid item xs={12} sm={hasAward ? 9 : 12} sx={{ zIndex: 100, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', paddingRight: '5%' }}>
                        <p style={{ fontSize: '200%', textAlign: 'end', whiteSpace: 'pre-wrap' }}>
                            {hackathons}
                        </p>
                    </Grid>
                )}
            </Grid>

            <Grid item xs={12} sm={12} sx={{ zIndex: 100 }} />

            <Grid item xs={6} sm={6} sx={{ zIndex: 100 }} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} paddingLeft={5} fontSize={'inherit'}>
                <h1>{title}</h1>
            </Grid>
            <Grid item xs={6} sm={6} sx={{ zIndex: 100 }} display={'flex'} justifyContent={'space-around'} alignItems={'center'} paddingRight={3}>
                {tools.map((tool, idx) => (
                    <div key={idx}>
                        {tool}
                    </div>
                ))}
            </Grid>
        </Grid>
    )
}

export default ProjectCover
