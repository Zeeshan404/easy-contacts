
import { useFonts } from 'expo-font';
import { arabicFonts, englishFonts, urduFonts } from '../constants';

const useLoadFonts = () => {

    const getFonts = ()=>{
        const allFonts = { ...arabicFonts, ...englishFonts, ...urduFonts  }
        const fontsToLoad = {}
        Object.keys(allFonts).forEach(key => {
            fontsToLoad[key] = allFonts[key].asset;
        });
        return fontsToLoad
    }

    const [loading, error] = useFonts(getFonts())

    return {
        loading, 
        error
    }
}

export default useLoadFonts