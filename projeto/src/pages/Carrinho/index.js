import React from 'react';
import { View, Text } from 'react-native';
import Produtos from '../Produtos';

export default function Carrinho({ navigate }) {
    return (
        <View 
        style={{ 
            margin: 10,
            paddingTop: 20,
            flex: 1, 
            alignItems: "flex-start", 
            justifyContent: "center",          
            backgroundColor: "#757",
            }}
        >  
            <Text style= {{
                color: "#000", fontSize: 20, 
                fontFamily: "Reggae One, cursive" 
                }}
            >
                Carrinho
            </Text>

            
            <Produtos/>


        </View>
    )
}
       