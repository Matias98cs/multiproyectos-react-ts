import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
// import Memotest from "./screens/Memotest"
// import WordsPerMinute from "./screens/WordsPerMinute"
// import Pokemon from "./screens/Pokemon"
// import Home from "./screens/Home"

const Home = lazy(() => import("./screens/Home"));
const Pokemon = lazy(() => import("./screens/Pokemon"));
const Memotest = lazy(() => import("./screens/Memotest"));
const WordsPerMinute = lazy(() => import("./screens/WordsPerMinute"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memotest" element={<Memotest />} />
        <Route path="/wpm" element={<WordsPerMinute />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </Suspense>
  );
}

export default App;
