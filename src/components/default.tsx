import { View, Text, StyleSheet } from "react-native";

export default function Default() {
    return (
        <View style={styles.container}>
            <Text>Página Default</Text>
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