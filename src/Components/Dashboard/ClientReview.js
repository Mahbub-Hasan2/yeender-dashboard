import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    expand: {
        marginLeft: 'auto'
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const ClientReview = () => {
    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    const [value, setValue] = React.useState(2);

    return (
        <Card>
            {/* CardHeader */}
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            {/* CardHeader */}

            {/* review contents  */}
            <CardContent className="pt-0 pb-0">
                <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                    medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                    again without stirring, until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
            </CardContent>
            {/* review contents  */}

            <CardActions disableSpacing>

                {/* Rating active Deactivate */}
                <FormControlLabel
                    control={<Switch checked={checked} onClick={toggleChecked} />}
                    label={checked ? "Active" : "Deactivate"}
                />
                {/* Rating active Deactivate */}

                {/* Rating  */}
                <Box component="fieldset" mb={0} borderColor="transparent">
                    ````````
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Box>
                {/* Rating  */}

                <IconButton
                    className={classes.expand}
                >
                    <DeleteForeverIcon />
                </IconButton>
            </CardActions>

        </Card>
    );
};

export default ClientReview;