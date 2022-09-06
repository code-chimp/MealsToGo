import 'styled-components/native';
import { IThemeColors } from './colors';
import { IThemeLineHeights, IThemeSpace } from './spacing';
import { IThemeSizes } from './sizes';
import { IThemeFonts, IThemeFontSizes, IThemeFontWeights } from './fonts';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: IThemeColors;
    fontSizes: IThemeFontSizes;
    fontWeights: IThemeFontWeights;
    fonts: IThemeFonts;
    lineHeights: IThemeLineHeights;
    sizes: IThemeSizes;
    space: IThemeSpace;
  }
}
