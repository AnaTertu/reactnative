import React from 'react'
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
//import TodosProdutos from '../../redux/todosProdutos';

export default function Produtos( navigation ) {

    const TodosProdutos = useSelector((state) => ( state.TodosProdutos));
    
    //console.log(TodosProdutos)

    return (
        <View 
            style={{                
                flex: 2, 
                margin: 0,
                paddingTop: 0,
                padding: 250,
                alignItems: "center",
                justifyContent: "center",             
                backgroundColor: "#099"
                }}
        >
            
            <Text 
                style={{ 
                    color: "#fff",
                    fontSize: 20,
                    fontFamily: "Reggae One, cursive"
                    }}
                   
            >    
                Produtos  
            </Text>
           

          
            {/* {TodosProdutos.map(item => (
                <Text key={item.id}>
                    <Text>{item.nome}</Text>
                    <Text>{item.preco}</Text>
                </Text>
            ))} */}

            {/* <Button
            title=" Ir para Produtos! "
            onPress={() =>
                props.navigation.navigate('StaticProdutos', {
                count,
                })
            }
            /> */}

        </View>        
    )
}
