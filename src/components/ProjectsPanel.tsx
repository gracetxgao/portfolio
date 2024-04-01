import { Grid, Box } from '@mui/material';
import award from '../assets/award.png';
import python from '../assets/python.png';
import { useState } from 'react';

interface ProjectCoverTypes {
    title: String;
    hasAward: Boolean;
    awards?: Array<String>;
    tools: Array<any>;
}

const ProjectCover = (props: ProjectCoverTypes) => {
    const { title, hasAward, awards, tools } = props
    return (
        <Grid container>
            <Grid item xs={2} sm={2} sx={{ border: '2px solid black' }} paddingBottom={20}>
                {hasAward && <img src={award} width={'50%'}/>}
            </Grid>
            <Grid item xs={10} sm={10} display={'flex'} justifyContent={'space-around'} alignItems={'flex-start'} sx={{ border: '2px solid black' }} paddingBottom={20}>
                {hasAward && 
                    awards?.map(award => {
                        return (
                            <p>{award}</p>
                        )
                    })
                }
            </Grid>
            <Grid item xs={6} sm={6} sx={{ border: '2px solid black' }} display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                <h1>{title}</h1>
            </Grid>
            <Grid item xs={6} sm={6} sx={{ border: '2px solid black' }} display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                {tools.map(tool => {
                    return (
                        <img src={python} width={'10%'}/>
                    )
                })}
            </Grid>
        </Grid>
    )
}

interface ProjectCardTypes {
    title: String;
    hasAward: Boolean;
    awards?: Array<String>;
    tools: Array<Object>;
    description: String;
    links: Array<any>;
}

const ProjectCard = (props: ProjectCardTypes) => {
    const { title, hasAward, awards, tools, description } = props
    return (
        <>
            <h1>{title}</h1>
            <Grid container>
                <Grid item xs={2} sm={2} sx={{ border: '2px solid black' }} paddingBottom={20}>
                    {hasAward && <img src={award} width={'50%'}/>}
                </Grid>
                <Grid item xs={6} sm={6} display={'flex'} justifyContent={'space-around'} alignItems={'flex-start'} sx={{ border: '2px solid black' }} paddingBottom={20}>
                    {hasAward && 
                        awards?.map(award => {
                            return (
                                <p>{award}</p>
                            )
                        })
                    }
                </Grid>
                <Grid item xs={4} sm={4} sx={{ border: '2px solid black' }} display={'flex'} justifyContent={'space-around'} alignItems={'flex-start'}>
                    {tools.map(tool => {
                        return (
                            <img src={python} width={'10%'}/>
                        )
                    })}
                </Grid>
            </Grid>
            <p>{description}</p>
        </>
    )
}

const ProjectsPanel = () => {
    const [isHovering, setIsHovering] = useState(false)
    const handleMouseOver = () => {
        setIsHovering(true)
    }
    const handleMouseOut = () => {
        setIsHovering(false)
    }

    return (
        <Box sx={{ border: '2px solid black' }} p={5}>
            <h1>projects</h1>
            <Grid container>
                <Grid item xs={5} sm={5} sx={{ border: '2px solid black' }} m={3}>
                    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        {!isHovering && 
                            <ProjectCover 
                            title={"Notable"} 
                            hasAward={true} 
                            awards={["Hack to School 2022", "MesoHacks 2022"]} 
                            tools={[{python}]}/>
                        }
                        {isHovering && 
                            <ProjectCard                            
                                title={"Notable"} 
                                hasAward={true} 
                                awards={["Hack to School 2022", "MesoHacks 2022"]} 
                                tools={[{python}]}
                                description={"description"}
                                links={['link1']}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={5} sm={5} sx={{ border: '2px solid black' }} m={3}>
                    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        {!isHovering && 
                            <ProjectCover 
                            title={"Kanplan"} 
                            hasAward={false} 
                            tools={['react']}/>
                        }
                        {isHovering && 
                            <ProjectCard                            
                                title={"Kanplan"} 
                                hasAward={false} 
                                tools={['react']}
                                description={"description"}
                                links={['link1']}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={5} sm={5} sx={{ border: '2px solid black' }} m={3}>
                    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        {!isHovering && 
                            <ProjectCover 
                            title={"Serenity"} 
                            hasAward={false} 
                            tools={['react']}/>
                        }
                        {isHovering && 
                            <ProjectCard                            
                                title={"Serenity"} 
                                hasAward={false} 
                                tools={['react']}
                                description={"description"}
                                links={['link1']}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={5} sm={5} sx={{ border: '2px solid black' }} m={3}>
                    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        {!isHovering && 
                            <ProjectCover 
                            title={"Flip-flash"} 
                            hasAward={false} 
                            tools={['react']}/>
                        }
                        {isHovering && 
                            <ProjectCard                            
                                title={"Flip-flash"} 
                                hasAward={false} 
                                tools={['react']}
                                description={"description"}
                                links={['link1']}/>
                        }
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProjectsPanel
