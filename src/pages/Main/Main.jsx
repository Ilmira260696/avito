import s from './Main.module.css'

function Main() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <main className={s.main}>
          <div className={s.content}>
            <h1 className={s.title}>Объявления</h1>
          </div>
        </main>
      </div>
    </div>
  )
}
export default Main()