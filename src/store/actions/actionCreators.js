import * as actionTypes from './actionTypes';

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

// export const promoCode = () => ({
//     type: actionTypes.PROMO_CODE
// })
