import { Avatar, Box, Card, CardContent, CardHeader, CssBaseline, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Tab, ThemeProvider, Typography, } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import SettingsIcon from '@mui/icons-material/Settings';
import PaletteIcon from '@mui/icons-material/Palette';
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import React from "react";
import { customTheme } from "../../assets/themes/customTheme";

function Inventory() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline enableColorScheme />
      <Card sx={{ width: '50%', margin: '10% 25%'}}>
        <CardHeader
          avatar={
            <Avatar>Eq</Avatar>
          }
          title={
            <Typography variant="h4">Inventar</Typography>
          }
          subheader="Traglast: 38 / 75kg"
        >

        </CardHeader>
        <CardContent>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList aria-label="Inventar-Kategorie-Tabs" variant="scrollable" onChange={handleChange}>
                <Tab label="Waffen" value="1" />
                <Tab label="Rüstung" value="2" />
                <Tab label="Materialien" />
                <Tab label="Mahlzeiten" />
                <Tab label="Favoriten" disabled />
                <Tab label="Wichtiges" />
                <Tab icon={<SettingsIcon />} aria-label="Einstellungen" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <List
                subheader={<ListSubheader>ausgerüstet</ListSubheader>}
              >
                <ListItem>
                  <ListItemIcon><PaletteIcon /></ListItemIcon>
                  <ListItemText primary="Eisenschwert"></ListItemText>
                  <Typography variant="body2">Schaden: 18 - 22</Typography>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem>
                  <ListItemIcon><PaletteIcon /></ListItemIcon>
                  <ListItemText primary="Holzschwert"></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon><PaletteIcon /></ListItemIcon>
                  <ListItemText primary="Jagdbogen"></ListItemText>
                </ListItem>
              </List>       
            </TabPanel>
            <TabPanel value="2">
              <List
                subheader={<ListSubheader>ausgerüstet</ListSubheader>}
              >
                <ListItem>
                  <ListItemIcon><PaletteIcon /></ListItemIcon>
                  <ListItemText primary="Eisenschild"></ListItemText>
                  <Typography variant="body2">Rüstwert: 10 - 15</Typography>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem></ListItem>
              </List>       
            </TabPanel>
          </TabContext>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default Inventory;
