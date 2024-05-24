import { ReactNode, createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

type contextAuth = {
    token: string | null;
    authenticated: boolean;
    login: (token: string | null) => void;
    logout: (token: string | null) => void;
    user: userDecoded | null;
}

type userDecoded = {
    id: number;
    name: string;
    email: string;
    senha: string;
    exp: number;
}

type typeChildren = {
    children: ReactNode;
}

const AuthUser = createContext<contextAuth>({} as contextAuth);

function AuthProvider({ children }: typeChildren) {

    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const [user, setUser] = useState<userDecoded | null>(null);

    useEffect(() => {
        if (token) {
            try {
                const userDecoded: userDecoded = jwtDecode(token);
                const tokenTime = Date.now() / 1000;
                console.log(userDecoded)
                setUser(userDecoded);
                if (userDecoded.exp > tokenTime) {
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);
                }
            } catch (error) {
                setAuthenticated(false);
                console.log(error);
            }
        } else {
            setAuthenticated(false);
        }
    }, [token])

    function login(token: string | null) {
        localStorage.setItem("token", JSON.stringify(token))
        setToken(token)
    }

    function logout() {

    }

    return (
        <AuthUser.Provider value={{ authenticated, login, logout, token, user }}>
            {children}
        </AuthUser.Provider>
    )
};

export { AuthProvider, AuthUser }