import React from 'react';
import Hero from "../../components/Hero"

import './style.scss';

const Error = () => (
  <>
    <Hero value="Popular Titles" />
    <div className="wrapper">
      Oopps, something wrong..
    </div>
  </>
);

export default Error;
