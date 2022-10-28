import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Card = ({ item, page }) => {
  return (
    <GridItem
      w="100%"
      boxShadow="lg"
      p={3}
      borderRadius="xl"
      as={Link}
      to={`/products/${item.id}`}
    >
      <Box>
        <Image src={item.image} ml="auto" mr="auto" />
      </Box>
      <Box mt={4}>
        <Text>{item.brand}</Text>
        <Text as="strong">{item.title}</Text>
        <Box display={"flex"}>
          <Text flex={1} overflow="hidden">
            {item.category}
          </Text>
          <Text flex={1} justifyContent="flex-end" textAlign={"end"}>
            &#8377; {item.price}
          </Text>
        </Box>
      </Box>
    </GridItem>
  );
};
