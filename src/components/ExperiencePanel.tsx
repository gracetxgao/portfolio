import { Box, Tab, Tabs, Grid } from '@mui/material';
import * as React from 'react';
import photo from '../assets/placeholder.jpg';

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
          <Box sx={{ p: 3 }}>
            <Grid container>
                <Grid item xs={7} sm={7} sx={{ border: '2px solid black' }} p={3}>
                    <h1>{position}</h1>
                    <h3>{dates}</h3>
                    <ul>
                        {description.map(point => {
                            return (
                                <li>{point}</li>
                            )
                        })}
                    </ul>
                </Grid>
                <Grid item xs={5} sm={5} sx={{ border: '2px solid black' }}>
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
    };
  
    return (
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="triumf" />
            <Tab label="launch pad" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} 
            position={"summer research intern"}
            dates={"july - aug 2023"}
            description={["things", "more things"]}
            image={<img src={photo} width={'60%'} style={{ borderRadius: '20%'}}/>}>
        </TabPanel>
        <TabPanel value={value} index={1} 
            position={"software developer"}
            dates={"sep 2023 - apr 2024"}
            description={["things", "more things"]}
            image={<img src={photo} width={'60%'} style={{ borderRadius: '20%'}}/>}>
        </TabPanel>
      </Box>
    );
  }

const ExperiencePanel = () => {
    return (
        <Box sx={{ border: '2px solid black' }} p={10}>
            <h1>experience</h1>
            <ExperienceTabs></ExperienceTabs>
        </Box>
    )
}

export default ExperiencePanel