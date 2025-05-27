import { useEffect } from "react"
import { Header } from "./components/header/Header"
import { TaskList } from "./components/taskList/TaskList"
import style from "./styles/home.module.css"
import { useTaskStore } from "./stores/useStore"

export const Home: React.FC = () => {
  const theme = useTaskStore((state) => state.theme)

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    )
  }, [theme])

  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <Header />
        <div className={style.bodyWrapper}>
          <TaskList />
        </div>
      </div>
    </div>
  )
}
