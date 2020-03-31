import React from 'react';

import Hero from "../../components/Hero"
import TypeElement from "../../components/TypeElement"

import titles from '../../datas';

import './style.scss';

const Home = () => {

  const links = titles.titles.map(item => {
    return (
      <TypeElement label={item.label} title={item.title} url={item.url} />
    );
  })

  return (
    <>
      <Hero value="Popular Titles" />
      <div className="wrapper">
        <div className="hero-container">
          {links}
        </div>
      </div>
    </>
  );
}

export default Home;
