import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';

// Pages (vamos criar em seguida)
import { Home } from './pages/Home';
import { PokemonListPage } from './pages/PokemonListPage';
import { BattlePage } from './pages/BattlePage';
import { NotFound } from './pages/NotFound';

// Criar instância do React Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokemons" element={<PokemonListPage />} />
              <Route path="/battle" element={<BattlePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
