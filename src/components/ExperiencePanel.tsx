import { Box, Tab, Tabs, Grid } from '@mui/material';
import * as React from 'react';
import triumf from '../assets/triumf.jpg';
import launchpad from '../assets/launchpad.jpg';

interface TabPanelProps {
    index: number;
    value: number;
    position: String;
    dates: String;
    description: Array<String>;
    image: any;
}
  
const TabPanel = (props: TabPanelProps) => {
  
    const { value, index, position, dates, description, image } = props;
  
    return (
      <div hidden={value !== index} id={`simple-tabpanel-${index}`}>
        {value === index && (
          <Box>
            <Grid container sx={{ backgroundColor: 'white', borderRadius: '0 0 20px 20px', padding: '2%'}}>
                <Grid item xs={12} sm={7} paddingInline={'10%'} paddingBlock={4} justifyContent={'space-evenly'} alignItems={'flex-start'}>
                    <h1 style={{ fontSize: '200%'}}>{position}</h1>
                    <h3>{dates}</h3>
                    <ul style={{ fontSize: '120%'}}>
                        {description.map(point => {
                            return (
                                <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                            )
                        })}
                    </ul>
                </Grid>
                <Grid item xs={5} sm={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}} paddingBlock={4}>
                    {image}
                </Grid>
            </Grid>
          </Box>
        )}
      </div>
    );
  }
  
  const ExperienceTabs = () => {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
      console.log(event);
      
    };
  
    return (
      <Box >
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#B8D4E8', borderRadius: '20px 20px 0px 0px'}}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="TRIUMF" />
            <Tab label="UBC Launch Pad" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} 
            position={"Summer Research Intern"}
            dates={"Jul - Aug 2023"}
            description={["Worked with the <a href='https://fiveyearplan.triumf.ca/teams-tools/targets-and-ion-sources/index.html' target='_blank' style='color: black;'>Targets & Ion Sources Development</a> group at ISAC II on the Radioactive Ion Beam Optimizer (RIBO) simulation program", "See the <a href='https://drive.google.com/file/d/1jnJf5IfQ4Fnweu0Bgg-tNGIlGIAKeyFu/view?usp=sharingposter' target='_blank' style='color: black;'>poster</a> my team created and presented, and read more about the work I did on my resume!"]}
            image={<img src={triumf} width={'60%'} style={{ borderRadius: '10%'}}/>}>
        </TabPanel>
        <TabPanel value={value} index={1} 
            position={"Software Developer"}
            dates={"Sep 2023 - Apr 2024"}
            description={["Collaborated with a team of seven to develop EpiLog, a seizure-tracking mobile application for epilepsy patients", "Used React Native and Firebase for the first time!"]}
            image={<img src={launchpad} width={'60%'} style={{ borderRadius: '10%'}}/>}>
        </TabPanel>
      </Box>
    );
  }

const ExperiencePanel = () => {
    return (
        <Box p={10}>
            <h1>Experience</h1>
            <ExperienceTabs/>
        </Box>
    )
}

export default ExperiencePanel