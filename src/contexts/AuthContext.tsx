import React, { createContext, useState, ReactNode } from 'react';

// Defina a interface para o valor do contexto
interface AuthContextType {
    auth: boolean;
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

// Crie o Contexto com um valor padrão inicial (opcionalmente undefined)
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Interface para os props do AuthProvider
interface AuthProviderProps {
    children: ReactNode; // Define o tipo de children
}

// Componente Provider para passar os valores para os children
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState(false);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
