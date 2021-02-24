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
            
            <Text 
                style= {{ 
                    color: "#fff",
                    marginTop: 20,
                    fontSize: 20,
                    paddingBottom:10
                }}
            >
                Ciência Cristã
            </Text>

            <Text style= {{ color: "#fff", fontSize: 10 }}>
                Na sala de leitura você pode ler estes e outros livros na Biblioteca:
            </Text>
            
            <FlatList
                data={[
                    {key: '• Ciência e Saúde com a Chave das Escrituras'},
                    {key: '• Rudimentos da Ciência Divina / Não e Sim'},
                    {key: '• Um Mundo Mais Luminoso'},
                    {key: '• Retrospecção e Introspecção'},
                    {key: '• Manual da Igreja'},
                    {key: '• Mary Baker Eddy - Uma Vida Dedicada à Cura'},
                    {key: '...dentre outros exemplares... '}
                ]}

                    renderItem={({item}) => <Text style={{  color: "#fff", padding: 8, fontSize: 12 }}>{item.key}</Text>
                    
                }
            />
            <Image
                style={{ height: 200, width: 200, paddingTop: -80 }}
                source={require("../../../assets/images/mapa.jpg")}
            />

            <Text style= {{ color: "#000", fontSize: 10 }}>
                'https://goo.gl/maps/NCcL4e9mur363w7k7'
            </Text>
            
        </View>
    )
}
        