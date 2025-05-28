import styles from "../styles/taskForm.module.css"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  useModalStore,
  useTaskStore,
} from "../pages/home/stores/useStore"
import { v4 as uuidv4 } from "uuid"
import { dateFormatter } from "../utilities/dateFormatter"
import { useRef } from "react"

const schema = z.object({
  name: z.string().min(5).max(30),
  priority: z.enum(["Urgent", "High", "Normal", "Low"]),
  points: z.number().int().min(1).max(20),
  assignee: z.enum([
    "Daniel",
    "Emmanuel",
    "Gustavo",
    "Jack",
  ]),
  date: z.string().refine((dateStr) => {
    const selectedDate = new Date(dateStr)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    selectedDate.setHours(0, 0, 0, 0)
    return selectedDate > today
  }, "Date must be in the future"),
})

type TaskFormSchema = z.infer<typeof schema>

export const TaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask)
  const setOpen = useModalStore((state) => state.setOpen)
  const dateInputRef = useRef<HTMLInputElement>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskFormSchema>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: TaskFormSchema) => {
    addTask({
      ...data,
      id: uuidv4(),
      completed: false,
      date: dateFormatter(data.date),
    })
    reset()
    setOpen(false)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <div className={styles.nameContainer}>
        <input
          className={styles.name}
          {...register("name")}
          placeholder="Task Name"
        />
        <p className={styles.error}>
          {errors.name?.message}
        </p>
      </div>

      <div className={styles.selectorsContainer}>
        <div className={styles.inputContainer}>
          <input
            type="number"
            {...register("points", {
              valueAsNumber: true,
            })}
            placeholder="1 - 20"
          />

          <p className={styles.error}>
            {errors.points?.message}
          </p>
        </div>

        <div className={styles.optionContainer}>
          <select {...register("priority")}>
            <option value="">Priority</option>
            <option value="Urgent">Urgent</option>
            <option value="High">High</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className={styles.optionContainer}>
          <select {...register("assignee")}>
            <option value="">Assignee</option>
            <option value="Daniel">Daniel</option>
            <option value="Emmanuel">Emmanuel</option>
            <option value="Gustavo">Gustavo</option>
            <option value="Jack">Jack</option>
          </select>
        </div>

        <div
          className={styles.optionContainer}
          onClick={() => dateInputRef.current?.showPicker()}
        >
          <input
            type="date"
            {...register("date")}
            ref={(e) => {
              register("date").ref(e)
              dateInputRef.current = e
            }}
          />
          <p className={styles.error}>
            {errors.date?.message}
          </p>
        </div>
      </div>

      <div className={styles.buttonsContainer}>
        <button
          className={styles.cancel}
          onClick={() => setOpen(false)}
        >
          Cancel Task
        </button>
        <button type="submit" className={styles.create}>
          Create Task
        </button>
      </div>
    </form>
  )
}
