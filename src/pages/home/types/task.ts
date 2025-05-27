export type Priority = "Urgent" | "High" | "Normal" | "Low"

export interface TaskInterface {
  id: string
  name: string
  priority: Priority
  points: number
  assignee: string
  date: string
  completed: boolean
}
