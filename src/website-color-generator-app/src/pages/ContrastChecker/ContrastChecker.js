import React from 'react';
import PropTypes from 'prop-types';
import './ContrastChecker.scss';
import ColorPairContrastCard from '../../components/ColorPairContrastCard/ColorPairContrastCard';

const ContrastChecker = () => (
  <div className="ContrastChecker" data-testid="ContrastChecker">
    <h1> Contrast Checker</h1>
    <ColorPairContrastCard
      title = 'Contrast Card'
      body='Font size 12, Reg Font-size:12'
      />
  </div>
 
);

ContrastChecker.propTypes = {};

ContrastChecker.defaultProps = {};

export default ContrastChecker;
