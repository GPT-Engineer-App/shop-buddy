import React from "react";
import { Box, Heading, Grid, GridItem, Image, Text, Button, Container, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

// Mock data for products
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$20.00",
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MDkwMzM4MDR8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 2,
    name: "Product 2",
    price: "$25.00",
    image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MDkwMzM4MDR8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 3,
    name: "Product 3",
    price: "$30.00",
    image: 'https://images.unsplash.com/photo-1542319630-55fb7f7c944a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MDkwMzM4MDR8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  // ... add more products as needed
];

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex bg="gray.100" p={4} alignItems="center">
        <Heading size="md">My Shopping Site</Heading>
        <Spacer />
        <IconButton icon={<FaSearch />} aria-label="Search" />
        <IconButton ml={2} icon={<FaShoppingCart />} aria-label="Cart" />
      </Flex>

      {/* Content */}
      <Container maxW="container.xl" pt={5}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {products.map((product) => (
            <GridItem key={product.id} w="100%" boxShadow="md" borderRadius="md" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={5}>
                <Text fontWeight="bold">{product.name}</Text>
                <Text>{product.price}</Text>
                <Button mt={3} colorScheme="blue" rightIcon={<FaShoppingCart />}>
                  Add to Cart
                </Button>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box bg="gray.200" p={4} mt={5}>
        <Text textAlign="center">© 2023 My Shopping Site. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
