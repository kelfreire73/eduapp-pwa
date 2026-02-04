import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { FaEnvelope, FaLock } from "react-icons/fa"; // ícones de email e senha

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      setMensagem(`Login realizado com sucesso! 😃 Bem-vindo(a) ${user.email}`);
      setTipoMensagem("sucesso");
    } catch (error) {
      setMensagem(`Erro ao logar: ${error.message}`);
      setTipoMensagem("erro");
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#e0f7fa",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "40px",
        borderRadius: "16px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "30px", color: "#00796b" }}>Login</h2>

        {mensagem && (
          <div style={{
            marginBottom: "20px",
            padding: "12px",
            borderRadius: "8px",
            color: tipoMensagem === "sucesso" ? "#155724" : "#721c24",
            backgroundColor: tipoMensagem === "sucesso" ? "#d4edda" : "#f8d7da",
            border: tipoMensagem === "sucesso" ? "1px solid #c3e6cb" : "1px solid #f5c6cb",
            transition: "all 0.3s"
          }}>
            {mensagem}
          </div>
        )}

        <form onSubmit={handleLogin}>
          {/* Campo de Email */}
          <div style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px"
          }}>
            <FaEnvelope style={{ marginRight: "10px", color: "#00796b" }} />
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "16px"
              }}
            />
          </div>

          {/* Campo de Senha */}
          <div style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px"
          }}>
            <FaLock style={{ marginRight: "10px", color: "#00796b" }} />
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "16px"
              }}
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#00796b",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#004d40";
              e.target.style.transform = "scale(1.03)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#00796b";
              e.target.style.transform = "scale(1)";
            }}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
