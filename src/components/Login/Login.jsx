import { useState } from 'react';
import { login } from '../../services/login'


async function doLogin(user, password, setStatus) {
  try {
    const response = await login(user, password)
    response && setStatus('logged')
  } catch (err) {
    setStatus(err.response.data)
  }
}


function Login({register}) {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState(null)

  return (
    <div>
      <h1>Login</h1>

      <div>
        <label>
          Usuário
          <input onChange={(event) => setUser(event.target.value)} value={user} />
        </label>
        <label>
          Senha
          <input onChange={(event) => setPassword(event.target.value)} value={password} />
        </label>
        <button onClick={() => doLogin(user, password, setStatus)}>Login</button>
      </div>
      <p>{status}</p>
      <button onClick={() => register()}>Registre-se</button>
    </div>
  )
}



export default Login