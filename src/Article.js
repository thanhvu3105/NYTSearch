import React from 'react'
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        background: "#fafafa",
        height: 600
    },
    media: {
        height: 300
    },
});

function Article({article}) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            {article && (<Card className={classes.card} id={article._id}>
                <CardMedia className={classes.media} component="img"
                    src={article.multimedia?.[0]?.url ?
                        `https://nytimes.com/${article.multimedia[0].url}` :
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/New_York_Times_logo_variation.jpg/1280px-New_York_Times_logo_variation.jpg"} alts="news-img" />
                <CardContent>
                    <Typography color="primary" variant="h4">
                        <a href={article.web_url} target="_blank">
                            {article.headline.main}
                        </a>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle2">
                        {article.byline.original}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {article.snippet}
                    </Typography>
                </CardContent>
            </Card>)}
            
        </div>
    )
}

export default Article
