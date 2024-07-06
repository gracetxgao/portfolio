import { Box, Tab, Tabs, Grid } from '@mui/material';
import * as React from 'react';
import triumf from '../assets/triumf.jpg';
import launchpad from '../assets/launchpad.jpg';
import ai4good from '../assets/ai4good.jpg';


interface TabPanelProps {
    index: number;
    value: number;
    position: String;
    dates: String;
    description: Array<String>;
    image: any;
    backgroundColor: string;
    textColor: string;
}

const TabPanel = (props: TabPanelProps) => {
    const { value, index, position, dates, description, image, backgroundColor, textColor } = props;

    return (
        <div hidden={value !== index} id={`simple-tabpanel-${index}`}>
            {value === index && (
                <Box>
                    <Grid container sx={{ borderRadius: '0 0 20px 20px', padding: '2%', backgroundColor: backgroundColor }}>
                        <Grid item xs={12} sm={7} paddingInline={'10%'} paddingBlock={4} justifyContent={'space-evenly'} alignItems={'flex-start'}>
                            <h1 style={{ fontSize: '200%', color: textColor }}>{position}</h1>
                            <h3 style={{ color: textColor }}>{dates}</h3>
                            <ul style={{ fontSize: '120%', color: textColor }}>
                                {description.map((point, i) => {
                                    return (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: point }} style={{ color: textColor }} />
                                    )
                                })}
                            </ul>
                        </Grid>
                        <Grid item xs={5} sm={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} paddingBlock={4}>
                            {image}
                        </Grid>
                    </Grid>
                </Box>
            )}
        </div>
    );
}

interface ExperienceTabsProps {
    backgroundColor: string;
    textColor: string;
    highlightColor: string
}

const ExperienceTabs = (props: ExperienceTabsProps) => {
    const { backgroundColor, textColor, highlightColor } = props;

    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ paddingLeft: '30px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', borderRadius: '20px 20px 0px 0px', backgroundColor: highlightColor, border: `1px solid ${textColor}` }}>
                <Tabs value={value} onChange={handleChange} textColor="inherit" >
                    <Tab label="TRIUMF" sx={{ color: textColor }} />
                    <Tab label="UBC Launch Pad" sx={{ color: textColor }} />
                    <Tab label="AI4Good Lab" sx={{ color: textColor }} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}
                position={"Summer Research Intern"}
                dates={"Jul - Aug 2023"}
                description={[
                    `Worked with the <a href='https://fiveyearplan.triumf.ca/teams-tools/targets-and-ion-sources/index.html' target='_blank' style='color: ${textColor};'>Targets & Ion Sources Development</a> group at ISAC II on the Radioactive Ion Beam Optimizer (RIBO) simulation program`,
                    `See the <a href='https://drive.google.com/file/d/1jnJf5IfQ4Fnweu0Bgg-tNGIlGIAKeyFu/view?usp=sharingposter' target='_blank' style='color: ${textColor};'>poster</a> my team created and presented, and read more about the work I did on my resume!`
                ]}
                image={<img src={triumf} width={'60%'} style={{ borderRadius: '10%' }} />}
                backgroundColor={backgroundColor}
                textColor={textColor}
            />
            <TabPanel value={value} index={1}
                position={"Software Developer"}
                dates={"Sep 2023 - Apr 2024"}
                description={[
                    "Collaborated with a team of seven at <a href='https://www.ubclaunchpad.com' target='_blank' style='color: black;'>UBC Launch Pad</a> to develop EpiLog, a seizure-tracking mobile application for epilepsy patients",
                    "Used React Native and Firebase for the first time!"
                ]}
                image={<img src={launchpad} width={'60%'} style={{ borderRadius: '10%' }} />}
                backgroundColor={backgroundColor}
                textColor={textColor}
            />
            <TabPanel value={value} index={2}
                position={"Machine Learning Fellow"}
                dates={"May 2024 - Jun 2024"}
                description={[
                    "Selected to participate in a machine learning program run by the <a href='https://www.ai4goodlab.com/' target='_blank' style='color: black;'>AI4Good Lab</a> at <a href='https://mila.quebec/en' target='_blank' style='color: black;'>Mila</a>, Quebec's AI institute",
                    "Built a scoliosis diagnosis app with a team of six, and pitched our project to an audience of 100+",
                    "Explored CNNs, RNNs, and reinforcement learning with mentors from Google DeepMind, Mila, and CIFAR"
                ]}
                image={<img src={ai4good} width={'60%'} style={{ borderRadius: '10%' }} />}
                backgroundColor={backgroundColor}
                textColor={textColor}
            />
        </Box>
    );
}

interface ExperiencePanelProps {
    backgroundColor: string;
    textColor: string;
    highlightColor: string
}

const ExperiencePanel = (props: ExperiencePanelProps) => {
    const { backgroundColor, textColor, highlightColor } = props;

    return (
        <Box paddingInline={10} color={textColor}>
            <h1 style={{ paddingLeft: '30px' }}>Experience</h1>
            <ExperienceTabs backgroundColor={backgroundColor} textColor={textColor} highlightColor={highlightColor} />
        </Box>
    )
}

export default ExperiencePanel;