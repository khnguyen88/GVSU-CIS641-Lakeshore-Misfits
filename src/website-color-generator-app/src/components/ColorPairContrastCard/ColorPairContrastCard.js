import React, { useContext } from 'react';
import './ColorPairContrastCard.css'

function ColorPairContrastCard(props) {
    const { colorPair } = props;

    return (
        <div className="card-container"> 
            <div className="card-content" style={{backgroundColor: 'white', color: 'black'}}>
                <div className="class-body">
                    <div className="colorPreviewer" style={{backgroundColor: colorPair.colorPair[0].toHexString(), color: colorPair.colorPair[1]}}>
                        <div className="font12">Font Size: 12, Reg</div>
                        <div className="font12 font-bold">Font-Size: 12, Bold</div>
                        <div className="font14">Font-Size: 14, Reg</div>
                        <div className="font14 font-bold">Font-Size: 14, Bold</div>
                    </div>
                    <div className="contrastRatings">
                        <div>Foreground: {colorPair.colorPair[0].toHexString()}</div>
                        <div>Background: {colorPair.colorPair[1].toHexString()}</div>
                        <div>Ratio: {colorPair.contrastRatings.ratio}</div>
                        <div>AA: {colorPair.contrastRatings.AA}</div>
                        <div>AA-Large: {colorPair.contrastRatings.AALarge}</div>
                        <div>AAA: {colorPair.contrastRatings.AAA}</div>
                        <div>AAA-large: {colorPair.contrastRatings.AAALarge}</div> 
                    </div>
                </div>
            </div>                                                               
        </div>
    );
};
export default ColorPairContrastCard