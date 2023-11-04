import React from 'react';
import PropTypes from 'prop-types';
import './AboutUs.scss';

const AboutUs = () => (
  <div className="AboutUs" data-testid="AboutUs">
      <h1>HELLO CHANGE UPDATE About The Lakeshore Misfits</h1>
      <h2>Selena Cade, Munmi Thakuria, Khiem Nguyen </h2>
      <h3>Project Description </h3>
      <p>Our website is created for users to generate new colors with a click of a button. This website allows users to generate new color palettes and copy the color values. Users are also able to adjust the color palette to make sure the colors sets is compliant with the AA or AAA website accessibility. In order to have users check this, we have a contrast checker button that tells users if the colors passess or fails the web accessibility guidelines.</p>
      <h3>Project Inspiration</h3>
      <p>This project was inspired by each members interests. We are interested in Web Content Acessibiility Guideline, art, science,application design, and illustration. </p>
      <h3>Individual Roles </h3> 
      <ul>
        <li>Selena: project schedules, mock site layout, contrast checker page layout, and about page layout.</li>
        <li>Khiem: requirments and task refining, initial app setup, navigation routes, and integration</li>
        <li>Munmi: Colormind API service, WebAim Contrast Checker API, User acceptance, and integration. </li>
      </ul>
  </div>
);

AboutUs.propTypes = {};

AboutUs.defaultProps = {};

export default AboutUs;
