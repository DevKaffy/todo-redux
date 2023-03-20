import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <h1>Todo</h1>
     <form>
      <input type="text" placeholder='add todo' />
      <button>Add</button>
     </form>
    </div>
  )
}

export default App
