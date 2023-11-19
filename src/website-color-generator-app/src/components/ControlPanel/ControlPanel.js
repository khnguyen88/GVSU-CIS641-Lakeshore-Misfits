import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import './ControlPanel.scss';
import { PaletteContext } from '../../context/PaletteContext';
import PalettePreviewer from '../PalettePreviewer/PalettePreviewer';
import ActionButton from '../ActionButton/ActionButton';

const ControlPanel = () => {
  const [palette, setPalette] = useContext(PaletteContext);
  const [buttonFlag, setButtonFlag] = useState(true);

  const generate = async (palette) => { return await palette.GeneratePalette() };
  const adjust = async (palette) => { return await palette.AdjustPalette() };

  return (
  <div className="ControlPanel" data-testid="ControlPanel">
    <h2>Control Panel</h2>
      <PalettePreviewer palette={palette} />
      <ActionButton name='Generate Palette' propPalette={palette} propAction={
        async () => { setPalette(await palette.GeneratePalette());
        }} />
      <ActionButton name='Adjust Palette' propPalette={palette} propAction={
        async () => { setPalette(await palette.AdjustPalette());
        }} />
      <ActionButton name='Copy Palette' propPalette={palette} propAction={() => { palette.CopyPalette() }} />
  </div>
  );

  //ATTEMPTED BUG FIX SOLUTION
  //---------------------------------------------------------------------------------------------------------------
  // const generate = async (palette) => { return await palette.GeneratePalette() };
  // const adjust = async (palette) => { return await palette.AdjustPalette() };

  // return (
  // <div className="ControlPanel" data-testid="ControlPanel">
  //   <h2>Control Panel</h2>
  //     <PalettePreviewer palette={palette} />
  //     <ActionButton name='Generate Palette' propPalette={palette} propAction={
  //       async () => {
  //         await generate(palette)
  //           .then(async (newPalette) => { await newPalette.UpdateColorPairs(); return await newPalette; })
  //           .then(async (hydratedPalette) => setPalette(await hydratedPalette));
  //       }} />
  //     <ActionButton name='Adjust Palette' propPalette={palette} propAction={
  //       async () => {
  //         await adjust(palette)
  //           .then(async (newPalette) => { await newPalette.UpdateColorPairs(); return await newPalette; })
  //           .then(async (hydratedPalette) => setPalette(await hydratedPalette));
  //       }} />
  //     <ActionButton name='Copy Palette' propPalette={palette} propAction={() => { palette.CopyPalette() }} />
  // </div>
  // );

}
ControlPanel.propTypes = {};

ControlPanel.defaultProps = {};

export default ControlPanel;
