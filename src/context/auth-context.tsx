import { User } from "@/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useState } from "react";

export type AuthContextProps = {
    user: User | null;
    setAuth: (authUser: User | null) => void;
    getToken: () => Promise<string | null>;
}

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    async function setAuth(authUser: User | null) {
        if(!authUser) {
            await AsyncStorage.removeItem("token");
            setUser(null);
            return;
        }
        
        setUser(authUser);
        await AsyncStorage.setItem('token', `${authUser?.email}%%${authUser?.password}`);
    }

    async function getToken() {
        return await AsyncStorage.getItem('token');
    }

    return (
        <AuthContext.Provider value={{ user, setAuth, getToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);