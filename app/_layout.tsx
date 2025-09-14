import { Stack } from "expo-router";

export default function _Layout() {


    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name="index"
                options={{
                    title: undefined,
                    animation: "fade",
                    headerShown: false
                }} />
            <Stack.Screen
                name="main"
                options={{
                    title: "Principal",
                    animation: "fade"
                }} />
            <Stack.Screen
                name="about"
                options={{
                    title: "Sobre",
                    animation: "fade"
                }} />
            <Stack.Screen
                name="result"
                options={{
                    title: "Resultado",
                    animation: "fade"
                }} />
        </Stack>
    )
}