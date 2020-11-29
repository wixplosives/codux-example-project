import type { SimulationSetupFunction } from '@wixc3/wcs-core';

export type IFontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

export interface IExtendedFontStyleVariation {
    fontWeight: IFontWeight;
    isItalic?: boolean;
}

export type IFontStyleVariation = IExtendedFontStyleVariation | IFontWeight;

const defaultStyleVariations: IFontStyleVariation[] = [{ fontWeight: '400', isItalic: false }];

export const createGoogleFontLoader = (
    fontFamily: string,
    styleVariations: IFontStyleVariation[] = defaultStyleVariations
): SimulationSetupFunction => {
    const variationsStr = styleVariations
        .map((variation) => {
            if (typeof variation === 'string') {
                return variation;
            } else {
                return variation.fontWeight + (variation.isItalic ? 'i' : '');
            }
        })
        .join(',');

    return (controller) =>
        controller.addStylesheet(
            `https://fonts.googleapis.com/css?family=${fontFamily}:${variationsStr}`
        );
};
