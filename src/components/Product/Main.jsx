import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductFunction, setPage } from "../../Redux/Product/Action";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
export const Product = () => {
  const dispatch = useDispatch();
  const { products, totalPages, currentPage, loader } = useSelector(
    (store) => store.Products
  );
  const setCurrentFun = (value) => {
    dispatch(setPage(value));
  };
  const getListFun = () => {
    dispatch(GetProductFunction());
  };
  useEffect(() => {
    dispatch(GetProductFunction());
  }, []);
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} w="90%" m="auto" mt={4}>
        {products &&
          products.map((item) => (
            <GridItem
              w="100%"
              key={uuid()}
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
                    {item.price}
                  </Text>
                </Box>
              </Box>
            </GridItem>
          ))}
      </Grid>
      <Pagination
        totalPages={totalPages}
        ListLoader={loader}
        currentPage={currentPage}
        setCurrentFun={setCurrentFun}
        getListFun={getListFun}
      />
    </Box>
  );
};
