import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './TestPage.scss';
import { PaletteContext } from '../../context/PaletteContext';
import PalettePreviewer from '../../components/PalettePreviewer/PalettePreviewer';

const TestPage = () => {
  const [palette, setPalette] = useContext(PaletteContext);

  return (
    <div className="TestPage" data-testid="TestPage">
      TestPage Component
      <PalettePreviewer palette={palette} />
    </div>
  );
}

TestPage.propTypes = {};

TestPage.defaultProps = {};

export default TestPage;
