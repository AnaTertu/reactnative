import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Login(props) {
    const { navigation } = props;

        return(
            <View
                style={{ 
                    flex: 1,            
                    backgroundColor: "##FADAB9",
                    paddingLeft: 20
                    }}
            >
                
                <Text
                    style= {{ 
                        color: "#400",
                        marginTop: 20,
                        fontSize: 20,
                        paddingBottom:20
                    }}
                >
                    Faça seu Login aqui!
                </Text>
                
                <View>
                    <TextInput                      
                        placeholder='Nome Completo'
                        style= {{ 
                            color: "#400",
                            marginTop: 20,
                            fontSize: 20,
                            paddingBottom:10
                        }}
                    />

                    <TextInput                      
                        placeholder='Email'
                        style= {{ 
                            color: "#400",
                            marginTop: 20,
                            fontSize: 20,
                            paddingBottom:10
                        }}
                    />

                    <TextInput                      
                        placeholder='Telefone'
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
                        
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text
                            style= {{ 
                                color: "#400",
                                marginTop: 20,
                                fontSize: 20,
                                paddingBottom:10
                            }}
                        >
                            Faça seu Login
                            
                        </Text>       
                    </TouchableOpacity>
                </View>
            </View>
    )
}
