import axios from "axios";
import React, { createContext, useContext, useState } from "react";
interface AuthContextType {
  user: User | null;
  userId: string | null;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

interface User {
  email: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<string | null>(
    localStorage.getItem("userId")
  );
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const register = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });
      setUser({ email });
      return true;
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  };
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });
      const { token } = response.data;
      setToken(token);
      setUserId(response.data.user._id);

      localStorage.setItem("token", token);
      localStorage.setItem("userId", response.data.user._id);

      setUser({ email });
      return true;
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  };

  const logout = (): void => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{ user, userId, token, login, logout, register, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
