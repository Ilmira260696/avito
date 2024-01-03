import s from './Layout.module.css'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <header className={s.header}>
          <nav className={s.headerNav}>
            <button className={s.headerBtn}>Вход в личный кабинет</button>
          </nav>
        </header>
        <Outlet />
        <footer className={s.footer}>
          <div className={s.footerContainer}>
            <div className={s.footerImg}>
              <a href="" target="_self">
                <img src="img/icon_01.png" alt="home" />
              </a>
            </div>
            <div className={s.footerImg}>
              <a href="" target="_self">
                <img src="img/icon_02.png" alt="home" />
              </a>
            </div>
            <div className={s.footerImg}>
              <a href="" target="_self">
                <img src="img/icon_03.png" alt="home" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
export default Layout()
