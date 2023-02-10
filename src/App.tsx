import { Route, Routes } from "react-router-dom"
import Memotest from "./screens/Memotest"
import WordsPerMinute from "./screens/WordsPerMinute"
import Pokemon from "./screens/Pokemon"


function App() {

  return (
    <Routes>
      <Route path="/memotest" element={<Memotest />} />
      <Route path="/wpm" element={<WordsPerMinute />} />
      <Route path="/pokemon" element={<Pokemon />} />

    </Routes>
  )
}

export default App