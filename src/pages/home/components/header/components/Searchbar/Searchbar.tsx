import styles from "../../../../styles/searchbar.module.css"
import { useTaskStore } from "../../../../stores/useStore"
import { MagnifyingGlassIcon } from "../../../icons/Icons"

export const Searchbar: React.FC = () => {
  const setSearchTerm = useTaskStore(
    (state) => state.setSearchTerm
  )
  return (
    <div className={styles.searchbar}>
      <div className={styles.icon}>
        <MagnifyingGlassIcon
          height="50%"
          width="50%"
          color="var(--lc-secondary-text)"
        />
      </div>
      <input
        type="text"
        placeholder="Search task or assignee"
        className={styles.input}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}
