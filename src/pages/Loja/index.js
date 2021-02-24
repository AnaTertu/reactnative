import React from 'react';
import { Text, View, ScrollView, Image, Button, TouchableOpacity} from 'react-native';

import { useScrollToTop } from '@react-navigation/native';
 
export default function Loja(props) {
        const { navigation } = props;
    

    const ref = React.useRef(null);

    useScrollToTop(ref);

    return (
        <View 
        style={{ 
            flex: 1, 
            paddingLeft: 20,            
            backgroundColor: "#757"
            }}
        >
            
            <Text 
                style= {{ 
                    color: "#fff",
                    fontSize: 20,
                    paddingBottom: 15
                }}
            >
                    Adquira os livros pra ler onde estiver, fazer anotações,...
            </Text>
            
            <ScrollView ref={ref}  > 
                <Image
                    style={{ marginTop: 20  }}
                    source={require("../../../assets/images/ciencia.webp")}
                />
                <Text 
                style= {{ 
                    color: "#fff",
                    fontSize: 20
                }}
                >
                    • Ciência e Saúde com a Chave das Escrituras - R$55,00
                </Text>
                <TouchableOpacity
                    title="Ir para Carrinho"
                    onPress={() => navigation.navigate("Carrinho")}
                >
                    <Text 
                    style= {{ 
                        color: "#fff",
                        fontSize: 15,
                        paddingBottom:10
                    }}
                    >
                        Adicionar ao carrinho
                    </Text>
                </TouchableOpacity>

                <Image
                    style={{ marginTop: 20  }}
                    source={require("../../../assets/images/rudimentos.webp")}
                />
                <Text 
                style= {{ 
                    color: "#fff",
                    fontSize: 20
                }}
                >
                    Rudimentos da Ciência Divina - R$30,00
                </Text>
                <Image
                    style={{ marginTop: 20  }}
                    source={require("../../../assets/images/mundo-luminoso.webp")}
                />
                <Text 
                style= {{ 
                    color: "#fff",
                    fontSize: 20
                }}
                >
                    Um mundo mais Luminoso - R$55,00
                </Text><TouchableOpacity
                    title="Ir para Carrinho"
                    onPress={() => navigation.navigate("Carrinho")}
                >
                    <Text 
                    style= {{ 
                        color: "#fff",
                        fontSize: 15,
                        paddingBottom:10
                    }}
                    >
                        Adicionar ao carrinho
                    </Text>
                </TouchableOpacity>

                <Image
                    style={{ marginTop: 20  }}
                    source={require("../../../assets/images/restro-intro.webp")}
                />
                <Text 
                style= {{ 
                    color: "#fff",
                    fontSize: 20
                }}
                >
                    Retrospecção e Introspecção - R$30,00
                </Text>
                <TouchableOpacity
                    title="Ir para Carrinho"
                    onPress={() => navigation.navigate("Carrinho")}
                >
                    <Text 
                    style= {{ 
                        color: "#fff",
                        fontSize: 15,
                        paddingBottom:10
                    }}
                    >
                        Adicionar ao carrinho
                    </Text>
                </TouchableOpacity>

                <Image
                    style={{ marginTop: 20  }}
                    source={require("../../../assets/images/manual-igreja.webp")}
                />
                <Text 
                style= {{ 
                    color: "#fff",
                    fontSize: 20
                }}
                >
                    Manual da Igreja - R$28,00
                </Text>
                <TouchableOpacity
                    title="Ir para Carrinho"
                    onPress={() => navigation.navigate("Carrinho")}
                >
                    <Text 
                    style= {{ 
                        color: "#fff",
                        fontSize: 15,
                        paddingBottom:10
                    }}
                    >
                        Adicionar ao carrinho
                    </Text>
                </TouchableOpacity>

                <Image
                    style={{ marginTop: 20  }}
                    source={require("../../../assets/images/arauto.webp")}
                />
                <Text 
                style= {{ 
                    color: "#fff",
                    fontSize: 20
                }}
                >
                    O Arauto - R$20,00
                </Text>
                <TouchableOpacity
                    title="Ir para Carrinho"
                    onPress={() => navigation.navigate("Carrinho")}
                >
                    <Text 
                    style= {{ 
                        color: "#fff",
                        fontSize: 15,
                        paddingBottom:10
                    }}
                    >
                        Adicionar ao carrinho
                    </Text>
                </TouchableOpacity>

                <Image
                    style={{ marginTop: 20  }}
                    source={require("../../../assets/images/livrete.webp")}
                />
                <Text 
                style= {{ 
                    color: "#fff",
                    fontSize: 20
                }}
                >
                    Livrete Trimestral - R$15,00
                </Text>
                <TouchableOpacity
                    title="Ir para Carrinho"
                    onPress={() => navigation.navigate("Carrinho")}
                >
                    <Text 
                    style= {{ 
                        color: "#fff",
                        fontSize: 15,
                        paddingBottom:10
                    }}
                    >
                        Adicionar ao carrinho
                    </Text>
                </TouchableOpacity>
 
            </ScrollView>               
        </View>
    );
}
