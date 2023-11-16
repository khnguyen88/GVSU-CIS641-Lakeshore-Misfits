import React from 'react';
import PropTypes from 'prop-types';
import './ContrastChecker.scss';
import Card from '../../components/Card';

const ContrastChecker = () => (
  <div className="ContrastChecker" data-testid="ContrastChecker">
    <h1> Contrast Checker</h1>
    <Card
      title = 'Contrast Card'
      body='Font size 12, Reg Font-size:12'
      />
    <div class ="grid-container">
      <div class="grid-item">
        Font Size: 12, Reg
        Font-Size: 12, Bold
        Font-Size: 14, Reg
        Font-Size: 14, Bold
        Foreground: #XXXXX
        Background: #XXXXX
        AA: "Pass/Fail"
        AA-Large: "Pass/Fail"
        AAA: "Pass/Fail"
        AAA-large: "Pass/Fail"
      </div>
      <div class="grid-item">
        Font Size: 12, Reg
        Font-Size: 12, Bold
        Font-Size: 14, Reg
        Font-Size: 14, Bold
        Foreground: #XXXXX
        Background: #XXXXX
        AA: "Pass/Fail"
        AA-Large: "Pass/Fail"
        AAA: "Pass/Fail"
        AAA-large: "Pass/Fail"
      </div>
      <div class="grid-item">
        Font Size: 12, Reg
        Font-Size: 12, Bold
        Font-Size: 14, Reg
        Font-Size: 14, Bold
        Foreground: #XXXXX
        Background: #XXXXX
        AA: "Pass/Fail"
        AA-Large: "Pass/Fail"
        AAA: "Pass/Fail"
        AAA-large: "Pass/Fail"
      </div>
      <div class="grid-item">
        Font Size: 12, Reg
        Font-Size: 12, Bold
        Font-Size: 14, Reg
        Font-Size: 14, Bold
        Foreground: #XXXXX
        Background: #XXXXX
        AA: "Pass/Fail"
        AA-Large: "Pass/Fail"
        AAA: "Pass/Fail"
        AAA-large: "Pass/Fail"
      </div>
      <div class="grid-item">
        Font Size: 12, Reg
        Font-Size: 12, Bold
        Font-Size: 14, Reg
        Font-Size: 14, Bold
        Foreground: #XXXXX
        Background: #XXXXX
        AA: "Pass/Fail"
        AA-Large: "Pass/Fail"
        AAA: "Pass/Fail"
        AAA-large: "Pass/Fail"
      </div>
      <div class="grid-item">
        Font Size: 12, Reg
        Font-Size: 12, Bold
        Font-Size: 14, Reg
        Font-Size: 14, Bold
        Foreground: #XXXXX
        Background: #XXXXX
        AA: "Pass/Fail"
        AA-Large: "Pass/Fail"
        AAA: "Pass/Fail"
        AAA-large: "Pass/Fail"
      </div>
    </div>
  </div>
  
);

ContrastChecker.propTypes = {};

ContrastChecker.defaultProps = {};

export default ContrastChecker;
