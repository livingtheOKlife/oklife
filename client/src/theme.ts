export const tokens = {
  grey: {
    100: 'hsl(210, 0%, 18%)',
    200: 'hsl(210, 0%, 28%)',
    300: 'hsl(210, 0%, 38%)',
    400: 'hsl(210, 0%, 48%)',
    500: 'hsl(210, 0%, 58%)',
    600: 'hsl(210, 0%, 68%)',
    700: 'hsl(210, 0%, 78%)',
    800: 'hsl(210, 0%, 88%)',
    900: 'hsl(210, 0%, 98%)'
  },
  primary: {
    100: 'hsl(210, 96%, 10%)',
    200: 'hsl(210, 96%, 20%)',
    300: 'hsl(210, 96%, 30%)',
    400: 'hsl(210, 96%, 40%)',
    500: 'hsl(210, 96%, 50%)',
    600: 'hsl(210, 96%, 60%)',
    700: 'hsl(210, 96%, 70%)',
    800: 'hsl(210, 96%, 80%)',
    900: 'hsl(210, 96%, 90%)'
  },
  secondary: {
    100: 'hsl(32, 96%, 18%)',
    200: 'hsl(32, 96%, 28%)',
    300: 'hsl(32, 96%, 38%)',
    400: 'hsl(32, 96%, 48%)',
    500: 'hsl(32, 96%, 58%)',
    600: 'hsl(32, 96%, 68%)',
    700: 'hsl(32, 96%, 78%)',
    800: 'hsl(32, 96%, 88%)',
    900: 'hsl(32, 96%, 98%)'
  },
  background: {
    light: 'hsl(210, 0%, 98%)',
    dark: 'hsl(210, 100%, 4%)'
  },
  text: {
    light: 'hsl(210, 0%, 98%)',
    dark: 'hsl(210, 100%, 4%)'
  }
}

export const lightModeTheme = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[400],
      light: tokens.primary[500],
      dark: tokens.primary[300]
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[400],
      light: tokens.secondary[500],
      dark: tokens.secondary[300]
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[400]
    },
    background: {
      default: tokens.background.light,
      paper: tokens.background.dark,
    },
    text: {
      primary: tokens.text.dark,
      secondary: tokens.text.light,
    }
  },
  typography: {
    fontFamily: ['Quicksand', 'sans-serif'].join(','),
    fontSize: 12,
    h2: {
      fontFamily: ['Quicksand', 'sans-serif'].join(','),
      fontSize: 24
    },
    h3: {
      fontFamily: ['Quicksand', 'sans-serif'].join(','),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200]
    },
    h4: {
      fontFamily: ['Quicksand', 'sans-serif'].join(','),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300]
    },
    h5: {
      fontFamily: ['Quicksand', 'sans-serif'].join(','),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500]
    },
    h6: {
      fontFamily: ['Quicksand', 'sans-serif'].join(','),
      fontSize: 10,
      color: tokens.grey[700]
    },
  }
}

export const darkModeTheme = {
  palette: {
    primary: {
      ...tokens.secondary,
      main: tokens.secondary[400],
      light: tokens.secondary[500],
      dark: tokens.secondary[300]
    },
    secondary: {
      ...tokens.primary,
      main: tokens.primary[400],
      light: tokens.primary[500],
      dark: tokens.primary[300]
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[600]
    },
    background: {
      default: tokens.background.dark,
      paper: tokens.background.light,
    },
    text: {
      primary: tokens.text.light,
      secondary: tokens.text.dark,
    }
  },
  typography: {
    fontFamily: ['Quicksand', 'sans-serif'].join(','),
    fontSize: 12,
    h2: {
      fontFamily: ['Quicksand', 'sans-serif'].join(','),
      fontSize: 24
    },
    h3: {
      fontFamily: ['Quicksand', 'sans-serif'].join(','),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200]
    },
    h4: {
      fontFamily: ['Quicksand', 'sans-serif'].join(','),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300]
    },
    h5: {
      fontFamily: ['Quicksand', 'sans-serif'].join(','),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500]
    },
    h6: {
      fontFamily: ['Quicksand', 'sans-serif'].join(','),
      fontSize: 10,
      color: tokens.grey[700]
    },
  }
}