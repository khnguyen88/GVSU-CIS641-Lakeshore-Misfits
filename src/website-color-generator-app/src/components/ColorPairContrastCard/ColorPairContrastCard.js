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
                        <div>
                            <span className="card-label">Foreground: </span><span>{colorPair.colorPair[0].toHexString()}</span></div>
                        <div><span className="card-label">Background: </span><span>{colorPair.colorPair[1].toHexString()}</span></div>
                        <div><span className="card-label">Ratio: </span><span>{colorPair.contrastRatings.ratio}</span></div>
                        <div><span className="card-label">AA: </span><span style={{color: colorPair.contrastRatings.AA === "pass" ? 'green' : 'red'}}>{colorPair.contrastRatings.AA}</span></div>
                        <div><span className="card-label">AA-Large: </span><span style={{color: colorPair.contrastRatings.AALarge === "pass" ? 'green' : 'red'}}>{colorPair.contrastRatings.AALarge}</span></div>
                        <div><span className="card-label">AAA: </span><span style={{color: colorPair.contrastRatings.AAA === "pass" ? 'green' : 'red'}}>{colorPair.contrastRatings.AAA}</span></div>
                        <div><span className="card-label">AAA-large: </span><span style={{color: colorPair.contrastRatings.AAALarge === "pass" ? 'green' : 'red'}}>{colorPair.contrastRatings.AAALarge}</span></div> 
                    </div>
                </div>
            </div>                                                               
        </div>
    );
};
export default ColorPairContrastCard