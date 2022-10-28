import axios from "axios";

const GetProduct = "GETPRODUCT";
const SetCurrentPage = "SETCURRENTPAGE";
const GetProductApi = (data) => ({ type: GetProduct, payload: data });
const setPage = (data) => ({ type: SetCurrentPage, payload: data });
export const GetProductFunction = () => async (dispatch, getState) => {
  try {
    const { currentPage } = getState().Products;
    console.log(currentPage);
    const response = await axios.get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${currentPage}`
    );
    console.log(response.data.data[1]);
    dispatch(GetProductApi(response.data));
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};
export { GetProduct, SetCurrentPage, GetProductApi, setPage };
