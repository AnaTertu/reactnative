import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';

import { useScrollToTop } from '@react-navigation/native';

export default function Loja(navigation) {

    const ref = React.useRef(null);

    useScrollToTop(ref);

    return (
        <View 
            style={{
              flex:1,
              padding: 24,
            }}
        >
              <Text style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontFamily: "Reggae One, cursive"
                  }}>
                    Se você deseja comprar o livro clique em "adicionar produto",
                    depois clique no botão "checkout" na 
              </Text>
              <br/>
              <ScrollView ref={ref} style={{ display: "inline-block", position: "relative"}} >
                  
                      <Image
                          source={{ uri: 'https://static.wixstatic.com/media/c78d48_8724a039644a42968639a2bf708e738b.jpg/v1/fill/w_164,h_248,al_c,q_80,usm_0.66_1.00_0.01/c78d48_8724a039644a42968639a2bf708e738b.webp' }} 
                          style={{ width: 140, height: 200, marginHorizontal: 25, marginBottom: -200}}  
                          key="1"
                      />
                    
                    
                    <Image
                        source={{ uri:'https://static.wixstatic.com/media/c78d48_8724a039644a42968639a2bf708e738b.jpg/v1/fill/w_164,h_248,al_c,q_80,usm_0.66_1.00_0.01/c78d48_8724a039644a42968639a2bf708e738b.webp'}} 
                        style={{ width: 140, height: 200, marginHorizontal: 175, marginBottom: -200}} 
                        key="2"
                    />
                    <Image
                        source={{ uri:'https://static.wixstatic.com/media/c78d48_5694f85a5a484bc38dca1cc0b35711a9~mv2.jpg/v1/fill/w_165,h_242,al_c,q_80,usm_0.66_1.00_0.01/c78d48_5694f85a5a484bc38dca1cc0b35711a9~mv2.webp'}} 
                        style={{ width: 140, height: 200, marginHorizontal: 325, marginBottom: -200}} 
                        key="3"
                    />
                    <Image
                        source={{uri:'https://static.wixstatic.com/media/c78d48_902481efa1cd4aa8a63269f2827e44f3~mv2.jpg/v1/fill/w_165,h_234,al_c,q_80,usm_0.66_1.00_0.01/c78d48_902481efa1cd4aa8a63269f2827e44f3~mv2.webp'}} 
                        style={{ width: 140, height: 200, marginHorizontal: 475, marginBottom: -200}}  
                        key="4"
                    />
                    <Image
                        source={{ uri:'https://static.wixstatic.com/media/c78d48_75aa1a1eb526441fb722b3f88b22f2d3~mv2.jpg/v1/fill/w_165,h_244,al_c,q_80,usm_0.66_1.00_0.01/c78d48_75aa1a1eb526441fb722b3f88b22f2d3~mv2.webp'}} 
                        style={{ width: 140, height: 200, marginHorizontal: 625, marginBottom: -200}} 
                        key="5"
                    />
                    <Image
                        source={{uri:'https://static.wixstatic.com/media/c78d48_7442a059fffb439da406cc7424dc89f1~mv2.jpg/v1/fill/w_165,h_235,al_c,q_80,usm_0.66_1.00_0.01/c78d48_7442a059fffb439da406cc7424dc89f1~mv2.webp'}} 
                        style={{ width: 140, height: 200, marginHorizontal: 775, marginBottom: -200}}  
                        key="6"
                    />
                </ScrollView>
               
        </View>
    );
}
