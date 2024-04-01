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
                            <p key={awards.indexOf(award)}>{award}</p>
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
                        <img src={python} width={'10%'} key={tools.indexOf(tool)}/>
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
                                <p key={awards.indexOf(award)}>{award}</p>
                            )
                        })
                    }
                </Grid>
                <Grid item xs={4} sm={4} sx={{ border: '2px solid black' }} display={'flex'} justifyContent={'space-around'} alignItems={'flex-start'}>
                    {tools.map(tool => {
                        return (
                            <img src={python} width={'10%'} key={tools.indexOf(tool)}/>
                        )
                    })}
                </Grid>
            </Grid>
            <p>{description}</p>
        </>
    )
}

const ProjectsPanel = () => {
    const [isHoveringOne, setIsHoveringOne] = useState(false)
    const [isHoveringTwo, setIsHoveringTwo] = useState(false)
    const [isHoveringThree, setIsHoveringThree] = useState(false)
    const [isHoveringFour, setIsHoveringFour] = useState(false)

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
    const handleMouseOverFour = () => {
        setIsHoveringFour(true)
    }
    const handleMouseOutFour = () => {
        setIsHoveringFour(false)
    }

    return (
        <Box sx={{ border: '2px solid black' }} p={10}>
            <h1>projects</h1>
            <Grid container>
                <Grid item xs={5} sm={5} sx={{ border: '2px solid black' }} m={3}>
                    <div onMouseOver={handleMouseOverOne} onMouseOut={handleMouseOutOne}>
                        {!isHoveringOne && 
                            <ProjectCover 
                            title={"Notable"} 
                            hasAward={true} 
                            awards={["Hack to School 2022", "MesoHacks 2022"]} 
                            tools={[{python}]}/>
                        }
                        {isHoveringOne && 
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
                    <div onMouseOver={handleMouseOverTwo} onMouseOut={handleMouseOutTwo}>
                        {!isHoveringTwo && 
                            <ProjectCover 
                            title={"Kanplan"} 
                            hasAward={false} 
                            tools={['react']}/>
                        }
                        {isHoveringTwo && 
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
                    <div onMouseOver={handleMouseOverThree} onMouseOut={handleMouseOutThree}>
                        {!isHoveringThree && 
                            <ProjectCover 
                            title={"Serenity"} 
                            hasAward={false} 
                            tools={['react']}/>
                        }
                        {isHoveringThree && 
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
                    <div onMouseOver={handleMouseOverFour} onMouseOut={handleMouseOutFour}>
                        {!isHoveringFour && 
                            <ProjectCover 
                            title={"Flip-flash"} 
                            hasAward={false} 
                            tools={['react']}/>
                        }
                        {isHoveringFour && 
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
