export interface FontSizeType {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
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
      primary: string;
      secondary: string;
    };
  };
  fontSize: FontSizeType;
}
