import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView } from "react-native";
import Colors from "../../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    function handleSigUp() {
        console.log({
            name,
            email,
            password
        });
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Pressable
                            style={styles.backButton}
                            onPress={() => router.back()}
                        >
                            <Ionicons name="arrow-back" size={24} color={Colors.white} />
                        </Pressable>
                        <Text style={styles.logoText}>
                            Dev<Text style={{ color: Colors.green }}>App</Text>
                        </Text>
                        <Text style={styles.slogan}>
                            Criar uma conta
                        </Text>
                    </View>
                    <View style={styles.form}>
                        <View>
                            <Text style={styles.label}>Nome completo</Text>
                            <TextInput
                                placeholder="Nome completo..."
                                style={styles.input}
                                placeholderTextColor={Colors.silver}
                                value={name}
                                onChangeText={setName}
                            />
                        </View>
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
                        <Pressable style={styles.button} onPress={handleSigUp}>
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 34,
        backgroundColor: Colors.zinc
    },
    header: {
        paddingLeft: 14,
        paddingRight: 14
    },
    backButton: {
        backgroundColor: "rgba(255,255,255,0.55)",
        alignSelf: "flex-start",
        padding: 8,
        borderRadius: 8,
        marginBottom: 8
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
    }
});