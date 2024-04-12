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
        <Grid item xs={3} sm={3} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} 
            sx={{ 
                marginBottom: 2,
                padding: 1, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '15vw', 
                maxWidth: '100%',
            }}>
        <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} 
                borderRadius={'10%'} boxShadow={'10px 10px 5px black'} 
                m={3} bgcolor={'white'} height={'100%'} width={'100%'}
                sx={{
                    transition: 'transform 0.3s',
                    transform: isHovering ? 'scale(1.1)' : 'scale(1)',
                    aspectRatio: '1 / 1' 
                }}>
            {logo}
        </Stack>
    </Grid>
    )
}

const SkillsPanel = () => {
    return (
        <Box paddingInline={10}>
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