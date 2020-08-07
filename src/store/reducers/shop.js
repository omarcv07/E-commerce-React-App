import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isLoading: false,
    errMess: null,
    element: [],
    showSideNavigation: false,
    ProductCode: [
        {
            code: 'TENPERCENT',
            percetange: 10
        },
        {
            code: 'FIVEPERCENT',
            percetange: 5
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
            quantity: 5,
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
            quantity: 8,
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
            quantity: 3,
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
            quantity: 10,
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
            quantity: 0,
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
            quantity: 2,
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
            quantity: 6,
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
            quantity: 10,
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
            quantity: 9,
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
            quantity: 0,
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
            quantity: 7,
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
            quantity: 4,
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
            quantity: 3,
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
            quantity: 2,
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
            quantity: 0,
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
            quantity: 8,
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
            quantity: 4,
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
            quantity: 7,
            img: 'crew-neck-tshirt.jpg'
        },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.TOGGLE_SIDE_BAR:
            return {
                ...state,
                showSideNavigation: !state.showSideNavigation
            };

        case actionTypes.PROMO_CODE: 
            return {
                ...state,

            };
        
        default:
            return {
                ...state
            };
    }
}

export default reducer;