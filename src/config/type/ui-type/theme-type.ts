export interface FontSizeType {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
}
export interface ThemeType {
  dark: boolean;
  colors: {
    background: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    btn: {
      primary: string;
      secondary: string;
    };
    btnText: {
      primary: string;
      secondary: string;
    };
    icon: {
      active: string;
      inactive: string;
      primary: string;
      secondary: string;
    };
    inputText: {
      primary: string;
      secondary: string;
    };
    error: {
      primary: string;
    };
  };
  fonts: {
    fontSize: FontSizeType;
    fontFamily: string;
  };
}
