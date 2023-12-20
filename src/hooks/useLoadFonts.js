import {
    useFonts,
    NotoNastaliqUrdu_400Regular,
    NotoNastaliqUrdu_500Medium,
    NotoNastaliqUrdu_600SemiBold,
    NotoNastaliqUrdu_700Bold,
} from '@expo-google-fonts/noto-nastaliq-urdu';

const useLoadFonts = () => {
    const [loading, error] = useFonts({
        'regular': NotoNastaliqUrdu_400Regular,
        'medium': NotoNastaliqUrdu_500Medium,
        'bold2': NotoNastaliqUrdu_600SemiBold,
        'bold1': NotoNastaliqUrdu_700Bold,
    })
    return {
        loading, 
        error
    }
}

export default useLoadFonts