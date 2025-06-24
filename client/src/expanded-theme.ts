declare module "@mui/material/styles" {
  interface PaletteColor {
    [key: number]: string;
  }
  interface Palette {
    wheel: {
      blue: PaletteColor,
      green: PaletteColor,
      yellow: PaletteColor,
      orange: PaletteColor,
      red: PaletteColor,
      purple: PaletteColor,
    }
  }
}