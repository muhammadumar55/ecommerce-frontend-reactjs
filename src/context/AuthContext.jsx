import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [token, setToken] = useState(
        localStorage.getItem("token") || null
    );

    /* Attach token to axios */
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${token}`;

            fetchUser();
        }
    }, [token]);

    /* Fetch authenticated user */
    const fetchUser = async () => {
        try {
            const response = await axios.get(
                `/api/user`
            );
            setUser(response.data);
        } catch (error) {
            console.error("Not authenticated");
            logout();
        }
    };

    /* Register */
    const register = async (formData) => {
        const response = await axios.post(
            `/api/register`,
            formData
        );

        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
    };

    /* Login */
    const login = async (formData) => {
        const response = await axios.post(
            `/api/login`,
            formData
        );

        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
    };

    /* Logout */
    const logout = async () => {
        try {
            await axios.post(`/api/logout`);
        } catch (error) { }

        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];

        window.location.href = "/";
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                register,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};