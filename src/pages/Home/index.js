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
                style={{ height: 100, width: 100 }}
                source={require("../../../assets/images/igrejamae.webp")}
            />
            <Text style={{ color: "#fff", marginTop: 10, paddingBottom: 20}}>
                O que é a Ciência Cristã?
                {"\n"}
            </Text>
            <Text
                style={{
                    flexDirection: "row",
                    color: "#fff",
                    fontSize: 12,
                    alignText: "center",
                    paddingLeft: 30,
                    paddingRight:30,
                    paddingTop: 30
                }}
            >
                É a Ciência do Cristianismo, a aplicação prática de idéias
                cristãs na vida diária. É tanto um ensino religioso como um
                sistema de cura fundado sobre as verdades universais da Bíblia. {"\n"}
                Pessoas de todas as religiões estudam a Ciência Cristã e
                são inspiradas e curadas pelas idéias do seu livro principal,
                {"\n"}
            </Text>
            <Text
                style={{
                    flexDirection: "row",
                    color: "#fff",
                    fontSize: 12,
                    alignText: "center",
                    paddingLeft: 30,
                    paddingRight:30,
                    paddingTop: 10
                }}
            >
                Ciência e Saúde com a Chave das Escrituras, de Mary Baker Eddy.
            </Text>
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
                    }}
                >
                    Carrinho
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => navigation.navigate("Loja")}
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
