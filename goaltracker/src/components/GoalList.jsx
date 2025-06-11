import React from 'react'

const GoalList = ({goals,onToggle,onDelete}) => {
  return (
    
      <ul className="space-y-2">
      {goals.map((goal, index) => (
        <li
          key={index}
          className={`flex justify-between items-center p-2 rounded border ${
            goal.done ? "bg-green-100 line-through" : "bg-gray-50"
          }`}
        >
          <span>{goal.text}</span>
          <div className="space-x-2">
            <button
              onClick={() => onToggle(index)}
              className="text-sm text-green-600 hover:underline"
            >
              {goal.done ? "Undo" : "Done"}
            </button>
            <button
              onClick={() => onDelete(index)}
              className="text-sm text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}


export default GoalList
