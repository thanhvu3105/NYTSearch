import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
        height: 500
    },
    media: {
        height: 300,
    },
});

function Popular(props) {
    const classes = useStyles();
    const {
        popular
    } = props;

    return (
        <div className={classes.root}>
            <Card clasName={classes.card} id={popular.url}>
                <CardMedia className={classes.media} component="img" src={popular.multimedia?.[0]?.url ? `https://nyt.com/${popular.multimedia[0].url}` : 'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg' }  />
                <CardContent>
                        <Typography color="primary" variant="h6">
                            <a href={popular.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                {popular.title}</a>
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle2">
                            {popular.byline}
                        </Typography>
                        <Typography variant="body2" component="p">
                            <br />
                            {popular.abstract}
                        </Typography>
                    </CardContent>
            </Card>
        </div>
    )
}

export default Popular
