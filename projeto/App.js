import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Lista from './src/pages/Lista';
import Loja from './src/pages/Loja';
import Carrinho from './src/pages/Carrinho';
import Produtos from './src/pages/Produtos';
import store from './src/redux/store';

import {Provider} from 'react-redux';

console.log(store.getState())

const RootStack = createStackNavigator();
const Stack = createStackNavigator()

export default function App(){
    return(
            <Provider store={store}>
                <NavigationContainer initialRouteName='Home' headerMode='screen'>          
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Home} option={{tittle: 'Home'}} />
                        <Stack.Screen name="Lista" component={Lista} option={{tittle:'Lista'}} />
                        <Stack.Screen name="Loja" component={Loja} option={{tittle:'Loja'}} />
                        <Stack.Screen name="Carrinho" component={Produtos, Carrinho} option={{ title: () => <TodosProdutos /> }} />       
                    </Stack.Navigator>
                </NavigationContainer>  
            </Provider>     
    );
}
