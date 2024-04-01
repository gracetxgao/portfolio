import { Grid, Box, Stack } from '@mui/material';
import { useState } from 'react';
import python from '../assets/python.png';
import typescript from '../assets/typescript.png';
import react from '../assets/react.png';

interface SkillProps {
    tool: String;
    logo: JSX.Element;
}
const Skill = (props: SkillProps) => {
    const { tool, logo } = props
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
                <Stack display={'flex'} justifyContent={'space-around'} alignItems={'center'} borderRadius={'10%'} boxShadow={'10px 10px 5px black'} m={5}>
                    {logo}
                    <h3>{tool}</h3>
                </Stack>
            }
            {isHovering && 
                <Stack display={'flex'} justifyContent={'space-around'} alignItems={'center'} borderRadius={'10%'} boxShadow={'10px 10px 5px black'} m={5} style={{ scale: '110%'}}>
                    {logo}
                    <h3>{tool}</h3>
                </Stack>
            }
        </Grid>
    )
}

const SkillsPanel = () => {
    return (
        <Box sx={{ border: '2px solid black' }} p={10}>
        <h1>skills</h1>
        <Grid container>
            <Skill tool={"python"} logo={<img src={python} width={'50%'}/>}/>
            <Skill tool={"typescript"} logo={<img src={typescript} width={'50%'}/>}/>
            <Skill tool={"react"} logo={<img src={react} width={'50%'}/>}/>
            <Skill tool={"python"} logo={<img src={python} width={'50%'}/>}/>
        </Grid>
    </Box>
    )
}

export default SkillsPanel