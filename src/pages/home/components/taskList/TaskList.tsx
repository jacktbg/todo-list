import styles from "../../styles/taskList.module.css"
import { TaskTableBody } from "./components/taskTableBody/TaskTableBody"
import { TaskTableHeader } from "./components/taskTableHeader/TaskTableHeader"

export const TaskList: React.FC = () => {
  return (
    <main className={styles.taskList}>
      <TaskTableHeader />
      <TaskTableBody />
    </main>
  )
}
