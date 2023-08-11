import { Box, Card, CardActions, CardContent, CardHeader, Container, CssBaseline, IconButton, List, Slider, ThemeProvider, Typography } from '@mui/material';
import { customTheme } from '../../assets/themes/customTheme';
import DevelopmentButton from '../FloatingActionButton/DevelopmentButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FighterListItem from './FighterListItem';

const FightOverview = props => {
    const date = new Date(props.timestamp);

    function valuetext(round) {
        return 'Runde ' + round;
    }

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline enableColorScheme />
            <Card sx={{ width: '70%', margin: '5% 15%', borderRadius: 6 }} elevation={1}>
                <CardHeader
                    subheader={<Typography variant="body2">
                        {date.toLocaleDateString('de-DE', { dateStyle: 'full' }) + ', ' + date.getHours() + ':' + date.getMinutes()}
                    </Typography>}
                />
                <CardContent>
                    <Box sx={{ display: 'flex', textAlign: 'center'}}>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant='h5'>
                                Angreifer
                            </Typography>
                            <List>
                                <FighterListItem name="Equindar" avatar="Eq" />
                                <FighterListItem name="LNX" avatar="L" />

                            </List>
                        </Box>
                        <Box sx={{ flex: 3, border: 1 }}>
                            Arena
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant='h5'>
                                Verteidiger
                            </Typography>
                            <List>
                                <FighterListItem name="Wolf #1" avatar="W" />
                                <FighterListItem name="Leitwolf" avatar="L" />
                                <FighterListItem name="Wolf #2" avatar="W" />
                                <FighterListItem name="Jungwolf" avatar="J" />
                            </List>
                        </Box>
                    </Box>
                    <Container>
                        <Slider
                            aria-label="Kampfrunden"
                            defaultValue={props.current}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={props.rounds}
                            sx={{ marginTop: 3}}
                        />
                    </Container>
                    <Container sx={{ width: '100%', bgcolor: 'background.paper' }}>Kampfbericht</Container>
                </CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'row-reverse', width: '100%' }}>
                    <DevelopmentButton />
                </Box>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </ThemeProvider>

    );
};

export default FightOverview;