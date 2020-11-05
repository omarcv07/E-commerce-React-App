import * as actionTypes from '../actions/actionTypes'

const initialState = {
    products: [],
    errMessage: null,
    isLoading: true,
    addedProducts: [],
    total: 0,
    showSideNavigation: false,
    ProductCode: [
        {
            code: 'TENPERCENT',
            percentage: 10
        },
        {
            code: 'FIVEPERCENT',
            percentage: 5
        }
    ]
}

const reducer = (state = initialState, action) => {
    let updatedCart;
    let updatedProductIndex;
    let newTotal;
    let newProductQuantity;

    switch (action.type) {

        case actionTypes.TOGGLE_SIDE_BAR:
            return {
                ...state,
                showSideNavigation: !state.showSideNavigation
            };

        case actionTypes.ADD_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                errMessage: null,
                products: action.payload
            }

        case actionTypes.PRODUCTS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMessage: action.payload,
                products: []
            }

        case actionTypes.PRODUCTS_LOADING: 
            return {
                ...state,
                isLoading: true,
                errMessage: null,
                products: []
            }

        case actionTypes.ADD_TO_CART: 
            let addedProduct = state.products.find(item => item.id === action.payload);
            let existentProduct = state.addedProducts.find((item) => item.id === action.payload);

            if (existentProduct) {
                addedProduct.quantity += 1;
                return {
                    ...state,
                    addedProducts: [...state.addedProducts],
                    total: state.total + addedProduct.price
                }
            } else {
                addedProduct.quantity = 1;;
                newTotal = state.total + addedProduct.price;

                return {
                    ...state, 
                    addedProducts: [...state.addedProducts, addedProduct],
                    total: newTotal
                }
            }

        case actionTypes.DELETE_FROM_CART:
            let productToRemove = state.addedProducts.find(item => item.id === action.payload);
            let newProducts = state.addedProducts.filter(item => item.id !== action.payload);
            newTotal = state.total - (productToRemove.price * productToRemove.quantity);
            
            console.log(productToRemove);

            return {
                ...state, 
                addedProducts: newProducts,
                total: newTotal
            }

        case actionTypes.ADD_QUANTITY:
            updatedCart = [...state.addedProducts];
            updatedProductIndex = updatedCart.findIndex(product => product.id === action.payload);

            const incrementedProduct = {
                ...updatedCart[updatedProductIndex]
            };

            console.log(incrementedProduct)

            incrementedProduct.quantity += 1;
            newProductQuantity = incrementedProduct.quantity;

            if (newProductQuantity <= incrementedProduct.stock) {
                updatedCart[updatedProductIndex] = incrementedProduct;
                newTotal = state.total + incrementedProduct.price;

                return {
                    ...state,
                    addedProducts: updatedCart,
                    total: newTotal
                }
            } else {
                return {
                    ...state
                }
            }

        case actionTypes.SUB_QUANTITY:
            updatedCart = [...state.addedProducts];
            updatedProductIndex = updatedCart.findIndex(product => product.id === action.payload);

            const decrementedProduct = {
                ...updatedCart[updatedProductIndex]
            };

            console.log(updatedCart)

            decrementedProduct.quantity -= 1;
            newProductQuantity = decrementedProduct.quantity;

            if (newProductQuantity < 1) {
                return {
                    ...state
                }
            } else {
                updatedCart[updatedProductIndex] = decrementedProduct;
                newTotal = state.total - decrementedProduct.price;
    
                return {
                    ...state,
                    addedProducts: updatedCart,
                    total: newTotal
                }
            }

        default:
            return {
                ...state
            };
    }
}

export default reducer;