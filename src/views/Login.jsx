import {useState} from 'react'
import LoginComponent from '../components/Login/Login'
import NewUser from '../components/Login/NewUser'


function Login() {
  const [page, setPage] = useState('login')

  function register() {
    setPage('NewUser')
  }
  function goToLogin() {
    setPage('login')
  }

  return (
    <div>
      {page === 'login' && <LoginComponent register={register}/>}
      {page === 'NewUser' && <NewUser  goToLogin={goToLogin}/>}
    </div>
  )
}



export default Login