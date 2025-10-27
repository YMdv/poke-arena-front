import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// Configuração do tema com dark mode
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

// Cores personalizadas para os tipos de Pokémon
const colors = {
  pokemon: {
    charizard: {
      50: '#ffe5e5',
      100: '#ffb8b8',
      200: '#ff8a8a',
      300: '#ff5c5c',
      400: '#ff2e2e',
      500: '#e61414',
      600: '#b40f0f',
      700: '#820b0b',
      800: '#500606',
      900: '#200202',
    },
    mewtwo: {
      50: '#f2e5ff',
      100: '#d4b8ff',
      200: '#b68aff',
      300: '#985cff',
      400: '#7a2eff',
      500: '#6114e6',
      600: '#4b0fb4',
      700: '#350b82',
      800: '#1f0650',
      900: '#0a0220',
    },
    pikachu: {
      50: '#fffce5',
      100: '#fff4b8',
      200: '#ffed8a',
      300: '#ffe55c',
      400: '#ffde2e',
      500: '#e6c414',
      600: '#b4980f',
      700: '#826d0b',
      800: '#504206',
      900: '#201702',
    },
  },
};

// Tema customizado
const theme = extendTheme({
  config,
  colors,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'blue',
      },
    },
  },
});

export default theme;
