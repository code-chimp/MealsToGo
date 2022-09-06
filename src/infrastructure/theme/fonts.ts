export interface IThemeFonts {
  body: string;
  heading: string;
  monospace: string;
}

export const fonts: IThemeFonts = {
  body: 'Oswald_400Regular',
  heading: 'Lato_400Regular',
  monospace: 'Oswald_400Regular',
};

export interface IThemeFontWeights {
  regular: number;
  medium: number;
  bold: number;
}

export const fontWeights: IThemeFontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export interface IThemeFontSizes {
  caption: string;
  button: string;
  body: string;
  title: string;
  h5: string;
  h4: string;
  h3: string;
  h2: string;
  h1: string;
}

export const fontSizes: IThemeFontSizes = {
  caption: '12px',
  button: '14px',
  body: '16px',
  title: '20px',
  h5: '24px',
  h4: '34px',
  h3: '45px',
  h2: '56px',
  h1: '112px',
};
