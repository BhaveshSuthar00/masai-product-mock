import axios from "axios";

const GetProduct = "GETPRODUCT";
const SetCurrentPage = "SETCURRENTPAGE";
const Order = "ORDER";
const Filter = "FILTER";
const setFilter = (data) => ({ type: Filter, payload: data });
const setOrder = (data) => ({ type: Order, payload: data });
const GetProductApi = (data) => ({ type: GetProduct, payload: data });
const setPage = (data) => ({ type: SetCurrentPage, payload: data });
export const GetProductFunction = () => async (dispatch, getState) => {
  try {
    const { currentPage, order } = getState().Products;
    let response;
    if (order === "")
      response = await axios.get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${currentPage}&limit=12`
      );
    if (order === "asc" || order === "desc")
      response = await axios.get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${currentPage}&orderBy=${order}&limit=12`
      );
    dispatch(GetProductApi(response.data));
  } catch (e) {
    throw new Error(e.message);
  }
};
export {
  GetProduct,
  SetCurrentPage,
  Order,
  Filter,
  GetProductApi,
  setPage,
  setOrder,
  setFilter,
};
