declare interface IPalleteLight {
    light1: {
      main: string;
    };
    light2: {
      main: string;
    };
    contentPrimary: {
      main: string;
    };
    
    // ... (other light theme colors)
  }
  
  declare interface IPalleteDark {
    contentPrimary: {
      main: string;
    };
    dark2: {
      main: string;
    };
    // ... (other dark theme colors)
  }
  
  declare interface CustomTypographyOptions {
    fontFamily: string;
  }
  
  declare interface CustomThemeOptions {
    palette: IPalleteLight | IPalleteDark;
    components: any;
    typography: CustomTypographyOptions;
  }
  
  declare module '@mui/material/styles' {
    interface Palette {
      backgroundBottom: {
        main: string;
      };
    }
    interface PaletteOptions {
      backgroundBottom?: {
        main?: string;
      };
    }
  }

  declare interface CustomTypographyOptions {
    fontFamily?: string;
    fontSize?: number;
    h1?: {
      fontSize?: string;
      fontWeight?: number;
    };
    // Define other typography variants as needed
  }