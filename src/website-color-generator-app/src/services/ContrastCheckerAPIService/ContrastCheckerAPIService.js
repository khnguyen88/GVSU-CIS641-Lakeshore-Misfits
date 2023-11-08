import axios from 'axios';

export default class ContrastCheckerApiService { 

    constructor() { }
    
    async GetColorPairContrastRatings(fgColor, bgColor) {
        try {
            const res = await axios
                .get(
                    `https://webaim.org/resources/contrastchecker/?fcolor=${fgColor}&bcolor=${bgColor}&api`
                );
            
            const itemJSON = res.data;

            console.log(JSON.stringify(itemJSON));
            
            return itemJSON;
        }
        catch(err) {
            console.log(err);
            alert(JSON.stringify(err));
            return null;
        }
    }
}
