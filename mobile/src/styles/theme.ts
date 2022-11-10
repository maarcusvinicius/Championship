import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    gray: {
      20: '#d0d0d0',
    },
    green: {
      500: '#047C3F'
    },
    blue: {
      40: "#006bb6",
      70: "#1e293b",
      90: "#0f172a"
    },
    red: {
      50: '#DB4437',
      70: '#ed174c',
      90: '#c3123e'
    },
    white: {
      10: '#fdfdff'
    }
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
    medium: 'Roboto_500Medium'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    14: 56
  }
});