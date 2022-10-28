import {
  Box,
  Button,
  ButtonGroup,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addOrder, removeItem } from "../../Redux/Cart/Action";

export const CardForCart = ({ item, page }) => {
  const dispatch = useDispatch();
  const placeOrder = () => {
    dispatch(addOrder(item));
    alert("Order placed successfully");
  };
  return (
    <GridItem w="100%" boxShadow="lg" p={3} borderRadius="xl">
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
        {page && page === "cart" && (
          <ButtonGroup alignItems={"center"} mt={2}>
            <Button colorScheme={"telegram"} onClick={placeOrder}>
              Place order
            </Button>
            <Button
              onClick={() => dispatch(removeItem(item.id))}
              colorScheme="orange"
            >
              Remove
            </Button>
          </ButtonGroup>
        )}
      </Box>
    </GridItem>
  );
};
