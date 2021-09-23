import React,{useEffect} from 'react'
import Grid from "@material-ui/core/Grid"
import Article from "./Article.js";
import Popular from "./Popular.js";
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

function Populars(props) {

    const {
        loading,
        populars,
        getPopulars
    }=props;

    const classes = useStyles();

    useEffect(()=>{
        getPopulars();

    },[])


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {populars.map(popular => (
                    <Grid item xs={12} sm={4} key={popular.url}>
                        <Popular popular={popular}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Populars
