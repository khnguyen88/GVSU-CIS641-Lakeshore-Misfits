import React from 'react';
import PropTypes from 'prop-types';
import './PagesSection.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MockSite from '../../pages/MockSite/MockSite';
import ContrastChecker from '../../pages/ContrastChecker/ContrastChecker';
import AboutUs from '../../pages/AboutUs/AboutUs';
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import TestPage from '../../pages/TestPage/TestPage';

const PagesSection = () => (
  <div className="PagesSection" data-testid="PagesSection">
    <Routes>
      <Route path="/" element={<MockSite />} />
      <Route path="/mock-site" element={<MockSite />} />
      <Route path="/contrast-checker" element={<ContrastChecker />} />
      <Route path="/about-us" element={<AboutUs />} /> 
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </div>
);

PagesSection.propTypes = {};

PagesSection.defaultProps = {};

export default PagesSection;
