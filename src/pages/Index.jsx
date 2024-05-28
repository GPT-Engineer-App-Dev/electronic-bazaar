import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text, VStack, Link, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: "$999",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$199",
    image: "https://via.placeholder.com/150",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredProducts = sampleProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery) ||
    product.description.toLowerCase().includes(searchQuery)
  );
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <Flex gap={4}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.600" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Products Section */}
      <Box py={10} px={4}>
        <Heading size="xl" textAlign="center" mb={10}>Featured Products</Heading>
        <Input
          placeholder="Search for products..."
          mb={6}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading size="md" mb={2}>{product.name}</Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontWeight="bold" fontSize="lg">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10} textAlign="center">
        <Flex justifyContent="center" mb={4}>
          <Link href="#" mx={2}><FaFacebook size="24" /></Link>
          <Link href="#" mx={2}><FaTwitter size="24" /></Link>
          <Link href="#" mx={2}><FaInstagram size="24" /></Link>
        </Flex>
        <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;