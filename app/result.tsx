import { Colors } from "@/constants/Constants";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ActivityIndicator, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { shuffle } from "lodash";
import Header from "@/Components/Header";
import { useState } from "react";


export default function ResultScreen() {
    const router = useRouter()
    const [isReady, setIsReady] = useState(false)
    let { receita, jogadores }: { receita: string, jogadores: string } = useLocalSearchParams<any>()

    // let jogadoresSorteados: string[] = []
    const [jogadoresSorteados, setJogadoresSorteiados] = useState<string[]>([...shuffle(JSON.parse(jogadores || "[]"))])

    if (receita && jogadores) {
        setTimeout(() => {
            setIsReady(true);
        }, 1.5 * 1000);
    }

    return (
        <View style={style.container}>
            {
                isReady === false ?
                    <ActivityIndicator size="large" style={{ margin: "auto" }} />
                    :
                    <>
                        <Header />
                        <TouchableOpacity onPress={() => router.replace("/main")}>
                            <Text style={style.btn}>voltar</Text>
                        </TouchableOpacity>
                        <View style={[style.box]}>
                            <View>
                                <Text style={[{ textAlign: "center", borderBottomColor: "#000", borderWidth: 3, borderColor: "#0000", marginInline: -10, paddingBottom: 5 }]}>Estatisticas para o prêmio de <Text style={{ fontWeight: "bold" }}>{receita}</Text> unidades</Text>
                            </View>
                            <ScrollView>
                                {
                                    jogadoresSorteados.length === 2 ? (jogadoresSorteados.map((jogador, index) => {
                                        switch (index) {
                                            case 0:
                                                return <Text key={index} style={style.jogadores}>🏆🥇 {jogador} =&gt; {(parseInt(receita) * 0.5).toFixed(0)} unidades</Text>
                                            default:
                                                return <Text key={index} style={style.jogadores}>❌❌ {jogador} =&gt; {(parseInt(receita) * 0).toFixed(0)}</Text>
                                        }
                                    }))
                                        :
                                        (jogadoresSorteados.map((jogador, index) => {
                                            switch (index) {
                                                case 0:
                                                    return <Text key={index} style={style.jogadores}>🏆🥇 {jogador} =&gt; {(parseInt(receita) * 0.5).toFixed(0)} unidades</Text>
                                                case 1:
                                                    return <Text key={index} style={style.jogadores}>💰🥈 {jogador} =&gt; {(parseInt(receita) * 0.3).toFixed(0)} unidades</Text>
                                                case 2:
                                                    return <Text key={index} style={style.jogadores}>🪙🥉 {jogador} =&gt; {(parseInt(receita) * 0.2).toFixed(0)} unidades</Text>
                                                default:
                                                    return <Text key={index} style={style.jogadores}>❌❌ {jogador} =&gt; {(parseInt(receita) * 0).toFixed(0)} unidades</Text>
                                            }
                                        }))
                                }
                            </ScrollView>
                        </View>
                        <Image style={style.image} source={require("@/assets/images/estatisticas.png")} />
                    </>
            }
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.Background,
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    box: {
        marginBlock: 20,
        marginTop: 50,
        backgroundColor: "rgba(255, 238, 162, 1)",
        width: "90%",
        maxWidth: 300,
        minWidth: 250,
        alignSelf: "center",
        padding: 10,
        borderRadius: 10,
        textAlign: "center"
    },
    btn: {
        backgroundColor: "rgba(12, 139, 0, 0.68)",
        alignSelf: "center",
        fontSize: 18,
        marginBottom: 4,
        padding: 5,
        borderRadius: 10,
        minWidth: 100,
        textAlign: "center"
    },
    jogadores: {
        textAlign: "center",
        marginBlock: 3
    },
    image: {
        width: 200,
        height: 200,
        marginTop: Platform.OS === "android" ? 70 : 0
    }
})