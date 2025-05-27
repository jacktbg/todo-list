import styles from "../../styles/taskTableHeader.module.css"
import { useTaskStore } from "../../../../stores/useStore"
import { Ravn } from "../../../icons/Icons"

export const TaskTableHeader = () => {
  const filterCompleted = useTaskStore(
    (state) => state.filterCompleted
  )
  const toggleTheme = useTaskStore(
    (state) => state.toggleTheme
  )
  const theme = useTaskStore((state) => state.theme)

  const setFilter = useTaskStore((state) => state.setFilter)
  const inactive: string = `${styles.titles} ${styles["titles--inactive"]} `
  const active: string = `${styles.titles}`
  return (
    <div className={styles.titlesWrapper}>
      <div
        className={styles.titleContainer}
        onClick={() => setFilter(false)}
      >
        <h1 className={filterCompleted ? inactive : active}>
          Task List
        </h1>
      </div>
      <div
        className={styles.iconContainer}
        onClick={() =>
          toggleTheme(theme === "light" ? "dark" : "light")
        }
      >
        <Ravn width={"50%"} />
      </div>
      <div
        className={styles.titleContainer}
        onClick={() => setFilter(true)}
      >
        <h2 className={filterCompleted ? active : inactive}>
          Completed List
        </h2>
      </div>
    </div>
  )
}
