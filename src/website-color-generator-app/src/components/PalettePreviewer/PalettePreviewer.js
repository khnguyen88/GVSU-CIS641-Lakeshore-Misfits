import React from 'react';
import PropTypes from 'prop-types';
import './PalettePreviewer.scss';

const PalettePreviewer = (props) =>
{
  const { palette } = props;
  
  return (
    <div className="PalettePreviewer" data-testid="PalettePreviewer">
      <>
        {
          palette.colors.map((c, key) => {
            return (
              <div
                key={key}
                style={{
                  height: '2em',
                  width: '20em',
                  backgroundColor: c.toHexString(),
                  color: c.isLight() ? 'black' : 'white',
                }}
              >
                {c.toHexString()}, {c.toHslString()}, v: {Math.round(c.toHsv().v * 100)}
              </div>
            );
          })
        }
      </>
    </div>
  );
}

PalettePreviewer.propTypes = {};

PalettePreviewer.defaultProps = {};

export default PalettePreviewer;
