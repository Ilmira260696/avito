import { useLocation } from 'react-router'
import s from './Header.module.css'
import {
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,

} from '../../../utils/constants'


function Header() {
    const { pathname } = useLocation()

    if (pathname === LOGIN_ROUTE || pathname === REGISTRATION_ROUTE)
        return <></>

    return (
        <header className={s.header}>
            <nav className={s.nav}>
             
            </nav>
        </header>
    )
}

export default Header