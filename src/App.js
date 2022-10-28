import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AllRoutes } from "./components/AllRoutes";
import { GetProductFunction } from "./Redux/Product/Action";

function App() {
  const dispatch = useDispatch();
  const toast = useToast();
  useEffect(() => {
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
  }, []);

  return <AllRoutes />;
}

export default App;
