import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { usePokemons } from '../hooks/usePokemons';

export const Home = () => {
  const navigate = useNavigate();
  const { data: pokemons, isLoading } = usePokemons();

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading size="2xl" mb={4}>
            🎮 PokéArena
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Sistema de gerenciamento e batalhas de Pokémons
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Stat
            p={6}
            bg={bgColor}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="lg"
          >
            <StatLabel>Total de Pokémons</StatLabel>
            <StatNumber>{isLoading ? '...' : pokemons?.length || 0}</StatNumber>
          </Stat>

          <Stat
            p={6}
            bg={bgColor}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="lg"
          >
            <StatLabel>Status da API</StatLabel>
            <StatNumber fontSize="xl">✅ Online</StatNumber>
          </Stat>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Button
            size="lg"
            colorScheme="blue"
            h="100px"
            onClick={() => navigate('/pokemons')}
          >
            <VStack>
              <Text fontSize="2xl">📋</Text>
              <Text>Gerenciar Pokémons</Text>
            </VStack>
          </Button>

          <Button
            size="lg"
            colorScheme="red"
            h="100px"
            onClick={() => navigate('/battle')}
          >
            <VStack>
              <Text fontSize="2xl">⚔️</Text>
              <Text>Iniciar Batalha</Text>
            </VStack>
          </Button>
        </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
