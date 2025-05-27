import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Data } from "../data/data"
import type {
  TaskStoreActions,
  TaskStoreState,
} from "../types/store"

export const useTaskStore = create<
  TaskStoreState & TaskStoreActions
>()(
  persist(
    (set, get) => ({
      searchTerm: "",
      tasks: Data,
      theme: "light",
      filterCompleted: false,

      addTask: (task) =>
        set({
          tasks: [...get().tasks, { ...task }],
        }),

      toggleCompleted: (id) =>
        set({
          tasks: get().tasks.map((t) =>
            t.id === id
              ? { ...t, completed: !t.completed }
              : t
          ),
        }),

      toggleTheme: (theme) => set({ theme }),

      setFilter: (boolean: boolean) =>
        set({ filterCompleted: boolean }),

      setSearchTerm: (searchTerm) =>
        set({ searchTerm: searchTerm }),
    }),
    { name: "task-storage" }
  )
)

type ModalStoreState = {
  open: boolean
}

type ModalStoreAction = {
  setOpen: (boolean: boolean) => void
}
export const useModalStore = create<
  ModalStoreState & ModalStoreAction
>()(
  persist(
    (set) => ({
      open: false,

      setOpen: (boolean) => set({ open: boolean }),
    }),
    { name: "modal-storage" }
  )
)
