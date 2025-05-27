import styles from "../../../../styles/taskTableBody.module.css"

const priority: string[] = [
  "Urgent",
  "High",
  "Normal",
  "Low",
]

export const ColumnHead: React.FC = () => {
  return (
    <thead className={styles.thead}>
      <tr className={styles.thead__tr}>
        {priority.map((title, i) => (
          <th
            className={`${styles.th} ${
              styles[`priority--${title.toLowerCase()}`]
            }`}
            key={i}
          >
            {title}
          </th>
        ))}
      </tr>
    </thead>
  )
}
