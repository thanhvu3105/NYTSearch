import React from 'react'
import Grid from "@material-ui/core/Grid"
import Article from "./Article.js";
import propTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles"
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles({
    card: {
        maxWidth: 400,
        backgroundColor: "#f2f0f0",
    },
    media: {
        height:300,
    },
})


function Articles({loading, articles}) {
    const classes = useStyles();

    console.log(articles)
    console.log(loading)

    return (
       <> 
        {loading ? ("Loading ....") : (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    
                    {articles.map((article) => (
                        <Grid item xs={12} sm={4} key={article._id}>
                            <Article  article={article}/>
                        </Grid>
    
                    ))}
                </Grid>
            </div>
        )}
       </>
    )
}



export default Articles
