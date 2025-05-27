import styles from "../../styles/taskTableBody.module.css"
import { ColumnBody } from "./components/columnBody/ColumnBody"
import { ColumnHead } from "./components/columnHead/ColumnHead"

export const TaskTableBody: React.FC = () => {
  return (
    <table className={styles.table}>
      <ColumnHead />
      <ColumnBody />
    </table>
  )
}
