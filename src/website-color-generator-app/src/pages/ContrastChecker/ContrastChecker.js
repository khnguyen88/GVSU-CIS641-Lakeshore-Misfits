import React, { useContext, useMemo, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ContrastChecker.scss';
import ColorPairContrastCard from '../../components/ColorPairContrastCard/ColorPairContrastCard';
import { PaletteContext } from '../../context/PaletteContext';

const ContrastChecker = () => {

  const [palette, setPalette] = useContext(PaletteContext);
  
  useEffect(() => {
    alert(palette.colorPairs.length);
  }, [palette]);
  
  return palette.colorPairs && (
    <div className="ContrastChecker" data-testid="ContrastChecker">
      <h1>Contrast Checker</h1>
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
  );
};

ContrastChecker.propTypes = {};

ContrastChecker.defaultProps = {};

export default React.memo(ContrastChecker);
