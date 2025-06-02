import { Modal } from "../../../../../../components/Modal"
import { TaskForm } from "../../../../../../components/TaskForm"
import { useModalStore } from "../../../../stores/useStore"
import styles from "../../../../styles/addButton.module.css"
import { PlusIcon } from "../../../icons/Icons"
export const AddButton = () => {
  const setOpen = useModalStore((state) => state.setOpen)
  return (
    <>
      <button
        className={styles.button}
        onClick={() => setOpen(true)}
      >
        <PlusIcon
          width="50%"
          height="50%"
          color="var(--lc-main)"
        />
      </button>
      <Modal>
        <TaskForm />
      </Modal>
    </>
  )
}
