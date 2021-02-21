// import * as React from 'react'
// //import { AppRegistry } from 'react-native'
// import { createStackNavigator } from '@react-navigation/stack';
// import ReactDOM from 'react-dom'
// import'react-native-gesture-handler'
// import { NavigationContainer } from '@react-navigation/native'
// //import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// // import store from '../redux/store'
// // import Provider  from 'react-redux'


// // import App from './aula-3/src/routes'
// // import'./aula-3/app.json'

// import Home from '../pages/Home'
// import Lista from '../pages/Lista'
// import Loja from '../pages/Loja'
// // import Carrinho from '../pages/Carrinho'
// // import Produtos from '../pages/Produtos'

// import { useCart } from '../context'


// const Stack = createStackNavigator();
// //const Tab = createBottomTabNavigator()

// ReactDOM.render( 

//     function App(){
//         return(
//             //<Provider store={store}>

//                 <NavigationContainer initialRouteName='Home' headerMode='screen'>          
//                     <Stack.Navigator>
//                         <Stack.Screen name="Home" component={Home} options={{tittle: 'Home'}} />
//                         <Stack.Screen name="Lista" component={Lista} options={{tittle:'Lista'}} />
//                         <Stack.Screen name="Loja" component={Loja} options={{tittle:'Loja'}} />
//                         {/* <Stack.Screen name="Carrinho" component={Carrinho} options={{ title: 'Carrinho'}} />  
//                         <Stack.Screen name="Produtos" component={Produtos} options={{ title: 'Produtos', tabBarIcon: IconWithBadge}} />        */}
//                     </Stack.Navigator>
//                 </NavigationContainer>  
//             //</Provider> 
//         )
//     },

//     // function IconWithBadge () {

//     //     const { cart } = useCart()
//     //     return (
//     //         <View style={{ width: 24, height: 24, margin: 5 }} >
//     //             <Text>{Object.keys(cart).lenght}</Text>
//     //         </View>
//     //     )
//     // },


//     //AppRegistry.registerComponent(() => App),
//     // document.getElementById('root')
// )
