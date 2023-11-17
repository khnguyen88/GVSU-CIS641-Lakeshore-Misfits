import React, { useContext } from 'react';
import './ColorPairContrastCard.css'
import { PaletteContext } from '../../context/PaletteContext';

function ColorPairContrastCard(body) {
    const [palette, setPalette] = useContext(PaletteContext);
    return (
        <div className="card-container"> 
            <div className="card-content" style={{backgroundColor: 'white', color: 'black'}}>
                <div className="class-body">
                    <div className="colorPreviewer" style={{backgroundColor: palette.colors[0], color: palette.colors[1]}}>
                        <div>Font Size: 12, Reg</div>
                        <div>Font-Size: 12, Bold</div>
                        <div>Font-Size: 14, Reg</div>
                        <div>Font-Size: 14, Bold</div>
                    </div>
                    <div className="contrastRatings">
                        <div>Foreground: #XXXXX</div>
                        <div>Background: #XXXXX</div>
                        <div>AA: "Pass/Fail"</div>
                        <div>AA-Large: "Pass/Fail"</div>
                        <div>AAA: "Pass/Fail"</div>
                        <div>AAA-large: "Pass/Fail"</div> 
                    </div>
                </div>
            </div>  
            <div className="card-content" style={{backgroundColor: 'white', color: 'black'}}>
                <div className="class-body ">
                    <div className="colorPreviewer" style={{backgroundColor: palette.colors[1], color: palette.colors[1]}}>
                        <div>Font Size: 12, Reg</div>
                        <div>Font-Size: 12, Bold</div>
                        <div>Font-Size: 14, Reg</div>
                        <div>Font-Size: 14, Bold</div>
                    </div>
                    <div className="contrastRatings">
                        <div>Foreground: #XXXXX</div>
                        <div>Background: #XXXXX</div>
                        <div>AA: "Pass/Fail"</div>
                        <div>AA-Large: "Pass/Fail"</div>
                        <div>AAA: "Pass/Fail"</div>
                        <div>AAA-large: "Pass/Fail"</div> 
                    </div>
                </div>
            </div>            
            <div className="card-content" style={{backgroundColor: 'white', color: 'black'}}>
                <div className="class-body ">
                    <div className="colorPreviewer" style={{backgroundColor: palette.colors[2], color: palette.colors[1]}}>
                        <div>Font Size: 12, Reg</div>
                        <div>Font-Size: 12, Bold</div>
                        <div>Font-Size: 14, Reg</div>
                        <div>Font-Size: 14, Bold</div>
                    </div>
                    <div className="contrastRatings">
                        <div>Foreground: #XXXXX</div>
                        <div>Background: #XXXXX</div>
                        <div>AA: "Pass/Fail"</div>
                        <div>AA-Large: "Pass/Fail"</div>
                        <div>AAA: "Pass/Fail"</div>
                        <div>AAA-large: "Pass/Fail"</div> 
                    </div>
                </div>
            </div>            
            <div className="card-content" style={{backgroundColor: 'white', color: 'black'}}>
                <div className="class-body ">
                    <div className="colorPreviewer" style={{backgroundColor: palette.colors[3], color: palette.colors[1]}}>
                        <div>Font Size: 12, Reg</div>
                        <div>Font-Size: 12, Bold</div>
                        <div>Font-Size: 14, Reg</div>
                        <div>Font-Size: 14, Bold</div>
                    </div>
                    <div className="contrastRatings">
                        <div>Foreground: #XXXXX</div>
                        <div>Background: #XXXXX</div>
                        <div>AA: "Pass/Fail"</div>
                        <div>AA-Large: "Pass/Fail"</div>
                        <div>AAA: "Pass/Fail"</div>
                        <div>AAA-large: "Pass/Fail"</div> 
                    </div>
                </div>
            </div>            
            <div className="card-content" style={{backgroundColor: 'white', color: 'black'}}>
                <div className="class-body ">
                    <div className="colorPreviewer" style={{backgroundColor: palette.colors[4], color: palette.colors[1]}}>
                        <div>Font Size: 12, Reg</div>
                        <div>Font-Size: 12, Bold</div>
                        <div>Font-Size: 14, Reg</div>
                        <div>Font-Size: 14, Bold</div>
                    </div>
                    <div className="contrastRatings">
                        <div>Foreground: #XXXXX</div>
                        <div>Background: #XXXXX</div>
                        <div>AA: "Pass/Fail"</div>
                        <div>AA-Large: "Pass/Fail"</div>
                        <div>AAA: "Pass/Fail"</div>
                        <div>AAA-large: "Pass/Fail"</div> 
                    </div>
                </div>
            </div>                                                              
        </div>

    );
};
export default ColorPairContrastCard