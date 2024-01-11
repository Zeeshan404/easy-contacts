import { Dimensions, PixelRatio, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const horizontalScale = width / guidelineBaseWidth
const verticalScale = height / guidelineBaseHeight

// Horizontal scale, width, margin(left, right, horizontal), padding(left, right, horizontal)
const hScale = (size) => {
    return platformBasedSize(horizontalScale * size)
}

// Vertical scale, height, margin(top, bottom, vertical), padding(top, bottom, vertical)
const vScale = (size) => {
    return platformBasedSize(verticalScale * size)
}

const platformBasedSize = (size) => {
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(size))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(size)) - 1
    }
}

// Moderate scale, font-size, borderRadius
const mScale = (size, factor = 0.5) => {
    const newSize = size + (hScale(size) - size) * factor;
    return platformBasedSize(newSize)
}

const isTablet = () => {
    if (width > 550) {
        return true
    } else {
        return false
    }
}
  

export {
    hScale,
    vScale,
    mScale,
    isTablet
};

// 1. Dimensions
// 2. Flexbox
// 3. Percentage
// 4. Aspect Ratio
// 5. Platform