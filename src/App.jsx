import Home from "./Pages/Home"
import Posts from "./Pages/Post"
import Cont from "./Pages/contact"
import About from "./Pages/about"
import {BrowserRouter,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/contact" element={<Cont/>} />
          <Route path="/about" element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
