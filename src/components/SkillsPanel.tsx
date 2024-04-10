import { Grid, Box, Stack } from '@mui/material';
import { useState } from 'react';
import python from '../assets/python.png';
import typescript from '../assets/typescript.png';
import react from '../assets/react.png';
import java from '../assets/java.png';

interface SkillProps {
    tool: String;
    logo: JSX.Element;
}
const Skill = (props: SkillProps) => {
    const { logo } = props
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = () => {
        setIsHovering(true)
    }
    const handleMouseOut = () => {
        setIsHovering(false)
    }

    return (
        <Grid item xs={3} sm={3} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {!isHovering && 
                <Stack display={'flex'} justifyContent={'space-around'} alignItems={'center'} 
                        borderRadius={'10%'} boxShadow={'10px 10px 5px black'} 
                        m={3} bgcolor={'white'} height={'120%'}>
                    {logo}
                    {/* <h3>{tool}</h3> */}
                </Stack>
            }
            {isHovering && 
                <Stack display={'flex'} justifyContent={'space-around'} alignItems={'center'} 
                        borderRadius={'10%'} boxShadow={'10px 10px 5px black'} m={3} 
                        style={{ scale: '110%'}} bgcolor={'white'} height={'120%'}>
                    {logo}
                    {/* <h3>{tool}</h3> */}
                </Stack>
            }
        </Grid>
    )
}

const SkillsPanel = () => {
    return (
        <Box p={10}>
            <h1 style={{ paddingLeft: '30px' }}>Skills</h1>
            <Grid container>
                <Skill tool={"Python"} logo={<img src={python} width={'45%'}/>}/>
                <Skill tool={"TypeScript"} logo={<img src={typescript} width={'50%'}/>}/>
                <Skill tool={"React"} logo={<img src={react} width={'50%'}/>}/>
                <Skill tool={"Java"} logo={<img src={java} width={'40%'}/>}/>
            </Grid>
        </Box>
    )
}

export default SkillsPanel