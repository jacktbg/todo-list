import React from "react"
import styles from "../../../../styles/task.module.css"
import type { TaskInterface } from "../../../../../../types/task"
import { useTaskStore } from "../../../../../../stores/useStore"
import { ThreeDotsIcon } from "../../../../../icons/Icons"

interface TaskProps {
  task: TaskInterface
}

export const Task: React.FC<TaskProps> = React.memo(
  ({ task }) => {
    const { name, points, assignee, date, completed } = task
    const toogleCompleted = useTaskStore(
      (state) => state.toggleCompleted
    )

    return (
      <td
        className={`${styles.task} ${
          completed ? styles.completed : ""
        }`}
      >
        <div className={styles.row1}>
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={completed}
              onChange={() => toogleCompleted(task.id)}
            />
          </div>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.points}>{points}</p>
          <div className={styles.icon}>
            <ThreeDotsIcon
              height="100%"
              width="20%"
              color="var(--lc-secondary-text)"
            />
          </div>
        </div>
        <div className={styles.row2}>
          <p className={styles.assignee}>{assignee}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </td>
    )
  }
)
