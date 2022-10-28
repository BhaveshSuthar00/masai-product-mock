import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Filter = ({ getListFun, setFilterFunction }) => {
  const { cartItems, orders } = useSelector((store) => store.Cart);
  return (
    <Box
      display={"flex"}
      justifyContent="space-around"
      w="90%"
      m="auto"
      mt={4}
      mb={4}
    >
      <FormControl display={"flex"} alignItems="center" flex={1}>
        <FormLabel htmlFor="category">Category</FormLabel>
        <Select
          w="30%"
          placeholder="choose"
          id="category"
          onChange={(e) => setFilterFunction(e.target.value)}
        >
          <option value="">None</option>
          <option value="kids">Kids</option>
          <option value="homedecor">Homedecor</option>
          <option value="women">Women</option>
        </Select>
      </FormControl>
      <FormControl
        display={"flex"}
        alignItems="center"
        flex={1}
        justifyContent="flex-end"
      >
        <FormLabel htmlFor="sort">Sort By</FormLabel>
        <Select
          id="sort"
          placeholder="choose"
          w="30%"
          onChange={(e) => getListFun(e.target.value)}
        >
          <option value="">None</option>
          <option value="asc">low to high</option>
          <option value="desc">High to low</option>
        </Select>
      </FormControl>
      <Box ml={2}>
        <ButtonGroup gap={2} colorScheme="blackAlpha">
          <Button as={Link} to={"/cart"}>
            Cart {cartItems.length}
          </Button>

          <Button as={Link} to={"/order"}>
            Order {orders.length}
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};
