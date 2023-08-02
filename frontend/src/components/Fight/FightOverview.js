import { Card, CardActions, CardContent, CardHeader, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const FightOverview = props => {
    return (
        <Card>
            <CardHeader
                title="Kampf"
                subtitle={props.timestamp}
            />
            <CardContent>
                Inhalt
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>

    );
};

export default FightOverview;