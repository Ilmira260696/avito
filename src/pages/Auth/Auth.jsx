import s from './Auth.module.css'
import Input from '../../components/UI/Input/Input'

export default function Auth() {
  return (
    <div className={s.wrapper}>
      <div className={s.containerEnter}>
        <div className={s.modalBlock}>
          <form className={s.form} onSubmit={(e) => e.preventDefault()}>
            <div className={s.modalLogo}>
              <img src="/img/logo.svg" alt="logo" />
            </div>

            <Input placeholder="email" type="text" />
            <Input placeholder="Пароль" type="password" />
            <button>Войти</button>
            <button>Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </div>
  )
}
