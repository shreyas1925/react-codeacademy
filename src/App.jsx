import React from 'react'
import Counter from "./screens/Counter"
import Todo from './screens/Todo'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App