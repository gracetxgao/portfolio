import { Grid, Box } from '@mui/material';
import python from '../assets/python.png';
import flask from '../assets/flask.png';
import react from '../assets/react.png';
import typescript from '../assets/typescript.png';
import java from '../assets/java.png';
import { useState } from 'react';
import notable from '../assets/notable.png';
import dareventure from '../assets/dareventure.png';
import stock from '../assets/stock.png';
import ProjectCard from './ProjectCard';
import ProjectCover from './ProjectCover';
import endanger from '../assets/endanger.jpg';
import spinecare from '../assets/spinecare.png';

interface ProjectsPanelTypes {
    textColor: string;
    backgroundColor: string;
}

const ProjectsPanel = (props: ProjectsPanelTypes) => {
    const { textColor, backgroundColor } = props

    const [hovering, setHovering] = useState([false, false, false, false, false])

    const handleMouseOver = (i: number) => {
        setHovering(prev => {
            const newHovering = [...prev]
            newHovering[i] = true
            return newHovering
        })
    }

    const handleMouseOut = (i: number) => {
        setHovering(prev => {
            const newHovering = [...prev]
            newHovering[i] = false
            return newHovering
        })
    }

    return (
        <Box paddingInline={10}>
            <h1 style={{ paddingLeft: '30px', color: textColor }}>Projects</h1>
            <Grid container>
                <Grid item xs={6} sm={6}>
                    <div onMouseOver={() => {handleMouseOver(5)}} onMouseOut={() => {handleMouseOut(5)}}
                            style={{ marginBlock: '5%', marginInlineEnd: '5%', paddingLeft: '30px' }}>
                            {!hovering[5] ? 
                                <ProjectCover 
                                    title={"spineCARE"} 
                                    hasAward={false} 
                                    hasHackathon={true} 
                                    hackathons={"AI4Good Lab"} 
                                    tools={[<img src={typescript} width={'30%'}/>,<img src={react} width={'40%'} />, ,<img src={flask} width={'40%'} />]}
                                    image={spinecare}
                                    backgroundColor={backgroundColor}
                                    textColor={textColor}
                                />
                            :
                                <ProjectCard                            
                                    title={"spineCARE"} 
                                    hasAward={false} 
                                    hasHackathon={true} 
                                    hackathons={"AI4Good Lab"} 
                                    tools={[<img src={typescript} width={'30%'}/>,<img src={react} width={'40%'} />, ,<img src={flask} width={'40%'} />]}
                                    description={"A scoliosis diagnosis aid to help patients and doctors monitor cases of AIS. Uses Microsoft's BiomedCLIP model and has achieved an 80\% accuracy rate."}
                                    link={'https://github.com/gracetxgao/spinecare'}
                                    image={spinecare}
                                    backgroundColor={backgroundColor}
                                    textColor={textColor}
                                />
                            }
                        </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <div onMouseOver={() => {handleMouseOver(0)}} onMouseOut={() => {handleMouseOut(0)}}
                            style={{ marginBlock: '5%', marginInlineEnd: '5%', paddingLeft: '30px' }}>
                            {!hovering[0] ? 
                                <ProjectCover 
                                    title={"Stranger Endanger"} 
                                    hasAward={true} 
                                    hasHackathon={true} 
                                    hackathons={"StormHacks 2024"} 
                                    tools={[<img src={typescript} width={'30%'}/>,<img src={react} width={'40%'} />]}
                                    image={endanger}
                                    backgroundColor={backgroundColor}
                                    textColor={textColor}
                                />
                            :
                                <ProjectCard                            
                                    title={"Stranger Endanger"} 
                                    hasAward={true} 
                                    hasHackathon={true} 
                                    hackathons={"StormHacks 2024"} 
                                    tools={[<img src={typescript} width={'20%'}/>,<img src={react} width={'30%'} />]}
                                    description={"A web app built to raise awareness for endangered species. Best Frontend Design @ StormHacks 2024 out of 70+ projects"}
                                    link={'https://github.com/gracetxgao/stranger-endanger'}
                                    image={endanger}
                                    backgroundColor={backgroundColor}
                                    textColor={textColor}
                                />
                            }
                        </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <div onMouseOver={() => {handleMouseOver(1)}} onMouseOut={() => {handleMouseOut(1)}}
                        style={{ marginBlock: '5%', marginInlineEnd: '5%', paddingLeft: '30px' }}>
                        {!hovering[1] ? 
                            <ProjectCover 
                                title={"Notable"} 
                                hasAward={true} 
                                hasHackathon={true} 
                                hackathons={"Hack to School 2022\nMesoHacks 2022"} 
                                tools={[<img src={python} width={'30%'}/>,<img src={flask} width={'40%'} />]}
                                image={notable}
                                backgroundColor={backgroundColor}
                                textColor={textColor}
                            />
                        :
                            <ProjectCard                            
                                title={"Notable"} 
                                hasAward={true} 
                                hasHackathon={true} 
                                hackathons={"Hack to School 2022  MesoHacks 2022"} 
                                tools={[<img src={python} width={'20%'}/>,<img src={flask} width={'30%'} />]}
                                description={"A note-sharing web app. Best Education Hack @ MesoHacks 2022 and 2nd overall @ Hack to School 2022"}
                                link={'https://github.com/gracetxgao/notable'}
                                image={notable}
                                backgroundColor={backgroundColor}
                                textColor={textColor}
                            />
                        }
                    </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <div onMouseOver={() => {handleMouseOver(2)}} onMouseOut={() => {handleMouseOut(2)}}
                        style={{ marginBlock: '5%', marginInlineStart: '5%', paddingRight: '30px' }}>
                        {!hovering[2] ? 
                            <ProjectCover 
                                title={"DareVenture"} 
                                hasAward={false} 
                                hasHackathon={true} 
                                hackathons={"youCode 2024"} 
                                tools={[<img src={typescript} width={'30%'} />, <img src={react} width={'25%'}/>]}
                                image={dareventure}
                                backgroundColor={backgroundColor}
                                textColor={textColor}
                            />
                        :
                            <ProjectCard                            
                                title={"DareVenture"} 
                                hasAward={false} 
                                hasHackathon={true} 
                                hackathons={"youCode 2024"} 
                                tools={[<img src={typescript} width={'25%'} />,<img src={react} width={'25%'}/>]}
                                description={"A mobile app promoting well-being by offering rewards and offers with partnering companies for completing wellness tasks"}
                                link={"https://github.com/gracetxgao/youcode2024"}
                                image={dareventure}
                                backgroundColor={backgroundColor}
                                textColor={textColor}
                            />
                        }
                    </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <div onMouseOver={() => {handleMouseOver(3)}} onMouseOut={() => {handleMouseOut(3)}}
                        style={{ marginBlock: '5%', marginInlineStart: '5%', paddingRight: '30px' }}>
                        {!hovering[3] ?
                            <ProjectCover 
                                title={"Stock Master"} 
                                hasAward={false} 
                                hasHackathon={true} 
                                hackathons={"CPSC 210"} 
                                tools={[<img src={java} width={'30%'}/>]}
                                image={stock}
                                backgroundColor={backgroundColor}
                                textColor={textColor}
                            />
                        :
                            <ProjectCard                            
                                title={"Stock Master"} 
                                hasAward={false} 
                                hasHackathon={true} 
                                hackathons={"CPSC 210"} 
                                tools={[<img src={java} width={'20%'}/>]}
                                description={"A stock market simulator with data visualization components. Built for my CPSC 210 term project."}
                                link={"https://github.students.cs.ubc.ca/CPSC210-2023W-T2/project_a8b8b"}
                                image={stock}
                                backgroundColor={backgroundColor}
                                textColor={textColor}
                            />
                        }
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProjectsPanel
