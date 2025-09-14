import { Colors } from "@/constants/Constants"
import { useRouter } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default function NotFound() {
    const router = useRouter()

    return (
        <View style={style.container}>
            <Text style={{ fontSize: 30, fontWeight: "700" }}>404</Text>
            <Text>Esta pagina não foi encontrada</Text>
            <Text>Pretende <TouchableOpacity onPress={() => router.back()} ><Text style={style.link} >Voltar na pagina anterior</Text></TouchableOpacity> ou <TouchableOpacity onPress={() => router.replace("/main")}><Text style={style.link}>Ir na pagina iniciar</Text></TouchableOpacity></Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Background,
        paddingTop: 10,
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },
    link: {
        color: "blue",
        textDecorationLine:"underline"
    }
})