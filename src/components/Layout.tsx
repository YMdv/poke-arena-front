import { Box, IconButton, useColorMode, Tooltip } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position="relative" minH="100vh">
      {/* Theme Toggle Button - Fixed Position */}
      <Box position="fixed" top={4} right={4} zIndex={10}>
        <Tooltip
          label={colorMode === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
          placement="left"
        >
          <IconButton
            aria-label="Alternar tema"
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            colorScheme={colorMode === 'dark' ? 'yellow' : 'purple'}
            variant="solid"
            size="lg"
            boxShadow="lg"
          />
        </Tooltip>
      </Box>

      {/* Page Content */}
      {children}
    </Box>
  );
};
