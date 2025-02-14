import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from "react-native";
import Colors from "../../../../constants/Colors";
import { Link, router } from "expo-router";
import Constants from "expo-constants";
import Api from "../../../../constants/Api";
import { User } from "@/types/user";
import { useAuth } from "@/context/auth-context";

const statusBarHeight = Constants.statusBarHeight;

export default function Signin() {
    const { setAuth } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSigIn() {
        if (email == '') {
            Alert.alert("Preencha o e-mail!");
            return;
        }

        if (password == '') {
            Alert.alert("Preencha a senha!");
            return;
        }

        setLoading(true);
        const result: User[] = await fetch(`${Api.url}/users?email=${email}&password=${password}`)
            .then(x => x.status === 200 ? x.json() : null);

        if (!result[0]) {
            Alert.alert("Email e/ou senha incorretos!");
            setLoading(false);
            return;
        }

        setAuth(result[0]);
        setLoading(false);
        router.replace("/(panel)/profile/page");
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
                        autoCapitalize="none"
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
                    <Text style={styles.buttonText}>
                        {loading ? "Carregando..." : "Acessar"}
                    </Text>
                </Pressable>
                <Link href="/(auth)/signup/page" style={styles.link}>
                    <Text>Ainda não possui uma conta? <Text style={{color: Colors.green}}>Cadastre-se</Text></Text>
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