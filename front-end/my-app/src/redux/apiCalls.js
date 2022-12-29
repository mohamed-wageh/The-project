import { loginFailure, loginStart, loginSuccess } from "";
import { publicRequest } from "../re";
import { getProductStart } from "./productRedux";

export const getProducts = async (dispatch, user) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.post("/products");
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};