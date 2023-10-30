import React, { useState } from 'react';
import tinycolor from 'tinycolor2';
import Palette from '../models/Palette';

export const PaletteContext = React.createContext(null);

export const PaletteProvider = (props) => {
  const [palette, setPalette] = useState(new Palette());

  return (
    <PaletteContext.Provider value={[palette, setPalette]}>
      {props.children}
    </PaletteContext.Provider>
  )
}
