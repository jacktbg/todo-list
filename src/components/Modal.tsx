import ReactDOM from "react-dom"
import styles from "../styles/modal.module.css"
import { useModalStore } from "../pages/home/stores/useStore"

interface ModalProps {
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({
  children,
}) => {
  const open = useModalStore((state) => state.open)
  const modalRoot = document.getElementById("modal-root")

  if (!modalRoot) return null
  if (!open) return null
  return ReactDOM.createPortal(
    <div className={styles.overlay}>{children}</div>,
    modalRoot
  )
}
