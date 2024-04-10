import { Grid, Box } from '@mui/material';
import award from '../assets/award.png';
import python from '../assets/python.png';
import flask from '../assets/flask.png';
import github from '../assets/github.png';
import react from '../assets/react.png';
import typescript from '../assets/typescript.png';
import java from '../assets/java.png';
import { useState } from 'react';

interface ProjectCoverTypes {
    title: String;
    hasAward: Boolean;
    hasHackathon: Boolean;
    hackathons?: String;
    tools: Array<any>;
    image: String;
}

const ProjectCover = (props: ProjectCoverTypes) => {
    const { title, hasAward, hasHackathon, hackathons, tools, image } = props
    
    return (
    <Grid
        container
        sx={{
            height: '500px',
            position: 'relative',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundColor: '#B8D4E8',
            borderRadius: '10%',
            // padding: '10px',
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
            <Grid container alignItems="flex-start">
                {hasAward && (
                    <Grid item xs={12} sm={3} sx={{ zIndex: 100, paddingBottom: '2%', paddingLeft: '5%', paddingTop: '5%' }}>
                        <img src={award} style={{ width: '40%', height: 'auto' }} alt="Award" />
                    </Grid>
                )}
                {hasHackathon && (
                    <Grid item xs={12} sm={hasAward ? 9 : 12} sx={{ zIndex: 100, paddingBottom: '2%', paddingRight: '10%' }}>
                        <p style={{ fontSize: '200%', textAlign: 'end', whiteSpace: 'pre-wrap' }}>
                            {hackathons}
                        </p>
                    </Grid>
                )}
            </Grid>

            <Grid item xs={12} sm={12} sx={{ zIndex: 100 }} />

            <Grid item xs={6} sm={6} sx={{ zIndex: 100 }} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} paddingLeft={5} fontSize={'120%'}>
                <h1>{title}</h1>
            </Grid>
            <Grid item xs={6} sm={6} sx={{ zIndex: 100 }} display={'flex'} justifyContent={'space-around'} alignItems={'center'} paddingRight={3}>
                {tools.map(tool => tool)}
            </Grid>
        </Grid>
    )
}

interface ProjectCardTypes {
    title: String;
    hasAward: Boolean;
    hackathons?: String;
    hasHackathon: Boolean;
    tools: Array<any>;
    description: String;
    link: string;
}

const ProjectCard = (props: ProjectCardTypes) => {
    const { title, hackathons, hasHackathon, tools, description, link } = props
    return (
        <>
            <Grid
                container
                sx={{
                    height: '500px',
                    position: 'relative',
                    backgroundSize: 'cover',
                    backgroundColor: '#B8D4E8',
                    borderRadius: '10%',
                }}
                >
                <Grid item xs={12} sm={12} textAlign={'center'} fontSize={'200%'} sx={{ height: '10%'}}>
                    <h1>{title}</h1>
                </Grid>
                {hasHackathon &&
                    <Grid item xs={6} sm={6} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ height: '20%' }} marginTop={10} paddingInline={5}>
                        <p style={{ fontSize: '150%', whiteSpace: 'pre-wrap', textAlign: 'center'}}>
                            {hackathons}
                        </p>
                    </Grid>
                }
                <Grid item xs={hasHackathon ? 6 : 12} sm={hasHackathon ? 6 : 12} sx={{ height: '20%' }} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} marginTop={10}>
                    {tools.map(tool => tool)}
                </Grid>
                <Grid item xs={12} sm={12} sx={{ height: '60%' }} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} paddingTop={1} paddingInline={'20%'}>
                    <p style={{ fontSize: '130%', textAlign: 'center'}}>{description}</p>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ height: '12%' }} display={'flex'} justifyContent={'center'} marginTop={-20}>
                    <a href={link} target="_blank">
                        <img src={github} alt="GitHub" width={'100%'} height={'100%'}/>
                    </a>
                </Grid>
            </Grid>
        </>
    )
}

const ProjectsPanel = () => {
    const [isHoveringOne, setIsHoveringOne] = useState(false)
    const [isHoveringTwo, setIsHoveringTwo] = useState(false)
    const [isHoveringThree, setIsHoveringThree] = useState(false)

    const handleMouseOverOne = () => {
        setIsHoveringOne(true)
    }
    const handleMouseOutOne = () => {
        setIsHoveringOne(false)
    }
    const handleMouseOverTwo = () => {
        setIsHoveringTwo(true)
    }
    const handleMouseOutTwo = () => {
        setIsHoveringTwo(false)
    }
    const handleMouseOverThree = () => {
        setIsHoveringThree(true)
    }
    const handleMouseOutThree = () => {
        setIsHoveringThree(false)
    }

    return (
        <Box p={10} >
            <h1 style={{ paddingLeft: '30px' }}>Projects</h1>
            <Grid container>
                <Grid item xs={6} sm={6}>
                    <div onMouseOver={handleMouseOverOne} onMouseOut={handleMouseOutOne}
                        style={{ marginBlock: '10%', marginInlineEnd: '5%', paddingLeft: '30px' }}>
                        {!isHoveringOne && 
                            <ProjectCover 
                                title={"Notable"} 
                                hasAward={true} 
                                hasHackathon={true} 
                                hackathons={"Hack to School 2022\nMesoHacks 2022"} 
                                tools={[<img src={python} width={'30%'}/>,<img src={flask} width={'40%'} />]}
                                image={'/src/assets/notable.png'}/>
                        }
                        {isHoveringOne && 
                            <ProjectCard                            
                                title={"Notable"} 
                                hasAward={true} 
                                hasHackathon={true} 
                                hackathons={"Hack to School 2022  MesoHacks 2022"} 
                                tools={[<img src={python} width={'20%'}/>,<img src={flask} width={'30%'} />]}
                                description={"a note-sharing web app. best education hack @ mesohacks 2022 and 2nd overall @ hack to school 2022"}
                                link={'https://github.com/gracetxgao/notable'}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <div onMouseOver={handleMouseOverTwo} onMouseOut={handleMouseOutTwo}
                        style={{ marginBlock: '10%', marginInlineStart: '5%', paddingRight: '30px' }}>
                        {!isHoveringTwo && 
                            <ProjectCover 
                                title={"DareVenture"} 
                                hasAward={false} 
                                hasHackathon={true} 
                                hackathons={"YouCode 2024"} 
                                tools={[<img src={react} width={'25%'}/>,<img src={typescript} width={'30%'} />]}
                                image={'/src/assets/dareventure.png'}/>
                        }
                        {isHoveringTwo && 
                            <ProjectCard                            
                                title={"DareVenture"} 
                                hasAward={false} 
                                hasHackathon={true} 
                                hackathons={"YouCode 2024"} 
                                tools={[<img src={react} width={'25%'}/>,<img src={typescript} width={'25%'} />]}
                                description={"a mobile app promoting well-being by offering rewards and offers for completing wellness tasks"}
                                link={"https://github.com/gracetxgao/youcode2024"}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <div onMouseOver={handleMouseOverThree} onMouseOut={handleMouseOutThree}
                        style={{ marginBlock: '10%', marginInlineStart: '5%', paddingRight: '30px' }}>
                        {!isHoveringThree && 
                            <ProjectCover 
                                title={"Stock Master"} 
                                hasAward={false} 
                                hasHackathon={true} 
                                hackathons={"CPSC 210"} 
                                tools={[<img src={java} width={'30%'}/>]}
                                image={'/src/assets/stock.png'}/>
                        }
                        {isHoveringThree && 
                            <ProjectCard                            
                                title={"Stock Master"} 
                                hasAward={false} 
                                hasHackathon={true} 
                                hackathons={"CPSC 210"} 
                                tools={[<img src={java} width={'10%'}/>]}
                                description={"a stock market simulator, built for CPSC 210"}
                                link={"https://github.students.cs.ubc.ca/CPSC210-2023W-T2/project_a8b8b"}/>
                        }
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProjectsPanel
