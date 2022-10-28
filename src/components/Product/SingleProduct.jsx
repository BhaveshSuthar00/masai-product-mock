import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const { id } = useParams();
  return <Box>{id}</Box>;
};
