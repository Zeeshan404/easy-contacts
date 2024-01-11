import React from 'react'
import { hScale, mScale, vScale } from './dimension'

export const Spacing = {
    'vertical': {
        xs: vScale(4),
        s: vScale(8),
        m: vScale(12),
        l: vScale(16),
        xl: vScale(24),
    },
    'horizontal': {
        xs: hScale(4),
        s: hScale(8),
        m: hScale(12),
        l: hScale(16),
        xl: hScale(24),
    }
}

export const FontSizes = {
    xs: mScale(6.112),
    s: mScale(9.889),
    m: mScale(16),
    l: mScale(25.888),
    xl: mScale(41.887),
    xxl: mScale(67.773),
}

// create this utils.ts file
// import { PixelRatio } from "react-native";

// // dp(123) converts 123px (px as in your mockup design) to dp.
// export const dp = (px: number) => {
//     return px / PixelRatio.get();
// };

// // sp(54) converts 54px (px as in your mockup design) to sp
// export const sp = (px: number) => {
//     return px / (PixelRatio.getFontScale() * PixelRatio.get());
// };