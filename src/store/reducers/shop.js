import * as actionTypes from '../actions/actionTypes'

const initialState = {
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
    ],
    products: [
        {
            id: 1,
            name: 'men\'s analog quartz watch',
            price: 500,
            discount_price: 2800,
            category: 'men',
            subcategory: '',
            sale: true,
            article: 'watch',
            stock: 5,
            img: 'analog-quartz-watch.jpg',
        },
        {
            id: 2,
            name: 'singedani four set handbag',
            price: 1160,
            discount_price: 2320,
            category: 'women',
            subcategory: '',
            sale: false,
            article: 'handbag',
            stock: 8,
            img: 'singedani-handbag.jpg'
        },
        {
            id: 3,
            name: 'Boys gray boxer set',
            price: 900,
            discount_price: 1200,
            category: 'kids',
            subcategory: 'boys',
            sale: true,
            article: 'boxer',
            stock: 3,
            img: 'boy_boxers.jpg'
        },
        {
            id: 4,
            name: 'Hiamok men leather belt',
            price: 392,
            discount_price: 1098,
            category: 'men',
            subcategory: '',
            sale: false,
            article: 'belt',
            stock: 10,
            img: 'belt.jpg'
        },
        {
            id: 5,
            name: 'vintage print flare dress',
            price: 1720,
            discount_price: 5160,
            category: 'women',
            subcategory: '',
            sale: true,
            article: 'dress',
            stock: 0,
            img: 'vintage-flare-dress.jpg'
        },
        {
            id: 6,
            name: 'capped sleeves red cotton dress',
            price: 1100,
            discount_price: 1650,
            category: 'kids',
            subcategory: 'girls',
            sale: true,
            article: 'dress',
            stock: 2,
            img: 'cotton-dress.jpg'
        },
        {
            id: 7,
            name: 'gemch men casual running shoes',
            price: 3020,
            discount_price: 3580,
            category: 'men',
            subcategory: '',
            sale: false,
            article: 'shoes',
            stock: 6,
            img: 'gemch_shoes.jpg'
        },
        {
            id: 8,
            name: 'Boho printed floral dress',
            price: 1999,
            discount_price: 2199,
            category: 'women',
            subcategory: '',
            sale: true,
            article: 'dress',
            stock: 10,
            img: 'floral-dress.jpg'
        },
        {
            id: 9,
            name: 'Baby girl bowknot leather shoes',
            price: 493,
            discount_price: 502,
            category: 'kids',
            subcategory: 'girls',
            sale: false,
            article: 'dress',
            stock: 9,
            img: 'leather-shoes.jpg'
        },
        {
            id: 10,
            name: 'men khaki trouser - navy blue',
            price: 1346,
            discount_price: 1347,
            category: 'men',
            subcategory: '',
            sale: false,
            article: 'shoes',
            stock: 0,
            img: 'gsoft-khaki.jpg'
        },
        {
            id: 11,
            name: 'Women printed bodycon dress',
            price: 1554,
            discount_price: 1640,
            category: 'women',
            subcategory: '',
            sale: false,
            article: 'dress',
            stock: 7,
            img: 'bodycon-dress.jpg'
        },
        {
            id: 12,
            name: 'girl princess lace dress',
            price: 1808,
            discount_price: 2350,
            category: 'kids',
            subcategory: 'girls',
            sale: true,
            article: 'dress',
            stock: 4,
            img: 'princes-dress.jpg'
        },
        {
            id: 13,
            name: 'men\'s formal slim fit suit',
            price: 3627,
            discount_price: 6045,
            category: 'men',
            subcategory: '',
            sale: true,
            article: 'suit',
            stock: 3,
            img: 'slim-fit-suit.jpg'
        },
        {
            id: 14,
            name: 'Women\'s rome strappy gladiator loe flat flip',
            price: 876,
            discount_price: 987,
            category: 'women',
            subcategory: '',
            sale: true,
            article: 'sandals',
            stock: 2,
            img: 'gladiator-flat-flip.jpg'
        },
        {
            id: 15,
            name: 'navy long sleeved boys t-shirt',
            price: 960,
            discount_price: 1200,
            category: 'kids',
            subcategory: 'boys',
            sale: false,
            article: 'dress',
            stock: 0,
            img: 'boys-t-shirt.jpg'
        },
        {
            id: 16,
            name: '3 piece men\'s vest - white',
            price: 899,
            discount_price: 1800,
            category: 'men',
            subcategory: '',
            sale: true,
            article: 'suit',
            stock: 8,
            img: 'vest.jpg'
        },
        {
            id: 17,
            name: 'checkers faix leather wrist watch',
            price: 341,
            discount_price: 443,
            category: 'women',
            subcategory: '',
            sale: true,
            article: 'watch',
            stock: 4,
            img: 'quartz-wrist-watch.jpg'
        },
        {
            id: 18,
            name: 'boys black  crew neck t-shirt',
            price: 890,
            discount_price: 1200,
            category: 'kids',
            subcategory: 'boys',
            sale: true,
            article: 'dress',
            stock: 7,
            img: 'crew-neck-tshirt.jpg'
        },
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