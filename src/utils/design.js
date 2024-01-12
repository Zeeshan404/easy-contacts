import React from 'react'
import { hScale, mScale, vScale } from './dimension'

export const Spacing = {
    'vertical': {
        ['xs2']: vScale(4),
        ['xs']: vScale(8),
        ['s']: vScale(12),
        ['m']: vScale(16),
        ['l']: vScale(24),
        ['xl']: vScale(32),
        ['xl2']: vScale(40),
        ['xl3']: vScale(48),
        ['xl4']: vScale(64),
    },
    'horizontal': {
        ['xs2']: hScale(4),
        ['xs']: hScale(8),
        ['s']: hScale(12),
        ['m']: hScale(16),
        ['l']: hScale(24),
        ['xl']: hScale(32),
        ['xl2']: hScale(40),
        ['xl3']: hScale(48),
        ['xl4']: hScale(64),
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