import axios from "axios";
import api from "../api";

export const useRegistration = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post("http://localhost:3000/registration", {
    name: name,
    email: email,
    password: password,
  });
  return response;
};

export const useLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await axios.post("http://localhost:3000/login", {
    email: email,
    password: password,
  });
  return response;
};

export const useCheckAuth = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await api.post("http://localhost:3000/checkAuth", {
    email: email,
    password: password,
  });
  return response;
};
