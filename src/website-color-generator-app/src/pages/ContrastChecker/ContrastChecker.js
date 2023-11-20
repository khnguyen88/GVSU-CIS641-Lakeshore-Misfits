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
    </div>
  );
};

ContrastChecker.propTypes = {};

ContrastChecker.defaultProps = {};

export default ContrastChecker;
