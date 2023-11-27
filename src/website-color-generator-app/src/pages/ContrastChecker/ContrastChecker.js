import React, { useContext, useMemo, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ContrastChecker.scss';
import ColorPairContrastCard from '../../components/ColorPairContrastCard/ColorPairContrastCard';
import { PaletteContext } from '../../context/PaletteContext';

const ContrastChecker = () => {

  const [palette, setPalette] = useContext(PaletteContext);
  
  return palette.colorPairs && (
    <div className="ContrastChecker" data-testid="ContrastChecker">
      <h1>Contrast Checker</h1>
      <div className="card-collection">
        <>
          {
            palette.colorPairs.map((cp, key) => {
              return (
                <ColorPairContrastCard
                  colorPair={cp} key={key}
                />
              );
            })
          }
        </>
      </div>
      <div className="contrast-information">
        <h3>Contrast Ratings Information:</h3>
        <ul>
          <li className="information-item"><span className="information-subheader">WCAG Level AA:</span>
            <ul>
              <li>
                AA (Normal): Ratio {'>='} 4.5:1
              </li>
              <li>
                AA Large: Ratio {'>='} 3.0:1
              </li>
            </ul>
          </li>
          <li className="information-item"><span className="information-subheader">WCAG Level AAA:</span>
            <ul>
              <li>
                AAA (Normal): Ratio {'>='} 7.0:1
              </li>
              <li>
                AAA Large: Ratio {'>='} 4.5:1
              </li>
            </ul>
          </li>
          <li className="information-item"><span className="information-subheader">Text-Sizing:</span>
            <ul>
              <li>
                Normal Text: 12pt (16px)
              </li>
              <li>
                Large Text: 14 pt (18.66px) and bold, or 18pt (24px) and larger
              </li>
            </ul>
          </li>
          <li className="information-item"> <a href="https://webaim.org/resources/contrastchecker/" target="_blank"><i><span className="information-subheader">Source:</span> Web Aim Contrast Checker</i></a> </li>
          <li className="information-item"> <a href="https://www.w3schools.com/css/css_font_size.asp" target="_blank"><i><span className="information-subheader">Source:</span> Size of Normal Text</i></a> </li>
        </ul>
      </div>
    </div>
  );
};

ContrastChecker.propTypes = {};

ContrastChecker.defaultProps = {};

export default ContrastChecker;
