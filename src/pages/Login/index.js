import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Login(props) {
    const { navigation } = props;

        return(
            <View
                style={{ 
                    flex: 1,            
                    backgroundColor: "##FADAB9",
                    paddingLeft: 0
                    }}
            >
                
                        <Text
                            style= {{ 
                                color: "#400",
                                marginTop: 20,
                                fontSize: 20,
                                paddingBottom:10
                            }}
                        >
                            Faça seu Login aqui!
                        </Text>
                        
                        <View>
                            <TextInput                      
                                placeholder='Usuário'
                                style= {{ 
                                    color: "#400",
                                    marginTop: 20,
                                    fontSize: 20,
                                    paddingBottom:10
                                }}
                            />
                            <TextInput  
                                placeholder='Senha' 
                                secureTextEntry={true}                            
                                style= {{ 
                                    color: "#400",
                                    marginTop: 20,
                                    fontSize: 20,
                                    paddingBottom:10
                                }}
                            />
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Home')}
                            >
                                <Text
                                    style= {{ 
                                        color: "#400",
                                        marginTop: 20,
                                        fontSize: 20,
                                        paddingBottom:10
                                    }}
                                >
                                    Entrar
                                </Text>
                            </TouchableOpacity>
                        </View>

                <TouchableOpacity
                    title='Cadastro'
                    onPress={() => 
                    navigation.navigate('Cadastro')}
                >

                    <Text
                        style={{
                            fontWeight: "bold",
                            color: "#400",
                            fontSize: 13,
                            paddingTop: 50,
                            paddingLeft: 200
                        }}
                    >
                        Ainda não tem login?{"\n"}
                        Cadastre-se aqui
                    </Text>
                </TouchableOpacity>
            </View>
        )
}
