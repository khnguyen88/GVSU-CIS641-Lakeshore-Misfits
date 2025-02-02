import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import './ControlPanel.scss';
import { PaletteContext } from '../../context/PaletteContext';
import PalettePreviewer from '../PalettePreviewer/PalettePreviewer';
import ActionButton from '../ActionButton/ActionButton';

const ControlPanel = () => {
  const [palette, setPalette] = useContext(PaletteContext);

  return (
  <div className="ControlPanel" data-testid="ControlPanel">
    <h2 className="control-panel-header">Control Panel</h2>
      <PalettePreviewer palette={palette} />
      <div className="control-panel-button-section">
        <ActionButton name='Generate Palette' propPalette={palette} propAction={
          async () => { setPalette(await palette.GeneratePalette());
          }} />
        <ActionButton name='Adjust Palette' propPalette={palette} propAction={
          async () => { setPalette(await palette.AdjustPalette());
          }} />
        <ActionButton name='Copy Palette' propPalette={palette} propAction={() => { palette.CopyPalette() }} />
      </div>
  </div>
  );

}
ControlPanel.propTypes = {};

ControlPanel.defaultProps = {};

export default ControlPanel;
