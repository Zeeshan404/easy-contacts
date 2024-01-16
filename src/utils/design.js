import React from 'react'
import { hScale, mScale, vScale } from './dimension'

export const Spacing = {
    'vertical': {
        ['s4']: vScale(4),
        ['s8']: vScale(8),
        ['s12']: vScale(12),
        ['s16']: vScale(16),
        ['s24']: vScale(24),
        ['s32']: vScale(32),
        ['s40']: vScale(40),
        ['s48']: vScale(48),
        ['s64']: vScale(64),
    },
    'horizontal': {
        ['s4']: hScale(4),
        ['s8']: hScale(8),
        ['s12']: hScale(12),
        ['s16']: hScale(16),
        ['s24']: hScale(24),
        ['s32']: hScale(32),
        ['s40']: hScale(40),
        ['s48']: hScale(48),
        ['s64']: hScale(64),
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