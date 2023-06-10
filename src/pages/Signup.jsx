import Input from '../componentes/input'
import Button from '../componentes/button'
import * as C from './StyleSignin'
import { Link} from 'react-router-dom'
import { useState } from 'react'
import logo from '../img/logo.png'
import "swagger-ui-react"

const Signup = () => {
  const [name, setName] = useState('');  
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');
  const [passwordConfirme, setPasswordConfirme] = useState('');
  const [error, setError] = useState('');

 

  const handleSignup = async () => {    

    const userData = {
      name: name,
      username: username,
      password: password,
    };

    

    if (!name || !username || !password) {
      setError('Preencha todos os campos');
      return;
    }if (password !== passwordConfirme) {
      setError('As senhas não são iguais');
      return;
    }if (password.length < 8 || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password) || !/\d/.test(password)) {
      setError('A senha deve conter pelo menor 8 caracteres, 1 letra maiúscula, 1 caractere especial e um número');
      return;
    }
    

    try {

            
      const response = await fetch("https://api.secureme.me/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      
      if (response.ok) {
        
        alert("Cadastro realizado com sucesso!");

      } else {
        // Erro ao cadastrar usuário
        const errorData = await response.json();
        console.log(errorData); // Exibir a resposta da API no console para análise
        alert("Erro ao cadastrar usuário. Verifique os dados e tente novamente.");
      }
    } catch (error) {
      console.log(error);
    }

    
   
  }

 

  return (
    <>
      <C.Container>
        <C.Content>
          <C.Logomarca src={logo} alt='logo' className='logomarca' />

          <C.Label>Inscreva-se</C.Label>

          <Input
            type='text'
            placeholder='Digite seu nome'
            value={name}
            onChange={(e) => [setName(e.target.value), setError('')]}
          />

          <Input
            type='email'
            placeholder='Digite seu email'
            value={username}
            onChange={(e) => [setUsername(e.target.value), setError('')]}
          />
         
          <Input
            type='password'
            placeholder='Digite sua senha'
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError('')]}
          />
           <Input
            type='password'
            placeholder='Confirme sua senha'
            value={passwordConfirme}
            onChange={(e) => [setPasswordConfirme(e.target.value), setError('')]}
          />
          <C.LabelError>{error}</C.LabelError>
          <Button Text='Inscrição' onClick={handleSignup} />
          <C.LabelSignup>
            Já tenho conta.
            <C.Strong>
              <Link to='/signin'>&nbsp; Fazer Login</Link>
            </C.Strong>
          </C.LabelSignup>
        </C.Content>
      </C.Container>
    </>
  )
}

export default Signup
