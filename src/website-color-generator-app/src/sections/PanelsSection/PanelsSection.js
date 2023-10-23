import React from 'react';
import PropTypes from 'prop-types';
import './PanelsSection.scss';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import NavigationPanel from '../../components/NavigationPanel/NavigationPanel';

const PanelsSection = () => (
  <div className="PanelsSection" data-testid="PanelsSection">
    <ControlPanel />
    <NavigationPanel />
  </div>
);

PanelsSection.propTypes = {};

PanelsSection.defaultProps = {};

export default PanelsSection;
