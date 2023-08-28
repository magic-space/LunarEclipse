import { Box, Card, CardContent, CssBaseline, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Tab, ThemeProvider, Typography, } from '@mui/material';
import { Paper, LinearProgress, Alert, AlertTitle } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import PaletteIcon from '@mui/icons-material/Palette';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import React from 'react';
import { customTheme } from '../../assets/themes/customTheme';
import DevelopmentButton from '../FloatingActionButton/DevelopmentButton';
import InventoryListItem from './InventoryListItem';
import TokenIcon from '@mui/icons-material/Token';

const Inventory = props => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline enableColorScheme />
      <Card sx={{ width: '70%', margin: '5% 15%', borderRadius: 6 }} elevation={1}>
        <CardContent>
          <Alert severity="warning">
            <AlertTitle>Warnung</AlertTitle>
            Das Feature ist aktuell in der Entwicklung.
          </Alert>
          <Paper elevation={3} sx={{ height: '100%' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList aria-label='Inventar-Kategorie-Tabs' variant='scrollable' onChange={handleChange}>
                  <Tab label={<SearchIcon />} value='0' aria-label='Suche' />
                  <Tab label='Waffen' value='1' />
                  <Tab label='Rüstung' value='2' />
                  <Tab label='Materialien' />
                  <Tab label='Mahlzeiten' />
                  <Tab label='Favoriten' disabled />
                  <Tab label='Wichtiges' />
                  <Tab icon={<SettingsIcon />} aria-label='Einstellungen' />
                </TabList>
              </Box>
              <TabPanel value='1' sx={{ p: 1, overflow: 'auto', height: '100%' }}>
                <List
                  subheader={<ListSubheader>ausgerüstet</ListSubheader>}
                >
                  <InventoryListItem name='Letzter Atemzug' subtitle='Schaden: 745 - 846' type='Kampfsense' label='seelengebunden' value='15.450' />
                </List>
                <Divider />
                <List>
                  <InventoryListItem name='Eisenschwert' subtitle='Schaden: 18 - 22' type='Schwert' value='1.500' />
                  <InventoryListItem name='Holzschwert' subtitle='Schaden: 10 - 13' type='Schwert' value='800' />
                  <InventoryListItem name='Jagdbogen' subtitle='Schaden: 26 - 31' type='Bogen' value='3.200' />
                </List>
              </TabPanel>
              <TabPanel value='2'>
                <List
                  subheader={<ListSubheader>ausgerüstet</ListSubheader>}
                >
                  <ListItem>
                    <ListItemIcon><PaletteIcon /></ListItemIcon>
                    <ListItemText primary='Eisenschild'></ListItemText>
                    <Typography variant='body2'>Rüstwert: 10 - 15</Typography>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem></ListItem>
                </List>
              </TabPanel>
            </TabContext>
          </Paper>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 3, paddingRight: 3 }}>
          <Box sx={{ maxWidth: '50%' }}>
            <LinearProgress variant='determinate' value={props.weight / props.limit * 100} />
            <Typography>
              Kapazität: {props.weight} / {props.limit} kg
            </Typography>
          </Box>
          <Typography>
            <TokenIcon fontSize='small' sx={{ verticalAlign: 'top', marginRight: 0.5 }} />
            6.586 Silberlinge
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse', width: '100%' }}>
          <DevelopmentButton />
        </Box>
      </Card>
    </ThemeProvider >
  );
};

export default Inventory;
