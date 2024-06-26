import { Grid, Box, Stack } from '@mui/material';
import { useState } from 'react';
import python from '../assets/python.png';
import typescript from '../assets/typescript.png';
import react from '../assets/react.png';
import java from '../assets/java.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import figma from '../assets/figma.png';
// import mongo from '../assets/mongo.png';
// import node from '../assets/node.png';
import javascript from '../assets/javascript.png';

interface SkillProps {
    tool: String;
    logo: JSX.Element;
    backgroundColor: string
    shadowColor: string
}

const Skill = (props: SkillProps) => {
    const { logo, backgroundColor, shadowColor } = props
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
                borderRadius={'10%'} boxShadow={`10px 10px 5px ${shadowColor}`} 
                m={3} bgcolor={backgroundColor} height={'100%'} width={'100%'}
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

interface SkillPanelProps {
    backgroundColor: string
    shadowColor: string
    textColor: string
}

const SkillsPanel = (props: SkillPanelProps) => {
    const { backgroundColor, shadowColor, textColor } = props

    return (
        <Box paddingInline={10}>
            <h1 style={{ paddingLeft: '30px', color: textColor }}>Skills</h1>
            <Grid container>
                <Skill tool={"Python"} logo={<img src={python} width={'45%'}/>} backgroundColor={backgroundColor} shadowColor={shadowColor}/>
                <Skill tool={"Java"} logo={<img src={java} width={'40%'}/>} backgroundColor={backgroundColor} shadowColor={shadowColor}/>
                <Skill tool={"React"} logo={<img src={react} width={'50%'}/>} backgroundColor={backgroundColor} shadowColor={shadowColor}/>
                <Skill tool={"TypeScript"} logo={<img src={typescript} width={'50%'}/>} backgroundColor={backgroundColor} shadowColor={shadowColor}/>
                <Skill tool={"JavaScript"} logo={<img src={javascript} width={'50%'}/>} backgroundColor={backgroundColor} shadowColor={shadowColor}/>
                <Skill tool={"HTML"} logo={<img src={html} width={'45%'}/>} backgroundColor={backgroundColor} shadowColor={shadowColor}/>
                <Skill tool={"CSS"} logo={<img src={css} width={'45%'}/>} backgroundColor={backgroundColor} shadowColor={shadowColor}/>
                <Skill tool={"Figma"} logo={<img src={figma} width={'35%'}/>} backgroundColor={backgroundColor} shadowColor={shadowColor}/>
            </Grid>
        </Box>
    )
}

export default SkillsPanel