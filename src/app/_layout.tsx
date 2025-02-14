import { AuthProvider, useAuth } from "@/context/auth-context";
import { router, Stack } from "expo-router";
import { useEffect } from "react";
import Api from "../../constants/Api";
import { User } from "@/types/user";

export default function RootLayout() {
    return (
        <AuthProvider>
            <MainLayout />
        </AuthProvider>
    )
}

function MainLayout() {
    const { setAuth, getToken } = useAuth();

    useEffect(() => {
        handleAuthUser();
    }, []);

    async function handleAuthUser() {
        const token = await getToken();
        if (!token) {
            setAuth(null);
            router.replace("/(auth)/signin/page");
            return;
        }

        // here is just an example, if the token was a JWT, it cold be just sent to the refresh endpoint to get a newer one
        let email = token.split("%%")[0];
        let password = token.split("%%")[1];

        const result: User[] = await fetch(`${Api.url}/users?email=${email}&password=${password}`)
            .then(x => x.status === 200 ? x.json() : null);

        if (!result[0]) {
            setAuth(null);
            router.replace("/(auth)/signin/page");
            return;
        }

        setAuth(result[0]);
        router.replace("/(panel)/profile/page");
    }

    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="(auth)/signin/page"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="(auth)/signup/page"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="(panel)/profile/page"
                options={{ headerShown: false }}
            />
        </Stack>
    )
}