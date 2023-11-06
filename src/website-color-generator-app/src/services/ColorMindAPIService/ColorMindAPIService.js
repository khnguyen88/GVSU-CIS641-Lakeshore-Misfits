import axios from 'axios';
import tinycolor from 'tinycolor2';

export default class ColorMindApiService{
    constructor() {
        
    }

    ConvertRGBArrayToTinyColor(rgbColorArray) {
        let r = rgbColorArray[0];
        let g = rgbColorArray[1];
        let b = rgbColorArray[2];
        return tinycolor(`rgb (${r}, ${g}, ${b})`);
    }

    GetTinyColorArray(rgbColorsArray) {
        let newArray = []
            
        rgbColorsArray.map(e => {
            newArray.push(this.ConvertRGBArrayToTinyColor(e));
        });
        return newArray;
    }

    async GetGeneratedColors() {
        try {
            //Updated Version, Restructured to get await return to work 
            //-------------------------------------------------------
            const res = await axios
                .post('http://colormind.io/api/', '{"model":"ui"}');
            
            const itemJSON = res.data.result;
            const tinyColorArray = this.GetTinyColorArray(itemJSON);

            console.log(JSON.stringify(itemJSON));
            console.log(JSON.stringify(tinyColorArray));
            
            return tinyColorArray;

            //Original Version, Return Await Did Not Work Below
            //-------------------------------------------------------
            // await axios
            // .post('http://colormind.io/api/', '{"model":"ui"}')
            // .then((response) => {
            //      console.log(JSON.stringify(res.data.result));
            //      console.log(JSON.stringify(this.GetTinyColorArray(res.data.result)));
            //      return this.GetTinyColorArray(res.data.result);
            // })
            // .catch((error) => {
            //     console.log(error);
            // });

        }
        catch(err) {
            console.log(err);
            alert(JSON.stringify(err));
        }
    }
}