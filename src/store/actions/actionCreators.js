import * as actionTypes from './actionTypes';
import { productsRef } from '../../firebase/index';

export const fetchProducts = () => dispatch => {
    dispatch(productsLoading());
    
    productsRef.on("value", (snapshot) => {
        dispatch(addProducts(snapshot.val()));
    }, (error) => {
        let errmess = new Error(`Error: ${error.code}`);
        console.log(errmess)
        dispatch(productsFailed(errmess))
    })
};

export const productsLoading = () => ({
    type: actionTypes.PRODUCTS_LOADING
});

export const productsFailed = (errorMessage) => ({
    type: actionTypes.PRODUCTS_FAILED,
    payload: errorMessage
});

export const addProducts = (products) => ({
    type: actionTypes.ADD_PRODUCTS,
    payload: products
});

export const toogleSideBar = () => ({
    type: actionTypes.TOGGLE_SIDE_BAR
});

export const addToCart = (id) => ({
    type: actionTypes.ADD_TO_CART,
    payload: id
});

export const removeItem = (id) => ({
    type: actionTypes.DELETE_FROM_CART,
    payload: id
});

export const addQuantity = (id) => ({
    type: actionTypes.ADD_QUANTITY,
    payload: id
});

export const subtractQuantity = (id) => ({
    type: actionTypes.SUB_QUANTITY,
    payload: id
});