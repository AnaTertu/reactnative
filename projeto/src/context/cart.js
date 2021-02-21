// import React, { createContext, useState, useContext, useEffect } from 'react-native'

// import { Provider } from 'react-redux'

// export default function Provider({children}) {

//     const [CartContext] = createContext() 

//     const [cart, setCart] = useState([])
//     const [totalValue, setTotalValue] = useState()

//     useEffect(() => {
//         let value = 0
//         cart.map((item) => {
//             value = value + item.price
//         })
//         setTotalValue(value)
//     }, [cart])

//     function add (item) {
//         const newCart = cart
//         newCart.push(item)

//         setCart([...newCart])
//     }

//     function remove (index) {
//         let newCart = cart.filter((item, i) => i !== index)

//         setCart([...newCart])
//     }

//     const store = {
//         add,
//         cart,
//         totalValue,
//         remove
//     }

//     return (
//         <CartContext.Provider value={store}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export function useCart() {
//     const context = useContext()

//     const {
//         cart,
//         add,
//         totalValue,
//         remove
//     } = context;

//     return {
//         cart,
//         add,
//         totalValue,
//         remove
//     }
// }
