import Header from "@/Components/Header";
import { Colors } from "@/constants/Constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Platform, Alert, Image } from "react-native";
import Modal from "react-native-modal";

export default function HomeScreen() {
    const router = useRouter()
    const [jogadores, setJogadores] = useState<string[]>([]);
    const [receita, setReceita] = useState<string>("")
    const [isVisibleModal, setIsVisibleModal] = useState(false)
    const [newPlayerName, setNewPlayerName] = useState("")


    const adicionarJogador = (jogador: string): void => {
        if (jogador.length === 0) {
            console.log("digite o nome do jogador");
        } else {
            setJogadores((prevState) => [...prevState, jogador])
        }
    }

    const sortear = () => {

        if (isNaN(parseInt(receita)) === true || receita.includes(" ")) {
            return Alertar({ type: "aviso", message: "Coloque uma receita válida" })
        }

        if (jogadores.length < 2) {
            return Alertar({ type: "aviso", message: "Adicione mais jogadores para poderes fazer o sorteio" })
        }

        router.push({
            pathname: "/result",
            params: { receita: receita, jogadores: JSON.stringify(jogadores) }
        })
    }

    const Alertar = ({ type, message }: { type: "aviso" | "sucesso" | "erro", message: string }) => {
        switch (Platform.OS) {
            case "web":
                window.alert(message)
                break;

            default:
                Alert.alert(type.toUpperCase(), message, [{ text: "ok" }], { cancelable: false, userInterfaceStyle: "dark" })
                break;
        }
    }

    return (
        <View style={style.container}>
            <Header />
            <View style={style.box}>
                <Text style={{ textAlign: "center", fontSize: 20, paddingBottom: 5 }}>Jogadores</Text>
                <ScrollView style={style.jogadores}>
                    {jogadores && jogadores.map((jogador, index) => <Text key={index} style={style.jogador}>{jogador}</Text>)}
                </ScrollView>
                <View style={style.btnContainer}>
                    <TouchableOpacity onPress={() => setJogadores((prevState) => prevState.slice(0, -1))}>
                        <Text style={style.boxButton}>Remover</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setJogadores(prevState => [])}>
                        <Text style={style.boxButton}>Limpar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsVisibleModal(true)}>
                        <Text style={style.boxButton}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={style.textInputView}>
                <Text style={{ fontWeight: "bold" }}>Receita:</Text>
                <TextInput onChangeText={(text) => setReceita(text)}
                    style={style.textInput}
                    placeholderTextColor="rgba(34, 34, 51, 0.45)"
                    placeholder="Digite aqui a sua receita"
                    value={receita}
                    keyboardType="decimal-pad" />
            </View>

            <TouchableOpacity style={{ maxWidth: 100, alignSelf: "center" }} onPress={() => sortear()}>
                <Text style={style.btn}><Image source={require("@/assets/images/lista.png")} style={{ width: 20, height: 20 }} /> Sortear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ maxWidth: 100, alignSelf: "center" }} onPress={() => router.push("/about")}>
                <Text style={style.btn}><MaterialCommunityIcons name="information" size={20} /> Sobre</Text>
            </TouchableOpacity>

            <Modal
                isVisible={isVisibleModal}
                animationIn="bounceIn"
                animationOut="bounceOut"
                backdropOpacity={0.9}
            >
                <View style={style.modalAddPlayer}>
                    <TextInput
                        placeholder="Digite o nome"
                        keyboardType="default"
                        style={{ padding: 20, textAlign: "center", outline: "0", boxShadow: "0 0 3px 0px,inset 0 0 3px 0px", borderRadius: 20 }}
                        autoFocus
                        value={newPlayerName}
                        onChangeText={(text) => setNewPlayerName(text)}
                    />
                    <TouchableOpacity onPress={() => {
                        if (jogadores.some((player) => player === newPlayerName.trim())) {
                            return Alertar({ type: "erro", message: "Já existe um jogador com esse nome" })
                        }

                        if (newPlayerName === "") {
                            return Alertar({ type: "erro", message: "Escreve un nome para poderes adicionar aos jogadores" })
                        }

                        adicionarJogador(newPlayerName.trim())
                        setIsVisibleModal(false)
                        setNewPlayerName("")
                    }}>
                        <Text style={{ backgroundColor: "#9a9c23ff", padding: 8, borderRadius: 10, margin: 5 }}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Background,
        paddingTop: 10
    },
    box: {
        marginBlock: 20,
        backgroundColor: "rgba(255, 238, 162, 1)",
        width: "90%",
        maxWidth: 300,
        minWidth: 250,
        alignSelf: "center",
        padding: 10,
        borderRadius: 10
    },
    jogadores: {
        backgroundColor: "grey",
        height: 100,
        width: "100%",
        borderRadius: 10,
        alignSelf: "center",
        padding: 10
    },
    jogador: {
        textAlign: "center"
    },
    btnContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        margin: 10
    },
    boxButton: {
        fontSize: 16,
        backgroundColor: "rgba(85, 85, 85, 0.45)",
        marginTop: 0,
        padding: 3,
        borderRadius: 5
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
    textInput: {
        padding: 5,
        outlineWidth: 0,
        textAlign: "center"
    },
    textInputView: {
        maxWidth: 300,
        alignSelf: "center",
        marginBlockEnd: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    modalAddPlayer: {
        backgroundColor: "#fff",
        minWidth: 300,
        maxWidth: 500,
        margin: "auto",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    }
})