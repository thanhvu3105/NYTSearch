import React, { useState, useEffect } from "react";

import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Articles from "./Articles";
import SearchBar from "./SearchBar";

import "./Home.css";
// import axios from "./axios";
import axios from "axios";
import Populars from "./Populars";

const Home = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  //   const [articles, setArticles] = useState([]);
  const [state, setState] = useState({ results: [] });
  const [populars, setPopulars] = useState([]);

  const getPopulars = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=A1dOvVOBojXCJnG4S3QlaHyDGNNmOg2A`
    );
    setPopulars(res.data.results);

    setLoading(false);
  };

  //   console.log(popular[0]);'
  console.log(populars[0]);

  const searchArticles = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=A1dOvVOBojXCJnG4S3QlaHyDGNNmOg2A`
    );
    // setArticles(res.data.response.docs);

    setLoading(false);

    setState((prevState) => {
      return { ...prevState, results: res.data.response.docs };
    });
  };

  return (
    <div>
      <Container>
        <SearchBar searchArticles={searchArticles} />
        <Articles loading={loading} articles={state.results} />
        <Populars
          loading={loading}
          populars={populars}
          getPopulars={getPopulars}
        ></Populars>
      </Container>

      {/* <SearchBar searchArticles={searchArticles} />
          <Populars loading={loading} populars={populars} getPopulars={getPopulars}/>
          <Link to='/results' >
            <Articles loading={loading} articles={state.results}></Articles>
          </Link> */}
    </div>
  );
};

export default Home;
