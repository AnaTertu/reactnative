import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Lista from './src/pages/Lista';
import Loja from './src/pages/Loja';
import Carrinho from './src/pages/Carrinho';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';

 const RootStack = createStackNavigator();
 const Stack = createStackNavigator()

export default function App(){
    return(
                <NavigationContainer initialRouteName='Home' headerMode='screen'>          
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Home} option={{tittle: 'Home'}} />
                        <Stack.Screen name="Lista" component={Lista} option={{tittle:'Lista'}} />
                        <Stack.Screen name="Loja" component={Loja} option={{tittle:'Loja'}} />
                        <Stack.Screen name="Carrinho" component={Carrinho} option={{tittle:'Carrinho'}} />
                        <Stack.Screen name="Login" component={Login} option={{tittle:'Login'}} />
                        <Stack.Screen name="Cadastro" component={Cadastro} option={{tittle:'Cadastro'}} />
                    </Stack.Navigator>
                </NavigationContainer>      
    );
}
