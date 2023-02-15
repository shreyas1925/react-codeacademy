import React from 'react'
import Counter from "./screens/Counter"
import Todo from './screens/Todo'
import Blog from './screens/Blog'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App