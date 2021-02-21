import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';

export default function Lista({ navigate }){ 
    
    return(
        <View 
        style={{ 
            flex: 1, 
            alignItems: "center", 
            justifyContent: "center",            
            backgroundColor: "#757",
            }}
        >
            
            <Text style= {{ color: "#fff", fontSize: 20, fontFamily: "Reggae One, cursive"}}>Ciência Cristã</Text>

            <Text style= {{ color: "#fff", fontSize: 16, fontFamily: "Reggae One, cursive" }}>
                Aqui você pode ler estes e outros livros na Biblioteca:
            </Text>
            
            <FlatList
                data={[
                    {key: '• Ciência e Saúde com a Chave das Escrituras'},
                    {key: '• Rudimentos da Ciência Divina / Não e Sim'},
                    {key: '• Um Mundo Mais Luminoso'},
                    {key: '• Retrospecção e Introspecção'},
                    {key: '• Mary Baker Eddy - Uma Vida Dedicada à Cura'},
                    {key: '• Manual da Igreja'},
                ]}

                    renderItem={({item}) => <Text style={{  color: "#fff", padding: 10, fontSize: 15, height: 44,}}>{item.key}</Text>
                    
                }
            />

            <Image
                source={require('../../../assets/images/map-igrej-sp.PNG')} 
                style={{ width: 250, height: 200}} 
                resizeMode="contain-inline" 
                key="1"
            />

            <Text style= {{ color: "#000", fontSize: 10 }}>
                'https://goo.gl/maps/NCcL4e9mur363w7k7'
            </Text>
            
        </View>
    )
}
        