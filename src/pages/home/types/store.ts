import type { TaskInterface } from "./task"

export type TaskStoreState = {
  searchTerm: string
  tasks: TaskInterface[]
  theme: "light" | "dark"
  filterCompleted: boolean
}

export type TaskStoreActions = {
  addTask: (task: TaskInterface) => void
  toggleTheme: (theme: "light" | "dark") => void
  toggleCompleted: (taskName: string) => void
  setFilter: (boolean: boolean) => void
  setSearchTerm: (term: string) => void
}
