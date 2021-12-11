import { extendTheme } from 'native-base';

const theme = extendTheme({
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto_100Thin',
      },
      300: {
        normal: 'Roboto_300Light',
      },
      400: {
        normal: 'Roboto_400Regular',
      },
      500: {
        normal: 'Roboto_500Medium',
      },
      700: {
        normal: 'Roboto_700Bold',
      },

      900: {
        normal: 'Roboto_900Black',
      },
    },
  },

  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
  },
});

export default theme;