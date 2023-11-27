import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './ActionButton.scss';
import { PaletteContext } from '../../context/PaletteContext';
import Palette from '../../models/Palette';
import tinycolor from 'tinycolor2';
  
const ActionButton = (props) => {
  const { propPalette, name, propAction} = props;

  return (
    <button
      type="button"
      onClick={() => {
        propAction();
      }}
      style={{ color: 'black' }}
    >
      {name}
    </button>
  );
}

ActionButton.propTypes = {};

ActionButton.defaultProps = {};

export default ActionButton;
