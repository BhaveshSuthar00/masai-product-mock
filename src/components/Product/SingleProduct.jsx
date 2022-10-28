import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../../Redux/Cart/Action";

export const SingleProduct = () => {
  const { products } = useSelector((store) => store.Products);
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    setLoader(true);
    products.map((item) => {
      if (item.id === Number(id)) {
        setData(item);
        setLoader(false);
        return;
      }
    });
    return () => {
      setData({});
      setLoader(true);
    };
  }, [id]);
  if (loader) return <></>;
  if (!data) return <></>;
  return (
    <>
      <Box
        display={"flex"}
        mt={6}
        boxShadow="xl"
        w={"90%"}
        m="auto"
        p={4}
        borderRadius="lg"
        flexDir={{ base: "row", lg: "row", md: "column", sm: "column" }}
      >
        <Box flex={1}>
          <Image src={data.image} borderRadius="lg" w={"90%"} h={"90%"} />
        </Box>
        <Box flex={1}>
          <Text>{data.brand}</Text>
          <Text as="strong">{data.title}</Text>
          <Text>{data.category}</Text>
          <Text>&#8377; {data.price}</Text>

          <Button onClick={() => dispatch(addItem(data))}>Add to Cart</Button>
        </Box>
      </Box>
    </>
  );
};
