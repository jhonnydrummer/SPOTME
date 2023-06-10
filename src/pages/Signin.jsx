import Input from "../componentes/input";
import Button from "../componentes/button";
import * as C from "./StyleSignin";
import { Link, useNavigate } from "react-router-dom";
import { useState} from "react";
import logo from "../img/logo.png";
import "swagger-ui-react";



const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Preencha todos os campos");
      return;
    }

   
    const userData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch(
        "https://api.secureme.me/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        alert("Login efetuado com sucesso!");
        console.log(response);
        localStorage.setItem("token", token);

        
          navigate('/home');
        
      } else {
        setError("Usuário ou senha inválidos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <C.Container>
        <C.Content>
          <C.Logomarca src={logo} alt="logo" />

          <C.LabelSignup>
            Não tem conta.
            <C.Strong>
              <Link to="/signup">&nbsp; Registre-se</Link>
            </C.Strong>
          </C.LabelSignup>

          <Input
            type="email"
            placeholder="Digite seu email"
            value={username}
            onChange={(e) => [setUsername(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          />
          <C.LabelError>{error}</C.LabelError>
          <Button Text="Login" onClick={handleLogin} />
        </C.Content>
      </C.Container>
    </>
  );
};

export default Signin;
