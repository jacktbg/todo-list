import styles from "../../styles/header.module.css"
import { AddButton } from "./components/addButton/addButton"
import { Searchbar } from "./components/Searchbar/Searchbar"

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Searchbar />
      <AddButton />
    </header>
  )
}
