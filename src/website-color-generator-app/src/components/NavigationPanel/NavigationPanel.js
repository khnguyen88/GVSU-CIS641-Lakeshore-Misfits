import React from 'react';
import PropTypes from 'prop-types';
import './NavigationPanel.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const NavigationPanel = () => (
  <div className="NavigationPanel" data-testid="NavigationPanel">
    <h2>Control Panel</h2>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contrast-checker">Contrast Checker</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
  </div>
);

NavigationPanel.propTypes = {};

NavigationPanel.defaultProps = {};

export default NavigationPanel;
