import {useState}from 'react'
import GoalInput from './components/GoalInput'
import GoalList from './components/GoalList'
const App = () => {
  const [goals,setGoals]=useState([])
  const addGoal=(text)=>{
    setGoals([...goals,{text,done:false}])
  }
  const toggleGoal=(index)=>{
    const updated=goals.map((goal,i)=>
    i==index?{...goal,done:!goal.done}:goal)
 setGoals(updated)
  }
  const deleteGoal=(index)=>{
    setGoals(goals.filter((_,i)=>i !==index))
    }
  
  return (
  
<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">🎯 My Daily Goals</h1>
        <GoalInput onAdd={addGoal} />
        <GoalList goals={goals} onToggle={toggleGoal} onDelete={deleteGoal} />
      </div>
</div>
  
  )
}

export default App
