import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Container maxW="container.md" py={20} textAlign="center">
      <VStack spacing={6}>
        <Text fontSize="9xl">404</Text>
        <Heading>Página Não Encontrada</Heading>
        <Text fontSize="lg" color="gray.500">
          A página que você está procurando não existe.
        </Text>
        <Button colorScheme="blue" size="lg" onClick={() => navigate('/')}>
          Voltar para Home
        </Button>
      </VStack>
      </Container>
    </Box>
  );
};
