import { MaterialIcons } from "@expo/vector-icons";
import { ExternalPathString, RelativePathString, useRouter } from "expo-router";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";

export default function Header({ title, backLink }: { title?: string, backLink?: RelativePathString | ExternalPathString | "/about" | `/about?${string}` | `/about#${string}` | "/" | `/?${string}` | `/#${string}` | "/main" | `/main?${string}` | `/main#${string}` | "/../constants/Constants" | `/../constants/Constants?${string}` | `/../constants/Constants#${string}` | "/_sitemap" | `/_sitemap?${string}` | `/_sitemap#${string}` }) {
    const router = useRouter();
    const [loaded] = useFonts({
        "SpaceMono": require("@/assets/fonts/SpaceMono-Regular.ttf")
    })
    return (
        <View style={style.container}>
            <StatusBar animated translucent barStyle="default" />
            {backLink && <TouchableOpacity onPress={() => router.push(backLink)}><Text style={style.goBack}><MaterialIcons size={30} name="arrow-back" /></Text></TouchableOpacity>}
            <Text style={style.title}>{title || "Totoloto"}</Text><Image style={{ width: 32, height: 32 }} source={require("@/assets/images/icon.png")} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#0000",
        marginBlockEnd: 5,
        paddingTop: 30,
        position: "sticky",
        zIndex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
        fontFamily:"SpaceMono"
    },
    goBack: {
        fontSize: 31,
        fontWeight: "bold",
        marginRight: 10,
        padding: 8
    }
})