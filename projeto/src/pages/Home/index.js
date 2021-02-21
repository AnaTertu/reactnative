import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Home(props) {
    const { navigation } = props;

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                alignText: "center",
                justifyContent: "center",
                backgroundColor: "#797",
            }}
        >
            <Image
                style={{ height: 128, width: 128, marginTop: 10 }}
                source={require("../../../assets/images/igrejamae.webp")}
            />
            <Text style={{ color: "#fff", marginTop: 10, fontFamily: "Reggae One, cursive" }}>
                O que é a Ciência Cristã?
            </Text>
            <Text
                style={{
                    flexDirection: "row",
                    color: "#fff",
                    fontSize: 12,
                    width: 400,
                    height: 100,
                }}
            >
                É a Ciência do Cristianismo, {"\n"}a aplicação prática de idéias
                cristãs na vida diária.{"\n"}É tanto um ensino religioso como um
                sistema de cura fundado {"\n"}
                sobre as verdades universais da Bíblia. {"\n"}
                Pessoas de todas as religiões estudam a Ciência Cristã {"\n"}e
                são inspiradas e curadas pelas idéias do seu livro principal,{" "}
                {"\n"}
                Ciência e Saúde com a Chave das Escrituras, de Mary Baker Eddy.
            </Text>
            {"\n"}
            <TouchableOpacity
                style={{
                    width: 90,
                    height: 30,
                    borderRadius: 5,
                    marginTop: 15,
                }}
                title="Ir para Lista"
                onPress={() => navigation.navigate("Lista")}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        color: "#400",
                        fontSize: 20,
                        fontFamily: "Reggae One, cursive"
                    }}
                >
                    Lista
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: 90,
                    height: 30,
                    borderRadius: 5,
                }}
                title="Ir para Loja"
                onPress={() => navigation.navigate("Loja")}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        color: "#400",
                        fontSize: 20,
                        fontFamily: "Reggae One, cursive"
                    }}
                >
                    Loja
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: 90,
                    height: 30,
                    borderRadius: 5,
                }}
                title="Ir para Carrinho"
                onPress={() => navigation.navigate("Carrinho")}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        color: "#400",
                        fontSize: 18,
                        fontFamily: "Reggae One, cursive"
                    }}
                >
                    Carrinho
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => navigation.navigate("Carrinho")}
                style={{
                    borderRadius: 35,
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Ionicons name='ios-add' color='#fff' size={30} />
            </TouchableOpacity>
        </View>
    );
}
