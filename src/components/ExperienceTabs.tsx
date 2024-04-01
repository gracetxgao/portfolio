import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children: String;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {

  const { children, value, index } = props;

  return (
    <div hidden={value !== index} id={`simple-tabpanel-${index}`}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <p>{children}</p>
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
      <CustomTabPanel value={value} index={0}>
        triumf
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        launch pad
      </CustomTabPanel>
    </Box>
  );
}

export default ExperienceTabs;