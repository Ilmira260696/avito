import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router'
import s from './Auth.module.css'
import Input from '../../components/UI/Input/Input'
// import Signup from '../../components/signup'
import Button from '../../components/UI/Button/Button'

export default function Auth() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [name, setName] = useState('')
  const [LastName, setLastName] = useState('')
  const [city, setCity] = useState('')
  const { pathname } = useLocation
  const isLogin = pathname === '/login'
  return (
    <div className={s.wrapper}>
      <div className={s.containerEnter}>
        <div className={s.modalBlock}>
          <form className={s.form} onSubmit={(e) => e.preventDefault()}>
            <div className={s.modalLogo}>
              <Link to="/">
                <img src="/img/logo.svg" alt="logo" />
              </Link>
            </div>
            {!isLogin ? (
              <>
                <Input
                  placeholder="email"
                  value={email}
                  type="text"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <Input
                  placeholder="Пароль"
                  value={password}
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <Input
                  placeholder="Повторите пароль"
                  value={repeatPassword}
                  type="password"
                  onChange={(event) => {
                    setRepeatPassword(event.target.value);
                  }}
                />
                <Input
                  placeholder="Имя(необязательно)"
                  value={name}
                  type="text"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
                <Input
                  placeholder="Фамилия(необязательно)"
                  value={LastName}
                  type="text"
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
                <Input
                  placeholder="Город(необязательно)"
                  value={city}
                  type="text"
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                />
                <Button color={'blue'} >
                  Зарегистрироваться
                </Button>
              </>
            ) : (
              <>
                <Input
                  placeholder="email"
                  value={email}
                  type="text"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <Input
                  placeholder="password"
                  value={password}
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <Button color={'blue'} onClick={() => navigate('/Auth')}>
                  {isLogin ? 'Войти' : 'Зарегистрироваться'}
                </Button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
