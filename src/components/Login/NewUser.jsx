import { useState } from 'react';
import { createUser } from '../../services/login'


async function createNewUser(user, password, confirmedPassword, setMessage) {
  if (user === '' || password === '' || confirmedPassword === '') {
    setMessage('Preencha todos os campos')
    return
  }
  if (password.length < 6) {
    setMessage('Senha deve ter pelo menos 6 caracteres')
    return
  }
  if (password !== confirmedPassword) {
    setMessage('Senhas não conferem')
    return
  }
  const createdUser = await createUser(user, password)
  console.log(createdUser)
  setMessage('Usuário criado')
}


function NewUser({ goToLogin }) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, serConfirmedPassword] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div>
      <h1>New User</h1>
      <div>
        <label>Digite seu email<input value={user} onChange={(event) => setUser(event.target.value)} /></label>
      </div>
      <div>
        <label>Defina sua senha (min. 6 caracteres)<input value={password} onChange={(event) => setPassword(event.target.value)} /></label>
      </div>
      <div>
        <label>Confirme sua senha<input value={confirmedPassword} onChange={(event) => serConfirmedPassword(event.target.value)} /></label>
      </div>
      <button onClick={() => createNewUser(user, password, confirmedPassword, setMessage)}>Criar usuário</button>
      <p>{message}</p>
      <button onClick={() => goToLogin()}>Voltar para Login</button>
    </div>
  )
}



export default NewUser