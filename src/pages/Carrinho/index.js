import React from 'react';
import { View, Text } from 'react-native';

export default function Carrinho({ navigate }) {
    return (
        <View 
        style={{
            flex: 1,           
            backgroundColor: "#757",
            }}
        >  
            <Text style= {{
                color: "#fff",
                fontSize: 15, 
                paddingTop: 30,
                paddingLeft: 20
                }}
            >
                Site em manutenção, {"\n"}
                agradeço sua compreensão!
            </Text>

        </View>
    )
}
       