import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080"
});

export function listarProdutos() {
    return api.get("/produto");
}

export function cadastrarProduto(formData) {
    return api.post("/produto", formData)
}