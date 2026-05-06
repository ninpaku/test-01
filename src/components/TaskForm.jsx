import { useState } from 'react'

export default function TaskForm({ onAddTask }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onAddTask(input)
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="新しいタスクを入力..."
        className="task-input"
      />
      <button type="submit" className="add-btn">追加</button>
    </form>
  )
}
