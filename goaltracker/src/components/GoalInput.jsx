import {useState} from 'react'

const GoalInput = ({onAdd}) => {
    const [input,setInput]=useState("")
const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput("");
    }
  };
  return (
    <div>
       <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="flex-1 border border-gray-300 p-2 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a goal..."
      />
      <button className="bg-blue-500 text-white px-4 rounded">Add</button>
    </form>
    </div>
  )
}

export default GoalInput
