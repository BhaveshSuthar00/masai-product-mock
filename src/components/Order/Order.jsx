import { Box, Grid, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Card } from "../common/Card";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
export const Order = () => {
  const { orders } = useSelector((store) => store.Cart);
  if (orders.length === 0) {
    return (
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        flexDir="column"
        mt={"auto"}
      >
        <Box>
          No product Order Yet!!!{" "}
          <Text to="/" as={Link} textColor="blue">
            Go back to home Page
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
        {orders && orders.map((item) => <Card item={item} key={uuid()} />)}
      </Grid>
    </Box>
  );
};
