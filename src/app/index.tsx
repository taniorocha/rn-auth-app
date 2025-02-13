import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import Colors from "../../constants/Colors";
import { Link } from "expo-router";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    function handleSigIn() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logoText}>
                    Dev<Text style={{ color: Colors.green }}>App</Text>
                </Text>
                <Text style={styles.slogan}>
                    O futuro da programação
                </Text>
            </View>
            <View style={styles.form}>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder="Digite seu e-mail..."
                        style={styles.input}
                        placeholderTextColor={Colors.silver}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        placeholder="Digite sua senha..."
                        style={styles.input}
                        secureTextEntry
                        placeholderTextColor={Colors.silver}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <Pressable style={styles.button} onPress={handleSigIn}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </Pressable>
                <Link href="/(auth)/signup/page" style={styles.link}>
                    <Text>Ainda não possui uma conta? Cadastre-se</Text>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: statusBarHeight + 34,
        backgroundColor: Colors.zinc
    },
    header: {
        paddingLeft: 14,
        paddingRight: 14
    },
    logoText: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.white,
        marginBottom: 8
    },
    slogan: {
        fontSize: 34,
        color: Colors.white,
        marginBottom: 34
    },
    form: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingTop: 24,
        paddingLeft: 14,
        paddingRight: 14
    },
    label: {
        color: Colors.zinc,
        marginBottom: 4
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingTop: 14,
        paddingBottom: 14
    },
    button: {
        backgroundColor: Colors.green,
        paddingTop: 14,
        paddingBottom: 14,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        borderRadius: 8
    },
    buttonText: {
        color: Colors.white,
        fontWeight: "bold"
    },
    link: {
        marginTop: 16,
        textAlign: "center"
    }
});