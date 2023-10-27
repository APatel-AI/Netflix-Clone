import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";
const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
      <Row rowID="6" title="Action" fetchURL={requests.requestAction} />
      <Row rowID="7" title="Comedy" fetchURL={requests.requestComedy} />
      <Row rowID="8" title="Drama" fetchURL={requests.requestDrama} />
      <Row rowID="9" title="Sci-Fi" fetchURL={requests.requestSciFi} />
    </>
  );
};

export default Home;
