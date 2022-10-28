import { Box, Grid, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { CardForCart } from "../common/CartForCart";
export const Cart = () => {
  const { cartItems } = useSelector((store) => store.Cart);
  if (cartItems.length === 0) {
    return (
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        flexDir="column"
        mt={"auto"}
      >
        <Box>
          No product Added to Cart Yet!!!{" "}
          <Text to="/" as={Link} textColor="blue">
            Go back to home Page And Add Some Products.
          </Text>
        </Box>
      </Box>
    );
  }
  return (
    <Box>
      <Grid
        templateColumns={{
          base: "repeat(4, 1fr)",
          lg: "repeat(4, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(1, 1fr)",
        }}
        gap={6}
        w="90%"
        m="auto"
        mt={4}
      >
        {cartItems &&
          cartItems.map((item) => (
            <CardForCart item={item} key={uuid()} page={"cart"} />
          ))}
      </Grid>
    </Box>
  );
};
