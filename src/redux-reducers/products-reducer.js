const initialState = {data:[],cart:[],serverErrors:[]}

export const productsReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'SET_PRODUCTS':{
            return {...state,data: action.payload}
        }
        case 'ADD_PRODUCT':{
            return {...state, data : [ action.payload, ...state.data ] }
        }
        case 'SET_CARTS':{
            return {...state,cart:action.payload}
        }
        case 'REMOVE_CART':{
            return {...state,cart: state.cart.filter(ele=>ele.productId._id != action.payload)}
        }
        case 'CLEAR_CART':{
            //console.log(action.payload)
            return {...state, cart: state.cart.filter((ele) => ele.mode != action.payload ) }
        }
        default:{
            return {...state}
        }
    }
}