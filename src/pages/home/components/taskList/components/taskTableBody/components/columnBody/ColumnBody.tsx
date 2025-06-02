import styles from "../../../../styles/taskTableBody.module.css"
import { useTaskStore } from "../../../../../../stores/useStore"
import type { Priority } from "../../../../../../types/task"
import { Task } from "../task/Task"

const priorities: Priority[] = [
  "Urgent",
  "High",
  "Normal",
  "Low",
]

export const ColumnBody: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks)
  const searchTerm = useTaskStore(
    (state) => state.searchTerm
  )

  const filterCompleted = useTaskStore(
    (state) => state.filterCompleted
  )

  let dataFiltered = tasks.filter(
    (t) => t.completed === filterCompleted
  )

  if (searchTerm.trim() !== "") {
    const lower = searchTerm.toLowerCase()
    dataFiltered = dataFiltered.filter(
      (task) =>
        task.name.toLowerCase().includes(lower) ||
        task.assignee.toLowerCase().includes(lower)
    )
  }

  return (
    <tbody className={styles.tbody}>
      {priorities.map((priority) => {
        const filtered = dataFiltered.filter(
          (t) => t.priority === priority
        )
        return (
          <tr
            key={priority}
            className={styles.tbody__tr}
            aria-label={`${priority} column`}
          >
            {filtered.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </tr>
        )
      })}
    </tbody>
  )
}
