import { Box, Grid, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProductFunction,
  setFilter,
  setOrder,
  setPage,
} from "../../Redux/Product/Action";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { Filter } from "./FIlter";
import { Card } from "../common/Card";
export const Product = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { products, filter, totalPages, currentPage, loader } = useSelector(
    (store) => store.Products
  );
  const setFilterFunction = (value) => {
    dispatch(setFilter(value));
  };
  const setCurrentFun = (value) => {
    dispatch(setPage(value));
  };
  const getListFun = (order) => {
    if (order) {
      dispatch(setOrder(order));
      dispatch(GetProductFunction(order))
        .then(() => {
          toast({
            title: `Product successfully fetched by order ${order}`,
            status: "success",
            isClosable: true,
            duration: 2000,
          });
        })
        .catch((err) => {
          console.log(err.message);
          toast({
            title: `Product could not be fetched by order ${order}`,
            description: err.message,
            status: "error",
            isClosable: true,
            duration: 2000,
          });
        });
      return;
    }
    dispatch(GetProductFunction())
      .then(() => {
        toast({
          title: "Product successfully fetched",
          status: "success",
          isClosable: true,
          duration: 2000,
        });
      })
      .catch((err) => {
        console.log(err.message);
        toast({
          title: "Product could not be fetched",
          description: err.message,
          status: "error",
          isClosable: true,
          duration: 2000,
        });
      });
  };
  return (
    <Box>
      <Filter getListFun={getListFun} setFilterFunction={setFilterFunction} />
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
        {products &&
          products
            .filter((item) => {
              if (filter.length > 0) {
                return item.category === filter;
              } else {
                return item;
              }
            })
            .map((item) => <Card item={item} key={uuid()} />)}
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
