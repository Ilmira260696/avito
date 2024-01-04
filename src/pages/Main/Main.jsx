import s from './Main.module.css'
import Menu from '../../components/common/Menu/Menu'

function Main() {
  return (
    <div className={s.wrapper}>
    <div className={s.container}>
   
        <main className={s.main}>
            <Menu />
            <div className={s.content}>
                <h1 className={s.title}>Объявления</h1>
          
            </div>
        </main>
    </div>
</div>
  )
}
export default Main()