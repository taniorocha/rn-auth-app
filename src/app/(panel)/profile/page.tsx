import { useAuth } from "@/context/auth-context";
import { router } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Profile() {
    const { user, setAuth } = useAuth();

    async function handleSignout() {
        setAuth(null);
        router.replace("/(auth)/signin/page");
    }

    return (
        <View style={styles.container}>
            <Text>Bem vindo {user?.name}</Text>
            <Button title="Deslogar" onPress={handleSignout} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});